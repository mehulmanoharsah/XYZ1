// ============================================================
// FRENCH UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions france_universities_seed.js
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

// Delete existing French data to prevent duplicates
db.institutions.deleteMany({ country: "France" });
db.programs.deleteMany({ institution_name: { $in: [
  "HEC PARIS",
  "SKEMA BUSINESS SCHOOL",
  "SCHILLER INTERNATIONAL UNIVERSITY",
  "TBS EDUCATION",
  "UNIVERSITÉ PARIS CITÉ",
  "UNIVERSITÉ PARIS-SACLAY",
  "RENNES SCHOOL OF BUSINESS",
  "KEDGE BUSINESS SCHOOL",
  "INSTITUT POLYTECHNIQUE DE PARIS",
  "NEOMA BUSINESS SCHOOL",
  "INSEAD",
  "AUDENCIA BUSINESS SCHOOL",
  "ÉCOLE DES PONTS",
  "SCIENCES PO",
  "EDHEC BUSINESS SCHOOL",
  "COLLÈGE DE PARIS",
  "ESSEC Business School",
  "UNIVERSITÉ GRENOBLE ALPES",
  "SORBONNE UNIVERSITY",
  "UNIVERSITÉ PSL",
] } });

// --- HEC PARIS ---
const univ_hecparis = db.institutions.insertOne(inst({
  "name": "HEC PARIS",
  "abbreviation": "",
  "type": "university",
  "city": "Jouy-en-Josas",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Jouy-en-Josas"
  ],
  "website": "https://www.hec.edu/en",
  "application_portal": "Via Bocconi University application portal",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 39 67 70 00"
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
      "name": "MBA Scholarship for Excellence: Merit-based; up to 50% tuition coverage; automatic consideration"
    },
    {
      "name": "Equal Opportunity Scholarship: Need-based; up to 35% of tuition fees for underrepresented students"
    },
    {
      "name": "Diversity Scholarship: Merit-based; up to 50% tuition for students bringing unique perspectives"
    },
    {
      "name": "Fort\u00e9 Foundation Scholarship for Women: \u20ac26,000+ for female MBA candidates"
    },
    {
      "name": "30% Club Scholarship: 50% first-year tuition for women in business leadership"
    },
    {
      "name": "CMA-CGM Excellence Fund for Education: Need-based; amount varies based on jury decision"
    },
    {
      "name": "Eiffel Scholarship (France Excellence): \u20ac1,181/month (Master\u2019s), covers tuition exemption, health insurance, travel costs"
    },
    {
      "name": "L\u2019OREAL Scholarship: Up to \u20ac10,000 for candidates demonstrating professional success and leadership"
    },
    {
      "name": "Paris Saclay Innovation Cluster Scholarship: \u20ac16,000 for candidates from PS institutions"
    },
    {
      "name": "ARD/HEC Paris Scholarship: \u20ac16,000 for armed forces officers transitioning to civilian careers"
    }
  ],
  "internships": {
    "part_time_work": "Formal internship minimum \u20ac4.35/hour gross for paid placements",
    "coop_available": true,
    "employment_rate_percent": 99
  },
  "campus_life": {
    "clubs": "130+ student clubs and associations; 150+ clubs & societies across campus",
    "housing": "Housing support through campus residences office"
  },
  "security": {
    "detail": "24-hour campus security across all facilities"
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

addPrograms(univ_hecparis, "HEC PARIS", [
  {
    "level": "UG",
    "name": "Bachelor of Arts & Science in Data, Society & Organizations (HEC-Bocconi double degree) - 3 years",
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
    "name": "Not publicly available for other undergraduate programs; HEC primarily offers postgraduate Master\u2019s and MBA programs",
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
    "name": "Grande Ecole pathway limited (typically French students via concours system)",
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
    "name": "Master in Management (MiM) - Grande Ecole Program, 24 months, 250 students/cohort",
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
    "name": "MBA Program - 16 months, requires work experience",
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
    "name": "M.Sc. in International Finance - 18-24 months, quantitative track",
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
    "name": "M.Sc. in Data Science & AI - 12-18 months",
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
    "name": "Specialized Master\u2019s programs (Consulting, Entrepreneurship, Sustainability, Digital Transformation)",
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
    "name": "Bachelor of Arts & Science in Data, Society & Organizations (HEC-Bocconi)",
    "faculty": "HEC Paris & Bocconi University (collaborative program)",
    "duration_years": 3,
    "annual_fee_cad": 33187,
    "total_fee_cad": 99561,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Data analyst",
      "data scientist",
      "business analyst",
      "management consultant",
      "entrepreneur",
      "policy advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (Grande Ecole Program/MiM)",
    "faculty": "HEC Paris",
    "duration_years": 2,
    "annual_fee_cad": 39750,
    "total_fee_cad": 79500,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific discipline required",
      "welcomes all fields (engineering, sciences, arts, social sciences)"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy analyst",
      "finance professional",
      "entrepreneur",
      "venture capitalist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA Program",
    "faculty": "HEC Paris MBA Program",
    "duration_years": 0.5,
    "annual_fee_cad": 54000,
    "total_fee_cad": 108000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific field required",
      "strong academic foundation essential"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "private equity professional",
      "strategy executive",
      "CFO track",
      "entrepreneur",
      "tech leader"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "M.Sc. in International Finance",
    "faculty": "HEC Paris",
    "duration_years": 2,
    "annual_fee_cad": 34500,
    "total_fee_cad": 69000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative background required",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics",
      "calculus"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "portfolio manager",
      "financial analyst",
      "risk analyst",
      "derivatives trader",
      "equity researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.Sc. in Data Science & Artificial Intelligence",
    "faculty": "HEC Paris",
    "duration_years": 2,
    "annual_fee_cad": 31350,
    "total_fee_cad": 62700,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in programming",
      "machine learning",
      "statistics",
      "mathematics required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "analytics consultant",
      "data engineer",
      "business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Specialized Master\u2019s Programs (Consulting, Entrepreneurship, Sustainability, Digital Transformation)",
    "faculty": "HEC Paris",
    "duration_years": 2,
    "annual_fee_cad": 30000,
    "total_fee_cad": 60000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Varies by specialization",
      "Consulting requires analytical background",
      "Entrepreneurship welcomes diverse backgrounds",
      "Sustainability requires environmental/business interest"
    ],
    "entry_roles": [
      "Management consultant",
      "startup founder/manager",
      "sustainability consultant",
      "digital transformation officer",
      "innovation manager",
      "strategy consultant"
    ],
    "features": []
  }
]);

// --- SKEMA BUSINESS SCHOOL ---
const univ_skemabusinessschool = db.institutions.insertOne(inst({
  "name": "SKEMA BUSINESS SCHOOL",
  "abbreviation": "",
  "type": "university",
  "city": "Lille",
  "province": "Hauts-de-France",
  "country": "France",
  "campuses": [
    "Lille"
  ],
  "website": "https://www.skema.edu/en",
  "application_portal": "https://www.skema.edu/en/apply",
  "contacts": {
    "admissions": {
      "email": "international.office@skema.edu"
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
      "name": "Eiffel Excellence Scholarship (French Ministry): \u20ac1,181-\u20ac1,700/month (Master\u2019s) plus travel, health insurance, housing assistance"
    },
    {
      "name": "SKEMA Excellence Scholarship: \u20ac1,500-\u20ac5,000 (merit-based for high achievers); considered automatically upon admission"
    },
    {
      "name": "SKEMA Master in Management Award: \u20ac3,000 deductible from tuition fees (international students)"
    },
    {
      "name": "MSc Excellence Scholarship: Up to \u20ac4,000 (deducted from tuition fees; 1-year only for 2-year programs)"
    },
    {
      "name": "BBA Sport Excellence Award: Up to \u20ac2,000/year (athlete students)"
    },
    {
      "name": "Early Enrolment Scholarship (BBA/MSc): \u20ac1,000 for outstanding students confirming registration before July 31"
    },
    {
      "name": "BBA Financial Assistance: \u20ac2,000-\u20ac4,000 for international students demonstrating financial need"
    },
    {
      "name": "Women in Finance/Business/Data Science: Up to 50% tuition fee reduction (merit-based for female candidates)"
    },
    {
      "name": "MSc Digital Business Scholarship: \u20ac4,900 (INR equivalent)"
    },
    {
      "name": "French Government Grants: Various amounts for non-French students meeting criteria"
    }
  ],
  "internships": {
    "part_time_work": "Internship minimum compensation: \u20ac4.35/hour gross for formal internships \u22652 months duration",
    "coop_available": true,
    "employment_rate_percent": 99
  },
  "campus_life": {
    "housing": "Housing support and accommodation coordination services",
    "clubs": "NC State Partnership (Raleigh): Access to 600+ student clubs, libraries, fitness facilities, health center, dining halls"
  },
  "security": {
    "detail": "Coordination with French national security systems and local authorities"
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

addPrograms(univ_skemabusinessschool, "SKEMA BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "Global BBA - Business Management Track (4 years, English-taught)",
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
    "name": "Global BBA - Global Business Track (4 years, English-taught, international focus)",
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
    "name": "Global BBA - Finance Specialization (4 years)",
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
    "name": "Global BBA - Environmental Management Specialization (4 years)",
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
    "name": "Global BBA - Entrepreneurship Specialization (4 years)",
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
    "name": "Master in Management (MiM) Grande Ecole - 4 specializations (24 months)",
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
    "name": "MSc Financial Markets & Investments (FMI) - 1 or 2 years, ranked 3rd worldwide (FT 2024)",
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
    "name": "MSc International Business (1 or 2 years)",
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
    "name": "MSc Corporate Financial Management (1 or 2 years)",
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
    "name": "MSc Auditing, Management Accounting & Information Systems (1 or 2 years)",
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
    "name": "Global BBA - Business Management Track",
    "faculty": "SKEMA Business School, Multiple Campuses",
    "duration_years": 3,
    "annual_fee_cad": 22650,
    "total_fee_cad": 67950,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization required (all streams welcome)"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "corporate strategist",
      "finance analyst",
      "product manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global BBA - Global Business Track",
    "faculty": "SKEMA Business School, Lille/Sophia Antipolis/Paris/Raleigh Campuses",
    "duration_years": 3,
    "annual_fee_cad": 34575,
    "total_fee_cad": 103725,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization"
    ],
    "entry_roles": [
      "International business analyst",
      "management consultant",
      "export/import specialist",
      "multinational corporate professional",
      "global entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global BBA - Finance Specialization",
    "faculty": "SKEMA Business School",
    "duration_years": 3,
    "annual_fee_cad": 29362,
    "total_fee_cad": 88086,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "business foundations"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment banker",
      "corporate finance manager",
      "financial consultant",
      "risk analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM) Grande Ecole Program",
    "faculty": "SKEMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 27750,
    "total_fee_cad": 55500,
    "min_class12_percent": 70,
    "required_subjects": [
      "All academic backgrounds welcome",
      "no specific discipline required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy analyst",
      "finance professional",
      "entrepreneur",
      "corporate strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Financial Markets & Investments (FMI)",
    "faculty": "SKEMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation mandatory",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics",
      "calculus required"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "portfolio manager",
      "financial analyst",
      "risk manager",
      "derivatives trader",
      "hedge fund analyst",
      "equity researcher",
      "asset manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Business",
    "faculty": "SKEMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "international relations",
      "or quantitative disciplines"
    ],
    "entry_roles": [
      "International business analyst",
      "global manager",
      "export/import specialist",
      "consulting professional",
      "international entrepreneur",
      "market development manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Corporate Financial Management",
    "faculty": "SKEMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 28500,
    "total_fee_cad": 57000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "accounting",
      "business administration",
      "or engineering with finance/analytical projects"
    ],
    "entry_roles": [
      "Corporate finance manager",
      "financial analyst",
      "treasury manager",
      "CFO-track professional",
      "business finance specialist",
      "M&A analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Auditing, Management Accounting & Information Systems",
    "faculty": "SKEMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Accounting",
      "finance",
      "business administration",
      "mathematics",
      "or economics"
    ],
    "entry_roles": [
      "Internal auditor",
      "financial auditor",
      "management accountant",
      "compliance officer",
      "systems auditor",
      "audit consultant",
      "financial controller"
    ],
    "features": []
  }
]);

// --- SCHILLER INTERNATIONAL UNIVERSITY ---
const univ_schillerinternationaluniversity = db.institutions.insertOne(inst({
  "name": "SCHILLER INTERNATIONAL UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Paris",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Paris"
  ],
  "website": "https://www.schiller.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "Available through contact form on official website"
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
      "name": "International Scholarship (merit-based): $3,840/\u20ac2,464 per semester (undergraduate); $1,300/\u20ac1,040 per semester (graduate)"
    },
    {
      "name": "Diplomatic Scholarship: $4,800/\u20ac3,080 per semester (undergraduate); $2,300/\u20ac1,700 per semester (graduate); for embassy/diplomatic mission employees and dependents"
    },
    {
      "name": "Presidents\u2019 Undergraduate and Graduate Scholarship: $4,800/\u20ac3,080 per semester; requires 2.5+ GPA (undergraduate) or 3.0+ (graduate)"
    },
    {
      "name": "Academic Excellence Scholarship (Undergraduate): $8,640/\u20ac5,544 per semester"
    },
    {
      "name": "Schiller Premier Scholarship: 10% of tuition fee reduction"
    },
    {
      "name": "Schiller Student and Alumni Referral Scholarship: 10-25% of tuition fees"
    },
    {
      "name": "International Enrollment Scholarship: 20% scholarship for visa-required students (Tampa, Madrid, Paris); 50% scholarship for visa-free students (EU/UK/US); 50% for all Heidelberg students"
    },
    {
      "name": "Early Bird Scholarship: Additional 10% scholarship for early payment"
    },
    {
      "name": "Partners, Suppliers, Associations Scholarship: 10% of tuition fees"
    },
    {
      "name": "Global Intern Scholarship: $500/month for up to 6 months"
    },
    {
      "name": "Employer Reimbursement Matching Scholarship: Up to $4,000/\u20ac3,000 annually for tuition reimbursement eligibility"
    },
    {
      "name": "COVID-19 Pandemic Scholarship (graduate): 25-50% of tuition fee reduction for deserving students"
    },
    {
      "name": "Inter-campus Transfer (ICT) Scholarship: $1,680/\u20ac1,320 per semester"
    },
    {
      "name": "One World-One University Scholarship: $4,800/$\u20ac3,080"
    },
    {
      "name": "Golden Key Honor Society Scholarship: $2,280/\u20ac1,800 per semester"
    }
  ],
  "internships": {
    "part_time_work": "Career advice and job placement assistance",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Life page featuring activities, events, and student-organized clubs",
    "housing": "Local partnerships for student services and accommodations"
  },
  "security": {
    "detail": "24-hour emergency support through student services"
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

addPrograms(univ_schillerinternationaluniversity, "SCHILLER INTERNATIONAL UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in International Business (4 years, on-campus and online options)",
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
    "name": "Bachelor\u2019s program (general, 4 years)",
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
    "name": "Bachelor of Science in International Business (Online/Distance Learning option)",
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
    "name": "Bachelor programs with campus flexibility (multi-campus options available)",
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
    "name": "Customizable Bachelor\u2019s degree path (students can take courses across 4 campuses)",
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
    "name": "Master of Business Administration (MBA) - 12 months",
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
    "name": "Graduate programs (multi-specialization options)",
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
    "name": "Distance Learning Master\u2019s programs (Online options)",
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
    "name": "Master\u2019s programs available on multiple campuses (Paris, Madrid, Heidelberg)",
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
    "name": "Bachelor of Science in International Business",
    "faculty": "Schiller International University, Multi-campus",
    "duration_years": 3,
    "annual_fee_cad": 23100,
    "total_fee_cad": 69300,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "International business analyst",
      "business consultant",
      "corporate manager",
      "international entrepreneur",
      "global operations manager",
      "finance professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in International Business - Online (Distance Learning)",
    "faculty": "Schiller International University",
    "duration_years": 3,
    "annual_fee_cad": 15000,
    "total_fee_cad": 45000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "international business professional",
      "project manager",
      "entrepreneur",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in International Business - Multi-Campus Track",
    "faculty": "Schiller International University (Paris, Madrid, Heidelberg, Tampa campuses)",
    "duration_years": 3,
    "annual_fee_cad": 23100,
    "total_fee_cad": 69300,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "International business professional",
      "global manager",
      "multinational corporate consultant",
      "international entrepreneur",
      "global operations director"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Degree - General Business (Customizable)",
    "faculty": "Schiller International University",
    "duration_years": 3,
    "annual_fee_cad": 23100,
    "total_fee_cad": 69300,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "Business analyst",
      "consultant",
      "corporate manager",
      "project manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s Degree - International Business with Multiple Specialization Options",
    "faculty": "Schiller International University",
    "duration_years": 3,
    "annual_fee_cad": 23100,
    "total_fee_cad": 69300,
    "min_class12_percent": 70,
    "required_subjects": [
      "Depends on chosen specialization",
      "strong analytical foundation preferred"
    ],
    "entry_roles": [
      "Specialized business analyst",
      "consultant in chosen field",
      "international manager",
      "project specialist",
      "sectoral entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Schiller International University",
    "duration_years": 2,
    "annual_fee_cad": 29340,
    "total_fee_cad": 58680,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strategic/analytical thinking",
      "professional maturity"
    ],
    "entry_roles": [
      "Business leader",
      "executive manager",
      "director",
      "C-suite track",
      "management consultant",
      "entrepreneur",
      "strategic manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree (General - Multi-Specialization)",
    "faculty": "Schiller International University, Multi-campus",
    "duration_years": 2.0,
    "annual_fee_cad": 16200,
    "total_fee_cad": 32400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Varies by specialization"
    ],
    "entry_roles": [
      "Management professional",
      "business analyst",
      "consultant",
      "project manager",
      "specialist in chosen field"
    ],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree - Online/Distance Learning (Multi-Program)",
    "faculty": "Schiller International University",
    "duration_years": 2,
    "annual_fee_cad": 16200,
    "total_fee_cad": 32400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Varies by program specialization"
    ],
    "entry_roles": [
      "Remote business professional",
      "virtual project manager",
      "digital strategist",
      "consultant",
      "online business specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree - International Relations Specialization",
    "faculty": "Schiller International University",
    "duration_years": 2,
    "annual_fee_cad": 16200,
    "total_fee_cad": 32400,
    "min_class12_percent": 70,
    "required_subjects": [
      "International relations",
      "diplomacy",
      "political science",
      "international business",
      "or related field"
    ],
    "entry_roles": [
      "Diplomatic professional",
      "international relations specialist",
      "policy analyst",
      "international business manager",
      "NGO professional",
      "government advisor",
      "UNESCO/UN professional track"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s Degree - Specialized Programs (Various Specializations Available)",
    "faculty": "Schiller International University, Multi-campus",
    "duration_years": 2,
    "annual_fee_cad": 16200,
    "total_fee_cad": 32400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Depends on chosen specialization",
      "strong foundation in specialty area preferred"
    ],
    "entry_roles": [
      "Specialized professional in chosen field",
      "sector expert",
      "project manager",
      "consultant",
      "industry specialist"
    ],
    "features": []
  }
]);

// --- TBS EDUCATION ---
const univ_tbseducation = db.institutions.insertOne(inst({
  "name": "TBS EDUCATION",
  "abbreviation": "",
  "type": "university",
  "city": "Toulouse",
  "province": "Occitanie",
  "country": "France",
  "campuses": [
    "Toulouse"
  ],
  "website": "https://apply.tbs-education.fr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international.studentservices@tbs-education.fr",
      "phone": "+33 (0)5 61 29 49 49"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 3000,
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
      "name": "Eiffel Excellence Scholarship (French Ministry of Europe and Foreign Affairs): \u20ac1,200/month (Master\u2019s level); includes international transport assistance, health insurance, housing search assistance, cultural activities; merit-based"
    },
    {
      "name": "TBS Early Bird Scholarship: \u20ac2,000 tuition discount (applied if paid application fee and deposit before February 28)"
    },
    {
      "name": "Sibling Discount: Additional discount if sibling currently enrolled in TBS program"
    },
    {
      "name": "GMAT-based Scholarship: Discount available if GMAT score \u2265600"
    },
    {
      "name": "Bursaries for Financial Difficulties: TBS Foundation allocates grants to students facing financial challenges"
    },
    {
      "name": "Student Loans: Interest-free or low-interest (~1%) unsecured loans available through partner banks for Master\u2019s and MSc students"
    },
    {
      "name": "Erasmus+ Mobility Grants: Financial support for travel and living expenses during Erasmus+ exchange/internship within Europe"
    }
  ],
  "internships": {
    "part_time_work": "International Career Support: Geographic expertise for different job markets and placements",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing assistance coordination through Accommodation Guide and partner agencies",
    "clubs": "Sports facilities: 3 sports halls with 2 gymnasiums; sports clubs for football, rugby, volleyball, handball, swimming, fitness, boxing, climbing, mountain sports"
  },
  "security": {
    "detail": "Emergency support services and 24-hour student contact availability"
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

addPrograms(univ_tbseducation, "TBS EDUCATION", [
  {
    "level": "UG",
    "name": "Bachelor in Management - Full-time (3 years, English-taught)",
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
    "name": "Bachelor in Management - Bilingual Track (3 years, French-English taught)",
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
    "name": "Bachelor in Management - Finance Specialization (3 years)",
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
    "name": "Bachelor in Management - Digital Business/Marketing Specialization (3 years)",
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
    "name": "Bachelor in Management - International Business Specialization (3 years)",
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
    "name": "Master in Management (MiM) Grande Ecole Program - 24 months",
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
    "name": "MSc Finance - 1 or 2-year option (CFA-aligned, two tracks",
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
    "name": "MSc in Banking & International Finance - 12-24 months",
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
    "name": "Master of Business Administration (MBA) - Aerospace MBA, Management Consulting MBA",
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
    "name": "MSc Management Consulting or other specialized MSc programs - 12-18 months",
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
    "name": "Bachelor in Management - Full-time",
    "faculty": "TBS Education",
    "duration_years": 3,
    "annual_fee_cad": 18450,
    "total_fee_cad": 55350,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization required",
      "all streams welcome"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "corporate strategist",
      "finance analyst",
      "product manager",
      "entrepreneur",
      "HR professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Management - Bilingual Track (French-English)",
    "faculty": "TBS Education",
    "duration_years": 3,
    "annual_fee_cad": 18450,
    "total_fee_cad": 55350,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "Bilingual management consultant",
      "international business professional",
      "corporate manager",
      "multinational professional",
      "bilingual entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Management - Finance Specialization",
    "faculty": "TBS Education",
    "duration_years": 3,
    "annual_fee_cad": 18450,
    "total_fee_cad": 55350,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "business foundations strongly recommended"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment banking analyst",
      "corporate finance manager",
      "financial consultant",
      "risk analyst",
      "trading specialist",
      "treasury professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Management - Digital Business/Marketing Specialization",
    "faculty": "TBS Education",
    "duration_years": 3,
    "annual_fee_cad": 18450,
    "total_fee_cad": 55350,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "digital/marketing aptitude valued"
    ],
    "entry_roles": [
      "Digital marketing specialist",
      "social media manager",
      "marketing analyst",
      "product marketing manager",
      "digital transformation consultant",
      "e-commerce specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Management - International Business Specialization",
    "faculty": "TBS Education",
    "duration_years": 3,
    "annual_fee_cad": 18450,
    "total_fee_cad": 55350,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "International business analyst",
      "global management consultant",
      "multinational corporate professional",
      "export/import specialist",
      "international entrepreneur",
      "global operations manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM) Grande Ecole Program",
    "faculty": "TBS Education",
    "duration_years": 2,
    "annual_fee_cad": 19500,
    "total_fee_cad": 39000,
    "min_class12_percent": 70,
    "required_subjects": [
      "All academic backgrounds welcome",
      "no specific discipline required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy analyst",
      "finance professional",
      "entrepreneur",
      "corporate leader",
      "supply chain manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "TBS Education",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation mandatory",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics",
      "calculus",
      "Python coding recommended"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "equity research analyst",
      "portfolio manager",
      "financial analyst",
      "asset manager",
      "risk manager",
      "derivatives trader",
      "hedge fund analyst",
      "equity researcher",
      "credit analyst",
      "private banker",
      "CFA charter pursuers"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Banking & International Finance",
    "faculty": "TBS Education",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "accounting",
      "business administration",
      "or economics",
      "strong quantitative foundation required"
    ],
    "entry_roles": [
      "Coverage analyst",
      "asset manager",
      "strategist/economist",
      "cash manager",
      "treasurer",
      "financial risk manager",
      "financial analyst",
      "compliance manager",
      "business analyst",
      "M&A analyst",
      "trader",
      "financial advisor",
      "transactions services",
      "financial auditor",
      "structured/project finance specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Business Administration (MBA) - Aerospace MBA",
    "faculty": "TBS Education",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Aerospace",
      "engineering",
      "or business background",
      "aerospace industry professionals preferred"
    ],
    "entry_roles": [
      "Aerospace business manager",
      "strategic operations manager",
      "project manager in aerospace",
      "supply chain manager (aerospace)",
      "financial analyst (aerospace sector)",
      "corporate development manager",
      "venture manager in aerospace"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) - Management Consulting MBA",
    "faculty": "TBS Education",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "or related disciplines"
    ],
    "entry_roles": [
      "Management consultant",
      "strategy consultant",
      "business consultant",
      "organizational consultant",
      "finance consultant",
      "supply chain consultant",
      "digital transformation consultant",
      "human resources consultant"
    ],
    "features": []
  }
]);

// --- UNIVERSITÉ PARIS CITÉ ---
const univ_universitpariscit = db.institutions.insertOne(inst({
  "name": "UNIVERSIT\u00c9 PARIS CIT\u00c9",
  "abbreviation": "",
  "type": "university",
  "city": "Paris",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Paris"
  ],
  "website": "https://u-paris.fr/language/en/admissions/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 44 16 64 00"
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
    "part_time_work": "Student Mobility Support: Security guidance for international placements abroad",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "Sports clubs and recreational facilities",
    "housing": "Twenty Campus: 19 student housing locations in \u00cele-de-France region"
  },
  "security": {
    "detail": "Data Protection Officer: Specializes in security and personal data protection"
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

addPrograms(univ_universitpariscit, "UNIVERSITÉ PARIS CITÉ", [
  {
    "level": "UG",
    "name": "Bachelor in Frontiers of Life Sciences",
    "faculty": "Faculty of Life Sciences; Life Sciences Department; Bachelor Frontiers of Life Sciences Program Office",
    "duration_years": 0.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Life Sciences (Traditional)",
    "faculty": "Faculty of Life Sciences; Biodiversity, Evolution & Ecology Department",
    "duration_years": 0.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts",
    "faculty": "Faculty of Societies and Humanities; Arts & Languages Department",
    "duration_years": 0.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Chemistry",
    "faculty": "Faculty of Life Sciences; Chemistry Department",
    "duration_years": 0.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Physics",
    "faculty": "Faculty of Life Sciences; Physics Department",
    "duration_years": 0.5,
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
    "name": "Master in International Law, International Relations and Diplomacy :\u00a0Master in International Law, International Relations and Diplomacy (2-Year Programme) \u2014 Full English",
    "faculty": "Faculty of Societies and Humanities; Law & International Relations Department; Master LIRD Office",
    "duration_years": 2.0,
    "annual_fee_cad": 529,
    "total_fee_cad": 1058,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in Health Economics",
    "faculty": "Faculty of Life Sciences; Health Economics & Management Department; Master Health Economics Office",
    "duration_years": 2.0,
    "annual_fee_cad": 529,
    "total_fee_cad": 1058,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in English Studies",
    "faculty": "Faculty of Societies and Humanities; English & Linguistics Department; Master Linguistics Office",
    "duration_years": 2.0,
    "annual_fee_cad": 529,
    "total_fee_cad": 1058,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in English Studies",
    "faculty": "Faculty of Societies and Humanities; English & Literary Studies Department; Master Literature Office",
    "duration_years": 2.0,
    "annual_fee_cad": 529,
    "total_fee_cad": 1058,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in Banking and Finance \u2014 Law and Regulations Specialization :\u00a0Master in Banking and Finance \u2014 Law and Regulations of Banking and Financial Systems (2-Year Programme) \u2014 Full English",
    "faculty": "Faculty of Societies and Humanities; Law & Finance Department; Master Banking & Finance Office",
    "duration_years": 2.0,
    "annual_fee_cad": 529,
    "total_fee_cad": 1058,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- UNIVERSITÉ PARIS-SACLAY ---
const univ_universitparissaclay = db.institutions.insertOne(inst({
  "name": "UNIVERSIT\u00c9 PARIS-SACLAY",
  "abbreviation": "",
  "type": "university",
  "city": "Orsay",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Orsay"
  ],
  "website": "https://www.universite-paris-saclay.fr",
  "application_portal": "Faculty-specific application portals or Demarches Simplifi\u00e9es (for Eiffel)",
  "contacts": {
    "admissions": {},
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
      "name": "Eiffel Excellence Scholarship: \u20ac1,181/month (Master\u2019s, 10 months), \u20ac2,100+/month (PhD); includes travel costs, health insurance, tuition exemption"
    },
    {
      "name": "Erasmus+ International Credit Mobility (ICM): \u20ac900/month + travel allowance (\u20ac395-\u20ac800 depending on country)"
    },
    {
      "name": "Erasmus+ Inclusion Bonus: \u20ac250/month additional for mobility students with fewer opportunities"
    },
    {
      "name": "IDEX International Internship Grants: Funding for international internships abroad (6+ weeks)"
    }
  ],
  "internships": {
    "part_time_work": "Internship agreement (convention de stage) mandatory for all placements",
    "coop_available": true,
    "employment_rate_percent": 88
  },
  "campus_life": {
    "clubs": "Student associations and clubs across multiple campuses",
    "housing": "Housing assistance through GUPS (Guichet Unique Paris-Saclay)"
  },
  "security": {
    "detail": "Coordination with French national education security systems"
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

addPrograms(univ_universitparissaclay, "UNIVERSITÉ PARIS-SACLAY", [
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Physics",
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
    "name": "Bachelor\u2019s in Mathematics",
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
    "name": "Bachelor\u2019s in Computer Science",
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
    "name": "Bachelor\u2019s in Engineering Sciences",
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
    "name": "Bachelor\u2019s in Chemistry",
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
    "name": "Master\u2019s in Computer Science (Multiple specializations",
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
    "name": "Master\u2019s in Physics (Fundamental Physics, Nuclei/Particles/Astroparticles, Molecular Nano Bio Photonics)",
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
    "name": "Master\u2019s in Mathematics",
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
    "name": "Master\u2019s in Engineering (Multiple tracks",
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
    "name": "Master\u2019s in Data Science (Erasmus Mundus track, collaborative program)",
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
    "name": "Bachelor\u2019s in Physics (3-year program)",
    "faculty": "Physics Faculty (Orsay campus)",
    "duration_years": 3,
    "annual_fee_cad": 267,
    "total_fee_cad": 801,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics (strong foundation in both essential)",
      "Chemistry"
    ],
    "entry_roles": [
      "Researcher",
      "physicist",
      "data scientist",
      "software engineer",
      "energy sector specialist",
      "quantum engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Mathematics (3-year program)",
    "faculty": "Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 3,
    "annual_fee_cad": 267,
    "total_fee_cad": 801,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (core requirement)",
      "Physics or Computer Science foundation"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "quantitative analyst",
      "software engineer",
      "financial analyst",
      "machine learning engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Computer Science (3-year program)",
    "faculty": "Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 3,
    "annual_fee_cad": 267,
    "total_fee_cad": 801,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Computer Science or Physics background preferred"
    ],
    "entry_roles": [
      "Software engineer",
      "systems analyst",
      "data scientist",
      "IT consultant",
      "web developer",
      "database administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Engineering Sciences (3-year program)",
    "faculty": "Polytech Paris-Saclay / Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 3,
    "annual_fee_cad": 267,
    "total_fee_cad": 801,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (core)",
      "Physics",
      "Engineering Sciences or equivalent background"
    ],
    "entry_roles": [
      "Engineer (mechanical/electrical/systems)",
      "project engineer",
      "technical consultant",
      "manufacturing engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Chemistry (3-year program)",
    "faculty": "Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 3,
    "annual_fee_cad": 267,
    "total_fee_cad": 801,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry (core)",
      "Mathematics",
      "Physics or Biology"
    ],
    "entry_roles": [
      "Chemist",
      "pharmaceutical researcher",
      "materials scientist",
      "chemical engineer",
      "environmental specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Computer Science (Multiple Specializations)",
    "faculty": "Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay (Orsay & \u00c9vry campuses)",
    "duration_years": 2,
    "annual_fee_cad": 381,
    "total_fee_cad": 762,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "programming fundamentals required"
    ],
    "entry_roles": [
      "Software engineer",
      "machine learning engineer",
      "data scientist",
      "AI researcher",
      "cybersecurity specialist",
      "quantum engineer",
      "systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Physics (Fundamental Physics and Applications)",
    "faculty": "Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 2,
    "annual_fee_cad": 381,
    "total_fee_cad": 762,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantum mechanics",
      "classical mechanics",
      "thermodynamics",
      "experimental physics required"
    ],
    "entry_roles": [
      "Research scientist",
      "physicist",
      "data analyst",
      "software engineer in physics",
      "quantum engineer",
      "academic researcher",
      "industrial physicist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Mathematics",
    "faculty": "Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 2,
    "annual_fee_cad": 381,
    "total_fee_cad": 762,
    "min_class12_percent": 70,
    "required_subjects": [
      "Calculus",
      "linear algebra",
      "probability",
      "discrete mathematics required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "quantitative analyst",
      "statistician",
      "financial analyst",
      "research mathematician",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Engineering (Multiple Specializations",
    "faculty": "Polytech Paris-Saclay / CentraleSup\u00e9lec / Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 2,
    "annual_fee_cad": 381,
    "total_fee_cad": 762,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "physics",
      "specialized engineering discipline"
    ],
    "entry_roles": [
      "Engineer (mechanical/electrical/nuclear)",
      "systems engineer",
      "project manager",
      "design engineer",
      "aerospace engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Data Science (Erasmus Mundus track)",
    "faculty": "CentraleSup\u00e9lec / Faculty of Science & Engineering, Universit\u00e9 Paris-Saclay",
    "duration_years": 2,
    "annual_fee_cad": 381,
    "total_fee_cad": 762,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "machine learning",
      "programming fundamentals required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "data analyst",
      "business analyst",
      "research scientist"
    ],
    "features": []
  }
]);

// --- RENNES SCHOOL OF BUSINESS ---
const univ_rennesschoolofbusiness = db.institutions.insertOne(inst({
  "name": "RENNES SCHOOL OF BUSINESS",
  "abbreviation": "",
  "type": "university",
  "city": "Rennes",
  "province": "Brittany",
  "country": "France",
  "campuses": [
    "Rennes"
  ],
  "website": "https://www.rennes-sb.com",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "\u20ac450-\u20ac700/month campus; additional \u20ac25.20/month local transport, \u20ac15-20/month phone",
      "email": "contact@rennes-sb.com"
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
      "name": "Eiffel Excellence Scholarship: \u20ac1,181-\u20ac1,200/month (Master\u2019s level); includes travel, health insurance, housing assistance; merit-based; managed by French Ministry of Foreign Affairs"
    },
    {
      "name": "Rennes School of Business Talent Scholarship: \u20ac1,000-\u20ac5,000; merit-based automatic consideration upon admission; for high-profile candidates with original profile"
    },
    {
      "name": "Unframed Scholarship: Up to \u20ac5,000 in tuition relief; merit-based for students demonstrating unique perspectives"
    },
    {
      "name": "Solidarity Fund Scholarship: Up to \u20ac5,000 tuition discount for students from developing countries facing currency devaluation"
    },
    {
      "name": "Bienvenue en France Scholarship: \u20ac500 tuition fee reduction for applicants with A1 level French before arrival; can be combined with other scholarships"
    },
    {
      "name": "Alumni Network Scholarship: \u20ac2,000 for international students enrolled in MSc programs (social & academic criteria based)"
    },
    {
      "name": "Erasmus+ Mobility Grants: Financial support for travel and living expenses during exchange/internship within Europe"
    },
    {
      "name": "Student Loans: Preferential rate (~1%) through partner banks; available upon admission for Master\u2019s students"
    }
  ],
  "internships": {
    "part_time_work": "Placement rate: 95% employed within 6 months of graduation",
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "housing": "CAF housing allowance eligibility support (\u20ac50-\u20ac160/month for \u201c\u00c9tudiant\u201d visa status students)",
    "clubs": "Sports facilities: 3 sports halls (2 gyms), outdoor sports field, multiple sports clubs (football, fitness, badminton, horse riding, volleyball, boxing, dance, rugby, climbing, basketball, swimming, handball, tennis, judo, running)"
  },
  "security": {
    "detail": "French health insurance coordination (free Social Security coverage plus optional complementary coverage from \u20ac14.60/month)"
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

addPrograms(univ_rennesschoolofbusiness, "RENNES SCHOOL OF BUSINESS", [
  {
    "level": "UG",
    "name": "Bachelor in Business and International Relations (3-4 years, English-taught)",
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
    "name": "Bachelor in Management (3-4 years, English-taught)",
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
    "name": "Bachelor in Business (3-4 years, Bilingual French-English)",
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
    "name": "Bachelor in Business & Administration (estimated 3-4 years)",
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
    "name": "Direct Entry Bachelor Year 3 (2-year completion pathway)",
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
    "name": "Master in Management (MiM) Grande Ecole - 24 months",
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
    "name": "MSc in International Finance - 15 months or 24 months with pre-Master",
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
    "name": "MSc in International Management - 15 months",
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
    "name": "MSc in International Luxury & Brand Management - 15 months",
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
    "name": "MSc in Data and Business Analytics - 15 months",
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
    "name": "Bachelor in Business and International Relations",
    "faculty": "Rennes School of Business",
    "duration_years": 3,
    "annual_fee_cad": 14850,
    "total_fee_cad": 44550,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization required",
      "all streams welcome"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "corporate strategist",
      "international business manager",
      "corporate professional",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Management",
    "faculty": "Rennes School of Business",
    "duration_years": 3,
    "annual_fee_cad": 14850,
    "total_fee_cad": 44550,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "finance analyst",
      "product manager",
      "corporate manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Business - Bilingual Track (French-English)",
    "faculty": "Rennes School of Business",
    "duration_years": 3,
    "annual_fee_cad": 14850,
    "total_fee_cad": 44550,
    "min_class12_percent": 70,
    "required_subjects": [
      "all streams welcome"
    ],
    "entry_roles": [
      "International business professional",
      "bilingual consultant",
      "corporate manager",
      "multinational professional",
      "global entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor in Business - Finance Specialization",
    "faculty": "Rennes School of Business",
    "duration_years": 3,
    "annual_fee_cad": 14850,
    "total_fee_cad": 44550,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "business foundations"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment banking analyst",
      "corporate finance manager",
      "financial consultant",
      "risk analyst",
      "trading specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Direct Entry Bachelor Year 3 (2-Year Completion Pathway)",
    "faculty": "Rennes School of Business",
    "duration_years": 3,
    "annual_fee_cad": 14850,
    "total_fee_cad": 44550,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "or related disciplines preferred"
    ],
    "entry_roles": [
      "Business analyst",
      "corporate professional",
      "management consultant",
      "international business professional",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM) Grande Ecole Program",
    "faculty": "Rennes School of Business",
    "duration_years": 2,
    "annual_fee_cad": 15000,
    "total_fee_cad": 30000,
    "min_class12_percent": 70,
    "required_subjects": [
      "All academic backgrounds welcome",
      "no specific discipline required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy analyst",
      "finance professional",
      "entrepreneur",
      "corporate leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in International Finance",
    "faculty": "Rennes School of Business",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation mandatory",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics",
      "calculus",
      "Python coding"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "portfolio manager",
      "financial analyst",
      "risk manager",
      "derivatives trader",
      "hedge fund analyst",
      "equity researcher",
      "asset manager",
      "CFA charter pursuit"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in International Management",
    "faculty": "Rennes School of Business",
    "duration_years": 2,
    "annual_fee_cad": 27300,
    "total_fee_cad": 54600,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "economics",
      "or related disciplines"
    ],
    "entry_roles": [
      "Global manager",
      "management consultant",
      "strategy analyst",
      "operations manager",
      "supply chain manager",
      "international business development manager",
      "corporate manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in International Luxury & Brand Management",
    "faculty": "Rennes School of Business",
    "duration_years": 2,
    "annual_fee_cad": 27900,
    "total_fee_cad": 55800,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "marketing",
      "fashion",
      "arts",
      "hospitality",
      "or related disciplines",
      "all backgrounds considered"
    ],
    "entry_roles": [
      "Luxury brand manager",
      "product development manager",
      "international business development (luxury)",
      "supply chain manager (luxury goods)",
      "marketing manager (luxury brands)",
      "fashion/lifestyle entrepreneur",
      "retail management specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc in Data and Business Analytics",
    "faculty": "Rennes School of Business",
    "duration_years": 2,
    "annual_fee_cad": 27900,
    "total_fee_cad": 55800,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data science",
      "computer science",
      "mathematics",
      "engineering",
      "business",
      "economics",
      "or related field with strong quantitative foundation"
    ],
    "entry_roles": [
      "Data scientist",
      "business analyst",
      "data analytics consultant",
      "data engineer",
      "machine learning specialist",
      "business intelligence analyst",
      "management consultant (data-focused)",
      "technology professional"
    ],
    "features": []
  }
]);

// --- KEDGE BUSINESS SCHOOL ---
const univ_kedgebusinessschool = db.institutions.insertOne(inst({
  "name": "KEDGE BUSINESS SCHOOL",
  "abbreviation": "",
  "type": "university",
  "city": "Bordeaux",
  "province": "Nouvelle-Aquitaine",
  "country": "France",
  "campuses": [
    "Bordeaux"
  ],
  "website": "https://student.kedge.edu",
  "application_portal": "join.kedge.edu (online platform; fully digital process)",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)805 041 041",
      "email": "incoming@kedgebs.com",
      "address": "Email alerts to KEDGE addresses in affected areas"
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
    "part_time_work": "Student Mobility Support: Security updates and assistance during international placements",
    "coop_available": true,
    "employment_rate_percent": 98
  },
  "campus_life": {
    "clubs": "Categories: Business clubs, cultural associations, sports teams, humanitarian groups, entrepreneurship, arts, debate, language clubs",
    "housing": "Accommodation services (on-campus and off-campus housing assistance)"
  },
  "security": {
    "detail": "Regular Security Updates: Community alerts on travel safety and security developments"
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

addPrograms(univ_kedgebusinessschool, "KEDGE BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "International BBA",
    "faculty": "KEDGE Business School \u2014 Undergraduate Programs; International BBA Directorate",
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
    "name": "KEDGE Bachelor \u2014 3rd Year Entry",
    "faculty": "KEDGE Business School \u2014 Undergraduate Programs; KEDGE Bachelor Office",
    "duration_years": 3,
    "annual_fee_cad": 600,
    "total_fee_cad": 1800,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Year One + KEDGE Bachelor Pathway",
    "faculty": "KEDGE Business School \u2014 Undergraduate Pathways; International Year One Program Office",
    "duration_years": 3,
    "annual_fee_cad": 424,
    "total_fee_cad": 1272,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "KEDGE Bachelor \u2014 Wine Business & Sustainability Specialization (English) :\u00a0KEDGE Bachelor, Specialization: Wine Business & Sustainability (English-Taught)",
    "faculty": "KEDGE Paris Campus; Business Specializations Department",
    "duration_years": 3,
    "annual_fee_cad": 1324,
    "total_fee_cad": 3972,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "KEDGE Bachelor \u2014 International Business Specialization (English) :\u00a0KEDGE Bachelor, Specialization: International Business (English-Taught)",
    "faculty": "KEDGE Business School \u2014 International Business Specialization; Bordeaux Campus",
    "duration_years": 3,
    "annual_fee_cad": 1324,
    "total_fee_cad": 3972,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management Grande Ecole",
    "faculty": "KEDGE Business School \u2014 Master's Directorate; Master in Management Grande Ecole Office",
    "duration_years": 2,
    "annual_fee_cad": 27900,
    "total_fee_cad": 55800,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc) in International Business",
    "faculty": "KEDGE Business School \u2014 Master of Science Programs; International Business MSc Office",
    "duration_years": 2,
    "annual_fee_cad": 27750,
    "total_fee_cad": 55500,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc) in Data Analytics for Business",
    "faculty": "KEDGE Business School \u2014 Master of Science Programs; Data Analytics Office",
    "duration_years": 2,
    "annual_fee_cad": 27000,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Supply Chain Management",
    "faculty": "KEDGE Business School \u2014 Master's Programs; Supply Chain Directorate",
    "duration_years": 2,
    "annual_fee_cad": 27750,
    "total_fee_cad": 55500,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management with Finance or Marketing Specialization :\u00a0Master in Management Grande Ecole \u2014 Finance or Marketing Specialization Track (1-2 Year Programme)",
    "faculty": "KEDGE Business School \u2014 Master's Directorate; Finance/Marketing Specialization Offices",
    "duration_years": 2,
    "annual_fee_cad": 27900,
    "total_fee_cad": 55800,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- INSTITUT POLYTECHNIQUE DE PARIS ---
const univ_institutpolytechniquedeparis = db.institutions.insertOne(inst({
  "name": "INSTITUT POLYTECHNIQUE DE PARIS",
  "abbreviation": "",
  "type": "university",
  "city": "Palaiseau",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Palaiseau"
  ],
  "website": "https://www.ip-paris.fr/en",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "internationalstudents@ip-paris.fr"
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
      "name": "Eiffel Excellence Scholarship: \u20ac1,181-\u20ac1,700/month (Master\u2019s), \u20ac2,100+/month (PhD); includes round-trip flight, health insurance, local transportation"
    },
    {
      "name": "France Excellence Europa Scholarship: Available for European students; check Campus France"
    }
  ],
  "internships": {
    "part_time_work": "Advanced placement tracking and career guidance",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student associations and clubs covering diverse interests",
    "housing": "Partnership with student housing providers (ECLA Campus, Kley Saclay, Uxco private residences)"
  },
  "security": {
    "detail": "Coordination with French higher education security protocols"
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

addPrograms(univ_institutpolytechniquedeparis, "INSTITUT POLYTECHNIQUE DE PARIS", [
  {
    "level": "UG",
    "name": "Bachelor of Science (\u00c9cole Polytechnique) - English-taught, multidisciplinary",
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
    "name": "Engineering Programs (ENSTA Paris, T\u00e9l\u00e9com Paris, T\u00e9l\u00e9com SudParis) - 3-year cycles",
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
    "name": "Applied Mathematics specialization - Core science foundation",
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
    "name": "Computer Science specialization - Strong for international students",
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
    "name": "Physics/Engineering Science focus - Research-oriented pathway",
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
    "name": "Master in Computer Science (with 8 specializations",
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
    "name": "Master in Applied Mathematics and Statistics (Data Science, Machine Learning, Finance specializations)",
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
    "name": "Master in Data Science and Artificial Intelligence",
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
    "name": "Master in Electrical Engineering for Communications & Information Processing (networks, signal processing)",
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
    "name": "Master in Mechanics (Biomechanics, Sustainable Energy, Complex Systems)",
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
    "name": "Bachelor of Science (\u00c9cole Polytechnique)",
    "faculty": "\u00c9cole Polytechnique (member of Institut Polytechnique de Paris)",
    "duration_years": 3,
    "annual_fee_cad": 7800,
    "total_fee_cad": 23400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Very strong mathematics",
      "science background essential"
    ],
    "entry_roles": [
      "Research scientist",
      "software engineer",
      "data analyst",
      "engineer in tech/finance/energy sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering Program (ENSTA Paris)",
    "faculty": "ENSTA Paris (member of Institut Polytechnique de Paris)",
    "duration_years": 3,
    "annual_fee_cad": 7800,
    "total_fee_cad": 23400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "engineering sciences",
      "strong quantitative foundation"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "systems engineer",
      "roboticist",
      "sustainable energy engineer",
      "defense/aerospace professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering Program (T\u00e9l\u00e9com Paris)",
    "faculty": "T\u00e9l\u00e9com Paris (member of Institut Polytechnique de Paris)",
    "duration_years": 3,
    "annual_fee_cad": 7800,
    "total_fee_cad": 23400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "computer science",
      "electronics"
    ],
    "entry_roles": [
      "Software engineer",
      "network engineer",
      "cybersecurity specialist",
      "data scientist",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering Program (T\u00e9l\u00e9com SudParis)",
    "faculty": "T\u00e9l\u00e9com SudParis (member of Institut Polytechnique de Paris)",
    "duration_years": 3,
    "annual_fee_cad": 7800,
    "total_fee_cad": 23400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics",
      "physics",
      "computer science background"
    ],
    "entry_roles": [
      "Network engineer",
      "data engineer",
      "telecommunications engineer",
      "AI specialist",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering Program (ENSAE Paris)",
    "faculty": "ENSAE Paris (member of Institut Polytechnique de Paris)",
    "duration_years": 3,
    "annual_fee_cad": 7800,
    "total_fee_cad": 23400,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics foundation",
      "economics/quantitative background preferred"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "financial analyst",
      "quantitative analyst",
      "economist",
      "actuarian"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Computer Science",
    "faculty": "T\u00e9l\u00e9com Paris / ENSTA Paris / Institut Polytechnique de Paris (collaborative)",
    "duration_years": 2,
    "annual_fee_cad": 10722,
    "total_fee_cad": 21444,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "programming fundamentals required"
    ],
    "entry_roles": [
      "Software engineer",
      "machine learning engineer",
      "data scientist",
      "AI researcher",
      "cybersecurity specialist",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Applied Mathematics and Statistics",
    "faculty": "ENSAE Paris / \u00c9cole Polytechnique / Institut Polytechnique de Paris",
    "duration_years": 2,
    "annual_fee_cad": 10722,
    "total_fee_cad": 21444,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "probability",
      "statistical methods required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "quantitative analyst",
      "financial analyst",
      "statistician",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Data Science and Artificial Intelligence",
    "faculty": "T\u00e9l\u00e9com Paris / ENSTA Paris / Institut Polytechnique de Paris",
    "duration_years": 2,
    "annual_fee_cad": 10722,
    "total_fee_cad": 21444,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong programming",
      "machine learning fundamentals",
      "mathematics background essential"
    ],
    "entry_roles": [
      "AI researcher",
      "machine learning engineer",
      "data scientist",
      "AI specialist",
      "research scientist",
      "PhD pathway"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Electrical Engineering for Communications & Information Processing",
    "faculty": "T\u00e9l\u00e9com Paris / ENSTA Paris / Institut Polytechnique de Paris",
    "duration_years": 2,
    "annual_fee_cad": 10722,
    "total_fee_cad": 21444,
    "min_class12_percent": 70,
    "required_subjects": [
      "Signal processing",
      "networks",
      "communications theory required"
    ],
    "entry_roles": [
      "Network engineer",
      "RF engineer",
      "communications specialist",
      "systems engineer",
      "signal processing engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Mechanics (Biomechanics & Complex Systems)",
    "faculty": "ENSTA Paris / Institut Polytechnique de Paris",
    "duration_years": 2,
    "annual_fee_cad": 6475,
    "total_fee_cad": 12950,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanics",
      "materials",
      "thermodynamics",
      "finite element methods essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "systems engineer",
      "renewable energy engineer",
      "structural engineer",
      "roboticist",
      "sustainable systems specialist"
    ],
    "features": []
  }
]);

// --- NEOMA BUSINESS SCHOOL ---
const univ_neomabusinessschool = db.institutions.insertOne(inst({
  "name": "NEOMA BUSINESS SCHOOL",
  "abbreviation": "",
  "type": "university",
  "city": "Reims",
  "province": "Grand Est",
  "country": "France",
  "campuses": [
    "Reims"
  ],
  "website": "https://neoma-bs.com",
  "application_portal": "",
  "contacts": {
    "admissions": {},
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
      "name": "NEOMA Excellence Scholarship (Master\u2019s): \u20ac2,000 base + \u20ac1,000 during early bird period (within first 20 days); merit-based automatic consideration"
    },
    {
      "name": "Full-Time MSc Programmes Excellence Scholarship: \u20ac4,000 (approximately \u20b93.6 L) deduction on tuition fees; based on Bachelor\u2019s degree results and admission interview"
    },
    {
      "name": "Eiffel Excellence Scholarship (French Ministry of Foreign Affairs): \u20ac1,181-\u20ac1,700/month (Master\u2019s level) plus travel, health insurance, housing assistance; merit-based; 3 NEOMA recipients in 2023"
    },
    {
      "name": "CESEM Excellence Scholarship (Global BBA): \u20ac2,500 deduction for 1st year; merit-based on high school records"
    },
    {
      "name": "Interest-free unsecured loans: Available to Master\u2019s and MSc students in Advanced Masters"
    },
    {
      "name": "Student bank loans: Preferential rate (~1%) through partner banks; access to \u201cBanking Fair\u201d at beginning of academic year"
    },
    {
      "name": "Government-backed student loans: Up to \u20ac15,000 for EU/EEA students up to 28 years old through partner banks"
    }
  ],
  "internships": {
    "part_time_work": "International career support: Geographic expertise for different job markets; international placement assistance",
    "coop_available": true,
    "employment_rate_percent": 96
  },
  "campus_life": {
    "housing": "Housing support and accommodation coordination services",
    "clubs": "Sports: Gymnasium on campus, student sports clubs very active, parks and open spaces"
  },
  "security": {
    "detail": "Coordination with local French authorities and regional security services (Reims, Rouen, \u00cele-de-France)"
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

addPrograms(univ_neomabusinessschool, "NEOMA BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "Global BBA - Business Management Track (4 years, English-taught)",
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
    "name": "Global BBA - International Business Track (4 years, English-taught, dual degree options)",
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
    "name": "Global BBA - Finance Specialization (4 years)",
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
    "name": "Global BBA - Bilingual Track (4 years, French-English)",
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
    "name": "Global BBA - Year 3 Entry (Direct entry to Year 3 with 120 ECTS; 2-year completion)",
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
    "name": "Master in Management (MiM) - Grande Ecole Program (24 months)",
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
    "name": "MSc International Finance (15 months or 24 months with pre-Master)",
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
    "name": "MSc Global Management (12-24 months)",
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
    "name": "Master in International Business & Entrepreneurship (MIBE) (24 months)",
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
    "name": "International Master in Luxury Management (18-24 months)",
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
    "name": "Global BBA - Business Management Track",
    "faculty": "NEOMA Business School",
    "duration_years": 3,
    "annual_fee_cad": 18900,
    "total_fee_cad": 56700,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization required",
      "all streams welcome"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "corporate strategist",
      "finance analyst",
      "product manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global BBA - International Business Track",
    "faculty": "NEOMA Business School, Multi-campus",
    "duration_years": 3,
    "annual_fee_cad": 21000,
    "total_fee_cad": 63000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subjects required",
      "all streams welcome"
    ],
    "entry_roles": [
      "International business analyst",
      "global management consultant",
      "multinational corporate professional",
      "export/import specialist",
      "global entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global BBA - Finance Specialization",
    "faculty": "NEOMA Business School",
    "duration_years": 3,
    "annual_fee_cad": 19950,
    "total_fee_cad": 59850,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "business foundations preferable"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment banking analyst",
      "corporate finance manager",
      "financial consultant",
      "risk analyst",
      "trading specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM) Grande Ecole Program",
    "faculty": "NEOMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 24000,
    "total_fee_cad": 48000,
    "min_class12_percent": 70,
    "required_subjects": [
      "All academic backgrounds welcome",
      "no specific discipline required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy analyst",
      "finance professional",
      "entrepreneur",
      "corporate leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Finance",
    "faculty": "NEOMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation mandatory",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics required"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "portfolio manager",
      "financial analyst",
      "risk manager",
      "derivatives trader",
      "hedge fund analyst",
      "equity researcher",
      "asset manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Global Management",
    "faculty": "NEOMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "economics",
      "or related disciplines"
    ],
    "entry_roles": [
      "Global manager",
      "management consultant",
      "strategy analyst",
      "operations manager",
      "supply chain manager",
      "international business development manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in International Business & Entrepreneurship (MIBE)",
    "faculty": "NEOMA Business School",
    "duration_years": 2,
    "annual_fee_cad": 24000,
    "total_fee_cad": 48000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "international relations",
      "or entrepreneurship background",
      "all disciplines welcome"
    ],
    "entry_roles": [
      "International entrepreneur",
      "business development manager",
      "international business consultant",
      "startup founder",
      "global operations manager",
      "venture analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Master in Luxury Management",
    "faculty": "NEOMA Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "marketing",
      "fashion",
      "arts",
      "or related disciplines",
      "all backgrounds considered"
    ],
    "entry_roles": [
      "Luxury brand manager",
      "product development manager",
      "international business development (luxury)",
      "supply chain manager (luxury goods)",
      "marketing manager (luxury brands)",
      "fashion/lifestyle entrepreneur"
    ],
    "features": [],
    "duration_parsed": true
  }
]);

// --- INSEAD ---
const univ_insead = db.institutions.insertOne(inst({
  "name": "INSEAD",
  "abbreviation": "",
  "type": "university",
  "city": "Fontainebleau",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Fontainebleau"
  ],
  "website": "https://www.insead.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 60 72 40 00",
      "email": "admissionmba@insead.edu"
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
      "name": "Eiffel Excellence Scholarship: \u20ac1,181-\u20ac1,700/month (Master\u2019s), \u20ac2,100+/month (PhD); includes travel, health insurance, tuition exemption"
    },
    {
      "name": "INSEAD Deepak & Sunita Gupta Endowed Scholarship for Leadership: Merit-based; amount varies based on individual merit and financial need; specifically for Indian students"
    },
    {
      "name": "Raman Charpak Fellowship: \u20ac700/month + visa fee waiver + Campus France fee waiver"
    },
    {
      "name": "150+ total scholarships available across programs with diverse criteria (merit, diversity, regional, sector-specific)"
    }
  ],
  "internships": {
    "part_time_work": "Minimum compensation for formal internships \u22656 weeks: \u20ac4.35/hour gross",
    "coop_available": true,
    "employment_rate_percent": 5
  },
  "campus_life": {
    "clubs": "30+ student-run clubs: consulting, finance, technology, entrepreneurship, sports, arts, cultural societies",
    "housing": "Student housing security: On-campus residence access control systems"
  },
  "security": {
    "detail": "Student housing security: On-campus residence access control systems"
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

addPrograms(univ_insead, "INSEAD", [
  {
    "level": "PG",
    "name": "MBA Program (1-year, full-time) - 500 students per intake; primary program",
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
    "name": "Executive MBA (EMBA) - For senior professionals with 10+ years experience",
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
    "name": "Master in Finance (MiF) - Inaugural cohort August 2027; 18 months",
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
    "name": "PhD in Management - 5-year research program",
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
    "name": "Executive Master in Finance (EMFIN) - 18 months, Singapore-based, for finance professionals with 4-12 years experience",
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
    "name": "MBA Program (One-Year International MBA)",
    "faculty": "INSEAD Business School",
    "duration_years": 2,
    "annual_fee_cad": 155250,
    "total_fee_cad": 310500,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant (51%)",
      "investment banker",
      "finance professional",
      "product manager",
      "strategy executive",
      "entrepreneur",
      "tech/TMT professional"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Executive MBA (EMBA)",
    "faculty": "INSEAD Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "C-suite executives",
      "managing directors",
      "business unit heads",
      "strategic transformation leaders",
      "corporate entrepreneurs"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Finance (MiF)",
    "faculty": "INSEAD Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation mandatory",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics",
      "calculus required"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "portfolio manager",
      "financial analyst",
      "risk analyst",
      "derivatives trader",
      "equity researcher",
      "hedge fund manager",
      "venture capital analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Executive Master in Finance (EMFIN)",
    "faculty": "INSEAD Business School, Singapore Campus",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative/financial background essential",
      "working knowledge of financial markets",
      "instruments required"
    ],
    "entry_roles": [
      "Senior finance executive",
      "portfolio manager",
      "risk manager",
      "treasurer",
      "chief financial officer track",
      "financial analyst",
      "investment professional"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD in Management",
    "faculty": "INSEAD Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong research foundation",
      "creativity",
      "independent thought",
      "proven academic excellence"
    ],
    "entry_roles": [
      "Academic researcher",
      "professor",
      "think tank researcher",
      "policy researcher",
      "corporate research executive"
    ],
    "features": []
  }
]);

// --- AUDENCIA BUSINESS SCHOOL ---
const univ_audenciabusinessschool = db.institutions.insertOne(inst({
  "name": "AUDENCIA BUSINESS SCHOOL",
  "abbreviation": "",
  "type": "university",
  "city": "Nantes",
  "province": "Pays de la Loire",
  "country": "France",
  "campuses": [
    "Nantes"
  ],
  "website": "https://www.audencia.com/en/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)2 40 37 34 34",
      "email": "iro@audencia.com\u00a0(International Relations Office)"
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
    "part_time_work": "Student Mobility Safety: Security guidance for international placements",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "Sports clubs with university teams",
    "housing": "Off-campus housing assistance"
  },
  "security": {
    "detail": "Student Mobility Safety: Security guidance for international placements"
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

addPrograms(univ_audenciabusinessschool, "AUDENCIA BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "Bachelor in Management",
    "faculty": "Audencia Business School \u2014 Undergraduate Programs; Bachelor in Management Office",
    "duration_years": 4.0,
    "annual_fee_cad": 10912,
    "total_fee_cad": 43648,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Global BBA",
    "faculty": "Audencia Business School \u2014 Undergraduate Programs; Global BBA Office",
    "duration_years": 4.0,
    "annual_fee_cad": 13500,
    "total_fee_cad": 54000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Management-Engineering",
    "faculty": "Audencia Business School \u2014 Undergraduate Programs; Management-Engineering Track",
    "duration_years": 4.0,
    "annual_fee_cad": 11250,
    "total_fee_cad": 45000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "International Baccalaureate Track Bachelor",
    "faculty": "Audencia Business School \u2014 Undergraduate Programs; IB Track",
    "duration_years": 4.0,
    "annual_fee_cad": 10912,
    "total_fee_cad": 43648,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in International Business",
    "faculty": "Audencia Business School \u2014 Undergraduate Programs; International Business Specialization",
    "duration_years": 4.0,
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
    "name": "Master in Management \u2014 Grande \u00c9cole",
    "faculty": "Audencia Business School \u2014 Master Programs; Master in Management Office",
    "duration_years": 2.0,
    "annual_fee_cad": 52500,
    "total_fee_cad": 105000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "MSc in International Management",
    "faculty": "Audencia Business School \u2014 Master's Programs; MSc International Management Office",
    "duration_years": 2,
    "annual_fee_cad": 26250,
    "total_fee_cad": 52500,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "International MBA",
    "faculty": "Audencia Business School \u2014 Executive Programs; International MBA Office",
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
    "name": "MSc in International Business",
    "faculty": "Audencia Business School \u2014 Master's Programs; MSc International Business Office",
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
    "name": "MSc in Marketing Management",
    "faculty": "Audencia Business School \u2014 Master's Programs; MSc Marketing Management Office",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- ÉCOLE DES PONTS ---
const univ_coledesponts = db.institutions.insertOne(inst({
  "name": "\u00c9COLE DES PONTS",
  "abbreviation": "",
  "type": "university",
  "city": "Champs-sur-Marne",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Champs-sur-Marne"
  ],
  "website": "Starting February 2026",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "claire.linder@enpc.fr; Phone +33 1 64 15 22 09",
      "email": "Emmanuel.simantov@enpc.fr"
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
      "name": "Website: https://ecoledesponts.fr/en"
    },
    {
      "name": "Masters Programs: https://ecoledesponts.fr/en/academics/masters"
    },
    {
      "name": "Engineering Program Admissions: https://ecoledesponts.fr/en/admissions/engineering-degree-program/international-students"
    },
    {
      "name": "Academic requirement: Baccalaur\u00e9at (or equivalent international qualification: A-Levels, IB, Abitur, AP, etc.)"
    },
    {
      "name": "Minimum achievement: Strong academic record (typically top 10% of secondary school cohort)"
    },
    {
      "name": "English language test: TOEFL, IELTS, Cambridge, TOEIC mandatory for non-native English speakers"
    },
    {
      "name": "Additional requirements: Admission through ParisTech International Admission Program (competitive scientific test, interview)"
    },
    {
      "name": "Bachelor\u2019s degree or equivalent (180+ ECTS credits) from accredited institution with strong academic record"
    },
    {
      "name": "Relevant academic background: Varies by specialization; strong foundation in core engineering disciplines preferred"
    },
    {
      "name": "English language test (for non-native speakers): TOEFL 530+ (paper-based) or 71+ (iBT), IELTS 6.0+, TOEIC 810+, Cambridge; mandatory"
    },
    {
      "name": "French language test: Proof of French language level required (B2 minimum for French-taught programs)"
    },
    {
      "name": "Additional requirements: Motivation letter, 2 academic/professional references, transcripts, passport copy, recommendation letter"
    },
    {
      "name": "September intake (primary)"
    },
    {
      "name": "January/February intake (selective programs)"
    },
    {
      "name": "Double-degree students: March 31 annually for September intake"
    },
    {
      "name": "Exchange students (Fall semester or full year): March 31 annually"
    },
    {
      "name": "Master\u2019s M1 Programs (Institut Polytechnique de Paris):"
    },
    {
      "name": "\u201cMon Master\u201d website: Starting February 2026"
    },
    {
      "name": "IP-Paris platform: Session 1 (October 29, 2025 - January 8, 2026); Session 2 (January 9 - March 26, 2026); Session 3 (March 27 - May 28, 2026)"
    },
    {
      "name": "Master\u2019s M2 Programs: Submissions via IP-Paris registration platform with 3 rolling sessions"
    },
    {
      "name": "Yes"
    },
    {
      "name": "Erasmus+ International Credit Mobility: Up to \u20ac850/month plus travel expenses; covers Japan, Lebanon, C\u00f4te d\u2019Ivoire, Canada, Iran, Russia, Tunisia, South Africa"
    },
    {
      "name": "Eiffel Excellence Scholarship (French Ministry of Foreign Affairs): \u20ac1,181-\u20ac1,700/month (Master\u2019s level); includes travel, health insurance, housing assistance, cultural activities"
    },
    {
      "name": "Corporate Fellowships: Meridiam, Fondation Ibn Rochd (Morocco); eligibility varies by program"
    }
  ],
  "internships": {
    "part_time_work": "International career support: Special workshops on job/internship search, CV writing in French, French employment market, interview preparation",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing support coordination with student residences",
    "clubs": "Sports facilities: Gymnasium, fitness center, athletic fields, sports clubs (football, tennis, climbing)"
  },
  "security": {
    "detail": "Coordination with French national authorities and local Marne-la-Vall\u00e9e security"
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

addPrograms(univ_coledesponts, "ÉCOLE DES PONTS", [
  {
    "level": "PG",
    "name": "MSc in Engineering (3 years, 180 ECTS) - Multi-specialization civil/infrastructure focus",
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
    "name": "M2 Civil Engineering & Construction - 2 years, specialization in structural engineering",
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
    "name": "M2 Energy Transition at Local Scale (TET) - 2 years, sustainability focus",
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
    "name": "M2 Transport & Sustainable Development (TRADD) - 2 years, mobility/infrastructure",
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
    "name": "Master Analysis and Political Economy (M2 APE) - 2 years, co-accreditation with ENS-PSL, Sorbonne, EHESS",
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
    "name": "MSc in Engineering (3-Year Engineering Degree for International Students)",
    "faculty": "\u00c9cole nationale des ponts et chauss\u00e9es",
    "duration_years": 2,
    "annual_fee_cad": 5175,
    "total_fee_cad": 10350,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "physics",
      "engineering sciences required"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "infrastructure engineer",
      "project manager",
      "consulting engineer",
      "environmental engineer",
      "transport engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M2 Civil Engineering & Construction",
    "faculty": "\u00c9cole nationale des ponts et chauss\u00e9es, Institut Polytechnique de Paris",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong civil engineering or construction engineering background",
      "mathematics",
      "mechanics",
      "materials science foundation"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "construction manager",
      "project engineer",
      "geotechnical engineer",
      "bridge engineer",
      "building engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M2 Energy Transition at Local Scale (TET)",
    "faculty": "\u00c9cole nationale des ponts et chauss\u00e9es (co-accreditation with Universit\u00e9 Paris Saclay, Universit\u00e9 Paris Nanterre, IFP School)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering",
      "energy",
      "environment",
      "economics",
      "or related disciplines",
      "strong foundation in sustainability topics"
    ],
    "entry_roles": [
      "Energy consultant",
      "renewable energy engineer",
      "sustainability manager",
      "energy policy analyst",
      "environmental engineer",
      "energy transition specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M2 Transport & Sustainable Development (TRADD)",
    "faculty": "\u00c9cole national des ponts et chauss\u00e9es (co-accreditation with Universit\u00e9 Paris-Est Cr\u00e9teil, Universit\u00e9 Gustave Eiffel)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering",
      "urban planning",
      "transport",
      "environment",
      "or related disciplines"
    ],
    "entry_roles": [
      "Transport engineer",
      "urban mobility specialist",
      "transport planner",
      "sustainability consultant",
      "transit engineer",
      "infrastructure project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M2 Analysis and Political Economy (APE)",
    "faculty": "\u00c9cole nationale des ponts et chauss\u00e9es (co-accreditation with Universit\u00e9 Paris 1 Panth\u00e9on-Sorbonne, PSL, EHESS)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "political science",
      "engineering with economics focus",
      "or related social sciences",
      "strong quantitative skills valued"
    ],
    "entry_roles": [
      "Policy analyst",
      "economist",
      "research analyst",
      "consultant",
      "government advisor",
      "think tank researcher",
      "international organization specialist"
    ],
    "features": []
  }
]);

// --- SCIENCES PO ---
const univ_sciencespo = db.institutions.insertOne(inst({
  "name": "SCIENCES PO",
  "abbreviation": "",
  "type": "university",
  "city": "Paris",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Paris"
  ],
  "website": "https://admission.sciencespo.fr",
  "application_portal": "https://admission.sciencespo.fr\u00a0(online only)",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 45 49 55 55"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 225,
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
    "clubs": "Clubs covering: culture, environment, education, volunteering, international affairs, sports, arts, feminism, entrepreneurship, Model UN"
  },
  "security": {
    "detail": "Emergency evacuation procedures and protocols documented"
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

addPrograms(univ_sciencespo, "SCIENCES PO", [
  {
    "level": "UG",
    "name": "Bachelor of Arts in European Studies (Europe-Asia Track)",
    "faculty": "Undergraduate College; Office of Admissions and Registrar",
    "duration_years": 3,
    "annual_fee_cad": 22350,
    "total_fee_cad": 67050,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject requirement",
      "all secondary school specializations eligible (STEM, humanities, social sciences, etc.)"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in European Studies (Europe-North America Track) :\u00a0Bachelor of Arts - European Studies, Europe-North America Minor",
    "faculty": "Undergraduate College; Regional Campus Administration (track-specific)",
    "duration_years": 3,
    "annual_fee_cad": 22350,
    "total_fee_cad": 67050,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific stream requirement",
      "open to all secondary school backgrounds"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in European Studies (Mediterranean-Middle East Track) :\u00a0Bachelor of Arts - European Studies, Mediterranean-Middle East Minor",
    "faculty": "Undergraduate College; Academic Advising Office",
    "duration_years": 3,
    "annual_fee_cad": 22350,
    "total_fee_cad": 67050,
    "min_class12_percent": 70,
    "required_subjects": [
      "Open to all disciplines",
      "no prior knowledge of Mediterranean/Middle East studies required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dual Bachelor's Degree with Columbia University",
    "faculty": "Undergraduate College; International Dual Degree Office",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong performance in humanities",
      "social sciences preferred",
      "STEM background also considered"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Dual Bachelor's Degree with National University of Singapore :\u00a0Bachelor of Arts / Bachelor of Science - Sciences Po / NUS Dual Degree",
    "faculty": "Undergraduate College; International Partnerships Office",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any secondary school background acceptable",
      "preference for globally-minded candidates"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Public Policy",
    "faculty": "Sciences Po School of Public Affairs",
    "duration_years": 2,
    "annual_fee_cad": 30960,
    "total_fee_cad": 61920,
    "min_class12_percent": 70,
    "required_subjects": [
      "Open to all disciplines (economics, political science, law, business, engineering, humanities, social sciences)",
      "no specific background required",
      "diverse perspectives welcomed"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in International Relations",
    "faculty": "Sciences Po School of Research",
    "duration_years": 2,
    "annual_fee_cad": 30960,
    "total_fee_cad": 61920,
    "min_class12_percent": 70,
    "required_subjects": [
      "Political science",
      "international relations",
      "history",
      "law",
      "economics preferred but not required",
      "all disciplines considered"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Public Administration Policy Stream",
    "faculty": "Sciences Po School of Public Affairs; Public Administration Policy Stream",
    "duration_years": 2,
    "annual_fee_cad": 30960,
    "total_fee_cad": 61920,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific background required",
      "open to law",
      "economics",
      "business",
      "political science",
      "engineering",
      "public administration backgrounds"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Dual Master's in Urban Development with TATA Institute of Social Sciences (TISS) :\u00a0Dual Master's Degree - Urban Development (Sciences Po & TISS Mumbai)",
    "faculty": "Sciences Po School of Urban Affairs; TISS Mumbai (First India-France Dual Program)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Urban development",
      "planning",
      "architecture",
      "sociology",
      "economics",
      "public policy",
      "engineering preferred",
      "open to diverse backgrounds with demonstrated interest in urban issues"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Public Affairs (One-Year Intensive Programme)",
    "faculty": "Sciences Po School of Public Affairs; Executive Education",
    "duration_years": 2,
    "annual_fee_cad": 36000,
    "total_fee_cad": 72000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Policy-making",
      "government affairs",
      "international organizations",
      "diplomacy",
      "public sector management",
      "all sectors with relevant professional experience eligible"
    ],
    "entry_roles": [],
    "features": []
  }
]);

// --- EDHEC BUSINESS SCHOOL ---
const univ_edhecbusinessschool = db.institutions.insertOne(inst({
  "name": "EDHEC BUSINESS SCHOOL",
  "abbreviation": "",
  "type": "university",
  "city": "Lille",
  "province": "Hauts-de-France",
  "country": "France",
  "campuses": [
    "Lille"
  ],
  "website": "https://www.edhec.edu/en",
  "application_portal": "https://www.edhec.edu/en/programmes/masters-degree/apply-online",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)3 20 15 45 70"
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
      "name": "EDHEC Academic Excellence Scholarship: Up to 50% tuition fee reduction; merit-based for high-achieving MiM/MSc applicants"
    },
    {
      "name": "EDHEC French Embassy Co-Financed Scholarship (for Indian students): 50% tuition fee reduction; specifically 2 scholarships for MiM program for Indian students"
    },
    {
      "name": "Women in Finance / Women in Business / Women in Data Science: Up to 50% off tuition; merit-based for female candidates"
    },
    {
      "name": "Cultural Diversity Scholarship: Up to 40% off tuition for underrepresented candidates"
    },
    {
      "name": "Make an Impact Scholarship: Up to 35% off tuition for candidates with strong Sustainable Development Goals (SDGs) focus"
    },
    {
      "name": "International Scholarship Opportunities: Multiple merit, need-based, and diversity scholarships; automatic consideration upon admission (no separate application required)"
    }
  ],
  "internships": {
    "part_time_work": "Internship minimum compensation: \u20ac4.35/hour gross for formal internships \u22652 months",
    "coop_available": true,
    "employment_rate_percent": 69
  },
  "campus_life": {
    "clubs": "International student activities: Welcome sessions, integration programs, international clubs",
    "housing": "Housing assistance and support coordination"
  },
  "security": {
    "detail": "Coordination with French authorities (Palaiseau security for Paris campus; local authorities for Lille/Nice)"
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

addPrograms(univ_edhecbusinessschool, "EDHEC BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "EDHEC International BBA - Business Management Track (4 years)",
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
    "name": "EDHEC International BBA - Global Business Track (4 years, English-taught)",
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
    "name": "EDHEC International BBA - Business Management Track with International Pathway (4 years)",
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
    "name": "Master in Management (MiM) Grande Ecole Program (2 years, 4 specializations)",
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
    "name": "Master of Science (MSc) in Finance (18-24 months)",
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
    "name": "Global MBA (10 months, intensive)",
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
    "name": "Master of Science (MSc) in Data Science & Artificial Intelligence (18-24 months)",
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
    "name": "Executive MBA (EMBA) (20 months, part-time modular)",
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
    "name": "EDHEC International BBA - Business Management Track",
    "faculty": "EDHEC Business School, Lille/Nice Campuses",
    "duration_years": 3,
    "annual_fee_cad": 22650,
    "total_fee_cad": 67950,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization required (all streams welcome)"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "finance analyst",
      "corporate strategist",
      "entrepreneur",
      "product manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "EDHEC International BBA - Global Business Track",
    "faculty": "EDHEC Business School, Lille/Nice Campuses",
    "duration_years": 3,
    "annual_fee_cad": 34575,
    "total_fee_cad": 103725,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject specialization required"
    ],
    "entry_roles": [
      "International business analyst",
      "management consultant",
      "export/import specialist",
      "multinational corporate professional",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MiM) Grande Ecole Program",
    "faculty": "EDHEC Business School",
    "duration_years": 2,
    "annual_fee_cad": 36750,
    "total_fee_cad": 73500,
    "min_class12_percent": 70,
    "required_subjects": [
      "All academic backgrounds welcome",
      "no specific discipline required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy analyst",
      "finance professional",
      "entrepreneur",
      "corporate manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc) in Finance",
    "faculty": "EDHEC Business School",
    "duration_years": 2,
    "annual_fee_cad": 30000,
    "total_fee_cad": 60000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation mandatory",
      "prior training in financial accounting",
      "corporate finance",
      "investments",
      "derivatives",
      "business statistics required"
    ],
    "entry_roles": [
      "Investment banker",
      "quantitative analyst",
      "portfolio manager",
      "financial analyst",
      "risk manager",
      "derivatives trader",
      "hedge fund analyst",
      "equity researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MSc) in Data Science & Artificial Intelligence",
    "faculty": "EDHEC Business School",
    "duration_years": 2,
    "annual_fee_cad": 30000,
    "total_fee_cad": 60000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in programming",
      "machine learning",
      "statistics",
      "mathematics required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "analytics consultant",
      "data engineer",
      "business analyst",
      "AI researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global MBA",
    "faculty": "EDHEC Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "product manager",
      "strategy executive",
      "CFO-track professional",
      "entrepreneur",
      "venture capitalist",
      "tech leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Executive MBA (EMBA)",
    "faculty": "EDHEC Business School",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Chief executive officer/C-suite transition",
      "managing director",
      "business unit head",
      "strategic transformation leader",
      "corporate executive"
    ],
    "features": []
  }
]);

// --- COLLÈGE DE PARIS ---
const univ_collgedeparis = db.institutions.insertOne(inst({
  "name": "COLL\u00c8GE DE PARIS",
  "abbreviation": "",
  "type": "university",
  "city": "Paris",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Paris"
  ],
  "website": "https://www.collegedeparis.com",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 55 23 08 08",
      "email": "International@collegedeparis.fr\u00a0(estimated contact)",
      "address": "2, Place de la D\u00e9fense, CNIT, 92800 Puteaux, France"
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
    "part_time_work": "International Student Safety: Guidance for study abroad and international placements",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports clubs and recreational activities",
    "housing": "Shared accommodation options available"
  },
  "security": {
    "detail": "Data Protection: CNIL-compliant data security protocols"
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

addPrograms(univ_collgedeparis, "COLLÈGE DE PARIS", [
  {
    "level": "UG",
    "name": "Bachelor in Business Administration",
    "faculty": "Ascencia Business School (Coll\u00e8ge de Paris member); Management and Business Programs",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Textile and Fashion Product Creator and Designer :\u00a0Ecole Conte Bachelor Textile and Fashion Product Creator and Designer (3-Year Programme)",
    "faculty": "Ecole Conte (Coll\u00e8ge de Paris member); Fashion and Textile Design Department",
    "duration_years": 3.0,
    "annual_fee_cad": 12000,
    "total_fee_cad": 36000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in International Marketing",
    "faculty": "Ascencia Business School (Coll\u00e8ge de Paris member); Marketing and International Business",
    "duration_years": 1.3333333333333333,
    "annual_fee_cad": 12000,
    "total_fee_cad": 48000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Web Development/Digital Technologies",
    "faculty": "Digital College (Coll\u00e8ge de Paris member); Computer Science and Web Development",
    "duration_years": 1.3333333333333333,
    "annual_fee_cad": 12000,
    "total_fee_cad": 48000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor in Purchasing and Logistics",
    "faculty": "Ascencia Business School (Coll\u00e8ge de Paris member); Supply Chain and Logistics",
    "duration_years": 1.3333333333333333,
    "annual_fee_cad": 12000,
    "total_fee_cad": 48000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Ascencia Global MBA",
    "faculty": "Ascencia Business School (Coll\u00e8ge de Paris member); MBA Programs",
    "duration_years": 2.0,
    "annual_fee_cad": 12000,
    "total_fee_cad": 24000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Ecole Conte Master's in Luxury Fashion Management",
    "faculty": "Ecole Conte (Coll\u00e8ge de Paris member); Master's Fashion and Luxury Programs",
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
    "name": "Ascencia Master in Management",
    "faculty": "Ascencia Business School (Coll\u00e8ge de Paris member); Master's Programs",
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
    "name": "Digital College Master's in Digital Marketing",
    "faculty": "Digital College (Coll\u00e8ge de Paris member); Digital Marketing and Technology",
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
    "name": "College de Paris Online Global MBA",
    "faculty": "College de Paris Online (Coll\u00e8ge de Paris member); Online MBA Programs",
    "duration_years": 2.0,
    "annual_fee_cad": 10500,
    "total_fee_cad": 21000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  }
]);

// --- ESSEC Business School ---
const univ_essecbusinessschool = db.institutions.insertOne(inst({
  "name": "ESSEC Business School",
  "abbreviation": "",
  "type": "university",
  "city": "Cergy-Pontoise",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Cergy-Pontoise"
  ],
  "website": "https://www.essec.edu",
  "application_portal": "essec.myapply.online (English/French available)",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 34 43 30 00"
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
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "clubs": "Trading club, consulting club, international affairs club, art clubs"
  },
  "security": {
    "detail": "Annual security monitoring committee (beginning of each academic year)"
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

addPrograms(univ_essecbusinessschool, "ESSEC Business School", [
  {
    "level": "UG",
    "name": "ESSEC Global BBA",
    "faculty": "Global BBA Program Directorate / Office of the Dean",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific stream requirement",
      "open to all high school graduates with university access diploma"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MIM)",
    "faculty": "Master in Management Program Office",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Open to all disciplines (engineering, sciences, business, economics, humanities, social sciences, law, health, political science, architecture, real estate, etc.)",
      "discipline is not restrictive"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Finance (MIF)",
    "faculty": "Master in Finance Program Office",
    "duration_years": 2,
    "annual_fee_cad": 42600,
    "total_fee_cad": 85200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "economics",
      "engineering",
      "mathematics",
      "science",
      "or business (45% of class: engineering/science; 55%: business/finance/economics)"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Data Sciences & Business Analytics (DSBA)",
    "faculty": "Master in Data Sciences & Business Analytics Program / Joint Program Office (ESSEC & CentraleSup\u00e9lec)",
    "duration_years": 2,
    "annual_fee_cad": 37500,
    "total_fee_cad": 75000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering",
      "mathematics",
      "statistics",
      "computer science",
      "physics",
      "economics",
      "finance",
      "or business",
      "strong quantitative foundation required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Strategy & Management of International Business (SMIB) :\u00a0Advanced Master in Strategy & Management of International Business (SMIB)",
    "faculty": "Master in Strategy & Management of International Business Program Office",
    "duration_years": 2,
    "annual_fee_cad": 30150,
    "total_fee_cad": 60300,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "international relations",
      "economics",
      "or equivalent",
      "open to diverse fields with demonstrated interest in strategy",
      "international business"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global MBA",
    "faculty": "Global MBA Program Office",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "All backgrounds welcome",
      "no specific field required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "City & Country",
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
    "name": "Intakes & Deadlines",
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
    "name": "Scholarships & Financial Support",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 60,
    "total_fee_cad": 120,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "retail",
      "hospitality",
      "tutoring",
      "on-campus positions",
      "IT support"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Life",
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
    "name": "Campus Security",
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
    "name": "Application Process (Brief)",
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
    "name": "ESSEC Global BBA",
    "faculty": "Global BBA Program Directorate / Office of the Dean",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific stream requirement",
      "open to all high school graduates with university access diploma"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MIM)",
    "faculty": "Master in Management Program Office",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Open to all disciplines (engineering, sciences, business, economics, humanities, social sciences, law, health, political science, architecture, real estate, etc.)",
      "discipline is not restrictive"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Finance (MIF)",
    "faculty": "Master in Finance Program Office",
    "duration_years": 2,
    "annual_fee_cad": 42600,
    "total_fee_cad": 85200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "economics",
      "engineering",
      "mathematics",
      "science",
      "or business (45% of class: engineering/science; 55%: business/finance/economics)"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Data Sciences & Business Analytics (DSBA)",
    "faculty": "Master in Data Sciences & Business Analytics Program / Joint Program Office (ESSEC & CentraleSup\u00e9lec)",
    "duration_years": 2,
    "annual_fee_cad": 37500,
    "total_fee_cad": 75000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering",
      "mathematics",
      "statistics",
      "computer science",
      "physics",
      "economics",
      "finance",
      "or business",
      "strong quantitative foundation required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Strategy & Management of International Business (SMIB) :\u00a0Advanced Master in Strategy & Management of International Business (SMIB)",
    "faculty": "Master in Strategy & Management of International Business Program Office",
    "duration_years": 2,
    "annual_fee_cad": 30150,
    "total_fee_cad": 60300,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "management",
      "international relations",
      "economics",
      "or equivalent",
      "open to diverse fields with demonstrated interest in strategy",
      "international business"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global MBA",
    "faculty": "Global MBA Program Office",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "All backgrounds welcome",
      "no specific field required"
    ],
    "entry_roles": [],
    "features": []
  }
]);

// --- UNIVERSITÉ GRENOBLE ALPES ---
const univ_universitgrenoblealpes = db.institutions.insertOne(inst({
  "name": "UNIVERSIT\u00c9 GRENOBLE ALPES",
  "abbreviation": "UGA",
  "type": "university",
  "city": "Grenoble",
  "province": "Auvergne-Rh\u00f4ne-Alpes",
  "country": "France",
  "campuses": [
    "Grenoble"
  ],
  "website": "https://www.univ-grenoble-alpes.fr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)4 76 82 51 23",
      "email": "dgddit@univ-grenoble-alpes.fr",
      "address": "Tour Irma, 51 rue des Math\u00e9matiques, 38610 Gi\u00e8res, France"
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
    "part_time_work": "Internships over 2 months: \u20ac650 minimum monthly compensation (mandatory)",
    "coop_available": true,
    "employment_rate_percent": 80
  },
  "campus_life": {
    "clubs": "Categories: Business clubs, cultural associations, sports teams, humanitarian groups, environmental initiatives, entrepreneurship clubs, hobby clubs",
    "housing": "Accommodation: On-campus student housing available (affordable rates \u20ac200-400/month range)"
  },
  "security": {
    "detail": "Anti-cybersecurity measures (Cyber@Alps Institute operations)"
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

addPrograms(univ_universitgrenoblealpes, "UNIVERSITÉ GRENOBLE ALPES", [
  {
    "level": "UG",
    "name": "Bachelor in Management \u2014 English Track",
    "faculty": "Grenoble IAE (Institut d'Administration des Entreprises) \u2014 Graduate School of Management",
    "duration_years": 3,
    "annual_fee_cad": 424,
    "total_fee_cad": 1272,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts and Sciences (BASc) with Dual Degree Partner Universities :\u00a0Bachelor of Arts and Sciences (BASc) \u2014 Dual Bachelor's Degree with International Partner Universities",
    "faculty": "Universit\u00e9 Grenoble Alpes \u2014 Undergraduate College / International Partnerships Office",
    "duration_years": 3,
    "annual_fee_cad": 900,
    "total_fee_cad": 2700,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Sciences Po Grenoble \u2014 Bachelor in Politics and International Studies (UG Component) :\u00a0Bachelor of Arts in Politics and International Studies (3-Year Programme) \u2014 Sciences Po Grenoble\u2013UGA",
    "faculty": "Sciences Po Grenoble \u2014 School of Political Studies",
    "duration_years": 3,
    "annual_fee_cad": 424,
    "total_fee_cad": 1272,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Professional Bachelor's in Computer Networks and Telecommunications :\u00a0Professional Bachelor in Computer Networks and Telecommunications (Licenced Professionnelle)",
    "faculty": "Universit\u00e9 Grenoble Alpes \u2014 Faculty of Science / Technology Department",
    "duration_years": 1.0,
    "annual_fee_cad": 424,
    "total_fee_cad": 1272,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "UG",
    "name": "Bachelor's Degree in Computer Science (English-Taught Programme) :\u00a0Bachelor of Science in Computer Science (L1-L3) \u2014 English-Taught Track",
    "faculty": "Universit\u00e9 Grenoble Alpes \u2014 Faculty of Science / Computer Science Department",
    "duration_years": 0.3333333333333333,
    "annual_fee_cad": 424,
    "total_fee_cad": 1272,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": [],
    "duration_parsed": true
  },
  {
    "level": "PG",
    "name": "Master in Nanosciences and Nanotechnologies",
    "faculty": "Universit\u00e9 Grenoble Alpes & Grenoble INP \u2014 School of Physics, Engineering, Materials & Environment (P\u00f4le PEM); also part of UGA Graduate School@UGA",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Physics \u2014 Quantum Technologies Specialization",
    "faculty": "Universit\u00e9 Grenoble Alpes \u2014 Physics Department & Graduate School@UGA; part of QuantAlps research federation",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Chemistry and Biochemistry \u2014 Molecular and Cellular Biology Specialization :\u00a0Master in Chemistry and Biochemistry (Major: Molecular and Cellular Biology) \u2014 2-Year Programme",
    "faculty": "Universit\u00e9 Grenoble Alpes \u2014 Chemistry and Biology Department / Faculty of Science",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Data Sciences & Artificial Intelligence (MIAI)",
    "faculty": "Universit\u00e9 Grenoble Alpes \u2014 Graduate School@UGA (P\u00f4le MSTIC: Mathematics, Information and Communication Sciences/Technologies)",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management \u2014 Multiple Specialized Tracks",
    "faculty": "Grenoble IAE \u2014 Institute of Business Administration, Graduate School of Management",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- SORBONNE UNIVERSITY ---
const univ_sorbonneuniversity = db.institutions.insertOne(inst({
  "name": "SORBONNE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Paris",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Paris"
  ],
  "website": "https://www.sorbonne-universite.fr/en",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 40 46 22 11",
      "email": "contact.sorbonne@ac-paris.fr"
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
      "name": "Eiffel Excellence Scholarship: \u20ac1,181/month (Master\u2019s, 10 months), \u20ac2,100+/month (PhD); includes travel, health insurance"
    },
    {
      "name": "France Excellence Scholarship: Various amounts for specific fields and regions (India eligible for Asia-Oceania category)"
    },
    {
      "name": "Faculty-specific scholarships: Available through Faculty of Science & Engineering and Faculty of Arts & Humanities"
    }
  ],
  "internships": {
    "part_time_work": "Strong placement network with major employers: L\u2019Or\u00e9al, Google, BNP Paribas, UNESCO, French government organizations",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs and associations"
  },
  "security": {
    "detail": "Coordination with French academic and security institutions"
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

addPrograms(univ_sorbonneuniversity, "SORBONNE UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Mathematics (3 years, including Data Science specialization)",
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
    "name": "Bachelor\u2019s in Physics (3 years)",
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
    "name": "Bachelor\u2019s in Computer Science (3 years)",
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
    "name": "Bachelor\u2019s in Life Sciences/Biology (3 years)",
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
    "name": "Bachelor\u2019s in Engineering Sciences (3 years)",
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
    "name": "Master\u2019s in Computer Science (DIGIT) - 2 years",
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
    "name": "Master\u2019s in Physics (Fundamental Physics and Applications) - 1-2 years",
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
    "name": "Master\u2019s in Mathematics (various tracks) - 2 years",
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
    "name": "International Master\u2019s in Quantitative Economics (QEM) - 2 years",
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
    "name": "Master\u2019s in Chemistry - 2 years",
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
    "name": "Bachelor\u2019s in Mathematics (3-year program)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (minimum 12/20 on French Baccalaur\u00e9at or 80% equivalent)",
      "Physics or Chemistry"
    ],
    "entry_roles": [
      "Data analyst/scientist/engineer",
      "Machine learning engineer",
      "Statistician",
      "Quantitative analyst",
      "Software developer",
      "Computational specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Physics (3-year program)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (minimum 12/20 or 80% equivalent)",
      "Physics (strong foundation required)",
      "Chemistry"
    ],
    "entry_roles": [
      "Research scientist",
      "Physicist",
      "Data analyst",
      "Software engineer in tech/energy sectors",
      "Quantum engineer",
      "Scientific researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Computer Science (3-year program)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (core requirement)",
      "Physics or Computer Science background"
    ],
    "entry_roles": [
      "Software engineer",
      "Data scientist",
      "Systems analyst",
      "Web developer",
      "Database administrator",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Life Sciences/Biology (3-year program)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology (SVT)",
      "Chemistry",
      "Physics or Mathematics"
    ],
    "entry_roles": [
      "Research scientist",
      "Biologist",
      "Medical technician",
      "Environmental specialist",
      "Healthcare professional",
      "Pharmaceutical researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Engineering Sciences (3-year program)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (core)",
      "Physics",
      "Engineering Sciences background preferred"
    ],
    "entry_roles": [
      "Engineer (mechanical/electrical/systems)",
      "Project engineer",
      "Technical consultant",
      "Manufacturing engineer",
      "Infrastructure designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Computer Science (DIGIT)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 2,
    "annual_fee_cad": 5911,
    "total_fee_cad": 11822,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "programming fundamentals required"
    ],
    "entry_roles": [
      "Software engineer",
      "Machine learning engineer",
      "Data scientist",
      "AI researcher",
      "Cybersecurity specialist",
      "Cloud architect",
      "Systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Physics (Fundamental Physics and Applications)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 2,
    "annual_fee_cad": 5911,
    "total_fee_cad": 11822,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in quantum mechanics",
      "classical mechanics",
      "thermodynamics"
    ],
    "entry_roles": [
      "Research scientist",
      "Physicist",
      "Data analyst",
      "Software engineer",
      "Quantum engineer",
      "Academic researcher",
      "Industrial physicist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Mathematics (various tracks)",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 2,
    "annual_fee_cad": 5911,
    "total_fee_cad": 11822,
    "min_class12_percent": 70,
    "required_subjects": [
      "Calculus",
      "linear algebra",
      "probability",
      "discrete mathematics required"
    ],
    "entry_roles": [
      "Data scientist",
      "Machine learning engineer",
      "Quantitative analyst",
      "Statistician",
      "Financial analyst",
      "Research mathematician",
      "Academic researcher",
      "Actuarian"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Master\u2019s in Quantitative Economics (QEM)",
    "faculty": "Paris 1 Panth\u00e9on-Sorbonne (affiliated Sorbonne institution) / Erasmus Mundus Program",
    "duration_years": 2,
    "annual_fee_cad": 5911,
    "total_fee_cad": 11822,
    "min_class12_percent": 70,
    "required_subjects": [
      "Microeconomics",
      "macroeconomics",
      "statistical methods",
      "mathematical foundations"
    ],
    "entry_roles": [
      "Economist",
      "Policy analyst",
      "Quantitative analyst",
      "Data scientist",
      "Financial analyst",
      "Central bank economist",
      "Research economist",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Chemistry",
    "faculty": "Faculty of Science & Engineering, Sorbonne University",
    "duration_years": 2,
    "annual_fee_cad": 5911,
    "total_fee_cad": 11822,
    "min_class12_percent": 70,
    "required_subjects": [
      "Organic/inorganic chemistry",
      "analytical chemistry",
      "chemical physics"
    ],
    "entry_roles": [
      "Research chemist",
      "Pharmaceutical researcher",
      "Materials scientist",
      "Chemical engineer",
      "Quality control specialist",
      "Environmental chemist",
      "Industrial chemist"
    ],
    "features": []
  }
]);

// --- UNIVERSITÉ PSL ---
const univ_universitpsl = db.institutions.insertOne(inst({
  "name": "UNIVERSIT\u00c9 PSL",
  "abbreviation": "",
  "type": "university",
  "city": "Paris",
  "province": "\u00cele-de-France",
  "country": "France",
  "campuses": [
    "Paris"
  ],
  "website": "https://psl.eu",
  "application_portal": "https://psl.eu/en/education/international-students",
  "contacts": {
    "admissions": {
      "phone": "+33 (0)1 75 00 02 91",
      "email": "contact@psl.eu"
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
      "name": "Eiffel Excellence Scholarship: \u20ac1,200/month (Master\u2019s), \u20ac2,100/month (PhD); covers tuition, monthly allowance, travel, health insurance"
    },
    {
      "name": "Various department-specific scholarships from member schools (Dauphine, ENS, ESPCI, MINES Paris)"
    }
  ],
  "internships": {
    "part_time_work": "Career & Placement Support:",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "30+ student clubs and organizations"
  },
  "security": {
    "detail": "Campus security partnerships with Paris police and local authorities"
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

addPrograms(univ_universitpsl, "UNIVERSITÉ PSL", [
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Sustainability Sciences",
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
    "name": "Bachelor\u2019s in Applied Mathematics",
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
    "name": "Bachelor\u2019s in Law (CPES pathway)",
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
    "name": "Multidisciplinary Undergraduate Degree (CPES)",
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
    "name": "Bachelor\u2019s in Physics (via CPES or Multidisciplinary Program)",
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
    "name": "Master\u2019s in Finance",
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
    "name": "Master\u2019s in Quantitative Economics",
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
    "name": "Master\u2019s in Computer Science",
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
    "name": "Master\u2019s in Economics and Finance",
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
    "name": "Master\u2019s in Management (from Dauphine-PSL)",
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
    "name": "Bachelor\u2019s in Sustainability Sciences",
    "faculty": "\u00c9cole Normale Sup\u00e9rieure - PSL (ENS) in collaboration with PSL",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics + Physics-Chemistry or Mathematics + SVT (Life Sciences) or Mathematics + Economics & Social Sciences or Mathematics + Engineering Sciences or Mathematics + History-Geography"
    ],
    "entry_roles": [
      "Environmental consultant",
      "sustainability analyst",
      "policy advisor",
      "ESG specialist",
      "climate scientist",
      "urban planner"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Applied Mathematics",
    "faculty": "\u00c9cole Normale Sup\u00e9rieure - PSL (ENS)",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "or engineering sciences"
    ],
    "entry_roles": [
      "Data analyst",
      "quantitative analyst",
      "software engineer",
      "financial analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Law",
    "faculty": "Universit\u00e9 Paris Dauphine - PSL",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject requirements",
      "strong analytical",
      "writing skills preferred"
    ],
    "entry_roles": [
      "Junior lawyer",
      "legal consultant",
      "corporate counsel",
      "policy advisor",
      "compliance officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Multidisciplinary Undergraduate Degree (CPES)",
    "faculty": "PSL (collaborative program across member schools: ENS, Dauphine, ESPCI, MINES Paris)",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "chemistry recommended"
    ],
    "entry_roles": [
      "Consultant",
      "data scientist",
      "engineer",
      "researcher",
      "financial analyst (depending on specialization)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor\u2019s in Physics",
    "faculty": "\u00c9cole Normale Sup\u00e9rieure - PSL (ENS) / Physics Department",
    "duration_years": 3,
    "annual_fee_cad": 4155,
    "total_fee_cad": 12465,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "mathematics",
      "chemistry"
    ],
    "entry_roles": [
      "Research scientist",
      "physicist",
      "data analyst",
      "software engineer",
      "quantum engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Finance",
    "faculty": "Universit\u00e9 Paris Dauphine - PSL",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [
      "Finance",
      "accounting",
      "or quantitative disciplines preferred"
    ],
    "entry_roles": [
      "Investment banker",
      "financial analyst",
      "private equity analyst",
      "asset manager",
      "risk manager",
      "trader",
      "M&A analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Quantitative Economics",
    "faculty": "Universit\u00e9 Paris Dauphine - PSL",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "mathematics",
      "or computer science (preferred but not mandatory)"
    ],
    "entry_roles": [
      "Data scientist",
      "quantitative economist",
      "policy analyst",
      "central bank economist",
      "researcher (PhD pathway)",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Computer Science",
    "faculty": "\u00c9cole Normale Sup\u00e9rieure - PSL / ESPCI Paris - PSL (collaborative)",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong programming fundamentals",
      "algorithms",
      "data structures"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "AI researcher",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Economics and Finance",
    "faculty": "Universit\u00e9 Paris Dauphine - PSL",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "finance",
      "quantitative methods strongly preferred"
    ],
    "entry_roles": [
      "Financial analyst",
      "quantitative analyst",
      "ESG analyst",
      "trader",
      "investment banker",
      "asset manager",
      "energy sector professional"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Management",
    "faculty": "Universit\u00e9 Paris Dauphine - PSL",
    "duration_years": 2,
    "annual_fee_cad": 5655,
    "total_fee_cad": 11310,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "business",
      "or mathematics preferred",
      "liberal arts backgrounds accepted"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "operations manager",
      "HR manager",
      "business analyst",
      "startup founder"
    ],
    "features": []
  }
]);

print("France Seeding Completed!");