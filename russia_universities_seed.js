// ============================================================
// RUSSIA UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 19 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions russia_universities_seed.js
// ============================================================

const DB_NAME = "canadian_institutions";
const db = connect("mongodb://localhost:27017/" + DB_NAME);

// Helper to clean institution/program doc structures
function inst(data) { return data; }

function addPrograms(instId, instName, programs) {
  if (!programs || programs.length === 0) return;
  programs.forEach(p => {
    p.institution_id = instId;
    p.institution_name = instName;
  });
  db.programs.insertMany(programs);
}

// Delete existing Russia data to prevent duplicates
db.institutions.deleteMany({ country: "Russia" });
db.programs.deleteMany({ institution_name: { $in: [
  "BASHKIR STATE MEDICAL UNIVERSITY (Russia)",
  "BAUMAN MOSCOW STATE TECHNICAL UNIVERSITY (Russia)",
  "CRIMEA FEDERAL UNIVERSITY (Russia)",
  "HSE UNIVERSITY (Russia)",
  "KAZAN FEDERAL UNIVERSITY (Russia)",
  "KURSK STATE MEDICAL UNIVERSITY (Russia)",
  "LOMONOSOV MOSCOW STATE UNIVERSITY (Russia)",
  "MARI STATE UNIVERSITY (Russia)",
  "Novosibirsk State University (Russia)",
  "ORENBURG STATE MEDICAL UNIVERSITY (Russia)",
  "PSKOV STATE UNIVERSITY (Russia)",
  "Pirogov Russian National Research Medical University",
  "RUDN UNIVERSITY (Russia)",
  "SAINT PETERSBURG STATE UNIVERSITY (Russia)",
  "I.M. SECHENOV FIRST MOSCOW STATE MEDICAL UNIVERSITY (Russia)",
  "TOMSK STATE UNIVERSITY (Russia)",
  "TVER STATE MEDICAL UNIVERSITY (Russia)",
  "URAL FEDERAL UNIVERSITY (Russia)",
  "VOLGOGRAD STATE MEDICAL UNIVERSITY (Russia)",
] } });

// --- BASHKIR STATE MEDICAL UNIVERSITY (Russia) ---
const univ_bashkirstatemedicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "BASHKIR STATE MEDICAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Ufa",
  "province": "Bashkortostan",
  "country": "Russia",
  "campuses": [
    "Ufa"
  ],
  "website": "https://bashgmu.ru",
  "application_portal": "https://admission.bashgmu.ru/",
  "contacts": {
    "admissions": {
      "email": "bsmu-int@mail.ru",
      "address": "Ground Floor, Teatralnaya Street, 2a, Ufa 450000 Russia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Types:"
    },
    {
      "name": "Russian Government Scholarship (covers tuition, accommodation, stipend)"
    },
    {
      "name": "DAAD Scholarship (German Academic Exchange Service; for graduate, doctoral, post-doctoral students)"
    },
    {
      "name": "University merit-based scholarships (competitive; up to 40% tuition reduction for high performers)"
    },
    {
      "name": "Institutional awards for top academic performers"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Career fairs, internship placement assistance, guidance through medical licensing processes (FMGE, licensing in Russia and international markets), alumni networking",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Russian Government Scholarship (covers tuition, accommodation, stipend)",
    "clubs": "Student Clubs & Activities: Sports clubs (football, mini-football, basketball, volleyball, table tennis, chess, mountain skiing, snowboarding, swimming, skiing, aerobics, boxing, kickboxing, weightlifting, athletics); cultural festivals (Dedication to Students, Fresher\u2019s Day, \u201cDebut of BSMU\u201d Amateur Art Festival, Miss/Mr BSMU pageants, Spring Festival Navruz, Indian Festival Diwali, New Year celebrations, KVN comedy shows); Student Council, BSMU Students\u2019 Trade Union, Volunteer Crew, International Club \u201cBetween the Cultures\u201d, drama/music/literature creative clubs, scientific research groups, student press service"
  },
  "security": {
    "detail": "Security Infrastructure: 24/7 security monitoring and support; police security in all hostels; CCTV surveillance throughout campus and dormitories; electronic access systems to dormitories; secure environment maintained"
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

addPrograms(univ_bashkirstatemedicaluniversityrussia, "BASHKIR STATE MEDICAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Preventive Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine/Internal Medicine",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. Fellowship Programs",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Public Health",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "Faculty of General Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals",
      "clinics",
      "research institutions",
      "pharmaceutical companies",
      "opportunity to appear for FMGE (Foreign Medical Graduate Examination) in India to practice in India",
      "opportunities in Russia",
      "internationally"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "Faculty of Dentistry",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Dentist in hospitals",
      "private dental clinics",
      "research institutions",
      "public health programs",
      "opportunity for FMGE qualification",
      "international licensure"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Faculty of Pharmacy",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Hospital pharmacist",
      "clinical pharmacist",
      "pharmaceutical researcher",
      "quality control specialist",
      "industrial pharmacist",
      "roles in pharmaceutical companies",
      "healthcare institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics",
      "public health programs",
      "research institutions",
      "pediatric specialist roles",
      "international medical practice opportunities"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Preventive Medicine",
    "faculty": "Faculty of Preventive Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Public health physician",
      "epidemiologist",
      "health policy specialist",
      "disease control officer",
      "occupational health specialist",
      "roles with health organizations",
      "government health agencies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "Faculty of General Medicine \u2013 Postgraduate Department (Residency/Ordinatura Program)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Internist/Internal Medicine Specialist in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "roles in healthcare organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "Faculty of Surgery \u2013 Postgraduate Department (Residency Program)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon in hospitals (general, emergency, specialized)",
      "surgical consultant",
      "academic medicine",
      "surgical research positions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "Faculty of Pediatrics \u2013 Postgraduate Department (Residency Program)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics",
      "pediatric consultant",
      "academic medicine",
      "pediatric research",
      "public health pediatrician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. Fellowship Program",
    "faculty": "Faculty of General Medicine / Relevant Medical Discipline \u2013 Doctoral Program (Aspirantura/Ph.D.)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical researcher",
      "university faculty",
      "research scientist in pharmaceutical/healthcare institutions",
      "academic medicine",
      "public health researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Program in Public Health",
    "faculty": "Faculty of Public Health / Epidemiology \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Public health specialist",
      "epidemiologist",
      "health policy officer",
      "roles with WHO",
      "government health agencies",
      "NGOs",
      "disease surveillance centers"
    ],
    "features": []
  }
]);

// --- BAUMAN MOSCOW STATE TECHNICAL UNIVERSITY (Russia) ---
const univ_baumanmoscowstatetechnicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "BAUMAN MOSCOW STATE TECHNICAL UNIVERSITY (Russia)",
  "abbreviation": "BMSTU",
  "type": "university",
  "city": "Moscow",
  "province": "Moscow",
  "country": "Russia",
  "campuses": [
    "Moscow"
  ],
  "website": "http://www.bmstu.ru/en/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "Aud. 341b, 2 Baumanskaya Str. 5-1, Moscow, Russia",
      "phone": "+7 (499) 263-61-59",
      "email": "ums@interd.bmstu.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes (limited information)"
    },
    {
      "name": "Merit-based scholarships: Available based on academic performance"
    },
    {
      "name": "Information: Contact international admissions office for current opportunities"
    }
  ],
  "internships": {
    "part_time_work": "Industry placement: Major aerospace, engineering, robotics companies",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student life: Engineering clubs, robotics teams, student organizations"
  },
  "security": {
    "detail": "On-campus security: Standard university security protocols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_baumanmoscowstatetechnicaluniversityrussia, "BAUMAN MOSCOW STATE TECHNICAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Aerospace Engineering / Rocket and Space Technology B.Sc.",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering B.Sc.",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering B.Sc.",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science & Control Systems B.Sc.",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electronics and Laser Technology B.Sc.",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Rocket and Space Technology M.Sc.",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mechanical Engineering M.Sc.",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Aerospace Systems M.Sc.",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Informatics and Computer Engineering M.Sc.",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Power Engineering M.Sc.",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Aerospace Engineering / Rocket and Space Technology B.Sc.",
    "faculty": "Faculty of Aerospace Engineering / Department of Spacecraft and Carrier Rockets",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "spacecraft designer",
      "rocket engineer",
      "systems engineer",
      "flight dynamics specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering B.Sc.",
    "faculty": "Faculty of Mechanical Engineering / Department of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "production engineer",
      "CAD specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering B.Sc.",
    "faculty": "Faculty of Electrical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics designer",
      "embedded systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science & Control Systems B.Sc.",
    "faculty": "Faculty of Information Technology / Department of Computer Science & Control Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science fundamentals"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "control systems engineer",
      "data scientist",
      "IT specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electronics and Laser Technology B.Sc.",
    "faculty": "Faculty of Electronics and Laser Physics",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Electronics engineer",
      "laser physicist",
      "optical systems designer",
      "photonics specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Rocket and Space Technology M.Sc.",
    "faculty": "Faculty of Aerospace Engineering / Department of Spacecraft and Carrier Rockets",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Aerospace engineering",
      "rocket design",
      "orbital mechanics",
      "propulsion systems"
    ],
    "entry_roles": [
      "Spacecraft engineer",
      "rocket designer",
      "propulsion specialist",
      "systems engineer",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mechanical Engineering M.Sc.",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mechanical design",
      "manufacturing",
      "materials science"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing specialist",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Aerospace Systems M.Sc.",
    "faculty": "Faculty of Aerospace Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Aerodynamics",
      "flight dynamics",
      "aircraft systems"
    ],
    "entry_roles": [
      "Aeronautical engineer",
      "flight test engineer",
      "systems designer",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Informatics and Computer Engineering M.Sc.",
    "faculty": "Faculty of Information Technology / Department of Informatics and Computer Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Programming",
      "algorithms",
      "computer systems",
      "digital design"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "computer architect",
      "IT specialist",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Power Engineering M.Sc.",
    "faculty": "Faculty of Power Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Thermal physics",
      "thermodynamics",
      "energy systems",
      "power generation"
    ],
    "entry_roles": [
      "Power engineer",
      "thermal engineer",
      "energy systems specialist",
      "research scientist"
    ],
    "features": []
  }
]);

// --- CRIMEA FEDERAL UNIVERSITY (Russia) ---
const univ_crimeafederaluniversityrussia = db.institutions.insertOne(inst({
  "name": "CRIMEA FEDERAL UNIVERSITY (Russia)",
  "abbreviation": "V.I. VERNADSKY",
  "type": "university",
  "city": "Simferopol",
  "province": "Crimea",
  "country": "Russia",
  "campuses": [
    "Simferopol"
  ],
  "website": "https://eng.cfuv.ru/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "Prospekt Vernadskogo 4, Simferopol, Republic of Crimea, 295007"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Types:"
    },
    {
      "name": "Russian Government Scholarship (100% tuition coverage + monthly stipend + dormitory accommodation)"
    },
    {
      "name": "Merit-based scholarships for high academic achievers"
    },
    {
      "name": "Research grants for postgraduate students"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Internship and residency programs; job placement support; partnerships with healthcare organizations; Alumni network for career development",
    "coop_available": true
  },
  "campus_life": {
    "housing": "International Student Support: Dedicated international student department; visa assistance; accommodation support; cultural adaptation programs",
    "clubs": "Student Activities: Sports (football, volleyball, etc.); cultural clubs (art, music, community work); cultural events (Diwali for Indian students, Africa Day); student exchange programs"
  },
  "security": {
    "detail": "Security Infrastructure: Well-guarded campus; 24/7 monitoring implied through dedicated support services; safe and welcoming environment indicated"
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

addPrograms(univ_crimeafederaluniversityrussia, "CRIMEA FEDERAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine (MBBS, 6 years, Specialist\u2019s Degree, English medium)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry (5 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics (6 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy (5 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency in General Medicine / Internal Medicine (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency in Surgery (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency in Pediatrics (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Programs (3-4 years; 22 PhD programs available)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Programs (2 years; 54 programs available)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine (MBBS)",
    "faculty": "Faculty of Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals (public/private)",
      "clinics",
      "research institutions",
      "opportunity to clear FMGE",
      "practice in India",
      "international medical practice"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "Faculty of Dentistry",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Dentist in hospitals (public/private)",
      "private dental clinics",
      "public health programs",
      "research institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals (public/private)",
      "clinics",
      "public health programs",
      "research institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Faculty of Pharmacy",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Hospital pharmacist",
      "clinical pharmacist",
      "pharmaceutical researcher",
      "quality control specialist",
      "industrial pharmacist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Nursing",
    "faculty": "Nursing Faculty",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Registered nurse in hospitals (public/private)",
      "clinics",
      "community health organizations",
      "healthcare research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency in General Medicine / Internal Medicine",
    "faculty": "Faculty of Medicine \u2013 Clinical Residency Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Internist/Internal Medicine Specialist in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "healthcare organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency in Surgery",
    "faculty": "Faculty of Surgery \u2013 Clinical Residency Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon in hospitals (general, emergency, specialized surgical units)",
      "surgical consultant",
      "academic medicine",
      "surgical research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency in Pediatrics",
    "faculty": "Faculty of Pediatrics \u2013 Clinical Residency Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics (public/private)",
      "pediatric consultant",
      "academic medicine",
      "pediatric research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Program",
    "faculty": "Faculty of Postgraduate Education \u2013 Doctoral Program (22 PhD programs available)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical researcher",
      "university faculty",
      "research scientist in pharmaceutical/healthcare institutions",
      "academic medicine",
      "public health researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Program",
    "faculty": "Faculty of Postgraduate Education \u2013 Master\u2019s Programs (54 programs available)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Roles vary by master\u2019s specialty: Public health specialist",
      "research scientist",
      "healthcare manager",
      "academic educator",
      "specialist in chosen field"
    ],
    "features": []
  }
]);

// --- HSE UNIVERSITY (Russia) ---
const univ_hseuniversityrussia = db.institutions.insertOne(inst({
  "name": "HSE UNIVERSITY (Russia)",
  "abbreviation": "HIGHER SCHOOL OF ECONOMICS",
  "type": "university",
  "city": "Moscow",
  "province": "Moscow",
  "country": "Russia",
  "campuses": [
    "Moscow"
  ],
  "website": "https://www.hse.ru/en",
  "application_portal": "https://admissions.hse.ru/en/",
  "contacts": {
    "admissions": {
      "address": "11 Pokrovsky Boulevard, Moscow, Building D, 6th floor, Rooms D623/D624",
      "phone": "+7 (495) 531-00-59",
      "email": "iadmission-spb@hse.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes"
    },
    {
      "name": "Information: Contact international admissions office for current opportunities"
    }
  ],
  "internships": {
    "part_time_work": "Internship/practical training: Yes; varies by faculty and program",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Dormitories: Available for international students (students may be advised to find private accommodation)",
    "clubs": "Student life: International student community (5,200+ international students), cultural organizations, academic clubs, 100+ Coursera courses recorded by HSE (25+ in English)"
  },
  "security": {
    "detail": "On-campus security: Standard university security protocols; guards at campus entrances"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_hseuniversityrussia, "HSE UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in Economics (4 years, English-taught, Moscow)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Programme in Business and Economics (4 years, English-taught, St. Petersburg)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in Applied Mathematics and Physics (4 years, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in International Relations (4 years, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in Advertising and Public Relations (4 years, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Analytics (2 years, Online English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Analytics for Business and Economics (2 years, English-taught, St. Petersburg)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Management (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Data Science (2 years, English-taught, Online via Coursera)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in Economics",
    "faculty": "Faculty of Economics, School of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "preferably economics or business background"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "business analyst",
      "policy analyst",
      "research analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Programme in Business and Economics",
    "faculty": "Faculty of Economics / Faculty of Business and Management, St. Petersburg Campus",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "business/economics background helpful"
    ],
    "entry_roles": [
      "Business manager",
      "finance manager",
      "international business consultant",
      "management analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in Applied Mathematics and Physics",
    "faculty": "Faculty of Physics / Faculty of Mathematics and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 8160,
    "total_fee_cad": 32640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Physicist",
      "researcher",
      "systems engineer",
      "data scientist",
      "academic scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in International Relations",
    "faculty": "Faculty of International Relations",
    "duration_years": 4.0,
    "annual_fee_cad": 8160,
    "total_fee_cad": 32640,
    "min_class12_percent": 50,
    "required_subjects": [
      "History",
      "languages",
      "humanities background helpful"
    ],
    "entry_roles": [
      "International relations analyst",
      "diplomat",
      "policy advisor",
      "NGO specialist",
      "researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Programme in Advertising and Public Relations",
    "faculty": "Faculty of Communications, Media and Design",
    "duration_years": 4.0,
    "annual_fee_cad": 7480,
    "total_fee_cad": 29920,
    "min_class12_percent": 50,
    "required_subjects": [
      "Humanities / Social Sciences background"
    ],
    "entry_roles": [
      "Marketing specialist",
      "advertising executive",
      "PR specialist",
      "communications manager",
      "content strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Analytics (Online)",
    "faculty": "Graduate School of Business / School of Finance",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Finance",
      "accounting",
      "business",
      "mathematics",
      "statistics preferred"
    ],
    "entry_roles": [
      "Business analyst",
      "financial analyst",
      "strategic consultant",
      "finance manager",
      "data analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance",
    "faculty": "Graduate School of Business / School of Finance",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Finance",
      "accounting",
      "mathematics",
      "statistics background"
    ],
    "entry_roles": [
      "Finance manager",
      "investment banker",
      "financial analyst",
      "corporate finance specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Analytics for Business and Economics (St. Petersburg)",
    "faculty": "Faculty of Economics / School of Business and Economics, St. Petersburg Campus",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Data science",
      "analytics",
      "business",
      "economics",
      "mathematics"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "economist",
      "consultant",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in International Management",
    "faculty": "Graduate School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Business management",
      "international relations",
      "economics background helpful"
    ],
    "entry_roles": [
      "International business manager",
      "global operations manager",
      "management consultant",
      "strategic manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Data Science (Online via Coursera)",
    "faculty": "School of Data Science / Graduate School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Data science",
      "machine learning",
      "mathematics",
      "programming"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "research scientist",
      "analytics engineer"
    ],
    "features": []
  }
]);

// --- KAZAN FEDERAL UNIVERSITY (Russia) ---
const univ_kazanfederaluniversityrussia = db.institutions.insertOne(inst({
  "name": "KAZAN FEDERAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Kazan",
  "province": "Tatarstan",
  "country": "Russia",
  "campuses": [
    "Kazan"
  ],
  "website": "https://eng.kpfu.ru",
  "application_portal": "https://eng.kpfu.ru/contact-us/admission-unit/",
  "contacts": {
    "admissions": {
      "address": "9 Gvardeyskaya Street, Room A",
      "phone": "+7 (843) 206-52-89 (ext. 8136)",
      "email": "inter@kpfu.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Limited (mainly for Russian-taught programs)"
    },
    {
      "name": "Scholarship names: Government scholarship awards available; limited for English-taught programs"
    },
    {
      "name": "Information: Contact admissions office for current scholarship opportunities"
    }
  ],
  "internships": {
    "part_time_work": "Career placement: Gazprom, Sberbank, KPMG, PwC, EY, LG, Panasonic, etc.",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student life: International student community (10,500+ from 101 countries), cultural organizations, academic clubs"
  },
  "security": {
    "detail": "On-campus security: Standard university security protocols; guards at campus entrances"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_kazanfederaluniversityrussia, "KAZAN FEDERAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine/MBBS (6 years, Institute of Fundamental Medicine and Biology, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software Engineering (4 years, Russian-taught; Computer Science/IT track)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemistry B.Sc. (4 years, Alexander Butlerov Institute of Chemistry)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc. (4 years, Physics faculty)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Heat Power and Heat Engineering (4 years, Naberezhnye Chelny Institute)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Evidence-Based Medicine and Pharmacotherapy M.Sc. (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Software Engineering M.Sc. (2 years, English-taught; specializations in Cognitive Systems, Software Development)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Relations M.Sc. (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "English Linguistics and Translation Studies M.Sc. (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Foreign Region Studies M.Sc. (Islamic Studies focus; 2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine/MBBS B.Sc.",
    "faculty": "Institute of Fundamental Medicine and Biology, Faculty of Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "Physician",
      "general practitioner (GP)",
      "medical researcher",
      "MD equivalent (awarded in KFU)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software Engineering B.Sc.",
    "faculty": "Institute of Computational Mathematics and Information Technologies / Institute of Information Technology and Intelligent Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science fundamentals"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "programmer",
      "IT consultant",
      "software architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemistry B.Sc.",
    "faculty": "Alexander Butlerov Institute of Chemistry",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 55,
    "required_subjects": [
      "Chemistry",
      "Physics",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Chemist",
      "pharmaceutical analyst",
      "chemical engineer",
      "researcher",
      "laboratory technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc.",
    "faculty": "Physics Faculty",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Physicist",
      "research scientist",
      "theoretical physicist",
      "data analyst",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Heat Power and Heat Engineering B.Sc.",
    "faculty": "Engineering and Technology Faculty / Naberezhnye Chelny Institute",
    "duration_years": 4.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 24480,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Heat engineer",
      "thermal systems designer",
      "power systems engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Evidence-Based Medicine and Pharmacotherapy M.Sc.",
    "faculty": "Institute of Fundamental Medicine and Biology, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Medicine",
      "pharmacology",
      "health sciences"
    ],
    "entry_roles": [
      "Pharmacist",
      "pharmaceutical researcher",
      "clinical pharmacologist",
      "medical researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Software Engineering M.Sc.",
    "faculty": "Institute of Computational Mathematics and Information Technologies / Institute of Artificial Intelligence",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Software development",
      "programming",
      "IT systems"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "software architect",
      "AI specialist",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Relations M.Sc.",
    "faculty": "Faculty of International Relations & History / Institute of Social and Political Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "International relations",
      "diplomacy",
      "politics",
      "social sciences"
    ],
    "entry_roles": [
      "Diplomatic officer",
      "international relations analyst",
      "policy advisor",
      "think tank researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "English Linguistics and Translation Studies M.Sc.",
    "faculty": "Institute of Philology and Intercultural Communication (Leo Tolstoy Institute)",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "English language",
      "translation",
      "linguistics",
      "comparative literature"
    ],
    "entry_roles": [
      "Translator",
      "interpreter",
      "linguist",
      "editor",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Foreign Region Studies M.Sc. (Islamic Studies Focus)",
    "faculty": "School of International Relations & History / Institute of International Relations",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "Islamic studies",
      "Middle Eastern studies",
      "regional studies",
      "social sciences"
    ],
    "entry_roles": [
      "Region studies specialist",
      "policy analyst",
      "cultural advisor",
      "researcher",
      "diplomat"
    ],
    "features": []
  }
]);

// --- KURSK STATE MEDICAL UNIVERSITY (Russia) ---
const univ_kurskstatemedicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "KURSK STATE MEDICAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Kursk",
  "province": "Kursk Oblast",
  "country": "Russia",
  "campuses": [
    "Kursk"
  ],
  "website": "https://ksmu.bksites.net",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "Email: transrussian@kgmu.com",
      "address": "Karl Marx No. 3, Office 127, Kursk city, index 305041, Russia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Details:"
    },
    {
      "name": "Merit-based scholarships for high academic performers"
    },
    {
      "name": "University-based financial aid"
    },
    {
      "name": "Limited scholarship availability (not universally offered)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2014 mandatory 1-year clinical internship in 6th year; hospital rotations from year 3 onwards",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Activities: Arts events, sports events, vibrant societies, cultural clubs, student groups"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail on official English-language site"
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

addPrograms(univ_kurskstatemedicaluniversityrussia, "KURSK STATE MEDICAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine (MBBS, 6 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics (6 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry (5 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy (5 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medico-Prevention / Preventive Medicine (6 years, Specialist\u2019s Degree)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Dentistry (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Doctoral/Ph.D. Fellowships (3-4 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine (MBBS)",
    "faculty": "Faculty of General Medicine / Medical Faculty",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals (public/private)",
      "clinics",
      "research institutions",
      "opportunity to clear FMGE",
      "practice in India",
      "international medical practice"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals (public/private)",
      "clinics",
      "public health programs",
      "research institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "Faculty of Stomatology (Dentistry)",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Dentist in hospitals (public/private)",
      "private dental clinics",
      "public health programs",
      "research institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Pharmaceutical Faculty",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Hospital pharmacist",
      "clinical pharmacist",
      "pharmaceutical researcher",
      "quality control specialist",
      "industrial pharmacist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medico-Prevention / Preventive Medicine",
    "faculty": "Medico-Prevention Faculty",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Public health physician",
      "epidemiologist",
      "health policy specialist",
      "disease control officer",
      "occupational health specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "Faculty of General Medicine \u2013 Residency/Postgraduate Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Internist/Internal Medicine Specialist in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "healthcare organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "Faculty of Pediatrics \u2013 Residency/Postgraduate Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics (public/private)",
      "pediatric consultant",
      "academic medicine",
      "pediatric research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Dentistry",
    "faculty": "Faculty of Stomatology (Dentistry) \u2013 Residency/Postgraduate Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Dental specialist (restorative, surgical, etc.)",
      "consultant dentist",
      "academic dentistry",
      "dental research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "Faculty of Surgery \u2013 Residency/Postgraduate Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon in hospitals (general, emergency, specialized surgical units)",
      "surgical consultant",
      "academic medicine",
      "surgical research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Fellowship Program",
    "faculty": "Faculty of Postgraduate Education \u2013 Doctoral Program",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical researcher",
      "university faculty",
      "research scientist in pharmaceutical/healthcare institutions",
      "academic medicine",
      "public health researcher"
    ],
    "features": []
  }
]);

// --- LOMONOSOV MOSCOW STATE UNIVERSITY (Russia) ---
const univ_lomonosovmoscowstateuniversityrussia = db.institutions.insertOne(inst({
  "name": "LOMONOSOV MOSCOW STATE UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Moscow",
  "province": "Moscow",
  "country": "Russia",
  "campuses": [
    "Moscow"
  ],
  "website": "https://www.msu.ru (Russian); https://international.msu.ru (English)",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "info@msu.ru",
      "phone": "+495 939-10-00",
      "address": "GSP-1, Leninskie Gory, Moscow, 119991, Russian Federation"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes"
    }
  ],
  "internships": {
    "part_time_work": "Placement assistance: Post-graduation employment support varies by faculty",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Cultural facilities: Theaters, concert halls, clubs, studios",
    "housing": "Accommodation: 7+ dormitories; cost \u20ac1-171/month depending on dorm type and funding status"
  },
  "security": {
    "detail": "On-campus security: Standard Russian university security protocols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_lomonosovmoscowstateuniversityrussia, "LOMONOSOV MOSCOW STATE UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc. (6 years, Faculty of Medicine)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc. (Faculty of Physics)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc. (Faculty of Biology)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemistry B.Sc. (Faculty of Chemistry)",
    "faculty": "5.Computer Science B.Sc. (Faculty of Mechanics and Mathematics / Department of Informatics)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Global Economics and Finance (2 years, English-taught, Moscow School of Economics)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Relations and Global Studies (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Geometry and Quantum Fields (2 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Economics and Finance (2 years, English or Russian)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Business Management (2 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc.",
    "faculty": "Faculty of Medicine (M. V. Lomonosov Moscow State University)",
    "duration_years": 6.0,
    "annual_fee_cad": 102,
    "total_fee_cad": 612,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "Physician",
      "medical researcher",
      "healthcare specialist",
      "hospital doctor",
      "clinical fellow"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc.",
    "faculty": "Faculty of Physics and Astronomy",
    "duration_years": 4.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 36544,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "academic researcher",
      "data analyst",
      "quantum computing specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc.",
    "faculty": "Faculty of Biology",
    "duration_years": 4.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 36544,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Biologist",
      "research scientist",
      "environmental scientist",
      "pharmaceutical analyst",
      "conservation specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemistry B.Sc.",
    "faculty": "Faculty of Chemistry",
    "duration_years": 4.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 36544,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "Physics",
      "Mathematics (STEM)"
    ],
    "entry_roles": [
      "Chemist",
      "pharmaceutical analyst",
      "chemical engineer",
      "materials scientist",
      "laboratory technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science B.Sc.",
    "faculty": "Faculty of Mechanics and Mathematics / Department of Informatics",
    "duration_years": 4.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 36544,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science fundamentals"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI specialist",
      "web developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Global Economics and Finance",
    "faculty": "Moscow School of Economics (MSE), Faculty of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 7040,
    "total_fee_cad": 14080,
    "min_class12_percent": 55,
    "required_subjects": [
      "Microeconomics",
      "Macroeconomics",
      "Mathematics",
      "Statistics fundamentals"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment banker",
      "corporate financier",
      "risk manager",
      "financial consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Relations and Global Studies",
    "faculty": "Faculty of International Relations",
    "duration_years": 2.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 18272,
    "min_class12_percent": 55,
    "required_subjects": [
      "Background in international affairs",
      "politics",
      "history helpful"
    ],
    "entry_roles": [
      "International relations analyst",
      "diplomatic officer",
      "policy advisor",
      "NGO specialist",
      "researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Geometry and Quantum Fields",
    "faculty": "Institute for Theoretical and Mathematical Physics (ITMP)",
    "duration_years": 2.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 18272,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in differential geometry",
      "quantum mechanics",
      "theoretical physics"
    ],
    "entry_roles": [
      "Theoretical physicist",
      "quantum researcher",
      "academic scientist",
      "research fellow",
      "postdoctoral researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Economics and Finance",
    "faculty": "Moscow School of Economics (MSE), Faculty of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 6496,
    "total_fee_cad": 12992,
    "min_class12_percent": 55,
    "required_subjects": [
      "Microeconomics",
      "Macroeconomics",
      "Mathematics",
      "Statistics",
      "Accountants",
      "financiers welcome"
    ],
    "entry_roles": [
      "Financial analyst",
      "economist",
      "business analyst",
      "consultant",
      "research analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Business Management",
    "faculty": "Faculty of Economics / Moscow School of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 9136,
    "total_fee_cad": 18272,
    "min_class12_percent": 55,
    "required_subjects": [
      "Business administration",
      "management",
      "economics helpful"
    ],
    "entry_roles": [
      "Business manager",
      "consultant",
      "international business analyst",
      "corporate manager",
      "entrepreneur"
    ],
    "features": []
  }
]);

// --- MARI STATE UNIVERSITY (Russia) ---
const univ_maristateuniversityrussia = db.institutions.insertOne(inst({
  "name": "MARI STATE UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Yoshkar-Ola",
  "province": "Mari El",
  "country": "Russia",
  "campuses": [
    "Yoshkar-Ola"
  ],
  "website": "https://marsu.ru",
  "application_portal": "https://marsu.ru/en/Admissions/",
  "contacts": {
    "admissions": {
      "email": "inter_office@marsu.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names/Details: Merit-based scholarships available based on academic marks, attendance, conduct, and top performance; approximately $500/year mentioned"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities During Study: Yes \u2014 medical programs include clinical rotations (years 4\u20136) in affiliated hospitals and clinics",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Scientific communities, sports schools, volunteer/charity work, cultural events, student contests (\u201cMiss Finno-Ugric Student Community\u201d), \u201cVoice of Youth\u201d festival, KVN (comedy/invention club), theater productions, youth forums, and seminars"
  },
  "security": {
    "detail": "Security Infrastructure: CCTV surveillance throughout campus and hostels, security guards, electronic access systems to dormitories, dedicated international student support services"
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

addPrograms(univ_maristateuniversityrussia, "MARI STATE UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Information Systems and Technologies",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Relations",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Chemistry (Environmental Chemistry, Chemical Expertise and Environmental Safety)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ecology and Natural Resources Management (General Ecology)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biology (Biochemistry and Molecular Biology)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Linguistics (Theory and Practice in International Communication)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Psychology (Techniques of Coaching, Trainings Work, Consulting; Psychology of Human Resource Management)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "Faculty/Institute of Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed by university"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty/Institute of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Faculty/Institute of Pharmacy",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Information Systems and Technologies",
    "faculty": "Faculty/Institute of Information Systems and Technologies",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Relations",
    "faculty": "Faculty/Institute of International Relations",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Chemistry (Environmental Chemistry, Chemical Expertise and Environmental Safety)",
    "faculty": "Faculty/Institute of Chemistry \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ecology and Natural Resources Management (General Ecology)",
    "faculty": "Faculty/Institute of Ecology and Natural Resources Management \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biology (Biochemistry and Molecular Biology)",
    "faculty": "Faculty/Institute of Biology \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Linguistics (Theory and Practice in International Communication)",
    "faculty": "Faculty/Institute of Linguistics \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Psychology (Techniques of Coaching, Trainings Work, Consulting; Psychology of Human Resource Management)",
    "faculty": "Faculty/Institute of Psychology \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  }
]);

// --- Novosibirsk State University (Russia) ---
const univ_novosibirskstateuniversityrussia = db.institutions.insertOne(inst({
  "name": "Novosibirsk State University (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Novosibirsk",
  "province": "Novosibirsk Oblast",
  "country": "Russia",
  "campuses": [
    "Novosibirsk"
  ],
  "website": "https://english.nsu.ru",
  "application_portal": "NSU admission page for international students \u2013 https://english.nsu.ru/admission/apply/",
  "contacts": {
    "admissions": {
      "phone": "Not publicly disclosed on English international pages"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships (Yes / No): Yes"
    },
    {
      "name": "Scholarship names (if available):"
    },
    {
      "name": "Russian Government (state) scholarships for international students (via Rossotrudnichestvo/Russia.study system)"
    },
    {
      "name": "NSU internal scholarships and support programs mentioned generally, specific names not listed on English main pages"
    }
  ],
  "internships": {
    "part_time_work": "Career / placement support: Not publicly disclosed as a dedicated \u201ccareer center\u201d on English site; research and academic pathways highlighted",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs, activities, facilities (brief): NSU describes extensive research infrastructure (100+ laboratories and centers) and over 7,000 students with more than 1,000 international students from 56 countries, indicating active academic and student life; specific club lists not publicly disclosed on English site"
  },
  "security": {
    "detail": "Security infrastructure: Not publicly disclosed on English site"
  },
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_novosibirskstateuniversityrussia, "Novosibirsk State University (Russia)", [
  {
    "level": "UG",
    "name": "Bachelor\u2019s Degree in Economics",
    "faculty": "Economics Department, Novosibirsk State University",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Completion of secondary education meeting Russian",
      "NSU requirements",
      "subject list not specified centrally"
    ],
    "entry_roles": [
      "Not publicly disclosed as a list"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Degree in Information Technology",
    "faculty": "Information Technologies Department (FIT)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Completion of secondary education",
      "emphasis on mathematics/informatics per Russian IT programs",
      "but not itemized on English page"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Degree in Physics (English\u2011taught track)",
    "faculty": "Physics Department / related institutes at NSU",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Secondary education with strong mathematics",
      "physics is typical",
      "not explicitly listed in English"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Degree in Mathematics and Computer Science",
    "faculty": "Mathematics/Mechanics Department and Department of Information Technology (for joint tracks)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Secondary education with strong mathematics",
      "informatics",
      "typical for such programs",
      "not itemized in English"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Specialist Program in General Medicine (English\u2011taught)",
    "faculty": "Specialist program in Medicine at NSU (English\u2011taught Specialist)",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Completion of secondary education satisfying Russian medicine prerequisites",
      "detailed subject list not on English page"
    ],
    "entry_roles": [
      "Not publicly disclosed",
      "subject to national medical licensing"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Program in Big Data Analytics and Artificial Intelligence",
    "faculty": "Faculty/Department of Information Technologies (FIT)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "IT",
      "computer science",
      "mathematics or related fields as defined by program",
      "not detailed centrally"
    ],
    "entry_roles": [
      "Not publicly disclosed as a list"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Program in Oil and Gas Engineering",
    "faculty": "Geology & Geophysics/related department offering Oil and Gas Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Engineering or geoscience background as per program rules"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Program in International Management",
    "faculty": "Economics Department / Management\u2011related units at NSU",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Economics",
      "management or related fields generally expected",
      "not specified centrally"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Program in Physics (English\u2011taught)",
    "faculty": "Physics Department and associated research institutes",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong physics background as per program admission rules"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Program in Particle / Accelerator Physics",
    "faculty": "Physics Department / related high\u2011energy physics units",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Solid background in physics",
      "mathematics"
    ],
    "entry_roles": [
      "Not publicly disclosed"
    ],
    "features": []
  }
]);

// --- ORENBURG STATE MEDICAL UNIVERSITY (Russia) ---
const univ_orenburgstatemedicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "ORENBURG STATE MEDICAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Orenburg",
  "province": "Orenburg Oblast",
  "country": "Russia",
  "campuses": [
    "Orenburg"
  ],
  "website": "https://www.orenburgsmu.com",
  "application_portal": "Official university website (https://www.orenburgsmu.com/) and affiliated admission portals",
  "contacts": {
    "admissions": {
      "phone": "+7(3532) 50-06-06, ext. 601",
      "email": "rector@orgma.ru",
      "address": "6, Sovetskaya Street, Orenburg, Russia 460000"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Types:"
    },
    {
      "name": "Need-based support for economically disadvantaged students"
    },
    {
      "name": "Merit-based scholarships for high performers (up to partial/full tuition coverage)"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: FMGE/NEXT exam preparation guidance, USMLE/PLAB guidance, internship placement assistance, career counseling, alumni networking",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Application Steps: (1) Select course and complete application form via official portal; (2) Submit documents via email/online portal; (3) Pay registration fee (if applicable); (4) Wait for admission decision (~7\u201310 working days); (5) Receive admission letter; (6) Apply for Russian student visa at nearest Russian embassy/consulate; (7) Pay first-year tuition to university account; (8) Receive visa/invitation letter; (9) Arrive in Orenburg and complete registration; (10) Medical examination; (11) Take entrance exams in Chemistry and Biology; (12) Finalize enrollment and housing",
    "clubs": "Student Clubs & Activities: Sports clubs (football, mini-football, volleyball, basketball, table tennis, chess, skiing, snowboarding, swimming, aerobics, boxing, kickboxing, weightlifting, athletics, yoga); cultural festivals (Dedication to Students, Fresher\u2019s Day, \u201cDebut of OSMU\u201d Amateur Art Festival, Miss/Mr OSMU pageant, Navruz Spring Festival, Diwali, New Year celebrations, KVN comedy productions); Student Council, OSMU Students\u2019 Trade Union, Volunteer organizations, International Club \u201cBetween the Cultures\u201d, drama/music/literature clubs, scientific research groups"
  },
  "security": {
    "detail": "Security Infrastructure: 24/7 security personnel throughout campus and hostels; CCTV surveillance in all areas; electronic access/card system for dormitory entry (authorized persons only); secure regulated entry system with guards; on-call support staff and wardens; safe and well-regulated environment"
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

addPrograms(univ_orenburgstatemedicaluniversityrussia, "ORENBURG STATE MEDICAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Preventive Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. Fellowship Programs",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Post-Graduate Training in Medical Specialties",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "Faculty of General Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals",
      "clinics",
      "research institutions",
      "roles in healthcare organizations",
      "opportunity to clear FMGE",
      "practice in India",
      "international medical practice"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "Faculty of Dentistry",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Dentist in hospitals",
      "private dental clinics",
      "public health programs",
      "research institutions",
      "opportunity for international licensure"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Faculty of Pharmacy",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Hospital pharmacist",
      "clinical pharmacist",
      "pharmaceutical researcher",
      "quality control specialist",
      "industrial pharmacist",
      "roles in pharmaceutical companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics",
      "public health programs",
      "research institutions",
      "pediatric specialist roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Preventive Medicine",
    "faculty": "Faculty of Preventive Care",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Public health physician",
      "epidemiologist",
      "health policy specialist",
      "disease control officer",
      "occupational health specialist",
      "roles with health organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "Faculty of General Medicine \u2013 Postgraduate Residency Program (Ordinatura)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Internist/Internal Medicine Specialist in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "healthcare organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "Faculty of Surgery \u2013 Postgraduate Residency Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon in hospitals (general, emergency, specialized)",
      "surgical consultant",
      "academic medicine",
      "surgical research positions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "Faculty of Pediatrics \u2013 Postgraduate Residency Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics",
      "pediatric consultant",
      "academic medicine",
      "pediatric research",
      "public health pediatrician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. Fellowship Program",
    "faculty": "Doctoral Program (Aspirantura/Ph.D.) across medical disciplines",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical researcher",
      "university faculty",
      "research scientist in pharmaceutical/healthcare institutions",
      "academic medicine",
      "public health researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Post-Graduate Training Program in Medical Specialties",
    "faculty": "Department of Post-Graduate Training for Specialists",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Medical specialist in hospitals (various specialties: cardiology, neurology, orthopedics, etc.)",
      "consultant roles",
      "academic medicine",
      "clinical research"
    ],
    "features": []
  }
]);

// --- PSKOV STATE UNIVERSITY (Russia) ---
const univ_pskovstateuniversityrussia = db.institutions.insertOne(inst({
  "name": "PSKOV STATE UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Pskov",
  "province": "Pskov Oblast",
  "country": "Russia",
  "campuses": [
    "Pskov"
  ],
  "website": "https://en.pskgu.ru/en/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "St. Lev Tolstoy, 4, Building 1, Cabinet 9, Pskov, Pskov Oblast, Russia, 180000"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Details:"
    },
    {
      "name": "Merit-based scholarships for high academic performers"
    },
    {
      "name": "University-based financial aid"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Internship placement assistance; job placement services; career counseling; preparation guidance for FMGE, USMLE, PLAB; alumni career network",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Activities: Sports sections (basketball, volleyball, football, table tennis); extracurricular activities; cultural events; volunteer opportunities; International Student Center",
    "housing": "International Student Support: Dedicated International Office; visa assistance; accommodation support; tutors for adaptation and cultural integration; registration with Federal Migration Service"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail on official English-language site"
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

addPrograms(univ_pskovstateuniversityrussia, "PSKOV STATE UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine (MBBS, 6 years, Specialist\u2019s Degree, English medium)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medical Biochemistry",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medical Cybernetics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychological Education",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Nursing",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Medicine",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Surgery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency Programs (2-3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Public Health (MPH)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Pharmacy",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine (MBBS)",
    "faculty": "Faculty of General Medicine / Institute of Medicine and Experimental Biology",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals (public/private)",
      "clinics",
      "research institutions",
      "opportunity to clear FMGE",
      "practice in India",
      "international medical practice (USMLE, PLAB)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medical Biochemistry",
    "faculty": "Faculty of Medical Biochemistry",
    "duration_years": 5.0,
    "annual_fee_cad": 5120,
    "total_fee_cad": 25600,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Biochemistry specialist",
      "medical laboratory technician",
      "researcher in pharmaceutical companies",
      "diagnostic labs",
      "healthcare institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medical Cybernetics",
    "faculty": "Faculty of Medical Cybernetics",
    "duration_years": 4.0,
    "annual_fee_cad": 5120,
    "total_fee_cad": 20480,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Medical IT specialist",
      "healthcare systems analyst",
      "bioinformatics specialist",
      "roles in healthcare technology companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychological Education",
    "faculty": "Faculty of Psychological Education",
    "duration_years": 4.0,
    "annual_fee_cad": 4480,
    "total_fee_cad": 17920,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Educational psychologist",
      "school counselor",
      "research psychologist",
      "roles in educational",
      "mental health organizations"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Nursing",
    "faculty": "Nursing Faculty",
    "duration_years": 4.0,
    "annual_fee_cad": 4480,
    "total_fee_cad": 17920,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Registered nurse in hospitals (public/private)",
      "clinics",
      "community health organizations",
      "healthcare research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Medicine",
    "faculty": "Faculty of General Medicine \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4800,
    "total_fee_cad": 9600,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Medical specialist",
      "researcher",
      "academic medicine",
      "healthcare consultant",
      "roles in hospitals",
      "research institutes"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Surgery",
    "faculty": "Faculty of Surgery \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4800,
    "total_fee_cad": 9600,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon",
      "surgical specialist",
      "academic medicine",
      "surgical researcher",
      "roles in hospitals",
      "healthcare organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency Program",
    "faculty": "Faculty of Postgraduate Education \u2013 Clinical Residency Program",
    "duration_years": 3.0,
    "annual_fee_cad": 4480,
    "total_fee_cad": 13440,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Specialist physician in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "healthcare organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Public Health (MPH)",
    "faculty": "Faculty of Public Health \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4800,
    "total_fee_cad": 9600,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Public health specialist",
      "epidemiologist",
      "health policy analyst",
      "health program manager",
      "roles in government health agencies",
      "international organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Pharmacy",
    "faculty": "Faculty of Pharmacy \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4800,
    "total_fee_cad": 9600,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Clinical pharmacist",
      "pharmaceutical researcher",
      "quality assurance specialist",
      "industrial pharmacist",
      "roles in pharmaceutical companies",
      "healthcare institutions"
    ],
    "features": []
  }
]);

// --- Pirogov Russian National Research Medical University ---
const univ_pirogovrussiannationalresearchmedicaluniversity = db.institutions.insertOne(inst({
  "name": "Pirogov Russian National Research Medical University",
  "abbreviation": "",
  "type": "university",
  "city": "Moscow",
  "province": "Moscow",
  "country": "Russia",
  "campuses": [
    "Moscow"
  ],
  "website": "https://typo3.rsmu.ru",
  "application_portal": "Paper\u2011based application; \u201cAll documents should be submitted as hardcopies\u201d to Admission Office, not via an electronic portal",
  "contacts": {
    "admissions": {
      "email": "Email: ims@rsmu.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships (Yes/No): Yes, via Government of the Russian Federation quotas (state scholarships)"
    },
    {
      "name": "Scholarship names (if available): Government of the Russian Federation quota scholarships (applied through the RUSSIA.STUDY system, selecting \u201cThe Russian National Research Medical University\u201d)"
    }
  ],
  "internships": {
    "part_time_work": "Internship / industry project: Yes, practice within social work and healthcare\u2011related institutions partnered with the university",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs, activities, facilities: University described as a large complex of educational, scientific and medical divisions and centers with extensive clinical training infrastructure; specific club lists not publicly disclosed on English pages"
  },
  "security": {
    "detail": "Security infrastructure: Not publicly disclosed on English pages"
  },
  "top_ug_programs": [],
  "top_pg_programs": [
    "General Medicine (ENG / RUS)",
    "Pediatrics (ENG / RUS)",
    "Dentistry (ENG / RUS)",
    "Pharmacy",
    "Clinical Psychology"
  ]
})).insertedId;

addPrograms(univ_pirogovrussiannationalresearchmedicaluniversity, "Pirogov Russian National Research Medical University", []);

// --- RUDN UNIVERSITY (Russia) ---
const univ_rudnuniversityrussia = db.institutions.insertOne(inst({
  "name": "RUDN UNIVERSITY (Russia)",
  "abbreviation": "PEOPLES\u2019 FRIENDSHIP UNIVERSITY OF RUSSIA",
  "type": "university",
  "city": "Moscow",
  "province": "Moscow",
  "country": "Russia",
  "campuses": [
    "Moscow"
  ],
  "website": "https://eng.rudn.ru",
  "application_portal": "https://eng.rudn.ru/admissions/admission-of-foreign-citizens/",
  "contacts": {
    "admissions": {
      "address": "117198, Moscow, Miklukho-Maklaya Str., 6 (Main Campus) / Miklukho-Maklaya St., 10/2 (Alternative)",
      "email": "information@rudn.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes"
    },
    {
      "name": "RUDN Olympiad: Held annually after students enroll; Participants by field of study; Top performers receive tuition discounts or monthly grants (~25,000 RUB)"
    }
  ],
  "internships": {
    "part_time_work": "Department of Internship and Employment: Dedicated department to help students find opportunities and develop portfolios",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing amenities: Comfortable rooms/apartments with bathrooms, equipped kitchens, internet connection, satellite TV, laundry facilities, study halls",
    "clubs": "Student life: Student clubs, cultural organizations, international student events"
  },
  "security": {
    "detail": "On-campus security: 24/7 video monitoring and fire protection systems; Standard Russian university security protocols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_rudnuniversityrussia, "RUDN UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc. (6 years, Institute of Medicine, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Civil Engineering & Construction B.Sc. (4-5 years, Academy of Engineering)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics B.Sc. (4 years, Faculty of Science)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science/Information Technology B.Sc. (4 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law B.Sc./Law Studies (4 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "General Medicine/Family Medicine MSc (2-3 years, Institute of Medicine)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management MSc (English-taught, 2 years, Higher School of Management)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Relations MSc (English-taught, 2 years, Faculty of Humanities)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Economics MSc (English-taught, 2 years, Faculty of Economics)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Engineering/Oil & Gas Engineering MSc (English-taught, 2 years, Academy of Engineering)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc. (General Medicine - Pediatrics & Therapeutics)",
    "faculty": "Department of Internship and Employment; FMGE/NExT preparation support; Alumni network across 110+ countries",
    "duration_years": 6.0,
    "annual_fee_cad": 11284,
    "total_fee_cad": 67704,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "General practitioner (GP)",
      "physician",
      "medical researcher",
      "healthcare specialist",
      "pediatrician",
      "internist",
      "clinical fellow"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Civil Engineering & Construction B.Sc.",
    "faculty": "Academy of Engineering, Faculty of Engineering",
    "duration_years": 5.0,
    "annual_fee_cad": 7888,
    "total_fee_cad": 39440,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry (STEM)"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "construction engineer",
      "project manager",
      "infrastructure developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics B.Sc.",
    "faculty": "Faculty of Science, Department of Mathematics",
    "duration_years": 4.0,
    "annual_fee_cad": 8160,
    "total_fee_cad": 32640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Mathematician",
      "data analyst",
      "academic researcher",
      "systems analyst",
      "financial analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science/Information Technology B.Sc.",
    "faculty": "Faculty of Science, Department of Computer Science / Academy of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 8568,
    "total_fee_cad": 34272,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science fundamentals"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI specialist",
      "web developer",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law B.Sc./Law Studies",
    "faculty": "Law Institute",
    "duration_years": 4.0,
    "annual_fee_cad": 8160,
    "total_fee_cad": 32640,
    "min_class12_percent": 50,
    "required_subjects": [
      "Humanities/Social Sciences background preferred"
    ],
    "entry_roles": [
      "Lawyer",
      "legal consultant",
      "judge",
      "law enforcement officer",
      "government official",
      "international relations specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "General Medicine/Family Medicine MSc",
    "faculty": "Institute of Medicine, Faculty of Postgraduate Education",
    "duration_years": 2.0,
    "annual_fee_cad": 10880,
    "total_fee_cad": 21760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Medical background",
      "General medical practice knowledge"
    ],
    "entry_roles": [
      "Family medicine practitioner",
      "general practitioner (GP)",
      "primary care physician",
      "medical researcher",
      "healthcare administrator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management MSc (English-taught)",
    "faculty": "Higher School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 7548,
    "total_fee_cad": 15096,
    "min_class12_percent": 55,
    "required_subjects": [
      "Business",
      "economics",
      "or management background helpful"
    ],
    "entry_roles": [
      "Business manager",
      "corporate manager",
      "project manager",
      "consultant",
      "management analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Relations MSc (English-taught)",
    "faculty": "Faculty of Humanities and Social Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 6596,
    "total_fee_cad": 13192,
    "min_class12_percent": 55,
    "required_subjects": [
      "International relations",
      "political science",
      "history",
      "or diplomacy background helpful"
    ],
    "entry_roles": [
      "International relations analyst",
      "diplomat",
      "policy advisor",
      "NGO specialist",
      "think tank researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Economics MSc (English-taught)",
    "faculty": "Faculty of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 7548,
    "total_fee_cad": 15096,
    "min_class12_percent": 55,
    "required_subjects": [
      "Economics",
      "mathematics",
      "statistics",
      "accounting",
      "or business background"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "business analyst",
      "economic policy analyst",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Oil and Gas Engineering MSc (English-taught)",
    "faculty": "Academy of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 8568,
    "total_fee_cad": 17136,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mechanical engineering",
      "chemical engineering",
      "petroleum engineering",
      "or physics background"
    ],
    "entry_roles": [
      "Oil",
      "gas engineer",
      "petroleum engineer",
      "process engineer",
      "project manager",
      "technical specialist"
    ],
    "features": []
  }
]);

// --- SAINT PETERSBURG STATE UNIVERSITY (Russia) ---
const univ_saintpetersburgstateuniversityrussia = db.institutions.insertOne(inst({
  "name": "SAINT PETERSBURG STATE UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Saint Petersburg",
  "province": "Saint Petersburg",
  "country": "Russia",
  "campuses": [
    "Saint Petersburg"
  ],
  "website": "https://english.spbu.ru",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "7-9 Universitetskaya Embankment, St Petersburg, Russia, 199034",
      "phone": "+7 (812) 328-32-91",
      "email": "intadm@spbu.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes"
    },
    {
      "name": "Scholarship names: Not explicitly listed; typically merit-based and limited in availability"
    },
    {
      "name": "Information: Contact international admissions office for current scholarship opportunities"
    }
  ],
  "internships": {
    "part_time_work": "Internship/practical training: Yes; varies by faculty and program",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student life: International student community, cultural organizations, academic clubs"
  },
  "security": {
    "detail": "On-campus security: Standard university security protocols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_saintpetersburgstateuniversityrussia, "SAINT PETERSBURG STATE UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc. (6 years, Faculty of Medicine, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc. (Faculty of Physics, 4 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics B.Sc. (Faculty of Mathematics and Mechanics, 4 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc. (Faculty of Biology, 4 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science B.Sc. (Faculty of Applied Mathematics and Control Processes, 4 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM) (2 years, GSOM SPbU, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Business Analytics and Big Data (MiBA) (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Corporate Finance (MCF) (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Artificial Intelligence and International Security (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Economics and Management in Business Development (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc.",
    "faculty": "Faculty of Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 5246,
    "total_fee_cad": 31476,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "Physician",
      "general practitioner (GP)",
      "medical researcher",
      "healthcare specialist",
      "clinician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc.",
    "faculty": "Faculty of Physics",
    "duration_years": 4.0,
    "annual_fee_cad": 5440,
    "total_fee_cad": 21760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Physicist",
      "research scientist",
      "theoretical physicist",
      "data analyst",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics B.Sc.",
    "faculty": "Faculty of Mathematics and Mechanics",
    "duration_years": 4.0,
    "annual_fee_cad": 5440,
    "total_fee_cad": 21760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Mathematician",
      "data analyst",
      "systems analyst",
      "financial analyst",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc.",
    "faculty": "Faculty of Biology",
    "duration_years": 4.0,
    "annual_fee_cad": 5440,
    "total_fee_cad": 21760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Biologist",
      "research scientist",
      "environmental scientist",
      "pharmaceutical analyst",
      "laboratory technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science B.Sc.",
    "faculty": "Faculty of Applied Mathematics and Control Processes",
    "duration_years": 4.0,
    "annual_fee_cad": 5440,
    "total_fee_cad": 21760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science fundamentals"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI specialist",
      "web developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM)",
    "faculty": "Graduate School of Management (GSOM SPbU)",
    "duration_years": 2.0,
    "annual_fee_cad": 6800,
    "total_fee_cad": 13600,
    "min_class12_percent": 55,
    "required_subjects": [
      "Business",
      "management",
      "economics background helpful"
    ],
    "entry_roles": [
      "Business manager",
      "corporate manager",
      "project manager",
      "management consultant",
      "strategic analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Business Analytics and Big Data (MiBA)",
    "faculty": "Graduate School of Management (GSOM SPbU)",
    "duration_years": 2.0,
    "annual_fee_cad": 6800,
    "total_fee_cad": 13600,
    "min_class12_percent": 55,
    "required_subjects": [
      "Analytics",
      "data science",
      "mathematics",
      "or statistics background"
    ],
    "entry_roles": [
      "Data scientist",
      "business analyst",
      "analytics consultant",
      "financial analyst",
      "data engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Corporate Finance (MCF)",
    "faculty": "Graduate School of Management (GSOM SPbU)",
    "duration_years": 2.0,
    "annual_fee_cad": 6800,
    "total_fee_cad": 13600,
    "min_class12_percent": 55,
    "required_subjects": [
      "Finance",
      "accounting",
      "business",
      "mathematics background"
    ],
    "entry_roles": [
      "Finance manager",
      "investment banker",
      "corporate financial analyst",
      "financial consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Artificial Intelligence and International Security",
    "faculty": "Multiple Departments / Graduate School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 55,
    "required_subjects": [
      "AI",
      "computer science",
      "mathematics",
      "international relations",
      "security studies"
    ],
    "entry_roles": [
      "AI researcher",
      "security analyst",
      "cybersecurity specialist",
      "policy analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Economics and Management in Business Development",
    "faculty": "Graduate School of Management (GSOM SPbU)",
    "duration_years": 2.0,
    "annual_fee_cad": 6800,
    "total_fee_cad": 13600,
    "min_class12_percent": 55,
    "required_subjects": [
      "Business development",
      "economics",
      "management",
      "entrepreneurship"
    ],
    "entry_roles": [
      "Business development manager",
      "strategic consultant",
      "venture capital analyst",
      "entrepreneur"
    ],
    "features": []
  }
]);

// --- I.M. SECHENOV FIRST MOSCOW STATE MEDICAL UNIVERSITY (Russia) ---
const univ_imsechenovfirstmoscowstatemedicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "I.M. SECHENOV FIRST MOSCOW STATE MEDICAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Moscow",
  "province": "Moscow",
  "country": "Russia",
  "campuses": [
    "Moscow"
  ],
  "website": "https://www.sechenov.ru/eng/",
  "application_portal": "https://www.sechenov.ru/eng/education-study/admission/",
  "contacts": {
    "admissions": {
      "email": "Yusifova.se@1msmu.ru",
      "phone": "+7 495 622 95 57"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {},
  "campus_life": {},
  "security": {},
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Deadlines"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_imsechenovfirstmoscowstatemedicaluniversityrussia, "I.M. SECHENOV FIRST MOSCOW STATE MEDICAL UNIVERSITY (Russia)", [
  {
    "level": "PG",
    "name": "Scholarships & Financial Support",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Life",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Security",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Process (Brief)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc. (6 years, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry B.Sc./BDS (5 years, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy B.Pharm (5 years)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Nursing B.Sc. (offered, English-taught)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc./Biotechnology (offered)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency - General Medicine (3 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency - Family Medicine (2 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Public Health (2 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Biology (2 years, English-taught)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Biotechnology (2 years)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine/MBBS B.Sc. (General Medicine)",
    "faculty": "Faculty of Medicine, International Education Division",
    "duration_years": 6.0,
    "annual_fee_cad": 132,
    "total_fee_cad": 792,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "Physician",
      "medical researcher",
      "general practitioner",
      "healthcare specialist",
      "clinical doctor",
      "internist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry B.Sc./BDS",
    "faculty": "Institute of Dentistry named after E.V. Borovsky",
    "duration_years": 5.0,
    "annual_fee_cad": 10470,
    "total_fee_cad": 52350,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "Dentist",
      "dental surgeon",
      "prosthodontist",
      "orthodontist",
      "dental researcher",
      "public health dentist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy B.Pharm",
    "faculty": "Faculty of Pharmacy",
    "duration_years": 5.0,
    "annual_fee_cad": 6510,
    "total_fee_cad": 32550,
    "min_class12_percent": 50,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (STEM)"
    ],
    "entry_roles": [
      "Pharmacist",
      "pharmaceutical analyst",
      "drug researcher",
      "pharmacy manager",
      "quality control specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Nursing B.Sc.",
    "faculty": "Faculty/Department of Nursing",
    "duration_years": 4.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 24000,
    "min_class12_percent": 50,
    "required_subjects": [
      "Science background (Biology preferred)"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "clinical nurse",
      "nurse educator",
      "health educator",
      "home care nurse"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc./Biotechnology",
    "faculty": "Faculty of Biology and Biotechnology",
    "duration_years": 4.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 24000,
    "min_class12_percent": 50,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Physics (STEM)"
    ],
    "entry_roles": [
      "Biologist",
      "biotechnology researcher",
      "pharmaceutical scientist",
      "biomedical analyst",
      "laboratory technician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency - General Medicine Specialist",
    "faculty": "Faculty of Postgraduate Education / Department of General Medical Practice",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Complete MBBS or equivalent medical degree"
    ],
    "entry_roles": [
      "General medical practitioner",
      "family medicine specialist",
      "internal medicine consultant",
      "clinical doctor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Clinical Residency - Family Medicine",
    "faculty": "Faculty of Postgraduate Education / Department of Family Medicine",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "General medical training or primary care experience"
    ],
    "entry_roles": [
      "Family medicine doctor",
      "primary care physician",
      "community health specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Public Health",
    "faculty": "Faculty of Public Health and Medicine",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Medical science",
      "public health",
      "epidemiology",
      "or healthcare administration"
    ],
    "entry_roles": [
      "Public health specialist",
      "epidemiologist",
      "health policy analyst",
      "healthcare administrator",
      "disease surveillance officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Biology",
    "faculty": "Faculty of Biology",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in cellular biology",
      "molecular biology",
      "genetics"
    ],
    "entry_roles": [
      "Biological researcher",
      "molecular biologist",
      "laboratory scientist",
      "biotech specialist",
      "university researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Biotechnology",
    "faculty": "Faculty of Biotechnology and Biomedical Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Molecular biology",
      "genetics",
      "biochemistry",
      "pharmaceutical sciences"
    ],
    "entry_roles": [
      "Biotechnology scientist",
      "pharmaceutical researcher",
      "biomedical engineer",
      "quality assurance specialist",
      "regulatory affairs specialist"
    ],
    "features": []
  }
]);

// --- TOMSK STATE UNIVERSITY (Russia) ---
const univ_tomskstateuniversityrussia = db.institutions.insertOne(inst({
  "name": "TOMSK STATE UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Tomsk",
  "province": "Tomsk Oblast",
  "country": "Russia",
  "campuses": [
    "Tomsk"
  ],
  "website": "https://en.tsu.ru/ (Main English portal)",
  "application_portal": "Online via https://en.tsu.ru/ or https://tsuod.tilda.ws/opendoorstsuen",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Types:"
    },
    {
      "name": "Open Doors Russian Scholarship (Masters & PhD eligible)"
    },
    {
      "name": "Merit-based scholarships (for high performers)"
    },
    {
      "name": "University scholarships (tuition support available)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Academic practices and laboratory work included in curricula",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 200+ annual sports, social, cultural events; English, German, Arabic, Chinese, Japanese language clubs; Rotary Club International branch; volunteer clubs"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail on official English-language site"
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

addPrograms(univ_tomskstateuniversityrussia, "TOMSK STATE UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Software Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Tomsk International Science Program",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biophotonics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Computer Science",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics (Computer Science/Applied Mathematics)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Management",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Information Technologies in Science and Instrument Engineering",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Professionally Oriented Translation",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biophotonics",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biodiversity",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software Engineering",
    "faculty": "Faculty of Computer Studies / Engineering School",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Software developer",
      "software engineer",
      "systems analyst",
      "IT specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Tomsk International Science Program",
    "faculty": "Multiple faculties participating in interdisciplinary program",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Research scientist",
      "academic positions",
      "roles in science institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biophotonics",
    "faculty": "Faculty of Physics / School of Natural Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Research scientist",
      "biomedical engineer",
      "photonics specialist",
      "roles in research institutes"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Computer Science",
    "faculty": "Faculty of Computer Studies",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Systems analyst",
      "applications developer",
      "IT consultant",
      "data analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics (Applied Mathematics & Cybernetics)",
    "faculty": "Faculty of Applied Mathematics and Cybernetics",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Mathematician",
      "data scientist",
      "analyst",
      "roles in research",
      "technology sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Management",
    "faculty": "Faculty of Management / Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 4369,
    "total_fee_cad": 8738,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "international business manager",
      "corporate roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Information Technologies in Science and Instrument Engineering",
    "faculty": "Engineering School of Information Technologies",
    "duration_years": 2.0,
    "annual_fee_cad": 4369,
    "total_fee_cad": 8738,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "IT engineer",
      "systems engineer",
      "research scientist",
      "roles in tech",
      "engineering companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Professionally Oriented Translation",
    "faculty": "Faculty of Foreign Languages",
    "duration_years": 2.0,
    "annual_fee_cad": 4369,
    "total_fee_cad": 8738,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Professional translator",
      "interpreter",
      "localization specialist",
      "roles in translation firms",
      "international organizations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biophotonics",
    "faculty": "Faculty of Physics / School of Natural Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 4369,
    "total_fee_cad": 8738,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical research scientist",
      "photonics engineer",
      "research specialist",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biodiversity",
    "faculty": "Faculty of Biology and Soil Science",
    "duration_years": 2.0,
    "annual_fee_cad": 4369,
    "total_fee_cad": 8738,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biodiversity specialist",
      "conservation biologist",
      "environmental consultant",
      "research scientist",
      "roles in conservation organizations",
      "environmental institutions"
    ],
    "features": []
  }
]);

// --- TVER STATE MEDICAL UNIVERSITY (Russia) ---
const univ_tverstatemedicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "TVER STATE MEDICAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Tver",
  "province": "Tver Oblast",
  "country": "Russia",
  "campuses": [
    "Tver"
  ],
  "website": "https://tvgmu.ru (Russian) | https://www.tverstatemedicaluniversity.com (English)",
  "application_portal": "Official website https://www.tverstatemedicaluniversity.com or direct submission to Admission Office",
  "contacts": {
    "admissions": {
      "address": "Room \u2116 12, 4, Sovetskaya Street, Tver, 170100",
      "phone": "+7 (4822) 32-17-79",
      "email": "abit@tvgmu.ru"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Types:"
    },
    {
      "name": "State-funded scholarships (for qualified candidates)"
    },
    {
      "name": "Merit-based scholarships for high academic performers"
    },
    {
      "name": "Need-based scholarships for economically disadvantaged students"
    },
    {
      "name": "International scholarships (limited availability; application details on official site)"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: FMGE/NEXT preparation guidance; USMLE/PLAB examination guidance for international medical practice; internship placement assistance; alumni networking; career counseling",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Sports clubs (football, mini-football, volleyball, basketball, table tennis, chess, skiing, snowboarding, swimming, aerobics, boxing, kickboxing, weightlifting, athletics, yoga); cultural festivals (Dedication to Students, Fresher\u2019s Day, \u201cDebut of TSMU\u201d Amateur Art Festival, Miss/Mr TSMU pageant, Navruz Spring Festival, Diwali, New Year celebrations, KVN comedy productions); Student Council, TSMU Students\u2019 Trade Union, Volunteer organizations, International Club \u201cBetween the Cultures\u201d, drama/music/literature creative clubs, scientific research groups, student press service"
  },
  "security": {
    "detail": "Security Infrastructure: 24/7 security personnel and monitoring throughout campus and dormitories; CCTV surveillance in all areas including hostels; electronic access/card systems for dormitory entry (authorized persons only); separate assigned wardens for each hostel; secure regulated entry system with security guards"
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

addPrograms(univ_tverstatemedicaluniversityrussia, "TVER STATE MEDICAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Advanced Nursing Education",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Programs",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Programs",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "Faculty of General Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals (public/private)",
      "clinics",
      "research institutions",
      "healthcare organizations",
      "opportunity to clear FMGE",
      "practice in India",
      "USMLE/PLAB for international medical practice"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "Faculty of Dental Medicine",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Dentist in hospitals (public/private)",
      "private dental clinics",
      "public health programs",
      "research institutions",
      "opportunity for international licensure",
      "practice"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Faculty of Pharmacy",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Hospital pharmacist",
      "clinical pharmacist",
      "pharmaceutical researcher",
      "quality control specialist",
      "industrial pharmacist",
      "roles in pharmaceutical companies",
      "healthcare institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics (public/private)",
      "public health programs",
      "research institutions",
      "pediatric specialist roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Advanced Nursing Education",
    "faculty": "Faculty of Advanced Nursing Education",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Registered nurse in hospitals (public/private)",
      "clinics",
      "community health organizations",
      "healthcare research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "Faculty of General Medicine \u2013 Residency/Postgraduate Training Program",
    "duration_years": 3.0,
    "annual_fee_cad": 5250,
    "total_fee_cad": 15750,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Internist/Internal Medicine Specialist in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "healthcare organizations",
      "government health systems"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "Faculty of Surgery \u2013 Residency/Postgraduate Training Program",
    "duration_years": 3.0,
    "annual_fee_cad": 5250,
    "total_fee_cad": 15750,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon in hospitals (general, emergency, specialized surgical units)",
      "surgical consultant",
      "academic medicine",
      "surgical research positions",
      "government health systems"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "Faculty of Pediatrics \u2013 Residency/Postgraduate Training Program",
    "duration_years": 3.0,
    "annual_fee_cad": 5250,
    "total_fee_cad": 15750,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics (public/private)",
      "pediatric consultant",
      "academic medicine",
      "pediatric research",
      "public health pediatrician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Program",
    "faculty": "Faculty of Postgraduate Studies \u2013 Doctoral Program (Aspirantura/Ph.D.)",
    "duration_years": 4.0,
    "annual_fee_cad": 5250,
    "total_fee_cad": 21000,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical researcher",
      "university faculty",
      "research scientist in pharmaceutical/healthcare institutions",
      "academic medicine",
      "public health researcher",
      "government research positions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Programs",
    "faculty": "Faculty of Postgraduate Studies \u2013 Master\u2019s Programs (various disciplines)",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Roles vary by master\u2019s specialty: Public health specialist",
      "research scientist",
      "healthcare manager",
      "academic educator",
      "specialist in chosen field"
    ],
    "features": []
  }
]);

// --- URAL FEDERAL UNIVERSITY (Russia) ---
const univ_uralfederaluniversityrussia = db.institutions.insertOne(inst({
  "name": "URAL FEDERAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Yekaterinburg",
  "province": "Sverdlovsk Oblast",
  "country": "Russia",
  "campuses": [
    "Yekaterinburg"
  ],
  "website": "https://urfu.ru/en/ (English); https://programs.edu.urfu.ru/en/ (Programs Directory)",
  "application_portal": "Online application via official website https://urfu.ru/en/international/information-for-prospective-international-students/application-information/",
  "contacts": {
    "admissions": {
      "phone": "+7 (343) 375-44-44; Toll-free: 8-800-100-50-44",
      "email": "contact@urfu.ru",
      "address": "Mira Street, 19, office GUK-100, Yekaterinburg, 620002"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names/Types:"
    },
    {
      "name": "Russian Government Scholarship (100% tuition coverage, monthly stipend, dormitory accommodation for entire study period)"
    },
    {
      "name": "Open Doors Russian Scholarship Project (Masters & PhD programs; up to 100% tuition; competitive Olympiad-based selection)"
    },
    {
      "name": "UrFU Tuition Discounts (4% advance payment discount per year; 10\u201330% for entrance exam scores \u226540 points; financial aid available through Students\u2019 Union for low-income students)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2014 4-month internship programs held in Ekaterinburg; available for students during study period",
    "coop_available": true
  },
  "campus_life": {
    "housing": "International Student Support: Dedicated International Students Adaptation Centre; Buddy system for newcomers (airport pickup, accommodation settling, medical examination, health insurance, social adaptation, university/local sights orientation)",
    "clubs": "Student Clubs & Activities: 200+ annual sports, social, and cultural events; International Student Associations representing 25+ nationalities (Afghan, African, Arab, Armenian, Azerbaijani, Chinese, Indian, Indonesian, Iraqi, Kazakh, Kyrgyz, Latin American, Mongolian, Tajik, Turkmen, Uzbek, Vietnamese, etc.); Buddy Program pairing Russian and international students; UrFU Alumni Association with country-specific alumni chapters"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly detailed on official English-language site; medical unit on campus; 24/7 dormitory access implied through dormitory management"
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

addPrograms(univ_uralfederaluniversityrussia, "URAL FEDERAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "Computer Science and Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Computer Science",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Information and Communication Technologies and Systems",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Radio-frequency Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "IT Innovations",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Food Biotechnology",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "System Programming",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Knowledge Engineering",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Chemistry (Solid State Chemistry / Chemistry and Physics of New Functional Materials)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Computer Engineering",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Software developer",
      "systems analyst",
      "IT specialist",
      "database administrator",
      "network engineer",
      "opportunities with major technology companies",
      "startups"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Computer Science",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Software engineer",
      "data analyst",
      "applications developer",
      "IT consultant",
      "systems analyst",
      "roles in technology firms",
      "research institutes"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software Engineering",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Software developer",
      "quality assurance engineer",
      "project coordinator",
      "software architect",
      "development engineer",
      "opportunities in tech companies",
      "Rosatom",
      "global organizations"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Information and Communication Technologies and Systems",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Systems engineer",
      "network specialist",
      "telecommunications engineer",
      "IT infrastructure specialist",
      "roles in telecommunications",
      "tech companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Radio-frequency Engineering",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "RF engineer",
      "radioelectronics specialist",
      "telecommunications engineer",
      "design engineer",
      "roles in defense",
      "aerospace",
      "telecommunications sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "IT Innovations",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Senior software developer",
      "IT project manager",
      "innovation consultant",
      "technology strategist",
      "startup founder",
      "roles in tech firms",
      "research institutes"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Food Biotechnology",
    "faculty": "School of Metallurgy & Materials Science / School of Natural Sciences \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biotechnology specialist",
      "food scientist",
      "research scientist",
      "product development manager",
      "roles in food industry",
      "pharmaceutical",
      "biotech companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "System Programming",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Systems programmer",
      "operating systems engineer",
      "database specialist",
      "embedded systems engineer",
      "software architect",
      "roles in tech companies",
      "research labs"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Knowledge Engineering",
    "faculty": "Engineering School of Information Technologies, Telecommunications and Control Systems \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "knowledge scientist",
      "machine learning specialist",
      "data scientist",
      "cognitive systems developer",
      "roles in tech companies",
      "research institutes"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Chemistry (Solid State Chemistry / Chemistry and Physics of New Functional Materials)",
    "faculty": "School of Natural Sciences / School of Metallurgy & Materials Science \u2013 Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Materials chemist",
      "research scientist",
      "materials engineer",
      "quality control specialist",
      "roles in chemical",
      "pharmaceutical",
      "materials companies",
      "academia",
      "research institutes"
    ],
    "features": []
  }
]);

// --- VOLGOGRAD STATE MEDICAL UNIVERSITY (Russia) ---
const univ_volgogradstatemedicaluniversityrussia = db.institutions.insertOne(inst({
  "name": "VOLGOGRAD STATE MEDICAL UNIVERSITY (Russia)",
  "abbreviation": "",
  "type": "university",
  "city": "Volgograd",
  "province": "Volgograd Oblast",
  "country": "Russia",
  "campuses": [
    "Volgograd"
  ],
  "website": "https://www.volgmed.ru/en/ | https://volgogradstatemedicaluniversity.in",
  "application_portal": "Online application via official website https://www.volgmed.ru/en/",
  "contacts": {
    "admissions": {
      "phone": "+7(8442)-38-53-55 or +7(8442)-38-30-18",
      "email": "foreign@volgmed.ru",
      "address": "Ploshchad Pavshikh Bortsov (Fallen Fighters Square), 1, Volgograd, 400131, Russia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (February)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Types:"
    },
    {
      "name": "Government scholarships (for qualified international candidates)"
    },
    {
      "name": "Merit-based scholarships for high academic performers"
    },
    {
      "name": "Need-based scholarships for economically disadvantaged students"
    },
    {
      "name": "International scholarships through partner organizations"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Internship placement assistance, guidance on FMGE, USMLE, PLAB examinations for international medical practice, job opportunities in hospitals and healthcare organizations worldwide",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Sports sections (athletics, football, mini-football, volleyball, basketball, table tennis, chess, wellness aerobics, fitness, team games, skiing, swimming, boxing, athletic gymnastics); cultural festivals (Creative festivals, Freshman Days, Patriotic festivals, Miss/Mr VSMU); intellectual clubs, vocal groups, chorus; Student Council; volunteer organizations; creative classes; drama/music groups"
  },
  "security": {
    "detail": "Security Infrastructure: 24/7 security personnel and monitoring throughout campus; secure dormitories with electronic access systems; CCTV surveillance in all areas including hostels; secure regulated entry with guards; safe environment maintained"
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

addPrograms(univ_volgogradstatemedicaluniversityrussia, "VOLGOGRAD STATE MEDICAL UNIVERSITY (Russia)", [
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Military & Emergency Medicine",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Programs",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Programs",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Medicine",
    "faculty": "Faculty of General Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Physician in hospitals (public/private)",
      "clinics",
      "research institutions",
      "healthcare organizations",
      "opportunity to clear FMGE",
      "practice in India",
      "USMLE/PLAB for international medical practice"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pediatrics",
    "faculty": "Faculty of Pediatrics",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals (public/private)",
      "clinics",
      "public health programs",
      "research institutions",
      "pediatric specialist roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dentistry",
    "faculty": "Faculty of Dentistry",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Dentist in hospitals (public/private)",
      "private dental clinics",
      "public health programs",
      "research institutions",
      "dental specialist roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy",
    "faculty": "Faculty of Pharmacy",
    "duration_years": 5.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Hospital pharmacist",
      "clinical pharmacist",
      "pharmaceutical researcher",
      "quality control specialist",
      "industrial pharmacist",
      "roles in pharmaceutical companies",
      "healthcare institutions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Military & Emergency Medicine",
    "faculty": "Faculty/Department of Military & Emergency Medicine",
    "duration_years": 6.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [],
    "entry_roles": [
      "Emergency medicine physician",
      "military doctor",
      "field medic",
      "roles in defense services",
      "emergency healthcare organizations",
      "public health institutions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in General Medicine / Internal Medicine",
    "faculty": "Faculty of General Medicine \u2013 Residency/Postgraduate Training Program",
    "duration_years": 2.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 12000,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Internist/Internal Medicine Specialist in hospitals (public/private)",
      "academic medicine",
      "clinical research",
      "healthcare organizations",
      "government health systems"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Surgery",
    "faculty": "Faculty of Surgery \u2013 Residency/Postgraduate Training Program",
    "duration_years": 2.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 12000,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Surgeon in hospitals (general, emergency, specialized surgical units)",
      "surgical consultant",
      "academic medicine",
      "surgical research positions",
      "government health systems"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Residency in Pediatrics",
    "faculty": "Faculty of Pediatrics \u2013 Residency/Postgraduate Training Program",
    "duration_years": 2.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 12000,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Pediatrician in hospitals",
      "clinics (public/private)",
      "pediatric consultant",
      "academic medicine",
      "pediatric research",
      "public health pediatrician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. / Doctoral Program",
    "faculty": "Faculty/Institute of Postgraduate Education \u2013 Doctoral Program (Aspirantura/Ph.D.)",
    "duration_years": 4.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 24000,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Biomedical researcher",
      "university faculty",
      "research scientist in pharmaceutical/healthcare institutions",
      "academic medicine",
      "public health researcher",
      "government research positions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree Program",
    "faculty": "Faculty/Institute of Postgraduate Education \u2013 Master\u2019s Programs (various disciplines)",
    "duration_years": 2.0,
    "annual_fee_cad": 5250,
    "total_fee_cad": 10500,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Roles vary by master\u2019s specialty: Public health specialist",
      "research scientist",
      "healthcare manager",
      "academic educator",
      "specialist in chosen field"
    ],
    "features": []
  }
]);

print("Russia Seeding Completed!");