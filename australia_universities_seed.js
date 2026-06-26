// ============================================================
// AUSTRALIA UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions australia_universities_seed.js
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

// Delete existing Australia data to prevent duplicates
db.institutions.deleteMany({ country: "Australia" });
db.programs.deleteMany({ institution_name: { $in: [
  "DEAKIN UNIVERSITY",
  "MONASH UNIVERSITY",
  "AUSTRALIAN NATIONAL UNIVERSITY",
  "MACQUARIE UNIVERSITY",
  "UNSW SYDNEY",
  "UNIVERSITY OF TECHNOLOGY SYDNEY",
  "CHARLES DARWIN UNIVERSITY",
  "GRIFFITH UNIVERSITY",
  "CURTIN UNIVERSITY",
  "SWINBURNE UNIVERSITY OF TECHNOLOGY",
  "UNIVERSITY OF MELBOURNE",
  "UNIVERSITY OF WOLLONGONG",
  "UNIVERSITY OF QUEENSLAND",
  "UNIVERSITY OF ADELAIDE",
  "LA TROBE UNIVERSITY",
  "WESTERN SYDNEY UNIVERSITY",
  "QUEENSLAND UNIVERSITY OF TECHNOLOGY",
  "RMIT UNIVERSITY",
  "UNIVERSITY OF WESTERN AUSTRALIA",
  "UNIVERSITY OF SYDNEY",
] } });

// --- DEAKIN UNIVERSITY ---
const univ_deakinuniversity = db.institutions.insertOne(inst({
  "name": "DEAKIN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Melbourne",
  "province": "Victoria",
  "country": "Australia",
  "campuses": [
    "Melbourne"
  ],
  "website": "",
  "application_portal": "student-deakin.studylink.com",
  "contacts": {
    "admissions": {
      "address": "221 Burwood Highway, Burwood, Victoria 3125, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 extensive merit-based awards for international students"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Deakin Vice-Chancellor\u2019s International Scholarship: 100% or 50% tuition fee waiver (highly competitive; 85%+ academic average required; includes VCPEP program participation)"
    },
    {
      "name": "Deakin International Scholarship: 25% tuition fee reduction (minimum 65% academic average; automatic consideration)"
    },
    {
      "name": "Deakin India 20% Undergraduate Scholarship: 20% tuition waiver (Indian citizens living in India; through authorized agents)"
    },
    {
      "name": "Deakin India 25% Merit Scholarship: 25% tuition reduction (80%+ in 12th for UG; 75%+ in Bachelor\u2019s for PG; specific to IT/Computing/Business)"
    },
    {
      "name": "Deakin India Postgraduate Bursary 20%: 20% tuition reduction (55%+ Bachelor\u2019s; Indian citizens)"
    },
    {
      "name": "Deakin Vice-Chancellor\u2019s Meritorious 100% Scholarship: 100% tuition waiver (80%+ UG; highly competitive)"
    }
  ],
  "internships": {
    "employment_rate_percent": 82
  },
  "campus_life": {
    "clubs": "Student activities: Orientation Week with clubs fair, sports day, social events; Student employment and internship programs; DUSA events monthly; sports competitions (inter-college competitions); cultural celebrations; networking events"
  },
  "security": {
    "detail": "Partnerships: Coordination with Victoria Police, emergency services, law enforcement, health services"
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

addPrograms(univ_deakinuniversity, "DEAKIN UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing",
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
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Science (various majors)",
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
    "name": "Master of Data Science",
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
    "name": "Master of Information Technology / Cybersecurity",
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
    "name": "Master of Professional Engineering (various specializations)",
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
    "name": "Master of Business Analytics",
    "faculty": "Department name: Faculty of Science, Engineering and Built Environment (School of Computing)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential",
      "non-STEM graduates considered with foundation pathway"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (1.5 for IT background; 2 for non-IT background) | On-campus delivery",
    "faculty": "Department name: Faculty of Business and Law (Deakin Business School)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "Commerce",
      "Finance",
      "Economics",
      "IT",
      "Mathematics",
      "or Statistics background preferred",
      "any degree considered"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Management Consultant",
      "Finance Analyst",
      "Data Scientist (junior level)",
      "Strategy Analyst"
    ],
    "features": []
  }
]);

// --- MONASH UNIVERSITY ---
const univ_monashuniversity = db.institutions.insertOne(inst({
  "name": "MONASH UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Melbourne",
  "province": "Victoria",
  "country": "Australia",
  "campuses": [
    "Melbourne"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "27 Chancellors Walk, Clayton VIC 3800, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 over 250 scholarships, total pool approximately INR 25.2 Crore"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Monash International Merit Scholarship (UG): Up to AUD 15,000/year (AUD 75,000 total); Automatic consideration for eligible applicants"
    },
    {
      "name": "Monash International Scholarship for Excellence: INR 5.5 Lakhs for UG & PG"
    },
    {
      "name": "Engineering International High Achievers: INR 8.3 Lakhs (50 scholarships)"
    },
    {
      "name": "Faculty of IT International Merit: INR 5.5 Lakhs (10 scholarships)"
    },
    {
      "name": "Monash International Leadership Scholarship"
    },
    {
      "name": "Monash International Tuition Scholarship (MITS) for Research Masters/PhD: Full tuition + living allowance (AUD 37,145/year)"
    }
  ],
  "internships": {
    "employment_rate_percent": 70
  },
  "campus_life": {
    "clubs": "Orientation: O-Week with clubs fair, sports day, and campus activities"
  },
  "security": {
    "detail": "Partnerships: Coordination with local emergency services and law enforcement"
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

addPrograms(univ_monashuniversity, "MONASH UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Commerce / Science (double degree)",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Master of Information Technology",
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
    "name": "Master of Finance / Banking and Finance",
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
    "name": "Master of Commerce",
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
    "name": "Master of Engineering (various specializations)",
    "faculty": "Department name: Monash Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 83,
    "required_subjects": [
      "Mathematics (Advanced) helpful",
      "Physics/Computer Science preferred"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Database Administrator",
      "Cybersecurity Specialist",
      "Cloud Engineer",
      "Data Analyst",
      "Machine Learning Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (varies based on background; standard 1.5 years) | On-campus delivery",
    "faculty": "Department name: Faculty of Engineering (School of IT)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline accepted",
      "business/management background advantageous"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Director",
      "Corporate Executive",
      "Finance Manager",
      "Entrepreneur",
      "Change Management Specialist",
      "Marketing Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (1.5 years for IT background; 2 years for non-IT background) | On-campus delivery",
    "faculty": "Department name: Monash Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "Accounting",
      "Economics",
      "or quantitative business discipline preferred"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Manager",
      "Risk Manager",
      "Corporate Finance Manager",
      "Private Equity Analyst",
      "Investment Banker",
      "Fund Manager",
      "Financial Advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications and specialization) | On-campus delivery",
    "faculty": "Department name: Faculty of Engineering (multiple schools: Civil, Mechanical, Electrical & Computer, Software, Chemical & Biomolecular, Aerospace, Biomedical, etc.)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "Aerospace",
      "or similar engineering discipline"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer",
      "Manufacturing Engineer (varies by specialization)"
    ],
    "features": []
  }
]);

// --- AUSTRALIAN NATIONAL UNIVERSITY ---
const univ_australiannationaluniversity = db.institutions.insertOne(inst({
  "name": "AUSTRALIAN NATIONAL UNIVERSITY",
  "abbreviation": "ANU",
  "type": "university",
  "city": "Canberra",
  "province": "ACT",
  "country": "Australia",
  "campuses": [
    "Canberra"
  ],
  "website": "https://www.anu.edu.au",
  "application_portal": "https://study.anu.edu.au/apply/international-applications",
  "contacts": {
    "admissions": {
      "email": "Phone 135 ANU (135 268) or +61 2 6125 3339 (if overseas) | Email: student@anu.edu.au",
      "address": "The Australian National University, Canberra ACT 2600, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 extensive scholarship options available"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "ANU Chancellor\u2019s International Scholarship: 25% or 50% tuition fee reduction (200 scholarships annually; UG & PG eligible; merit-based)"
    },
    {
      "name": "ANU International Merit Scholarship: Various tuition reductions for high-achieving international students"
    },
    {
      "name": "Early Acceptance Scholarship: AUD 10,000 annually (UG & PG)"
    },
    {
      "name": "India Scholarship: AUD 40,000 for four-year UG programs (maximum AUD 50,000 over program duration)"
    },
    {
      "name": "Dean\u2019s International Science Excellence Scholarship: AUD 5,000 (one-time; STEM students)"
    },
    {
      "name": "Law International Partners Scholarship: 100% tuition waiver for select LLM students"
    },
    {
      "name": "Humanitarian Scholarship: 100% tuition + living costs (for refugee background students)"
    }
  ],
  "internships": {
    "employment_rate_percent": 80
  },
  "campus_life": {
    "clubs": "Orientation: O-Week with clubs fair, sports day, social events, and campus tours"
  },
  "security": {
    "detail": "Partnerships: Coordination with ACT Policing, emergency services, health services"
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

addPrograms(univ_australiannationaluniversity, "AUSTRALIAN NATIONAL UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Computing / Information Technology",
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
    "name": "Bachelor of Advanced Studies (flexible multidisciplinary)",
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
    "name": "Master of Finance / Applied Finance",
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
    "name": "Master of Science (various: Computing, Data Science, Cybersecurity)",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Management",
    "faculty": "Department name: College of Business & Economics (MBA Program)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific prerequisites",
      "flexibility across disciplines"
    ],
    "entry_roles": [
      "Analyst",
      "Consultant",
      "Policy Officer",
      "Communications Specialist",
      "Researcher (discipline-dependent)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (18 months) | On-campus delivery",
    "faculty": "Department name: College of Business & Economics (School of Cybernetics)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline accepted",
      "business/management background advantageous"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Director",
      "Corporate Executive",
      "Finance Manager",
      "Entrepreneur",
      "Policy Adviser",
      "Government Administrator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (18 months) | On-campus delivery",
    "faculty": "Department name: College of Business & Economics",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field",
      "program designed for recent graduates",
      "early-career professionals"
    ],
    "entry_roles": [
      "Management Consultant",
      "Operations Manager",
      "Program Manager",
      "Business Analyst",
      "Strategy Consultant",
      "Product Manager",
      "Government Administrator"
    ],
    "features": []
  }
]);

// --- MACQUARIE UNIVERSITY ---
const univ_macquarieuniversity = db.institutions.insertOne(inst({
  "name": "MACQUARIE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Sydney",
  "province": "New South Wales",
  "country": "Australia",
  "campuses": [
    "Sydney"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 generous merit-based scholarships available"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "India $10,000 Early Acceptance Scholarship: AUD 10,000 in second semester first year; AUD 5,000 per semester thereafter (open year-round; Indian citizens; UG & PG coursework programs; automatic assessment)"
    },
    {
      "name": "Vice-Chancellor\u2019s International Scholarship: AUD 10,000 one-time award (academically outstanding international students; automatic consideration)"
    },
    {
      "name": "Combined potential benefit: Up to AUD 50,000 (approximately INR 28.5 lakh) over 4-year Bachelor\u2019s program"
    },
    {
      "name": "Faculty of Science & Engineering Sustainability Scholarship: (specific to Science/Engineering students)"
    },
    {
      "name": "Faculty of Science & Engineering FIRST Australia Scholarship: (specific to Science/Engineering students)"
    },
    {
      "name": "Indian Arts Partner Scholarship: For select institutions (Lady Shri Ram College for Women, St. Xavier\u2019s College Kolkata, TISS Mumbai; Masters Arts programs)"
    }
  ],
  "internships": {
    "employment_rate_percent": 85
  },
  "campus_life": {
    "clubs": "Student clubs, societies: 200+ clubs and societies (academic/industry clubs, sports clubs, cultural/nationality clubs, spiritual clubs, creative clubs, social/activist organizations)"
  },
  "security": {
    "detail": "Partnerships: Coordination with NSW Police, emergency services, local law enforcement, health services"
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

addPrograms(univ_macquarieuniversity, "MACQUARIE UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Engineering (various specializations)",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Actuarial Studies / Advanced Studies",
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
    "name": "Master of Commerce",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Data Science and Decisions",
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
    "name": "Master of Finance",
    "faculty": "Department name: Faculty of Business and Economics",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics Advanced or Extension (compulsory)"
    ],
    "entry_roles": [
      "Actuary (graduate trainee)",
      "Risk Analyst",
      "Financial Analyst",
      "Investment Analyst",
      "Insurance Analyst",
      "Pension Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications and specialization) | On-campus delivery",
    "faculty": "Department name: Faculty of Business and Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "Accounting",
      "Economics",
      "or quantitative business discipline preferred",
      "any degree considered"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Manager",
      "Risk Manager",
      "Corporate Finance Manager",
      "Private Equity Analyst",
      "Investment Banker",
      "Fund Manager"
    ],
    "features": []
  }
]);

// --- UNSW SYDNEY ---
const univ_unswsydney = db.institutions.insertOne(inst({
  "name": "UNSW SYDNEY",
  "abbreviation": "",
  "type": "university",
  "city": "Sydney",
  "province": "New South Wales",
  "country": "Australia",
  "campuses": [
    "Sydney"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 over 1,500 scholarships annually"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "UNSW International Scholarship (up to AUD 20,000/year)"
    },
    {
      "name": "Future of Change India Scholarship (merit-based for Indian students)"
    },
    {
      "name": "Direct Entry Scholarship (automatic AUD 10,000 for eligible applicants)"
    },
    {
      "name": "International Scientia Scholarship"
    },
    {
      "name": "20% tuition contribution for eligible countries"
    },
    {
      "name": "UNSW committed to supporting international student success through financial aid"
    }
  ],
  "internships": {
    "employment_rate_percent": 80
  },
  "campus_life": {
    "clubs": "Orientation: O-Week with clubs fair, sports days, cultural and sporting events"
  },
  "security": {
    "detail": "Partnerships: Coordination with NSW Police, first aid certified staff, emergency response teams including Security Operations and Emergency Control Organisations"
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

addPrograms(univ_unswsydney, "UNSW SYDNEY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Science / Commerce (double degree)",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Master of Business Administration (AGSM MBA)",
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
    "name": "Master of Data Science and Decisions",
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
    "name": "Master of Commerce",
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
    "name": "Master of Finance (commencing 2026)",
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
    "name": "Master of Engineering (various specializations)",
    "faculty": "Department name: UNSW Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 93,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential",
      "computer science background valued"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer",
      "QuantitativeAnalyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "75 years full-time (21 months) | On-campus delivery at Kensington, Sydney",
    "faculty": "Department name: School of Engineering (multiple schools: Civil, Mechanical, Electrical & Computer, Software, Chemical & Biomolecular, Aerospace, Materials Science, etc.)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "Aerospace Engineering",
      "or similar discipline"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer",
      "Manufacturing Engineer (varies by specialization)"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF TECHNOLOGY SYDNEY ---
const univ_universityoftechnologysydney = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF TECHNOLOGY SYDNEY",
  "abbreviation": "UTS",
  "type": "university",
  "city": "Sydney",
  "province": "New South Wales",
  "country": "Australia",
  "campuses": [
    "Sydney"
  ],
  "website": "",
  "application_portal": "https://student-uts.studylink.com/index.cfm",
  "contacts": {
    "admissions": {
      "address": "15 Broadway, Ultimo NSW 2007, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based automatic assessment at application"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "UTS Academic Excellence International Scholarship: 30% tuition fee reduction (all courses, all countries; 5 years UG, 2 years PG)"
    },
    {
      "name": "UTS Academic Merit International Scholarship: 15% tuition fee reduction (commencing 2026; all courses, all countries; 5 years UG, 2 years PG)"
    },
    {
      "name": "UTS Academic Merit International Scholarship \u2013 South Asia: 15% tuition fee reduction (2026 intakes; Bangladesh, India, Nepal, Pakistan, Sri Lanka; 5 years UG, 2 years PG)"
    },
    {
      "name": "MBA Scholarship for Outstanding Students: AUD 5,000 toward first-year tuition"
    },
    {
      "name": "UTS College to UTS Pathway Scholarship: 50% tuition reduction"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student clubs, societies: 140+ clubs and societies; ActivateUTS manages affiliated clubs covering sports, cultural, academic, and recreational interests",
    "housing": "Accommodation: UTS Housing offers on-campus studios and apartments (limited availability); off-campus rental market in inner-city suburbs (Newtown, Surry Hills, Ultimo, Pyrmont)"
  },
  "security": {
    "detail": "Partnerships: Coordination with NSW Police, ambulance services, fire brigade, emergency response organizations"
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

addPrograms(univ_universityoftechnologysydney, "UNIVERSITY OF TECHNOLOGY SYDNEY", [
  {
    "level": "UG",
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Engineering Science (various specializations)",
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
    "name": "Bachelor of Computing Science / Information Technology",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Nursing / Health Sciences",
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
    "name": "Master of Data Science and Innovation",
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
    "name": "Master of Information Technology / Artificial Intelligence",
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
    "name": "Master of Finance / Accounting & Finance",
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
    "name": "Master of Engineering (various specializations)",
    "faculty": "Department name: Faculty of Engineering & IT (School of Computing)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential",
      "non-STEM graduates considered for preliminary study pathway"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on background: 1.5 for IT background; 2 for non-IT background) | On-campus delivery",
    "faculty": "Department name: Faculty of Business (UTS Business School; Finance & Accounting)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "IT or computer science background preferred for 1.5-year pathway",
      "other fields considered for extended 2-year pathway"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Database Administrator",
      "Cybersecurity Specialist",
      "Cloud Architect",
      "Network Engineer",
      "IT Project Manager",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications: 1.5 for Accounting background; 2 for mixed/non-accounting background) | On-campus delivery",
    "faculty": "Department name: Faculty of Engineering & IT (multiple engineering schools available)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "or similar engineering discipline",
      "3-year degree minimum"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer",
      "Professional Accredited Engineer (varies by specialization)"
    ],
    "features": []
  }
]);

// --- CHARLES DARWIN UNIVERSITY ---
const univ_charlesdarwinuniversity = db.institutions.insertOne(inst({
  "name": "CHARLES DARWIN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Darwin",
  "province": "Northern Territory",
  "country": "Australia",
  "campuses": [
    "Darwin"
  ],
  "website": "www.cdu.edu.au",
  "application_portal": "student-cdu.studylink.com",
  "contacts": {
    "admissions": {
      "email": "security@cdu.edu.au"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Vice-Chancellor\u2019s International High Achievers (VCIHAS): 50% of total tuition fees for entire course duration; minimum 95% in highest qualification required"
    },
    {
      "name": "CDU Global Merit Scholarship: 30% off tuition fees; automatic consideration"
    },
    {
      "name": "CDU International College Scholarship (China & East Asia): 30% off tuition fees for students from China, Hong Kong, Vietnam, Indonesia, Malaysia, Singapore, Cambodia, Laos, Taiwan, Korea, Thailand, Philippines, Japan"
    },
    {
      "name": "CDU International College Scholarship (All Other Regions): 15% or 30% off tuition fees for students from other regions"
    },
    {
      "name": "Dili International School Scholarship: Full tuition and accommodation coverage for 3 DIS graduates annually; on-campus study only"
    },
    {
      "name": "Automatic consideration based on academic merit; no separate scholarship application required"
    },
    {
      "name": "Merit-based awards; academic excellence essential"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student Clubs & Societies"
  },
  "security": {
    "detail": "Security Email: security@cdu.edu.au"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2014 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_charlesdarwinuniversity, "CHARLES DARWIN UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Accounting",
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
    "name": "Bachelor of Engineering Honours",
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
    "name": "Bachelor of Nursing",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Master of Business Administration",
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
    "name": "Master of Engineering",
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
    "name": "Master of Information Technology (Cyber Security)",
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
    "name": "Master of Data Science",
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
    "name": "Master of Information Technology (Software Engineering)",
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
    "name": "Bachelor of Business : Bachelor of Business",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 28087,
    "total_fee_cad": 84261,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically mandated"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Accounting : Bachelor of Accounting",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 28087,
    "total_fee_cad": 84261,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "Mathematics",
      "English recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering Honours : Bachelor of Engineering Honours",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 35452,
    "total_fee_cad": 106356,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics strongly recommended",
      "Chemistry beneficial"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Nursing : Bachelor of Nursing",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 32025,
    "total_fee_cad": 96075,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry strongly recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology : Bachelor of Information Technology",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 31370,
    "total_fee_cad": 94110,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics recommended",
      "No specific prerequisites mandatory"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration : Master of Business Administration",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 34372,
    "total_fee_cad": 68744,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject requirement",
      "all disciplines welcome"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering : Master of Engineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 37396,
    "total_fee_cad": 74792,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Electrical",
      "Mechanical",
      "Software",
      "Environmental engineering or related field"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology (Cyber Security) : Master of Information Technology (Cyber Security)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 32796,
    "total_fee_cad": 65592,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Data Science : Master of Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 32796,
    "total_fee_cad": 65592,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology (Software Engineering) : Master of Information Technology (Software Engineering)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 32796,
    "total_fee_cad": 65592,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Submit online via student-cdu.studylink.com (no application fee)",
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
    "name": "Attach passport copy, academic transcripts, English test results",
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
    "name": "Include Statement of Purpose and CV",
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
    "name": "Provide NAATI-certified translations if needed",
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
    "name": "Await assessment (2\u20134 weeks typically)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- GRIFFITH UNIVERSITY ---
const univ_griffithuniversity = db.institutions.insertOne(inst({
  "name": "GRIFFITH UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Brisbane",
  "province": "Queensland",
  "country": "Australia",
  "campuses": [
    "Brisbane"
  ],
  "website": "",
  "application_portal": "https://www.griffith.edu.au/apply/international",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based and need-based awards available"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Vice-Chancellor\u2019s International Scholarship: 50% tuition fee reduction for entire degree (minimum GPA 6.0/7.0; requires separate application with personal statement; highly competitive)"
    },
    {
      "name": "International Student Academic Excellence Scholarship: 25% tuition fee reduction (merit-based; automatic consideration; limited places)"
    },
    {
      "name": "Griffith University International Postgraduate Research Scholarship (GUIPRS): Full tuition waiver + living stipend (research degrees PhD/Master\u2019s Research; highly competitive)"
    },
    {
      "name": "Australian Government Research Training Program (RTP) International Fee Offset: Full tuition waiver + living stipend (research degrees; Australian government-funded)"
    },
    {
      "name": "Other merit-based scholarships: Available through specific schools/faculties"
    }
  ],
  "internships": {
    "employment_rate_percent": 85
  },
  "campus_life": {
    "clubs": "Student activities: Orientation Week (with clubs fair), Trimester welcome weeks, social networking events, career fairs, cultural festivals, sports competitions, volunteer opportunities",
    "housing": "Facilities: On-campus accommodation (on-campus residential colleges and student housing), libraries with 24-hour study spaces, fitness centers (state-of-the-art gyms with 40+ group fitness classes), swimming pools, sports ovals, tennis courts, climbing walls, yoga studios, art galleries, music venues, theaters, bookstores, caf\u00e9s, bars, medical center, counseling"
  },
  "security": {
    "detail": "Partnerships: Coordination with Queensland Police, emergency services, law enforcement; after-hours support services"
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

addPrograms(univ_griffithuniversity, "GRIFFITH UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Engineering (Honours) (various specializations)",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Commerce",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Information Technology",
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
    "name": "Master of Data Science",
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
    "name": "Master of International Business",
    "faculty": "Department name: Griffith Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject prerequisites"
    ],
    "entry_roles": [
      "Business Analyst",
      "Financial Analyst",
      "Accountant",
      "Auditor",
      "Tax Specialist",
      "Finance Manager",
      "Corporate Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "Department name: Griffith Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Commerce",
      "Business",
      "Economics",
      "or related discipline preferred",
      "any degree considered"
    ],
    "entry_roles": [
      "International Business Analyst",
      "Trade Manager",
      "Export Manager",
      "Global Strategy Manager",
      "International Relations Manager",
      "Supply Chain Manager"
    ],
    "features": []
  }
]);

// --- CURTIN UNIVERSITY ---
const univ_curtinuniversity = db.institutions.insertOne(inst({
  "name": "CURTIN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Perth",
  "province": "Western Australia",
  "country": "Australia",
  "campuses": [
    "Perth"
  ],
  "website": "",
  "application_portal": "https://www.curtin.edu.au/study/apply/",
  "contacts": {
    "admissions": {
      "address": "Kent Street, Bentley, Western Australia 6102, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based and special scholarships for international students"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "International Tuition Fee Scholarship: 25% of first-year tuition fee reduction (merit-based; automatic consideration for qualifying students)"
    },
    {
      "name": "Australian Year 12 Scholarship: 25% tuition fee reduction (for international students who completed Year 12 in Australia or overseas)"
    },
    {
      "name": "Alumni and Family Scholarship: Up to 25% first-year tuition fee reduction (international students with family linkages to Curtin)"
    },
    {
      "name": "Curtin International Bursary (South Asia): Partial fee support (case-by-case; limited places)"
    },
    {
      "name": "Forrest Research Foundation PhD Scholarship: AUD 38,440/year + accommodation + research allowances (highly competitive; research degrees only)"
    }
  ],
  "internships": {
    "employment_rate_percent": 82
  },
  "campus_life": {
    "clubs": "Student activities: Orientation events (Carnival Days), social events, networking events, career fairs, cultural celebrations, student competitions, sports clubs and social sports competitions"
  },
  "security": {
    "detail": "Partnerships: Coordination with Western Australia Police, emergency services, law enforcement"
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

addPrograms(univ_curtinuniversity, "CURTIN UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) (various specializations)",
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
    "name": "Bachelor of Commerce (various specializations)",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Nursing",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Data Science",
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
    "name": "Master of Finance",
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
    "name": "Master of Information Technology",
    "faculty": "Department name: Faculty of Business and Law (School of Accounting and Finance)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "Department name: School of Computing (Faculty of Science and Engineering)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science",
      "Engineering",
      "IT",
      "or related STEM field preferred",
      "any degree with strong technical foundation considered"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Cybersecurity Specialist",
      "Cloud Architect",
      "IT Project Manager",
      "Database Administrator",
      "DevOps Engineer"
    ],
    "features": []
  }
]);

// --- SWINBURNE UNIVERSITY OF TECHNOLOGY ---
const univ_swinburneuniversityoftechnology = db.institutions.insertOne(inst({
  "name": "SWINBURNE UNIVERSITY OF TECHNOLOGY",
  "abbreviation": "",
  "type": "university",
  "city": "Melbourne",
  "province": "Victoria",
  "country": "Australia",
  "campuses": [
    "Melbourne"
  ],
  "website": "https://www.swinburne.edu.au",
  "application_portal": "Online application system (swinburne.edu.au/courses/applying)",
  "contacts": {
    "admissions": {
      "phone": "+61 3 9214 6741",
      "email": "isa@swinburne.edu.au"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Swinburne International Scholarship: 20% off tuition fees for full course duration"
    },
    {
      "name": "George Swinburne International Excellence Scholarship: 30% off tuition fees for full course duration"
    },
    {
      "name": "ELICOS Refund Scholarship: Up to AUD $5,000 refund after completing English preparatory course"
    },
    {
      "name": "Swinburne International Pathway Scholarship: Up to AUD $3,000 off for Foundation/Diploma programs"
    },
    {
      "name": "Automatic consideration upon admission application; no separate application required"
    },
    {
      "name": "Merit-based (academic excellence)"
    },
    {
      "name": "Available for undergraduate and postgraduate coursework programs at Hawthorn campus"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "The Junction: Hub for clubs and societies opposite Glenferrie railway station"
  },
  "security": {
    "detail": "Campus security: Direct number provided upon arrival"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2014 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_swinburneuniversityoftechnology, "SWINBURNE UNIVERSITY OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Engineering (Honours) \u2014 Software/Mechanical",
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
    "name": "Bachelor of Computer Science (Honours)",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Science (specialising in Physics, Chemistry, or Data Science)",
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
    "name": "Master of Business Administration",
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
    "name": "Master of Data Science",
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
    "name": "Master of Engineering",
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
    "name": "Master of Information Technology",
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
    "name": "Master of Cyber Security",
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
    "name": "Bachelor of Business : Bachelor of Business",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 15659,
    "total_fee_cad": 46977,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically mandated",
      "English",
      "Mathematics recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) \u2014 Software : Bachelor of Engineering (Honours) (Software)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 39006,
    "total_fee_cad": 117018,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (study score 20+)",
      "English (study score 23+)"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer Science (Honours) : Bachelor of Computer Science (Honours)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 34956,
    "total_fee_cad": 104868,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (study score 20+)",
      "Physics recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology : Bachelor of Information Technology",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 34200,
    "total_fee_cad": 102600,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science : Bachelor of Science",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 16200,
    "total_fee_cad": 48600,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry (depending on major)"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration : Master of Business Administration (MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 33966,
    "total_fee_cad": 67932,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject requirement",
      "all disciplines welcome"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Data Science : Master of Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 31149,
    "total_fee_cad": 62298,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering : Master of Engineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 31500,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Electrical",
      "Mechanical",
      "Software",
      "or other accredited engineering discipline"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology : Master of Information Technology",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 33381,
    "total_fee_cad": 66762,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Cyber Security : Master of Cyber Security",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 33381,
    "total_fee_cad": 66762,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- UNIVERSITY OF MELBOURNE ---
const univ_universityofmelbourne = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF MELBOURNE",
  "abbreviation": "",
  "type": "university",
  "city": "Melbourne",
  "province": "Victoria",
  "country": "Australia",
  "campuses": [
    "Melbourne"
  ],
  "website": "",
  "application_portal": "https://study.unimelb.edu.au",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 over 1,500 scholarships annually"
    },
    {
      "name": "Scholarship names: Melbourne International Undergraduate Scholarship (up to 100% fee remission), Melbourne India Postgraduate Scholarship (AUD 40,000/year for up to 2 years), Melbourne International Research Scholarship (MIRS), Faculty-specific awards"
    },
    {
      "name": "Scholarship value: Ranges from AUD 10,000\u201340,000+ depending on program and merit"
    },
    {
      "name": "Total commitment to international scholarships: Over AUD 30 million annually"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Orientation week: O-Week with clubs day, sports day, social events, and faculty-specific camps",
    "housing": "Accommodation support: Campus housing options available; off-campus rental market active"
  },
  "security": {
    "detail": "Partnerships: Collaborations with local law enforcement and security providers"
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

addPrograms(univ_universityofmelbourne, "UNIVERSITY OF MELBOURNE", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering (Software, Mechanical, Civil)",
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
    "name": "Bachelor of Biomedicine",
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
    "name": "Bachelor of Design",
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
    "name": "Master of Data Science",
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
    "name": "Master of Commerce / Finance",
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
    "name": "Master of Business Analytics",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Bachelor of Commerce :",
    "faculty": "Department name: School of Engineering (Department of Software Engineering, Mechanical Engineering, Infrastructure Engineering)",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "or similar engineering discipline"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Systems Engineer",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF WOLLONGONG ---
const univ_universityofwollongong = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF WOLLONGONG",
  "abbreviation": "",
  "type": "university",
  "city": "Wollongong",
  "province": "New South Wales",
  "country": "Australia",
  "campuses": [
    "Wollongong"
  ],
  "website": "https://www.uow.edu.au",
  "application_portal": "https://www.uow.edu.au/study/apply/",
  "contacts": {
    "admissions": {
      "email": "Life-threatening: Dial 000 (Police/Ambulance/Fire) then 4221 4900; Non-emergency: 4221 4555 | Mobile: 0407 287 750 | Email: security@uow.edu.au"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based and special bursaries for international students"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Country Specific Bursary: 10% off tuition fee (automatic for all international students; unlimited places; 2026 onwards)"
    },
    {
      "name": "University Excellence Scholarship: Merit-based; varies by amount"
    },
    {
      "name": "UOW Future Leaders Scholarship: Postgraduate coursework degrees (merit-based)"
    },
    {
      "name": "UOW Postgraduate Academic Excellence Scholarship: Postgraduate coursework; merit-based"
    },
    {
      "name": "Global Start India Scholarship: Available for Indian citizens; coursework degrees (UG & PG)"
    },
    {
      "name": "UOW-HEC Pakistan Scholarship: Joint scholarship with Pakistani Higher Education Commission (PhD level; living allowance AUD 19,000/year + tuition + OSHC)"
    },
    {
      "name": "International Postgraduate Award (IPA): Living allowance for research degrees (varies by discipline)"
    },
    {
      "name": "International Postgraduate Tuition Award (IPTA): Tuition fee waiver for research degrees (varies)"
    },
    {
      "name": "UOW College Bursaries: 20% tuition fee waiver (English Language & Academic Pathway students)"
    }
  ],
  "internships": {
    "employment_rate_percent": 80
  },
  "campus_life": {
    "clubs": "Student clubs, societies: 150+ active clubs and societies (academic/industry clubs, sports clubs, cultural/nationality clubs, spiritual clubs, creative clubs, social/activist organizations); UOWx recognition program (200+ formally recognized activities)"
  },
  "security": {
    "detail": "Partnerships: Coordination with NSW Police, emergency services, law enforcement"
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

addPrograms(univ_universityofwollongong, "UNIVERSITY OF WOLLONGONG", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Engineering (Honours) (various specializations)",
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
    "name": "Bachelor of Computer Science",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Business Analytics",
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
    "name": "Master of Computer Science",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Business Analytics",
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
    "name": "Master of Information Technology",
    "faculty": "Department name: Faculty of Business and Law / Sydney Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Advanced) helpful"
    ],
    "entry_roles": [
      "Data Analyst",
      "Business Analyst",
      "Analytics Manager",
      "Business Intelligence Analyst",
      "Finance Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (4 sessions, Trimester-based) | On-campus delivery",
    "faculty": "Department name: Faculty of Business and Law",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "or similar engineering discipline"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Engineering Manager",
      "Principal Consultant",
      "Structural Engineer (varies by specialization)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (4 sessions, Trimester-based) | On-campus delivery",
    "faculty": "Department name: Faculty of Engineering and Information Sciences",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science",
      "Engineering",
      "IT",
      "or STEM field preferred",
      "any degree with technical foundation considered"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Cybersecurity Specialist",
      "Cloud Architect",
      "IT Project Manager",
      "Database Administrator"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF QUEENSLAND ---
const univ_universityofqueensland = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF QUEENSLAND",
  "abbreviation": "",
  "type": "university",
  "city": "Brisbane",
  "province": "Queensland",
  "country": "Australia",
  "campuses": [
    "Brisbane"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "Level 2, J.D. Story Building, St Lucia QLD 4072, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 107 scholarships available for international students"
    },
    {
      "name": "Breakdown: 55 Undergraduate + 24 Honours + 56 Postgraduate + 23 Research scholarships"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Destination Australia Scholarship: AUD 15,000/year (UQ Gatton regional campus)"
    },
    {
      "name": "International High Achievers Scholarship: AUD 10,000 (students from India, Thailand, Singapore, Japan, Hong Kong)"
    },
    {
      "name": "D.P. Singhal Travel Grant: AUD 10,000 (India-related study projects)"
    },
    {
      "name": "School of Chemistry & Molecular Biosciences Indian Scholarship: AUD 10,799"
    },
    {
      "name": "UQ International Excellence Scholarship: 25% tuition fee reduction"
    },
    {
      "name": "UQ International High Achievers Award: 20% tuition fee reduction"
    }
  ],
  "internships": {
    "employment_rate_percent": 75
  },
  "campus_life": {
    "clubs": "Orientation: O-Week with clubs fair, sports day, social events, orientation activities"
  },
  "security": {
    "detail": "Partnerships: Coordination with Queensland Police and local emergency services"
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

addPrograms(univ_universityofqueensland, "UNIVERSITY OF QUEENSLAND", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Commerce / Science (double degree)",
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
    "name": "Bachelor of Computer Science / Information Technology",
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
    "name": "Master of Data Science",
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
    "name": "Master of Commerce",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Finance / Financial Mathematics",
    "faculty": "Department name: School of Information Technology & Electrical Engineering / Faculty of Engineering, Architecture & Information Technology",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Any discipline accepted",
      "business/management background advantageous"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Director",
      "Corporate Executive",
      "Finance Manager",
      "Entrepreneur",
      "Change Management Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (18 months) | On-campus delivery",
    "faculty": "Department name: School of Economics and Finance (Faculty of Business, Economics and Law)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications and specialization) | On-campus delivery",
    "faculty": "Department name: School of Economics and Finance (Faculty of Business, Economics and Law)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "Accounting",
      "Economics",
      "or quantitative business discipline preferred",
      "any degree considered"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Manager",
      "Risk Manager",
      "Corporate Finance Manager",
      "Private Equity Analyst",
      "Investment Banker",
      "Fund Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF ADELAIDE ---
const univ_universityofadelaide = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF ADELAIDE",
  "abbreviation": "",
  "type": "university",
  "city": "Adelaide",
  "province": "South Australia",
  "country": "Australia",
  "campuses": [
    "Adelaide"
  ],
  "website": "",
  "application_portal": "https://international.adelaide.edu.au/admissions/apply (direct application for international students)",
  "contacts": {
    "admissions": {
      "address": "The University of Adelaide, Adelaide SA 5005, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 extensive scholarship options available"
    },
    {
      "name": "Scholarship names (Coursework):"
    },
    {
      "name": "Global Academic Excellence Scholarship: 50% tuition fee reduction (requires GPA 6.7/7.0)"
    },
    {
      "name": "Global Citizens International Scholarship (30%): 30% tuition reduction (requires GPA 6.5/7.0)"
    },
    {
      "name": "Global Citizens International Scholarship (15%): 15% tuition reduction (requires GPA 5.5/7.0)"
    },
    {
      "name": "Adelaide Merit Scholarship: 15% tuition fee reduction (automatic for commencing students with strong academics)"
    },
    {
      "name": "Global Alumni Scholarship: 10% tuition fee reduction"
    },
    {
      "name": "University of Adelaide Onshore International Scholarship: 25% tuition reduction (for completing prior Australian qualification)"
    },
    {
      "name": "ASEAN Excellence Scholarship: 50% tuition + AUD 10,000 relocation allowance (for ASEAN students)"
    },
    {
      "name": "Research Training Program Scholarship (RTPS): 100% tuition waiver + AUD 35,300/year living stipend (PhD/MPhil)"
    },
    {
      "name": "University of Adelaide Research Scholarship (UARS): 100% tuition + AUD 35,300/year stipend"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Orientation: O-Week with clubs fair, sports day, social events, and campus tours",
    "housing": "Accommodation: On-campus residential colleges and non-residential student housing; off-campus rental in suburbs (North Terrace, Roseworthy, Waite, surrounding Adelaide suburbs)"
  },
  "security": {
    "detail": "Partnerships: Coordination with South Australian Police, emergency services"
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

addPrograms(univ_universityofadelaide, "UNIVERSITY OF ADELAIDE", [
  {
    "level": "UG",
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Information Technology / Computer Science",
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
    "name": "Bachelor of Nursing (Advanced Studies)",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Finance / Accounting & Finance",
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
    "name": "Master of Data Science",
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
    "name": "Master of Science (various: Computing, Cybersecurity)",
    "faculty": "Department name: Business School (Faculty of Arts, Business, Law & Economics)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "or similar engineering discipline"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "Department name: Faculty of Sciences / School of Computer Science (various programs available)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "STEM discipline strongly preferred"
    ],
    "entry_roles": [
      "Research Scientist",
      "Cybersecurity Specialist",
      "Systems Analyst",
      "Software Engineer",
      "Data Analyst",
      "Cloud Architect",
      "Machine Learning Engineer"
    ],
    "features": []
  }
]);

// --- LA TROBE UNIVERSITY ---
const univ_latrobeuniversity = db.institutions.insertOne(inst({
  "name": "LA TROBE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Melbourne",
  "province": "Victoria",
  "country": "Australia",
  "campuses": [
    "Melbourne"
  ],
  "website": "",
  "application_portal": "https://www.latrobe.edu.au/international/applying/how-to-apply",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based and special scholarships for international students"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "La Trobe High Achiever Scholarship: 15\u201325% tuition fee reduction based on WAM (60\u201369.9%: 15%; 70\u201374.9%: 20%; 75%+: 25%; automatic consideration; limited places)"
    },
    {
      "name": "Vice-Chancellor Scholarship \u2013 India & Sri Lanka: 100% deduction on annual tuition fees (merit-based; requires video submission; highly competitive)"
    },
    {
      "name": "La Trobe Early Acceptance Grant: AUD 2,000 applied to second semester fees (early application deadline)"
    },
    {
      "name": "Alumni Advantage Scholarship: 10% tuition fee reduction (La Trobe graduates applying for postgraduate coursework)"
    },
    {
      "name": "Wominjeka Study Abroad Scholarship: 25% tuition fee reduction (study abroad students; 1\u20132 semesters)"
    },
    {
      "name": "La Trobe Analytics & Insights Scholarship: 50\u2013100% tuition fee reduction (Data Analytics related courses; 2026)"
    },
    {
      "name": "La Trobe Artificial Intelligence Scholarship: 50\u2013100% tuition fee reduction (AI-related courses; 2026)"
    },
    {
      "name": "La Trobe Onshore Teaching Scholarship: 50% tuition fee reduction (international students in Australia; education courses)"
    },
    {
      "name": "La Trobe Greater China Digital Health Scholarship: Up to 100% tuition fee reduction (Chinese international students; health courses)"
    },
    {
      "name": "Australia Awards Program: Merit-based; includes living allowance"
    }
  ],
  "internships": {
    "employment_rate_percent": 4
  },
  "campus_life": {
    "clubs": "Student clubs, societies: 150+ active clubs and societies (academic/industry clubs, sports clubs, cultural/nationality clubs, spiritual clubs, creative clubs); recognized through UOWx recognition program"
  },
  "security": {
    "detail": "Partnerships: Coordination with Victorian Police and emergency services"
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

addPrograms(univ_latrobeuniversity, "LA TROBE UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Engineering (Honours) (various specializations)",
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
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Science",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Information Technology",
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
    "name": "Master of Data Science",
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
    "name": "Master of Commerce",
    "faculty": "Department name: Faculty of Business & Economics",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Math",
      "Science subjects preferred",
      "specific majors require relevant science subjects"
    ],
    "entry_roles": [
      "Research Scientist",
      "Data Analyst",
      "Laboratory Technician",
      "Environmental Consultant",
      "Science Teacher",
      "Software Developer",
      "Bioinformatician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications and specialization) | On-campus delivery",
    "faculty": "Department name: Faculty of Business & Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Commerce",
      "Accounting",
      "Finance",
      "Business",
      "Economics",
      "or related discipline preferred",
      "any degree considered"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Accountant",
      "Auditor",
      "Tax Specialist",
      "Finance Manager",
      "Business Analyst",
      "Corporate Manager"
    ],
    "features": []
  }
]);

// --- WESTERN SYDNEY UNIVERSITY ---
const univ_westernsydneyuniversity = db.institutions.insertOne(inst({
  "name": "WESTERN SYDNEY UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Sydney",
  "province": "New South Wales",
  "country": "Australia",
  "campuses": [
    "Sydney"
  ],
  "website": "https://www.westernsydney.edu.au",
  "application_portal": "student-westernsydney.studylink.com",
  "contacts": {
    "admissions": {
      "phone": "1300 897 669",
      "email": "internationalstudy@westernsydney.edu.au"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Regional Achievement Award: AUD $5,000\u2013$10,000 (North Asia & Southeast Asia eligible)"
    },
    {
      "name": "Vice-Chancellor\u2019s Academic Excellence (Undergraduate): 50% of tuition fees for 3 years"
    },
    {
      "name": "International Undergraduate Scholarship: AUD $6,000 or $3,000 per year (up to 3 years)"
    },
    {
      "name": "International Postgraduate Scholarship: AUD $6,000 or $3,000 per year (up to 2 years)"
    },
    {
      "name": "Australia Awards Scholarship: Funded by Australian Government (mainly postgraduate)"
    }
  ],
  "internships": {
    "employment_rate_percent": 70
  },
  "campus_life": {
    "clubs": "Option to start new clubs (requires 10 founding members)"
  },
  "security": {
    "detail": "NSW Security Master Licence No: 407734383"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2014 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_westernsydneyuniversity, "WESTERN SYDNEY UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Engineering (Honours) - Mechanical",
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
    "name": "Bachelor of Nursing",
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
    "name": "Bachelor of Information and Communications Technology",
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
    "name": "Bachelor of Computer Science",
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
    "name": "Master of Business Administration",
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
    "name": "Master of Data Science",
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
    "name": "Master of Engineering",
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
    "name": "Master of Public Health",
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
    "name": "Master of Information and Communications Technology",
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
    "name": "Bachelor of Business : Bachelor of Business",
    "faculty": "Department Name: School of Business",
    "duration_years": 3,
    "annual_fee_cad": 34337,
    "total_fee_cad": 103011,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically mandated"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Honours) - Mechanical : Bachelor of Engineering (Honours) - Mechanical Engineering",
    "faculty": "Department Name: School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 36824,
    "total_fee_cad": 110472,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics & Physics recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Nursing : Bachelor of Nursing",
    "faculty": "Department Name: School of Health Sciences",
    "duration_years": 3,
    "annual_fee_cad": 33285,
    "total_fee_cad": 99855,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology & Chemistry strongly recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information and Communications Technology : Bachelor of Information and Communications Technology (ICT)",
    "faculty": "Department Name: School of Computer, Data and Mathematical Sciences",
    "duration_years": 3,
    "annual_fee_cad": 36114,
    "total_fee_cad": 108342,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer Science : Bachelor of Computer Science",
    "faculty": "Department Name: School of Computer, Data and Mathematical Sciences",
    "duration_years": 3,
    "annual_fee_cad": 36114,
    "total_fee_cad": 108342,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics strongly recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration : Master of Business Administration (MBA)",
    "faculty": "Department Name: Sydney Graduate School of Management (SGSM)",
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
    "name": "5-year pathway: 1.5 years full-time OR 3 years part-time (available from Q1 2025)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 38191,
    "total_fee_cad": 76382,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Data Science : Master of Data Science",
    "faculty": "Department Name: School of Computer, Data and Mathematical Sciences",
    "duration_years": 2,
    "annual_fee_cad": 33019,
    "total_fee_cad": 66038,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering : Master of Engineering",
    "faculty": "Department Name: School of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 35330,
    "total_fee_cad": 70660,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Health : Master of Public Health",
    "faculty": "Department Name: School of Health Sciences",
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
    "name": "5\u20132 years full-time (varies by entry pathway)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 33528,
    "total_fee_cad": 67056,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information and Communications Technology : Master of Information and Communications Technology (ICCT)",
    "faculty": "Department Name: School of Computer, Data and Mathematical Sciences",
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
    "name": "5\u20132 years full-time (depends on entry qualifications)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 35330,
    "total_fee_cad": 70660,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- QUEENSLAND UNIVERSITY OF TECHNOLOGY ---
const univ_queenslanduniversityoftechnology = db.institutions.insertOne(inst({
  "name": "QUEENSLAND UNIVERSITY OF TECHNOLOGY",
  "abbreviation": "QUT",
  "type": "university",
  "city": "Brisbane",
  "province": "Queensland",
  "country": "Australia",
  "campuses": [
    "Brisbane"
  ],
  "website": "",
  "application_portal": "www.qut.edu.au/study (direct application for international students)",
  "contacts": {
    "admissions": {
      "address": "Victoria Park Road, Kelvin Grove QLD 4059, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based automatic scholarships for international students"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "QUT International Merit Scholarship: 25% of tuition fees per semester (ongoing; automatic consideration; academic merit-based)"
    },
    {
      "name": "QUT International Talent Scholarship: 20% of tuition fees per semester (artistic/cultural talent-based)"
    },
    {
      "name": "QUT India $10,000 Early Acceptance Scholarship: AUD 10,000 in second semester first year; AUD 5,000 per semester thereafter (Indian citizens living in India)"
    },
    {
      "name": "QUT Real World Scholarship: Not publicly disclosed (available; merit + criteria-based)"
    },
    {
      "name": "QUT College Merit Scholarship: 25% of tuition fees for pathway programs (QUT College students progressing to QUT)"
    }
  ],
  "internships": {
    "employment_rate_percent": 75
  },
  "campus_life": {
    "clubs": "Student activities: Orientation Week (O-Week) with clubs fair and sports day, semester welcome weeks, student employment program (STEP), networking events, career fairs, cultural celebrations, monthly guild events"
  },
  "security": {
    "detail": "Facilities: First aid officers in buildings, Building Wardens, Fire Wardens, emergency response procedures"
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

addPrograms(univ_queenslanduniversityoftechnology, "QUEENSLAND UNIVERSITY OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Information Technology",
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
    "name": "Bachelor of Business",
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
    "name": "Bachelor of Nursing",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Science",
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
    "name": "Master of Information Technology",
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
    "name": "Master of Engineering (various specializations)",
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
    "name": "Master of Data Science",
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
    "name": "Master of Business (various specializations)",
    "faculty": "Department name: Faculty of Business",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on specialization) | On-campus delivery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Commerce",
      "Business",
      "Finance",
      "Economics",
      "or related discipline",
      "any degree considered"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Finance Manager",
      "Strategy Analyst",
      "Marketing Manager",
      "Operations Manager"
    ],
    "features": []
  }
]);

// --- RMIT UNIVERSITY ---
const univ_rmituniversity = db.institutions.insertOne(inst({
  "name": "RMIT UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Melbourne",
  "province": "Victoria",
  "country": "Australia",
  "campuses": [
    "Melbourne"
  ],
  "website": "",
  "application_portal": "https://www.rmit.edu.au/study-with-us/international-students/apply-to-rmit-international-students",
  "contacts": {
    "admissions": {
      "address": "124 La Trobe Street, Melbourne VIC 3000, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 extensive merit-based awards for international students"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Future Leaders Scholarship: 20% tuition fee reduction (all countries including India; up to 5 years UG, 2 years PG)"
    },
    {
      "name": "RMIT Vice-Chancellor\u2019s Scholarship: 100% tuition waiver (highly competitive; research degrees)"
    },
    {
      "name": "RMIT Research Stipend Scholarship (RSS): Full tuition + AUD 35,886/year living stipend (PhD/Master\u2019s Research)"
    },
    {
      "name": "RTP International Fee Offset Scholarship (RIFOS): Full international tuition waiver (research degrees)"
    },
    {
      "name": "RMIT Research International Tuition Fee Scholarship (RRITFS): Full tuition waiver + living allowance (research)"
    },
    {
      "name": "Foundation Academic Scholarship: AUD 5,000 one-time toward Foundation Studies tuition"
    },
    {
      "name": "Medibank Student Success Grant: AUD 2,000 (living costs)"
    },
    {
      "name": "Other: Destination Australia Scholarship; country-specific scholarships; discipline-specific awards"
    }
  ],
  "internships": {
    "part_time_work": "Internship opportunities during study: Yes \u2014 Work Integrated Learning (WIL) placements for academic credit; Co-operative Education program (compulsory 10\u201312 month placement for Bachelor of Business Professional/Applied degrees); Undergraduate and Postgraduate Business Internship electives (100\u2013180 hours; assessed for credit); discipline-specific internships (Engineering, Design, Law); online and in-country internship options",
    "coop_available": true,
    "employment_rate_percent": 82
  },
  "campus_life": {
    "clubs": "Student activities: Orientation Week (O-Week) with clubs fair, sports day, social events; Campus Fest (2-day clubs and activities fair); monthly RMIT Games Day tournaments (gaming competitions); RMIT X Midsumma Festival (LGBTIQA+ celebrations); Study Expo; Industry Insight Sessions; career fairs; on-campus entertainment events",
    "housing": "Accommodation: Limited on-campus residential places available through RMIT Housing (studios and apartments); extensive off-campus rental market in inner-city Melbourne suburbs (Brunswick, Fitzroy, Collingwood, Parkville, Northcote, Abbotsford, Richmond)"
  },
  "security": {
    "detail": "Facilities: First aid services, emergency evacuation procedures in all buildings, Building Wardens, Fire Wardens"
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

addPrograms(univ_rmituniversity, "RMIT UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Nursing",
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
    "name": "Bachelor of Business (various specializations)",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Computer Science / Information Technology",
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
    "name": "Bachelor of Data Science",
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
    "name": "Master of Data Science",
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
    "name": "Master of Artificial Intelligence",
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
    "name": "Master of Professional Engineering (various specializations)",
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
    "name": "Master of Information Technology / Cybersecurity",
    "faculty": "Department name: College of Science, Engineering & Health (School of Computing)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "or similar engineering discipline",
      "3-year degree minimum"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer (varies by specialization)",
      "Professional Accredited Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (1.5 for IT background; 2 for non-IT background) | On-campus delivery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "IT or computer science background preferred for 1.5-year pathway",
      "other STEM fields considered for extended pathway"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Database Administrator",
      "Cybersecurity Specialist",
      "Cloud Architect",
      "Network Engineer",
      "IT Project Manager",
      "DevOps Engineer"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF WESTERN AUSTRALIA ---
const univ_universityofwesternaustralia = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF WESTERN AUSTRALIA",
  "abbreviation": "UWA",
  "type": "university",
  "city": "Perth",
  "province": "Western Australia",
  "country": "Australia",
  "campuses": [
    "Perth"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "35 Stirling Highway, Crawley WA 6009, Australia"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 merit-based scholarships available"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "UWA Global Excellence Scholarship: Up to AUD 48,000 over 4 years (undergraduate); Up to AUD 36,000 over 3 years (undergraduate); Up to AUD 24,000 over 2 years (postgraduate)"
    },
    {
      "name": "Automatic Merit-Based Award: No separate application required; assessed upon admission"
    },
    {
      "name": "Eligibility: Minimum ATAR equivalent 85.00 (undergraduate) or WAM 65.00 (postgraduate)"
    },
    {
      "name": "For approved International Academic Pathway (Articulation Program) students: WAM equivalent more than 75.00"
    },
    {
      "name": "Available to: All countries"
    },
    {
      "name": "UWA International Postgraduate Research Scholarship (IPRS): Full tuition waiver + stipend (for research degrees)"
    }
  ],
  "internships": {
    "employment_rate_percent": 85
  },
  "campus_life": {
    "clubs": "Student activities: O-Day (Orientation) with 140+ clubs, Club Carnival each semester, Tuesday quiz nights at UWA Tavern, open-mic nights, outdoor cinema (Somerville Auditorium), concerts, theatre performances",
    "housing": "Accommodation: On-campus residential colleges and non-residential student housing; off-campus rental in Perth suburbs (Crawley, Claremont, Cottesloe areas)"
  },
  "security": {
    "detail": "Partnerships: Coordination with Western Australian Police, Fire and Rescue Services, emergency services"
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

addPrograms(univ_universityofwesternaustralia, "UNIVERSITY OF WESTERN AUSTRALIA", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Advanced Computer Science",
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
    "name": "Bachelor of Business / Information Technology",
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
    "name": "Master of Professional Engineering (various specializations)",
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
    "name": "Master of Data Science",
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
    "name": "Master of Information Technology",
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
    "name": "Master of Finance / Accounting & Finance",
    "faculty": "Department name: Business School (Faculty of Business, Law, and Arts)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "No specific prerequisites"
    ],
    "entry_roles": [
      "Business Analyst",
      "Operations Analyst",
      "Program Manager",
      "Project Coordinator",
      "Management Consultant",
      "Strategy Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depends on background) | On-campus delivery",
    "faculty": "Department name: School of Physics, Mathematics & Computing / Faculty of Science",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "or similar engineering discipline",
      "3-year degree minimum"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer (varies by specialization)",
      "Professional Accredited Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (18 months) | On-campus delivery",
    "faculty": "Department name: School of Physics, Mathematics & Computing / Faculty of Science",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depends on background) | On-campus delivery",
    "faculty": "Department name: Business School (Faculty of Business, Law, and Arts)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "IT or computer science background preferred",
      "other STEM backgrounds considered"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Analyst",
      "IT Consultant",
      "Database Administrator",
      "Cybersecurity Specialist",
      "Cloud Architect",
      "Network Engineer",
      "IT Project Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (depending on prior qualifications) | On-campus delivery",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Commerce",
      "Accounting",
      "Finance",
      "Business",
      "or Economics discipline",
      "any degree considered"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Accountant",
      "Investment Manager",
      "Risk Manager",
      "Corporate Finance Manager",
      "Private Equity Analyst",
      "Auditor",
      "Management Accountant"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF SYDNEY ---
const univ_universityofsydney = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF SYDNEY",
  "abbreviation": "",
  "type": "university",
  "city": "Sydney",
  "province": "New South Wales",
  "country": "Australia",
  "campuses": [
    "Sydney"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 90,
  "intakes": [
    "Fall (September / July)",
    "Spring (February / January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2014 substantial funding available"
    },
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Sydney Scholars India Scholarship Program (28 scholarships annually; AUD 500,000 total pool)"
    },
    {
      "name": "Sydney International Student Award (20% tuition fee contribution)"
    },
    {
      "name": "Faculty-specific scholarships"
    },
    {
      "name": "Sydney Scholars India details: 2x 100% tuition for UG (up to 4 years); 10x AUD 20,000 first-year; 16x AUD 10,000 first-year"
    },
    {
      "name": "Deadline: April 1 \u2013 May 25 (annual)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student clubs, societies: 270+ clubs and societies; Sydney Uni Sport with 40+ sporting clubs",
    "housing": "Accommodation: Campus housing available; off-campus rental market active"
  },
  "security": {
    "detail": "Partnerships: Local law enforcement, emergency services coordination"
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

addPrograms(univ_universityofsydney, "UNIVERSITY OF SYDNEY", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce",
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
    "name": "Bachelor of Science",
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
    "name": "Bachelor of Engineering Honours (various specializations)",
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
    "name": "Bachelor of Advanced Computing",
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
    "name": "Bachelor of Nursing (Advanced Studies)",
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
    "name": "Master of Data Science",
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
    "name": "Master of Commerce",
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
    "name": "Master of Management",
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
    "name": "Master of Professional Engineering",
    "faculty": "Department name: University of Sydney Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 93,
    "required_subjects": [
      "Biology",
      "Chemistry (compulsory)",
      "English (essential for nursing communication)"
    ],
    "entry_roles": [
      "Registered Nurse",
      "Clinical Nurse",
      "Nurse Educator",
      "Community Health Nurse",
      "Hospital Nurse",
      "Aged Care Nurse"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (18 months) | On-campus delivery; Campus: Camperdown/CBD",
    "faculty": "Department name: School of Mathematics and Statistics (Faculty of Science)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline accepted",
      "business/economics background advantageous"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Finance Manager",
      "Director",
      "Entrepreneur",
      "Corporate Executive",
      "Change Management Specialist",
      "Marketing Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years full-time (18 months) | On-campus or Online delivery options available",
    "faculty": "Department name: University of Sydney Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "statistics",
      "or programming essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Analyst",
      "Analytics Manager",
      "Research Scientist",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "5\u20132 years full-time (variable depending on specialization and prior qualifications) | On-campus delivery; Campus: Camperdown/CBD",
    "faculty": "Department name: Faculty of Engineering (multiple schools: Civil, Mechanical, Electrical, Software, Chemical, Biomedical, Project Management)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Software",
      "Chemical",
      "Biomedical",
      "or similar engineering discipline"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Project Manager",
      "Design Engineer",
      "Principal Consultant",
      "Engineering Manager",
      "Systems Engineer",
      "Structural Engineer (varies by specialization)"
    ],
    "features": []
  }
]);

print("Australia Seeding Completed!");