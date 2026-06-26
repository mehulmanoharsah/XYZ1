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
        else:
            # Keep empty paragraphs to help structure mapping if needed
            paragraphs.append("")
    return [p for p in paragraphs if p]

def parse_docx(path):
    paragraphs = get_docx_paragraphs(path)
    if not paragraphs:
        return None
    
    title = paragraphs[0]
    # Clean name
    name_match = re.split(r' – | - | — ', title)
    inst_name = name_match[0].strip()
    # Remove parenthesis short name for main clean name, but store abbreviation if found
    abbr = ""
    clean_name = inst_name
    if "(" in inst_name:
        match = re.search(r'\((.*?)\)', inst_name)
        if match:
            abbr = match.group(1).strip()
        clean_name = re.sub(r'\(.*?\)', '', inst_name).strip()

    info = {
        "name": clean_name,
        "abbreviation": abbr,
        "type": "university",
        "country": "Germany",
        "campuses": [],
        "contacts": {},
        "application_fee_cad": 0,
        "intakes": [],
        "deadlines": {},
        "eligibility": {"undergraduate": {}, "postgraduate": {}},
        "scholarships": [],
        "internships": {},
        "campus_life": {},
        "security": {},
        "top_ug_programs": [],
        "top_pg_programs": []
    }

    # Temporary variables
    current_section = None
    
    # Simple state machine to parse STEP 1
    # We find where STEP 2 starts to bound our parsing
    step2_idx = len(paragraphs)
    for idx, p in enumerate(paragraphs):
        if "STEP 2:" in p:
            step2_idx = idx
            break

    # Parse STEP 1
    step1_paras = paragraphs[1:step2_idx]
    
    # Mapping city
    for p in step1_paras:
        if p.startswith("•City:") or p.startswith("City:"):
            info["city"] = p.split(":", 1)[1].strip()
            
    # Map province based on city
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
    city_lower = info.get("city", "").lower()
    info["province"] = CITY_TO_PROVINCE.get(city_lower, "Germany State")

    print(json.dumps(info, indent=2))

if __name__ == "__main__":
    parse_docx('/Users/mehulmanoharsah/Downloads/GERMANY /TECHNICAL UNIVERSITY OF MUNICH Germany.docx')
