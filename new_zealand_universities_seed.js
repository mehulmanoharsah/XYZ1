// ============================================================
// NEW ZEALAND UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 19 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions new_zealand_universities_seed.js
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

// Delete existing New Zealand data to prevent duplicates
db.institutions.deleteMany({ country: "New Zealand" });
db.programs.deleteMany({ institution_name: { $in: [
  "EASTERN INSTITUTE OF TECHNOLOGY",
  "WELLINGTON INSTITUTE OF TECHNOLOGY",
  "MASSEY UNIVERSITY",
  "NORTHTEC",
  "WHITIREIA NEW ZEALAND",
  "OTAGO POLYTECHNIC",
  "NMIT",
  "AUCKLAND UNIVERSITY OF TECHNOLOGY",
  "UNIVERSITY OF OTAGO",
  "WAIKATO INSTITUTE OF TECHNOLOGY",
  "LINCOLN UNIVERSITY",
  "UNITEC INSTITUTE OF TECHNOLOGY",
  "TOI OHOMAI INSTITUTE OF TECHNOLOGY",
  "VICTORIA UNIVERSITY OF WELLINGTON",
  "ARA INSTITUTE OF CANTERBURY",
  "UNIVERSITY OF WAIKATO",
  "UNIVERSITY OF CANTERBURY",
  "MANUKAU INSTITUTE OF TECHNOLOGY",
  "SOUTHERN INSTITUTE OF TECHNOLOGY",
] } });

// --- EASTERN INSTITUTE OF TECHNOLOGY ---
const univ_easterninstituteoftechnology = db.institutions.insertOne(inst({
  "name": "EASTERN INSTITUTE OF TECHNOLOGY",
  "abbreviation": "EIT",
  "type": "college",
  "city": "Napier",
  "province": "Hawke's Bay",
  "country": "New Zealand",
  "campuses": [
    "Napier"
  ],
  "website": "https://www.eit.ac.nz/campus/international-students/",
  "application_portal": "https://www.eit.ac.nz/apply-online-international/ or international.eit.ac.nz",
  "contacts": {
    "admissions": {
      "email": "eit@eit.ac.nz (Auckl",
      "phone": "+64 9 300 7410 (Auckland campus)",
      "address": "501 Gloucester Street, Taradale, Napier 4112, New Zealand; Private Bag 1201, Hawke\u2019s Bay Mail Centre 4142"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "India STEM Scholarship (via Te P\u016bkenga \u2013 New Zealand Institute of Skills & Technology): NZ$10,000 (Science, Technology, Engineering, Mathematics programmes; open to Indian students; up to 20+ recipients annually; automatic \u2013 no application required if eligible)"
    },
    {
      "name": "Specific eligible programmes: Bachelor of Business Studies, Bachelor of Accounting, Bachelor of Computing Systems, Bachelor of Nursing, postgraduate business, IT, and health science programmes"
    },
    {
      "name": "Note: Net fees shown on official fee schedule reflect scholarship application (for marked programmes)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, job placement support, industry partnerships, internship coordination, post-study work visa assistance (available for Level 4+ qualifications)",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Student Accommodation: EIT Student Village (12 villas with 6 bedrooms each; opposite main Napier campus; near Pettigrew Green Arena and Taradale shops; 10-minute walk to shops), EIT-managed flats (Gloucester Street Flats 5-minute walk; York Avenue Flats 35-minute walk), homestay (family environment with meals; recommended for under-18s and English language students), private accommodation options, The Lime Tree (modern student accommodation in Hastings with security card access, security cameras, quiet study rooms)",
    "clubs": "Clubs & Societies: Student clubs through student associations; sports clubs, cultural groups, hobby-based associations, volunteer opportunities"
  },
  "security": {
    "detail": "Emergency (life-threatening): Dial 111"
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

addPrograms(univ_easterninstituteoftechnology, "EASTERN INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Business Studies",
    "faculty": "Faculty of Business (Business Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21320,
    "total_fee_cad": 63960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "operations coordinator",
      "business development officer",
      "management trainee",
      "finance officer",
      "strategic analyst",
      "project coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Accounting",
    "faculty": "Faculty of Business (Accounting Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21320,
    "total_fee_cad": 63960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "accounting/business subjects preferred",
      "any stream accepted"
    ],
    "entry_roles": [
      "Junior accountant",
      "accounting technician",
      "financial analyst",
      "bookkeeper",
      "audit assistant",
      "tax assistant",
      "accounts officer",
      "business accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computing Systems",
    "faculty": "Faculty of Engineering and Trades (Computing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21320,
    "total_fee_cad": 63960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "programmer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Nursing",
    "faculty": "Faculty of Nursing and Health Science (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 24600,
    "total_fee_cad": 73800,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "healthcare coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "NZ Diploma in Cookery (Advanced)",
    "faculty": "Faculty of Hospitality and Tourism (Culinary Arts Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 21320,
    "total_fee_cad": 42640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "hospitality or food-related subjects beneficial"
    ],
    "entry_roles": [
      "Chef",
      "sous chef",
      "pastry chef",
      "line cook",
      "culinary instructor",
      "food production supervisor",
      "kitchen manager",
      "hospitality management",
      "catering coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 165,
    "total_fee_cad": 247,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5-year programme (180 credits): NZ$42,000 (standard); NZ$39,000 (net with scholarship)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "commerce",
      "economics",
      "or related discipline preferred",
      "diverse professionals welcome with relevant quantitative background"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "strategic manager",
      "senior coordinator",
      "organisational development officer",
      "regional manager",
      "director-level roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 165,
    "total_fee_cad": 247,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5-year programme (180 credits): NZ$42,000 (standard); NZ$39,000 (net with scholarship)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "strong technical foundation required",
      "IT systems",
      "programming knowledge required"
    ],
    "entry_roles": [
      "Senior software developer",
      "IT solutions architect",
      "IT project manager",
      "system architect",
      "software engineer",
      "IT strategy manager",
      "IT consultant",
      "tech lead"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 22960,
    "total_fee_cad": 22960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "organisational leadership",
      "commerce",
      "or related field",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "business manager",
      "management consultant",
      "senior coordinator",
      "strategic analyst",
      "organisational manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Information Technology",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 22960,
    "total_fee_cad": 22960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "IT systems",
      "programming knowledge required",
      "other disciplines considered with strong technical background"
    ],
    "entry_roles": [
      "IT project manager",
      "systems analyst",
      "IT consultant",
      "software developer",
      "IT solutions specialist",
      "business systems analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Digital Business",
    "faculty": "Faculty of Business (Digital Business Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 165,
    "total_fee_cad": 247,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5-year programme (180 credits): NZ$42,000 (standard); NZ$39,000 (net with scholarship)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "IT",
      "digital marketing",
      "management",
      "commerce",
      "digital transformation",
      "business innovation knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Digital transformation manager",
      "digital strategy consultant",
      "digital business manager",
      "product manager",
      "innovation manager",
      "digital project manager",
      "e-commerce manager"
    ],
    "features": []
  }
]);

// --- WELLINGTON INSTITUTE OF TECHNOLOGY ---
const univ_wellingtoninstituteoftechnology = db.institutions.insertOne(inst({
  "name": "WELLINGTON INSTITUTE OF TECHNOLOGY",
  "abbreviation": "WELTEC",
  "type": "college",
  "city": "Wellington",
  "province": "Wellington",
  "country": "New Zealand",
  "campuses": [
    "Wellington"
  ],
  "website": "https://www.whitireiaweltec.ac.nz (WelTec is now trading as Whitireia and WelTec)",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@w",
      "phone": "+64 4 830 5481 (International Marketing Office)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "New Zealand Science and Technology Scholarship (Te P\u016bkenga \u2013 India): NZ$10,000 per annum (20+ scholarships annually for Indian students; science, technology, engineering, mathematics programmes; automatic selection \u2013 no application required if eligible; apply by October 25; first-year tuition discount)"
    },
    {
      "name": "Dr. Sally Hasell Scholarship: Named award (amount varies)"
    },
    {
      "name": "Financial Assistance: Need-based and hardship support available (contact directly)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, industry recruitment events, internship coordination, job placement assistance, career counselling, employer partnerships",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Building access control systems (swipe cards for accommodation and late-night access)",
    "clubs": "Access to outdoor activities (Hutt Valley cycling trail, harbour walks, national parks nearby)"
  },
  "security": {
    "detail": "24/7 Emergency (life-threatening): Dial 111"
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

addPrograms(univ_wellingtoninstituteoftechnology, "WELLINGTON INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing (Level 7)",
    "faculty": "Faculty of Health and Social Services (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 18040,
    "total_fee_cad": 54120,
    "min_class12_percent": 60,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "district health board employee",
      "healthcare coordinator",
      "nurse educator",
      "practitioner nurse"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology (Level 7)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 49200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "application developer",
      "programmer",
      "junior developer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant",
      "junior IT project manager",
      "IT infrastructure specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Business (Level 5\u20136)",
    "faculty": "Faculty of Business & IT (Business Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 14760,
    "total_fee_cad": 29520,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial",
      "business knowledge valued"
    ],
    "entry_roles": [
      "Business assistant",
      "operations coordinator",
      "business development officer",
      "management trainee",
      "finance officer",
      "administrative officer",
      "business analyst assistant",
      "customer service officer",
      "accounts assistant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Business Management (Level 7)",
    "faculty": "Faculty of Business & IT (Management Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 15784,
    "total_fee_cad": 47352,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Management trainee",
      "business manager",
      "operations officer",
      "project coordinator",
      "business development officer",
      "management consultant",
      "team leader",
      "senior coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Engineering (Level 5\u20136)",
    "faculty": "Faculty of Engineering & Trades (Engineering Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 32800,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics",
      "physics recommended",
      "any stream accepted",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Engineering technician",
      "engineering assistant",
      "CAD technician",
      "construction technician",
      "site technician",
      "surveying technician",
      "maintenance technician",
      "project assistant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology (Level 9)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 24600,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "strong technical foundation",
      "IT systems knowledge required",
      "diverse IT professionals welcome"
    ],
    "entry_roles": [
      "Senior software architect",
      "IT solutions architect",
      "senior IT project manager",
      "system architect",
      "software engineer",
      "IT strategy manager",
      "IT innovation manager",
      "technology consultant",
      "tech lead",
      "CTO pathway"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management (Level 9)",
    "faculty": "Faculty of Business & IT (Management Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 24600,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Management",
      "business",
      "commerce",
      "economics",
      "or related field",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "strategic manager",
      "senior coordinator",
      "organisational development officer",
      "regional manager",
      "director-level roles",
      "senior business analyst",
      "executive positions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Information Technology (Level 8)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 19680,
    "total_fee_cad": 19680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "IT systems",
      "programming knowledge required"
    ],
    "entry_roles": [
      "IT project manager",
      "systems analyst",
      "business systems analyst",
      "IT consultant",
      "software developer",
      "IT solutions specialist",
      "IT infrastructure specialist",
      "junior IT architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business (Level 8)",
    "faculty": "Faculty of Business & IT (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "economics",
      "or related discipline",
      "diverse backgrounds with relevant quantitative coursework welcome",
      "business concepts knowledge required"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer",
      "strategic consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Certificate in Information Technology (Level 8)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 9840,
    "total_fee_cad": 19680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "or related discipline",
      "IT systems knowledge required",
      "diverse IT professionals welcome"
    ],
    "entry_roles": [
      "IT specialist",
      "systems technician",
      "IT support technician",
      "junior IT consultant",
      "technical support engineer",
      "IT project coordinator"
    ],
    "features": []
  }
]);

// --- MASSEY UNIVERSITY ---
const univ_masseyuniversity = db.institutions.insertOne(inst({
  "name": "MASSEY UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Palmerston North",
  "province": "Manawatu-Wanganui",
  "country": "New Zealand",
  "campuses": [
    "Palmerston North"
  ],
  "website": "https://www.massey.ac.nz",
  "application_portal": "Further information available on application portal",
  "contacts": {
    "admissions": {
      "phone": "+64 4 979 3195; +64 6 350 5701",
      "email": "international@massey.ac.nz"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Massey University Scholarship for International Students \u2013 Merit-based; amount varies"
    },
    {
      "name": "Country-Specific Funding \u2013 Varies; India-specific options available"
    },
    {
      "name": "Details: Further information available on application portal"
    }
  ],
  "internships": {
    "part_time_work": "Career Support & Placement Assistance",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Societies: 100+ clubs and associations",
    "housing": "Accommodation: Residential colleges, student housing, flat-finding support"
  },
  "security": {
    "detail": "Local Emergency Services: Integrated with regional emergency response"
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

addPrograms(univ_masseyuniversity, "MASSEY UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce (BCom)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Studies",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (BSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Agricultural Science",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Accounting",
    "faculty": "",
    "duration_years": 3.0,
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
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Studies (MBS)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Professional Accountancy (MPAcc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 31225,
    "total_fee_cad": 93675,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific subjects mandatory",
      "business/mathematics background helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Accountant",
      "Financial Analyst",
      "Management Consultant",
      "Marketing Executive",
      "HR Officer",
      "Supply Chain Analyst",
      "Investment Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Studies",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 31225,
    "total_fee_cad": 93675,
    "min_class12_percent": 75,
    "required_subjects": [
      "No mandatory subjects",
      "business/social sciences background helpful"
    ],
    "entry_roles": [
      "Manager",
      "Business Development Officer",
      "HR Officer",
      "Operations Manager",
      "Business Analyst",
      "Administrative Manager",
      "Retail Manager",
      "Project Coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science",
    "faculty": "Division of Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 34686,
    "total_fee_cad": 104058,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science subjects recommended (Physics, Chemistry, Biology, Mathematics, Computer Science)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Research Scientist",
      "Laboratory Technician",
      "Quality Control Analyst",
      "Environmental Scientist",
      "Bioinformatician",
      "IT Analyst",
      "GIS Analyst",
      "Healthcare Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Agricultural Science",
    "faculty": "School of Agriculture and Environment",
    "duration_years": 3.0,
    "annual_fee_cad": 34686,
    "total_fee_cad": 104058,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science subjects recommended (Biology, Chemistry, Mathematics, Physics)"
    ],
    "entry_roles": [
      "Agricultural Manager",
      "Scientist",
      "Farm Consultant",
      "Agribusiness Manager",
      "Agricultural Engineer",
      "Research Scientist",
      "Crop Specialist",
      "Livestock Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Accounting",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 31225,
    "total_fee_cad": 93675,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics recommended",
      "accounting/business background helpful"
    ],
    "entry_roles": [
      "Accountant",
      "Auditor",
      "Tax Consultant",
      "Financial Analyst",
      "Junior Accountant",
      "Bookkeeper",
      "Financial Planner",
      "Investment Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration",
    "faculty": "School of Business \u2013 MBA Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 53423,
    "total_fee_cad": 53423,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any bachelor\u2019s degree",
      "management experience beneficial"
    ],
    "entry_roles": [
      "MBA Graduate",
      "Management Consultant",
      "Business Development Manager",
      "Senior Manager",
      "Director",
      "Strategy Consultant",
      "Investment Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance",
    "faculty": "School of Business \u2013 Finance Department",
    "duration_years": 1.0,
    "annual_fee_cad": 32668,
    "total_fee_cad": 32668,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Finance",
      "Commerce",
      "Economics",
      "Accounting",
      "or related field",
      "quantitative skills required"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "Risk Analyst",
      "Financial Planner",
      "Treasury Manager",
      "Corporate Finance Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Studies",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 32668,
    "total_fee_cad": 32668,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Business",
      "Commerce",
      "Management",
      "Economics",
      "or related field"
    ],
    "entry_roles": [
      "Senior Manager",
      "Business Consultant",
      "Business Analyst",
      "Operations Manager",
      "Strategy Officer",
      "Corporate Manager",
      "Project Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science",
    "faculty": "Division of Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 32668,
    "total_fee_cad": 65336,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Science",
      "Engineering",
      "Technology",
      "or related discipline",
      "specialisation-dependent"
    ],
    "entry_roles": [
      "Research Scientist",
      "Data Scientist",
      "Systems Engineer",
      "Software Engineer",
      "Laboratory Scientist",
      "Consultant",
      "Specialist Technician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Professional Accountancy",
    "faculty": "School of Business \u2013 Accounting Programme",
    "duration_years": 1.5,
    "annual_fee_cad": 34727,
    "total_fee_cad": 52090,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Accounting",
      "Commerce",
      "Finance",
      "or related field",
      "accounting prerequisites required"
    ],
    "entry_roles": [
      "Chartered Accountant (CA pathway)",
      "Auditor",
      "Tax Specialist",
      "Financial Accountant",
      "Management Accountant",
      "Forensic Accountant"
    ],
    "features": []
  }
]);

// --- NORTHTEC ---
const univ_northtec = db.institutions.insertOne(inst({
  "name": "NORTHTEC",
  "abbreviation": "TAI TOKERAU W\u0100NANGA",
  "type": "college",
  "city": "Whangarei",
  "province": "Northland",
  "country": "New Zealand",
  "campuses": [
    "Whangarei"
  ],
  "website": "https://www.northtec.ac.nz",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@northtec.ac.nz",
      "phone": "+64 9 470 3775 (International Office)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "New Zealand Science and Technology Scholarship (Te P\u016bkenga \u2013 India): NZ$10,000 per annum (20+ scholarships annually for Indian students; science, technology, engineering, mathematics programmes; automatic selection \u2013 no application required if eligible; apply by October 25; first-year tuition discount)"
    },
    {
      "name": "English Language Scholarship: Available for English language pathways (conditions apply; see website)"
    },
    {
      "name": "Limited institutional scholarships: Available case-by-case for exceptional circumstances"
    },
    {
      "name": "External scholarships available (K.C. Mahindra, Narotam Sekhsaria, etc.; administered independently)"
    },
    {
      "name": "Financial assistance available on case-by-case basis"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, industry recruitment events, internship coordination, job placement assistance, career counselling, employer partnerships",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Limited on-campus housing (apply early)",
    "clubs": "Access to outdoor activities (beaches, national parks, hiking trails nearby)"
  },
  "security": {
    "detail": "Emergency (life-threatening): Dial 111"
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

addPrograms(univ_northtec, "NORTHTEC", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing (Level 7)",
    "faculty": "Faculty of Health and Social Services (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21320,
    "total_fee_cad": 63960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Biology",
      "Chemistry mandatory (NCEA Level 3 entry requirement: 14 credits in science subject e.g., biology, chemistry, physics + 14 credits in English language rich subject)",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "district health board employee",
      "healthcare coordinator",
      "nurse educator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Management (Level 7)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 18040,
    "total_fee_cad": 54120,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Management trainee",
      "business manager",
      "operations officer",
      "project coordinator",
      "business development officer",
      "management consultant",
      "team leader",
      "senior coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Information Systems (Level 7)",
    "faculty": "Faculty of Business & IT (Information Systems Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 18040,
    "total_fee_cad": 54120,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "application developer",
      "programmer",
      "junior developer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Engineering (Level 5\u20136)",
    "faculty": "Faculty of Engineering & Trades (Engineering Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 32800,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics",
      "physics recommended",
      "any stream accepted",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Engineering technician",
      "engineering assistant",
      "CAD technician",
      "construction technician",
      "site technician",
      "surveying technician",
      "maintenance technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Business (Level 5\u20136)",
    "faculty": "Faculty of Business (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 15989,
    "total_fee_cad": 15989,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Business assistant",
      "operations coordinator",
      "business development officer",
      "management trainee",
      "finance officer",
      "administrative officer",
      "business analyst assistant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Diploma in Business Information Systems (Level 8)",
    "faculty": "Faculty of Business & IT (Business Information Systems Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 19680,
    "total_fee_cad": 39360,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "business information systems",
      "computer science",
      "or related discipline",
      "IT systems",
      "business analysis knowledge required",
      "diverse IT professionals welcome"
    ],
    "entry_roles": [
      "Business systems analyst",
      "IT consultant",
      "project manager",
      "systems analyst",
      "business analyst",
      "IT solutions specialist",
      "systems designer",
      "business information manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Level 8)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "organisational leadership",
      "commerce",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "business manager",
      "management consultant",
      "senior coordinator",
      "strategic analyst",
      "organisational manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Diploma in Project Management (Level 8)",
    "faculty": "Faculty of Business (Project Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Project management",
      "business",
      "engineering",
      "or related field",
      "project management fundamentals knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Project manager",
      "senior project coordinator",
      "program manager",
      "project management specialist",
      "project controls manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Construction Management (Level 8)",
    "faculty": "Faculty of Engineering & Trades (Construction Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil engineering",
      "construction management",
      "architecture",
      "or related discipline",
      "construction/engineering knowledge required",
      "diverse construction professionals welcome"
    ],
    "entry_roles": [
      "Construction manager",
      "site manager",
      "project engineer",
      "construction superintendent",
      "project coordinator",
      "contracts manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Diploma in Business Administration (Level 8)",
    "faculty": "Faculty of Business (Generic Graduate Diploma Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "or related field",
      "diverse backgrounds with professional experience welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "administrator",
      "business analyst",
      "coordinator",
      "management specialist"
    ],
    "features": []
  }
]);

// --- WHITIREIA NEW ZEALAND ---
const univ_whitireianewzealand = db.institutions.insertOne(inst({
  "name": "WHITIREIA NEW ZEALAND",
  "abbreviation": "Te P\u016bkenga Trading",
  "type": "college",
  "city": "Porirua",
  "province": "Wellington",
  "country": "New Zealand",
  "campuses": [
    "Porirua"
  ],
  "website": "https://www.whitireiaweltec.ac.nz",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@w",
      "phone": "+64 4 830 5481 (International Marketing Office) or +64 4 939 8000 (Main)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "New Zealand Science and Technology Scholarship (Te P\u016bkenga \u2013 India): NZ$10,000 per annum (20+ scholarships annually for Indian students; science, technology, engineering, mathematics programmes; automatic selection \u2013 no application required if eligible; apply by October 25; first-year tuition discount)"
    },
    {
      "name": "Limited international institution scholarships; financial assistance available case-by-case for exceptional circumstances"
    },
    {
      "name": "External scholarships available (K.C. Mahindra, Narotam Sekhsaria, etc.; administered independently)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, industry recruitment events, internship coordination, job placement assistance, career counselling, employer partnerships",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Building access control systems (swipe cards for accommodation; 6am\u201311pm weekdays Porirua, 8am\u20135pm weekends)",
    "clubs": "Safe community; international student-friendly; access to outdoor activities (harbour walks, national parks, Remutaka Cycle Trail nearby)"
  },
  "security": {
    "detail": "Emergency (life-threatening): Dial 111"
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

addPrograms(univ_whitireianewzealand, "WHITIREIA NEW ZEALAND", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing (Level 7)",
    "faculty": "Faculty of Health and Social Services (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 18040,
    "total_fee_cad": 54120,
    "min_class12_percent": 60,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "district health board employee",
      "healthcare coordinator",
      "nurse educator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology (Level 7)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 22140,
    "total_fee_cad": 66420,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "application developer",
      "programmer",
      "junior developer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Business (Level 5\u20136)",
    "faculty": "Faculty of Business & IT (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 15989,
    "total_fee_cad": 15989,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Business assistant",
      "operations coordinator",
      "business development officer",
      "management trainee",
      "finance officer",
      "administrative officer",
      "business analyst assistant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Applied Engineering (Level 5\u20136)",
    "faculty": "Faculty of Engineering & Trades",
    "duration_years": 2.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 32800,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics",
      "physics recommended",
      "any stream accepted",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Engineering technician",
      "engineering assistant",
      "CAD technician",
      "construction technician",
      "site technician",
      "surveying technician",
      "maintenance technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Hospitality (Level 5\u20136)",
    "faculty": "Faculty of Hospitality & Tourism (Culinary/Hospitality Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 15989,
    "total_fee_cad": 15989,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "hospitality or food-related subjects beneficial"
    ],
    "entry_roles": [
      "Chef",
      "line cook",
      "pastry chef",
      "culinary instructor",
      "food production supervisor",
      "kitchen manager",
      "hospitality supervisor",
      "catering coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business (Level 8)",
    "faculty": "Faculty of Business & IT (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "economics",
      "or related discipline",
      "diverse backgrounds with quantitative coursework welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Certificate in Information Technology (Level 8)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 9840,
    "total_fee_cad": 19680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "IT systems knowledge required",
      "diverse IT professionals welcome"
    ],
    "entry_roles": [
      "IT specialist",
      "systems technician",
      "IT support technician",
      "junior IT consultant",
      "technical support engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Level 8)",
    "faculty": "Faculty of Business & IT (Applied Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "organisational leadership",
      "commerce",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "business manager",
      "management consultant",
      "senior coordinator",
      "strategic analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Certificate in Management (Level 8)",
    "faculty": "Faculty of Business & IT (Management Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 9840,
    "total_fee_cad": 19680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "organisational leadership",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Project manager",
      "operations coordinator",
      "management specialist",
      "team leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Diploma in Creative Writing & Publishing (Level 7\u20138)",
    "faculty": "Faculty of Creative Arts (Publishing & Creative Writing Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 14760,
    "total_fee_cad": 14760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Creative writing",
      "publishing",
      "communications",
      "media",
      "literature",
      "or related creative field",
      "demonstrated creative writing portfolio or industry experience essential"
    ],
    "entry_roles": [
      "Editor",
      "publisher",
      "content writer",
      "author",
      "publishing consultant",
      "literary agent",
      "journalist",
      "content manager",
      "creative producer"
    ],
    "features": []
  }
]);

// --- OTAGO POLYTECHNIC ---
const univ_otagopolytechnic = db.institutions.insertOne(inst({
  "name": "OTAGO POLYTECHNIC",
  "abbreviation": "",
  "type": "college",
  "city": "Dunedin",
  "province": "Otago",
  "country": "New Zealand",
  "campuses": [
    "Dunedin"
  ],
  "website": "https://www.op.ac.nz/international/apply-and-enrol/entry-requirements",
  "application_portal": "Online application at https://online.op.ac.nz/apply (preferred and recommended for faster processing); alternative: paper PDF application",
  "contacts": {
    "admissions": {
      "email": "info@op.ac.nz or international@op.ac.nz",
      "phone": "+64 3 477 3014 (International)",
      "address": "Forth Street, Dunedin 9016, Private Bag 1910, Dunedin 9054, New Zealand"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "India STEM Scholarship: NZ$10,000 (Science, Technology, Engineering, Mathematics programmes; up to 2 recipients per year; for new international students with strong academics)"
    },
    {
      "name": "International Learner Study Grants: Automatically applied to fees (amount varies; study grant terms and conditions apply)"
    },
    {
      "name": "Eligible Programmes: Bachelor of Information Technology, Bachelor of Construction (Quantity Surveying), Bachelor of Engineering Technology, Postgraduate Diploma in Applied Management (BIS and BM), Master of Applied Management (BIS and BM)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, career counseling, job placement support, employer recruitment events, internship coordination, CV and interview preparation, New Zealand work experience building",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Student Accommodation: Te P\u0101 Tauira (Dunedin Student Village) offering 181 rooms in 34 flats; multiple private accommodation options available across Dunedin",
    "clubs": "Clubs & Societies: 100+ clubs through Otago University Student Association Clubs & Societies Centre; cultural associations, sports clubs, social groups, hobby clubs, volunteer opportunities; famous $4 lunch (Mon\u2013Fri)"
  },
  "security": {
    "detail": "24/7 accessibility for emergency situations"
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

addPrograms(univ_otagopolytechnic, "OTAGO POLYTECHNIC", [
  {
    "level": "UG",
    "name": "Bachelor of Engineering Technology",
    "faculty": "School of Engineering and Trades (Engineering Technology Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 18089,
    "total_fee_cad": 54267,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics mandatory",
      "Physics",
      "Chemistry highly recommended",
      "technical/engineering background advantageous"
    ],
    "entry_roles": [
      "Engineering technologist",
      "civil engineer",
      "site engineer",
      "construction technician",
      "structural technician",
      "surveying technician",
      "project engineer",
      "design engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology",
    "faculty": "School of Computing and Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 18154,
    "total_fee_cad": 54462,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics",
      "or electronics background advantageous"
    ],
    "entry_roles": [
      "Software developer",
      "junior programmer",
      "web developer",
      "mobile app developer",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant",
      "UX engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Management",
    "faculty": "School of Business and Management",
    "duration_years": 3.0,
    "annual_fee_cad": 14842,
    "total_fee_cad": 44526,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "business",
      "economics",
      "accounting subjects beneficial"
    ],
    "entry_roles": [
      "Management trainee",
      "business analyst",
      "operations coordinator",
      "HR officer",
      "project coordinator",
      "business development officer",
      "financial analyst",
      "strategic analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Construction (Quantity Surveying)",
    "faculty": "School of Engineering and Trades (Construction Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21789,
    "total_fee_cad": 65367,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "any stream accepted",
      "construction or engineering background beneficial"
    ],
    "entry_roles": [
      "Quantity surveyor",
      "cost estimator",
      "construction manager",
      "site manager",
      "project coordinator",
      "building surveyor",
      "contracts administrator",
      "construction technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Accounting",
    "faculty": "School of Business and Management (Finance/Accounting Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 14842,
    "total_fee_cad": 44526,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics",
      "accounting/business subjects preferred",
      "any stream accepted"
    ],
    "entry_roles": [
      "Junior accountant",
      "accounting technician",
      "financial analyst",
      "bookkeeper",
      "audit assistant",
      "tax assistant",
      "accounts officer",
      "business accountant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management (Business Information Systems)",
    "faculty": "School of Business and Management (Applied Management Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 35165,
    "total_fee_cad": 52747,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business information systems",
      "IT",
      "computer science",
      "management",
      "organisational systems",
      "information systems concepts familiarity required",
      "diverse backgrounds with strong analytics skills welcome"
    ],
    "entry_roles": [
      "Senior business systems analyst",
      "IT solutions architect",
      "IT project manager",
      "business information systems manager",
      "systems consultant",
      "digital transformation specialist",
      "IT strategy manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management (Business Management)",
    "faculty": "School of Business and Management",
    "duration_years": 1.5,
    "annual_fee_cad": 35165,
    "total_fee_cad": 52747,
    "min_class12_percent": 60,
    "required_subjects": [
      "Management",
      "business",
      "organisational leadership",
      "economics",
      "or related field",
      "diverse professionals welcome",
      "management concepts knowledge required"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "business manager",
      "management consultant",
      "senior coordinator",
      "strategic manager",
      "organisational development officer",
      "regional manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Business Information Systems)",
    "faculty": "School of Business and Management",
    "duration_years": 1.0,
    "annual_fee_cad": 23443,
    "total_fee_cad": 23443,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "IT",
      "management",
      "commerce",
      "or related discipline",
      "IT systems",
      "information management knowledge required",
      "other disciplines considered with strong technical background"
    ],
    "entry_roles": [
      "Business information systems analyst",
      "IT project manager",
      "systems analyst",
      "business systems consultant",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business",
    "faculty": "School of Business and Management",
    "duration_years": 1.0,
    "annual_fee_cad": 23443,
    "total_fee_cad": 23443,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "economics",
      "accounting",
      "or related discipline",
      "diverse backgrounds with relevant quantitative coursework welcome",
      "business concepts knowledge required"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer",
      "strategic consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Culinary Arts",
    "faculty": "School of Hospitality (Culinary Arts Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 19040,
    "total_fee_cad": 28560,
    "min_class12_percent": 60,
    "required_subjects": [
      "Culinary arts",
      "hospitality management",
      "food science",
      "nutrition",
      "or related discipline",
      "professional chefs with recognised qualifications eligible",
      "diverse hospitality backgrounds welcome",
      "portfolio of culinary work or experience beneficial"
    ],
    "entry_roles": [
      "Head chef",
      "sous chef",
      "executive chef",
      "culinary educator",
      "food innovation specialist",
      "restaurant manager",
      "hospitality consultant",
      "culinary researcher",
      "food entrepreneur",
      "culinary director"
    ],
    "features": []
  }
]);

// --- NMIT ---
const univ_nmit = db.institutions.insertOne(inst({
  "name": "NMIT",
  "abbreviation": "NELSON MARLBOROUGH INSTITUTE OF TECHNOLOGY",
  "type": "college",
  "city": "Nelson",
  "province": "Nelson",
  "country": "New Zealand",
  "campuses": [
    "Nelson"
  ],
  "website": "https://www.nmit.ac.nz or https://international.nelsonmarlborough.ac.nz",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@nmit.ac.nz",
      "phone": "85 Budge Street, Blenheim 7240; PO Box 643, Blenheim 7240; Phone: (03) 577 2852"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "New Zealand Science and Technology Scholarship (Te P\u016bkenga \u2013 India): NZ$10,000 per annum (20+ scholarships annually for Indian students; science, technology, engineering, mathematics programmes; automatic selection \u2013 no application required if eligible; apply by October 25; first-year tuition discount; NMIT participates as Te P\u016bkenga member)"
    },
    {
      "name": "Mitre 10 Mega Nelson (Construction Scholarship): NZ$1,000 voucher for NZ Certificate in Construction Trade Skills \u2013 Carpentry"
    },
    {
      "name": "New Zealand Aviation Federation (Aviation Engineering Scholarship): NZ$8,000 towards tuition for NZ Certificate in Aeronautical Engineering"
    },
    {
      "name": "School Leaver Award: NZ$1,000 to one outstanding student from each secondary school in Te Tauihu region enrolling in full-time degree programme"
    },
    {
      "name": "External scholarships available (administered independently; K.C. Mahindra, Narotam Sekhsaria, etc.)"
    },
    {
      "name": "NMIT does NOT currently offer direct scholarships for international students (confirmed 2026)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, industry recruitment events, internship coordination, job placement assistance, career counselling, employer partnerships; small class sizes = personalised support",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Student Accommodation:",
    "clubs": "Clubs & Societies: Various student clubs and societies; cultural associations, sports clubs, volunteer opportunities, peer mentorship; active SANITI student association organises regular events, off-campus trips, social/financial/academic advice"
  },
  "security": {
    "detail": "Emergency (life-threatening): Dial 111"
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

addPrograms(univ_nmit, "NMIT", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing (Level 7)",
    "faculty": "Faculty of Health and Social Services (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 24409,
    "total_fee_cad": 73227,
    "min_class12_percent": 60,
    "required_subjects": [
      "Biology",
      "Chemistry essential (NCEA Level 3 with University Entrance equivalent entry requirement: 14 credits in science subject e.g., biology, chemistry, physics + 14 credits in English language-rich subject)",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care",
      "physical fitness valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "district health board employee",
      "healthcare coordinator",
      "nurse educator",
      "practice nurse",
      "public health nurse",
      "rural health nurse"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology (Level 7)",
    "faculty": "Faculty of Business and IT (Information Technology Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 16728,
    "total_fee_cad": 50184,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "application developer",
      "programmer",
      "junior developer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant",
      "junior IT project manager",
      "IT infrastructure specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Level 7)",
    "faculty": "Faculty of Business (Commerce Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 16728,
    "total_fee_cad": 50184,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Business manager",
      "operations officer",
      "finance officer",
      "business analyst",
      "project coordinator",
      "management trainee",
      "business development officer",
      "consultant",
      "senior coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Engineering (Civil Engineering) (Level 5\u20136)",
    "faculty": "Faculty of Engineering & Trades (Civil Engineering Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 14760,
    "total_fee_cad": 29520,
    "min_class12_percent": 50,
    "required_subjects": [
      "Mathematics",
      "physics recommended",
      "any stream accepted",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Civil engineering technician",
      "engineering assistant",
      "CAD technician",
      "construction technician",
      "site technician",
      "surveying technician",
      "maintenance technician",
      "junior engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Business (Level 5\u20136)",
    "faculty": "Faculty of Business (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 20500,
    "total_fee_cad": 20500,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial"
    ],
    "entry_roles": [
      "Accounting technician",
      "accounting assistant",
      "business assistant",
      "operations coordinator",
      "business development officer",
      "finance officer",
      "management trainee",
      "administrative officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management \u2013 Healthcare Management Specialisation (Level 9)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 31774,
    "total_fee_cad": 63548,
    "min_class12_percent": 60,
    "required_subjects": [
      "Health services management",
      "business",
      "healthcare administration",
      "or related field",
      "management",
      "health systems knowledge required",
      "diverse healthcare professionals welcome",
      "nursing background valuable but not required"
    ],
    "entry_roles": [
      "Health services manager",
      "healthcare operations manager",
      "clinical manager",
      "healthcare administrator",
      "health programme manager",
      "quality improvement manager",
      "health policy advisor",
      "hospital manager",
      "health sector consultant",
      "healthcare strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management \u2013 Logistics and Supply Chain Management Specialisation (Level 9)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 31774,
    "total_fee_cad": 63548,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "logistics",
      "supply chain management",
      "or related field",
      "supply chain",
      "operational management knowledge required",
      "diverse professionals welcome",
      "engineering/manufacturing backgrounds valuable"
    ],
    "entry_roles": [
      "Supply chain manager",
      "logistics manager",
      "operations manager",
      "procurement manager",
      "distribution manager",
      "inventory manager",
      "logistics consultant",
      "supply chain strategist",
      "operations director",
      "export coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology (Level 9)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 31774,
    "total_fee_cad": 63548,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "IT systems",
      "programming knowledge required",
      "diverse IT professionals welcome"
    ],
    "entry_roles": [
      "Senior software architect",
      "IT solutions architect",
      "senior IT project manager",
      "system architect",
      "software engineer",
      "IT strategy manager",
      "IT innovation manager",
      "technology consultant",
      "tech lead",
      "CTO pathway"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Diploma in Information Technology (Level 7)",
    "faculty": "Faculty of Business & IT (Information Technology Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16728,
    "total_fee_cad": 16728,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "IT systems knowledge required",
      "diverse IT professionals welcome",
      "can serve as pathway to Master\u2019s"
    ],
    "entry_roles": [
      "IT project manager",
      "systems analyst",
      "business systems analyst",
      "IT consultant",
      "software developer",
      "IT solutions specialist",
      "infrastructure specialist",
      "junior IT architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Sustainable Aquaculture (Level 8)",
    "faculty": "Faculty of Primary Industries (Aquaculture Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16728,
    "total_fee_cad": 16728,
    "min_class12_percent": 60,
    "required_subjects": [
      "Aquaculture",
      "marine science",
      "environmental management",
      "biology",
      "or related discipline",
      "aquaculture systems knowledge required",
      "diverse aquaculture professionals welcome"
    ],
    "entry_roles": [
      "Aquaculture manager",
      "aquaculture technician",
      "sustainability specialist",
      "production manager",
      "fish farm manager",
      "marine resource manager",
      "aquaculture consultant",
      "environmental compliance officer"
    ],
    "features": []
  }
]);

// --- AUCKLAND UNIVERSITY OF TECHNOLOGY ---
const univ_aucklanduniversityoftechnology = db.institutions.insertOne(inst({
  "name": "AUCKLAND UNIVERSITY OF TECHNOLOGY",
  "abbreviation": "AUT",
  "type": "university",
  "city": "Auckland",
  "province": "Auckland",
  "country": "New Zealand",
  "campuses": [
    "Auckland"
  ],
  "website": "https://www.aut.ac.nz/study/applying",
  "application_portal": "Not specified; check official application portal for current fee information",
  "contacts": {
    "admissions": {
      "phone": "+64 9 921 9099",
      "address": "AUT International, Private Bag 92006, Auckland 1142, New Zealand"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "Nicholas Tarling Memorial PhD Scholarship: NZ$10,000 (Southeast Asia focus, PhD level)"
    },
    {
      "name": "Faculty-specific scholarships: Varies by school/faculty"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: AUT Career Centre provides career counseling, employer recruitment events, industry networking, and graduate placement support; strong connections across sectors",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 50+ student clubs and societies including AUT Indian Students Association; sports clubs (rugby, cricket, netball, football, etc.); cultural activities; Green Impact sustainability programme",
    "housing": "Accommodation: Modern on-campus student accommodation at City and North campuses; off-campus options available across Auckland"
  },
  "security": {
    "detail": "Partnerships & Coordination: Coordination with New Zealand Police; emergency response protocols; First Aid trained security officers; partnerships with external emergency services"
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

addPrograms(univ_aucklanduniversityoftechnology, "AUCKLAND UNIVERSITY OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Business",
    "faculty": "Faculty of Business, Economics and Law",
    "duration_years": 3.0,
    "annual_fee_cad": 62518,
    "total_fee_cad": 187554,
    "min_class12_percent": 75,
    "required_subjects": [
      "Any stream accepted",
      "business-related subjects advantageous but not mandatory"
    ],
    "entry_roles": [
      "Business analyst",
      "marketing coordinator",
      "financial analyst",
      "operations associate",
      "management consultant",
      "accounting associate",
      "supply chain specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer and Information Sciences",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 69898,
    "total_fee_cad": 209694,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics strongly recommended",
      "IT",
      "Physics",
      "or Computer Science background advantageous"
    ],
    "entry_roles": [
      "Software developer",
      "IT consultant",
      "systems analyst",
      "data analyst",
      "cybersecurity specialist",
      "software engineer",
      "application developer",
      "tech support specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours)",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 80230,
    "total_fee_cad": 320920,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry required/highly recommended",
      "strong background in sciences essential"
    ],
    "entry_roles": [
      "Civil engineer",
      "electrical engineer",
      "mechanical engineer",
      "software engineer",
      "structural engineer",
      "project engineer",
      "design engineer",
      "graduate engineer (all specializations)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business and Bachelor of Computer and Information Sciences Conjoint Programmes",
    "faculty": "Faculty of Business, Economics and Law + School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 68914,
    "total_fee_cad": 275656,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics essential",
      "IT or Computer Science background beneficial",
      "business/economics interest required"
    ],
    "entry_roles": [
      "Business analyst with IT skills",
      "systems analyst",
      "IT project manager",
      "business systems consultant",
      "data analyst",
      "digital transformation specialist",
      "management information systems specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering Technology",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 80230,
    "total_fee_cad": 240690,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "or similar technical subjects recommended",
      "practical aptitude valued"
    ],
    "entry_roles": [
      "Engineering technician",
      "technologist in civil/electrical/mechanical/software engineering",
      "technical support engineer",
      "design technician",
      "manufacturing engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Analytics",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 1.5,
    "annual_fee_cad": 77278,
    "total_fee_cad": 115917,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "statistics",
      "computer science",
      "engineering",
      "or business with strong analytical coursework advantageous",
      "data science or IT background beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "business intelligence analyst",
      "analytics consultant",
      "quantitative analyst",
      "research analyst",
      "predictive modelling specialist",
      "analytics manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business (Global Business Specialisation)",
    "faculty": "Faculty of Business, Economics and Law",
    "duration_years": 1.5,
    "annual_fee_cad": 49103,
    "total_fee_cad": 73654,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "economics",
      "or commerce background advantageous",
      "professionals from other disciplines welcome with work experience"
    ],
    "entry_roles": [
      "Global business manager",
      "international business strategist",
      "business development executive",
      "operations manager",
      "regional manager",
      "strategic consultant",
      "export/import manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer and Information Sciences",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 1.5,
    "annual_fee_cad": 77278,
    "total_fee_cad": 115917,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer science",
      "software engineering",
      "IT",
      "mathematics",
      "physics",
      "or engineering background required"
    ],
    "entry_roles": [
      "Software engineer",
      "systems architect",
      "IT consultant",
      "software architect",
      "cloud engineer",
      "cybersecurity specialist",
      "IT solutions designer",
      "development team lead"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 1.5,
    "annual_fee_cad": 82526,
    "total_fee_cad": 123789,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil",
      "electrical",
      "mechanical",
      "software",
      "or related engineering discipline required"
    ],
    "entry_roles": [
      "Professional engineer (civil, electrical, mechanical, software, maritime)",
      "engineering consultant",
      "project manager",
      "systems engineer",
      "design engineer",
      "research engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of IT Project Management",
    "faculty": "School of Engineering, Computers and Mathematical Sciences",
    "duration_years": 1.5,
    "annual_fee_cad": 77278,
    "total_fee_cad": 115917,
    "min_class12_percent": 60,
    "required_subjects": [
      "IT",
      "computer science",
      "systems engineering",
      "or business/management with IT background",
      "project management experience valuable"
    ],
    "entry_roles": [
      "IT project manager",
      "programme manager",
      "IT solutions manager",
      "delivery manager",
      "business analyst",
      "IT consultant",
      "technology strategist",
      "scrum master",
      "agile coach"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF OTAGO ---
const univ_universityofotago = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF OTAGO",
  "abbreviation": "",
  "type": "university",
  "city": "Dunedin",
  "province": "Otago",
  "country": "New Zealand",
  "campuses": [
    "Dunedin"
  ],
  "website": "https://www.otago.ac.nz",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+64 3 479 8080",
      "email": "i-studentglobal@otago.ac.nz"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Total Scholarship Pool: Various amounts; highly competitive"
    }
  ],
  "internships": {
    "part_time_work": "Services: Industry placements, alumni networking, graduate outcomes support",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Events & Activities: Cultural events, social activities, student-led initiatives",
    "housing": "Accommodation: Residential colleges, private accommodation, flat-finding support"
  },
  "security": {
    "detail": "Local Emergency Services: Integrated with Dunedin emergency services"
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

addPrograms(univ_universityofotago, "UNIVERSITY OF OTAGO", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce (BCom)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (BSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Medicine and Bachelor of Surgery (MB ChB)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (BEng)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Health Sciences (BHealSc)",
    "faculty": "",
    "duration_years": 3.0,
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
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Commerce (MCom)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc) \u2013 Computer Science",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Science (MAppSc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
    "faculty": "Otago School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 26240,
    "total_fee_cad": 78720,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics recommended",
      "no specific mandatory subjects"
    ],
    "entry_roles": [
      "Business Analyst",
      "Accountant",
      "Financial Analyst",
      "Management Consultant",
      "Marketing Executive",
      "HR Officer",
      "Supply Chain Analyst",
      "Investment Analyst",
      "Auditor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science",
    "faculty": "Division of Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 26240,
    "total_fee_cad": 78720,
    "min_class12_percent": 80,
    "required_subjects": [
      "Science subjects recommended (Physics, Chemistry, Biology, Computer Science, Mathematics)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Research Scientist",
      "Laboratory Technician",
      "Quality Control Analyst",
      "Environmental Scientist",
      "Bioinformatician",
      "IT Analyst",
      "GIS Analyst",
      "Healthcare Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Medicine and Bachelor of Surgery",
    "faculty": "Division of Health Sciences",
    "duration_years": 6.0,
    "annual_fee_cad": 75522,
    "total_fee_cad": 453132,
    "min_class12_percent": 80,
    "required_subjects": [
      "Science background mandatory (Biology, Chemistry, Physics)",
      "strong performance required"
    ],
    "entry_roles": [
      "Registered Medical Doctor",
      "Physician",
      "Surgeon",
      "General Practitioner",
      "Specialist (various fields)",
      "Medical Researcher",
      "Hospital Medical Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering",
    "faculty": "School of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 28700,
    "total_fee_cad": 114800,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics & Physics mandatory",
      "strong STEM background required"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Software Engineer",
      "Structural Engineer",
      "Project Engineer",
      "Geotechnical Engineer",
      "Process Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Health Sciences",
    "faculty": "Division of Health Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 26240,
    "total_fee_cad": 78720,
    "min_class12_percent": 80,
    "required_subjects": [
      "Science subjects recommended (Biology, Chemistry)",
      "English proficiency essential"
    ],
    "entry_roles": [
      "Registered Nurse (pathway)",
      "Healthcare Administrator",
      "Medical Laboratory Technician",
      "Public Health Officer",
      "Health Educator",
      "Biomedical Scientist",
      "Allied Health Assistant",
      "Community Health Worker"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration",
    "faculty": "Otago School of Business \u2013 MBA Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 43620,
    "total_fee_cad": 87240,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any bachelor\u2019s degree",
      "GMAT/GRE preferred (not mandatory)"
    ],
    "entry_roles": [
      "MBA Graduate",
      "Management Consultant",
      "Business Development Manager",
      "Senior Manager",
      "Director",
      "Strategy Consultant",
      "Investment Manager",
      "CEO (career progression path)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Commerce",
    "faculty": "Otago School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 32800,
    "total_fee_cad": 65600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Commerce",
      "Business",
      "Economics",
      "or related field",
      "BCom (Hons) or equivalent"
    ],
    "entry_roles": [
      "Accountant",
      "Economist",
      "Financial Analyst",
      "Management Consultant",
      "Auditor",
      "Business Analyst",
      "Investment Manager",
      "Corporate Strategist",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science \u2013 Computer Science",
    "faculty": "Division of Sciences \u2013 Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 30340,
    "total_fee_cad": 60680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Computer Science",
      "IT",
      "Mathematics",
      "Physics",
      "or Engineering"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Research Scientist",
      "Machine Learning Engineer",
      "IT Consultant",
      "Cloud Engineer",
      "Database Administrator",
      "Cybersecurity Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Science",
    "faculty": "Division of Sciences \u2013 Applied Science Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 36900,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s degree in Science",
      "Engineering",
      "or related applied field",
      "relevant technical qualifications"
    ],
    "entry_roles": [
      "Applied Scientist",
      "Research Engineer",
      "Biomedical Engineer",
      "Software Engineer (specialisation-dependent)",
      "Technical Specialist",
      "Product Developer",
      "Consultant",
      "Research Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance",
    "faculty": "Otago School of Business \u2013 Finance Department",
    "duration_years": 1.0,
    "annual_fee_cad": 32800,
    "total_fee_cad": 32800,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Finance",
      "Commerce",
      "Economics",
      "Accounting",
      "or related field",
      "strong quantitative skills"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "Risk Analyst",
      "Financial Planner",
      "Treasury Manager",
      "Corporate Finance Manager",
      "Equity Analyst",
      "Actuarial Consultant"
    ],
    "features": []
  }
]);

// --- WAIKATO INSTITUTE OF TECHNOLOGY ---
const univ_waikatoinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "WAIKATO INSTITUTE OF TECHNOLOGY",
  "abbreviation": "WINTEC",
  "type": "college",
  "city": "Hamilton",
  "province": "Waikato",
  "country": "New Zealand",
  "campuses": [
    "Hamilton"
  ],
  "website": "https://www.wintec.ac.nz/international",
  "application_portal": "Online application via www.wintec.ac.nz",
  "contacts": {
    "admissions": {
      "email": "international@wintec.ac.nz",
      "address": "Online application via www.wintec.ac.nz (preferred); completed International Application Form with supporting documents emailed to international@wintec.ac.nz OR posted to physical address"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "New Zealand Science and Technology Scholarship (Te P\u016bkenga \u2013 via NZIST): NZ$10,000 per annum (20+ scholarships for Indian students; science, technology, engineering, mathematics programmes; automatic selection \u2013 no application required; eligible students applying by October 25 each year; first-year discount on tuition fees)"
    },
    {
      "name": "Postgraduate Study Grants: NZ$3,000 applied automatically to postgraduate eligible programmes (Postgraduate Diploma in Applied Management) reducing net fees"
    },
    {
      "name": "Financial Assistance: Merit-based, need-based, and specific populations support available"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, job placement support, employer recruitment events, internship coordination, career counselling, post-study work visa support (available for Level 4+ qualifications with 1\u20133 year pathway depending on programme level)",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Building access control systems (swipe cards for residential accommodation and building access)",
    "clubs": "Clubs & Societies: 100+ student clubs and societies; cultural associations, sports clubs, social groups, hobby-based clubs, volunteer opportunities"
  },
  "security": {
    "detail": "Non-emergency: +64 7 838 6399 or 0800 2 WINTEC"
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

addPrograms(univ_waikatoinstituteoftechnology, "WAIKATO INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing (Level 7)",
    "faculty": "Faculty of Health and Wellbeing (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 23878,
    "total_fee_cad": 71634,
    "min_class12_percent": 65,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "district health board employee",
      "healthcare coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Information Technology (Level 7)",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21812,
    "total_fee_cad": 65436,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "application developer",
      "programmer",
      "junior developer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant",
      "junior IT project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Business (Level 5)",
    "faculty": "Faculty of Business (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 10906,
    "total_fee_cad": 10906,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial",
      "business knowledge valued"
    ],
    "entry_roles": [
      "Business assistant",
      "operations coordinator",
      "business development officer",
      "management trainee",
      "finance officer",
      "administrative officer",
      "business analyst assistant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Level 7)",
    "faculty": "Faculty of Engineering and Trades (Engineering Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21812,
    "total_fee_cad": 65436,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics",
      "physics essential",
      "chemistry beneficial",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Civil engineer",
      "mechanical engineer",
      "electrical engineer",
      "site engineer",
      "construction technician",
      "project engineer",
      "design engineer",
      "engineering technician",
      "junior project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Cookery (Advanced) (Level 5)",
    "faculty": "Faculty of Hospitality and Tourism (Culinary Arts Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 21812,
    "total_fee_cad": 21812,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "hospitality or food-related subjects beneficial"
    ],
    "entry_roles": [
      "Chef",
      "sous chef",
      "line cook",
      "pastry chef",
      "culinary instructor",
      "food production supervisor",
      "kitchen manager",
      "hospitality supervisor",
      "catering coordinator",
      "head chef assistant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management (Level 9)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 165,
    "total_fee_cad": 330,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5-year programme (180 credits, ~6 months): NZ$14,600\u201315,400 for 6-month period; NZ$29,200\u201330,800 annually (estimate)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "commerce",
      "economics",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "strategic manager",
      "senior coordinator",
      "organisational development officer",
      "regional manager",
      "director-level roles",
      "senior business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Level 8)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 21484,
    "total_fee_cad": 21484,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "organisational leadership",
      "commerce",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "business manager",
      "management consultant",
      "senior coordinator",
      "strategic analyst",
      "organisational manager",
      "team leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Informatics (Level 8)",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 21484,
    "total_fee_cad": 21484,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "IT systems",
      "programming knowledge required"
    ],
    "entry_roles": [
      "IT project manager",
      "systems analyst",
      "business systems analyst",
      "IT consultant",
      "software developer",
      "IT solutions specialist",
      "IT infrastructure specialist",
      "junior IT architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Certificate in Applied Information Technology (Level 8)",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 11972,
    "total_fee_cad": 23944,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "or related discipline",
      "IT systems knowledge required",
      "diverse IT professionals welcome"
    ],
    "entry_roles": [
      "IT specialist",
      "systems technician",
      "IT support technician",
      "junior IT consultant",
      "technical support engineer",
      "IT project coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology specialisation (Level 9) \u2013 If Offered",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 23944,
    "total_fee_cad": 47888,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "strong technical foundation",
      "IT research interest required"
    ],
    "entry_roles": [
      "Senior software architect",
      "IT solutions architect",
      "senior IT project manager",
      "IT strategy manager",
      "technology consultant",
      "IT innovation manager",
      "software engineering lead",
      "CTO pathway"
    ],
    "features": []
  }
]);

// --- LINCOLN UNIVERSITY ---
const univ_lincolnuniversity = db.institutions.insertOne(inst({
  "name": "LINCOLN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Lincoln",
  "province": "Canterbury",
  "country": "New Zealand",
  "campuses": [
    "Lincoln"
  ],
  "website": "www.lincoln.ac.nz/study/apply-and-enrol/apply/",
  "application_portal": "MyLinc online portal at http://mylinc.nz",
  "contacts": {
    "admissions": {
      "email": "international@lincoln.ac.nz",
      "phone": "Shveta Mendon (India, Sri Lanka, Nepal) | Phone: +64 3 423 0021"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 41,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "EAP (English for Academic Purposes) Rebate: Available upon completion of 12+ weeks of English language study"
    },
    {
      "name": "International Taught Master Merit Scholarship: NZ$7,000\u2013NZ$10,000 (Master\u2019s programmes; requires B+ average in final year of bachelor\u2019s)"
    },
    {
      "name": "Pathway Certificate Scholarship: NZ$2,500"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Lincoln Career Centre provides recruitment, employer events, career fairs, and job placement support; employers actively recruit Lincoln graduates",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Accommodation: 7 fully catered Halls of Residence on-campus with unlimited WiFi",
    "clubs": "Recreation: Athletic Union supports various sports clubs; inclusive environment for all skill levels"
  },
  "security": {
    "detail": "Contact: Campus Security Hotline: 0800 545 388"
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

addPrograms(univ_lincolnuniversity, "LINCOLN UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Agriculture)",
    "faculty": "Faculty of Agribusiness and Commerce",
    "duration_years": 3.0,
    "annual_fee_cad": 28700,
    "total_fee_cad": 86100,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics recommended (not mandatory)"
    ],
    "entry_roles": [
      "Farm management",
      "agribusiness specialist",
      "agricultural consultant",
      "farm financial advisor",
      "production manager",
      "agricultural trading analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Agricultural Science",
    "faculty": "Faculty of Agriculture and Life Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 30340,
    "total_fee_cad": 121360,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics highly recommended"
    ],
    "entry_roles": [
      "Soil scientist",
      "crop agronomist",
      "livestock specialist",
      "farm consultant",
      "agricultural technician",
      "research assistant",
      "environmental advisor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Food Innovation)",
    "faculty": "Faculty of Agriculture and Life Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 30340,
    "total_fee_cad": 91020,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry",
      "Biology",
      "Mathematics preferred"
    ],
    "entry_roles": [
      "Food product development scientist",
      "food technologist",
      "food safety specialist",
      "nutritionist",
      "quality assurance analyst",
      "food processing technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Environmental Management",
    "faculty": "Faculty of Environment, Society and Design",
    "duration_years": 3.0,
    "annual_fee_cad": 30340,
    "total_fee_cad": 91020,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Environmental Science",
      "Chemistry advantageous"
    ],
    "entry_roles": [
      "Environmental consultant",
      "sustainability advisor",
      "resource manager",
      "environmental impact assessor",
      "conservation specialist",
      "policy analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
    "faculty": "Faculty of Agribusiness and Commerce",
    "duration_years": 3.0,
    "annual_fee_cad": 28700,
    "total_fee_cad": 86100,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Economics",
      "Accounting recommended"
    ],
    "entry_roles": [
      "Business analyst",
      "finance officer",
      "accounting associate",
      "marketing specialist",
      "management consultant",
      "supply chain coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Food Innovation",
    "faculty": "Faculty of Agriculture and Life Sciences",
    "duration_years": 1.0,
    "annual_fee_cad": 46740,
    "total_fee_cad": 46740,
    "min_class12_percent": 60,
    "required_subjects": [
      "Food science",
      "nutrition",
      "chemistry",
      "or agricultural science preferred",
      "alternative discipline acceptable with demonstrated relevant experience"
    ],
    "entry_roles": [
      "Food scientist",
      "product development specialist",
      "food safety manager",
      "quality control analyst",
      "food technologist",
      "R&D scientist",
      "nutritionist",
      "laboratory analyst",
      "food consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business (Global Management and Marketing)",
    "faculty": "Faculty of Agribusiness and Commerce",
    "duration_years": 1.5,
    "annual_fee_cad": 41820,
    "total_fee_cad": 62730,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "or related field preferred",
      "graduates from other disciplines welcome with work experience"
    ],
    "entry_roles": [
      "Business manager",
      "marketing manager",
      "strategy consultant",
      "global business analyst",
      "operations manager",
      "brand manager",
      "business development executive"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business (Finance)",
    "faculty": "Faculty of Agribusiness and Commerce",
    "duration_years": 1.5,
    "annual_fee_cad": 41820,
    "total_fee_cad": 62730,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "accounting",
      "economics",
      "or business",
      "other disciplines with quantitative coursework acceptable"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment advisor",
      "corporate financial manager",
      "risk manager",
      "treasury specialist",
      "audit analyst",
      "financial consultant",
      "banking professional"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management in Agribusiness",
    "faculty": "Faculty of Agribusiness and Commerce",
    "duration_years": 1.5,
    "annual_fee_cad": 41820,
    "total_fee_cad": 62730,
    "min_class12_percent": 60,
    "required_subjects": [
      "Agriculture",
      "agribusiness",
      "commerce",
      "or environmental science",
      "diverse backgrounds acceptable with agricultural interest"
    ],
    "entry_roles": [
      "Agribusiness manager",
      "farm business manager",
      "agricultural consultant",
      "supply chain manager in agribusiness",
      "agricultural marketing specialist",
      "agricultural trade analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Computing",
    "faculty": "Faculty of Agribusiness and Commerce (Computing Division)",
    "duration_years": 1.5,
    "annual_fee_cad": 46740,
    "total_fee_cad": 70110,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computing",
      "IT",
      "software engineering",
      "mathematics",
      "or engineering",
      "strong analytical",
      "programming foundation required"
    ],
    "entry_roles": [
      "Software developer",
      "IT consultant",
      "systems analyst",
      "data analyst",
      "software engineer",
      "application developer",
      "digital solutions specialist",
      "tech project manager"
    ],
    "features": []
  }
]);

// --- UNITEC INSTITUTE OF TECHNOLOGY ---
const univ_unitecinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "UNITEC INSTITUTE OF TECHNOLOGY",
  "abbreviation": "",
  "type": "college",
  "city": "Auckland",
  "province": "Auckland",
  "country": "New Zealand",
  "campuses": [
    "Auckland"
  ],
  "website": "https://www.unitec.ac.nz/international/study-with-us/application-process-for-international-students",
  "application_portal": "Online Enrolment Portal \u2013 https://apply.unitec.ac.nz (students create account and submit application online)",
  "contacts": {
    "admissions": {
      "phone": "+64 9 815 4321 (Monday\u2013Thursday 8:30am\u20135:00pm; Friday 8:30am\u20134:30pm)",
      "email": "international@unitec.ac.nz",
      "address": "Unitec, Private Bag 92025, Victoria Street West, Auckland 1142"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "International Learner Study Grants: Up to NZ$4,000 (automatically applied against tuition fees; no application required)"
    },
    {
      "name": "Master of Architecture Scholarship: Specialist scholarship (amount varies; 2025 details available from scholarships@unitec.ac.nz)"
    },
    {
      "name": "Master of Landscape Architecture Scholarship: Specialist scholarship"
    },
    {
      "name": "NZCBIA Excellence Scholarship: NZ$5,000 (construction-related programmes)"
    },
    {
      "name": "Various industry partner scholarships: Amounts NZ$2,000\u2013NZ$5,000"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Unitec Career Centre provides recruitment services, employer events, industry networking, career counseling; Student Job Search (SJS) access; on-campus job opportunities; workplace experience integrated into many programmes",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 50+ approved student clubs and societies; sports clubs (rugby, cricket, netball, football); lifestyle and hobby-based clubs; cultural groups; AUT Indian Students Association equivalent; free venue hire and funding opportunities for clubs"
  },
  "security": {
    "detail": "Security Offices: Mt Albert campus Building 112 Room 1001 (24/7 staffed Mon\u2013Fri 8am\u20134pm); Wait\u0101kere campus Building 510 Level 3 Room 3023 (Mon\u2013Fri 6:30am\u20139:30pm, Sat 8am\u20134pm)"
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

addPrograms(univ_unitecinstituteoftechnology, "UNITEC INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Business (Management)",
    "faculty": "Faculty of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 21660,
    "total_fee_cad": 64980,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any stream accepted",
      "business-related background advantageous but not mandatory"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "operations coordinator",
      "marketing coordinator",
      "finance officer",
      "HR officer",
      "business development executive"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computing Systems",
    "faculty": "School of Computing and Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 21660,
    "total_fee_cad": 64980,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics strongly recommended",
      "IT",
      "Physics",
      "or Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software developer",
      "IT support technician",
      "network administrator",
      "systems analyst",
      "web developer",
      "IT consultant",
      "database administrator",
      "tech support specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering Technology (Civil)",
    "faculty": "School of Engineering and Construction",
    "duration_years": 3.0,
    "annual_fee_cad": 24284,
    "total_fee_cad": 72852,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry highly recommended",
      "strong technical foundation required"
    ],
    "entry_roles": [
      "Civil engineer",
      "site engineer",
      "construction technician",
      "surveying technician",
      "structural technician",
      "project engineer",
      "engineering technician",
      "construction supervisor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Nursing",
    "faculty": "School of Healthcare and Social Practice",
    "duration_years": 3.0,
    "annual_fee_cad": 24751,
    "total_fee_cad": 74253,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "district health board employee"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Architectural Studies",
    "faculty": "School of Architecture, Interior and Landscape Design",
    "duration_years": 3.0,
    "annual_fee_cad": 21660,
    "total_fee_cad": 64980,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any background acceptable",
      "art",
      "design",
      "technical drawing",
      "or engineering background beneficial"
    ],
    "entry_roles": [
      "Architectural technician",
      "designer",
      "architect assistant",
      "CAD technician",
      "design draftsperson",
      "architectural technologist",
      "interior design assistant",
      "space planner"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master Applied Business",
    "faculty": "Faculty of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 49880,
    "total_fee_cad": 74820,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "accounting",
      "commerce",
      "or management background preferred",
      "other disciplines accepted with demonstrated relevant work experience"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "business analyst",
      "strategy manager",
      "regional manager",
      "business development executive",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Technologies-Computing",
    "faculty": "School of Computing and Information Technology",
    "duration_years": 1.5,
    "annual_fee_cad": 49880,
    "total_fee_cad": 74820,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer science",
      "IT",
      "software engineering",
      "mathematics",
      "or related technical discipline",
      "strong programming or systems foundation required"
    ],
    "entry_roles": [
      "Software engineer",
      "systems architect",
      "IT consultant",
      "software architect",
      "cloud engineer",
      "technology solutions designer",
      "senior developer",
      "IT project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Architecture",
    "faculty": "School of Architecture, Interior and Landscape Design",
    "duration_years": 1.5,
    "annual_fee_cad": 24940,
    "total_fee_cad": 37410,
    "min_class12_percent": 60,
    "required_subjects": [
      "Architecture",
      "design",
      "or landscape architecture practice or academic background required",
      "practising architects welcome",
      "portfolio review mandatory"
    ],
    "entry_roles": [
      "Registered architect (with additional qualifications)",
      "architectural practitioner",
      "design consultant",
      "senior architect",
      "project architect",
      "architectural educator",
      "design researcher",
      "practice principal"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Landscape Architecture",
    "faculty": "School of Architecture, Interior and Landscape Design",
    "duration_years": 1.5,
    "annual_fee_cad": 24940,
    "total_fee_cad": 37410,
    "min_class12_percent": 60,
    "required_subjects": [
      "Landscape architecture",
      "environmental design",
      "architecture",
      "urban planning",
      "or related discipline",
      "practising landscape architects eligible",
      "portfolio mandatory"
    ],
    "entry_roles": [
      "Landscape architect",
      "environmental designer",
      "urban landscape designer",
      "site planner",
      "landscape consultant",
      "park designer",
      "sustainability consultant",
      "design practitioner",
      "landscape educator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Practice (Social Practice)",
    "faculty": "School of Social Practice and Community Development",
    "duration_years": 1.5,
    "annual_fee_cad": 24940,
    "total_fee_cad": 37410,
    "min_class12_percent": 60,
    "required_subjects": [
      "Social practice",
      "social work",
      "community development",
      "public policy",
      "health",
      "education",
      "human services",
      "or related discipline",
      "diverse backgrounds with relevant experience considered"
    ],
    "entry_roles": [
      "Community development officer",
      "social policy advisor",
      "community health worker",
      "youth worker",
      "community services manager",
      "social researcher",
      "non-profit programme officer",
      "government policy analyst"
    ],
    "features": []
  }
]);

// --- TOI OHOMAI INSTITUTE OF TECHNOLOGY ---
const univ_toiohomaiinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "TOI OHOMAI INSTITUTE OF TECHNOLOGY",
  "abbreviation": "",
  "type": "college",
  "city": "Rotorua",
  "province": "Bay of Plenty",
  "country": "New Zealand",
  "campuses": [
    "Rotorua"
  ],
  "website": "https://www.toiohomai.ac.nz/international",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@toiohomai.ac.nz or international.applications@toiohomai.ac.nz"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "New Zealand Science and Technology Scholarship (Te P\u016bkenga \u2013 India): NZ$10,000 per annum (20+ scholarships annually for Indian students; science, technology, engineering, mathematics programmes; automatic selection \u2013 no application required; eligible students applying by October 25; first-year tuition discount)"
    },
    {
      "name": "Postgraduate Study Grants: Specific amounts (varies by programme)"
    },
    {
      "name": "Financial Assistance: Need-based and hardship support available (contact international office)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, employer recruitment events, internship coordination, job placement assistance, career counselling, industry networking",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Building access control systems (swipe cards for accommodation)",
    "clubs": "Rotorua: Geothermal attractions, lakes, forests, adventure activities (zipline, bungy, hot springs), M\u0101ori cultural experiences, vibrant city centre"
  },
  "security": {
    "detail": "Emergency (life-threatening): Dial 111"
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

addPrograms(univ_toiohomaiinstituteoftechnology, "TOI OHOMAI INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing (Level 7)",
    "faculty": "Faculty of Health and Wellbeing (Nursing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 20500,
    "total_fee_cad": 61500,
    "min_class12_percent": 65,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency department nurse",
      "district health board employee",
      "healthcare coordinator",
      "nurse educator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Information Technology (Level 7)",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 20500,
    "total_fee_cad": 61500,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "application developer",
      "programmer",
      "junior developer",
      "web developer",
      "systems administrator",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant",
      "junior IT project manager",
      "IT infrastructure specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Business (Level 5)",
    "faculty": "Faculty of Business (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16358,
    "total_fee_cad": 16358,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "business subjects beneficial",
      "business knowledge valued"
    ],
    "entry_roles": [
      "Business assistant",
      "operations coordinator",
      "business development officer",
      "management trainee",
      "finance officer",
      "administrative officer",
      "business analyst assistant",
      "customer service officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Level 7)",
    "faculty": "Faculty of Engineering and Trades (Engineering Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 21238,
    "total_fee_cad": 63714,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics",
      "physics essential",
      "chemistry beneficial",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Civil engineer",
      "mechanical engineer",
      "electrical engineer",
      "site engineer",
      "construction technician",
      "project engineer",
      "design engineer",
      "engineering technician",
      "junior project manager",
      "infrastructure technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "New Zealand Diploma in Cookery (Advanced) (Level 5)",
    "faculty": "Faculty of Hospitality and Tourism (Culinary Arts Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 21812,
    "total_fee_cad": 21812,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream accepted",
      "hospitality or food-related subjects beneficial"
    ],
    "entry_roles": [
      "Chef",
      "sous chef",
      "line cook",
      "pastry chef",
      "culinary instructor",
      "food production supervisor",
      "kitchen manager",
      "hospitality supervisor",
      "catering coordinator",
      "head chef assistant",
      "food",
      "beverage coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management (Level 9)",
    "faculty": "Faculty of Business (Management Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 18901,
    "total_fee_cad": 37802,
    "min_class12_percent": 60,
    "required_subjects": [
      "Management",
      "business",
      "commerce",
      "economics",
      "or related field",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "strategic manager",
      "senior coordinator",
      "organisational development officer",
      "regional manager",
      "director-level roles",
      "senior business analyst",
      "executive positions"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Level 8)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16646,
    "total_fee_cad": 16646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "organisational leadership",
      "commerce",
      "or related field",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "business manager",
      "management consultant",
      "senior coordinator",
      "strategic analyst",
      "organisational manager",
      "team leader",
      "business development officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business (Level 8)",
    "faculty": "Faculty of Business (Business Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16646,
    "total_fee_cad": 16646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "economics",
      "or related discipline",
      "diverse backgrounds with relevant quantitative coursework welcome",
      "business concepts knowledge required"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer",
      "strategic consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management (Level 9)",
    "faculty": "Faculty of Business (Applied Management Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 22960,
    "total_fee_cad": 45920,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "commerce",
      "economics",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "strategic manager",
      "senior coordinator",
      "organisational development officer",
      "regional manager",
      "director-level roles",
      "senior business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Informatics (Level 8)",
    "faculty": "Faculty of Engineering and Trades (Information Technology Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16646,
    "total_fee_cad": 16646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "computer science",
      "software engineering",
      "or related discipline",
      "IT systems",
      "programming knowledge required"
    ],
    "entry_roles": [
      "IT project manager",
      "systems analyst",
      "business systems analyst",
      "IT consultant",
      "software developer",
      "IT solutions specialist",
      "IT infrastructure specialist",
      "junior IT architect"
    ],
    "features": []
  }
]);

// --- VICTORIA UNIVERSITY OF WELLINGTON ---
const univ_victoriauniversityofwellington = db.institutions.insertOne(inst({
  "name": "VICTORIA UNIVERSITY OF WELLINGTON",
  "abbreviation": "",
  "type": "university",
  "city": "Wellington",
  "province": "Wellington",
  "country": "New Zealand",
  "campuses": [
    "Wellington"
  ],
  "website": "https://www.wgtn.ac.nz",
  "application_portal": "https://www.wgtn.ac.nz/study/apply-enrol",
  "contacts": {
    "admissions": {
      "phone": "+64 4 472 1000",
      "email": "international@vuw.ac.nz"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Details: Application through International Office; eligibility country-dependent"
    }
  ],
  "internships": {
    "part_time_work": "Networking: Capital-city location provides excellent networking and internship opportunities",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Societies: 100+ clubs and associations",
    "housing": "Accommodation: Residential colleges, student halls, private housing support"
  },
  "security": {
    "detail": "Local Emergency Services: Integrated with Wellington emergency response"
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

addPrograms(univ_victoriauniversityofwellington, "VICTORIA UNIVERSITY OF WELLINGTON", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce (BCom)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (BSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (BEng Honours)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Communication",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology/Computer Science",
    "faculty": "",
    "duration_years": 3.0,
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
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science (MCompSc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Professional Accounting (MPAcc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance/Master of Commerce (MCom)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
    "faculty": "Victoria Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 30786,
    "total_fee_cad": 92358,
    "min_class12_percent": 75,
    "required_subjects": [
      "No mandatory subjects",
      "mathematics",
      "business studies background helpful"
    ],
    "entry_roles": [
      "Accountant",
      "Business Analyst",
      "Financial Analyst",
      "Management Consultant",
      "Marketing Manager",
      "HR Officer",
      "Supply Chain Manager",
      "Investment Analyst",
      "Auditor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science",
    "faculty": "Faculty of Science",
    "duration_years": 3.0,
    "annual_fee_cad": 33180,
    "total_fee_cad": 99540,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science subjects recommended (Physics, Chemistry, Biology, Mathematics, Computer Science)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Research Scientist",
      "Laboratory Technician",
      "Environmental Scientist",
      "Bioinformatician",
      "Quality Analyst",
      "Healthcare Scientist",
      "Consultant",
      "IT Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering with Honours",
    "faculty": "School of Engineering and Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 38089,
    "total_fee_cad": 152356,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics mandatory",
      "strong STEM background required",
      "science background essential"
    ],
    "entry_roles": [
      "Software Engineer",
      "Civil Engineer",
      "Electrical Engineer",
      "Mechanical Engineer",
      "Structural Engineer",
      "Project Engineer",
      "Systems Engineer",
      "Aerospace Engineer",
      "Network Engineer",
      "Cybersecurity Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Communication",
    "faculty": "Faculty of Humanities and Social Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 28996,
    "total_fee_cad": 86988,
    "min_class12_percent": 75,
    "required_subjects": [
      "No mandatory subjects",
      "English",
      "humanities background helpful",
      "communication/media skills valued"
    ],
    "entry_roles": [
      "Journalist",
      "Media Producer",
      "PR Officer",
      "Communications Specialist",
      "Marketing Executive",
      "Content Manager",
      "Broadcaster",
      "Advertising Specialist",
      "Corporate Communications Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology/Computer Science",
    "faculty": "School of Engineering and Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 33180,
    "total_fee_cad": 99540,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science/IT background recommended",
      "strong logical reasoning required"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Administrator",
      "IT Analyst",
      "Data Analyst",
      "Web Developer",
      "Network Administrator",
      "Cybersecurity Specialist",
      "IT Consultant",
      "Database Administrator",
      "AI/Machine Learning Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration",
    "faculty": "Victoria Business School \u2013 MBA Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 41000,
    "total_fee_cad": 41000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any bachelor\u2019s degree",
      "management/business experience beneficial",
      "some professional qualifications recognised"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Business Development Director",
      "Senior Manager",
      "Executive",
      "Investment Manager",
      "Corporate Director",
      "Strategic Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science",
    "faculty": "School of Engineering and Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 37254,
    "total_fee_cad": 74508,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Computer Science",
      "Information Technology",
      "Software Engineering",
      "Mathematics",
      "or related discipline"
    ],
    "entry_roles": [
      "Software Engineer",
      "Senior Developer",
      "Data Scientist",
      "Systems Engineer",
      "AI/Machine Learning Specialist",
      "Research Scientist",
      "Cloud Engineer",
      "Cybersecurity Expert",
      "Software Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science",
    "faculty": "Faculty of Science",
    "duration_years": 2.0,
    "annual_fee_cad": 37254,
    "total_fee_cad": 74508,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Science",
      "Physics",
      "Chemistry",
      "Biology",
      "Environmental Science",
      "Mathematics",
      "or related discipline"
    ],
    "entry_roles": [
      "Research Scientist",
      "Postdoctoral Researcher",
      "Laboratory Manager",
      "Environmental Scientist",
      "Data Analyst",
      "Academic Researcher",
      "Conservation Specialist (specialisation-dependent)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Professional Accounting",
    "faculty": "Victoria Business School \u2013 Accounting Programme",
    "duration_years": 1.5,
    "annual_fee_cad": 31808,
    "total_fee_cad": 47712,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Accounting",
      "Commerce",
      "Finance",
      "or related field",
      "accounting prerequisites required",
      "strong quantitative background"
    ],
    "entry_roles": [
      "Chartered Accountant (CA pathway)",
      "Auditor",
      "Tax Specialist",
      "Financial Accountant",
      "Management Accountant",
      "Forensic Accountant",
      "Partner Track professional"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance",
    "faculty": "Victoria Business School \u2013 Finance Department",
    "duration_years": 1.0,
    "annual_fee_cad": 31808,
    "total_fee_cad": 31808,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Finance",
      "Commerce",
      "Economics",
      "Accounting",
      "Business",
      "or related field",
      "quantitative skills required",
      "financial knowledge beneficial"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Portfolio Manager",
      "Risk Analyst",
      "Financial Planner",
      "Treasury Manager",
      "Corporate Finance Manager",
      "Equity Analyst",
      "Investment Manager",
      "Economist"
    ],
    "features": []
  }
]);

// --- ARA INSTITUTE OF CANTERBURY ---
const univ_arainstituteofcanterbury = db.institutions.insertOne(inst({
  "name": "ARA INSTITUTE OF CANTERBURY",
  "abbreviation": "",
  "type": "college",
  "city": "Christchurch",
  "province": "Canterbury",
  "country": "New Zealand",
  "campuses": [
    "Christchurch"
  ],
  "website": "https://www.ara.ac.nz/study/priority-learner-groups/international/international-how-to-apply/",
  "application_portal": "Online application recommended via https://www.ara.ac.nz (faster processing); alternatively PDF application form can be emailed to intladmissions@ara.ac.nz",
  "contacts": {
    "admissions": {
      "phone": "+64 3 940 8389 or 03 940 8389 (Mon\u2013Fri during office hours)",
      "email": "international@ara.ac.nz",
      "address": "Enrolment Centre, PO Box 540, Christchurch Mail Centre, Christchurch 8140"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "Ara International Student Academic Scholarship: 7 scholarships of NZ$5,000 each (applied as credit to second year tuition; Sem 1 deadline Jan 16, 2026; Sem 2 deadline May 31, 2026; for Level 7+ Bachelor or Master\u2019s programme new entrants)"
    },
    {
      "name": "Rama Family Trust Scholarship (Indian Passport Holders): NZ$1,000 per semester (3 recipients per semester; eligibility requires Indian passport, completion and pass of 1 academic year in 2+ year programme, strong academic achievement or inspirational approach; opens July 25, closes Aug 17 annually)"
    },
    {
      "name": "Rika Fund: NZ$2,500 (one-off payment; for full-time domestic or international learners with clear career vision; application dates TBA)"
    },
    {
      "name": "International Learner Study Grants: Automatically applied to tuition (amount varies; no application required)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Ara Career Centre and Careers and Employment team provide job search assistance, interview preparation, CV/resume support, employer recruitment events, transition support to employment, internship coordination",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Multiple student clubs and societies; cultural associations (representing diverse international communities); sports clubs; volunteer and community engagement groups; student council; LGBTQ+ and diversity networks",
    "housing": "Campus Services: Student accommodation office, learning services, student support advisors, disability support services, student advocacy, peer mentorship (Tuakana/Teina programme), mental health and wellbeing services, international student life centre"
  },
  "security": {
    "detail": "Coordination: Partnerships with New Zealand Police; emergency services access protocols; established emergency response procedures; on-site trained first aid officers; defibrillators (AED) available at Sports Court (Whareora building)"
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

addPrograms(univ_arainstituteofcanterbury, "ARA INSTITUTE OF CANTERBURY", [
  {
    "level": "UG",
    "name": "Bachelor of Engineering Technology (Civil)",
    "faculty": "School of Engineering and Construction",
    "duration_years": 3.0,
    "annual_fee_cad": 23780,
    "total_fee_cad": 71340,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Chemistry beneficial",
      "technical/engineering background advantageous"
    ],
    "entry_roles": [
      "Civil engineer",
      "site engineer",
      "construction technician",
      "structural technician",
      "surveying technician",
      "project engineer",
      "engineering technician",
      "construction supervisor",
      "infrastructure technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Nursing",
    "faculty": "School of Health and Social Practice",
    "duration_years": 3.0,
    "annual_fee_cad": 23780,
    "total_fee_cad": 71340,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "interpersonal skills",
      "commitment to patient care valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "emergency nurse",
      "district health board (DHB) employee",
      "healthcare coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Management (Accounting)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 36900,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "accounting",
      "economics",
      "or commerce subjects preferred",
      "any stream accepted"
    ],
    "entry_roles": [
      "Junior accountant",
      "accounting technician",
      "financial analyst",
      "bookkeeper",
      "audit assistant",
      "tax assistant",
      "accounts officer",
      "business accountant",
      "finance officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Construction (Construction Management)",
    "faculty": "School of Engineering and Construction",
    "duration_years": 3.0,
    "annual_fee_cad": 23780,
    "total_fee_cad": 71340,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended",
      "any stream accepted",
      "construction or engineering background beneficial"
    ],
    "entry_roles": [
      "Construction manager",
      "site manager",
      "project coordinator",
      "quantity surveyor (for QS pathway)",
      "construction technician",
      "project engineer",
      "building inspector",
      "contracts administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information and Communication Technologies (Software Development Pathway)",
    "faculty": "School of Computing and Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 36900,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "or physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "junior programmer",
      "web developer",
      "IT support technician",
      "systems analyst",
      "application developer",
      "IT consultant",
      "database administrator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Engineering (Civil)",
    "faculty": "School of Engineering and Construction",
    "duration_years": 1.0,
    "annual_fee_cad": 23780,
    "total_fee_cad": 23780,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil engineering",
      "structural engineering",
      "geotechnical engineering",
      "water resources",
      "or related engineering field",
      "strong mathematics",
      "physics foundation required"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "project engineer",
      "design engineer",
      "construction engineer",
      "consulting engineer",
      "site engineer",
      "infrastructure manager",
      "graduate engineer (all civil specialisations)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Nursing",
    "faculty": "School of Health and Social Practice",
    "duration_years": 1.0,
    "annual_fee_cad": 23780,
    "total_fee_cad": 23780,
    "min_class12_percent": 60,
    "required_subjects": [
      "Nursing",
      "nursing science",
      "healthcare",
      "allied health",
      "or related discipline",
      "clinical experience mandatory",
      "active nursing practice or recent practice preferred"
    ],
    "entry_roles": [
      "Registered nurse specialist",
      "clinical nurse educator",
      "nurse manager",
      "advanced practice nurse",
      "specialist nurse (mental health, community, critical care, emergency)",
      "district health board registered nurse",
      "healthcare coordinator",
      "nurse researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 12300,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "economics",
      "accounting",
      "or related discipline preferred",
      "diverse backgrounds with relevant quantitative coursework welcome",
      "business concepts knowledge required"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer",
      "project manager",
      "strategy consultant",
      "organisational manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 12300,
    "min_class12_percent": 60,
    "required_subjects": [
      "Management",
      "business",
      "organisational leadership",
      "human resources",
      "or related field",
      "management concepts knowledge required",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Operations manager",
      "project manager",
      "human resources manager",
      "management consultant",
      "organisational manager",
      "business manager",
      "team leader",
      "senior coordinator",
      "strategic manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Creative Practice",
    "faculty": "School of Art, Design and Performing Arts",
    "duration_years": 1.5,
    "annual_fee_cad": 22140,
    "total_fee_cad": 33210,
    "min_class12_percent": 60,
    "required_subjects": [
      "Fine art",
      "visual arts",
      "design",
      "performing arts",
      "creative media",
      "music",
      "or related creative discipline",
      "demonstrated creative practice",
      "artistic capability",
      "portfolio of creative work essential"
    ],
    "entry_roles": [
      "Independent artist/practitioner",
      "arts educator",
      "creative director",
      "design consultant",
      "curator",
      "arts manager",
      "creative producer",
      "exhibition coordinator",
      "arts development officer",
      "designer"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF WAIKATO ---
const univ_universityofwaikato = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF WAIKATO",
  "abbreviation": "",
  "type": "university",
  "city": "Hamilton",
  "province": "Waikato",
  "country": "New Zealand",
  "campuses": [
    "Hamilton"
  ],
  "website": "www.waikato.ac.nz/int/",
  "application_portal": "MyWaikato (online)",
  "contacts": {
    "admissions": {
      "phone": "0800 WAIKATO (0800 924 5286) / +64 7 856 2889 (International)",
      "email": "international@waikato.ac.nz",
      "address": ""
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Undergraduate: Up to NZD $15,000 per year"
    },
    {
      "name": "Postgraduate: Up to NZD $10,000 per year"
    },
    {
      "name": "Application: Rolling basis with monthly reviews"
    },
    {
      "name": "Eligibility: B+ GPA equivalent, offer of place, new international students"
    },
    {
      "name": "Applied as: Tuition fee credit toward first year"
    },
    {
      "name": "GEMS Scholarship: Up to NZD $10,000 (for GEMS school graduates)"
    },
    {
      "name": "College International Pathway Scholarship: For pathway program graduates"
    }
  ],
  "internships": {
    "part_time_work": "Internship / Work Placement: Yes (every undergraduate completes work placement or project)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Activities: Student orientation, cultural events, campus trips"
  },
  "security": {
    "detail": "Security Coordination: Security assigned Wed-Sat; Police orientation on safety for residents"
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

addPrograms(univ_universityofwaikato, "UNIVERSITY OF WAIKATO", [
  {
    "level": "UG",
    "name": "Bachelor of Computer Science (BCompSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science \u2013 Computer Science (BSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (BBus)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering with Honours (BE(Hons))",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science \u2013 Data Analytics (BSc Data Analytics)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Analytics",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Cyber Security (MCS)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management Studies (MMS)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Education (MEd)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer Science (BCompSc)",
    "faculty": "School of Computing and Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 30200,
    "total_fee_cad": 90600,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific required subjects at secondary level"
    ],
    "entry_roles": [
      "Software Developer",
      "Programmer",
      "Systems Engineer",
      "Mobile App Developer",
      "Web Developer",
      "Network Engineer",
      "Software Architect",
      "UX Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science \u2013 Computer Science (BSc)",
    "faculty": "School of Computing and Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 26240,
    "total_fee_cad": 78720,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Data Analyst",
      "Systems Analyst",
      "IT Consultant",
      "Computer Scientist",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (BBus)",
    "faculty": "Waikato Management School (Triple Crown Accredited)",
    "duration_years": 3.0,
    "annual_fee_cad": 29871,
    "total_fee_cad": 89613,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific required subjects"
    ],
    "entry_roles": [
      "Management Trainee",
      "Business Analyst",
      "Financial Analyst",
      "HR Officer",
      "Marketing Executive",
      "Operations Manager",
      "Accountant",
      "Economist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering with Honours (BE(Hons))",
    "faculty": "School of Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 37393,
    "total_fee_cad": 112179,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry & Calculus at NCEA Level 3 equivalent"
    ],
    "entry_roles": [
      "Graduate Engineer",
      "Design Engineer",
      "Project Engineer",
      "Site Engineer",
      "Quality Engineer",
      "Structural Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science \u2013 Data Analytics (BSc Data Analytics)",
    "faculty": "School of Computing and Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 27060,
    "total_fee_cad": 81180,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Data Analyst",
      "Business Analyst",
      "Analytics Manager",
      "Market Researcher",
      "Data Scientist",
      "Business Intelligence Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Analytics",
    "faculty": "Waikato Management School",
    "duration_years": 2.0,
    "annual_fee_cad": 46666,
    "total_fee_cad": 93332,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any field acceptable"
    ],
    "entry_roles": [
      "Business Analyst",
      "Analytics Manager",
      "Business Intelligence Specialist",
      "Customer Insights Analyst",
      "Data Strategy Lead",
      "Supply Chain Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Cyber Security (MCS)",
    "faculty": "School of Computing and Mathematical Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 35929,
    "total_fee_cad": 71858,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Computer Engineering",
      "or related field"
    ],
    "entry_roles": [
      "Penetration Tester",
      "IT Security Consultant",
      "Chief Information Security Officer",
      "Security Assessment Consultant",
      "Cyber Security Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Waikato Management School",
    "duration_years": 2.0,
    "annual_fee_cad": 53254,
    "total_fee_cad": 106508,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any field acceptable"
    ],
    "entry_roles": [
      "Business Leader",
      "CEO",
      "Senior Manager",
      "Strategic Planner",
      "Management Consultant",
      "C-Suite Executive"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management Studies (MMS)",
    "faculty": "Waikato Management School (Triple Crown Accredited)",
    "duration_years": 2.0,
    "annual_fee_cad": 29629,
    "total_fee_cad": 59258,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any field acceptable"
    ],
    "entry_roles": [
      "Business Manager",
      "Operations Manager",
      "Marketing Manager",
      "HR Manager",
      "Supply Chain Manager",
      "Project Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Education (MEd)",
    "faculty": "School of Education / Te Kura Toi Tangata",
    "duration_years": 2.0,
    "annual_fee_cad": 29438,
    "total_fee_cad": 58876,
    "min_class12_percent": 60,
    "required_subjects": [
      "Education",
      "teaching",
      "or related field preferred"
    ],
    "entry_roles": [
      "Educational Administrator",
      "Curriculum Developer",
      "Teacher Educator",
      "Education Policy Analyst",
      "Learning Consultant",
      "School Principal"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF CANTERBURY ---
const univ_universityofcanterbury = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF CANTERBURY",
  "abbreviation": "",
  "type": "university",
  "city": "Christchurch",
  "province": "Canterbury",
  "country": "New Zealand",
  "campuses": [
    "Christchurch"
  ],
  "website": "https://www.canterbury.ac.nz",
  "application_portal": "Application tracking and status updates available",
  "contacts": {
    "admissions": {
      "phone": "+64 3 369 3999",
      "email": "iro@canterbury.ac.nz"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "University of Canterbury India High Achievers Scholarship: NZD $5,000 (undergraduate) / NZD $10,000 (postgraduate); for Indian citizens with strong academic record"
    },
    {
      "name": "Asia-Pacific High Achievers Scholarship: Up to NZD $15,000; competitive merit-based"
    },
    {
      "name": "Faculty-Specific Dean\u2019s Awards: Varies by faculty; merit-based"
    }
  ],
  "internships": {
    "part_time_work": "Services: Industry placement coordination, professional placements, CV preparation, interview coaching, networking events",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Activities: Cultural events, student-led initiatives, social activities",
    "housing": "Accommodation: Residential colleges, student halls, private housing support"
  },
  "security": {
    "detail": "Local Emergency Services: Integrated with Christchurch emergency response"
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

addPrograms(univ_universityofcanterbury, "UNIVERSITY OF CANTERBURY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce (BCom)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (BSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering with Honours (BE Hons)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Data Science (BDataSc)",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts (BA)",
    "faculty": "",
    "duration_years": 3.0,
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
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering (ME)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Data Science (MDS)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Commerce (MCom)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
    "faculty": "UC Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 31094,
    "total_fee_cad": 93282,
    "min_class12_percent": 75,
    "required_subjects": [
      "No mandatory subjects",
      "mathematics",
      "business background helpful"
    ],
    "entry_roles": [
      "Accountant",
      "Business Analyst",
      "Financial Analyst",
      "Management Consultant",
      "Marketing Manager",
      "HR Officer",
      "Supply Chain Manager",
      "Investment Analyst",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science",
    "faculty": "Faculty of Science",
    "duration_years": 3.0,
    "annual_fee_cad": 32717,
    "total_fee_cad": 98151,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science subjects recommended (Physics, Chemistry, Biology, Mathematics, Computer Science)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Research Scientist",
      "Laboratory Technician",
      "Environmental Scientist",
      "Bioinformatician",
      "Quality Analyst",
      "Healthcare Scientist",
      "IT Specialist",
      "GIS Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering with Honours",
    "faculty": "Department of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 42558,
    "total_fee_cad": 170232,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics mandatory",
      "strong STEM background required",
      "science background essential"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Software Engineer",
      "Structural Engineer",
      "Project Engineer",
      "Systems Engineer",
      "Aerospace Engineer",
      "Process Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Data Science",
    "faculty": "School of Mathematics and Statistics / Faculty of Science",
    "duration_years": 4.0,
    "annual_fee_cad": 32717,
    "total_fee_cad": 130868,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science essential",
      "strong quantitative background required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Analyst",
      "Analytics Specialist",
      "Software Engineer",
      "AI/ML Specialist",
      "Database Administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts",
    "faculty": "Faculty of Humanities and Social Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 25584,
    "total_fee_cad": 76752,
    "min_class12_percent": 75,
    "required_subjects": [
      "No mandatory subjects",
      "humanities or social sciences background helpful",
      "English proficiency important"
    ],
    "entry_roles": [
      "Journalist",
      "Media Professional",
      "Communications Specialist",
      "HR Officer",
      "Policy Analyst",
      "Content Creator",
      "Education Officer",
      "Government Analyst",
      "International Relations Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration",
    "faculty": "UC Business School \u2013 MBA Programme",
    "duration_years": 2.0,
    "annual_fee_cad": 52767,
    "total_fee_cad": 105534,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any bachelor\u2019s degree",
      "business/management experience beneficial",
      "professional experience valued"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Business Development Director",
      "Senior Manager",
      "Executive",
      "Corporate Manager",
      "Investment Manager",
      "Strategic Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science",
    "faculty": "Faculty of Science",
    "duration_years": 2.0,
    "annual_fee_cad": 32800,
    "total_fee_cad": 65600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Science",
      "Physics",
      "Chemistry",
      "Biology",
      "Environmental Science",
      "Mathematics",
      "or related discipline"
    ],
    "entry_roles": [
      "Research Scientist",
      "Postdoctoral Researcher",
      "Laboratory Manager",
      "Environmental Scientist",
      "Data Analyst",
      "Academic Researcher",
      "Specialist Consultant (specialisation-dependent)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering",
    "faculty": "Department of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 37146,
    "total_fee_cad": 74292,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Engineering or related STEM discipline",
      "relevant engineering background required"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Research Engineer",
      "Systems Engineer",
      "Consulting Engineer",
      "Specialist Technician",
      "Innovation Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Data Science",
    "faculty": "School of Mathematics and Statistics / Faculty of Science",
    "duration_years": 2.0,
    "annual_fee_cad": 32800,
    "total_fee_cad": 65600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Data Science",
      "Computer Science",
      "Mathematics",
      "Engineering",
      "Statistics",
      "or related STEM discipline"
    ],
    "entry_roles": [
      "Senior Data Scientist",
      "Machine Learning Engineer",
      "Data Analytics Manager",
      "AI/ML Specialist",
      "Big Data Engineer",
      "Business Intelligence Analyst",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Commerce",
    "faculty": "UC Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 31323,
    "total_fee_cad": 62646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Commerce",
      "Business",
      "Accounting",
      "Economics",
      "Finance",
      "or related field"
    ],
    "entry_roles": [
      "Senior Accountant",
      "Auditor",
      "Tax Specialist",
      "Finance Manager",
      "Business Consultant",
      "Corporate Manager",
      "Investment Analyst",
      "Economic Analyst"
    ],
    "features": []
  }
]);

// --- MANUKAU INSTITUTE OF TECHNOLOGY ---
const univ_manukauinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "MANUKAU INSTITUTE OF TECHNOLOGY",
  "abbreviation": "MIT",
  "type": "college",
  "city": "Auckland",
  "province": "Auckland",
  "country": "New Zealand",
  "campuses": [
    "Auckland"
  ],
  "website": "https://www.manukau.ac.nz/study/international-students/",
  "application_portal": "Online application form (email-based submission to international.application@manukau.ac.nz); no centralised online portal system",
  "contacts": {
    "admissions": {
      "phone": "+64 9 968 8700",
      "email": "security@manukau.ac.nz",
      "address": "Private Bag 94006, Manukau 2241, Auckland, New Zealand"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "International Learner Study Grants: Automatically applied to tuition (amount varies; application not required)"
    },
    {
      "name": "No publication of fixed scholarship amounts for undergraduate international students"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, employer recruitment events, industry partnerships, job placement support, internship coordination; on-campus job opportunities available through Student Job Search (SJS) platform",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 20+ active clubs and societies including cultural associations (Cook Islands, Samoan, Tongan, Tangata Whenua), LGBTQ+ Rainbow Club, social work support groups, sports clubs, Pink Shirt Club (holistic wellbeing)",
    "housing": "5.Accept Offer on invoice and acceptance form; complete accommodation form"
  },
  "security": {
    "detail": "Coordination: Partnerships with New Zealand Police and external emergency services; established emergency response protocols and procedures"
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

addPrograms(univ_manukauinstituteoftechnology, "MANUKAU INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Business (Management)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 13530,
    "total_fee_cad": 40590,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any academic stream accepted",
      "mathematics",
      "commerce",
      "or accounting background advantageous"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "operations coordinator",
      "finance officer",
      "HR officer",
      "project coordinator",
      "customer service manager",
      "business development officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering Technology (Civil)",
    "faculty": "School of Engineering and Trades (TechPark Campus primary)",
    "duration_years": 3.0,
    "annual_fee_cad": 24600,
    "total_fee_cad": 73800,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry highly recommended",
      "strong technical foundation required",
      "engineering or technical background advantageous"
    ],
    "entry_roles": [
      "Civil engineer",
      "site engineer",
      "construction technician",
      "structural technician",
      "surveying technician",
      "project engineer",
      "engineering technician",
      "construction supervisor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Nursing",
    "faculty": "School of Health and Social Practice",
    "duration_years": 3.0,
    "annual_fee_cad": 22960,
    "total_fee_cad": 68880,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry essential",
      "healthcare knowledge beneficial",
      "maturity",
      "people skills valued"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "aged care nurse",
      "primary healthcare nurse",
      "mental health nurse",
      "District Health Board (DHB) employee"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Accounting",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 13530,
    "total_fee_cad": 40590,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics",
      "accounting/business subjects preferred",
      "commerce or business stream advantageous but not mandatory"
    ],
    "entry_roles": [
      "Junior accountant",
      "accounting technician",
      "financial analyst",
      "bookkeeper",
      "audit assistant",
      "tax assistant",
      "accounts officer",
      "business accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Management (Human Resource Management)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 13530,
    "total_fee_cad": 40590,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any stream accepted",
      "business",
      "economics",
      "or psychology background advantageous",
      "HR interest/experience valued"
    ],
    "entry_roles": [
      "HR officer",
      "HR coordinator",
      "recruitment specialist",
      "employee relations coordinator",
      "HR administrator",
      "training",
      "development officer",
      "payroll officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Business Information Systems)",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 16646,
    "total_fee_cad": 16646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "IT",
      "commerce",
      "or management background preferred",
      "IT systems",
      "information management knowledge required",
      "other disciplines considered with strong quantitative coursework"
    ],
    "entry_roles": [
      "Business information systems analyst",
      "IT project manager",
      "systems analyst",
      "business systems consultant",
      "IT consultant",
      "business analyst with IT focus",
      "information systems manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Management (Business Information Systems)",
    "faculty": "School of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 16646,
    "total_fee_cad": 24969,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business information systems",
      "IT",
      "computer science",
      "management information systems",
      "or related technical/business field",
      "information systems concepts familiarity required",
      "diverse backgrounds with quantitative skills considered"
    ],
    "entry_roles": [
      "Senior business systems analyst",
      "IT solutions architect",
      "IT project manager",
      "business information systems manager",
      "systems consultant",
      "digital transformation specialist",
      "IT strategy manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Nursing",
    "faculty": "School of Health and Social Practice",
    "duration_years": 1.0,
    "annual_fee_cad": 16646,
    "total_fee_cad": 16646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Nursing",
      "nursing science",
      "healthcare",
      "allied health",
      "or related discipline",
      "clinical experience valued"
    ],
    "entry_roles": [
      "Registered nurse specialist",
      "clinical nurse educator",
      "nurse manager",
      "advanced practice nurse",
      "specialist nurse (mental health, community, critical care)",
      "District Health Board registered nurse",
      "healthcare coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 16646,
    "total_fee_cad": 16646,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "finance",
      "economics",
      "or related discipline",
      "business concepts knowledge required",
      "professionals from other fields with business experience welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer",
      "project manager",
      "strategic consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (Engineering \u2013 Civil Specialisation)",
    "faculty": "School of Engineering and Trades",
    "duration_years": 2.0,
    "annual_fee_cad": 20254,
    "total_fee_cad": 40508,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil engineering",
      "structural engineering",
      "geotechnical engineering",
      "water resources",
      "construction management",
      "or related engineering field",
      "strong technical foundation in mathematics",
      "physics required"
    ],
    "entry_roles": [
      "Professional civil engineer",
      "structural engineer",
      "project engineer",
      "consulting engineer",
      "construction engineer",
      "site engineer",
      "design engineer",
      "infrastructure manager",
      "civil engineering educator"
    ],
    "features": []
  }
]);

// --- SOUTHERN INSTITUTE OF TECHNOLOGY ---
const univ_southerninstituteoftechnology = db.institutions.insertOne(inst({
  "name": "SOUTHERN INSTITUTE OF TECHNOLOGY",
  "abbreviation": "SIT",
  "type": "college",
  "city": "Invercargill",
  "province": "Southland",
  "country": "New Zealand",
  "campuses": [
    "Invercargill"
  ],
  "website": "https://www.sit.ac.nz",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+64 3 211 2699 (International enquiries)",
      "email": "intl@sit.ac.nz",
      "address": "133 Tay Street, Invercargill 9810, New Zealand"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (February)",
    "Semester 2 (July)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Additional Campuses Contact:"
    },
    {
      "name": "Queenstown: Free Phone 0800 QT 4 SIT (0800 784 748); Phone +64 3 442 5375"
    },
    {
      "name": "Gore: Phone +64 3 208 9833"
    },
    {
      "name": "Telford (Balclutha): Free Phone 0800 TELFORD; Phone +64 3 419 0300"
    },
    {
      "name": "SIT2LRN (Distance Learning): Free Phone 0800 SIT 2 LRN (0800 748 257)"
    },
    {
      "name": "Academic Programmes: https://www.sit.ac.nz/Programmes"
    },
    {
      "name": "Academic Requirement: AISSC/ISC with minimum 50\u201360% average (varies by programme; nursing/health programmes typically require 75%+); alternative pathways include completion of Year 10 + 2\u20133 year diploma or Pathway Certificate"
    },
    {
      "name": "English Language Test: IELTS 6.0 overall (minimum; some programmes require 6.5) OR TOEFL 60 iBT minimum OR PTE 50+ minimum (varies by programme) OR equivalent"
    },
    {
      "name": "Alternative Pathways: Foundation/Pathway Certificates available; English language study programmes for students below entry requirements; Recognition of Prior Learning (RPL) pathway available"
    },
    {
      "name": "Academic Requirement: Bachelor\u2019s degree from recognised university with B average (GPA 3.0 or 70%) in final year courses"
    },
    {
      "name": "Relevant Academic Background: Related discipline required; assessed case-by-case; work experience considered"
    },
    {
      "name": "English Language Test: IELTS 6.5 overall (all bands 6.0+) OR TOEFL 79 iBT minimum OR PTE 58+ minimum"
    },
    {
      "name": "Work Experience: Beneficial; relevant professional background strengthens application (programme-specific)"
    },
    {
      "name": "Semester 1 (February 2026): Application deadlines typically October\u2013December 2025 (early application recommended for competitive programmes and scholarships)"
    },
    {
      "name": "Semester 2 (July 2026): Application deadlines typically March\u2013May 2026"
    },
    {
      "name": "Rolling Admissions: Available for some programmes year-round; contact for details on specific programme start dates"
    },
    {
      "name": "Processing: 10\u201330 business days for complete application assessment; offer issued within this period"
    },
    {
      "name": "Scholarship Names & Values:"
    },
    {
      "name": "Zero Fees English Study Grant: 100% tuition fee waiver for NZ Certificate in English Language (Level 4); fee paid (NZ$5,200) credited toward main course in 2026/2027 upon completion"
    },
    {
      "name": "Zero Fees Scheme: 100% tuition fee waiver for domestic students (New Zealand citizens and permanent residents only; NOT available to international students)"
    },
    {
      "name": "Study Grants for Specific Countries: Available for students from Brunei, Cambodia, East Timor, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam (varies; India not listed for automatic grants)"
    },
    {
      "name": "Note: Students may uptake only ONE study grant per student per programme"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Career Centre services, employer recruitment events, industry partnerships, internship coordination, post-study work visa support (available for Level 4+ qualifications)",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Student Accommodation: SIT Apartments (single or two-room apartments), Student Apartments, private accommodation options across Invercargill",
    "clubs": "Clubs & Societies: Multiple student clubs organized through student associations; sports clubs, cultural groups, hobby-based associations, volunteer opportunities"
  },
  "security": {
    "detail": "Emergency Contact: Free Phone 0800 4 0 FEES (0800 4 0 3337) or +64 3 211 2699"
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

addPrograms(univ_southerninstituteoftechnology, "SOUTHERN INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Hospitality Management",
    "faculty": "Faculty of Business and Hospitality (Tourism & Hospitality Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "business or hospitality background advantageous"
    ],
    "entry_roles": [
      "Hotel manager",
      "restaurant manager",
      "event coordinator",
      "guest services manager",
      "front office supervisor",
      "food",
      "beverage manager",
      "tourism coordinator",
      "hospitality consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering",
    "faculty": "Faculty of Engineering and Trades (Engineering Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 49200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "physics essential",
      "chemistry beneficial",
      "engineering/technical background advantageous"
    ],
    "entry_roles": [
      "Civil engineer",
      "mechanical engineer",
      "electrical engineer",
      "site engineer",
      "construction technician",
      "project engineer",
      "design engineer",
      "engineering technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology",
    "faculty": "Faculty of Engineering and Trades (Computing and IT Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "IT",
      "computer science",
      "or physics background advantageous",
      "any stream accepted"
    ],
    "entry_roles": [
      "Software developer",
      "programmer",
      "web developer",
      "IT support technician",
      "systems analyst",
      "database administrator",
      "IT consultant",
      "network technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (Accounting Specialisation)",
    "faculty": "Faculty of Business and Hospitality (Business Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "accounting/business subjects preferred",
      "any stream accepted"
    ],
    "entry_roles": [
      "Junior accountant",
      "accounting technician",
      "financial analyst",
      "bookkeeper",
      "audit assistant",
      "tax assistant",
      "accounts officer",
      "business accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Commerce",
    "faculty": "Faculty of Business and Hospitality (Commerce Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 12300,
    "total_fee_cad": 36900,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream accepted",
      "mathematics",
      "commerce subjects beneficial"
    ],
    "entry_roles": [
      "Business development officer",
      "sales representative",
      "business analyst",
      "marketing coordinator",
      "operations officer",
      "supply chain coordinator",
      "trade specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Faculty of Business and Hospitality (Business Graduate Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 19680,
    "total_fee_cad": 39360,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "management",
      "commerce",
      "or related discipline preferred",
      "diverse professionals welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "management consultant",
      "business development executive",
      "strategic manager",
      "senior coordinator",
      "organisational development officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business",
    "faculty": "Faculty of Business and Hospitality",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "commerce",
      "management",
      "economics",
      "or related discipline",
      "diverse backgrounds with relevant quantitative coursework welcome"
    ],
    "entry_roles": [
      "Business manager",
      "operations manager",
      "business analyst",
      "finance officer",
      "management consultant",
      "business development officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Engineering",
    "faculty": "Faculty of Engineering and Trades (Engineering Graduate Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 19680,
    "total_fee_cad": 19680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil",
      "mechanical",
      "electrical",
      "software engineering",
      "or related discipline",
      "strong technical foundation required"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "project engineer",
      "design engineer",
      "construction engineer",
      "consulting engineer",
      "site engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Health Science",
    "faculty": "Faculty of Health and Science (Health Sciences Division)",
    "duration_years": 2.0,
    "annual_fee_cad": 19680,
    "total_fee_cad": 39360,
    "min_class12_percent": 60,
    "required_subjects": [
      "Nursing",
      "health science",
      "allied health",
      "public health",
      "or related field",
      "healthcare experience essential"
    ],
    "entry_roles": [
      "Health manager",
      "healthcare coordinator",
      "public health specialist",
      "clinical educator",
      "health researcher",
      "healthcare consultant",
      "district health board roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Applied Management (Business Information Systems)",
    "faculty": "Faculty of Business and Hospitality (Applied Management Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 16400,
    "total_fee_cad": 16400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business information systems",
      "IT",
      "management",
      "computer science",
      "or related field",
      "information systems concepts familiarity required"
    ],
    "entry_roles": [
      "Business systems analyst",
      "IT project manager",
      "systems analyst",
      "business systems consultant",
      "IT consultant",
      "digital transformation specialist"
    ],
    "features": []
  }
]);

print("New Zealand Seeding Completed!");