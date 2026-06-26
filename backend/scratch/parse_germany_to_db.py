import os
import re
import zipfile
import xml.etree.ElementTree as ET
import json
from pymongo import MongoClient

CITY_TO_PROVINCE = {
    'munich': 'Bavaria',
    'berlin': 'Berlin',
    'heidelberg': 'Baden-Württemberg',
    'karlsruhe': 'Baden-Württemberg',
    'aachen': 'North Rhine-Westphalia',
    'darmstadt': 'Hesse',
    'dresden': 'Saxony',
    'bonn': 'North Rhine-Westphalia',
    'cologne': 'North Rhine-Westphalia',
    'erlangen': 'Bavaria',
    'freiburg': 'Baden-Württemberg',
    'hamburg': 'Hamburg',
    'mannheim': 'Baden-Württemberg',
    'stuttgart': 'Baden-Württemberg'
}

def get_docx_paragraphs(path):
    try:
        doc = zipfile.ZipFile(path)
        xml_content = doc.read('word/document.xml')
        root = ET.fromstring(xml_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        paragraphs = []
        for p in root.findall('.//w:p', ns):
            texts = [t.text for t in p.findall('.//w:t', ns) if t.text]
            if texts:
                paragraphs.append(''.join(texts).strip())
        return [p for p in paragraphs if p]
    except Exception as e:
        print(f"Error reading docx {path}: {e}")
        return []

def clean_text(t):
    # remove bullets and extra spaces
    t = re.sub(r'^[•\-\*]\s*', '', t)
    return t.strip()

def parse_fee_to_cad(text_line):
    line_lower = text_line.lower()
    if any(word in line_lower for word in ["no tuition", "free", "€0", "0 eur", "no fees"]):
        return 0
    
    # Check for semester fee pattern or state tuition
    # e.g., €1,500 per semester -> €3,000 per year
    semester_mul = 1
    if "semester" in line_lower and "year" not in line_lower:
        semester_mul = 2
        
    # Extract numbers after €
    numbers = re.findall(r'€\s*([0-9,]+)', text_line)
    if not numbers:
        # try simple numbers
        numbers = re.findall(r'([0-9,]+)\s*(?:eur|euros)', line_lower)
        
    if numbers:
        # Convert first number to integer
        val = int(numbers[0].replace(',', ''))
        annual_eur = val * semester_mul
        # Convert EUR to CAD (approx 1.50)
        return int(annual_eur * 1.50)
    
    return 0

def parse_docx_file(path):
    paras = get_docx_paragraphs(path)
    if not paras:
        return None, []
    
    title = paras[0]
    inst_name = re.split(r' – | - | — ', title)[0].strip()
    
    abbr = ""
    clean_name = inst_name
    if "(" in inst_name:
        match = re.search(r'\((.*?)\)', inst_name)
        if match:
            abbr = match.group(1).strip()
        clean_name = re.sub(r'\(.*?\)', '', inst_name).strip()

    inst = {
        "name": clean_name,
        "abbreviation": abbr,
        "type": "university",
        "city": "",
        "province": "",
        "country": "Germany",
        "campuses": [],
        "website": "",
        "application_portal": "",
        "contacts": {
            "admissions": {},
            "international_students": {},
            "graduate_studies": {}
        },
        "application_fee_cad": 0,
        "intakes": ["Winter (October)", "Summer (April)"], # Defaults for Germany
        "deadlines": {},
        "eligibility": {
            "undergraduate": {},
            "postgraduate": {}
        },
        "scholarships": [],
        "internships": {},
        "campus_life": {},
        "security": {},
        "top_ug_programs": [],
        "top_pg_programs": []
    }

    programs = []
    
    # Separate sections
    step1_paras = []
    step2_paras = []
    step3_paras = []
    
    current_step = 1
    for p in paras[1:]:
        if "STEP 2:" in p:
            current_step = 2
            continue
        elif "STEP 3:" in p:
            current_step = 3
            continue
        
        if current_step == 1:
            step1_paras.append(p)
        elif current_step == 2:
            step2_paras.append(p)
        elif current_step == 3:
            step3_paras.append(p)

    # Parse STEP 1
    # Find City
    for p in step1_paras:
        if p.startswith("•City:") or p.startswith("City:"):
            inst["city"] = clean_text(p.split(":", 1)[1])
            break
            
    city_lower = inst["city"].lower()
    inst["province"] = CITY_TO_PROVINCE.get(city_lower, "Germany State")
    inst["campuses"] = [inst["city"]]

    # Find Website/Application Portal
    for p in step1_paras:
        if "Application Portal" in p:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["application_portal"] = clean_text(parts[1])
        if "International Office" in p:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["contacts"]["international_students"]["website"] = clean_text(parts[1])

    # Find Admissions Contact Info
    email_found = False
    for i, p in enumerate(step1_paras):
        if "Email:" in p and not email_found:
            email_val = clean_text(p.split(":", 1)[1])
            inst["contacts"]["admissions"]["email"] = email_val
            # Extract domain for main website
            domain_match = re.search(r'@([a-zA-Z0-9\.\-]+)', email_val)
            if domain_match:
                inst["website"] = "https://www." + domain_match.group(1)
            email_found = True
        if "Phone:" in p and "admissions" in step1_paras[max(0, i-2)].lower():
            inst["contacts"]["admissions"]["phone"] = clean_text(p.split(":", 1)[1])
        if "Location:" in p and "admissions" in step1_paras[max(0, i-3)].lower():
            inst["contacts"]["admissions"]["address"] = clean_text(p.split(":", 1)[1])

    # Application fee
    for p in step1_paras:
        if "Application fee:" in p or "Application fee :" in p or p.startswith("•Application fee"):
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["application_fee_cad"] = parse_fee_to_cad(parts[1])
                break

    # Scholarships
    scholarship_block = False
    for p in step1_paras:
        if "5. Scholarships" in p or "5. Fee Structures" in p:
            scholarship_block = True
            continue
        if "6. Internships" in p:
            scholarship_block = False
            
        if scholarship_block and (p.startswith("•") or p.startswith("-")):
            inst["scholarships"].append({"name": clean_text(p)})

    # Internships
    for p in step1_paras:
        if "Part-Time Work" in p or "part-time" in p.lower():
            inst["internships"]["part_time_work"] = clean_text(p)
        if "Placement rate" in p or "placement" in p.lower():
            rate_match = re.search(r'([0-9]+)\s*%', p)
            if rate_match:
                inst["internships"]["employment_rate_percent"] = int(rate_match.group(1))

    # Campus Life
    for p in step1_paras:
        if "housing" in p.lower():
            inst["campus_life"]["housing"] = clean_text(p)
        if "clubs" in p.lower():
            inst["campus_life"]["clubs"] = clean_text(p)

    # Security
    for p in step1_paras:
        if "security" in p.lower() or "emergency" in p.lower():
            inst["security"]["detail"] = clean_text(p)

    # Popular Courses
    top_ug = True
    for p in step1_paras:
        if "Top 5 Undergraduate" in p:
            top_ug = True
            continue
        if "Top 5 Postgraduate" in p:
            top_ug = False
            continue
        
        match = re.match(r'^[0-9]+\.\s*(.*)', p)
        if match:
            course = match.group(1).strip()
            if top_ug:
                inst["top_ug_programs"].append(course)
            else:
                inst["top_pg_programs"].append(course)

    # Limit to 5 just in case
    inst["top_ug_programs"] = inst["top_ug_programs"][:5]
    inst["top_pg_programs"] = inst["top_pg_programs"][:5]

    # Helper function to parse course blocks
    def parse_courses(course_paras, level):
        current_prog = None
        for p in course_paras:
            ug_match = re.match(r'^[0-9]+\.\s+UG Course\s*:\s*(.*)', p)
            pg_match = re.match(r'^[0-9]+\.\s+PG Course\s*:\s*(.*)', p)
            
            match = ug_match or pg_match
            if match:
                if current_prog:
                    programs.append(current_prog)
                current_prog = {
                    "level": level,
                    "name": match.group(1).strip(),
                    "faculty": "",
                    "duration_years": 3 if level == "UG" else 2, # Defaults
                    "annual_fee_cad": 0,
                    "total_fee_cad": 0,
                    "min_class12_percent": 60,
                    "required_subjects": [],
                    "entry_roles": [],
                    "features": []
                }
                continue
                
            if current_prog:
                p_clean = clean_text(p)
                if "Department name:" in p:
                    current_prog["faculty"] = clean_text(p.split(":", 1)[1])
                elif "Total years" in p:
                    duration_match = re.search(r'([0-9\.]+)\s*years?', p_clean)
                    if duration_match:
                        current_prog["duration_years"] = float(duration_match.group(1))
                elif "Annual tuition" in p:
                    fee_val = parse_fee_to_cad(p.split(":", 1)[1])
                    current_prog["annual_fee_cad"] = fee_val
                    current_prog["total_fee_cad"] = int(fee_val * current_prog["duration_years"])
                elif "Minimum 12th %:" in p or "Bachelor’s requirement" in p:
                    pct_match = re.search(r'([0-9]+)\s*%', p_clean)
                    if pct_match:
                        current_prog["min_class12_percent"] = int(pct_match.group(1))
                elif "Required subjects" in p or "Relevant academic background:" in p:
                    subjects = clean_text(p.split(":", 1)[1])
                    current_prog["required_subjects"] = [s.strip() for s in re.split(r',|;|and', subjects) if s.strip()]
                elif "Entry-level job roles:" in p or "Typical job roles:" in p:
                    roles = clean_text(p.split(":", 1)[1])
                    current_prog["entry_roles"] = [r.strip() for r in re.split(r',|;|and', roles) if r.strip()]
                elif p_clean.startswith("•") or p_clean.startswith("-"):
                    current_prog["features"].append(p_clean)

        if current_prog:
            programs.append(current_prog)

    parse_courses(step2_paras, "UG")
    parse_courses(step3_paras, "PG")

    return inst, programs

def main():
    client = MongoClient("mongodb://localhost:27017")
    db = client["canadian_institutions"] # existing database name
    
    dir_path = '/Users/mehulmanoharsah/Downloads/GERMANY '
    files = [f for f in os.listdir(dir_path) if f.endswith('.docx')]
    
    print(f"Found {len(files)} files to parse.")
    
    inst_count = 0
    prog_count = 0
    
    for f in files:
        path = os.path.join(dir_path, f)
        inst, progs = parse_docx_file(path)
        if not inst:
            continue
            
        # Check if already exists in DB
        existing = db.institutions.find_one({"name": inst["name"]})
        if existing:
            inst_id = existing["_id"]
            print(f"University '{inst['name']}' already exists in DB. Skipping institution.")
        else:
            res = db.institutions.insert_one(inst)
            inst_id = res.inserted_id
            inst_count += 1
            print(f"Inserted university: {inst['name']}")

        # Insert programs
        for p in progs:
            p["institution_id"] = inst_id
            p["institution_name"] = inst["name"]
            
            # Check if program already exists
            existing_prog = db.programs.find_one({
                "institution_id": inst_id,
                "name": p["name"],
                "level": p["level"]
            })
            if not existing_prog:
                db.programs.insert_one(p)
                prog_count += 1
                
        print(f"Processed {len(progs)} programs for {inst['name']}.")
        
    print(f"Seeding completed. Inserted {inst_count} new universities and {prog_count} new programs.")

if __name__ == "__main__":
    main()
