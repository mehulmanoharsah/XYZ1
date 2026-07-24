import os
import re
import zipfile
import xml.etree.ElementTree as ET
import json
from pymongo import MongoClient

FILE_MAP = {
    'Arizona State University USA.docx': ('Tempe', 'Arizona'),
    'BOSTON UNIVERSITY USA.docx': ('Boston', 'Massachusetts'),
    'CALTECH Unicersity USA.docx': ('Pasadena', 'California'),
    'CLEMSON UNIVERSITY USA.docx': ('Clemson', 'South Carolina'),
    'Carnegie Mellon University USA.docx': ('Pittsburgh', 'Pennsylvania'),
    'Columbia University USA.docx': ('New York City', 'New York'),
    'Comell University USA.docx': ('Ithaca', 'New York'),
    'DUKE UNIVERSITY USA.docx': ('Durham', 'North Carolina'),
    'GEORGE WASHINGTON UNIVERSITY USA.docx': ('Washington', 'D.C.'),
    'Georgia Institute of Technology USA.docx': ('Atlanta', 'Georgia'),
    'Hardward Universzity.docx': ('Cambridge', 'Massachusetts'),
    'ILLINOIS INSTITUTE OF TECHNOLOGY USA.docx': ('Chicago', 'Illinois'),
    'IOWA STATE UNIVERSITY USA.docx': ('Ames', 'Iowa'),
    'JOHNS HOPKINS UNIVERSITY USA.docx': ('Baltimore', 'Maryland'),
    'MICHIGAN STATE UNIVERSITY USA.docx': ('East Lansing', 'Michigan'),
    'MIT USA.docx': ('Cambridge', 'Massachusetts'),
    'NORTH CAROLINA STATE UNIVERSITY NC State USA.docx': ('Raleigh', 'North Carolina'),
    'New York University USA.docx': ('New York City', 'New York'),
    'Northeastern University USA.docx': ('Boston', 'Massachusetts'),
    'OHIO STATE UNIVERSITY USA.docx': ('Columbus', 'Ohio'),
    'OREGON STATE UNIVERSITY USA.docx': ('Corvallis', 'Oregon'),
    'PRINCETON UNIVERSITY USA.docx': ('Princeton', 'New Jersey'),
    'Purdue University USA.docx': ('West Lafayette', 'Indiana'),
    'RUTGERS UNIVERSITY USA.docx': ('New Brunswick', 'New Jersey'),
    'SAN JOSE STATE UNIVERSITY USA.docx': ('San Jose', 'California'),
    'STANDFORF UNIVERSITY USA.docx': ('Stanford', 'California'),
    'SUNY BUFFALO UNIVERSITY USA.docx': ('Buffalo', 'New York'),
    'SYRACUSE UNIVERSITY USA.docx': ('Syracuse', 'New York'),
    'Texas A&M University USA.docx': ('College Station', 'Texas'),
    'UC Berkeley.docx': ('Berkeley', 'California'),
    'UC Davis UNIVERSITY OF CALIFORNIA USA.docx': ('Davis', 'California'),
    'UC IRVINE UNIVERSITY USA.docx': ('Irvine', 'California'),
    'UNIVERSITY OF ARIZONA USA.docx': ('Tucson', 'Arizona'),
    'UNIVERSITY OF CALIFORNIA SAN DIEGO  USA.docx': ('La Jolla', 'California'),
    'UNIVERSITY OF CHICAGO USA.docx': ('Chicago', 'Illinois'),
    'UNIVERSITY OF COLORADO BOULDER USA.docx': ('Boulder', 'Colorado'),
    'UNIVERSITY OF FLORIDA USA.docx': ('Gainesville', 'Florida'),
    'UNIVERSITY OF MARYLAND USA.docx': ('College Park', 'Maryland'),
    'UNIVERSITY OF MASSACHUSETTS AMHERST USA.docx': ('Amherst', 'Massachusetts'),
    'UNIVERSITY OF PENNSYLVANIA USA.docx': ('Philadelphia', 'Pennsylvania'),
    'UT AUSTIN UNIVERSITY USA.docx': ('Austin', 'Texas'),
    'University of California UCLA USA.docx': ('Los Angeles', 'California'),
    'University of Illinois at Urbana USA.docx': ('Urbana-Champaign', 'Illinois'),
    'University of Michigan USA.docx': ('Ann Arbor', 'Michigan'),
    'University of Southern California USA University.docx': ('Los Angeles', 'California'),
    'University of Texas at Dallas USA.docx': ('Richardson', 'Texas'),
    'University of Washington USA.docx': ('Seattle', 'Washington'),
    'VIRGINIA TECH UNIVERSITY USA.docx': ('Blacksburg', 'Virginia'),
    'YALE UNIVERSITY USA.docx': ('New Haven', 'Connecticut')
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
    t = re.sub(r'^[•\-\*]\s*', '', t)
    return t.strip()

def parse_fee_to_cad(text_line):
    line_lower = text_line.lower()
    numbers = re.findall(r'\$\s*([0-9,]+)', text_line)
    if not numbers:
        numbers = re.findall(r'([0-9,]+)\s*(?:usd|dollars)', line_lower)
    if numbers:
        val = int(numbers[0].replace(',', ''))
        if val > 0:
            semester_mul = 1
            if "semester" in line_lower and "year" not in line_lower:
                semester_mul = 2
            annual_usd = val * semester_mul
            # Convert USD to CAD (1 USD = 1.38 CAD)
            return int(annual_usd * 1.38)
    return 0

def split_subjects(text):
    parts = []
    current = []
    depth = 0
    i = 0
    while i < len(text):
        char = text[i]
        if char == '(':
            depth += 1
            current.append(char)
        elif char == ')':
            depth -= 1
            current.append(char)
        elif (char == ',' or char == ';') and depth == 0:
            parts.append("".join(current).strip())
            current = []
        elif text[i:i+5].lower() == ' and ' and depth == 0:
            parts.append("".join(current).strip())
            current = []
            i += 4
        else:
            current.append(char)
        i += 1
    if current:
        parts.append("".join(current).strip())
        
    res = []
    for p in parts:
        p_clean = re.sub(r'^[•\-\*\s]+', '', p).strip()
        if p_clean and p_clean.lower() not in ["none", "n/a", "no specific subjects"]:
            res.append(p_clean)
    return res

def parse_docx_file(path, filename):
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

    city, state = FILE_MAP.get(filename, ('Unknown City', 'USA State'))

    inst = {
        "name": clean_name,
        "abbreviation": abbr,
        "type": "university",
        "city": city,
        "province": state,
        "country": "USA",
        "campuses": [city],
        "website": "",
        "application_portal": "",
        "contacts": {
            "admissions": {},
            "international_students": {},
            "graduate_studies": {}
        },
        "application_fee_cad": int(85 * 1.38), # Default fallback application fee for US
        "intakes": ["Fall (September)", "Spring (January)", "Summer (May)"],
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
    
    # Separate sections to parse university info vs course info
    step1_paras = []
    course_paras = []
    
    # Divide
    course_mode = False
    for p in paras[1:]:
        p_lower = p.lower()
        if "step 2" in p_lower or "undergraduate course details" in p_lower or "under graduate courses" in p_lower or "undergraduate courses" in p_lower or "step 3" in p_lower or "postgraduate course details" in p_lower or "post graduate courses" in p_lower or "postgraduate courses" in p_lower:
            course_mode = True
        if course_mode:
            course_paras.append(p)
        else:
            step1_paras.append(p)

    # Parse STEP 1 for website, portal, and contacts
    for p in step1_paras:
        if "Website:" in p:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["website"] = clean_text(parts[1])
        if "Portal:" in p:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["application_portal"] = clean_text(parts[1])

    # Find admissions contacts
    for i, p in enumerate(step1_paras):
        if "Email:" in p:
            email_val = clean_text(p.split(":", 1)[1])
            if "@" in email_val:
                inst["contacts"]["admissions"]["email"] = email_val
                if not inst["website"]:
                    domain_match = re.search(r'@([a-zA-Z0-9\.\-]+)', email_val)
                    if domain_match:
                        inst["website"] = "https://www." + domain_match.group(1)
        if "Phone:" in p:
            inst["contacts"]["admissions"]["phone"] = clean_text(p.split(":", 1)[1])
        if "Address:" in p:
            inst["contacts"]["admissions"]["address"] = clean_text(p.split(":", 1)[1])

    # Application fee
    for p in step1_paras:
        if "Application fee:" in p or "Application fee :" in p or p.lower().startswith("•application fee"):
            parts = p.split(":", 1)
            if len(parts) > 1:
                fee_val = parse_fee_to_cad(parts[1])
                if fee_val > 0:
                    inst["application_fee_cad"] = fee_val
                break

    # Scholarships
    scholarship_block = False
    for p in step1_paras:
        if "Scholarships" in p or "Financial Aid" in p:
            scholarship_block = True
            continue
        if "Career Outcomes" in p or "Internships" in p:
            scholarship_block = False
        if scholarship_block and (p.startswith("•") or p.startswith("-")):
            inst["scholarships"].append({"name": clean_text(p)})

    # Internships
    for p in step1_paras:
        if "Co-op" in p or "co-op" in p.lower():
            inst["internships"]["part_time_work"] = clean_text(p)
            inst["internships"]["coop_available"] = True
        if "Placement rate" in p or "placement" in p.lower():
            rate_match = re.search(r'([0-9]+)\s*%', p)
            if rate_match:
                inst["internships"]["employment_rate_percent"] = int(rate_match.group(1))

    # Campus Life & Security
    for p in step1_paras:
        if "housing" in p.lower():
            inst["campus_life"]["housing"] = clean_text(p)
        if "clubs" in p.lower():
            inst["campus_life"]["clubs"] = clean_text(p)
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
            course = clean_text(match.group(1))
            if top_ug:
                inst["top_ug_programs"].append(course)
            else:
                inst["top_pg_programs"].append(course)

    inst["top_ug_programs"] = inst["top_ug_programs"][:5]
    inst["top_pg_programs"] = inst["top_pg_programs"][:5]

    # Parse Course list
    level = "UG"
    current_prog = None
    for p in course_paras:
        p_lower = p.lower()
        p_clean = clean_text(p)
        if "step 2" in p_lower or "undergraduate course details" in p_lower or "under graduate courses" in p_lower or "undergraduate courses" in p_lower:
            level = "UG"
            continue
        elif "step 3" in p_lower or "postgraduate course details" in p_lower or "post graduate courses" in p_lower or "postgraduate courses" in p_lower:
            level = "PG"
            continue
        
        prog_name = None
        match_cn = re.search(r'Course Name:\s*(.*)', p, re.IGNORECASE)
        if match_cn:
            prog_name = match_cn.group(1).strip()
        else:
            match_num = re.match(r'^([0-9]+)\.\s*(.*)', p_clean)
            if match_num:
                num = int(match_num.group(1))
                rest = match_num.group(2).strip()
                if rest:
                    rest_lower = rest.lower()
                    is_meta = num <= 6 and any(kw in rest_lower for kw in ["department", "contact", "duration", "fees", "eligibility", "internship", "job", "career", "admission"])
                    if not is_meta:
                        prog_name = rest
        
        if prog_name:
            if current_prog:
                programs.append(current_prog)
            current_prog = {
                "level": level,
                "name": prog_name,
                "faculty": "",
                "duration_years": 4 if level == "UG" else 2,
                "annual_fee_cad": 0,
                "total_fee_cad": 0,
                "min_class12_percent": 70,
                "required_subjects": [],
                "entry_roles": [],
                "features": []
            }
            continue
            
        if current_prog:
            if "school name:" in p_lower or "department of" in p_lower or "college of" in p_lower or "department name" in p_lower:
                current_prog["faculty"] = p_clean
            elif "total:" in p_lower or "duration" in p_lower or "total years" in p_lower:
                duration_match = re.search(r'([0-9\.]+)\s*years?', p_clean)
                if duration_match:
                    current_prog["duration_years"] = float(duration_match.group(1))
            elif ("fees" in p_lower or "annual tuition" in p_lower) and not any(kw in p_lower for kw in ["total program", "total cost", "per credit"]):
                fee_val = parse_fee_to_cad(p)
                if fee_val > 0:
                    current_prog["annual_fee_cad"] = fee_val
                    current_prog["total_fee_cad"] = int(fee_val * current_prog["duration_years"])
            elif "minimum 12th" in p_lower or "bachelor’s degree requirement" in p_lower or "bachelor's degree requirement" in p_lower:
                pct_match = re.search(r'([0-9]+)\s*%', p_clean)
                if pct_match:
                    num_val = int(pct_match.group(1))
                    if num_val >= 50:
                        current_prog["min_class12_percent"] = num_val
            elif "required subjects" in p_lower or "relevant academic background" in p_lower:
                subjects_str = p.split(":", 1)[1] if ":" in p else p_clean
                current_prog["required_subjects"] = split_subjects(subjects_str)
            elif "typical job roles" in p_lower or "entry-level job roles" in p_lower or "job roles" in p_lower:
                roles_str = p.split(":", 1)[1] if ":" in p else p_clean
                current_prog["entry_roles"] = split_subjects(roles_str)
            elif p_clean.startswith("•") or p_clean.startswith("-"):
                current_prog["features"].append(p_clean)

    if current_prog:
        programs.append(current_prog)

    return inst, programs

def main():
    client = MongoClient("mongodb://localhost:27017")
    db = client["canadian_institutions"]
    
    # Clean existing USA records to support fresh re-seeding
    print("Clearing existing USA institutions and programs...")
    usa_insts = list(db.institutions.find({"country": "USA"}))
    usa_ids = [inst["_id"] for inst in usa_insts]
    
    if usa_ids:
        del_progs = db.programs.delete_many({"institution_id": {"$in": usa_ids}})
        print(f"Deleted {del_progs.deleted_count} existing USA programs.")
        
    del_insts = db.institutions.delete_many({"country": "USA"})
    print(f"Deleted {del_insts.deleted_count} existing USA institutions.")
    
    dir_path = '/Users/mehulmanoharsah/Downloads/USA '
    files = [f for f in os.listdir(dir_path) if f.endswith('.docx')]
    
    print(f"Found {len(files)} files to parse.")
    
    inst_count = 0
    prog_count = 0
    
    for f in files:
        path = os.path.join(dir_path, f)
        inst, progs = parse_docx_file(path, f)
        if not inst:
            continue
            
        res = db.institutions.insert_one(inst)
        inst_id = res.inserted_id
        inst_count += 1
        print(f"Inserted university: {inst['name']}")

        # Insert programs
        for p in progs:
            p["institution_id"] = inst_id
            p["institution_name"] = inst["name"]
            
            db.programs.insert_one(p)
            prog_count += 1
                
        print(f"Processed {len(progs)} programs for {inst['name']}.")
        
    print(f"Seeding completed. Inserted {inst_count} new universities and {prog_count} new programs.")

if __name__ == "__main__":
    main()
