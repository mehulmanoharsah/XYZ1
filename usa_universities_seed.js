// ============================================================
// USA UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 49 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions usa_universities_seed.js
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

// Delete existing USA data to prevent duplicates
db.institutions.deleteMany({ country: "USA" });
db.programs.deleteMany({ institution_name: { $in: [
  "OHIO STATE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE",
  "Texas A&M University",
  "JOHNS HOPKINS UNIVERSITY",
  "MICHIGAN STATE UNIVERSITY",
  "DUKE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE",
  "UT AUSTIN UNIVERSITY",
  "UNIVERSITY OF CALIFORNIA, DAVIS",
  "UC Berkeley: Official Information for Indian Students",
  "ILLINOIS INSTITUTE OF TECHNOLOGY",
  "New York University",
  "Stanford University",
  "SYRACUSE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS",
  "UNIVERSITY OF CHICAGO",
  "UNIVERSITY OF MASSACHUSETTS AMHERST",
  "PRINCETON UNIVERSITY",
  "UNIVERSITY OF MARYLAND, COLLEGE PARK: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE",
  "CALTECH",
  "UNIVERSITY OF PENNSYLVANIA",
  "COLUMBIA UNIVERSITY",
  "UNIVERSITY OF ARIZONA",
  "Harvard University",
  "University of Southern California",
  "University of Washington",
  "UC IRVINE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS",
  "University of Illinois at Urbana-Champaign",
  "University of Michigan",
  "OREGON STATE UNIVERSITY",
  "University of California, Los Angeles",
  "Northeastern University",
  "CLEMSON UNIVERSITY",
  "UNIVERSITY OF CALIFORNIA, SAN DIEGO",
  "Carnegie Mellon University",
  "University of Texas at Dallas",
  "SAN JOSE STATE UNIVERSITY",
  "UNIVERSITY OF COLORADO BOULDER",
  "Massachusetts Institute of Technology",
  "UNIVERSITY OF FLORIDA",
  "Cornell University",
  "RUTGERS UNIVERSITY",
  "BOSTON UNIVERSITY",
  "SUNY BUFFALO UNIVERSITY",
  "Arizona State University",
  "Georgia Institute of Technology",
  "NORTH CAROLINA STATE UNIVERSITY",
  "Purdue University",
  "YALE UNIVERSITY",
  "GEORGE WASHINGTON UNIVERSITY",
  "IOWA STATE UNIVERSITY",
  "VIRGINIA TECH UNIVERSITY",
] } });

// --- OHIO STATE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE ---
const univ_ohiostateuniversitycomprehensiveinternationalstudentguide = db.institutions.insertOne(inst({
  "name": "OHIO STATE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE",
  "abbreviation": "",
  "type": "university",
  "city": "Columbus",
  "province": "Ohio",
  "country": "USA",
  "campuses": [
    "Columbus"
  ],
  "website": "https://gpadmissions.osu.edu",
  "application_portal": "https://gpadmissions.osu.edu",
  "contacts": {
    "admissions": {
      "phone": "(614) 292-6101",
      "email": "iss@osu.edu",
      "address": "2009 Millikin Road, Columbus, OH 43210"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Undergraduate: Merit-based scholarships available (competitive); no need-based aid for international students"
    },
    {
      "name": "Postgraduate: Graduate assistantships, fellowships, and departmental awards available (competitive); limited to no funding for some master\u2019s programs"
    },
    {
      "name": "Key Restriction: International students not eligible for U.S. federal or state financial aid"
    },
    {
      "name": "Housing Support: Limited scholarships for on-campus housing costs"
    }
  ],
  "internships": {},
  "campus_life": {
    "housing": "Student housing on-campus (required for first 2 years)",
    "clubs": "Block O (sports club), mountaineering club, board game clubs, entrepreneurship groups, cultural associations"
  },
  "security": {
    "detail": "Buckeye Alert system for emergency notifications via text, email, and social media"
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

addPrograms(univ_ohiostateuniversitycomprehensiveinternationalstudentguide, "OHIO STATE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE", [
  {
    "level": "UG",
    "name": "Computer Science & Engineering",
    "faculty": "",
    "duration_years": 4,
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
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology",
    "faculty": "",
    "duration_years": 4,
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
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business/Marketing",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
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
    "name": "Master of Science in Electrical & Computer Engineering",
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
    "name": "Master of Business Administration (Fisher College)",
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
    "name": "Specialized Master in Business Analytics",
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
    "name": "Master of Science in Mechanical Engineering",
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
    "name": "UG Course : Bachelor of Science in Computer Science & Engineering",
    "faculty": "Department: School of Engineering (College of Engineering)",
    "duration_years": 4.0,
    "annual_fee_cad": 58543,
    "total_fee_cad": 234172,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics",
      "physics",
      "chemistry"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "data scientist",
      "network engineer",
      "hardware engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical & Computer Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 58543,
    "total_fee_cad": 234172,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics",
      "physics",
      "circuit analysis background recommended"
    ],
    "entry_roles": [
      "Electrical engineer",
      "embedded systems engineer",
      "power systems engineer",
      "signal processing engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Biology",
    "faculty": "Department: College of Arts and Sciences (Department of Biology)",
    "duration_years": 4.0,
    "annual_fee_cad": 58543,
    "total_fee_cad": 234172,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "mathematics",
      "strong science foundation"
    ],
    "entry_roles": [
      "Research scientist",
      "laboratory technician",
      "healthcare professional",
      "biotechnology specialist",
      "environmental consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4.0,
    "annual_fee_cad": 58543,
    "total_fee_cad": 234172,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "mechanics foundation"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "HVAC engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business",
    "faculty": "Department: Fisher College of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 58543,
    "total_fee_cad": 234172,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "analytical skills recommended"
    ],
    "entry_roles": [
      "Financial analyst",
      "management consultant",
      "marketing manager",
      "business analyst",
      "operations manager",
      "investment analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science & Engineering",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 58979,
    "total_fee_cad": 117958,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data structures",
      "algorithms",
      "discrete mathematics",
      "programming experience"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "systems engineer",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical & Computer Engineering",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 60871,
    "total_fee_cad": 121742,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuits",
      "electromagnetics",
      "signals/systems",
      "mathematics through linear algebra"
    ],
    "entry_roles": [
      "Electrical engineer",
      "embedded systems engineer",
      "telecommunications engineer",
      "power systems engineer",
      "signal processing engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Fisher College)",
    "faculty": "Department: Fisher College of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 84605,
    "total_fee_cad": 169210,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field",
      "quantitative skills preferred but not required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "corporate finance manager",
      "strategy consultant",
      "technology leader",
      "product manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Specialized Master in Business Analytics (Fisher College)",
    "faculty": "Department: Fisher College of Business",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative skills",
      "statistics",
      "calculus",
      "basic programming preferred"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "analytics consultant",
      "data scientist (junior)",
      "management consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 60871,
    "total_fee_cad": 121742,
    "min_class12_percent": 70,
    "required_subjects": [
      "Thermodynamics",
      "fluid mechanics",
      "solid mechanics",
      "mathematics"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "thermal engineer",
      "manufacturing engineer",
      "HVAC specialist",
      "robotics engineer"
    ],
    "features": []
  }
]);

// --- Texas A&M University ---
const univ_texasamuniversity = db.institutions.insertOne(inst({
  "name": "Texas A&M University",
  "abbreviation": "",
  "type": "university",
  "city": "College Station",
  "province": "Texas",
  "country": "USA",
  "campuses": [
    "College Station"
  ],
  "website": "www.tamu.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(979) 845-1824",
      "email": "ISSS@tamu.edu",
      "address": "Office of Admissions, Texas A&M University, College Station, TX 77843"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Eppright International Student Award: Merit-based; $1,000\u2013$4,000+ annually"
    },
    {
      "name": "Good Neighbor Program: Reduces non-resident tuition rate"
    },
    {
      "name": "Competitive Scholarship Tuition Waiver: Exempts from non-resident tuition; must meet minimum scholarship threshold ($4,000+/year)"
    },
    {
      "name": "International Education Fee Scholarship (IEFS): Monetary award; amount varies; requires full-time enrollment (12+ hours) and demonstrated financial need"
    },
    {
      "name": "Goodman International Scholarship Fund: One-time monetary award (Fall); minimum 3.0 GPA required"
    },
    {
      "name": "George J. Eppright International Student Award: At least $3,000 annually for academically talented international students"
    },
    {
      "name": "Eligibility: Academic excellence, leadership, service, extracurricular activities"
    },
    {
      "name": "Merit-based departmental scholarships: Varies by college and program"
    },
    {
      "name": "Teaching Assistantships (TA) & Research Assistantships (RA): Tuition waiver (partial to full) + monthly stipend"
    },
    {
      "name": "Eligibility: Outstanding academic credentials; strong GPA; research potential"
    },
    {
      "name": "International Education Fee Scholarship (IEFS): Monetary awards; varies; for full-time graduate students (9+ hours) with demonstrated financial need"
    },
    {
      "name": "Maximum award: $2,000\u2013$4,000/year"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during fall/spring semesters; full-time during breaks"
    },
    {
      "name": "CPT (Curricular Practical Training): Paid internships authorized by university"
    },
    {
      "name": "Eligibility: Typically after 1+ academic year; must be related to degree"
    },
    {
      "name": "Work authorization: Part-time and full-time options"
    },
    {
      "name": "OPT (Optional Practical Training): Post-graduation work authorization"
    },
    {
      "name": "12 months standard; STEM OPT Extension: 24 months for STEM-eligible degrees"
    },
    {
      "name": "Graduate Assistantships: TA/RA positions with tuition benefits"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Sport Clubs: 25+ club sports including rowing, skiing, martial arts, dance",
    "housing": "On-campus residential housing (dorms, residential colleges)"
  },
  "security": {
    "detail": "ISSS After-Hours (International): Available through emergency protocols"
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

addPrograms(univ_texasamuniversity, "Texas A&M University", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; Dept. of Electrical & Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; Dept. of Electrical & Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aerospace Engineering \u2013 4 years; Aerospace Engineering Dept.",
    "faculty": "1.Master of Science in Computer Science \u2013 2\u20133 years; Department of Computer Science & Engineering",
    "duration_years": 4,
    "annual_fee_cad": 21405,
    "total_fee_cad": 85620,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time) \u2013 2 years",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 72510,
    "total_fee_cad": 145020,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical Engineering \u2013 2 years",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 29807,
    "total_fee_cad": 59614,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance \u2013 10 months (accelerated)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 46928,
    "total_fee_cad": 93856,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science & Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 38375,
    "total_fee_cad": 153500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus preferred)",
      "Physics",
      "Computer Science or programming background valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "Email: Contact through admissions.tamu.edu or department office",
    "duration_years": 4,
    "annual_fee_cad": 38375,
    "total_fee_cad": 153500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus preferred)",
      "Physics (essential)",
      "Digital systems fundamentals valued"
    ],
    "entry_roles": [
      "Computer Engineer",
      "Hardware Design Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "Firmware Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical & Computer Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 38375,
    "total_fee_cad": 153500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus preferred)",
      "Physics (essential)",
      "Electromagnetism fundamentals valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Controls Engineer",
      "Embedded Systems Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 38375,
    "total_fee_cad": 153500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus preferred)",
      "Physics (essential)",
      "Mechanics",
      "Thermodynamics valued"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aerospace Engineering",
    "faculty": "Department of Aerospace Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 38375,
    "total_fee_cad": 153500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus preferred)",
      "Physics (essential)",
      "Mechanics",
      "Aerodynamics valued"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Design Engineer",
      "Systems Engineer",
      "Test Engineer",
      "Manufacturing Engineer",
      "Flight Test Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Department of Computer Science & Engineering, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 19288,
    "total_fee_cad": 38576,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong Computer Science fundamentals",
      "Data Structures",
      "Algorithms",
      "Programming required"
    ],
    "entry_roles": [
      "Software Engineer",
      "ML Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Research Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 41779,
    "total_fee_cad": 83558,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics essential)",
      "Computer Science or programming"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "business",
      "quantitative background beneficial"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Product Manager",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical Engineering",
    "faculty": "Email: graduate.admissions@tamu.edu; Contact through department office",
    "duration_years": 2,
    "annual_fee_cad": 29807,
    "total_fee_cad": 59614,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra)",
      "Physics",
      "Electromagnetic fundamentals required"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "RF Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "Adam C. Sinn \u201900 Department of Finance, Mays Business School",
    "duration_years": 2,
    "annual_fee_cad": 46928,
    "total_fee_cad": 93856,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Statistics)",
      "Economics",
      "Finance fundamentals",
      "programming (Python, R) beneficial"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Analyst",
      "Portfolio Manager",
      "Financial Engineer",
      "Quantitative Analyst"
    ],
    "features": []
  }
]);

// --- JOHNS HOPKINS UNIVERSITY ---
const univ_johnshopkinsuniversity = db.institutions.insertOne(inst({
  "name": "JOHNS HOPKINS UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Baltimore",
  "province": "Maryland",
  "country": "USA",
  "campuses": [
    "Baltimore"
  ],
  "website": "https://www.jhu.edu",
  "application_portal": "https://apply.jhu.edu/",
  "contacts": {
    "admissions": {
      "phone": "911 | Campus Phone: (410) 516-7777 | Non-Emergency: (410) 516-7622",
      "address": "3400 N. Charles Street, Baltimore, MD 21218",
      "email": "isso@jhu.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 96,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Need-Blind Admissions: Johns Hopkins considers financial need in admissions decisions for international students (need-aware for international applicants)"
    },
    {
      "name": "Johns Hopkins Scholarship (Need-Based): Meets 100% of demonstrated financial need for admitted international students"
    },
    {
      "name": "Average need-based scholarship: $63,000/year (first-year students)"
    },
    {
      "name": "Full need-based aid packages (grants only; no loans required)"
    },
    {
      "name": "Families earning <$65,000: Full cost coverage (tuition + housing + meals)"
    },
    {
      "name": "Families earning $65,000-$150,000: Reduced costs based on assessment"
    },
    {
      "name": "MBA (Carey): Some merit-based fellowships available (limited)"
    },
    {
      "name": "Master\u2019s Programs: Merit fellowships (program-dependent; ~10-20% of students receive aid)"
    },
    {
      "name": "PhD Programs: Full funding guarantee (~95% of admitted PhD students)"
    },
    {
      "name": "Full tuition coverage"
    },
    {
      "name": "Monthly stipend (~$2,000-$3,500+ annually)"
    },
    {
      "name": "Health insurance coverage"
    },
    {
      "name": "Teaching/Research Assistantships required"
    },
    {
      "name": "Teaching/Research Assistantships: Available for master\u2019s and PhD students (tuition reduction + stipend; competitive)"
    }
  ],
  "internships": {
    "part_time_work": "Cooperative Education: Engineering and selected programs offer co-op tracks (alternating work/study semesters)",
    "coop_available": true,
    "employment_rate_percent": 98
  },
  "campus_life": {
    "housing": "Housing: 14+ residential communities; first-year housing provided; upper-class housing in/near campus",
    "clubs": "Total Clubs: 300+ registered student organizations"
  },
  "security": {
    "detail": "Emergency Alert System: Text/email notifications for campus safety alerts; daily crime reports"
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

addPrograms(univ_johnshopkinsuniversity, "JOHNS HOPKINS UNIVERSITY", [
  {
    "level": "UG",
    "name": "BS Computer Science (Whiting School of Engineering)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biomedical Engineering (Whiting School of Engineering)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Economics (Krieger School of Arts & Sciences)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biology or Molecular & Cellular Biology (Krieger School)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Applied Mathematics or Mathematics (Krieger School)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science (Whiting School of Engineering)",
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
    "name": "Master of Public Health (Bloomberg School of Public Health)",
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
    "name": "Master of Business Administration (Carey Business School)",
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
    "name": "MS Biomedical Engineering (Whiting School of Engineering)",
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
    "name": "MS Applied Mathematics & Statistics (Krieger School of Arts & Sciences)",
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
    "name": "BS Computer Science (Whiting School of Engineering)",
    "faculty": "School Name: Whiting School of Engineering, Department of Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 88154,
    "total_fee_cad": 352616,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, discrete math required)",
      "Physics",
      "Chemistry",
      "English"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Cybersecurity Engineer",
      "Systems Engineer",
      "Product Engineer",
      "Backend Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biomedical Engineering (Whiting School of Engineering)",
    "faculty": "School Name: Whiting School of Engineering, Department of Biomedical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 88154,
    "total_fee_cad": 352616,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (calculus)",
      "Physics",
      "English"
    ],
    "entry_roles": [
      "Biomedical Engineer",
      "Medical Device Design Engineer",
      "Clinical Engineer",
      "Biotech Engineer",
      "Research Scientist",
      "Quality Engineer",
      "Regulatory Affairs"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Economics (Krieger School of Arts & Sciences)",
    "faculty": "School Name: Krieger School of Arts & Sciences, Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 88154,
    "total_fee_cad": 352616,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus preferred)",
      "English",
      "quantitative reasoning"
    ],
    "entry_roles": [
      "Economist",
      "Financial Analyst",
      "Policy Analyst",
      "Management Consultant",
      "Investment Analyst",
      "Research Analyst",
      "Government Economist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biology or Molecular & Cellular Biology (Krieger School of Arts & Sciences)",
    "faculty": "School Name: Krieger School of Arts & Sciences, Department of Biology",
    "duration_years": 4.0,
    "annual_fee_cad": 88154,
    "total_fee_cad": 352616,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (calculus)",
      "Physics",
      "English"
    ],
    "entry_roles": [
      "Research Scientist",
      "Biomedical Scientist",
      "Lab Manager",
      "Clinical Research Coordinator",
      "Pharmaceutical Scientist",
      "Medical Science Liaison"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Applied Mathematics or Mathematics (Krieger School of Arts & Sciences)",
    "faculty": "School Name: Krieger School of Arts & Sciences, Department of Mathematics",
    "duration_years": 4.0,
    "annual_fee_cad": 88154,
    "total_fee_cad": 352616,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra, abstract algebra)",
      "Physics",
      "English",
      "computer science helpful"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Data Scientist",
      "Financial Analyst",
      "Software Engineer",
      "Actuarial Analyst",
      "Operations Research Analyst",
      "Research Mathematician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science (Whiting School of Engineering)",
    "faculty": "School Name: Whiting School of Engineering, Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 67233,
    "total_fee_cad": 134466,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "discrete mathematics",
      "systems programming",
      "computer architecture",
      "database management helpful"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Cybersecurity Engineer",
      "Systems Engineer",
      "Research Scientist",
      "Backend Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Health (Bloomberg School of Public Health)",
    "faculty": "School Name: Bloomberg School of Public Health",
    "duration_years": 2.0,
    "annual_fee_cad": 22080,
    "total_fee_cad": 44160,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Statistics helpful",
      "public health experience valued but not required"
    ],
    "entry_roles": [
      "Public Health Officer",
      "Epidemiologist",
      "Health Program Manager",
      "Policy Analyst",
      "Research Scientist",
      "Global Health Specialist",
      "Health System Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Carey Business School)",
    "faculty": "School Name: Johns Hopkins Carey Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 86181,
    "total_fee_cad": 172362,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "diverse backgrounds welcomed"
    ],
    "entry_roles": [
      "Management Consultant",
      "Project Manager",
      "Business Analyst",
      "Operations Manager",
      "Financial Manager",
      "Strategy Manager",
      "Entrepreneur",
      "Product Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Biomedical Engineering (Whiting School of Engineering)",
    "faculty": "School Name: Whiting School of Engineering, Department of Biomedical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 67233,
    "total_fee_cad": 134466,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong STEM foundation",
      "electrical/mechanical engineering or biological sciences background",
      "thermodynamics",
      "fluid mechanics",
      "signal processing helpful"
    ],
    "entry_roles": [
      "Biomedical Engineer",
      "Medical Device Design Engineer",
      "Clinical Engineer",
      "Biotech Engineer",
      "Regulatory Affairs Specialist",
      "Quality Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Applied Mathematics & Statistics (Krieger School of Arts & Sciences)",
    "faculty": "School Name: Krieger School of Arts & Sciences, Department of Applied Mathematics & Statistics",
    "duration_years": 2.0,
    "annual_fee_cad": 67233,
    "total_fee_cad": 134466,
    "min_class12_percent": 70,
    "required_subjects": [
      "Linear algebra",
      "multivariable calculus",
      "differential equations",
      "statistics",
      "probability",
      "programming (MATLAB, R, Python) experience valued"
    ],
    "entry_roles": [
      "Data Scientist",
      "Statistical Analyst",
      "Risk Analyst",
      "Quantitative Analyst",
      "Analytics Consultant",
      "Operations Research Analyst",
      "Machine Learning Engineer"
    ],
    "features": []
  }
]);

// --- MICHIGAN STATE UNIVERSITY ---
const univ_michiganstateuniversity = db.institutions.insertOne(inst({
  "name": "MICHIGAN STATE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "East Lansing",
  "province": "Michigan",
  "country": "USA",
  "campuses": [
    "East Lansing"
  ],
  "website": "https://www.msu.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "oiss@msu.edu",
      "phone": "https://broad.msu.edu/ | Phone: 517-355-7604 | mba@msu.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International Tuition Award: Merit-based; $5,000\u2013$10,000 per year (automatic consideration)"
    },
    {
      "name": "MSU Presidential Scholarship: $15,000\u2013$25,000 per year (competitive; limited availability)"
    },
    {
      "name": "Broad Graduate Fellowships: Up to $20,000 (for business graduate students)"
    },
    {
      "name": "Department-specific Assistantships: Graduate research and teaching assistantships available"
    },
    {
      "name": "QS Connect Master\u2019s Scholarship: $5,000 per year (merit-based)"
    },
    {
      "name": "Approximately 67% of students receive some form of scholarship support"
    },
    {
      "name": "Multiple sources of funding available through departments and colleges"
    }
  ],
  "internships": {
    "employment_rate_percent": 5
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities:"
  },
  "security": {
    "detail": "Emergency preparedness and safety education programs"
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

addPrograms(univ_michiganstateuniversity, "MICHIGAN STATE UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science & Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical & Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Science & Technology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
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
    "name": "Master of Science in Business Data Science and Analytics",
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
    "name": "Master of Business Administration (Full-Time)",
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
    "name": "Master of Science in Supply Chain Management",
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
    "name": "Master of Science in Information Systems",
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
    "name": "UG Course : Bachelor of Science in Computer Science & Engineering",
    "faculty": "Department of Computer Science & Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 469,
    "total_fee_cad": 1876,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (4 years)",
      "Physics",
      "Chemistry (3 years) recommended"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "embedded systems engineer",
      "AI/ML engineer",
      "cybersecurity specialist",
      "full-stack developer",
      "data engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 469,
    "total_fee_cad": 1876,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "aerospace engineer",
      "design engineer",
      "manufacturing engineer",
      "automotive engineer",
      "thermal engineer",
      "HVAC systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical & Computer Engineering",
    "faculty": "Department of Electrical & Computer Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 469,
    "total_fee_cad": 1876,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "telecommunications engineer",
      "circuit design engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 469,
    "total_fee_cad": 1876,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "marketing specialist",
      "operations manager",
      "supply chain coordinator",
      "product manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Information Science & Technology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 469,
    "total_fee_cad": 1876,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "computer science preferred"
    ],
    "entry_roles": [
      "IT systems administrator",
      "network administrator",
      "database administrator",
      "IT security specialist",
      "IT support engineer",
      "business systems analyst",
      "solutions architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science & Engineering",
    "faculty": "Department of Computer Science & Engineering, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 469,
    "total_fee_cad": 938,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "electrical engineering",
      "mathematics",
      "or related field required"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "cloud architect",
      "cybersecurity engineer",
      "data engineer",
      "research engineer",
      "solutions architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Business Data Science and Analytics",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 53819,
    "total_fee_cad": 107638,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "quantitative background (statistics, mathematics, programming) beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "management consultant",
      "operations analyst",
      "financial analyst",
      "analytics engineer",
      "supply chain analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 53819,
    "total_fee_cad": 107638,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline (no specific major required)"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "product manager",
      "business development executive",
      "entrepreneur",
      "supply chain manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Supply Chain Management",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 39571,
    "total_fee_cad": 79142,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "business/engineering/economics background valued"
    ],
    "entry_roles": [
      "Supply chain manager",
      "procurement specialist",
      "operations manager",
      "logistics coordinator",
      "demand planner",
      "supplier quality engineer",
      "continuous improvement manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Systems",
    "faculty": "Department of Information Sciences & Technology",
    "duration_years": 2,
    "annual_fee_cad": 57281,
    "total_fee_cad": 114562,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "information technology",
      "computer science",
      "or related field",
      "some IT background beneficial"
    ],
    "entry_roles": [
      "Systems analyst",
      "business systems analyst",
      "IT project manager",
      "enterprise architect",
      "information security analyst",
      "database administrator",
      "IT consultant"
    ],
    "features": []
  }
]);

// --- DUKE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE ---
const univ_dukeuniversitycomprehensiveinternationalstudentguide = db.institutions.insertOne(inst({
  "name": "DUKE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE",
  "abbreviation": "",
  "type": "university",
  "city": "Durham",
  "province": "North Carolina",
  "country": "USA",
  "campuses": [
    "Durham"
  ],
  "website": "https://gradschool.duke.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "Office of Undergraduate Admissions, 2138 Campus Drive, Durham, NC 27708",
      "phone": "(919) 684-2444 (or 911 for emergencies)",
      "email": "visahelp@duke.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Karsh International Scholars Program: Full-ride scholarship (tuition, mandatory fees, room, board for 4 years; 3 summers of enrichment funding) for international undergraduates demonstrating exceptional merit and financial need"
    },
    {
      "name": "Need-based financial aid: Available for international undergraduates on demonstrated need basis; must indicate financial aid interest at application"
    },
    {
      "name": "Graduate funding: Merit-based scholarships, fellowships, and teaching/research assistantships available (primarily for Ph.D. students)"
    },
    {
      "name": "Note: Limited to no funding available for international transfer or many master\u2019s programs"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student Government, Duke University Union (DUU), and 32+ sport clubs",
    "housing": "Student housing with common rooms, kitchens, game tables, laundry facilities"
  },
  "security": {
    "detail": "Electronic alarm systems, security phones, and emergency alert network across campus"
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

addPrograms(univ_dukeuniversitycomprehensiveinternationalstudentguide, "DUKE UNIVERSITY: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE", [
  {
    "level": "UG",
    "name": "Computer Science",
    "faculty": "",
    "duration_years": 4,
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
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biomedical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Public Policy Studies",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
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
    "name": "Master of Science in Biomedical Engineering",
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
    "name": "Daytime MBA (Fuqua)",
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
    "name": "Master of Public Policy (MPP)",
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
    "name": "Master of Science in Quantitative Financial Economics",
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
    "name": "UG Course: Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 135240,
    "total_fee_cad": 540960,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong background in mathematics",
      "science recommended"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "cybersecurity analyst",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course: Bachelor of Arts/Science in Economics",
    "faculty": "Department name: Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 96965,
    "total_fee_cad": 387860,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics",
      "analytical skills"
    ],
    "entry_roles": [
      "Financial analyst",
      "economist",
      "management consultant",
      "policy analyst",
      "investment banker"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course: Bachelor of Science/Arts in Biology",
    "faculty": "Department name: Department of Biology",
    "duration_years": 4.0,
    "annual_fee_cad": 96965,
    "total_fee_cad": 387860,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "mathematics",
      "life sciences"
    ],
    "entry_roles": [
      "Research scientist",
      "healthcare professional",
      "biotech specialist",
      "environmental consultant",
      "medical school (pre-med track)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course: Bachelor of Science in Biomedical Engineering",
    "faculty": "Department name: Department of Biomedical Engineering (Pratt School of Engineering)",
    "duration_years": 4.0,
    "annual_fee_cad": 96965,
    "total_fee_cad": 387860,
    "min_class12_percent": 70,
    "required_subjects": [
      "Pre-calculus/calculus",
      "physics",
      "chemistry",
      "biology recommended"
    ],
    "entry_roles": [
      "Biomedical engineer",
      "medical device designer",
      "healthcare consultant",
      "research scientist",
      "biomechanics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course: Bachelor of Arts in Public Policy Studies",
    "faculty": "Department name: Sanford School of Public Policy",
    "duration_years": 4.0,
    "annual_fee_cad": 96965,
    "total_fee_cad": 387860,
    "min_class12_percent": 70,
    "required_subjects": [
      "Social sciences",
      "history",
      "economics recommended"
    ],
    "entry_roles": [
      "Policy analyst",
      "government advisor",
      "international development consultant",
      "nonprofit manager",
      "public affairs specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course: Master of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science, Duke University",
    "duration_years": 2.0,
    "annual_fee_cad": 93459,
    "total_fee_cad": 186918,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "discrete mathematics"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "research scientist",
      "technology consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course: Master of Science in Biomedical Engineering",
    "faculty": "Department name: Department of Biomedical Engineering (Pratt School of Engineering)",
    "duration_years": 2.0,
    "annual_fee_cad": 91052,
    "total_fee_cad": 182104,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong background in mathematics",
      "physics",
      "life sciences"
    ],
    "entry_roles": [
      "Biomedical engineer",
      "medical device designer",
      "research scientist",
      "biotechnology consultant",
      "healthcare innovation manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course: Daytime MBA (Fuqua School of Business)",
    "faculty": "Department name: Fuqua School of Business, Duke University",
    "duration_years": 2.0,
    "annual_fee_cad": 158633,
    "total_fee_cad": 317266,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field",
      "quantitative skills preferred"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "corporate finance manager",
      "strategy consultant",
      "technology leader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course: Master of Public Policy (MPP)",
    "faculty": "Department name: Sanford School of Public Policy, Duke University",
    "duration_years": 2.0,
    "annual_fee_cad": 93459,
    "total_fee_cad": 186918,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field",
      "economics",
      "statistics recommended for prerequisites"
    ],
    "entry_roles": [
      "Policy analyst",
      "government official",
      "development specialist",
      "international consultant",
      "nonprofit director"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course: Master of Science in Quantitative Financial Economics",
    "faculty": "Department name: Graduate School, Duke University",
    "duration_years": 2.0,
    "annual_fee_cad": 89865,
    "total_fee_cad": 179730,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative skills",
      "calculus",
      "linear algebra",
      "statistics required"
    ],
    "entry_roles": [
      "Quantitative analyst",
      "financial economist",
      "investment analyst",
      "risk manager",
      "academic researcher"
    ],
    "features": []
  }
]);

// --- UT AUSTIN UNIVERSITY ---
const univ_utaustinuniversity = db.institutions.insertOne(inst({
  "name": "UT AUSTIN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Austin",
  "province": "Texas",
  "country": "USA",
  "campuses": [
    "Austin"
  ],
  "website": "https://www.austin.utexas.edu",
  "application_portal": "https://gradschool.utexas.edu/admissions/apply",
  "contacts": {
    "admissions": {
      "email": "hotline@austin.utexas.edu",
      "phone": "(512) 471-2477",
      "address": "2400 Nueces Street, Suite B, Austin, TX 78705"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 124,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Iimura Peace Endowed Scholarship: $5,000 (Asia focus)"
    },
    {
      "name": "Khalid Alhilali Memorial Scholarship: $2,500 (Middle East education background)"
    },
    {
      "name": "Society of Iranian-American Women (SIAWE) Scholarship: $3,500 (Iranian descent; GPA 3.0+)"
    },
    {
      "name": "International Education Fee Scholarship: Varies"
    },
    {
      "name": "Ethel Loving de Diaz Scholarship: International UG/PG (GPA 2.0+)"
    },
    {
      "name": "PART Austin Scholarship: $2,000 (Latin American students)"
    },
    {
      "name": "Teaching Assistant (TA): Tuition reduction + ~$1,800/month"
    },
    {
      "name": "Graduate Research Assistant (GRA): Full tuition waiver + $3,000+/month"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "HornsLink Platform: Central hub for clubs and events"
  },
  "security": {
    "detail": "Emergency Alerts: Text and email notification system"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "MS Computer Science",
    "MBA",
    "Master in Professional Accounting (MPA)",
    "MS Business Analytics (MSBA)",
    "MS Information Studies (MSIS)"
  ]
})).insertedId;

addPrograms(univ_utaustinuniversity, "UT AUSTIN UNIVERSITY", [
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "Department Name: Department of Computer Science, College of Natural Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus)",
      "Physics",
      "Chemistry",
      "English"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Security Engineer",
      "Software Developer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Informatics",
    "faculty": "Department Name: School of Information (UT iSchool)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Computer Science/Programming (helpful)",
      "English"
    ],
    "entry_roles": [
      "UX/UI Designer",
      "Information Architect",
      "Data Analyst",
      "Digital Strategist",
      "User Researcher",
      "Systems Analyst",
      "Web Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA Finance",
    "faculty": "Department Name: McCombs School of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus)",
      "English"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Manager",
      "Credit Analyst",
      "Equity Research Analyst",
      "Corporate Finance Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BBA Business Administration",
    "faculty": "Department Name: McCombs School of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "English"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Marketing Manager",
      "Operations Manager",
      "Project Manager",
      "Supply Chain Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "Department Name: Cockrell School of Engineering, Mechanical Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (calculus)",
      "English"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "CAD Technician",
      "Process Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 28979,
    "total_fee_cad": 57958,
    "min_class12_percent": 70,
    "required_subjects": [
      "Discrete Math",
      "Introduction to Programming",
      "Data Structures",
      "Algorithms",
      "Complexity",
      "Computer Organization",
      "Architecture",
      "Principles of Computer Systems"
    ],
    "entry_roles": [
      "Machine Learning Engineer",
      "Software Engineer",
      "Data Scientist",
      "AI Engineer",
      "Security Engineer",
      "Backend Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "Department Name: McCombs School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 84475,
    "total_fee_cad": 168950,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "average 3-4 years work experience (not mandatory)"
    ],
    "entry_roles": [
      "Management Consultant",
      "Investment Manager",
      "Product Manager",
      "Corporate Finance Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Professional Accounting (MPA)",
    "faculty": "Department Name: McCombs School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 48299,
    "total_fee_cad": 96598,
    "min_class12_percent": 70,
    "required_subjects": [
      "Financial Accounting I & II preferred",
      "pre-enrollment courses may be required"
    ],
    "entry_roles": [
      "Certified Public Accountant (CPA)",
      "Auditor",
      "Financial Analyst",
      "Internal Auditor",
      "Tax Accountant",
      "Controller"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Business Analytics (MSBA)",
    "faculty": "Department Name: McCombs School of Business",
    "duration_years": 2,
    "annual_fee_cad": 80040,
    "total_fee_cad": 160080,
    "min_class12_percent": 70,
    "required_subjects": [
      "Basic statistics",
      "Excel",
      "SQL helpful but not required (bootcamp provided)"
    ],
    "entry_roles": [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Consultant",
      "Data Scientist",
      "Product Analyst",
      "Operations Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Information Studies (MSIS)",
    "faculty": "Department Name: School of Information (UT iSchool)",
    "duration_years": 1.5,
    "annual_fee_cad": 30419,
    "total_fee_cad": 45628,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field",
      "no specific prerequisites"
    ],
    "entry_roles": [
      "Information Architect",
      "Data Scientist",
      "Systems Analyst",
      "Information Manager",
      "UX Researcher",
      "Knowledge Manager",
      "Digital Strategist"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF CALIFORNIA, DAVIS ---
const univ_universityofcaliforniadavis = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF CALIFORNIA, DAVIS",
  "abbreviation": "UC DAVIS",
  "type": "university",
  "city": "Davis",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Davis"
  ],
  "website": "https://www.ucdavis.edu",
  "application_portal": "UC Davis Graduate Application (https://grad.ucdavis.edu/apply)",
  "contacts": {
    "admissions": {
      "phone": "(530) 752-1011",
      "email": "finaid@ucdavis.edu",
      "address": "One Shields Avenue, Davis, CA 95616"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 110,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Link: https://financeandbusiness.ucdavis.edu/"
    },
    {
      "name": "Phone: (530) 752-2390 (Undergraduate); (530) 752-9246 (Graduate)"
    },
    {
      "name": "Email: finaid@ucdavis.edu"
    },
    {
      "name": "Address: 1100 Dutton Hall, Davis, CA 95616"
    },
    {
      "name": "Phone: (530) 752-1011"
    },
    {
      "name": "Link: https://www.ucdavis.edu/"
    },
    {
      "name": "Address: One Shields Avenue, Davis, CA 95616"
    },
    {
      "name": "Academic Requirement: High school completion (Class 12 equivalent); minimum GPA 3.4 (85%+); highly competitive students typically 3.7+ GPA"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ OR IELTS 6.5+ OR Duolingo 115+ OR PTE 53+ \u2014 REQUIRED for non-native English speakers (India NOT exempt)"
    },
    {
      "name": "Standardized Tests: SAT or ACT optional but recommended for international applicants"
    },
    {
      "name": "Additional Requirements: Official high school transcripts (all grades); Common App essays/personal statements; official English translations of non-English documents"
    },
    {
      "name": "Academic Requirement: Bachelor\u2019s degree equivalent (4-year or recognized 3-year); minimum GPA 3.0 (80%+); 3.0+ typical; program-specific minimums vary"
    },
    {
      "name": "Important Note: 3-year Indian bachelor\u2019s degrees assessment based on national education system characteristics, institution type, and study level; may require credential evaluation"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ OR IELTS 6.5+ OR PTE 53+ \u2014 REQUIRED for non-native speakers"
    },
    {
      "name": "Additional Requirements: GRE/GMAT (program-dependent; some programs waive with 3+ years professional experience + 3.0 UG GPA); transcripts; 2 letters of recommendation; statement of purpose; resume/CV; official English translations for non-US degrees"
    },
    {
      "name": "Fall Intake (Primary): August enrollment"
    },
    {
      "name": "Application Opens: August 1 (yearly)"
    },
    {
      "name": "Regular Deadline (International): November 30"
    },
    {
      "name": "Decisions Posted: March-April"
    },
    {
      "name": "Enrollment Deposit: May 1"
    },
    {
      "name": "Spring Intake: January enrollment"
    },
    {
      "name": "Deadline: October 15 (if available)"
    },
    {
      "name": "Fall Intake (Primary): September enrollment"
    },
    {
      "name": "Application Period: Varies by program (typically September-May)"
    },
    {
      "name": "Standard Deadline: March 1-April 1 (most programs; varies)"
    },
    {
      "name": "International Deadline: March 1 (priority; some programs December 15-January 31)"
    },
    {
      "name": "Rolling Admissions: Some programs review continuously; early application recommended"
    },
    {
      "name": "Most aid is need-based and available only through UC system"
    },
    {
      "name": "International students NOT eligible for federal/state aid"
    },
    {
      "name": "Institutional Support: Limited scholarships (varies by program/availability)"
    },
    {
      "name": "Merit-Based Funding: Limited; program and availability dependent"
    },
    {
      "name": "Some departments offer Teaching/Research Assistantships (tuition reduction + stipend; competitive)"
    },
    {
      "name": "GRE/GMAT waivers: Available for applicants with 3+ years professional experience + 3.0+ UG GPA or doctorate holders"
    },
    {
      "name": "International Students: NOT eligible for federal/state aid; must demonstrate financial capability"
    },
    {
      "name": "External Scholarship Eligibility: Eligible for non-US scholarships (J.N. Tata Endowment, Indian government scholarships, Quad Fellowship for STEM, etc.)"
    }
  ],
  "internships": {
    "part_time_work": "Co-op Programs: Available in Engineering (alternating work/study)",
    "coop_available": true,
    "employment_rate_percent": 85
  },
  "campus_life": {
    "clubs": "Academic/Professional: Engineering clubs, business clubs, research organizations",
    "housing": "Housing: Residential communities; on-campus housing available"
  },
  "security": {
    "detail": "Emergency Alert System: Text/email notifications for campus safety alerts"
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

addPrograms(univ_universityofcaliforniadavis, "UNIVERSITY OF CALIFORNIA, DAVIS", [
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Civil Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biochemistry and Molecular Biology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
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
    "name": "MS Mechanical Engineering",
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
    "name": "MS Agricultural and Environmental Management",
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
    "name": "MS Food Science",
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
    "name": "BS Computer Science",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 70344,
    "total_fee_cad": 281376,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics",
      "Computer science foundation"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Backend Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 70344,
    "total_fee_cad": 281376,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, differential equations)",
      "Physics",
      "Chemistry"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "Thermal Engineer",
      "Robotics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Civil Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 70344,
    "total_fee_cad": 281376,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, differential equations)",
      "Physics",
      "Chemistry"
    ],
    "entry_roles": [
      "Civil Engineer",
      "Structural Engineer",
      "Project Engineer",
      "Transportation Engineer",
      "Water Resources Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 70344,
    "total_fee_cad": 281376,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics",
      "Chemistry"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Hardware Engineer",
      "Telecommunications Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biochemistry and Molecular Biology",
    "faculty": "College Name: College of Biological Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 70344,
    "total_fee_cad": 281376,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (calculus)",
      "Physics"
    ],
    "entry_roles": [
      "Biomedical Scientist",
      "Research Scientist",
      "Biochemist",
      "Pharmaceutical Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 41735,
    "total_fee_cad": 83470,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "systems programming"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Backend Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "School Name: Graduate School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 41735,
    "total_fee_cad": 83470,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "diverse backgrounds welcomed"
    ],
    "entry_roles": [
      "Management Consultant",
      "Product Manager",
      "Business Analyst",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Mechanical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 41735,
    "total_fee_cad": 83470,
    "min_class12_percent": 70,
    "required_subjects": [
      "Thermodynamics",
      "fluid mechanics",
      "dynamics"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Manufacturing Engineer",
      "Thermal Engineer",
      "Design Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Agricultural and Environmental Management",
    "faculty": "College Name: College of Agricultural and Environmental Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 41735,
    "total_fee_cad": 83470,
    "min_class12_percent": 70,
    "required_subjects": [
      "Agriculture",
      "environmental science",
      "natural resources"
    ],
    "entry_roles": [
      "Environmental Manager",
      "Agricultural Consultant",
      "Policy Analyst",
      "Sustainability Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Food Science",
    "faculty": "College Name: College of Agricultural and Environmental Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 41735,
    "total_fee_cad": 83470,
    "min_class12_percent": 70,
    "required_subjects": [
      "Food chemistry",
      "microbiology",
      "food processing",
      "nutrition"
    ],
    "entry_roles": [
      "Food Scientist",
      "Quality Control Manager",
      "Product Development Scientist",
      "Food Safety Manager"
    ],
    "features": []
  }
]);

// --- UC Berkeley: Official Information for Indian Students ---
const univ_ucberkeleyofficialinformationforindianstudents = db.institutions.insertOne(inst({
  "name": "UC Berkeley: Official Information for Indian Students",
  "abbreviation": "",
  "type": "university",
  "city": "Berkeley",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Berkeley"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(510) 642-2818"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 131,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Scholarship names:"
    },
    {
      "name": "Regents\u2019 and Chancellor\u2019s Scholarship (merit-based, up to $10,000/year)"
    },
    {
      "name": "Berkeley International Office (BIO) Need-Based Grants"
    },
    {
      "name": "Berkeley International Achievement Awards"
    },
    {
      "name": "Fulbright Foreign Student Program (graduate)"
    },
    {
      "name": "Department-specific fellowships and assistantships"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student clubs, activities, facilities: 1,200+ student organizations including cultural associations, academic clubs, and recreational groups; state-of-the-art libraries, research labs, fitness centers, and performance venues"
  },
  "security": {
    "detail": "Partnerships & coordination: Direct coordination with Berkeley Police Department, emergency medical services, and regional law enforcement agencies; Berkeley Alert emergency notification system"
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

addPrograms(univ_ucberkeleyofficialinformationforindianstudents, "UC Berkeley: Official Information for Indian Students", [
  {
    "level": "UG",
    "name": "Computer Science,",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering & Computer Sciences,",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration,",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Data Science,",
    "faculty": "",
    "duration_years": 4,
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
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science,",
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
    "name": "MBA (Haas School of Business),",
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
    "name": "MS in Electrical Engineering & Computer Sciences,",
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
    "name": "Master of Financial Engineering,",
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
    "name": "Master of Information Management and Systems",
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
    "name": "Computer Science",
    "faculty": "Department name: Department of Economics, UC Berkeley",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "UC \u201cA-G\u201d pattern \u2013 4 years English",
      "3 years college-prep math",
      "2 years lab science",
      "2 years history/social science",
      "2 years second language",
      "1 year visual/performing arts",
      "1 additional college-prep elective"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (MS) in Computer Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Sufficient undergraduate training in computer science"
    ],
    "entry_roles": [
      "Industrial R&D positions",
      "academics (with PhD continuation)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Haas School of Business)",
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
    "name": "Master of Business Administration (MBA) \u2013 Full-time",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 122865,
    "total_fee_cad": 245730,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific prerequisites"
    ],
    "entry_roles": [
      "Product management",
      "strategy",
      "operations",
      "consulting",
      "finance",
      "business development"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS in Electrical Engineering & Computer Sciences (EECS)",
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
    "name": "Master of Science (MS) in Electrical Engineering & Computer Sciences",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Sufficient undergraduate training in electrical engineering or computer science field"
    ],
    "entry_roles": [
      "Industrial R&D positions",
      "academics (with PhD continuation)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Financial Engineering (MFE)",
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
    "name": "Master of Financial Engineering (MFE)",
    "faculty": "Department name: School of Information (I School)",
    "duration_years": 2,
    "annual_fee_cad": 127304,
    "total_fee_cad": 254608,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative background (linear algebra, multivariate calculus, differential equations, numerical analysis, advanced statistics/probability)",
      "programming experience (C++, Python)",
      "familiarity with computers as computational tools"
    ],
    "entry_roles": [
      "Product Manager",
      "Data Scientist",
      "Machine Learning Engineer",
      "Software Engineer",
      "UX Designer",
      "UX Researcher",
      "Tech Policy Specialist",
      "Data Engineer",
      "AI Engineer"
    ],
    "features": []
  }
]);

// --- ILLINOIS INSTITUTE OF TECHNOLOGY ---
const univ_illinoisinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "ILLINOIS INSTITUTE OF TECHNOLOGY",
  "abbreviation": "",
  "type": "university",
  "city": "Chicago",
  "province": "Illinois",
  "country": "USA",
  "campuses": [
    "Chicago"
  ],
  "website": "www.iit.edu/admissions-aid/graduate-admission",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "312-567-6800",
      "email": "careerservices@illinoistech.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 69,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes (merit-based only)"
    },
    {
      "name": "Flagship Scholarship: Available to qualified international students"
    },
    {
      "name": "UB Presidential Scholarship: For Honors College-eligible students"
    },
    {
      "name": "Scholarship range: $40,000-$100,000+ for undergraduate"
    },
    {
      "name": "Internship Equity Fund: Up to $3,500 for unpaid internships (non-profits/government)"
    },
    {
      "name": "Automatic consideration: Merit scholarships reviewed during admissions process"
    },
    {
      "name": "Renewable: With good academic standing (minimum 3.0 GPA)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student organizations: 150+ clubs (cultural, professional, sports, arts, engineering societies)",
    "housing": "Student housing: 11 residence halls on Mies Campus"
  },
  "security": {
    "detail": "IIT Alert: Emergency notification system via text, phone, and email"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science",
    "Master of Advanced Studies in Data Science",
    "Master of Science in Electrical Engineering",
    "Master of Business Administration (Full-Time)",
    "Master of Science in Engineering Sciences (Artificial Intelligence / Advanced programs)"
  ]
})).insertedId;

addPrograms(univ_illinoisinstituteoftechnology, "ILLINOIS INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: College of Computing, Department of Computer and Electrical Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics",
      "Physics (strong foundation)"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Analyst",
      "Web Developer",
      "Data Analyst",
      "Machine Learning Engineer",
      "AI Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "Department name: Stuart School of Business",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics",
      "English"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Financial Analyst",
      "Marketing Manager",
      "Strategy Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department name: Armour College of Engineering, Department of Mechanical, Materials and Aerospace Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (strong foundation)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "CAD Technician",
      "Systems Engineer",
      "Thermal Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department name: Armour College of Engineering, Department of Computer and Electrical Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Electronics Engineer",
      "Control Systems Engineer",
      "Embedded Systems Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Aerospace Engineering",
    "faculty": "Department name: Armour College of Engineering, Department of Mechanical, Materials and Aerospace Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 85,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years)",
      "strength in mechanics recommended"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Flight Test Engineer",
      "Structural Analyst",
      "Systems Engineer",
      "Propulsion Engineer",
      "Aerodynamics Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: College of Computing, Department of Computer and Electrical Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Programming fundamentals",
      "data structures",
      "algorithms"
    ],
    "entry_roles": [
      "Senior Software Engineer",
      "Systems Architect",
      "Machine Learning Engineer",
      "AI Researcher",
      "Cloud Engineer",
      "Software Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Advanced Studies in Data Science",
    "faculty": "Department name: College of Computing, Department of Computer Science (Joint Program with Mathematics and Statistics)",
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
    "name": "5-2 years (18-24 months) | Full-time study mode; part-time, and online/hybrid options available (33 credit hours)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Linear algebra",
      "calculus",
      "probability & statistics",
      "programming (Python/Java/C++)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Business Intelligence Analyst",
      "AI Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical Engineering",
    "faculty": "Department name: Armour College of Engineering, Department of Computer and Electrical Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuit analysis",
      "electronics",
      "electromagnetics",
      "signals",
      "systems"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Control Systems Engineer",
      "VLSI Design Engineer",
      "Embedded Systems Engineer",
      "Communications Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "Department name: Stuart School of Business",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field acceptable (prerequisites: Statistics grade B+; Economics grade B+ - can be completed online if lacking)"
    ],
    "entry_roles": [
      "Product Manager",
      "Management Consultant",
      "Strategy Manager",
      "Business Analyst",
      "Finance Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Engineering Sciences (Artificial Intelligence)",
    "faculty": "Department name: College of Computing & Armour College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in programming",
      "linear algebra",
      "calculus",
      "statistics",
      "machine learning"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Deep Learning Specialist",
      "AI Researcher",
      "Robotics Engineer",
      "AI Systems Engineer",
      "Natural Language Processing Engineer"
    ],
    "features": []
  }
]);

// --- New York University ---
const univ_newyorkuniversity = db.institutions.insertOne(inst({
  "name": "New York University",
  "abbreviation": "NYU",
  "type": "university",
  "city": "New York City",
  "province": "New York",
  "country": "USA",
  "campuses": [
    "New York City"
  ],
  "website": "www.nyu.edu/academics/departments-and-programs.html",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(646) 997-3182",
      "address": "6 MetroTech Center, Brooklyn, NY 11201",
      "email": "gsas.admissions@nyu.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 103,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "NYU Promise: Families with income under $100,000 pay no tuition (first-year undergraduates on NY campus)"
    },
    {
      "name": "Global Pathways Scholarship: Up to $4,000 per semester for students at NYU Global Academic Centers"
    },
    {
      "name": "Study Away Need-Based Grants: For semester-long study at NYU Academic Centers"
    },
    {
      "name": "International Student Scholarship: $5,000\u2013$10,000 annually for students on F-1 visas pursuing specific Master\u2019s programs"
    },
    {
      "name": "CAS Dean\u2019s Opportunity Fund for Study Away: Up to $1,500 in need-based assistance for qualifying students"
    },
    {
      "name": "NYU meets 100% demonstrated financial need for first-year admitted undergraduates (NY campus)"
    },
    {
      "name": "Need-based assistance available; determined by CSS Profile submission"
    },
    {
      "name": "Merit-based scholarships available for exceptional academic backgrounds"
    },
    {
      "name": "Federal Work-Study programs available"
    },
    {
      "name": "Private loans available (not recommended for high debt)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Tech clubs: tech@nyu, freshman circuit, entrepreneurship groups"
  },
  "security": {
    "detail": "Emergency Services: 911 for life-threatening emergencies; Campus Safety (212-998-2222) for non-emergencies"
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

addPrograms(univ_newyorkuniversity, "New York University", [
  {
    "level": "UG",
    "name": "BS in Business \u2013 NYU Stern (13 concentrations, STEM-eligible)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Business, Technology and Entrepreneurship \u2013 NYU Stern (Khubani program)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Computer Science \u2013 NYU Tandon School of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Mechanical Engineering \u2013 NYU Tandon School of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Electrical Engineering and Computer Engineering \u2013 NYU Tandon School of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Full-Time) \u2013 NYU Stern School of Business (2 years)",
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
    "name": "MS in Data Science \u2013 College of Arts & Science (2 years, 36 credits)",
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
    "name": "MS in Computer Science \u2013 NYU Tandon / Bowers College of Computing (2\u20133 years)",
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
    "name": "MS in Business Analytics and AI \u2013 NYU Stern (2 years)",
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
    "name": "MS in Financial Engineering \u2013 NYU Tandon School of Engineering (2 years)",
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
    "name": "BS in Business",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 89290,
    "total_fee_cad": 357160,
    "min_class12_percent": 92,
    "required_subjects": [
      "No specific subjects mandated",
      "well-rounded coursework preferred",
      "STEM courses recommended"
    ],
    "entry_roles": [
      "Investment banker",
      "management consultant",
      "financial analyst",
      "product manager",
      "corporate finance analyst",
      "equity researcher",
      "marketing manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Business, Technology and Entrepreneurship (Khubani BTE)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 89290,
    "total_fee_cad": 357160,
    "min_class12_percent": 92,
    "required_subjects": [
      "Strong mathematics",
      "science",
      "technology foundation preferred",
      "computer science",
      "coding",
      "or engineering background beneficial"
    ],
    "entry_roles": [
      "Business",
      "technology roles at tech companies (FAANG, startups)",
      "management consulting",
      "investment banking",
      "product manager",
      "data analyst",
      "entrepreneur/founder",
      "operations analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Computer Science",
    "faculty": "NYU Tandon School of Engineering (Primary) OR NYU Bowers College of Computing and Information Science",
    "duration_years": 4,
    "annual_fee_cad": 89290,
    "total_fee_cad": 357160,
    "min_class12_percent": 92,
    "required_subjects": [
      "Strong mathematics",
      "physics",
      "chemistry",
      "computer science foundation",
      "coding experience beneficial"
    ],
    "entry_roles": [
      "Software engineer",
      "data analyst",
      "product engineer",
      "systems engineer",
      "research engineer",
      "full-stack developer",
      "machine learning engineer",
      "software developer at tech companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Mechanical Engineering",
    "faculty": "NYU Tandon School of Engineering (Department of Mechanical and Aerospace Engineering)",
    "duration_years": 4,
    "annual_fee_cad": 77832,
    "total_fee_cad": 311328,
    "min_class12_percent": 92,
    "required_subjects": [
      "Strong foundation in mathematics",
      "physics",
      "chemistry",
      "calculus",
      "prior engineering coursework or AP classes beneficial"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "systems engineer",
      "product development engineer",
      "consultant",
      "R&D engineer at automotive",
      "aerospace",
      "robotics",
      "energy",
      "manufacturing sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS in Electrical Engineering and Computer Engineering",
    "faculty": "NYU Tandon School of Engineering (Department of Electrical and Computer Engineering)",
    "duration_years": 4,
    "annual_fee_cad": 89290,
    "total_fee_cad": 357160,
    "min_class12_percent": 92,
    "required_subjects": [
      "Advanced mathematics (calculus, linear algebra)",
      "physics",
      "computer science",
      "electronics fundamentals",
      "AP Physics",
      "AP Computer Science recommended"
    ],
    "entry_roles": [
      "Electrical engineer",
      "embedded systems engineer",
      "power engineer",
      "circuit designer",
      "network engineer",
      "software engineer",
      "systems engineer",
      "controls engineer at tech companies",
      "semiconductor firms",
      "power utilities",
      "telecommunications"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MBA (Full-Time)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 123543,
    "total_fee_cad": 494172,
    "min_class12_percent": 70,
    "required_subjects": [
      "All disciplines accepted",
      "holistic review of academics",
      "professional achievements",
      "alignment with program values (IQ + EQ)"
    ],
    "entry_roles": [
      "Investment banker",
      "management consultant",
      "financial analyst",
      "product manager",
      "corporate finance analyst",
      "equity researcher",
      "management strategist",
      "data scientist",
      "marketing manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MS in Data Science",
    "faculty": "Center for Data Science (CDS) \u2013 College of Arts & Science (GSAS)",
    "duration_years": 4,
    "annual_fee_cad": 78171,
    "total_fee_cad": 312684,
    "min_class12_percent": 70,
    "required_subjects": [
      "Required coursework includes Calculus I",
      "Linear Algebra",
      "Intro to Computer Science (Python/R proficiency)",
      "diverse backgrounds accepted (Statistics, CS, Math, Engineering, Economics, Business, Biology, Physics, Psychology)"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data analyst",
      "research scientist",
      "business analyst",
      "quantitative analyst",
      "software engineer in tech/finance sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MS in Computer Science",
    "faculty": "Department of Computer Science and Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Undergraduate degree in Computer Science",
      "Mathematics",
      "Science",
      "or Engineering preferred",
      "applicants from other fields may require Bridge program (9-week preparatory)"
    ],
    "entry_roles": [
      "Software engineer",
      "full-stack developer",
      "machine learning engineer",
      "systems engineer",
      "data engineer",
      "research engineer",
      "product engineer at tech companies (FAANG)"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MS in Business Analytics and AI",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative",
      "analytical skills preferred",
      "business",
      "engineering",
      "or technical background valued"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "analytics manager",
      "product manager",
      "strategy consultant",
      "data-driven roles in tech/finance"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "MS in Financial Engineering",
    "faculty": "NYU Tandon School of Engineering (Department of Financial Engineering)",
    "duration_years": 4,
    "annual_fee_cad": 58001,
    "total_fee_cad": 232004,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Finance",
      "Physics",
      "Engineering",
      "Computer Science",
      "or Economics preferred",
      "strong quantitative foundation required"
    ],
    "entry_roles": [
      "Quantitative analyst",
      "financial engineer",
      "risk analyst",
      "derivatives trader",
      "portfolio analyst",
      "algorithmic trader",
      "investment banker",
      "data scientist in finance"
    ],
    "features": []
  }
]);

// --- Stanford University ---
const univ_stanforduniversity = db.institutions.insertOne(inst({
  "name": "Stanford University",
  "abbreviation": "",
  "type": "university",
  "city": "Stanford",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Stanford"
  ],
  "website": "https://bechtel.stanford.edu",
  "application_portal": "Stanford Graduate Application Portal",
  "contacts": {
    "admissions": {
      "phone": "(650) 723-3058",
      "email": "financialaid@stanford.edu",
      "address": "Financial Aid Office, Montag Hall 355 Galvez Street, Stanford, CA 94305\u20136106"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Phone: (650) 723-3058"
    },
    {
      "name": "Email: financialaid@stanford.edu"
    },
    {
      "name": "Department-specific contacts available at respective school/department websites"
    },
    {
      "name": "Academic Requirement: No official minimum GPA requirement; however, average admitted GPA is 3.95\u20134.0 (unweighted)"
    },
    {
      "name": "English Language Test: TOEFL iBT score of 100+ recommended (not required but strongly recommended if English is not first language); IELTS not accepted"
    },
    {
      "name": "Additional Requirements:"
    },
    {
      "name": "SAT or ACT scores (test-optional for 2023-2024 cycle, but recommended)"
    },
    {
      "name": "High school diploma or equivalent"
    },
    {
      "name": "Academic Requirement: Minimum 3.5 GPA (90%) on 4.0 scale"
    },
    {
      "name": "English Language Test: TOEFL iBT score of 100 required for all whose first language is not English (exceptions: degree from US, UK, Canada, Australia, New Zealand, Singapore)"
    },
    {
      "name": "Additional Requirements:"
    },
    {
      "name": "Bachelor\u2019s degree (4-year) or 3-year bachelor\u2019s + 2-year master\u2019s"
    },
    {
      "name": "GRE/GMAT (required for most programs)"
    },
    {
      "name": "Letters of recommendation (2\u20133)"
    },
    {
      "name": "Statement of Purpose/SOP"
    },
    {
      "name": "Major Intakes: Fall (August/September)"
    },
    {
      "name": "Application Deadlines:"
    },
    {
      "name": "Restrictive Early Action (REA): November 1"
    },
    {
      "name": "Regular Decision (RD): January 5, 2026"
    },
    {
      "name": "Transfer: March 15, 2026"
    },
    {
      "name": "Decision Release:"
    },
    {
      "name": "REA: Mid-December"
    },
    {
      "name": "RD: Early April"
    },
    {
      "name": "Master\u2019s/PhD Programs: Typically December\u2013January deadlines"
    },
    {
      "name": "MBA Program (Multiple Rounds):"
    },
    {
      "name": "Round 1: September 9, 2025 \u2192 Decision: December 10, 2025"
    },
    {
      "name": "Round 2: January 7, 2026 \u2192 Decision: April 2, 2026"
    },
    {
      "name": "Round 3: April 7, 2026 \u2192 Decision: May 28, 2026"
    },
    {
      "name": "Intake: Fall (August/September)"
    },
    {
      "name": "Knight-Hennessy Scholars Program: Full tuition + stipend + travel allowance (for graduate students)"
    },
    {
      "name": "Need-Based Aid (Postgraduate): Limited and merit-based"
    },
    {
      "name": "Teaching/Research Assistantships: Full tuition waiver + monthly stipend (graduate students)"
    },
    {
      "name": "Graduate Fellowships in STEM: Full tuition + living stipend"
    },
    {
      "name": "International students must declare financial need at time of application"
    },
    {
      "name": "SSN or ITIN required to access certain scholarship funds"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Specific Clubs: Stanford Solar Car Project, Robotics, Flight Club, Fashion, Student Space Initiative"
  },
  "security": {
    "detail": "Emergency services (911) available"
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

addPrograms(univ_stanforduniversity, "Stanford University", [
  {
    "level": "UG",
    "name": "Computer Science \u2014 Ranked 2nd globally (QS 2025); high demand, avg. salary ~\u20b950 lakhs",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics \u2014 Ranked 3rd globally; avg. salary ~\u20b966 lakhs",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (General) \u2014 Ranked 2nd globally; includes Mechanical, Electrical, Civil; avg. salary ~\u20b91 crore",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Symbolic Systems \u2014 Unique program in AI/cognitive systems; avg. salary ~\u20b970 lakhs+",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Human Biology \u2014 Popular life sciences track",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS in Computer Science \u2014 Most popular; ~2 years; avg. cost ~\u20b933.5 lakhs (USD 40,080)",
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
    "name": "MBA \u2014 2-year program; avg. cost ~\u20b976 lakhs (USD 90,858); strong placement (96% within 3 months)",
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
    "name": "MS in Management Science & Engineering (MS&E) \u2014 1\u20131.5 years; specialized tracks in Data, Finance; ~\u20b935.6 lakhs",
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
    "name": "MS in Electrical Engineering \u2014 ~1.5 years; cost ~\u20b935.6 lakhs",
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
    "name": "MS in Data Science \u2014 Emerging program; ~2 years; cost ~\u20b953,004",
    "faculty": "Department Name: Department of Computer Science, School of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 93468,
    "total_fee_cad": 373872,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years: USD 97,623 (approximately)",
    "faculty": "Department Name: Department of Electrical Engineering, School of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5 years: USD 97,623 (approximately)",
    "faculty": "Department name: Department of Statistics",
    "duration_years": 2.0,
    "annual_fee_cad": 43842,
    "total_fee_cad": 87684,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- SYRACUSE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS ---
const univ_syracuseuniversitycomprehensiveguideforinternationalstudents = db.institutions.insertOne(inst({
  "name": "SYRACUSE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS",
  "abbreviation": "",
  "type": "university",
  "city": "Syracuse",
  "province": "New York",
  "country": "USA",
  "campuses": [
    "Syracuse"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes \u2013 Merit-based awards available"
    },
    {
      "name": "Scholarship names and amounts:"
    },
    {
      "name": "Founders\u2019 Scholarship: $20,000/year"
    },
    {
      "name": "Chancellor\u2019s Scholarship: $15,000/year"
    },
    {
      "name": "Dean\u2019s Scholarship: $10,000/year"
    },
    {
      "name": "Excellence Scholarship (varies)"
    },
    {
      "name": "Archbold-Day Scholarship (varies)"
    },
    {
      "name": "Achievement Scholarship (varies)"
    },
    {
      "name": "Full Tuition 1870 Scholarship (select highly qualified students)"
    },
    {
      "name": "Individual college/school awards (varies by program)"
    },
    {
      "name": "Conditional admission pathway: English Language Institute (ELI) completion for students below English proficiency thresholds"
    }
  ],
  "internships": {
    "employment_rate_percent": 91
  },
  "campus_life": {
    "clubs": "Student clubs & organizations: 300+ recognized student organizations covering academic, cultural, political, professional, recreational and special interests"
  },
  "security": {
    "detail": "Partnerships & coordination: Partnerships with Syracuse City Police Department and regional law enforcement; proximity to VA Hospital, SUNY Upstate Medical University, and ESF enables rapid emergency response; Orange Alert crisis notification system (mobile/email/emergency notification); \u201cRun. Hide. Fight\u201d training available; case management teams for community safety; off-campus neighborhood safety patrols; evening student escort services available (Friday\u2013Saturday, 10:30 PM\u20133:30 AM); free shuttle vans available (9 PM\u20137 AM) with student ID"
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

addPrograms(univ_syracuseuniversitycomprehensiveguideforinternationalstudents, "SYRACUSE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS", [
  {
    "level": "UG",
    "name": "UG Course : Computer Science, B.S.",
    "faculty": "Department: College of Engineering and Computer Science (ECS) | https://ecs.syracuse.edu | (315) 443-1870",
    "duration_years": 4,
    "annual_fee_cad": 1104,
    "total_fee_cad": 4416,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (through pre-calculus)",
      "physics",
      "chemistry recommended | English language proficiency: TOEFL iBT 85 OR IELTS 6.5 OR Duolingo 115"
    ],
    "entry_roles": [
      "Yes \u2013 On-campus research opportunities",
      "external internships through Handshake platform",
      "MADO program | Entry-level job roles: Software engineer",
      "systems engineer",
      "network engineer",
      "hardware engineer",
      "database administrator",
      "cybersecurity analyst | Career support: Division of Career Services one-on-one advising",
      "career fairs with major tech companies (Google, Microsoft, Amazon, IBM, etc.)",
      "alumni mentorship network",
      "resume review sessions"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Business Administration, B.S.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 604,
    "total_fee_cad": 2416,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Yes \u2013 Business internships with corporations in New York state",
      "across USA",
      "financial firms",
      "consulting firms",
      "retail companies | Entry-level job roles: Business analyst",
      "financial analyst",
      "accounting associate",
      "management consultant",
      "operations coordinator",
      "supply chain analyst | Career support: Whitman School dedicated career center",
      "corporate recruiting partnerships",
      "annual career fair",
      "networking events with alumni in finance/business sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Information Management & Technology, B.S.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 413,
    "total_fee_cad": 1652,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Yes \u2013 IT internships with technology companies",
      "healthcare organizations",
      "government agencies",
      "data management projects | Entry-level job roles: IT analyst",
      "systems administrator",
      "database administrator",
      "information architect",
      "business analyst",
      "cybersecurity analyst | Career support: iSchool career advising",
      "tech company recruiting partnerships",
      "capstone project with industry sponsors",
      "mentorship program"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Communications, B.A./B.S.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 276,
    "total_fee_cad": 1104,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Yes \u2013 Media internships (broadcast, print, digital, public relations)",
      "news organizations",
      "PR firms",
      "corporate communications departments",
      "advertising agencies | Entry-level job roles: Journalist",
      "public relations specialist",
      "communications coordinator",
      "media producer",
      "content creator",
      "advertising account executive | Career support: Newhouse dedicated career services",
      "media company recruiting partnerships",
      "on-campus media production facilities",
      "internship placement assistance",
      "alumni network in broadcasting/journalism"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Engineering (General/Mechanical/Electrical/Civil), B.S.",
    "faculty": "College: College of Engineering and Computer Science | https://ecs.syracuse.edu | (315) 443-1870",
    "duration_years": 4,
    "annual_fee_cad": 1104,
    "total_fee_cad": 4416,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "chemistry",
      "advanced mathematics (calculus preferred) | TOEFL iBT 85 OR IELTS 6.5 OR Duolingo 115"
    ],
    "entry_roles": [
      "Yes \u2013 Engineering internships with manufacturing firms",
      "construction companies",
      "aerospace/defense contractors",
      "energy companies",
      "government agencies (Siemens, Lockheed Martin, major utilities)",
      "design projects | Entry-level job roles: Junior engineer",
      "design engineer",
      "process engineer",
      "project engineer",
      "civil engineer",
      "electrical engineer",
      "manufacturing engineer | Career support: ECS career services",
      "engineering company recruiting partnerships",
      "capstone design projects with industry mentors",
      "professional licensure (PE/FE) guidance",
      "networking with alumni engineers"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science, M.S.",
    "faculty": "Department: College of Engineering and Computer Science (ECS) | https://ecs.syracuse.edu/academics/computer-science/ | (315) 443-1870",
    "duration_years": 2,
    "annual_fee_cad": 413,
    "total_fee_cad": 826,
    "min_class12_percent": 70,
    "required_subjects": [
      "Minimum 3.0 GPA (60\u201365% equivalent for Indian degrees) in bachelor\u2019s degree | Relevant academic background: Computer science",
      "engineering",
      "mathematics",
      "or related field (proficiency in 2+ programming languages strongly preferred; prior coursework in data structures, algorithms, discrete mathematics) | English language test: TOEFL iBT 85 OR IELTS 6.5 OR Duolingo 115 | Work experience: Not required but preferred",
      "applicants with industry experience gain advantage"
    ],
    "entry_roles": [
      "Yes \u2013 Summer internships/paid internships through MADO program",
      "employer partnerships (Google, Microsoft, Qualcomm, etc.)",
      "research projects with faculty | Typical job roles: Software engineer",
      "machine learning engineer",
      "systems engineer",
      "cloud architect",
      "security engineer (median starting salary $95,000\u2013$110,000+ for top companies) | Career support: Career Services one-on-one advising",
      "exclusive employer networking events for CS students",
      "internship placement assistance",
      "resume review",
      "alumni mentorship in tech industry"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Applied Data Science, M.S.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Minimum 3.0 GPA on 4.0 scale (55\u201365% equivalent for Indian degrees) | Relevant academic background: STEM fields preferred (computer science, statistics, mathematics, engineering, physics)",
      "coursework in programming (Python/C/Java)",
      "calculus (1\u20133 courses)",
      "linear algebra",
      "probability/statistics required or strongly recommended | English language test: TOEFL iBT 90 OR IELTS 6.5 OR Duolingo 130 | Work experience: Not required",
      "portfolio/GitHub projects/Kaggle profiles encouraged"
    ],
    "entry_roles": [
      "Yes \u2013 Internship integrated within program structure",
      "employer partnerships with major tech firms",
      "analytics companies | Typical job roles: Data scientist",
      "machine learning engineer",
      "business intelligence analyst",
      "analytics engineer",
      "data analyst (median starting salary $85,000\u2013$110,000+) | Career support: iSchool career advising",
      "networking with Fortune 500 companies recruiting data scientists",
      "mentorship from industry data science professionals",
      "capstone project with real-world datasets"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration, M.B.A.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Minimum 3.0 GPA (55\u201365% equivalent for Indian degrees)",
      "4-year Bachelor\u2019s or Master\u2019s degree accepted | Relevant academic background: Any discipline accepted (engineering, sciences, business, humanities all welcome)",
      "diverse cohort encouraged | English language test: TOEFL iBT 90\u2013100 OR IELTS 7.0+ OR Duolingo 120+ (varies; check program-specific requirements) | Work experience: 2\u20135 years professional experience preferred",
      "average admitted student has ~5 years work experience (not required for admission but strengthens candidacy)",
      "GMAT recommended (scores not required but strongly preferred; median GMAT ~650\u2013680)"
    ],
    "entry_roles": [
      "Yes \u2013 Mandatory summer internship between first",
      "second year (paid)",
      "major employer partnerships with consulting firms",
      "financial firms",
      "tech companies",
      "Fortune 500 corporations | Typical job roles: Management consultant",
      "product manager",
      "finance manager",
      "operations manager",
      "business analyst",
      "strategy consultant (median starting salary $110,000\u2013$130,000+; includes signing bonus and relocation package) | Career support: Whitman MBA Career Center with dedicated career coaches",
      "corporate recruiting partnerships (on-campus recruiting sessions)",
      "alumni network globally",
      "networking events with industry leaders",
      "salary negotiation guidance"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Engineering, M.S.",
    "faculty": "Department: College of Engineering and Computer Science (ECS) | https://ecs.syracuse.edu/academics/computer-engineering/ | (315) 443-1870",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Minimum 3.0 GPA (55\u201365% equivalent for Indian degrees) | Relevant academic background: Computer engineering",
      "electrical engineering",
      "or related discipline",
      "coursework in digital systems",
      "microprocessors",
      "programming languages required | English language test: TOEFL iBT 85+ OR IELTS 6.5+ OR Duolingo 115+ | Work experience: Not required",
      "industry experience helpful"
    ],
    "entry_roles": [
      "Yes \u2013 Research",
      "internship opportunities with semiconductor firms",
      "tech companies",
      "embedded systems companies",
      "hardware design projects | Typical job roles: Hardware engineer",
      "firmware engineer",
      "systems engineer",
      "FPGA designer",
      "embedded systems engineer | Career support: ECS career services",
      "employer partnerships with Intel",
      "IBM",
      "Qualcomm",
      "embedded systems companies",
      "capstone design project mentorship",
      "professional development workshops"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Public Administration, M.P.A.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 18630,
    "total_fee_cad": 37260,
    "min_class12_percent": 70,
    "required_subjects": [
      "Bachelor\u2019s degree from accredited institution (4-year BTech/BE accepted for Indian students)",
      "minimum 3.0 GPA (55\u201360% equivalent) | Relevant academic background: Any discipline accepted",
      "prior government/nonprofit/public sector experience valued but not required (required for Executive MPA: 5+ years managerial experience) | English language test: TOEFL iBT 80\u2013100 OR IELTS 6.5\u20137.0 OR Duolingo 110+ (varies by program track) | Work experience: Standard MPA \u2013 preferred but not required",
      "Executive MPA \u2013 5+ years required in managerial positions with progressively greater responsibility"
    ],
    "entry_roles": [
      "Yes \u2013 Internship/practicum in government agencies",
      "nonprofits",
      "international organizations",
      "public health departments",
      "education institutions",
      "international development organizations | Typical job roles: Government analyst",
      "policy advisor",
      "public health manager",
      "program director",
      "city/county manager",
      "nonprofit director",
      "international development specialist",
      "diplomat | Career support: Maxwell School career services",
      "placements with U.S. State Department",
      "federal/state/local government agencies",
      "NGOs",
      "UN agencies",
      "alumni network in public affairs",
      "networking events with government officials",
      "nonprofit leaders"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF CHICAGO ---
const univ_universityofchicago = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF CHICAGO",
  "abbreviation": "",
  "type": "university",
  "city": "Chicago",
  "province": "Illinois",
  "country": "USA",
  "campuses": [
    "Chicago"
  ],
  "website": "https://www.uchicago.edu",
  "application_portal": "Varies by school/division",
  "contacts": {
    "admissions": {
      "email": "ois@uchicago.edu",
      "phone": "911 | Campus Phone: Dial 123 from campus phone",
      "address": "1101 E 58th St Suite 105, Chicago, IL 60637"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 103,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "University Scholarship: $5,000-$15,000/year (merit-based)"
    },
    {
      "name": "National Merit Finalist Scholarship: $2,000-$5,000/year"
    },
    {
      "name": "First Phoenix Scholarship: $5,000-$20,000/year (first-generation)"
    },
    {
      "name": "Odyssey Scholarship: Full tuition + $5,000 career grant"
    },
    {
      "name": "Odyssey Full Funding: Full tuition + fees + housing + meals + $5,000 grant"
    },
    {
      "name": "UChicago Global Scholarship: $10,000-$30,000/year (international students)"
    },
    {
      "name": "Neubauer Adelante Scholarship: $10,000-$25,000/year (Hispanic/Latino, including internationals)"
    },
    {
      "name": "Master\u2019s Programs: Limited merit-based aid; some programs offer assistantships (tuition reduction + stipend)"
    },
    {
      "name": "PhD Programs: ~98% of admitted PhD students receive full funding packages including:"
    },
    {
      "name": "Full tuition coverage"
    },
    {
      "name": "Health insurance"
    },
    {
      "name": "Stipend for living expenses ($25,000-$55,000+ annually depending on program)"
    },
    {
      "name": "Teaching/Research Assistantships guaranteed for duration"
    }
  ],
  "internships": {},
  "campus_life": {
    "housing": "Housing: Scattered across Hyde Park; 24 residential communities with diverse themes",
    "clubs": "Intramurals & Clubs: 75+ intramural and sport clubs"
  },
  "security": {
    "detail": "Emergency Alerts: Text and email notification system for campus safety"
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

addPrograms(univ_universityofchicago, "UNIVERSITY OF CHICAGO", [
  {
    "level": "UG",
    "name": "BA/BS Economics (#1 nationally; 1,277 majors)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Computer Science (#3 nationally; top STEM choice)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BS Mathematics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Physics/Astronomy",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BS Chemistry or Biological Sciences",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Booth School of Business) (#5 globally; highly sought-after)",
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
    "name": "MS Computer Science",
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
    "name": "MS Economics",
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
    "name": "MS Data Science / MS Applied Data Science",
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
    "name": "PhD Economics or PhD Physics",
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
    "name": "BA/BS Economics",
    "faculty": "Department Name: Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 97513,
    "total_fee_cad": 390052,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus strongly recommended)",
      "English",
      "quantitative reasoning"
    ],
    "entry_roles": [
      "Economist",
      "Management Consultant",
      "Financial Analyst",
      "Policy Analyst",
      "Data Analyst",
      "Research Analyst",
      "Investment Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 2591,
    "total_fee_cad": 10364,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, discrete math)",
      "Physics",
      "Chemistry",
      "English"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Product Engineer",
      "Cybersecurity Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BS Mathematics",
    "faculty": "Department Name: Department of Mathematics",
    "duration_years": 4.0,
    "annual_fee_cad": 2591,
    "total_fee_cad": 10364,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Calculus, Linear Algebra)",
      "Physics",
      "English"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Data Scientist",
      "Actuary",
      "Research Mathematician",
      "Software Engineer",
      "Consultant",
      "Academic Researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BS Physics or Astrophysics",
    "faculty": "Department Name: Department of Physics (PMA - Physics, Mathematics & Astronomy)",
    "duration_years": 4.0,
    "annual_fee_cad": 2591,
    "total_fee_cad": 10364,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Mathematics (Calculus, Differential Equations)",
      "Chemistry"
    ],
    "entry_roles": [
      "Physicist",
      "Research Scientist",
      "Astrophysicist",
      "Data Scientist",
      "Quantum Engineer",
      "Academic Researcher",
      "Lab Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BS Chemistry or Biological Sciences",
    "faculty": "Department Name: Department of Chemistry or Department of Biological Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 2591,
    "total_fee_cad": 10364,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "Biology",
      "Mathematics (Calculus)",
      "Physics"
    ],
    "entry_roles": [
      "Chemist",
      "Biochemist",
      "Research Scientist",
      "Pharmaceutical Scientist",
      "Quality Analyst",
      "Environmental Scientist",
      "Lab Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Full-Time) - Chicago Booth",
    "faculty": "Department Name: Chicago Booth School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 120548,
    "total_fee_cad": 241096,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "average class has 5+ years work experience (recommended but not mandatory)"
    ],
    "entry_roles": [
      "Management Consultant",
      "Investment Manager",
      "Product Manager",
      "Strategy Director",
      "Entrepreneur",
      "CFO",
      "Corporate Development"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data structures",
      "algorithms",
      "discrete mathematics",
      "programming (Python, Java, C++)",
      "compilers",
      "systems",
      "AI/ML fundamentals helpful"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Cybersecurity Engineer",
      "Tech Lead",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Data Science (MSDS) or MS Applied Data Science (MS-ADS)",
    "faculty": "Department Name: Data Science Institute / University of Chicago",
    "duration_years": 2.0,
    "annual_fee_cad": 94739,
    "total_fee_cad": 189478,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "linear algebra",
      "programming (Python, R)",
      "machine learning",
      "data analysis background helpful",
      "SQL knowledge valued"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analytics Engineer",
      "Business Intelligence Director",
      "AI Solution Architect",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Economics",
    "faculty": "Department Name: Department of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 94739,
    "total_fee_cad": 189478,
    "min_class12_percent": 70,
    "required_subjects": [
      "Microeconomics",
      "macroeconomics",
      "calculus",
      "statistics",
      "econometrics",
      "MATLAB/Python programming skills helpful"
    ],
    "entry_roles": [
      "Economist",
      "Policy Analyst",
      "Research Economist",
      "Financial Analyst",
      "Consultant",
      "Academic Researcher",
      "Central Bank Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA/MS Applied Data Science (Joint Degree)",
    "faculty": "Department Name: Chicago Booth + Computer Science",
    "duration_years": 2.5,
    "annual_fee_cad": 120548,
    "total_fee_cad": 301370,
    "min_class12_percent": 70,
    "required_subjects": [
      "Foundation in statistics",
      "programming",
      "data analysis helpful",
      "CS or quant background valued"
    ],
    "entry_roles": [
      "Data Science Manager",
      "Machine Learning Engineering Manager",
      "Product Manager (Data/AI)",
      "Quantitative Strategist",
      "Tech Consulting Manager",
      "Chief Data Officer pathway"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF MASSACHUSETTS AMHERST ---
const univ_universityofmassachusettsamherst = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF MASSACHUSETTS AMHERST",
  "abbreviation": "UMASS AMHERST",
  "type": "university",
  "city": "Amherst",
  "province": "Massachusetts",
  "country": "USA",
  "campuses": [
    "Amherst"
  ],
  "website": "https://www.umass.edu",
  "application_portal": "UMass Graduate School portal (https://www.umass.edu/graduate/apply)",
  "contacts": {
    "admissions": {
      "phone": "(413) 545-0111",
      "email": "financialaid@umass.edu",
      "address": "70 Massachusetts Avenue, Amherst, MA 01003"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Link: https://www.umass.edu/financialaid"
    },
    {
      "name": "Phone: (413) 545-0801"
    },
    {
      "name": "Email: financialaid@umass.edu"
    },
    {
      "name": "Address: 1st Floor, Whitmore Administration Building, Amherst, MA 01003"
    },
    {
      "name": "Phone: (413) 545-0111"
    },
    {
      "name": "Link: https://www.umass.edu/"
    },
    {
      "name": "Address: 70 Massachusetts Avenue, Amherst, MA 01003"
    },
    {
      "name": "Academic Requirement: High school completion (Class 12 equivalent); minimum 3.0 GPA (75%+); highly competitive students typically 3.5+ GPA (85%+)"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ overall (no subscore below 20) OR IELTS Academic 6.5+ overall (no band below 6.0) OR PTE 53+ \u2014 REQUIRED for non-native English speakers (India NOT exempt)"
    },
    {
      "name": "Standardized Tests: SAT or ACT optional (test-optional policy); competitive applicants typically submit (SAT 1200+; ACT 25+)"
    },
    {
      "name": "Additional Requirements: Official high school transcripts (grades 9-12); Common App application with UMass-specific questions; one letter of recommendation; essays; official English translations of non-English documents"
    },
    {
      "name": "Academic Requirement: Bachelor\u2019s degree (4-year equivalent); minimum GPA 3.0 (80%+); 3.5+ (85-90%+) typical for competitive programs"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ overall OR IELTS Academic 6.5+ overall OR PTE 53+ \u2014 REQUIRED for non-native speakers"
    },
    {
      "name": "Important Note: Three-year Indian bachelor\u2019s degrees generally NOT considered equivalent to 4-year US degree; may require 1-year master\u2019s + credential evaluation from NACES member service"
    },
    {
      "name": "Additional Requirements: Bachelor\u2019s degree transcripts; GRE/GMAT (some programs; waivers available for 3+ years professional experience + 3.0 UG GPA); 2 letters of recommendation; statement of purpose; resume/CV; course-by-course evaluation for non-US degrees (required)"
    },
    {
      "name": "Fall Intake (Primary): August enrollment"
    },
    {
      "name": "Application Opens: August 1 (yearly)"
    },
    {
      "name": "Early Application Deadline: November 5 (optional priority deadline)"
    },
    {
      "name": "Regular Deadline (International): December 1"
    },
    {
      "name": "Decisions Posted: March-April"
    },
    {
      "name": "Enrollment Deposit: May 1"
    },
    {
      "name": "Spring Intake: January enrollment"
    },
    {
      "name": "Deadline: October 15"
    },
    {
      "name": "Fall Intake (Primary): September enrollment"
    },
    {
      "name": "Application Period: Varies by program (typically September-May)"
    },
    {
      "name": "Standard Deadline: December 15-January 31 (most programs)"
    },
    {
      "name": "Rolling Admissions: Continuous review; early application recommended for international students requiring F-1 visa"
    },
    {
      "name": "Chancellor\u2019s Award: $10,000-$18,000/year (merit-based; competitive)"
    },
    {
      "name": "Flagship Award: $6,000-$16,000/year (strong GPA, SAT/ACT scores)"
    },
    {
      "name": "Dean\u2019s Scholarship: $2,000-$6,000/year (broader eligibility)"
    },
    {
      "name": "STEM Diversity Scholarship: Up to full cost of attendance (underrepresented STEM majors)"
    },
    {
      "name": "International Student Aid: Very limited beyond merit scholarships"
    },
    {
      "name": "Stacking/combining awards possible up to cost of attendance"
    },
    {
      "name": "Merit-Based Funding: Limited; varies by program and availability"
    },
    {
      "name": "Some departments offer Teaching/Research Assistantships (tuition reduction + stipend; competitive)"
    },
    {
      "name": "PhD funding generally more available than Master\u2019s"
    },
    {
      "name": "GRE/GMAT Waivers: Available for applicants meeting criteria:"
    },
    {
      "name": "3+ years professional experience + 3.0+ UG GPA"
    },
    {
      "name": "Doctorate holders (PhD, PharmD, MD/DO, ECFMG)"
    },
    {
      "name": "External Scholarship Eligibility: Eligible for non-US scholarships (J.N. Tata Endowment, Indian government scholarships, etc.)"
    }
  ],
  "internships": {
    "part_time_work": "Co-op Programs: Available in Engineering and selected departments (alternating work/study)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Recreational Clubs: Skiing, Surfing, Outdoor Adventure, Gaming, etc.",
    "housing": "Housing: Residential communities; first-year housing guaranteed; upper-class housing on/near campus"
  },
  "security": {
    "detail": "Residential Security: Safety coordinators in residential communities"
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

addPrograms(univ_universityofmassachusettsamherst, "UNIVERSITY OF MASSACHUSETTS AMHERST", [
  {
    "level": "UG",
    "name": "BS Computer Science (CICS - College of Information and Computer Sciences)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Business Administration (Isenberg School of Management)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering (College of Engineering)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering (College of Engineering)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Data Science (CICS)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
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
    "name": "Master of Business Administration (MBA) (Isenberg School of Management)",
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
    "name": "Master of Engineering Management (MEM)",
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
    "name": "MS Electrical Engineering",
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
    "name": "Master of Public Health (MPH)",
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
    "name": "BS Computer Science (CICS - College of Information and Computer Sciences)",
    "faculty": "College Name: College of Information and Computer Sciences (CICS)",
    "duration_years": 4.0,
    "annual_fee_cad": 66749,
    "total_fee_cad": 266996,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, discrete math)",
      "Physics",
      "Computer science foundation"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Backend Engineer",
      "Frontend Engineer",
      "Systems Engineer",
      "DevOps Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Business Administration (Isenberg School of Management)",
    "faculty": "School Name: Isenberg School of Management",
    "duration_years": 4.0,
    "annual_fee_cad": 66749,
    "total_fee_cad": 266996,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "English",
      "business interest"
    ],
    "entry_roles": [
      "Business Analyst",
      "Financial Analyst",
      "Management Consultant",
      "Operations Manager",
      "Marketing Manager",
      "Project Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering (College of Engineering)",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 66749,
    "total_fee_cad": 266996,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, differential equations)",
      "Physics",
      "Chemistry"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Signal Processing Engineer",
      "Hardware Engineer",
      "Design Engineer",
      "Telecommunications Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering (College of Engineering)",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 66749,
    "total_fee_cad": 266996,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, differential equations)",
      "Physics",
      "Chemistry"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Manufacturing Engineer",
      "Design Engineer",
      "Thermal Engineer",
      "HVAC Engineer",
      "Robotics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Data Science (CICS - College of Information and Computer Sciences)",
    "faculty": "College Name: College of Information and Computer Sciences (CICS)",
    "duration_years": 4.0,
    "annual_fee_cad": 66749,
    "total_fee_cad": 266996,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra, statistics)",
      "Computer science",
      "Physics"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Business Intelligence Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "College Name: College of Information and Computer Sciences (CICS)",
    "duration_years": 2.0,
    "annual_fee_cad": 34945,
    "total_fee_cad": 69890,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "systems programming",
      "databases"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Backend Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) (Isenberg School of Management)",
    "faculty": "School Name: Isenberg School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 48299,
    "total_fee_cad": 96598,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "diverse backgrounds welcomed"
    ],
    "entry_roles": [
      "Management Consultant",
      "Product Manager",
      "Business Analyst",
      "Operations Manager",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering Management (MEM)",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 34945,
    "total_fee_cad": 69890,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering fundamentals",
      "management/business basics helpful"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Operations Manager",
      "Project Manager",
      "Technical Director",
      "Supply Chain Manager",
      "Product Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Electrical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 34945,
    "total_fee_cad": 69890,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuit theory",
      "electromagnetics",
      "signal processing",
      "digital systems"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Hardware Engineer",
      "Systems Engineer",
      "Power Engineer",
      "RF/Microwave Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Health (MPH)",
    "faculty": "School Name: School of Public Health & Health Sciences",
    "duration_years": 2.0,
    "annual_fee_cad": 34945,
    "total_fee_cad": 69890,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "chemistry",
      "statistics helpful",
      "public health experience valued"
    ],
    "entry_roles": [
      "Public Health Officer",
      "Epidemiologist",
      "Health Program Manager",
      "Policy Analyst",
      "Health Systems Manager"
    ],
    "features": []
  }
]);

// --- PRINCETON UNIVERSITY ---
const univ_princetonuniversity = db.institutions.insertOne(inst({
  "name": "PRINCETON UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Princeton",
  "province": "New Jersey",
  "country": "USA",
  "campuses": [
    "Princeton"
  ],
  "website": "https://www.princeton.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(609) 258-3000",
      "email": "oip@princeton.edu",
      "address": "Princeton, NJ 08544"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 103,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Need-Blind Admissions: Princeton admits international students without regard to ability to pay (need-blind for all applicants including international)"
    },
    {
      "name": "100% Need Met: Princeton meets 100% of demonstrated financial need for all admitted students"
    },
    {
      "name": "Grant-based aid (no loans required for financial aid packages)"
    },
    {
      "name": "Average financial aid grant: ~$62,000/year (first-year students)"
    },
    {
      "name": "61% of undergraduates receive aid"
    },
    {
      "name": "Full coverage for families earning <$65,000/year (tuition + housing + meals + books)"
    },
    {
      "name": "Reduced/partial aid for families earning $65,000-$150,000+"
    },
    {
      "name": "PhD Programs: Full funding guarantee (~95% of admitted PhD students)"
    },
    {
      "name": "Full tuition coverage"
    },
    {
      "name": "Monthly stipend (~$2,000-$3,500+ per year)"
    },
    {
      "name": "Health insurance coverage"
    },
    {
      "name": "Teaching/Research Assistantships required/included"
    },
    {
      "name": "Master\u2019s Programs: Limited funding; varies significantly by program and department"
    },
    {
      "name": "Some programs offer Teaching/Research Assistantships (tuition reduction + stipend; competitive)"
    },
    {
      "name": "Limited merit-based fellowships (varies by program)"
    },
    {
      "name": "External scholarship eligibility (J.N. Tata Endowment, government scholarships)"
    }
  ],
  "internships": {
    "employment_rate_percent": 98
  },
  "campus_life": {
    "housing": "Housing: 8 residential colleges for undergraduates; all first-year students live on-campus; graduate housing available",
    "clubs": "Total Clubs: 500+ registered student organizations (undergrad); 400+ graduate organizations"
  },
  "security": {
    "detail": "Emergency Alert System: Text/email notifications for campus safety alerts; emergency procedures"
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

addPrograms(univ_princetonuniversity, "PRINCETON UNIVERSITY", [
  {
    "level": "UG",
    "name": "BA/BSE Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Economics (including Econometrics & Quantitative Economics)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BSE Operations Research and Financial Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BSE Public and International Affairs",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSE Electrical and Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Computer Science",
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
    "name": "Master of Public Policy (MPP)",
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
    "name": "PhD Economics",
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
    "name": "Master in Finance (Bendheim Center)",
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
    "name": "Master of Public Affairs (MPA)",
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
    "name": "BA/BSE Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 29214,
    "total_fee_cad": 116856,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra required; discrete math preferred)",
      "Physics",
      "Chemistry",
      "English"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Cybersecurity Engineer",
      "Systems Engineer",
      "Product Engineer",
      "Backend Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Economics (including Econometrics & Quantitative Economics)",
    "faculty": "Department Name: Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 29214,
    "total_fee_cad": 116856,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus preferred)",
      "English",
      "quantitative reasoning"
    ],
    "entry_roles": [
      "Economist",
      "Financial Analyst",
      "Policy Analyst",
      "Management Consultant",
      "Investment Analyst",
      "Research Analyst",
      "Government Economist",
      "Data Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA/BSE Operations Research and Financial Engineering",
    "faculty": "Department Name: Department of Operations Research and Financial Engineering (ORFE)",
    "duration_years": 4.0,
    "annual_fee_cad": 29214,
    "total_fee_cad": 116856,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra, discrete math)",
      "Physics",
      "Chemistry",
      "English",
      "computer science"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Operations Research Analyst",
      "Data Scientist",
      "Financial Engineer",
      "Risk Manager",
      "Optimization Specialist",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Public and International Affairs",
    "faculty": "School Name: School of Public and International Affairs (SPIA)",
    "duration_years": 4.0,
    "annual_fee_cad": 89989,
    "total_fee_cad": 359956,
    "min_class12_percent": 70,
    "required_subjects": [
      "English",
      "History",
      "Government/International Relations helpful"
    ],
    "entry_roles": [
      "Policy Analyst",
      "Government Analyst",
      "International Relations Specialist",
      "Diplomat",
      "NGO Manager",
      "Development Officer",
      "Legislative Aide"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BSE Electrical and Computer Engineering",
    "faculty": "Department Name: Department of Electrical and Computer Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 89989,
    "total_fee_cad": 359956,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics",
      "Chemistry",
      "English",
      "computer science"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Systems Engineer",
      "Hardware Engineer",
      "Signal Processing Engineer",
      "Communications Engineer",
      "Power Systems Engineer",
      "Research Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 6.0,
    "annual_fee_cad": 86112,
    "total_fee_cad": 516672,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "systems",
      "theory foundation",
      "discrete math",
      "programming proficiency (C++, Python, Java)"
    ],
    "entry_roles": [
      "Research Scientist",
      "Postdoctoral Researcher",
      "Academic Faculty",
      "Tech Industry Research Engineer",
      "Machine Learning Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Policy (MPP)",
    "faculty": "School Name: School of Public and International Affairs (SPIA)",
    "duration_years": 2.0,
    "annual_fee_cad": 86112,
    "total_fee_cad": 172224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative skills helpful",
      "public policy experience valued but not required"
    ],
    "entry_roles": [
      "Policy Analyst",
      "Government Economist",
      "Program Manager",
      "Diplomat",
      "Think Tank Researcher",
      "Development Officer",
      "Strategic Planner"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Economics",
    "faculty": "Department Name: Department of Economics",
    "duration_years": 6.0,
    "annual_fee_cad": 86112,
    "total_fee_cad": 516672,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong math (calculus, linear algebra, real analysis)",
      "statistics",
      "microeconomics",
      "macroeconomics foundation"
    ],
    "entry_roles": [
      "Academic Economist",
      "Research Economist",
      "Policy Economist",
      "Central Bank Economist",
      "International Organization Economist",
      "Tech Industry Economist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Finance (Bendheim Center for Finance)",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 86112,
    "total_fee_cad": 172224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Linear algebra",
      "calculus",
      "multivariable calculus",
      "probability",
      "statistics",
      "programming (MATLAB, Python, R) valued"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Risk Manager",
      "Portfolio Manager",
      "Financial Engineer",
      "Trader",
      "Investment Manager",
      "Algorithmic Trader"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Public Affairs (MPA)",
    "faculty": "School Name: School of Public and International Affairs (SPIA)",
    "duration_years": 2.0,
    "annual_fee_cad": 86112,
    "total_fee_cad": 172224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Public administration or policy experience helpful",
      "no specific subject requirement"
    ],
    "entry_roles": [
      "Government Administrator",
      "International Development Officer",
      "Program Manager",
      "Policy Coordinator",
      "Strategic Planner",
      "City Planner",
      "Nonprofit Manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF MARYLAND, COLLEGE PARK: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE ---
const univ_universityofmarylandcollegeparkcomprehensiveinternationalstudentguide = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF MARYLAND, COLLEGE PARK: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE",
  "abbreviation": "",
  "type": "university",
  "city": "College Park",
  "province": "Maryland",
  "country": "USA",
  "campuses": [
    "College Park"
  ],
  "website": "https://undergrad.cs.umd.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(301) 405-2672",
      "email": "csadvising-ugrad@umd.edu",
      "address": "2123 Lee Building, College Park, MD 20742"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Undergraduate: Merit-based scholarships available (automatic consideration for early action applicants); limited international need-based aid"
    },
    {
      "name": "Postgraduate: Graduate assistantships, fellowships, and scholarships available (varies by department and program)"
    },
    {
      "name": "Key Restriction: International students not eligible for U.S. federal financial aid; limited state/institutional aid"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "800+ additional clubs and groups available",
    "housing": "On-campus housing (required for first 2 years of undergraduate study)"
  },
  "security": {
    "detail": "Regular security assessments and crime prevention initiatives"
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

addPrograms(univ_universityofmarylandcollegeparkcomprehensiveinternationalstudentguide, "UNIVERSITY OF MARYLAND, COLLEGE PARK: COMPREHENSIVE INTERNATIONAL STUDENT GUIDE", [
  {
    "level": "UG",
    "name": "Computer Science (873 degrees awarded in 2023; #14 nationally)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Information Science (661 degrees)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "General Biological Sciences (490 degrees)",
    "faculty": "",
    "duration_years": 4,
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
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration/Management",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
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
    "name": "Master of Science in Business Analytics",
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
    "name": "Master of Business Administration (Robert H. Smith School)",
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
    "name": "Master of Science in Information Systems",
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
    "name": "Master of Science in Data Science",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 59232,
    "total_fee_cad": 236928,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics",
      "physics",
      "chemistry foundation",
      "computer science fundamentals"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "systems engineer",
      "machine learning engineer",
      "cybersecurity specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Information Science",
    "faculty": "Address: College of Information Studies, University of Maryland, College Park, MD 20742",
    "duration_years": 4.0,
    "annual_fee_cad": 59232,
    "total_fee_cad": 236928,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "analytical skills",
      "computer science basics"
    ],
    "entry_roles": [
      "Data analyst",
      "information architect",
      "database administrator",
      "business intelligence analyst",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department name: A. James Clark School of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 59232,
    "total_fee_cad": 236928,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics",
      "physics",
      "chemistry",
      "circuits",
      "electronics fundamentals"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "signal processing engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department name: A. James Clark School of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 59232,
    "total_fee_cad": 236928,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "physics",
      "thermodynamics",
      "mechanics"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "manufacturing engineer",
      "HVAC engineer",
      "automotive engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "Department name: Robert H. Smith School of Business",
    "duration_years": 4.0,
    "annual_fee_cad": 59232,
    "total_fee_cad": 236928,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "economics",
      "analytical skills"
    ],
    "entry_roles": [
      "Financial analyst",
      "management consultant",
      "investment banker",
      "marketing manager",
      "business analyst",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 52725,
    "total_fee_cad": 105450,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data structures",
      "algorithms",
      "programming",
      "discrete mathematics"
    ],
    "entry_roles": [
      "Software engineer",
      "machine learning engineer",
      "data scientist",
      "systems engineer",
      "research scientist",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Business Analytics",
    "faculty": "Department name: Robert H. Smith School of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 57187,
    "total_fee_cad": 85780,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative skills",
      "statistics",
      "basic programming preferred (not required)"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "analytics consultant",
      "machine learning engineer (junior)",
      "management consultant",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Daytime/Full-Time)",
    "faculty": "Department name: Robert H. Smith School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 65558,
    "total_fee_cad": 131116,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field",
      "quantitative background preferred but not required"
    ],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "corporate finance manager",
      "strategy consultant",
      "technology leader",
      "product manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Systems",
    "faculty": "Address: College of Information Studies, University of Maryland, College Park, MD 20742",
    "duration_years": 2.0,
    "annual_fee_cad": 42900,
    "total_fee_cad": 85800,
    "min_class12_percent": 70,
    "required_subjects": [
      "Programming experience",
      "database knowledge helpful (not required)"
    ],
    "entry_roles": [
      "IT consultant",
      "systems analyst",
      "database administrator",
      "IT project manager",
      "systems architect",
      "information security analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Data Science",
    "faculty": "Address: College of Information Studies, University of Maryland, College Park, MD 20742",
    "duration_years": 2.0,
    "annual_fee_cad": 53819,
    "total_fee_cad": 107638,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative background",
      "statistics",
      "programming preferred (bootcamp available for non-technical backgrounds)"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "analytics engineer",
      "research scientist",
      "AI engineer",
      "data engineer"
    ],
    "features": []
  }
]);

// --- CALTECH ---
const univ_caltech = db.institutions.insertOne(inst({
  "name": "CALTECH",
  "abbreviation": "CALIFORNIA INSTITUTE OF TECHNOLOGY",
  "type": "university",
  "city": "Pasadena",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Pasadena"
  ],
  "website": "https://www.caltech.edu",
  "application_portal": "Caltech Graduate Studies Application (https://gradoffice.caltech.edu/admissions)",
  "contacts": {
    "admissions": {
      "email": "isp@caltech.edu",
      "phone": "(626) 395-6811",
      "address": "1200 E. California Blvd., Pasadena, CA 91125"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 103,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Caltech Need-Based Scholarship: Covers full demonstrated financial need (on average $59,980 USD (~INR 52.4 L) for eligible students)"
    },
    {
      "name": "Eligibility: Demonstrated financial need; admitted students only; ~50% of admitted international students receive aid"
    },
    {
      "name": "Coverage: Tuition, fees, room, board, books, personal expenses, transportation"
    },
    {
      "name": "Important: MUST indicate intent to apply for financial aid at time of application; if not indicated, ineligible for aid in future years"
    },
    {
      "name": "Admission Impact: Need-aware admissions for international students (requesting aid may decrease admission chances)"
    },
    {
      "name": "Eligibility: Taiwanese graduates only"
    },
    {
      "name": "Coverage: Living stipend, tuition, student fees"
    },
    {
      "name": "PhD Students: 100% Full Funding"
    },
    {
      "name": "Full tuition coverage"
    },
    {
      "name": "Monthly stipend (~$3,000+)"
    },
    {
      "name": "Internal or external fellowships, research assistantships, teaching assistantships"
    },
    {
      "name": "~98% of admitted PhD students receive full support package"
    },
    {
      "name": "MS/Non-Doctoral Students: Limited assistantships"
    },
    {
      "name": "Graduate assistantships (limited availability)"
    },
    {
      "name": "Teaching or research assistant positions"
    },
    {
      "name": "No guaranteed full funding"
    },
    {
      "name": "Students may be eligible for loans"
    }
  ],
  "internships": {
    "part_time_work": "Co-op/Work-Study: Limited on-campus employment",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Housing: 24 residences (mix of undergraduate and graduate housing)",
    "clubs": "Clubs & Intramurals: Extensive club sports and intramural programs"
  },
  "security": {
    "detail": "International Student Support: International offices coordinate with security for student welfare"
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

addPrograms(univ_caltech, "CALTECH", [
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Physics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Chemical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Electrical Engineering",
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
    "name": "PhD Physics",
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
    "name": "PhD Chemistry",
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
    "name": "MS Computer Science",
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
    "name": "MS Astrophysics",
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
    "name": "BS Computer Science",
    "faculty": "Department Name: Computing & Mathematical Sciences (CMS), Division of Engineering and Applied Science",
    "duration_years": 4.0,
    "annual_fee_cad": 90558,
    "total_fee_cad": 362232,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus minimum)",
      "Physics",
      "Chemistry",
      "strong science background"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Research Scientist",
      "Computer Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "Department Name: Mechanical Engineering, Division of Engineering and Applied Science",
    "duration_years": 4.0,
    "annual_fee_cad": 90558,
    "total_fee_cad": 362232,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics (calculus)",
      "Physics",
      "Chemistry",
      "mechanics background helpful"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Thermal Engineer",
      "Manufacturing Engineer",
      "Aerospace Engineer",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering",
    "faculty": "Department Name: Electrical Engineering (EE), Division of Engineering and Applied Science",
    "duration_years": 4.0,
    "annual_fee_cad": 90558,
    "total_fee_cad": 362232,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Mathematics (calculus, differential equations)",
      "strong STEM background"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Semiconductor Designer",
      "Photonics Engineer",
      "Control Systems Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Physics",
    "faculty": "Department Name: Physics, Division of Physics, Mathematics & Astronomy (PMA)",
    "duration_years": 4.0,
    "annual_fee_cad": 90558,
    "total_fee_cad": 362232,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics",
      "Mathematics (calculus, linear algebra)",
      "Chemistry",
      "quantum mechanics foundation"
    ],
    "entry_roles": [
      "Physicist",
      "Research Scientist",
      "Astrophysicist",
      "Quantum Physicist",
      "Data Scientist",
      "Academic Researcher",
      "Lab Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Chemical Engineering",
    "faculty": "Department Name: Chemical Engineering, Division of Chemistry & Chemical Engineering (CCE)",
    "duration_years": 4.0,
    "annual_fee_cad": 90558,
    "total_fee_cad": 362232,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "Mathematics (calculus, differential equations)",
      "Physics",
      "laboratory skills"
    ],
    "entry_roles": [
      "Chemical Engineer",
      "Process Engineer",
      "Research Engineer",
      "Materials Scientist",
      "Pharmaceutical Engineer",
      "Energy Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Electrical Engineering",
    "faculty": "Department Name: Electrical Engineering (EE), Division of Engineering and Applied Science",
    "duration_years": 6.0,
    "annual_fee_cad": 93841,
    "total_fee_cad": 563046,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in electrical engineering",
      "electromagnetics",
      "circuits",
      "signal processing",
      "mathematics"
    ],
    "entry_roles": [
      "Research Scientist",
      "Postdoctoral Researcher",
      "Semiconductor Design Engineer",
      "Photonics Engineer",
      "Academic Faculty",
      "Industry Research Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Physics",
    "faculty": "Department Name: Physics, Division of Physics, Mathematics & Astronomy (PMA)",
    "duration_years": 6.0,
    "annual_fee_cad": 93841,
    "total_fee_cad": 563046,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantum mechanics",
      "classical mechanics",
      "electromagnetism",
      "mathematical physics",
      "thermodynamics"
    ],
    "entry_roles": [
      "Research Physicist",
      "Postdoctoral Researcher",
      "Academic Faculty",
      "Research Laboratory Scientist",
      "Astrophysicist",
      "Theoretical Physicist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Chemistry",
    "faculty": "Department Name: Chemistry, Division of Chemistry & Chemical Engineering (CCE)",
    "duration_years": 6.0,
    "annual_fee_cad": 93841,
    "total_fee_cad": 563046,
    "min_class12_percent": 70,
    "required_subjects": [
      "Organic",
      "inorganic",
      "physical chemistry",
      "analytical chemistry",
      "biochemistry foundation",
      "laboratory skills"
    ],
    "entry_roles": [
      "Research Chemist",
      "Postdoctoral Researcher",
      "Pharmaceutical Chemist",
      "Materials Scientist",
      "Chemical Industry Researcher",
      "Academic Faculty"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "Department Name: Computing & Mathematical Sciences (CMS), Division of Engineering and Applied Science",
    "duration_years": 2.0,
    "annual_fee_cad": 93841,
    "total_fee_cad": 187682,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data structures",
      "algorithms",
      "discrete mathematics",
      "programming (C++, Java, Python)",
      "computer architecture helpful"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Research Scientist",
      "Systems Engineer",
      "Tech Company Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Astrophysics",
    "faculty": "Department Name: Astrophysics, Division of Physics, Mathematics & Astronomy (PMA)",
    "duration_years": 1.0,
    "annual_fee_cad": 93841,
    "total_fee_cad": 93841,
    "min_class12_percent": 70,
    "required_subjects": [
      "Physics (classical, quantum)",
      "mathematics (calculus, differential equations)",
      "astronomy fundamentals",
      "observational/computational skills"
    ],
    "entry_roles": [
      "Astrophysicist",
      "Research Scientist",
      "Postdoctoral Researcher",
      "Data Scientist",
      "Planetarium/Observatory Director",
      "Academic Faculty"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF PENNSYLVANIA ---
const univ_universityofpennsylvania = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF PENNSYLVANIA",
  "abbreviation": "UPENN/WHARTON",
  "type": "university",
  "city": "Philadelphia",
  "province": "Pennsylvania",
  "country": "USA",
  "campuses": [
    "Philadelphia"
  ],
  "website": "",
  "application_portal": "Varies by school/division",
  "contacts": {
    "admissions": {
      "phone": "(215) 898-5000",
      "address": "3701 Market Street, Philadelphia, PA 19104"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 103,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Penn Grant (100% Need-Based): Meets 100% of demonstrated financial need for all admitted international students"
    },
    {
      "name": "No loans included (grants + work-study model)"
    },
    {
      "name": "Average award: $59,721 (~INR 52.4 L) for aid-receiving students"
    },
    {
      "name": "Full need coverage: Families earning under $65,000 pay $0 for tuition, housing, meals"
    },
    {
      "name": "Reduced costs: Families earning up to $150,000 often pay reduced amounts"
    },
    {
      "name": "QuestBridge Full-Ride Scholarship: Full tuition + fees + housing + meals to matched low-income students (includes international students)"
    },
    {
      "name": "Limited spots available"
    },
    {
      "name": "Deadline: September 27, 2025"
    },
    {
      "name": "Penn Leadership Scholarship: Need-based supplemental funding"
    },
    {
      "name": "Loans and financial aid: Available through federal/private lenders"
    },
    {
      "name": "Master\u2019s Programs: Limited merit-based aid available"
    },
    {
      "name": "School-specific scholarships (varies by division)"
    },
    {
      "name": "Teaching/Research Assistantships: Reduce tuition + provide stipends (limited availability)"
    },
    {
      "name": "PhD Programs: ~98% receive full funding packages"
    },
    {
      "name": "Full tuition coverage"
    },
    {
      "name": "Monthly stipend ($2,500-$3,500+)"
    },
    {
      "name": "Health insurance included"
    },
    {
      "name": "Teaching/Research Assistantships guaranteed"
    }
  ],
  "internships": {},
  "campus_life": {
    "housing": "Housing: 24 residential communities with diverse themes; all freshmen live on-campus",
    "clubs": "Intramurals: 75+ intramural and sport clubs"
  },
  "security": {
    "detail": "Emergency Preparedness: Campus alert system (text/email notifications); emergency drills throughout year"
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

addPrograms(univ_universityofpennsylvania, "UNIVERSITY OF PENNSYLVANIA", [
  {
    "level": "UG",
    "name": "BS Economics (Wharton)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Finance (Wharton)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Computer Science (School of Engineering & Applied Science - SEAS)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Business Administration (Wharton)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Registered Nursing (School of Nursing)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Wharton School of Business)",
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
    "name": "MS Computer Science (SEAS)",
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
    "name": "MS Finance (Wharton/SEAS)",
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
    "name": "MS Business Analytics (Wharton)",
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
    "name": "MS Engineering Management (SEAS)",
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
    "name": "BS Economics (Wharton Undergraduate)",
    "faculty": "School Name: The Wharton School of the University of Pennsylvania",
    "duration_years": 4.0,
    "annual_fee_cad": 94786,
    "total_fee_cad": 379144,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus strongly preferred)",
      "English",
      "Economics/Quantitative reasoning helpful"
    ],
    "entry_roles": [
      "Economist",
      "Financial Analyst",
      "Management Consultant",
      "Policy Analyst",
      "Investment Analyst",
      "Research Analyst",
      "Data Analyst",
      "Corporate Finance Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Finance (Wharton Undergraduate)",
    "faculty": "School Name: The Wharton School of the University of Pennsylvania / Department of Finance",
    "duration_years": 4.0,
    "annual_fee_cad": 94786,
    "total_fee_cad": 379144,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus required; linear algebra, statistics helpful)",
      "English",
      "quantitative reasoning"
    ],
    "entry_roles": [
      "Investment Banker",
      "Financial Analyst",
      "Equity Research Analyst",
      "Portfolio Manager",
      "Risk Manager",
      "Trader",
      "Corporate Finance Manager",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Computer Science (SEAS - School of Engineering & Applied Science)",
    "faculty": "School Name: School of Engineering and Applied Science (SEAS)",
    "duration_years": 4.0,
    "annual_fee_cad": 94786,
    "total_fee_cad": 379144,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics",
      "Chemistry",
      "discrete math",
      "programming background"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Product Engineer",
      "Cybersecurity Engineer",
      "Systems Engineer",
      "Backend Engineer",
      "DevOps Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Business Administration (Wharton Undergraduate)",
    "faculty": "School Name: The Wharton School of the University of Pennsylvania",
    "duration_years": 4.0,
    "annual_fee_cad": 94786,
    "total_fee_cad": 379144,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "English",
      "business/economics interest"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Product Manager",
      "Operations Manager",
      "Marketing Manager",
      "Strategic Planner",
      "Corporate Development Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Registered Nursing (School of Nursing)",
    "faculty": "School Name: School of Nursing (Penn Nursing)",
    "duration_years": 4.0,
    "annual_fee_cad": 26460,
    "total_fee_cad": 105840,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics",
      "English",
      "health sciences"
    ],
    "entry_roles": [
      "Registered Nurse (RN)",
      "Hospital Staff Nurse",
      "Critical Care Nurse",
      "Pediatric Nurse",
      "Intensive Care Unit (ICU) Nurse",
      "Community Health Nurse",
      "Nurse Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA - Wharton School of Business (Full-Time)",
    "faculty": "School Name: Wharton School of Business",
    "duration_years": 2.0,
    "annual_fee_cad": 121398,
    "total_fee_cad": 242796,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "diverse backgrounds welcomed (Humanities 36%, STEM 32%, Business 32%)"
    ],
    "entry_roles": [
      "Management Consultant",
      "Investment Manager",
      "Product Manager",
      "Strategy Director",
      "Corporate Development",
      "Entrepreneur",
      "CFO track",
      "Private Equity Associate"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science (SEAS - School of Engineering & Applied Science)",
    "faculty": "School Name: School of Engineering and Applied Science (SEAS) / Department of Computer and Information Science",
    "duration_years": 2.0,
    "annual_fee_cad": 66024,
    "total_fee_cad": 132048,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data structures",
      "algorithms",
      "discrete mathematics",
      "programming (C++, Python, Java)",
      "computer architecture",
      "operating systems helpful",
      "database management"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Cybersecurity Engineer",
      "Research Scientist",
      "Tech Lead",
      "Backend Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Finance (Wharton & SEAS)",
    "faculty": "School Name: Wharton School of Business / SEAS (joint offering)",
    "duration_years": 2.0,
    "annual_fee_cad": 57269,
    "total_fee_cad": 114538,
    "min_class12_percent": 70,
    "required_subjects": [
      "Economics",
      "calculus",
      "linear algebra",
      "statistics",
      "probability",
      "basic programming (R, Python)",
      "corporate finance",
      "investment management background helpful"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Financial Analyst",
      "Risk Manager",
      "Investment Manager",
      "Portfolio Manager",
      "Hedge Fund Analyst",
      "Equity Research Analyst",
      "Fixed Income Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Business Analytics (Wharton)",
    "faculty": "School Name: Wharton School of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "calculus",
      "linear algebra",
      "programming (Python, R, SQL)",
      "data science fundamentals helpful",
      "quantitative background preferred"
    ],
    "entry_roles": [
      "Data Scientist",
      "Business Intelligence Analyst",
      "Analytics Consultant",
      "Data Analyst",
      "Product Analytics Manager",
      "Operations Research Analyst",
      "Risk Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Engineering Management (SEAS)",
    "faculty": "School Name: School of Engineering and Applied Science (SEAS)",
    "duration_years": 2.0,
    "annual_fee_cad": 59580,
    "total_fee_cad": 119160,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering fundamentals",
      "mathematics",
      "statistics",
      "basic business knowledge (economics, management helpful)",
      "project management experience valued"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Technical Program Manager",
      "Operations Manager",
      "Product Manager",
      "Supply Chain Manager",
      "Business Development Manager",
      "Technical Director"
    ],
    "features": []
  }
]);

// --- COLUMBIA UNIVERSITY ---
const univ_columbiauniversity = db.institutions.insertOne(inst({
  "name": "COLUMBIA UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "New York City",
  "province": "New York",
  "country": "USA",
  "campuses": [
    "New York City"
  ],
  "website": "http://undergrad.admissions.columbia.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(212) 854-8903",
      "email": "gsas-admissions@columbia.edu / gsas-studentaffairs@columbia.edu",
      "address": "109 Low Memorial Library, MC 4306, 535 West 116th Street, New York, NY 10027"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Decision Release: Late March 2026"
    },
    {
      "name": "Major Intakes: Fall (primary), Spring (limited programs)"
    },
    {
      "name": "Fall 2026 Typical Deadlines: January 15 (Priority), February 15 (Regular)"
    },
    {
      "name": "Varies by Program: Check specific department deadlines (Engineering, Business School, SIPA)"
    },
    {
      "name": "Columbia Need-Based Aid: Meets 100% of demonstrated financial need for admitted first-year undergraduates"
    },
    {
      "name": "Average Undergraduate Aid: ~USD 77,908 per year (in grants, not loans)"
    },
    {
      "name": "Graduate Aid: Varies by program; Department fellowships USD 20,000\u201330,000 stipend (MS/PhD)"
    },
    {
      "name": "Tata Scholarship (SIPA): USD 15,000 for Indian MPA applicants"
    },
    {
      "name": "GSAS Department Fellowships"
    },
    {
      "name": "Columbia Business School Fellowships"
    },
    {
      "name": "External Resources: Indian government scholarships (National Overseas Scholarship); EDUFIN platforms; Employer sponsorships available"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "500+ Student Clubs & Organizations spanning arts, tech, cultural, sports, and professional categories",
    "housing": "Housing: On-campus residential colleges and apartments; off-campus university-owned housing (6,000+ units)"
  },
  "security": {
    "detail": "NYPD Coordination: Security Department maintains liaison with local police precincts; participates in crime prevention strategies"
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

addPrograms(univ_columbiauniversity, "COLUMBIA UNIVERSITY", [
  {
    "level": "UG",
    "name": "Computer Science \u2014 391 graduates (most popular)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Economics \u2014 360 graduates",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Political Science & Government \u2014 232 graduates",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Research & Experimental Psychology \u2014 166 graduates",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "History \u2014 152 graduates",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Columbia Business School) \u2014 Highly popular among international professionals; 20-month program",
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
    "name": "MS in Data Science \u2014 Leading program; very popular with tech-focused Indian students",
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
    "name": "MS in Computer Science \u2014 Respected engineering program; multiple specialization pathways",
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
    "name": "MS in Financial Engineering \u2014 1-year intensive; appeals to finance-focused candidates",
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
    "name": "MPA (SIPA) \u2014 International Affairs concentration; popular with policy/development-focused students",
    "faculty": "Department Name: School of International and Public Affairs (SIPA), Columbia University",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Policy Analyst",
      "Program Officer",
      "Government Affairs Manager",
      "Foreign Service Officer",
      "UN Staff Member",
      "Program Manager",
      "Policy Advocate",
      "Management Consultant",
      "Corporate Strategy",
      "Social Enterprise/Startup Founder"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF ARIZONA ---
const univ_universityofarizona = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF ARIZONA",
  "abbreviation": "",
  "type": "university",
  "city": "Tucson",
  "province": "Arizona",
  "country": "USA",
  "campuses": [
    "Tucson"
  ],
  "website": "https://www.arizona.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@arizona.edu",
      "phone": "https://cse.engineering.arizona.edu/ | Phone: 520-621-4565"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International Tuition Award: $5,000\u2013$10,000 per year (automatic consideration based on GPA)"
    },
    {
      "name": "Global Wildcat Scholarship: Merit-based, varying amounts"
    },
    {
      "name": "President\u2019s Scholarship: Up to $25,000 (limited availability)"
    },
    {
      "name": "Fulbright-Nehru Master\u2019s Fellowships: Full tuition, living expenses, plus stipend (competitive)"
    },
    {
      "name": "QS Connect Master\u2019s Scholarship: $5,000 per year"
    },
    {
      "name": "Department-specific Assistantships: Available in Engineering and Business programs"
    },
    {
      "name": "Graduate Research Assistantships: Available across departments"
    }
  ],
  "internships": {
    "employment_rate_percent": 96
  },
  "campus_life": {
    "clubs": "Active research and innovation clubs",
    "housing": "On-campus housing (residence halls)"
  },
  "security": {
    "detail": "Emergency preparedness training"
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

addPrograms(univ_universityofarizona, "UNIVERSITY OF ARIZONA", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science & Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Technology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
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
    "name": "Master of Science in Data Science",
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
    "name": "Master of Business Administration (Eller)",
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
    "name": "Master of Science in Business Analytics",
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
    "name": "Master of Science in Information Systems",
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
    "name": "UG Course : Bachelor of Science in Computer Science & Engineering",
    "faculty": "Department of Electrical & Computer Engineering / Computer Science & Engineering",
    "duration_years": 4,
    "annual_fee_cad": 17940,
    "total_fee_cad": 71760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (4 years)",
      "Laboratory Science (3 years) recommended"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "embedded systems engineer",
      "cybersecurity analyst",
      "AI/ML engineer",
      "full-stack developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Aerospace & Mechanical Engineering",
    "duration_years": 4,
    "annual_fee_cad": 17940,
    "total_fee_cad": 71760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "aerospace engineer",
      "design engineer",
      "manufacturing engineer",
      "thermal engineer",
      "HVAC engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical & Computer Engineering",
    "duration_years": 4,
    "annual_fee_cad": 17940,
    "total_fee_cad": 71760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "circuit design engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "Eller College of Management",
    "duration_years": 4,
    "annual_fee_cad": 17940,
    "total_fee_cad": 71760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "marketing specialist",
      "operations manager",
      "supply chain analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Information Technology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 17940,
    "total_fee_cad": 71760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "computer science preferred"
    ],
    "entry_roles": [
      "IT systems administrator",
      "network administrator",
      "database administrator",
      "IT security specialist",
      "IT support engineer",
      "systems analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science & Engineering",
    "faculty": "Department of Electrical & Computer Engineering / Computer Science & Engineering",
    "duration_years": 2,
    "annual_fee_cad": 40261,
    "total_fee_cad": 80522,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "electrical engineering",
      "mathematics",
      "or related field required"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "cloud architect",
      "cybersecurity engineer",
      "data engineer",
      "research engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 32291,
    "total_fee_cad": 64582,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "computer science",
      "mathematics",
      "engineering",
      "or related field"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data analyst",
      "business intelligence developer",
      "analytics engineer",
      "AI specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-time, Eller College)",
    "faculty": "Eller College of Management, MBA Programs",
    "duration_years": 2,
    "annual_fee_cad": 45976,
    "total_fee_cad": 91952,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline (no specific major required)"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "product manager",
      "business development executive",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Business Analytics",
    "faculty": "Eller College of Management, Business Analytics Program",
    "duration_years": 2,
    "annual_fee_cad": 32291,
    "total_fee_cad": 64582,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "quantitative background (statistics, mathematics, programming) beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "management consultant",
      "operations analyst",
      "financial analyst",
      "analytics engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Systems",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 34500,
    "total_fee_cad": 69000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "information technology",
      "computer science",
      "or related field"
    ],
    "entry_roles": [
      "Systems analyst",
      "business systems analyst",
      "IT project manager",
      "enterprise systems administrator",
      "information security analyst"
    ],
    "features": []
  }
]);

// --- Harvard University ---
const univ_harvarduniversity = db.institutions.insertOne(inst({
  "name": "Harvard University",
  "abbreviation": "",
  "type": "university",
  "city": "Cambridge",
  "province": "Massachusetts",
  "country": "USA",
  "campuses": [
    "Cambridge"
  ],
  "website": "https://www.fas.harvard.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+1-617-495-6128",
      "email": "admissions@hbs.edu",
      "address": "Harvard International Office, 1350 Massachusetts Avenue, Richard A. and Susan F. Smith Campus Center, 864, Cambridge, MA 02138"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Available for International Students: Yes"
    },
    {
      "name": "**Approximately 50% of each undergraduate class receives need-based scholarships annually"
    },
    {
      "name": "Available for International Students: Yes (varies by program)"
    },
    {
      "name": "Scholarship Names (External):"
    },
    {
      "name": "Aga Khan Foundation International Scholarship Programme"
    },
    {
      "name": "Fulbright Scholarship"
    },
    {
      "name": "Quad Fellowship"
    },
    {
      "name": "Soros Fellowship for New Americans"
    },
    {
      "name": "Leadership Alliance scholarships"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Notable clubs: Harvard Glee Club, Harvard Ballet Company, Harvard Crimson (student newspaper), Lampoon (humor magazine), Model UN, Mock Trial",
    "housing": "Housing: 12 residential houses for upperclassmen (350\u2013500 students per house)"
  },
  "security": {
    "detail": "Enhanced security around Harvard Yard (upgraded blue-light phones, reduced overnight gate access, improved lighting)"
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

addPrograms(univ_harvarduniversity, "Harvard University", [
  {
    "level": "UG",
    "name": "Government (Political Science) \u2013 Covers international relations, political theory, comparative politics; strong network in policy/diplomacy",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Applied Mathematics \u2013 Highly customizable program blending quantitative skills with economics, CS, physics, linguistics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology & Life Sciences \u2013 World-renowned reputation; affiliated with leading research centers, hospitals, labs; opportunities in global health",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Harvard Business School) \u2013 Global ranking top business program; focus on entrepreneurship, finance, corporate leadership",
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
    "name": "Master of Laws (LL.M.) \u2013 Prestigious law program for international law specialists",
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
    "name": "Master of Public Health (MPH) \u2013 Research-focused with global health opportunities",
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
    "name": "Master of Science in Artificial Intelligence & Machine Learning \u2013 Harvard leads in AI research; SEAS offers specialized courses on robotics, NLP, computer vision",
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
    "name": "Master of Architecture (M.Arch), Master of Urban Planning (MUP), Master of Landscape Architecture (MLA) \u2013 Harvard Graduate School of Design (GSD); focus on design, sustainability, social responsibility",
    "faculty": "Department Name: Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 81861,
    "total_fee_cad": 327444,
    "min_class12_percent": 95,
    "required_subjects": [
      "No specific stream requirement",
      "open to all backgrounds"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Most Popular Courses (Concentration Coursework)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Additional Information",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Important Notes",
    "faculty": "Department Name: Computer Science, Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS)",
    "duration_years": 4.0,
    "annual_fee_cad": 81861,
    "total_fee_cad": 327444,
    "min_class12_percent": 95,
    "required_subjects": [
      "No specific stream requirement",
      "open to all backgrounds"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Core Program Structure",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Important Notes",
    "faculty": "Department Name: Department of Government",
    "duration_years": 4.0,
    "annual_fee_cad": 81861,
    "total_fee_cad": 327444,
    "min_class12_percent": 95,
    "required_subjects": [
      "No specific stream requirement",
      "open to all backgrounds"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Core Program Structure",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Important Notes",
    "faculty": "Department Name: Applied Mathematics, Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS)",
    "duration_years": 4.0,
    "annual_fee_cad": 81861,
    "total_fee_cad": 327444,
    "min_class12_percent": 95,
    "required_subjects": [
      "No specific stream requirement",
      "open to all backgrounds"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Core Concentration Structure",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Important Notes",
    "faculty": "Department Name: Department of Organismic and Evolutionary Biology",
    "duration_years": 4.0,
    "annual_fee_cad": 81861,
    "total_fee_cad": 327444,
    "min_class12_percent": 95,
    "required_subjects": [
      "No specific stream requirement",
      "strong background in science",
      "mathematics recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Core Concentration Tracks",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Important Notes",
    "faculty": "School Name: Harvard Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 108605,
    "total_fee_cad": 217210,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Deadlines & Timeline",
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
    "name": "Important Notes",
    "faculty": "School/Department Name: Harvard Law School \u2013 Graduate Program, Master of Laws (LL.M.)",
    "duration_years": 1.0,
    "annual_fee_cad": 111448,
    "total_fee_cad": 111448,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Deadlines",
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
    "name": "Important Notes",
    "faculty": "School/Department Name: Harvard T.H. Chan School of Public Health \u2013 Master of Public Health (MPH) Program",
    "duration_years": 2,
    "annual_fee_cad": 111018,
    "total_fee_cad": 222036,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Deadlines",
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
    "name": "Important Notes",
    "faculty": "School/Department Name: Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS)",
    "duration_years": 1.5,
    "annual_fee_cad": 90439,
    "total_fee_cad": 135658,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Timeline",
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
    "name": "Important Notes",
    "faculty": "Department of Architecture Office Address: Gund Hall, 48 Quincy Street, Suite 207, Cambridge, MA 02138",
    "duration_years": 2.0,
    "annual_fee_cad": 84883,
    "total_fee_cad": 169766,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5-Year Total (M.Arch I AP)",
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
    "name": "One semester of Calculus (college-level mathematics)",
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
    "name": "One semester of Physics (algebra-based, covering mechanics and thermodynamics)",
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
    "name": "Two semesters of History of Architecture (covering Renaissance through Modern periods minimum)",
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
    "name": "Application Timeline",
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
    "name": "Important Notes",
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

// --- University of Southern California ---
const univ_universityofsoutherncalifornia = db.institutions.insertOne(inst({
  "name": "University of Southern California",
  "abbreviation": "USC",
  "type": "university",
  "city": "Los Angeles",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Los Angeles"
  ],
  "website": "Portal for anonymous incident reporting",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(213) 740-2101 (Graduate Admissions)",
      "address": "Kosmont Center, 3601 Watt Way, Los Angeles, CA 90089"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit-based scholarships: Available; automatic consideration for admitted students"
    },
    {
      "name": "Award types:"
    },
    {
      "name": "Trustee Scholarship: Full tuition coverage; exceptional academic achievement and leadership required"
    },
    {
      "name": "Presidential Scholarship: Half tuition coverage; outstanding academic performance"
    },
    {
      "name": "USC International Freshman Academic Scholarship: Varies by award amount; high academic achievement"
    },
    {
      "name": "Dean\u2019s Scholarship: For exceptional students in specific schools/programs"
    },
    {
      "name": "Eligibility: Competitive applicants; primarily awarded during Early Action/Early Decision rounds"
    },
    {
      "name": "Need-based aid: NOT available for international students"
    },
    {
      "name": "Additional Support: Gateway Internship Program provides $2,500 scholarships for unpaid internships"
    },
    {
      "name": "Merit-based scholarships: Limited availability for graduate students"
    },
    {
      "name": "Fellowship programs:"
    },
    {
      "name": "USC Annenberg Graduate Fellowships (communication/journalism)"
    },
    {
      "name": "Program-specific scholarships vary"
    },
    {
      "name": "Need-based aid: NOT available for international students"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during semester; full-time during breaks (CPT authorized)"
    },
    {
      "name": "CPT (Curricular Practical Training): Available for degree-required internships"
    },
    {
      "name": "OPT (Optional Practical Training): Available post-graduation (12 months standard; 24-month STEM extension)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Industry-specific clubs (tech, finance, consulting, etc.)",
    "housing": "On-campus residential housing available"
  },
  "security": {
    "detail": "Non-emergency: DPS dispatch line (non-emergency number available)"
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

addPrograms(univ_universityofsoutherncalifornia, "University of Southern California", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; USC Viterbi School of Engineering; #1 most popular within Viterbi; very popular with Indian students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science and Business Administration (CSBA) \u2013 4 years; USC Viterbi; most popular combined degree; popular with Indian students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; USC Viterbi",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration \u2013 4 years; Marshall School of Business; popular with Indian students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering or Electrical Engineering \u2013 4 years; USC Viterbi; strong STEM programs",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science (multiple tracks available)",
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
    "name": "Master of Science in Computer Science \u2013 24 months; Viterbi School; Ranked #21 by US News; 79% international students; strong employer demand",
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
    "name": "Master of Business Administration (Full-Time) \u2013 22 months; Marshall School of Business; top-ranked MBA program; popular with Indian professionals",
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
    "name": "Master of Science in Engineering (various specializations: Electrical, Mechanical, Civil, Aerospace, etc.) \u2013 24 months; Viterbi School",
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
    "name": "Master of Science in Finance OR Master of Science in Applied Data Science (specialized tracks) \u2013 12\u201324 months; Marshall School and Viterbi; high demand from international applicants",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 101098,
    "total_fee_cad": 404392,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra)",
      "Physics",
      "Computer Science or programming coursework",
      "AP/IB CS highly recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer",
      "Cloud Architect",
      "Research Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science and Business Administration (CSBA)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 101098,
    "total_fee_cad": 404392,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Statistics)",
      "Physics",
      "Computer Science",
      "Economics fundamentals beneficial"
    ],
    "entry_roles": [
      "Software Engineer",
      "Product Manager",
      "Business Analyst",
      "Data Scientist",
      "Consultant",
      "Technology Specialist",
      "Operations Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 101098,
    "total_fee_cad": 404392,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (Mechanics, Electromagnetism essential)",
      "Digital Systems/Computer Science fundamentals",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Computer Engineer",
      "Hardware Design Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "Firmware Engineer",
      "VLSI Design Engineer",
      "Research Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 101098,
    "total_fee_cad": 404392,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra)",
      "Economics fundamentals beneficial",
      "Statistics",
      "computer science valued"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Financial Analyst",
      "Marketing Manager",
      "Product Manager",
      "Operations Analyst",
      "Investment Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering or Electrical Engineering",
    "faculty": "USC Viterbi School of Engineering, Department of Electrical & Computer Engineering (ECE)",
    "duration_years": 4,
    "annual_fee_cad": 101098,
    "total_fee_cad": 404392,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra, Complex Numbers)",
      "Physics (Electromagnetism essential, Mechanics, Waves & Optics)",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Telecommunications Engineer",
      "RF Engineer",
      "Controls Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 70766,
    "total_fee_cad": 141532,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics)",
      "Computer Science or programming (Python preferred; R, SQL beneficial)",
      "any undergraduate major acceptable with quantitative coursework"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Business Analyst",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 58843,
    "total_fee_cad": 117686,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in Computer Science",
      "Mathematics (Calculus, Linear Algebra, Discrete Math)",
      "Data Structures",
      "Algorithms",
      "Systems concepts",
      "programming required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Systems Engineer",
      "Research Engineer",
      "Product Engineer",
      "Cloud Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 110457,
    "total_fee_cad": 220914,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "quantitative background",
      "business experience valued but not required"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Product Manager",
      "Operations Manager",
      "General Management"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Engineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 51487,
    "total_fee_cad": 102974,
    "min_class12_percent": 55,
    "required_subjects": [
      "Engineering discipline-specific backgrounds required",
      "strong Mathematics",
      "Science",
      "Engineering fundamentals essential"
    ],
    "entry_roles": [
      "Engineer (discipline-specific)",
      "Design Engineer",
      "Systems Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 89417,
    "total_fee_cad": 178834,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra)",
      "Probability/Statistics",
      "Finance principles",
      "Accounting",
      "economics",
      "business background beneficial"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Analyst",
      "Portfolio Manager",
      "Quantitative Analyst",
      "Derivatives Trader",
      "Corporate Finance Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Applied Data Science (Alternative: MS Finance above)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 58843,
    "total_fee_cad": 117686,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics)",
      "Computer Science or programming (Python, R, SQL)",
      "any undergraduate major acceptable with quantitative coursework"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Business Analyst",
      "Statistician"
    ],
    "features": []
  }
]);

// --- University of Washington ---
const univ_universityofwashington = db.institutions.insertOne(inst({
  "name": "University of Washington",
  "abbreviation": "",
  "type": "university",
  "city": "Seattle",
  "province": "Washington",
  "country": "USA",
  "campuses": [
    "Seattle"
  ],
  "website": "www.uw.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(206) 543-5900",
      "email": "uwgrad@uw.edu",
      "address": "Box 353910, Seattle, WA 98195-3910"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "No central need-based aid for international students"
    },
    {
      "name": "Mary Gates Endowment for Students: $5,000 (for research/leadership projects); open to all UW undergrads regardless of citizenship"
    },
    {
      "name": "Eligibility: High academic standing; competition-based"
    },
    {
      "name": "Application: Automatic consideration upon admission for some awards"
    },
    {
      "name": "Graduate Fellowships: Merit-based; full tuition waiver + stipend for master\u2019s/PhD students"
    },
    {
      "name": "Academic Student Employee (ASE) Positions (TA/RA): Full tuition waiver + monthly salary + health insurance; most common form of graduate funding"
    },
    {
      "name": "Eligibility: Admitted graduate students with strong academic records"
    },
    {
      "name": "TA positions require English proficiency for instruction"
    },
    {
      "name": "Departmental Graduate Fellowships: Often automatic nomination by admission committee for exceptional students"
    },
    {
      "name": "Natalie K. Lang International Student Scholarship (UW Bothell only): Up to $2,000 for F-1 students with financial need and community commitment"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 19.5 hours/week during semester"
    },
    {
      "name": "CPT (Curricular Practical Training): Available for degree-required internships"
    },
    {
      "name": "OPT (Optional Practical Training): Available post-graduation (12 months standard; 24-month STEM extension for STEM majors)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Board game/trivia clubs"
  },
  "security": {
    "detail": "Non-emergency Police: Contact UWPD"
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

addPrograms(univ_universityofwashington, "University of Washington", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; Paul G. Allen School of Computer Science & Engineering; #1 major for Indian students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical and Computer Engineering \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration \u2013 4 years; Michael G. Foster School of Business",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science (MSDS) \u2013 18\u201324 months (full-time or part-time)",
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
    "name": "Master of Science in Computer Science & Engineering \u2013 2 years",
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
    "name": "Master of Science in Business Analytics (MSBA) \u2013 12 months (evening/weekend)",
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
    "name": "Master of Science in Civil Engineering OR Electrical Engineering \u2013 2 years",
    "faculty": "College of Engineering",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 61603,
    "total_fee_cad": 123206,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra)",
      "Physics",
      "Computer Science or programming",
      "AP/IB CS highly recommended",
      "Discrete Math",
      "Data Structures valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer",
      "Cloud Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "Paul G. Allen School of Computer Science & Engineering; College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 61603,
    "total_fee_cad": 123206,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (Mechanics, Electromagnetism essential)",
      "Digital Systems",
      "AP Physics valued"
    ],
    "entry_roles": [
      "Computer Engineer",
      "Hardware Design Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "Firmware Engineer",
      "VLSI Design Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Science in Electrical and Computer Engineering",
    "faculty": "Department of Electrical & Computer Engineering (ECE), College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 61603,
    "total_fee_cad": 123206,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (Electromagnetism and Mechanics essential)",
      "Digital Systems fundamentals",
      "AP Physics highly valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "RF Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Science in Data Science",
    "faculty": "Career support: Yes \u2013 Through College of Engineering & UW Career Center",
    "duration_years": 2,
    "annual_fee_cad": 61603,
    "total_fee_cad": 123206,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Statistics essential)",
      "Computer Science fundamentals",
      "Programming (Python, R preferred)",
      "Statistics",
      "data manipulation valued"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Business Analyst",
      "Research Scientist",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 61603,
    "total_fee_cad": 123206,
    "min_class12_percent": 75,
    "required_subjects": [],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Financial Analyst",
      "Marketing Manager",
      "Product Manager",
      "Operations Analyst",
      "HR Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science (MSDS)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 466,
    "total_fee_cad": 932,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics essential)",
      "Computer Science or programming (Python preferred; R, SQL valued)",
      "any undergraduate major acceptable with demonstrated CS/Math skills"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Business Analyst",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in Computer Science",
      "Mathematics (Calculus, Linear Algebra, Discrete Math)",
      "Data Structures",
      "Algorithms",
      "Systems concepts"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Systems Engineer",
      "Research Engineer",
      "Product Engineer",
      "Cloud Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics (MSBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 20755,
    "total_fee_cad": 41510,
    "min_class12_percent": 55,
    "required_subjects": [
      "Quantitative foundation",
      "Mathematics (Calculus, Statistics, Linear Algebra)",
      "Economics",
      "Business Analytics fundamentals",
      "programming (Python, R, SQL) beneficial"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Analytics Consultant",
      "Product Manager",
      "Operations Analyst",
      "Financial Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 26876,
    "total_fee_cad": 53752,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "business",
      "quantitative background beneficial but not required"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Product Manager",
      "Operations Manager",
      "Strategy Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Civil Engineering OR Electrical Engineering",
    "faculty": "Department of Electrical & Computer Engineering (ECE)",
    "duration_years": 2,
    "annual_fee_cad": 49058,
    "total_fee_cad": 98116,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra, Complex Analysis)",
      "Physics (Electromagnetism essential, Mechanics)",
      "Electromagnetic fundamentals",
      "Circuits",
      "Signal Processing valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "RF Engineer"
    ],
    "features": []
  }
]);

// --- UC IRVINE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS ---
const univ_ucirvineuniversitycomprehensiveguideforinternationalstudents = db.institutions.insertOne(inst({
  "name": "UC IRVINE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS",
  "abbreviation": "",
  "type": "university",
  "city": "Irvine",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Irvine"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 131,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Limited merit-based awards available"
    },
    {
      "name": "Scholarship names: Regents\u2019 Scholarship (up to $10,000/year); Chancellor\u2019s Excellence Scholarship (up to $5,000/year); Departmental scholarships (varies by school, up to $7,500/year)"
    },
    {
      "name": "Need-based aid: NOT available for international students (federal/state aid for US citizens only)"
    },
    {
      "name": "Graduate fellowships: Available for PhD and some master\u2019s programs; varies by department"
    },
    {
      "name": "Application deadline: December 2 (automatic consideration with admission application for undergraduate)"
    }
  ],
  "internships": {
    "employment_rate_percent": 91
  },
  "campus_life": {
    "clubs": "Facilities: 110,000 sq ft Anteater Recreation Center with fitness classes, sports clubs, outdoor adventures; first public eSports arena in US; multiple study areas including Aldrich Park"
  },
  "security": {
    "detail": "Safety measures: Active Shooter training programs; code pink/purple exercises for emergency preparedness; door breaching tools for emergency access"
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

addPrograms(univ_ucirvineuniversitycomprehensiveguideforinternationalstudents, "UC IRVINE UNIVERSITY: COMPREHENSIVE GUIDE FOR INTERNATIONAL STUDENTS", [
  {
    "level": "UG",
    "name": "UG Course : Computer Science and Engineering, B.S.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "4 years mathematics (through pre-calculus)",
      "1 year physics",
      "1 year chemistry | TOEFL iBT 80 or IELTS 6.5"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Biological Sciences, B.S.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Business Administration, B.A.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Business Information Management, B.S.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics through pre-calculus",
      "computer science fundamentals | TOEFL iBT 80 or IELTS 6.5 | Limited to 40 students per cohort"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Economics, B.A.",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Computer Science, M.S.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "3.0 GPA minimum on 4.0 scale | Relevant academic background: Bachelor\u2019s degree in computer science",
      "engineering",
      "mathematics",
      "or related field",
      "proficiency in at least 2 programming languages recommended | IELTS 7.0 overall (no less than 6 per module) or TOEFL iBT 80 | Work experience: Not required but preferred"
    ],
    "entry_roles": [
      "Yes \u2013 paid internship opportunities through MADO program",
      "direct employer partnerships | Typical job roles: Software engineer",
      "machine learning engineer",
      "systems engineer",
      "cloud architect (avg. salary: $100,000+ for top companies) | Career support: Division of Career Pathways",
      "internship prep series",
      "employer events",
      "100% placement rate among recent cohorts"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Data Science, M.S.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "3.0 GPA minimum on 4.0 scale | Relevant academic background: STEM fields preferred (data science, computer science, statistics, biostatistics, engineering)",
      "minimum coursework: 1 computer programming course (C/Python)",
      "3 calculus courses",
      "1 linear algebra",
      "1 probability/statistics | IELTS 7.0 overall (no less than 6 per module) or TOEFL iBT 80 | Work experience: Helpful but not required",
      "portfolio/GitHub/Kaggle encouraged"
    ],
    "entry_roles": [
      "Yes \u2013 internship experience available through program structure | Typical job roles: Data scientist",
      "machine learning engineer",
      "analytics engineer",
      "business intelligence analyst | Career support: Career pathways integration",
      "networking with tech companies in California"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration, M.B.A.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "3.0 GPA minimum on 4.0 scale (avg. admitted: 3.44) | Relevant academic background: Diverse backgrounds accepted",
      "24% science",
      "21% business/commerce",
      "21% humanities/social sciences",
      "18% engineering",
      "16% economics/finance | IELTS 7.0 overall or TOEFL iBT 80 | Work experience: 2 years minimum recommended",
      "average 5 years",
      "GMAT/GRE required (median GMAT: 685)"
    ],
    "entry_roles": [
      "Yes \u2013 mandatory summer internship between first",
      "second year | Typical job roles: Management consultant",
      "finance manager",
      "product manager",
      "operations manager (median starting salary: $120,000) | Career support: Merage MBA career services",
      "corporate recruiting partnerships",
      "alumni network"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Civil and Environmental Engineering, M.S.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "3.0 GPA minimum on 4.0 scale | Relevant academic background: Civil engineering",
      "environmental engineering",
      "or related engineering discipline",
      "coursework in mathematics",
      "physics",
      "engineering fundamentals | IELTS 7.0 overall (no less than 6 per module) or TOEFL iBT 80 | Work experience: Not required",
      "professional engineering experience preferred"
    ],
    "entry_roles": [
      "Yes \u2013 capstone project",
      "research opportunities",
      "co-op internships available | Typical job roles: Civil engineer",
      "environmental engineer",
      "consulting engineer",
      "project engineer",
      "sustainability analyst | Career support: Engineering career services",
      "partnerships with major engineering firms",
      "professional licensure (PE) guidance"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Public Health, M.P.H.",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "3.0 GPA minimum on 4.0 scale | Relevant academic background: Any discipline accepted",
      "quantitative skills demonstrated through coursework or standardized test scores | IELTS 7.0 overall or TOEFL iBT 80 | Work experience: Not required",
      "public health experience preferred",
      "demonstrated quantitative abilities required"
    ],
    "entry_roles": [
      "Yes \u2013 field placement (practicum) in final quarters",
      "research options available | Typical job roles: Public health analyst",
      "epidemiologist",
      "health program manager",
      "environmental health specialist",
      "global health coordinator (varies by concentration) | Career support: Public health career services",
      "partnerships with health departments",
      "NGOs",
      "international organizations",
      "6 concentration options (Biostatistics, Environmental & Occupational Health, Epidemiology, Global Health, Maternal & Child Health, Social & Behavioral Health)"
    ],
    "features": []
  }
]);

// --- University of Illinois at Urbana-Champaign ---
const univ_universityofillinoisaturbanachampaign = db.institutions.insertOne(inst({
  "name": "University of Illinois at Urbana-Champaign",
  "abbreviation": "UIUC",
  "type": "university",
  "city": "Urbana-Champaign",
  "province": "Illinois",
  "country": "USA",
  "campuses": [
    "Urbana-Champaign"
  ],
  "website": "www.illinois.edu/academics/departments",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(217) 333-0302 (central contact)",
      "email": "grad.ask@grad.gatech.edu (varies by program)",
      "address": "International Studies Building, 1st Floor, 910 S. Fifth St., M/C 417, Champaign, IL 61820"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit-based scholarships available (partial to full coverage)"
    },
    {
      "name": "International Merit Scholarship: Varies based on academic achievement and leadership"
    },
    {
      "name": "Illinois International Student Scholarship: Exceptional academic performance and community involvement"
    },
    {
      "name": "Illinois Achievement Scholarship: $10,000 for non-resident freshmen (renewable for 4 years)"
    },
    {
      "name": "Dean\u2019s Scholar Program: Partial to full tuition (College of Liberal Arts & Sciences)"
    },
    {
      "name": "Illinois Graduate Fellowship: Full tuition and stipend"
    },
    {
      "name": "University Fellowship: Outstanding academic and research achievements"
    },
    {
      "name": "Illinois Research Scholarship: Outstanding research proposals and academic records"
    },
    {
      "name": "Graduate College Dissertation Travel Grant: For doctoral candidates conducting research abroad"
    },
    {
      "name": "Fully funded scholarship opportunities available for outstanding students"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "No guaranteed need-based aid for undergraduates"
    },
    {
      "name": "Limited assistantships and fellowships for graduate students"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during semester (F-1 visa)"
    }
  ],
  "internships": {
    "part_time_work": "95% of undergraduate CS students report internship or co-op during degree",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Entrepreneurship and innovation clubs",
    "housing": "Housing guaranteed for first-year students"
  },
  "security": {
    "detail": "Non-Emergency: (217) 333-1216 for SafeWalks and non-emergency assistance"
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

addPrograms(univ_universityofillinoisaturbanachampaign, "University of Illinois at Urbana-Champaign", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; College of Engineering; popular with international students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science \u2013 4 years; Interdisciplinary program (CS + Statistics)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemical Engineering OR Civil Engineering \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science \u2013 18 months; Siebel School; highly ranked program",
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
    "name": "Master of Science in Business Analytics (MSBA) \u2013 9\u201315 months; STEM-designated; Gies Business",
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
    "name": "Master of Science in Finance \u2013 Multiple rounds; Gies College of Business",
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
    "name": "Master of Science in Information Management \u2013 18 months; popular for tech-focused students",
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
    "name": "MBA (iMBA) \u2013 Online and hybrid delivery; Gies College of Business; multiple start dates",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 61669,
    "total_fee_cad": 246676,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus preferred)",
      "Physics",
      "Computer Science or programming coursework recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Full-Stack Developer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer",
      "Research Engineer",
      "Algorithm Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical and Computer Engineering (ECE), Grainger College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 59339,
    "total_fee_cad": 237356,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra preferred)",
      "Physics (Mechanics and Electromagnetism essential)",
      "Chemistry recommended",
      "prior programming experience beneficial"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "Network Engineer",
      "Circuit Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Science and Engineering (MechSE), Grainger College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 59339,
    "total_fee_cad": 237356,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra, Differential Equations preferred)",
      "Physics (Mechanics, Thermodynamics, Wave Motion) essential",
      "Chemistry recommended"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Robotics Engineer",
      "Thermal/HVAC Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science",
    "faculty": "Siebel School of Computing and Data Science / College of Engineering (interdisciplinary)",
    "duration_years": 4,
    "annual_fee_cad": 61669,
    "total_fee_cad": 246676,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra, Statistics preferred)",
      "Physics",
      "Computer Science or programming experience recommended",
      "database design",
      "algorithm knowledge beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Analyst",
      "Software Engineer (Data-focused)",
      "Research Engineer",
      "Analytics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemical Engineering",
    "faculty": "Department of Chemical & Biomolecular Engineering, Grainger College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 59339,
    "total_fee_cad": 237356,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra, Differential Equations) essential",
      "Physics (General Physics, Thermodynamics)",
      "Chemistry (General and Organic Chemistry) critical",
      "prior lab experience beneficial"
    ],
    "entry_roles": [
      "Chemical Engineer",
      "Process Engineer",
      "Design Engineer",
      "R&D Engineer",
      "Production Engineer",
      "Environmental Engineer",
      "Research Scientist",
      "Quality Control Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 54294,
    "total_fee_cad": 108588,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in computer science",
      "mathematics",
      "data structures",
      "algorithms",
      "systems required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Full-Stack Developer",
      "Research Engineer",
      "Systems Engineer",
      "Cloud Architect",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics (MSBA)",
    "faculty": "Address: Gies College of Business, Illinois, Urbana, IL 61801",
    "duration_years": 2,
    "annual_fee_cad": 7857,
    "total_fee_cad": 15714,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra)",
      "Probability/Statistics",
      "Programming (Python preferred) required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Architect",
      "Analytics Manager",
      "Business Analyst",
      "Statistician",
      "Data Analyst",
      "Chief Technology Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance (MSF)",
    "faculty": "Address: Gies College of Business, Illinois, Urbana, IL 61801",
    "duration_years": 2,
    "annual_fee_cad": 11463,
    "total_fee_cad": 22926,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics",
      "Economics",
      "Accounting",
      "Statistics background beneficial"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Analyst",
      "Equity Analyst",
      "Fixed Income Analyst",
      "Portfolio Manager",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Information Management",
    "faculty": "School of Information Sciences, College of Applied Health Sciences",
    "duration_years": 2,
    "annual_fee_cad": 39512,
    "total_fee_cad": 79024,
    "min_class12_percent": 70,
    "required_subjects": [
      "Background in computer science",
      "business",
      "or related field beneficial",
      "information systems",
      "database design knowledge valued"
    ],
    "entry_roles": [
      "Information Technology Manager",
      "Systems Analyst",
      "Database Administrator",
      "IT Consultant",
      "Business Analyst",
      "Data Analyst",
      "Information Systems Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (iMBA) \u2013 Online",
    "faculty": "Address: Gies College of Business, Illinois, Urbana, IL 61801",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any undergraduate background acceptable",
      "business knowledge not required"
    ],
    "entry_roles": [
      "General management positions vary widely",
      "Career advancement in current role",
      "Consulting",
      "Finance",
      "Technology",
      "Operations",
      "Product Management"
    ],
    "features": []
  }
]);

// --- University of Michigan ---
const univ_universityofmichigan = db.institutions.insertOne(inst({
  "name": "University of Michigan",
  "abbreviation": "",
  "type": "university",
  "city": "Ann Arbor",
  "province": "Michigan",
  "country": "USA",
  "campuses": [
    "Ann Arbor"
  ],
  "website": "www.umich.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(734) 764-7433",
      "email": "admissions@umich.edu or use contact form",
      "address": "1220 SAB, 515 E Jefferson, Ann Arbor, MI 48109-1316"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Michigan International Student Scholarship: $25,000/year, renewable for 4 years (total $100,000)"
    },
    {
      "name": "LSA International Student Scholarship: $5,000\u2013$25,000/year (limited availability)"
    },
    {
      "name": "Merit-based scholarships: Limited availability; most are merit-based only, not need-based"
    },
    {
      "name": "Need-based aid: NOT available to international students on temporary visas"
    },
    {
      "name": "UM-Dearborn International Scholarship (for Dearborn campus): $5,000\u2013$12,500/year based on GPA"
    },
    {
      "name": "Graduate fellowships: Limited availability (competitive)"
    },
    {
      "name": "Research/Teaching Assistantships: Available in some programs with tuition waiver and stipend"
    },
    {
      "name": "**NO need-based aid for international students"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during semester; full-time during breaks"
    },
    {
      "name": "CPT (Curricular Practical Training) available for degree-required internships"
    },
    {
      "name": "OPT (Optional Practical Training) available post-graduation (12 months standard; 24-month STEM extension)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Engineering, computer science, business clubs and professional societies",
    "housing": "Housing Patrols: 24/7 officer patrols in residential areas"
  },
  "security": {
    "detail": "Non-Emergency/SafeWalks: Call dispatch for escort"
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

addPrograms(univ_universityofmichigan, "University of Michigan", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; Ranked #10 by US News; #5 at CSRankings; 5 Turing Award winners as alumni",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; College of Engineering; popular with international students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration (BBA) \u2013 4 years; Ross School of Business; very popular among Indian students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; College of Engineering; strong demand",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Economics \u2013 4 years; College of LSA; foundation for finance/consulting",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science \u2013 24 months; Ranked top program; popular with international students",
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
    "name": "Master of Science in Data Science \u2013 18\u201324 months; Joint program (CS, Statistics, School of Information, Biostatistics); Ranked highly",
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
    "name": "Master of Business Administration (MBA) \u2013 22 months; Ross School of Business; Ranked top MBA program",
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
    "name": "Master of Science in Engineering (various specializations) \u2013 24 months; Multiple engineering disciplines",
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
    "name": "Master of Science in Finance OR Master of Science in Analytics \u2013 Varies; Ross School; High demand from international applicants",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science and Engineering (CSE), College of Engineering and Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 84105,
    "total_fee_cad": 336420,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra)",
      "Physics",
      "Computer Science or programming coursework",
      "AP/IB CS",
      "STEM courses recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Full-Stack Developer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer",
      "Research Engineer",
      "Algorithm Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Address: College of Engineering, Ann Arbor, MI 48109",
    "duration_years": 4,
    "annual_fee_cad": 84105,
    "total_fee_cad": 336420,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (Mechanics, Thermodynamics)",
      "Chemistry",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Robotics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration (BBA)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Algebra)",
      "Economics fundamentals beneficial",
      "Statistics",
      "computer science valued"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Data Analyst",
      "Market Analyst",
      "Investment Analyst",
      "Operations Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical and Computer Engineering (ECE), College of Engineering and Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 84105,
    "total_fee_cad": 336420,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra)",
      "Physics (Mechanics, Electromagnetism essential)",
      "Computer Science or programming",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Economics",
    "faculty": "Department of Economics, College of Literature, Science, and the Arts (LSA)",
    "duration_years": 4,
    "annual_fee_cad": 113159,
    "total_fee_cad": 452636,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra)",
      "Statistics",
      "Economics fundamentals",
      "computer science",
      "programming beneficial"
    ],
    "entry_roles": [
      "Economist",
      "Financial Analyst",
      "Business Analyst",
      "Policy Analyst",
      "Research Analyst",
      "Data Analyst",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Department of Computer Science and Engineering, College of Engineering and Applied Science",
    "duration_years": 2,
    "annual_fee_cad": 85449,
    "total_fee_cad": 170898,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in Computer Science",
      "Mathematics (Calculus, Linear Algebra, Discrete Math)",
      "Data Structures",
      "Algorithms",
      "Systems concepts required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Full-Stack Developer",
      "Research Engineer",
      "Systems Engineer",
      "Cloud Architect",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Department of Statistics, College of Literature, Science, and the Arts (LSA); Director: S.P. Meyn",
    "duration_years": 2,
    "annual_fee_cad": 74935,
    "total_fee_cad": 149870,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra)",
      "Probability/Statistics",
      "programming (Python preferred; R, SQL beneficial)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Statistician",
      "Research Scientist",
      "Quantitative Analyst",
      "Software Engineer (Data-focused)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) \u2013 Full-Time & Online",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 111989,
    "total_fee_cad": 223978,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any undergraduate background acceptable",
      "no business/economics requirement"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance",
      "Technology",
      "Product Management",
      "Operations",
      "General Management"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Engineering",
    "faculty": "Varies by engineering specialization (College of Engineering and Applied Science)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Engineering discipline-specific backgrounds required",
      "Mathematics",
      "Science",
      "Engineering fundamentals essential"
    ],
    "entry_roles": [
      "Engineer (discipline-specific)",
      "Design Engineer",
      "Systems Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Manufacturing Engineer",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance (Alternative: Master of Financial Engineering at other universities)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "quantitative background preferred"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Analyst",
      "Portfolio Manager",
      "Quantitative Analyst"
    ],
    "features": []
  }
]);

// --- OREGON STATE UNIVERSITY ---
const univ_oregonstateuniversity = db.institutions.insertOne(inst({
  "name": "OREGON STATE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Corvallis",
  "province": "Oregon",
  "country": "USA",
  "campuses": [
    "Corvallis"
  ],
  "website": "https://www.oregonstate.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "intladmit@oregonstate.edu (Admissions); OIS.Student@oregonstate.edu (Services)",
      "phone": "541-737-6310 (ISAS)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Graduate Assistantships: Research and teaching assistantships available (tuition + stipend)"
    },
    {
      "name": "MECOP Internship Program: Paid internships (engineering students, 2x 6-month placements)"
    },
    {
      "name": "Merit-based scholarships are the primary source for international students"
    },
    {
      "name": "Limited need-based aid available"
    },
    {
      "name": "Pathway program scholarships through INTO Oregon State"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Innovation and entrepreneurship clubs"
  },
  "security": {
    "detail": "Campus safety education and emergency preparedness programs"
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

addPrograms(univ_oregonstateuniversity, "OREGON STATE UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
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
    "name": "Master of Science in Computer Engineering",
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
    "name": "Master of Business Administration (Full-Time, On-Campus)",
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
    "name": "Master of Science in Electrical Engineering",
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
    "name": "Master of Science in Mechanical Engineering",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "School of Electrical Engineering and Computer Science, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 52702,
    "total_fee_cad": 210808,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (4 years)",
      "Physics",
      "Chemistry (3 years recommended)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "full-stack developer",
      "AI/ML engineer",
      "embedded systems engineer",
      "cybersecurity specialist",
      "data engineer",
      "cloud architect",
      "security engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Engineering",
    "faculty": "School of Electrical Engineering and Computer Science, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 52702,
    "total_fee_cad": 210808,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Computer engineer",
      "embedded systems engineer",
      "hardware engineer",
      "AI/ML engineer",
      "firmware engineer",
      "digital design engineer",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 52702,
    "total_fee_cad": 210808,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal engineer",
      "design engineer",
      "HVAC engineer",
      "mechanical systems engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "School of Electrical Engineering and Computer Science, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 52702,
    "total_fee_cad": 210808,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "electronics engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "College of Business",
    "duration_years": 4,
    "annual_fee_cad": 52702,
    "total_fee_cad": 210808,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "marketing specialist",
      "operations manager",
      "supply chain coordinator",
      "product manager",
      "business development associate"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "School of Electrical Engineering and Computer Science, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 46024,
    "total_fee_cad": 92048,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "electrical engineering",
      "mathematics",
      "or related field"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "cloud architect",
      "cybersecurity engineer",
      "research engineer",
      "data engineer",
      "solutions architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Engineering",
    "faculty": "School of Electrical Engineering and Computer Science, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 46024,
    "total_fee_cad": 92048,
    "min_class12_percent": 70,
    "required_subjects": [
      "Electrical engineering",
      "computer engineering",
      "or related field"
    ],
    "entry_roles": [
      "Computer engineer",
      "embedded systems engineer",
      "hardware engineer",
      "AI/ML engineer",
      "firmware engineer",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time, On-Campus)",
    "faculty": "College of Business, MBA Programs",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline (no specific major required; diversity valued)"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "product manager",
      "business development executive",
      "entrepreneur",
      "supply chain manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical Engineering",
    "faculty": "School of Electrical Engineering and Computer Science, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 46024,
    "total_fee_cad": 92048,
    "min_class12_percent": 70,
    "required_subjects": [
      "Electrical engineering or related field",
      "foundational circuits/electromagnetics knowledge required"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "electronics engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 46024,
    "total_fee_cad": 92048,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanical engineering",
      "aerospace",
      "or related field",
      "foundational mechanics/thermodynamics required"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal engineer",
      "design engineer",
      "robotics engineer",
      "systems engineer"
    ],
    "features": []
  }
]);

// --- University of California, Los Angeles ---
const univ_universityofcalifornialosangeles = db.institutions.insertOne(inst({
  "name": "University of California, Los Angeles",
  "abbreviation": "UCLA",
  "type": "university",
  "city": "Los Angeles",
  "province": "California",
  "country": "USA",
  "campuses": [
    "Los Angeles"
  ],
  "website": "www.ucla.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+1-310-825-1681 (voicemail only)",
      "email": "dcissj1unit@saonet.ucla.edu",
      "address": "106 Bradley International Hall, 417 Charles E. Young Drive West, Los Angeles, CA 90095"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit-based scholarships: Limited availability (not guaranteed)"
    },
    {
      "name": "UCLA Undergraduate International Student Scholarship: $5,000\u2013$10,000/year (minimum 3.7 GPA, outstanding leadership)"
    },
    {
      "name": "UCLA School of Engineering International Scholarship: $2,000\u2013$8,000 (engineering students, high academic achievement)"
    },
    {
      "name": "UCLA Global Leaders Scholarship: $3,000\u2013$7,500 (strong leadership, community involvement)"
    },
    {
      "name": "UCLA Dean\u2019s Global Scholarship: Varies (international students with financial need)"
    },
    {
      "name": "**No need-based or federal aid available to international undergraduates"
    },
    {
      "name": "Emergency financial support: Limited emergency funds available (application required)"
    },
    {
      "name": "UCLA Graduate Division Fellowships: Varies by program (academic merit and research potential)"
    },
    {
      "name": "Master\u2019s-specific scholarships: Program dependent; check Anderson School, Graduate Division"
    },
    {
      "name": "Research/Teaching Assistantships: Limited availability (competitive; provides tuition waiver + stipend)"
    },
    {
      "name": "External scholarships: Fulbright, Horatio Alger, Gates Millennium Scholars, etc."
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during academic term (F-1 visa)"
    },
    {
      "name": "CPT (Curricular Practical Training) and OPT (Optional Practical Training) available"
    },
    {
      "name": "Private student loans available (not recommended for high debt)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Computing and technology clubs",
    "housing": "On-campus housing available (first-year guaranteed for freshmen)"
  },
  "security": {
    "detail": "Emergency: 911"
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

addPrograms(univ_universityofcalifornialosangeles, "University of California, Los Angeles", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Samueli School of Engineering) \u2013 4 years; Ranked birthplace of the internet; <6% acceptance rate (highly competitive); popular with international students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; Samueli School; strong demand from international students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Economics \u2013 4 years; College of Letters and Science; gateway to consulting and finance; no traditional business degree exists",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology OR Psychobiology \u2013 4 years; highly popular; pre-med pathway",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering OR Mechanical Engineering \u2013 4 years; Samueli School; strong engineering program",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science (MSCS) \u2013 1.5\u20132 years; Popular with international students; rigorous technical focus",
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
    "name": "Master of Science in Business Analytics (MSBA) \u2013 15 months; Ranked #1 Globally by QS (2026); 100% employment within 6 months; Popular with data science aspirants",
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
    "name": "Master of Business Administration (iMBA) \u2013 Online; 2 years flexible; Average GMAT 714; Average salary $155,000; Anderson School (top-ranked)",
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
    "name": "Master of Applied Statistics & Data Science (MASDS) \u2013 2 years; Practical skills focus; Online and on-campus options; Popular with analytics-focused students",
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
    "name": "Master of Science in Data Science OR Master of Science in Finance \u2013 Varies by program; High demand from international applicants",
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
    "name": "Bachelor of Science in Computer Science (Samueli School of Engineering)",
    "faculty": "Henry Samueli School of Engineering and Applied Science, Department of Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 73556,
    "total_fee_cad": 294224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in Mathematics (Calculus, Linear Algebra)",
      "Physics",
      "Computer Science or programming experience",
      "AP/IB CS",
      "STEM courses recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Full-Stack Developer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer",
      "Research Engineer",
      "Algorithm Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "Department of Electrical and Computer Engineering (ECE), Henry Samueli School of Engineering and Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 68108,
    "total_fee_cad": 272432,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (Mechanics, Electromagnetism)",
      "Computer Science or programming experience",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Hardware Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "FPGA Design Engineer",
      "Firmware Developer",
      "Product Engineer",
      "Full-Stack Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Economics",
    "faculty": "Department of Economics, UCLA College of Letters and Science",
    "duration_years": 4,
    "annual_fee_cad": 68108,
    "total_fee_cad": 272432,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra)",
      "Algebra",
      "Economics fundamentals preferred",
      "Statistics",
      "computer science beneficial"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Data Analyst",
      "Market Analyst",
      "Investment Analyst",
      "Operations Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology OR Psychobiology",
    "faculty": "Department of Ecology and Evolutionary Biology, UCLA College of Letters and Science",
    "duration_years": 4,
    "annual_fee_cad": 68108,
    "total_fee_cad": 272432,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong sciences \u2013 Biology",
      "Chemistry (organic and inorganic)",
      "Physics required",
      "Mathematics (Calculus preferred)",
      "AP Biology",
      "AP Chemistry valued"
    ],
    "entry_roles": [
      "Research Assistant",
      "Biomedical Engineer",
      "Healthcare Administrator",
      "Lab Technician",
      "Pharmaceutical Representative",
      "Medical Scientist",
      "Clinical Researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering OR Mechanical Engineering",
    "faculty": "Department of Mechanical and Aerospace Engineering, Henry Samueli School of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 68108,
    "total_fee_cad": 272432,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (Mechanics, Thermodynamics, Waves)",
      "Chemistry",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science (MSCS)",
    "faculty": "Department of Computer Science, Henry Samueli School of Engineering and Applied Science",
    "duration_years": 2,
    "annual_fee_cad": 41387,
    "total_fee_cad": 82774,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in Computer Science",
      "Mathematics (Calculus, Linear Algebra, Discrete Math)",
      "Data Structures",
      "Algorithms",
      "Systems concepts required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Full-Stack Developer",
      "Research Engineer",
      "Systems Engineer",
      "Cloud Architect",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics (MSBA)",
    "faculty": "Anderson School of Management, Department of Business Analytics",
    "duration_years": 2,
    "annual_fee_cad": 2760,
    "total_fee_cad": 5520,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra)",
      "Probability/Statistics",
      "Programming (Python preferred; SQL, R, Java also valued)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Architect",
      "Analytics Manager",
      "Business Analyst",
      "Statistician",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (iMBA) \u2013 Online & Full-Time",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 112227,
    "total_fee_cad": 224454,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any undergraduate background acceptable",
      "no specific business/economics requirement"
    ],
    "entry_roles": [
      "Management Consulting",
      "Finance",
      "Technology",
      "Product Management",
      "Operations",
      "General Management (career advancement in current role)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Applied Statistics & Data Science (MASDS)",
    "faculty": "Address: Department of Statistics, UCLA, Los Angeles, CA 90095",
    "duration_years": 2,
    "annual_fee_cad": 37312,
    "total_fee_cad": 74624,
    "min_class12_percent": 70,
    "required_subjects": [
      "Required: At least 12 quarter courses (or 8 semester courses) in upper-division quantitative work including Statistics",
      "Mathematics",
      "Computer Science",
      "Electrical Engineering",
      "Statistics NOT required but strong quantitative background essential"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Statistician",
      "Research Scientist",
      "Quantitative Analyst",
      "Software Engineer (Data-focused)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance (MSFin) \u2013 Alternative: Master of Financial Engineering (MFE)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 2760,
    "total_fee_cad": 5520,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Probability)",
      "Finance background",
      "Programming knowledge beneficial"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Financial Engineer",
      "Risk Analyst",
      "Portfolio Manager",
      "Derivatives Trader",
      "Investment Analyst",
      "Software Engineer (Finance)"
    ],
    "features": []
  }
]);

// --- Northeastern University ---
const univ_northeasternuniversity = db.institutions.insertOne(inst({
  "name": "Northeastern University",
  "abbreviation": "",
  "type": "university",
  "city": "Boston",
  "province": "Massachusetts",
  "country": "USA",
  "campuses": [
    "Boston"
  ],
  "website": "www.northeastern.edu/academics",
  "application_portal": "Common Application or Coalition Application",
  "contacts": {
    "admissions": {
      "email": "admissions@northeastern.edu",
      "phone": "Not publicly disclosed",
      "address": "Northeastern University, Boston, MA 02115"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit-based scholarships: Automatic consideration; no separate application required"
    },
    {
      "name": "Award ranges: $10,000\u2013$28,000 per year (maximum)"
    },
    {
      "name": "Types of merit scholarships:"
    },
    {
      "name": "Dean\u2019s Scholarship (competitive)"
    },
    {
      "name": "International Scholars Award (merit-based)"
    },
    {
      "name": "National Merit Scholarship (if National Merit Finalist)"
    },
    {
      "name": "Presidential Global Scholarship (for global co-op participation)"
    },
    {
      "name": "RaiseMe Microscholarships (up to $20,000 per year for eligible high school students)"
    },
    {
      "name": "Need-based aid: NOT available for international students"
    },
    {
      "name": "Merit-based scholarships: Available through department/college application"
    },
    {
      "name": "Graduate awards: Limited availability (competitive)"
    },
    {
      "name": "Department/college-specific awards: Varies by program"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during semester; full-time during breaks"
    },
    {
      "name": "CPT (Curricular Practical Training): Available for degree-required internships/co-ops"
    },
    {
      "name": "OPT (Optional Practical Training): Available post-graduation (12 months standard; 24-month STEM extension)"
    },
    {
      "name": "Assistantships: Research and teaching assistantships may be available in some programs"
    }
  ],
  "internships": {
    "part_time_work": "Off-campus: Requires authorization (CPT for degree-required co-ops/internships)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Entrepreneurship organizations and innovation clubs",
    "housing": "Off-campus housing options in Boston area"
  },
  "security": {
    "detail": "Non-Emergency: Campus safety escort or NUPD dispatch"
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

addPrograms(univ_northeasternuniversity, "Northeastern University", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; Khoury College; highly popular with Indian students; includes required co-ops",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science \u2013 4 years; Khoury College; combined major with engineering/business",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration \u2013 4 years; D\u2019Amore-McKim School of Business; very popular",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; College of Engineering; strong demand",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemical Engineering or Electrical Engineering \u2013 4 years; College of Engineering; popular STEM field",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science \u2013 24 months; Interdisciplinary (Khoury + Engineering); top-ranked program",
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
    "name": "Master of Science in Computer Science \u2013 24 months; Khoury College; ranked top program",
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
    "name": "Master of Business Administration (Full-Time) \u2013 22 months; D\u2019Amore-McKim School; Ranked #40 by US News",
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
    "name": "MBA x Data Science Concentration \u2013 22\u201324 months; Partnership between Business School & Khoury; growing popularity",
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
    "name": "Master of Science in Finance OR Master of Science in Project Management \u2013 12\u201324 months; High demand from international applicants",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Address: Khoury College of Computer Sciences, 201 Cullinane Hall, 360 Huntington Avenue, Boston, MA 02115",
    "duration_years": 4,
    "annual_fee_cad": 46913,
    "total_fee_cad": 187652,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra, Pre-Calculus)",
      "Physics",
      "Computer Science or programming coursework",
      "AP/IB CS",
      "STEM courses recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Research Engineer",
      "Product Engineer",
      "Cloud Architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science",
    "faculty": "Address: Khoury College of Computer Sciences, 201 Cullinane Hall, 360 Huntington Avenue, Boston, MA 02115",
    "duration_years": 4,
    "annual_fee_cad": 46913,
    "total_fee_cad": 187652,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Statistics)",
      "Computer Science or programming",
      "Physics beneficial",
      "Data Science foundations valued"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Business Analyst",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 46913,
    "total_fee_cad": 187652,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra)",
      "Economics fundamentals beneficial",
      "Statistics",
      "computer science valued"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Operations Analyst",
      "Marketing Analyst",
      "Product Manager",
      "Data Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Internship/practical training: Yes \u2013 Co-op program central to College of Engineering curriculum",
    "duration_years": 4,
    "annual_fee_cad": 46913,
    "total_fee_cad": 187652,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra)",
      "Physics (Mechanics, Thermodynamics essential)",
      "Chemistry",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Robotics Engineer",
      "HVAC Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemical Engineering or Electrical Engineering",
    "faculty": "Phone: Main: (617) 373-2740 (College of Engineering)",
    "duration_years": 4,
    "annual_fee_cad": 131280,
    "total_fee_cad": 525120,
    "min_class12_percent": 85,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra)",
      "Physics (Electromagnetism essential, Mechanics, Circuits fundamental)",
      "AP Physics valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "RF Engineer",
      "Controls Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Address: Khoury College of Computer Sciences, 201 Cullinane Hall, 360 Huntington Avenue, Boston, MA 02115",
    "duration_years": 2,
    "annual_fee_cad": 41400,
    "total_fee_cad": 82800,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics)",
      "Computer Science or programming (Python preferred; R, SQL beneficial)",
      "any undergraduate major acceptable with quantitative coursework"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Business Analyst",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Address: Khoury College of Computer Sciences, 201 Cullinane Hall, 360 Huntington Avenue, Boston, MA 02115",
    "duration_years": 2,
    "annual_fee_cad": 41400,
    "total_fee_cad": 82800,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in Computer Science",
      "Mathematics (Calculus, Linear Algebra, Discrete Math)",
      "Data Structures",
      "Algorithms",
      "Systems concepts required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Systems Engineer",
      "Research Engineer",
      "Product Engineer",
      "Cloud Architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 4278,
    "total_fee_cad": 8556,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "quantitative background",
      "business experience valued but not required"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Product Manager",
      "Operations Manager",
      "General Management"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA x Data Science Concentration",
    "faculty": "D\u2019Amore-McKim School of Business & Khoury College of Computer Sciences",
    "duration_years": 2,
    "annual_fee_cad": 4278,
    "total_fee_cad": 8556,
    "min_class12_percent": 55,
    "required_subjects": [
      "Quantitative background beneficial",
      "strong mathematics",
      "statistics",
      "programming skills valued",
      "any undergraduate major acceptable"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Analyst",
      "Product Manager",
      "Strategy Consultant",
      "Analytics Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 66240,
    "total_fee_cad": 132480,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra)",
      "Probability/Statistics",
      "Finance principles",
      "Accounting",
      "economics",
      "business background beneficial"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Analyst",
      "Portfolio Manager",
      "Quantitative Analyst",
      "Derivatives Trader",
      "Corporate Finance Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Project Management (Alternative: MS Finance above)",
    "faculty": "College of Professional Studies: Waived or $100 (varies)",
    "duration_years": 2,
    "annual_fee_cad": 40240,
    "total_fee_cad": 80480,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any undergraduate major acceptable",
      "project management",
      "business",
      "or engineering background beneficial",
      "organizational",
      "leadership skills valued"
    ],
    "entry_roles": [
      "Project Manager",
      "Program Manager",
      "Operations Manager",
      "Business Analyst",
      "Product Manager",
      "Consultant"
    ],
    "features": []
  }
]);

// --- CLEMSON UNIVERSITY ---
const univ_clemsonuniversity = db.institutions.insertOne(inst({
  "name": "CLEMSON UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Clemson",
  "province": "South Carolina",
  "country": "USA",
  "campuses": [
    "Clemson"
  ],
  "website": "https://www.clemson.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international@clemson.edu",
      "phone": "864-656-3310"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Important Note: Clemson offers NO scholarships for international undergraduate students"
    },
    {
      "name": "Graduate Assistantships: Research and teaching assistantships available (tuition + stipend)"
    },
    {
      "name": "Merit-Based Graduate Support: Available for select graduate programs"
    },
    {
      "name": "Sister-State Agreement Tuition Reduction: Available for select countries/regions (by bilateral agreement with South Carolina)"
    },
    {
      "name": "International undergraduates must pay full tuition; no financial aid available"
    },
    {
      "name": "International graduates have limited scholarship opportunities"
    },
    {
      "name": "All costs must be paid at beginning of each semester (August, January, May)"
    },
    {
      "name": "No deferred payment privileges for international students"
    }
  ],
  "internships": {
    "part_time_work": "Engineering co-op programs available (paid internships)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities:"
  },
  "security": {
    "detail": "Campus safety education and emergency preparedness programs"
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

addPrograms(univ_clemsonuniversity, "CLEMSON UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
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
    "name": "Master of Business Administration (Full-Time)",
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
    "name": "Master of Science in Mechanical Engineering",
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
    "name": "Master of Science in Automotive Engineering",
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
    "name": "Master of Professional Accountancy",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "School of Computing, College of Engineering, Computing and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 55827,
    "total_fee_cad": 223308,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (4 years)",
      "Physics",
      "Chemistry (3+ years recommended)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "full-stack developer",
      "cybersecurity specialist",
      "data engineer",
      "embedded systems engineer",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, College of Engineering, Computing and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 55827,
    "total_fee_cad": 223308,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal engineer",
      "design engineer",
      "HVAC engineer",
      "systems engineer",
      "energy engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical and Computer Engineering, College of Engineering, Computing and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 55827,
    "total_fee_cad": 223308,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "electronics engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Engineering",
    "faculty": "School of Computing / Department of Electrical and Computer Engineering, College of Engineering, Computing and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 55827,
    "total_fee_cad": 223308,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Computer engineer",
      "embedded systems engineer",
      "hardware engineer",
      "firmware engineer",
      "digital design engineer",
      "AI/ML engineer",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "College of Business (Wilbur O. and Ann Powers College of Business)",
    "duration_years": 4,
    "annual_fee_cad": 55827,
    "total_fee_cad": 223308,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "marketing specialist",
      "operations manager",
      "supply chain coordinator",
      "product manager",
      "investment analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "School of Computing, College of Engineering, Computing and Applied Sciences",
    "duration_years": 2,
    "annual_fee_cad": 30428,
    "total_fee_cad": 60856,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "electrical engineering",
      "mathematics",
      "or related field (online CS: bachelor\u2019s degree in any field)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "cloud architect",
      "cybersecurity engineer",
      "research engineer",
      "data engineer",
      "solutions architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "College of Business (Wilbur O. and Ann Powers College of Business), MBA Programs",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline (no specific major required; diversity valued)"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "product manager",
      "business development executive",
      "entrepreneur",
      "supply chain manager",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, College of Engineering, Computing and Applied Sciences",
    "duration_years": 2,
    "annual_fee_cad": 30428,
    "total_fee_cad": 60856,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanical engineering",
      "aerospace",
      "or related field",
      "foundational mechanics/thermodynamics required"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal engineer",
      "design engineer",
      "energy systems engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Automotive Engineering",
    "faculty": "International Center for Automotive Research (CU-ICAR), College of Engineering, Computing and Applied Sciences",
    "duration_years": 2,
    "annual_fee_cad": 34500,
    "total_fee_cad": 69000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanical/automotive engineering or related field",
      "foundational vehicle dynamics knowledge required"
    ],
    "entry_roles": [
      "Automotive engineer",
      "vehicle dynamics engineer",
      "powertrain engineer",
      "design engineer",
      "manufacturing engineer",
      "systems engineer",
      "research engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Professional Accountancy",
    "faculty": "College of Business (Wilbur O. and Ann Powers College of Business), School of Accountancy",
    "duration_years": 2,
    "annual_fee_cad": 33120,
    "total_fee_cad": 66240,
    "min_class12_percent": 70,
    "required_subjects": [
      "Accounting",
      "business",
      "or related field preferred (some flexibility)"
    ],
    "entry_roles": [
      "Certified Public Accountant (CPA)",
      "tax accountant",
      "audit associate",
      "financial analyst",
      "management accountant",
      "forensic accountant"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF CALIFORNIA, SAN DIEGO ---
const univ_universityofcaliforniasandiego = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF CALIFORNIA, SAN DIEGO",
  "abbreviation": "UCSD",
  "type": "university",
  "city": "La Jolla",
  "province": "California",
  "country": "USA",
  "campuses": [
    "La Jolla"
  ],
  "website": "https://www.ucsd.edu",
  "application_portal": "UC Application or program-specific portal (https://grad.ucsd.edu/admissions/)",
  "contacts": {
    "admissions": {
      "phone": "(858) 534-2230",
      "email": "finaid@ucsd.edu",
      "address": "9500 Gilman Drive, La Jolla, CA 92093-0006"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 96,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Link: https://fas.ucsd.edu/"
    },
    {
      "name": "Phone: (858) 534-4480"
    },
    {
      "name": "Email: finaid@ucsd.edu"
    },
    {
      "name": "Address: Student Services Center, 3rd Floor, 9500 Gilman Drive, La Jolla, CA 92093"
    },
    {
      "name": "Phone: (858) 534-2230"
    },
    {
      "name": "Link: https://ucsd.edu/"
    },
    {
      "name": "Address: 9500 Gilman Drive, La Jolla, CA 92093-0006"
    },
    {
      "name": "Academic Requirement: Complete 12 years of primary and secondary education (Class 12 equivalent); no specific percentage cutoff published; highly competitive (typical GPA 4.11 on 4.29 scale for admitted students; ~95th percentile expected)"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ OR IELTS 6.5+ OR Duolingo English Test 110+ OR PTE 58+ \u2014 REQUIRED for non-native English speakers (India NOT exempt)"
    },
    {
      "name": "Standardized Tests: SAT or ACT not officially required but highly competitive applicants typically submit (SAT 1320-1540; ACT 30-36 for admitted students)"
    },
    {
      "name": "Additional Requirements: Official transcripts from all secondary schools; any college-level coursework transcripts; essays/personal insight questions; official translation of all non-English documents"
    },
    {
      "name": "Academic Requirement: Bachelor\u2019s degree or equivalent (3-year or 4-year) from accredited institution; minimum B average (3.0 GPA equivalent; 80%+); 3.5+ (85-90%+) typical for competitive programs"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ OR IELTS 6.5+ OR PTE 58+ OR Duolingo 110+ \u2014 REQUIRED for non-native speakers"
    },
    {
      "name": "Additional Requirements: GRE (some programs require specific score thresholds; e.g., 90th percentile typical for CS/Engineering) or GMAT (varies by program); 2-3 letters of recommendation (from professors/supervisors); statement of purpose (500-1,000 words); resume/CV; program-specific materials (writing sample, portfolio, technical assessment); official academic transcripts with course-by-course evaluation for non-US degrees"
    },
    {
      "name": "Fall Intake (Primary): August enrollment"
    },
    {
      "name": "Application Opens: August 1 (yearly)"
    },
    {
      "name": "Deadline for International: December 1 (for Fall admission)"
    },
    {
      "name": "Decisions Posted: Mid-March"
    },
    {
      "name": "Fall Enrollment Deposit Deadline: May 1"
    },
    {
      "name": "Note: UC San Diego participates in UC Application system"
    },
    {
      "name": "Fall Intake (Primary): September 2026"
    },
    {
      "name": "Application Period: Varies by program (typically October-May)"
    },
    {
      "name": "Standard Deadline: December 15-January 15 (most programs)"
    },
    {
      "name": "Rolling Admissions: Applications reviewed continuously; early application recommended for international students requiring F-1 visa processing"
    },
    {
      "name": "Note: Some programs have earlier deadlines (September-November); others may extend to March-May"
    },
    {
      "name": "International Students NOT eligible for Federal Aid: F-1 and F-2 visa students are NOT eligible to apply for federal or state financial aid"
    },
    {
      "name": "Proof of Funds Required: International students must demonstrate sufficient financial capability to pay for entire educational and living expenses"
    },
    {
      "name": "Certification of Finances: Required from all admitted international students before enrollment"
    },
    {
      "name": "Limited Institutional Aid: Some department-specific scholarships and grants available (limited availability; merit-based)"
    },
    {
      "name": "J. Yang Scholarship Program (for students from Taiwan; limited)"
    },
    {
      "name": "Miguel Velez Scholarship (for Latin American/Caribbean students; not applicable to Indian students)"
    },
    {
      "name": "Other program-specific scholarships (competitive; varies by program)"
    },
    {
      "name": "International Students NOT eligible for federal/state aid: F-1/F-2 visa students ineligible"
    },
    {
      "name": "Proof of Funds Required: Demonstrate financial capability for all educational and living expenses"
    },
    {
      "name": "Limited Institutional Support: Some programs offer Teaching/Research Assistantships (tuition reduction + stipend; competitive)"
    },
    {
      "name": "Available in Engineering, Computer Science, Sciences (varies by program)"
    },
    {
      "name": "Not guaranteed; merit-based and availability-dependent"
    },
    {
      "name": "External Scholarship Eligibility: Eligible for non-US based scholarships (J.N. Tata Endowment, Indian government scholarships, Quad Fellowship for STEM, etc.)"
    }
  ],
  "internships": {
    "employment_rate_percent": 90
  },
  "campus_life": {
    "clubs": "Total Clubs: 750+ registered student organizations",
    "housing": "Housing: On-campus housing available (residence halls and apartments); not all students guaranteed housing"
  },
  "security": {
    "detail": "Residential Security: Safety coordinators in residential areas"
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

addPrograms(univ_universityofcaliforniasandiego, "UNIVERSITY OF CALIFORNIA, SAN DIEGO", [
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Cognitive Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Physics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mathematics or Applied Mathematics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Bioengineering or Biochemistry/Cell Biology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
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
    "name": "MS Data Science",
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
    "name": "MS Electrical & Computer Engineering",
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
    "name": "Master of Business Administration (Rady School)",
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
    "name": "MS Applied Mathematics or MS Bioinformatics",
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
    "name": "BS Computer Science",
    "faculty": "Department Name: Department of Computer Science & Engineering (CSE)",
    "duration_years": 4.0,
    "annual_fee_cad": 116648,
    "total_fee_cad": 466592,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra, discrete math)",
      "Physics",
      "Chemistry",
      "English"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Backend Engineer",
      "Frontend Engineer",
      "Cybersecurity Engineer",
      "Systems Engineer",
      "Product Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Cognitive Science",
    "faculty": "Department Name: Department of Cognitive Science",
    "duration_years": 4.0,
    "annual_fee_cad": 116648,
    "total_fee_cad": 466592,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "English",
      "science/psychology interest"
    ],
    "entry_roles": [
      "UX Researcher",
      "Data Scientist",
      "Product Manager",
      "AI/ML Engineer",
      "Research Scientist",
      "Consulting Analyst",
      "Human-Computer Interaction Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Physics",
    "faculty": "Department Name: Department of Physics",
    "duration_years": 4.0,
    "annual_fee_cad": 116648,
    "total_fee_cad": 466592,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics",
      "Chemistry"
    ],
    "entry_roles": [
      "Physicist",
      "Research Scientist",
      "Data Scientist",
      "Systems Engineer",
      "Quantum Engineer",
      "Academic Researcher",
      "Lab Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mathematics or Applied Mathematics",
    "faculty": "Department Name: Department of Mathematics",
    "duration_years": 4.0,
    "annual_fee_cad": 116648,
    "total_fee_cad": 466592,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra, advanced math)",
      "Physics",
      "English"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Data Scientist",
      "Financial Analyst",
      "Software Engineer",
      "Operations Research Analyst",
      "Actuarial Analyst",
      "Research Mathematician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Bioengineering or Biochemistry/Cell Biology",
    "faculty": "Department Name: Department of Bioengineering or Department of Chemistry & Biochemistry",
    "duration_years": 4.0,
    "annual_fee_cad": 116648,
    "total_fee_cad": 466592,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (calculus)",
      "Physics",
      "English"
    ],
    "entry_roles": [
      "Biomedical Engineer",
      "Biochemist",
      "Research Scientist",
      "Pharmaceutical Scientist",
      "Biotech Engineer",
      "Clinical Research Coordinator",
      "Lab Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "Department Name: Department of Computer Science & Engineering (CSE)",
    "duration_years": 2.0,
    "annual_fee_cad": 114164,
    "total_fee_cad": 228328,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "discrete math",
      "systems programming",
      "databases",
      "computer architecture helpful"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Backend Engineer",
      "Systems Engineer",
      "Cybersecurity Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Data Science",
    "faculty": "Department Name: Halicioglu Data Science Institute",
    "duration_years": 2.0,
    "annual_fee_cad": 114164,
    "total_fee_cad": 228328,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "linear algebra",
      "multivariable calculus",
      "probability",
      "programming (Python, R) valued",
      "machine learning background helpful"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Consultant",
      "Business Intelligence Analyst",
      "Risk Analyst",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Electrical & Computer Engineering",
    "faculty": "Department Name: Department of Electrical & Computer Engineering (ECE)",
    "duration_years": 2.0,
    "annual_fee_cad": 114164,
    "total_fee_cad": 228328,
    "min_class12_percent": 70,
    "required_subjects": [
      "Electromagnetics",
      "circuit theory",
      "signal processing",
      "digital systems",
      "communications or microelectronics helpful"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Hardware Engineer",
      "Systems Engineer",
      "Signal Processing Engineer",
      "VLSI Engineer",
      "Communications Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Rady School of Management)",
    "faculty": "School Name: Rady School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 99359,
    "total_fee_cad": 198718,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "diverse backgrounds welcomed"
    ],
    "entry_roles": [
      "Management Consultant",
      "Product Manager",
      "Operations Manager",
      "Business Analyst",
      "Strategy Manager",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Applied Mathematics or MS Bioinformatics",
    "faculty": "Department Names: Department of Mathematics (Applied Math) or School of Biological Sciences (Bioinformatics)",
    "duration_years": 2.0,
    "annual_fee_cad": 114164,
    "total_fee_cad": 228328,
    "min_class12_percent": 70,
    "required_subjects": [
      "Linear algebra",
      "multivariable calculus",
      "differential equations",
      "statistics",
      "probability",
      "programming (MATLAB, Python, R)",
      "biology background for Bioinformatics"
    ],
    "entry_roles": [
      "Data Scientist",
      "Quantitative Analyst",
      "Bioinformatician",
      "Systems Biologist",
      "Research Scientist",
      "Analytics Consultant"
    ],
    "features": []
  }
]);

// --- Carnegie Mellon University ---
const univ_carnegiemellonuniversity = db.institutions.insertOne(inst({
  "name": "Carnegie Mellon University",
  "abbreviation": "",
  "type": "university",
  "city": "Pittsburgh",
  "province": "Pennsylvania",
  "country": "USA",
  "campuses": [
    "Pittsburgh"
  ],
  "website": "www.cmu.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(412) 268-5231",
      "address": "5000 Forbes Avenue, Pittsburgh, PA 15213, USA",
      "email": "oie@andrew.cmu.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Undergraduate: Carnegie Mellon does NOT offer need-based or merit-based scholarships to international undergraduate students"
    },
    {
      "name": "Financial consideration: While financial aid is not provided, financial need is considered in admission decisions for international applicants"
    },
    {
      "name": "Graduate programs: Limited merit-based scholarships and fellowships available; CSS Profile required for consideration"
    },
    {
      "name": "School of Drama & Music: Limited institutional merit scholarships available (department discretion)"
    },
    {
      "name": "CMU-Qatar: Merit-based scholarships and need-based grants available for all nationalities; Qatari citizens have access to government scholarships"
    },
    {
      "name": "On-campus employment: Graduate students can work as Teaching Assistants (TA) or Research Assistants (RA), which provides paid positions (merit-based historically, being phased out for new students)"
    },
    {
      "name": "External funding: Students may apply for external scholarships, loans, and financial aid from federal/state governments or private organizations"
    }
  ],
  "internships": {
    "part_time_work": "Co-op Program: Established cooperative education program where students alternate between academic terms and full-time work",
    "coop_available": true,
    "employment_rate_percent": 91
  },
  "campus_life": {
    "clubs": "Music and dance clubs",
    "housing": "142 cameras across 31 housing buildings"
  },
  "security": {
    "detail": "Non-Emergency: (412) 268-6232"
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

addPrograms(univ_carnegiemellonuniversity, "Carnegie Mellon University", [
  {
    "level": "UG",
    "name": "Computer Science (B.S.) \u2013 4 years; School of Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Artificial Intelligence (B.S.) \u2013 4 years; School of Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical and Computer Engineering (B.S.) \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (B.S.) \u2013 4 years; College of Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Human-Computer Interaction (B.S.) \u2013 4 years; School of Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.S. in Computer Science \u2013 18 months; School of Computer Science",
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
    "name": "Master of Business Administration (MBA) \u2013 2 years; Tepper School of Business (approx. $64,112)",
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
    "name": "M.S. in Data Science / Computational Data Science \u2013 2 years; School of Computer Science (approx. $54,338)",
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
    "name": "M.S. in Business Analytics \u2013 9 months; Tepper School of Business",
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
    "name": "M.S. in Robotics \u2013 5 years; School of Computer Science",
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
    "name": "Computer Science (B.S.)",
    "faculty": "School of Computer Science, Bowers College of Computing and Information Science",
    "duration_years": 4,
    "annual_fee_cad": 92487,
    "total_fee_cad": 369948,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Calculus, Linear Algebra recommended)",
      "Physics",
      "Chemistry preferred",
      "prior Computer Science coursework beneficial but not required",
      "AP/IB STEM courses valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Full-stack Developer",
      "Data Scientist",
      "Product Manager",
      "Research Engineer",
      "Systems Engineer",
      "Algorithm Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Artificial Intelligence (B.S.)",
    "faculty": "School of Computer Science, Bowers College of Computing and Information Science (AI Program)",
    "duration_years": 4,
    "annual_fee_cad": 92487,
    "total_fee_cad": 369948,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics (Matrices, Linear Transformations, Calculus in Three Dimensions, Probability Theory)",
      "Computer Science fundamentals",
      "programming experience valuable",
      "physics",
      "chemistry preferred"
    ],
    "entry_roles": [
      "Machine Learning Engineer",
      "AI Research Engineer",
      "Data Scientist",
      "AI Product Manager",
      "Deep Learning Engineer",
      "Natural Language Processing (NLP) Engineer",
      "Computer Vision Engineer",
      "AI Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical and Computer Engineering (B.S.)",
    "faculty": "Department of Electrical and Computer Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 92487,
    "total_fee_cad": 369948,
    "min_class12_percent": 70,
    "required_subjects": [
      "Advanced mathematics (Calculus, Linear Algebra)",
      "Physics (especially electromagnetism, mechanics)",
      "Chemistry preferred",
      "prior electronics coursework beneficial",
      "AP Physics",
      "AP Computer Science recommended"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Hardware Engineer",
      "Systems Engineer",
      "Embedded Systems Engineer",
      "FPGA Design Engineer",
      "Power Systems Engineer",
      "Circuit Designer",
      "Networks Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering (B.S.)",
    "faculty": "Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 92487,
    "total_fee_cad": 369948,
    "min_class12_percent": 70,
    "required_subjects": [
      "Advanced mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (mechanics, thermodynamics)",
      "Chemistry",
      "Mechanics",
      "engineering design coursework valued",
      "AP STEM courses beneficial"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Robotics Engineer",
      "Thermal/HVAC Engineer",
      "Materials Engineer",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Human-Computer Interaction (B.S.)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 92487,
    "total_fee_cad": 369948,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Calculus, Linear Algebra)",
      "Computer Science fundamentals",
      "Design thinking",
      "creativity valued",
      "Psychology",
      "behavioral sciences beneficial",
      "prior programming",
      "design projects valued"
    ],
    "entry_roles": [
      "UX/UI Designer",
      "Product Manager",
      "Interaction Designer",
      "Design Researcher",
      "User Experience Engineer",
      "Product Designer",
      "Research Scientist",
      "Usability Analyst",
      "Design Strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.S. in Computer Science",
    "faculty": "School of Computer Science, Bowers College of Computing and Information Science",
    "duration_years": 2,
    "annual_fee_cad": 83352,
    "total_fee_cad": 166704,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong background in computer science",
      "mathematics",
      "discrete structures",
      "data structures",
      "algorithms",
      "systems",
      "theoretical concepts preferred"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Research Engineer",
      "Systems Engineer",
      "Full-stack Developer",
      "Security Engineer",
      "Cloud Architect",
      "Algorithm Developer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 112249,
    "total_fee_cad": 224498,
    "min_class12_percent": 70,
    "required_subjects": [
      "All disciplines accepted",
      "holistic review of academic preparation",
      "professional achievements"
    ],
    "entry_roles": [
      "Management Consultant",
      "Financial Analyst",
      "Product Manager",
      "Investment Banker",
      "Corporate Finance Specialist",
      "Operations Manager",
      "Strategy Consultant",
      "Data Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.S. in Data Science / Computational Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 77004,
    "total_fee_cad": 154008,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation preferred (mathematics, computer science, engineering, economics, statistics, physics)",
      "coursework in calculus",
      "linear algebra",
      "probability/statistics",
      "programming beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Data Analyst",
      "Quantitative Analyst",
      "Business Analyst",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.S. in Business Analytics",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative background preferred (mathematics, computer science, engineering, economics, statistics)",
      "prior work experience in analytics",
      "business",
      "or tech sectors valued"
    ],
    "entry_roles": [
      "Data Analyst",
      "Business Analyst",
      "Machine Learning Engineer",
      "Analytics Manager",
      "Product Manager",
      "Data Architect",
      "Statistician",
      "Chief Technology Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.S. in Robotics",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 83352,
    "total_fee_cad": 166704,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mechanical engineering",
      "electrical engineering",
      "computer science",
      "mathematics",
      "or physics",
      "control systems",
      "robotics",
      "programming experience valued"
    ],
    "entry_roles": [
      "Roboticist",
      "Robotics Engineer",
      "Systems Engineer",
      "Software Engineer for Robotics",
      "Research Scientist",
      "Autonomous Systems Engineer",
      "Controls Engineer",
      "Perception Engineer",
      "Machine Learning Engineer for Robotics"
    ],
    "features": []
  }
]);

// --- University of Texas at Dallas ---
const univ_universityoftexasatdallas = db.institutions.insertOne(inst({
  "name": "University of Texas at Dallas",
  "abbreviation": "",
  "type": "university",
  "city": "Richardson",
  "province": "Texas",
  "country": "USA",
  "campuses": [
    "Richardson"
  ],
  "website": "www.utdallas.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(972) 883-4189 (ISSO); (972) 883-4715 (OIE)",
      "email": "ISSOProspective@utdallas.edu (International Students); ISSOJ1@utdallas.edu (J-1 Visas)",
      "address": "International Center, 800 W. Campbell Rd., SSB34, Richardson, TX 75080-3021"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Academic Excellence Scholarship (AES): Merit-based for high-achieving students"
    },
    {
      "name": "Award: Up to full tuition + stipend"
    },
    {
      "name": "Competitive; automatic consideration upon admission"
    },
    {
      "name": "Comet Scholars Program: For students with academic excellence and financial need"
    },
    {
      "name": "Award: Up to full tuition coverage for education-related expenses (tuition, fees, housing)"
    },
    {
      "name": "Eugene McDermott Scholars Program: Merit-based for exceptional students"
    },
    {
      "name": "National Merit Scholars Program: For National Merit finalists"
    },
    {
      "name": "Phi Theta Kappa Scholarship: For transfer students from Phi Theta Kappa honor society; automatic consideration$1,000"
    },
    {
      "name": "Comet Transfer Scholarship: For Texas resident transfer students with 30\u201390 credits; automatic consideration$500\u2013$5,000"
    },
    {
      "name": "International Education Fund Scholarship: $500\u2013$5,000 for study abroad (requires prior enrollment)"
    },
    {
      "name": "Eligibility: Competitive applicants; high GPA; automatic review upon admission for some awards"
    },
    {
      "name": "Need-based aid: NOT available for international students"
    },
    {
      "name": "Award: Varies by program; often tuition waiver + stipend"
    },
    {
      "name": "Teaching Assistantships (TA) & Research Assistantships (RA):"
    },
    {
      "name": "Award: Tuition waiver (in-state equivalent; 50% of total tuition) + monthly salary"
    },
    {
      "name": "Available for deserving graduate students"
    },
    {
      "name": "Eligibility: High academic achievement; automatic nomination by admission committee for exceptional students"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during Fall/Spring semesters; full-time during breaks"
    },
    {
      "name": "CPT (Curricular Practical Training): Off-campus internships authorized by university"
    },
    {
      "name": "Eligibility: Completion of 2 consecutive long semesters in U.S.; enrollment in internship course required"
    },
    {
      "name": "Duration: Maximum 3 semesters total; one semester at a time"
    },
    {
      "name": "Employer sponsorship not required"
    },
    {
      "name": "OPT (Optional Practical Training): Post-graduation work authorization"
    },
    {
      "name": "12 months standard authorization per education level"
    },
    {
      "name": "24-month STEM OPT Extension for STEM-eligible degrees"
    }
  ],
  "internships": {},
  "campus_life": {
    "housing": "On-campus residential housing (1\u20134 bedroom options; pools, volleyball courts, grills, study centers)",
    "clubs": "Student clubs, activities, facilities (brief):"
  },
  "security": {
    "detail": "Police Non-Emergency: Contact Police Department"
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

addPrograms(univ_universityoftexasatdallas, "University of Texas at Dallas", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; Erik Jonsson School of Engineering & Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; Jonsson School",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; Jonsson School",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; Jonsson School",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science \u2013 4 years; Jonsson School (joint program)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science \u2013 18 months (18 credits/semester)",
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
    "name": "Master of Science in Business Analytics and Artificial Intelligence (MSBA) \u2013 24 months (Flex) / 18 months (Cohort)",
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
    "name": "Master of Science in Data Science and Statistics \u2013 18\u201324 months; School of Natural Sciences",
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
    "name": "Master of Business Administration (Full-Time MBA) \u2013 18 months",
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
    "name": "Master of Science in Finance \u2013 12 months; Naveen Jindal School",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science, Erik Jonsson School of Engineering & Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 82864,
    "total_fee_cad": 331456,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Algebra, Trigonometry, Pre-calculus preferred)",
      "Physics",
      "Computer Science or programming background valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "Department of Electrical and Computer Engineering, Erik Jonsson School of Engineering & Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 2851,
    "total_fee_cad": 11404,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Algebra, Trigonometry, Pre-calculus)",
      "Physics (essential)",
      "Digital Systems fundamentals valued"
    ],
    "entry_roles": [
      "Computer Engineer",
      "Hardware Design Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "Firmware Engineer",
      "VLSI Design Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical and Computer Engineering, Erik Jonsson School of Engineering & Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 2851,
    "total_fee_cad": 11404,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Trigonometry, Algebra minimum; Pre-calculus preferred)",
      "Physics (essential)",
      "Electromagnetism fundamentals valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "RF Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering, Erik Jonsson School of Engineering & Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 2851,
    "total_fee_cad": 11404,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Algebra, Trigonometry, Pre-calculus preferred)",
      "Physics (essential; Mechanics and Thermodynamics valued)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Aerospace Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science",
    "faculty": "Department of Computer Science / School of Natural Sciences and Mathematics, Erik Jonsson School of Engineering & Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 2851,
    "total_fee_cad": 11404,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Statistics essential)",
      "Computer Science fundamentals",
      "Programming (Python, R preferred)",
      "Data Manipulation valued"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Department of Computer Science, Erik Jonsson School of Engineering & Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 48333,
    "total_fee_cad": 96666,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong Computer Science fundamentals",
      "Data Structures",
      "Algorithms",
      "Systems concepts required",
      "optional: GRE scores (revised 308+ combined preferred; 153+ verbal, 155+ quantitative)"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Systems Engineer",
      "Research Engineer",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics and Artificial Intelligence (MSBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 46376,
    "total_fee_cad": 92752,
    "min_class12_percent": 55,
    "required_subjects": [
      "Quantitative foundation",
      "Mathematics (Calculus, Statistics, Linear Algebra)",
      "Economics",
      "Business fundamentals",
      "programming (Python, R, SQL) beneficial"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Analyst",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Analytics Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science and Statistics",
    "faculty": "School of Natural Sciences and Mathematics, Department of Mathematics",
    "duration_years": 2,
    "annual_fee_cad": 40776,
    "total_fee_cad": 81552,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics essential)",
      "Computer Science or programming",
      "any undergraduate major acceptable with demonstrated math skills"
    ],
    "entry_roles": [
      "Data Scientist",
      "Statistician",
      "Data Analyst",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 61288,
    "total_fee_cad": 122576,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "business",
      "quantitative background beneficial but not required"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Product Manager",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 53279,
    "total_fee_cad": 106558,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Statistics)",
      "Economics",
      "Accounting",
      "Finance fundamentals",
      "programming (Python, R) beneficial"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Analyst",
      "Risk Analyst",
      "Portfolio Manager",
      "Financial Engineer",
      "Quantitative Analyst"
    ],
    "features": []
  }
]);

// --- SAN JOSE STATE UNIVERSITY ---
const univ_sanjosestateuniversity = db.institutions.insertOne(inst({
  "name": "SAN JOSE STATE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "San Jose",
  "province": "California",
  "country": "USA",
  "campuses": [
    "San Jose"
  ],
  "website": "https://www.sjsu.edu",
  "application_portal": "www.calstate.edu/apply",
  "contacts": {
    "admissions": {
      "phone": "408-924-5920",
      "email": "international-office@sjsu.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 96,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes (merit-based only)"
    },
    {
      "name": "Global Spartan Scholarship: Available to F-1 international students with 3.5+ GPA; March-April application"
    },
    {
      "name": "Louie Barozzi Scholarship: For students involved in study abroad/international initiatives"
    },
    {
      "name": "Departmental scholarships: Available through specific colleges"
    },
    {
      "name": "Need-based scholarships: Not available to international students"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Student clubs, activities, facilities: 450+ student organizations; Student Union with dining options (Jamba Juice, Taco Bell, Panda Express); Bowling Center; Event Center for concerts; Hammer Theatre; 13 intramural sports; 27 sports clubs; fraternities and sororities; cultural centers (Black Leadership Center, Cesar Chavez Community Action Center, Chicanx/Latinx Success Center)"
  },
  "security": {
    "detail": "Partnerships & coordination: Emergency Operations Center (EOC); AlertSJSU emergency notification system; coordination with City of San Jose and Santa Clara County; Community Service Officers (CSOs) in residence halls; increased lighting and foot patrols"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science",
    "Master of Science in Data Science",
    "Master of Science in Software Engineering",
    "MBA (Early Career & Professionals)",
    "Master of Science in Electrical Engineering"
  ]
})).insertedId;

addPrograms(univ_sanjosestateuniversity, "SAN JOSE STATE UNIVERSITY", [
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science, College of Science",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "4 years English",
      "3 years Mathematics minimum"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Analyst",
      "Web Developer",
      "Data Analyst",
      "IT Support Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration (General Business Concentration)",
    "faculty": "Department name: Lucas College and Graduate School of Business / Department of Marketing and Business Analytics",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "4 years English",
      "3 years Mathematics"
    ],
    "entry_roles": [
      "Business Analyst",
      "Financial Analyst",
      "Management Consultant",
      "Marketing Coordinator",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department name: Charles W. Davidson College of Engineering, Mechanical Engineering Department",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "4 years Mathematics"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "CAD Technician",
      "Test Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Data Science",
    "faculty": "Department name: Department of Computer Science & Department of Mathematics and Statistics (Joint Program)",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "4 years Mathematics",
      "strong foundation in statistics",
      "programming"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Analytics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department name: Charles W. Davidson College of Engineering, Electrical Engineering Department",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "4 years Mathematics"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Circuit Design Engineer",
      "Power Systems Engineer",
      "Hardware Engineer",
      "RF Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science, College of Science",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer Science fundamentals required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Senior Software Developer",
      "Systems Architect",
      "Machine Learning Engineer",
      "AI Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Data Science",
    "faculty": "Department name: Department of Computer Science & Department of Mathematics and Statistics (Joint Program)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong math",
      "statistics",
      "programming foundation"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Analytics Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Software Engineering",
    "faculty": "Department name: Lucas College and Graduate School of Business",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline acceptable"
    ],
    "entry_roles": [
      "Product Manager",
      "Business Analyst",
      "Management Consultant",
      "Finance Manager",
      "Startup Founder"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical Engineering",
    "faculty": "Department name: Electrical Engineering Department, Charles W. Davidson College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuit theory",
      "electromagnetics",
      "signals",
      "systems fundamentals"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Circuit Design Engineer",
      "Power Systems Engineer",
      "VLSI Design Engineer",
      "Communications Engineer"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF COLORADO BOULDER ---
const univ_universityofcoloradoboulder = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF COLORADO BOULDER",
  "abbreviation": "",
  "type": "university",
  "city": "Boulder",
  "province": "Colorado",
  "country": "USA",
  "campuses": [
    "Boulder"
  ],
  "website": "https://www.colorado.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "iss@colorado.edu",
      "phone": "303-735-1703"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Buff One Fund: Need-based scholarships for international students"
    },
    {
      "name": "Graduate Assistantships: Research and teaching assistantships available across departments"
    },
    {
      "name": "Limited need-based aid available for international students"
    }
  ],
  "internships": {
    "part_time_work": "Engineering internships and co-op programs available (can take semester off for work experience)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities:"
  },
  "security": {
    "detail": "Campus Safety and Emergency Preparedness programs"
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

addPrograms(univ_universityofcoloradoboulder, "UNIVERSITY OF COLORADO BOULDER", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aerospace Engineering Sciences",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
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
    "name": "Master of Science in Data Science",
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
    "name": "Master of Business Administration (Full-Time)",
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
    "name": "Master of Science in Mechanical Engineering",
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
    "name": "Master of Science in Aerospace Engineering Sciences",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science, College of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 67763,
    "total_fee_cad": 271052,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (4 years)",
      "Physics",
      "Chemistry (3 years recommended)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "full-stack developer",
      "AI/ML engineer",
      "embedded systems engineer",
      "cybersecurity specialist",
      "data scientist",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Aerospace Engineering Sciences",
    "faculty": "Department of Aerospace Engineering Sciences, College of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 67255,
    "total_fee_cad": 269020,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "propulsion engineer",
      "structures engineer",
      "controls engineer",
      "aircraft design engineer",
      "space systems engineer",
      "flight test engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Paul M. Rady Department of Mechanical Engineering, College of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 66761,
    "total_fee_cad": 267044,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "energy systems engineer",
      "thermal engineer",
      "design engineer",
      "HVAC engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical, Computer and Energy Engineering, College of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 66761,
    "total_fee_cad": 267044,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "signal processing engineer",
      "telecommunications engineer",
      "circuit design engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 68406,
    "total_fee_cad": 273624,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "marketing specialist",
      "operations manager",
      "supply chain coordinator",
      "product manager",
      "investment analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department of Computer Science, College of Engineering & Applied Science",
    "duration_years": 2,
    "annual_fee_cad": 59395,
    "total_fee_cad": 118790,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "electrical engineering",
      "mathematics",
      "or related field required"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "cloud architect",
      "cybersecurity engineer",
      "data engineer",
      "research engineer",
      "solutions architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Data Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 45079,
    "total_fee_cad": 90158,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "mathematics (calculus, linear algebra)",
      "programming experience beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data analyst",
      "business intelligence developer",
      "analytics engineer",
      "AI specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 74259,
    "total_fee_cad": 148518,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline (no specific major required)"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "product manager",
      "business development executive",
      "entrepreneur",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Mechanical Engineering",
    "faculty": "Paul M. Rady Department of Mechanical Engineering, College of Engineering & Applied Science",
    "duration_years": 2,
    "annual_fee_cad": 34963,
    "total_fee_cad": 69926,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanical engineering",
      "civil engineering",
      "or related field preferred",
      "foundational understanding of mechanics",
      "thermodynamics required"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "energy systems engineer",
      "thermal engineer",
      "design engineer",
      "robotics engineer",
      "structural engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Aerospace Engineering Sciences",
    "faculty": "Department of Aerospace Engineering Sciences, College of Engineering & Applied Science",
    "duration_years": 2,
    "annual_fee_cad": 34963,
    "total_fee_cad": 69926,
    "min_class12_percent": 70,
    "required_subjects": [
      "Aerospace engineering",
      "mechanical engineering",
      "or related field",
      "foundational aerodynamics",
      "propulsion knowledge required"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "propulsion engineer",
      "structures engineer",
      "avionics engineer",
      "flight controls engineer",
      "spacecraft systems engineer",
      "aerodynamics specialist"
    ],
    "features": []
  }
]);

// --- Massachusetts Institute of Technology ---
const univ_massachusettsinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "Massachusetts Institute of Technology",
  "abbreviation": "",
  "type": "university",
  "city": "Cambridge",
  "province": "Massachusetts",
  "country": "USA",
  "campuses": [
    "Cambridge"
  ],
  "website": "https://oge.mit.edu/graduate-admissions/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "address": "77 Massachusetts Avenue, Cambridge, MA 02139, USA",
      "phone": "+1-617-253-3795 (Mon-Fri, 9 AM - 5 PM EST)",
      "email": "gradadmissions@mit.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Varies by department (typically Dec-Jan)"
    },
    {
      "name": "MIT practices need-blind admissions for international students"
    },
    {
      "name": "Meets 100% of demonstrated financial need for all admitted international undergraduates"
    },
    {
      "name": "All scholarships are need-based (no merit scholarships)"
    },
    {
      "name": "87.7% of Class of 2025 graduated debt-free"
    },
    {
      "name": "$0 parental contribution for families earning <$100K"
    },
    {
      "name": "Full tuition covered for families earning <$200K with typical assets"
    },
    {
      "name": "MIT Scholarship (need-based, full cost coverage up to demonstrated need)"
    },
    {
      "name": "Inlaks Shivdasani Foundation"
    },
    {
      "name": "JN Tata Endowment"
    },
    {
      "name": "KC Mahindra Education Trust"
    },
    {
      "name": "Fulbright-Nehru Fellowship"
    },
    {
      "name": "Narotam Sekhsaria Foundation"
    },
    {
      "name": "Reliance Foundation"
    },
    {
      "name": "AAUW International Fellowships"
    },
    {
      "name": "https://mitadmissions.org/afford/"
    },
    {
      "name": "https://sfs.mit.edu/undergraduate-students/apply-for-aid/international/"
    }
  ],
  "internships": {},
  "campus_life": {
    "housing": "MISTI (MIT International Science & Technology Initiatives): Fully-funded international internships in 40+ countries (housing, flights, stipend covered)",
    "clubs": "https://mitadmissions.org/discover/life-culture/clubs-activities/"
  },
  "security": {
    "detail": "https://police.mit.edu/annual-security-report"
  },
  "top_ug_programs": [
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support",
    "Internships & Jobs"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_massachusettsinstituteoftechnology, "Massachusetts Institute of Technology", [
  {
    "level": "PG",
    "name": "6% of offers were school-facilitated through internships/job fairs/alumni",
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
    "name": "4% of graduates started their own businesses",
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
    "name": "7% returned to pre-MBA sponsoring employers",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Typical Job Roles After Graduation"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "1% employed within 3 months (Class of 2024)",
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
    "name": "8% employed within extended search period",
    "faculty": "",
    "duration_years": 2.0,
    "annual_fee_cad": 94280,
    "total_fee_cad": 188560,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "5-year program tuition only: ~$97,074-$102,479",
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
    "name": "5-year total (with living costs): ~$126,423-$145,642",
    "faculty": "Defense/Government: US Department of Defense, federal agencies",
    "duration_years": 2,
    "annual_fee_cad": 178461,
    "total_fee_cad": 356922,
    "min_class12_percent": 70,
    "required_subjects": [
      "Relevant Academic Background/Prerequisites"
    ],
    "entry_roles": [
      "Typical Job Roles After Graduation"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF FLORIDA ---
const univ_universityofflorida = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF FLORIDA",
  "abbreviation": "",
  "type": "university",
  "city": "Gainesville",
  "province": "Florida",
  "country": "USA",
  "campuses": [
    "Gainesville"
  ],
  "website": "https://www.ufl.edu",
  "application_portal": "Common App or UF Application Portal (choose one; not both)",
  "contacts": {
    "admissions": {
      "phone": "352-392-2665 (Graduate Coordinator: Dr. Tan F. Wong)",
      "email": "twong@ece.ufl.edu",
      "address": "E301 CSE Building, P.O. Box 116120, Gainesville, FL 32611-6120"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 41,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Gator Nation Scholarship: Up to $20,000 per year (out-of-state tuition waiver; total up to $80,000 over 4 years)"
    },
    {
      "name": "Sunshine Scholarship: Up to $16,000 per year (out-of-state tuition waiver; total up to $64,000 over 4 years)"
    },
    {
      "name": "Alumni Scholarship: Up to $8,000 per year (out-of-state tuition waiver; total up to $32,000 over 4 years)"
    },
    {
      "name": "Graduate Assistantships: Available with tuition remission and stipend (competitive; varies $57,868-$66,589 annually)"
    },
    {
      "name": "Application Tip: Apply by Regular Decision deadline (January 15) to maximize scholarship consideration"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Activities: Academic clubs, professional societies, cultural organizations, intramural sports, club sports, performing arts groups, volunteering opportunities, design teams",
    "housing": "Housing: On-campus and off-campus housing available; first-year students encouraged to live on campus"
  },
  "security": {
    "detail": "Safety Coordination: Regular community safety briefings; emergency protocols in place"
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

addPrograms(univ_universityofflorida, "UNIVERSITY OF FLORIDA", [
  {
    "level": "UG",
    "name": "Bachelor of Science - Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Engineering (Electrical, Computer, Mechanical, Civil specializations)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Finance",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration / Business Management",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Accounting",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Computer Science",
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
    "name": "Master of Science - Electrical and Computer Engineering",
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
    "name": "Master of Science - Engineering Management",
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
    "name": "Master of Science - Information Systems",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer & Information Science & Engineering (CISE) / College of Liberal Arts and Sciences and Herbert Wertheim College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 49434,
    "total_fee_cad": 197736,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry strongly recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Software Developer",
      "Systems Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Security Engineer",
      "Network Engineer",
      "Web Developer",
      "Cloud Architect",
      "Quality Assurance Engineer",
      "Database Administrator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Engineering (Electrical, Computer, Mechanical, Civil)",
    "faculty": "Address: Multiple engineering buildings; main contact through College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 49434,
    "total_fee_cad": 197736,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Calculus)",
      "Physics",
      "Chemistry required"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Electrical Engineer",
      "Software Engineer",
      "Civil Engineer",
      "Chemical Engineer",
      "Systems Engineer",
      "Project Engineer",
      "Design Engineer",
      "Process Engineer",
      "Manufacturing Engineer",
      "Environmental Engineer",
      "Power Systems Engineer",
      "Controls Engineer",
      "Semiconductor Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Finance",
    "faculty": "Address: Warrington College of Business building, Gainesville campus",
    "duration_years": 4,
    "annual_fee_cad": 49434,
    "total_fee_cad": 197736,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Economics preferred"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Equity Research Analyst",
      "Corporate Finance Manager",
      "Risk Manager",
      "Financial Advisor",
      "Trader",
      "Lending Officer",
      "Treasury Analyst",
      "Financial Consultant",
      "Wealth Manager",
      "Securities Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration (Management/Accounting)",
    "faculty": "Address: Warrington College of Business building, Gainesville campus",
    "duration_years": 4,
    "annual_fee_cad": 49434,
    "total_fee_cad": 197736,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific prerequisites",
      "general business foundation helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Operations Manager",
      "Project Manager",
      "Account Executive",
      "Business Development Manager",
      "Management Analyst",
      "Corporate Trainer",
      "Financial Manager",
      "Human Resources Manager",
      "Marketing Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Information Technology / Accounting",
    "faculty": "Department name: Warrington College of Business (Accounting) / College of Engineering (IT programs); Department of Computer & Information Science & Engineering",
    "duration_years": 4,
    "annual_fee_cad": 49434,
    "total_fee_cad": 197736,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics preferred",
      "analytical skills valued"
    ],
    "entry_roles": [
      "IT Track: IT Manager",
      "Systems Administrator",
      "Network Administrator",
      "IT Consultant",
      "Business Analyst",
      "Systems Analyst",
      "IT Project Manager",
      "Database Administrator",
      "Solutions Architect",
      "IT Support Specialist. Accounting Track: Accountant",
      "CPA",
      "Auditor",
      "Tax Specialist",
      "Financial Controller",
      "Forensic Accountant",
      "Government Accountant",
      "Staff Accountant",
      "Internal Auditor",
      "Accounting Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: Department of Computer & Information Science & Engineering (CISE)",
    "duration_years": 2,
    "annual_fee_cad": 43983,
    "total_fee_cad": 87966,
    "min_class12_percent": 70,
    "required_subjects": [
      "Calculus",
      "Discrete Mathematics",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Introduction to Computer Organization required as prerequisites or concurrent coursework"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Cybersecurity Analyst",
      "Cloud Solutions Architect",
      "AI/ML Specialist",
      "Research Scientist",
      "Firmware Engineer",
      "Database Engineer",
      "DevOps Engineer",
      "Full-Stack Developer",
      "Security Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical and Computer Engineering",
    "faculty": "Department name: Department of Electrical and Computer Engineering (ECE)",
    "duration_years": 2,
    "annual_fee_cad": 43983,
    "total_fee_cad": 87966,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "signal processing",
      "control systems",
      "digital design required",
      "prerequisite coursework may be required for some students"
    ],
    "entry_roles": [
      "Hardware Engineer",
      "Software Engineer",
      "Power Systems Engineer",
      "Semiconductor Engineer",
      "Network Engineer",
      "Telecommunications Engineer",
      "Controls Engineer",
      "Embedded Systems Designer",
      "VLSI Engineer",
      "Signal Processing Engineer",
      "RF Engineer",
      "Microwave Engineer",
      "Power Electronics Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (MBA)",
    "faculty": "Address: Warrington College of Business building, Gainesville campus",
    "duration_years": 2,
    "annual_fee_cad": 4140,
    "total_fee_cad": 8280,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business fundamentals helpful",
      "candidates from engineering",
      "sciences",
      "liberal arts all accepted"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance Manager",
      "Product Manager",
      "Marketing Manager",
      "Operations Manager",
      "Strategic Planner",
      "Investment Banker",
      "Business Analyst",
      "Program Manager",
      "Corporate Development Manager",
      "Chief Financial Officer",
      "Management Analyst",
      "Executive roles across industries"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Engineering Management",
    "faculty": "Address: College of Engineering building, Gainesville campus",
    "duration_years": 2,
    "annual_fee_cad": 43983,
    "total_fee_cad": 87966,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering background required",
      "technical foundation in mathematics",
      "physics",
      "or engineering disciplines"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Product Manager",
      "Operations Manager",
      "Quality Manager",
      "Technical Director",
      "Engineering Consultant",
      "Manufacturing Manager",
      "Program Manager",
      "Systems Manager",
      "Construction Manager",
      "Facility Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Systems",
    "faculty": "Address: E301 CSE Building / College of Engineering, Gainesville campus",
    "duration_years": 2,
    "annual_fee_cad": 43983,
    "total_fee_cad": 87966,
    "min_class12_percent": 70,
    "required_subjects": [
      "Basic understanding of business processes helpful",
      "quantitative skills",
      "logical thinking preferred",
      "programming experience beneficial but not required"
    ],
    "entry_roles": [
      "Business Analyst",
      "IT Manager",
      "Systems Analyst",
      "Database Administrator",
      "Data Analyst",
      "IT Consultant",
      "Solutions Architect",
      "IT Project Manager",
      "Systems Administrator",
      "Network Manager",
      "Business Intelligence Analyst",
      "IT Strategy Manager",
      "Chief Information Officer (CIO track)"
    ],
    "features": []
  }
]);

// --- Cornell University ---
const univ_cornelluniversity = db.institutions.insertOne(inst({
  "name": "Cornell University",
  "abbreviation": "",
  "type": "university",
  "city": "Ithaca",
  "province": "New York",
  "country": "USA",
  "campuses": [
    "Ithaca"
  ],
  "website": "https://www.cornell.edu/academics/",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "cu_police@cornell.edu",
      "phone": "(607) 255-1111",
      "address": "300 Caldwell Hall, Ithaca, NY 14853"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Email: intl-finaid@cornell.edu or finaid@cornell.edu"
    },
    {
      "name": "Website: https://finaid.cornell.edu/first-year-and-transfer-students-international"
    },
    {
      "name": "Website: https://www.cornell.edu/academics/"
    },
    {
      "name": "For department-specific contacts, use Cornell\u2019s searchable directory"
    },
    {
      "name": "Fall 2026 (only intake for first-year students)"
    },
    {
      "name": "Early Decision: November 1, 2025 (Decisions: mid-December; Binding commitment)"
    },
    {
      "name": "Regular Decision: January 2, 2026 (Decisions: late March/early April; Non-binding)"
    },
    {
      "name": "Supplemental Materials Deadline: November 15 (ED) / January 16 (RD)"
    },
    {
      "name": "Program-specific (vary by field)"
    },
    {
      "name": "Examples:"
    },
    {
      "name": "M.Eng. Electrical & Computer Engineering: January 15, 2026"
    },
    {
      "name": "M.Eng. Biomedical Engineering: December 15, 2025"
    },
    {
      "name": "M.Eng. Materials Science: May 30, 2025"
    },
    {
      "name": "MBA Round 3: April 10, 2025"
    },
    {
      "name": "Spring 2026 admission: October 15 (for select programs)"
    },
    {
      "name": "Cornell is need-aware for international undergraduates (financial need is considered in admission decisions)"
    },
    {
      "name": "No separate application for Tata Scholarship; automatic consideration if applying for need-based aid"
    },
    {
      "name": "Graduate students rarely receive need-based aid except in select PhD programs"
    },
    {
      "name": "Must complete CSS Profile by same deadline as admissions application"
    },
    {
      "name": "Need-aware admissions means financial aid need affects admission decision"
    },
    {
      "name": "International students NOT eligible for FAFSA or federal aid"
    }
  ],
  "internships": {
    "employment_rate_percent": 95
  },
  "campus_life": {
    "clubs": "Student Organizations & Clubs:",
    "housing": "Gender-inclusive housing options"
  },
  "security": {
    "detail": "Safety & Security Resources:"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "75-4.00 GPA",
    "Intakes & Deadlines"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_cornelluniversity, "Cornell University", [
  {
    "level": "PG",
    "name": "Computer Science &",
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
    "name": "MBA (Johnson Graduate School of Management) 36",
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
    "name": "Business, Management,",
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
    "name": "MS in Computer Science (",
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
    "name": "Engineering (14%) - Includes",
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
    "name": "MPS in Data Science and",
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
    "name": "Psychology",
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
    "name": "M.Eng. (Master of Engineering) - Multiple specializations including",
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
    "name": "Biological Sciences & Biomedical Sciences 46",
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
    "name": "MS in Food Science and",
    "faculty": "Architecture (College of Architecture, Art & Planning)",
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
    "name": "Computer Science & Information Sciences",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Department: Cornell Ann S. Bowers College of Computing and Information Science (available in College of Engineering and College of Arts & Sciences)",
    "duration_years": 4.0,
    "annual_fee_cad": 98347,
    "total_fee_cad": 393388,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry recommended",
      "No specific stream required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Business, Management, Marketing",
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
    "name": "Bachelor of Science in Applied Economics and Management (AEM)",
    "faculty": "Office Location: Department of Applied Economics and Management, CALS, Ithaca, NY",
    "duration_years": 4.0,
    "annual_fee_cad": 98347,
    "total_fee_cad": 393388,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics",
      "Economics background beneficial",
      "No specific stream required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Engineering \u2013 Chemical, Electrical, Mechanical, Civil, Biomedical",
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
    "name": "Bachelor of Science in Engineering (specializations: Chemical, Electrical & Computer, Mechanical, Civil & Environmental, Biomedical)",
    "faculty": "Department: Cornell College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 98347,
    "total_fee_cad": 393388,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (particularly Calculus)",
      "Physics",
      "Chemistry required",
      "No specific stream required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Psychology",
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
    "name": "Bachelor of Arts in Psychology",
    "faculty": "Department: Department of Psychology, College of Arts & Sciences",
    "duration_years": 4.0,
    "annual_fee_cad": 98347,
    "total_fee_cad": 393388,
    "min_class12_percent": 90,
    "required_subjects": [
      "No specific subject/stream requirement",
      "Social Sciences recommended"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Biological Sciences & Biomedical Sciences",
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
    "name": "Bachelor of Science in Biological Sciences",
    "faculty": "Department: Office of Undergraduate Biology (OUB), College of Agriculture and Life Sciences (CALS) + College of Arts & Sciences (A&S)",
    "duration_years": 4.0,
    "annual_fee_cad": 98347,
    "total_fee_cad": 393388,
    "min_class12_percent": 90,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics highly recommended",
      "No specific stream required"
    ],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Samuel Curtis Johnson Graduate School of Management)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 119502,
    "total_fee_cad": 239004,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Investment banking",
      "management consulting",
      "corporate finance",
      "product management",
      "equity research",
      "strategic marketing",
      "operations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS in Computer Science",
    "faculty": "Department of Computer Science, Bowers College of Computing and Information Science",
    "duration_years": 2,
    "annual_fee_cad": 40710,
    "total_fee_cad": 81420,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Software development",
      "research positions",
      "academic teaching roles",
      "PhD pursuit"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MPS in Data Science and Applied Statistics",
    "faculty": "Department of Statistics and Data Science (Bowers College of Computing and Information Science)",
    "duration_years": 2,
    "annual_fee_cad": 94364,
    "total_fee_cad": 188728,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Data scientist",
      "statistician",
      "data analyst",
      "researcher in finance",
      "tech",
      "government",
      "or scientific research"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.Eng. (Master of Engineering) \u2013 Multiple Specializations",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 98347,
    "total_fee_cad": 196694,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Design engineer",
      "product development engineer",
      "R&D engineer",
      "analyst",
      "manufacturing engineer",
      "systems engineer",
      "biomedical engineer",
      "software engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS in Food Science and Technology",
    "faculty": "Graduate Field of Food Science and Technology, College of Agriculture and Life Sciences (CALS)",
    "duration_years": 2,
    "annual_fee_cad": 40710,
    "total_fee_cad": 81420,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Food scientist",
      "R&D specialist",
      "food technologist",
      "product development specialist",
      "quality engineer",
      "enologist",
      "food safety specialist"
    ],
    "features": []
  }
]);

// --- RUTGERS UNIVERSITY ---
const univ_rutgersuniversity = db.institutions.insertOne(inst({
  "name": "RUTGERS UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "New Brunswick",
  "province": "New Jersey",
  "country": "USA",
  "campuses": [
    "New Brunswick"
  ],
  "website": "https://www.global.rutgers.edu",
  "application_portal": "Rutgers Application or Common App (students apply through one platform only)",
  "contacts": {
    "admissions": {
      "phone": "848-445-2214",
      "email": "isss-students@global.rutgers.edu",
      "address": "New Brunswick Campus"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 96,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International Chancellor\u2019s Scholarship: Up to $19,000/year for undergraduate"
    },
    {
      "name": "#YouAreWelcomeHere Scholarship: $19,000/year (two awards) for first-year undergraduate"
    },
    {
      "name": "F-1 International Visa Scholarship: Up to $17,000/year (for non-sponsored students)"
    },
    {
      "name": "Automatic Consideration: All admitted international students on valid non-immigrant visas automatically considered"
    },
    {
      "name": "Application Tip: Apply by Early Action or Regular Decision deadline for higher scholarship consideration"
    },
    {
      "name": "Graduate Support: Limited; on-campus employment and graduate assistantships available"
    }
  ],
  "internships": {
    "employment_rate_percent": 89
  },
  "campus_life": {
    "clubs": "Activities: Cultural clubs, academic societies, sports, theater, outdoor recreation, arts & engineering clubs"
  },
  "security": {
    "detail": "Partnerships: Local law enforcement collaboration; emergency protocols in place"
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

addPrograms(univ_rutgersuniversity, "RUTGERS UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science - Computer Science (4 years)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Engineering (4 years) - Multiple specializations: Electrical, Mechanical, Civil, Chemical",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Finance (4 years)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Accounting (4 years)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration / Business Analytics (4 years)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Computer Science (18-24 months)",
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
    "name": "Master of Science - Information Technology and Analytics (12 months)",
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
    "name": "Master of Business Administration (18-24 months)",
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
    "name": "Master of Science - Electrical and Computer Engineering (18-24 months)",
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
    "name": "Master of Business and Science - Engineering Management (18-24 months)",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science / School of Arts and Sciences",
    "duration_years": 4,
    "annual_fee_cad": 5369,
    "total_fee_cad": 21476,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry preferred"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Analyst",
      "Systems Developer",
      "Quality Assurance Engineer",
      "IT Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Engineering (Computer, Electrical, Mechanical, Civil)",
    "faculty": "Department name: School of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 5369,
    "total_fee_cad": 21476,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry (strongly preferred)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Software Engineer",
      "Electrical Engineer",
      "Civil Engineer",
      "Product Engineer",
      "Manufacturing Engineer",
      "Systems Engineer",
      "Automation Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Finance",
    "faculty": "Department name: Rutgers Business School - New Brunswick",
    "duration_years": 4,
    "annual_fee_cad": 5369,
    "total_fee_cad": 21476,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics preferred"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Banker",
      "Equity Research Analyst",
      "Corporate Finance Manager",
      "Risk Manager",
      "Financial Advisor",
      "Trader"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Accounting",
    "faculty": "Department name: Rutgers Business School - New Brunswick",
    "duration_years": 4,
    "annual_fee_cad": 5369,
    "total_fee_cad": 21476,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics preferred"
    ],
    "entry_roles": [
      "Accountant",
      "CPA",
      "Auditor",
      "Tax Specialist",
      "Financial Controller",
      "Forensic Accountant",
      "Government Accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Analytics and Information Technology",
    "faculty": "Department name: Rutgers Business School - New Brunswick",
    "duration_years": 4,
    "annual_fee_cad": 5369,
    "total_fee_cad": 21476,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics preferred",
      "strong analytical skills valued"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Systems Analyst",
      "IT Consultant",
      "Business Intelligence Analyst",
      "Database Administrator",
      "IT Project Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 70297,
    "total_fee_cad": 140594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in mathematics (Discrete Math, Calculus)",
      "algorithms",
      "software design"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Cybersecurity Analyst",
      "Cloud Solutions Architect",
      "AI/ML Specialist",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Technology and Analytics",
    "faculty": "Department name: Rutgers Business School - Newark and New Brunswick",
    "duration_years": 2,
    "annual_fee_cad": 79123,
    "total_fee_cad": 158246,
    "min_class12_percent": 70,
    "required_subjects": [
      "Quantitative skills preferred",
      "basic programming exposure helpful"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "IT Manager",
      "Solutions Architect",
      "Business Intelligence Specialist",
      "Analytics Manager",
      "Technology Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "Department name: Rutgers Business School - Newark and New Brunswick",
    "duration_years": 2,
    "annual_fee_cad": 74652,
    "total_fee_cad": 149304,
    "min_class12_percent": 70,
    "required_subjects": [
      "Work experience preferred (typically 2-5 years)",
      "demonstrated professional achievement"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance Manager",
      "Product Manager",
      "Marketing Manager",
      "Operations Manager",
      "Strategic Planner",
      "Investment Banker",
      "Business Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical and Computer Engineering",
    "faculty": "Department name: School of Engineering - Electrical and Computer Engineering Department",
    "duration_years": 2,
    "annual_fee_cad": 56469,
    "total_fee_cad": 112938,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "signals/systems",
      "programming"
    ],
    "entry_roles": [
      "Hardware Engineer",
      "Software Engineer",
      "Network Engineer",
      "Power Systems Engineer",
      "Semiconductor Engineer",
      "Telecommunications Specialist",
      "Controls Engineer",
      "Embedded Systems Designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business and Science in Engineering Management",
    "faculty": "Department name: School of Engineering / Master of Business and Science Program",
    "duration_years": 2,
    "annual_fee_cad": 45958,
    "total_fee_cad": 91916,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering or STEM foundation required"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Product Manager",
      "Quality Manager",
      "Operations Manager",
      "Technical Director",
      "Engineering Consultant",
      "Manufacturing Engineer Manager"
    ],
    "features": []
  }
]);

// --- BOSTON UNIVERSITY ---
const univ_bostonuniversity = db.institutions.insertOne(inst({
  "name": "BOSTON UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Boston",
  "province": "Massachusetts",
  "country": "USA",
  "campuses": [
    "Boston"
  ],
  "website": "https://www.bu.edu",
  "application_portal": "Common Application OR Coalition Application (choose one; NOT both)",
  "contacts": {
    "admissions": {
      "phone": "617-353-3565",
      "email": "isso@bu.edu",
      "address": "888 Commonwealth Avenue South Entrance, 2nd Floor, Boston, MA 02215"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 110,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Trustee Scholarship: Full tuition and fees (most prestigious; highly competitive)"
    },
    {
      "name": "Presidential Scholarship: 50% of tuition (approximately $25,000/year for UG)"
    },
    {
      "name": "College of Engineering FIRST Robotics Scholarship: For engineering applicants with FIRST robotics experience"
    },
    {
      "name": "Lu Lingzi Scholarship: For international graduate students (100% tuition + stipend)"
    },
    {
      "name": "William V. Shannon Memorial Fellowship: Graduate funding"
    },
    {
      "name": "Application Requirements: Apply by December 1 (UG) for merit scholarship consideration; mandatory application by deadline"
    },
    {
      "name": "Graduate Assistantships: Available with tuition remission and stipend (competitive; varies $57,868-$66,589 annually)"
    },
    {
      "name": "Important: International students NOT eligible for need-based financial aid from BU, state, or federal government"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Recreation: Intramural sports teams, club sports, outdoor adventure opportunities, dance clubs, music performances",
    "housing": "Housing: On-campus and off-campus housing available; residential college system; housing located on Charles River Campus"
  },
  "security": {
    "detail": "Partnerships: Coordination with Boston Police Department and local law enforcement; Clery Act compliance for annual security reporting"
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

addPrograms(univ_bostonuniversity, "BOSTON UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science - Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Business Administration (Finance/Accounting)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science - Biomedical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science - Computer Science (BU MET)",
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
    "name": "Master of Science - Electrical & Computer Engineering",
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
    "name": "Master of Business Administration (Questrom School)",
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
    "name": "Master of Arts - Data Analytics / Data Science",
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
    "name": "Master of Science - Information Systems",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Address: College of Engineering building, Boston University Charles River Campus",
    "duration_years": 4,
    "annual_fee_cad": 2072,
    "total_fee_cad": 8288,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry strongly recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Software Developer",
      "Systems Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Security Engineer",
      "Network Engineer",
      "Web Developer",
      "Cloud Architect",
      "Quality Assurance Engineer",
      "Database Administrator",
      "Full-Stack Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Engineering",
    "faculty": "Address: College of Engineering building, Boston University Charles River Campus",
    "duration_years": 4,
    "annual_fee_cad": 2072,
    "total_fee_cad": 8288,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Calculus)",
      "Physics",
      "Chemistry required",
      "strong math/science background essential"
    ],
    "entry_roles": [
      "Computer Engineer",
      "Hardware Engineer",
      "Software Engineer",
      "Embedded Systems Designer",
      "VLSI Engineer",
      "Network Engineer",
      "Telecommunications Engineer",
      "Circuit Designer",
      "Robotics Engineer",
      "IoT Engineer",
      "Security Engineer",
      "Systems Architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Address: College of Engineering building, Boston University Charles River Campus",
    "duration_years": 4,
    "annual_fee_cad": 2072,
    "total_fee_cad": 8288,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Calculus)",
      "Physics",
      "Chemistry required",
      "strong analytical",
      "mathematical foundation essential"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Control Systems Engineer",
      "Signal Processing Engineer",
      "RF Engineer",
      "Telecommunications Engineer",
      "Electronics Engineer",
      "Design Engineer",
      "Test Engineer",
      "Circuit Designer",
      "Firmware Engineer",
      "Power Electronics Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration - Finance / Accounting",
    "faculty": "Department name: Questrom School of Business - Finance and Accounting Department",
    "duration_years": 4,
    "annual_fee_cad": 2072,
    "total_fee_cad": 8288,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Economics preferred"
    ],
    "entry_roles": [
      "Finance Track: Financial Analyst",
      "Investment Banker",
      "Equity Research Analyst",
      "Corporate Finance Manager",
      "Risk Manager",
      "Financial Advisor",
      "Trader",
      "Treasury Analyst",
      "Wealth Manager. Accounting Track: Accountant",
      "CPA",
      "Auditor",
      "Tax Specialist",
      "Financial Controller",
      "Staff Accountant",
      "Forensic Accountant",
      "Government Accountant",
      "Internal Auditor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Biomedical Engineering",
    "faculty": "Address: College of Engineering building, Boston University Charles River Campus",
    "duration_years": 4,
    "annual_fee_cad": 2072,
    "total_fee_cad": 8288,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (Calculus)",
      "Physics",
      "Chemistry",
      "Biology required",
      "strong STEM foundation essential"
    ],
    "entry_roles": [
      "Biomedical Engineer",
      "Medical Device Engineer",
      "Clinical Engineer",
      "Biomechanical Engineer",
      "Tissue Engineer",
      "Rehabilitation Engineer",
      "Manufacturing Engineer (Medical)",
      "Quality Assurance Engineer",
      "Research Engineer",
      "FDA Regulatory Specialist",
      "Healthcare Technology Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: Metropolitan College (BU MET) - Department of Computer Science / School of Computing & Data Sciences (Engineering option also available)",
    "duration_years": 2,
    "annual_fee_cad": 184009,
    "total_fee_cad": 368018,
    "min_class12_percent": 70,
    "required_subjects": [
      "Calculus",
      "Discrete Mathematics",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Digital Logic Design required or concurrent enrollment possible"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Security Engineer",
      "Cloud Solutions Architect",
      "AI/ML Specialist",
      "Research Scientist",
      "Firmware Engineer",
      "Database Engineer",
      "DevOps Engineer",
      "Full-Stack Developer",
      "Security Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical & Computer Engineering",
    "faculty": "Address: College of Engineering building, Boston University Charles River Campus",
    "duration_years": 2,
    "annual_fee_cad": 92004,
    "total_fee_cad": 184008,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in circuits",
      "electromagnetics",
      "signal processing",
      "control systems",
      "digital design required",
      "some students may need prerequisite courses"
    ],
    "entry_roles": [
      "Hardware Engineer",
      "Software Engineer",
      "Power Systems Engineer",
      "Semiconductor Engineer",
      "Network Engineer",
      "Telecommunications Engineer",
      "Controls Engineer",
      "Embedded Systems Designer",
      "VLSI Engineer",
      "Signal Processing Engineer",
      "RF Engineer",
      "Power Electronics Engineer",
      "Imaging Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (MBA)",
    "faculty": "Department name: Questrom School of Business - MBA Program",
    "duration_years": 2,
    "annual_fee_cad": 6899,
    "total_fee_cad": 13798,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business fundamentals helpful",
      "candidates from engineering",
      "sciences",
      "liberal arts",
      "international backgrounds all accepted"
    ],
    "entry_roles": [
      "Management Consultant",
      "Finance Manager",
      "Product Manager",
      "Marketing Manager",
      "Operations Manager",
      "Strategic Planner",
      "Investment Banker",
      "Business Analyst",
      "Program Manager",
      "Chief Financial Officer",
      "Corporate Development Manager",
      "Management Analyst",
      "Executive roles across Fortune 500 companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Arts in Data Analytics / Master of Science in Data Science",
    "faculty": "Department name: School of Computing & Data Sciences / Metropolitan College - Data Analytics/Science Program",
    "duration_years": 2,
    "annual_fee_cad": 92004,
    "total_fee_cad": 184008,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "linear algebra",
      "calculus",
      "programming (Python/R) preferred",
      "no prerequisite coursework required for non-quantitative backgrounds",
      "catch-up courses available"
    ],
    "entry_roles": [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Analyst",
      "Analytics Manager",
      "Data Engineer",
      "Quantitative Analyst",
      "Business Intelligence Analyst",
      "Statistician",
      "Research Scientist",
      "Product Analyst",
      "Marketing Analyst",
      "Risk Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Systems",
    "faculty": "Department name: College of Engineering / School of Computing & Data Sciences - Information Systems Program; also available through Metropolitan College",
    "duration_years": 2,
    "annual_fee_cad": 92004,
    "total_fee_cad": 184008,
    "min_class12_percent": 70,
    "required_subjects": [
      "Basic understanding of business processes helpful",
      "quantitative skills",
      "logical thinking preferred",
      "programming experience beneficial but not required"
    ],
    "entry_roles": [
      "Business Analyst",
      "IT Manager",
      "Systems Analyst",
      "Database Administrator",
      "Data Analyst",
      "IT Consultant",
      "Solutions Architect",
      "IT Project Manager",
      "Systems Administrator",
      "Network Manager",
      "Business Intelligence Analyst",
      "IT Strategy Manager",
      "Chief Information Officer (CIO track)",
      "Enterprise Architect"
    ],
    "features": []
  }
]);

// --- SUNY BUFFALO UNIVERSITY ---
const univ_sunybuffalouniversity = db.institutions.insertOne(inst({
  "name": "SUNY BUFFALO UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Buffalo",
  "province": "New York",
  "country": "USA",
  "campuses": [
    "Buffalo"
  ],
  "website": "www.buffalo.edu/admissions",
  "application_portal": "SUNY App / Common App / Coalition App (Undergraduate); ubgradconnect.buffalo.edu/apply (Graduate)",
  "contacts": {
    "admissions": {
      "phone": "Limited support (student staff available)",
      "email": "iss@buffalo.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 69,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Yes (merit-based only)"
    },
    {
      "name": "Flagship Scholarship: Available to qualified international students; automatic consideration during admissions"
    },
    {
      "name": "UB Presidential Scholarship: For Honors College (most selective)"
    },
    {
      "name": "International Student Fee: $100/semester (Fall & Spring only)"
    },
    {
      "name": "Renewable scholarships: Up to 4 years with good academic standing (GPA 3.0+)"
    },
    {
      "name": "Internship Equity Fund: Up to $3,500 for unpaid internships (non-profits/government organizations)"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "UBLinked: Virtual involvement hub for clubs and activities",
    "housing": "Housing: Residence halls on North and South Campuses (Ellicott Complex, Goodyear, Clement Hall)"
  },
  "security": {
    "detail": "Emergency procedures: AlertSJSU emergency notification system; Emergency Operations Center (EOC)"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science and Engineering",
    "Master of Science in Data Science / Engineering Sciences (Data Science)",
    "Master of Science in Electrical Engineering",
    "Master of Business Administration (Full-Time)",
    "Master of Science in Engineering Sciences (Artificial Intelligence)"
  ]
})).insertedId;

addPrograms(univ_sunybuffalouniversity, "SUNY BUFFALO UNIVERSITY", [
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science and Engineering, School of Engineering and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Analyst",
      "Web Developer",
      "Data Analyst",
      "Systems Programmer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "Department name: School of Management",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "English"
    ],
    "entry_roles": [
      "Business Analyst",
      "Financial Analyst",
      "Management Consultant",
      "Marketing Coordinator",
      "Supply Chain Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department name: Department of Mechanical and Aerospace Engineering, School of Engineering and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years recommended)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "CAD Technician",
      "Thermal Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department name: Department of Electrical Engineering, School of Engineering and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Electronics Engineer",
      "Control Systems Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Aerospace Engineering",
    "faculty": "Department name: Department of Mechanical and Aerospace Engineering, School of Engineering and Applied Sciences",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years recommended)",
      "strength in mechanics"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Flight Test Engineer",
      "Structural Analyst",
      "Systems Engineer",
      "Propulsion Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science and Engineering",
    "faculty": "Department name: Department of Computer Science and Engineering, School of Engineering and Applied Sciences",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Programming fundamentals",
      "data structures",
      "algorithms"
    ],
    "entry_roles": [
      "Senior Software Engineer",
      "Systems Architect",
      "Software Architect",
      "Machine Learning Engineer",
      "AI Researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Data Science / Engineering Sciences (Data Science)",
    "faculty": "Department name: Department of Computer Science and Engineering & Department of Civil, Structural & Environmental Engineering",
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
    "name": "5 years (18 months) | Full-time study mode",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Calculus",
      "Linear Algebra",
      "Statistics",
      "Programming (C++/Python/Java)"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Business Intelligence Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical Engineering",
    "faculty": "Department name: Department of Electrical Engineering, School of Engineering and Applied Sciences",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuit Analysis",
      "Electronics",
      "Electromagnetics",
      "Signals",
      "Systems"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Control Systems Engineer",
      "Embedded Systems Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "Department name: School of Management",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any field acceptable (prerequisites: Statistics grade B+; Economics grade B+ - can be completed online if lacking)"
    ],
    "entry_roles": [
      "Product Manager",
      "Management Consultant",
      "Business Analyst",
      "Strategy Manager",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Engineering Sciences (Artificial Intelligence)",
    "faculty": "Department name: Department of Computer Science and Engineering & School of Engineering and Applied Sciences",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in programming",
      "linear algebra",
      "calculus",
      "statistics"
    ],
    "entry_roles": [
      "AI Engineer",
      "Machine Learning Engineer",
      "Deep Learning Specialist",
      "AI Researcher",
      "Robotics Engineer"
    ],
    "features": []
  }
]);

// --- Arizona State University ---
const univ_arizonastateuniversity = db.institutions.insertOne(inst({
  "name": "Arizona State University",
  "abbreviation": "ASU",
  "type": "university",
  "city": "Tempe",
  "province": "Arizona",
  "country": "USA",
  "campuses": [
    "Tempe"
  ],
  "website": "www.asu.edu/academics",
  "application_portal": "ASU Graduate Application Portal",
  "contacts": {
    "admissions": {
      "phone": "(480) 965-7788 (Main line)",
      "address": "1150 East University Drive Building C, Room 226, Tempe, AZ 85281",
      "email": "issc@asu.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "New American University (NAMU) Scholarship: Merit-based for international F-1 first-year and transfer students"
    },
    {
      "name": "Award: $6,000\u2013$14,500 per year (varies based on achievement, community contribution, academics)"
    },
    {
      "name": "Automatic consideration upon admission (no separate application)"
    },
    {
      "name": "International Freshman Academic Award: For high-achieving international students who attended high school abroad"
    },
    {
      "name": "Typical awards: $2,000\u2013$8,000 per year; 7\u201310% of students receive scholarships"
    },
    {
      "name": "Eligibility: High GPA, exceptional personal achievements, unique talents"
    },
    {
      "name": "Need-based aid: NOT available for international students"
    },
    {
      "name": "Teaching and Research Assistantships: May provide full tuition coverage + small living stipend"
    },
    {
      "name": "GEO Merit Scholarship: $2,000 (academic performance)"
    },
    {
      "name": "GEO International Student Scholarship: $2,000 (international students, academic performance)"
    },
    {
      "name": "GEO Access Scholarship: $2,000 (financial need + academic performance, ASU Online)"
    },
    {
      "name": "GEO Go Global Grant: $2,500 (demonstrated financial need)"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during semester; full-time during breaks"
    },
    {
      "name": "CPT (Curricular Practical Training): Available for degree-required internships"
    },
    {
      "name": "OPT (Optional Practical Training): Available post-graduation (12 months standard; 24-month STEM extension)"
    },
    {
      "name": "Student employment: On-campus jobs available; contact Student Employment (480) 965-5186"
    }
  ],
  "internships": {
    "part_time_work": "Off-campus: Requires authorization (CPT for degree-required internships/co-ops)",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Gaming: Trading Card Gamers, Board Game Club, Puzzle Clubs, eSports LAN",
    "housing": "On-campus residential housing available"
  },
  "security": {
    "detail": "International Student Emergency (24/7): +1 (855) 278-5080"
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

addPrograms(univ_arizonastateuniversity, "Arizona State University", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; Ira A. Fulton Schools of Engineering; #1 major for Indian students (1,397 students)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; Fulton Schools; 292 Indian students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Technology \u2013 4 years; High demand among Indian students (291 students)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Software Engineering \u2013 4 years; Fulton Schools; Growing demand (207 students)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; Fulton Schools; Popular STEM field (177 Indian students)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science, Analytics and Engineering (MSDSAE) \u2013 18\u201324 months; Multiple concentrations (Computing & Decision Analytics, Electrical Engineering, Bayesian ML, Materials Science, Mechanical/Aerospace, etc.)",
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
    "name": "Master of Science in Computer Science \u2013 2 years; Ira A. Fulton Schools; High-demand STEM program",
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
    "name": "Master of Science in Electrical Engineering OR Mechanical Engineering \u2013 2 years; Multiple specializations",
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
    "name": "Master of Science in Business Analytics OR Management \u2013 18\u201324 months; W.P. Carey School; In-demand program",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 53905,
    "total_fee_cad": 215620,
    "min_class12_percent": 61,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra)",
      "Physics",
      "Computer Science or programming coursework",
      "AP/IB CS recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Full-Stack Developer",
      "Research Engineer",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 53905,
    "total_fee_cad": 215620,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra)",
      "Physics (Mechanics, Electromagnetism essential)",
      "Digital Systems fundamentals",
      "AP Physics valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Technology",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 53905,
    "total_fee_cad": 215620,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra)",
      "Computer Science fundamentals",
      "Programming",
      "Statistics beneficial"
    ],
    "entry_roles": [
      "IT Analyst",
      "Systems Administrator",
      "Network Engineer",
      "Database Administrator",
      "IT Consultant",
      "Cybersecurity Specialist",
      "Software Support Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Software Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 47469,
    "total_fee_cad": 189876,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus for Engineers I required)",
      "Physics",
      "Computer Science fundamentals",
      "programming courses valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Mobile Developer",
      "Software Architect",
      "Quality Assurance Engineer",
      "DevOps Engineer",
      "Cloud Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 53905,
    "total_fee_cad": 215620,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations, Linear Algebra essential)",
      "Physics (Mechanics, Thermodynamics critical)",
      "Chemistry",
      "AP Physics",
      "Advanced Math valued"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Aerospace Engineer",
      "HVAC Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science, Analytics and Engineering (MSDSAE)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 41880,
    "total_fee_cad": 83760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Linear Algebra, Statistics)",
      "Computer Science or programming (Python preferred)",
      "any undergraduate major acceptable with quantitative coursework"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Analytics Engineer",
      "Research Scientist",
      "Business Analyst",
      "Statistician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 41880,
    "total_fee_cad": 83760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong foundation in Computer Science",
      "Mathematics (Calculus, Linear Algebra, Discrete Math)",
      "Data Structures",
      "Algorithms",
      "Systems concepts",
      "programming required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Systems Engineer",
      "Research Engineer",
      "Product Engineer",
      "Cloud Architect",
      "Cybersecurity Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Full-Time MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 41880,
    "total_fee_cad": 83760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any bachelor\u2019s degree acceptable",
      "quantitative background",
      "business experience valued but not required"
    ],
    "entry_roles": [
      "Management Consultant",
      "Business Analyst",
      "Financial Analyst",
      "Product Manager",
      "Operations Manager",
      "Strategy Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical Engineering OR Mechanical Engineering",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 41880,
    "total_fee_cad": 83760,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong Mathematics (Calculus, Differential Equations)",
      "Physics (Mechanics, Thermodynamics)",
      "Mechanical Engineering fundamentals",
      "Fluid Mechanics",
      "Heat Transfer valued"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Aerospace Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics OR Management",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [
      "Strong quantitative foundation",
      "Mathematics (Calculus, Statistics, Linear Algebra)",
      "Economics",
      "Business Analytics fundamentals",
      "programming (Python, R, SQL) beneficial"
    ],
    "entry_roles": [
      "Business Analyst",
      "Data Analyst",
      "Analytics Consultant",
      "Product Manager",
      "Operations Analyst",
      "Financial Analyst"
    ],
    "features": []
  }
]);

// --- Georgia Institute of Technology ---
const univ_georgiainstituteoftechnology = db.institutions.insertOne(inst({
  "name": "Georgia Institute of Technology",
  "abbreviation": "",
  "type": "university",
  "city": "Atlanta",
  "province": "Georgia",
  "country": "USA",
  "campuses": [
    "Atlanta"
  ],
  "website": "www.gatech.edu/academics",
  "application_portal": "catalog.gatech.edu",
  "contacts": {
    "admissions": {
      "phone": "(404) 894-7475",
      "email": "info@oie.gatech.edu",
      "address": "631 Cherry St., Savant Suite 211, Atlanta, GA 30332-0284, USA"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Georgia state law prohibits financial aid (need- or merit-based) to international undergraduate students"
    },
    {
      "name": "Merit scholarships NOT available to international students"
    },
    {
      "name": "Limited emergency funds available (after 2 semesters of enrollment):"
    },
    {
      "name": "Anne Robinson Clough International Student Fund: $200\u2013$400 one-time (F-1 visa holders, full-time, 2+ semesters completed)"
    },
    {
      "name": "Emergency tuition loans available on first-come, first-serve basis"
    },
    {
      "name": "Karishma Babu & Vijay Balasubramaniyan Fellowship Endowment Fund: $900 one-time (Indian graduate students; priority to female students or those in engineering/science/computing; F-1 visa required)"
    },
    {
      "name": "Graduate fellowships and assistantships: Limited availability; vary by program and department"
    },
    {
      "name": "Research Assistantships (RA) and Teaching Assistantships (TA) available in some programs (merit-based)"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during semester (F-1 visa); full-time during breaks"
    },
    {
      "name": "Private student loans available (not recommended for high debt)"
    },
    {
      "name": "External scholarships from private/nonprofit organizations available"
    }
  ],
  "internships": {
    "part_time_work": "Co-op Program: Alternating full-time study and full-time paid work; extends degree by ~1 year but provides significant professional experience",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Organizations: 500+ clubs and organizations spanning academic, professional, cultural, social, and recreational interests",
    "housing": "Safety Notes: Campus crime rate among lowest in decade; most incidents occur at campus edges and off-campus housing; GTPD focuses on proactive crime prevention"
  },
  "security": {
    "detail": "Facility Security Assessment: Captain Richard McNevin, richard.mcnevin@police.gatech.edu, (404) 402-9078"
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

addPrograms(univ_georgiainstituteoftechnology, "Georgia Institute of Technology", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; most popular major; 23% of all incoming students in computing-related majors; 13,711 CS applications (92.7% of College of Computing applications)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; 6.8% of incoming students",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; joint School of ECE programs",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; popular engineering choice",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aerospace Engineering OR Chemical Engineering \u2013 4 years; strong demand",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science \u2013 18\u201324 months; 11 specializations (Computer Graphics, Computing Systems, Machine Learning, High-Performance Computing, Human-Computer Interaction, Scientific Computing, Interactive Intelligence, Modeling & Simulation, Social Computing, Visual Analytics)",
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
    "name": "Master of Science in Electrical Engineering \u2013 2 years; multiple specializations",
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
    "name": "Master of Science in Data Science \u2013 2 years; online option available",
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
    "name": "Master of Science in Analytics \u2013 12\u201318 months; popular with Indian students",
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
    "name": "M.Eng. or Master\u2019s Programs \u2013 Various specializations in engineering and computing disciplines",
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
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Address: College of Computing, Georgia Tech, Atlanta, GA 30332-0320, USA",
    "duration_years": 4,
    "annual_fee_cad": 15869,
    "total_fee_cad": 63476,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in Mathematics (Calculus, Pre-Calculus)",
      "Physics required",
      "Chemistry preferred",
      "AP/IB Computer Science",
      "STEM courses highly valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Full-Stack Developer",
      "Data Scientist",
      "Systems Engineer",
      "Product Manager",
      "Research Engineer",
      "Algorithm Developer",
      "Security Engineer",
      "Cloud Architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "College of Computing, Bowers College of Computing and Information Science (Primary) OR College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 2064,
    "total_fee_cad": 8256,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus, Pre-Calculus, Linear Algebra)",
      "Physics (especially electromagnetism, mechanics) essential",
      "Chemistry preferred",
      "Computer Science",
      "Electronics background valuable",
      "AP/IB STEM courses recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Hardware Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "FPGA Design Engineer",
      "Firmware Developer",
      "Network Engineer",
      "Product Engineer",
      "Full-Stack Developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "Career support: Yes \u2013 Career services available through Georgia Tech and College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 45368,
    "total_fee_cad": 181472,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (electromagnetism, mechanics, thermodynamics) essential",
      "Chemistry required",
      "AP Physics",
      "Advanced Math highly valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "Network Engineer",
      "Circuit Designer",
      "R&D Engineer",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Career support: Yes \u2013 Georgia Tech Career Center and College of Engineering career services",
    "duration_years": 4,
    "annual_fee_cad": 45368,
    "total_fee_cad": 181472,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (mechanics, thermodynamics)",
      "Chemistry required",
      "Mechanics",
      "engineering design coursework valued",
      "AP STEM courses beneficial"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer",
      "Robotics Engineer",
      "Thermal/HVAC Engineer",
      "Materials Engineer",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aerospace Engineering",
    "faculty": "Address: College of Engineering, Georgia Tech, Atlanta, GA 30332, USA",
    "duration_years": 4,
    "annual_fee_cad": 45457,
    "total_fee_cad": 181828,
    "min_class12_percent": 70,
    "required_subjects": [
      "Advanced Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Physics (especially mechanics, aerodynamics, thermodynamics) essential",
      "Chemistry required",
      "AP Physics",
      "Advanced Math highly valued"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Design Engineer",
      "Systems Engineer",
      "Propulsion Engineer",
      "Structural Engineer",
      "Aerodynamics Engineer",
      "Flight Test Engineer",
      "Manufacturing Engineer",
      "R&D Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Address: College of Computing, Georgia Tech, Atlanta, GA 30332, USA",
    "duration_years": 2,
    "annual_fee_cad": 21514,
    "total_fee_cad": 43028,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in computer science",
      "mathematics",
      "data structures",
      "algorithms",
      "systems concepts required"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Full-Stack Developer",
      "Research Engineer",
      "Systems Engineer",
      "Cloud Architect",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical Engineering",
    "faculty": "Career support: Yes \u2013 Career services through Georgia Tech and College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 43304,
    "total_fee_cad": 86608,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong foundation in electrical engineering",
      "circuit analysis",
      "electromagnetism",
      "systems",
      "electromagnetics",
      "related disciplines"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "Network Engineer",
      "Circuit Designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Address: College of Computing, Georgia Tech, Atlanta, GA 30332, USA",
    "duration_years": 2,
    "annual_fee_cad": 28979,
    "total_fee_cad": 57958,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong quantitative foundation",
      "mathematics (Calculus, Linear Algebra, Probability/Statistics) essential",
      "programming knowledge required"
    ],
    "entry_roles": [
      "Data Scientist",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Data Analyst",
      "Quantitative Analyst",
      "Research Scientist",
      "Business Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Analytics",
    "faculty": "Address: College of Computing, Georgia Tech, Atlanta, GA 30332, USA",
    "duration_years": 2,
    "annual_fee_cad": 61628,
    "total_fee_cad": 123256,
    "min_class12_percent": 70,
    "required_subjects": [
      "Required: At least one college-level course each in Calculus",
      "Probability/Statistics",
      "Basic Linear Algebra",
      "High-level programming language (Python preferred; C++, Java, FORTRAN acceptable)"
    ],
    "entry_roles": [
      "Data Analyst",
      "Business Analyst",
      "Analytics Manager",
      "Data Scientist",
      "Quantitative Analyst",
      "Reporting Specialist",
      "Business Intelligence Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "M.Eng. or Master\u2019s Programs (Multiple Specializations)",
    "faculty": "Varies by specialization (College of Engineering, College of Computing, etc.)",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Engineering discipline-specific backgrounds required",
      "Mathematics",
      "Science",
      "Engineering fundamentals essential"
    ],
    "entry_roles": [
      "Engineer (discipline-specific)",
      "Design Engineer",
      "Systems Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Manufacturing Engineer",
      "Consultant",
      "Research Scientist"
    ],
    "features": []
  }
]);

// --- NORTH CAROLINA STATE UNIVERSITY ---
const univ_northcarolinastateuniversity = db.institutions.insertOne(inst({
  "name": "NORTH CAROLINA STATE UNIVERSITY",
  "abbreviation": "NC STATE",
  "type": "university",
  "city": "Raleigh",
  "province": "North Carolina",
  "country": "USA",
  "campuses": [
    "Raleigh"
  ],
  "website": "https://www.ncsu.edu",
  "application_portal": "NC State Graduate Application (https://grad.ncsu.edu/admissions/)",
  "contacts": {
    "admissions": {
      "phone": "(919) 515-2011",
      "email": "financialaid@ncsu.edu",
      "address": "2701 Sullivan Drive, Raleigh, NC 27695"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 103,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Link: https://financialaid.ncsu.edu/"
    },
    {
      "name": "Phone: (919) 515-8000"
    },
    {
      "name": "Email: financialaid@ncsu.edu"
    },
    {
      "name": "Address: 341 Cashiers Building, Raleigh, NC 27695-7114"
    },
    {
      "name": "Phone: (919) 515-2011"
    },
    {
      "name": "Link: https://www.ncsu.edu/"
    },
    {
      "name": "Address: 2701 Sullivan Drive, Raleigh, NC 27695"
    },
    {
      "name": "Academic Requirement: High school completion (Class 12 equivalent); no specific cutoff published; competitive GPA typically 3.5+ (85%+)"
    },
    {
      "name": "English Language Test: TOEFL iBT 80+ (minimum 18 per section) OR IELTS Academic 6.5+ (minimum 6.0 per band) OR Duolingo 110+ \u2014 REQUIRED for non-native English speakers (India NOT exempt)"
    },
    {
      "name": "Standardized Tests: SAT or ACT accepted; not mandatory but recommended"
    },
    {
      "name": "Additional Requirements: Official high school transcripts; Common App essays; official English translations of non-English documents"
    },
    {
      "name": "Academic Requirement: Bachelor\u2019s degree (4-year equivalent); GPA 3.0+ (80%+); program-specific requirements vary"
    },
    {
      "name": "Important Note: Three-year bachelor\u2019s degrees only accepted if from Bologna Process member institutions; otherwise credential evaluation required from NACES member service"
    },
    {
      "name": "English Language Test: TOEFL iBT 95+ (minimum 18-20 per section) OR IELTS Academic 7.0+ (minimum 6.5 per band) \u2014 REQUIRED for non-native speakers"
    },
    {
      "name": "Additional Requirements: GRE/GMAT (program-dependent; some waivers available); transcripts; 2-3 letters of recommendation; statement of purpose; resume/CV; credential evaluation for non-US degrees"
    },
    {
      "name": "Fall Intake (Primary): August enrollment"
    },
    {
      "name": "Application Opens: September 1"
    },
    {
      "name": "Early Decision: November 1 (optional)"
    },
    {
      "name": "Regular Deadline (International): December 1"
    },
    {
      "name": "Decisions Posted: January-February"
    },
    {
      "name": "Enrollment Deposit: May 1"
    },
    {
      "name": "Spring Intake: January enrollment"
    },
    {
      "name": "Deadline: October 15"
    },
    {
      "name": "Fall Intake (Primary): August/September enrollment"
    },
    {
      "name": "Application Period: Varies by program (typically August-May)"
    },
    {
      "name": "Standard Deadline: December 1-January 15 (most programs)"
    },
    {
      "name": "Rolling Admissions: Some programs review continuously; early application recommended"
    },
    {
      "name": "Program-specific scholarships available (competitive; availability varies)"
    },
    {
      "name": "International students NOT eligible for federal/state aid"
    },
    {
      "name": "Merit-Based Funding: Limited; program and availability dependent"
    },
    {
      "name": "Some departments offer Teaching/Research Assistantships (tuition reduction + stipend; competitive)"
    },
    {
      "name": "GRE/GMAT waivers: Available for applicants with 3+ years professional experience + 3.0+ UG GPA"
    },
    {
      "name": "International Students: Must demonstrate financial capability; NOT eligible for federal/state aid"
    },
    {
      "name": "External Scholarship Eligibility: Eligible for non-US scholarships (J.N. Tata Endowment, Indian government scholarships, etc.)"
    }
  ],
  "internships": {
    "part_time_work": "Co-op Programs: Available in Engineering and selected departments",
    "coop_available": true,
    "employment_rate_percent": 85
  },
  "campus_life": {
    "clubs": "Academic/Professional: Engineering clubs, business clubs, research organizations",
    "housing": "Housing: On-campus housing available; residential communities"
  },
  "security": {
    "detail": "Emergency Alert System: Text/email notifications for campus safety alerts"
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

addPrograms(univ_northcarolinastateuniversity, "NORTH CAROLINA STATE UNIVERSITY", [
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Industrial Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
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
    "name": "MS Electrical Engineering",
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
    "name": "MS Mechanical Engineering",
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
    "name": "MS Industrial Engineering",
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
    "name": "BS Computer Science",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 53056,
    "total_fee_cad": 212224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Backend Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Mechanical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 53056,
    "total_fee_cad": 212224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, differential equations)",
      "Physics"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Electrical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 53056,
    "total_fee_cad": 212224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Hardware Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Industrial Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 53056,
    "total_fee_cad": 212224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus)",
      "Physics"
    ],
    "entry_roles": [
      "Industrial Engineer",
      "Operations Engineer",
      "Process Engineer",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Business Administration",
    "faculty": "College Name: Poole College of Management",
    "duration_years": 4.0,
    "annual_fee_cad": 53056,
    "total_fee_cad": 212224,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "English"
    ],
    "entry_roles": [
      "Business Analyst",
      "Financial Analyst",
      "Management Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 27932,
    "total_fee_cad": 55864,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "programming"
    ],
    "entry_roles": [
      "Software Engineer",
      "Data Scientist",
      "Machine Learning Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "College Name: Poole College of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 27932,
    "total_fee_cad": 55864,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required"
    ],
    "entry_roles": [
      "Consultant",
      "Product Manager",
      "Business Analyst",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Electrical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 27932,
    "total_fee_cad": 55864,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuit theory",
      "electromagnetics",
      "signal processing"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Hardware Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Mechanical Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 27932,
    "total_fee_cad": 55864,
    "min_class12_percent": 70,
    "required_subjects": [
      "Thermodynamics",
      "fluid mechanics"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Industrial Engineering",
    "faculty": "College Name: College of Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 27932,
    "total_fee_cad": 55864,
    "min_class12_percent": 70,
    "required_subjects": [
      "Operations research",
      "process engineering"
    ],
    "entry_roles": [
      "Industrial Engineer",
      "Operations Engineer",
      "Process Engineer"
    ],
    "features": []
  }
]);

// --- Purdue University ---
const univ_purdueuniversity = db.institutions.insertOne(inst({
  "name": "Purdue University",
  "abbreviation": "",
  "type": "university",
  "city": "West Lafayette",
  "province": "Indiana",
  "country": "USA",
  "campuses": [
    "West Lafayette"
  ],
  "website": "www.purdue.edu/academics",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "(765) 494-4600",
      "email": "ISS@Purdue.edu or IntlScholars@Purdue.edu",
      "address": "Office of Admissions, 610 Purdue Mall, West Lafayette, IN 47907"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit-based awards: 15% of applicants receive merit scholarships annually"
    },
    {
      "name": "Automatic consideration upon admission; no separate application required"
    },
    {
      "name": "Criteria: Academic excellence, leadership, extracurricular activities, test scores"
    },
    {
      "name": "Award amounts: Varies (up to full tuition for top candidates)"
    },
    {
      "name": "No need-based aid for international students (public university)"
    },
    {
      "name": "Scholarship names include: Fulbright-Nehru Master\u2019s Fellowship, Ross Fellowship, ACC (Arts & Cultural Management) scholarships"
    },
    {
      "name": "Merit-based awards: Available through individual departments"
    },
    {
      "name": "Teaching Assistantships (TA) & Research Assistantships (RA): Tuition waiver (partial to full) + stipend"
    },
    {
      "name": "MS Computer Science: GRE scores 308+ (revised), 153+ verbal, 155+ quantitative recommended for TA/RA"
    },
    {
      "name": "MBA scholarships: Limited merit awards; average GMAT 650+"
    },
    {
      "name": "Ross Fellowship (PhD): $24,124 annually + tuition + health insurance for 4 years"
    },
    {
      "name": "Fulbright-Nehru Fellowship: Fully funded for Master\u2019s; requires 55%+ bachelor\u2019s degree, 3+ years work experience"
    },
    {
      "name": "Departmental scholarships vary by school"
    },
    {
      "name": "For All International Students:"
    },
    {
      "name": "On-campus employment: Up to 20 hours/week during Fall/Spring semesters; full-time during breaks"
    },
    {
      "name": "Typical on-campus jobs: Dining courts ($9\u2013$12/hr), tutoring, research assistant, library/administrative roles"
    },
    {
      "name": "CPT (Curricular Practical Training): Off-campus internships authorized by university"
    },
    {
      "name": "OPT (Optional Practical Training): Post-graduation work authorization"
    },
    {
      "name": "12 months standard"
    },
    {
      "name": "STEM OPT Extension: Additional 24 months for STEM-eligible degrees"
    }
  ],
  "internships": {
    "part_time_work": "Co-op Programs: Available in Engineering and select programs; alternating study/work semesters",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Academic clubs: Board Gamers United, Computer Science Club, Economics Club, esports, etc.",
    "housing": "On-campus residential housing (dormitories and residential colleges)"
  },
  "security": {
    "detail": "ISS After-Hours Emergency: (765) 491-6759"
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

addPrograms(univ_purdueuniversity, "Purdue University", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science \u2013 4 years; Purdue Polytechnic",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering \u2013 4 years; Purdue Polytechnic",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering \u2013 4 years; Purdue Polytechnic",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aeronautical Engineering \u2013 4 years; Purdue Polytechnic",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering \u2013 4 years; Purdue Polytechnic",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science \u2013 2 years; Purdue Polytechnic",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 65533,
    "total_fee_cad": 131066,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) \u2013 11 months; Krannert School",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 105666,
    "total_fee_cad": 211332,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science \u2013 2 years; Online/On-campus options; Purdue Online",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 44579,
    "total_fee_cad": 89158,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics and Information Management \u2013 2 years",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 57297,
    "total_fee_cad": 114594,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Engineering Management \u2013 2 years",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 62720,
    "total_fee_cad": 125440,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science, Purdue Polytechnic",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra, Pre-calculus preferred)",
      "Physics",
      "Computer Science or programming background valued"
    ],
    "entry_roles": [
      "Software Engineer",
      "Full-Stack Developer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Systems Engineer",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra, Pre-calculus preferred)",
      "Physics (essential)",
      "Digital systems fundamentals valued"
    ],
    "entry_roles": [
      "Computer Engineer",
      "Hardware Design Engineer",
      "Embedded Systems Engineer",
      "Systems Engineer",
      "Firmware Engineer",
      "VLSI Design Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra, Pre-calculus preferred)",
      "Physics (essential)",
      "Electromagnetism fundamentals valued"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Engineer",
      "Hardware Design Engineer",
      "Controls Engineer",
      "Signal Processing Engineer",
      "RF Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aeronautical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra, Pre-calculus preferred)",
      "Physics (essential)",
      "Mechanics",
      "Thermodynamics valued"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Design Engineer",
      "Systems Engineer",
      "Test Engineer",
      "Manufacturing Engineer",
      "Flight Test Engineer",
      "R&D Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 31891,
    "total_fee_cad": 127564,
    "min_class12_percent": 75,
    "required_subjects": [
      "Strong Mathematics (Calculus, Algebra, Pre-calculus preferred)",
      "Physics (essential)",
      "Mechanics",
      "Thermodynamics valued"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "R&D Engineer",
      "Product Development Engineer",
      "Systems Engineer"
    ],
    "features": []
  }
]);

// --- YALE UNIVERSITY ---
const univ_yaleuniversity = db.institutions.insertOne(inst({
  "name": "YALE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "New Haven",
  "province": "Connecticut",
  "country": "USA",
  "campuses": [
    "New Haven"
  ],
  "website": "https://www.yale.edu",
  "application_portal": "Varies by program (Yale online application system)",
  "contacts": {
    "admissions": {
      "phone": "(203) 432-4771",
      "address": "421 Temple Street, New Haven, CT 06511",
      "email": "oiss@yale.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 110,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Need-Blind Admissions: Yale admits international students without regard to ability to pay"
    },
    {
      "name": "Yale Scholarship (Need-Based): Covers 100% of demonstrated financial need"
    },
    {
      "name": "Average award: $60,000-$80,000+ per year"
    },
    {
      "name": "No loans required (grants only; work-study optional)"
    },
    {
      "name": "Families earning <$65,000: Full cost coverage (tuition, housing, meals)"
    },
    {
      "name": "Families earning $65,000-$150,000: Reduced costs based on assessment"
    },
    {
      "name": "Families earning >$150,000: Assessed individually"
    },
    {
      "name": "Additional Support: Winter clothing grants for students from warm climates; unpaid internship/research funding; emergency financial assistance; start-up grants"
    },
    {
      "name": "PhD Programs: Full funding guarantee (~98% of admitted students)"
    },
    {
      "name": "Full tuition coverage"
    },
    {
      "name": "Monthly stipend ($2,500-$3,500+ annually)"
    },
    {
      "name": "Health insurance coverage"
    },
    {
      "name": "Teaching/Research Assistantships"
    },
    {
      "name": "Master\u2019s Programs: Limited funding; varies by department"
    },
    {
      "name": "Some departments offer Teaching/Research Assistantships (tuition reduction + stipend)"
    },
    {
      "name": "External scholarship eligibility (J.N. Tata Endowment, government scholarships)"
    },
    {
      "name": "No guarantees like PhD programs"
    }
  ],
  "internships": {
    "employment_rate_percent": 98
  },
  "campus_life": {
    "housing": "Housing: 14 residential colleges; all undergraduates live on-campus",
    "clubs": "Total Clubs: 500+ registered student organizations"
  },
  "security": {
    "detail": "Emergency Alert System: Text/email notifications for campus safety alerts"
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

addPrograms(univ_yaleuniversity, "YALE UNIVERSITY", [
  {
    "level": "UG",
    "name": "BA/BS Economics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Political Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biology or Molecular Biophysics & Biochemistry",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Applied Mathematics",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA (Yale School of Management)",
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
    "name": "LLM (Yale Law School)",
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
    "name": "MS Computer Science",
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
    "name": "MS Statistics and Data Science",
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
    "name": "PhD Computer Science or PhD Economics",
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
    "name": "BA/BS Economics",
    "faculty": "Department Name: Department of Economics",
    "duration_years": 4.0,
    "annual_fee_cad": 96461,
    "total_fee_cad": 385844,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus recommended)",
      "English",
      "quantitative reasoning"
    ],
    "entry_roles": [
      "Economist",
      "Financial Analyst",
      "Policy Analyst",
      "Management Consultant",
      "Investment Analyst",
      "Research Analyst",
      "Government Economist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 4.0,
    "annual_fee_cad": 96461,
    "total_fee_cad": 385844,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, discrete math)",
      "Physics",
      "Chemistry",
      "English"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Cybersecurity Engineer",
      "Systems Engineer",
      "Backend Engineer",
      "Product Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA Political Science",
    "faculty": "Department Name: Department of Political Science",
    "duration_years": 4.0,
    "annual_fee_cad": 96461,
    "total_fee_cad": 385844,
    "min_class12_percent": 70,
    "required_subjects": [
      "English",
      "History",
      "Government/Civics beneficial"
    ],
    "entry_roles": [
      "Policy Analyst",
      "Government Analyst",
      "Political Consultant",
      "Diplomat",
      "NGO Manager",
      "Research Analyst",
      "Legislative Aide",
      "International Relations Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Biology or Molecular Biophysics & Biochemistry",
    "faculty": "Department Name: Department of Molecular Biophysics and Biochemistry (or Biology)",
    "duration_years": 4.0,
    "annual_fee_cad": 96461,
    "total_fee_cad": 385844,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (calculus)",
      "Physics",
      "English"
    ],
    "entry_roles": [
      "Biomedical Scientist",
      "Research Scientist",
      "Pharmaceutical Scientist",
      "Lab Manager",
      "Clinical Research Coordinator",
      "Biotechnology Engineer",
      "Medical Science Liaison"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BS Applied Mathematics",
    "faculty": "Department Name: Department of Applied Mathematics",
    "duration_years": 4.0,
    "annual_fee_cad": 96461,
    "total_fee_cad": 385844,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics (calculus, linear algebra)",
      "Physics",
      "English",
      "computer science helpful"
    ],
    "entry_roles": [
      "Quantitative Analyst",
      "Data Scientist",
      "Financial Analyst",
      "Software Engineer",
      "Operations Research Analyst",
      "Actuarial Analyst",
      "Research Mathematician"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA - Yale School of Management",
    "faculty": "School Name: Yale School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 121853,
    "total_fee_cad": 243706,
    "min_class12_percent": 70,
    "required_subjects": [
      "Not required",
      "diverse backgrounds welcomed"
    ],
    "entry_roles": [
      "Management Consultant",
      "Investment Manager",
      "Product Manager",
      "Strategy Director",
      "Private Equity Associate",
      "Entrepreneur",
      "Corporate Development Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "LLM - Yale Law School",
    "faculty": "School Name: Yale Law School",
    "duration_years": 1.0,
    "annual_fee_cad": 96461,
    "total_fee_cad": 96461,
    "min_class12_percent": 70,
    "required_subjects": [
      "Law degree or strong background in legal studies",
      "international law background helpful"
    ],
    "entry_roles": [
      "Lawyer (international law)",
      "Legal Counsel",
      "Corporate Counsel",
      "Patent Attorney",
      "Government Lawyer",
      "NGO Legal Director",
      "Diplomat"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 70242,
    "total_fee_cad": 140484,
    "min_class12_percent": 70,
    "required_subjects": [
      "Algorithms",
      "data structures",
      "systems programming",
      "discrete math",
      "computer architecture",
      "database systems helpful"
    ],
    "entry_roles": [
      "Software Engineer",
      "Machine Learning Engineer",
      "Research Scientist",
      "Data Scientist",
      "Systems Engineer",
      "Cybersecurity Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MS Statistics and Data Science",
    "faculty": "Department Name: Department of Statistics and Data Science",
    "duration_years": 2.0,
    "annual_fee_cad": 70242,
    "total_fee_cad": 140484,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "linear algebra",
      "multivariable calculus",
      "programming (R, Python, SQL)",
      "machine learning helpful"
    ],
    "entry_roles": [
      "Data Scientist",
      "Business Intelligence Analyst",
      "Statistical Analyst",
      "Risk Analyst",
      "Analytics Consultant",
      "Quantitative Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PhD Computer Science",
    "faculty": "Department Name: Department of Computer Science",
    "duration_years": 6.0,
    "annual_fee_cad": 70242,
    "total_fee_cad": 421452,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong in algorithms",
      "systems",
      "theory",
      "architecture",
      "discrete math",
      "programming proficiency"
    ],
    "entry_roles": [
      "Research Scientist",
      "Postdoctoral Researcher",
      "Academic Faculty",
      "Tech Industry Research Engineer",
      "Machine Learning Researcher"
    ],
    "features": []
  }
]);

// --- GEORGE WASHINGTON UNIVERSITY ---
const univ_georgewashingtonuniversity = db.institutions.insertOne(inst({
  "name": "GEORGE WASHINGTON UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Washington",
  "province": "D.C.",
  "country": "USA",
  "campuses": [
    "Washington"
  ],
  "website": "https://www.gwu.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "askccas@gwu.edu",
      "phone": "202-994-6210"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Presidential International Scholarship: $5,000\u2013$25,000 per year (renewable for up to 5 years for undergraduates)"
    },
    {
      "name": "You Are Welcome Here (#YAWH) Scholarship: 50% tuition coverage (renewable); for 2 selected international undergraduates"
    },
    {
      "name": "Graduate Assistantships & Teaching Fellowships: Available in various departments"
    },
    {
      "name": "Automatic consideration at time of admission for merit-based scholarships"
    },
    {
      "name": "Separate applications required for specific scholarship programs"
    },
    {
      "name": "Contact: International Services Office or department-specific offices"
    }
  ],
  "internships": {
    "employment_rate_percent": 93
  },
  "campus_life": {
    "clubs": "200+ student organizations and clubs"
  },
  "security": {
    "detail": "Campus safety and security education programs"
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

addPrograms(univ_georgewashingtonuniversity, "GEORGE WASHINGTON UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in International Affairs",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration (BBA)",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
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
    "name": "Master of Science in Data Science",
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
    "name": "Master of Science in Computer Science",
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
    "name": "Master of Science in Business Analytics",
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
    "name": "Master of Arts in International Affairs",
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
    "name": "UG Course : Bachelor of Science in International Affairs",
    "faculty": "Career Support: Elliott School career development center; partnerships with U.S. Department of State, USAID, foreign governments, international corporations",
    "duration_years": 4,
    "annual_fee_cad": 22494,
    "total_fee_cad": 89976,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "core subjects recommended"
    ],
    "entry_roles": [
      "Policy analyst",
      "diplomat",
      "international development specialist",
      "business analyst",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 22494,
    "total_fee_cad": 89976,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "financial analyst",
      "business analyst",
      "marketing specialist",
      "operations manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science, School of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 22494,
    "total_fee_cad": 89976,
    "min_class12_percent": 60,
    "required_subjects": [
      "Core mathematics",
      "science (physics/computer science preferred)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "cybersecurity analyst",
      "data analyst",
      "AI/ML engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical & Aerospace Engineering, School of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 22494,
    "total_fee_cad": 89976,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "mathematics",
      "chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "aerospace engineer",
      "design engineer",
      "manufacturing engineer",
      "project engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical & Computer Engineering, School of Engineering & Applied Science",
    "duration_years": 4,
    "annual_fee_cad": 22494,
    "total_fee_cad": 89976,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "mathematics",
      "chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "signal processing engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Global MBA)",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 99359,
    "total_fee_cad": 198718,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "no specific major required"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "marketing director",
      "business development executive",
      "venture capitalist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Data Science",
    "faculty": "Columbian College of Arts & Sciences, Data Science Program",
    "duration_years": 2,
    "annual_fee_cad": 43470,
    "total_fee_cad": 86940,
    "min_class12_percent": 70,
    "required_subjects": [
      "Statistics",
      "computer science",
      "mathematics",
      "or engineering background recommended"
    ],
    "entry_roles": [
      "Data scientist",
      "data analyst",
      "machine learning engineer",
      "business analyst",
      "quantitative analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department of Computer Science, School of Engineering & Applied Science",
    "duration_years": 2,
    "annual_fee_cad": 27599,
    "total_fee_cad": 55198,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "engineering",
      "mathematics",
      "or related field required"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI engineer",
      "cloud architect",
      "cybersecurity engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Business Analytics",
    "faculty": "",
    "duration_years": 2,
    "annual_fee_cad": 57297,
    "total_fee_cad": 114594,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "quantitative background (statistics, math, programming) beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "management consultant",
      "operations analyst",
      "financial analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Arts in International Affairs",
    "faculty": "Internship/Industry Project: Yes \u2013 Global capstone project; internships with U.S. Department of State, USAID, international NGOs, foreign governments, think tanks",
    "duration_years": 2,
    "annual_fee_cad": 96296,
    "total_fee_cad": 192592,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline",
      "international relations",
      "economics",
      "political science beneficial"
    ],
    "entry_roles": [
      "Diplomat",
      "policy analyst",
      "international development specialist",
      "conflict resolution specialist",
      "journalist"
    ],
    "features": []
  }
]);

// --- IOWA STATE UNIVERSITY ---
const univ_iowastateuniversity = db.institutions.insertOne(inst({
  "name": "IOWA STATE UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Ames",
  "province": "Iowa",
  "country": "USA",
  "campuses": [
    "Ames"
  ],
  "website": "https://www.iastate.edu",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "isso@iastate.edu",
      "phone": "515-294-5247"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 117,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "ISU International Tuition Awards: Merit-based scholarships up to $25,000 per year"
    },
    {
      "name": "Graduate Assistantships: Research and teaching assistantships available (tuition + stipend)"
    },
    {
      "name": "Merit-based scholarships are the primary source of aid for international students"
    },
    {
      "name": "Limited need-based aid available"
    },
    {
      "name": "Application via OneApp scholarship portal"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Active research clubs and innovation hubs"
  },
  "security": {
    "detail": "Campus safety education and emergency preparedness programs"
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

addPrograms(univ_iowastateuniversity, "IOWA STATE UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science & Engineering",
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
    "name": "Master of Science in Computer Engineering",
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
    "name": "Master of Business Administration (Full-Time, Ivy College)",
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
    "name": "Master of Science in Information Systems",
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
    "name": "Master of Science in Mechanical Engineering",
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
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department of Computer Science",
    "duration_years": 4,
    "annual_fee_cad": 44364,
    "total_fee_cad": 177456,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (4 years)",
      "Physics",
      "Chemistry (3 years recommended)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "full-stack developer",
      "AI/ML engineer",
      "embedded systems engineer",
      "cybersecurity specialist",
      "data engineer",
      "cloud architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Engineering",
    "faculty": "Department of Electrical & Computer Engineering (Computer Engineering option)",
    "duration_years": 4,
    "annual_fee_cad": 44364,
    "total_fee_cad": 177456,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Computer engineer",
      "embedded systems engineer",
      "hardware engineer",
      "AI/ML engineer",
      "systems engineer",
      "firmware engineer",
      "digital design engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department of Electrical & Computer Engineering",
    "duration_years": 4,
    "annual_fee_cad": 44364,
    "total_fee_cad": 177456,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "embedded systems engineer",
      "RF/microwave engineer",
      "control systems engineer",
      "electronics engineer",
      "telecommunications engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering",
    "duration_years": 4,
    "annual_fee_cad": 44364,
    "total_fee_cad": 177456,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "Chemistry mandatory"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal engineer",
      "design engineer",
      "HVAC engineer",
      "mechanical systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "Ivy College of Business",
    "duration_years": 4,
    "annual_fee_cad": 44364,
    "total_fee_cad": 177456,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "mathematics recommended"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "marketing specialist",
      "operations manager",
      "supply chain coordinator",
      "product manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science & Engineering",
    "faculty": "Department of Computer Science & Department of Electrical & Computer Engineering",
    "duration_years": 2,
    "annual_fee_cad": 29669,
    "total_fee_cad": 59338,
    "min_class12_percent": 70,
    "required_subjects": [
      "Computer science",
      "electrical engineering",
      "mathematics",
      "or related field (some flexibility for related disciplines)"
    ],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "AI/ML engineer",
      "cloud architect",
      "cybersecurity engineer",
      "research engineer",
      "data engineer",
      "solutions architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Engineering",
    "faculty": "Department of Electrical & Computer Engineering (Computer Engineering specialty)",
    "duration_years": 2,
    "annual_fee_cad": 29669,
    "total_fee_cad": 59338,
    "min_class12_percent": 70,
    "required_subjects": [
      "Electrical engineering",
      "computer engineering",
      "or related field"
    ],
    "entry_roles": [
      "Computer engineer",
      "embedded systems engineer",
      "hardware engineer",
      "AI/ML engineer",
      "firmware engineer",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Full-Time)",
    "faculty": "Ivy College of Business, MBA Program",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline (no specific major required; diversity valued)"
    ],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "finance manager",
      "product manager",
      "business development executive",
      "entrepreneur",
      "supply chain manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Information Systems",
    "faculty": "Department of Computer Science / Ivy College of Business",
    "duration_years": 2,
    "annual_fee_cad": 29669,
    "total_fee_cad": 59338,
    "min_class12_percent": 70,
    "required_subjects": [
      "Business",
      "computer science",
      "information technology",
      "or related field",
      "some IT background beneficial"
    ],
    "entry_roles": [
      "Systems analyst",
      "business systems analyst",
      "IT project manager",
      "enterprise architect",
      "information security analyst",
      "database administrator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Mechanical Engineering",
    "faculty": "Department of Mechanical Engineering",
    "duration_years": 2,
    "annual_fee_cad": 29669,
    "total_fee_cad": 59338,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanical engineering",
      "aerospace",
      "or related field",
      "foundational mechanics/thermodynamics required"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal engineer",
      "design engineer",
      "robotics engineer",
      "systems engineer"
    ],
    "features": []
  }
]);

// --- VIRGINIA TECH UNIVERSITY ---
const univ_virginiatechuniversity = db.institutions.insertOne(inst({
  "name": "VIRGINIA TECH UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Blacksburg",
  "province": "Virginia",
  "country": "USA",
  "campuses": [
    "Blacksburg"
  ],
  "website": "international.vt.edu",
  "application_portal": "IntlHokies (online immigration services)",
  "contacts": {
    "admissions": {
      "phone": "540-231-8636",
      "email": "international@vt.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 69,
  "intakes": [
    "Fall (September)",
    "Spring (January)",
    "Summer (May)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "International scholarships: Merit-based only (limited); no need-based aid for international students"
    },
    {
      "name": "Automatic consideration: During admissions review process"
    },
    {
      "name": "Graduate assistantships: Limited TA/RA positions available (covers tuition + stipend ~$22,000-$24,000/year for MS programs)"
    },
    {
      "name": "No work-study programs for international students"
    }
  ],
  "internships": {},
  "campus_life": {
    "clubs": "Activities: Intramural sports, outdoor recreation, arts/entertainment, engineering clubs, cultural organizations",
    "housing": "Housing: Required first-year on-campus living (exceptions for students over 21)"
  },
  "security": {
    "detail": "Regular training: Joint exercises with fire, police, and emergency services"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students \u2013 UG & PG)",
    "Intakes & Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Electrical Engineering",
    "Master of Science in Computer Science",
    "Master of Science in Computer Engineering",
    "Master of Business Administration (Professional/Full-Time)",
    "Master of Science in Mechanical Engineering"
  ]
})).insertedId;

addPrograms(univ_virginiatechuniversity, "VIRGINIA TECH UNIVERSITY", [
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics",
      "Physics recommended"
    ],
    "entry_roles": [
      "Software Engineer",
      "Systems Analyst",
      "Web Developer",
      "Data Analyst",
      "Machine Learning Engineer",
      "IT Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Electrical Engineering",
    "faculty": "Department name: Bradley Department of Electrical and Computer Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years)"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Electronics Engineer",
      "Control Systems Engineer",
      "RF Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Mechanical Engineering",
    "faculty": "Department name: Department of Mechanical Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics",
      "Chemistry",
      "Mathematics (4 years)"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Manufacturing Engineer",
      "CAD Technician",
      "Systems Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Computer Engineering",
    "faculty": "Department name: Bradley Department of Electrical and Computer Engineering, College of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics",
      "Physics (strong foundation)",
      "computer science fundamentals"
    ],
    "entry_roles": [
      "Embedded Systems Engineer",
      "Hardware Engineer",
      "Software Engineer",
      "Cybersecurity Engineer",
      "Controls Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "UG Course : Bachelor of Science in Business Administration",
    "faculty": "Department name: Pamplin College of Business, Department of Business Information Technology / General Business",
    "duration_years": 4,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics",
      "English"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Financial Analyst",
      "Marketing Manager",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Electrical Engineering",
    "faculty": "Department name: Bradley Department of Electrical and Computer Engineering, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Circuit analysis",
      "electromagnetics",
      "signals",
      "systems"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "VLSI Design Engineer",
      "Communications Engineer",
      "Controls Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Science",
    "faculty": "Department name: Department of Computer Science, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Data structures",
      "discrete mathematics",
      "algorithms",
      "operating systems",
      "programming fundamentals"
    ],
    "entry_roles": [
      "Senior Software Engineer",
      "Machine Learning Engineer",
      "AI Researcher",
      "Systems Architect",
      "Data Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Computer Engineering",
    "faculty": "Department name: Bradley Department of Electrical and Computer Engineering, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Digital systems",
      "embedded systems",
      "computer architecture",
      "signals",
      "systems"
    ],
    "entry_roles": [
      "Embedded Systems Engineer",
      "VLSI Design Engineer",
      "Hardware Engineer",
      "Cybersecurity Engineer",
      "IoT Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Business Administration (Professional)",
    "faculty": "Department name: Pamplin College of Business",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any discipline acceptable"
    ],
    "entry_roles": [
      "Product Manager",
      "Management Consultant",
      "Strategy Manager",
      "Business Analyst",
      "Finance Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "PG Course : Master of Science in Mechanical Engineering",
    "faculty": "Department name: Department of Mechanical Engineering, College of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mechanics",
      "thermodynamics",
      "fluid dynamics",
      "materials science"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Systems Engineer",
      "Thermal Engineer",
      "Manufacturing Engineer"
    ],
    "features": []
  }
]);

print("USA Seeding Completed!");