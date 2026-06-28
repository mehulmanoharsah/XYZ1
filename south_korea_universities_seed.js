// ============================================================
// SOUTH KOREA UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions south_korea_universities_seed.js
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

// Delete existing South Korea data to prevent duplicates
db.institutions.deleteMany({ country: "South Korea" });
db.programs.deleteMany({ institution_name: { $in: [
  "AJOU UNIVERSITY (South Korea)",
  "CHONNAM NATIONAL UNIVERSITY (South Korea)",
  "EWHA WOMANS UNIVERSITY (South Korea)",
  "GACHON UNIVERSITY (South Korea)",
  "HANSEO UNIVERSITY (South Korea)",
  "HANYANG UNIVERSITY (South Korea)",
  "JEONBUK NATIONAL UNIVERSITY (South Korea)",
  "KAIST (South Korea)",
  "KOREA UNIVERSITY",
  "KYUNG HEE UNIVERSITY (South Korea)",
  "KYUNGPOOK NATIONAL UNIVERSITY (South Korea)",
  "POSTECH (South Korea)",
  "PUSAN NATIONAL UNIVERSITY (South Korea)",
  "SEJONG UNIVERSITY (South Korea)",
  "SEOUL NATIONAL UNIVERSITY (South Korea)",
  "SOGANG UNIVERSITY (South Korea)",
  "SOLBRIDGE INTERNATIONAL BUSINESS SCHOOL (South Korea)",
  "SOOKMYUNG WOMEN’S UNIVERSITY (South Korea)",
  "SUNGKYUNKWAN UNIVERSITY (South Korea)",
  "YONSEI UNIVERSITY (South Korea)",
] } });

// --- AJOU UNIVERSITY (South Korea) ---
const univ_ajouuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "AJOU UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Suwon",
  "province": "Gyeonggi Province",
  "country": "South Korea",
  "campuses": [
    "Suwon"
  ],
  "website": "https://gsis.ajou.ac.kr (Graduate School of International Studies)",
  "application_portal": "https://mhaksa.ajou.ac.kr (Online application system)",
  "contacts": {
    "admissions": {
      "address": "Campus Plaza 208, 199 World cup-ro, Yeongtong-gu, Suwon 16499",
      "email": "gsis_admission@ajou.ac.kr (GSIS)",
      "phone": "+82-31-219-2921"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 60,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Top 7% of international students: 80% tuition discount"
    },
    {
      "name": "Top 30% of international students: 20% tuition discount"
    },
    {
      "name": "Merit-based scholarships: Based on academic performance in previous semester"
    },
    {
      "name": "Dormitory Scholarship: Fall semester 810,000 KRW ($610 USD); Spring 545,000 KRW ($410 USD); 70% reduction for international students"
    },
    {
      "name": "KOICA Scholarship: 100% tuition waiver + living allowance + dormitory"
    },
    {
      "name": "NIIED Scholarship: 100% tuition waiver + living allowance"
    },
    {
      "name": "Department Representative Scholarship: 200,000 KRW/month per semester"
    },
    {
      "name": "Gazette Scholarship: Managing Editor 500,000 KRW, Editor 300,000 KRW per semester"
    },
    {
      "name": "GKS (Global Korea Scholarship): Full funding program available; application Feb-March annually"
    },
    {
      "name": "Ajou-Suwon Scholarship for Master\u2019s: Available for students from Suwon sister cities"
    },
    {
      "name": "Performance-based scholarships: Awarded by GSIS Academic Affairs Committee each semester"
    }
  ],
  "internships": {
    "part_time_work": "Global internship opportunities",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports facilities: Gymnasium, swimming pool, tennis courts, sports clubs"
  },
  "security": {
    "detail": "Security Infrastructure: Standard campus security systems implemented"
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

addPrograms(univ_ajouuniversitysouthkorea, "AJOU UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
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
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical & Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Digital Media",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in International Business (GSIS)",
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
    "name": "Master\u2019s in International Trade (GSIS)",
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
    "name": "Master\u2019s in Computer Engineering",
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
    "name": "Master\u2019s in Business Administration (MBA equivalent)",
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
    "name": "Master\u2019s in Systems Engineering",
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
    "name": "Computer Engineering (Bachelor of Science)",
    "faculty": "College of Information Technology, Computer Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 15184,
    "total_fee_cad": 60736,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics required)"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "Embedded Systems Engineer",
      "Network Engineer",
      "IT Security Specialist",
      "AI/ML Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (Bachelor of Commerce/BBA)",
    "faculty": "School of Business (ABIZ), Department of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 15184,
    "total_fee_cad": 60736,
    "min_class12_percent": 65,
    "required_subjects": [
      "Commerce or Social Sciences stream",
      "any stream accepted with prerequisites"
    ],
    "entry_roles": [
      "Management Consultant",
      "Financial Analyst",
      "Marketing Manager",
      "HR Manager",
      "Business Development Executive",
      "Accounting Professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software Engineering (Bachelor of Science)",
    "faculty": "College of Information Technology, Software & Computer Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 15184,
    "total_fee_cad": 60736,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics)"
    ],
    "entry_roles": [
      "Software Developer",
      "Application Developer",
      "Systems Analyst",
      "Quality Assurance Engineer",
      "DevOps Engineer",
      "Cloud Solutions Architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical & Computer Engineering (Bachelor of Science)",
    "faculty": "College of Information Technology, Electrical & Computer Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 15184,
    "total_fee_cad": 60736,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics required)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Circuit Designer",
      "Power Systems Engineer",
      "Telecommunications Engineer",
      "Firmware Engineer",
      "Control Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Digital Media (Bachelor of Science)",
    "faculty": "College of Information Technology, Digital Media",
    "duration_years": 4.0,
    "annual_fee_cad": 15184,
    "total_fee_cad": 60736,
    "min_class12_percent": 65,
    "required_subjects": [
      "Any stream acceptable",
      "portfolio may be required for admission evaluation"
    ],
    "entry_roles": [
      "Multimedia Producer",
      "Content Creator",
      "Game Developer",
      "Digital Designer",
      "Animation Artist",
      "UX/UI Designer",
      "Media Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in International Business (GSIS)",
    "faculty": "Graduate School of International Studies (GSIS), Department of International Business",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Economics",
      "Commerce",
      "Finance",
      "or International Studies preferred",
      "other backgrounds considered with prerequisites"
    ],
    "entry_roles": [
      "International Business Manager",
      "Trade Specialist",
      "Business Development Manager",
      "International Consultant",
      "Corporate Strategist",
      "Export/Import Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in International Trade (GSIS)",
    "faculty": "Graduate School of International Studies (GSIS), Department of International Trade",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Economics",
      "International Relations",
      "or Trade preferred",
      "other backgrounds considered with prerequisites"
    ],
    "entry_roles": [
      "Trade Analyst",
      "International Trade Consultant",
      "Customs Specialist",
      "Trade Policy Advisor",
      "Export Manager",
      "Trade Negotiator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Engineering",
    "faculty": "College of Information Technology, Computer Engineering Graduate Program",
    "duration_years": 2.0,
    "annual_fee_cad": 9100,
    "total_fee_cad": 18200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Computer Engineering",
      "Software Engineering",
      "Electronics",
      "or related field required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Architect",
      "AI/ML Engineer",
      "Data Scientist",
      "Embedded Systems Engineer",
      "Robotics Engineer",
      "Research Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) - School of Business",
    "faculty": "School of Business (ABIZ), MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Commerce",
      "Finance",
      "Economics preferred",
      "other fields considered with prerequisites"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance Manager",
      "Strategy Manager",
      "HR Manager",
      "Marketing Director",
      "Corporate Executive",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Systems Engineering",
    "faculty": "College of Engineering, Systems Engineering Graduate Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Systems Engineering",
      "Civil Systems Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "or related discipline required"
    ],
    "entry_roles": [
      "Systems Engineer",
      "Project Manager",
      "Infrastructure Specialist",
      "Structural Engineer",
      "Process Engineer",
      "Design Engineer"
    ],
    "features": []
  }
]);

// --- CHONNAM NATIONAL UNIVERSITY (South Korea) ---
const univ_chonnamnationaluniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "CHONNAM NATIONAL UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Gwangju",
  "province": "South Jeolla",
  "country": "South Korea",
  "campuses": [
    "Gwangju"
  ],
  "website": "https://international.jnu.ac.kr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+82-62-530-1273 (Main Line); +82-62-530-5114 (Engineering)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: Outstanding academic record; merit-based"
    },
    {
      "name": "Coverage: 30\u2013100% tuition reduction for first semester"
    },
    {
      "name": "Renewable: Yes, based on GPA maintenance (minimum 2.0+ GPA)"
    },
    {
      "name": "Eligibility: TOPIK Level 6 certificate holders"
    },
    {
      "name": "Coverage: Full tuition waiver"
    },
    {
      "name": "Duration: First semester; renewable with TOPIK Level 6 maintenance"
    },
    {
      "name": "Eligibility: International undergraduate students from ODA recipient countries (India eligible); minimum 12 credits completed; GPA 1.75+ (70 points)"
    },
    {
      "name": "Coverage: Full or partial tuition reduction"
    },
    {
      "name": "Eligibility: International graduate students"
    },
    {
      "name": "Coverage: Tuition reduction for first semester"
    },
    {
      "name": "Eligibility: Selected graduate students"
    },
    {
      "name": "Coverage: Tuition reduction"
    },
    {
      "name": "Eligibility: Outstanding academic record"
    },
    {
      "name": "Coverage: Partial tuition waiver (first semester)"
    },
    {
      "name": "Renewable: Based on GPA maintenance"
    },
    {
      "name": "Eligibility: Highly qualified international students (including India)"
    },
    {
      "name": "Coverage: Full tuition + living expenses + language training + research funds + settlement assistance + health insurance + TOPIK exam fees"
    },
    {
      "name": "Eligibility: TOPIK Level 6 certificate holders"
    },
    {
      "name": "Coverage: Full tuition waiver"
    },
    {
      "name": "Eligibility: Outstanding international students (including India); age limit 40 years for Master\u2019s, 45 for PhD"
    },
    {
      "name": "Coverage: Full tuition + airfare + settlement allowance + monthly living stipend (KRW 250,000\u2013300,000) + research support + health insurance + 1-year Korean language training"
    },
    {
      "name": "Application: Through Korean embassy in India or CNU nomination"
    },
    {
      "name": "Eligibility: International students with demonstrated financial hardship; GPA 1.75+ (UG) or 2.0+ (PG)"
    },
    {
      "name": "Coverage: Partial or full tuition reduction"
    },
    {
      "name": "Eligibility: Graduate students"
    },
    {
      "name": "Coverage: Stipend + tuition reduction"
    },
    {
      "name": "Automatic merit-based consideration: During main admission process (no separate application)"
    },
    {
      "name": "Need-based: Apply with supporting financial documents at start of each semester"
    },
    {
      "name": "KGSP: Separate application through Korean embassy"
    }
  ],
  "internships": {
    "part_time_work": "Internship Placements: Available through partner organizations (Gwangju International Center, Design Center, Convention Bureau)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Buddy system and international clubs",
    "housing": "On-Campus Housing (Dormitories):"
  },
  "security": {
    "detail": "Dormitory staff: 24/7 emergency assistance"
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

addPrograms(univ_chonnamnationaluniversitysouthkorea, "CHONNAM NATIONAL UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Division of International Studies (English-taught program)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Business Administration",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master of Electrical Engineering",
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
    "name": "Master of Economics",
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
    "name": "Division of International Studies : Bachelor of Arts - Division of International Studies",
    "faculty": "College of Humanities / Division of International Studies",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "humanities/international affairs background beneficial"
    ],
    "entry_roles": [
      "International relations officer",
      "diplomat",
      "NGO specialist",
      "global affairs manager",
      "policy analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering : Bachelor of Science - Computer Science and Engineering",
    "faculty": "College of Engineering / Department of Computer Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "AI/ML engineer",
      "systems engineer",
      "network engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "finance analyst",
      "marketing manager",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "College of Engineering / Department of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering : Bachelor of Electrical Engineering",
    "faculty": "College of Engineering / Department of Electrical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Science - Computer Science and Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Computer Science and Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration",
    "faculty": "Graduate School of Business / MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "economics",
      "or any discipline acceptable"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "finance manager",
      "corporate strategist",
      "operations director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Science - Mechanical Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "manufacturing"
    ],
    "entry_roles": [
      "Research engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Electrical Engineering : Master of Science - Electrical Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Electrical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "control systems"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Economics : Master of Science - Economics",
    "faculty": "Graduate School / College of Social Sciences / Department of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Economics",
      "business",
      "or related social science background beneficial"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "policy analyst",
      "research fellow",
      "consultant"
    ],
    "features": []
  }
]);

// --- EWHA WOMANS UNIVERSITY (South Korea) ---
const univ_ewhawomansuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "EWHA WOMANS UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "https://gsis.ewha.ac.kr",
  "application_portal": "Jinhak Apply or Uway Apply (if available)",
  "contacts": {
    "admissions": {
      "phone": "+82-2-3277-3158/3159",
      "email": "goabroad@ewha.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Target: Female international students from developing countries (India eligible)"
    },
    {
      "name": "Coverage: Full tuition fee + admission fee + on-campus dormitory fee + monthly living stipend"
    },
    {
      "name": "Duration: Entire 4-year undergraduate degree (8 semesters); renewable with minimum GPA maintenance (2.0+)"
    },
    {
      "name": "Application: Apply during regular admission process (no separate application); must demonstrate leadership potential and write strong personal statement"
    },
    {
      "name": "Highly Competitive: Limited spots available"
    },
    {
      "name": "ISS F4: Full tuition waiver for maximum 8 semesters (4 years)"
    },
    {
      "name": "ISS F2: Full tuition waiver for 2 semesters (1 year)"
    },
    {
      "name": "ISS F1: Full tuition waiver for 1 semester"
    },
    {
      "name": "ISS FH1: Full tuition for students with TOPIK Level 6"
    },
    {
      "name": "Eligibility: Based on admission evaluation; merit-based automatic consideration"
    },
    {
      "name": "Maintenance: Minimum GPA 2.0+ required to continue"
    },
    {
      "name": "Coverage: 50% tuition reduction"
    },
    {
      "name": "Eligibility: Merit-based; automatic consideration during admission"
    },
    {
      "name": "Coverage: 30\u2013100% tuition reduction depending on academic record and qualification"
    },
    {
      "name": "Automatic consideration during main admission"
    },
    {
      "name": "Maintenance: Minimum GPA 3.0+/4.3 required for continuation"
    },
    {
      "name": "Eligibility: TOPIK Level 4+ (except Division of International Studies and Asian Women\u2019s Studies programs); GPA 3.5+"
    },
    {
      "name": "Coverage: Varies; tuition reduction based on ranking"
    },
    {
      "name": "Duration: 1 semester; renewable each semester"
    },
    {
      "name": "Coverage: USD 1,000 per month; round-trip airfare (once)"
    },
    {
      "name": "Eligibility: PhD students in The Graduate School who have completed or nearly completed coursework"
    },
    {
      "name": "Eligibility: GPA 3.20+"
    },
    {
      "name": "Coverage: Maximum 30% tuition; applies only to forthcoming semester"
    },
    {
      "name": "Limitations: Consecutive awards not granted; Master\u2019s students limited to one award during program"
    },
    {
      "name": "Coverage: Approximately USD 900 per semester"
    },
    {
      "name": "Eligibility: International undergraduate and graduate students; minimum 10 credits (UG) or 6 credits (PG); minimum GPA 2.0+; TOPIK Level 4+"
    },
    {
      "name": "Requirement: Must serve as Student Assistant or Online Ambassador"
    },
    {
      "name": "Exclusions: Division of International Studies and Asian Women\u2019s Studies exempt from TOPIK requirement"
    },
    {
      "name": "Eligibility: Students completing 3+ semesters at ELC intensive program (Level 6 intermediate)"
    },
    {
      "name": "Coverage: Partial tuition for first semester"
    },
    {
      "name": "Automatic merit-based consideration: During main admission process (no separate application)"
    },
    {
      "name": "EGPP: Must tick box during application and submit strong personal statement demonstrating leadership"
    },
    {
      "name": "ISS M (ongoing): Can apply each semester through International Student Affairs Team"
    },
    {
      "name": "Deadline: Applications must be submitted by stated deadline"
    }
  ],
  "internships": {
    "part_time_work": "Study Abroad & Exchange: Global Challenge Program requiring exchange, internship, or capstone",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Cultural exchange activities",
    "housing": "On-Campus Housing (Three Dormitory Options):"
  },
  "security": {
    "detail": "Dormitory staff: 24/7 emergency assistance"
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

addPrograms(univ_ewhawomansuniversitysouthkorea, "EWHA WOMANS UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Division of International Studies (English-taught program)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Environmental Science & Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Life Sciences / Biology",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Studies (Graduate School of International Studies - GSIS)",
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
    "name": "Master of Business Administration (Graduate School of Business)",
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Arts in International Relations (GSIS)",
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
    "name": "Master of Education / TEFL (Graduate School of Education)",
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
    "name": "Division of International Studies : Bachelor of Arts - Division of International Studies",
    "faculty": "College of Liberal Arts / Division of International Studies (DIS)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "international affairs/social sciences background beneficial"
    ],
    "entry_roles": [
      "International relations officer",
      "diplomat",
      "policy analyst",
      "NGO specialist",
      "global affairs manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering : Bachelor of Science - Computer Science and Engineering",
    "faculty": "College of Engineering / Department of Computer Science & Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "data engineer",
      "AI/ML engineer",
      "systems engineer",
      "network engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "finance analyst",
      "marketing manager",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Environmental Science & Engineering : Bachelor of Science - Environmental Science & Engineering",
    "faculty": "College of Engineering / Division of Environmental & Food Science",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry",
      "Biology",
      "Mathematics beneficial"
    ],
    "entry_roles": [
      "Environmental engineer",
      "sustainability consultant",
      "environmental analyst",
      "waste management specialist",
      "green technology engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Life Sciences / Biology : Bachelor of Science - Life Sciences",
    "faculty": "College of Natural Sciences / Department of Life Science",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry background beneficial"
    ],
    "entry_roles": [
      "Research scientist",
      "lab technician",
      "biologist",
      "healthcare professional",
      "pharmaceutical researcher",
      "biotechnology specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Studies : Master of Arts - International Studies (Graduate School of International Studies - GSIS)",
    "faculty": "Graduate School of International Studies (GSIS)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science",
      "economics",
      "or related discipline preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations officer",
      "policy analyst",
      "NGO executive",
      "government official",
      "researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration",
    "faculty": "Graduate School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "economics",
      "or any discipline acceptable"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "finance manager",
      "corporate strategist",
      "operations director",
      "CFO"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Science - Computer Science and Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Computer Science & Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist",
      "systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts - International Relations : Master of Arts - International Relations (GSIS)",
    "faculty": "Graduate School of International Studies (GSIS) - International Relations Concentration",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Political science",
      "international relations",
      "or related discipline preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "policy analyst",
      "international relations researcher",
      "NGO officer",
      "government official",
      "think tank researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Education / TEFL : Master of Arts - Education (TEFL / Teaching English as Foreign Language)",
    "faculty": "Graduate School of Education",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Education",
      "English",
      "linguistics",
      "or related discipline preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "TEFL teacher",
      "educational consultant",
      "curriculum developer",
      "educational technology specialist",
      "university instructor"
    ],
    "features": []
  }
]);

// --- GACHON UNIVERSITY (South Korea) ---
const univ_gachonuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "GACHON UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seongnam",
  "province": "Gyeonggi Province",
  "country": "South Korea",
  "campuses": [
    "Seongnam"
  ],
  "website": "https://www.gachon.ac.kr/eng/7457/subview.do",
  "application_portal": "https://www.jinhakapply.com/ (Online application system)",
  "contacts": {
    "admissions": {
      "address": "Office of International Affairs, 1342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do 13120",
      "phone": "+82-31-750-5838 (General Graduate Admissions)",
      "email": "changchoi@gachon.ac.kr (Department Contact)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Top 7% of international students: 50% tuition reduction (first semester)"
    },
    {
      "name": "Top 30% of international students: 40% tuition reduction (all subsequent semesters)"
    },
    {
      "name": "Additional merit-based scholarships available based on TOPIK/IELTS scores"
    },
    {
      "name": "Scholarship for Freshmen: 50% reduction in tuition (first semester)"
    },
    {
      "name": "Scholarship for Enrolled students: 40% reduction in tuition (all subsequent semesters)"
    },
    {
      "name": "Department-specific scholarships available"
    },
    {
      "name": "GKS (Global Korea Scholarship): Full government scholarship program available"
    }
  ],
  "internships": {
    "part_time_work": "Industry partnerships for internship and employment opportunities",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Diverse student clubs and organizations"
  },
  "security": {
    "detail": "Security Infrastructure: Standard campus security systems implemented"
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

addPrograms(univ_gachonuniversitysouthkorea, "GACHON UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "AI & Software Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Health Sciences/Healthcare Management",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Science in Computer Engineering",
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
    "name": "Master\u2019s in Management/Business Administration",
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
    "name": "Master of Science in AI & Software Engineering",
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
    "name": "Master\u2019s in Industrial Technology/Engineering",
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
    "name": "Computer Engineering (Bachelor of Science)",
    "faculty": "Department of Computer Engineering, College of IT Convergence",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics)"
    ],
    "entry_roles": [
      "Software Developer",
      "System Engineer",
      "Web/App Programmer",
      "Database Administrator",
      "System Administrator",
      "AI Application Developer",
      "Security Specialist",
      "Game Programmer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (Bachelor of Commerce/BBA)",
    "faculty": "Department of Business Administration, Gachon Business School",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Commerce or Social Sciences stream",
      "any background acceptable with prerequisites"
    ],
    "entry_roles": [
      "Management Consultant",
      "Financial Analyst",
      "HR Manager",
      "Marketing Manager",
      "Accounting Professional",
      "Business Development Executive",
      "Corporate Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "AI & Software Engineering (Bachelor of Science)",
    "faculty": "Department of AI & Software, College of IT Convergence",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics required)"
    ],
    "entry_roles": [
      "Software Developer",
      "AI/ML Engineer",
      "Data Scientist",
      "System Engineer",
      "Mobile App Developer",
      "Cloud Solutions Architect",
      "Robotics Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Business Administration (Bachelor of Commerce)",
    "faculty": "Department of International Business Administration, Gachon Business School",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Commerce or Social Sciences",
      "any background acceptable with prerequisites"
    ],
    "entry_roles": [
      "International Trade Specialist",
      "Business Development Manager",
      "Import/Export Manager",
      "Global Consultant",
      "International Relations Officer",
      "Foreign Trade Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Healthcare Management/Health Sciences (Bachelor of Science)",
    "faculty": "Department of Healthcare Management, College of Health Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Biology, Chemistry preferred)",
      "Healthcare background valued"
    ],
    "entry_roles": [
      "Healthcare Manager",
      "Hospital Administrator",
      "Health Policy Analyst",
      "Public Health Officer",
      "Clinical Coordinator",
      "Health Informatics Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Graduate School of Business Administration, MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Commerce",
      "Finance",
      "Economics preferred",
      "other fields considered with prerequisites"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance Director",
      "Strategy Manager",
      "Corporate Executive",
      "Business Development Manager",
      "HR Director",
      "Marketing Director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Engineering",
    "faculty": "Graduate Program in Computer Engineering, College of IT Convergence",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Software Engineering",
      "Computer Engineering",
      "or related technical field required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Architect",
      "AI/ML Engineer",
      "Data Scientist",
      "Embedded Systems Engineer",
      "Research Engineer",
      "Technical Lead"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management/Business Administration (Non-MBA)",
    "faculty": "Graduate School of Business Administration, Master\u2019s Program (MS & PhD)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Management",
      "Economics preferred",
      "other backgrounds considered"
    ],
    "entry_roles": [
      "Business Manager",
      "Policy Analyst",
      "Research Analyst",
      "Corporate Strategist",
      "Management Consultant",
      "Business Development Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in AI & Software Engineering",
    "faculty": "Graduate Program in AI & Software, College of IT Convergence",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Software Engineering",
      "Computer Science",
      "IT",
      "Artificial Intelligence or related technical discipline required"
    ],
    "entry_roles": [
      "AI Engineer",
      "Software Architect",
      "Data Scientist",
      "Machine Learning Engineer",
      "Deep Learning Specialist",
      "Robotics Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Industrial Technology/Engineering",
    "faculty": "Graduate School of Industrial Environment, Multiple Engineering Programs",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Urban Planning",
      "Architecture",
      "Engineering",
      "Building Engineering",
      "Fire",
      "Disaster Prevention",
      "or related discipline required"
    ],
    "entry_roles": [
      "Project Manager",
      "Structural Engineer",
      "Urban Planner",
      "Building Systems Engineer",
      "Fire Safety Specialist",
      "Construction Manager",
      "Systems Engineer"
    ],
    "features": []
  }
]);

// --- HANSEO UNIVERSITY (South Korea) ---
const univ_hanseouniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "HANSEO UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seosan",
  "province": "South Chungcheong",
  "country": "South Korea",
  "campuses": [
    "Seosan"
  ],
  "website": "www.graduate.hanseo.ac.kr",
  "application_portal": "Online submission through university\u2019s international admissions portal",
  "contacts": {
    "admissions": {
      "phone": "+82-41-660-1154 (English), +82-41-660-1151 (General)",
      "email": "graduatehanseo@gmail.com"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
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
      "name": "Research Grants (for graduate/doctoral students)"
    },
    {
      "name": "Korean Government Scholarship (GKS) - potentially available"
    }
  ],
  "internships": {
    "part_time_work": "Career placement support through departments",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Multiple student organizations; student management committee (as of 2023)",
    "housing": "Housing: On-campus dormitory available for qualified students"
  },
  "security": {
    "detail": "Partnerships: Coordination with local law enforcement; specialized aviation security training facilities"
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

addPrograms(univ_hanseouniversitysouthkorea, "HANSEO UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Aerospace Engineering (Flight Operation/Helicopter Operation)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
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
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (General/AI Robotics/Environmental/Civil)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Fashion Design",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "English Language & International Cooperation / Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master\u2019s in Business Administration (International Trade & Business)",
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
    "name": "Master\u2019s in Aeronautical System Engineering",
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
    "name": "Master\u2019s in Chemical Engineering",
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
    "name": "Master\u2019s in Environmental Engineering",
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
    "name": "Master\u2019s in Physical Therapy / Occupational Therapy",
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
    "name": "Bachelor of Science in Aerospace Engineering (Flight Operation/Helicopter Operation)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 8160,
    "total_fee_cad": 32640,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics (advanced level preferred)"
    ],
    "entry_roles": [
      "Pilot",
      "helicopter pilot",
      "aircraft maintenance engineer",
      "aviation engineer",
      "airport operations manager",
      "air traffic controller",
      "aircraft dispatcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Nursing",
    "faculty": "Department of Nursing (School of Health Science)",
    "duration_years": 4.0,
    "annual_fee_cad": 7480,
    "total_fee_cad": 29920,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "or Health Sciences background preferred"
    ],
    "entry_roles": [
      "Registered nurse",
      "hospital nurse",
      "community health nurse",
      "nursing educator",
      "medical researcher",
      "occupational health nurse",
      "healthcare administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in AI Robotics Engineering",
    "faculty": "Department of AI Robotics Engineering (Established 2025)",
    "duration_years": 4.0,
    "annual_fee_cad": 8840,
    "total_fee_cad": 35360,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science/Information Technology"
    ],
    "entry_roles": [
      "Robotics engineer",
      "AI software engineer",
      "automation engineer",
      "systems engineer",
      "research engineer",
      "manufacturing automation specialist",
      "IoT developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Fashion Design",
    "faculty": "Fashion Design Major (College of Fine Arts)",
    "duration_years": 4.0,
    "annual_fee_cad": 1360,
    "total_fee_cad": 5440,
    "min_class12_percent": 70,
    "required_subjects": [
      "Art",
      "design",
      "or creative background preferred but not mandatory"
    ],
    "entry_roles": [
      "Fashion designer",
      "clothing product developer",
      "pattern maker",
      "brand designer",
      "textile designer",
      "fashion consultant",
      "design assistant",
      "costume designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in English Language & International Cooperation",
    "faculty": "Department of Foreign Languages & International Cooperation",
    "duration_years": 4.0,
    "annual_fee_cad": 7072,
    "total_fee_cad": 28288,
    "min_class12_percent": 70,
    "required_subjects": [
      "English language proficiency",
      "humanities background preferred"
    ],
    "entry_roles": [
      "International relations specialist",
      "translator/interpreter",
      "ESL teacher",
      "cultural affairs officer",
      "diplomatic staff",
      "international business professional",
      "NGO coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (International Trade & Business)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 8840,
    "total_fee_cad": 17680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "economics",
      "management",
      "trade",
      "or related field preferred",
      "2+ years professional experience valued"
    ],
    "entry_roles": [
      "Business manager",
      "international trade specialist",
      "management consultant",
      "corporate strategist",
      "finance manager",
      "market analyst",
      "supply chain manager",
      "operations director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Aeronautical System Engineering",
    "faculty": "Department of Aeronautical System Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 9520,
    "total_fee_cad": 19040,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in engineering",
      "aerodynamics",
      "systems design",
      "or aircraft technology essential"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "aeronautical system engineer",
      "aircraft design engineer",
      "systems integration engineer",
      "research scientist",
      "aviation authority specialist",
      "unmanned aircraft systems (UAS) designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Chemical Engineering",
    "faculty": "Department of Chemical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 8840,
    "total_fee_cad": 17680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Chemistry",
      "chemical engineering",
      "or materials science essential",
      "strong coursework in thermodynamics",
      "unit operations preferred"
    ],
    "entry_roles": [
      "Chemical engineer",
      "process engineer",
      "pharmaceutical engineer",
      "research scientist",
      "quality assurance engineer",
      "environmental engineer",
      "material scientist",
      "production manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Environmental Engineering",
    "faculty": "Department of Environmental Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 8840,
    "total_fee_cad": 17680,
    "min_class12_percent": 60,
    "required_subjects": [
      "Environmental science",
      "water treatment",
      "pollution control",
      "sustainability",
      "or civil engineering strongly preferred"
    ],
    "entry_roles": [
      "Environmental engineer",
      "water treatment specialist",
      "waste management engineer",
      "environmental consultant",
      "sustainability officer",
      "regulatory compliance officer",
      "research scientist",
      "environmental impact assessor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physical Therapy",
    "faculty": "Department of Physical Therapy (School of Health Science)",
    "duration_years": 2.0,
    "annual_fee_cad": 8160,
    "total_fee_cad": 16320,
    "min_class12_percent": 60,
    "required_subjects": [
      "Clinical experience in rehabilitation",
      "physiotherapy",
      "or healthcare",
      "strong foundation in anatomy",
      "physiology essential"
    ],
    "entry_roles": [
      "Physical therapist",
      "rehabilitation specialist",
      "clinical physiotherapist",
      "sports rehabilitation professional",
      "research scientist",
      "health educator",
      "hospital rehabilitation manager",
      "occupational health specialist"
    ],
    "features": []
  }
]);

// --- HANYANG UNIVERSITY (South Korea) ---
const univ_hanyanguniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "HANYANG UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "http://ericaiie.hanyang.ac.kr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+82-31-400-5841, 5842, 5847 (Foreign Language & Korean courses)",
      "email": "ericaiie@hanyang.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Additional Requirements: Personal statement and study plan; 2\u20133 recommendation letters (academic preferred); CV; transcripts from all studies"
    },
    {
      "name": "Research Experience: Not mandatory; beneficial if available"
    },
    {
      "name": "Application Period: Varies by campus"
    },
    {
      "name": "Orientation: February 23rd, 2026"
    },
    {
      "name": "Application Deadline: December 16th, 2025"
    },
    {
      "name": "Semester Dates: March 2 \u2013 June 22, 2026"
    },
    {
      "name": "Application Deadline: June 18th, 2026"
    },
    {
      "name": "Orientation: August 25th, 2026"
    },
    {
      "name": "Semester Dates: September 1 \u2013 December 21, 2026"
    },
    {
      "name": "Spring 2026: Typical application September\u2013October 2025; Results December 2025\u2013January 2026"
    },
    {
      "name": "Fall 2026: Typical application February\u2013May 2026; Results May\u2013June 2026"
    },
    {
      "name": "Specific deadlines vary by department; verify with individual graduate programs"
    },
    {
      "name": "Undergraduate International: Varies"
    },
    {
      "name": "Postgraduate International: Varies by program"
    },
    {
      "name": "Non-refundable; payable online"
    },
    {
      "name": "Eligibility: All international undergraduate students; merit-based selection"
    },
    {
      "name": "Coverage: Partial to full tuition (70%, 50%, or 30% reduction based on evaluation)"
    },
    {
      "name": "Application: Automatic consideration during admission"
    },
    {
      "name": "Eligibility: Undergraduate students with TOPIK Level 5\u20136 proficiency"
    },
    {
      "name": "Coverage: 100% tuition waiver (TOPIK 6); 50% tuition reduction (TOPIK 5)"
    },
    {
      "name": "Eligibility: TOEFL iBT 90+ or IELTS 6.5+"
    },
    {
      "name": "Coverage: 30% tuition reduction"
    },
    {
      "name": "Eligibility: Outstanding international undergraduate students"
    },
    {
      "name": "Coverage: 70%, 50%, or 30% tuition reduction (based on evaluation)"
    },
    {
      "name": "Eligibility: Students from developing countries / ODA countries"
    },
    {
      "name": "Coverage: Full tuition scholarship"
    },
    {
      "name": "Eligibility: Master\u2019s and PhD international students in Graduate School of Science and Engineering"
    },
    {
      "name": "Coverage: 50% tuition fee reduction + 50% admission fee reduction"
    },
    {
      "name": "Eligibility: Master\u2019s and PhD students in Graduate School of International Studies or Industrial Convergence"
    },
    {
      "name": "Coverage: 20\u201330% tuition fee reduction (varies by school)"
    },
    {
      "name": "Eligibility: Undergraduate and postgraduate students from India (GKS-participating country)"
    },
    {
      "name": "Coverage: Full tuition + KRW 900,000\u20131,300,000/month living allowance + airfare"
    },
    {
      "name": "Application: Apply through Korean Embassy in India (Embassy Track) or SKKU University Track"
    },
    {
      "name": "Automatic consideration: Merit-based scholarships reviewed during main admission"
    },
    {
      "name": "No separate application required for university scholarships"
    },
    {
      "name": "GKS: Separate application through Korean Embassy in India"
    }
  ],
  "internships": {
    "part_time_work": "Research Internships: Graduate students (Master\u2019s & PhD) participate in faculty-led research laboratories",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "International Student Support: Office of International Affairs; orientation programs; cultural exchange activities",
    "housing": "Foreign Student Accommodations: Multiple residence halls with furnished rooms"
  },
  "security": {
    "detail": "Office of International Affairs (OIA) provides emergency support; available for visa-related emergencies, medical consultations"
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

addPrograms(univ_hanyanguniversitysouthkorea, "HANYANG UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemical Engineering / Physics",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master of Electronics/Electrical Engineering",
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
    "name": "Master of International Relations / Graduate School of International Studies",
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
    "name": "Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "College of Engineering / Department of Computer Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "developer",
      "AI/ML engineer",
      "cybersecurity analyst",
      "data scientist",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "College of Engineering / School of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business & Economics / School of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 3800,
    "total_fee_cad": 15200,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong English background beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "consultant",
      "manager",
      "finance analyst",
      "marketer",
      "HR specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering : Bachelor of Electrical Engineering",
    "faculty": "College of Engineering / Department of Electrical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemical Engineering : Bachelor of Chemical Engineering",
    "faculty": "College of Engineering / Department of Chemical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry",
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Chemical engineer",
      "process engineer",
      "R&D engineer",
      "pharmaceutical engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration (Global MBA)",
    "faculty": "Graduate School of Business / SKK Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 8840,
    "total_fee_cad": 17680,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "finance manager",
      "CFO",
      "COO",
      "entrepreneur",
      "corporate director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 5712,
    "total_fee_cad": 11424,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 5712,
    "total_fee_cad": 11424,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "manufacturing"
    ],
    "entry_roles": [
      "Research engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Electronics/Electrical Engineering : Master of Electrical Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Electrical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 5712,
    "total_fee_cad": 11424,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "control systems"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "R&D engineer",
      "senior engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Relations : Master of International Studies",
    "faculty": "Graduate School of International Studies / GSIS",
    "duration_years": 2.0,
    "annual_fee_cad": 5712,
    "total_fee_cad": 11424,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science",
      "social sciences preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations analyst",
      "policy analyst",
      "global affairs officer",
      "NGO officer"
    ],
    "features": []
  }
]);

// --- JEONBUK NATIONAL UNIVERSITY (South Korea) ---
const univ_jeonbuknationaluniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "JEONBUK NATIONAL UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Jeonju",
  "province": "North Jeolla",
  "country": "South Korea",
  "campuses": [
    "Jeonju"
  ],
  "website": "https://ioffice.jbnu.ac.kr",
  "application_portal": "https://ipsi2.uwayapply.com/2026/foreign/jbnu (UG) | https://ipsi2.uwayapply.com/2026/foreign/jbnugrad (PG)",
  "contacts": {
    "admissions": {
      "phone": "+82-63-270-2098"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Housing Scholarship: 1,300,000 KRW (~$1,000 USD) for all UG freshmen & transfers (1 year)"
    },
    {
      "name": "Glocal Campus Support: 30% tuition waiver + 1,300,000 KRW housing (1 year)"
    },
    {
      "name": "Merit-based: Based on TOPIK Level 6 (100% tuition), Level 5 (50-75%), Level 4 (20-50%), Level 3 (0-20%)"
    },
    {
      "name": "LINK Scholarship: Top 3 students from JBNU Korean Lang Center (100% tuition); Type 5 (20% tuition)"
    },
    {
      "name": "Master\u2019s Freshman: 80% tuition waiver (1 semester)"
    },
    {
      "name": "Doctoral Freshman: Full tuition waiver (1 year, effective 2026)"
    },
    {
      "name": "Graduate Research Participation: Master\u2019s ~920,000 KRW/month; Doctoral ~1,150,000 KRW/month"
    },
    {
      "name": "BK Research Scholarship: Master\u2019s ~770,000 KRW/month; Doctoral ~1,000-1,230,000 KRW/month"
    }
  ],
  "internships": {
    "part_time_work": "Career/Placement Support: Yes",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Glocal Campus Support: 30% tuition waiver + 1,300,000 KRW housing (1 year)",
    "clubs": "Student Clubs & Activities: Yes"
  },
  "security": {
    "detail": "Security Infrastructure: Campus equipped with standard university security protocols"
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

addPrograms(univ_jeonbuknationaluniversitysouthkorea, "JEONBUK NATIONAL UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Science & Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Civil/Structural Engineering",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Korean Language (Glocal Campus Program)",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computer Science & Engineering (Master\u2019s/Doctoral)",
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
    "name": "Business Administration (MBA/Doctoral)",
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
    "name": "Information & Communication Engineering (Master\u2019s)",
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
    "name": "Mechanical Engineering (Master\u2019s/Doctoral)",
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
    "name": "Agricultural Biology - Entomology/Plant Pathology (Master\u2019s/Doctoral)",
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
    "name": "Computer Science & Engineering (Bachelor of Science)",
    "faculty": "Division of Computer Science & Engineering, College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics preferred)"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Engineer",
      "Data Analyst",
      "Network Administrator",
      "Embedded Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (Bachelor of Commerce)",
    "faculty": "Department of Business Administration, College of Business & Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Commerce or Social Sciences stream"
    ],
    "entry_roles": [
      "Management Consultant",
      "Financial Analyst",
      "Business Development Executive",
      "Marketing Manager",
      "Accounting Associate"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Civil Engineering (Bachelor of Science)",
    "faculty": "Department of Civil Engineering, College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics)"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Project Manager",
      "Site Engineer",
      "Structural Designer",
      "Infrastructure Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (Bachelor of Science)",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "CAD Designer",
      "Production Engineer",
      "Maintenance Engineer",
      "Automotive Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Korean Language (Bachelor of Arts) - Glocal Campus",
    "faculty": "School of International Studies & Korean Language, Namwon Glocal Campus",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 50,
    "required_subjects": [
      "Any stream (language program)"
    ],
    "entry_roles": [
      "Korean Language Teacher",
      "Cultural Liaison Officer",
      "Translation/Interpretation Professional",
      "Korean Media Content Creator",
      "International Relations Coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
    "faculty": "Division of Computer Science & Engineering Graduate School, College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Bachelor\u2019s in Computer Science",
      "Engineering",
      "IT",
      "or closely related field"
    ],
    "entry_roles": [
      "Software Engineer",
      "AI/ML Specialist",
      "Systems Architect",
      "Data Scientist",
      "Research Engineer",
      "DevOps Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Department of Business Administration Graduate School, College of Business & Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Commerce",
      "Economics",
      "Business",
      "Finance",
      "or management field preferred",
      "other backgrounds considered with prerequisite courses"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance Manager",
      "Business Strategy Analyst",
      "Marketing Director",
      "Operations Manager",
      "Corporate Executive"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Information & Communication Engineering",
    "faculty": "Department of Information & Communication Engineering Graduate School, College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Electronics",
      "Communications",
      "Information Technology",
      "Computer Engineering preferred"
    ],
    "entry_roles": [
      "Telecommunications Engineer",
      "RF Engineer",
      "Network Engineer",
      "Signal Processing Specialist",
      "IoT Systems Developer",
      "Communication Systems Designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering Graduate School, College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mechanical Engineering",
      "Automotive Engineering",
      "Aerospace Engineering",
      "or closely related discipline"
    ],
    "entry_roles": [
      "Mechanical Design Engineer",
      "Manufacturing Engineer",
      "Thermal Systems Engineer",
      "Automotive Engineer",
      "Aerospace Engineer",
      "Maintenance Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Agricultural Biology (Plant Pathology/Entomology)",
    "faculty": "Department of Agricultural Biology Graduate School, College of Agriculture & Life Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Agriculture",
      "Crop Science",
      "Plant Sciences",
      "Environmental Sciences",
      "Biological Sciences required"
    ],
    "entry_roles": [
      "Plant Pathologist",
      "Agricultural Entomologist",
      "Crop Protection Specialist",
      "Research Scientist (Rural Development Administration)",
      "Pest Management Consultant",
      "Quarantine Officer"
    ],
    "features": []
  }
]);

// --- KAIST (South Korea) ---
const univ_kaistsouthkorea = db.institutions.insertOne(inst({
  "name": "KAIST (South Korea)",
  "abbreviation": "KOREA ADVANCED INSTITUTE OF SCIENCE AND TECHNOLOGY",
  "type": "university",
  "city": "Daejeon",
  "province": "Daejeon",
  "country": "South Korea",
  "campuses": [
    "Daejeon"
  ],
  "website": "https://www.kaist.ac.kr",
  "application_portal": "admission.kaist.ac.kr",
  "contacts": {
    "admissions": {
      "address": "291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea",
      "phone": "+82-42-350-2352, +82-42-350-2354",
      "email": "advanced.adm@kaist.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: Automatically considered for all admitted international students; merit-based selection"
    },
    {
      "name": "Coverage (Master\u2019s Programs): Full tuition fee waiver; monthly stipend KRW 350,000\u2013400,000"
    },
    {
      "name": "Coverage (PhD Programs): Full tuition fee waiver; monthly stipend KRW 300,000\u2013400,000"
    },
    {
      "name": "Coverage (MS-PhD Integrated): Full tuition fee waiver; monthly stipend KRW 300,000\u2013400,000 (8 semesters)"
    },
    {
      "name": "Additional Benefits: Medical Health Insurance premium waiver; research assistantship funding opportunities"
    },
    {
      "name": "Duration: 4 semesters (Master\u2019s); 8 semesters (PhD); 10 semesters (MS-PhD Integrated)"
    },
    {
      "name": "Application: Automatic consideration during main admission application; select KAIST Scholarship as financial resource"
    },
    {
      "name": "Eligibility: Master\u2019s and MS-PhD Integrated international applicants; automatically considered"
    },
    {
      "name": "Coverage: Full tuition waiver; monthly stipend KRW 1,000,000"
    },
    {
      "name": "Duration: 4 regular semesters"
    },
    {
      "name": "Application: Automatic; no separate application required"
    },
    {
      "name": "Eligibility: Master\u2019s-PhD Integrated and PhD program applicants; exceptional academic/research achievements"
    },
    {
      "name": "Coverage: Full tuition waiver; monthly stipend KRW 300,000 (standard); recommendations from department heads reviewed by college deans"
    },
    {
      "name": "Duration: 8 regular semesters"
    },
    {
      "name": "Eligibility: Exceptional GPAs; MS-PhD Integrated and PhD applicants to CoE programs"
    },
    {
      "name": "Coverage: Monthly fellowship KRW 2,500,000 (50% from CoE, 50% from department/professor); additional to tuition waiver; 4-year duration"
    },
    {
      "name": "Conditions: Full-time commitment required; cannot receive additional financial aid; must maintain satisfactory academic progress"
    },
    {
      "name": "Presidential Science Scholarship: Government-funded; admission fee + full school support fees; minimum 3.13/4.3 GPA required"
    },
    {
      "name": "National Excellence Scholarship: Government-funded; engineering/natural sciences focus; admission fee + full school support; 3.13/4.3 GPA"
    },
    {
      "name": "National Scholarship (Types 1\u20138): Government/University-funded; tuition/school support partial/full coverage; 2.50\u20133.13 GPA requirements"
    },
    {
      "name": "Automatic consideration: Merit-based awards selected during main admission review"
    },
    {
      "name": "No separate scholarship application required for KAIST Scholarship, KGPS, or KPS"
    },
    {
      "name": "CoE PhD Fellowship: Recommended by department heads post-admission"
    }
  ],
  "internships": {
    "part_time_work": "Research Internships: Graduate students (Master\u2019s & PhD) participate in faculty-led research laboratories (mandatory thesis/dissertation research)",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "Extracurricular activities summary",
    "housing": "Dormitory Fees: KRW 111,000\u2013321,000 per month for dormitories (undergraduate); KRW 114,000\u2013280,000 for graduate housing (varies by room type: double, single, or single usage)"
  },
  "security": {
    "detail": "Dedicated International Scholar & Student Services (ISSS) team for emergency support"
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

addPrograms(univ_kaistsouthkorea, "KAIST (South Korea)", [
  {
    "level": "UG",
    "name": "Bachelor of Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Electrical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Physics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mathematics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master-PhD Integrated Program (Engineering)",
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
    "name": "Master of Engineering Science",
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
    "name": "Master of Physics",
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
    "name": "Bachelor of Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "School of Computing / Department of Computer Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 28800,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML engineer",
      "systems architect",
      "data scientist",
      "cybersecurity analyst",
      "embedded systems engineer",
      "robotics engineer",
      "cloud infrastructure engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering : Bachelor of Engineering \u2014 Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering / College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 28800,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (study score equivalent 20+)",
      "Physics mandatory",
      "Chemistry recommended"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer",
      "robotics engineer",
      "project engineer",
      "thermal engineer",
      "production engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Electrical Engineering : Bachelor of Engineering \u2014 Electrical Engineering",
    "faculty": "Department of Electrical Engineering / College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 28800,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Electronics background beneficial"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "telecommunications engineer",
      "control systems engineer",
      "semiconductor engineer",
      "project engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Physics : Bachelor of Physics",
    "faculty": "Department of Physics / College of Science",
    "duration_years": 4.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 28800,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Physicist",
      "research scientist",
      "postdoctoral researcher",
      "data scientist",
      "scientific analyst",
      "systems engineer",
      "technology consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mathematics : Bachelor of Mathematics",
    "faculty": "Department of Mathematical Sciences / College of Science",
    "duration_years": 4.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 28800,
    "min_class12_percent": 75,
    "required_subjects": [
      "Advanced Mathematics essential",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Mathematician",
      "data scientist",
      "quantitative analyst",
      "research scientist",
      "systems analyst",
      "academic researcher",
      "software engineer",
      "finance analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "School of Computing / Department of Computer Science and Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 8096,
    "total_fee_cad": 16192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming",
      "discrete mathematics",
      "systems",
      "coursework documentation required"
    ],
    "entry_roles": [
      "Senior software engineer",
      "machine learning engineer",
      "AI researcher",
      "systems architect",
      "data scientist",
      "security engineer",
      "research scientist",
      "technology consultant",
      "startup CTO"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 8096,
    "total_fee_cad": 16192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "materials science",
      "manufacturing",
      "transcript in relevant area required"
    ],
    "entry_roles": [
      "Research engineer",
      "mechanical design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "senior engineer",
      "project manager",
      "automotive engineer",
      "energy systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master-PhD Integrated Program (Engineering) : Master-PhD Integrated Program \u2014 Engineering",
    "faculty": "Department/School within College of Engineering (varies by specialization)",
    "duration_years": 2.0,
    "annual_fee_cad": 8096,
    "total_fee_cad": 16192,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering Science : Master of Engineering Science",
    "faculty": "Department/School within College of Engineering (discipline-specific)",
    "duration_years": 2.0,
    "annual_fee_cad": 8096,
    "total_fee_cad": 16192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mechanical",
      "Electrical",
      "Civil",
      "Chemical",
      "Aerospace",
      "Environmental",
      "Materials",
      "or other engineering specialization"
    ],
    "entry_roles": [
      "Senior engineer",
      "research engineer",
      "design engineer",
      "manufacturing engineer",
      "project manager",
      "consulting engineer",
      "technology specialist",
      "postdoctoral researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Physics : Master of Physics",
    "faculty": "Department of Physics, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 8096,
    "total_fee_cad": 16192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in classical mechanics",
      "quantum mechanics",
      "electromagnetism",
      "thermodynamics",
      "advanced coursework in physics required"
    ],
    "entry_roles": [
      "Physicist",
      "postdoctoral researcher",
      "research scientist",
      "university lecturer",
      "scientific analyst",
      "data scientist",
      "systems engineer",
      "technology consultant"
    ],
    "features": []
  }
]);

// --- KOREA UNIVERSITY ---
const univ_koreauniversity = db.institutions.insertOne(inst({
  "name": "KOREA UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "http://oia.korea.ac.kr",
  "application_portal": "Online via gsis application portal",
  "contacts": {
    "admissions": {
      "phone": "+82-2-3290-5177, +82-2-3290-5178",
      "email": "studyabroad@korea.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: Undergraduate and Postgraduate (Master\u2019s/Doctoral) international students from GKS-participating universities including Korea University"
    },
    {
      "name": "Coverage: Full tuition exemption (up to KRW 5M/semester); monthly living allowance KRW 900,000\u20131,300,000; round-trip economy airfare (actual expense); TOPIK/Korean language training fee; medical insurance; research allowance; academic incentive grants up to KRW 630,000/month"
    },
    {
      "name": "Duration: Up to 8 semesters (undergraduate); 4\u20136 semesters (postgraduate)"
    },
    {
      "name": "Age Requirement: Under 25 years (undergraduate); under 40 years (postgraduate)"
    },
    {
      "name": "Academic Requirement: Cumulative GPA 80%+ in most recent educational program"
    },
    {
      "name": "Application: Apply through Korean Embassy in India (Embassy Track) OR through Korea University (University Track); GKS quota for India: 78 (50 University Track, 28 Embassy Track)"
    },
    {
      "name": "Application Timeline: Begins February 2026 (typical)"
    },
    {
      "name": "Coverage (Type I): Full entrance and tuition fee waiver + KRW 500,000 monthly stipend; 4 semesters (Master\u2019s) or 6 semesters (Joint Degree)"
    },
    {
      "name": "Coverage (Type II): 50% entrance and tuition fee waiver; up to 1 semester (reviewed each semester)"
    },
    {
      "name": "Coverage (Type III): Maximum 50% entrance and tuition fee waiver; 4 semesters (Master\u2019s) or 6 semesters (Joint Degree)"
    },
    {
      "name": "Eligibility: Department recommendation; exceptional academic performance; merit-based selection"
    },
    {
      "name": "Application: Automatic consideration during admission process; no separate application required"
    },
    {
      "name": "Eligibility: Postgraduate and Doctoral students from India"
    },
    {
      "name": "Coverage: Partial to full tuition support (varies by year)"
    },
    {
      "name": "Application: Apply through official KFAS channels or during university admission"
    },
    {
      "name": "Automatic merit-based consideration: All admitted international students automatically evaluated for scholarships during admission review"
    },
    {
      "name": "No separate application required for university scholarships"
    },
    {
      "name": "GKS: Apply separately through Korean Embassy in India or University Track"
    }
  ],
  "internships": {
    "part_time_work": "Career development and placement services available through Global Services Center and departments",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "Sports & Recreation: Hwajeong Stadium near CJ I-House (gym membership available KRW 40,000\u201350,000/month); fitness rooms in dormitories; sports facilities; athletic clubs",
    "housing": "Housing Fees: Approximately KRW 111,000\u2013321,000/month depending on dormitory type"
  },
  "security": {
    "detail": "Campus health clinic provides medical services and emergency first aid"
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

addPrograms(univ_koreauniversity, "KOREA UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Psychology",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Law",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA/Global MBA)",
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
    "name": "Master of International Relations (GSIS)",
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Economics",
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
    "name": "Master of Public Health",
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
    "name": "Bachelor of Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "School of Computer Science and Engineering / College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 60,
    "total_fee_cad": 240,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Computer Science background beneficial but not mandatory"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML engineer",
      "data scientist",
      "systems architect",
      "cybersecurity analyst",
      "embedded systems engineer",
      "web/mobile developer",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business / School of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 60,
    "total_fee_cad": 240,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically mandated",
      "strong English",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Business analyst",
      "accountant",
      "financial analyst",
      "manager",
      "marketer",
      "HR specialist",
      "consultant",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering : Bachelor of Engineering \u2014 Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering / College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 60,
    "total_fee_cad": 240,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Chemistry recommended"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer",
      "robotics engineer",
      "project engineer",
      "thermal engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Psychology : Bachelor of Psychology",
    "faculty": "Department of Psychology / College of Science",
    "duration_years": 4.0,
    "annual_fee_cad": 60,
    "total_fee_cad": 240,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong English",
      "social sciences background preferred"
    ],
    "entry_roles": [
      "Research psychologist",
      "clinical psychologist assistant",
      "HR specialist",
      "educational consultant",
      "counselor",
      "UX/UI researcher",
      "organisational development specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Law : Bachelor of Law",
    "faculty": "College of Law / School of Law",
    "duration_years": 4.0,
    "annual_fee_cad": 60,
    "total_fee_cad": 240,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically",
      "strong English",
      "social sciences background beneficial"
    ],
    "entry_roles": [
      "Lawyer",
      "legal consultant",
      "corporate counsel",
      "government attorney",
      "international relations officer",
      "legal analyst",
      "law firm associate"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Global MBA) : Master of Business Administration \u2014 Global MBA",
    "faculty": "Business School / Graduate MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 13000,
    "total_fee_cad": 26000,
    "min_class12_percent": 60,
    "required_subjects": [
      "All disciplines welcome"
    ],
    "entry_roles": [
      "Management consultant",
      "finance manager",
      "business strategist",
      "CFO",
      "COO",
      "entrepreneur",
      "venture capitalist",
      "corporate director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Relations : Master of International Relations",
    "faculty": "Graduate School of International Studies (GSIS)",
    "duration_years": 2.0,
    "annual_fee_cad": 7183,
    "total_fee_cad": 14366,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science",
      "history",
      "social sciences preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations analyst",
      "policy analyst",
      "development specialist",
      "global affairs officer",
      "NGO officer",
      "international journalist",
      "researcher",
      "UN/international organisation specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "+82-2-3290-3200 (College of Engineering main)",
    "duration_years": 2.0,
    "annual_fee_cad": 7700,
    "total_fee_cad": 15400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming",
      "discrete mathematics",
      "systems",
      "CS-related coursework documentation"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "AI engineer",
      "data scientist",
      "systems architect",
      "research scientist",
      "cybersecurity engineer",
      "IT consultant",
      "startup CTO"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Economics : Master of Economics",
    "faculty": "Department of Economics / College of Social Sciences, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 5800,
    "total_fee_cad": 11600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Economics",
      "business",
      "mathematics",
      "statistics",
      "or social sciences background preferred",
      "strong quantitative foundation required"
    ],
    "entry_roles": [
      "Economist",
      "economic analyst",
      "policy analyst",
      "financial analyst",
      "research economist",
      "business strategist",
      "government economist",
      "international development specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Health : Master of Public Health",
    "faculty": "School of Public Health / Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 6700,
    "total_fee_cad": 13400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Public health",
      "health sciences",
      "medical",
      "nursing",
      "allied health",
      "or social sciences preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Public health officer",
      "health programme manager",
      "epidemiologist",
      "health educator",
      "policy analyst",
      "health researcher",
      "international development specialist",
      "WHO/UNDP officer",
      "disease surveillance specialist"
    ],
    "features": []
  }
]);

// --- KYUNG HEE UNIVERSITY (South Korea) ---
const univ_kyungheeuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "KYUNG HEE UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "http://club.khu.ac.kr/ciss",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+82-2-961-0081, +82-2-961-0082",
      "email": "ciss@khu.ac.kr",
      "address": "Seoul Campus, Language Institute"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Graduated from top 500 University (QS World Rankings) OR"
    },
    {
      "name": "Graduated from department included in top 300 (QS Rankings by Subject) OR"
    },
    {
      "name": "Graduated from top 100 (QS Asian University Rankings)"
    },
    {
      "name": "Personal Statement and Study Plan (research interests, career goals)"
    },
    {
      "name": "2\u20133 Recommendation Letters: From academic supervisors, professors, research advisors"
    },
    {
      "name": "Curriculum Vitae/Resume"
    },
    {
      "name": "Bachelor\u2019s degree diploma (or Master\u2019s for PhD applicants)"
    },
    {
      "name": "Official Transcripts: From all studies; English translation if necessary"
    },
    {
      "name": "Statement of Financial Resources: ~USD 15,000\u201320,000 annually documented (bank statements or sponsorship letter)"
    },
    {
      "name": "Apostille or Consular Authentication: May be required for original degree documents"
    },
    {
      "name": "Application Opens: Varies"
    },
    {
      "name": "Application Deadline: December 16, 2025 (17:00 KST)"
    },
    {
      "name": "Document Submission Deadline: December 16, 2025"
    },
    {
      "name": "Orientation: February 23, 2026"
    },
    {
      "name": "Semester Dates: March to June 2026"
    },
    {
      "name": "Application Opens: Varies"
    },
    {
      "name": "Application Deadline: June 18, 2026"
    },
    {
      "name": "Orientation: August 25, 2026"
    },
    {
      "name": "Semester Dates: September to December 2026"
    },
    {
      "name": "Spring 2026: Typical application September\u2013October 2025; varies by department"
    },
    {
      "name": "Fall 2026: Typical application February\u2013May 2026; varies by department"
    },
    {
      "name": "Specific deadlines available from individual graduate programs"
    },
    {
      "name": "Spring Nomination Deadline: October 30th"
    },
    {
      "name": "Spring Application Deadline: November 30th"
    },
    {
      "name": "Fall Nomination Deadline: April 30th"
    },
    {
      "name": "Fall Application Deadline: May 30th"
    },
    {
      "name": "Exchange students: 1 semester to 1 academic year (2 semesters)"
    },
    {
      "name": "Undergraduate & Postgraduate International: KRW 130,000 (approximately USD 100)"
    },
    {
      "name": "Non-refundable; payment via online credit card or bank transfer"
    },
    {
      "name": "Eligibility: Currently residing in Korea with refugee status (or equivalent); Nationality of DAC\u2019s ODA beneficiary countries (Least Developed Countries, Low Income Countries, Lower Middle Income Countries & Territories)"
    },
    {
      "name": "Coverage: Full tuition for first semester; renewable for up to 4 years if conditions maintained"
    },
    {
      "name": "Freshmen students"
    },
    {
      "name": "Eligibility: Students from countries not enrolled in KHU based on higher education statistics"
    },
    {
      "name": "Coverage: Full tuition first semester; full tuition up to 1 year if complete 12 credits at first semester and maintain GPA 2.5+"
    },
    {
      "name": "Freshmen or transfer students"
    },
    {
      "name": "Eligibility: Highest overall score in each college (minimum 90 points required)"
    },
    {
      "name": "Coverage: Full tuition for first semester"
    },
    {
      "name": "Freshmen or transfer students"
    },
    {
      "name": "Eligibility: TOPIK Level 6 certification by designated document submission period"
    },
    {
      "name": "Coverage: Full tuition for first semester"
    },
    {
      "name": "Eligibility: TOPIK Level 5 certification by designated document submission period"
    },
    {
      "name": "Coverage: Half of tuition for first semester"
    },
    {
      "name": "Eligibility: Students recommended by dean of KHU-affiliated Korean Language institutes; completed course with all recommendation standards met"
    },
    {
      "name": "Coverage: Full tuition for first semester (Seoul Campus)"
    },
    {
      "name": "Eligibility: Top 50% admission evaluation score; completed 4+ semesters at ILE"
    },
    {
      "name": "Coverage: Full tuition for first semester (Global Campus)"
    },
    {
      "name": "Eligibility: Department of Korean major; top 50% admission evaluation score"
    },
    {
      "name": "Coverage: Full tuition for first semester"
    },
    {
      "name": "Eligibility: Colleges of Engineering, Electronics & Engineering, Software Convergence; top 50% admission evaluation score"
    },
    {
      "name": "Coverage: Full tuition first semester; full tuition for 4 years if maintain GPA 3.5+"
    },
    {
      "name": "Period: September 2022 \u2013 August 2026"
    },
    {
      "name": "Eligibility: College of International Studies; top 50% admission evaluation score"
    },
    {
      "name": "Coverage: Full tuition for first semester (Global Campus)"
    },
    {
      "name": "Freshmen or transfer students"
    },
    {
      "name": "Eligibility: Sibling enrolled in undergraduate school (attendance or leave of absence)"
    },
    {
      "name": "Coverage: Half of tuition for first semester (not full waiver/exemption)"
    },
    {
      "name": "Eligibility: Both parents graduates of KHU undergraduate school"
    },
    {
      "name": "Coverage: Half of tuition for first semester (not full waiver/exemption)"
    },
    {
      "name": "Eligibility: Honour students; minimum 3.0 GPA from previous semester"
    },
    {
      "name": "Coverage: Graded payment"
    },
    {
      "name": "For enrolled students"
    },
    {
      "name": "Eligibility: GPA 2.0+; completed 12+ credit points; did not receive Admission Scholarship B/C; holds TOPIK Level"
    },
    {
      "name": "Coverage: KRW 300,000 per semester; maximum 3 semesters"
    },
    {
      "name": "For enrolled students"
    },
    {
      "name": "Eligibility: Undergraduate and postgraduate students from India (GKS-participating country)"
    },
    {
      "name": "Coverage: Full tuition exemption; living allowance KRW 900,000\u20131,300,000/month; airfare; Korean language training fee; medical insurance"
    },
    {
      "name": "Application: Apply through Korean Embassy in India (Embassy Track) or KHU University Track"
    },
    {
      "name": "Automatic consideration: Merit-based scholarships reviewed during main admission process"
    },
    {
      "name": "No separate application required for university scholarships"
    },
    {
      "name": "GKS: Separate application through Korean Embassy in India"
    },
    {
      "name": "Scholarship offers announced along with acceptance results"
    },
    {
      "name": "Maximum one scholarship per student (highest value awarded if selected for multiple)"
    }
  ],
  "internships": {
    "part_time_work": "Research Internships: Graduate students participate in faculty-led research laboratories",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "International Student Support: CISS (Center for International Students and Scholars); orientation programs; cultural exchange activities; buddy system",
    "housing": "CISS (Center for International Students and Scholars) team provides emergency support; available for visa-related emergencies, medical consultations, housing issues"
  },
  "security": {
    "detail": "English-speaking staff available during office hours and emergency contacts provided"
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

addPrograms(univ_kyungheeuniversitysouthkorea, "KYUNG HEE UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Hotel Management / Hospitality Management",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Studies / Global Korean Studies",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Hotel & Tourism Management",
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master of International Studies / International Relations",
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
    "name": "Hotel Management / Hospitality Management : Bachelor of Hospitality Management",
    "faculty": "College of Hotel & Tourism Management / School of Hospitality Management",
    "duration_years": 4.0,
    "annual_fee_cad": 4000,
    "total_fee_cad": 16000,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong English background beneficial"
    ],
    "entry_roles": [
      "Hotel manager",
      "F&B manager",
      "event planner",
      "front desk manager",
      "housekeeping director",
      "tourism consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "College of Software / Department of Computer Engineering & Software Convergence",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "developer",
      "AI/ML engineer",
      "systems engineer",
      "cybersecurity analyst",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "College of Engineering / Department of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "College of Management / School of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 3800,
    "total_fee_cad": 15200,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "consultant",
      "manager",
      "finance analyst",
      "marketer",
      "HR specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "International Studies / Global Korean Studies : Bachelor of International Studies",
    "faculty": "College of International Studies / Global Campus",
    "duration_years": 4.0,
    "annual_fee_cad": 3800,
    "total_fee_cad": 15200,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specific",
      "international affairs or social sciences background beneficial"
    ],
    "entry_roles": [
      "International relations officer",
      "diplomat",
      "policy analyst",
      "NGO coordinator",
      "international business representative"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration (Global MBA)",
    "faculty": "Graduate School of Business / MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "finance manager",
      "CFO",
      "COO",
      "entrepreneur",
      "corporate director",
      "business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Hotel & Tourism Management : Master of Hotel & Tourism Management",
    "faculty": "Graduate School of Tourism / College of Hotel & Tourism Management",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Hotel/tourism/hospitality background preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Hotel general manager",
      "resort manager",
      "F&B manager",
      "event manager",
      "tourism director",
      "hospitality consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "Graduate School / College of Software / Department of Computer Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist",
      "systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "manufacturing"
    ],
    "entry_roles": [
      "Research engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "senior engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Studies : Master of International Studies",
    "faculty": "Graduate School / College of International Studies / Global Campus",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations analyst",
      "policy analyst",
      "NGO officer",
      "global affairs officer"
    ],
    "features": []
  }
]);

// --- KYUNGPOOK NATIONAL UNIVERSITY (South Korea) ---
const univ_kyungpooknationaluniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "KYUNGPOOK NATIONAL UNIVERSITY (South Korea)",
  "abbreviation": "KNU",
  "type": "university",
  "city": "Daegu",
  "province": "Daegu",
  "country": "South Korea",
  "campuses": [
    "Daegu"
  ],
  "website": "https://en.knu.ac.kr",
  "application_portal": "https://www.jinhakapply.com (for graduate admission); KNU website for undergraduate",
  "contacts": {
    "admissions": {
      "phone": "+82-53-950-6543 (Incoming Students)",
      "email": "sabroad@knu.ac.kr",
      "address": "Cheomseongin Student Futures Support Building 2F, 80 Daehak-ro, Buk-gu, Daegu 41566"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Top 7% of international students: 80% tuition discount"
    },
    {
      "name": "Top 30% of international students: 20% tuition discount"
    },
    {
      "name": "Merit-based scholarships based on academic performance in previous semester"
    },
    {
      "name": "Housing: Approximately 555,000 KRW per semester (~$420 USD)"
    },
    {
      "name": "Department-recommended students with excellent performance: 100% tuition waiver + dormitory support"
    },
    {
      "name": "Department-recommended students: 80% tuition waiver"
    },
    {
      "name": "Performance-based scholarships: 50% tuition waiver"
    },
    {
      "name": "GKS (Global Korea Scholarship): ~500 international student scholarships annually available"
    }
  ],
  "internships": {
    "part_time_work": "Internship during semester as part of global internship program",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing: Approximately 555,000 KRW per semester (~$420 USD)",
    "clubs": "Student Clubs & Activities: Yes"
  },
  "security": {
    "detail": "Security Infrastructure: Standard campus security systems implemented"
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

addPrograms(univ_kyungpooknationaluniversitysouthkorea, "KYUNGPOOK NATIONAL UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Science & Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Civil Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Food Science & Nutrition",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computer Science & Engineering (Master\u2019s/Doctoral)",
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
    "name": "Business Administration (MBA/Master\u2019s)",
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
    "name": "Mechanical Engineering (Master\u2019s/Doctoral)",
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
    "name": "Civil Engineering (Master\u2019s)",
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
    "name": "Food Science & Biotechnology (Master\u2019s)",
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
    "name": "Computer Science & Engineering (Bachelor of Science)",
    "faculty": "School of Computer Science and Engineering, College of IT Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics preferred)"
    ],
    "entry_roles": [
      "Software Developer",
      "Data Scientist",
      "Systems Engineer",
      "AI/ML Engineer",
      "Robotics Engineer",
      "Cybersecurity Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (Bachelor of Commerce)",
    "faculty": "School of Business Administration, College of Business & Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [
      "Commerce or Social Sciences stream"
    ],
    "entry_roles": [
      "Management Consultant",
      "Financial Analyst",
      "HR Manager",
      "Marketing Manager",
      "Business Development Executive"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (Bachelor of Science)",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Automotive Engineer",
      "Manufacturing Engineer",
      "CAD Designer",
      "Robotics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Civil Engineering (Bachelor of Science)",
    "faculty": "Department of Civil Engineering, College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science stream (Physics, Chemistry, Mathematics)"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Structural Engineer",
      "Project Manager",
      "Infrastructure Consultant",
      "Site Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Food Science & Nutrition (Bachelor of Science)",
    "faculty": "School of Food Science, College of Agriculture and Life Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Science stream (Chemistry, Biology preferred)"
    ],
    "entry_roles": [
      "Food Scientist",
      "Quality Assurance Manager",
      "Product Developer",
      "Nutritionist",
      "Food Safety Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
    "faculty": "School of Computer Science and Engineering Graduate School, College of IT Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Computer Science",
      "Engineering",
      "Information Technology or closely related discipline"
    ],
    "entry_roles": [
      "Software Engineer",
      "AI/ML Researcher",
      "Systems Architect",
      "Data Scientist",
      "Robotics Engineer",
      "Cybersecurity Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "School of Business Administration Graduate School, College of Business & Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Economics",
      "Commerce",
      "Management preferred",
      "other backgrounds considered with prerequisites"
    ],
    "entry_roles": [
      "Management Consultant",
      "Strategy Manager",
      "Finance Manager",
      "Corporate Executive",
      "Business Development Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering Graduate School, College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mechanical Engineering",
      "Automotive Engineering",
      "Aerospace Engineering",
      "or related discipline required"
    ],
    "entry_roles": [
      "Mechanical Design Engineer",
      "Automotive Engineer",
      "Manufacturing Engineer",
      "Thermal Systems Engineer",
      "Robotics Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Civil Engineering",
    "faculty": "Department of Civil Engineering Graduate School, College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil Engineering",
      "Structural Engineering",
      "Construction Engineering required"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Structural Engineer",
      "Project Manager",
      "Infrastructure Consultant",
      "Construction Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Food Science & Biotechnology",
    "faculty": "School of Food Science & Biotechnology Graduate School, College of Agriculture and Life Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Food Science",
      "Biotechnology",
      "Agricultural Chemistry",
      "or Applied Biology required"
    ],
    "entry_roles": [
      "Food Scientist",
      "Biotechnologist",
      "Quality Assurance Manager",
      "Product Developer",
      "Food Safety Officer",
      "Research Scientist"
    ],
    "features": []
  }
]);

// --- POSTECH (South Korea) ---
const univ_postechsouthkorea = db.institutions.insertOne(inst({
  "name": "POSTECH (South Korea)",
  "abbreviation": "POHANG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
  "type": "university",
  "city": "Pohang",
  "province": "North Gyeongsang",
  "country": "South Korea",
  "campuses": [
    "Pohang"
  ],
  "website": "https://adm-g.postech.ac.kr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+82-54-279-3684, +82-54-279-3685",
      "email": "iao@postech.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Tuition Scholarship: Full tuition fee waiver (100%)"
    },
    {
      "name": "Living Allowance: KRW 500,000 per month (including vacation periods)"
    },
    {
      "name": "Pathfinder Voucher: Total KRW 10,000,000 learning voucher provided (KRW 2,500,000/year, 4-year coverage)"
    },
    {
      "name": "Arrival Scholarship: Actual cost of round-trip airfare and domestic transportation expense covered"
    },
    {
      "name": "Korean Proficiency Scholarship: KRW 300,000 (for International Admissions I students studying Korean)"
    },
    {
      "name": "On-Campus Housing: Guaranteed placement in DICE (Dormitory for International Cultural Exchange) with housing fee covered"
    },
    {
      "name": "Eligibility: All admitted international undergraduate students (no minimum GPA requirement for initial support)"
    },
    {
      "name": "Eligibility: Undergraduate and graduate international students from India (eligible country)"
    },
    {
      "name": "Coverage: Airfare, language training costs, tuition waiver, study allowances (KRW 900,000\u20131,300,000/month depending on level)"
    },
    {
      "name": "Duration: Up to 8 semesters (undergraduate); 4\u20136 semesters (postgraduate)"
    },
    {
      "name": "Application Tracks: Embassy Track (apply through Korean Embassy in India) OR University Track (apply through POSTECH)"
    },
    {
      "name": "Indian quota: 78 students (50 University Track, 28 Embassy Track)"
    },
    {
      "name": "Tuition Scholarship: Full tuition fee waiver (100%)"
    },
    {
      "name": "Monthly Living Allowance (Master\u2019s): KRW 570,500/month"
    },
    {
      "name": "Monthly Living Allowance (PhD): KRW 1,047,000/month"
    },
    {
      "name": "On-Campus Housing: Fully covered in POSTECH dormitory"
    },
    {
      "name": "Teaching/Research Assistantship: Available as additional funding source; students work in labs or assist with teaching"
    },
    {
      "name": "Eligibility: Asian students (including Indian students) in Master\u2019s and PhD programs"
    },
    {
      "name": "Coverage: Full tuition + KRW 1,000,000+/month living stipend (higher than standard POSTECH scholarship)"
    },
    {
      "name": "Competitive selection; exceptional candidates prioritised"
    },
    {
      "name": "One-time grant provided to new international students for initial settlement support"
    },
    {
      "name": "Automatic consideration: All admitted international students automatically eligible for POSTECH scholarships (no separate application required)"
    },
    {
      "name": "GKS: Separate application through Korean Embassy in India or POSTECH University Track"
    },
    {
      "name": "Continuous support criteria: Must maintain academic standing; GPA requirement for continued scholarship eligibility"
    }
  ],
  "internships": {
    "part_time_work": "DICE (Dormitory for International Cultural Exchange): Primary international student dormitory; all international students guaranteed placement unless otherwise requested",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "housing": "ISSS (International Student & Scholar Services) team provides immediate support; available for visa-related emergencies, medical consultations, housing issues",
    "clubs": "International Student Support: POSCO International Center (housing ISSS); orientation programs; cultural exchange activities; international student clubs; English-speaking support staff"
  },
  "security": {
    "detail": "International Student Support (24/7): ISSS office provides emergency guidance and support; +82-54-279-3684, +82-54-279-3685"
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

addPrograms(univ_postechsouthkorea, "POSTECH (South Korea)", [
  {
    "level": "UG",
    "name": "Bachelor of Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Materials Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Physics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Electrical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master-PhD Integrated Program (Engineering)",
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
    "name": "Master of Materials Science and Engineering",
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
    "name": "Master of Physics (or Life Sciences)",
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
    "name": "Bachelor of Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "Individual department office for specific course information",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Computer science background beneficial but not mandatory"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML engineer",
      "research scientist",
      "systems architect",
      "data scientist",
      "cybersecurity analyst",
      "embedded systems engineer",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "School of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer",
      "robotics engineer",
      "project engineer",
      "thermal engineer",
      "production engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Materials Science and Engineering : Bachelor of Materials Science and Engineering",
    "faculty": "School of Materials Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Materials engineer",
      "research scientist",
      "process engineer",
      "quality engineer",
      "product development engineer",
      "metallurgist",
      "nanotechnology engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Physics : Bachelor of Physics",
    "faculty": "Department of Physics",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "postdoctoral researcher",
      "research scientist",
      "university lecturer",
      "scientific analyst",
      "data scientist",
      "systems engineer",
      "technology consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Electrical Engineering : Bachelor of Electrical Engineering",
    "faculty": "School of Electrical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics essential",
      "Electronics background beneficial"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "telecommunications engineer",
      "semiconductor engineer",
      "control systems engineer",
      "project engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "School of Computer Science and Engineering (ECSE) / Graduate Program",
    "duration_years": 2.0,
    "annual_fee_cad": 11000,
    "total_fee_cad": 22000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming",
      "discrete mathematics",
      "systems",
      "CS-related coursework documentation required"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "AI engineer",
      "data scientist",
      "research scientist",
      "systems architect",
      "cybersecurity engineer",
      "IT consultant",
      "startup CTO",
      "research scientist at tech companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "School of Mechanical Engineering / Graduate Program",
    "duration_years": 2.0,
    "annual_fee_cad": 11000,
    "total_fee_cad": 22000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "materials science",
      "manufacturing",
      "transcript in relevant area required"
    ],
    "entry_roles": [
      "Research engineer",
      "mechanical design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "senior engineer",
      "project manager",
      "automotive engineer",
      "energy systems engineer",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master-PhD Integrated Program (Engineering) : Master-PhD Integrated Program \u2014 Engineering",
    "faculty": "Various Engineering departments (Mechanical, Electrical, Materials, Chemical, Environmental, Civil, etc.)",
    "duration_years": 2.0,
    "annual_fee_cad": 11000,
    "total_fee_cad": 22000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Materials Science and Engineering : Master of Materials Science and Engineering",
    "faculty": "School of Materials Science and Engineering / Graduate Program",
    "duration_years": 2.0,
    "annual_fee_cad": 11000,
    "total_fee_cad": 22000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Materials science",
      "materials engineering",
      "chemistry",
      "or physics background preferred",
      "strong quantitative foundation required"
    ],
    "entry_roles": [
      "Materials engineer",
      "research scientist",
      "process engineer",
      "quality engineer",
      "product development engineer",
      "metallurgist",
      "nanotechnology engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Physics : Master of Physics",
    "faculty": "Department of Physics / Graduate Program",
    "duration_years": 2.0,
    "annual_fee_cad": 11000,
    "total_fee_cad": 22000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in classical mechanics",
      "quantum mechanics",
      "electromagnetism",
      "thermodynamics",
      "advanced coursework in physics required"
    ],
    "entry_roles": [
      "Physicist",
      "postdoctoral researcher",
      "research scientist",
      "university lecturer",
      "scientific analyst",
      "data scientist",
      "systems engineer",
      "technology consultant",
      "research institute scientist"
    ],
    "features": []
  }
]);

// --- PUSAN NATIONAL UNIVERSITY (South Korea) ---
const univ_pusannationaluniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "PUSAN NATIONAL UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Busan",
  "province": "Busan",
  "country": "South Korea",
  "campuses": [
    "Busan"
  ],
  "website": "http://dorm.pusan.ac.kr",
  "application_portal": "go.pusan.ac.kr",
  "contacts": {
    "admissions": {
      "phone": "+82-51-510-1663; +82-51-510-1664",
      "email": "idorm@pusan.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: TOPIK Level 4+ OR excellent English proficiency (TOEFL 550+, IELTS 5.5+, TOEIC 675+)"
    },
    {
      "name": "Coverage: 30\u2013100% tuition fee waiver for first semester"
    },
    {
      "name": "Automatic consideration: No separate application required"
    },
    {
      "name": "TOPIK Level 6: Full Tuition waiver"
    },
    {
      "name": "TOPIK Level 5: Full Tuition II (approximately 70\u201380% tuition)"
    },
    {
      "name": "TOPIK Level 4: Full Tuition I (approximately 50% tuition)"
    },
    {
      "name": "Duration: First semester; renewable each semester"
    },
    {
      "name": "Eligibility: GPA 2.5+/4.5; minimum 12 credits completed in previous semester; excellent Korean or English language skills"
    },
    {
      "name": "Coverage: 30%, 70%, or 100% tuition fee waiver (renewable each semester)"
    },
    {
      "name": "Maintenance: Minimum GPA 2.5+/4.5 required"
    },
    {
      "name": "Eligibility: TOPIK Level 4+ achieved after admission; minimum GPA 2.5+/4.5"
    },
    {
      "name": "Coverage: KRW 400,000 per level achievement (Levels 4\u20136 = maximum KRW 1,200,000 total)"
    },
    {
      "name": "Eligibility: Incoming postgraduate students"
    },
    {
      "name": "Coverage: Partial to full tuition waivers for first semester"
    },
    {
      "name": "Automatic consideration: No separate application required"
    },
    {
      "name": "Type 2 (Language-Based): TOPIK Level 4 (Korean) OR TOEFL 550, IELTS 5.5, TOEIC 675 (English)"
    },
    {
      "name": "Eligibility: Excellent academic performance"
    },
    {
      "name": "Coverage: Partial tuition fee reduction"
    },
    {
      "name": "Automatic application: Applied next semester; renewable for entire program duration"
    },
    {
      "name": "Coverage: Approximately KRW 400,000\u2013600,000 per level increase"
    },
    {
      "name": "Eligibility: Graduate students"
    },
    {
      "name": "Coverage: Stipend + tuition reduction"
    },
    {
      "name": "Automatic merit-based consideration: During main admission process (no separate application)"
    },
    {
      "name": "TOPIK Proficiency: Automatic eligibility once TOPIK Level 4+ achieved"
    }
  ],
  "internships": {
    "part_time_work": "Internship/Placement Opportunities",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Diverse student clubs available (academic, cultural, volunteer, sports)",
    "housing": "On-Campus Housing (Dormitories):"
  },
  "security": {
    "detail": "Dormitory staff: 24/7 emergency assistance"
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

addPrograms(univ_pusannationaluniversitysouthkorea, "PUSAN NATIONAL UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Computer Science and Engineering",
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
    "name": "Master of Science - Mechanical Engineering",
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
    "name": "Master of Science - Electrical Engineering",
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
    "name": "Master of Arts - International Studies (GSIS)",
    "faculty": "Department of Global Studies (DGS) / College of Humanities",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "humanities/international studies background beneficial"
    ],
    "entry_roles": [
      "International relations officer",
      "diplomat",
      "NGO specialist",
      "policy analyst",
      "global affairs manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science and Engineering : Bachelor of Science - Computer Science and Engineering",
    "faculty": "College of Information and BioMedical Engineering / School of Computer Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "AI/ML engineer",
      "systems engineer",
      "network engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "School of Business / Department of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "finance analyst",
      "marketing manager",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Science - Mechanical Engineering",
    "faculty": "College of Engineering / Department of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering : Bachelor of Science - Electrical Engineering",
    "faculty": "College of Engineering / Department of Electrical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Computer Science and Engineering : Master of Science - Computer Science and Engineering",
    "faculty": "Graduate School of Engineering / College of Information and BioMedical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration",
    "faculty": "Graduate School of Business / School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "economics",
      "or any discipline acceptable"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "finance manager",
      "corporate strategist",
      "operations director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Mechanical Engineering : Master of Science - Mechanical Engineering",
    "faculty": "Graduate School of Engineering / Department of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "manufacturing"
    ],
    "entry_roles": [
      "Research engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Electrical Engineering : Master of Science - Electrical Engineering",
    "faculty": "Graduate School of Engineering / Department of Electrical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "control systems"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts - International Studies : Master of Arts - International Studies (GSIS)",
    "faculty": "Graduate School of International Studies (GSIS)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science",
      "economics",
      "or related discipline preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations officer",
      "policy analyst",
      "NGO executive",
      "government official",
      "researcher"
    ],
    "features": []
  }
]);

// --- SEJONG UNIVERSITY (South Korea) ---
const univ_sejonguniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "SEJONG UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "https://sos.sejong.ac.kr (Application Portal)",
  "application_portal": "https://sos.sejong.ac.kr",
  "contacts": {
    "admissions": {
      "phone": "+82-2-3408-2620",
      "email": "sos@sejong.sc.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: International students based on admission evaluation (top-tier students)"
    },
    {
      "name": "Coverage: Full tuition fee waiver + KRW 2,000,000 living allowance (total monthly support)"
    },
    {
      "name": "Renewable: Continues with good academic standing"
    },
    {
      "name": "Eligibility: Outstanding students in admission evaluation"
    },
    {
      "name": "Coverage: 100% tuition for first semester; renewable based on GPA maintenance (typically 2.8+ required)"
    },
    {
      "name": "Additional: May include TOPIK support"
    },
    {
      "name": "Eligibility: Honour students in each department; valid TOPIK Level 4+; minimum GPA 2.8+ in previous semester"
    },
    {
      "name": "Coverage: 35% of tuition"
    },
    {
      "name": "Renewal: Each semester based on GPA"
    },
    {
      "name": "TOPIK Level 6: Full tuition waiver"
    },
    {
      "name": "TOPIK Level 5: 50% tuition reduction"
    },
    {
      "name": "TOPIK Level 4: Partial support"
    },
    {
      "name": "TOPIK Encouragement Scholarship: KRW 300,000 per semester; maximum 3 semesters"
    },
    {
      "name": "Honor Student Scholarship: Varies based on GPA"
    },
    {
      "name": "Coverage: Admission fee waiver + tuition reduction (30\u2013100% depending on school and performance)"
    },
    {
      "name": "Example: Graduate School of Public Policy: Admission fee exemption + 50% tuition; or Admission fee + 30% tuition"
    },
    {
      "name": "Coverage: 100% admission fee waiver + 30% tuition fee reduction for first semester"
    },
    {
      "name": "Eligibility: Undergraduate and postgraduate students from India (GKS-participating country)"
    },
    {
      "name": "Coverage: Full tuition exemption; living allowance KRW 900,000\u20131,300,000/month; airfare; Korean language training fee; medical insurance"
    },
    {
      "name": "Application: Apply through Korean Embassy in India (Embassy Track) or Sejong University Track"
    },
    {
      "name": "Eligibility: Select international students; specific criteria"
    },
    {
      "name": "Coverage: Full tuition + living allowance"
    },
    {
      "name": "Automatic consideration: Merit-based scholarships reviewed during main admission"
    },
    {
      "name": "No separate application required for university scholarships"
    },
    {
      "name": "GKS: Separate application through Korean Embassy in India"
    }
  ],
  "internships": {
    "part_time_work": "Career resources and placement support",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Diverse student clubs available (academic, cultural, volunteer, sports, arts)",
    "housing": "English-speaking staff available for visa-related emergencies, medical consultations, housing issues"
  },
  "security": {
    "detail": "Emergency contact: +82-2-3408-2620; sos@sejong.sc.kr"
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

addPrograms(univ_sejonguniversitysouthkorea, "SEJONG UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Science and Engineering / Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electronics and Electrical Engineering / AI Convergence",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master of Electrical Engineering",
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
    "name": "Master of Business (General)",
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
    "name": "Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "College of AI Convergence / Computer Sciences and Engineering Department",
    "duration_years": 4.0,
    "annual_fee_cad": 6186,
    "total_fee_cad": 24744,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "developer",
      "systems analyst",
      "network engineer",
      "IT consultant",
      "AI/ML engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business is AACSB-accredited",
    "duration_years": 4.0,
    "annual_fee_cad": 4000,
    "total_fee_cad": 16000,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "consultant",
      "manager",
      "finance analyst",
      "marketing specialist",
      "HR specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "College of Engineering / Mechanical Engineering Department",
    "duration_years": 4.0,
    "annual_fee_cad": 6186,
    "total_fee_cad": 24744,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer",
      "thermal engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering : Bachelor of Electrical Engineering",
    "faculty": "College of Engineering / Electrical Engineering Department",
    "duration_years": 4.0,
    "annual_fee_cad": 6186,
    "total_fee_cad": 24744,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "telecommunications engineer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electronics and Electrical Engineering / AI Convergence : Bachelor of Semiconductor Systems Engineering / AI Convergence",
    "faculty": "College of AI Convergence / Electronics Engineering Department",
    "duration_years": 4.0,
    "annual_fee_cad": 6186,
    "total_fee_cad": 24744,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "AI engineer",
      "semiconductor engineer",
      "electronics engineer",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration",
    "faculty": "Graduate School of Business / MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "finance manager",
      "CFO",
      "COO",
      "entrepreneur",
      "corporate director",
      "business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "Graduate School / College of AI Convergence / Computer Sciences and Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist",
      "systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "Graduate School / College of Engineering / Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "manufacturing"
    ],
    "entry_roles": [
      "Research engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "senior engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Electrical Engineering : Master of Electrical Engineering",
    "faculty": "Graduate School / College of Engineering / Electrical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "control systems"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "R&D engineer",
      "senior engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business : Master of Business / Graduate School of Business",
    "faculty": "Graduate School of Business / General Business Master\u2019s Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline acceptable",
      "business background beneficial"
    ],
    "entry_roles": [
      "Business consultant",
      "analyst",
      "manager",
      "corporate strategist"
    ],
    "features": []
  }
]);

// --- SEOUL NATIONAL UNIVERSITY (South Korea) ---
const univ_seoulnationaluniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "SEOUL NATIONAL UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "admission.snu.ac.kr",
  "application_portal": "en.snu.ac.kr/admission",
  "contacts": {
    "admissions": {
      "address": "1 Gwanak-ro, Gwanak-gu, Seoul 08826, South Korea",
      "phone": "+82-2-880-2519 (International Scholarships)",
      "email": "admission@snu.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Location: Building 152, Gwanak Campus"
    },
    {
      "name": "Phone: +82-2-880-4447 (Visa & Immigration Support)"
    },
    {
      "name": "Email (Visa Support): i-office@snu.ac.kr"
    },
    {
      "name": "College of Business Administration: cba.snu.ac.kr"
    },
    {
      "name": "Department of Mechanical Engineering: me.snu.ac.kr"
    },
    {
      "name": "Computer Science and Engineering: Contact via main admissions"
    },
    {
      "name": "Graduate School of Business (MBA): +82-2-880-2551, mba@snu.ac.kr"
    },
    {
      "name": "Academic Requirement: High school diploma or equivalent; completion of entire elementary to high school curriculum outside Korea (not homeschooling, GED, or cyber learning)"
    },
    {
      "name": "Citizenship: Applicant and both parents must be non-Korean nationals (Type I admission) OR overseas Korean completing entire curriculum abroad (Type II admission)"
    },
    {
      "name": "English Language Test: IELTS 6.0 overall (no band below 6.0); TOEFL iBT 80 (minimum 21 in writing); TEPS 269 or higher; OR TOPIK 4+ (for Korean-taught programs); OR education conducted entirely in English language"
    },
    {
      "name": "Additional Requirements: Personal statement and study plan (mandatory from Spring 2026 onwards)"
    },
    {
      "name": "Recommendation Letter: One mandatory recommendation letter from high school teacher/referee (submitted via official SNU platform)"
    },
    {
      "name": "Standardized Tests (Optional): SAT, IB, A-Level, GCE, or similar scores strengthen application"
    },
    {
      "name": "Academic Requirement: Bachelor\u2019s degree or equivalent from recognised institution; minimum GPA 2.5/4.0 (or equivalent 2.7/4.3) for exchange students; at least one semester\u2019s grades for graduate applicants"
    },
    {
      "name": "English Language Test: IELTS 6.0 overall; TOEFL iBT 80 (minimum 21 in writing for MBA 88+); TEPS 560 or higher; OR TOPIK Level 5+ for Korean-taught programs"
    },
    {
      "name": "MBA-Specific: GMAT or GRE score highly recommended but optional; bachelor\u2019s degree in any discipline accepted"
    },
    {
      "name": "Additional Requirements: Personal statement, study plan, and recommendation letters required"
    },
    {
      "name": "Work Experience: Preferred but not mandatory; beneficial for MBA applications"
    },
    {
      "name": "Application Period: July 7\u201321, 2025 (International Admissions I)"
    },
    {
      "name": "Portfolio Submission (if required): July 7\u201311, 2025"
    },
    {
      "name": "Online Interview (Admissions II, some departments): September 19, 2025"
    },
    {
      "name": "Preliminary Results: October 16, 2025, 5:00 PM"
    },
    {
      "name": "Original Document Submission: October 16\u201331, 2025, 5:00 PM"
    },
    {
      "name": "Final Admission Results: November 21, 2025, 5:00 PM"
    },
    {
      "name": "Registration & Korean Language Proficiency Test (if applicable): December 2025 \u2013 February 2026"
    },
    {
      "name": "Classes Begin: Early March 2026"
    },
    {
      "name": "Undergraduate International: KRW 70,000"
    },
    {
      "name": "Postgraduate International: KRW 90,000"
    },
    {
      "name": "Payment via online system during application submission; non-refundable"
    },
    {
      "name": "Eligibility: All international undergraduate applicants to SNU"
    },
    {
      "name": "Coverage: Full tuition exemption for 8 semesters; living expenses KRW 1,133,330 per month"
    },
    {
      "name": "Additional: Monthly allowance includes textbooks, insurance, TOPIK scholarships, etc."
    },
    {
      "name": "Application: Submit via Korean embassy in India (first selection) \u2192 National Institute for International Education (final selection)"
    },
    {
      "name": "Eligibility: Faculty members of major universities in developing countries (India eligible) without PhD; newly admitted PhD students only"
    },
    {
      "name": "Coverage: Full tuition for maximum 6 semesters; living expenses KRW 1,500,000\u20132,000,000 per month for 3\u20134 years; round-trip economy airfare; Korean language evening classes during regular semesters; National Health Insurance reimbursement"
    },
    {
      "name": "Selection: Interview required after admission"
    },
    {
      "name": "Eligibility: Non-Korean graduates from eligible countries; applied/accepted to GSFS-participating college/school (list updated each semester)"
    },
    {
      "name": "Coverage: Full tuition exemption for maximum 4 semesters; living expenses minimum KRW 500,000 per month (varies by major)"
    },
    {
      "name": "Eligibility: Overseas Korean students (undergraduate & postgraduate)"
    },
    {
      "name": "Coverage (Undergraduate): Full tuition for maximum 8 semesters; living expenses KRW 900,000 per month, 8 semesters maximum; round-trip economy airfare; Korean language training fee exemption (6 months); private medical insurance"
    },
    {
      "name": "Coverage (Postgraduate): Full tuition for maximum 4 semesters; living expenses KRW 900,000 per month, 4 semesters maximum; round-trip airfare; language training fee waived"
    },
    {
      "name": "Coverage: Tuition fee reduction; living expenses; accommodation; airfare; additional academic support funding"
    },
    {
      "name": "Awarded based on academic merit after enrollment"
    },
    {
      "name": "Automatic consideration for merit-based scholarships during admission application"
    },
    {
      "name": "No separate scholarship application required"
    },
    {
      "name": "GKS: Apply directly to Korean embassy in India before university admission deadline"
    }
  ],
  "internships": {
    "part_time_work": "Postgraduate Research: Thesis research, laboratory projects, and academic internships as part of master\u2019s/PhD programs",
    "coop_available": true,
    "employment_rate_percent": 80
  },
  "campus_life": {
    "housing": "Cost: KRW 350,000\u2013600,000 per month depending on building and room type (undergraduate); variable for graduate housing",
    "clubs": "Center for Campus Life & Culture: Programs, events, cultural activities"
  },
  "security": {
    "detail": "Dormitory Emergency: Call Resident Advisor or Joint Work Station; +82-2-881-9043 (Joint Work Station); +82-2-881-9052 (Fire Prevention)"
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

addPrograms(univ_seoulnationaluniversitysouthkorea, "SEOUL NATIONAL UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Electrical and Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Economics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-time)",
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master of Economics",
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
    "name": "Master of International Studies",
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
    "name": "Bachelor of Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business Administration",
    "duration_years": 4.0,
    "annual_fee_cad": 2643,
    "total_fee_cad": 10572,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically mandated",
      "Mathematics",
      "English recommended"
    ],
    "entry_roles": [
      "Business analyst",
      "accountant",
      "financial analyst",
      "manager",
      "entrepreneur",
      "marketing specialist",
      "human resources officer",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Mechanical Engineering : Bachelor of Engineering \u2014 Mechanical Engineering",
    "faculty": "Contact via College of Engineering (+82-2-880-7154 main line)",
    "duration_years": 4.0,
    "annual_fee_cad": 3206,
    "total_fee_cad": 12824,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Study score 20+ equivalent)",
      "Physics strongly recommended",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Graduate mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "production engineer",
      "R&D engineer",
      "project engineer",
      "automotive engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "School of Computer Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 3206,
    "total_fee_cad": 12824,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Study score 20+ equivalent)",
      "Physics recommended"
    ],
    "entry_roles": [
      "Software engineer",
      "software developer",
      "AI/ML engineer",
      "systems architect",
      "data scientist",
      "cybersecurity analyst",
      "IT consultant",
      "web developer",
      "embedded systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Electrical and Computer Engineering : Bachelor of Electrical and Computer Engineering",
    "faculty": "School of Electrical and Computer Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 3206,
    "total_fee_cad": 12824,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Study score 20+)",
      "Physics strongly required"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "control systems engineer",
      "electronics engineer",
      "semiconductor engineer",
      "telecommunications engineer",
      "project engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Economics : Bachelor of Economics",
    "faculty": "College of Social Sciences \u2014 Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 2643,
    "total_fee_cad": 10572,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically mandated",
      "Mathematics recommended"
    ],
    "entry_roles": [
      "Economist",
      "policy analyst",
      "research analyst",
      "financial analyst",
      "consultant",
      "international development officer",
      "government economist",
      "investment analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration : Master of Business Administration (Full-Time)",
    "faculty": "Graduate School of Business (GSOB), College of Business Administration",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific subject requirement",
      "all disciplines welcome"
    ],
    "entry_roles": [
      "MBA graduate",
      "management consultant",
      "strategic business manager",
      "CFO/COO",
      "finance director",
      "entrepreneurship manager",
      "corporate strategist",
      "business development officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "School of Computer Science and Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 7994,
    "total_fee_cad": 15988,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong background in algorithms",
      "data structures",
      "programming",
      "discrete mathematics",
      "non-CS graduates may require foundation courses"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML researcher",
      "systems architect",
      "research scientist",
      "data scientist",
      "cybersecurity engineer",
      "software architect",
      "IT consultant",
      "developer at tech companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 3270,
    "total_fee_cad": 6540,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "materials",
      "manufacturing",
      "relevant coursework in specialization area"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "research engineer",
      "manufacturing engineer",
      "R&D engineer",
      "project manager",
      "automotive engineer",
      "aerospace engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Economics : Master of Economics",
    "faculty": "Department of Economics, Graduate School of Social Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in microeconomics",
      "macroeconomics",
      "econometrics",
      "mathematics",
      "statistics"
    ],
    "entry_roles": [
      "Economist",
      "policy analyst",
      "research economist",
      "financial analyst",
      "development specialist",
      "government economist",
      "academic researcher",
      "international development officer",
      "financial economist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Studies : Master of International Studies",
    "faculty": "Graduate School of International Studies or relevant college graduate program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Interest in international affairs",
      "diplomacy",
      "global politics",
      "regional studies",
      "coursework in humanities or social sciences beneficial"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations analyst",
      "policy advisor",
      "development specialist",
      "global affairs officer",
      "NGO officer",
      "international journalist",
      "academic researcher",
      "foreign affairs analyst",
      "UN/international organisation officer"
    ],
    "features": []
  }
]);

// --- SOGANG UNIVERSITY (South Korea) ---
const univ_soganguniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "SOGANG UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "https://gsis.sogang.ac.kr",
  "application_portal": "https://www.jinhakapply.com",
  "contacts": {
    "admissions": {
      "phone": "Contact via main admissions or GSIS office",
      "email": "goabroad@sogang.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: Outstanding international undergraduate students"
    },
    {
      "name": "Coverage: Full tuition waiver (100%) for 8 semesters"
    },
    {
      "name": "Competitive selection based on admission evaluation"
    },
    {
      "name": "Deadline: May 1, 2026"
    },
    {
      "name": "Coverage: 50\u2013100% tuition reduction based on merit"
    },
    {
      "name": "Automatic consideration during admission process"
    },
    {
      "name": "Renewable with good academic standing"
    },
    {
      "name": "Eligibility: Select international Master\u2019s and PhD students"
    },
    {
      "name": "Coverage: 100% tuition + admission fee waiver (8 semesters)"
    },
    {
      "name": "Competitive selection"
    },
    {
      "name": "Coverage: 50% tuition waiver (admission fees + 50% tuition)"
    },
    {
      "name": "Renewable based on academic performance"
    },
    {
      "name": "Coverage: Tuition reduction (amounts vary by program)"
    },
    {
      "name": "Always open application"
    },
    {
      "name": "Eligibility: Officially nominated exchange students"
    },
    {
      "name": "Coverage: KRW 900,000 (50% of dormitory fee)"
    },
    {
      "name": "Conditions: Must stay in Gonzaga Hall (on-campus dorm)"
    },
    {
      "name": "Deadline: Late October (Spring); Late April (Fall)"
    },
    {
      "name": "Exclusion: Cannot receive GKS, ASEM-DUO, JASSO, or other home country scholarships simultaneously"
    },
    {
      "name": "Eligibility: Graduate students"
    },
    {
      "name": "Coverage: 50\u2013100% tuition + stipend"
    },
    {
      "name": "Available through professor research grants and lab positions"
    },
    {
      "name": "Eligibility: Undergraduate and postgraduate students from India (GKS-participating country)"
    },
    {
      "name": "Coverage: Full tuition exemption; living allowance KRW 900,000\u20131,300,000/month; airfare; Korean language training; medical insurance"
    },
    {
      "name": "Application: Apply through Korean Embassy in India or Sogang University Track"
    },
    {
      "name": "Automatic consideration: Merit-based scholarships reviewed during main admission"
    },
    {
      "name": "No separate application required for university scholarships"
    },
    {
      "name": "GKS: Separate application through Korean Embassy in India"
    }
  ],
  "internships": {
    "part_time_work": "Internship/Placement Opportunities",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports & Recreation: Fitness centers, athletic clubs, recreational programs; gym facilities in Gonzaga Hall",
    "housing": "Housing Application: Online only via http://gonzaga.sogang.ac.kr/"
  },
  "security": {
    "detail": "Gonzaga Hall 24/7 security desk available for immediate assistance"
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

addPrograms(univ_soganguniversitysouthkorea, "SOGANG UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Computer Science and Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electronic Systems Engineering",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of International Studies (GSIS)",
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
    "name": "Master of Economics",
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
    "name": "Master of Media and Technology / Journalism",
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
    "name": "Computer Science and Engineering : Bachelor of Computer Science and Engineering",
    "faculty": "College of Engineering / Department of Computer Science and Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 6300,
    "total_fee_cad": 25200,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML engineer",
      "systems analyst",
      "network engineer",
      "data scientist",
      "embedded systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration : Bachelor of Business Administration",
    "faculty": "College of Business Administration / Faculty of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 5600,
    "total_fee_cad": 22400,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "consultant",
      "manager",
      "finance analyst",
      "marketing specialist",
      "HR specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics : Bachelor of Economics",
    "faculty": "College of Business Administration / Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 5600,
    "total_fee_cad": 22400,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "mathematics background beneficial"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "business analyst",
      "policy analyst",
      "consultant",
      "researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "College of Engineering / Department of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 6300,
    "total_fee_cad": 25200,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electronic Systems Engineering : Bachelor of Electronic Systems Engineering",
    "faculty": "College of Engineering / Department of Electronic Systems Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 6300,
    "total_fee_cad": 25200,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Electronics engineer",
      "systems engineer",
      "telecommunications engineer",
      "control systems engineer",
      "embedded systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration",
    "faculty": "Graduate School / MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "finance manager",
      "CFO",
      "COO",
      "entrepreneur",
      "corporate director",
      "business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "Graduate School / College of Engineering / Department of Computer Science and Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "research scientist",
      "data scientist",
      "systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Studies (GSIS) : Master of International Studies",
    "faculty": "Graduate School of International Studies (GSIS)",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science",
      "economics preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations analyst",
      "policy analyst",
      "NGO officer",
      "global affairs officer",
      "research fellow"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Economics : Master of Economics",
    "faculty": "Graduate School / Department of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 60,
    "required_subjects": [
      "Economics",
      "business",
      "or related social science background beneficial"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "policy analyst",
      "research fellow",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Media and Technology / Journalism : Master of Media and Communication",
    "faculty": "Graduate School / Department of Media and Communication",
    "duration_years": 2.0,
    "annual_fee_cad": 6120,
    "total_fee_cad": 12240,
    "min_class12_percent": 60,
    "required_subjects": [
      "Media",
      "communications",
      "journalism preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Journalist",
      "media strategist",
      "content producer",
      "communications specialist",
      "digital media manager"
    ],
    "features": []
  }
]);

// --- SOLBRIDGE INTERNATIONAL BUSINESS SCHOOL (South Korea) ---
const univ_solbridgeinternationalbusinessschoolsouthkorea = db.institutions.insertOne(inst({
  "name": "SOLBRIDGE INTERNATIONAL BUSINESS SCHOOL (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Daejeon",
  "province": "Daejeon",
  "country": "South Korea",
  "campuses": [
    "Daejeon"
  ],
  "website": "https://www.solbridge.ac.kr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "Via campus main line +82-42-630-8800",
      "email": "admissions@solbridge.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: Based on English proficiency score (IELTS, TOEFL iBT) and GPA combination"
    },
    {
      "name": "Coverage: 30% to 80% tuition reduction"
    },
    {
      "name": "Extraordinary Circumstances: Up to 100% tuition in exceptional cases"
    },
    {
      "name": "Duration: Valid for 1 semester; renewable based on academic performance (GPA 3.6+/4.5 required)"
    },
    {
      "name": "Coverage: Up to 50% tuition"
    },
    {
      "name": "Eligibility: Exchange students nominated by home institutions"
    },
    {
      "name": "Eligibility: BBA students with 15+ credits, no \u201cF\u201d grades; GPA requirements vary"
    },
    {
      "name": "Highest tier (GPA 4.00+): 60% tuition"
    },
    {
      "name": "Mid tier: 30%+ tuition reduction"
    },
    {
      "name": "Renewable each semester based on GPA maintenance"
    },
    {
      "name": "Eligibility: GPA 2.50+ or higher"
    },
    {
      "name": "Coverage: Up to 30% tuition"
    },
    {
      "name": "Requirements: Must document financial inability to meet SolBridge obligations"
    },
    {
      "name": "Limitations: Maximum 2 awards per BBA student during program"
    },
    {
      "name": "Eligibility: Multiple family members enrolled at SolBridge/Woosong University"
    },
    {
      "name": "Coverage: Scholarship available (amount not specified)"
    },
    {
      "name": "Duration: Valid for 1 semester; renewable if both members maintain enrollment"
    },
    {
      "name": "Eligibility: Based on academic record and professional experience (for MBA)"
    },
    {
      "name": "Coverage: 30% to 100% tuition reduction (30% standard, up to 100% for exceptional candidates)"
    },
    {
      "name": "MBA: Minimum 2 years work experience required"
    },
    {
      "name": "Duration: Valid for 1 semester; renewable based on GPA (3.20+ CGPA for continuation)"
    },
    {
      "name": "Eligibility: Merit-based; commitment to be SolBridge Ambassadors"
    },
    {
      "name": "Coverage: Varies; full tuition possible"
    },
    {
      "name": "Eligibility: GPA 3.20+ CGPA"
    },
    {
      "name": "Coverage: Maximum 30% tuition; applies only to forthcoming semester"
    },
    {
      "name": "Limitations: Consecutive awards not granted; Master students limited to one award during program"
    },
    {
      "name": "Automatic consideration: Merit-based scholarships reviewed during main admission process (no separate application required)"
    }
  ],
  "internships": {
    "part_time_work": "Capstone Project: Available as alternative to exchange/internship",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Diverse student clubs available (academic, cultural, volunteer, sports)",
    "housing": "On-Campus Housing (Sol-Geo Residence):"
  },
  "security": {
    "detail": "Medical Assistance: 1339 (Emergency hotline for foreigners)"
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

addPrograms(univ_solbridgeinternationalbusinessschoolsouthkorea, "SOLBRIDGE INTERNATIONAL BUSINESS SCHOOL (South Korea)", [
  {
    "level": "UG",
    "name": "Bachelor of Business Administration (BBA) - General",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Finance Specialization",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Marketing Specialization",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Management & Entrepreneurship Specialization",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Data Analytics Specialization",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Science - Marketing & Analytics (MSMA)",
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
    "name": "Master of Science - Management (General)",
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
    "name": "Master of Science - Technology & Entrepreneurship (MSTE)",
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
    "name": "Ph.D. in Global Management",
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
    "name": "Bachelor of Business Administration (BBA) - General : Bachelor of Business Administration",
    "faculty": "SolBridge International School of Business / BBA Program",
    "duration_years": 4.0,
    "annual_fee_cad": 17000,
    "total_fee_cad": 68000,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically",
      "quantitative foundation beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "analyst",
      "finance analyst",
      "marketing manager",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Finance Specialization : Bachelor of Business Administration - Finance",
    "faculty": "SolBridge BBA Program - Finance Specialization",
    "duration_years": 4.0,
    "annual_fee_cad": 17000,
    "total_fee_cad": 68000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "quantitative skills beneficial"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment analyst",
      "corporate finance specialist",
      "banking professional",
      "fund manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Marketing Specialization : Bachelor of Business Administration - Marketing",
    "faculty": "SolBridge BBA Program - Marketing Specialization",
    "duration_years": 4.0,
    "annual_fee_cad": 17000,
    "total_fee_cad": 68000,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically"
    ],
    "entry_roles": [
      "Marketing manager",
      "market researcher",
      "brand manager",
      "digital marketing specialist",
      "business development manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Management & Entrepreneurship Specialization : Bachelor of Business Administration - Management & Entrepreneurship",
    "faculty": "SolBridge BBA Program - Management & Entrepreneurship",
    "duration_years": 4.0,
    "annual_fee_cad": 17000,
    "total_fee_cad": 68000,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specifically"
    ],
    "entry_roles": [
      "Operations manager",
      "management consultant",
      "entrepreneur",
      "project manager",
      "business operations specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA - Data Analytics Specialization : Bachelor of Business Administration - Data Analytics",
    "faculty": "SolBridge BBA Program - Data Analytics Specialization",
    "duration_years": 4.0,
    "annual_fee_cad": 17000,
    "total_fee_cad": 68000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "quantitative foundation essential"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "business intelligence analyst",
      "data scientist",
      "analytics consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration",
    "faculty": "SolBridge MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 24480,
    "total_fee_cad": 48960,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline acceptable"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "finance manager",
      "operations director",
      "corporate strategist",
      "CFO"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Marketing & Analytics (MSMA) : Master of Science - Marketing & Analytics",
    "faculty": "SolBridge MS Program - Marketing & Analytics Specialization",
    "duration_years": 2.0,
    "annual_fee_cad": 16320,
    "total_fee_cad": 32640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "marketing",
      "analytics",
      "or related discipline preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Marketing manager",
      "market analyst",
      "marketing analyst",
      "business analyst",
      "market research manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Management (General) : Master of Science - Management (General)",
    "faculty": "SolBridge MS Program - General Management",
    "duration_years": 2.0,
    "annual_fee_cad": 16320,
    "total_fee_cad": 32640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business or any discipline acceptable"
    ],
    "entry_roles": [
      "Management consultant",
      "business manager",
      "operations manager",
      "organizational development manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Technology & Entrepreneurship (MSTE) : Master of Science - Technology & Entrepreneurship",
    "faculty": "SolBridge MS Program - Technology & Entrepreneurship",
    "duration_years": 2.0,
    "annual_fee_cad": 16320,
    "total_fee_cad": 32640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering",
      "computer science",
      "business",
      "or related STEM discipline beneficial",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Technology entrepreneur",
      "innovation manager",
      "startup founder",
      "product manager",
      "technology consultant",
      "venture manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Ph.D. in Global Management : Ph.D. in Global Management",
    "faculty": "SolBridge Ph.D. Program",
    "duration_years": 2.0,
    "annual_fee_cad": 16320,
    "total_fee_cad": 32640,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business or related discipline",
      "research experience beneficial"
    ],
    "entry_roles": [
      "University professor",
      "research scientist",
      "academic researcher",
      "postdoctoral researcher",
      "management researcher",
      "consultant"
    ],
    "features": []
  }
]);

// --- SOOKMYUNG WOMEN’S UNIVERSITY (South Korea) ---
const univ_sookmyungwomensuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "SOOKMYUNG WOMEN\u2019S UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "http://e.sookmyung.ac.kr",
  "application_portal": "Online application mandatory through Jinhaksa website (http://e.sookmyung.ac.kr)",
  "contacts": {
    "admissions": {
      "phone": "+82-2-710-9928 (Inbound Exchange)",
      "email": "Inbound.exchange@sookmyung.ac.kr",
      "address": "Administration Building #203, 100 Cheongpa-ro 47-gil, Yongsan-gu, Seoul 04310"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 150,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
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
      "name": "Global Merit Scholarship (merit-based, full or partial tuition waiver)"
    },
    {
      "name": "Sookmyung Women\u2019s Leadership Scholarship (leadership + academic excellence)"
    },
    {
      "name": "Korean Language Proficiency Scholarship (TOPIK scores)"
    },
    {
      "name": "International Friendship Scholarship (sister universities)"
    },
    {
      "name": "Korean Government Scholarship (GKS) - comprehensive coverage including tuition, airfare, living stipend, medical insurance"
    },
    {
      "name": "Need-Based Scholarship"
    },
    {
      "name": "Research Assistantship (graduate students)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes, during study period",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 50+ registered student clubs including sports, cultural, and academic organizations",
    "housing": "Housing: On-campus dormitory available (29% acceptance rate for housing applications, 2022)"
  },
  "security": {
    "detail": "Partnerships: Campus security coordination with local law enforcement; regular incident response protocols"
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

addPrograms(univ_sookmyungwomensuniversitysouthkorea, "SOOKMYUNG WOMEN’S UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Korean Language & Literature",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Chemical & Biological Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Consumer Economics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Fashion/Clothing & Textiles",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "TESOL MA (Teaching English to Speakers of Other Languages)",
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
    "name": "Master\u2019s in Business Administration",
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
    "name": "Master\u2019s in Education",
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
    "name": "Master\u2019s in Chemical & Biological Engineering",
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
    "name": "Master\u2019s in Chemistry",
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
    "name": "Bachelor of Arts in Korean Language & Literature",
    "faculty": "College of Science 305B",
    "duration_years": 4.0,
    "annual_fee_cad": 8000,
    "total_fee_cad": 32000,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specified",
      "Korean proficiency preferred"
    ],
    "entry_roles": [
      "Korean language teacher",
      "translator",
      "content writer",
      "cultural affairs officer",
      "media/publishing professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 9520,
    "total_fee_cad": 38080,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended",
      "Strong English proficiency highly beneficial"
    ],
    "entry_roles": [
      "Management consultant",
      "financial analyst",
      "marketing manager",
      "business development executive",
      "human resources specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemical & Biological Engineering",
    "faculty": "College of Science 463",
    "duration_years": 4.0,
    "annual_fee_cad": 8000,
    "total_fee_cad": 32000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "Biology essential",
      "Advanced mathematics beneficial"
    ],
    "entry_roles": [
      "Process engineer",
      "pharmaceutical scientist",
      "biotechnology specialist",
      "quality control engineer",
      "environmental consultant",
      "material scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Consumer Economics",
    "faculty": "College of Social Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 8000,
    "total_fee_cad": 32000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "mathematics background preferred"
    ],
    "entry_roles": [
      "Consumer analyst",
      "market researcher",
      "policy consultant",
      "marketing manager",
      "financial advisor",
      "government economist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Fashion Design (Clothing & Textiles)",
    "faculty": "Department of Clothing & Textiles",
    "duration_years": 4.0,
    "annual_fee_cad": 8500,
    "total_fee_cad": 34000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Art or design background preferred but not mandatory"
    ],
    "entry_roles": [
      "Fashion designer",
      "clothing product developer",
      "fashion brand manager",
      "textile designer",
      "fashion buyer",
      "costume designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in TESOL (Teaching English to Speakers of Other Languages)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 8976,
    "total_fee_cad": 17952,
    "min_class12_percent": 60,
    "required_subjects": [
      "Background in English",
      "education",
      "or linguistics preferred but not mandatory"
    ],
    "entry_roles": [
      "English language instructor",
      "curriculum developer",
      "teacher trainer",
      "TESOL specialist",
      "educational technology consultant",
      "international school teacher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 9248,
    "total_fee_cad": 18496,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "economics",
      "management",
      "or related field preferred",
      "career experience in business sector valuable"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "corporate strategist",
      "finance manager",
      "operations director",
      "international business executive"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Education",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 8704,
    "total_fee_cad": 17408,
    "min_class12_percent": 60,
    "required_subjects": [
      "Education",
      "psychology",
      "curriculum design",
      "or related disciplines preferred"
    ],
    "entry_roles": [
      "Education administrator",
      "curriculum specialist",
      "educational researcher",
      "international school educator",
      "training",
      "development specialist",
      "policy advisor"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Chemical & Biological Engineering",
    "faculty": "College of Science 463",
    "duration_years": 2.0,
    "annual_fee_cad": 9248,
    "total_fee_cad": 18496,
    "min_class12_percent": 60,
    "required_subjects": [
      "Chemical engineering",
      "chemistry",
      "biochemistry",
      "biological engineering",
      "or materials science essential"
    ],
    "entry_roles": [
      "Research scientist",
      "process engineer",
      "pharmaceutical engineer",
      "materials scientist",
      "biotech specialist",
      "environmental engineer",
      "quality assurance engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Chemistry",
    "faculty": "College of Science 101",
    "duration_years": 2.0,
    "annual_fee_cad": 8704,
    "total_fee_cad": 17408,
    "min_class12_percent": 60,
    "required_subjects": [
      "Chemistry",
      "chemical sciences",
      "or closely related discipline required",
      "strong chemistry foundation essential"
    ],
    "entry_roles": [
      "Research chemist",
      "analytical chemist",
      "pharmaceutical scientist",
      "chemical analyst",
      "materials researcher",
      "academic researcher",
      "quality control specialist"
    ],
    "features": []
  }
]);

// --- SUNGKYUNKWAN UNIVERSITY (South Korea) ---
const univ_sungkyunkwanuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "SUNGKYUNKWAN UNIVERSITY (South Korea)",
  "abbreviation": "SKKU",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "https://admission-global.skku.edu/eng/index.html",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+82-2-760-1000 (Central); +82-2-760-0028 (UG International Admissions); +82-2-760-0015 (PG International Admissions)",
      "email": "intl@skku.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Graduated from top 500 University (QS World Rankings) OR"
    },
    {
      "name": "Graduated from department included in top 300 (QS Rankings by Subject) OR"
    },
    {
      "name": "Graduated from top 100 (QS Asian University Rankings)"
    },
    {
      "name": "Personal Statement and Study Plan (2\u20133 pages; research interests, career goals)"
    },
    {
      "name": "2\u20133 Recommendation Letters: From academic supervisors, professors, or research advisors"
    },
    {
      "name": "Curriculum Vitae/Resume (focus on technical skills, programming languages, lab experience)"
    },
    {
      "name": "Transcript: Official transcripts from all undergraduate/graduate studies"
    },
    {
      "name": "Statement of Financial Resources: ~USD 15,000\u201320,000 annually documented (bank statements or sponsorship letter)"
    },
    {
      "name": "Proof of English Proficiency: Valid, non-expired test score (issued within 2 years)"
    },
    {
      "name": "Application Period: August 1 \u2013 September 30, 2025 (Round 1)"
    },
    {
      "name": "OR November 3 \u2013 November 17, 2025 (Round 2)"
    },
    {
      "name": "Document Submission Deadline: October 2025 (Round 1) or November 21, 2025 (Round 2, 17:00 KST)"
    },
    {
      "name": "Preliminary Results: December 2025"
    },
    {
      "name": "Final Results: January 2026"
    },
    {
      "name": "Semester Begins: Early March 2026"
    },
    {
      "name": "Application Period: March \u2013 April 2026"
    },
    {
      "name": "Document Submission Deadline: By May 2026"
    },
    {
      "name": "Results Announcement: June 2026"
    },
    {
      "name": "Semester Begins: September 2026"
    },
    {
      "name": "Application Window: Varies by department/program (typically September\u2013October 2025)"
    },
    {
      "name": "Spring 2nd Round Graduate: November 17 \u2013 November 27, 2025 (20:00 KST deadline)"
    },
    {
      "name": "Results: December 2025\u2013January 2026"
    },
    {
      "name": "Semester Begins: March 2026"
    },
    {
      "name": "Application Window: Varies by program (typically February\u2013May 2026)"
    },
    {
      "name": "Document Submission Deadline: Varies by department"
    },
    {
      "name": "Results: May\u2013June 2026"
    },
    {
      "name": "Semester Begins: September 2026"
    },
    {
      "name": "Application Deadlines: October 15 (Spring Semester); April 15 (Fall Semester)"
    },
    {
      "name": "Exchange students: Tuition waived (tuition-free program)"
    },
    {
      "name": "Visiting students: Must pay SKKU tuition (approximately USD 4,500\u20136,000 per semester)"
    },
    {
      "name": "Undergraduate International: KRW 100,000 (approximately USD 75\u201380)"
    },
    {
      "name": "Postgraduate International: KRW 100,000 (approximately USD 75\u201380)"
    },
    {
      "name": "Non-refundable; payment via online credit card during application submission"
    },
    {
      "name": "Eligibility: Nominated freshmen based on exceptional admission evaluation; interview may be conducted"
    },
    {
      "name": "Coverage: 50% tuition scholarship for 4 years (8 semesters); renewable each semester"
    },
    {
      "name": "Requirements: Maintain good academic standing; must take minimum 12 credits/semester; maintain 3.7+ GPA"
    },
    {
      "name": "Application: Automatic nomination during admission process"
    },
    {
      "name": "Type A: For students from countries meeting specific criteria (emphasis on non-English-speaking countries); 50% tuition for 4 years"
    },
    {
      "name": "Type B: Outstanding students in STEM field; 50% tuition for 4 years (8 semesters)"
    },
    {
      "name": "Type C: Remarkable freshmen in Global Programs (Global Business Administration, Global Economics, Global Biomedical Engineering); 50% tuition for 4 years"
    },
    {
      "name": "Top 6% of last semester: 70% tuition waiver"
    },
    {
      "name": "Top 6\u201318% of last semester: 50% tuition waiver"
    },
    {
      "name": "Top 18\u201330% of last semester: 30% tuition waiver"
    },
    {
      "name": "Eligibility: Students with demonstrated excellence in English"
    },
    {
      "name": "Coverage: Partial to full tuition support"
    },
    {
      "name": "Eligibility: Students with demonstrated Korean language proficiency (TOPIK 4+)"
    },
    {
      "name": "Coverage: Partial to full tuition support"
    },
    {
      "name": "Living Allowance (Scholarship recipients): KRW 500,000 per month"
    },
    {
      "name": "Settlement Allowance: KRW 600,000 (for students whose last university was overseas)"
    },
    {
      "name": "Priority dormitory assignment and full dormitory fees provided if assigned"
    },
    {
      "name": "1:1 mentoring program (alumni, professors, or field experts)"
    },
    {
      "name": "Eligibility: All international students accepted to STEM field departments"
    },
    {
      "name": "First Semester: 50% tuition and admission fee waiver (all freshmen)"
    },
    {
      "name": "Conditional Full Scholarship (if academic excellence or research excellence met)"
    },
    {
      "name": "Academic Excellence Conditions: Graduated from QS top 500 university; top 300 department (QS Subject Rankings); top 100 Asian university (QS Asia Rankings)"
    },
    {
      "name": "Research Excellence: Main writer of published paper receives full scholarship every semester until program completion"
    },
    {
      "name": "First Semester: 10\u2013100% tuition reduction based on admission evaluation results"
    },
    {
      "name": "GPA 3.8\u20134.2: 70% scholarship"
    },
    {
      "name": "Subsequent semesters: Renewable based on previous semester GPA"
    },
    {
      "name": "Eligibility: SKKU graduates or former exchange/visiting students"
    },
    {
      "name": "Coverage: 20% tuition fee waiver (admission + tuition)"
    },
    {
      "name": "Coverage: Full tuition exemption; living allowance KRW 900,000\u20131,300,000/month; airfare; Korean language training fee; medical insurance"
    },
    {
      "name": "Eligibility: Undergraduate and postgraduate students from GKS-participating countries (India eligible)"
    },
    {
      "name": "Application: Apply through Korean Embassy in India (Embassy Track) OR SKKU University Track"
    },
    {
      "name": "Automatic consideration: No separate application required; merit-based scholarships reviewed during main admission process"
    },
    {
      "name": "GKS: Separate application through Korean Embassy in India or SKKU"
    }
  ],
  "internships": {
    "part_time_work": "Research Internships: Graduate students (Master\u2019s & PhD) participate in faculty-led research laboratories (mandatory thesis/dissertation research)",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "International Student Support: Dedicated international student centre; orientation programs; cultural exchange activities",
    "housing": "Office of International Student Services (OISS) team provides emergency support; available for visa-related emergencies, medical consultations, housing issues"
  },
  "security": {
    "detail": "English-speaking staff available during office hours and emergency contacts provided for after-hours"
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

addPrograms(univ_sungkyunkwanuniversitysouthkorea, "SUNGKYUNKWAN UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Semiconductor Systems Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software & Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global Biomedical Engineering",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Systems Management Engineering",
    "faculty": "",
    "duration_years": 4.0,
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
    "name": "Master of Computer Science and Engineering",
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
    "name": "Master of Mechanical Engineering",
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
    "name": "Master of Electrical/Electronics Engineering",
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
    "name": "Master of Biotechnology/Life Sciences",
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
    "name": "Semiconductor Systems Engineering : Bachelor of Semiconductor Systems Engineering",
    "faculty": "College of Information & Communication Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 60,
    "total_fee_cad": 240,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics",
      "Mathematics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Semiconductor engineer",
      "chip designer",
      "process engineer",
      "test engineer",
      "manufacturing engineer",
      "quality engineer",
      "fab engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Software & Computer Engineering : Bachelor of Software and Computer Engineering",
    "faculty": "College of Information & Communication Engineering / College of Computing",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Computer Science / IT background beneficial but not mandatory"
    ],
    "entry_roles": [
      "Software engineer",
      "full-stack developer",
      "mobile app developer",
      "cybersecurity engineer",
      "systems engineer",
      "data scientist",
      "game developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Global Biomedical Engineering : Bachelor of Global Biomedical Engineering",
    "faculty": "College of Biotechnology & Bioengineering / College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Biomedical engineer",
      "medical device engineer",
      "pharmaceutical engineer",
      "clinical engineer",
      "research scientist",
      "health informatics specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering : Bachelor of Mechanical Engineering",
    "faculty": "College of Engineering / School of Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Mathematics essential"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "automotive engineer",
      "thermal engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Systems Management Engineering : Bachelor of Systems Management Engineering",
    "faculty": "College of Engineering / School of Systems Management Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics important",
      "strong quantitative foundation"
    ],
    "entry_roles": [
      "Systems engineer",
      "operations engineer",
      "data analyst",
      "supply chain specialist",
      "management consultant",
      "business analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) : Master of Business Administration (Full-Time)",
    "faculty": "SKK Graduate School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 9000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "All disciplines welcome"
    ],
    "entry_roles": [
      "Management consultant",
      "finance manager",
      "business strategist",
      "CFO",
      "COO",
      "entrepreneur",
      "venture capitalist",
      "corporate director",
      "startup founder"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science and Engineering : Master of Computer Science and Engineering",
    "faculty": "College of Computing / College of Information & Communication Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 5800,
    "total_fee_cad": 11600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming",
      "discrete mathematics",
      "systems"
    ],
    "entry_roles": [
      "Senior software engineer",
      "ML research engineer",
      "AI engineer",
      "data scientist",
      "research scientist",
      "systems architect",
      "cybersecurity engineer",
      "IT consultant",
      "startup CTO"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Mechanical Engineering : Master of Mechanical Engineering",
    "faculty": "College of Engineering / School of Mechanical Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 5800,
    "total_fee_cad": 11600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in mechanics",
      "thermodynamics",
      "materials science",
      "manufacturing"
    ],
    "entry_roles": [
      "Research engineer",
      "mechanical design engineer",
      "manufacturing engineer",
      "R&D engineer",
      "senior engineer",
      "project manager",
      "automotive engineer",
      "energy systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Electrical/Electronics Engineering : Master of Electrical Engineering",
    "faculty": "College of Engineering / School of Electrical Engineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 5800,
    "total_fee_cad": 11600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "control systems",
      "signal processing"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "electronics engineer",
      "telecommunications engineer",
      "control systems engineer",
      "semiconductor engineer",
      "R&D engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Biotechnology/Life Sciences : Master of Biotechnology and Bioengineering",
    "faculty": "College of Biotechnology & Bioengineering, Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 5800,
    "total_fee_cad": 11600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in molecular biology",
      "biochemistry",
      "genetics",
      "or bioengineering"
    ],
    "entry_roles": [
      "Research scientist",
      "biotech engineer",
      "pharmaceutical engineer",
      "medical researcher",
      "bioinformatician",
      "academic researcher",
      "postdoctoral researcher"
    ],
    "features": []
  }
]);

// --- YONSEI UNIVERSITY (South Korea) ---
const univ_yonseiuniversitysouthkorea = db.institutions.insertOne(inst({
  "name": "YONSEI UNIVERSITY (South Korea)",
  "abbreviation": "",
  "type": "university",
  "city": "Seoul",
  "province": "Seoul",
  "country": "South Korea",
  "campuses": [
    "Seoul"
  ],
  "website": "http://mba.yonsei.ac.kr",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+82-2-2123-3254",
      "email": "gsis@yonsei.ac.kr"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (March)",
    "Semester 2 (September)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eligibility: All international graduate students admitted through international admissions track (starting Fall 2025)"
    },
    {
      "name": "Coverage: Fixed-amount scholarship (amount determined by university); no separate application required"
    },
    {
      "name": "Duration: Entire graduate program"
    },
    {
      "name": "Application: Automatic consideration upon admission"
    },
    {
      "name": "Outstanding International Student Scholarship (I): Full entrance and tuition fee waiver + KRW 500,000 monthly stipend; 4 semesters (Master\u2019s) or 6 semesters (Joint Degree)"
    },
    {
      "name": "Outstanding International Student Scholarship (II): 50% entrance and tuition fee waiver; one semester (reviewed each semester)"
    },
    {
      "name": "Outstanding International Student Scholarship (III): Maximum 50% entrance and tuition fee; 4 semesters (Master\u2019s) or 6 semesters (Joint Degree)"
    },
    {
      "name": "Eligibility: Exceptional international students recommended by departments; GPA 3.4+/4.3 for current students; merit-based selection"
    },
    {
      "name": "Coverage: Full tuition exemption; living expense stipend KRW 900,000\u20131,300,000/month (varies by program)"
    },
    {
      "name": "Eligibility: Undergraduate and graduate (Master\u2019s and Doctoral) international students from eligible countries"
    },
    {
      "name": "Duration: Up to 8 semesters (undergraduate); 4\u20136 semesters (postgraduate)"
    },
    {
      "name": "Application: Apply through Korean embassy in India; Yonsei recommends candidates to NIIED (National Institute for International Education)"
    },
    {
      "name": "Coverage: Merit-based scholarships ranging from partial to full tuition waiver (up to full 4-year tuition)"
    },
    {
      "name": "Eligibility: Outstanding international students applying to UIC undergraduate programs"
    },
    {
      "name": "Basis: Academic merit, extracurricular involvement, financial need, leadership potential"
    },
    {
      "name": "Application: Submitted during main UIC application process"
    },
    {
      "name": "Eligibility: High-achieving international students enrolled in Yonsei\u2019s Global Leaders programs"
    },
    {
      "name": "Coverage: Partial to full tuition support (varies)"
    },
    {
      "name": "Automatic consideration: Merit-based scholarships reviewed during admission process"
    },
    {
      "name": "No separate application required for most university scholarships"
    },
    {
      "name": "KGSP: Apply directly through Korean embassy in India"
    }
  ],
  "internships": {
    "part_time_work": "Commons/P\u2019Nanmu: Global Lounge (international student support space), convenience stores, caf\u00e9s, Kumo Art Hall, Yon Co-op (supplies and Yonsei merchandise)",
    "coop_available": true,
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "International Yonsei Club (IYC): Student-led international relations organisation with activities, language exchanges, forums, retreats",
    "housing": "Residential Halls: SK Global House (primary international student dorm), I House (international housing; under renovation), U-One (near north gate)"
  },
  "security": {
    "detail": "English-speaking staff available through OIA for visa-related and emergency consultations"
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

addPrograms(univ_yonseiuniversitysouthkorea, "YONSEI UNIVERSITY (South Korea)", [
  {
    "level": "UG",
    "name": "Bachelor of Business Administration (BBA)",
    "faculty": "",
    "duration_years": 4.0,
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
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Psychology",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Korean Literature",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Physics",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Global MBA)",
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
    "name": "Master of International Relations",
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
    "name": "Master of Public Health",
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
    "name": "Master of Computer Science",
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
    "name": "Master of Social Welfare",
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
    "name": "Bachelor of Business Administration : Bachelor of Business Administration (BBA)",
    "faculty": "Yonsei School of Business / College of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 5,
    "total_fee_cad": 20,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically mandated",
      "strong performance in English",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Business analyst",
      "accountant",
      "financial analyst",
      "manager",
      "marketer",
      "human resources specialist",
      "consultant",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Computer Science : Bachelor of Computer Science",
    "faculty": "+82-2-2123-2251 (College of Computing)",
    "duration_years": 4.0,
    "annual_fee_cad": 5,
    "total_fee_cad": 20,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong performance in Mathematics required",
      "Physics recommended",
      "Computer science background beneficial but not mandatory"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML engineer",
      "data scientist",
      "systems architect",
      "cybersecurity analyst",
      "web developer",
      "mobile app developer",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Psychology : Bachelor of Psychology",
    "faculty": "+82-2-2123-2251 (College of Science)",
    "duration_years": 4.0,
    "annual_fee_cad": 4300,
    "total_fee_cad": 17200,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong English",
      "social sciences background preferred",
      "psychology courses helpful but not mandatory"
    ],
    "entry_roles": [
      "Research psychologist",
      "clinical psychologist assistant",
      "human resources specialist",
      "educational consultant",
      "counselor",
      "UX/UI researcher",
      "organisational development specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Korean Literature : Bachelor of Korean Literature",
    "faculty": "+82-2-2123-2265 (Department of Korean Literature)",
    "duration_years": 4.0,
    "annual_fee_cad": 4300,
    "total_fee_cad": 17200,
    "min_class12_percent": 75,
    "required_subjects": [
      "None specifically",
      "strong Korean language or interest in Korean culture helpful",
      "English medium requirements"
    ],
    "entry_roles": [
      "Literature researcher",
      "cultural analyst",
      "editor",
      "journalist",
      "teacher",
      "translator",
      "cultural consultant",
      "publishing professional",
      "content creator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Physics : Bachelor of Physics",
    "faculty": "+82-2-2123-2251 (College of Science)",
    "duration_years": 4.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 18000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Mathematics essential",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "physicist",
      "scientific analyst",
      "data scientist",
      "systems engineer",
      "technology consultant",
      "academic researcher",
      "postdoctoral researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Global MBA) : Master of Business Administration \u2014 Global MBA",
    "faculty": "Yonsei Global MBA Program (Global MBA Office)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific subject requirement",
      "all disciplines welcome"
    ],
    "entry_roles": [
      "MBA graduate",
      "management consultant",
      "finance manager",
      "business strategist",
      "strategy officer",
      "corporate director",
      "CFO",
      "COO",
      "entrepreneur",
      "venture capitalist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Relations : Master of International Relations",
    "faculty": "Graduate School of International Studies (GSIS)",
    "duration_years": 2.0,
    "annual_fee_cad": 6600,
    "total_fee_cad": 13200,
    "min_class12_percent": 60,
    "required_subjects": [
      "International relations",
      "political science",
      "history",
      "social sciences preferred but not mandatory",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Diplomat",
      "international relations analyst",
      "policy analyst",
      "development specialist",
      "global affairs officer",
      "NGO officer",
      "international journalist",
      "researcher",
      "foreign affairs officer",
      "UN/international organisation specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Health : Master of Public Health",
    "faculty": "School of Public Health / Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 14400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Public health",
      "health sciences",
      "medical",
      "nursing",
      "allied health",
      "or social sciences preferred but not mandatory",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Public health officer",
      "health programme manager",
      "epidemiologist",
      "health educator",
      "policy analyst",
      "health researcher",
      "international development specialist",
      "WHO/UNDP officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computer Science : Master of Computer Science",
    "faculty": "College of Computing / Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 7200,
    "total_fee_cad": 14400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "data structures",
      "programming",
      "discrete mathematics",
      "CS background preferred",
      "non-CS graduates with foundational coursework acceptable"
    ],
    "entry_roles": [
      "Software engineer",
      "AI/ML research engineer",
      "data scientist",
      "systems architect",
      "research scientist",
      "cybersecurity engineer",
      "IT consultant",
      "tech company engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Social Welfare : Master of Social Welfare",
    "faculty": "School of Social Welfare / Graduate School",
    "duration_years": 2.0,
    "annual_fee_cad": 6600,
    "total_fee_cad": 13200,
    "min_class12_percent": 60,
    "required_subjects": [
      "Social work",
      "sociology",
      "psychology",
      "public health",
      "education",
      "or related social science preferred",
      "any discipline acceptable"
    ],
    "entry_roles": [
      "Social worker",
      "welfare programme manager",
      "social policy analyst",
      "community development officer",
      "NGO coordinator",
      "international development specialist",
      "research officer",
      "caseworker"
    ],
    "features": []
  }
]);

print("South Korea Seeding Completed!");