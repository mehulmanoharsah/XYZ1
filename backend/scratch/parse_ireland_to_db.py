import os
import re
import zipfile
import xml.etree.ElementTree as ET
from pymongo import MongoClient

FILE_MAP = {
    'ATLANTIC TECHNOLOGICAL UNIVERSITY IRELAND.docx': ('Galway', 'Connacht'),
    'DUBLIN BUSINESS SCHOOL IRELAND.docx': ('Dublin', 'Leinster'),
    'DUBLIN CITY UNIVERSITY IRELAND.docx': ('Dublin', 'Leinster'),
    'DUNDALK INSTITUTE OF TECHNOLOGY, IRELAND.docx': ('Dundalk', 'Leinster'),
    'GRIFFITH COLLEGE IRELAND.docx': ('Dublin', 'Leinster'),
    'MARY IMMACULATE COLLEGE IRELAND.docx': ('Limerick', 'Munster'),
    'MAYNOOTH UNIVERSITY IRELAND.docx': ('Maynooth', 'Leinster'),
    'MUNSTER TECHNOLOGICAL UNIVERSITY IRELAND.docx': ('Cork', 'Munster'),
    'NATIONAL COLLEGE OF IRELAND.docx': ('Dublin', 'Leinster'),
    'NCAD DUBLIN IRELAND.docx': ('Dublin', 'Leinster'),
    'ROYAL COLLEGE OF SURGEONS IN IRELAND.docx': ('Dublin', 'Leinster'),
    'SHANNON COLLEGE OF HOTEL MANAGEMENT IRELAND.docx': ('Shannon', 'Munster'),
    'SOUTH EAST TECHNOLOGICAL UNIVERSITY IRELAND.docx': ('Waterford', 'Munster'),
    'TECHNOLOGICAL UNIVERSITY SHANNON IRELAND.docx': ('Athlone', 'Leinster'),
    'TRINITY COLLEGE DUBLIN IRELAND.docx': ('Dublin', 'Leinster'),
    'UNIVERSITY COLLEGE CORK IRELAND.docx': ('Cork', 'Munster'),
    'UNIVERSITY COLLEGE DUBLIN IRELAND.docx': ('Dublin', 'Leinster'),
    'UNIVERSITY OF GALWAY IRELAND.docx': ('Galway', 'Connacht'),
    'UNIVERSITY OF LIMERICK IRELAND.docx': ('Limerick', 'Munster')
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
    if any(word in line_lower for word in ["no tuition", "free", "€0", "0 eur", "no fees"]):
        return 0
        
    semester_mul = 1
    if "semester" in line_lower and "year" not in line_lower:
        semester_mul = 2
        
    # Match €
    numbers = re.findall(r'€\s*([0-9,]+)', text_line)
    if not numbers:
        # Match EUR
        numbers = re.findall(r'([0-9,]+)\s*(?:eur|euros|euro)', line_lower)
    if not numbers:
        # Match $
        numbers = re.findall(r'\$\s*([0-9,]+)', text_line)
    if not numbers:
        # Fallback to any number that looks like a fee (e.g., between 50 and 80000)
        num_candidates = re.findall(r'([0-9]{1,3}(?:,[0-9]{3})*)', text_line)
        valid_nums = []
        for nc in num_candidates:
            val_clean = nc.replace(',', '').strip()
            if val_clean.isdigit():
                val_int = int(val_clean)
                if 20 <= val_int <= 80000:
                    valid_nums.append(nc)
        if valid_nums:
            numbers = [valid_nums[0]]

    if numbers:
        try:
            val_str = numbers[0].replace(',', '').strip()
            if val_str:
                val = int(val_str)
                if val > 0:
                    annual_eur = val * semester_mul
                    # Convert EUR to CAD (1 EUR = 1.50 CAD)
                    return int(annual_eur * 1.50)
        except ValueError as e:
            print(f"Warning: Failed to parse fee from line '{text_line}': {e}")
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
    inst_name = re.split(r' – | - | — |: ', title)[0].strip()
    inst_name = inst_name.split(',')[0].strip()
    
    abbr = ""
    clean_name = inst_name
    if "(" in inst_name:
        match = re.search(r'\((.*?)\)', inst_name)
        if match:
            abbr = match.group(1).strip()
        clean_name = re.sub(r'\(.*?\)', '', inst_name).strip()

    city, state = FILE_MAP.get(filename, ('Unknown City', 'Ireland Province'))

    inst = {
        "name": clean_name,
        "abbreviation": abbr,
        "type": "university" if "university" in clean_name.lower() or "college" not in clean_name.lower() else "college",
        "city": city,
        "province": state,
        "country": "Ireland",
        "campuses": [city],
        "website": "",
        "application_portal": "",
        "contacts": {
            "admissions": {},
            "international_students": {},
            "graduate_studies": {}
        },
        "application_fee_cad": 0,
        "intakes": ["Semester 1 (September)", "Semester 2 (January)"],
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
    
    course_mode = False
    for p in paras[1:]:
        p_lower = p.lower()
        if any(kw in p_lower for kw in ["step 2", "undergraduate course details", "under graduate courses", "undergraduate courses", "step 3", "postgraduate course details", "post graduate courses", "postgraduate courses"]):
            course_mode = True
        if course_mode:
            course_paras.append(p)
        else:
            step1_paras.append(p)

    # Parse STEP 1 for website, portal, and contacts
    for p in step1_paras:
        p_lower = p.lower()
        if "website:" in p_lower:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["website"] = clean_text(parts[1])
        if "portal:" in p_lower or "application portal" in p_lower:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["application_portal"] = clean_text(parts[1])

    if not inst["website"]:
        for p in step1_paras:
            url_match = re.search(r'((?:https?://|www\.)[a-zA-Z0-9\.\-]+)', p)
            if url_match:
                url = url_match.group(1).rstrip('/')
                if url.startswith("www."):
                    url = "https://" + url
                inst["website"] = url
                break

    # Find admissions contacts
    for p in step1_paras:
        p_lower = p.lower()
        if "email:" in p_lower:
            parts = p.split(":", 1)
            if len(parts) > 1:
                email_val = clean_text(parts[1])
                emails = [e.strip() for e in re.split(r',|;|and', email_val) if '@' in e]
                if emails:
                    inst["contacts"]["admissions"]["email"] = emails[0]
                    if not inst["website"]:
                        domain_match = re.search(r'@([a-zA-Z0-9\.\-]+)', emails[0])
                        if domain_match:
                            inst["website"] = "https://www." + domain_match.group(1)
        if "phone:" in p_lower:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["contacts"]["admissions"]["phone"] = clean_text(parts[1])
        if "address:" in p_lower or "physical address" in p_lower:
            parts = p.split(":", 1)
            if len(parts) > 1:
                inst["contacts"]["admissions"]["address"] = clean_text(parts[1])

    # Application fee
    for p in step1_paras:
        p_lower = p.lower()
        if "application fee" in p_lower:
            parts = p.split(":", 1)
            if len(parts) > 1:
                fee_val = parse_fee_to_cad(parts[1])
                if fee_val > 0:
                    inst["application_fee_cad"] = fee_val
                break

    # Scholarships
    scholarship_block = False
    for p in step1_paras:
        if "Scholarships" in p or "Financial Aid" in p or "Financial Support" in p:
            scholarship_block = True
            continue
        if "Career Outcomes" in p or "Internships" in p or "Jobs" in p:
            scholarship_block = False
        if scholarship_block and (p.startswith("•") or p.startswith("-") or p.startswith("*")):
            inst["scholarships"].append({"name": clean_text(p)})

    # Internships
    for p in step1_paras:
        p_lower = p.lower()
        if "co-op" in p_lower or "placement" in p_lower or "internship" in p_lower:
            inst["internships"]["part_time_work"] = clean_text(p)
            inst["internships"]["coop_available"] = True
        if "placement rate" in p_lower or "employment rate" in p_lower:
            rate_match = re.search(r'([0-9]+)\s*%', p)
            if rate_match:
                inst["internships"]["employment_rate_percent"] = int(rate_match.group(1))

    # Campus Life & Security
    for p in step1_paras:
        p_lower = p.lower()
        if "housing" in p_lower or "accommodation" in p_lower:
            inst["campus_life"]["housing"] = clean_text(p)
        if "clubs" in p_lower or "activities" in p_lower or "societies" in p_lower:
            inst["campus_life"]["clubs"] = clean_text(p)
        if "security" in p_lower or "emergency" in p_lower:
            inst["security"]["detail"] = clean_text(p)

    # Popular Courses
    top_ug = True
    for p in step1_paras:
        if "Top 5 Undergraduate" in p or "TOP UG COURSES" in p:
            top_ug = True
            continue
        if "Top 5 Postgraduate" in p or "TOP PG COURSES" in p:
            top_ug = False
            continue
        match = re.match(r'^[0-9]+\.\s*(.*)', p)
        if match:
            course = clean_text(match.group(1))
            course_clean = re.sub(r'^(?:UG|PG)\s*Course\s*:\s*', '', course, flags=re.IGNORECASE).strip()
            if top_ug:
                inst["top_ug_programs"].append(course_clean)
            else:
                inst["top_pg_programs"].append(course_clean)

    inst["top_ug_programs"] = inst["top_ug_programs"][:5]
    inst["top_pg_programs"] = inst["top_pg_programs"][:5]

    # Parse Course list
    level = "UG"
    current_prog = None
    for p in course_paras:
        p_lower = p.lower()
        p_clean = clean_text(p)
        
        if any(kw in p_lower for kw in ["step 2", "undergraduate course details", "under graduate courses", "undergraduate courses"]):
            level = "UG"
            continue
        elif any(kw in p_lower for kw in ["step 3", "postgraduate course details", "post graduate courses", "postgraduate courses"]):
            level = "PG"
            continue
        
        prog_name = None
        match_ug = re.search(r'(?:UG|Undergraduate)\s*Course\s*:\s*(.*)', p, re.IGNORECASE)
        match_pg = re.search(r'(?:PG|Postgraduate)\s*Course\s*:\s*(.*)', p, re.IGNORECASE)
        
        if match_ug:
            prog_name = match_ug.group(1).strip()
            level = "UG"
        elif match_pg:
            prog_name = match_pg.group(1).strip()
            level = "PG"
        else:
            match_num = re.match(r'^([0-9]+)\.\s*(.*)', p_clean)
            if match_num:
                num = int(match_num.group(1))
                rest = match_num.group(2).strip()
                if rest:
                    rest_lower = rest.lower()
                    is_meta = num <= 7 and any(kw in rest_lower for kw in ["department", "contact", "duration", "fees", "eligibility", "internship", "job", "career", "admission", "requirements"])
                    if not is_meta:
                        prog_name = rest
        
        if prog_name:
            if current_prog:
                programs.append(current_prog)
            current_prog = {
                "level": level,
                "name": prog_name,
                "faculty": "",
                "duration_years": 3.0 if level == "UG" else 1.0, # standard defaults in Ireland
                "annual_fee_cad": 0,
                "total_fee_cad": 0,
                "min_class12_percent": 70 if level == "UG" else 60,
                "required_subjects": [],
                "entry_roles": [],
                "features": []
            }
            continue
            
        if current_prog:
            if "school name:" in p_lower or "department of" in p_lower or "college of" in p_lower or "department:" in p_lower or "department name:" in p_lower:
                parts = p.split(":", 1)
                current_prog["faculty"] = clean_text(parts[1]) if len(parts) > 1 else p_clean
            elif "total:" in p_lower or "duration" in p_lower or "total years" in p_lower:
                duration_match = re.search(r'([0-9\.]+)\s*years?', p_clean)
                if duration_match:
                    current_prog["duration_years"] = float(duration_match.group(1))
            elif ("fees" in p_lower or "annual tuition" in p_lower or "annual:" in p_lower) and not any(kw in p_lower for kw in ["total program", "total cost", "total:"]) and not p_clean.lower().startswith(("•note:", "note:", "•scholarship", "scholarship")):
                fee_val = parse_fee_to_cad(p)
                if fee_val > 0:
                    current_prog["annual_fee_cad"] = fee_val
                    current_prog["total_fee_cad"] = int(fee_val * current_prog["duration_years"])
            elif "minimum 12th" in p_lower or "class 12" in p_lower or "bachelor’s degree requirement" in p_lower or "bachelor's degree requirement" in p_lower or "eligibility" in p_lower:
                pct_match = re.search(r'([5-9][0-9])\s*%', p_clean)
                if pct_match:
                    num_val = int(pct_match.group(1))
                    if num_val >= 50:
                        current_prog["min_class12_percent"] = num_val
            elif "required subjects" in p_lower or "relevant academic background" in p_lower or "background:" in p_lower or "required subjects / stream:" in p_lower:
                subjects_str = p.split(":", 1)[1] if ":" in p else p_clean
                current_prog["required_subjects"] = split_subjects(subjects_str)
            elif "typical job roles" in p_lower or "entry-level job roles" in p_lower or "roles:" in p_lower or "entry-level job roles:" in p_lower:
                roles_str = p.split(":", 1)[1] if ":" in p else p_clean
                current_prog["entry_roles"] = split_subjects(roles_str)
            elif p_clean.startswith("•") or p_clean.startswith("-") or p_clean.startswith("*"):
                current_prog["features"].append(p_clean)

    if current_prog:
        programs.append(current_prog)

    return inst, programs

def main():
    client = MongoClient("mongodb://localhost:27017")
    db = client["canadian_institutions"]
    
    print("Clearing existing Ireland institutions and programs...")
    ir_insts = list(db.institutions.find({"country": "Ireland"}))
    ir_ids = [inst["_id"] for inst in ir_insts]
    
    if ir_ids:
        del_progs = db.programs.delete_many({"institution_id": {"$in": ir_ids}})
        print(f"Deleted {del_progs.deleted_count} existing Ireland programs.")
        
    del_insts = db.institutions.delete_many({"country": "Ireland"})
    print(f"Deleted {del_insts.deleted_count} existing Ireland institutions.")
    
    dir_path = '/Users/mehulmanoharsah/Downloads/IRELAND'
    files = [f for f in os.listdir(dir_path) if f.endswith('.docx')]
    
    print(f"Found {len(files)} files to parse.")
    
    inst_count = 0
    prog_count = 0
    
    for f in sorted(files):
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
        
    print(f"Seeding completed. Inserted {inst_count} new Ireland universities and {prog_count} new programs.")

if __name__ == "__main__":
    main()
