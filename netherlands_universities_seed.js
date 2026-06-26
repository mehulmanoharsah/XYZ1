// ============================================================
// NETHERLANDS UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions netherlands_universities_seed.js
// ============================================================

const DB_NAME = "canadian_institutions";
const db = connect("mongodb://localhost:27017/" + DB_NAME);

// Helper to clean institution/program doc structures
function inst(data) { return data; }

function addPrograms(instId, instName, programs) {
  programs.forEach(p => {
    p.institution_id = instId;
    p.institution_name = instName;
  });
  db.programs.insertMany(programs);
}

// Delete existing Netherlands data to prevent duplicates
db.institutions.deleteMany({ country: "Netherlands" });
db.programs.deleteMany({ institution_name: { $in: [
  "UNIVERSITY OF TWENTE",
  "WAGENINGEN UNIVERSITY & RESEARCH",
  "UTRECHT UNIVERSITY",
  "MAASTRICHT UNIVERSITY",
  "FONTYS UNIVERSITY OF APPLIED SCIENCES",
  "VU AMSTERDAM",
  "TILBURG UNIVERSITY",
  "ERASMUS UNIVERSITY ROTTERDAM",
  "UNIVERSITY OF GRONINGEN",
  "TU DELFT",
  "HANZE UNIVERSITY OF APPLIED SCIENCES",
  "SAXION UNIVERSITY OF APPLIED SCIENCES",
  "UNIVERSITY OF AMSTERDAM",
  "HOTELSCHOOL THE HAGUE",
  "RADBOUD UNIVERSITY",
  "THE HAGUE UNIVERSITY OF APPLIED SCIENCES",
  "LEIDEN UNIVERSITY",
  "TU EINDHOVEN",
  "BREDA UNIVERSITY OF APPLIED SCIENCES",
  "AVANS UNIVERSITY OF APPLIED SCIENCES",
] } });

// --- UNIVERSITY OF TWENTE ---
const univ_universityoftwente = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF TWENTE",
  "abbreviation": "",
  "type": "university",
  "city": "Enschede",
  "province": "Overijssel",
  "country": "Netherlands",
  "campuses": [
    "Enschede"
  ],
  "website": "https://novelt.com/en/support/novel-t-smart-students/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)53 489 5424 (direct line; located Room 206, Vrijhof Building, 2nd Floor)",
      "address": "Vrijhof Building, Room 206, Campus Enschede",
      "email": "info@iaestetwente.nl"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career Services: Job placement and internship support",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing: On-campus and partnership accommodation coordination",
    "clubs": "Team opportunities: Join existing sports clubs"
  },
  "security": {
    "detail": "Cybersecurity: Digital security protocols; IT security systems"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_universityoftwente, "UNIVERSITY OF TWENTE", [
  {
    "level": "UG",
    "name": "Bachelor of Science Electrical Engineering",
    "faculty": "Faculty of Engineering Technology; Electrical Engineering Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Industrial Engineering & Management",
    "faculty": "Faculty of Engineering Technology; Industrial Engineering & Management Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Chemical Science & Engineering",
    "faculty": "Faculty of Science & Technology; Chemical Science & Engineering Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Mechanical Engineering",
    "faculty": "Faculty of Engineering Technology; Mechanical Engineering Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Civil Engineering",
    "faculty": "Faculty of Engineering Technology; Civil Engineering Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Communication Science",
    "faculty": "Faculty of Behavioural Sciences; Communication Science Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Business Administration",
    "faculty": "Faculty of Social Sciences / Faculty of Engineering Technology; Business Administration Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Industrial Engineering & Management",
    "faculty": "Faculty of Engineering Technology; Industrial Engineering & Management Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Electrical Engineering",
    "faculty": "Faculty of Engineering Technology; Electrical Engineering Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Mechanical Engineering",
    "faculty": "Faculty of Engineering Technology; Mechanical Engineering Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- WAGENINGEN UNIVERSITY & RESEARCH ---
const univ_wageningenuniversityresearch = db.institutions.insertOne(inst({
  "name": "WAGENINGEN UNIVERSITY & RESEARCH",
  "abbreviation": "WUR",
  "type": "university",
  "city": "Wageningen",
  "province": "Gelderland",
  "country": "Netherlands",
  "campuses": [
    "Wageningen"
  ],
  "website": "https://www.wur.nl/en/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 317 48 9111 (general switchboard)",
      "email": "students@wur.nl",
      "address": "Forum Building, Room 062 (incoming); Room 060 (outgoing); Wageningen Campus"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career Services: Job placement and internship support",
    "coop_available": true,
    "employment_rate_percent": 80
  },
  "campus_life": {
    "clubs": "Volunteer organizations: Social causes and humanitarian initiatives",
    "housing": "Student housing: On-campus and partnerships available"
  },
  "security": {
    "detail": "Cybersecurity: Digital security protocols; IT security systems"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_wageningenuniversityresearch, "WAGENINGEN UNIVERSITY & RESEARCH", [
  {
    "level": "UG",
    "name": "Bachelor of Science Animal Sciences",
    "faculty": "Life Sciences; Animal Sciences Programme; Chair Group Animal Sciences",
    "duration_years": 0.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Food Technology",
    "faculty": "Life Sciences; Food Technology Programme; Chair Group Food Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Environmental Sciences",
    "faculty": "Life Sciences; Environmental Sciences Programme; Chair Groups (Soil, Water, Ecology)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science International Land and Water Management",
    "faculty": "Life Sciences; Land and Water Management Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Agroecology",
    "faculty": "Life Sciences; Agroecology Programme; Organic Agriculture Focus",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Food Technology",
    "faculty": "Life Sciences; Food Technology Chair Group; MSc Food Technology Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Plant Sciences",
    "faculty": "Life Sciences; Plant Sciences Chair Group; MSc Plant Sciences Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Environmental Sciences",
    "faculty": "Life Sciences; Environmental Sciences Chair Group; MSc Environmental Sciences Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Water Resources Management",
    "faculty": "Life Sciences; Water Management Chair Group; MSc Water Resources Management Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Biotechnology",
    "faculty": "Life Sciences; Biotechnology Chair Group; MSc Biotechnology Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- UTRECHT UNIVERSITY ---
const univ_utrechtuniversity = db.institutions.insertOne(inst({
  "name": "UTRECHT UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Utrecht",
  "province": "Utrecht",
  "country": "Netherlands",
  "campuses": [
    "Utrecht"
  ],
  "website": "https://www.uu.nl",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "Domplein 29, 3512 JE Utrecht, Netherlands",
      "phone": "+31 30 253 7000"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes"
    },
    {
      "name": "For top 10% of graduating class"
    },
    {
      "name": "Non-EU/EEA students only"
    },
    {
      "name": "Can be renewed for 2-year programs"
    },
    {
      "name": "Available for selected master\u2019s programs"
    },
    {
      "name": "Application deadline: February 1, 2025 (varies by program)"
    },
    {
      "name": "NL Scholarship (Netherlands Scholarship): \u20ac5,000 (approximately INR 4.75 L) one-time in first year"
    },
    {
      "name": "For non-EEA nationals admitted to regular 2-year MSc programs"
    },
    {
      "name": "Available only to selected institutions"
    },
    {
      "name": "Additional scholarship possible in second year if grades \u22657/10 and 50% credits earned by Q3"
    },
    {
      "name": "Orange Tulip Scholarship (OTS): Partial to full tuition fee waivers"
    },
    {
      "name": "For Indian and other international students"
    },
    {
      "name": "Undergraduate and Master\u2019s programs"
    },
    {
      "name": "Varying deadlines by institution"
    },
    {
      "name": "UTS (Utrecht Tuition Scholarship) Second Year (Performance-based): \u20ac3,000-\u20ac22,000"
    },
    {
      "name": "For non-EU/EEA international students in MSc programs"
    },
    {
      "name": "Available if average grade \u22657/10 by end of Q3"
    },
    {
      "name": "Minimum 50% of credits earned by end of Q3"
    },
    {
      "name": "Merit-based for post-graduate studies abroad"
    },
    {
      "name": "NL Scholarship - Business Informatics: INR 14 L (approximately \u20ac16,800)"
    },
    {
      "name": "Merit-based"
    },
    {
      "name": "20 awards available"
    },
    {
      "name": "Deadline: February 2, 2025"
    }
  ],
  "internships": {
    "part_time_work": "AIESEC: Voluntary work and internships abroad",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Partnership with Dutch housing agencies for accommodation services",
    "clubs": "Recreation: Canals with bars, restaurants, pubs, clubs, affordable dining"
  },
  "security": {
    "detail": "Safety measures and emergency contact procedures"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_utrechtuniversity, "UTRECHT UNIVERSITY", [
  {
    "level": "UG",
    "name": "University College Utrecht (BA/BSc, 3 years, English-taught, liberal arts)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global Sustainability Science (BSc, 3 years, English-taught)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics and Business (BSc, 3 years)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology/Life Sciences (BSc, 3 years)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemistry (BSc, 3 years)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computing Science (MSc, 24 months, English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Informatics (MSc, 24 months, English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Artificial Intelligence (MSc, 24 months, English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Applied Cognitive Psychology (MSc, English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Sustainable Development (MSc, 24 months, English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "University College Utrecht (Liberal Arts, BA/BSc)",
    "faculty": "University College Utrecht, Utrecht University",
    "duration_years": 3,
    "annual_fee_cad": 28500,
    "total_fee_cad": 85500,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "Management consultant",
      "analyst",
      "diplomat",
      "international professional",
      "entrepreneur",
      "researcher",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global Sustainability Science (BSc)",
    "faculty": "Faculty of Science, Utrecht University",
    "duration_years": 3,
    "annual_fee_cad": 25500,
    "total_fee_cad": 76500,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "chemistry",
      "physics",
      "or biology"
    ],
    "entry_roles": [
      "Environmental scientist",
      "sustainability consultant",
      "climate analyst",
      "policy advisor",
      "researcher",
      "corporate sustainability officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics and Business (BSc)",
    "faculty": "Utrecht School of Economics, Utrecht University",
    "duration_years": 3,
    "annual_fee_cad": 25500,
    "total_fee_cad": 76500,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "economics",
      "business studies"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "economist",
      "financial analyst",
      "corporate professional",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology/Life Sciences (BSc)",
    "faculty": "Faculty of Science, Utrecht University",
    "duration_years": 3,
    "annual_fee_cad": 25500,
    "total_fee_cad": 76500,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "chemistry",
      "mathematics"
    ],
    "entry_roles": [
      "Biologist",
      "researcher",
      "pharmaceutical scientist",
      "environmental biologist",
      "clinical scientist",
      "biotech professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemistry (BSc)",
    "faculty": "Faculty of Science, Utrecht University",
    "duration_years": 3,
    "annual_fee_cad": 25500,
    "total_fee_cad": 76500,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "mathematics",
      "physics"
    ],
    "entry_roles": [
      "Chemist",
      "pharmaceutical scientist",
      "research scientist",
      "chemical engineer",
      "materials scientist",
      "industrial chemist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computing Science",
    "faculty": "Department of Information and Computing Sciences, Utrecht University",
    "duration_years": 2,
    "annual_fee_cad": 33000,
    "total_fee_cad": 66000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong computer science foundation",
      "programming",
      "algorithms",
      "mathematics",
      "systems knowledge"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "systems architect",
      "algorithm designer",
      "research scientist",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Informatics",
    "faculty": "Utrecht School of Economics, Utrecht University",
    "duration_years": 2,
    "annual_fee_cad": 33000,
    "total_fee_cad": 66000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Information systems",
      "business administration",
      "computer science background"
    ],
    "entry_roles": [
      "Business analyst",
      "IT consultant",
      "systems designer",
      "digital transformation consultant",
      "project manager",
      "enterprise architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "Department of Information and Computing Sciences, Utrecht University",
    "duration_years": 2,
    "annual_fee_cad": 33000,
    "total_fee_cad": 66000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in programming",
      "machine learning",
      "mathematics",
      "statistics"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning specialist",
      "data scientist",
      "AI researcher",
      "neural network developer",
      "computer vision specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Applied Cognitive Psychology",
    "faculty": "Department of Social, Health and Organisational Psychology, Utrecht University",
    "duration_years": 2,
    "annual_fee_cad": 33000,
    "total_fee_cad": 66000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Psychology",
      "cognitive science",
      "neuroscience",
      "or behavioral science"
    ],
    "entry_roles": [
      "Cognitive psychologist",
      "human factors specialist",
      "UX researcher",
      "organizational consultant",
      "clinical psychologist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Sustainable Development",
    "faculty": "Faculty of Science, Utrecht University",
    "duration_years": 2,
    "annual_fee_cad": 33000,
    "total_fee_cad": 66000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Natural sciences",
      "environmental science",
      "sustainability",
      "engineering",
      "or policy background"
    ],
    "entry_roles": [
      "Sustainability consultant",
      "environmental scientist",
      "policy analyst",
      "CSR manager",
      "climate change specialist",
      "sustainable development officer"
    ],
    "features": []
  }
]);

// --- MAASTRICHT UNIVERSITY ---
const univ_maastrichtuniversity = db.institutions.insertOne(inst({
  "name": "MAASTRICHT UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Maastricht",
  "province": "Limburg",
  "country": "Netherlands",
  "campuses": [
    "Maastricht"
  ],
  "website": "www.interum.eu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 43 388 2222 (general switchboard)",
      "email": "studentsupport@maastrichtuniversity.nl",
      "address": "Minderbroedersberg 4-6, 6211 LK Maastricht"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career Services: Job placement and internship support",
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "housing": "Housing office: On-campus and partnership accommodation coordination",
    "clubs": "Volunteer organizations: Social causes and humanitarian initiatives"
  },
  "security": {
    "detail": "Cybersecurity: Digital security protocols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_maastrichtuniversity, "MAASTRICHT UNIVERSITY", []);

// --- FONTYS UNIVERSITY OF APPLIED SCIENCES ---
const univ_fontysuniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "FONTYS UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "Eindhoven",
  "province": "North Brabant",
  "country": "Netherlands",
  "campuses": [
    "Eindhoven"
  ],
  "website": "https://www.fontys.nl",
  "application_portal": "Studielink.nl (Dutch government official system)",
  "contacts": {
    "admissions": {
      "phone": "+31 8850 80000",
      "email": "accommodation@fontys.nl"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Holland Scholarship: \u20ac5,000 one-time grant for non-EEA students"
    },
    {
      "name": "Top Talent Scholarship: \u20ac2,100 for Fontys Technology Bachelors (FTB) at Eindhoven; requires 75%+ in Mathematics & Physics"
    },
    {
      "name": "Creative Mind Scholarship: \u20ac3,000 for non-EEA students in Academy for Creative Economy (ACI) programs"
    },
    {
      "name": "Orange Tulip Scholarship (OTS): For eligible countries including India (check details)"
    },
    {
      "name": "NL Scholarship: Partial scholarship for first year; financed by Fontys & Dutch Ministry of Education"
    },
    {
      "name": "Academic Excellence Scholarship: Up to 50% tuition reduction if maintaining superior academic performance"
    }
  ],
  "internships": {
    "part_time_work": "Career Services Centre with job placement support",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Accommodation:",
    "clubs": "Student sports clubs and associations"
  },
  "security": {
    "detail": "Security Infrastructure: Limited specific information publicly disclosed; general campus safety protocols in place"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_fontysuniversityofappliedsciences, "FONTYS UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Information & Communication Technology (ICT)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Logistics Engineering",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Physics / Electrical Engineering",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Applied IT",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Digital Technology Engineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Applied Quantum Technology",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Urbanism",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information & Communication Technology (ICT)",
    "faculty": "Fontys ICT (School of Creative Technology / ICT)",
    "duration_years": 4.0,
    "annual_fee_cad": 18720,
    "total_fee_cad": 74880,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (essential)",
      "additional STEM subjects beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "AI Specialist",
      "Cyber Security Specialist",
      "Game Developer",
      "IoT Specialist",
      "Smart Mobile Developer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Fontys Engineering (School of Business, Building and Technology)",
    "duration_years": 4.0,
    "annual_fee_cad": 18720,
    "total_fee_cad": 74880,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics & Physics (both essential)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Process Engineer",
      "Design Engineer",
      "Systems Engineer",
      "Automotive Engineer",
      "Manufacturing Engineer",
      "R&D Specialist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Logistics Engineering",
    "faculty": "Fontys Logistics (School of Business, Building and Technology)",
    "duration_years": 4.0,
    "annual_fee_cad": 18720,
    "total_fee_cad": 74880,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended",
      "no strict requirements"
    ],
    "entry_roles": [
      "Logistics Coordinator",
      "Supply Chain Manager",
      "Warehouse Manager",
      "Process Engineer",
      "Operations Manager",
      "Logistics Consultant"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in International Business",
    "faculty": "Fontys Business School (School of Commerce and Entrepreneurship)",
    "duration_years": 4.0,
    "annual_fee_cad": 14610,
    "total_fee_cad": 58440,
    "min_class12_percent": 70,
    "required_subjects": [
      "No strict requirements",
      "economics/business background beneficial"
    ],
    "entry_roles": [
      "Business Manager",
      "Marketing Manager",
      "HR Manager",
      "Finance Manager",
      "International Trade Specialist",
      "Consultant"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Applied Physics",
    "faculty": "Fontys Engineering / Applied Natural Sciences (School of Business, Building and Technology)",
    "duration_years": 4.0,
    "annual_fee_cad": 18720,
    "total_fee_cad": 74880,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics & Physics (both essential)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Physics Engineer",
      "Research Scientist",
      "Systems Engineer",
      "Product Developer",
      "Quality Control Specialist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Fontys International Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 10162,
    "total_fee_cad": 20324,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "CEO",
      "General Manager",
      "Financial Manager",
      "Strategic Manager",
      "Project Manager",
      "Business Consultant",
      "Entrepreneur"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied IT",
    "faculty": "Fontys ICT (School of Creative Technology)",
    "duration_years": 1.0,
    "annual_fee_cad": 14610,
    "total_fee_cad": 14610,
    "min_class12_percent": 70,
    "required_subjects": [
      "IT",
      "Software Engineering",
      "Computer Science",
      "or related field"
    ],
    "entry_roles": [
      "Digital Transformation Project Manager",
      "Cloud Architect/Engineer",
      "Smart Industry Consultant",
      "AI Specialist/Engineer",
      "Software Architect/Designer",
      "System Architect/Designer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Digital Technology Engineering",
    "faculty": "Fontys Pulsed Engineering (School of Business, Building and Technology)",
    "duration_years": 2.0,
    "annual_fee_cad": 14610,
    "total_fee_cad": 29220,
    "min_class12_percent": 70,
    "required_subjects": [
      "Technical engineering or ICT background essential"
    ],
    "entry_roles": [
      "Process Analyst",
      "Product Owner",
      "Design Engineer",
      "AI Specialist",
      "Data Scientist",
      "Systems Engineer",
      "Digital Transformation Leader"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied Quantum Technology",
    "faculty": "Fontys Engineering / Applied Natural Sciences (School of Business, Building and Technology)",
    "duration_years": 2.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 606,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantum physics",
      "quantum software",
      "photonics",
      "electronics background preferred"
    ],
    "entry_roles": [
      "Quantum Software Engineer",
      "Photonics Specialist",
      "Quantum Applications Developer",
      "Research Scientist",
      "Electronics Engineer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in Urbanism",
    "faculty": "Fontys Academy for the Built Environment (School of Business, Building and Technology)",
    "duration_years": 2.0,
    "annual_fee_cad": 12855,
    "total_fee_cad": 25710,
    "min_class12_percent": 70,
    "required_subjects": [
      "Urban development",
      "sustainability",
      "built environment",
      "or design background"
    ],
    "entry_roles": [
      "Urban Planner",
      "City Strategist",
      "Sustainability Manager",
      "Infrastructure Developer",
      "Urban Designer",
      "Policy Developer"
    ],
    "features": [],
    "duration_parsed": true
  }
]);

// --- VU AMSTERDAM ---
const univ_vuamsterdam = db.institutions.insertOne(inst({
  "name": "VU AMSTERDAM",
  "abbreviation": "",
  "type": "university",
  "city": "Amsterdam",
  "province": "North Holland",
  "country": "Netherlands",
  "campuses": [
    "Amsterdam"
  ],
  "website": "https://vu.nl",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)20 59 84510 (Mon, Wed, Fri 14:00-16:00 Amsterdam time)",
      "email": "bestuurssecretariaat.beta@vu.nl",
      "address": "De Boelelaan 1085, 1081 HV Amsterdam"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Internship and graduation project coordinators assigned",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Student dormitories and housing support through International Office",
    "clubs": "Student Clubs & Activities:"
  },
  "security": {
    "detail": "Emergency contact numbers and campus evacuation plans available"
  },
  "top_ug_programs": [
    "City & Country\u200b",
    "Department Contact Information\u200b",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)\u200b",
    "Intakes & Deadlines\u200b",
    "Scholarships & Financial Support\u200b"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_vuamsterdam, "VU AMSTERDAM", [
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students\u200b",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Artificial Intelligence\u200b",
    "faculty": "Faculty of Science \u2013 Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 20880,
    "total_fee_cad": 62640,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics recommended",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Roboticist",
      "Autonomous Systems Developer",
      "Research Scientist",
      "AI Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science\u200b",
    "faculty": "Faculty of Science \u2013 Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 20880,
    "total_fee_cad": 62640,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Programming/Computer Science recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Architect",
      "Mobile Developer",
      "Web Developer",
      "Cybersecurity Specialist",
      "IT Consultant",
      "Database Administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business Administration\u200b",
    "faculty": "School of Business and Economics (SBE)",
    "duration_years": 3,
    "annual_fee_cad": 20880,
    "total_fee_cad": 62640,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Economics/Business Studies recommended"
    ],
    "entry_roles": [
      "Business Analyst",
      "International Trade Specialist",
      "Management Consultant",
      "HR Specialist",
      "Operations Manager",
      "Supply Chain Coordinator",
      "Export-Import Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychology\u200b",
    "faculty": "Faculty of Behavioural and Movement Sciences",
    "duration_years": 3,
    "annual_fee_cad": 20880,
    "total_fee_cad": 62640,
    "min_class12_percent": 75,
    "required_subjects": [
      "No strict requirements",
      "Biology/Social Sciences beneficial"
    ],
    "entry_roles": [
      "Research Psychologist",
      "Clinical Psychologist",
      "Organizational Psychologist",
      "HR Specialist",
      "Counselor",
      "UX Researcher",
      "User Research Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Liberal Arts and Sciences\u200b",
    "faculty": "Faculty of Humanities / Faculty of Science (Interdisciplinary)",
    "duration_years": 3,
    "annual_fee_cad": 20880,
    "total_fee_cad": 62640,
    "min_class12_percent": 75,
    "required_subjects": [
      "interdisciplinary approach (mix of humanities, sciences, social sciences)"
    ],
    "entry_roles": [
      "Policy Analyst",
      "Research Associate",
      "Management Consultant",
      "NGO Program Officer",
      "Journalist",
      "Education Coordinator",
      "International Development Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Psychology\u200b",
    "faculty": "Faculty of Behavioural and Movement Sciences",
    "duration_years": 2,
    "annual_fee_cad": 36225,
    "total_fee_cad": 72450,
    "min_class12_percent": 70,
    "required_subjects": [
      "Psychology",
      "Cognitive Science",
      "Neuroscience",
      "related social/behavioral sciences"
    ],
    "entry_roles": [
      "Clinical Psychologist",
      "Organizational Psychologist",
      "Research Psychologist",
      "HR Manager",
      "Counselor",
      "Behavioral Analyst",
      "UX Researcher",
      "Employee Wellness Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Artificial Intelligence\u200b",
    "faculty": "Faculty of Science \u2013 Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 36225,
    "total_fee_cad": 72450,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science",
      "Programming (Python/Java proficiency required)",
      "foundational AI knowledge"
    ],
    "entry_roles": [
      "AI Research Scientist",
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Consultant",
      "Autonomous Systems Developer",
      "NLP Engineer",
      "Computer Vision Specialist",
      "AI Product Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computer Science\u200b",
    "faculty": "Faculty of Science \u2013 Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 36225,
    "total_fee_cad": 72450,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science",
      "Software Engineering",
      "Mathematics",
      "related technical disciplines"
    ],
    "entry_roles": [
      "Software Architect",
      "Systems Engineer",
      "Senior Developer",
      "Research Scientist",
      "Cybersecurity Specialist",
      "Cloud Engineer",
      "Tech Lead",
      "Software Engineering Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bioinformatics and Systems Biology\u200b",
    "faculty": "Faculty of Science \u2013 Bioinformatics / Biology",
    "duration_years": 2,
    "annual_fee_cad": 35235,
    "total_fee_cad": 70470,
    "min_class12_percent": 70,
    "required_subjects": [
      "Life Sciences",
      "Computational Biology",
      "Statistics",
      "Mathematics",
      "Chemistry",
      "Molecular Biology"
    ],
    "entry_roles": [
      "Bioinformatician",
      "Research Scientist",
      "Computational Biologist",
      "Systems Biologist",
      "Pharmaceutical Research Specialist",
      "Biotech Scientist",
      "Data Analyst (Life Sciences)",
      "Genomics Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Analytics\u200b",
    "faculty": "School of Business and Economics (SBE)",
    "duration_years": 2,
    "annual_fee_cad": 36225,
    "total_fee_cad": 72450,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "Quantitative Methods",
      "Statistics",
      "Data Science",
      "Economics",
      "Computer Science"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Management Consultant",
      "Financial Analyst",
      "Marketing Analyst",
      "Operations Analyst",
      "Strategy Consultant",
      "Business Intelligence Specialist"
    ],
    "features": []
  }
]);

// --- TILBURG UNIVERSITY ---
const univ_tilburguniversity = db.institutions.insertOne(inst({
  "name": "TILBURG UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Tilburg",
  "province": "North Brabant",
  "country": "Netherlands",
  "campuses": [
    "Tilburg"
  ],
  "website": "https://www.tilburguniversity.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)13 466 4477",
      "email": "studyabroad@tilburguniversity.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Camera placement proportional to security needs; restricted from sensitive areas (toilets, changing rooms)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "40+ student organizations available",
    "housing": "Estimated monthly living costs: \u20ac925-\u20ac1,125 (accommodation \u20ac600, food \u20ac250, books \u20ac65, insurance \u20ac50-\u20ac140)"
  },
  "security": {
    "detail": "Emergency response protocols established"
  },
  "top_ug_programs": [
    "City & Country\u200b",
    "Department Contact Information\u200b",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)\u200b",
    "Intakes & Deadlines\u200b",
    "Scholarships & Financial Support\u200b"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_tilburguniversity, "TILBURG UNIVERSITY", [
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students\u200b",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Cognitive Science and Artificial Intelligence\u200b",
    "faculty": "Faculty of Humanities and Digital Sciences",
    "duration_years": 3,
    "annual_fee_cad": 15300,
    "total_fee_cad": 45900,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (essential)",
      "Physics/Computer Science beneficial"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Roboticist",
      "Autonomous Systems Developer",
      "Research Scientist",
      "AI Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychology\u200b",
    "faculty": "Faculty of Social and Behavioral Sciences",
    "duration_years": 3,
    "annual_fee_cad": 15300,
    "total_fee_cad": 45900,
    "min_class12_percent": 75,
    "required_subjects": [
      "No strict requirements",
      "Biology/Social Sciences beneficial"
    ],
    "entry_roles": [
      "Research Psychologist",
      "Clinical Psychologist",
      "Organizational Psychologist",
      "HR Specialist",
      "Counselor",
      "UX Researcher",
      "Behavioral Analyst",
      "Employee Wellness Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business Administration\u200b",
    "faculty": "School of Business and Economics (TiSEM \u2013 Tilburg Institute for Socio-Economic and Organization Studies)",
    "duration_years": 3,
    "annual_fee_cad": 15300,
    "total_fee_cad": 45900,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Economics/Business Studies beneficial"
    ],
    "entry_roles": [
      "International Business Manager",
      "Business Analyst",
      "Supply Chain Coordinator",
      "Marketing Manager",
      "Finance Manager",
      "HR Manager",
      "Management Consultant",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration\u200b",
    "faculty": "School of Business and Economics (TiSEM)",
    "duration_years": 3,
    "annual_fee_cad": 15300,
    "total_fee_cad": 45900,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Business/Economics beneficial"
    ],
    "entry_roles": [
      "Business Manager",
      "Operations Manager",
      "Project Manager",
      "Marketing Manager",
      "Finance Manager",
      "HR Manager",
      "Strategic Analyst",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics\u200b",
    "faculty": "School of Business and Economics (TiSEM)",
    "duration_years": 3,
    "annual_fee_cad": 15300,
    "total_fee_cad": 45900,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (essential)",
      "Economics beneficial"
    ],
    "entry_roles": [
      "Economist",
      "Data Analyst",
      "Financial Analyst",
      "Policy Analyst",
      "Research Economist",
      "Business Analyst",
      "Consultant",
      "Academic Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Human Resource Studies\u200b",
    "faculty": "School of Business and Economics (TiSEM)",
    "duration_years": 2,
    "annual_fee_cad": 28350,
    "total_fee_cad": 56700,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business Administration",
      "Psychology",
      "Organizational Studies",
      "Economics",
      "Social Sciences"
    ],
    "entry_roles": [
      "HR Manager",
      "Recruitment Specialist",
      "Talent Development Manager",
      "HR Consultant",
      "Employee Relations Manager",
      "Organizational Development Specialist",
      "Learning & Development Specialist",
      "Compensation & Benefits Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance\u200b",
    "faculty": "School of Business and Economics (TiSEM)",
    "duration_years": 2,
    "annual_fee_cad": 28350,
    "total_fee_cad": 56700,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "Business Administration",
      "Accounting",
      "Financial Management"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Corporate Finance Manager",
      "Risk Manager",
      "Financial Controller",
      "Business Analyst",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management Analytics \u2013 Research Master in Economics\u200b",
    "faculty": "School of Business and Economics (TiSEM)",
    "duration_years": 2,
    "annual_fee_cad": 34050,
    "total_fee_cad": 68100,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative/analytical background",
      "business or economics focus"
    ],
    "entry_roles": [
      "Data-Empowered Manager",
      "Business Analytics Manager",
      "Management Consultant",
      "Strategy Manager",
      "Finance Manager",
      "Operations Manager",
      "Supply Chain Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Artificial Intelligence \u2013 Cognitive Science and AI Master's\u200b",
    "faculty": "Faculty of Humanities and Digital Sciences",
    "duration_years": 2,
    "annual_fee_cad": 34050,
    "total_fee_cad": 68100,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong programming foundation (Python/Java)",
      "foundational AI knowledge",
      "cognitive science or neuroscience beneficial"
    ],
    "entry_roles": [
      "AI Research Scientist",
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Consultant",
      "Autonomous Systems Developer",
      "NLP Engineer",
      "Computer Vision Specialist",
      "Roboticist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Analytics and Operations Research\u200b",
    "faculty": "School of Business and Economics (TiSEM)",
    "duration_years": 2,
    "annual_fee_cad": 28350,
    "total_fee_cad": 56700,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative methods",
      "Statistics",
      "Operations Research",
      "Data Science",
      "Computer Science"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Operations Analyst",
      "Supply Chain Manager",
      "Process Improvement Manager",
      "Management Consultant",
      "Analytics Specialist",
      "Business Intelligence Manager"
    ],
    "features": []
  }
]);

// --- ERASMUS UNIVERSITY ROTTERDAM ---
const univ_erasmusuniversityrotterdam = db.institutions.insertOne(inst({
  "name": "ERASMUS UNIVERSITY ROTTERDAM",
  "abbreviation": "",
  "type": "university",
  "city": "Rotterdam",
  "province": "South Holland",
  "country": "Netherlands",
  "campuses": [
    "Rotterdam"
  ],
  "website": "https://www.eur.nl/en/\u00a0(main portal)",
  "application_portal": "https://www.rsm.nl/\u00a0(dedicated application portal)",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)10 408 8888",
      "email": "international@eur.nl\u00a0(general inquiries)",
      "address": "Various faculty buildings across Woudestein Campus"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Student careers service: Job placement and internship support",
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "housing": "Disability services: Accessibility accommodations and support",
    "clubs": "Sports clubs: 30+ student-run sports clubs"
  },
  "security": {
    "detail": "Cybersecurity: Digital security protocols; IT security systems"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_erasmusuniversityrotterdam, "ERASMUS UNIVERSITY ROTTERDAM", [
  {
    "level": "UG",
    "name": "Bachelor of Science Economics and Business Economics \u2014 International :\u00a0Bachelor of Science (BSc) Economics and Business Economics \u2014 International Track (3-Year Programme)",
    "faculty": "Erasmus School of Economics (ESE); Economics and Business Economics Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts International Communication and Media",
    "faculty": "Erasmus School of History, Culture and Communication (ESHCC); Communication and Media Studies",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts Erasmus University College \u2014 Liberal Arts & Sciences :\u00a0Bachelor of Arts (BA) Erasmus University College (EUC) \u2014 Liberal Arts & Sciences: Global Challenges (3-Year Programme) \u2014 The Hague",
    "faculty": "Erasmus University College (EUC); The Hague Campus; Liberal Arts Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 17550,
    "total_fee_cad": 52650,
    "min_class12_percent": 80,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Business Administration",
    "faculty": "Rotterdam School of Management (RSM); Business Administration Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Business Administration International",
    "faculty": "Rotterdam School of Management (RSM); MBA Programme",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science International Management",
    "faculty": "Rotterdam School of Management (RSM); Master's Programmes",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Quantitative Finance",
    "faculty": "Rotterdam School of Management (RSM) / Erasmus School of Economics (ESE); Quantitative Finance Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Business Analytics and Management",
    "faculty": "Rotterdam School of Management (RSM); Business Analytics Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Supply Chain Management",
    "faculty": "Rotterdam School of Management (RSM); Supply Chain Management Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- UNIVERSITY OF GRONINGEN ---
const univ_universityofgroningen = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF GRONINGEN",
  "abbreviation": "",
  "type": "university",
  "city": "Groningen",
  "province": "Groningen",
  "country": "Netherlands",
  "campuses": [
    "Groningen"
  ],
  "website": "https://www.rug.nl",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31(0)50 363 7231",
      "email": "r.j.van.groningen@rug.nl"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/Placement Support:",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities:",
    "housing": "Student housing: Dormitories, shared apartments, private studios"
  },
  "security": {
    "detail": "Safety Campus Assen partnership (joint security research, crisis simulation center)"
  },
  "top_ug_programs": [
    "City & Country\u200b",
    "Department Contact Information\u200b",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)\u200b",
    "Intakes & Deadlines\u200b",
    "Scholarships & Financial Support\u200b"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_universityofgroningen, "UNIVERSITY OF GRONINGEN", [
  {
    "level": "UG",
    "name": "Artificial Intelligence\u200b",
    "faculty": "Faculty of Science and Engineering",
    "duration_years": 3,
    "annual_fee_cad": 29700,
    "total_fee_cad": 89100,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics A or B",
      "Physics recommended"
    ],
    "entry_roles": [
      "AI Engineer",
      "Data Scientist",
      "Autonomous Systems Developer",
      "Machine Learning Specialist",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computing Science\u200b",
    "faculty": "Faculty of Science and Engineering",
    "duration_years": 3,
    "annual_fee_cad": 29700,
    "total_fee_cad": 89100,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics A or B",
      "Physics/Computer Science recommended"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Architect",
      "Mobile App Developer",
      "Web Developer",
      "IT Consultant",
      "Cybersecurity Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business\u200b",
    "faculty": "Faculty of Economics and Business (FEB)",
    "duration_years": 3,
    "annual_fee_cad": 17700,
    "total_fee_cad": 53100,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics A or B",
      "Economics/Business Studies recommended"
    ],
    "entry_roles": [
      "International Business Analyst",
      "Supply Chain Manager",
      "Business Consultant",
      "Market Research Analyst",
      "Export-Import Manager",
      "International Trade Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemical Engineering\u200b",
    "faculty": "Faculty of Science and Engineering",
    "duration_years": 3,
    "annual_fee_cad": 29700,
    "total_fee_cad": 89100,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics A or B",
      "Chemistry",
      "Physics"
    ],
    "entry_roles": [
      "Chemical Engineer",
      "Process Engineer",
      "Research & Development Specialist",
      "Environmental Engineer",
      "Pharmaceutical Engineer",
      "Plant Operations Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Liberal Arts and Sciences\u200b",
    "faculty": "University College Groningen (UCG)",
    "duration_years": 3,
    "annual_fee_cad": 25800,
    "total_fee_cad": 77400,
    "min_class12_percent": 75,
    "required_subjects": [
      "No strict subjects",
      "interdisciplinary approach"
    ],
    "entry_roles": [
      "Policy Analyst",
      "Research Associate",
      "Consultant",
      "Education Manager",
      "Non-Profit Manager",
      "International Development Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Psychology\u200b",
    "faculty": "Faculty of Behavioural and Social Sciences",
    "duration_years": 2,
    "annual_fee_cad": 32100,
    "total_fee_cad": 64200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Psychology",
      "Cognitive Science",
      "Neuroscience",
      "or closely related disciplines"
    ],
    "entry_roles": [
      "Clinical Psychologist",
      "Organizational Psychologist",
      "Research Psychologist",
      "HR Specialist",
      "Counselor",
      "Behavioral Analyst",
      "UX Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Human Resource Management\u200b",
    "faculty": "Faculty of Economics and Business (FEB)",
    "duration_years": 2,
    "annual_fee_cad": 31200,
    "total_fee_cad": 62400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business Administration",
      "Psychology",
      "Organizational Studies",
      "Economics"
    ],
    "entry_roles": [
      "HR Manager",
      "Recruitment Specialist",
      "Talent Development Manager",
      "HR Consultant",
      "Employee Relations Manager",
      "Organizational Development Specialist",
      "HR Analytics Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Communication and Information Studies\u200b",
    "faculty": "Faculty of Arts",
    "duration_years": 2,
    "annual_fee_cad": 28050,
    "total_fee_cad": 56100,
    "min_class12_percent": 70,
    "required_subjects": [
      "Communication Studies",
      "Journalism",
      "Media Studies",
      "Linguistics",
      "Information Science"
    ],
    "entry_roles": [
      "Communications Manager",
      "PR Officer",
      "Journalist",
      "Media Advisor",
      "Content Strategist",
      "Communications Advisor",
      "Editor",
      "Web Coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Nanoscience\u200b",
    "faculty": "Faculty of Science and Engineering",
    "duration_years": 2,
    "annual_fee_cad": 37350,
    "total_fee_cad": 74700,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Materials Science",
      "Nanotechnology",
      "Engineering"
    ],
    "entry_roles": [
      "Nanoscience Researcher",
      "Materials Scientist",
      "Semiconductor Engineer",
      "R&D Scientist",
      "Nanotechnology Specialist",
      "Physics Researcher",
      "Product Development Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Business and Management\u200b",
    "faculty": "Faculty of Economics and Business (FEB)",
    "duration_years": 2,
    "annual_fee_cad": 33300,
    "total_fee_cad": 66600,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business Economics",
      "Business Administration",
      "Economics",
      "International Business"
    ],
    "entry_roles": [
      "International Business Manager",
      "Business Analyst",
      "Consultant",
      "Market Research Manager",
      "Export-Import Manager",
      "Multinational Corporation Specialist",
      "Strategic Manager"
    ],
    "features": []
  }
]);

// --- TU DELFT ---
const univ_tudelft = db.institutions.insertOne(inst({
  "name": "TU DELFT",
  "abbreviation": "",
  "type": "university",
  "city": "Delft",
  "province": "South Holland",
  "country": "Netherlands",
  "campuses": [
    "Delft"
  ],
  "website": "https://www.tudelft.nl",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "Mekelweg 2, 2628 CD Delft, Netherlands"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes"
    },
    {
      "name": "Justus & Louise van Effen Excellence Scholarship: Full tuition fees per year for 2-year MSc + living expense contribution (approximately \u20ac30,000/year total value)"
    },
    {
      "name": "2 scholarships per faculty per academic year"
    },
    {
      "name": "For excellent international MSc applicants (top 10% of class)"
    },
    {
      "name": "Covers tuition fees based on statutory or institutional rate + living expense contribution"
    },
    {
      "name": "Application deadline: December 1, 2025"
    },
    {
      "name": "NL Scholarship (Netherlands Scholarship): \u20ac5,000 one-time payment in first year"
    },
    {
      "name": "For non-EEA nationals admitted to 2-year regular TU Delft MSc programs"
    },
    {
      "name": "Application deadline: February 1, 2026"
    },
    {
      "name": "Faculty Scholarship Applied Sciences: Merit-based for excellent international MSc applicants"
    },
    {
      "name": "For applicants with cumulative GPA 80%+ or higher"
    },
    {
      "name": "Holland Scholarship: Available through partner institutions; varies by program"
    },
    {
      "name": "Erasmus Mundus Joint Programmes: Available for participating Master\u2019s programs"
    },
    {
      "name": "Institutional Rate Reduction: Non-EU students who attended preparatory language year (ITAV) eligible for reduced institutional rate of \u20ac18,175 (BSc) or \u20ac19,084 (future years) instead of standard non-EU rate"
    }
  ],
  "internships": {
    "part_time_work": "Faculty-specific internship coordination and placement assistance",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing Services: Partnerships with DUWO and other housing agencies in Delft region",
    "clubs": "Student organizations: Multiple clubs and associations available"
  },
  "security": {
    "detail": "Campus security presence; standard university safety measures"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_tudelft, "TU DELFT", [
  {
    "level": "UG",
    "name": "BSc Aerospace Engineering (English-taught, 3 years, popular international program)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Civil Engineering (Dutch majority, limited English option)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Mechanical Engineering (Dutch majority, some English tracks)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Electrical Engineering (Dutch majority, partial English)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Chemical Engineering (Dutch majority, some English-taught sections)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science (24 months, English-taught, popular with Indian students)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Aerospace Engineering (24 months, English-taught, leading European program)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Civil Engineering (English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science and Artificial Intelligence Technology (English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Electrical Engineering (English-taught)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Aerospace Engineering (English-taught)",
    "faculty": "Faculty of Aerospace Engineering, TU Delft",
    "duration_years": 3,
    "annual_fee_cad": 25965,
    "total_fee_cad": 77895,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "mathematics strongly required"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "aircraft design engineer",
      "structural engineer",
      "flight systems engineer",
      "space engineer",
      "wind energy engineer",
      "satellite systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Civil Engineering (Limited English Tracks Available)",
    "faculty": "Faculty of Civil Engineering and Geosciences, TU Delft",
    "duration_years": 3,
    "annual_fee_cad": 25965,
    "total_fee_cad": 77895,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "chemistry"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "water management engineer",
      "transport engineer",
      "geotechnical engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Mechanical Engineering (Partial English Options)",
    "faculty": "Faculty of Mechanical Engineering, TU Delft",
    "duration_years": 3,
    "annual_fee_cad": 25965,
    "total_fee_cad": 77895,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "mechanics"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "product design engineer",
      "thermal systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Electrical Engineering (Partial English Options)",
    "faculty": "Faculty of Electrical Engineering, Mathematics and Computer Science (EEMCS), TU Delft",
    "duration_years": 3,
    "annual_fee_cad": 25965,
    "total_fee_cad": 77895,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "electronics"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "embedded systems engineer",
      "automation engineer",
      "renewable energy engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Chemical Engineering (Limited English Options)",
    "faculty": "Faculty of Applied Sciences, TU Delft",
    "duration_years": 3,
    "annual_fee_cad": 25965,
    "total_fee_cad": 77895,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "mathematics",
      "physics"
    ],
    "entry_roles": [
      "Chemical engineer",
      "process engineer",
      "environmental engineer",
      "materials engineer",
      "pharmaceutical engineer",
      "safety engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science",
    "faculty": "Faculty of Electrical Engineering, Mathematics and Computer Science (EEMCS), TU Delft",
    "duration_years": 2,
    "annual_fee_cad": 33435,
    "total_fee_cad": 66870,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering bachelor with strong computer science foundation",
      "minimum 120 ECTS in computer science courses required"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "systems architect",
      "cloud engineer",
      "cybersecurity engineer",
      "AI specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Aerospace Engineering",
    "faculty": "Faculty of Aerospace Engineering, TU Delft",
    "duration_years": 2,
    "annual_fee_cad": 33435,
    "total_fee_cad": 66870,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong engineering foundation",
      "aeronautical/astronautical/mechanical/aircraft design background preferred"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "aircraft design engineer",
      "structural engineer",
      "systems engineer",
      "propulsion engineer",
      "space mission engineer",
      "flight test engineer",
      "wind energy engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Civil Engineering",
    "faculty": "Faculty of Civil Engineering and Geosciences, TU Delft",
    "duration_years": 2,
    "annual_fee_cad": 33435,
    "total_fee_cad": 66870,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong engineering foundation in structural analysis",
      "geotechnics",
      "or hydraulics"
    ],
    "entry_roles": [
      "Structural engineer",
      "bridge engineer",
      "geotechnical engineer",
      "water management engineer",
      "transportation engineer",
      "construction manager",
      "infrastructure planner"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science and Artificial Intelligence Technology",
    "faculty": "Faculty of Electrical Engineering, Mathematics and Computer Science (EEMCS), TU Delft",
    "duration_years": 2,
    "annual_fee_cad": 33435,
    "total_fee_cad": 66870,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "programming",
      "machine learning",
      "or statistics"
    ],
    "entry_roles": [
      "Data scientist",
      "AI engineer",
      "machine learning specialist",
      "research scientist",
      "data analyst",
      "big data engineer",
      "AI systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Electrical Engineering",
    "faculty": "Faculty of Electrical Engineering, Mathematics and Computer Science (EEMCS), TU Delft",
    "duration_years": 2,
    "annual_fee_cad": 33435,
    "total_fee_cad": 66870,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in electrical systems",
      "power systems",
      "electronics",
      "or electromagnetics"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "renewable energy engineer",
      "embedded systems engineer",
      "control systems engineer",
      "automation engineer",
      "smart grid engineer"
    ],
    "features": []
  }
]);

// --- HANZE UNIVERSITY OF APPLIED SCIENCES ---
const univ_hanzeuniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "HANZE UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "Groningen",
  "province": "Groningen",
  "country": "Netherlands",
  "campuses": [
    "Groningen"
  ],
  "website": "https://www.hanze.nl",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)50 595 7800 / 2200",
      "email": "immigration@org.hanze.nl",
      "address": "Zernikeplein 7, Room A0.19, 9747 AS Groningen"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Internship coordinators and supervisors assigned",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Campus safety guidance for student organizations",
    "housing": "Student accommodation assistance (private market; recommend starting 3+ months before arrival)"
  },
  "security": {
    "detail": "Security Infrastructure:"
  },
  "top_ug_programs": [
    "City & Country\u200b",
    "Department Contact Information\u200b",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)\u200b",
    "Intakes & Deadlines\u200b",
    "Scholarships & Financial Support\u200b"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_hanzeuniversityofappliedsciences, "HANZE UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students\u200b",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business (4-year programme)\u200b",
    "faculty": "International Business School (IBS)",
    "duration_years": 3,
    "annual_fee_cad": 13573,
    "total_fee_cad": 40719,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics beneficial",
      "no strict requirements"
    ],
    "entry_roles": [
      "International Business Manager",
      "Trade Manager",
      "Import-Export Specialist",
      "Business Consultant",
      "Marketing Manager",
      "Supply Chain Coordinator",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business (3-year programme)\u200b",
    "faculty": "International Business School (IBS)",
    "duration_years": 3,
    "annual_fee_cad": 13573,
    "total_fee_cad": 40719,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "business background beneficial"
    ],
    "entry_roles": [
      "International Business Manager",
      "Trade Manager",
      "Import-Export Specialist",
      "Business Consultant",
      "Marketing Manager",
      "Operations Manager",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering\u200b",
    "faculty": "School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 13573,
    "total_fee_cad": 40719,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics recommended"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Production Manager",
      "Project Leader",
      "Manufacturing Engineer",
      "Energy Transition Specialist",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Energy & Power Electronics\u200b",
    "faculty": "School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 13573,
    "total_fee_cad": 40719,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "technical background beneficial"
    ],
    "entry_roles": [
      "Energy Engineer",
      "Power Systems Engineer",
      "Electrical Engineer",
      "Renewable Energy Specialist",
      "Design Engineer",
      "Project Engineer",
      "Technical Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Sensors & Smart Systems\u200b",
    "faculty": "School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 13573,
    "total_fee_cad": 40719,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "IT/electronics background beneficial"
    ],
    "entry_roles": [
      "Embedded Systems Engineer",
      "IoT Engineer",
      "Sensor Engineer",
      "Software Engineer",
      "Systems Designer",
      "Technical Engineer",
      "Product Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in International Business and Management\u200b",
    "faculty": "International Business School (IBS) \u2013 Masters",
    "duration_years": 2,
    "annual_fee_cad": 13573,
    "total_fee_cad": 27146,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "Management",
      "Economics",
      "or related discipline"
    ],
    "entry_roles": [
      "International Business Manager",
      "Management Consultant",
      "Supply Chain Manager",
      "HR Manager",
      "Strategic Manager",
      "Finance Manager",
      "Marketing Manager",
      "Multinational Corporation Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "European Master in Renewable Energy\u200b",
    "faculty": "School of Engineering \u2013 Renewable Energy",
    "duration_years": 2,
    "annual_fee_cad": 14625,
    "total_fee_cad": 29250,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in Mathematics",
      "Physics",
      "or Engineering",
      "renewable energy or sustainability background beneficial"
    ],
    "entry_roles": [
      "Renewable Energy Engineer",
      "Energy Systems Manager",
      "Project Manager (Renewable Energy)",
      "Policy Analyst",
      "Solar/Wind Engineer",
      "Energy Consultant",
      "Sustainability Specialist",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "European Master in Sustainable Energy System Management\u200b",
    "faculty": "School of Engineering \u2013 Energy Management",
    "duration_years": 2,
    "annual_fee_cad": 14625,
    "total_fee_cad": 29250,
    "min_class12_percent": 70,
    "required_subjects": [
      "Energy systems",
      "environmental management",
      "or sustainable development background"
    ],
    "entry_roles": [
      "Energy Manager",
      "Sustainability Consultant",
      "Systems Analyst",
      "Policy Officer",
      "Project Manager (Energy)",
      "Carbon Management Specialist",
      "Environmental Consultant",
      "Energy Transition Leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Data Science for Life Sciences\u200b",
    "faculty": "School of Applied Sciences \u2013 Data Science",
    "duration_years": 2,
    "annual_fee_cad": 13953,
    "total_fee_cad": 27906,
    "min_class12_percent": 70,
    "required_subjects": [
      "Must demonstrate proficiency in programming",
      "data science",
      "biology (diploma, certificate, portfolio, or entry test score)"
    ],
    "entry_roles": [
      "Bioinformatician",
      "Data Scientist (Life Sciences)",
      "Research Scientist",
      "Biotech Analyst",
      "Pharmaceutical Data Analyst",
      "Healthcare Data Manager",
      "Genomics Specialist",
      "Computational Biologist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Studies \u2013 Interdisciplinary Business Professional\u200b",
    "faculty": "School of Business and Economics",
    "duration_years": 2,
    "annual_fee_cad": 13573,
    "total_fee_cad": 27146,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business Administration",
      "Management",
      "Economics",
      "or related discipline"
    ],
    "entry_roles": [
      "Business Manager",
      "Strategic Analyst",
      "Management Consultant",
      "Operations Manager",
      "Finance Manager",
      "Project Manager",
      "Business Analyst",
      "Entrepreneur"
    ],
    "features": []
  }
]);

// --- SAXION UNIVERSITY OF APPLIED SCIENCES ---
const univ_saxionuniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "SAXION UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "Enschede",
  "province": "Overijssel",
  "country": "Netherlands",
  "campuses": [
    "Enschede"
  ],
  "website": "https://www.saxion.edu",
  "application_portal": "Studielink (online application portal)",
  "contacts": {
    "admissions": {
      "phone": "+31 880193400",
      "email": "admissions@saxion.nl"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Holland Scholarship (HS): For first-time Bachelor/Master students from non-EU/EEA countries; GPA 80%+ required; IELTS 7.0+"
    },
    {
      "name": "Orange Tulip Scholarship (OTS): Exclusive for nationals of Brazil, China, Indonesia, Korea, Mexico, Russia, Vietnam, South Africa, India; Bachelor programs only; GPA 80%+; IELTS 7.0+"
    },
    {
      "name": "Saxion Talent Scholarship (STS): Non-EU/EEA students in Bachelor programs; GPA 70%+; IELTS 6.0+"
    },
    {
      "name": "Saxion Excellent Scholarship (SES): For continuing Bachelor students (2nd-4th year) from non-EU/EEA countries"
    }
  ],
  "internships": {
    "part_time_work": "Internship coordination through official internships office",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Multiple student societies and associations",
    "housing": "First-year international students from non-EU/EEA guaranteed housing"
  },
  "security": {
    "detail": "Safety Measures: General campus security with student welfare focus"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_saxionuniversityofappliedsciences, "SAXION UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "UG",
    "name": "Applied Computer Science",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Information Technology",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical & Electronic Engineering",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Hotel Management",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Human Resource Management",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in Management",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master ICT",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied Nanotechnology",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Innovative Textile Development",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Computer Science",
    "faculty": "School of Creative Technology",
    "duration_years": 4.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 56160,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics & Physics (essential)"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "Embedded Systems Engineer",
      "Computer Vision Specialist",
      "Data Analyst"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Business Information Technology",
    "faculty": "School of Business, Building and Technology",
    "duration_years": 4.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 56160,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (essential)",
      "Business/Economics beneficial"
    ],
    "entry_roles": [
      "IT Business Analyst",
      "Systems Designer",
      "Business Consultant",
      "Project Manager",
      "IT Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Electrical & Electronic Engineering",
    "faculty": "School of Business, Building and Technology",
    "duration_years": 4.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 56160,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics & Physics (both essential)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Electronics Design Engineer",
      "Automation Engineer",
      "Power Systems Engineer",
      "Firmware Developer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Hotel Management",
    "faculty": "Hospitality Business School",
    "duration_years": 4.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 56160,
    "min_class12_percent": 70,
    "required_subjects": [
      "No strict requirements",
      "business/hospitality background beneficial"
    ],
    "entry_roles": [
      "Hotel Manager",
      "General Manager",
      "Event Manager",
      "Food & Beverage Manager",
      "Front Office Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in International Human Resource Management",
    "faculty": "School of Applied Psychology and Human Resource Management",
    "duration_years": 4.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 56160,
    "min_class12_percent": 70,
    "required_subjects": [
      "No strict requirements",
      "economics not required but beneficial"
    ],
    "entry_roles": [
      "HR Business Partner",
      "Recruitment Specialist",
      "Organisational Development Manager",
      "HR Consultant",
      "People Operations Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Nijmegen School of Management / Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 14040,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "economics",
      "finance preferred"
    ],
    "entry_roles": [
      "General Manager",
      "Financial Manager",
      "Operations Manager",
      "HR Manager",
      "Project Manager",
      "Procurement Manager",
      "Business Analyst"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Arts in Management",
    "faculty": "Nijmegen School of Management / Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 14040,
    "total_fee_cad": 14040,
    "min_class12_percent": 70,
    "required_subjects": [
      "Management",
      "business",
      "leadership preferred",
      "diverse backgrounds considered"
    ],
    "entry_roles": [
      "Manager",
      "Director",
      "Business Development Manager",
      "Operations Manager",
      "Strategy Manager",
      "Innovation Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master ICT",
    "faculty": "School of Creative Technology",
    "duration_years": 1.0,
    "annual_fee_cad": 15840,
    "total_fee_cad": 15840,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science",
      "Software Development",
      "IT",
      "or equivalent"
    ],
    "entry_roles": [
      "Software Architect",
      "Lead Developer",
      "DataOps Engineer",
      "Software Engineer",
      "Systems Engineer",
      "IT Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied Nanotechnology",
    "faculty": "School of Life Science, Engineering and Design",
    "duration_years": 2.0,
    "annual_fee_cad": 15840,
    "total_fee_cad": 31680,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Chemical Engineering",
      "Electrical Engineering",
      "Materials Science",
      "or related field"
    ],
    "entry_roles": [
      "Nanotechnology Engineer",
      "Product Development Manager",
      "Research Scientist",
      "Process Engineer",
      "Quality Control Manager",
      "Innovation Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in Innovative Textile Development",
    "faculty": "School of Creative Technology",
    "duration_years": 1.5,
    "annual_fee_cad": 15840,
    "total_fee_cad": 23760,
    "min_class12_percent": 70,
    "required_subjects": [
      "Textiles",
      "Materials Science",
      "Engineering",
      "Fashion",
      "Chemical Engineering",
      "Industrial Design"
    ],
    "entry_roles": [
      "Product Manager",
      "Innovation Manager",
      "Product Development Manager",
      "Business Development Manager",
      "Sustainability Manager",
      "Design Manager"
    ],
    "features": [],
    "duration_parsed": true
  }
]);

// --- UNIVERSITY OF AMSTERDAM ---
const univ_universityofamsterdam = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF AMSTERDAM",
  "abbreviation": "",
  "type": "university",
  "city": "Amsterdam",
  "province": "North Holland",
  "country": "Netherlands",
  "campuses": [
    "Amsterdam"
  ],
  "website": "https://www.uva.nl/en/education/admissions/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)20 525 8300 (main switchboard)",
      "address": "Roetersstraat 11, 1018 WB Amsterdam, Netherlands"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "International Student Support: Safety guidance and support for study abroad placements",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "housing": "Partnerships with housing services (Twenty Campus network)",
    "clubs": "Sports associations (20+ clubs; badminton, rowing, rugby, water polo, ice hockey, ultimate frisbee, etc.)"
  },
  "security": {
    "detail": "Cybersecurity: Security Operations Center (SOC) and CERT team; two-factor verification for logins"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_universityofamsterdam, "UNIVERSITY OF AMSTERDAM", [
  {
    "level": "UG",
    "name": "Bachelor of Science Business Administration",
    "faculty": "Faculty of Economics and Business; Amsterdam Business School (ABS)",
    "duration_years": 0.3333333333333333,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Actuarial Science",
    "faculty": "Faculty of Science; Mathematics and Actuarial Science Department",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Economics and Business",
    "faculty": "Faculty of Economics and Business; Amsterdam School of Economics (ASE)",
    "duration_years": 0.3333333333333333,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Econometrics and Data Science",
    "faculty": "Faculty of Economics and Business; Econometrics Department",
    "duration_years": 0.3333333333333333,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Laws",
    "faculty": "Faculty of Law; International and Commercial Law Department",
    "duration_years": 0.3333333333333333,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "MBA (Amsterdam MBA)",
    "faculty": "Faculty of Economics and Business; Amsterdam MBA Office",
    "duration_years": 1.0,
    "annual_fee_cad": 78000,
    "total_fee_cad": 78000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Artificial Intelligence",
    "faculty": "Faculty of Science; Computer Science Department; AI Institute",
    "duration_years": 1.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 24750,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Data Science",
    "faculty": "Faculty of Science / Faculty of Economics and Business; Data Science Institute",
    "duration_years": 1.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 24750,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in Business Economics",
    "faculty": "Faculty of Economics and Business; Amsterdam School of Economics",
    "duration_years": 1.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 24750,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Computer Science",
    "faculty": "Faculty of Science; Computer Science Department",
    "duration_years": 1.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 24750,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- HOTELSCHOOL THE HAGUE ---
const univ_hotelschoolthehague = db.institutions.insertOne(inst({
  "name": "HOTELSCHOOL THE HAGUE",
  "abbreviation": "",
  "type": "university",
  "city": "The Hague",
  "province": "South Holland",
  "country": "Netherlands",
  "campuses": [
    "The Hague"
  ],
  "website": "https://www.hotelschool.nl",
  "application_portal": "Studielink (https://www.studielink.nl) \u2192 then OSIRIS registration system at Hotelschool",
  "contacts": {
    "admissions": {
      "email": "info@hotelschool.nl",
      "phone": "+31 (0)70 3512481"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "For Fast-Track: placement evaluation, employer references, recommendation letter",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Fraternities, sororities, year clubs, committees",
    "housing": "Housing: First-year students accommodated in Skotel (on-campus); shared rooms; approximately \u20ac500-600/month for additional years"
  },
  "security": {
    "detail": "Modern, recently renovated facilities with contemporary security measures"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_hotelschoolthehague, "HOTELSCHOOL THE HAGUE", [
  {
    "level": "UG",
    "name": "Bachelor of Arts in Hospitality Management",
    "faculty": "Hospitality Management Division",
    "duration_years": 3,
    "annual_fee_cad": 25069,
    "total_fee_cad": 75207,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream acceptable",
      "Physical & Health Education",
      "General Studies do not count"
    ],
    "entry_roles": [
      "Hotel Manager",
      "Front Office Manager",
      "Operations Manager",
      "Food & Beverage Director",
      "Guest Experience Manager (positions worldwide in 4-5 star establishments)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Fast-Track Bachelor in Hospitality Management",
    "faculty": "Hospitality Management (Accelerated Program)",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "5 years (30 months) | Full-time, on-campus; includes 4-week intensive summer preparation course",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 25069,
    "total_fee_cad": 75207,
    "min_class12_percent": 70,
    "required_subjects": [
      "Hospitality-related background",
      "minimum 16 weeks internship (8 consecutive at same company) in 3-4-5 star hotel or Michelin-starred restaurant"
    ],
    "entry_roles": [
      "General Manager",
      "Operations Director",
      "F&B Director",
      "Hospitality Consultant",
      "Entrepreneur in hospitality sector"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration in International Hospitality Management",
    "faculty": "MBA Program, Graduate Studies",
    "duration_years": 2,
    "annual_fee_cad": 32073,
    "total_fee_cad": 64146,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any bachelor degree acceptable",
      "hospitality/business background advantageous"
    ],
    "entry_roles": [
      "General Manager",
      "Director of Operations",
      "Hospitality Consultant",
      "Strategic Innovation Specialist",
      "F&B Director",
      "Revenue Manager",
      "Management Team Member"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Leading Hotel Transformation",
    "faculty": "Hotel Transformation & Innovation Program, Graduate Studies",
    "duration_years": 2,
    "annual_fee_cad": 3795,
    "total_fee_cad": 7590,
    "min_class12_percent": 70,
    "required_subjects": [
      "Hospitality-related bachelor preferred",
      "strong passion for hotel industry required",
      "young hospitality professionals targeted"
    ],
    "entry_roles": [
      "Transformation Leader",
      "Change Manager",
      "Strategic Innovation Specialist",
      "Hotel Management Team Member",
      "Hospitality Consultant specializing in digital/sustainability transformation"
    ],
    "features": []
  }
]);

// --- RADBOUD UNIVERSITY ---
const univ_radbouduniversity = db.institutions.insertOne(inst({
  "name": "RADBOUD UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Nijmegen",
  "province": "Gelderland",
  "country": "Netherlands",
  "campuses": [
    "Nijmegen"
  ],
  "website": "https://www.ru.nl/en/",
  "application_portal": "Studielink (initial registration) \u2192 Osiris Application (document uploads)",
  "contacts": {
    "admissions": {
      "email": "admissions@ru.nl",
      "phone": "+31 24 3612345"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Radboud Scholarship Programme: \u20ac2,530 per year instead of \u20ac17,000 (nearly 85% reduction)"
    },
    {
      "name": "Up to 30-33 scholarships annually"
    },
    {
      "name": "Covers tuition, visa costs, residence permit, health insurance"
    },
    {
      "name": "Only for non-EU/EEA students in English-taught Master\u2019s programs"
    },
    {
      "name": "Application deadline: 31 January annually"
    },
    {
      "name": "Distributed across 6 faculties"
    },
    {
      "name": "Other Financial Support: Dutch government grants and loans available"
    }
  ],
  "internships": {
    "part_time_work": "Job postings, internship vacancies, career events",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Accommodation: Limited university housing (demand exceeds supply); private accommodation available in Nijmegen (\u20ac300\u2013\u20ac600 per month average)",
    "clubs": "Student Clubs & Activities: 100+ student organisations and clubs"
  },
  "security": {
    "detail": "Coordination: Integrated safety policy with emergency procedures"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_radbouduniversity, "RADBOUD UNIVERSITY", [
  {
    "level": "UG",
    "name": "Artificial Intelligence",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychology (Numerus Fixus \u2013 limited places)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computing Science",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business Communication",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology (Numerus Fixus \u2013 limited places)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computing Science (with Data Science specialisation)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Psychology (multiple tracks)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Artificial Intelligence (Cognitive Computing & Intelligent Technology specialisations)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biology (multiple specialisations)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Artificial Intelligence",
    "faculty": "Faculty of Science",
    "duration_years": 3.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 60357,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (essential)",
      "Physics or related STEM subject"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Robotics Specialist",
      "Research Scientist",
      "Software Developer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Psychology",
    "faculty": "Faculty of Social Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 60357,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (essential)",
      "optional subject in social sciences or humanities"
    ],
    "entry_roles": [
      "Research Psychologist",
      "Clinical Psychologist",
      "Organisational Psychologist",
      "HR Specialist",
      "Counsellor"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Computing Science",
    "faculty": "Faculty of Science",
    "duration_years": 3.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 60357,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (essential)",
      "Physics or Computer Science preferred"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "Web Developer",
      "IT Consultant",
      "Security Specialist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "International Business Communication",
    "faculty": "Faculty of Arts",
    "duration_years": 3.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 60357,
    "min_class12_percent": 75,
    "required_subjects": [
      "English (essential)",
      "history",
      "languages",
      "or social sciences beneficial"
    ],
    "entry_roles": [
      "Corporate Communication Manager",
      "Marketing Manager",
      "HR Communications Specialist",
      "Consultant",
      "Copy Writer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Biology",
    "faculty": "Faculty of Science",
    "duration_years": 3.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 60357,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Chemistry",
      "Biology (all essential; Physics beneficial)"
    ],
    "entry_roles": [
      "Research Biologist",
      "Environmental Scientist",
      "Healthcare Analyst",
      "Pharmaceutical Researcher",
      "Conservation Specialist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Business Administration",
    "faculty": "Nijmegen School of Management",
    "duration_years": 1.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 20119,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "Economics",
      "Management",
      "or related field preferred"
    ],
    "entry_roles": [
      "Business Manager",
      "Management Consultant",
      "Strategic Analyst",
      "Corporate Manager",
      "Operations Director"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Computing Science",
    "faculty": "Faculty of Science",
    "duration_years": 2.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 40238,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "AI",
      "or related discipline"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Scientist",
      "Cybersecurity Specialist",
      "Systems Architect",
      "Research Scientist",
      "IT Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Psychology",
    "faculty": "Faculty of Social Sciences",
    "duration_years": 1.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 20119,
    "min_class12_percent": 70,
    "required_subjects": [
      "Must include:"
    ],
    "entry_roles": [
      "Clinical Psychologist",
      "Research Psychologist",
      "HR Specialist",
      "Organisational Consultant",
      "Behaviour Change Specialist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Artificial Intelligence",
    "faculty": "Faculty of Science",
    "duration_years": 2.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 40238,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computing",
      "mathematics",
      "psychology",
      "neuroscience",
      "or related interdisciplinary field"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Robotics Engineer",
      "Research Scientist",
      "AI Specialist",
      "Neural Network Developer"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Biology",
    "faculty": "Faculty of Science",
    "duration_years": 2.0,
    "annual_fee_cad": 20119,
    "total_fee_cad": 40238,
    "min_class12_percent": 70,
    "required_subjects": [
      "Must include specific prerequisites depending on specialisation:"
    ],
    "entry_roles": [
      "Research Scientist",
      "Environmental Consultant",
      "Healthcare Researcher",
      "Molecular Biologist",
      "Geneticist",
      "Pharmaceutical Researcher"
    ],
    "features": [],
    "duration_parsed": true
  }
]);

// --- THE HAGUE UNIVERSITY OF APPLIED SCIENCES ---
const univ_thehagueuniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "THE HAGUE UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "The Hague",
  "province": "South Holland",
  "country": "Netherlands",
  "campuses": [
    "The Hague"
  ],
  "website": "https://www.thuas.com",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0)70 445 8505 (Ms. Shannon van Leeuwen & Ms. Marelot Mannes, Registration Incoming Students)",
      "email": "exchange@hhs.nl",
      "address": "Johanna Westerdijkplein 75, 2521 EN The Hague"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Internship and project coordinators assigned",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student associations and clubs available",
    "housing": "Student accommodation assistance (private market arrangement; start 3+ months before arrival)"
  },
  "security": {
    "detail": "Physical security systems in place"
  },
  "top_ug_programs": [
    "City & Country\u200b",
    "Department Contact Information\u200b",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)\u200b",
    "Intakes & Deadlines\u200b",
    "Scholarships & Financial Support\u200b"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_thehagueuniversityofappliedsciences, "THE HAGUE UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students\u200b",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business (4-year BBA)\u200b",
    "faculty": "Business School / International Business",
    "duration_years": 3,
    "annual_fee_cad": 15246,
    "total_fee_cad": 45738,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics beneficial",
      "no strict requirements"
    ],
    "entry_roles": [
      "International Business Manager",
      "Business Consultant",
      "Trade Manager",
      "Import-Export Specialist",
      "Marketing Manager",
      "Supply Chain Coordinator",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Computer Science (3-year BSc)\u200b",
    "faculty": "Technology & Innovation / Applied Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 15246,
    "total_fee_cad": 45738,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics/Computer Science beneficial"
    ],
    "entry_roles": [
      "Software Engineer",
      "Embedded Systems Developer",
      "Cybersecurity Specialist",
      "IT Consultant",
      "Cloud Architect",
      "Software Architect",
      "Database Administrator",
      "Game Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (4-year BBA)\u200b",
    "faculty": "Business School / Business Administration",
    "duration_years": 3,
    "annual_fee_cad": 15246,
    "total_fee_cad": 45738,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Business/Economics beneficial"
    ],
    "entry_roles": [
      "Operations Manager",
      "Business Manager",
      "Finance Manager",
      "HR Manager",
      "Marketing Manager",
      "Project Manager",
      "Strategic Consultant",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Safety and Security Management Studies (3-year Bachelor)\u200b",
    "faculty": "Safety & Security / Public Management",
    "duration_years": 3,
    "annual_fee_cad": 15246,
    "total_fee_cad": 45738,
    "min_class12_percent": 75,
    "required_subjects": [
      "No strict requirements",
      "analytical skills preferred"
    ],
    "entry_roles": [
      "Safety Manager",
      "Security Manager",
      "Risk Analyst",
      "Policy Advisor",
      "Public Safety Officer",
      "Intelligence Analyst",
      "Industrial Safety Specialist",
      "Counterterrorism Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Industrial Design Engineering or User Experience Design (3-year BSc)\u200b",
    "faculty": "Design & Innovation / Technology",
    "duration_years": 3,
    "annual_fee_cad": 15246,
    "total_fee_cad": 45738,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics recommended",
      "Design portfolio beneficial (may strengthen application)"
    ],
    "entry_roles": [
      "Product Designer",
      "UX/UI Designer",
      "Industrial Designer",
      "Design Engineer",
      "Concept Designer",
      "Innovation Consultant",
      "Design Manager",
      "UX Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Financial Management and Control\u200b",
    "faculty": "Business School / Finance & Control",
    "duration_years": 2,
    "annual_fee_cad": 34492,
    "total_fee_cad": 68984,
    "min_class12_percent": 70,
    "required_subjects": [
      "Accounting",
      "Finance",
      "Management",
      "or Business Administration"
    ],
    "entry_roles": [
      "Financial Manager",
      "Corporate Controller",
      "Risk Manager",
      "Internal Auditor",
      "Financial Analyst",
      "Treasury Manager",
      "Compliance Officer",
      "Management Accountant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master International Communication Management\u200b",
    "faculty": "Communications / International Studies",
    "duration_years": 2,
    "annual_fee_cad": 34492,
    "total_fee_cad": 68984,
    "min_class12_percent": 70,
    "required_subjects": [
      "Communications",
      "Media",
      "Public Relations",
      "Business Communication",
      "Marketing"
    ],
    "entry_roles": [
      "Communications Manager",
      "PR Manager",
      "International Communications Specialist",
      "Brand Manager",
      "Corporate Communications Officer",
      "Media Relations Manager",
      "Stakeholder Engagement Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Administration / MBA\u200b",
    "faculty": "Business School / MBA Program",
    "duration_years": 2,
    "annual_fee_cad": 34492,
    "total_fee_cad": 68984,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business Administration",
      "Management",
      "Economics",
      "or related discipline"
    ],
    "entry_roles": [
      "Business Manager",
      "Management Consultant",
      "Strategic Manager",
      "Operations Director",
      "Project Manager",
      "Business Development Manager",
      "Executive Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Next Level Engineering\u200b",
    "faculty": "Technology & Innovation / Engineering",
    "duration_years": 2,
    "annual_fee_cad": 34492,
    "total_fee_cad": 68984,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering",
      "Technology",
      "Physics",
      "Computer Science",
      "or closely related technical discipline"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Innovation Manager",
      "Technical Consultant",
      "Systems Engineer",
      "R&D Specialist",
      "Engineering Director",
      "Product Development Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Data Management / Specialized Master's Programme\u200b",
    "faculty": "Business School / Data & Technology or specialization-specific",
    "duration_years": 2,
    "annual_fee_cad": 21000,
    "total_fee_cad": 42000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Program-dependent (Data Science/Analytics background beneficial)"
    ],
    "entry_roles": [
      "Data Analyst",
      "Data Manager",
      "Business Analyst",
      "Systems Analyst",
      "Research Specialist",
      "Analytics Manager",
      "IT Project Manager",
      "Consultant"
    ],
    "features": []
  }
]);

// --- LEIDEN UNIVERSITY ---
const univ_leidenuniversity = db.institutions.insertOne(inst({
  "name": "LEIDEN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Leiden",
  "province": "South Holland",
  "country": "Netherlands",
  "campuses": [
    "Leiden"
  ],
  "website": "https://www.universiteitleiden.nl/en/education/admissions/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "+31 (0)71 527 1111 OR email\u00a0study@bb.leidenuniv.nl",
      "phone": "+31 (0)71 527 27 27",
      "address": "Rapenburg 70, 2311 EZ Leiden, The Netherlands"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Study internships: Up to 40 hours/week allowed (with signed tripartite agreement and university approval)",
    "coop_available": true,
    "employment_rate_percent": 76
  },
  "campus_life": {
    "clubs": "Outdoor facilities: Football fields, tennis courts, rowing facilities (for partner clubs)",
    "housing": "Disability services: Accessibility support and accommodations"
  },
  "security": {
    "detail": "Cybersecurity: Digital security measures and access protocols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_leidenuniversity, "LEIDEN UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science Psychology",
    "faculty": "Faculty of Social and Behavioural Sciences; Department of Psychology",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts International Studies",
    "faculty": "Faculty of Humanities; International Studies Department",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Data Science & Artificial Intelligence",
    "faculty": "Faculty of Science; Data Science and Artificial Intelligence Department",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Liberal Arts & Sciences",
    "faculty": "Leiden University College The Hague (LUC); Liberal Arts & Sciences Programme",
    "duration_years": 3.0,
    "annual_fee_cad": 25935,
    "total_fee_cad": 77805,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science Actuarial Science",
    "faculty": "Faculty of Science; Mathematical Sciences Department",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Psychology",
    "faculty": "Faculty of Social and Behavioural Sciences; Department of Psychology",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science International Relations and Diplomacy",
    "faculty": "Faculty of Governance & Global Affairs; International Relations Department",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Arts Global History",
    "faculty": "Faculty of Humanities; History Department; Global History Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science Data Science",
    "faculty": "Faculty of Science; Data Science Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Laws",
    "faculty": "Faculty of Law; Leiden Law School; Master's Programmes",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- TU EINDHOVEN ---
const univ_tueindhoven = db.institutions.insertOne(inst({
  "name": "TU EINDHOVEN",
  "abbreviation": "",
  "type": "university",
  "city": "Eindhoven",
  "province": "North Brabant",
  "country": "Netherlands",
  "campuses": [
    "Eindhoven"
  ],
  "website": "https://www.studielink.nl",
  "application_portal": "Studielink (www.studielink.nl)",
  "contacts": {
    "admissions": {
      "address": "Groene Loper 3, 5612 AE Eindhoven, Netherlands"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Holland Scholarship: \u20ac5,000-\u20ac15,000 (non-EEA nationals)"
    },
    {
      "name": "TU/e Scholarship for Excellence (2026-2027): \u20ac7,500/year (max 2 years); ~35 scholarships available, 15 for non-EEA students"
    },
    {
      "name": "Specialized scholarships: China Scholarship Council (PhD), LPDP (Indonesian nationals)"
    },
    {
      "name": "Annual: \u20ac18,000"
    },
    {
      "name": "3-year program: \u20ac54,000 total"
    },
    {
      "name": "Annual: \u20ac19,300-\u20ac21,000 (varies by program)"
    },
    {
      "name": "2-year program: \u20ac38,600-\u20ac42,000 total"
    },
    {
      "name": "\u20ac43.35 per credit (30 ECTS = ~\u20ac1,300)"
    }
  ],
  "internships": {
    "part_time_work": "Internship opportunities: Yes (mandatory in Master programs)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "100+ societies (39 sporting, 11 cultural, 9 international)"
  },
  "security": {
    "detail": "General security infrastructure in place"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_tueindhoven, "TU EINDHOVEN", [
  {
    "level": "UG",
    "name": "Bachelor Computer Science and Engineering",
    "faculty": "Mathematics and Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor Mechanical Engineering",
    "faculty": "Mechanical Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor Chemical Engineering and Chemistry",
    "faculty": "Chemical Engineering and Chemistry",
    "duration_years": 3.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor Industrial Design",
    "faculty": "Industrial Design",
    "duration_years": 3.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor Applied Physics",
    "faculty": "Applied Physics",
    "duration_years": 3.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science and Engineering",
    "faculty": "Mathematics and Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 31500,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science and Artificial Intelligence",
    "faculty": "Mathematics and Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 30000,
    "total_fee_cad": 60000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Embedded Systems",
    "faculty": "Computer Science & Electrical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 31500,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Relevant academic background in hardware/software"
    ],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Automotive Technology",
    "faculty": "Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 31500,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Artificial Intelligence and Engineering Systems",
    "faculty": "Computer Science & Electrical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 31500,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- BREDA UNIVERSITY OF APPLIED SCIENCES ---
const univ_bredauniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "BREDA UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "Breda",
  "province": "North Brabant",
  "country": "Netherlands",
  "campuses": [
    "Breda"
  ],
  "website": "https://www.buas.nl",
  "application_portal": "Studielink.nl (Dutch government official registration system)",
  "contacts": {
    "admissions": {
      "address": "Mgr Hopmansstraat 2, 4817 JT Breda",
      "email": "accommodation@buas.nl"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "BUas Bachelor Scholarship: \u20ac3,000\u2013\u20ac5,000 per year for international students"
    },
    {
      "name": "BUas Master Scholarship: \u20ac3,000 for first-year Master\u2019s students"
    },
    {
      "name": "Orange Tulip Scholarship (OTS): Full or partial tuition fee waivers for selected countries including India"
    },
    {
      "name": "Holland Scholarship: \u20ac5,000 one-time grant for non-EU students"
    },
    {
      "name": "NL Scholarship: Financial aid for exceptional non-EU applicants"
    }
  ],
  "internships": {
    "part_time_work": "Career Services Centre with job placement support",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Private accommodation available: \u20ac300\u2013\u20ac600/month average (typically \u20ac400)",
    "clubs": "Student Clubs & Activities: Multiple student associations including Phileas Fogg, Maximus, Xenia, Socialize, Bold, BRESS Sports Association"
  },
  "security": {
    "detail": "Security Infrastructure: Limited specific information publicly disclosed; general campus safety protocols in place"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_bredauniversityofappliedsciences, "BREDA UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "UG",
    "name": "Hotel Management",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Leisure & Events Management",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Creative Media & Game Technologies",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Built Environment",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Logistics Management",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA Imagineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Game Technology",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Tourism Destination Management",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Media Innovation",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Sustainable Outdoor Hospitality Management",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Hotel Management",
    "faculty": "Academy for Hospitality",
    "duration_years": 4.0,
    "annual_fee_cad": 3795,
    "total_fee_cad": 15180,
    "min_class12_percent": 70,
    "required_subjects": [
      "For VWO/HAVO \u2013 second foreign language (French, German, Spanish) and/or Business Economics recommended"
    ],
    "entry_roles": [
      "Hotel Manager",
      "General Manager",
      "Food & Beverage Manager",
      "Events Manager",
      "Front Office Manager",
      "Revenue Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Leisure & Events Management",
    "faculty": "Academy for Leisure & Events",
    "duration_years": 4.0,
    "annual_fee_cad": 3795,
    "total_fee_cad": 15180,
    "min_class12_percent": 70,
    "required_subjects": [
      "No strict subject requirements"
    ],
    "entry_roles": [
      "Event Manager",
      "Leisure Manager",
      "Programme Coordinator",
      "Venue Manager",
      "Project Manager",
      "Recreation Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Creative Media & Game Technologies",
    "faculty": "Academy for Games & Media",
    "duration_years": 4.0,
    "annual_fee_cad": 3795,
    "total_fee_cad": 15180,
    "min_class12_percent": 70,
    "required_subjects": [
      "No strict requirements",
      "artistic/creative aptitude essential"
    ],
    "entry_roles": [
      "Game Designer",
      "Graphics Programmer",
      "Character Artist",
      "Level Designer",
      "Producer",
      "Game Programmer",
      "Visual Effects Artist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Built Environment",
    "faculty": "Academy for Built Environment",
    "duration_years": 4.0,
    "annual_fee_cad": 3795,
    "total_fee_cad": 15180,
    "min_class12_percent": 70,
    "required_subjects": [
      "No strict subject requirements"
    ],
    "entry_roles": [
      "Urban Planner",
      "Architect",
      "Sustainability Manager",
      "Design Engineer",
      "Infrastructure Developer",
      "Traffic & Transport Specialist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Logistics Management",
    "faculty": "Academy for Logistics",
    "duration_years": 4.0,
    "annual_fee_cad": 3795,
    "total_fee_cad": 15180,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended",
      "no strict requirements"
    ],
    "entry_roles": [
      "Logistics Coordinator",
      "Supply Chain Analyst",
      "Warehouse Manager",
      "Process Engineer",
      "Data Analyst",
      "Event Logistics Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) Imagineering",
    "faculty": "Academy for Imagineering",
    "duration_years": 1.0,
    "annual_fee_cad": 25875,
    "total_fee_cad": 25875,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "or hospitality background preferred"
    ],
    "entry_roles": [
      "General Manager",
      "Project Manager",
      "Organisational Development Manager",
      "Change Manager",
      "Strategic Manager",
      "Business Consultant"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Game Technology",
    "faculty": "Academy for Games & Media",
    "duration_years": 1.0,
    "annual_fee_cad": 4042,
    "total_fee_cad": 4042,
    "min_class12_percent": 70,
    "required_subjects": [
      "Game development",
      "computer science",
      "or media technology"
    ],
    "entry_roles": [
      "Game Programmer",
      "Graphics Programmer",
      "Engine Developer",
      "Technical Lead",
      "AI Specialist",
      "Research Scientist"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Arts in Tourism Destination Management",
    "faculty": "Academy for Leisure & Events (Tourism)",
    "duration_years": 1.0,
    "annual_fee_cad": 3795,
    "total_fee_cad": 3795,
    "min_class12_percent": 70,
    "required_subjects": [
      "Bachelor\u2019s-level knowledge of tourism planning & development",
      "cross-cultural studies",
      "research methods"
    ],
    "entry_roles": [
      "Tourism Manager",
      "Destination Manager",
      "Strategic Planner",
      "Tourism Development Officer",
      "Sustainability Manager",
      "Market Analyst"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Arts in Media Innovation",
    "faculty": "Academy for Games & Media",
    "duration_years": 1.0,
    "annual_fee_cad": 3901,
    "total_fee_cad": 3901,
    "min_class12_percent": 70,
    "required_subjects": [
      "Media",
      "communication",
      "or business background",
      "candidates with strong media interest also considered"
    ],
    "entry_roles": [
      "Innovation Manager",
      "Media Manager",
      "Product Developer",
      "Content Strategist",
      "Digital Producer",
      "Research Manager"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master of Science in Sustainable Outdoor Hospitality Management",
    "faculty": "Academy for Hospitality",
    "duration_years": 2.0,
    "annual_fee_cad": 39000,
    "total_fee_cad": 78000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Hospitality management",
      "tourism",
      "business",
      "or environmental management preferred"
    ],
    "entry_roles": [
      "Hospitality Manager",
      "Sustainable Development Manager",
      "Resort Manager",
      "Event Manager",
      "Environmental Sustainability Manager"
    ],
    "features": [],
    "duration_parsed": true
  }
]);

// --- AVANS UNIVERSITY OF APPLIED SCIENCES ---
const univ_avansuniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "AVANS UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "Breda",
  "province": "North Brabant",
  "country": "Netherlands",
  "campuses": [
    "Breda"
  ],
  "website": "https://www.avans.nl",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+31 (0) 88 525 80 01 (International Programs)",
      "email": "internationaloffice@avans.nl",
      "address": "Postbus 90.116, 4800 RA Breda; Hogeschoollaan 1, 4818 CB Breda (Visiting address)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Fall (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Internship coordinators and mentors assigned",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports facilities and clubs (20+ sports options)",
    "housing": "Student accommodation assistance (private market; rental \u20ac330-\u20ac525/month shared accommodation)"
  },
  "security": {
    "detail": "Facilities management with security protocols"
  },
  "top_ug_programs": [
    "City & Country\u200b",
    "Department Contact Information\u200b",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)\u200b",
    "Intakes & Deadlines\u200b",
    "Scholarships & Financial Support\u200b"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_avansuniversityofappliedsciences, "AVANS UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students\u200b",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business (4-year BBA)\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE) / Faculty of Business",
    "duration_years": 3,
    "annual_fee_cad": 12297,
    "total_fee_cad": 36891,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "no strict subject prerequisites"
    ],
    "entry_roles": [
      "International Business Manager",
      "Export/Import Manager",
      "Business Development Manager",
      "Marketing Manager",
      "Supply Chain Coordinator",
      "International Trade Officer",
      "Country Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Computer Science (3-year BSc)\u200b",
    "faculty": "Avans School of Engineering and ICT / Faculty of Technology",
    "duration_years": 3,
    "annual_fee_cad": 12297,
    "total_fee_cad": 36891,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics/Computer Science beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "Software Architect",
      "Mobile Developer",
      "Cybersecurity Specialist",
      "IT Consultant",
      "Database Administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (4-year BBA)\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE)",
    "duration_years": 3,
    "annual_fee_cad": 12297,
    "total_fee_cad": 36891,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Business/Economics beneficial"
    ],
    "entry_roles": [
      "Operations Manager",
      "Financial Manager",
      "HR Manager",
      "Marketing Manager",
      "Project Manager",
      "Business Analyst",
      "Strategic Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (3-year BSc)\u200b",
    "faculty": "Avans School of Engineering and ICT / Faculty of Technology",
    "duration_years": 3,
    "annual_fee_cad": 12297,
    "total_fee_cad": 36891,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Production Manager",
      "Maintenance Engineer",
      "CAD Specialist",
      "Project Leader",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Finance & Accounting or Hospitality Management (3-4 years)\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE) or School of Hospitality & Culture",
    "duration_years": 3,
    "annual_fee_cad": 12297,
    "total_fee_cad": 36891,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "accounting/business beneficial for Finance"
    ],
    "entry_roles": [
      "Accounting Officer",
      "Financial Analyst",
      "Tax Consultant",
      "Auditor",
      "Finance Manager",
      "For Hospitality: Hotel Manager",
      "Event Coordinator",
      "Food & Beverage Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master International Financial Management\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE)",
    "duration_years": 2,
    "annual_fee_cad": 12297,
    "total_fee_cad": 24594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "Accounting",
      "Business Administration",
      "Economics"
    ],
    "entry_roles": [
      "Financial Analyst",
      "International Finance Manager",
      "Corporate Controller",
      "Investment Analyst",
      "Risk Manager",
      "Treasury Specialist",
      "Financial Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE)",
    "duration_years": 2,
    "annual_fee_cad": 12297,
    "total_fee_cad": 24594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "Management",
      "Economics preferred",
      "any background considered"
    ],
    "entry_roles": [
      "Business Manager",
      "Management Consultant",
      "Strategic Manager",
      "Operations Director",
      "Project Manager",
      "Business Development Director",
      "Executive Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Engineering Technologies\u200b",
    "faculty": "Avans School of Engineering and ICT / Faculty of Technology",
    "duration_years": 2,
    "annual_fee_cad": 12297,
    "total_fee_cad": 24594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong technical foundation (Mathematics, Physics, Computer Science)",
      "Engineering disciplines"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Innovation Manager",
      "Technical Consultant",
      "Systems Engineer",
      "R&D Specialist",
      "Engineering Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master European Finance\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE) - International Finance Program",
    "duration_years": 2,
    "annual_fee_cad": 12297,
    "total_fee_cad": 24594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "Economics",
      "Accounting",
      "Business Administration",
      "quantitative skills essential"
    ],
    "entry_roles": [
      "International Finance Manager",
      "Financial Analyst",
      "Investment Manager",
      "Corporate Finance Manager",
      "International Treasury Specialist",
      "Financial Advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management / Safety & Security Management\u200b",
    "faculty": "Avans School of Business and Entrepreneurship (ABE) or School of Management",
    "duration_years": 2,
    "annual_fee_cad": 12297,
    "total_fee_cad": 24594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Management",
      "Business Administration",
      "Safety Studies",
      "Economics",
      "or related discipline"
    ],
    "entry_roles": [
      "Operations Manager",
      "Project Manager",
      "Strategic Manager",
      "Consultant",
      "For Security Management: Security Manager",
      "Risk Manager",
      "Safety Officer",
      "Security Consultant"
    ],
    "features": []
  }
]);

print("Netherlands Seeding Completed!");