// ============================================================
// UK UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions uk_universities_seed.js
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

// Delete existing UK data to prevent duplicates
db.institutions.deleteMany({ country: "UK" });
db.programs.deleteMany({ institution_name: { $in: [
  "Univ. of Southampton",
  "LONDON SCHOOL OF ECONOMICS AND POLITICAL SCIENCE",
  "DURHAM UNIVERSITY",
  "UNIVERSITY OF EDINBURGH",
  "NEWCASTLE UNIVERSITY",
  "UNIVERSITY COLLEGE LONDON",
  "UNIVERSITY OF GLASGOW",
  "UNIVERSITY OF OXFORD",
  "Lancaster University",
  "UNIVERSITY OF SHEFFIELD",
  "UNIVERSITY OF CAMBRIDGE",
  "UNIVERSITY OF LEEDS",
  "IMPERIAL COLLEGE LONDON",
  "KING'S COLLEGE LONDON",
  "Univ. of Warwick",
  "Univ. of St Andrews",
  "UNIVERSITY OF BIRMINGHAM",
  "UNIVERSITY OF BRISTOL",
  "UNIVERSITY OF NOTTINGHAM",
  "THE UNIVERSITY OF MANCHESTER",
] } });

// --- Univ. of Southampton ---
const univ_univofsouthampton = db.institutions.insertOne(inst({
  "name": "Univ. of Southampton",
  "abbreviation": "",
  "type": "university",
  "city": "Southampton",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Southampton"
  ],
  "website": "https://www.southampton.ac.uk",
  "application_portal": "Direct online application via University portal",
  "contacts": {
    "admissions": {
      "email": "international@southampton.ac.uk\u200b",
      "phone": "+44 (0)23 8059 2772 (08:00\u201317:00 GMT, Monday\u2013Friday)\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 49,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Central careers service (Careers, Employability and Student Enterprise); work experience programmes; internship and placement fairs; skills workshops; one-to-one guidance",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs and societies: Wide range including cultural, sports, academic, arts, media, and interest-based societies\u200b",
    "housing": "Activities and facilities: Teaching facilities, libraries, sports and fitness centres, accommodation, health and wellbeing support, social venues, student hub\u200b"
  },
  "security": {
    "detail": "MSc Cyber Security"
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

addPrograms(univ_univofsouthampton, "Univ. of Southampton", [
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "School of Electronics and Computer Science\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 44000,
    "total_fee_cad": 132000,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics required",
      "strong performance in computing or science subjects\u200b"
    ],
    "entry_roles": [
      "Software developer",
      "graduate software engineer",
      "IT consultant",
      "systems analyst",
      "data analyst\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Business Management",
    "faculty": "Southampton Business School\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific subject requirement",
      "strong grades in humanities or quantitative subjects beneficial\u200b"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "graduate management programme roles",
      "project coordinator\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Accounting and Finance",
    "faculty": "Southampton Business School\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics or numeracy strongly recommended\u200b"
    ],
    "entry_roles": [
      "Graduate accountant",
      "financial analyst",
      "audit associate",
      "financial planning analyst\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Economics",
    "faculty": "Department of Economics\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics required",
      "strong quantitative aptitude expected\u200b"
    ],
    "entry_roles": [
      "Economic analyst",
      "policy analyst",
      "financial analyst",
      "research analyst",
      "consultant\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "School of Engineering\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics",
      "Physics (or equivalents) required\u200b"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "automotive engineer",
      "graduate engineer programme roles\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science",
    "faculty": "School of Electronics and Computer Science\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 44000,
    "total_fee_cad": 44000,
    "min_class12_percent": 60,
    "required_subjects": [
      "2 programming modules (including object-oriented)",
      "1 advanced mathematics module",
      "1 data structures/algorithms module all with 2:1 grade minimum\u200b"
    ],
    "entry_roles": [
      "Software developer",
      "software engineer",
      "AI engineer",
      "data scientist",
      "cyber security specialist",
      "IT consultant\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics and Finance",
    "faculty": "Southampton Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 50864,
    "total_fee_cad": 50864,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative background required",
      "degree must include quantitative content\u200b"
    ],
    "entry_roles": [
      "Business analyst",
      "financial analyst",
      "data analyst",
      "quantitative analyst",
      "risk analyst",
      "management consultant\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics and Management Science",
    "faculty": "Southampton Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 45760,
    "total_fee_cad": 45760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative background with analytical skills required\u200b"
    ],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "operations analyst",
      "management consultant",
      "strategy analyst\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "Southampton Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in Finance",
      "Economics",
      "Mathematics",
      "Engineering or other quantitative discipline\u200b"
    ],
    "entry_roles": [
      "Investment banker",
      "asset manager",
      "financial analyst",
      "risk manager",
      "consultant",
      "trader\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Cyber Security",
    "faculty": "School of Electronics and Computer Science\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 61600,
    "total_fee_cad": 61600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Background in Computer Science",
      "Information Technology",
      "Engineering",
      "or related quantitative field\u200b"
    ],
    "entry_roles": [
      "Cyber security analyst",
      "security engineer",
      "penetration tester",
      "security consultant",
      "information security officer\u200b"
    ],
    "features": []
  }
]);

// --- LONDON SCHOOL OF ECONOMICS AND POLITICAL SCIENCE ---
const univ_londonschoolofeconomicsandpoliticalscience = db.institutions.insertOne(inst({
  "name": "LONDON SCHOOL OF ECONOMICS AND POLITICAL SCIENCE",
  "abbreviation": "LSE",
  "type": "university",
  "city": "London",
  "province": "England",
  "country": "UK",
  "campuses": [
    "London"
  ],
  "website": "https://www.lse.ac.uk",
  "application_portal": "LSE Online Application Portal (eVision) | https://eVision.lse.ac.uk/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 51,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names:"
    },
    {
      "name": "LSE Undergraduate Support Scheme (Need-based): \u00a36,000\u2013\u00a315,000 per year for 3 years; available for international students with financial need"
    },
    {
      "name": "Finance Department: 3 scholarships covering full MSc Finance or MSc Finance and Economics fees (merit-based; automatic consideration for offer holders)"
    },
    {
      "name": "Finance and Economics Conversion Scholarship: Covers summer conversion course for non-economics backgrounds"
    },
    {
      "name": "JN Tata Endowment Scholarship: Postgraduate/Research/Doctoral; open to Indian nationals, CBSE/CISCE graduates with 60%+ marks, under 45 years; varies by individual circumstances"
    },
    {
      "name": "Inlaks Shivdasani Foundation Scholarship: Master\u2019s/MPhil/Doctoral programmes; open to Indian passport holders residing in India; typically expects first-class equivalent or strong second-class"
    },
    {
      "name": "Margaret Basu Scholarship: \u00a34,000 for postgraduate programmes; for Indian nationals"
    },
    {
      "name": "Marchant Foundation LLM Scholarship: \u00a310,000 for full-time LLM; priority to Indian applicants resident in India"
    }
  ],
  "internships": {
    "part_time_work": "Self-arranged internships during vacation periods; full-time work permitted during breaks",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports: 50+ sports clubs affiliated with TeamUCL; dedicated fitness facilities",
    "housing": "Student accommodation on-campus and partnerships with private halls"
  },
  "security": {
    "detail": "Policy compliance: GDPR-compliant data protection; transparent policies on use of CCTV and security measures"
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

addPrograms(univ_londonschoolofeconomicsandpoliticalscience, "LONDON SCHOOL OF ECONOMICS AND POLITICAL SCIENCE", [
  {
    "level": "UG",
    "name": "BSc Economics \u2013 Core social science; foundation for finance, policy, research; 3 years; \u00a334,000/yr (Tier 3)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Accounting and Finance \u2013 Combined accounting and finance theory; professional pathway; 3 years; \u00a334,000/yr (Tier 3)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc International Relations \u2013 Global affairs, politics, diplomacy; 3 years; \u00a327,500/yr (Tier 1)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Mathematics with Economics \u2013 Quantitative approach to economics; 3 years; \u00a334,000/yr (Tier 3)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Financial Mathematics and Statistics \u2013 Applied quantitative finance; 3 years; \u00a334,000/yr (Tier 3)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance \u2013 Quantitative finance, derivatives, risk management; 10 months; \u00a348,500",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Economics \u2013 Advanced economic theory and analysis; 10 months; \u00a339,000",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance and Economics \u2013 Integrated finance and economics; 10 months; \u00a338,000",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Accounting \u2013 Advanced accounting, financial reporting; 10 months; \u00a336,900",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Relations \u2013 Global governance, international politics; 9\u201310 months; \u00a328,900 (or \u00a318,300 + \u00a314,450 part-time option available)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics (BSc)",
    "faculty": "Department of Economics",
    "duration_years": 3,
    "annual_fee_cad": 59840,
    "total_fee_cad": 179520,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (compulsory)",
      "strong analytical skills"
    ],
    "entry_roles": [
      "Economist",
      "Policy Analyst",
      "Management Consultant",
      "Data Analyst",
      "Financial Analyst",
      "Strategy Consultant",
      "Government Economist",
      "International Organisation (IMF, World Bank) roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting and Finance (BSc)",
    "faculty": "Department of Accounting",
    "duration_years": 3,
    "annual_fee_cad": 59840,
    "total_fee_cad": 179520,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics recommended (not compulsory but essential for success)",
      "strong quantitative background preferred"
    ],
    "entry_roles": [
      "Accountant",
      "Auditor",
      "Financial Analyst",
      "Management Accountant",
      "Tax Advisor",
      "Corporate Finance Analyst",
      "Investment Analyst",
      "Finance Manager",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Relations (BSc)",
    "faculty": "Department of International Relations",
    "duration_years": 3,
    "annual_fee_cad": 48400,
    "total_fee_cad": 145200,
    "min_class12_percent": 90,
    "required_subjects": [
      "No specific subjects required",
      "strong essay writing",
      "analytical skills essential"
    ],
    "entry_roles": [
      "Diplomat",
      "Policy Advisor",
      "International Relations Analyst",
      "NGO Programme Officer",
      "Government Relations Specialist",
      "Research Analyst (think tanks)",
      "United Nations roles",
      "World Bank/IMF positions",
      "Journalist covering international affairs"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics with Economics (BSc)",
    "faculty": "Department of Mathematics (jointly taught with Economics)",
    "duration_years": 3,
    "annual_fee_cad": 59840,
    "total_fee_cad": 179520,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Further Mathematics or Advanced Mathematics preferred"
    ],
    "entry_roles": [
      "Quantitative Analyst (Quant)",
      "Data Scientist",
      "Financial Mathematician",
      "Risk Analyst",
      "Economist",
      "Algorithm Developer",
      "Academic Researcher",
      "Technology Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Financial Mathematics and Statistics (BSc)",
    "faculty": "Department of Mathematics",
    "duration_years": 3,
    "annual_fee_cad": 59840,
    "total_fee_cad": 179520,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Further Mathematics or Advanced Mathematics highly recommended"
    ],
    "entry_roles": [
      "Quantitative Analyst (Quant Trader, Quant Developer)",
      "Risk Analyst",
      "Financial Engineer",
      "Derivatives Analyst",
      "Actuarial Analyst",
      "Data Scientist (Finance)",
      "Academic Researcher in Mathematical Finance"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance (MSc)",
    "faculty": "Department of Finance",
    "duration_years": 1,
    "annual_fee_cad": 85360,
    "total_fee_cad": 85360,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "Physics",
      "Statistics",
      "or equivalent",
      "strong foundation in mathematics",
      "calculus",
      "statistics required"
    ],
    "entry_roles": [
      "Investment Banker (M&A, capital raising, trading)",
      "Quantitative Analyst (Quant)",
      "Portfolio Manager",
      "Risk Manager",
      "Private Equity Associate",
      "Hedge Fund Analyst",
      "Fixed Income Trader",
      "Treasury Analyst",
      "Financial Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Economics (MSc)",
    "faculty": "Department of Economics",
    "duration_years": 1,
    "annual_fee_cad": 68640,
    "total_fee_cad": 68640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Economics",
      "Mathematics",
      "Engineering",
      "Statistics",
      "or related quantitative discipline",
      "strong foundation in micro/macroeconomics",
      "econometrics"
    ],
    "entry_roles": [
      "Economist (government, central banks, international organisations)",
      "Policy Analyst",
      "Research Economist",
      "Management Consultant",
      "Data Scientist (Economics)",
      "Academic Researcher",
      "IMF/World Bank economist",
      "Development economist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance and Economics (MSc)",
    "faculty": "Department of Finance (jointly taught with Economics)",
    "duration_years": 1,
    "annual_fee_cad": 66880,
    "total_fee_cad": 66880,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "Physics",
      "Statistics",
      "excellent foundation in calculus",
      "linear algebra",
      "probability",
      "statistics required"
    ],
    "entry_roles": [
      "Quantitative Analyst (quant trader, quant developer)",
      "Financial Economist",
      "Risk Manager",
      "Investment Analyst",
      "Economic Policy Advisor",
      "Consultant (management consulting or economics-focused)",
      "Researcher (academia or policy institutions)",
      "PhD pathway for academic finance/economics"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Accounting (MSc)",
    "faculty": "Department of Accounting",
    "duration_years": 1,
    "annual_fee_cad": 64944,
    "total_fee_cad": 64944,
    "min_class12_percent": 60,
    "required_subjects": [
      "Accounting",
      "Finance",
      "Business",
      "Economics",
      "or equivalent",
      "knowledge of accounting standards (IFRS, GAAP) beneficial"
    ],
    "entry_roles": [
      "Chartered Accountant (ACA/ACCA pathways)",
      "Auditor (Big 4 firms)",
      "Financial Accountant",
      "Management Accountant",
      "Corporate Finance Analyst",
      "Forensic Accountant",
      "Tax Advisor",
      "Accounting Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Relations (MSc)",
    "faculty": "Department of International Relations",
    "duration_years": 1,
    "annual_fee_cad": 50864,
    "total_fee_cad": 50864,
    "min_class12_percent": 60,
    "required_subjects": [
      "International Relations",
      "Political Science",
      "Economics",
      "History",
      "Law",
      "or related discipline",
      "strong essay writing",
      "analytical skills required"
    ],
    "entry_roles": [
      "Diplomat/Foreign Service Officer",
      "Policy Advisor (government)",
      "International Relations Analyst",
      "NGO Programme Officer",
      "Think Tank Researcher",
      "United Nations positions",
      "World Bank/IMF analyst",
      "Journalist covering international affairs",
      "Academic Researcher"
    ],
    "features": []
  }
]);

// --- DURHAM UNIVERSITY ---
const univ_durhamuniversity = db.institutions.insertOne(inst({
  "name": "DURHAM UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Durham",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Durham"
  ],
  "website": "https://www.dur.ac.uk",
  "application_portal": "Apply online directly to Durham University via postgraduate application portal from individual course page",
  "contacts": {
    "admissions": {
      "phone": "International Student Support; Email and contact forms available via\u00a0https://www.dur.ac.uk/international/; Dedicated country representatives for India\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 38,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: Careers & Enterprise Centre provides careers guidance, employer events, skills development, work experience planning and dedicated support for international students including overseas opportunities and platforms such as Student Circus",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Partnerships & coordination: Security Services coordinates with local Police; partnerships with community safety initiatives; coordination with accommodation and student support services\u200b",
    "clubs": "Student clubs, activities, facilities (brief): Over 300 student societies and groups managed by Durham Students' Union covering academic, cultural, sports, performance and media interests; Indian Society, Asian societies and other cultural groups; 350+ groups at university level; sports teams and college-based societies; libraries, study spaces, sports facilities, cafes"
  },
  "security": {
    "detail": "Partnerships & coordination: Security Services coordinates with local Police; partnerships with community safety initiatives; coordination with accommodation and student support services\u200b"
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

addPrograms(univ_durhamuniversity, "DURHAM UNIVERSITY", [
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "Department of Computer Science (Faculty of Science)",
    "duration_years": 3.0,
    "annual_fee_cad": 57200,
    "total_fee_cad": 171600,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong performance in Mathematics",
      "Further Mathematics advantageous but not required"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "data analyst",
      "IT consultant",
      "cybersecurity specialist",
      "AI engineer\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Law",
    "faculty": "Department of Law (Faculty of Social Sciences)",
    "duration_years": 3.0,
    "annual_fee_cad": 49720,
    "total_fee_cad": 149160,
    "min_class12_percent": 85,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "strong analytical ability valued\u200b"
    ],
    "entry_roles": [
      "Trainee solicitor",
      "barrister training routes",
      "legal adviser",
      "paralegal",
      "compliance or policy roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Economics",
    "faculty": "Department of Economics (Faculty of Social Sciences)",
    "duration_years": 3.0,
    "annual_fee_cad": 43560,
    "total_fee_cad": 130680,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong performance in Mathematics or quantitative subjects",
      "generally no mandatory subject requirements\u200b"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "investment banker",
      "policy adviser",
      "business analyst",
      "management consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Engineering",
    "faculty": "Engineering Department / School of Engineering and Computing Sciences (Faculty of Science)",
    "duration_years": 3.0,
    "annual_fee_cad": 52800,
    "total_fee_cad": 158400,
    "min_class12_percent": 85,
    "required_subjects": [
      "A-level Mathematics required",
      "Further Mathematics",
      "Physics advantageous but not required",
      "Mathematics Aptitude test may be required if alternative maths qualification\u200b"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "civil engineer",
      "electrical engineer",
      "software engineer",
      "aerospace engineer",
      "robotics engineer\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Geography",
    "faculty": "Department of Geography (Faculty of Social Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 48039,
    "total_fee_cad": 144117,
    "min_class12_percent": 85,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "geography background advantageous but not required\u200b"
    ],
    "entry_roles": [
      "Environmental consultant",
      "urban planner",
      "research analyst",
      "policy adviser",
      "GIS specialist",
      "conservation officer\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "Durham University Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 57640,
    "total_fee_cad": 57640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "Mathematics/quantitative module at university level or minimum A-level Mathematics (or equivalent) prerequisite",
      "Finance-related background preferred but not mandatory\u200b"
    ],
    "entry_roles": [
      "Financial analyst",
      "auditor",
      "investment analyst",
      "financial risk manager",
      "corporate finance roles in banking",
      "investment firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Master of Business Administration)",
    "faculty": "Durham University Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 70400,
    "total_fee_cad": 70400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline accepted\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "product manager",
      "operations manager",
      "leadership roles in multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Data Science",
    "faculty": "Department of Mathematics / Institute for Data Science (Faculty of Science)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 59840,
    "total_fee_cad": 59840,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in mathematics",
      "statistics",
      "computer science",
      "engineering or closely related quantitative field",
      "other disciplines without data science at core also accepted\u200b"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "machine learning engineer",
      "business intelligence analyst",
      "roles in finance",
      "tech",
      "consulting",
      "research sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Advanced Computer Science (Artificial Intelligence)",
    "faculty": "Department of Computer Science (Faculty of Science)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 59840,
    "total_fee_cad": 59840,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong grounding in programming",
      "algorithms",
      "mathematics",
      "relevant disciplines include computing",
      "engineering",
      "data science",
      "physics",
      "statistics\u200b"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "data scientist",
      "research engineer",
      "software engineer",
      "roles in tech",
      "research sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management",
    "faculty": "Durham University Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 57200,
    "total_fee_cad": 57200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline accepted",
      "business",
      "management",
      "economics or related backgrounds preferred",
      "other disciplines considered where applicants demonstrate strong analytical ability\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "operations manager",
      "project manager",
      "leadership roles in multinational firms"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF EDINBURGH ---
const univ_universityofedinburgh = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF EDINBURGH",
  "abbreviation": "",
  "type": "university",
  "city": "Edinburgh",
  "province": "Scotland",
  "country": "UK",
  "campuses": [
    "Edinburgh"
  ],
  "website": "https://www.ed.ac.uk",
  "application_portal": "UCAS (for undergraduate); University online portal (for postgraduate)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 49,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Strong; 95%+ graduate employment rate; dedicated career services; alumni network in 48+ countries",
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "clubs": "Student clubs: 300+ societies covering academic, cultural, sports, and social interests",
    "housing": "Facilities: Guaranteed accommodation for international students (cost \u00a3370\u2013\u00a31,402/month); on-campus housing; fitness centers; counselling services; disability support; student welfare officers"
  },
  "security": {
    "detail": "Security infrastructure: University security services; 24/7 emergency support; college-based safety teams; student immigration support"
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

addPrograms(univ_universityofedinburgh, "UNIVERSITY OF EDINBURGH", [
  {
    "level": "UG",
    "name": "BEng/BSc Computer Science",
    "faculty": "School of Informatics",
    "duration_years": 3,
    "annual_fee_cad": 68464,
    "total_fee_cad": 205392,
    "min_class12_percent": 95,
    "required_subjects": [
      "Mathematics (A or A*)",
      "Further Mathematics or Physics recommended"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "systems architect",
      "fintech developer",
      "cloud engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MEng/BSc Engineering (Various Disciplines)",
    "faculty": "School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 68464,
    "total_fee_cad": 205392,
    "min_class12_percent": 95,
    "required_subjects": [
      "Physics (A* or A)",
      "Mathematics (A or A*)",
      "Further Mathematics recommended"
    ],
    "entry_roles": [
      "Mechanical/electrical/civil engineer",
      "structural engineer",
      "renewable energy engineer",
      "aerospace engineer",
      "project engineer",
      "consultancy roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc/MMath Mathematics",
    "faculty": "School of Mathematics",
    "duration_years": 3,
    "annual_fee_cad": 64768,
    "total_fee_cad": 194304,
    "min_class12_percent": 95,
    "required_subjects": [
      "Mathematics (A* or A)",
      "Further Mathematics (A* or A) highly recommended",
      "Physics helpful"
    ],
    "entry_roles": [
      "Quantitative analyst",
      "data scientist",
      "financial analyst",
      "actuarial consultant",
      "research mathematician",
      "software engineer",
      "investment banker"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Jurisprudence",
    "faculty": "School of Law",
    "duration_years": 3,
    "annual_fee_cad": 58960,
    "total_fee_cad": 176880,
    "min_class12_percent": 95,
    "required_subjects": [
      "English or Humanities subjects recommended",
      "no specific subject prerequisite"
    ],
    "entry_roles": [
      "Solicitor",
      "barrister",
      "legal consultant",
      "in-house counsel",
      "government legal advisor",
      "policy analyst",
      "international law practitioner"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Artificial Intelligence and Computer Science",
    "faculty": "School of Informatics",
    "duration_years": 3,
    "annual_fee_cad": 68464,
    "total_fee_cad": 205392,
    "min_class12_percent": 95,
    "required_subjects": [
      "Mathematics (A* or A)",
      "Computer Science/IT subject if available",
      "Physics recommended"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "data scientist",
      "neural network specialist",
      "robotics developer",
      "research scientist",
      "autonomous systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science",
    "faculty": "School of Informatics, Department of Statistics",
    "duration_years": 1,
    "annual_fee_cad": 76208,
    "total_fee_cad": 76208,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "statistics",
      "computer science",
      "engineering",
      "or quantitative discipline preferred"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "quantitative analyst",
      "business analyst",
      "data engineer",
      "research scientist",
      "analytics consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "School of Informatics",
    "duration_years": 1,
    "annual_fee_cad": 76208,
    "total_fee_cad": 76208,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming competence essential (C/C++, Java, Python, R, Matlab, Haskell)",
      "mathematics 60+ SCQF credits (calculus, linear algebra, discrete mathematics, probability)"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "research scientist",
      "deep learning specialist",
      "NLP engineer",
      "computer vision engineer",
      "AI consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Full-Time)",
    "faculty": "Edinburgh Business School",
    "duration_years": 1,
    "annual_fee_cad": 79921,
    "total_fee_cad": 79921,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any undergraduate field",
      "GMAT or GRE optional but scores strengthen application"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "corporate strategist",
      "operations director",
      "business development manager",
      "venture capitalist",
      "equity partner"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Advanced Computer Science",
    "faculty": "School of Informatics",
    "duration_years": 1,
    "annual_fee_cad": 70400,
    "total_fee_cad": 70400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "systems",
      "programming",
      "mathematics background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "systems architect",
      "security researcher",
      "network engineer",
      "research scientist",
      "cloud architect",
      "technology consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance & Investment",
    "faculty": "Edinburgh Business School, School of Economics",
    "duration_years": 1,
    "annual_fee_cad": 70400,
    "total_fee_cad": 70400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Economics",
      "finance",
      "business",
      "accounting",
      "mathematics",
      "or engineering degree preferred",
      "quantitative skills essential"
    ],
    "entry_roles": [
      "Investment analyst",
      "portfolio manager",
      "financial advisor",
      "quantitative analyst",
      "equity trader",
      "venture capitalist",
      "asset manager",
      "hedge fund analyst"
    ],
    "features": []
  }
]);

// --- NEWCASTLE UNIVERSITY ---
const univ_newcastleuniversity = db.institutions.insertOne(inst({
  "name": "NEWCASTLE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Newcastle",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Newcastle"
  ],
  "website": "https://www.ncl.ac.uk",
  "application_portal": "Undergraduate applications via UCAS; Postgraduate applications via online application portal; Enquiries: +44 (0)191 208 3000;\u00a0https://www.ncl.ac.uk",
  "contacts": {
    "admissions": {
      "phone": "International Student Services; India team contact:\u00a0india@ncl.ac.uk;\u00a0https://www.ncl.ac.uk/international/country/india/\u200b",
      "email": "International Student Services; India team contact:\u00a0india@ncl.ac.uk;\u00a0https://www.ncl.ac.uk/international/country/india/\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
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
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_newcastleuniversity, "NEWCASTLE UNIVERSITY", [
  {
    "level": "PG",
    "name": "Scholarships & Financial Support",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Life",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Security",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Process (Brief)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "School of Computing (Faculty of Science and Engineering)",
    "duration_years": 3.0,
    "annual_fee_cad": 52536,
    "total_fee_cad": 157608,
    "min_class12_percent": 80,
    "required_subjects": [
      "Strong performance in Mathematics essential",
      "generally no mandatory subjects beyond maths requirement\u200b"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "data analyst",
      "IT consultant",
      "cybersecurity specialist",
      "AI engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "School of Mechanical and Systems Engineering (Faculty of Science and Engineering)",
    "duration_years": 3.0,
    "annual_fee_cad": 52536,
    "total_fee_cad": 157608,
    "min_class12_percent": 80,
    "required_subjects": [
      "A-level Mathematics",
      "at least one of Physics",
      "Chemistry or Biology required",
      "strong quantitative ability essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "automotive/aerospace engineer",
      "energy sector roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Law",
    "faculty": "School of Law (Faculty of Humanities and Social Sciences)",
    "duration_years": 3.0,
    "annual_fee_cad": 42240,
    "total_fee_cad": 126720,
    "min_class12_percent": 80,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "strong analytical",
      "written communication skills valued"
    ],
    "entry_roles": [
      "Trainee solicitor",
      "barrister training routes",
      "legal adviser",
      "paralegal",
      "compliance or policy roles\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Aerospace Engineering",
    "faculty": "School of Mechanical and Systems Engineering (Faculty of Science and Engineering)",
    "duration_years": 3.0,
    "annual_fee_cad": 52536,
    "total_fee_cad": 157608,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics",
      "at least one of Physics",
      "Chemistry or Biology required at A-level or equivalent"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "mechanical engineer",
      "aircraft systems engineer",
      "propulsion engineer",
      "defence or aviation sector roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Business Management",
    "faculty": "Newcastle University Business School",
    "duration_years": 3.0,
    "annual_fee_cad": 42240,
    "total_fee_cad": 126720,
    "min_class12_percent": 80,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "quantitative skills valued"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "operations manager",
      "roles in multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "Newcastle University Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 51920,
    "total_fee_cad": 51920,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "Mathematics",
      "Statistics",
      "Finance or Economics background preferred but not mandatory\u200b"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment analyst",
      "auditor",
      "financial risk manager",
      "corporate finance roles in banking",
      "investment firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Master of Business Administration)",
    "faculty": "Newcastle University Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 57200,
    "total_fee_cad": 57200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline accepted",
      "strong academic record valued\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "product manager",
      "operations manager",
      "leadership roles in multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Banking and Finance",
    "faculty": "Newcastle University Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 52624,
    "total_fee_cad": 52624,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "Finance",
      "Banking or Economics background preferred but not mandatory"
    ],
    "entry_roles": [
      "Banker",
      "financial trader",
      "financial analyst",
      "risk manager",
      "auditor",
      "fund manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science",
    "faculty": "School of Computing / interdisciplinary programme (Faculty of Science and Engineering)",
    "duration_years": 1.0,
    "annual_fee_cad": 52800,
    "total_fee_cad": 52800,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in mathematics",
      "statistics",
      "computer science",
      "engineering or closely related quantitative field\u200b"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "machine learning engineer",
      "business intelligence analyst",
      "roles in finance",
      "tech",
      "consulting",
      "research sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics",
    "faculty": "Newcastle University Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 51920,
    "total_fee_cad": 51920,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "Mathematics",
      "Statistics",
      "Economics",
      "Business or Computer Science background preferred\u200b"
    ],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "management consultant",
      "financial analyst",
      "roles in multinational firms",
      "tech companies"
    ],
    "features": []
  }
]);

// --- UNIVERSITY COLLEGE LONDON ---
const univ_universitycollegelondon = db.institutions.insertOne(inst({
  "name": "UNIVERSITY COLLEGE LONDON",
  "abbreviation": "UCL",
  "type": "university",
  "city": "London",
  "province": "England",
  "country": "UK",
  "campuses": [
    "London"
  ],
  "website": "https://www.ucl.ac.uk",
  "application_portal": "UCL Online Application Portal (https://sire.ucl.ac.uk/apply/)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 51,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Student Accommodation: +44 (0)20 7679 6322 | accommodation@ucl.ac.uk"
    },
    {
      "name": "General Switchboard: +44 (0)20 7679 2000"
    },
    {
      "name": "Academic Departments Portal: https://www.ucl.ac.uk/prospective-students/"
    },
    {
      "name": "Academic requirement: 85\u201390% aggregate in Class 12 (or equivalent qualifications)"
    },
    {
      "name": "Required subjects: Mathematics and Science (stream-specific requirements vary; Mathematics compulsory for Engineering/Science)"
    },
    {
      "name": "English language test: IELTS 6.5\u20137.0 (minimum 6.0 in all elements) OR TOEFL iBT 92\u2013100 OR Duolingo 115\u2013125 (waivable if 85\u201390%+ in English from Class 12)"
    },
    {
      "name": "Admissions tests: Varies by programme (LNAT for Law, UCAT for Medicine, TMUA/ESAT for Science/Math/Engineering); see individual course pages"
    },
    {
      "name": "Academic requirement: 55\u201370% in bachelor\u2019s degree; 60%+ preferred for competitive programs"
    },
    {
      "name": "Relevant academic background: Varies by course (see individual programme pages)"
    },
    {
      "name": "English language test: IELTS 6.5\u20137.0 OR TOEFL iBT 92\u2013100 OR Duolingo 115\u2013125"
    },
    {
      "name": "Work experience: Varies by course (MBA requires 3+ years)"
    },
    {
      "name": "Primary Intake: September"
    },
    {
      "name": "Key Deadlines:"
    },
    {
      "name": "15 October 2025 (18:00 UK time): Medicine, Dentistry, Veterinary Medicine courses"
    },
    {
      "name": "14 January 2026 (18:00 UK time): Most undergraduate programmes (Equal Consideration deadline)"
    },
    {
      "name": "30 June 2026 (18:00 UK time): Late applications; automatic entry into Clearing thereafter"
    },
    {
      "name": "24 September 2026: Final deadline for 2026 entry"
    },
    {
      "name": "Primary Intake: September"
    },
    {
      "name": "Application Opens: 20 October 2025 (for 2026/27 entry)"
    },
    {
      "name": "Typical Closing Dates: Late April\u2013June for September intake (varies by programme; many close earlier due to popularity)"
    },
    {
      "name": "Processing Time: UCL aims to provide decisions within 10 weeks of application submission"
    },
    {
      "name": "Scholarship Names:"
    },
    {
      "name": "UCL Global Undergraduate Scholarship: 33 scholarships (2025/26):"
    },
    {
      "name": "10 scholarships covering full tuition + maintenance allowance + fixed allowance"
    },
    {
      "name": "23 scholarships covering full tuition only"
    },
    {
      "name": "3 scholarships specifically for India students"
    },
    {
      "name": "UCL Global Masters Scholarship: 85 scholarships (2025/26); 5 allocated to India"
    },
    {
      "name": "UCL India Excellence Scholarship: 33 scholarships of \u00a35,000 each (1 year); Deadline: 26 February 2026"
    },
    {
      "name": "Eligibility: Bachelor\u2019s degree from NIRF Top 100 institution; first-class equivalent grades"
    },
    {
      "name": "Funding Support: Student loans (PSLC for Indian students), hardship funds, bursaries, external scholarships"
    }
  ],
  "internships": {
    "part_time_work": "Placement work integrated into curriculum may not count toward limits",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Student Accommodation: +44 (0)20 7679 6322 | accommodation@ucl.ac.uk",
    "clubs": "Sports facilities: 50+ sports clubs via TeamUCL (surfing to gliding)"
  },
  "security": {
    "detail": "Estates and Security teams coordinate safety protocols"
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

addPrograms(univ_universitycollegelondon, "UNIVERSITY COLLEGE LONDON", [
  {
    "level": "UG",
    "name": "Computer Science (BSc) \u2013 Advanced computing, software development, AI/ML focus",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering \u2013 Mechanical (BEng/MEng) \u2013 3-year BEng or 4-year MEng option; practical design projects",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering \u2013 Electrical and Electronic (BEng) \u2013 Electronics, power systems, communications",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB) \u2013 3-year common law degree; option for year abroad in USA, Australia, Hong Kong, Singapore",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine (MBBS/BSc) \u2013 6-year integrated programme; clinical placements; competitive entry",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science \u2013 Computer Science (MSc) \u2013 Software engineering, AI, theory and practice",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science \u2013 Data Science (MSc) \u2013 Data analysis, machine learning, statistical computing",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science \u2013 Business Analytics (MSc) \u2013 Predictive analytics, decision-making",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science \u2013 Finance (MSc) \u2013 Quantitative finance, investment banking, derivatives",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science \u2013 Management (MSc) \u2013 General management, leadership, business strategy",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (BSc)",
    "faculty": "Department of Computer Science, Faculty of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 82192,
    "total_fee_cad": 246576,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (essential)",
      "Physics or Computer Science preferred"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Developer",
      "Data Engineer",
      "Web Developer",
      "Mobile App Developer",
      "Graduate Analyst",
      "Technology Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (BEng)",
    "faculty": "Department of Mechanical Engineering, Faculty of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 75152,
    "total_fee_cad": 225456,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both essential)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Graduate Engineer",
      "Thermal Engineer",
      "Automotive Engineer",
      "Aerospace Engineer",
      "Energy Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical and Electronic Engineering (BEng)",
    "faculty": "Department of Electrical and Electronic Engineering, Faculty of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 75152,
    "total_fee_cad": 225456,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both essential)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Electronics Engineer",
      "Power Systems Engineer",
      "Control Systems Engineer",
      "Telecommunications Engineer",
      "RF Engineer",
      "Embedded Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB)",
    "faculty": "Faculty of Laws",
    "duration_years": 3,
    "annual_fee_cad": 58080,
    "total_fee_cad": 174240,
    "min_class12_percent": 90,
    "required_subjects": [
      "No specific subjects required",
      "strong analytical",
      "writing skills preferred"
    ],
    "entry_roles": [
      "Solicitor",
      "Barrister",
      "In-house Counsel",
      "Legal Analyst",
      "Compliance Officer",
      "Legal Secretary",
      "Court Officer",
      "Policy Advisor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine (MBBS/BSc)",
    "faculty": "UCL Medical School",
    "duration_years": 3,
    "annual_fee_cad": 122085,
    "total_fee_cad": 366255,
    "min_class12_percent": 90,
    "required_subjects": [
      "Biology",
      "Chemistry (essential)",
      "Physics preferred"
    ],
    "entry_roles": [
      "Foundation Doctor (NHS Foundation Programme)",
      "Medical Officer",
      "Clinical Researcher",
      "Public Health Official",
      "Medical Advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computer Science (MSc)",
    "faculty": "Department of Computer Science, Faculty of Engineering Sciences",
    "duration_years": 1,
    "annual_fee_cad": 70048,
    "total_fee_cad": 70048,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Engineering",
      "or related discipline with strong programming foundation"
    ],
    "entry_roles": [
      "Software Engineer",
      "Senior Developer",
      "Solutions Architect",
      "DevOps Engineer",
      "Cloud Architect",
      "Machine Learning Engineer",
      "Technical Lead",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science (MSc)",
    "faculty": "Department of Computer Science / Faculty of Engineering Sciences",
    "duration_years": 1,
    "annual_fee_cad": 82192,
    "total_fee_cad": 82192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "Engineering",
      "Physics",
      "or related quantitative discipline",
      "strong mathematical foundation required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Data Engineer",
      "Business Intelligence Analyst",
      "AI Specialist",
      "Risk Analyst",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Analytics (MSc)",
    "faculty": "UCL School of Management",
    "duration_years": 1,
    "annual_fee_cad": 76560,
    "total_fee_cad": 76560,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "quantitative background (Mathematics, Engineering, Economics, Statistics, Sciences) preferred"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Consultant (management consulting)",
      "Product Manager",
      "Strategy Analyst",
      "Financial Analyst",
      "Risk Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance (MSc)",
    "faculty": "UCL School of Management & Department of Economics (joint programme)",
    "duration_years": 1,
    "annual_fee_cad": 82896,
    "total_fee_cad": 82896,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Mathematics",
      "Engineering",
      "Economics",
      "Statistics",
      "Science",
      "strong quantitative skills required"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Quantitative Analyst (Quant)",
      "Portfolio Manager",
      "Risk Analyst",
      "Private Equity Associate",
      "Hedge Fund Analyst",
      "Fixed Income Trader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management (MSc)",
    "faculty": "UCL School of Management",
    "duration_years": 1,
    "annual_fee_cad": 75152,
    "total_fee_cad": 75152,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "business",
      "economics",
      "engineering",
      "sciences valued"
    ],
    "entry_roles": [
      "Management Consultant",
      "Associate Consultant",
      "Business Analyst",
      "Strategy Manager",
      "Operations Manager",
      "Product Manager",
      "MBA pathway candidate",
      "General Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF GLASGOW ---
const univ_universityofglasgow = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF GLASGOW",
  "abbreviation": "",
  "type": "university",
  "city": "Glasgow",
  "province": "Scotland",
  "country": "UK",
  "campuses": [
    "Glasgow"
  ],
  "website": "https://www.gla.ac.uk",
  "application_portal": "Online Application Portal (eVision) | https://www.gla.ac.uk/postgraduate/apply/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 47,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names:"
    },
    {
      "name": "ASBS India Achievers Award: \u00a315,000 (approximately \u20b918.2 lakh) for Indian nationals in postgraduate taught programmes (1-year Master\u2019s)"
    },
    {
      "name": "Deadline Round 1: 23 February 2026; Round 2: 18 May 2026"
    },
    {
      "name": "Notification: 6 March 2026 and 29 May 2026 respectively"
    },
    {
      "name": "Eligibility: UK First Class Honours equivalent (70%+ in bachelor\u2019s degree), strong academic performance"
    },
    {
      "name": "World Changers Excellence Scholarship (UG):"
    },
    {
      "name": "\u00a37,000\u2013\u00a310,000 per year for Science programmes"
    },
    {
      "name": "\u00a37,000 per year for Social Science and Arts programmes"
    },
    {
      "name": "Competitive, merit-based"
    },
    {
      "name": "World Changers Glasgow Scholarship (PG): \u00a35,000 automatic discount on tuition fees (across all postgraduate taught)"
    },
    {
      "name": "Global Leadership Scholarship (PG): \u00a310,000 competitive award (exceptional Master\u2019s candidates)"
    },
    {
      "name": "Sanctuary Scholarship: Full tuition fees + \u00a35,000 annual stipend (for asylum seekers, refugees, humanitarian protection holders)"
    },
    {
      "name": "Aga Khan Foundation: Up to 50% grant + 50% loan (full tuition + living costs)"
    },
    {
      "name": "Narotam Sekhsaria Foundation: INR 20 Lakh interest-free (March deadline, individuals under 30)"
    },
    {
      "name": "Total Scholarship Value Available: Over \u00a31 million invested annually in undergraduate scholarships alone"
    }
  ],
  "internships": {
    "part_time_work": "Placement Partnerships: Strong connections with Fortune 500 companies",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Special Interests: Mountaineering, sailing, skiing, martial arts, cultural societies, hobby clubs, academic societies, volunteering clubs",
    "housing": "Accommodation: On-campus halls and partnership with external providers"
  },
  "security": {
    "detail": "Students required to cooperate with security procedures during emergencies"
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

addPrograms(univ_universityofglasgow, "UNIVERSITY OF GLASGOW", [
  {
    "level": "UG",
    "name": "Accountancy and Finance (BAcc) \u2013 4-year professional accounting degree; \u00a331,800/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Finance (BFin) \u2013 4-year degree combining finance theory and quantitative analysis; \u00a331,800/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business/Management (various) \u2013 Broad business foundation; \u00a326,580/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (various: Civil, Mechanical, Electrical, Chemical) \u2013 4\u20135 year programmes; \u00a331,800/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB) \u2013 4-year common law degree; options for year abroad; \u00a326,580/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance & Management \u2013 Integrated finance and management; 12 months; \u00a334,470 (2026-27)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA \u2013 Master of Business Administration; 12 months; \u00a340,500 (fixed)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Finance \u2013 Advanced quantitative finance; 12 months; \u00a336,720 (2026-27)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Accounting \u2013 Advanced accounting and financial reporting; 12 months; Approximately \u00a334,470",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science \u2013 Data analysis, machine learning, analytics; 12 months; Approximately \u00a333,210",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accountancy and Finance (BAcc)",
    "faculty": "Adam Smith Business School, Department of Accounting and Finance",
    "duration_years": 3,
    "annual_fee_cad": 55968,
    "total_fee_cad": 167904,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics preferred (not compulsory)",
      "strong numeracy skills essential"
    ],
    "entry_roles": [
      "Accountant",
      "Auditor",
      "Financial Accountant",
      "Management Accountant",
      "Tax Advisor",
      "Management Consultant",
      "Financial Analyst",
      "Investment Analyst",
      "Corporate Finance Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Finance (BFin)",
    "faculty": "Adam Smith Business School, Department of Accounting and Finance",
    "duration_years": 3,
    "annual_fee_cad": 55968,
    "total_fee_cad": 167904,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics recommended (strong quantitative background essential)",
      "Physics or Economics helpful"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Manager",
      "Portfolio Manager",
      "Fixed Income Analyst",
      "Equity Analyst",
      "Quantitative Analyst (Quant)",
      "Corporate Finance Analyst",
      "Private Equity Associate"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business and Management (BSc/BA)",
    "faculty": "Adam Smith Business School, School of Business, Economics and Law",
    "duration_years": 3,
    "annual_fee_cad": 46780,
    "total_fee_cad": 140340,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific subjects required",
      "mathematics or business studies helpful"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Graduate Trainee (various sectors)",
      "Operations Manager",
      "Project Manager",
      "Strategy Analyst",
      "Product Manager",
      "HR Coordinator",
      "Marketing Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB)",
    "faculty": "School of Law, School of Business, Economics and Law",
    "duration_years": 3,
    "annual_fee_cad": 46780,
    "total_fee_cad": 140340,
    "min_class12_percent": 90,
    "required_subjects": [
      "No specific subjects required",
      "strong essay writing",
      "analytical skills essential"
    ],
    "entry_roles": [
      "Solicitor",
      "Barrister",
      "In-house Counsel",
      "Legal Analyst",
      "Compliance Officer",
      "Government Lawyer",
      "Policy Advisor",
      "Company Secretary",
      "Judicial Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (various: Civil, Mechanical, Electrical, Chemical)",
    "faculty": "School of Engineering, James Watt School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 55968,
    "total_fee_cad": 167904,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both essential)",
      "Further Mathematics helpful"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Chemical Engineer",
      "Structural Engineer",
      "Project Engineer",
      "Graduate Trainee Engineer",
      "Design Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance & Management (MSc)",
    "faculty": "Adam Smith Business School, Department of Finance",
    "duration_years": 1,
    "annual_fee_cad": 60667,
    "total_fee_cad": 60667,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Finance",
      "Economics",
      "Engineering",
      "Mathematics",
      "or related discipline",
      "strong foundation in mathematics",
      "statistics helpful"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Management Consultant",
      "Corporate Finance Manager",
      "Risk Manager",
      "Business Analyst",
      "Strategy Consultant",
      "Portfolio Manager",
      "Private Equity Associate"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Adam Smith Business School, MBA Programme",
    "duration_years": 1,
    "annual_fee_cad": 355,
    "total_fee_cad": 355,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "diverse backgrounds encouraged (advantage for cohort diversity)"
    ],
    "entry_roles": [
      "General Manager",
      "Senior Consultant",
      "Director-level roles",
      "Entrepreneur",
      "Strategy Manager",
      "Operations Director",
      "Product Manager (senior)",
      "Corporate Strategy Executive",
      "Executive Coach",
      "Business Development Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Finance (MFin)",
    "faculty": "Adam Smith Business School, Department of Finance",
    "duration_years": 1,
    "annual_fee_cad": 64627,
    "total_fee_cad": 64627,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "Physics",
      "or related quantitative field",
      "strong foundation in calculus",
      "linear algebra",
      "probability",
      "statistics"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Quantitative Analyst (Quant)",
      "Fixed Income Analyst",
      "Foreign Exchange (FX) Specialist",
      "Derivatives Analyst",
      "Risk Manager",
      "International Financial Analyst",
      "Treasury Analyst",
      "Equity Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Accounting (MSc)",
    "faculty": "Adam Smith Business School, Department of Accounting and Finance",
    "duration_years": 1,
    "annual_fee_cad": 60667,
    "total_fee_cad": 60667,
    "min_class12_percent": 60,
    "required_subjects": [
      "Accounting",
      "Finance",
      "Business",
      "Economics",
      "or equivalent",
      "knowledge of accounting standards (IFRS, GAAP) beneficial but not required"
    ],
    "entry_roles": [
      "Chartered Accountant (ACA/ACCA pathway)",
      "Auditor (Big 4 firms)",
      "Financial Accountant",
      "Management Accountant",
      "Corporate Finance Analyst",
      "Forensic Accountant",
      "Tax Advisor",
      "Accounting Consultant",
      "Internal Auditor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science (MSc)",
    "faculty": "School of Computing Science (jointly taught with Mathematics/Statistics)",
    "duration_years": 1,
    "annual_fee_cad": 58449,
    "total_fee_cad": 58449,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "Engineering",
      "Physics",
      "Economics",
      "or related quantitative discipline",
      "strong foundation in programming (Python/R)",
      "mathematics",
      "statistics required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Business Intelligence Analyst",
      "AI Specialist",
      "Research Scientist (Data)",
      "Quantitative Analyst (Data-focused)",
      "Data Strategist",
      "Consultant"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF OXFORD ---
const univ_universityofoxford = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF OXFORD",
  "abbreviation": "",
  "type": "university",
  "city": "Oxford",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Oxford"
  ],
  "website": "https://www.ox.ac.uk",
  "application_portal": "UCAS (for undergraduate); Oxford application portal (for postgraduate taught programs)",
  "contacts": {
    "admissions": {
      "phone": "www.ox.ac.uk/contact-us\u00a0| Phone: +44 1865 270000"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 132,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Extensive; 92%+ employment outcomes for postgraduates; career service offices in each college/department",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs: 600+ societies covering academic, cultural, sporting, and social interests",
    "housing": "Facilities: Accommodation in 39 colleges + 6 permanent private halls; fitness centers, swimming pools, dining halls, theater, music venues"
  },
  "security": {
    "detail": "Security infrastructure: University security services; college-based security teams; 24/7 emergency support"
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

addPrograms(univ_universityofoxford, "UNIVERSITY OF OXFORD", [
  {
    "level": "UG",
    "name": "BA/MMath Mathematics",
    "faculty": "Department of Mathematics",
    "duration_years": 3,
    "annual_fee_cad": 66605,
    "total_fee_cad": 199815,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics essential",
      "Further Mathematics highly recommended"
    ],
    "entry_roles": [
      "Quantitative analyst",
      "software engineer",
      "data scientist",
      "research mathematician",
      "financial analyst",
      "actuarial consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/MCompSci Computer Science",
    "faculty": "Department of Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 66605,
    "total_fee_cad": 199815,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (A or A*)",
      "Further Mathematics recommended"
    ],
    "entry_roles": [
      "Software engineer",
      "machine learning engineer",
      "systems architect",
      "security researcher",
      "technology consultant",
      "product manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/MMathCompSci Mathematics and Computer Science",
    "faculty": "Departments of Mathematics & Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 66605,
    "total_fee_cad": 199815,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (A* or A)",
      "Further Mathematics if taken at A*A level"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "quantitative analyst",
      "fintech engineer",
      "research scientist",
      "technology consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Jurisprudence",
    "faculty": "Faculty of Law",
    "duration_years": 3,
    "annual_fee_cad": 62057,
    "total_fee_cad": 186171,
    "min_class12_percent": 90,
    "required_subjects": [
      "Any subject involving essay writing (History, English, Classics recommended)"
    ],
    "entry_roles": [
      "Barrister",
      "solicitor",
      "in-house counsel",
      "legal consultant",
      "government policy advisor",
      "international law practitioner"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Economics and Management",
    "faculty": "Department of Economics & Sa\u00efd Business School",
    "duration_years": 3,
    "annual_fee_cad": 62057,
    "total_fee_cad": 186171,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (A or A*) essential",
      "Economics helpful"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "economist",
      "business analyst",
      "policy advisor",
      "corporate strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Master of Business Administration)",
    "faculty": "Sa\u00efd Business School",
    "duration_years": 1,
    "annual_fee_cad": 147435,
    "total_fee_cad": 147435,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any undergraduate degree accepted",
      "GMAT 650+ (average 690) or GRE 320+ required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "strategy manager",
      "technology leader",
      "social impact officer",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Financial Economics",
    "faculty": "Sa\u00efd Business School, Department of Economics",
    "duration_years": 1,
    "annual_fee_cad": 110739,
    "total_fee_cad": 110739,
    "min_class12_percent": 60,
    "required_subjects": [
      "Economics",
      "mathematics",
      "engineering",
      "or quantitative discipline preferred"
    ],
    "entry_roles": [
      "Financial analyst",
      "quantitative trader",
      "risk manager",
      "investment manager",
      "hedge fund analyst",
      "investment banker"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Statistical Science",
    "faculty": "Department of Statistics",
    "duration_years": 1,
    "annual_fee_cad": 51656,
    "total_fee_cad": 51656,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong background in mathematics",
      "probability",
      "or computational methods essential"
    ],
    "entry_roles": [
      "Data scientist",
      "statistician",
      "machine learning engineer",
      "quantitative analyst",
      "research scientist",
      "bioinformatician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Advanced Computer Science",
    "faculty": "Department of Computer Science",
    "duration_years": 1,
    "annual_fee_cad": 56082,
    "total_fee_cad": 56082,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming",
      "mathematics background helpful"
    ],
    "entry_roles": [
      "Software engineer",
      "machine learning engineer",
      "security researcher",
      "systems architect",
      "data scientist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "LLM (Master of Laws)",
    "faculty": "Faculty of Law",
    "duration_years": 1,
    "annual_fee_cad": 70400,
    "total_fee_cad": 70400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Law degree essential",
      "common law jurisdiction knowledge beneficial",
      "non-common law graduates eligible for specialized tracks"
    ],
    "entry_roles": [
      "Barrister",
      "solicitor",
      "in-house counsel",
      "international law practitioner",
      "human rights lawyer",
      "government legal advisor",
      "legal researcher"
    ],
    "features": []
  }
]);

// --- Lancaster University ---
const univ_lancasteruniversity = db.institutions.insertOne(inst({
  "name": "Lancaster University",
  "abbreviation": "",
  "type": "university",
  "city": "Lancaster",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Lancaster"
  ],
  "website": "https://www.lancaster.ac.uk",
  "application_portal": "Taught master\u2019s applications are submitted through Lancaster\u2019s online My Applications / postgraduate application portal and usually require degree transcripts and certificates, two references, evidence of English language proficiency where applicable, and a personal statement explaining motivation for the chosen degree.",
  "contacts": {
    "admissions": {
      "address": "United Kingdom (campus address listed as Lancaster, United Kingdom, LA1 4YW on official events and maps pages).",
      "email": "Email globalexperiences@lancaster.ac.uk; phone +44 (0)1524 592035 (Global Experiences contact details on international students pages).",
      "phone": "Email globalexperiences@lancaster.ac.uk; phone +44 (0)1524 592035 (Global Experiences contact details on international students pages)."
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
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
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_lancasteruniversity, "Lancaster University", [
  {
    "level": "UG",
    "name": "BSc Management",
    "faculty": "Lancaster University Management School (LUMS)",
    "duration_years": 3,
    "annual_fee_cad": 40480,
    "total_fee_cad": 121440,
    "min_class12_percent": 85,
    "required_subjects": [
      "Any stream (Math preferred)"
    ],
    "entry_roles": [
      "Business Analyst",
      "Consultant",
      "Marketing Exec"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "School of Computing & Communications",
    "duration_years": 3,
    "annual_fee_cad": 42240,
    "total_fee_cad": 126720,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [
      "Software Engineer",
      "Data Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Accounting & Finance",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 40480,
    "total_fee_cad": 121440,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [
      "Auditor",
      "Financial Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Law",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 38720,
    "total_fee_cad": 116160,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [
      "Legal Assistant",
      "Solicitor (after further qualification)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 44000,
    "total_fee_cad": 132000,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [
      "Design Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 29920,
    "total_fee_cad": 29920,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Consultant",
      "Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 35200,
    "total_fee_cad": 35200,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Investment Analyst",
      "Risk Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 31468,
    "total_fee_cad": 31468,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Developer",
      "Data Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Marketing",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 29920,
    "total_fee_cad": 29920,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Digital Marketing",
      "Brand Exec"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Logistics & Supply Chain Management",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 29920,
    "total_fee_cad": 29920,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Supply Chain Analyst",
      "Operations Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF SHEFFIELD ---
const univ_universityofsheffield = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF SHEFFIELD",
  "abbreviation": "",
  "type": "university",
  "city": "Sheffield",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Sheffield"
  ],
  "website": "https://sheffield.ac.uk",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "International Student Services; Contact via country-specific pages at\u00a0https://sheffield.ac.uk/international/; India Team for country-specific enquiries\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
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
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_universityofsheffield, "UNIVERSITY OF SHEFFIELD", [
  {
    "level": "PG",
    "name": "Scholarships & Financial Support",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Life",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Campus Security",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Process (Brief)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Most Popular Courses Among Indian Students",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "Department of Computer Science (Faculty of Science)",
    "duration_years": 3.0,
    "annual_fee_cad": 53803,
    "total_fee_cad": 161409,
    "min_class12_percent": 80,
    "required_subjects": [
      "Strong performance in Mathematics essential",
      "generally no mandatory subjects beyond maths requirement\u200b"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "data analyst",
      "IT consultant",
      "cybersecurity specialist",
      "AI engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "School of Mechanical, Aerospace and Civil Engineering (Faculty of Science)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 53803,
    "total_fee_cad": 161409,
    "min_class12_percent": 80,
    "required_subjects": [
      "A-level Mathematics",
      "at least one of Physics",
      "Chemistry or Biology required",
      "strong quantitative ability essential\u200b"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "automotive/aerospace engineer",
      "energy sector roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Law",
    "faculty": "School of Law (Faculty of Social Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 41905,
    "total_fee_cad": 125715,
    "min_class12_percent": 90,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "strong analytical",
      "written communication skills valued\u200b"
    ],
    "entry_roles": [
      "Trainee solicitor",
      "barrister training routes",
      "legal adviser",
      "paralegal",
      "compliance or policy roles\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Aerospace Engineering",
    "faculty": "School of Mechanical, Aerospace and Civil Engineering (Faculty of Science)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 53803,
    "total_fee_cad": 161409,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "at least one of Physics",
      "Chemistry or Biology required at A-level or equivalent\u200b"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "mechanical engineer",
      "aircraft systems engineer",
      "propulsion engineer",
      "defence or aviation sector roles\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Business Management",
    "faculty": "Management School (Faculty of Social Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 41905,
    "total_fee_cad": 125715,
    "min_class12_percent": 80,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "quantitative skills valued\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "operations manager",
      "roles in multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science",
    "faculty": "Department of Mathematics / interdisciplinary programme (Faculty of Science)",
    "duration_years": 1.0,
    "annual_fee_cad": 57912,
    "total_fee_cad": 57912,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong grounding in programming",
      "algorithms",
      "mathematics",
      "relevant disciplines include computing",
      "engineering",
      "data science",
      "physics",
      "statistics\u200b"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "machine learning engineer",
      "business intelligence analyst",
      "roles in finance",
      "tech",
      "consulting",
      "research sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Master of Business Administration)",
    "faculty": "Management School (Faculty of Social Sciences)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 63078,
    "total_fee_cad": 63078,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline accepted",
      "strong academic record valued\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "product manager",
      "operations manager",
      "leadership roles in multinational firms",
      "various industries"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance\u00a0(or MSc Business Finance and Economics)",
    "faculty": "Management School (Faculty of Social Sciences)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 57912,
    "total_fee_cad": 57912,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong quantitative skills required",
      "mathematics",
      "statistics",
      "finance or economics background preferred but not mandatory\u200b"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment analyst",
      "auditor",
      "financial risk manager",
      "corporate finance roles in banking",
      "investment firms\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management",
    "faculty": "Management School (Faculty of Social Sciences)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 57912,
    "total_fee_cad": 57912,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline accepted",
      "business",
      "management or related backgrounds preferred but not required\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "operations manager",
      "project manager",
      "leadership roles in multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Advanced Computer Science\u00a0(or Artificial Intelligence focus)",
    "faculty": "Department of Computer Science (Faculty of Science)",
    "duration_years": 1.0,
    "annual_fee_cad": 57912,
    "total_fee_cad": 57912,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong grounding in programming",
      "algorithms",
      "mathematics",
      "relevant disciplines include computing",
      "engineering",
      "data science",
      "physics",
      "statistics\u200b"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "data scientist",
      "research engineer",
      "software engineer",
      "roles in tech",
      "research sectors"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF CAMBRIDGE ---
const univ_universityofcambridge = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF CAMBRIDGE",
  "abbreviation": "",
  "type": "university",
  "city": "Cambridge",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Cambridge"
  ],
  "website": "https://www.undergraduate.study.cam.ac.uk",
  "application_portal": "UCAS (Undergraduate); Cambridge Graduate Application Portal (Postgraduate)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 49,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Yes; Cambridge Careers Service; departmental guidance; 40%+ postgraduates continue to research/academia",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs & activities: 180+ societies (sports, cultural, academic, social); includes Indian societies, performing arts, debating, technology clubs",
    "housing": "Colleges provide: Junior Common Rooms (undergraduate) / Middle Combination Rooms (postgraduate); catered/self-catered accommodation; welfare support; chapel services"
  },
  "security": {
    "detail": "Partnerships & coordination: College-based security (staffed Porters' Lodges 24/7); coordination with UK emergency services (999 for emergencies; 101 for non-emergency); local police liaisons"
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

addPrograms(univ_universityofcambridge, "UNIVERSITY OF CAMBRIDGE", [
  {
    "level": "UG",
    "name": "Natural Sciences, BA (Hons) and MSci",
    "faculty": "School of Physical Sciences (15 contributing departments)",
    "duration_years": 3,
    "annual_fee_cad": 51131,
    "total_fee_cad": 153393,
    "min_class12_percent": 95,
    "required_subjects": [
      "Physics",
      "Mathematics (compulsory)",
      "Chemistry/Biology (highly recommended for biological sciences stream)"
    ],
    "entry_roles": [
      "Research scientist",
      "pharmaceutical researcher",
      "environmental consultant",
      "data analyst",
      "engineering graduate trainee",
      "further PhD study"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering, BA (Hons) and Master of Engineering (MEng)",
    "faculty": "Department of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 68925,
    "total_fee_cad": 206775,
    "min_class12_percent": 95,
    "required_subjects": [
      "Physics",
      "Mathematics (A* expected)",
      "Further Mathematics/Additional Mathematics strongly recommended"
    ],
    "entry_roles": [
      "Graduate engineer (mechanical, civil, electrical, aerospace)",
      "engineering consultant",
      "project manager",
      "management consulting",
      "tech industry"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics, BA (Hons) and MMath",
    "faculty": "Faculty of Mathematics",
    "duration_years": 3,
    "annual_fee_cad": 50519,
    "total_fee_cad": 151557,
    "min_class12_percent": 95,
    "required_subjects": [
      "Mathematics A* / Further Mathematics A* (both required)"
    ],
    "entry_roles": [
      "Mathematician",
      "quantitative analyst (finance)",
      "data scientist",
      "software engineer",
      "academic researcher",
      "management consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science, BA (Hons) and Master of Computer Science (MCS)",
    "faculty": "Department of Computer Science and Technology",
    "duration_years": 3,
    "annual_fee_cad": 68925,
    "total_fee_cad": 206775,
    "min_class12_percent": 95,
    "required_subjects": [
      "Mathematics A* (required)",
      "Physics/Further Mathematics/Computer Science (recommended)"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "AI/ML engineer",
      "tech startup founder",
      "management consultant",
      "cybersecurity specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics, BA (Hons)",
    "faculty": "Faculty of Economics",
    "duration_years": 3,
    "annual_fee_cad": 51131,
    "total_fee_cad": 153393,
    "min_class12_percent": 95,
    "required_subjects": [
      "Mathematics (strongly required)",
      "Economics/Further Mathematics (recommended)"
    ],
    "entry_roles": [
      "Economist (government/central bank)",
      "management consultant",
      "investment banker",
      "financial analyst",
      "policy analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MPhil in Economics",
    "faculty": "Faculty of Economics",
    "duration_years": 1,
    "annual_fee_cad": 65640,
    "total_fee_cad": 65640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's degree in Economics",
      "Mathematics",
      "Engineering",
      "or quantitative social sciences"
    ],
    "entry_roles": [
      "Professional economist (UK Government Economic Service, consultancies)",
      "central bank analyst",
      "policy researcher",
      "academic (PhD pathway)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MPhil in Advanced Computer Science",
    "faculty": "Department of Computer Science and Technology",
    "duration_years": 1,
    "annual_fee_cad": 63866,
    "total_fee_cad": 63866,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Computer Science",
      "Mathematics",
      "Physics",
      "or Engineering (strong technical foundation)"
    ],
    "entry_roles": [
      "Research scientist (AI/ML)",
      "software architect",
      "startup co-founder",
      "tech company engineer (Google, Microsoft, etc.)",
      "academic researcher (PhD pathway)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MPhil in Finance and Economics",
    "faculty": "Faculty of Economics (Finance specialisation)",
    "duration_years": 1,
    "annual_fee_cad": 68882,
    "total_fee_cad": 68882,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Economics",
      "Finance",
      "Mathematics",
      "Engineering",
      "or related quantitative field"
    ],
    "entry_roles": [
      "Investment banker",
      "hedge fund analyst",
      "corporate finance manager",
      "financial consultant",
      "quant analyst",
      "central bank economist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MPhil in Machine Learning and Machine Intelligence",
    "faculty": "Department of Computer Science and Technology",
    "duration_years": 1,
    "annual_fee_cad": 70488,
    "total_fee_cad": 70488,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Computer Science",
      "Mathematics",
      "Physics",
      "Statistics",
      "or Engineering (strong maths/coding required)"
    ],
    "entry_roles": [
      "ML engineer (tech companies)",
      "AI researcher",
      "startup co-founder",
      "data scientist",
      "research scientist (academia/industry labs)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Finance (MFin)",
    "faculty": "Cambridge Judge Business School / Faculty of Economics",
    "duration_years": 1,
    "annual_fee_cad": 121440,
    "total_fee_cad": 121440,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "or Business",
      "strong quantitative skills required"
    ],
    "entry_roles": [
      "Investment banker",
      "private equity analyst",
      "portfolio manager",
      "hedge fund manager",
      "corporate treasurer",
      "financial risk manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF LEEDS ---
const univ_universityofleeds = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF LEEDS",
  "abbreviation": "",
  "type": "university",
  "city": "Leeds",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Leeds"
  ],
  "website": "https://www.leeds.ac.uk",
  "application_portal": "University of Leeds Online Application Portal | https://www.leeds.ac.uk/courses (course-specific links)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 49,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names:"
    },
    {
      "name": "Eligibility: Strong academic performance, self/partially funded, excellent professional or personal skills"
    },
    {
      "name": "Eligibility: International fee-paying students from selected countries (including India), holding conditional/unconditional offer, self/partially funded, registered by 30 January 2026"
    },
    {
      "name": "Applied automatically to second semester tuition fee"
    },
    {
      "name": "Eligibility: Passport holders from Canada, Egypt, EU, Hong Kong, India, Indonesia, Jordan, Kenya, Nigeria, Norway, Singapore, Switzerland, Turkey, USA; international fee-paying; holding conditional/unconditional offer; entering Year 1"
    },
    {
      "name": "Herbert Thompson Scholarship: ~\u00a314,700 (1 award, merit-based, priority to UK/Commonwealth citizens but international applications considered)"
    },
    {
      "name": "Business School International Excellence Scholarship: Varies (competitive; business programmes only)"
    },
    {
      "name": "International Undergraduate Science and Engineering Scholarship: ~\u00a36,500\u2013\u00a316,000 (science/engineering courses; merit-based)"
    },
    {
      "name": "Leeds Alumni Bursary: Varies (for former students\u2019 relatives)"
    }
  ],
  "internships": {
    "part_time_work": "Placement Partnerships: Strong connections with leading global employers",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Accommodation: On-campus halls (Clarendon Wood, Opal, etc.); partnerships with private providers",
    "clubs": "50+ Sports Clubs: TeamUCL partnership; football, rugby, badminton, martial arts, climbing, windsurfing, etc."
  },
  "security": {
    "detail": "Key repository management for emergency access"
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

addPrograms(univ_universityofleeds, "UNIVERSITY OF LEEDS", [
  {
    "level": "UG",
    "name": "Computer Science (BSc) \u2013 Core computing, AI, software engineering; 3 years; \u00a332,750/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB) \u2013 Common law foundation; 3 years; option for year abroad; \u00a326,750/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business and Management (BSc/BA) \u2013 General business foundation; 3 years; \u00a320,750\u2013\u00a323,000/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (various: Mechanical, Electrical, Chemical, Civil) \u2013 3\u20134 years (BEng/MEng); \u00a326,500\u2013\u00a332,750/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting and Finance (BSc) \u2013 Combined accounting and finance theory; 3 years; \u00a323,000\u2013\u00a326,750/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) \u2013 General business management; 12 months; \u00a339,250 (total, fixed)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance \u2013 Quantitative and applied finance; 12 months; \u00a334,250\u2013\u00a336,000",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science and Analytics \u2013 Machine learning, data analysis; 12 months; \u00a330,000\u2013\u00a333,000",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics \u2013 Predictive analytics, decision-making; 12 months; \u00a329,000\u2013\u00a334,250",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management \u2013 General management, leadership, strategy; 12 months; \u00a329,000\u2013\u00a334,250",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (BSc)",
    "faculty": "School of Computing, Faculty of Engineering and Physical Sciences",
    "duration_years": 3,
    "annual_fee_cad": 57640,
    "total_fee_cad": 172920,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (essential)",
      "Physics or Computer Science preferred",
      "strong quantitative background required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Software Developer",
      "Systems Analyst",
      "Data Engineer",
      "Web Developer",
      "Mobile App Developer",
      "Graduate Analyst",
      "IT Consultant",
      "Cybersecurity Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB)",
    "faculty": "School of Law, Faculty of Business and Law",
    "duration_years": 3,
    "annual_fee_cad": 47080,
    "total_fee_cad": 141240,
    "min_class12_percent": 90,
    "required_subjects": [
      "No specific subjects required",
      "strong essay writing",
      "analytical skills essential"
    ],
    "entry_roles": [
      "Solicitor",
      "Barrister",
      "In-house Counsel",
      "Legal Analyst",
      "Compliance Officer",
      "Government Lawyer",
      "Policy Advisor",
      "Company Secretary",
      "Judicial Officer",
      "Corporate Counsel"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business and Management (BSc/BA)",
    "faculty": "Leeds University Business School (LUBS), Faculty of Business and Law",
    "duration_years": 3,
    "annual_fee_cad": 36520,
    "total_fee_cad": 109560,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific subjects required",
      "mathematics or business studies helpful"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Graduate Trainee (various sectors)",
      "Operations Manager",
      "Project Manager",
      "Strategy Analyst",
      "Product Manager",
      "HR Coordinator",
      "Financial Analyst",
      "Marketing Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (MEng)",
    "faculty": "School of Mechanical Engineering, Faculty of Engineering and Physical Sciences",
    "duration_years": 3,
    "annual_fee_cad": 57640,
    "total_fee_cad": 172920,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both essential)",
      "Further Mathematics helpful"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Graduate Engineer",
      "Automotive Engineer",
      "Aerospace Engineer",
      "Energy Systems Engineer",
      "Thermal/HVAC Engineer",
      "Project Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting and Finance (BSc)",
    "faculty": "Leeds University Business School (LUBS), Department of Accounting and Finance",
    "duration_years": 3,
    "annual_fee_cad": 40480,
    "total_fee_cad": 121440,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics recommended (not compulsory but essential for success)",
      "strong numeracy skills required"
    ],
    "entry_roles": [
      "Accountant",
      "Auditor",
      "Financial Accountant",
      "Management Accountant",
      "Tax Advisor",
      "Management Consultant",
      "Investment Analyst",
      "Finance Manager",
      "Credit Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Leeds University Business School (LUBS)",
    "duration_years": 1,
    "annual_fee_cad": 355,
    "total_fee_cad": 355,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "diverse backgrounds encouraged (advantage for cohort diversity)"
    ],
    "entry_roles": [
      "General Manager",
      "Senior Consultant",
      "Director-level roles",
      "Entrepreneur",
      "Strategy Manager",
      "Operations Director",
      "Product Manager (senior)",
      "Executive positions",
      "Business Development Director",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance (MSc)",
    "faculty": "Leeds University Business School (LUBS), Department of Accounting and Finance",
    "duration_years": 1,
    "annual_fee_cad": 60280,
    "total_fee_cad": 60280,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "Physics",
      "or related quantitative field",
      "strong foundation in calculus",
      "linear algebra",
      "probability",
      "statistics required"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Quantitative Analyst (Quant)",
      "Fixed Income Analyst",
      "Foreign Exchange (FX) Specialist",
      "Derivatives Analyst",
      "Risk Manager",
      "International Financial Analyst",
      "Treasury Analyst",
      "Equity Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science and Analytics (MSc)",
    "faculty": "School of Computing, Faculty of Engineering and Physical Sciences",
    "duration_years": 1,
    "annual_fee_cad": 52800,
    "total_fee_cad": 52800,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "Engineering",
      "Physics",
      "Economics",
      "or related quantitative discipline",
      "strong foundation in programming (Python/R)",
      "mathematics",
      "statistics required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Business Intelligence Analyst",
      "AI Specialist",
      "Research Scientist (Data)",
      "Quantitative Analyst (Data-focused)",
      "Data Strategist",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Analytics (MSc)",
    "faculty": "Leeds University Business School (LUBS)",
    "duration_years": 1,
    "annual_fee_cad": 51040,
    "total_fee_cad": 51040,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Economics",
      "Mathematics",
      "Statistics",
      "Engineering",
      "or related quantitative discipline",
      "quantitative skills",
      "programming experience (Python/R) beneficial"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Consultant (management consulting or analytics-focused)",
      "Product Manager",
      "Strategy Analyst",
      "Financial Analyst",
      "Risk Manager",
      "Business Intelligence Analyst",
      "Analytics Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management (MSc)",
    "faculty": "Leeds University Business School (LUBS)",
    "duration_years": 1,
    "annual_fee_cad": 51040,
    "total_fee_cad": 51040,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "business",
      "economics",
      "engineering",
      "sciences provide advantageous foundation"
    ],
    "entry_roles": [
      "Management Consultant",
      "Associate Consultant",
      "Business Analyst",
      "Strategy Manager",
      "Operations Manager",
      "Programme Manager",
      "Product Manager",
      "Project Manager",
      "MBA pathway candidate",
      "Director-level roles"
    ],
    "features": []
  }
]);

// --- IMPERIAL COLLEGE LONDON ---
const univ_imperialcollegelondon = db.institutions.insertOne(inst({
  "name": "IMPERIAL COLLEGE LONDON",
  "abbreviation": "",
  "type": "university",
  "city": "London",
  "province": "England",
  "country": "UK",
  "campuses": [
    "London"
  ],
  "website": "https://www.imperial.ac.uk",
  "application_portal": "Imperial College Online Application Portal (https://applications.imperial.ac.uk)",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Main Scholarship Names:"
    },
    {
      "name": "GREAT Scholarship (India): \u00a315,000 for 1-year postgraduate study (Science, Technology, Engineering, Medicine, Business)"
    },
    {
      "name": "Chevening Scholarship: Tuition, monthly stipend, travel expenses"
    },
    {
      "name": "Department-specific scholarships and merit-based awards"
    },
    {
      "name": "Availability: Limited (5\u201310 scholarship recipients per year typical); high competition"
    }
  ],
  "internships": {
    "part_time_work": "Course-Related Placements: May not count toward hour limits if assessed as part of curriculum",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports facilities and athletic clubs",
    "housing": "Student accommodation (residence halls)"
  },
  "security": {
    "detail": "Primary Security Services Team: Ground Floor, Sherfield Building; Monday\u2013Friday, 7 a.m.\u20134 p.m."
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

addPrograms(univ_imperialcollegelondon, "IMPERIAL COLLEGE LONDON", [
  {
    "level": "UG",
    "name": "Computing (BEng/MEng) \u2013 Engineering of hardware and software; artificial intelligence, software engineering, visual computing specializations",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical and Electronic Engineering (MEng) \u2013 Advanced technical knowledge, power electronics, communications, control systems",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (MEng) \u2013 Design, development, manufacturing; 4-year integrated Master\u2019s with industrial placement option",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Aeronautical Engineering (MEng) \u2013 Aerospace engineering; aerodynamics, structures, flight mechanics; Cranfield flight-testing opportunity",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mathematics / Physics (BSc/MMath) \u2013 Foundational STEM; theoretical and applied mathematics; physics specializations",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence \u2013 Advanced AI programming, machine learning fundamentals; 1 year",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computing (Software Engineering, Advanced Computing, AI and Machine Learning specializations) \u2013 Core computing skills, software design, distributed systems; 1 year",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics & AI \u2013 Data-driven decision-making, predictive and prescriptive analytics, Python and R programming; 1 year",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Advanced Chemical Engineering with Biotechnology \u2013 Biotechnology, process design, fermentation, tissue engineering; 1 year; accredited by Institution of Chemical Engineers",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Bioinformatics and Theoretical Systems Biology (also MRes Biomedical Research \u2013 Data Science) \u2013 Computational biology, biomedical data science, machine learning for biomedicine; 1 year",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computing (BEng)",
    "faculty": "Department of Computing, Faculty of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 72054,
    "total_fee_cad": 216162,
    "min_class12_percent": 92,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Physics or Computer Science preferred"
    ],
    "entry_roles": [
      "Software Engineer",
      "Technical Analyst",
      "Systems Developer",
      "Data Engineer",
      "Software Developer",
      "Backend Engineer",
      "Full-Stack Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical and Electronic Engineering (MEng)",
    "faculty": "Department of Electrical and Electronic Engineering, Faculty of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 72054,
    "total_fee_cad": 216162,
    "min_class12_percent": 92,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Physics (essential)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Electronics Design Engineer",
      "Control Systems Engineer",
      "Telecommunications Engineer",
      "Design Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (MEng)",
    "faculty": "Department of Mechanical Engineering, Faculty of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 72054,
    "total_fee_cad": 216162,
    "min_class12_percent": 92,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Physics (essential)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Thermal/Propulsion Engineer",
      "Automotive Engineer",
      "Energy Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Aeronautical Engineering (MEng)",
    "faculty": "Department of Aeronautics, Faculty of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 72054,
    "total_fee_cad": 216162,
    "min_class12_percent": 92,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Physics (essential)"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Flight Test Engineer",
      "Aircraft Design Engineer",
      "Structural Analysis Engineer",
      "Systems Engineer",
      "Propulsion Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics (BSc)",
    "faculty": "Department of Physics, Faculty of Natural Sciences",
    "duration_years": 3,
    "annual_fee_cad": 72054,
    "total_fee_cad": 216162,
    "min_class12_percent": 92,
    "required_subjects": [
      "Mathematics",
      "Physics (both compulsory)"
    ],
    "entry_roles": [
      "Physicist",
      "Data Scientist",
      "Research Scientist",
      "Quantitative Analyst",
      "Software Engineer (tech)",
      "Science Communicator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Artificial Intelligence (MSc)",
    "faculty": "Department of Computing, Faculty of Engineering",
    "duration_years": 1,
    "annual_fee_cad": 80960,
    "total_fee_cad": 80960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Engineering",
      "or related discipline",
      "programming experience required"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Research Scientist",
      "NLP Specialist",
      "Computer Vision Engineer",
      "AI Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computing (Software Engineering) (MSc)",
    "faculty": "Department of Computing, Faculty of Engineering",
    "duration_years": 1,
    "annual_fee_cad": 80960,
    "total_fee_cad": 80960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Engineering",
      "Physics",
      "or strong quantitative discipline",
      "core computing foundation expected or pre-sessional support available"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Engineer",
      "Solutions Architect",
      "DevOps Engineer",
      "Backend Engineer",
      "Full-Stack Developer",
      "Cloud Engineer",
      "Software Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Analytics & AI (MSc)",
    "faculty": "Imperial Business School",
    "duration_years": 1,
    "annual_fee_cad": 82720,
    "total_fee_cad": 82720,
    "min_class12_percent": 60,
    "required_subjects": [
      "Quantitative skills in mathematics",
      "statistics",
      "or technical field",
      "programming experience (Python/R) preferred but not required (pre-study modules provided)"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Scientist",
      "Management Consultant",
      "Financial Analyst",
      "Analytics Manager",
      "Business Intelligence Analyst",
      "Strategy Consultant",
      "Marketing Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Advanced Chemical Engineering with Biotechnology (MSc)",
    "faculty": "Department of Chemical Engineering, Faculty of Engineering",
    "duration_years": 1,
    "annual_fee_cad": 71984,
    "total_fee_cad": 71984,
    "min_class12_percent": 60,
    "required_subjects": [
      "Chemical Engineering",
      "Biotechnology",
      "Life Sciences",
      "or equivalent",
      "biochemistry",
      "microbiology knowledge beneficial"
    ],
    "entry_roles": [
      "Biotech Engineer",
      "Process Engineer",
      "Pharmaceutical Engineer",
      "Fermentation Specialist",
      "Tissue Engineering Technician",
      "Quality Assurance Engineer",
      "R&D Engineer",
      "Environmental Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bioinformatics and Theoretical Systems Biology (MSc)",
    "faculty": "Department of Life Sciences, Faculty of Natural Sciences",
    "duration_years": 1,
    "annual_fee_cad": 82544,
    "total_fee_cad": 82544,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in molecular biology",
      "biochemistry",
      "mathematics",
      "or computer science",
      "programming experience (Python/R) preferred"
    ],
    "entry_roles": [
      "Bioinformatician",
      "Systems Biologist",
      "Computational Biologist",
      "Research Scientist (Genomics)",
      "Data Scientist (Life Sciences)",
      "Biotech Analyst",
      "PhD Researcher",
      "Clinical Bioinformatician"
    ],
    "features": []
  }
]);

// --- KING'S COLLEGE LONDON ---
const univ_kingscollegelondon = db.institutions.insertOne(inst({
  "name": "KING'S COLLEGE LONDON",
  "abbreviation": "",
  "type": "university",
  "city": "London",
  "province": "England",
  "country": "UK",
  "campuses": [
    "London"
  ],
  "website": "https://www.kcl.ac.uk",
  "application_portal": "UG: UCAS or apply.kcl.ac.uk | PG: King's Apply (https://www.kcl.ac.uk/study/postgraduate-taught/how-to-apply)",
  "contacts": {
    "admissions": {
      "email": "admissions@admin.cam.ac.uk\u00a0/\u00a0internationalstudents@admin.cam.ac.uk"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 49,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Yes; King's Careers & Employability; King's Talent Bank; King's Edge (skills programme)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs, activities, facilities: 400+ student societies/activity groups (sports, cultural, academic, social)"
  },
  "security": {
    "detail": "Partnerships & coordination: Partnership with UK emergency services (999); coordination with Metropolitan Police; \"Ask for Angela\" scheme in bars/cafes; Drinks Cap and spikie programs; substance testing kits"
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

addPrograms(univ_kingscollegelondon, "KING'S COLLEGE LONDON", [
  {
    "level": "UG",
    "name": "Law (LLB)",
    "faculty": "Dickson Poon School of Law",
    "duration_years": 3,
    "annual_fee_cad": 49280,
    "total_fee_cad": 147840,
    "min_class12_percent": 90,
    "required_subjects": [
      "English (strongly recommended)",
      "no specific subjects compulsory but humanities subjects preferred"
    ],
    "entry_roles": [
      "Solicitor",
      "Barrister",
      "Legal consultant",
      "Policy analyst",
      "Government legal roles",
      "In-house counsel",
      "Compliance officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine (MBBS)",
    "faculty": "Faculty of Life Sciences and Medicine / School of Medical Education",
    "duration_years": 3,
    "annual_fee_cad": 79200,
    "total_fee_cad": 237600,
    "min_class12_percent": 90,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Biology (A*-A grades; Class XII)"
    ],
    "entry_roles": [
      "Junior Doctor",
      "Medical Registrar",
      "Hospital Consultant (after further training)",
      "Public Health Doctor",
      "Medical Researcher",
      "NHS roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting and Finance (BSc)",
    "faculty": "Department of Management / Faculty of Business, Law and Social Sciences",
    "duration_years": 3,
    "annual_fee_cad": 52800,
    "total_fee_cad": 158400,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (A-level or equivalent)",
      "strong quantitative background required"
    ],
    "entry_roles": [
      "Accountant (ICAEW/ACA trainee)",
      "Financial Analyst",
      "Auditor",
      "Management Consultant",
      "Investment Banker",
      "Treasury Analyst",
      "Corporate Finance Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (BSc)",
    "faculty": "Department of Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 58815,
    "total_fee_cad": 176445,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (A-level or equivalent)",
      "Computing/IT preferred but not compulsory"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Scientist",
      "Web Developer",
      "Cloud Solutions Architect",
      "Cybersecurity Analyst",
      "AI/ML Engineer",
      "Tech Startup Founder"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychology (BSc)",
    "faculty": "Department of Psychology / Institute of Psychiatry, Psychology and Neuroscience",
    "duration_years": 3,
    "annual_fee_cad": 44000,
    "total_fee_cad": 132000,
    "min_class12_percent": 85,
    "required_subjects": [
      "No strict subject requirements",
      "science background (Biology) helpful"
    ],
    "entry_roles": [
      "Clinical Psychologist (with further training)",
      "Occupational Psychologist",
      "Educational Psychologist",
      "Counsellor",
      "HR Consultant",
      "Research Assistant",
      "Public Health Psychologist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Laws (LLM)",
    "faculty": "Dickson Poon School of Law",
    "duration_years": 1,
    "annual_fee_cad": 67408,
    "total_fee_cad": 67408,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Law or related discipline",
      "law graduates preferred"
    ],
    "entry_roles": [
      "Solicitor (LPC pathway)",
      "Barrister (BPC pathway)",
      "In-house Counsel",
      "Legal Consultant",
      "Policy Advisor",
      "Government Lawyer",
      "Compliance Officer",
      "International Legal Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Banking and Finance",
    "faculty": "Department of Management / Business School",
    "duration_years": 1,
    "annual_fee_cad": 79376,
    "total_fee_cad": 79376,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Finance",
      "Economics",
      "Accounting",
      "Mathematics",
      "or related quantitative field"
    ],
    "entry_roles": [
      "Investment Banker",
      "Hedge Fund Analyst",
      "Risk Manager",
      "Corporate Treasurer",
      "Private Equity Analyst",
      "Portfolio Manager",
      "Credit Analyst",
      "Financial Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science",
    "faculty": "Department of Computer Science / Faculty of Natural and Mathematical Sciences",
    "duration_years": 1,
    "annual_fee_cad": 71192,
    "total_fee_cad": 71192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Computer Science",
      "Mathematics",
      "Physics",
      "Statistics",
      "Engineering",
      "or related quantitative discipline"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Analyst",
      "Data Engineer",
      "Analytics Consultant",
      "AI Engineer",
      "Research Scientist",
      "Fintech Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "Department of Computer Science",
    "duration_years": 1,
    "annual_fee_cad": 71192,
    "total_fee_cad": 71192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Computer Science",
      "Mathematics",
      "Physics",
      "or Engineering",
      "strong programming",
      "mathematical foundations required"
    ],
    "entry_roles": [
      "AI Research Scientist",
      "Machine Learning Engineer",
      "Deep Learning Specialist",
      "Autonomous Systems Engineer",
      "AI Product Manager",
      "Robotics Engineer",
      "NLP Specialist",
      "Tech Startup CTO"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Neuroscience",
    "faculty": "Institute of Psychiatry, Psychology and Neuroscience / Faculty of Life Sciences and Medicine",
    "duration_years": 1,
    "annual_fee_cad": 75328,
    "total_fee_cad": 75328,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Psychology",
      "Biology",
      "Neuroscience",
      "Medicine",
      "Biochemistry",
      "or related bioscience field",
      "research background beneficial"
    ],
    "entry_roles": [
      "Research Scientist (academia/biotech)",
      "Neuroscience Researcher (pharmaceutical)",
      "Clinical Neuroscientist",
      "Neuropsychologist",
      "Neurotech Product Manager",
      "Pharmaceutical Scientist",
      "PhD Pathway (Research focus)"
    ],
    "features": []
  }
]);

// --- Univ. of Warwick ---
const univ_univofwarwick = db.institutions.insertOne(inst({
  "name": "Univ. of Warwick",
  "abbreviation": "",
  "type": "university",
  "city": "Coventry",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Coventry"
  ],
  "website": "https://warwick.ac.uk",
  "application_portal": "Direct online application system linked from each postgraduate course page\u200b",
  "contacts": {
    "admissions": {
      "phone": "22222 from internal phones; +44 (0)24 7652 2222 from external/mobile\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Central careers service (Student Opportunity \u2013 Careers) and specialist teams (e.g., WBS CareersPlus); one-to-one guidance, employer events, internship and placement fairs, skills workshops\u200b\u200b",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs and societies: Wide range of academic, cultural, sports, arts, and interest-based societies coordinated by Warwick Students' Union\u200b",
    "housing": "Activities and facilities: Teaching buildings, libraries, sports and fitness facilities, accommodation, health and wellbeing support, social venues"
  },
  "security": {
    "detail": "Safety technology: SafeZone app enables direct contact with security, late-night check-in, location sharing, real-time safety alerts"
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

addPrograms(univ_univofwarwick, "Univ. of Warwick", [
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "Department of Computer Science\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics",
      "relevant computing/science subjects\u200b"
    ],
    "entry_roles": [
      "Software developer",
      "data analyst",
      "IT consultant",
      "systems engineer",
      "software engineer\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "School of Engineering\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics",
      "Physics\u200b"
    ],
    "entry_roles": [
      "Graduate mechanical engineer",
      "design engineer",
      "automotive engineer",
      "aerospace engineer",
      "manufacturing/production engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Economics",
    "faculty": "Department of Economics\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level or equivalent Mathematics required",
      "strong quantitative background expected\u200b"
    ],
    "entry_roles": [
      "Economic analyst",
      "financial analyst",
      "consulting analyst",
      "policy researcher",
      "quantitative analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Accounting and Finance",
    "faculty": "Warwick Business School (WBS)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong quantitative background",
      "A-level or equivalent Mathematics or high-level numerate subjects\u200b"
    ],
    "entry_roles": [
      "Trainee accountant",
      "financial analyst",
      "investment banking analyst",
      "corporate finance roles\u200b\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Automotive Engineering",
    "faculty": "School of Engineering\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics (or equivalent) at A-level/CBSE/ISC/recognised international qualifications"
    ],
    "entry_roles": [
      "Automotive engineer",
      "vehicle dynamics engineer",
      "design engineer",
      "manufacturing/production engineer",
      "related automotive sector roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science",
    "faculty": "Department of Computer Science\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong background in Computer Science or closely related discipline with appropriate mathematics",
      "programming content\u200b"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "AI/ML engineer",
      "cyber security specialist",
      "IT consultant\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics",
    "faculty": "Warwick Business School (WBS)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in quantitative subject (engineering, mathematics, economics) or business/management with substantial quantitative modules"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "analytics consultant",
      "operations analyst",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance",
    "faculty": "Warwick Business School (WBS)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in finance",
      "economics",
      "mathematics",
      "engineering",
      "or other quantitative field with strong quantitative/analytical content"
    ],
    "entry_roles": [
      "Investment banking analyst",
      "asset management analyst",
      "corporate finance analyst",
      "risk analyst",
      "related finance roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Warwick Business School (WBS)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline considered",
      "strong academic performance",
      "quantitative capability expected"
    ],
    "entry_roles": [
      "Management consultant",
      "senior business analyst",
      "product manager",
      "leadership development programme participant",
      "management roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management",
    "faculty": "Warwick Business School (WBS)",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline considered",
      "applicants must demonstrate strong academic ability",
      "interest in management\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "marketing roles",
      "operations roles",
      "graduate leadership schemes"
    ],
    "features": []
  }
]);

// --- Univ. of St Andrews ---
const univ_univofstandrews = db.institutions.insertOne(inst({
  "name": "Univ. of St Andrews",
  "abbreviation": "",
  "type": "university",
  "city": "St Andrews",
  "province": "Scotland",
  "country": "UK",
  "campuses": [
    "St Andrews"
  ],
  "website": "https://www.st-andrews.ac.uk",
  "application_portal": "Direct online application via e-Vision portal (programme-specific)\u200b",
  "contacts": {
    "admissions": {
      "phone": "Report and Support tool (anonymous incident reporting), hallway monitored access, wardennial teams in halls of residence, mobile phone registration scheme (National Mobile Property Register)",
      "email": "india@st-andrews.ac.uk"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career/placement support: Central Careers Centre provides one-to-one guidance, employer events, skills workshops, career fairs, internship coordination, Laidlaw Leadership and Research Programme (prestigious internships for penultimate-year students), SaintConnect alumni network",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs and societies: Over 140\u2013190+ student societies covering cultural, academic, sports, media, arts, charitable, fan/geek, and political interests run by Students' Association",
    "housing": "Activities and facilities: Teaching facilities, libraries, sports and recreation centres, student accommodation throughout town, health and wellbeing support, social venues, integrated into historic town\u200b"
  },
  "security": {
    "detail": "Security team: Security and Response Team available for incidents after reporting to Student Services\u200b"
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

addPrograms(univ_univofstandrews, "Univ. of St Andrews", [
  {
    "level": "UG",
    "name": "BSc Computer Science (Honours)",
    "faculty": "School of Computer Science\u200b",
    "duration_years": 4.0,
    "annual_fee_cad": 45760,
    "total_fee_cad": 183040,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level Mathematics (or equivalent) required",
      "additional subject from Biology",
      "Chemistry",
      "Computing Science",
      "Further Mathematics",
      "Geology",
      "Geography",
      "Physics",
      "Psychology\u200b"
    ],
    "entry_roles": [
      "Software developer",
      "software engineer",
      "data scientist",
      "systems programmer",
      "IT consultant",
      "artificial intelligence engineer\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Psychology (Honours)",
    "faculty": "School of Psychology and Neuroscience\u200b",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Psychology optional at A-level",
      "strong quantitative background recommended",
      "no mandatory subject prerequisite but strong performance across sciences/quantitative subjects\u200b"
    ],
    "entry_roles": [
      "Trainee psychologist",
      "research assistant",
      "human resources specialist",
      "behaviour analyst",
      "educational psychologist\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Physics (Honours)",
    "faculty": "School of Physics and Astronomy\u200b",
    "duration_years": 4.0,
    "annual_fee_cad": 45760,
    "total_fee_cad": 183040,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level Mathematics",
      "Physics (or equivalents) required\u200b"
    ],
    "entry_roles": [
      "Graduate physicist",
      "research scientist",
      "systems engineer",
      "aerospace engineer",
      "renewable energy specialist\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Mathematics (Honours)",
    "faculty": "School of Mathematics and Statistics\u200b",
    "duration_years": 4.0,
    "annual_fee_cad": 45760,
    "total_fee_cad": 183040,
    "min_class12_percent": 75,
    "required_subjects": [
      "A-level Mathematics (or equivalent) required",
      "strong quantitative background",
      "can combine with another subject (Physics, Economics, Philosophy common)\u200b"
    ],
    "entry_roles": [
      "Data scientist",
      "quantitative analyst",
      "actuarial trainee",
      "mathematician",
      "consulting analyst",
      "operations researcher\u200b"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA International Relations (International Honours)",
    "faculty": "School of International Relations\u200b",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "No specific mandatory subject requirement",
      "strong performance in languages",
      "humanities",
      "social sciences beneficial\u200b"
    ],
    "entry_roles": [
      "Diplomat",
      "policy analyst",
      "international relations consultant",
      "NGO programme officer",
      "government relations specialist\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Computer Science",
    "faculty": "School of Computer Science\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 35851,
    "total_fee_cad": 35851,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor's in Computer Science",
      "IT",
      "Software Engineering",
      "Mathematics",
      "Physics",
      "or closely related discipline\u200b"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "AI/ML engineer",
      "cyber security specialist",
      "IT consultant",
      "systems engineer\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Business (MLitt)",
    "faculty": "School of Management\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 43296,
    "total_fee_cad": 43296,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in Business",
      "Management",
      "Economics",
      "International Relations",
      "or related field\u200b"
    ],
    "entry_roles": [
      "International business analyst",
      "management consultant",
      "business development manager",
      "international relations specialist\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Psychology (Conversion)",
    "faculty": "School of Psychology and Neuroscience\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 35851,
    "total_fee_cad": 35851,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any bachelor's degree",
      "conversion programme designed for non-psychology graduates",
      "quantitative background beneficial\u200b"
    ],
    "entry_roles": [
      "Trainee psychologist",
      "research assistant",
      "mental health practitioner",
      "behaviour analyst",
      "occupational psychologist\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Banking and Finance",
    "faculty": "School of Management / Economics\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 35851,
    "total_fee_cad": 35851,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "or other quantitative discipline\u200b"
    ],
    "entry_roles": [
      "Investment banker",
      "financial analyst",
      "risk manager",
      "asset manager",
      "credit analyst",
      "trading associate\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Management Science (MSc)",
    "faculty": "School of Management / Operations\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 35851,
    "total_fee_cad": 35851,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in Management",
      "Business",
      "Engineering",
      "Mathematics",
      "or related discipline",
      "quantitative background beneficial\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "operations analyst",
      "supply chain manager",
      "strategic planning analyst",
      "business analyst\u200b"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF BIRMINGHAM ---
const univ_universityofbirmingham = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF BIRMINGHAM",
  "abbreviation": "",
  "type": "university",
  "city": "Birmingham",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Birmingham"
  ],
  "website": "https://www.birmingham.ac.uk",
  "application_portal": "Apply online directly to University of Birmingham via postgraduate application system from each programme page\u200b",
  "contacts": {
    "admissions": {
      "phone": "International Office via country-specific contact forms at\u00a0https://www.birmingham.ac.uk/international/students/country/india; Country representatives: Navjyot Kohli, Niharika Gupta, Sifat Puri, Anita Nathan; Email: International team responsive through country pages\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: Careers Network provides careers guidance, networking events, employer fairs and work experience support; subject-specific careers consultants available; connections to leading global organisations",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs, activities, facilities (brief): Over 300 student societies and groups managed by Guild of Students covering academic, cultural, sports, performance and media activities; 350+ groups at University of Birmingham; Freshers' Fair with society showcases; Indian student communities including Bharat Parivar society; sports facilities, library, study spaces, cafes and break-out areas",
    "housing": "Partnerships & coordination: Security Services coordinates with West Midlands Police; partnerships with local community safety initiatives; coordination with accommodation and student support services"
  },
  "security": {
    "detail": "Partnerships & coordination: Security Services coordinates with West Midlands Police; partnerships with local community safety initiatives; coordination with accommodation and student support services"
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

addPrograms(univ_universityofbirmingham, "UNIVERSITY OF BIRMINGHAM", [
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "School of Computer Science (within Faculty of Engineering and Physical Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 52800,
    "total_fee_cad": 158400,
    "min_class12_percent": 90,
    "required_subjects": [
      "A-level Mathematics grade A required",
      "desirable to have some experience of writing computer programs",
      "General Studies or Critical Thinking not accepted",
      "access qualifications not suitable\u200b"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "data analyst",
      "IT consultant",
      "technology roles as cited in Computer Science graduate outcomes"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "School of Mechanical Engineering (within Faculty of Engineering and Physical Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 52800,
    "total_fee_cad": 158400,
    "min_class12_percent": 85,
    "required_subjects": [
      "A-level Mathematics required",
      "Further Mathematics",
      "Physics advantageous but not required",
      "Admissions Tutor may assess mathematical ability through Mathematics Aptitude test if alternative qualification to A-level\u200b"
    ],
    "entry_roles": [
      "Graduate mechanical engineer",
      "design engineer",
      "automotive/aerospace engineer",
      "manufacturing or energy sector roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Electrical and Electronic Engineering",
    "faculty": "School of Electrical, Electronic and Mechanical Engineering (within Faculty of Engineering and Physical Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 52800,
    "total_fee_cad": 158400,
    "min_class12_percent": 85,
    "required_subjects": [
      "A-level Mathematics required",
      "Further Mathematics",
      "Physics advantageous but not required",
      "Mathematics Aptitude test may be required if alternative maths qualification\u200b"
    ],
    "entry_roles": [
      "Electrical/electronic engineer",
      "systems engineer",
      "telecommunications engineer",
      "embedded systems engineer",
      "roles in energy",
      "transport",
      "tech sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Law",
    "faculty": "School of Law (within Faculty of Arts, Law and Social Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 42240,
    "total_fee_cad": 126720,
    "min_class12_percent": 90,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "course page lists any preferred subjects\u200b"
    ],
    "entry_roles": [
      "Trainee solicitor",
      "barrister training routes",
      "legal adviser",
      "paralegal",
      "compliance or policy roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Accounting and Finance",
    "faculty": "Birmingham Business School (within Faculty of Social Sciences)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 46464,
    "total_fee_cad": 139392,
    "min_class12_percent": 80,
    "required_subjects": [
      "Strong overall academic performance",
      "usually no mandatory subject but strong quantitative ability valued",
      "detailed requirements on course page\u200b"
    ],
    "entry_roles": [
      "Accountant",
      "financial analyst",
      "business analyst",
      "roles in banking",
      "finance",
      "multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence and Machine Learning",
    "faculty": "School of Computer Science (within Faculty of Engineering and Physical Sciences)\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 63360,
    "total_fee_cad": 63360,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong grounding in programming",
      "algorithms",
      "mathematics",
      "relevant disciplines include computing",
      "engineering",
      "data science",
      "physics",
      "statistics\u200b"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "data scientist",
      "research engineer",
      "related advanced computing roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science",
    "faculty": "School of Mathematics / interdisciplinary programme (Faculty of Engineering and Physical Sciences)",
    "duration_years": 1.0,
    "annual_fee_cad": 61142,
    "total_fee_cad": 61142,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in mathematics",
      "statistics",
      "computer science",
      "engineering or closely related quantitative field\u200b"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "machine learning engineer",
      "business intelligence analyst",
      "roles in finance",
      "tech",
      "consulting",
      "other sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Accounting and Finance",
    "faculty": "Birmingham Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 61476,
    "total_fee_cad": 61476,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in Accounting or Finance related subjects",
      "applicants with degree in other disciplines accepted provided they meet additional criteria or hold relevant professional qualifications\u200b"
    ],
    "entry_roles": [
      "Accountant",
      "financial analyst",
      "auditor",
      "investment analyst",
      "roles in banking",
      "finance",
      "professional services firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Master of Business Administration)",
    "faculty": "Birmingham Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 68745,
    "total_fee_cad": 68745,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline accepted",
      "strong quantitative skills valued\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "product manager",
      "leadership roles in finance",
      "technology",
      "multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management",
    "faculty": "Birmingham Business School\u200b",
    "duration_years": 1.0,
    "annual_fee_cad": 59241,
    "total_fee_cad": 59241,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline may be accepted",
      "business",
      "management",
      "economics or related backgrounds preferred",
      "other disciplines considered where applicants demonstrate strong analytical ability\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "operations manager",
      "roles in multinational firms",
      "leadership positions\u200b"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF BRISTOL ---
const univ_universityofbristol = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF BRISTOL",
  "abbreviation": "",
  "type": "university",
  "city": "Bristol",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Bristol"
  ],
  "website": "https://www.bristol.ac.uk",
  "application_portal": "Apply online directly to University of Bristol via postgraduate application system from each programme page\u200b",
  "contacts": {
    "admissions": {
      "phone": "International Office \u2013\u00a0international-office@bristol.ac.uk(email via country-specific pages); India Office contact via UKIBC India Pvt. Ltd. partner; no single central phone published \u2013\u00a0https://www.bristol.ac.uk/international/countries/india.html\u200b",
      "email": "International Office \u2013\u00a0international-office@bristol.ac.uk(email via country-specific pages); India Office contact via UKIBC India Pvt. Ltd. partner; no single central phone published \u2013\u00a0https://www.bristol.ac.uk/international/countries/india.html\u200b"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: Careers Service provides careers guidance, skills programmes, employer events and work experience support \u2013\u00a0https://www.bristol.ac.uk/careers/\u200b",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs, activities, facilities (brief): Over 400 student societies including Indian Society, Asian Society, Tamil Society, Hindu Society, Bollywood Dance Society; sports, arts and cultural groups; libraries, study spaces, specialist labs and sports facilities"
  },
  "security": {
    "detail": "Partnerships & coordination: Member of AUCSO (Association of University Chief Security Officers); coordinates with Card Services and Car Parking\u200b"
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

addPrograms(univ_universityofbristol, "UNIVERSITY OF BRISTOL", [
  {
    "level": "UG",
    "name": "BSc Computer Science",
    "faculty": "School of Computer Science, Electrical and Electronic Engineering, and Engineering Mathematics (Faculty of Engineering)",
    "duration_years": 3.0,
    "annual_fee_cad": 58784,
    "total_fee_cad": 176352,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics at high level normally essential",
      "some boards/subject combinations specified on course page"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "data analyst",
      "IT consultant",
      "related roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering",
    "faculty": "School of Mechanical, Aerospace and Civil Engineering (Faculty of Engineering)",
    "duration_years": 3.0,
    "annual_fee_cad": 55088,
    "total_fee_cad": 165264,
    "min_class12_percent": 90,
    "required_subjects": [
      "High performance in relevant subjects such as Mathematics",
      "Physics (or equivalent) as specified under subject requirements on course page\u200b"
    ],
    "entry_roles": [
      "Graduate mechanical engineer",
      "design engineer",
      "automotive/aerospace engineer",
      "manufacturing or energy sector roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Aerospace Engineering",
    "faculty": "School of Mechanical, Aerospace and Civil Engineering (Faculty of Engineering)",
    "duration_years": 3.0,
    "annual_fee_cad": 58784,
    "total_fee_cad": 176352,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong grades in Mathematics",
      "Physics or equivalent",
      "as detailed under typical offer",
      "required subjects on course page\u200b"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "systems engineer",
      "propulsion engineer",
      "roles in aviation",
      "space",
      "defence sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "LLB Law",
    "faculty": "School of Law (Faculty of Social Sciences and Law)\u200b",
    "duration_years": 3.0,
    "annual_fee_cad": 44880,
    "total_fee_cad": 134640,
    "min_class12_percent": 90,
    "required_subjects": [
      "Usually no specific subject beyond strong overall academic performance",
      "any required subjects listed explicitly on course page\u200b"
    ],
    "entry_roles": [
      "Trainee solicitor",
      "barrister training routes",
      "legal adviser",
      "paralegal",
      "compliance or policy roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MBChB Medicine",
    "faculty": "Bristol Medical School (Faculty of Health Sciences)",
    "duration_years": 5.0,
    "annual_fee_cad": 80608,
    "total_fee_cad": 403040,
    "min_class12_percent": 75,
    "required_subjects": [
      "High grades in Chemistry",
      "one other lab science (Biology/Physics/Mathematics) or equivalent",
      "as set out precisely on MBChB entry requirements page\u200b"
    ],
    "entry_roles": [
      "Graduates progress to Foundation Programme doctor posts",
      "further specialty training in medicine within relevant national health systems (e.g. NHS)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science",
    "faculty": "School of Mathematics / School of Engineering Mathematics and Technology (Faculty of Science and Engineering)",
    "duration_years": 1.0,
    "annual_fee_cad": 64240,
    "total_fee_cad": 64240,
    "min_class12_percent": 60,
    "required_subjects": [
      "Degree in mathematics",
      "statistics",
      "computer science",
      "engineering or closely related quantitative field as specified in entry requirements\u200b"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "machine learning engineer",
      "business intelligence analyst",
      "roles in finance",
      "tech",
      "consulting",
      "other sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Artificial Intelligence",
    "faculty": "School of Engineering Mathematics and Technology (Faculty of Engineering) in collaboration with School of Mathematics and Faculty of Arts, Law and Social Sciences",
    "duration_years": 1.0,
    "annual_fee_cad": 59840,
    "total_fee_cad": 59840,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong grounding in programming",
      "algorithms",
      "mathematics as detailed under entry requirements",
      "acceptable disciplines include computing",
      "engineering",
      "data science",
      "physics",
      "statistics",
      "closely related fields\u200b"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "data scientist",
      "research engineer",
      "related advanced computing roles"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management (International Business)",
    "faculty": "University of Bristol Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 59664,
    "total_fee_cad": 59664,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline may be accepted",
      "business",
      "management",
      "economics or related backgrounds preferred",
      "other disciplines considered where applicants show strong quantitative/analytical ability\u200b"
    ],
    "entry_roles": [
      "Management consultant",
      "international business analyst",
      "marketing or operations roles",
      "graduate schemes in multinational firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance and Investment",
    "faculty": "University of Bristol Business School",
    "duration_years": 1.0,
    "annual_fee_cad": 68640,
    "total_fee_cad": 68640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong background in mathematics",
      "statistics",
      "economics",
      "finance or related quantitative subject",
      "non-finance graduates with strong quantitative skills considered\u200b"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment analyst",
      "portfolio manager",
      "quantitative analyst",
      "roles in banking",
      "asset management",
      "financial services firms\u200b"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc International Development",
    "faculty": "School of Sociology, Politics and International Studies (Faculty of Arts, Law and Social Sciences)",
    "duration_years": 1.0,
    "annual_fee_cad": 52976,
    "total_fee_cad": 52976,
    "min_class12_percent": 60,
    "required_subjects": [
      "Social sciences",
      "development studies",
      "politics",
      "economics or related fields as outlined on programme page",
      "any discipline accepted if applicant demonstrates relevant knowledge\u200b"
    ],
    "entry_roles": [
      "Roles in international NGOs",
      "development agencies",
      "policy analysis",
      "government",
      "research organisations",
      "United Nations",
      "multilateral institutions\u200b"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF NOTTINGHAM ---
const univ_universityofnottingham = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF NOTTINGHAM",
  "abbreviation": "",
  "type": "university",
  "city": "Nottingham",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Nottingham"
  ],
  "website": "https://www.nottingham.ac.uk",
  "application_portal": "",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 88,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {},
  "campus_life": {
    "housing": "Accommodation Office: +44 (0)115 952 3697 | ugaccommodation@nottingham.ac.uk"
  },
  "security": {
    "detail": "Security Services: 24-hour uniformed presence on campuses; Security Office at rear of Hallward Library; Main Control Room in Trent Building"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_universityofnottingham, "UNIVERSITY OF NOTTINGHAM", [
  {
    "level": "UG",
    "name": "Scholarships & Financial Support",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 7040,
    "total_fee_cad": 21120,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Campus Life",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Campus Security",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Application Process (Brief)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Most Popular Courses Among Indian Students",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (BSc) \u2013 Core computing, AI, software engineering; 3 years; \u00a330,750/yr (2025-26)",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (various: Mechanical, Electrical, Chemical, Civil) \u2013 3\u20134 years (BEng/MEng); \u00a329,000\u2013\u00a336,400/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB) \u2013 Common law foundation; 3\u20134 years; option for year abroad; \u00a320,500\u2013\u00a328,600/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business and Management (BSc/BA) \u2013 General business foundation; 3 years; \u00a320,500\u2013\u00a326,750/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting and Finance (BSc) \u2013 Combined accounting and finance theory; 3 years; \u00a322,600\u2013\u00a326,750/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) \u2013 General business management; 12 months; \u00a332,400 (2025-26)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance \u2013 Quantitative and applied finance; 12 months; \u00a332,400\u2013\u00a338,400",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science \u2013 Machine learning, data analysis, analytics; 12 months; \u00a332,400\u2013\u00a336,400",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Business Analytics \u2013 Predictive analytics, decision-making; 12 months; \u00a330,750\u2013\u00a332,400",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Engineering (various specialisms) \u2013 Advanced engineering; 12 months; \u00a328,600\u2013\u00a336,400",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (BSc)",
    "faculty": "School of Computer Science, Faculty of Science and Engineering",
    "duration_years": 3,
    "annual_fee_cad": 54120,
    "total_fee_cad": 162360,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (essential)",
      "Physics or Computer Science preferred",
      "strong quantitative background required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Software Developer",
      "Systems Analyst",
      "Data Engineer",
      "Web Developer",
      "Mobile App Developer",
      "Graduate Analyst",
      "IT Consultant",
      "Cybersecurity Analyst",
      "Machine Learning Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (Mechanical) (MEng)",
    "faculty": "School of Engineering, Faculty of Science and Engineering",
    "duration_years": 3,
    "annual_fee_cad": 64064,
    "total_fee_cad": 192192,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both essential)",
      "Further Mathematics helpful"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Graduate Engineer",
      "Automotive Engineer",
      "Aerospace Engineer",
      "Energy Systems Engineer",
      "Thermal/HVAC Engineer",
      "Project Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Law (LLB)",
    "faculty": "School of Law, Faculty of Social Sciences",
    "duration_years": 3,
    "annual_fee_cad": 50336,
    "total_fee_cad": 151008,
    "min_class12_percent": 90,
    "required_subjects": [
      "No specific subjects required",
      "strong essay writing",
      "analytical skills essential"
    ],
    "entry_roles": [
      "Solicitor",
      "Barrister",
      "In-house Counsel",
      "Legal Analyst",
      "Compliance Officer",
      "Government Lawyer",
      "Policy Advisor",
      "Company Secretary",
      "Judicial Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business and Management (BSc)",
    "faculty": "Nottingham Business School, Faculty of Social Sciences",
    "duration_years": 3,
    "annual_fee_cad": 36080,
    "total_fee_cad": 108240,
    "min_class12_percent": 85,
    "required_subjects": [
      "No specific subjects required",
      "mathematics or business studies helpful"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Graduate Trainee (various sectors)",
      "Operations Manager",
      "Project Manager",
      "Strategy Analyst",
      "Product Manager",
      "HR Coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting and Finance (BSc)",
    "faculty": "Nottingham Business School, Faculty of Social Sciences",
    "duration_years": 3,
    "annual_fee_cad": 39776,
    "total_fee_cad": 119328,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics recommended (not compulsory but essential for success)",
      "strong numeracy skills required"
    ],
    "entry_roles": [
      "Accountant",
      "Auditor",
      "Financial Accountant",
      "Management Accountant",
      "Tax Advisor",
      "Management Consultant",
      "Investment Analyst",
      "Finance Manager",
      "Credit Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Nottingham Business School",
    "duration_years": 1,
    "annual_fee_cad": 355,
    "total_fee_cad": 355,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "diverse backgrounds encouraged"
    ],
    "entry_roles": [
      "General Manager",
      "Senior Consultant",
      "Director-level roles",
      "Entrepreneur",
      "Strategy Manager",
      "Operations Director",
      "Product Manager (senior)",
      "Executive positions",
      "Business Development Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance (MSc)",
    "faculty": "Nottingham Business School",
    "duration_years": 1,
    "annual_fee_cad": 57024,
    "total_fee_cad": 57024,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Economics",
      "Mathematics",
      "Engineering",
      "Physics",
      "or related quantitative field",
      "strong foundation in calculus",
      "probability",
      "statistics required"
    ],
    "entry_roles": [
      "Investment Analyst",
      "Quantitative Analyst (Quant)",
      "Fixed Income Analyst",
      "FX Specialist",
      "Derivatives Analyst",
      "Risk Manager",
      "International Financial Analyst",
      "Treasury Analyst",
      "Equity Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science (MSc)",
    "faculty": "School of Computer Science",
    "duration_years": 1,
    "annual_fee_cad": 57024,
    "total_fee_cad": 57024,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "Engineering",
      "Physics",
      "Economics",
      "or related quantitative discipline",
      "strong foundation in programming (Python/R)",
      "mathematics",
      "statistics required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Business Intelligence Analyst",
      "AI Specialist",
      "Research Scientist (Data)",
      "Quantitative Analyst",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business Analytics (MSc)",
    "faculty": "Nottingham Business School",
    "duration_years": 1,
    "annual_fee_cad": 54120,
    "total_fee_cad": 54120,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Economics",
      "Mathematics",
      "Statistics",
      "Engineering",
      "or related quantitative discipline",
      "quantitative skills",
      "programming experience (Python/R) beneficial"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Consultant (management consulting or analytics-focused)",
      "Product Manager",
      "Strategy Analyst",
      "Financial Analyst",
      "Risk Manager",
      "Business Intelligence Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Engineering (various specialisms) (MSc)",
    "faculty": "School of Engineering, Faculty of Science and Engineering",
    "duration_years": 1,
    "annual_fee_cad": 50336,
    "total_fee_cad": 50336,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering",
      "Physics",
      "Mathematics",
      "or related quantitative discipline",
      "strong foundation in core engineering principles required"
    ],
    "entry_roles": [
      "Senior Engineer",
      "Design Engineer",
      "Project Engineer",
      "Research Engineer",
      "Consulting Engineer",
      "Manufacturing Engineer",
      "Systems Engineer",
      "Engineering Manager",
      "Technical Specialist"
    ],
    "features": []
  }
]);

// --- THE UNIVERSITY OF MANCHESTER ---
const univ_theuniversityofmanchester = db.institutions.insertOne(inst({
  "name": "THE UNIVERSITY OF MANCHESTER",
  "abbreviation": "",
  "type": "university",
  "city": "Manchester",
  "province": "England",
  "country": "UK",
  "campuses": [
    "Manchester"
  ],
  "website": "https://www.manchester.ac.uk",
  "application_portal": "University of Manchester Online Application Portal | https://manchester.ac.uk/study/masters/apply/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 51,
  "intakes": [
    "Fall (September / October)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship Names:"
    },
    {
      "name": "Global Futures Scholarship (South Asia):"
    },
    {
      "name": "Undergraduate: 100+ awards, up to \u00a330,000 (\u00a310,000 per year x 3 years); requires 60% maintenance in each year"
    },
    {
      "name": "Postgraduate: 200+ awards, \u00a310,000 (discount on tuition fees)"
    },
    {
      "name": "Application deadline (UG): 26 March 2026"
    },
    {
      "name": "Application deadline (PG): 24 April 2026"
    },
    {
      "name": "Eligibility: Academic merit; domiciled in Bangladesh, India, Pakistan, Sri Lanka"
    },
    {
      "name": "Humanities International Excellence Scholarship: Postgraduate humanities students (60\u201370% bachelor\u2019s degree)"
    },
    {
      "name": "Total Scholarship Value Available: Over \u00a36 million annually"
    }
  ],
  "internships": {
    "part_time_work": "Postgraduate: Research projects, industry placements, case studies with real companies",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "60+ sports clubs (TeamUCL partnership)",
    "housing": "Student accommodation on and off-campus"
  },
  "security": {
    "detail": "Liaison with external security contractors, police, and emergency services"
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

addPrograms(univ_theuniversityofmanchester, "THE UNIVERSITY OF MANCHESTER", [
  {
    "level": "UG",
    "name": "BSc Computer Science \u2013 Core computing, AI, machine learning; 3 years; \u00a337,800/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Mechanical Engineering \u2013 Design, manufacture, robotics; 3 years; \u00a335,700/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Chemical Engineering \u2013 Process design, biotechnology; 3 years; \u00a336,000/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSc Accounting & Finance \u2013 Accounting, finance theory, professional pathways; 3 years; \u00a333,100/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BEng Electrical Engineering \u2013 Power systems, electronics, communications; 3 years; \u00a332,000/yr",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Data Science (Computer Science) \u2013 Data analysis, machine learning, Python/R; 1 year; \u00a333,500/yr",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Advanced Computer Science / Artificial Intelligence \u2013 AI, machine learning, cyber security specialisms; 1 year; \u00a339,400/yr",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Finance \u2013 Quantitative finance, derivatives, investment; 1 year; \u00a337,800/yr (+ \u00a32,500 deposit)",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Mechanical Engineering Design \u2013 Advanced design, CAD, innovation; 1 year; \u00a332,500/yr",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc Management \u2013 General management, leadership, business strategy; 1 year; \u00a331,500/yr",
    "faculty": "",
    "duration_years": 1,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (BSc)",
    "faculty": "Department of Computer Science, School of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 66528,
    "total_fee_cad": 199584,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (compulsory)",
      "Physics or Computer Science preferred"
    ],
    "entry_roles": [
      "Software Engineer",
      "Software Developer",
      "Systems Analyst",
      "Data Engineer",
      "Web Developer",
      "Mobile App Developer",
      "Graduate Analyst",
      "IT Consultant",
      "Solutions Architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (BEng)",
    "faculty": "Department of Mechanical, Aerospace and Civil Engineering, School of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 62832,
    "total_fee_cad": 188496,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both compulsory)",
      "further Mathematics preferred"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Graduate Engineer",
      "Aerospace Engineer",
      "Automotive Engineer",
      "Energy Systems Engineer",
      "Thermal/HVAC Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemical Engineering (BEng)",
    "faculty": "Department of Chemical Engineering, School of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 63360,
    "total_fee_cad": 190080,
    "min_class12_percent": 90,
    "required_subjects": [
      "Chemistry",
      "Mathematics (essential)",
      "Physics helpful"
    ],
    "entry_roles": [
      "Chemical Engineer",
      "Process Engineer",
      "Bioprocess Engineer",
      "Environmental Engineer",
      "Pharmaceutical Engineer",
      "Production Engineer",
      "Quality Assurance Engineer",
      "Project Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Accounting & Finance (BSc)",
    "faculty": "Department of Accounting, Manchester Business School",
    "duration_years": 3,
    "annual_fee_cad": 58256,
    "total_fee_cad": 174768,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics (recommended but not compulsory)",
      "any academic background considered"
    ],
    "entry_roles": [
      "Accountant",
      "Financial Analyst",
      "Audit Assistant",
      "Tax Advisor",
      "Finance Officer",
      "Management Accountant",
      "Investment Analyst",
      "Business Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering (BEng)",
    "faculty": "Department of Electrical and Electronic Engineering, School of Engineering Sciences",
    "duration_years": 3,
    "annual_fee_cad": 56320,
    "total_fee_cad": 168960,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics (both essential)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Electronics Engineer",
      "Power Systems Engineer",
      "Control Systems Engineer",
      "Telecommunications Engineer",
      "RF Engineer",
      "Embedded Systems Engineer",
      "Design Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science (MSc \u2013 Computer Science)",
    "faculty": "Department of Computer Science, School of Engineering Sciences",
    "duration_years": 1,
    "annual_fee_cad": 58960,
    "total_fee_cad": 58960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Statistics",
      "Engineering",
      "Physics",
      "or quantitative discipline",
      "strong foundation in programming",
      "mathematics required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Data Engineer",
      "Business Intelligence Analyst",
      "AI Specialist",
      "Risk Analyst",
      "Data Strategist",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Advanced Computer Science (MSc \u2013 Artificial Intelligence)",
    "faculty": "Department of Computer Science, School of Engineering Sciences",
    "duration_years": 1,
    "annual_fee_cad": 1760,
    "total_fee_cad": 1760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Mathematics",
      "Engineering",
      "Physics",
      "or related quantitative field",
      "advanced programming skills required"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Research Scientist",
      "Data Scientist",
      "NLP Specialist",
      "Computer Vision Engineer",
      "AI Consultant",
      "Research Scientist (Academia)",
      "Robotics Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Finance (MSc)",
    "faculty": "Manchester Business School, Department of Accounting & Finance",
    "duration_years": 1,
    "annual_fee_cad": 4400,
    "total_fee_cad": 4400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Accounting",
      "Mathematics",
      "Engineering",
      "Economics",
      "or quantitative sciences",
      "strong foundation in mathematics",
      "statistics",
      "financial theory required"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Quantitative Analyst (Quant)",
      "Portfolio Manager",
      "Risk Manager",
      "Private Equity Associate",
      "Hedge Fund Analyst",
      "Fixed Income Trader",
      "Treasury Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mechanical Engineering Design (MSc)",
    "faculty": "Department of Mechanical, Aerospace and Civil Engineering, School of Engineering Sciences",
    "duration_years": 1,
    "annual_fee_cad": 57200,
    "total_fee_cad": 57200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mechanical Engineering",
      "Aerospace Engineering",
      "Product Design",
      "Manufacturing",
      "or equivalent",
      "strong foundation in mechanics",
      "materials",
      "design theory required"
    ],
    "entry_roles": [
      "Design Engineer",
      "Product Engineer",
      "Manufacturing Engineer",
      "CAD Technician",
      "Process Engineer",
      "Mechanical Engineer",
      "Consulting Engineer",
      "Project Manager",
      "R&D Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management (MSc)",
    "faculty": "Manchester Business School, Department of Management",
    "duration_years": 1,
    "annual_fee_cad": 55440,
    "total_fee_cad": 55440,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any field",
      "business",
      "economics",
      "engineering",
      "sciences provide advantageous foundation"
    ],
    "entry_roles": [
      "Management Consultant",
      "Associate Consultant",
      "Business Analyst",
      "Strategy Manager",
      "Operations Manager",
      "Programme Manager",
      "Product Manager",
      "Project Manager",
      "MBA pathway candidate"
    ],
    "features": []
  }
]);

print("UK Seeding Completed!");