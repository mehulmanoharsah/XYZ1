import zipfile
import xml.etree.ElementTree as ET
import os
import re
import json

def get_docx_paragraphs(path):
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

def parse_fee_to_cad(text_line):
    line_lower = text_line.lower()
    if any(word in line_lower for word in ["no tuition", "free", "$0", "0 usd", "no fees"]):
        return 0
    semester_mul = 1
    if "semester" in line_lower and "year" not in line_lower:
        semester_mul = 2
    numbers = re.findall(r'\$\s*([0-9,]+)', text_line)
    if not numbers:
        numbers = re.findall(r'([0-9,]+)\s*(?:usd|dollars)', line_lower)
    if numbers:
        val = int(numbers[0].replace(',', ''))
        annual_usd = val * semester_mul
        return int(annual_usd * 1.38)
    return 0

def clean_text(t):
    t = re.sub(r'^[•\-\*]\s*', '', t)
    return t.strip()

def parse_docx(path):
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
        "city": "Tempe", # hardcode for test
        "province": "Arizona",
        "country": "USA",
        "campuses": [],
        "website": "",
        "application_portal": "",
        "contacts": {"admissions": {}, "international_students": {}, "graduate_studies": {}},
        "application_fee_cad": 0,
        "intakes": ["Fall (September)", "Spring (January)"],
        "deadlines": {},
        "eligibility": {"undergraduate": {}, "postgraduate": {}},
        "scholarships": [],
        "internships": {},
        "campus_life": {},
        "security": {},
        "top_ug_programs": [],
        "top_pg_programs": []
    }

    programs = []
    
    # State tracking
    level = "UG"
    current_prog = None
    in_course_section = False
    
    for idx, p in enumerate(paras[1:]):
        p_lower = p.lower()
        p_clean = clean_text(p)
        if "step 2" in p_lower or "undergraduate course details" in p_lower or "under graduate courses" in p_lower or "undergraduate courses" in p_lower:
            in_course_section = True
            level = "UG"
            continue
        elif "step 3" in p_lower or "postgraduate course details" in p_lower or "post graduate courses" in p_lower or "postgraduate courses" in p_lower:
            in_course_section = True
            level = "PG"
            continue
        
        if not in_course_section:
            continue
            
        # Robust course header match
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
            p_clean = clean_text(p)
            if "department name" in p_lower or p_clean.startswith("School of") or p_clean.startswith("College of") or p_clean.startswith("Department of"):
                current_prog["faculty"] = p_clean
            elif "duration" in p_lower or "total years" in p_lower:
                duration_match = re.search(r'([0-9\.]+)\s*years?', p_clean)
                if duration_match:
                    current_prog["duration_years"] = float(duration_match.group(1))
            elif ("fees" in p_lower or "annual tuition" in p_lower) and not any(kw in p_lower for kw in ["total program", "total cost", "per credit"]):
                fee_val = parse_fee_to_cad(p)
                if fee_val > 0:
                    current_prog["annual_fee_cad"] = fee_val
                    current_prog["total_fee_cad"] = int(fee_val * current_prog["duration_years"])
            elif "minimum 12th-grade" in p_lower or "minimum 12th" in p_lower or "bachelor’s degree requirement" in p_lower:
                pct_match = re.search(r'([0-9]+)\s*%', p_clean)
                if pct_match:
                    current_prog["min_class12_percent"] = int(pct_match.group(1))
            elif "required subjects" in p_lower or "relevant academic background" in p_lower:
                subjects = clean_text(p.split(":", 1)[1]) if ":" in p else p_clean
                current_prog["required_subjects"] = [s.strip() for s in re.split(r',|;|and', subjects) if s.strip()]
            elif "typical job roles" in p_lower or "entry-level job roles" in p_lower:
                roles = clean_text(p.split(":", 1)[1]) if ":" in p else p_clean
                current_prog["entry_roles"] = [r.strip() for r in re.split(r',|;|and', roles) if r.strip()]
            elif p_clean.startswith("•") or p_clean.startswith("-"):
                current_prog["features"].append(p_clean)

    if current_prog:
        programs.append(current_prog)

    print(f"Parsed {len(programs)} programs.")
    print("Sample Program:", json.dumps(programs[0] if programs else {}, indent=2))

if __name__ == "__main__":
    parse_docx('/Users/mehulmanoharsah/Downloads/USA /JOHNS HOPKINS UNIVERSITY USA.docx')
