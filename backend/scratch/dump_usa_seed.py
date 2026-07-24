from pymongo import MongoClient
import json
import re

def clean_doc(doc):
    if "_id" in doc:
        del doc["_id"]
    if "institution_id" in doc:
        del doc["institution_id"]
    if "institution_name" in doc:
        del doc["institution_name"]
    return doc

def main():
    client = MongoClient("mongodb://localhost:27017")
    db = client["canadian_institutions"]
    
    institutions = list(db.institutions.find({"country": "USA"}))
    print(f"Found {len(institutions)} USA institutions to dump.")
    
    js_content = []
    js_content.append("// ============================================================")
    js_content.append("// USA UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT")
    js_content.append("// 49 Institutions | UG & PG Programs | 2025-26")
    js_content.append("// ============================================================")
    js_content.append("// Usage: mongosh canadian_institutions usa_universities_seed.js")
    js_content.append("// ============================================================\n")
    js_content.append("const DB_NAME = \"canadian_institutions\";")
    js_content.append("const db = connect(\"mongodb://localhost:27017/\" + DB_NAME);\n")
    
    js_content.append("// Helper to clean institution/program doc structures")
    js_content.append("function inst(data) { return data; }\n")
    js_content.append("function addPrograms(instId, instName, programs) {")
    js_content.append("  programs.forEach(p => {")
    js_content.append("    p.institution_id = instId;")
    js_content.append("    p.institution_name = instName;")
    js_content.append("  });")
    js_content.append("  db.programs.insertMany(programs);")
    js_content.append("}\n")
    
    js_content.append("// Delete existing USA data to prevent duplicates")
    js_content.append("db.institutions.deleteMany({ country: \"USA\" });")
    js_content.append("db.programs.deleteMany({ institution_name: { $in: [")
    for inst in institutions:
        js_content.append(f"  \"{inst['name']}\",")
    js_content.append("] } });\n")

    for idx, inst in enumerate(institutions):
        inst_name = inst["name"]
        clean_inst = clean_doc(dict(inst))
        
        # Format institution name into a valid JS variable name
        var_name = "univ_" + re.sub(r'[^a-zA-Z0-9]', '', inst_name).lower()
        
        # Dump institution to JSON
        inst_json = json.dumps(clean_inst, indent=2)
        js_content.append(f"// --- {inst_name} ---")
        js_content.append(f"const {var_name} = db.institutions.insertOne(inst({inst_json})).insertedId;\n")
        
        # Find programs
        programs = list(db.programs.find({"institution_name": inst_name}))
        clean_progs = [clean_doc(dict(p)) for p in programs]
        progs_json = json.dumps(clean_progs, indent=2)
        
        js_content.append(f"addPrograms({var_name}, \"{inst_name}\", {progs_json});\n")
        
    js_content.append("print(\"USA Seeding Completed!\");")
    
    output_path = "/Users/mehulmanoharsah/Downloads/university-portal 3/usa_universities_seed.js"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(js_content))
        
    print(f"Seed script successfully generated at: {output_path}")

if __name__ == "__main__":
    main()
