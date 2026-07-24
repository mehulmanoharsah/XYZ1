// ============================================================
// IRELAND UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 19 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions ireland_universities_seed.js
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

// Delete existing Ireland data to prevent duplicates
db.institutions.deleteMany({ country: "Ireland" });
db.programs.deleteMany({ institution_name: { $in: [
  "ATLANTIC TECHNOLOGICAL UNIVERSITY",
  "DUBLIN BUSINESS SCHOOL",
  "DUBLIN CITY UNIVERSITY",
  "DUNDALK INSTITUTE OF TECHNOLOGY",
  "GRIFFITH COLLEGE",
  "MARY IMMACULATE COLLEGE",
  "MAYNOOTH UNIVERSITY",
  "MUNSTER TECHNOLOGICAL UNIVERSITY",
  "NATIONAL COLLEGE OF IRELAND",
  "NCAD DUBLIN",
  "ROYAL COLLEGE OF SURGEONS IN IRELAND",
  "SHANNON COLLEGE OF HOTEL MANAGEMENT",
  "SOUTH EAST TECHNOLOGICAL UNIVERSITY",
  "TECHNOLOGICAL UNIVERSITY SHANNON",
  "TRINITY COLLEGE DUBLIN",
  "UNIVERSITY COLLEGE CORK",
  "UNIVERSITY COLLEGE DUBLIN",
  "UNIVERSITY OF GALWAY",
  "UNIVERSITY OF LIMERICK",
] } });

// --- ATLANTIC TECHNOLOGICAL UNIVERSITY ---
const univ_atlantictechnologicaluniversity = db.institutions.insertOne(inst({
  "name": "ATLANTIC TECHNOLOGICAL UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Galway",
  "province": "Connacht",
  "country": "Ireland",
  "campuses": [
    "Galway"
  ],
  "website": "https://noneuapply.atu.ie",
  "application_portal": "https://noneuapply.atu.ie",
  "contacts": {
    "admissions": {
      "email": "+353 (0)71 91 55222 | Email: international.sligo@atu.ie",
      "phone": "+353 (0)71 91 55222 | Email: international.sligo@atu.ie"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit Entry Scholarship: \u20ac3,000\u2013\u20ac5,000 (IELTS 6.5+, minimum CGPA >80%)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + stipend (highly competitive; postgraduate only)"
    }
  ],
  "internships": {
    "part_time_work": "Placement Rate: 94% in employment or further study (9 months post-graduation)",
    "coop_available": true,
    "employment_rate_percent": 94
  },
  "campus_life": {
    "clubs": "Fitness programs, inter-varsities, and recreational activities"
  },
  "security": {
    "detail": "Emergency response protocols and evacuation procedures"
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

addPrograms(univ_atlantictechnologicaluniversity, "ATLANTIC TECHNOLOGICAL UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science (Honours) Computer Science",
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
    "name": "Bachelor of Engineering (Honours) Civil Engineering",
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
    "name": "Bachelor of Engineering (Honours) Mechanical Engineering",
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
    "name": "Bachelor of Business (Honours) Accounting",
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
    "name": "Bachelor of Business (Honours) Business",
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
    "name": "Master of Science Computing in Big Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Computing in Cybersecurity",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Computing in Big Data Analytics and Artificial Intelligence",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Business Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Engineering Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Honours) Computer Science",
    "faculty": "Dr. Jade Lyons, +353 (0)74 9186304",
    "duration_years": 3.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Maths O4/H7 minimum"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Analyst",
      "Systems Administrator",
      "AI Engineer",
      "Database Developer",
      "IT Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) Civil Engineering",
    "faculty": "School of Engineering (Galway-Mayo)",
    "duration_years": 4.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 72000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Maths O4/H7",
      "Technical sciences"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Project Manager",
      "Site Engineer",
      "Structural Designer",
      "Construction Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) Mechanical Engineering",
    "faculty": "School of Engineering (Galway, Sligo, Mayo)",
    "duration_years": 4.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 72000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Maths O4/H7",
      "Physics/Chemistry preferred"
    ],
    "entry_roles": [
      "Design Engineer",
      "Manufacturing Engineer",
      "Automation Engineer",
      "Project Engineer",
      "CAD Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (Honours) Accounting",
    "faculty": "School of Business (Galway-Mayo & Donegal)",
    "duration_years": 3.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [
      "English or Irish",
      "Maths recommended"
    ],
    "entry_roles": [
      "Junior Accountant",
      "Financial Analyst",
      "Auditor",
      "Tax Officer",
      "Accounts Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (Honours) Business",
    "faculty": "School of Business (Galway-Mayo)",
    "duration_years": 4.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 72000,
    "min_class12_percent": 70,
    "required_subjects": [
      "General (English/Maths beneficial)"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Operations Manager",
      "Marketing Coordinator",
      "Business Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Computing in Big Data Analytics",
    "faculty": "Department of Computing (Donegal)",
    "duration_years": 1.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 21000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computing",
      "IT",
      "Data Science",
      "or related discipline"
    ],
    "entry_roles": [
      "Data Scientist",
      "Analytics Engineer",
      "Machine Learning Engineer",
      "Business Intelligence Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Computing in Cybersecurity",
    "faculty": "Department of Computing (Donegal)",
    "duration_years": 1.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 21000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Information Technology",
      "Computing",
      "or Security-related discipline"
    ],
    "entry_roles": [
      "Cybersecurity Analyst",
      "Security Engineer",
      "Penetration Tester",
      "Information Security Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Computing in Big Data Analytics and Artificial Intelligence",
    "faculty": "Department of Computing (Donegal)",
    "duration_years": 1.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 21000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computing",
      "IT",
      "Engineering",
      "Mathematics",
      "or Data Science"
    ],
    "entry_roles": [
      "AI Specialist",
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Researcher",
      "Solution Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Business Analytics",
    "faculty": "School of Business (Galway-Mayo)",
    "duration_years": 1.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 21000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Commerce",
      "Economics",
      "IT",
      "Engineering preferred"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Business Intelligence Manager",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science Engineering Management",
    "faculty": "Faculty of Engineering & Technology (Donegal)",
    "duration_years": 1.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 21000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering",
      "Technology",
      "Management",
      "or Science"
    ],
    "entry_roles": [
      "Project Manager",
      "Engineering Manager",
      "Operations Manager",
      "Consultant"
    ],
    "features": []
  }
]);

// --- DUBLIN BUSINESS SCHOOL ---
const univ_dublinbusinessschool = db.institutions.insertOne(inst({
  "name": "DUBLIN BUSINESS SCHOOL",
  "abbreviation": "DBS",
  "type": "university",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.dbs.ie",
  "application_portal": "Online via DBS Application Form (https://www.dbs.ie/application-form)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "DBS Scholarship (Standard): 15% tuition waiver (Year 3 of full-time study), 20% (Year 4+)"
    },
    {
      "name": "International Student Referral Scheme: EUR 500 (if referred student enrolled in Ireland) / EUR 300 (if overseas)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + EUR 10,000 annual stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "Tuition Fee Credit Scheme (2024+): EUR 5,000\u2013\u20ac6,500 tax credit post-graduation (available for certain qualifying programs)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 optional/integrated in many programs; career services provides placement support",
    "coop_available": true,
    "employment_rate_percent": 96
  },
  "campus_life": {
    "clubs": "Events: Welcome week, networking events, cultural activities, career fairs",
    "housing": "Accommodation: On-campus & near-campus residence options (price on application)"
  },
  "security": {
    "detail": "Security Infrastructure: Campus security presence; access control systems"
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

addPrograms(univ_dublinbusinessschool, "DUBLIN BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "BA (Hons) Business (Management / Information Systems)",
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
    "name": "BSc (Hons) Computing (Data Analytics & Big Data / Software Development)",
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
    "name": "BA (Hons) Marketing (Digital Media)",
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
    "name": "Bachelor of Business in Accounting",
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
    "name": "BA (Hons) Psychology (PSI accredited)",
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
    "name": "MBA (with Finance/Marketing/International Business streams)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Digital Marketing & Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Financial Technology (Fintech)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics / MSc Applied Psychology",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Business (Management) (3 years)",
    "faculty": "Faculty of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Management Trainee",
      "Business Analyst",
      "Operations Manager",
      "HR Officer",
      "Project Coordinator",
      "Marketing Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Computing (Data Analytics & Big Data) (3\u20134 years)",
    "faculty": "Faculty of Computing",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Data Analyst",
      "Junior Data Scientist",
      "Business Analyst",
      "BI Developer",
      "Software Developer",
      "Systems Administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Marketing (Digital Media) (3 years)",
    "faculty": "Faculty of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Digital Marketing Executive",
      "Social Media Manager",
      "Content Creator",
      "Marketing Coordinator",
      "Brand Manager",
      "SEO Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in Accounting (3 years)",
    "faculty": "Faculty of Business / Department of Accounting",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Junior Accountant",
      "Accounting Technician",
      "Tax Assistant",
      "Finance Officer",
      "Audit Assistant",
      "Bookkeeper"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Psychology (PSI accredited) (3 years)",
    "faculty": "Department of Psychology",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Research Assistant",
      "HR Specialist",
      "Counselor Assistant",
      "UX Researcher",
      "Market Researcher",
      "Clinical Support Worker"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) (1\u20132 years)",
    "faculty": "Faculty of Business / MBA Programme Office",
    "duration_years": 1.0,
    "annual_fee_cad": 23362,
    "total_fee_cad": 23362,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Business Consultant",
      "Operations Director",
      "Project Manager",
      "Strategy Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Analytics (1 year full-time)",
    "faculty": "Faculty of Computing / Data Science Institute",
    "duration_years": 1.0,
    "annual_fee_cad": 23362,
    "total_fee_cad": 23362,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative foundation",
      "programming experience beneficial but not mandatory"
    ],
    "entry_roles": [
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Developer",
      "Machine Learning Engineer",
      "Analytics Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Digital Marketing & Analytics (1 year full-time)",
    "faculty": "Faculty of Business / Digital Marketing Institute",
    "duration_years": 1.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 21750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Marketing or business experience preferred but not required",
      "analytical mindset beneficial"
    ],
    "entry_roles": [
      "Digital Marketing Manager",
      "Marketing Analyst",
      "SEO/SEM Specialist",
      "Content Manager",
      "Brand Manager",
      "Analytics Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Financial Technology (Fintech) (1 year full-time)",
    "faculty": "Faculty of Business / School of Finance & Technology",
    "duration_years": 1.0,
    "annual_fee_cad": 23362,
    "total_fee_cad": 23362,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance or IT background preferred",
      "technical aptitude required"
    ],
    "entry_roles": [
      "Fintech Developer",
      "Financial Systems Analyst",
      "Blockchain Engineer",
      "FinTech Consultant",
      "Product Manager",
      "Risk Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics (1 year full-time)",
    "faculty": "Faculty of Business / School of Analytics",
    "duration_years": 1.0,
    "annual_fee_cad": 21300,
    "total_fee_cad": 21300,
    "min_class12_percent": 60,
    "required_subjects": [
      "Analytics/statistics background preferred",
      "strong analytical skills required",
      "coding helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Business Intelligence Consultant",
      "Analytics Manager",
      "Credit Risk Analyst",
      "Operations Research Analyst"
    ],
    "features": []
  }
]);

// --- DUBLIN CITY UNIVERSITY ---
const univ_dublincityuniversity = db.institutions.insertOne(inst({
  "name": "DUBLIN CITY UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.dcu.ie",
  "application_portal": "DCU Application Portal (dcuie2.elluciancrmrecruit.com/Apply)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "DCU International Merit Scholarship (UG & PG): EUR 2,000 (automatically awarded to eligible candidates with strong academics)"
    },
    {
      "name": "DCU International Excellence Scholarship: EUR 3,000 (deadline: March 31, 2026)"
    },
    {
      "name": "Faculty of Engineering & Computing Scholarship: EUR 5,000 (Non-EU postgraduates on eligible programs)"
    },
    {
      "name": "John Thompson Scholarship (Masters): EUR 1,600"
    },
    {
      "name": "Master\u2019s Program Reduced Fee: 10% tuition waiver upon graduation"
    },
    {
      "name": "DCU International Postgraduate Scholarship: EUR 5,000"
    },
    {
      "name": "DCU Access Scholarship: Up to full tuition waiver (disadvantaged backgrounds)"
    },
    {
      "name": "DCU Sports Scholarship: EUR 2,500"
    },
    {
      "name": "DCU Alumni Scholarship: EUR 2,000\u2013\u20ac3,000"
    }
  ],
  "internships": {
    "part_time_work": "Employment Rate: 96% employed or pursuing further study within 6 months; highest in Ireland; MBA 97% placement rate",
    "coop_available": true,
    "employment_rate_percent": 96
  },
  "campus_life": {
    "clubs": "Sports: 50+ clubs (rugby, cricket, climbing, yoga, swimming, athletics)",
    "housing": "Facilities: Modern labs, library, sports centre (gym, Olympic pool), student caf\u00e9s, accommodation"
  },
  "security": {
    "detail": "Modern Infrastructure: State-of-the-art facilities with security measures"
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

addPrograms(univ_dublincityuniversity, "DUBLIN CITY UNIVERSITY", [
  {
    "level": "UG",
    "name": "Computer Science / Information Technology",
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
    "name": "Business Studies / Commerce",
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
    "name": "Engineering (Mechanical / Electronic / Civil)",
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
    "name": "Nursing & Health Sciences",
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
    "name": "Actuarial Science / Financial Mathematics",
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
    "name": "MBA (Master in Business Administration)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Computing (with Major Options)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Finance",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Data Science / Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Digital Marketing / MSc in Cybersecurity",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc in Computer Science (4 years)",
    "faculty": "School of Computing",
    "duration_years": 3.0,
    "annual_fee_cad": 24000,
    "total_fee_cad": 72000,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics preferred",
      "no specific stream requirement"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Architect",
      "Web Developer",
      "Database Developer",
      "IT Security Specialist",
      "Cloud Computing Developer",
      "App Developer",
      "Technical Consultant",
      "Computer Systems Teacher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBS in Business Studies (4 years with optional internship / 3 years standard)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (preferred)",
      "no specific stream required"
    ],
    "entry_roles": [
      "E-Commerce Manager",
      "Financial Services Officer",
      "Management Trainee",
      "HR Officer",
      "Business Analyst",
      "Marketing Executive",
      "Operations Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (BE) \u2013 Mechanical / Electronic / Civil Engineering (4 years)",
    "faculty": "School of Engineering & Architecture",
    "duration_years": 3.0,
    "annual_fee_cad": 28500,
    "total_fee_cad": 85500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics & Physics (preferred)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Civil Structural Engineer",
      "Electronic Design Engineer",
      "Manufacturing Engineer",
      "Project Engineer",
      "Systems Engineer",
      "Automation Specialist",
      "CAD Technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc in Nursing (Children\u2019s & General Integrated) (4.5 years)",
    "faculty": "School of Nursing, Psychotherapy & Community Health",
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
    "name": "5 years | Full-time, on-campus; partnership with health service providers",
    "faculty": "",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 80,
    "required_subjects": [
      "Biology & Chemistry (preferred)"
    ],
    "entry_roles": [
      "Registered General Nurse",
      "Children\u2019s Nurse",
      "Hospital Nurse",
      "Community Nurse",
      "School Nurse",
      "Nursing Home Nurse",
      "Nurse in private healthcare"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc in Actuarial Science / Financial Mathematics (4 years)",
    "faculty": "School of Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (essential, 80% minimum)"
    ],
    "entry_roles": [
      "Actuary",
      "Financial Analyst",
      "Risk Manager",
      "Insurance Underwriter",
      "Pension Analyst",
      "Investment Analyst",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA \u2013 Master in Business Administration (1 year full-time / 2 years part-time)",
    "faculty": "DCU Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 37500,
    "total_fee_cad": 37500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Strategy Consultant",
      "Product Manager",
      "Operations Director",
      "CFO",
      "General Manager",
      "Entrepreneur",
      "Management Consultant",
      "Business Development Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Computing (with Major Options) (1 year full-time / 2 years part-time)",
    "faculty": "School of Computing",
    "duration_years": 1.0,
    "annual_fee_cad": 28500,
    "total_fee_cad": 28500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Competent programmer",
      "comfortable with mathematical concepts required"
    ],
    "entry_roles": [
      "Software Engineer",
      "IT Project Analyst",
      "Python/Java Developer",
      "Web Applications Developer",
      "Data Analyst",
      "Business Analyst",
      "Technical Consultant",
      "Performance Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Finance (1 year full-time)",
    "faculty": "DCU Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "economics",
      "mathematics",
      "accounting preferred"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Risk Manager",
      "Financial Controller",
      "Capital Markets Analyst",
      "Private Equity Analyst",
      "Quantitative Analyst",
      "Treasury Analyst",
      "Financial Advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Data Science / Data Analytics (1 year full-time)",
    "faculty": "School of Computing / Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 28500,
    "total_fee_cad": 28500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Developer",
      "Analytics Consultant",
      "Data Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Digital Marketing (1 year full-time)",
    "faculty": "DCU Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 28500,
    "total_fee_cad": 28500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Marketing",
      "business",
      "communications",
      "or related field preferred",
      "no specific background required"
    ],
    "entry_roles": [
      "Digital Marketing Manager",
      "Social Media Manager",
      "SEO Specialist",
      "Content Strategist",
      "Marketing Analytics Manager",
      "E-Commerce Manager",
      "Brand Manager",
      "Digital Analyst"
    ],
    "features": []
  }
]);

// --- DUNDALK INSTITUTE OF TECHNOLOGY ---
const univ_dundalkinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "DUNDALK INSTITUTE OF TECHNOLOGY",
  "abbreviation": "",
  "type": "university",
  "city": "Dundalk",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dundalk"
  ],
  "website": "www.dkit.ie/international",
  "application_portal": "Online application portal at DKIT website",
  "contacts": {
    "admissions": {
      "address": "Room F215, Faulkner Building, Dublin Road, Dundalk, Co. Louth A91 K584",
      "phone": "+353 42 9370300",
      "email": "helpdesk@dkit.ie"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 45,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Academic Merit Scholarship: Tuition fee coverage; based on academic records"
    },
    {
      "name": "Bernard Duffy Scholarship: \u20ac3,000 per year for 2 international students; available up to 4 years"
    },
    {
      "name": "KickStart Scholarship: For socioeconomically disadvantaged students or criminal justice history backgrounds"
    },
    {
      "name": "Automatic Consideration: Entry awards available upon offer receipt"
    }
  ],
  "internships": {
    "part_time_work": "Job placement assistance",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Societies: 100+ clubs and societies",
    "housing": "Fob access to student village (on-campus accommodation)"
  },
  "security": {
    "detail": "Out-of-hours emergency response (International Office & Chaplaincy)"
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

addPrograms(univ_dundalkinstituteoftechnology, "DUNDALK INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "BSc in Computing (Common Entry)",
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
    "name": "Bachelor of Engineering (Honours) - Common Entry (Civil/Mechanical/Electrical & Electronic)",
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
    "name": "BSc in Computing Systems & Operations",
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
    "name": "Bachelor of Business (Honours)",
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
    "name": "BEng in Mechanical Engineering",
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
    "name": "MSc Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cybersecurity",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence in Business",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering (various specializations)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc in Computing (Common Entry)",
    "faculty": "School of Informatics & Creative Arts (Computing Division)",
    "duration_years": 3.0,
    "annual_fee_cad": 16425,
    "total_fee_cad": 49275,
    "min_class12_percent": 85,
    "required_subjects": [
      "No prior programming experience required",
      "firm grounding in relevant subjects provided in Year 1"
    ],
    "entry_roles": [
      "Software Engineer",
      "Web Developer",
      "Data Analyst",
      "Systems Administrator",
      "Cloud Infrastructure Engineer",
      "Programmer",
      "Database Developer",
      "Software Developer",
      "Cloud Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) - Common Entry",
    "faculty": "School of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 16425,
    "total_fee_cad": 65700,
    "min_class12_percent": 85,
    "required_subjects": [
      "Common entry first year",
      "students choose Civil",
      "Mechanical",
      "or Electrical & Electronic Engineering specialization at end of Year 1",
      "Mathematics & Science preferred"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical & Electronic Engineer",
      "Design Engineer",
      "Project Engineer",
      "Construction Manager",
      "Aerospace Engineer",
      "Automotive Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (Honours)",
    "faculty": "School of Business & Humanities",
    "duration_years": 3.0,
    "annual_fee_cad": 16425,
    "total_fee_cad": 49275,
    "min_class12_percent": 85,
    "required_subjects": [
      "General education",
      "pass grades in six subjects minimum O6 or H7",
      "at least two H5 grades",
      "Mathematics O6 or H7",
      "English/Irish O6 or H7"
    ],
    "entry_roles": [
      "Business Analyst",
      "Financial Analyst",
      "Marketing Executive",
      "Operations Manager",
      "Human Resources Manager",
      "Management Consultant",
      "Supply Chain Analyst",
      "Business Development Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng in Mechanical Engineering",
    "faculty": "School of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 16425,
    "total_fee_cad": 65700,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics O6/H7 preferred",
      "Science/Physics beneficial",
      "common entry allows experience in multiple disciplines"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Manufacturing Engineer",
      "Design Engineer",
      "Automation Engineer",
      "Project Engineer",
      "CAD Specialist",
      "Production Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc in Computing Systems & Operations",
    "faculty": "School of Informatics & Creative Arts",
    "duration_years": 3.0,
    "annual_fee_cad": 16425,
    "total_fee_cad": 49275,
    "min_class12_percent": 85,
    "required_subjects": [
      "No prior programming experience required",
      "Introduction to Networking & Systems focus"
    ],
    "entry_roles": [
      "Systems Administrator",
      "Network Administrator",
      "IT Support Engineer",
      "Cloud Systems Specialist",
      "Systems Operations Manager",
      "IT Infrastructure Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Analytics",
    "faculty": "School of Informatics & Creative Arts (Computing Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong numeracy skills",
      "previous technical background beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Analytics Engineer",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
      "Statistical Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cybersecurity",
    "faculty": "School of Informatics & Creative Arts",
    "duration_years": 1.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "IT",
      "Security",
      "or related field"
    ],
    "entry_roles": [
      "Security Analyst",
      "Security Engineer",
      "Penetration Tester",
      "Information Security Manager",
      "CISO",
      "Incident Responder"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence in Business",
    "faculty": "School of Business & Humanities / School of Informatics & Creative Arts",
    "duration_years": 1.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific discipline required",
      "any background eligible"
    ],
    "entry_roles": [
      "AI Business Analyst",
      "Machine Learning Engineer",
      "AI Solutions Architect",
      "Business Intelligence Manager",
      "AI Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "School of Informatics & Creative Arts (Computing Division)",
    "duration_years": 1.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "IT",
      "or related field with technical content"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Specialist",
      "AI Researcher",
      "Deep Learning Engineer",
      "Computer Vision Specialist",
      "AI Solutions Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering",
    "faculty": "School of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 36000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical & Electronic",
      "or related engineering discipline"
    ],
    "entry_roles": [
      "Project Engineer",
      "Engineering Manager",
      "Research Engineer",
      "Design Engineer",
      "Consulting Engineer",
      "Manufacturing Engineer",
      "Structural Engineer"
    ],
    "features": []
  }
]);

// --- GRIFFITH COLLEGE ---
const univ_griffithcollege = db.institutions.insertOne(inst({
  "name": "GRIFFITH COLLEGE",
  "abbreviation": "",
  "type": "college",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.griffith.ie",
  "application_portal": "Online via Griffith College Application Form (https://www.griffith.ie/admissions/)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Griffith International Student Merit Scholarship: Partial tuition fee waiver (amount varies by program performance)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + EUR 10,000 annual stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "GELI Direct Entry Program (DEP) Scholarship: EUR 1,000 (English language institute graduates)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 optional/embedded in many programs; industry placement support",
    "coop_available": true,
    "employment_rate_percent": 96
  },
  "campus_life": {
    "clubs": "Events: Welcome week, networking events, cultural activities, career fairs",
    "housing": "Accommodation: On-campus & near-campus residence options"
  },
  "security": {
    "detail": "24/7 Campus Security: Security presence across campuses"
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

addPrograms(univ_griffithcollege, "GRIFFITH COLLEGE", [
  {
    "level": "UG",
    "name": "BA (Hons) Accounting & Finance",
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
    "name": "BA (Hons) Business Studies",
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
    "name": "BSc Computing Science",
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
    "name": "BA Communications",
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
    "name": "BA Business (Marketing)",
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
    "name": "MBA International Business",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Big Data Management & Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Accounting & Finance Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computing (Software Engineering / Cybersecurity)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Business Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Accounting & Finance (3 years)",
    "faculty": "Faculty of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Junior Accountant",
      "Finance Officer",
      "Accounting Technician",
      "Tax Assistant",
      "Audit Assistant",
      "Management Accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Business Studies (3 years)",
    "faculty": "Faculty of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Management Trainee",
      "Business Analyst",
      "HR Officer",
      "Operations Coordinator",
      "Marketing Executive",
      "Project Coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Computing Science (3 years)",
    "faculty": "Faculty of Computing",
    "duration_years": 3.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 65250,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Administrator",
      "Web Developer",
      "IT Systems Engineer",
      "Junior Developer",
      "Database Administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Communications (3 years)",
    "faculty": "Faculty of Communications & Creative Arts",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific requirement",
      "strong English fluency required"
    ],
    "entry_roles": [
      "Communications Officer",
      "Media Coordinator",
      "PR Executive",
      "Content Creator",
      "Journalist",
      "Marketing Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Business (Marketing) (3 years)",
    "faculty": "Faculty of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Marketing Executive",
      "Digital Marketing Officer",
      "Market Researcher",
      "Brand Manager",
      "Social Media Manager",
      "Advertising Coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA International Business (1 year full-time / 2 years part-time)",
    "faculty": "Graduate Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 25500,
    "total_fee_cad": 25500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Business Consultant",
      "Operations Director",
      "Project Manager",
      "Strategy Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Big Data Management & Analytics (1 year full-time)",
    "faculty": "Faculty of Computing / Data Science Institute",
    "duration_years": 1.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 24750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative foundation",
      "programming experience beneficial but not mandatory"
    ],
    "entry_roles": [
      "Data Scientist",
      "Big Data Engineer",
      "Analytics Consultant",
      "Machine Learning Engineer",
      "Business Intelligence Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Accounting & Finance Management (1 year full-time / 2 years part-time)",
    "faculty": "Graduate Business School / Faculty of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 22500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Accounting/finance background preferred",
      "analytical skills required"
    ],
    "entry_roles": [
      "Accountant",
      "Financial Manager",
      "Audit Manager",
      "Finance Manager",
      "Tax Manager",
      "Management Accountant",
      "Corporate Finance Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computing (1\u20131.5 years full-time)",
    "faculty": "Faculty of Computing / School of Computing",
    "duration_years": 1.0,
    "annual_fee_cad": 24000,
    "total_fee_cad": 24000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming competency required",
      "software design knowledge beneficial"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Architect",
      "Technical Lead",
      "DevOps Engineer",
      "Solutions Architect",
      "Cloud Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Business Management (1\u20131.5 years full-time)",
    "faculty": "Graduate Business School / Faculty of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 25500,
    "total_fee_cad": 25500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business/management experience preferred",
      "international business interest beneficial"
    ],
    "entry_roles": [
      "International Business Manager",
      "Global Trade Manager",
      "Export Manager",
      "Market Development Manager",
      "International Consultant"
    ],
    "features": []
  }
]);

// --- MARY IMMACULATE COLLEGE ---
const univ_maryimmaculatecollege = db.institutions.insertOne(inst({
  "name": "MARY IMMACULATE COLLEGE",
  "abbreviation": "",
  "type": "college",
  "city": "Limerick",
  "province": "Munster",
  "country": "Ireland",
  "campuses": [
    "Limerick"
  ],
  "website": "https://www.mic.ul.ie",
  "application_portal": "Non-EU students apply directly through International Office",
  "contacts": {
    "admissions": {
      "email": "Careers.Service@mic.ul.ie",
      "phone": "061-204348 / 205137 / 204929 / 205160"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Typical value: \u20ac1,500-\u20ac5,000 range or partial fee waiver (varies)"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support:",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Societies: 100+ clubs and societies",
    "housing": "Accommodation:"
  },
  "security": {
    "detail": "8. Campus Security"
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

addPrograms(univ_maryimmaculatecollege, "MARY IMMACULATE COLLEGE", [
  {
    "level": "UG",
    "name": "Bachelor of Arts (International)",
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
    "name": "Bachelor of Science in Psychology (International)",
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
    "name": "BA in Contemporary & Applied Theatre Studies",
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
    "name": "BA in Early Childhood Care and Education",
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
    "name": "BA in Education (Post-Primary, Thurles)",
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
    "name": "Master of Education (M Ed) with Specialisms",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA in Modern English Literature",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA in Media Studies",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA/M Sc Environment, Society and Culture",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA in History",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts (International)",
    "faculty": "Faculty of Arts",
    "duration_years": 4.0,
    "annual_fee_cad": 16692,
    "total_fee_cad": 66768,
    "min_class12_percent": 70,
    "required_subjects": [
      "14 subject combinations available (English, French, German, History, Geography, Media & Communication, Drama, Music, Psychology, Philosophy, Theology, Mathematics, Irish)"
    ],
    "entry_roles": [
      "Education",
      "Heritage",
      "Tourism",
      "Arts",
      "Culture",
      "Media",
      "Finance",
      "Public Sector",
      "Psychology",
      "Social Services"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Psychology (International)",
    "faculty": "School of Life & Health Sciences / Faculty of Arts",
    "duration_years": 4.0,
    "annual_fee_cad": 16879,
    "total_fee_cad": 67516,
    "min_class12_percent": 70,
    "required_subjects": [
      "Psychology major + joint honours combination",
      "Science/Mathematics beneficial"
    ],
    "entry_roles": [
      "Social/community service management",
      "Human resources",
      "Training & development",
      "Education",
      "Marketing",
      "Business",
      "Research",
      "Health services"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA in Contemporary & Applied Theatre Studies",
    "faculty": "Faculty of Arts (Drama and Theatre Studies)",
    "duration_years": 4.0,
    "annual_fee_cad": 16692,
    "total_fee_cad": 66768,
    "min_class12_percent": 70,
    "required_subjects": [
      "Drama & Theatre Studies major",
      "joint honours with another Arts subject"
    ],
    "entry_roles": [
      "Theatre",
      "Arts & Culture",
      "Education",
      "Media",
      "Heritage",
      "Event Management",
      "Tourism"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA in Early Childhood Care and Education",
    "faculty": "Faculty of Education",
    "duration_years": 4.0,
    "annual_fee_cad": 16692,
    "total_fee_cad": 66768,
    "min_class12_percent": 70,
    "required_subjects": [
      "Early Childhood Care & Education major",
      "general Arts requirements"
    ],
    "entry_roles": [
      "Preschool Teacher",
      "Childcare Manager",
      "Educational Developer",
      "School Support Staff",
      "Regulatory Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA in Education (Post-Primary)",
    "faculty": "Faculty of Education",
    "duration_years": 4.0,
    "annual_fee_cad": 21127,
    "total_fee_cad": 84508,
    "min_class12_percent": 70,
    "required_subjects": [
      "2 teaching subjects (subject choice varies)",
      "accredited by Teaching Council of Ireland"
    ],
    "entry_roles": [
      "Post-primary teacher (subject-specific)",
      "Education Officer",
      "Curriculum Developer",
      "School Administrator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Education (M Ed) with Specialisms",
    "faculty": "Faculty of Education",
    "duration_years": 1.0,
    "annual_fee_cad": 8925,
    "total_fee_cad": 8925,
    "min_class12_percent": 60,
    "required_subjects": [
      "For educators enhancing professional knowledge"
    ],
    "entry_roles": [
      "Educational Leader",
      "School Principal",
      "Curriculum Developer",
      "Education Policy Officer",
      "Training & Development Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA in Modern English Literature",
    "faculty": "Department of English Language & Literature",
    "duration_years": 1.0,
    "annual_fee_cad": 8475,
    "total_fee_cad": 8475,
    "min_class12_percent": 60,
    "required_subjects": [
      "English",
      "Literature",
      "Cultural Studies"
    ],
    "entry_roles": [
      "University Lecturer",
      "Publishing Professional",
      "Literary Critic",
      "Content Writer",
      "Education Officer",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA in Media Studies",
    "faculty": "Department of Media & Communication Studies",
    "duration_years": 1.0,
    "annual_fee_cad": 9585,
    "total_fee_cad": 9585,
    "min_class12_percent": 60,
    "required_subjects": [
      "Media",
      "Communication",
      "Film",
      "Cultural Studies"
    ],
    "entry_roles": [
      "Media Producer",
      "Journalist",
      "Documentary Researcher",
      "Communications Manager",
      "Publishing Professional",
      "Content Strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA / M Sc in Environment, Society and Culture",
    "faculty": "Department of Geography / Faculty of Arts",
    "duration_years": 1.0,
    "annual_fee_cad": 8475,
    "total_fee_cad": 8475,
    "min_class12_percent": 60,
    "required_subjects": [
      "Geography",
      "Environmental Science",
      "Environmental Studies",
      "Human/Physical Science"
    ],
    "entry_roles": [
      "Environmental Consultant",
      "Policy Maker",
      "NGO Officer",
      "Geospatial Analyst",
      "Environmental Engineer",
      "Sustainability Officer",
      "Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA in History",
    "faculty": "Department of History / Faculty of Arts",
    "duration_years": 1.0,
    "annual_fee_cad": 8475,
    "total_fee_cad": 8475,
    "min_class12_percent": 60,
    "required_subjects": [
      "History",
      "Irish Studies",
      "Archaeology",
      "Anthropology"
    ],
    "entry_roles": [
      "University Lecturer",
      "Museum/Archives Administrator",
      "Documentary/Radio Researcher",
      "Heritage Officer",
      "Publisher",
      "Journalist",
      "Archivist"
    ],
    "features": []
  }
]);

// --- MAYNOOTH UNIVERSITY ---
const univ_maynoothuniversity = db.institutions.insertOne(inst({
  "name": "MAYNOOTH UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Maynooth",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Maynooth"
  ],
  "website": "https://www.maynoothuniversity.ie",
  "application_portal": "Online at https://www.maynoothuniversity.ie/study-maynooth/how-apply/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + living stipend (EUR 1,000/month; highly competitive; 60 places nationwide)"
    },
    {
      "name": "Maynooth International Student Merit Scholarship: Varied amounts (auto-assessed for eligible candidates)"
    },
    {
      "name": "All scholarships: Auto-awarded; no separate application required"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 optional/embedded in many programs; industry placements available",
    "coop_available": true,
    "employment_rate_percent": 7
  },
  "campus_life": {
    "clubs": "Sports: 50+ clubs",
    "housing": "Campus Facilities: Modern labs, library, sports centre, student accommodation (on-campus & near-campus options)"
  },
  "security": {
    "detail": "24/7 Campus Security: Security presence across campus"
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

addPrograms(univ_maynoothuniversity, "MAYNOOTH UNIVERSITY", [
  {
    "level": "UG",
    "name": "BSc Computer Science & Software Engineering",
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
    "name": "BSc Electronics & Computing Systems",
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
    "name": "BA Accounting & Finance",
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
    "name": "BSc Biological Science",
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
    "name": "BA Media Studies & English",
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
    "name": "MSc Data Science & Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science (Software Engineering)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Psychology",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Business Translation & Intercultural Communication",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Computer Science & Software Engineering (4 years)",
    "faculty": "Department of Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 24000,
    "total_fee_cad": 72000,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (75% minimum)"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "IT Consultant",
      "Web Developer",
      "Database Developer",
      "IT Project Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Electronics & Computing Systems (4 years)",
    "faculty": "Department of Electronic Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics & Physics (75% minimum each)"
    ],
    "entry_roles": [
      "Electronics Engineer",
      "Design Engineer",
      "Systems Engineer",
      "Embedded Systems Developer",
      "Technical Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Accounting & Finance (4 years)",
    "faculty": "Department of Accounting & Finance",
    "duration_years": 3.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 65250,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Accountant",
      "Financial Analyst",
      "Audit Assistant",
      "Tax Officer",
      "Finance Manager",
      "Business Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Biological Science (4 years)",
    "faculty": "Department of Biology",
    "duration_years": 3.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 67500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology & Chemistry (70% minimum each)"
    ],
    "entry_roles": [
      "Research Scientist",
      "Bioanalyst",
      "Quality Control Analyst",
      "Pharmaceutical Scientist",
      "Environmental Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Media Studies & English (4 years)",
    "faculty": "Department of Media Studies",
    "duration_years": 3.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [
      "English fluency required"
    ],
    "entry_roles": [
      "Media Producer",
      "Content Creator",
      "Journalist",
      "Digital Marketing Officer",
      "Communications Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science & Analytics (1 year full-time)",
    "faculty": "Department of Computer Science / Mathematics & Statistics",
    "duration_years": 1.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 27000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative foundation",
      "programming experience beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Business Analyst",
      "BI Developer",
      "Analytics Consultant",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science (Software Engineering) (1 year full-time / 2 years part-time)",
    "faculty": "Department of Computer Science",
    "duration_years": 1.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 27000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming competency required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Architect",
      "DevOps Engineer",
      "Technical Lead",
      "Solutions Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance (1 year full-time)",
    "faculty": "Department of Accounting & Finance",
    "duration_years": 1.0,
    "annual_fee_cad": 27750,
    "total_fee_cad": 27750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Quantitative skills required",
      "accounting/finance background preferred"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Risk Manager",
      "Investment Analyst",
      "Corporate Finance Specialist",
      "Audit Associate"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Psychology (1 year full-time)",
    "faculty": "Department of Psychology",
    "duration_years": 1.0,
    "annual_fee_cad": 26250,
    "total_fee_cad": 26250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Psychology or behavioural science foundation recommended"
    ],
    "entry_roles": [
      "Research Psychologist",
      "Clinical Psychologist",
      "Industrial Psychologist",
      "HR Consultant",
      "Counselor",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Business Translation & Intercultural Communication in English & Spanish (1 year full-time)",
    "faculty": "Department of Modern Languages",
    "duration_years": 1.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 24750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Fluency in English & Spanish (minimum B2 level)",
      "translation/linguistics experience beneficial"
    ],
    "entry_roles": [
      "Translator",
      "Interpreter",
      "Intercultural Communications Officer",
      "Localization Specialist",
      "Business Development Manager"
    ],
    "features": []
  }
]);

// --- MUNSTER TECHNOLOGICAL UNIVERSITY ---
const univ_munstertechnologicaluniversity = db.institutions.insertOne(inst({
  "name": "MUNSTER TECHNOLOGICAL UNIVERSITY",
  "abbreviation": "MTU",
  "type": "university",
  "city": "Cork",
  "province": "Munster",
  "country": "Ireland",
  "campuses": [
    "Cork"
  ],
  "website": "https://www.cit.ie",
  "application_portal": "Online via MTU Application Portal (https://www.cit.ie/admissions)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "MTU International Student Merit Scholarship: Up to EUR 3,000 (tuition fee reduction; auto-assessed)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + EUR 10,000 annual stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "Partial Fee Waiver Programme: Available for eligible international students (application required)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 embedded/optional in many programs (6\u201312 month placements)",
    "coop_available": true,
    "employment_rate_percent": 94
  },
  "campus_life": {
    "clubs": "Sports Facilities: Athletics track, tennis courts, gym, sports hall, student sports clubs",
    "housing": "Accommodation: On/near-campus residence options (high demand \u2013 apply early)"
  },
  "security": {
    "detail": "24/7 Campus Security: Security presence across campuses; emergency response services"
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

addPrograms(univ_munstertechnologicaluniversity, "MUNSTER TECHNOLOGICAL UNIVERSITY", [
  {
    "level": "UG",
    "name": "BEng (Hons) Mechanical Engineering",
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
    "name": "BEng (Hons) Civil Engineering",
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
    "name": "BSc (Hons) Computer Systems",
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
    "name": "BSc (Hons) Business Information Systems",
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
    "name": "BEng (Hons) Electrical Engineering",
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
    "name": "MSc Data Science & Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cybersecurity",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cloud Computing",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Sustainable Energy",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng (Hons) Mechanical Engineering (4 years)",
    "faculty": "School of Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics & Mathematics (70% minimum preferred)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Project Engineer",
      "Systems Engineer",
      "Automation Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng (Hons) Civil Engineering (3 years)",
    "faculty": "School of Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics & Mathematics (70% minimum)"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Structural Engineer",
      "Site Engineer",
      "Construction Manager",
      "Infrastructure Engineer",
      "Project Coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Computer Systems (4 years)",
    "faculty": "School of Computing & IT",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Systems Administrator",
      "IT Systems Engineer",
      "Network Administrator",
      "Software Developer",
      "Database Administrator",
      "IT Support Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Business Information Systems (4 years)",
    "faculty": "School of Business & Humanities",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Business Analyst",
      "IT Business Consultant",
      "Systems Analyst",
      "Database Manager",
      "IT Project Coordinator",
      "Business Systems Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng (Hons) Electrical Engineering (4 years)",
    "faculty": "School of Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics & Mathematics (70% minimum)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Design Engineer",
      "Renewable Energy Engineer",
      "Controls Engineer",
      "Field Service Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science & Analytics (1 year full-time)",
    "faculty": "School of Computing & IT / Faculty of Engineering & Science",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative foundation",
      "programming experience beneficial but not mandatory"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Developer",
      "Machine Learning Engineer",
      "Analytics Consultant",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence (1 year full-time)",
    "faculty": "School of Computing & IT / Faculty of Engineering & Science",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming competency required",
      "AI/ML familiarity beneficial"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Computer Vision Engineer",
      "NLP Specialist",
      "AI Research Scientist",
      "Robotics Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cybersecurity (1 year full-time)",
    "faculty": "School of Computing & IT / Faculty of Engineering & Science",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "IT/computing background required",
      "cybersecurity experience beneficial"
    ],
    "entry_roles": [
      "Cybersecurity Analyst",
      "Security Engineer",
      "Penetration Tester",
      "Security Manager",
      "Information Security Officer",
      "Threat Intelligence Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cloud Computing (1 year full-time)",
    "faculty": "School of Computing & IT",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computing/IT background required",
      "cloud technology experience beneficial"
    ],
    "entry_roles": [
      "Cloud Architect",
      "Cloud Systems Administrator",
      "DevOps Engineer",
      "Cloud Solutions Engineer",
      "Infrastructure Manager",
      "Cloud Security Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Sustainable Energy (1 year full-time)",
    "faculty": "Faculty of Engineering & Science / School of Engineering",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics/chemistry/engineering background",
      "sustainability interest beneficial"
    ],
    "entry_roles": [
      "Renewable Energy Engineer",
      "Sustainability Engineer",
      "Energy Auditor",
      "Green Building Specialist",
      "Carbon Manager",
      "Environmental Consultant",
      "Energy Systems Manager"
    ],
    "features": []
  }
]);

// --- NATIONAL COLLEGE OF IRELAND ---
const univ_nationalcollegeofireland = db.institutions.insertOne(inst({
  "name": "NATIONAL COLLEGE OF IRELAND",
  "abbreviation": "",
  "type": "college",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.ncirl.ie",
  "application_portal": "Official NCI online portal (https://www.ncirl.ie/International)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 37,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Academic Merit Scholarship (Masters): EUR 2,000\u2013\u20ac4,000 (automatically assessed for 70%+ previous academics; no separate application required)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Up to 2 places at NCI (60 nationwide; highly competitive)"
    },
    {
      "name": "Entrepreneurship Scholarship: Merit-based; details on application"
    },
    {
      "name": "International Scholarship Pool: Up to EUR 2,000 per student (auto-assessed upon offer)"
    },
    {
      "name": "All Master\u2019s applicants automatically assessed; notification via email"
    }
  ],
  "internships": {
    "part_time_work": "Placement Rate: 86% for MSc Management; 94% for UG Computing with placements; 96%+ PG employment/further study within 6 months",
    "coop_available": true,
    "employment_rate_percent": 86
  },
  "campus_life": {
    "clubs": "Student Societies: Multiple clubs & societies (exact count not specified); Indian student community present",
    "housing": "Accommodation: 53 on-campus apartments with ensuite study bedrooms, laundry, Wi-Fi"
  },
  "security": {
    "detail": "Campus Security: Located in professional business district near global company headquarters"
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

addPrograms(univ_nationalcollegeofireland, "NATIONAL COLLEGE OF IRELAND", [
  {
    "level": "UG",
    "name": "BSc (Hons) Computing",
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
    "name": "BA (Hons) Business Studies / Business Management",
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
    "name": "BSc (Hons) Technology Management",
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
    "name": "BA (Hons) Accounting & Finance",
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
    "name": "BA (Hons) Human Resource Management",
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
    "name": "MBA (Master of Business Administration)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cybersecurity",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cloud Computing / MSc Fintech / MSc Artificial Intelligence",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Computing (4 years)",
    "faculty": "School of Computing",
    "duration_years": 3.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 67500,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject requirement",
      "mathematics/computing aptitude beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Mobile App Developer",
      "IT Support",
      "Project Engineer",
      "Security Analyst",
      "Cloud Developer",
      "Games Programmer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Business Studies / Business Management (3 years)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject stream required"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Trainee",
      "Operations Manager",
      "Sales Manager",
      "Human Resources Officer",
      "Marketing Executive"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Technology Management (4 years)",
    "faculty": "School of Computing",
    "duration_years": 3.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 67500,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement",
      "mathematics/technology background beneficial"
    ],
    "entry_roles": [
      "IT Project Manager",
      "Technology Consultant",
      "Systems Administrator",
      "Business Systems Analyst",
      "IT Manager",
      "Digital Transformation Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Accounting & Finance (3 years)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement",
      "mathematics background helpful"
    ],
    "entry_roles": [
      "Junior Accountant",
      "Financial Analyst",
      "Tax Officer",
      "Audit Assistant",
      "Finance Manager",
      "Bookkeeper"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Human Resource Management (3 years)",
    "faculty": "School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "HR Officer",
      "Recruitment Consultant",
      "Training & Development Officer",
      "Employee Relations Manager",
      "Payroll Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA \u2013 Master of Business Administration (1 year full-time / 2 years part-time)",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 33000,
    "total_fee_cad": 33000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Director",
      "Business Consultant",
      "Strategy Manager",
      "Operations Director",
      "General Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Analytics (1 year full-time / 2 years part-time)",
    "faculty": "School of Computing",
    "duration_years": 1.0,
    "annual_fee_cad": 25500,
    "total_fee_cad": 25500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Demonstrated technical or mathematical problem-solving skills required",
      "programming experience mandatory"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Developer",
      "Analytics Consultant",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cybersecurity (1 year full-time)",
    "faculty": "School of Computing",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming ability demonstrated through transcripts",
      "certifications",
      "or work experience"
    ],
    "entry_roles": [
      "Information Security Analyst",
      "Cybersecurity Engineer",
      "Risk Analyst",
      "Incident Responder",
      "Cloud Security Analyst",
      "Security Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management (1 year full-time)",
    "faculty": "School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 25500,
    "total_fee_cad": 25500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Operations Manager",
      "Management Consultant",
      "Project Manager",
      "Business Manager",
      "Strategic Manager",
      "HR Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cloud Computing (1 year full-time)",
    "faculty": "School of Computing",
    "duration_years": 1.0,
    "annual_fee_cad": 26250,
    "total_fee_cad": 26250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Demonstrated through transcripts or certifications"
    ],
    "entry_roles": [
      "Cloud Architect",
      "Cloud Developer",
      "DevOps Engineer",
      "Cloud Security Engineer",
      "Solutions Architect",
      "Infrastructure Engineer"
    ],
    "features": []
  }
]);

// --- NCAD DUBLIN ---
const univ_ncaddublin = db.institutions.insertOne(inst({
  "name": "NCAD DUBLIN",
  "abbreviation": "NATIONAL COLLEGE OF ART AND DESIGN",
  "type": "university",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.ncad.ie/study-at-ncad/international/",
  "application_portal": "CAO or direct application through NCAD website",
  "contacts": {
    "admissions": {
      "email": "grants@ncad.ie",
      "phone": "Available through official website"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 82,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Government of Ireland International Education Scholarship (GOI-IES): 60 scholarships annually for NFQ levels 9-10 (MA, MRes, PhD)"
    },
    {
      "name": "MSc Medical Device Design Scholarship: \u20ac2,500 towards non-EU tuition for applicants normally resident in China"
    },
    {
      "name": "Sanctuary Scholarship: Covers fees (tuition, registration); stipend towards food, travel, medical; one-to-one support from Access Office; for International Protection applicants, refugees, Irish Traveller and Roma communities"
    }
  ],
  "internships": {
    "part_time_work": "Visual Culture Plus Internships: Trimester-long placements with arts organizations, museums, galleries, design companies",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Private rental options available through Daft.ie, Student House, NCAD SU Accommodation Network"
  },
  "security": {
    "detail": "8. Campus Security"
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

addPrograms(univ_ncaddublin, "NCAD DUBLIN", [
  {
    "level": "UG",
    "name": "BA (Hons) Graphic Design (Communication Design)",
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
    "name": "BA (Hons) Illustration (Communication Design)",
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
    "name": "BA (Hons) Fashion Design (Design for Body & Environment)",
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
    "name": "BA (Hons) Fine Art",
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
    "name": "BA (Hons) Interaction Design (Product Design)",
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
    "name": "MA Communication Design",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Design for Body & Environment (Fashion, Textiles, Jewellery)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Interaction Design",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MFA Fine Art",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Art in the Contemporary World",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) in Graphic Design",
    "faculty": "Department of Communication Design, School of Design",
    "duration_years": 3.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 65,
    "required_subjects": [
      "Strong portfolio demonstrating design ability",
      "no specific subject stream required"
    ],
    "entry_roles": [
      "Graphic Designer",
      "UX Designer",
      "Art Director",
      "Brand Designer",
      "Web Designer",
      "Digital Designer",
      "Packaging Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) in Illustration",
    "faculty": "Department of Communication Design, School of Design",
    "duration_years": 3.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 65,
    "required_subjects": [
      "Strong portfolio demonstrating illustration/visual narrative skills"
    ],
    "entry_roles": [
      "Editorial Illustrator",
      "Children\u2019s Book Illustrator",
      "Concept Artist",
      "Digital Illustrator",
      "Design Illustrator",
      "Animation Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) in Fashion Design",
    "faculty": "Department of Design for Body & Environment, School of Design",
    "duration_years": 3.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 65,
    "required_subjects": [
      "Strong portfolio demonstrating design ideas",
      "sketches",
      "fashion concept development"
    ],
    "entry_roles": [
      "Fashion Designer",
      "Pattern Maker",
      "Textile Designer",
      "Design Assistant",
      "Collection Developer",
      "Costume Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Fine Art",
    "faculty": "School of Fine Art",
    "duration_years": 3.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 65,
    "required_subjects": [
      "Portfolio demonstrating artistic practice (painting, sculpture, print, media)"
    ],
    "entry_roles": [
      "Fine Artist",
      "Sculptor",
      "Painter",
      "Printmaker",
      "Media Artist",
      "Gallery Assistant",
      "Art Educator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) in Interaction Design",
    "faculty": "Department of Product Design, School of Design",
    "duration_years": 3.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 74250,
    "min_class12_percent": 65,
    "required_subjects": [
      "Portfolio demonstrating interest in digital design",
      "UX/UI",
      "human-computer interaction concepts"
    ],
    "entry_roles": [
      "UX Designer",
      "UI Designer",
      "Experience Designer",
      "Digital Product Designer",
      "Interaction Designer",
      "Service Designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Communication Design",
    "faculty": "Department of Communication Design, School of Design",
    "duration_years": 2.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 49500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Graphic design",
      "communication design",
      "visual communication"
    ],
    "entry_roles": [
      "Senior Graphic Designer",
      "Creative Director",
      "Brand Designer",
      "Design Consultant",
      "Art Director",
      "Branding Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Design for Body & Environment",
    "faculty": "Department of Design for Body & Environment, School of Design",
    "duration_years": 2.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 49500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Fashion Design",
      "Textile Art",
      "Product Design",
      "related discipline"
    ],
    "entry_roles": [
      "Fashion Designer",
      "Senior Designer",
      "Textile Designer",
      "Jewellery Designer",
      "Brand Designer",
      "Fashion Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Interaction Design",
    "faculty": "Department of Product Design, School of Design",
    "duration_years": 1.0,
    "annual_fee_cad": 22065,
    "total_fee_cad": 22065,
    "min_class12_percent": 60,
    "required_subjects": [
      "Interaction Design",
      "UX/UI Design",
      "Product Design",
      "Digital Design"
    ],
    "entry_roles": [
      "Senior UX Designer",
      "Product Designer",
      "Experience Designer",
      "Digital Strategy Designer",
      "Service Designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MFA Fine Art",
    "faculty": "School of Fine Art",
    "duration_years": 2.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 49500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Fine Art",
      "Visual Arts",
      "Art History",
      "related creative discipline"
    ],
    "entry_roles": [
      "Fine Artist",
      "Contemporary Artist",
      "Gallery Curator",
      "Art Educator",
      "Museum Professional",
      "Artist-in-Residence"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Art in the Contemporary World",
    "faculty": "Faculty of Arts / Visual Culture",
    "duration_years": 2.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 49500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Art History",
      "Visual Culture",
      "Contemporary Art",
      "Cultural Studies",
      "related field"
    ],
    "entry_roles": [
      "Art Critic",
      "Curator",
      "Gallery Director",
      "Cultural Strategist",
      "Arts Manager",
      "Research Associate"
    ],
    "features": []
  }
]);

// --- ROYAL COLLEGE OF SURGEONS IN IRELAND ---
const univ_royalcollegeofsurgeonsinireland = db.institutions.insertOne(inst({
  "name": "ROYAL COLLEGE OF SURGEONS IN IRELAND",
  "abbreviation": "RCSI",
  "type": "college",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.rcsi.com",
  "application_portal": "Online via RCSI Application Portal (https://www.rcsi.com/dublin/)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International Consilio Manuque Medicine Scholarship (UG Medicine): EUR 25,000 total across programme (application + interview required)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + EUR 10,000 annual stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "1916 Bursary: EUR 2,000\u2013\u20ac5,000 per annum (disadvantaged backgrounds)"
    }
  ],
  "internships": {
    "part_time_work": "Internship: Yes \u2013 integrated clinical training; 4-week sub-internship in final year (Ireland/US/Canada options)",
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "clubs": "Student Societies: Professional healthcare societies, cultural clubs, sports clubs",
    "housing": "Accommodation: RCSI-affiliated accommodation (on/near campus; high demand \u2013 apply early)"
  },
  "security": {
    "detail": "24/7 Campus Security: Security presence in main building; access control systems"
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

addPrograms(univ_royalcollegeofsurgeonsinireland, "ROYAL COLLEGE OF SURGEONS IN IRELAND", [
  {
    "level": "UG",
    "name": "MB BCh BAO (Hons) Medicine (5-year / 6-year)",
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
    "name": "Bachelor of Dental Surgery (BDS) (5 years)",
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
    "name": "Bachelor of Science (Hons) in Pharmacy (4 years)",
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
    "name": "Bachelor of Science (Hons) in Physiotherapy (3\u20134 years)",
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
    "name": "BSc (Hons) Advanced Therapeutic Technologies (4 years)",
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
    "name": "MSc in Global Health",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Healthcare Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MCh (Master of Surgery) \u2013 Research pathway",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MD (Medical Doctorate) \u2013 Research pathway",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Physician Associate Studies (taught)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "MB BCh BAO (Hons) Medicine (5-year / 6-year)",
    "faculty": "School of Medicine",
    "duration_years": 3.0,
    "annual_fee_cad": 7500,
    "total_fee_cad": 22500,
    "min_class12_percent": 90,
    "required_subjects": [
      "Chemistry",
      "Biology",
      "Physics",
      "or Mathematics (75% minimum)"
    ],
    "entry_roles": [
      "Junior Doctor",
      "Medical Officer",
      "Hospital Doctor",
      "General Practitioner (after registration & postgraduate training)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Dental Surgery (BDS) (5 years)",
    "faculty": "School of Dentistry",
    "duration_years": 3.0,
    "annual_fee_cad": 75000,
    "total_fee_cad": 225000,
    "min_class12_percent": 80,
    "required_subjects": [
      "Chemistry & Biology (75% minimum)",
      "Physics/Mathematics beneficial"
    ],
    "entry_roles": [
      "Dental Surgeon",
      "General Dentist",
      "Primary Care Dentist",
      "Dental Consultant",
      "Specialist Practitioner (after further training)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) in Pharmacy (4 years)",
    "faculty": "School of Pharmacy",
    "duration_years": 3.0,
    "annual_fee_cad": 202,
    "total_fee_cad": 606,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry & Biology (70% minimum)"
    ],
    "entry_roles": [
      "Pharmacist",
      "Hospital Pharmacist",
      "Community Pharmacist",
      "Clinical Pharmacist",
      "Pharmaceutical Scientist",
      "Medication Safety Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) in Physiotherapy (3\u20134 years)",
    "faculty": "School of Physiotherapy",
    "duration_years": 3.0,
    "annual_fee_cad": 32152,
    "total_fee_cad": 96456,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology & Chemistry (70% minimum)"
    ],
    "entry_roles": [
      "Physiotherapist",
      "Musculoskeletal Therapist",
      "Sports Therapist",
      "Clinical Physiotherapist",
      "Rehabilitation Specialist",
      "Wellness Coach"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Advanced Therapeutic Technologies (4 years)",
    "faculty": "School of Science & Engineering / Pharmacy",
    "duration_years": 3.0,
    "annual_fee_cad": 30000,
    "total_fee_cad": 90000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry",
      "Physics",
      "Biology",
      "or Mathematics (70% minimum)"
    ],
    "entry_roles": [
      "Pharmaceutical Scientist",
      "Therapeutic Scientist",
      "Research & Development Officer",
      "Quality Assurance Specialist",
      "Regulatory Affairs Officer",
      "Biotech Engineer",
      "Medical Device Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Global Health (1\u20132 years)",
    "faculty": "Graduate School of Health Sciences / School of Medicine",
    "duration_years": 1.0,
    "annual_fee_cad": 42000,
    "total_fee_cad": 42000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Healthcare",
      "public health",
      "social science",
      "development background beneficial (non-cognate welcome)"
    ],
    "entry_roles": [
      "Global Health Specialist",
      "Public Health Officer",
      "Health Policy Analyst",
      "Development Worker",
      "International Health Consultant",
      "NGO Programme Manager",
      "WHO/UN Health Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Healthcare Management (1\u20132 years)",
    "faculty": "Graduate School of Healthcare Management",
    "duration_years": 1.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 21750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Healthcare/management experience beneficial",
      "no prior healthcare degree required"
    ],
    "entry_roles": [
      "Healthcare Manager",
      "Clinical Manager",
      "Operations Manager",
      "Quality Manager",
      "Health Planner",
      "Policy Adviser",
      "Hospital Administrator",
      "Strategic Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MCh (Master of Surgery) \u2013 Research Track (2\u20133 years)",
    "faculty": "School of Medicine / Surgical Training Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 48000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Medical/surgical training background required",
      "clinical experience mandatory"
    ],
    "entry_roles": [
      "Consultant Surgeon",
      "Surgical Specialist",
      "Academic Surgeon",
      "Surgery Trainer",
      "Surgical Researcher",
      "Surgical Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MD (Medical Doctorate) \u2013 Research Track (2\u20134 years)",
    "faculty": "School of Medicine / StAR (Structured Training in Academic Research) Programme",
    "duration_years": 1.0,
    "annual_fee_cad": 48000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Medical/biomedical research background",
      "publication record beneficial"
    ],
    "entry_roles": [
      "Medical Researcher",
      "Academic Doctor",
      "Clinician-Scientist",
      "Research Leader",
      "Principal Investigator",
      "Pharmaceutical Researcher",
      "Biomedical Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Physician Associate Studies (taught postgraduate) (1\u20132 years)",
    "faculty": "Graduate Business School / School of Medicine",
    "duration_years": 1.0,
    "annual_fee_cad": 67,
    "total_fee_cad": 67,
    "min_class12_percent": 60,
    "required_subjects": [
      "Healthcare or science background",
      "clinical/healthcare experience beneficial"
    ],
    "entry_roles": [
      "Physician Associate",
      "Clinical Associate",
      "Hospital-Based PA",
      "Primary Care PA",
      "Acute Care Provider",
      "Surgical Assistant",
      "Diagnostic Provider"
    ],
    "features": []
  }
]);

// --- SHANNON COLLEGE OF HOTEL MANAGEMENT ---
const univ_shannoncollegeofhotelmanagement = db.institutions.insertOne(inst({
  "name": "SHANNON COLLEGE OF HOTEL MANAGEMENT",
  "abbreviation": "",
  "type": "college",
  "city": "Shannon",
  "province": "Munster",
  "country": "Ireland",
  "campuses": [
    "Shannon"
  ],
  "website": "https://www.universityofgalway.ie",
  "application_portal": "Direct online application (no CAO required) | https://www.universityofgalway.ie/shannoncollege/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Shannon College International Scholarship: EUR 1,000 (all non-EU students; conditional offer required)"
    },
    {
      "name": "Region-Based (India) IDEA Scholarship: 15% off tuition per year (limited places; refer through IDEA Philadelphia)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + EUR 10,000 annual stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "Faculty-Specific Awards: Varied amounts based on program"
    }
  ],
  "internships": {
    "part_time_work": "Placement Partners: 130+ hotels across 17 countries (Europe, Middle East, Australia)",
    "coop_available": true,
    "employment_rate_percent": 100
  },
  "campus_life": {
    "clubs": "Events: Welcome week, industry networking, cultural activities, hospitality seminars",
    "housing": "Campus Facilities: Modern classrooms, dining facilities, student accommodation (on/near campus), library, study spaces"
  },
  "security": {
    "detail": "Campus Security: On-campus security presence; rural, safe location"
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

addPrograms(univ_shannoncollegeofhotelmanagement, "SHANNON COLLEGE OF HOTEL MANAGEMENT", [
  {
    "level": "UG",
    "name": "Bachelor of Business Studies (BBS) in International Hotel Management",
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
    "name": "Bachelor of Commerce (BComm) in International Hotel Management",
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
    "name": "International Foundation Business Programme (Level 6; 1-year pathway)",
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
    "name": "BA Hospitality Management (specialized stream)",
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
    "name": "BSc Hotel Operations & Management (specialized programme)",
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
    "name": "MSc Global Hospitality Management & Intercultural Communication",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business & Hospitality",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Hospitality Performance, Revenue & Asset Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (with hospitality focus) \u2013 Research-based",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Sustainable Hospitality Leadership (emerging programme)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Studies (BBS) in International Hotel Management (4 years)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement",
      "business/hospitality interest beneficial"
    ],
    "entry_roles": [
      "Hotel Manager",
      "General Manager",
      "Guest Services Director",
      "Revenue Manager",
      "Operations Manager",
      "Food & Beverage Manager",
      "Front Office Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (BComm) in International Hotel Management (4 years)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Hotel General Manager",
      "Finance Manager",
      "Marketing Manager",
      "Human Resources Director",
      "Business Analyst",
      "Operations Manager",
      "Revenue Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Foundation Business Programme (Level 6; 1 year)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Pathway to BBS/BComm (progression to Level 8)",
      "Hotel Supervisor",
      "Administrative Officer",
      "Front Desk Supervisor (if seeking immediate employment)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Hospitality Management (specialized stream) (3\u20134 years)",
    "faculty": "Shannon College of Hotel Management",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Hospitality Manager",
      "Events Manager",
      "Banqueting Manager",
      "Guest Experience Manager",
      "Housekeeping Manager",
      "Facility Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Hotel Operations & Management (specialized programme) (4 years)",
    "faculty": "Shannon College of Hotel Management",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 80,
    "required_subjects": [
      "No specific requirement",
      "operations/logistics interest beneficial"
    ],
    "entry_roles": [
      "Operations Manager",
      "Facilities Manager",
      "Supply Chain Manager",
      "Quality Manager",
      "Process Improvement Officer",
      "Hotel Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Global Hospitality Management & Intercultural Communication (1 year full-time)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 1.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 21750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline (hospitality/business experience beneficial but not required)"
    ],
    "entry_roles": [
      "International Hotel Manager",
      "Global Operations Director",
      "Hospitality Consultant",
      "Cultural Intelligence Officer",
      "International Business Manager",
      "Hospitality Strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business & Hospitality (1 year full-time)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 1.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 21750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business/hospitality background preferred",
      "conversions welcome"
    ],
    "entry_roles": [
      "Business Manager",
      "Consultant",
      "Strategy Manager",
      "Financial Manager",
      "Entrepreneurship Specialist",
      "Corporate Trainer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Hospitality Performance, Revenue & Asset Management (1 year full-time)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 1.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 21750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Hospitality/business background beneficial",
      "all disciplines eligible"
    ],
    "entry_roles": [
      "Revenue Manager",
      "Hospitality Director",
      "Asset Manager",
      "Financial Director",
      "Performance Manager",
      "Yield Management Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (with hospitality focus) (1\u20132 years)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 1.0,
    "annual_fee_cad": 30000,
    "total_fee_cad": 30000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Executive Manager",
      "C-Suite Executive",
      "Strategic Director",
      "Business Owner",
      "Hospitality Entrepreneur",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Sustainable Hospitality Leadership (emerging programme; 1 year full-time)",
    "faculty": "Shannon College of Hotel Management (affiliated with University of Galway)",
    "duration_years": 1.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 22500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Environmental science",
      "business",
      "hospitality",
      "or social science backgrounds eligible"
    ],
    "entry_roles": [
      "Sustainability Manager",
      "ESG Director",
      "Green Hospitality Manager",
      "Environmental Consultant",
      "Corporate Responsibility Officer",
      "Sustainability Strategist"
    ],
    "features": []
  }
]);

// --- SOUTH EAST TECHNOLOGICAL UNIVERSITY ---
const univ_southeasttechnologicaluniversity = db.institutions.insertOne(inst({
  "name": "SOUTH EAST TECHNOLOGICAL UNIVERSITY",
  "abbreviation": "SETU",
  "type": "university",
  "city": "Waterford",
  "province": "Munster",
  "country": "Ireland",
  "campuses": [
    "Waterford"
  ],
  "website": "https://www.setu.ie",
  "application_portal": "Online application through SETU website",
  "contacts": {
    "admissions": {
      "email": "info@setu.ie",
      "phone": "+353 818 121212"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Entry Awards: 7%-30% tuition fee discount; \u20ac3,000\u2013\u20ac5,000 range; automatic consideration upon offer receipt"
    },
    {
      "name": "Eligibility: Full-time on-campus students only; must maintain 60% average to retain"
    },
    {
      "name": "Exclusivity: Cannot be combined with other tuition scholarships"
    }
  ],
  "internships": {
    "part_time_work": "Graduate Internship Programme for post-completion",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Societies: 80+ sports clubs and societies across campuses",
    "housing": "Student accommodation: \u20ac450\u2013\u20ac650/month (varies by location)"
  },
  "security": {
    "detail": "Emergency response protocols and evacuation procedures"
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

addPrograms(univ_southeasttechnologicaluniversity, "SOUTH EAST TECHNOLOGICAL UNIVERSITY", [
  {
    "level": "UG",
    "name": "BSc (Hons) in Computer Science (Common Entry)",
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
    "name": "BEng (Hons) in Aerospace Engineering",
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
    "name": "BEng in Civil Engineering",
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
    "name": "Bachelor of Business (Honours)",
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
    "name": "BEng in Mechanical Engineering",
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
    "name": "MSc in Applied Artificial Intelligence",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Cybersecurity, Privacy and Trust",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Industrial Networks and Cybersecurity",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business in Finance and Business Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MEng/Research-Based Master of Engineering",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) in Computer Science (Common Entry)",
    "faculty": "School of Computing (Waterford campus)",
    "duration_years": 4.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 87000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics O3/H7 minimum",
      "2 subjects H5",
      "4 subjects O6/H7"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Analyst",
      "Systems Administrator",
      "Cloud Infrastructure Engineer",
      "Database Developer",
      "Software Developer",
      "AI/ML Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng (Hons) in Aerospace Engineering",
    "faculty": "School of Engineering (Carlow campus)",
    "duration_years": 4.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 87000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics O6/H7 minimum",
      "2 subjects H5",
      "4 subjects O6/H7",
      "Physics/Science preferred"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Design Engineer",
      "Aircraft Systems Engineer",
      "Flight Test Engineer",
      "Aerodynamics Specialist",
      "Avionics Engineer",
      "Aircraft Maintenance Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng in Civil Engineering",
    "faculty": "School of Engineering (Waterford campus)",
    "duration_years": 3.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 65250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics O6/H7 minimum",
      "2 subjects H5",
      "4 subjects O6/H7"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Site Engineer",
      "Project Engineer",
      "Structural Designer",
      "Construction Manager",
      "Highways Engineer",
      "Environmental Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (Honours)",
    "faculty": "School of Business (Waterford & Carlow)",
    "duration_years": 4.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 87000,
    "min_class12_percent": 60,
    "required_subjects": [
      "General education (English, Mathematics beneficial)"
    ],
    "entry_roles": [
      "Business Analyst",
      "Marketing Executive",
      "Financial Analyst",
      "Operations Manager",
      "Human Resources Manager",
      "Management Consultant",
      "Supply Chain Analyst",
      "Data Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng in Mechanical Engineering",
    "faculty": "School of Engineering (Carlow & Waterford)",
    "duration_years": 3.0,
    "annual_fee_cad": 21750,
    "total_fee_cad": 65250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics O6/H7 minimum",
      "Physics/Science preferred",
      "2 subjects H5",
      "4 subjects O6/H7"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Product Engineer",
      "Automation Engineer",
      "CAD Specialist",
      "Project Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Applied Artificial Intelligence",
    "faculty": "School of Computing (Carlow campus)",
    "duration_years": 1.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 22500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "IT",
      "Data Science",
      "Engineering with programming focus"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Specialist",
      "AI Researcher",
      "Solution Architect",
      "Deep Learning Engineer",
      "Computer Vision Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Cybersecurity, Privacy and Trust",
    "faculty": "School of Computing (Carlow campus)",
    "duration_years": 1.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 22500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "IT",
      "Cybersecurity",
      "or related field"
    ],
    "entry_roles": [
      "Security Analyst",
      "Security Engineer",
      "Penetration Tester",
      "Security Manager",
      "Information Security Officer",
      "CISO",
      "Incident Responder"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Industrial Networks and Cybersecurity",
    "faculty": "School of Engineering (Carlow campus)",
    "duration_years": 1.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 22500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering disciplines (Electronics, Electrical, Mechatronics, Computer Engineering)"
    ],
    "entry_roles": [
      "Security Architect",
      "Penetration Tester",
      "Network Engineer",
      "CISO",
      "Security Engineer",
      "Security Auditor",
      "Information Security Forensics Expert",
      "Vulnerability Assessor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business in Finance and Business Analytics",
    "faculty": "School of Business (Waterford & Carlow)",
    "duration_years": 1.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 21000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Finance",
      "Economics",
      "IT",
      "Engineering preferred but not required"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Financial Analyst",
      "Business Intelligence Manager",
      "Finance Manager",
      "Management Consultant",
      "Risk Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MEng/Master of Engineering (Research-Based)",
    "faculty": "School of Engineering (Carlow & Waterford)",
    "duration_years": 2.0,
    "annual_fee_cad": 21000,
    "total_fee_cad": 42000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Aerospace",
      "Electronic",
      "or related engineering field"
    ],
    "entry_roles": [
      "Project Engineer",
      "Engineering Manager",
      "Research Engineer",
      "Design Engineer",
      "Consulting Engineer",
      "PhD pathway"
    ],
    "features": []
  }
]);

// --- TECHNOLOGICAL UNIVERSITY SHANNON ---
const univ_technologicaluniversityshannon = db.institutions.insertOne(inst({
  "name": "TECHNOLOGICAL UNIVERSITY SHANNON",
  "abbreviation": "",
  "type": "university",
  "city": "Athlone",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Athlone"
  ],
  "website": "https://tus.ie/global/",
  "application_portal": "Online through https://tus.ie/",
  "contacts": {
    "admissions": {
      "email": "global@tus.ie or international@tus.ie"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit-based Academic Scholarship (Undergraduate): Up to \u20ac3,000 (GPA-based)"
    },
    {
      "name": "Merit-based Academic Scholarship (Postgraduate): Up to \u20ac4,000 (GPA-based)"
    },
    {
      "name": "Alumni Scholarship: \u20ac3,000\u2013\u20ac4,000"
    },
    {
      "name": "Sibling/Family Member Scholarship: \u20ac1,000"
    },
    {
      "name": "TUS Global Scholarship: Up to \u20ac3,000"
    },
    {
      "name": "Homecoming Scholarship: \u20ac5,000"
    },
    {
      "name": "Nursing Scholarship: \u20ac6,000"
    },
    {
      "name": "Foundation Scholarship: \u20ac1,000\u2013\u20ac2,000 (GPA-based)"
    }
  ],
  "internships": {
    "part_time_work": "Work placement coordination with employers",
    "coop_available": true,
    "employment_rate_percent": 81
  },
  "campus_life": {
    "clubs": "Student Clubs & Societies: 100+ clubs and societies",
    "housing": "Accommodation assistance"
  },
  "security": {
    "detail": "24/7 emergency response services"
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

addPrograms(univ_technologicaluniversityshannon, "TECHNOLOGICAL UNIVERSITY SHANNON", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computing (Common Entry)",
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
    "name": "Bachelor of Engineering (Honours) - Common Entry (Civil, Mechanical, Electrical & Electronic)",
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
    "name": "Bachelor of Science in Software Development with Specializations",
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
    "name": "Bachelor of Business (Honours)",
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
    "name": "BEng Mechanical Engineering",
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
    "name": "Master of Science in Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Software Engineering (Cloud Native Computing, Cyber Security, AI)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied Artificial Intelligence for Business",
    "faculty": "",
    "duration_years": 1.0,
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
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering (Mechanical & Autonomous Vehicles)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computing (Common Entry)",
    "faculty": "School of Computing and Digital Transformation (Athlone & Limerick)",
    "duration_years": 4.0,
    "annual_fee_cad": 20250,
    "total_fee_cad": 81000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Minimum 2 H5 & 4 O6/H7 grades in six subjects",
      "Mathematics",
      "English/Irish required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Analyst",
      "Cloud Engineer",
      "Software Developer",
      "Systems Administrator",
      "AI/ML Engineer",
      "Data Science Professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) (Common Entry)",
    "faculty": "School of Engineering (Athlone & Limerick)",
    "duration_years": 4.0,
    "annual_fee_cad": 20250,
    "total_fee_cad": 81000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Minimum 2 H5 & 4 O6/H7",
      "English/Irish O6 or H7",
      "Mathematics H4 or higher"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Project Manager",
      "Design Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Software Development",
    "faculty": "School of Computing and Digital Transformation",
    "duration_years": 4.0,
    "annual_fee_cad": 20250,
    "total_fee_cad": 81000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Minimum 2 H5 & 4 O6/H7",
      "Mathematics",
      "English/Irish required"
    ],
    "entry_roles": [
      "Software Developer",
      "Application Developer",
      "Web Developer",
      "Full-Stack Developer",
      "DevOps Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business (Honours)",
    "faculty": "School of Business (Athlone & Limerick)",
    "duration_years": 4.0,
    "annual_fee_cad": 20250,
    "total_fee_cad": 81000,
    "min_class12_percent": 60,
    "required_subjects": [
      "General education",
      "Minimum 2 H5 & 4 O6/H7",
      "Mathematics",
      "English/Irish beneficial"
    ],
    "entry_roles": [
      "Business Analyst",
      "Marketing Executive",
      "Financial Analyst",
      "HR Manager",
      "Operations Manager",
      "Management Consultant",
      "Accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) in Mechanical Engineering",
    "faculty": "School of Engineering (Athlone & Limerick)",
    "duration_years": 4.0,
    "annual_fee_cad": 20250,
    "total_fee_cad": 81000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Minimum 2 H5 & 4 O6/H7",
      "Mathematics H4 or higher",
      "Physics/Science preferred"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Automation Engineer",
      "CAD Specialist",
      "Energy Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Analytics",
    "faculty": "School of Computing (Athlone & Limerick)",
    "duration_years": 1.0,
    "annual_fee_cad": 26250,
    "total_fee_cad": 26250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong numeracy skills",
      "technical background preferred"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Analytics Engineer",
      "Business Intelligence Analyst",
      "Machine Learning Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Software Engineering",
    "faculty": "School of Computing (Athlone & Limerick)",
    "duration_years": 1.0,
    "annual_fee_cad": 26250,
    "total_fee_cad": 26250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Software Engineering",
      "Computer Science",
      "or cognate IT field"
    ],
    "entry_roles": [
      "Software Engineer",
      "Cloud Architect",
      "Security Engineer",
      "AI Engineer",
      "Full-Stack Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied Artificial Intelligence for Business",
    "faculty": "School of Business & School of Computing (Athlone & Limerick)",
    "duration_years": 1.0,
    "annual_fee_cad": 26250,
    "total_fee_cad": 26250,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline eligible",
      "business or technical background beneficial"
    ],
    "entry_roles": [
      "AI Business Analyst",
      "Machine Learning Engineer",
      "AI Solutions Architect",
      "Business Intelligence Manager",
      "AI Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "School of Business (Athlone & Limerick)",
    "duration_years": 2.0,
    "annual_fee_cad": 30750,
    "total_fee_cad": 61500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any field eligible",
      "work experience beneficial"
    ],
    "entry_roles": [
      "General Manager",
      "Business Director",
      "Entrepreneur",
      "Strategy Manager",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering",
    "faculty": "School of Engineering (Athlone & Limerick)",
    "duration_years": 2.0,
    "annual_fee_cad": 24750,
    "total_fee_cad": 49500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical & Electronic",
      "or related engineering discipline"
    ],
    "entry_roles": [
      "Project Engineer",
      "Engineering Manager",
      "Research Engineer",
      "Design Engineer",
      "Consulting Engineer"
    ],
    "features": []
  }
]);

// --- TRINITY COLLEGE DUBLIN ---
const univ_trinitycollegedublin = db.institutions.insertOne(inst({
  "name": "TRINITY COLLEGE DUBLIN",
  "abbreviation": "",
  "type": "college",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.tcd.ie",
  "application_portal": "My TCD (online only; no hard copy documents required)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 82,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Global Excellence UG Scholarship: \u20ac3,000-\u20ac5,000 (eligibility: 90% in Class 12)"
    },
    {
      "name": "STEM UG Scholarship: \u20ac36,000 total (\u20ac9,000/year for 4 years)"
    },
    {
      "name": "Global Excellence PG Scholarship: \u20ac2,000-\u20ac5,000 (merit-based for non-EU students)"
    },
    {
      "name": "Total Pool: ~\u20ac68 crore for international students"
    },
    {
      "name": "Application Deadlines: June 15, 2026 (varies; check scholarship pages)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 Trinity Summer Internship Programme, 6-12 weeks, \u20ac500-\u20ac800/week; 80% of programs offer placements",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports Clubs: 50+ (archery, rugby, rowing, cricket, climbing, yoga, etc.)"
  },
  "security": {
    "detail": "Security Services: Mobile & foot patrols, CCTV monitoring, alarm systems, emergency response, special events support"
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

addPrograms(univ_trinitycollegedublin, "TRINITY COLLEGE DUBLIN", [
  {
    "level": "UG",
    "name": "Computer Science",
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
    "name": "Business Studies",
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
    "name": "Engineering (Electronics/Computer Engineering)",
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
    "name": "Law",
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
    "name": "Pharmacy & Health Sciences",
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
    "name": "MSc Finance",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Master in Business Administration)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science (Data Science specialization)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics & AI for Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (B.A. Moderatorship Honours / M.C.S. - 4 or 5 years)",
    "faculty": "School of Computer Science & Statistics (oldest computer science department in Ireland; 60+ faculty; 300+ PG students)",
    "duration_years": 3.0,
    "annual_fee_cad": 43350,
    "total_fee_cad": 130050,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics (75% minimum)"
    ],
    "entry_roles": [
      "Software Developer",
      "Data Analyst",
      "Systems Engineer",
      "Frontend/Backend Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Studies / Global Business (B.A. Moderatorship Honours - 4 years)",
    "faculty": "Trinity Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 33105,
    "total_fee_cad": 99315,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific subject requirement"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Account Executive",
      "Operations Manager",
      "Financial Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (Electronics, Computer Engineering - 5 years)",
    "faculty": "School of Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 43350,
    "total_fee_cad": 130050,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics (75% minimum)",
      "Physics (75% minimum)"
    ],
    "entry_roles": [
      "Hardware Engineer",
      "Software Engineer",
      "Circuit Design Engineer",
      "Embedded Systems Engineer",
      "Automation Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (B.A. Moderatorship Honours - 4 years)",
    "faculty": "School of Law",
    "duration_years": 3.0,
    "annual_fee_cad": 33105,
    "total_fee_cad": 99315,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific subject required"
    ],
    "entry_roles": [
      "Junior Solicitor",
      "Legal Executive",
      "Compliance Officer",
      "Corporate Lawyer",
      "International Law Advisor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Pharmacy (B.Sc. in Pharmacy - 4 years)",
    "faculty": "School of Pharmacy and Pharmaceutical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 37335,
    "total_fee_cad": 112005,
    "min_class12_percent": 85,
    "required_subjects": [
      "Chemistry (75% minimum)",
      "Biology (75% minimum)"
    ],
    "entry_roles": [
      "Registered Pharmacist",
      "Hospital Pharmacist",
      "Industrial Pharmacist",
      "Pharmaceutical Sales Representative",
      "Regulatory Affairs Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance (1 year, full-time)",
    "faculty": "Trinity Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 40950,
    "total_fee_cad": 40950,
    "min_class12_percent": 60,
    "required_subjects": [
      "Quantitative subjects preferred (economics, mathematics, accounting)"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Risk Manager",
      "Financial Controller",
      "Capital Markets Analyst",
      "Private Equity Analyst",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA / Master in Business Administration (1 year full-time / 2 years part-time)",
    "faculty": "Trinity Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 55950,
    "total_fee_cad": 55950,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Strategy Consultant",
      "Product Manager",
      "Operations Director",
      "Business Development Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science - Data Science (1 year, full-time)",
    "faculty": "School of Computer Science & Statistics",
    "duration_years": 1.0,
    "annual_fee_cad": 41685,
    "total_fee_cad": 41685,
    "min_class12_percent": 60,
    "required_subjects": [
      "Upper second-class (2.1) honors or equivalent"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Developer",
      "Research Scientist",
      "Software Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics & AI for Management (1 year, full-time)",
    "faculty": "Trinity Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 35925,
    "total_fee_cad": 35925,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Business Analyst",
      "Analytics Manager",
      "Data-Driven Decision Maker",
      "AI Strategy Consultant",
      "Product Analyst",
      "Insights Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Management (1 year, full-time)",
    "faculty": "Trinity Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 36750,
    "total_fee_cad": 36750,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "International Manager",
      "Global Operations Manager",
      "Cross-Cultural Manager",
      "International Business Consultant",
      "Export/Import Manager",
      "Global HR Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY COLLEGE CORK ---
const univ_universitycollegecork = db.institutions.insertOne(inst({
  "name": "UNIVERSITY COLLEGE CORK",
  "abbreviation": "",
  "type": "university",
  "city": "Cork",
  "province": "Munster",
  "country": "Ireland",
  "campuses": [
    "Cork"
  ],
  "website": "https://www.ucc.ie",
  "application_portal": "UCC Apply Portal (official UCC online system)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "SEFS International Student Merit-Based Scholarship (Masters): 10\u201320% tuition fee reduction or EUR 1,000 (auto-awarded for 1H/2H1/2H2 grades)"
    },
    {
      "name": "SEFS International Undergraduate Scholarship: 25% fee reduction for 4 years (renewable; must maintain academic standards)"
    },
    {
      "name": "College of Business & Law International Undergraduate Scholarship: EUR 5,000/year; automatic merit-based; renewable annually"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full-fee waiver + monthly stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "Total Pool: Awards 1,000 scholarships/bursaries annually across all students"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 mandatory 6\u201312 month work placements in Computer Science (Year 3); optional internships in other programs; Summer Research Internship program available",
    "coop_available": true,
    "employment_rate_percent": 93
  },
  "campus_life": {
    "clubs": "Sports Facilities: 50+ sports clubs (rugby, cricket, rowing, climbing, yoga, etc.)",
    "housing": "Accommodation: On-campus residences available for international students"
  },
  "security": {
    "detail": "24/7 Campus Security: +353 (0)21 490 2266 | Campus Patrols & Emergency Response"
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

addPrograms(univ_universitycollegecork, "UNIVERSITY COLLEGE CORK", [
  {
    "level": "UG",
    "name": "Computer Science (B.Sc.)",
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
    "name": "Business Studies / Commerce (BComm)",
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
    "name": "Engineering (Mechanical / Civil / Electronic)",
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
    "name": "Food Science (B.Sc.)",
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
    "name": "Actuarial Science / Physics (B.Sc.)",
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
    "name": "MSc Data Science & Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computing Science",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance (Corporate Finance)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Engineering (Mechanical / Sustainable Energy)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Computer Science (4 years)",
    "faculty": "School of Computer Science & Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific subject requirement",
      "mathematics/computing aptitude beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Architect",
      "Mobile App Developer",
      "IT Systems Engineer",
      "Database Developer",
      "Cloud Computing Developer",
      "Security Analyst",
      "Technical Consultant",
      "Games Programmer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BComm \u2013 Commerce (3 years)",
    "faculty": "Cork University Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific subject stream required"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Management Trainee",
      "Business Analyst",
      "Marketing Executive",
      "Operations Manager",
      "HR Officer",
      "Accountant",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BE (Hons) Engineering \u2013 Mechanical / Civil / Electronic (4 years)",
    "faculty": "School of Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (85% minimum) & Physics (85% minimum preferred)"
    ],
    "entry_roles": [
      "Structural Engineer",
      "Civil Engineer",
      "Mechanical Engineer",
      "Electronic Design Engineer",
      "Project Engineer",
      "Systems Engineer",
      "Manufacturing Engineer",
      "Automation Specialist",
      "Energy Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Food Science (4 years)",
    "faculty": "School of Food Science, Engineering & Environmental Resources",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry (85% minimum) & Biology (85% minimum)"
    ],
    "entry_roles": [
      "Food Scientist",
      "Food Safety Officer",
      "Quality Assurance Manager",
      "Product Development Manager",
      "Food Technologist",
      "Manufacturing Engineer",
      "Regulatory Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc (Hons) Actuarial Science (4 years)",
    "faculty": "School of Mathematical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (85% minimum)"
    ],
    "entry_roles": [
      "Actuary",
      "Financial Analyst",
      "Risk Manager",
      "Insurance Underwriter",
      "Pension Analyst",
      "Investment Analyst",
      "Quantitative Analyst",
      "Pricing Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science & Analytics (1 year full-time)",
    "faculty": "School of Computer Science & Information Technology / Cork University Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative/mathematical foundation required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Developer",
      "Analytics Consultant",
      "Data Engineer",
      "Research Scientist",
      "BI Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computing Science (1 year full-time / 2 years part-time)",
    "faculty": "School of Computer Science & Information Technology",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Competent programmer",
      "comfortable with mathematical concepts"
    ],
    "entry_roles": [
      "Software Engineer",
      "IT Project Analyst",
      "Python/Java Developer",
      "Web Applications Developer",
      "Data Analyst",
      "Business Analyst",
      "Technical Consultant",
      "Performance Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance (Corporate Finance) (1 year full-time)",
    "faculty": "Cork University Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "economics",
      "mathematics",
      "accounting preferred"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Risk Manager",
      "Financial Controller",
      "Capital Markets Analyst",
      "Private Equity Analyst",
      "Quantitative Analyst",
      "Treasury Analyst",
      "Corporate Finance Advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics (1 year full-time)",
    "faculty": "Cork University Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Consultant",
      "Project Manager",
      "Operations Research Analyst",
      "IT Manager",
      "Analytics Specialist",
      "Decision Support Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Interactive Media (1 year full-time / 2 years part-time)",
    "faculty": "School of Computer Science & Information Technology",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Interest in digital media",
      "design",
      "computing",
      "or content development",
      "no specific academic background required"
    ],
    "entry_roles": [
      "Digital Media Developer",
      "Web Developer",
      "UX/UI Designer",
      "Audio Engineer",
      "Video Producer",
      "3D Graphics Developer",
      "Interactive Media Designer",
      "Games Developer",
      "Content Creator",
      "Digital Producer"
    ],
    "features": []
  }
]);

// --- UNIVERSITY COLLEGE DUBLIN ---
const univ_universitycollegedublin = db.institutions.insertOne(inst({
  "name": "UNIVERSITY COLLEGE DUBLIN",
  "abbreviation": "",
  "type": "university",
  "city": "Dublin",
  "province": "Leinster",
  "country": "Ireland",
  "campuses": [
    "Dublin"
  ],
  "website": "https://www.ucd.ie",
  "application_portal": "Direct UCD portal or Common Application platform",
  "contacts": {
    "admissions": {
      "email": "internationalenquiries@ucd.ie (via UCD Global portal)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 82,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Global Excellence Scholarship: Merit-based; full/partial tuition waivers (application deadline: March 31, 2026)"
    },
    {
      "name": "Government of Ireland Scholarship: EUR 10,000 tuition waiver for Master\u2019s/PhD (non-EU, application deadline: March 5, 2026)"
    },
    {
      "name": "Business & Finance Awards: For MBA/Business programs (deadline: April 30, 2026)"
    },
    {
      "name": "Total Pool: ~INR 2.2 crore for international students"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 embedded in many programs; 6\u201310 weeks summer placements; 6\u20138 months ME program internships",
    "coop_available": true,
    "employment_rate_percent": 94
  },
  "campus_life": {
    "clubs": "Sports Facilities: 50+ sports clubs; gym, Olympic-size pool, climbing wall, tennis, rugby, cricket, yoga"
  },
  "security": {
    "detail": "Emergency Contact: Campus Security Centre"
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

addPrograms(univ_universitycollegedublin, "UNIVERSITY COLLEGE DUBLIN", [
  {
    "level": "UG",
    "name": "Computer Science (B.Sc.)",
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
    "name": "Commerce (Bachelor of Commerce \u2013 BComm)",
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
    "name": "Engineering (Mechanical/Civil/Electronic Engineering \u2013 B.E.)",
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
    "name": "Law (Bachelor of Law \u2013 LL.B.)",
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
    "name": "Pharmacy & Health Sciences (B.Sc.)",
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
    "name": "MBA",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science (Data Science specialisation)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Engineering Management (MEngSc)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (B.Sc.)",
    "faculty": "School of Computer Science & Statistics",
    "duration_years": 3.0,
    "annual_fee_cad": 43650,
    "total_fee_cad": 130950,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics or computational background preferred"
    ],
    "entry_roles": [
      "Software Developer",
      "Data Analyst",
      "Systems Engineer",
      "Cloud Engineer",
      "Frontend/Backend Developer",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (BComm)",
    "faculty": "UCD Quinn School of Business",
    "duration_years": 3.0,
    "annual_fee_cad": 36300,
    "total_fee_cad": 108900,
    "min_class12_percent": 80,
    "required_subjects": [
      "No specific requirements",
      "background in any discipline accepted"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Operations Manager",
      "Account Executive",
      "HR Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (B.E.) \u2013 Mechanical/Civil/Electronic Engineering (4 years)",
    "faculty": "UCD School of Engineering & Architecture",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (preferred)",
      "Physics (preferred)"
    ],
    "entry_roles": [
      "Structural Engineer",
      "Civil Engineer",
      "Mechanical Engineer",
      "Electronic Design Engineer",
      "Project Engineer",
      "Manufacturing Engineer",
      "Automation Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Law (LL.B.)",
    "faculty": "UCD School of Law",
    "duration_years": 3.0,
    "annual_fee_cad": 36300,
    "total_fee_cad": 108900,
    "min_class12_percent": 80,
    "required_subjects": [
      "No specific subject stream required"
    ],
    "entry_roles": [
      "Junior Solicitor",
      "Legal Executive",
      "Compliance Officer",
      "Corporate Lawyer",
      "International Law Advisor",
      "Government Legal Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Pharmacy (B.Sc.)",
    "faculty": "UCD School of Pharmacy and Pharmaceutical Sciences",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 80,
    "required_subjects": [
      "Chemistry (preferred) & Biology (preferred)"
    ],
    "entry_roles": [
      "Registered Pharmacist",
      "Hospital Pharmacist",
      "Community Pharmacist",
      "Industrial Pharmacist",
      "Pharmaceutical Sales Representative",
      "Regulatory Affairs Officer",
      "Pharmaceutical Quality Assurance"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA \u2013 Master in Business Administration (1 year full-time / 2 years part-time)",
    "faculty": "UCD Michael Smurfit Graduate Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Strategy Consultant",
      "Product Manager",
      "Operations Director",
      "Business Development Manager",
      "CFO",
      "General Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance (1 year full-time)",
    "faculty": "UCD Michael Smurfit Graduate Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Quantitative subjects (economics, mathematics, accounting) preferred"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Risk Manager",
      "Financial Controller",
      "Capital Markets Analyst",
      "Private Equity Analyst",
      "Quantitative Analyst",
      "Treasury Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science \u2013 Data Science (12\u201316 months)",
    "faculty": "School of Computer Science & Statistics",
    "duration_years": 1.0,
    "annual_fee_cad": 45840,
    "total_fee_cad": 45840,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Developer",
      "Research Scientist",
      "AI Engineer",
      "Software Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics (1 year full-time)",
    "faculty": "UCD Michael Smurfit Graduate Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Quantitative courses/strong analytical foundation required"
    ],
    "entry_roles": [
      "Business Analyst",
      "Analytics Manager",
      "Data Scientist",
      "AI Strategy Consultant",
      "Product Analyst",
      "Insights Manager",
      "Operations Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MEngSc Engineering Management (1 year full-time)",
    "faculty": "UCD School of Engineering & Architecture",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering foundation required",
      "postgraduate certificate option available for non-engineers"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Operations Manager",
      "Plant Manager",
      "Technical Manager",
      "Quality Manager",
      "Supply Chain Manager",
      "Engineering Consultant"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF GALWAY ---
const univ_universityofgalway = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF GALWAY",
  "abbreviation": "",
  "type": "university",
  "city": "Galway",
  "province": "Connacht",
  "country": "Ireland",
  "campuses": [
    "Galway"
  ],
  "website": "https://www.universityofgalway.ie",
  "application_portal": "Online via University of Galway Postgraduate Applications System (https://www.universityofgalway.ie/)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 37,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Global Achievement Scholarship (UG): EUR 2,000 fee reduction (auto-awarded upon offer acceptance & deposit payment by May 1)"
    },
    {
      "name": "Country-Specific Taught Master\u2019s Scholarship (India): EUR 2,000 fee reduction (auto-considered upon acceptance)"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + living stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "PhD International Merit Scholarship: Available for research-track students"
    },
    {
      "name": "Undergraduate Merit Scholarship (Medicine): EUR 2,000 fee reduction for international medical students (Year 1)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 embedded in 60%+ of courses; 6\u20138 month paid placements in Computer Science (Year 3), Engineering (Year 4), Commerce (Year 3), Management (5 months); optional for other programs",
    "coop_available": true,
    "employment_rate_percent": 94
  },
  "campus_life": {
    "clubs": "Sports Facilities: 50+ sports clubs (rugby, cricket, rowing, climbing, yoga, swimming)",
    "housing": "Accommodation: Available for international students; on/near campus options"
  },
  "security": {
    "detail": "Seat Confirmation: EUR 500 deposit recommended for seat security"
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

addPrograms(univ_universityofgalway, "UNIVERSITY OF GALWAY", [
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Biomedical)",
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
    "name": "Bachelor of Science (Computer Science & Information Technology)",
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
    "name": "Bachelor of Commerce (Global Experience)",
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
    "name": "Bachelor of Science (Food Science)",
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
    "name": "Bachelor of Science (Project & Construction Management)",
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
    "name": "MSc Computer Science (Artificial Intelligence)",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science / Data Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Corporate Finance",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Biomedical Engineering / MSc Medical Technology Regulatory Affairs",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor & Master of Engineering (Biomedical) (4\u20135 years)",
    "faculty": "School of Engineering, College of Science and Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics & Physics (85% minimum preferred)"
    ],
    "entry_roles": [
      "Biomedical Engineer",
      "Medical Device Engineer",
      "Hospital Engineer",
      "Research & Development Engineer",
      "Clinical Engineer",
      "Regulatory Affairs Officer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Computer Science & Information Technology) (4 years)",
    "faculty": "School of Computer Science & Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 25500,
    "total_fee_cad": 76500,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific subject requirement",
      "mathematics/computing background beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "Web Developer",
      "Mobile App Developer",
      "IT Systems Engineer",
      "Data Analyst",
      "Database Developer",
      "Cloud Computing Developer",
      "Security Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Global Experience) (4 years)",
    "faculty": "J.E. Cairnes School of Business & Economics",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement",
      "mathematics helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Trainee",
      "Marketing Executive",
      "Financial Analyst",
      "HR Officer",
      "Operations Manager",
      "Entrepreneur",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Food Science) (4 years)",
    "faculty": "School of Natural Sciences, College of Science and Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry & Biology (85% minimum)"
    ],
    "entry_roles": [
      "Food Scientist",
      "Quality Assurance Officer",
      "Product Development Manager",
      "Food Safety Specialist",
      "Food Technologist",
      "Regulatory Officer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Project & Construction Management) (4 years)",
    "faculty": "School of Informatics, College of Science and Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 25500,
    "total_fee_cad": 76500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics preferred"
    ],
    "entry_roles": [
      "Project Manager",
      "Site Engineer",
      "Construction Manager",
      "Building Information Modelling (BIM) Coordinator",
      "Cost Estimator",
      "Contracts Manager",
      "Health & Safety Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science (Artificial Intelligence) (1 year full-time)",
    "faculty": "School of Computer Science & Information Technology",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "High technical standard in Computer Science required",
      "programming competency mandatory"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Natural Language Processing Specialist",
      "Computer Vision Engineer",
      "Research Scientist",
      "Data Scientist",
      "Software Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science & Analytics (1 year full-time)",
    "faculty": "School of Computer Science & Information Technology / Cairnes School of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong mathematical/analytical foundation",
      "programming experience beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Developer",
      "Analytics Consultant",
      "Machine Learning Engineer",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics (1 year full-time)",
    "faculty": "J.E. Cairnes School of Business & Economics",
    "duration_years": 1.0,
    "annual_fee_cad": 39000,
    "total_fee_cad": 39000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Analytical/mathematical problem-solving skills",
      "coding knowledge helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Business Intelligence Consultant",
      "Analytics Manager",
      "Credit Risk Analyst",
      "Operations Specialist",
      "DevOps Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Corporate Finance (1 year full-time)",
    "faculty": "J.E. Cairnes School of Business & Economics",
    "duration_years": 1.0,
    "annual_fee_cad": 42000,
    "total_fee_cad": 42000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills",
      "finance/accounting background preferred"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Corporate Finance Associate",
      "Investment Analyst",
      "Audit Trainee",
      "Risk Analyst",
      "M&A Analyst",
      "Business Advisor",
      "Finance Business Partner"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Biomedical Engineering (1 year full-time)",
    "faculty": "School of Engineering, College of Science and Engineering",
    "duration_years": 1.0,
    "annual_fee_cad": 42000,
    "total_fee_cad": 42000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering or science foundation",
      "biomechanics/tissue engineering familiarity beneficial"
    ],
    "entry_roles": [
      "Biomedical Engineer",
      "Medical Device Engineer",
      "Research & Development Engineer",
      "Hospital Engineer",
      "Clinical Engineer",
      "Regulatory Affairs Officer",
      "Quality Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF LIMERICK ---
const univ_universityoflimerick = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF LIMERICK",
  "abbreviation": "",
  "type": "university",
  "city": "Limerick",
  "province": "Munster",
  "country": "Ireland",
  "campuses": [
    "Limerick"
  ],
  "website": "https://www.ul.ie",
  "application_portal": "University of Limerick Online Portal",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 75,
  "intakes": [
    "Semester 1 (September)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Jim Kemmy Undergraduate India Scholarship (KBS): EUR 4,279 (\u20ac8,000/year tuition fee only); 75%+ in Class 10 & 12 (Math & English); renewable for 4 years; available for BA International Business & Bachelor of Business Studies only"
    },
    {
      "name": "Government of Ireland International Education Scholarship: Full tuition + living stipend (highly competitive; 60 places nationwide)"
    },
    {
      "name": "Total 2025/26: 125 Indian students awarded scholarships worth \u20ac400,000"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2013 embedded in many programs (8-month mandatory placements in Engineering, Business, Software Engineering); optional internships in other disciplines",
    "coop_available": true,
    "employment_rate_percent": 96
  },
  "campus_life": {
    "clubs": "Sports: 50+ clubs available",
    "housing": "Campus Facilities: Modern labs, library, sports centre (pool, gym), student accommodation (award-winning campus)"
  },
  "security": {
    "detail": "24/7 Campus Security: On-campus security presence & emergency response"
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

addPrograms(univ_universityoflimerick, "UNIVERSITY OF LIMERICK", [
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
    "name": "Bachelor of Engineering (Mechanical/Electronic)",
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
    "name": "Bachelor of Science (Computer Science)",
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
    "name": "Bachelor of International Business",
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
    "name": "BA Media & Communications",
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
    "name": "MSc Data Science & Statistical Learning",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence & Machine Learning",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Software Engineering",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Project Management / MA Business Management",
    "faculty": "",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Studies (4 years)",
    "faculty": "Kemmy Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Trainee",
      "Financial Analyst",
      "Operations Manager",
      "HR Officer",
      "Marketing Executive",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Mechanical / Electronic) (4 years)",
    "faculty": "Faculty of Science and Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 28500,
    "total_fee_cad": 85500,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics & Physics (70% minimum preferred)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Systems Engineer",
      "Production Engineer",
      "Manufacturing Engineer",
      "Project Engineer",
      "Automation Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Computer Science) (4 years)",
    "faculty": "Department of Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 24000,
    "total_fee_cad": 72000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement",
      "mathematics beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "Web Developer",
      "IT Systems Engineer",
      "Database Developer",
      "Mobile App Developer",
      "Systems Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of International Business (4 years)",
    "faculty": "Kemmy Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 909,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "International Business Manager",
      "Global Operations Manager",
      "Import/Export Manager",
      "International HR Officer",
      "Global Trade Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Media & Communications (4 years)",
    "faculty": "Department of Media & Communication",
    "duration_years": 3.0,
    "annual_fee_cad": 22500,
    "total_fee_cad": 67500,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific requirement"
    ],
    "entry_roles": [
      "Communications Officer",
      "Media Coordinator",
      "Content Creator",
      "Journalist",
      "PR Executive",
      "Digital Content Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science & Statistical Learning (1 year full-time)",
    "faculty": "Department of Computer Science & Information Systems",
    "duration_years": 1.0,
    "annual_fee_cad": 33000,
    "total_fee_cad": 33000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative foundation",
      "programming experience beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Developer",
      "Analytics Consultant",
      "Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence & Machine Learning (1 year full-time)",
    "faculty": "Department of Computer Science & Information Systems",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming competency required",
      "machine learning familiarity beneficial"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "NLP Specialist",
      "Computer Vision Engineer",
      "Robotics Engineer",
      "AI Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Software Engineering (1 year full-time)",
    "faculty": "Department of Computer Science & Information Systems",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming experience required",
      "software design knowledge beneficial"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Analyst",
      "Quality Assurance Engineer",
      "Technical Lead",
      "DevOps Engineer",
      "Solutions Architect",
      "Software Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics (1 year full-time)",
    "faculty": "Kemmy Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 303,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Quantitative/analytical skills required",
      "coding helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Analytics Manager",
      "Business Intelligence Consultant",
      "Credit Risk Analyst",
      "Operations Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Project Management (1 year full-time)",
    "faculty": "Faculty of Science and Engineering / Kemmy Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 32400,
    "total_fee_cad": 32400,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific background required",
      "project management interest beneficial"
    ],
    "entry_roles": [
      "Project Manager",
      "Programme Manager",
      "Construction Manager",
      "IT Project Manager",
      "Operations Manager",
      "Scrum Master",
      "Business Analyst"
    ],
    "features": []
  }
]);

print("Ireland Seeding Completed!");