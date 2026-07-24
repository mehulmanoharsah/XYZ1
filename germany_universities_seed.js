// ============================================================
// GERMAN UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions germany_universities_seed.js
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

// Delete existing German data to prevent duplicates
db.institutions.deleteMany({ country: "Germany" });
db.programs.deleteMany({ institution_name: { $in: [
  "GISMA BUSINESS SCHOOL",
  "HUMBOLDT UNIVERSITY BERLIN",
  "UNIVERSITY OF ERLANGEN-NUREMBERG",
  "IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCES",
  "UNIVERSITY OF FREIBURG",
  "HEIDELBERG UNIVERSITY",
  "UNIVERSITY OF BONN",
  "TECHNICAL UNIVERSITY OF MUNICH",
  "TECHNICAL UNIVERSITY OF DRESDEN",
  "LUDWIG MAXIMILIANS UNIVERSITY MUNICH",
  "FREE UNIVERSITY BERLIN",
  "UNIVERSITY OF COLOGNE",
  "TECHNICAL UNIVERSITY OF BERLIN",
  "KARLSRUHE INSTITUTE OF TECHNOLOGY",
  "BERLIN SCHOOL OF BUSINESS AND INNOVATION",
  "UNIVERSITY OF HAMBURG",
  "UNIVERSITY OF MANNHEIM",
  "TECHNICAL UNIVERSITY OF DARMSTADT",
  "UNIVERSITY OF STUTTGART",
  "RWTH AACHEN UNIVERSITY",
] } });

// --- GISMA BUSINESS SCHOOL ---
const univ_gismabusinessschool = db.institutions.insertOne(inst({
  "name": "GISMA BUSINESS SCHOOL",
  "abbreviation": "",
  "type": "university",
  "city": "",
  "province": "Germany State",
  "country": "Germany",
  "campuses": [
    ""
  ],
  "website": "https://www.gisma.com",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "info@gisma.com",
      "phone": "+49 511 546090 (8:00 AM \u2013 4:30 PM, Monday\u2013Friday Central European Time)"
    },
    "international_students": {
      "website": "Maximum 120 full days (8 hours/day) OR 240 half-days (4+ hours/day) per calendar year; Unlimited hours during semester breaks (typically 6 weeks per year); Part-time student employment: Up to 20 hours/week during semester; Minimum wage \u20ac12.41/hour (2025); Certificate of exemption from work permit required (obtained via GISMA International Office)"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Academic Merit Scholarship: Up to \u20ac5,000 for high-performing applicants; For students with outstanding previous academic results or very high GMAT scores; Merit + social skills-based; Application deadline: Rolling (apply with main application)"
    },
    {
      "name": "Women in Business Scholarship: Unlimited positions for qualified female applicants; \u20ac2,000\u2013\u20ac5,000+ per student; Demonstrates leadership potential; Global program emphasis; Renewable annually"
    },
    {
      "name": "Principal\u2019s Scholarship for Entrepreneurship: For students with demonstrated entrepreneurial spirit; Vision-to-venture track record required; \u20ac2,000\u2013\u20ac5,000+ variable; Deadline: Rolling"
    },
    {
      "name": "Exceptional Career Scholarship: For students with proven outstanding career achievements; \u20ac2,000\u2013\u20ac5,000+ variable; Application deadline: Rolling"
    },
    {
      "name": "Family Scholarship: For immediate/extended family of current/former GISMA students; \u20ac1,000\u2013\u20ac2,500+ variable; Limited availability; Deadline: Rolling"
    },
    {
      "name": "\u20ac1 Million Future Leaders Scholarship Fund: Newly launched (2024); Available specifically for Potsdam campus students; \u20ac2,000\u2013\u20ac10,000+ awards; Merit-based; Application deadline: Rolling"
    },
    {
      "name": "Early Admission Scholarship: For International BBA (Bachelor\u2019s): Applied to first-year tuition; Deadline: Rolling applications"
    },
    {
      "name": "DAAD Scholarships: \u20ac934\u2013\u20ac1,400+/month for Master\u2019s/PhD; Highly competitive; Covers tuition, living stipend, health insurance"
    },
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Limited availability; Merit-based; Deadline varies"
    },
    {
      "name": "Tuition fee discount for upfront payment: Pay full program cost upfront OR pay per semester; Flexible payment options available; Installment plans without interest penalties; Pay through Flywire (international payment platform)"
    },
    {
      "name": "Deposit fee to secure place: \u20ac3,000 (due after acceptance; non-refundable once enrolled; applied toward tuition)"
    },
    {
      "name": "German student financing (BAf\u00f6G): May be available for eligible international students; Employer financing available"
    }
  ],
  "internships": {
    "part_time_work": "Non-EU/International Students on Student Visa: Maximum 120 full days (8 hours/day) OR 240 half-days (4+ hours/day) per calendar year; Unlimited hours during semester breaks (typically 6 weeks per year); Part-time student employment: Up to 20 hours/week during semester; Minimum wage \u20ac12.41/hour (2025); Certificate of exemption from work permit required (obtained via GISMA International Office)",
    "employment_rate_percent": 90
  },
  "campus_life": {
    "housing": "Private student housing (off-campus): Berlin offers abundant options; Shared flats (WGs): \u20ac300\u2013\u20ac600/month; Private apartments: \u20ac500\u2013\u20ac900/month; Platforms: WG-Gesucht.de, Immobilienscout24, eBay Kleinanzeigen; GISMA accommodation team assists with housing search",
    "clubs": "Student clubs & organizations: International student societies (Indian student community active); Tech clubs, entrepreneurship clubs, cultural associations; GISMA Student Council; Sports clubs; Social events"
  },
  "security": {
    "detail": "5.MSc Cyber Security Management (12-month; growing demand from Indian applicants)"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Global MBA (12-month intensive; highly popular with Indian professionals; 3+ years work experience required)",
    "MSc International Business Management (12-month; popular with Indian students)",
    "MSc Business Management (24-month; flexible specializations available)",
    "MSc Data Science, AI & Digital Business (12-month or 24-month options; very popular with tech-focused Indian students)",
    "MSc Cyber Security Management (12-month; growing demand from Indian applicants)"
  ]
})).insertedId;

addPrograms(univ_gismabusinessschool, "GISMA BUSINESS SCHOOL", [
  {
    "level": "UG",
    "name": "Bachelor of Science in International Business Management",
    "faculty": "School of Business & Management / International Business Program",
    "duration_years": 3.0,
    "annual_fee_cad": 9750,
    "total_fee_cad": 29250,
    "min_class12_percent": 70,
    "required_subjects": [
      "English language fluency",
      "Business/economics background helpful",
      "No specific subject stream required"
    ],
    "entry_roles": [
      "Business analyst",
      "management trainee",
      "business development associate",
      "operations coordinator",
      "HR assistant",
      "market research analyst",
      "international trade specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration",
    "faculty": "School of Business & Management / Business Administration Program",
    "duration_years": 3.0,
    "annual_fee_cad": 9750,
    "total_fee_cad": 29250,
    "min_class12_percent": 70,
    "required_subjects": [
      "English language fluency",
      "Business fundamentals helpful"
    ],
    "entry_roles": [
      "Business administrator",
      "operations coordinator",
      "management assistant",
      "business development executive",
      "HR assistant",
      "finance coordinator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Analytics",
    "faculty": "School of Data & IT / Business Analytics Program",
    "duration_years": 3.0,
    "annual_fee_cad": 10500,
    "total_fee_cad": 31500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics strong background",
      "Statistics helpful",
      "Programming fundamentals beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "analytics coordinator",
      "business intelligence analyst",
      "reporting specialist",
      "financial analyst",
      "market analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Engineering",
    "faculty": "School of Engineering / Applied Engineering Program",
    "duration_years": 3.0,
    "annual_fee_cad": 11250,
    "total_fee_cad": 33750,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Technical fundamentals required"
    ],
    "entry_roles": [
      "Junior engineer",
      "design engineer",
      "project engineer",
      "systems engineer",
      "manufacturing engineer",
      "technical specialist",
      "CAD technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "School of Data & IT / Computer Science Program",
    "duration_years": 3.0,
    "annual_fee_cad": 11250,
    "total_fee_cad": 33750,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science/IT fundamentals essential"
    ],
    "entry_roles": [
      "Junior developer",
      "software developer",
      "systems programmer",
      "IT support specialist",
      "developer apprentice",
      "full-stack developer trainee"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global MBA",
    "faculty": "School of Business & Management / MBA Program",
    "duration_years": 1.0,
    "annual_fee_cad": 33750,
    "total_fee_cad": 33750,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business fundamentals helpful",
      "Leadership experience required",
      "Professional experience in any field acceptable",
      "Career progression demonstrated"
    ],
    "entry_roles": [
      "Senior manager",
      "management consultant",
      "business strategist",
      "operations director",
      "finance manager",
      "entrepreneurship/startup founder",
      "corporate strategist",
      "international business executive"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in International Business Management",
    "faculty": "School of Business & Management / International Business Master\u2019s",
    "duration_years": 1.0,
    "annual_fee_cad": 19500,
    "total_fee_cad": 19500,
    "min_class12_percent": 50,
    "required_subjects": [
      "Business fundamentals",
      "International business exposure helpful",
      "Diverse backgrounds acceptable with business foundation"
    ],
    "entry_roles": [
      "International business manager",
      "business development manager",
      "international operations manager",
      "global supply chain manager",
      "international marketing manager",
      "strategy consultant",
      "export/import specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Management",
    "faculty": "School of Business & Management / Business Management Master\u2019s",
    "duration_years": 2.0,
    "annual_fee_cad": 18150,
    "total_fee_cad": 36300,
    "min_class12_percent": 50,
    "required_subjects": [
      "Business fundamentals helpful",
      "Management theory beneficial",
      "Flexible specializations available: Finance",
      "Project Management",
      "Cybersecurity",
      "Digital Business",
      "Marketing",
      "HR",
      "No specific bachelor\u2019s discipline required"
    ],
    "entry_roles": [
      "Business manager",
      "project manager",
      "management consultant",
      "operations manager",
      "finance manager",
      "HR manager",
      "strategy analyst",
      "business development manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science, AI & Digital Business",
    "faculty": "School of Data & IT / Data Science & AI Master\u2019s",
    "duration_years": 1.0,
    "annual_fee_cad": 18150,
    "total_fee_cad": 18150,
    "min_class12_percent": 50,
    "required_subjects": [
      "Strong programming",
      "mathematics",
      "statistics",
      "algorithms essential",
      "Machine learning fundamentals beneficial",
      "Data analysis experience helpful",
      "Python/R programming required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "data engineer",
      "analytics engineer",
      "AI researcher",
      "business intelligence specialist",
      "predictive analytics specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Cyber Security Management",
    "faculty": "School of Data & IT / Cyber Security Master\u2019s",
    "duration_years": 1.0,
    "annual_fee_cad": 18150,
    "total_fee_cad": 18150,
    "min_class12_percent": 50,
    "required_subjects": [
      "IT fundamentals",
      "networking",
      "systems administration",
      "security basics",
      "Security certifications (Security+",
      "CEH) beneficial but not required",
      "Cybersecurity exposure helpful"
    ],
    "entry_roles": [
      "Security analyst",
      "security engineer",
      "penetration tester",
      "security consultant",
      "SOC analyst",
      "incident response specialist",
      "IT security manager",
      "CISO track"
    ],
    "features": []
  }
]);

// --- HUMBOLDT UNIVERSITY BERLIN ---
const univ_humboldtuniversityberlin = db.institutions.insertOne(inst({
  "name": "HUMBOLDT UNIVERSITY BERLIN",
  "abbreviation": "",
  "type": "university",
  "city": "Berlin",
  "province": "Berlin",
  "country": "Germany",
  "campuses": [
    "Berlin"
  ],
  "website": "https://www.hu-berlin.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "Contact form: https://hu.berlin/contactzula; General: studium@hu-berlin.de"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschland Stipendium (Germany Scholarship): \u20ac300/month; Merit-based for top 10\u201320% of students; Deadline: August 31"
    },
    {
      "name": "Humboldt International Student Scholarship: \u20ac895\u2013\u20ac1,800 (applied to tuition fees); Limited availability"
    },
    {
      "name": "Higher Education Scholarship Test for Indian Students (HEST 2024): Partial scholarship ~\u20ac3,198 per student"
    },
    {
      "name": "DAAD Scholarships: \u20ac992\u2013\u20ac1,400/month (Master\u2019s/PhD); Highly competitive (~10\u201315% acceptance rate)"
    },
    {
      "name": "DAAD STIBET I Scholarship (Degree Completion): \u20ac650\u2013\u20ac1,200/month; For final-year Master\u2019s/PhD students; Deadline: June 1"
    },
    {
      "name": "DAAD Hilde Domin Programme: For students at risk of educational denial in home countries"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based; Deadline varies"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "Humboldt Research Fellowship: For postdoctoral researchers and experienced researchers; \u20ac934/month+"
    },
    {
      "name": "Education Future International Scholarship: \u20ac2,132\u2013\u20ac10,600 on tuition fees"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: All student housing in verified safe residential areas (Mitte, Charlottenburg, K\u00f6penick, Lichtenberg districts); Strong international student community support",
    "clubs": "Student clubs & organizations: 150+ active groups; Debate clubs, sustainability groups, music bands, tech collectives, political forums, language tandems, sports clubs"
  },
  "security": {
    "detail": "Safety programs: Fire protection officers on campus; First aid services available; Mental health support services; Diversity officer for discrimination reporting; Crisis24 emergency support (for exchange students)"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science",
    "Master of Science in Data Science",
    "Master of Arts in Business Administration",
    "Master of Science in Physics",
    "Master of Arts in Political Science"
  ]
})).insertedId;

addPrograms(univ_humboldtuniversityberlin, "HUMBOLDT UNIVERSITY BERLIN", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Department of Computer Science (Institut f\u00fcr Informatik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK equivalent)",
      "Physics",
      "Computer Science/IT background highly beneficial"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Department of Physics (Institut f\u00fcr Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK equivalent)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst (physics background)",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Department of Mathematics (Institut f\u00fcr Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "academic researcher",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology (Biologie)",
    "faculty": "Department of Biology (Institut f\u00fcr Biologie)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry (strong)",
      "Mathematics",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Research biologist",
      "molecular biologist",
      "biotechnologist",
      "pharmaceutical researcher",
      "environmental biologist",
      "clinical researcher",
      "quality control specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in English Language & Literature",
    "faculty": "Department of English Studies (Anglistik/Amerikanistik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "English language proficiency (very strong)",
      "German B2+ beneficial for coursework"
    ],
    "entry_roles": [
      "English teacher",
      "translator",
      "journalist",
      "editor",
      "academic researcher",
      "cultural advisor",
      "communications specialist",
      "publishing professional"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Department of Computer Science (Institut f\u00fcr Informatik)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "mathematics",
      "software engineering",
      "Machine learning experience beneficial"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Department of Computer Science / Data Science Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)",
      "machine learning experience highly beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data engineer",
      "AI specialist",
      "analytics engineer",
      "data architect",
      "business intelligence analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in Business Administration",
    "faculty": "Department of Social Sciences / Business Administration Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business fundamentals helpful",
      "Management experience or internship experience beneficial",
      "Diverse educational backgrounds welcome"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "project manager",
      "operations manager",
      "business development manager",
      "entrepreneur",
      "corporate strategist",
      "HR manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physics",
    "faculty": "Department of Physics (Institut f\u00fcr Physik)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Theoretical physics",
      "quantum mechanics",
      "mathematical methods",
      "classical mechanics",
      "electromagnetism",
      "Strong mathematics foundation essential"
    ],
    "entry_roles": [
      "Theoretical physicist",
      "research scientist",
      "quantum computing engineer",
      "aerospace engineer",
      "academic researcher",
      "industrial physicist",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in Political Science",
    "faculty": "Department of Social Sciences / Political Science (Politikwissenschaft)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Political theory",
      "international relations",
      "policy analysis",
      "political systems",
      "sociology",
      "Research",
      "analytical skills essential"
    ],
    "entry_roles": [
      "Policy analyst",
      "researcher",
      "consultant (policy/international affairs)",
      "diplomat",
      "NGO manager",
      "academic researcher",
      "civil servant",
      "journalist"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF ERLANGEN-NUREMBERG ---
const univ_universityoferlangennuremberg = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF ERLANGEN-NUREMBERG",
  "abbreviation": "FAU",
  "type": "university",
  "city": "Erlangen (with additional campus in Nuremberg)",
  "province": "Germany State",
  "country": "Germany",
  "campuses": [
    "Erlangen (with additional campus in Nuremberg)"
  ],
  "website": "https://www.fau.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "zulassungsstelle@fau.de",
      "phone": "+49 9131 85-22023 (General admissions inquiries); Direct line: +49 9131 85-22067",
      "address": "Halbmondstra\u00dfe 6-8, Room 00.030 & 00.031 (ground floor), 91054 Erlangen"
    },
    "international_students": {
      "website": "Funding for international students with excellent grades + outstanding social/intercultural commitment; Application via International Office"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; Deadline: Varies (typically December\u2013January for next WS); ~300\u2013500 scholarships available annually at FAU; Application info: https://www.baf\u00f6g.de/bafoeg/en/index.html"
    },
    {
      "name": "FAU Germany Scholarship (Deutschlandstipendium by FAU): \u20ac300/month (\u20ac3,600 total per year for 2 semesters); Renewable annually; Merit + need-based; Application deadline varies (typically January for next winter semester); Grants to top-performing students"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac934\u2013\u20ac1,400+/month; Highly competitive; Covers tuition, living stipend, insurance; For development-related programs"
    },
    {
      "name": "DAAD Graduation Scholarship (Abschlussf\u00f6rderung): \u20ac1,000 one-time payment; For international students in final semester; Application deadline: November 21, 2025 (for next cycle)"
    },
    {
      "name": "DAAD Merit Scholarship: Funding for international students with excellent grades + outstanding social/intercultural commitment; Application via International Office"
    },
    {
      "name": "DAAD Equal Opportunity Scholarship: Support for international students facing special social challenges (refugee background, health restrictions, care obligations); 4-month funding for fall semester only; 2026 application: August\u2013September"
    },
    {
      "name": "DAAD Development-Oriented Postgraduate Courses (EPOS): Funding for Master\u2019s in development-related fields"
    },
    {
      "name": "Friedrich-Naumann-Stiftung Scholarship: For international students pursuing Master\u2019s/PhD"
    },
    {
      "name": "PROMOS Scholarship: Partial funding for study abroad, internships, language courses, thesis abroad; Deadlines: January, June, December"
    },
    {
      "name": "ERASMUS+ Scholarship: For exchange students; Grants vary (~\u20ac300\u2013\u20ac350/month)"
    },
    {
      "name": "Bavarian State Scholarship (Free State of Bavaria): Limited funding; Check availability"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Erlangen (safe area); Student housing in verified safe residential areas; Erlangen & Nuremberg considered safe cities for study; International community strong support networks",
    "clubs": "Student clubs & organizations: 150+ active clubs; Engineering societies, international associations, sports clubs, tech clubs; Student Union (AStA) active; Cultural events; Debate societies"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures documented; Fire evacuation protocols; Mental health support services (Psychological Counseling Center); Diversity & inclusion initiatives; International student mentoring; LGBTQ+ support available; Accessible campus initiatives"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computational Engineering (English-taught; very popular with Indian students)",
    "Master of Science in Mechanical Engineering (German-taught; research-focused)",
    "Master of Science in Informatik/Computer Science (German-taught)",
    "Master of Science in Mechatronics (English and German-taught options)",
    "Master of Science in Communications & Multimedia Engineering (English-taught)"
  ]
})).insertedId;

addPrograms(univ_universityoferlangennuremberg, "UNIVERSITY OF ERLANGEN-NUREMBERG", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering (Maschinenbau)",
    "faculty": "Faculty of Engineering / Department of Mechanical Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Engineering fundamentals",
      "Pre-study internship may be required (verify program)"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal systems engineer",
      "robotics engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering (Elektrotechnik)",
    "faculty": "Faculty of Engineering / Department of Electrical & Computer Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical background"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "electronics designer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Faculty of Engineering / Department of Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science background helpful"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Faculty of Science / Department of Physics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Faculty of Science / Department of Mathematics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computational Engineering (CE)",
    "faculty": "Faculty of Engineering / Computational Engineering Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "linear algebra",
      "numerical mathematics",
      "Machine learning/AI experience beneficial",
      "Engineering + CS background essential"
    ],
    "entry_roles": [
      "Computational engineer",
      "software engineer",
      "data scientist",
      "systems engineer",
      "R&D specialist",
      "research scientist",
      "technical consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering",
    "faculty": "Faculty of Engineering / Department of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Mechanical engineering fundamentals",
      "Specializations available: General Mechanical Engineering (AMB)",
      "Manufacturing Technology (FT)",
      "Computer-aided product development (RPE)",
      "International Production Engineering & Management (IP)"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "manufacturing engineer",
      "automotive engineer",
      "design engineer",
      "R&D specialist",
      "project manager",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Informatik (Computer Science)",
    "faculty": "Faculty of Engineering / Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "AI/ML experience beneficial",
      "NOTE: NOT an international degree program",
      "primarily taught in German"
    ],
    "entry_roles": [
      "Software engineer",
      "systems architect",
      "IT consultant",
      "data scientist",
      "research scientist",
      "technical lead"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechatronics",
    "faculty": "Faculty of Engineering / Department of Electrical & Mechanical Engineering (Joint)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mechanical engineering + electrical engineering fundamentals",
      "Robotics",
      "automation",
      "embedded systems experience beneficial"
    ],
    "entry_roles": [
      "Mechatronics engineer",
      "robotics engineer",
      "automation engineer",
      "embedded systems engineer",
      "R&D specialist",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Communications & Multimedia Engineering",
    "faculty": "Faculty of Engineering / Department of Electrical & Computer Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Signal processing",
      "communications theory",
      "multimedia systems",
      "digital systems",
      "Advanced mathematics in electrical engineering",
      "Programming experience beneficial"
    ],
    "entry_roles": [
      "Communications engineer",
      "signal processing specialist",
      "multimedia systems engineer",
      "R&D specialist",
      "systems engineer",
      "technical consultant"
    ],
    "features": []
  }
]);

// --- IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCES ---
const univ_iuinternationaluniversityofappliedsciences = db.institutions.insertOne(inst({
  "name": "IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCES",
  "abbreviation": "",
  "type": "university",
  "city": "",
  "province": "Germany State",
  "country": "Germany",
  "campuses": [
    ""
  ],
  "website": "https://www.iu.org",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "admission-international@iu.org",
      "phone": "+49 30 2089868-10 (International Admissions \u2013 Berlin)",
      "address": "Frankfurter Allee 73a, 10247 Berlin, Germany (Main international admission office)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "IU Scholarship (Internal) \u2013 Merit-Based: Variable amounts; For high-performing students (typically top 10\u201320%); Tuition fee reduction for entire program duration; Application deadline: February 15 annually; Must sign study contract within 30 days of acceptance OR scholarship expires; Renewable annually based on performance"
    },
    {
      "name": "IU Job Guarantee Scholarship (for Master\u2019s Tech Programs): Special offer for on-campus Master\u2019s in Computer Science, Cyber Security, Data Science, Artificial Intelligence; If no job within 18 months post-graduation (with 2.5+ GPA, B2 German, 300+ internship hours, employability training completion), full tuition refunded"
    },
    {
      "name": "IU Partial Scholarships: Up to 50% tuition reduction for qualified applicants; Varies by program and financial need"
    },
    {
      "name": "DAAD Scholarships: \u20ac934\u2013\u20ac1,400+/month (for Master\u2019s/PhD); Highly competitive; Covers tuition, living stipend, health insurance; Application via DAAD database"
    },
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; Limited availability; Deadline varies (typically December\u2013January for next WS)"
    },
    {
      "name": "Pay in full discount: 10% discount for upfront annual/full-program payment"
    },
    {
      "name": "Yearly payment discount: 2% discount"
    },
    {
      "name": "Monthly installment plans: Flexible payment spread available (no interest surcharge)"
    },
    {
      "name": "Accepted payment methods: Credit card (Flywire), Bank transfer (Flywire), SEPA Direct Debit (EU residents only)"
    },
    {
      "name": "Education loans/BAf\u00f6G: Available for eligible students; employer financing options available"
    }
  ],
  "internships": {
    "part_time_work": "Job approval: Part-time employment does NOT require work permit for standard jobs; Career Services assists with job placement; Internships and thesis work with industry partners usually covered",
    "employment_rate_percent": 94
  },
  "campus_life": {
    "housing": "Safe neighborhoods: IU Berlin campus in Friedrichshain (vibrant, safe district); Student housing in verified safe residential areas; Berlin generally safe for international students; Excellent public transport (safe late-night travel); International student community strong support networks; Low crime rate in student residential areas",
    "clubs": "Student clubs & organizations: 150+ active clubs; Tech clubs, entrepreneurship societies, cultural associations, sports clubs, international student associations; Student-led activities and events"
  },
  "security": {
    "detail": "2.Master of Science in Cyber Security (120 ECTS, English-taught; lucrative field)"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science (120 ECTS, English-taught; highly popular)",
    "Master of Science in Cyber Security (120 ECTS, English-taught; lucrative field)",
    "Master of Science in Data Science (120 ECTS, English-taught; Job Guarantee available)",
    "Master of Science in Artificial Intelligence (120 ECTS, English-taught; Job Guarantee available)",
    "Master of Science in Engineering Management (120 ECTS, English-taught; management focus)"
  ]
})).insertedId;

addPrograms(univ_iuinternationaluniversityofappliedsciences, "IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCES", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "School of Data & IT / Computer Science Program",
    "duration_years": 3.0,
    "annual_fee_cad": 10800,
    "total_fee_cad": 32400,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science fundamentals helpful",
      "Entrance examination or Pathway program REQUIRED"
    ],
    "entry_roles": [
      "Software developer",
      "junior developer",
      "full-stack developer",
      "systems engineer",
      "IT consultant",
      "data analyst",
      "QA engineer",
      "technical support specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Cyber Security",
    "faculty": "School of Data & IT / Cyber Security Program",
    "duration_years": 3.0,
    "annual_fee_cad": 10800,
    "total_fee_cad": 32400,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science/IT fundamentals",
      "Entrance examination or Pathway REQUIRED"
    ],
    "entry_roles": [
      "Security analyst",
      "security engineer",
      "penetration tester",
      "incident response specialist",
      "security consultant",
      "IT security officer",
      "vulnerability analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Applied Artificial Intelligence",
    "faculty": "School of Data & IT / Applied AI Program",
    "duration_years": 3.0,
    "annual_fee_cad": 10800,
    "total_fee_cad": 32400,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science",
      "Statistics beneficial",
      "Entrance examination or Pathway REQUIRED"
    ],
    "entry_roles": [
      "AI developer",
      "machine learning engineer",
      "data scientist",
      "AI consultant",
      "AI research associate",
      "neural network specialist",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
    "faculty": "School of Business & Management / Business Administration Program",
    "duration_years": 3.0,
    "annual_fee_cad": 9000,
    "total_fee_cad": 27000,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics helpful",
      "Business/economics background beneficial",
      "Entrance examination or Pathway REQUIRED"
    ],
    "entry_roles": [
      "Business analyst",
      "management trainee",
      "HR assistant",
      "operations coordinator",
      "business development associate",
      "sales representative",
      "finance analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Cloud Computing",
    "faculty": "School of Data & IT / Cloud Computing Program",
    "duration_years": 3.0,
    "annual_fee_cad": 10800,
    "total_fee_cad": 32400,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science fundamentals",
      "Entrance examination or Pathway REQUIRED"
    ],
    "entry_roles": [
      "Cloud engineer",
      "cloud architect",
      "DevOps engineer",
      "systems administrator",
      "cloud solutions specialist",
      "infrastructure engineer",
      "IT operations analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "School of Data & IT / Computer Science Master\u2019s",
    "duration_years": 2.0,
    "annual_fee_cad": 14400,
    "total_fee_cad": 28800,
    "min_class12_percent": 66,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "Machine learning/AI experience beneficial",
      "Flexible specializations available (Web Development",
      "AI",
      "Cloud",
      "Distributed Systems",
      "Software Engineering",
      "Big Data)"
    ],
    "entry_roles": [
      "Software architect",
      "senior developer",
      "systems engineer",
      "lead developer",
      "technical consultant",
      "R&D specialist",
      "tech lead",
      "research scientist",
      "AI/ML specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Cyber Security",
    "faculty": "School of Data & IT / Cyber Security Master\u2019s",
    "duration_years": 2.0,
    "annual_fee_cad": 14400,
    "total_fee_cad": 28800,
    "min_class12_percent": 30,
    "required_subjects": [
      "IT security fundamentals",
      "networking",
      "systems administration",
      "cryptography knowledge beneficial",
      "Security certifications (Security+",
      "CEH) helpful but not required"
    ],
    "entry_roles": [
      "Security architect",
      "senior security engineer",
      "penetration testing specialist",
      "security consultant",
      "incident response manager",
      "security operations center (SOC) lead",
      "chief information security officer (CISO) track"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "School of Data & IT / Data Science Master\u2019s",
    "duration_years": 2.0,
    "annual_fee_cad": 14400,
    "total_fee_cad": 28800,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong statistics",
      "mathematics",
      "programming (Python/R)",
      "machine learning fundamentals",
      "Data analysis experience beneficial",
      "SQL/databases knowledge helpful"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "analytics engineer",
      "data architect",
      "business intelligence specialist",
      "data engineer",
      "AI/ML researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Artificial Intelligence",
    "faculty": "School of Data & IT / Artificial Intelligence Master\u2019s",
    "duration_years": 2.0,
    "annual_fee_cad": 14400,
    "total_fee_cad": 28800,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "machine learning fundamentals",
      "neural networks",
      "mathematics",
      "Deep learning",
      "computer vision experience beneficial",
      "AI projects or certifications helpful"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning researcher",
      "AI architect",
      "neural network specialist",
      "AI consultant",
      "robotics engineer",
      "research scientist",
      "deep learning engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Engineering Management",
    "faculty": "School of Data & IT / Engineering Management Master\u2019s",
    "duration_years": 2.0,
    "annual_fee_cad": 12600,
    "total_fee_cad": 25200,
    "min_class12_percent": 30,
    "required_subjects": [
      "Engineering fundamentals",
      "project management basics",
      "business acumen",
      "Management certifications (PMP",
      "PRINCE2) beneficial",
      "Leadership experience helpful"
    ],
    "entry_roles": [
      "Engineering manager",
      "project manager",
      "program manager",
      "technical project lead",
      "operations manager",
      "production manager",
      "plant manager",
      "supply chain manager"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF FREIBURG ---
const univ_universityoffreiburg = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF FREIBURG",
  "abbreviation": "ALBERT-LUDWIGS-UNIVERSIT\u00c4T FREIBURG",
  "type": "university",
  "city": "Freiburg (Breisgau)",
  "province": "Germany State",
  "country": "Germany",
  "campuses": [
    "Freiburg (Breisgau)"
  ],
  "website": "https://www.uni-freiburg.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "studium@uni-freiburg.de",
      "phone": "+49 761 203-4246 (Central admissions hotline); +49 761 203-8907 (Application & Admission Team)",
      "address": "University of Freiburg, Rectorat, Fahnenbergplatz, 79085 Freiburg"
    },
    "international_students": {
      "website": "International Office, University of Freiburg, Fahnenbergplatz, 79085 Freiburg"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; Deadline: August/September each year"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac992\u2013\u20ac1,400/month; Highly competitive (~10\u201315% acceptance rate); Covers tuition, living stipend, health insurance, travel allowance"
    },
    {
      "name": "DAAD STIBET I Scholarship (Degree Completion): \u20ac250\u2013\u20ac861/month (10-month grant); For international Master\u2019s/PhD students in final year"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "Baden-W\u00fcrttemberg Scholarship: \u20ac800/month; For international Master\u2019s students (minimum 3\u20139 months)"
    },
    {
      "name": "NOTE: University of Freiburg does NOT offer scholarships specifically for international undergraduate students; Tuition fees apply (\u20ac1,500/semester for non-EU students)"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 87
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus located in central Freiburg (safe); All student housing in verified safe residential areas; Freiburg generally safe city for study; International student community support networks; Buddy programs available; APIS program for non-EU students (language courses, job application training, integration)",
    "clubs": "Student clubs & organizations: 150+ active groups; Debate clubs, sustainability groups, tech collectives, political forums, language tandems, sports clubs, international societies; Student Union (StuRa) organizes events"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures documented; Fire evacuation protocols; First aid services; Mental health support services; Diversity officer for discrimination reporting; Crisis24 support; Accessible campus initiatives; Intercultural mentoring for international students"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Renewable Energy Engineering and Management (English-taught; highly specialized)",
    "Master of Science in Computer Science (English & German-taught)",
    "Master of Science in Embedded Systems Engineering (English-taught)",
    "Master of Science in Microsystems Engineering (English-taught; world-leading MEMS program)",
    "Master of Science in Environmental Sciences (English-taught)"
  ]
})).insertedId;

addPrograms(univ_universityoffreiburg, "UNIVERSITY OF FREIBURG", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Faculty of Computer Science and Engineering (Informatik & Technik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Computer Science/IT background highly beneficial"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Faculty of Mathematics and Physics (Institut f\u00fcr Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst (physics background)",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Environmental Sciences (Umweltwissenschaften)",
    "faculty": "Faculty of Environment and Natural Resources (Umweltwissenschaften)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry (strong)",
      "Mathematics",
      "Environmental Science/Geography beneficial"
    ],
    "entry_roles": [
      "Environmental scientist",
      "sustainability specialist",
      "environmental consultant",
      "researcher",
      "policy analyst",
      "conservation specialist",
      "geographic analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology (Biologie)",
    "faculty": "Faculty of Biology (Institut f\u00fcr Biologie)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry (strong)",
      "Mathematics",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Research biologist",
      "molecular biologist",
      "biotechnologist",
      "pharmaceutical researcher",
      "environmental biologist",
      "clinical researcher",
      "quality control specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Faculty of Mathematics and Physics (Institut f\u00fcr Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "academic researcher",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Renewable Energy Engineering and Management (REM)",
    "faculty": "Faculty of Environment and Natural Resources / Department of Renewable Energy Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong physics",
      "mathematics",
      "engineering fundamentals",
      "Renewable energy/sustainability experience beneficial"
    ],
    "entry_roles": [
      "Renewable energy engineer",
      "energy consultant",
      "sustainability specialist",
      "project manager",
      "systems engineer",
      "policy analyst",
      "technical specialist",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Faculty of Computer Science and Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "mathematics",
      "software engineering",
      "Machine learning/AI experience beneficial"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Embedded Systems Engineering",
    "faculty": "Faculty of Engineering / Department of Embedded Systems",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Digital design",
      "microprocessors",
      "embedded systems",
      "real-time systems",
      "control systems",
      "Electronics/hardware experience beneficial"
    ],
    "entry_roles": [
      "Embedded systems engineer",
      "firmware engineer",
      "hardware engineer",
      "systems designer",
      "IoT specialist",
      "automotive engineer",
      "technical consultant",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Microsystems Engineering",
    "faculty": "Faculty of Engineering / IMTEK (Institute for Microsystems Engineering)",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "MEMS (Micro-Electro-Mechanical Systems)",
      "microfabrication",
      "materials science",
      "microsensors/microactuators",
      "Physics/materials strong background"
    ],
    "entry_roles": [
      "Microsystems engineer",
      "MEMS specialist",
      "sensors engineer",
      "process engineer",
      "product engineer",
      "systems engineer",
      "research scientist",
      "technical consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Environmental Sciences",
    "faculty": "Faculty of Environment and Natural Resources (Umweltwissenschaften)",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Environmental management",
      "ecology",
      "sustainability",
      "climate science",
      "environmental policy",
      "Field research experience beneficial"
    ],
    "entry_roles": [
      "Environmental scientist",
      "sustainability consultant",
      "policy analyst",
      "conservation specialist",
      "researcher",
      "environmental engineer",
      "GIS specialist",
      "project manager"
    ],
    "features": []
  }
]);

// --- HEIDELBERG UNIVERSITY ---
const univ_heidelberguniversity = db.institutions.insertOne(inst({
  "name": "HEIDELBERG UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Heidelberg",
  "province": "Baden-W\u00fcrttemberg",
  "country": "Germany",
  "campuses": [
    "Heidelberg"
  ],
  "website": "https://www.uni-heidelberg.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "studium@uni-heidelberg.de",
      "phone": "+49 6221 54-5454 (Main admissions line); +49 6221 54-12723, +49 6221 54-12720 (International student advisors)",
      "address": "Seminarstra\u00dfe 2, 69117 Heidelberg, Germany (Office hours: Tue 10 AM\u201312 PM in-person no appointment needed; Fri 10 AM\u201312 PM online; Wed 1:30 PM\u20133:30 PM online)"
    },
    "international_students": {
      "website": "+49 6221 54-12739 (International Office)"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Germany Scholarship \u201cDeutschlandstipendium\u201d: \u20ac300/month; Merit-based; For gifted students; Deadline: August 31 (approx.)"
    },
    {
      "name": "Hans-Peter Wild Talent Scholarship: For prospective MINT (Science, Technology, Engineering, Mathematics) first-year students"
    },
    {
      "name": "STIBET Completion Grants (DAAD): \u20ac650-\u20ac1,033/month; For international students in final year; Deadline: June 1"
    },
    {
      "name": "Equal Opportunity Scholarship (DAAD STIBET I): \u20ac650-\u20ac1,033/month; For students with disabilities, chronic illness, or refugee background"
    },
    {
      "name": "Amirana Scholarship: For international medical/dental students from low/middle-income countries facing financial hardship"
    },
    {
      "name": "DAAD Master\u2019s Study Scholarships: \u20ac934/month; Highly competitive (~10-15%)"
    },
    {
      "name": "DAAD EPOS Program: \u20ac883\u2013\u20ac1,200/month; Sustainability & development focus"
    },
    {
      "name": "DAAD PROMOS: Partial scholarships for academic stays abroad; Deadline: March 15, 2026"
    },
    {
      "name": "DAAD Hilde Domin Programme: For students at risk of educational denial in home countries"
    },
    {
      "name": "HAUS Scholarship (US students): $4,500\u2013$7,000 per semester"
    },
    {
      "name": "Robert E. Schmidt Foundation: For students from Romance countries attending summer/winter schools"
    },
    {
      "name": "Katharina Eleonore Wallot Foundation: For gifted German female students in financial need"
    },
    {
      "name": "Baden-W\u00fcrttemberg Stipendium: For students affected by Ukraine war"
    },
    {
      "name": "ERASMUS+ Scholarships: For European exchange students"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: All student housing located in verified safe residential areas; Strong community support systems",
    "clubs": "Student clubs & organizations: 150+ active groups; Sports clubs (affiliated with ZHS Heidelberg sports center), cultural organizations, volunteer groups, hobby-based clubs, academic societies"
  },
  "security": {
    "detail": "Campus partnerships: Coordinated with Heidelberg police; University Hospital security partnerships; Occupational safety program"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Molecular Biotechnology",
    "Master of Science in Physics",
    "Master of Science in Data and Computer Science",
    "Master of Science in Medical Physics",
    "Master of Science in Biochemistry"
  ]
})).insertedId;

addPrograms(univ_heidelberguniversity, "HEIDELBERG UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics",
    "faculty": "Faculty of Physics and Astronomy",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (very strong A-level/LK equivalent)",
      "Physics",
      "Chemistry/related science beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst (physics background)",
      "software engineer",
      "university researcher",
      "technical consultant",
      "industrial physicist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemistry and Biochemistry",
    "faculty": "Faculty of Chemistry and Pharmacy (Chemie und Pharmazie)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry (very strong)",
      "Mathematics",
      "Physics",
      "Biology optional but helpful"
    ],
    "entry_roles": [
      "Research chemist",
      "pharmaceutical chemist",
      "analytical chemist",
      "quality assurance specialist",
      "materials scientist",
      "chemical engineer",
      "industrial chemist",
      "laboratory manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology / Molecular Biology",
    "faculty": "Faculty of Biosciences (Biologie)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry (strong)",
      "Mathematics",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Research biologist",
      "molecular biologist",
      "biotechnologist",
      "pharmaceutical researcher",
      "environmental biologist",
      "clinical researcher",
      "quality control specialist",
      "genetic counselor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics",
    "faculty": "Faculty of Mathematics and Computer Science (Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (A-level/LK very strong)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "actuarian",
      "research mathematician",
      "systems analyst",
      "academic researcher",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "State Examination in Medicine (Staatsexamen Medizin)",
    "faculty": "Medical Faculty Heidelberg (Medizinische Fakult\u00e4t)",
    "duration_years": 6.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 27000,
    "min_class12_percent": 90,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (all strong)",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Licensed medical doctor (after passing state examination)",
      "Resident physician (Assistenzarzt)",
      "Hospital doctor",
      "General practitioner",
      "Specialization options (Surgery",
      "Internal Medicine",
      "Pediatrics",
      "Psychiatry",
      "Radiology",
      "etc.)",
      "Research scientist",
      "Public health officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Molecular Biotechnology",
    "faculty": "Faculty of Biosciences / Graduate School for Molecular and Cellular Biotechnology",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong coursework in molecular biology",
      "biochemistry",
      "cell biology",
      "genetics",
      "chemistry",
      "mathematics/statistics"
    ],
    "entry_roles": [
      "Research biotechnologist",
      "pharmaceutical researcher",
      "molecular biologist",
      "biotech company scientist",
      "quality assurance manager (pharmaceutical)",
      "genetic research scientist",
      "clinical researcher",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physics",
    "faculty": "Faculty of Physics and Astronomy",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong coursework in theoretical physics",
      "quantum mechanics",
      "mathematics",
      "classical mechanics",
      "electromagnetism"
    ],
    "entry_roles": [
      "Theoretical physicist",
      "research scientist",
      "quantum computing engineer",
      "aerospace engineer",
      "academic researcher",
      "industrial physicist",
      "data scientist (physics background)",
      "software engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data and Computer Science",
    "faculty": "Faculty of Mathematics and Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python",
      "Java",
      "C++)",
      "Machine learning experience beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "software engineer",
      "data engineer",
      "AI specialist",
      "analytics engineer",
      "research scientist",
      "database engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Medical Physics",
    "faculty": "Faculty of Physics and Medical Faculty (Jointly offered)",
    "duration_years": 3.0,
    "annual_fee_cad": 7500,
    "total_fee_cad": 22500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Medical physics",
      "radiation physics",
      "medical imaging",
      "biophysics",
      "Strong mathematics",
      "programming skills"
    ],
    "entry_roles": [
      "Medical physicist",
      "radiation oncologist (with clinical training)",
      "medical device engineer",
      "healthcare technology specialist",
      "research scientist (medical physics)",
      "hospital physicist",
      "clinical engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Biochemistry",
    "faculty": "Faculty of Chemistry and Pharmacy / Department of Biochemistry",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Biochemistry",
      "organic chemistry",
      "analytical chemistry",
      "biology",
      "molecular biology",
      "protein chemistry",
      "enzymology"
    ],
    "entry_roles": [
      "Research biochemist",
      "pharmaceutical biochemist",
      "analytical chemist",
      "enzyme engineer",
      "drug development scientist",
      "quality control specialist",
      "academic researcher",
      "biotech scientist"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF BONN ---
const univ_universityofbonn = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF BONN",
  "abbreviation": "",
  "type": "university",
  "city": "Bonn",
  "province": "North Rhine-Westphalia",
  "country": "Germany",
  "campuses": [
    "Bonn"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "Contact by program-specific phone lines (see below)",
      "phone": "Surname A\u2013G: +49 228 73-3915; Surname H\u2013O: +49 228 73-7655; Surname P\u2013Z: +49 228 73-7275 (Student Registry); General inquiries: +49 228 73-0",
      "address": "Poppelsdorfer Allee 49 (2nd floor), 53115 Bonn"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; Deadline: April/Spring"
    },
    {
      "name": "Degree Completion Scholarship: \u20ac300/month (up to \u20ac934 in individual cases if not eligible for BAf\u00f6G); For international students in final year; Deadline: September 1"
    },
    {
      "name": "Equal Opportunity Scholarship: \u20ac300\u2013\u20ac934/month; For international students facing special challenges (refugee background, disability, family support); Deadline: September 1"
    },
    {
      "name": "DAAD-STIBET I Scholarship (Global Exchange Program): \u20ac650/month; For exchange students in final year; Via partner university nomination"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac934\u2013\u20ac1,400+/month; Highly competitive; Covers tuition, living stipend, insurance; Deadline varies by program"
    },
    {
      "name": "DAAD EPOS (Development-Related Postgraduate Courses): \u20ac992\u2013\u20ac1,200+/month; For Master\u2019s/PhD in development-related fields; Deadline varies (typically November 30 for winter intake)"
    },
    {
      "name": "Lie\u00dfem Scholarship: \u20ac300/month (\u20ac3,600/year); For talented students with Bonn/Rhein-Sieg region residence requirement"
    },
    {
      "name": "Aufstiegsstipendium: For professionals with vocational qualifications completing first university degree"
    },
    {
      "name": "Bayer Foundation Fellowships: For Master\u2019s, PhD, medical students"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "PROMOS Scholarships: Partial scholarships for mobility (study abroad, language courses); Deadline: January 5 (summer projects), June/December (winter projects)"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Bonn (safe area); All student housing in verified safe residential areas; Bonn is generally a safe city for study; Strong international community support networks; NRWege ins Studium support for refugee-background students",
    "clubs": "Student clubs & organizations: 150+ active groups; Debate, international associations, sports clubs, political forums; Student Union active"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures; Fire evacuation protocols; Mental health support; Diversity & inclusion officer; International student mentoring programs; Occupational Safety and Environmental Protection Unit; First aid services; Accessible campus initiatives"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science (English-taught)",
    "Master of Science in Physics (German-taught)",
    "Master of Science in Mathematics (German-taught)",
    "Master of Science in Immunobiology / Global Health (English-taught)",
    "Master of Science in Chemistry (German-taught)"
  ]
})).insertedId;

addPrograms(univ_universityofbonn, "UNIVERSITY OF BONN", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Department of Physics (Institut f\u00fcr Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Department of Computer Science (Institut f\u00fcr Informatik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Computer Science background helpful"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Department of Mathematics (Institut f\u00fcr Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemistry (Chemie)",
    "faculty": "Department of Chemistry (Institut f\u00fcr Chemie)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry (strong)",
      "Mathematics",
      "Physics",
      "Lab experience beneficial"
    ],
    "entry_roles": [
      "Research chemist",
      "analytical chemist",
      "pharmaceutical chemist",
      "quality assurance specialist",
      "materials scientist",
      "industrial chemist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Molecular Biomedicine (Molekulare Biomedizin)",
    "faculty": "Department of Biology / Molecular Biomedicine Program",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry (strong)",
      "Mathematics",
      "Biochemistry/molecular biology background beneficial"
    ],
    "entry_roles": [
      "Research biologist",
      "molecular biologist",
      "biotechnologist",
      "pharmaceutical researcher",
      "clinical researcher",
      "quality assurance specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Department of Computer Science (Institut f\u00fcr Informatik)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "theoretical computer science",
      "Machine learning/AI experience highly beneficial"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "systems engineer",
      "data scientist",
      "DevOps specialist",
      "technical lead",
      "research scientist",
      "AI/ML engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physics",
    "faculty": "Department of Physics (Institut f\u00fcr Physik)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Theoretical/experimental physics",
      "quantum mechanics",
      "thermodynamics",
      "mathematics strong background",
      "Research experience beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data scientist",
      "aerospace engineer",
      "academic researcher",
      "industrial physicist",
      "technical consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mathematics",
    "faculty": "Department of Mathematics (Institut f\u00fcr Mathematik)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong theoretical mathematics",
      "algebra",
      "analysis",
      "applied mathematics",
      "Research experience in mathematics beneficial"
    ],
    "entry_roles": [
      "Research mathematician",
      "data scientist",
      "academic researcher",
      "systems analyst",
      "mathematical consultant",
      "software engineer (mathematics background)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Immunobiology",
    "faculty": "LIMES Institute (Life Imaging and Experimental Models in Science) / Department of Immunobiology",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong biology",
      "biochemistry",
      "molecular biology",
      "immunology",
      "Research experience in life sciences beneficial",
      "Medical/biotech background advantageous"
    ],
    "entry_roles": [
      "Research scientist (immunology)",
      "pharmaceutical researcher",
      "biomedical scientist",
      "clinical researcher",
      "quality assurance specialist",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Chemistry",
    "faculty": "Department of Chemistry (Institut f\u00fcr Chemie)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Organic",
      "inorganic",
      "physical chemistry strong background",
      "Analytical chemistry",
      "biochemistry beneficial",
      "Lab experience essential"
    ],
    "entry_roles": [
      "Research chemist",
      "analytical chemist",
      "pharmaceutical chemist",
      "materials scientist",
      "process engineer",
      "quality assurance specialist",
      "academic researcher"
    ],
    "features": []
  }
]);

// --- TECHNICAL UNIVERSITY OF MUNICH ---
const univ_technicaluniversityofmunich = db.institutions.insertOne(inst({
  "name": "TECHNICAL UNIVERSITY OF MUNICH",
  "abbreviation": "TUM",
  "type": "university",
  "city": "Munich",
  "province": "Bavaria",
  "country": "Germany",
  "campuses": [
    "Munich"
  ],
  "website": "https://www.tum.de",
  "application_portal": "campus.tum.de / TUMonline",
  "contacts": {
    "admissions": {
      "email": "studium@tum.de",
      "phone": "+49 89 289 22245",
      "address": "Arcisstra\u00dfe 21, Room 0144, 80333 Munich"
    },
    "international_students": {
      "website": "international.tum.de"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Available: Yes"
    },
    {
      "name": "Amount: \u20ac500 \u2013 \u20ac1,800 per semester (one-time aid, reapplicable)"
    },
    {
      "name": "Eligibility: Enrolled from 3rd semester (Bachelor\u2019s) or 2nd semester (Master\u2019s); non-BAf\u00f6G eligible students"
    },
    {
      "name": "Application deadline: November 15 (for spring) / May 15 (for fall)"
    },
    {
      "name": "Available: Yes"
    },
    {
      "name": "Coverage: Fully funded (tuition, living expenses, travel allowance, health insurance)"
    },
    {
      "name": "Competitiveness: ~10\u201315% acceptance rate; highly selective"
    },
    {
      "name": "Restrictions: Cannot combine with other German scholarships"
    },
    {
      "name": "Note: ~287 scholarships awarded annually to Indian students across Germany"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Student housing: 7,800+ dorm rooms across Munich (safe residences; average rent \u20ac280/month)",
    "clubs": "Student clubs: 120+ initiatives (Formula Student, cultural groups, volunteer organizations, ESN TUMi)"
  },
  "security": {
    "detail": "Partnerships: Munich police coordination; facility management 24-hour emergency service"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Data Engineering and Analytics",
    "Master of Science in Informatics",
    "Master of Science in Mechanical Engineering",
    "Master of Science in Automotive Engineering",
    "Master of Science in Management"
  ]
})).insertedId;

addPrograms(univ_technicaluniversityofmunich, "TECHNICAL UNIVERSITY OF MUNICH", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Informatics",
    "faculty": "TUM School of Computation, Information and Technology (CIT)",
    "duration_years": 3.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science background"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "IT consultant",
      "data analyst",
      "software architect"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "TUM School of Engineering and Design (ED) \u2013 Department of Mechanical Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 9000,
    "total_fee_cad": 27000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "Mathematics",
      "preferably technical/engineering subjects"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "thermal systems engineer",
      "automotive engineer",
      "manufacturing engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Engineering Science",
    "faculty": "TUM School of Engineering and Design (ED)",
    "duration_years": 3.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (A-level/LK recommended)",
      "Physics",
      "preferably Chemistry or related science"
    ],
    "entry_roles": [
      "Systems engineer",
      "research scientist",
      "process engineer",
      "technical consultant",
      "energy systems specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology",
    "faculty": "TUM School of Engineering and Design (ED) \u2013 Electrical Engineering Department",
    "duration_years": 3.0,
    "annual_fee_cad": 9000,
    "total_fee_cad": 27000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Electronics background preferred"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "electronics design engineer",
      "automation engineer",
      "embedded systems developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Aerospace",
    "faculty": "TUM School of Engineering and Design (ED) \u2013 Aerospace Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 6000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "preferably technical subjects"
    ],
    "entry_roles": [
      "Aerospace engineer",
      "aircraft design specialist",
      "aerodynamics engineer",
      "avionics engineer",
      "propulsion engineer",
      "systems integration engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Engineering and Analytics",
    "faculty": "TUM School of Computation, Information and Technology (CIT)",
    "duration_years": 2.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 36000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong coursework in Data Structures",
      "Algorithms",
      "Linear Algebra",
      "Mathematics",
      "Statistics"
    ],
    "entry_roles": [
      "Data engineer",
      "data scientist",
      "machine learning engineer",
      "analytics engineer",
      "big data architect",
      "database engineer",
      "business intelligence analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Informatics",
    "faculty": "TUM School of Computation, Information and Technology (CIT) \u2013 Department of Informatics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Programming",
      "Algorithms",
      "Data Structures",
      "Mathematics",
      "theoretical computer science"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud engineer",
      "DevOps specialist",
      "security engineer",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering",
    "faculty": "TUM School of Engineering and Design (ED) \u2013 Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 36000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Thermodynamics",
      "Fluid Mechanics",
      "Materials Science",
      "Technical Mechanics",
      "Control Engineering",
      "Heat Transfer"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "automotive engineer",
      "manufacturing engineer",
      "robotics engineer",
      "process engineer",
      "technical project manager",
      "research engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Automotive Engineering",
    "faculty": "TUM School of Engineering and Design (ED) \u2013 Automotive Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 18000,
    "total_fee_cad": 36000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engine Technology",
      "Drive Systems",
      "Vehicle Dynamics",
      "powertrain systems",
      "or equivalent automotive-focused coursework"
    ],
    "entry_roles": [
      "Automotive design engineer",
      "powertrain engineer",
      "vehicle dynamics engineer",
      "EV/hybrid systems engineer",
      "manufacturing engineer",
      "systems integration engineer",
      "technical project manager",
      "research engineer (autonomous vehicles",
      "electromobility)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management",
    "faculty": "TUM School of Management",
    "duration_years": 2.0,
    "annual_fee_cad": 12000,
    "total_fee_cad": 24000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Any discipline acceptable",
      "quantitative/analytical background helpful"
    ],
    "entry_roles": [
      "Management consultant",
      "strategy analyst",
      "business analyst",
      "product manager",
      "operations manager",
      "finance/accounting manager",
      "corporate strategy manager",
      "entrepreneur",
      "MBA-level roles across industries"
    ],
    "features": []
  }
]);

// --- TECHNICAL UNIVERSITY OF DRESDEN ---
const univ_technicaluniversityofdresden = db.institutions.insertOne(inst({
  "name": "TECHNICAL UNIVERSITY OF DRESDEN",
  "abbreviation": "TU DRESDEN",
  "type": "university",
  "city": "Dresden",
  "province": "Saxony",
  "country": "Germany",
  "campuses": [
    "Dresden"
  ],
  "website": "https://www.tu-dresden.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "Contact via university portal (program-specific contacts); general inquiries: studienberatung@tu-dresden.de",
      "phone": "+49 351 463-32344 (General admissions information); +49 351 463-20000 (TUD Security & Emergency 24/7)",
      "address": "Mommsenstra\u00dfe 6 (International Office), 01062 Dresden; Immatrikulationsamt: Mommsenstra\u00dfe 11, 01069 Dresden"
    },
    "international_students": {
      "website": "+49 351 463-32356 (International Office); +49 351 463-32357 (Exchange coordination)"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month (\u20ac150 federal + \u20ac150 private sponsors); Merit-based; Deadline: July 1\u201315 annually; Over 350 scholarships awarded in 2025"
    },
    {
      "name": "TU Dresden Study Completion Scholarship: \u20ac300\u2013\u20ac700/month; For final-year international students; Deadline: Varies by faculty (typically September 1)"
    },
    {
      "name": "Partial Scholarships for Volunteer Work: Recognition of TU-internal and external volunteer commitment"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac934\u2013\u20ac1,400+/month; Highly competitive; Covers tuition, living stipend, insurance; For development-related programs"
    },
    {
      "name": "DAAD EPOS (Entwicklungsorientierte Postgraduiertenstudieng\u00e4nge): \u20ac934\u2013\u20ac1,200+/month; For Master\u2019s/PhD in development-related fields; Deadline varies (typically November 30)"
    },
    {
      "name": "DAAD KOSPIE (India, Colombia, Mexico, Argentina, Tunisia): Variable funding; For Indian students pursuing Master\u2019s thesis"
    },
    {
      "name": "DAAD STIBET I Scholarship: \u20ac650/month; For exchange students in final year; Via partner university nomination"
    },
    {
      "name": "DAAD BIDS (Bilateral Summer Programs): For research-oriented degrees"
    },
    {
      "name": "SECAI Scholarship (Zuse School of Embedded Composite AI): Varies; For AI-related Master\u2019s; Emphasis on women in STEM; Application deadline varies"
    },
    {
      "name": "TUDIAS Scholarships: Funded places at TUDIAS Studienkolleg (preparatory program)"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "PROMOS Scholarships: Partial scholarships for study abroad, internships, language courses, thesis abroad; Deadlines: January 5 & June/December"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Dresden (safe area); Most student housing in verified safe residential areas; Dresden considered a safe city overall for study; International community strong support networks; LGBTQ+ support available (CSD events, safe spaces)",
    "clubs": "Student clubs & organizations: 150+ active groups; Tech, culture, international associations, sports clubs, debate societies; Student Union (StuRa) active"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures; Fire evacuation protocols; Mental health support services; Diversity & inclusion initiatives; International student mentoring programs; Occupational Safety, Health and Environment Unit; Accessible campus initiatives"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science (English-taught)",
    "Master of Science in Nanoelectronic Systems (English-taught; world-leading nanotechnology program)",
    "Master of Science in Distributed Systems Engineering (English-taught)",
    "Master of Science in Media Computer Science (English-taught)",
    "Master of Science in International Management (English-taught)"
  ]
})).insertedId;

addPrograms(univ_technicaluniversityofdresden, "TECHNICAL UNIVERSITY OF DRESDEN", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering (Maschinenbau)",
    "faculty": "School of Engineering Sciences / Faculty of Mechanical Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Engineering fundamentals",
      "Pre-study internship may be required (verify program)"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal systems engineer",
      "robotics engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "School of Engineering Sciences / Faculty of Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Computer Science background helpful"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering (Elektrotechnik)",
    "faculty": "School of Engineering Sciences / Faculty of Electrical and Computer Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical background"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "electronics designer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "School of Science / Faculty of Physics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "School of Science / Faculty of Mathematics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "School of Engineering Sciences / Faculty of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "Machine learning/AI experience highly beneficial"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "systems engineer",
      "data scientist",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Nanoelectronic Systems",
    "faculty": "School of Engineering Sciences / Faculty of Electrical and Computer Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "MEMS (Micro-Electro-Mechanical Systems)",
      "microfabrication",
      "semiconductor technology",
      "materials science",
      "Physics/electronics strong background"
    ],
    "entry_roles": [
      "Nanoelectronics engineer",
      "MEMS specialist",
      "semiconductor engineer",
      "process engineer",
      "systems engineer",
      "R&D scientist",
      "technical consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Distributed Systems Engineering",
    "faculty": "School of Engineering Sciences / Faculty of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong systems programming",
      "networking",
      "parallel computing",
      "database systems",
      "Distributed systems experience beneficial"
    ],
    "entry_roles": [
      "Systems engineer",
      "cloud architect",
      "platform engineer",
      "DevOps specialist",
      "research scientist",
      "technical consultant",
      "software architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Media Computer Science",
    "faculty": "School of Engineering Sciences / Faculty of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Graphics programming",
      "multimedia systems",
      "computer vision",
      "image processing",
      "Media production experience beneficial"
    ],
    "entry_roles": [
      "Graphics engineer",
      "VFX specialist",
      "visualization engineer",
      "AR/VR developer",
      "game developer",
      "research scientist",
      "multimedia systems architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in International Management",
    "faculty": "School of Business and Economics / Faculty of Business and Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Business fundamentals",
      "economics",
      "management",
      "Diverse educational backgrounds welcome",
      "Leadership experience beneficial"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "operations manager",
      "strategy analyst",
      "project manager",
      "corporate strategist",
      "entrepreneur",
      "business development manager"
    ],
    "features": []
  }
]);

// --- LUDWIG MAXIMILIANS UNIVERSITY MUNICH ---
const univ_ludwigmaximiliansuniversitymunich = db.institutions.insertOne(inst({
  "name": "LUDWIG MAXIMILIANS UNIVERSITY MUNICH",
  "abbreviation": "LMU",
  "type": "university",
  "city": "Munich",
  "province": "Bavaria",
  "country": "Germany",
  "campuses": [
    "Munich"
  ],
  "website": "https://www.lmu.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "zulassung.international@lmu.de",
      "phone": "+49 89 2180-3156 or +49 89 2180-3743 (choose correct line per subject list)",
      "address": "International Office, Ludwigstra\u00dfe 27, 80539 Munich, Germany"
    },
    "international_students": {
      "website": "Direct to International Office; Application form (PDF, 622 KB available on website)"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "SIST LMU Study Scholarship: \u20ac650/month for up to 10 months; Deadline: January 15 \u2013 February 28"
    },
    {
      "name": "SIST LMU Study Completion Scholarship: \u20ac650 for 4 months (thesis completion); Funded by DAAD; Deadline: Program-dependent"
    },
    {
      "name": "SIST LMU Equality Scholarship: \u20ac650/month for students with disability/chronic illness/refugee background; Deadline: March 1 \u2013 September 2"
    },
    {
      "name": "Grant for German Language Courses: Up to \u20ac150 (covers 80% of course fees); Deadline: January 15 \u2013 November 30"
    },
    {
      "name": "Deutschlandstipendium: \u20ac300/month for 1 year; Highly competitive; Merit-based"
    },
    {
      "name": "BayBIDS Motivationsstipendium: \u20ac425-\u20ac450/month; For fluent German speakers; Deadline: June 30"
    },
    {
      "name": "LMU Nothilfe: \u20ac650 one-time grant for urgent financial hardship"
    },
    {
      "name": "DAAD Master\u2019s Study Scholarships: \u20ac934/month"
    },
    {
      "name": "DAAD EPOS Program: \u20ac934\u2013\u20ac1,200/month; Focus on sustainability and development"
    },
    {
      "name": "DAAD GSSP PhD Program: \u20ac1,200/month"
    },
    {
      "name": "Acceptance rate: Highly competitive (~10-15%)"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance"
  },
  "campus_life": {
    "housing": "Housing rental: Furnished single rooms with shared kitchen/bathroom or all-inclusive apartments; Rent debited from German bank account",
    "clubs": "Student clubs & organizations: 120+ groups covering diverse interests (cultural, sports, hobby-based, volunteer)"
  },
  "security": {
    "detail": "Access control: Building security; restricted access outside operating hours"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Data Science",
    "Master of Science in Economics",
    "Master of Science in Neuroscience (Neuro-Cognitive Psychology)",
    "Master of Science in Physics (Theoretical & Mathematical Physics)",
    "Master of Science in Management & Digital Technologies"
  ]
})).insertedId;

addPrograms(univ_ludwigmaximiliansuniversitymunich, "LUDWIG MAXIMILIANS UNIVERSITY MUNICH", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics",
    "faculty": "Chair of Physics / Faculty of Physics (Chair for University Physics)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (A-level/LK recommended)",
      "Physics",
      "Chemistry/related natural sciences"
    ],
    "entry_roles": [
      "Research scientist",
      "physicist",
      "data analyst",
      "software engineer (physics background)",
      "technical specialist",
      "university researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemistry and Biochemistry",
    "faculty": "Department of Chemistry & Pharmacy (Chemie und Pharmazie)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [
      "Chemistry",
      "Mathematics",
      "Physics (strong background in all three essential)",
      "Biology helpful"
    ],
    "entry_roles": [
      "Research chemist",
      "pharmaceutical chemist",
      "analytical chemist",
      "quality assurance specialist",
      "materials scientist",
      "laboratory technician",
      "process engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology / Molecular Biology",
    "faculty": "Department of Biology (Biologie)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [
      "Biology",
      "Chemistry",
      "Mathematics (all three recommended)",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Research biologist",
      "molecular biologist",
      "biotechnologist",
      "pharmaceutical researcher",
      "environmental biologist",
      "clinical researcher",
      "quality control specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Philosophy / History",
    "faculty": "Department of Philosophy / Department of History (or Faculty of History and the Arts)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "No strict requirements",
      "humanities background preferred",
      "English language skills important"
    ],
    "entry_roles": [
      "Researcher",
      "academic",
      "journalist",
      "policy analyst",
      "museum curator",
      "cultural institution specialist",
      "publishing professional",
      "librarian",
      "educator"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics",
    "faculty": "Department of Mathematics (Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [
      "Mathematics (very strong A-level/LK required)",
      "Physics helpful",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "research scientist",
      "software engineer",
      "financial analyst",
      "actuarial scientist",
      "systems analyst",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Munich School of Data Science (joint program: LMU & TUM)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong coursework in algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data engineer",
      "analytics engineer",
      "data architect",
      "business intelligence specialist",
      "AI researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Economics",
    "faculty": "Munich Graduate School of Economics (MGSE) / Faculty of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Economics",
      "econometrics",
      "advanced mathematics",
      "statistics",
      "quantitative methods",
      "GRE score recommended/sometimes required"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "policy analyst",
      "management consultant",
      "data analyst",
      "research economist",
      "business analyst",
      "investment analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Neuroscience (Neuro-Cognitive Psychology)",
    "faculty": "Graduate School of Systemic Neurosciences (GSN) / Department of Psychology",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Psychology",
      "neurobiology",
      "cognitive science",
      "neurocognitive methods",
      "experimental psychology background preferred"
    ],
    "entry_roles": [
      "Neuroscientist",
      "cognitive psychologist",
      "research scientist",
      "clinical researcher",
      "neurotech specialist",
      "pharmaceutical researcher",
      "academic researcher",
      "UX/cognitive design specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physics (Theoretical & Mathematical Physics)",
    "faculty": "Faculty of Physics / Chair of Physics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Theoretical physics",
      "mathematical physics",
      "quantum mechanics",
      "classical mechanics",
      "electromagnetism",
      "mathematical methods"
    ],
    "entry_roles": [
      "Theoretical physicist",
      "research scientist",
      "quantum computing specialist",
      "aerospace engineer (physics focus)",
      "academic researcher",
      "scientific consultant",
      "software engineer (physics background)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management & Digital Technologies",
    "faculty": "LMU Munich School of Management (SoM)",
    "duration_years": 2.0,
    "annual_fee_cad": 9000,
    "total_fee_cad": 18000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business acumen",
      "analytical skills",
      "interest in technology/digital transformation",
      "Quantitative background helpful but not m",
      "atory"
    ],
    "entry_roles": [
      "Management consultant",
      "digital transformation manager",
      "business analyst",
      "product manager",
      "strategy consultant",
      "corporate strategy manager",
      "entrepreneur",
      "technology manager"
    ],
    "features": []
  }
]);

// --- FREE UNIVERSITY BERLIN ---
const univ_freeuniversityberlin = db.institutions.insertOne(inst({
  "name": "FREE UNIVERSITY BERLIN",
  "abbreviation": "FREIE UNIVERSIT\u00c4T BERLIN",
  "type": "university",
  "city": "Berlin",
  "province": "Berlin",
  "country": "Germany",
  "campuses": [
    "Berlin"
  ],
  "website": "https://www.fu-berlin.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "studium@fu-berlin.de; Contact form via www.fu-berlin.de/en/studium/beratung/",
      "phone": "+49 30 838 73472 (Main admissions line); +49 30 838 73100 (Student Services Center)",
      "address": "Student Services Center (SSC), Malteserstra\u00dfe 74-100, 12249 Berlin"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschland Stipendium (Germany Scholarship): \u20ac300/month; Merit-based; For top 10\u201320% of students; Deadline: August 31"
    },
    {
      "name": "DAAD STIBET I Scholarship (Degree Completion): \u20ac250\u2013\u20ac861/month (10-month grant March\u2013December 2026); For international Master\u2019s/PhD students facing additional responsibilities; Deadline: January 11, 2026 (for 2026 cohort)"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac992\u2013\u20ac1,400/month; Highly competitive (~10\u201315% acceptance rate); Funding includes tuition, living stipend, insurance, travel allowance"
    },
    {
      "name": "DAAD EPOS Scholarships: \u20ac992/month (Master\u2019s) + living allowance; For development-related Master\u2019s programs; 2+ years professional experience required; Deadline: varies by program (August 2025\u2013March 2026)"
    },
    {
      "name": "DAAD HILDE DOMIN PROGRAMME: For students at risk of educational denial in home countries"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "Deutschlansstipendium: \u20ac300/month; For gifted students; Merit-based; Deadline: August 31"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 87
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus located in quiet, safe Dahlem residential area; All student housing in verified safe residential areas (Dahlem, Charlottenburg, K\u00f6penick, Lichtenberg districts); Strong international student community support; Berlin generally safe city for study",
    "clubs": "Student clubs & organizations: 150+ active groups; Debate clubs, sustainability organizations, music bands, tech collectives, political forums, language tandems, sports clubs, international societies"
  },
  "security": {
    "detail": "Safety programs: Fire protection officers; First aid services; Mental health support services; Diversity officer for discrimination reporting; Crisis24 emergency support (for exchange students); 24/7 emergency assistance"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Data Science (English-taught)",
    "Master of Science in Computer Science (English & German-taught)",
    "Master of Science in Physics (English & German-taught)",
    "Master of Science in Bioinformatics (English-taught)",
    "Master of Science in Management & Marketing (English-taught) / MA International Relations (English-taught)"
  ]
})).insertedId;

addPrograms(univ_freeuniversityberlin, "FREE UNIVERSITY BERLIN", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Department of Mathematics and Computer Science (Institut f\u00fcr Mathematik und Informatik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK equivalent)",
      "Physics",
      "Computer Science/IT background highly beneficial"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Department of Physics (Institut f\u00fcr Experimentalphysik & Institut f\u00fcr Theoretische Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst (physics background)",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Biology (Biologie)",
    "faculty": "Department of Biology (Institut f\u00fcr Biologie)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Biology",
      "Chemistry (strong)",
      "Mathematics",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Research biologist",
      "molecular biologist",
      "biotechnologist",
      "pharmaceutical researcher",
      "environmental biologist",
      "clinical researcher",
      "quality control specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Department of Mathematics (Institut f\u00fcr Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "academic researcher",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemistry (Chemie)",
    "faculty": "Department of Chemistry (Institut f\u00fcr Chemie)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry (strong)",
      "Mathematics",
      "Physics",
      "Biology helpful"
    ],
    "entry_roles": [
      "Research chemist",
      "pharmaceutical chemist",
      "analytical chemist",
      "quality assurance specialist",
      "materials scientist",
      "chemical engineer",
      "industrial chemist",
      "laboratory manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Department of Mathematics and Computer Science / Data Science Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)",
      "machine learning experience highly beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data engineer",
      "AI specialist",
      "analytics engineer",
      "data architect",
      "business intelligence analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Department of Mathematics and Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "mathematics",
      "software engineering"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physics",
    "faculty": "Department of Physics (Experimental & Theoretical)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Theoretical physics",
      "quantum mechanics",
      "mathematical methods",
      "classical mechanics",
      "electromagnetism",
      "Strong mathematics foundation essential"
    ],
    "entry_roles": [
      "Theoretical physicist",
      "research scientist",
      "quantum computing engineer",
      "aerospace engineer",
      "academic researcher",
      "industrial physicist",
      "data scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Bioinformatics",
    "faculty": "Institute of Bioinformatics / Department of Biology",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong biology/computational biology background",
      "Programming (Python",
      "R",
      "Java)",
      "statistics",
      "molecular biology",
      "genomics experience beneficial"
    ],
    "entry_roles": [
      "Bioinformatician",
      "genomics analyst",
      "computational biologist",
      "pharmaceutical researcher",
      "software engineer (biosciences)",
      "data scientist (life sciences)",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in International Relations",
    "faculty": "Department of Political Science & International Relations",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Political theory",
      "international relations",
      "policy analysis",
      "political systems",
      "history",
      "economics",
      "Research",
      "analytical writing skills essential"
    ],
    "entry_roles": [
      "Policy analyst",
      "researcher",
      "consultant (policy/international affairs)",
      "diplomat",
      "NGO manager",
      "academic researcher",
      "civil servant",
      "journalist",
      "international organization staff"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF COLOGNE ---
const univ_universityofcologne = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF COLOGNE",
  "abbreviation": "",
  "type": "university",
  "city": "Cologne (K\u00f6ln)",
  "province": "Germany State",
  "country": "Germany",
  "campuses": [
    "Cologne (K\u00f6ln)"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "Contact form: www.uni-koeln.de/en/studying-teaching/international/study-in-cologne/international-applications",
      "phone": "+49 221 470-7797 (International applications team); +49 221 470-90222 (General student admissions)",
      "address": "Studierenden Service Center (SSC), Ground Floor, Universit\u00e4tsstra\u00dfe 22a, 50937 Cologne"
    },
    "international_students": {
      "website": "Maximum 120 full days (8 hours/day) OR 240 half-days (4+ hours/day) per calendar year WITHOUT work permit; Student assistant (HiWi) positions and research assistant jobs: Usually no hour restrictions (if \u226420 hours/week during semester); Certificate of exemption from work permit required (obtained via International Office or Federal Employment Agency); Minimum wage \u20ac12.41/hour (2025); Valid student health insurance mandatory"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship) \u2013 Bundesf\u00f6rderung: \u20ac300/month; Merit-based; Deadline: varies (typically December\u2013January for next WS); Limited scholarships available; ~300\u2013500 scholarships awarded annually at German universities"
    },
    {
      "name": "Deutschlandstipendium by University of Cologne: \u20ac300/month (\u20ac3,600/year for 2 semesters); Renewable annually; Merit + need-based; Application deadline: typically January for next winter semester; For top-performing students"
    },
    {
      "name": "Sozialstipendium der Universit\u00e4t zu K\u00f6ln (Social Scholarship): \u20ac300/month; Need-based; For students facing financial hardship; Deadline varies"
    },
    {
      "name": "Stipendium f\u00fcr Studierende mit Behinderung oder chronischer Erkrankung (Disability/Chronic Illness Scholarship): \u20ac300/month; For students with disabilities/chronic illnesses"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac934\u2013\u20ac1,400+/month; Highly competitive; Covers tuition, living stipend, health insurance; For development-related programs"
    },
    {
      "name": "DAAD Graduation Scholarship (Abschlussf\u00f6rderung): \u20ac1,000 one-time payment; For international students in final semester; Application deadline: November 21 (for next cycle)"
    },
    {
      "name": "DAAD Merit Scholarship: Funding for international students with excellent grades + outstanding social/intercultural commitment; Application via International Office (Department 92)"
    },
    {
      "name": "DAAD Equal Opportunity Scholarship: Support for international students facing special social challenges (refugee background, health restrictions, care obligations); 4-month funding for fall semester only; 2026 application: August\u2013September"
    },
    {
      "name": "DAAD Development-Oriented Postgraduate Courses (EPOS): Funding for Master\u2019s in development-related fields; Application deadline varies"
    },
    {
      "name": "Cologne Excellence Award (CEA): Selective funding for high-performing international students; Application deadline: varies"
    },
    {
      "name": "Friedrich-Naumann-Stiftung Scholarship: For international students pursuing Master\u2019s/PhD; Deadline varies"
    },
    {
      "name": "PROMOS Scholarship: Partial funding for study abroad, internships, language courses, thesis abroad; Deadlines: January, June, December"
    },
    {
      "name": "ERASMUS+ Scholarship: For exchange students; Grants vary (~\u20ac300\u2013\u20ac350/month)"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Cologne (safe area \u2013 Albertusplatz); Student housing in verified safe residential areas; Cologne considered very safe for study; Well-connected public transport; International student community strong",
    "clubs": "Student clubs & organizations: 150+ active clubs; International student associations (IHG \u2013 International Student Associations); debate societies, sports clubs, tech clubs, cultural associations; Student Union (AStA); TANDEM language exchange program"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures documented; Fire evacuation protocols; Mental health support services (Psychological Counseling Center \u2013 Psychologische Beratungsstelle); Diversity & inclusion initiatives; International student mentoring; LGBTQ+ support available (diverse student associations); Accessible campus initiatives; Cologne is a safe city overall; international community strong support networks"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science (English and German-taught; flexible specializations)",
    "Master of Science in Business Administration (English-taught; highly popular with Indian students)",
    "Master of Science in Business Analytics & Econometrics (English-taught)",
    "Master of International Management \u2013 CEMS MIM (English-taught; world-class program)",
    "Master of Science in Economics (German/English-taught options)"
  ]
})).insertedId;

addPrograms(univ_universityofcologne, "UNIVERSITY OF COLOGNE", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Faculty of Mathematics and Natural Sciences / Department of Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science background helpful",
      "TestAS certificate MANDATORY"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Faculty of Mathematics and Natural Sciences / Department of Physics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong)",
      "Mathematics (excellent)",
      "Chemistry beneficial",
      "TestAS certificate MANDATORY"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist",
      "materials scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Faculty of Mathematics and Natural Sciences / Department of Mathematics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong)",
      "Physics",
      "Computer Science beneficial",
      "TestAS certificate MANDATORY"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "consultant",
      "actuarial analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Economics (Volkswirtschaftslehre)",
    "faculty": "Faculty of Management, Economics and Social Sciences / Department of Economics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Economics fundamentals helpful",
      "TestAS MANDATORY"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "business analyst",
      "policy analyst",
      "management consultant",
      "data analyst",
      "market researcher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Business Administration (Betriebswirtschaftslehre)",
    "faculty": "Faculty of Management, Economics and Social Sciences / Department of Business Administration",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics helpful",
      "Business/economics background beneficial",
      "TestAS MANDATORY"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "financial analyst",
      "operations manager",
      "entrepreneur",
      "HR specialist",
      "business development manager",
      "market researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science (Informatik M.Sc.)",
    "faculty": "Faculty of Mathematics and Natural Sciences / Department of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "Machine learning/AI experience beneficial",
      "Flexible interdisciplinary specializations available (Data Science",
      "Artificial Intelligence",
      "Algorithmics",
      "Scientific Computing",
      "Visual Analytics",
      "Software Engineering)"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "systems engineer",
      "data scientist",
      "DevOps specialist",
      "technical lead",
      "research scientist",
      "AI/ML engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Administration (Business Administration M.Sc.)",
    "faculty": "Faculty of Management, Economics and Social Sciences (WiSo) / Department of Business Administration",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Business fundamentals",
      "accounting",
      "finance",
      "management theory",
      "Diverse educational backgrounds welcome",
      "Leadership experience beneficial"
    ],
    "entry_roles": [
      "Management consultant",
      "strategy analyst",
      "operations manager",
      "project manager",
      "corporate strategist",
      "business development manager",
      "entrepreneur",
      "financial analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Business Analytics & Econometrics",
    "faculty": "Faculty of Management, Economics and Social Sciences (WiSo) / Department of Business Analytics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong statistics",
      "econometrics",
      "data analysis",
      "business mathematics",
      "Programming skills (Python",
      "R",
      "SQL) beneficial",
      "Quantitative background essential",
      "Unique blend of traditional analytics + modern AI/machine learning approaches"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "analytics consultant",
      "data scientist",
      "econometrician",
      "quantitative analyst",
      "business intelligence specialist",
      "market researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Management \u2013 CEMS MIM (Exclusively offered at University of Cologne in Germany)",
    "faculty": "Faculty of Management, Economics and Social Sciences (WiSo) / CEMS Program Office",
    "duration_years": 1.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 15,
    "required_subjects": [
      "Business fundamentals",
      "international perspective",
      "leadership experience",
      "Multilingual background highly beneficial",
      "Must demonstrate clear interest in international business/management"
    ],
    "entry_roles": [
      "International management consultant",
      "global strategy analyst",
      "business development manager",
      "international operations manager",
      "global supply chain manager",
      "multinational corporation executive",
      "entrepreneur (international ventures)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Economics (Volkswirtschaftslehre M.Sc.)",
    "faculty": "Faculty of Management, Economics and Social Sciences (WiSo) / Department of Economics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong economics",
      "microeconomics",
      "macroeconomics",
      "econometrics",
      "Mathematics/statistics essential",
      "Research-oriented program",
      "Specializations: General Economics",
      "Research",
      "International Economics",
      "Labor Economics",
      "Environmental Economics available"
    ],
    "entry_roles": [
      "Economist",
      "economic researcher",
      "policy analyst",
      "financial analyst",
      "business analyst",
      "data analyst",
      "consultant",
      "academic researcher",
      "government economist"
    ],
    "features": []
  }
]);

// --- TECHNICAL UNIVERSITY OF BERLIN ---
const univ_technicaluniversityofberlin = db.institutions.insertOne(inst({
  "name": "TECHNICAL UNIVERSITY OF BERLIN",
  "abbreviation": "TU BERLIN",
  "type": "university",
  "city": "Berlin",
  "province": "Berlin",
  "country": "Germany",
  "campuses": [
    "Berlin"
  ],
  "website": "https://www.tu-berlin.de",
  "application_portal": "tu.berlin/en/go164 (UG); www.uni-assist.de (PG)",
  "contacts": {
    "admissions": {
      "email": "studium@tu-berlin.de",
      "phone": "+49 30 314-75799 (Main admissions line); +49 30 314-27549 (International student advisor)",
      "address": "Stra\u00dfe des 17. Juni 135, 10623 Berlin, Germany (Main campus)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Germany Scholarship \u201cDeutschlandstipendium\u201d: \u20ac300/month; Merit-based for top 10\u201320% of students; Deadline: August 31"
    },
    {
      "name": "DAAD Scholarships: \u20ac934/month (Master\u2019s students); \u20ac1,200+/month (doctoral); Highly competitive (~10\u201315% acceptance rate)"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month (non-EU Master\u2019s students) + \u20ac300 book allowance; ~1,200 scholarships/year globally"
    },
    {
      "name": "Friedrich-Ebert-Stiftung Scholarship: For students with strong commitment to social democracy/social justice; \u20ac934\u2013\u20ac1,200/month"
    },
    {
      "name": "TU Berlin Short-term Research Grant: \u20ac300\u2013\u20ac800 for research visits (1\u20133 months)"
    },
    {
      "name": "ERASMUS+ Scholarships: For European students; Additional support for non-EU partners"
    },
    {
      "name": "Bildungskredit (Educational Loan): German government student loan for advanced students; 0% interest during study; \u20ac934/month max"
    },
    {
      "name": "BAf\u00f6G: Only for German and Swiss students; Not available to Indian citizens"
    },
    {
      "name": "Student Job Earnings: Up to \u20ac450/month tax-free; Higher earnings require tax registration"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: All student housing in verified safe residential areas (Charlottenburg, Tiergarten, K\u00f6penick, Mitte districts); Strong community support",
    "clubs": "Student clubs & organizations: 150+ active groups; Sports (partnered with ZHS Berlin), cultural organizations, hobby clubs, tech/startup clubs, volunteer groups"
  },
  "security": {
    "detail": "Campus partnerships: Coordinated with Berlin police; Hospital security (Charit\u00e9 Hospital on campus); Occupational safety program"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science",
    "Master of Science in Data Science",
    "Master of Science in Global Production Engineering",
    "Master of Science in Civil Systems Engineering",
    "MBA Energy Management / MBA Sustainable Mobility Management"
  ]
})).insertedId;

addPrograms(univ_technicaluniversityofberlin, "TECHNICAL UNIVERSITY OF BERLIN", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Faculty of Electrical Engineering and Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK equivalent)",
      "Physics",
      "Computer Science/IT background"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering (Maschinenbau)",
    "faculty": "Faculty of Mechanical Engineering and Transport Systems",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Engineering/Technical sciences strong background"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "manufacturing engineer",
      "automotive engineer",
      "project manager",
      "systems engineer",
      "robotics engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology (Elektrotechnik)",
    "faculty": "Faculty of Electrical Engineering and Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical background"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "electronics designer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Civil Engineering (Bauingenieurwesen)",
    "faculty": "Faculty of Planning, Building, Environment",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "analytical skills",
      "Building/construction knowledge helpful"
    ],
    "entry_roles": [
      "Structural engineer",
      "civil engineer",
      "construction engineer",
      "project manager",
      "structural analyst",
      "surveyor",
      "infrastructure specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Faculty of Science (Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK equivalent)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "data analyst (physics background)",
      "software engineer",
      "theoretical physicist",
      "academic researcher",
      "technical specialist",
      "industrial physicist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Faculty of Electrical Engineering and Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "mathematics",
      "software engineering"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "security engineer",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Faculty of Electrical Engineering and Computer Science / Data Science Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)",
      "Machine learning experience beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data engineer",
      "AI specialist",
      "analytics engineer",
      "data architect",
      "business intelligence analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Global Production Engineering",
    "faculty": "Faculty of Mechanical Engineering and Transport Systems",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Manufacturing",
      "logistics",
      "supply chain",
      "project management",
      "systems engineering"
    ],
    "entry_roles": [
      "Production engineer",
      "supply chain manager",
      "manufacturing manager",
      "process engineer",
      "systems engineer",
      "consultant (supply chain/operations)",
      "project manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Civil Systems Engineering",
    "faculty": "Faculty of Planning, Building, Environment",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil engineering",
      "infrastructure systems",
      "environmental management",
      "infrastructure planning"
    ],
    "entry_roles": [
      "Civil engineer",
      "infrastructure engineer",
      "project manager",
      "systems engineer",
      "environmental specialist",
      "urban planner",
      "consultant (infrastructure)",
      "structural engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA Energy Management",
    "faculty": "TU Berlin Advanced Masters Programs (Fee-based MBA)",
    "duration_years": 2.0,
    "annual_fee_cad": 29700,
    "total_fee_cad": 59400,
    "min_class12_percent": 60,
    "required_subjects": [
      "Energy sector knowledge",
      "business acumen",
      "Technical background helpful but not required"
    ],
    "entry_roles": [
      "Energy manager",
      "sustainability analyst",
      "energy strategy consultant",
      "renewable energy project manager",
      "operations manager (energy)",
      "business developer (green energy)",
      "entrepreneur"
    ],
    "features": []
  }
]);

// --- KARLSRUHE INSTITUTE OF TECHNOLOGY ---
const univ_karlsruheinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "KARLSRUHE INSTITUTE OF TECHNOLOGY",
  "abbreviation": "KIT",
  "type": "university",
  "city": "Karlsruhe",
  "province": "Baden-W\u00fcrttemberg",
  "country": "Germany",
  "campuses": [
    "Karlsruhe"
  ],
  "website": "https://www.kit.edu",
  "application_portal": "www.kit.edu/studies (UG & PG applications via online portal)",
  "contacts": {
    "admissions": {
      "email": "studium@kit.edu; Contact form available on www.intl.kit.edu"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Germany Scholarship \u201cDeutschlandstipendium\u201d: \u20ac300/month; Merit-based; Deadline: August 31 (approx.)"
    },
    {
      "name": "DAAD Scholarships: \u20ac934/month (Master\u2019s); Highly competitive (~10\u201315% acceptance rate)"
    },
    {
      "name": "DAAD STIBET I Scholarship: \u20ac650\u2013\u20ac1,200/month; For international Master\u2019s/PhD students in final year; Deadline: June 1"
    },
    {
      "name": "Baden-W\u00fcrttemberg Scholarship (BW-Stipendium): \u20ac934/month; For Master\u2019s students; Deadline: varies"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "Friedrich-Ebert-Stiftung Scholarship: \u20ac934\u2013\u20ac1,200/month; Merit and values-based"
    },
    {
      "name": "Hector Scholarship: For exceptional students in STEM; Varies; Highly selective"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 90
  },
  "campus_life": {
    "housing": "Safe neighborhoods: All student housing in verified safe residential areas; Strong international student community",
    "clubs": "Student clubs & organizations: 150+ active groups; Sports (partnerships with regional sports centers), cultural organizations, hobby clubs, tech/innovation clubs"
  },
  "security": {
    "detail": "Emergency services: Campus emergency line available; Nationwide 112 (fire/ambulance); Police 110"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Computer Science",
    "Master of Science in Remote Sensing and Geoinformatics",
    "Master of Science in Electrical Engineering and Information Technology",
    "Master of Science in Mechanical Engineering",
    "Master of Science in Water Science and Engineering"
  ]
})).insertedId;

addPrograms(univ_karlsruheinstituteoftechnology, "KARLSRUHE INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering (International) \u2013 Carl Benz School",
    "faculty": "Department of Mechanical Engineering / Carl Benz School (Eng.-taught track)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Engineering/Technical background"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "automotive engineer",
      "manufacturing engineer",
      "robotics engineer",
      "project manager",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology",
    "faculty": "Faculty of Electrical Engineering and Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical background"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "electronics designer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Faculty of Computer Science",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science background"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Civil Engineering (Bauingenieurwesen)",
    "faculty": "Faculty of Civil Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "analytical skills",
      "Building/construction knowledge helpful"
    ],
    "entry_roles": [
      "Structural engineer",
      "civil engineer",
      "construction engineer",
      "project manager",
      "surveyor",
      "infrastructure specialist",
      "structural analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Faculty of Science (Physics)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "data analyst (physics background)",
      "software engineer",
      "theoretical physicist",
      "academic researcher",
      "industrial physicist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Faculty of Computer Science",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "mathematics",
      "software engineering"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Remote Sensing and Geoinformatics",
    "faculty": "Institute of Photogrammetry and Remote Sensing",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Geodesy",
      "geoinformatics",
      "environmental science",
      "remote sensing basics",
      "GIS experience beneficial"
    ],
    "entry_roles": [
      "Remote sensing specialist",
      "geoinformatics engineer",
      "environmental scientist",
      "satellite data analyst",
      "GIS specialist",
      "urban planner",
      "climate researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical Engineering and Information Technology",
    "faculty": "Faculty of Electrical Engineering and Information Technology",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Power systems",
      "electronics",
      "control systems",
      "communications engineering",
      "embedded systems"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems engineer",
      "electronics specialist",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Manufacturing",
      "thermodynamics",
      "fluid mechanics",
      "materials science",
      "mechanics",
      "robotics"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "manufacturing engineer",
      "automotive engineer",
      "robotics engineer",
      "systems engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Water Science and Engineering",
    "faculty": "Faculty of Civil Engineering / Institute for Water and River Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Hydraulics",
      "hydrology",
      "water management",
      "environmental engineering",
      "infrastructure systems"
    ],
    "entry_roles": [
      "Water engineer",
      "hydraulics specialist",
      "environmental consultant",
      "water resource manager",
      "infrastructure engineer",
      "sustainability specialist",
      "civil engineer"
    ],
    "features": []
  }
]);

// --- BERLIN SCHOOL OF BUSINESS AND INNOVATION ---
const univ_berlinschoolofbusinessandinnovation = db.institutions.insertOne(inst({
  "name": "BERLIN SCHOOL OF BUSINESS AND INNOVATION",
  "abbreviation": "BSBI",
  "type": "university",
  "city": "",
  "province": "Germany State",
  "country": "Germany",
  "campuses": [
    ""
  ],
  "website": "https://www.berlinsbi.com",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "info@berlinsbi.com",
      "phone": "+49 305 858 40 959 (8:00 AM \u2013 4:30 PM, Monday\u2013Friday Central European Time)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "BSBI Women in Tech Scholarship: For female students pursuing MSc in Data Analytics, MSc in Artificial Intelligence, MSc in Information Technology Management, MSc in Engineering Management, MSc in Global Logistics & Supply Chain Management; Merit-based; Applied as tuition fee reduction (NOT cash value); Eligibility: Academic excellence, leadership potential, personal drive"
    },
    {
      "name": "Sherryl Kintu Scholarship: For ambitious individuals in entrepreneurship among Black women and creative arts fields; Merit-based; Applied as tuition fee reduction; Celebrates Sherryl\u2019s legacy in business"
    },
    {
      "name": "Portfolio Scholarship Competition: For creative students (arts, design, animation, graphic design); Merit-based assessment of portfolio; Applied as tuition reduction"
    },
    {
      "name": "Leadership and Enterprise Scholarship: Available to pursuing leadership and business students; Varies by application merit"
    },
    {
      "name": "DAAD Scholarships: \u20ac934\u2013\u20ac1,400+/month for Master\u2019s/PhD; Highly competitive; Covers tuition, living stipend, health insurance"
    },
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Limited availability; Merit-based"
    },
    {
      "name": "Erasmus+: For EU exchange students; Monthly stipends ~\u20ac300\u2013\u20ac350"
    },
    {
      "name": "Campus deposit: \u20ac2,000 (due after acceptance to secure place; non-refundable once enrolled; applied toward tuition)"
    },
    {
      "name": "Tuition installment plans: Flexible payment options available (no interest surcharge)"
    },
    {
      "name": "Pay upfront discount: Possible reductions for full program payment"
    },
    {
      "name": "Payment methods: Flywire (international platform), bank transfer"
    }
  ],
  "internships": {
    "part_time_work": "Non-EU/International Students on Student Visa: Maximum 120 full days (8 hours/day) OR 240 half-days (4+ hours/day) per calendar year; Unlimited hours during semester breaks (typically 6 weeks per year); Part-time student employment: Up to 20 hours/week during semester; Minimum wage \u20ac12.41/hour (2025); Certificate of exemption from work permit required (obtained via BSBI support)",
    "employment_rate_percent": 80
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Berlin campus (Charlottenburg/Wilmersdorf districts) in safe areas; Student housing in verified safe residential areas; Berlin & surrounding areas considered very safe for international students; Excellent public transport (safe late-night travel); International student community strong support networks; Low crime rates for students",
    "clubs": "Sports & recreation: Campus sports facilities; Gym partnerships; Yoga, climbing, swimming, football available; Berlin\u2019s extensive public sports infrastructure accessible; Typically \u20ac5\u2013\u20ac20/course inexpensive rates; Sports clubs on-campus"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures documented; Fire evacuation protocols; Mental health support services; Diversity & inclusion initiatives; LGBTQ+ support available; Accessible campus facilities; International student mentoring; Crisis counseling available"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Global MBA (18-month intensive; highly popular with Indian professionals; partnership variants available)",
    "Master of Business Administration (MBA) / PGDM (18-month; CUC partnership)",
    "Master of Science in Finance & Investment (18-month; very popular with Indian students)",
    "Master of Science in Data Analytics (18-month; growing demand from tech-focused Indian students)",
    "Master of Science in Artificial Intelligence (18-month; emerging popular program)"
  ]
})).insertedId;

addPrograms(univ_berlinschoolofbusinessandinnovation, "BERLIN SCHOOL OF BUSINESS AND INNOVATION", [
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) International Business and Management",
    "faculty": "School of Business & Management / International Business Program",
    "duration_years": 3.0,
    "annual_fee_cad": 9750,
    "total_fee_cad": 29250,
    "min_class12_percent": 70,
    "required_subjects": [
      "English language fluency",
      "Business/economics background helpful",
      "No specific subject stream required"
    ],
    "entry_roles": [
      "Business analyst",
      "management trainee",
      "business development associate",
      "operations coordinator",
      "HR assistant",
      "market research analyst",
      "international trade specialist",
      "sales representative"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration (BBA)",
    "faculty": "School of Business & Management / Business Administration Program",
    "duration_years": 3.0,
    "annual_fee_cad": 9750,
    "total_fee_cad": 29250,
    "min_class12_percent": 70,
    "required_subjects": [
      "English language fluency",
      "Business fundamentals helpful"
    ],
    "entry_roles": [
      "Business administrator",
      "operations coordinator",
      "management assistant",
      "business development executive",
      "HR assistant",
      "finance coordinator",
      "consultant trainee"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) Computer Science and Digitisation",
    "faculty": "School of Data & IT / Computer Science Program",
    "duration_years": 3.0,
    "annual_fee_cad": 10500,
    "total_fee_cad": 31500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science/IT fundamentals",
      "Programming experience beneficial"
    ],
    "entry_roles": [
      "Junior developer",
      "software developer",
      "systems programmer",
      "IT support specialist",
      "developer apprentice",
      "full-stack developer trainee",
      "web developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (B.E./B.Tech)",
    "faculty": "School of Engineering / Applied Engineering Program",
    "duration_years": 3.0,
    "annual_fee_cad": 11250,
    "total_fee_cad": 33750,
    "min_class12_percent": 85,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Technical fundamentals required"
    ],
    "entry_roles": [
      "Junior engineer",
      "design engineer",
      "project engineer",
      "systems engineer",
      "manufacturing engineer",
      "technical specialist",
      "CAD technician",
      "process engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts (Hons) Digital Marketing and Social Media",
    "faculty": "School of Creative Industries / Digital Marketing Program",
    "duration_years": 3.0,
    "annual_fee_cad": 9750,
    "total_fee_cad": 29250,
    "min_class12_percent": 75,
    "required_subjects": [
      "English (strong)",
      "Communication skills essential",
      "Marketing fundamentals beneficial"
    ],
    "entry_roles": [
      "Social media coordinator",
      "digital marketing executive",
      "content strategist",
      "marketing assistant",
      "social media specialist",
      "br",
      "assistant",
      "marketing analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global MBA",
    "faculty": "School of Business & Management / MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 22275,
    "total_fee_cad": 44550,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business fundamentals helpful",
      "Leadership experience required",
      "Professional experience in any field acceptable",
      "Career progression demonstrated"
    ],
    "entry_roles": [
      "Senior manager",
      "management consultant",
      "business strategist",
      "operations director",
      "finance manager",
      "entrepreneurship/startup founder",
      "corporate strategist",
      "international business executive"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance & Investment",
    "faculty": "School of Business & Management / Finance Master\u2019s",
    "duration_years": 1.5,
    "annual_fee_cad": 18000,
    "total_fee_cad": 27000,
    "min_class12_percent": 50,
    "required_subjects": [
      "Finance fundamentals",
      "accounting",
      "economics",
      "Investment knowledge beneficial",
      "Quantitative skills important",
      "Financial analysis experience helpful"
    ],
    "entry_roles": [
      "Financial analyst",
      "investment manager",
      "portfolio manager",
      "equity analyst",
      "fixed income analyst",
      "risk manager",
      "financial consultant",
      "wealth manager",
      "compliance officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Analytics",
    "faculty": "School of Data & IT / Data Analytics Master\u2019s",
    "duration_years": 1.5,
    "annual_fee_cad": 18000,
    "total_fee_cad": 27000,
    "min_class12_percent": 50,
    "required_subjects": [
      "Strong statistics",
      "mathematics",
      "programming (Python/R/SQL)",
      "Data analysis experience beneficial",
      "Business analytics exposure helpful",
      "Quantitative skills essential"
    ],
    "entry_roles": [
      "Data analyst",
      "business analyst",
      "data scientist",
      "analytics engineer",
      "business intelligence specialist",
      "data engineer",
      "reporting specialist",
      "data consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Artificial Intelligence",
    "faculty": "School of Data & IT / Artificial Intelligence Master\u2019s",
    "duration_years": 1.5,
    "annual_fee_cad": 19500,
    "total_fee_cad": 29250,
    "min_class12_percent": 50,
    "required_subjects": [
      "Strong programming",
      "machine learning fundamentals",
      "neural networks",
      "mathematics",
      "Deep learning/computer vision experience beneficial",
      "AI projects or certifications helpful",
      "Quantitative background essential"
    ],
    "entry_roles": [
      "AI engineer",
      "machine learning engineer",
      "AI architect",
      "neural network specialist",
      "AI consultant",
      "robotics engineer",
      "research scientist",
      "deep learning engineer",
      "AI researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Information Technology Management",
    "faculty": "School of Data & IT / IT Management Master\u2019s",
    "duration_years": 1.5,
    "annual_fee_cad": 18000,
    "total_fee_cad": 27000,
    "min_class12_percent": 50,
    "required_subjects": [
      "IT fundamentals",
      "project management basics",
      "systems administration",
      "Business acumen helpful",
      "Technology management experience beneficial",
      "Technical + managerial skills needed"
    ],
    "entry_roles": [
      "IT manager",
      "IT project manager",
      "systems manager",
      "IT consultant",
      "technical lead",
      "IT business analyst",
      "IT operations manager",
      "digital transformation specialist",
      "tech strategist"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF HAMBURG ---
const univ_universityofhamburg = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF HAMBURG",
  "abbreviation": "",
  "type": "university",
  "city": "Hamburg",
  "province": "Hamburg",
  "country": "Germany",
  "campuses": [
    "Hamburg"
  ],
  "website": "",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "Contact form via www.uni-hamburg.de/en/campuscenter/beratung/kontakt.html",
      "phone": "+49 40 42838-0 (Main switchboard); +49 40 42838-7088 (CampusCenter direct)",
      "address": "CampusCenter, Alsterterrasse 1, 20354 Hamburg"
    },
    "international_students": {
      "website": "+49 40 42838-5000 (International Office main)"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Merit Scholarship for International Students: \u20ac930/month (up to \u20ac1,200/month for doctoral candidates); Requires 2+ semesters enrollment; Merit & social commitment-based; Deadlines: April 15 & October 15"
    },
    {
      "name": "Degree Completion Grant: \u20ac200\u2013\u20ac720/month; For final-year international students; Available annually"
    },
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; For top students; Annual application"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac992\u2013\u20ac1,400/month; Highly competitive; Covers tuition, living stipend, insurance, travel allowance"
    },
    {
      "name": "Hamburglobal Funding Program: \u20ac300\u2013\u20ac500/month; For study abroad, internships, or thesis abroad; Up to 6 months"
    },
    {
      "name": "Hamburg Scholarship Program: Varies; For exceptional students"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 87
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Hamburg (safe); All student housing in verified safe areas; Hamburg is a safe city for study; International community support",
    "clubs": "Student clubs & organizations: 150+ active groups; Debate, media, tech, cultural, sports clubs; Student Union (AStA) active"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures; Fire evacuation protocols; Mental health support; Diversity officer for discrimination reporting; International student support networks"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Data Science and Artificial Intelligence (English-taught)",
    "Master of Science in Intelligent Systems (English-taught)",
    "Master of Business Administration (MBA)",
    "Master of Science in Physics",
    "Master of Science in Computer Science / Bioinformatics"
  ]
})).insertedId;

addPrograms(univ_universityofhamburg, "UNIVERSITY OF HAMBURG", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Mathematics",
    "faculty": "Department of Business Mathematics (WISO Faculty)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Economics/Business fundamentals",
      "Computer Science helpful"
    ],
    "entry_roles": [
      "Financial analyst",
      "data analyst",
      "business consultant",
      "actuary",
      "quantitative analyst",
      "software developer",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Department of Computer Science (Faculty of Sciences)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science background helpful"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Laws (LL.B.)",
    "faculty": "Faculty of Law",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Languages & humanities strong background",
      "Analytical skills essential"
    ],
    "entry_roles": [
      "Lawyer",
      "jurist",
      "legal consultant",
      "corporate counsel",
      "judge (after specialization)",
      "policy analyst",
      "legal advisor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Department of Physics (Faculty of Sciences)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "data analyst (physics background)",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemistry (Chemie)",
    "faculty": "Department of Chemistry (Faculty of Sciences)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Chemistry (strong)",
      "Mathematics",
      "Physics",
      "Lab experience beneficial"
    ],
    "entry_roles": [
      "Research chemist",
      "analytical chemist",
      "pharmaceutical chemist",
      "quality assurance specialist",
      "materials scientist",
      "industrial chemist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science and Artificial Intelligence",
    "faculty": "Department of Computer Science / Data Science Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)",
      "machine learning experience highly beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "data engineer",
      "analytics engineer",
      "research scientist",
      "technical consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Intelligent Systems",
    "faculty": "Department of Computer Science / Intelligent Systems Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Robotics",
      "artificial intelligence",
      "machine learning",
      "knowledge representation",
      "natural language processing",
      "Strong programming background"
    ],
    "entry_roles": [
      "AI researcher",
      "robotics engineer",
      "systems engineer",
      "software architect",
      "research scientist",
      "technical consultant",
      "product engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "WISO Faculty / MBA Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business fundamentals helpful",
      "Diverse educational backgrounds welcome"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "operations manager",
      "project manager",
      "strategy analyst",
      "entrepreneur",
      "corporate strategist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Physics",
    "faculty": "Department of Physics (Faculty of Sciences)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Theoretical/experimental physics",
      "quantum mechanics",
      "mathematics strong background",
      "Research experience beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data scientist",
      "aerospace engineer",
      "academic researcher",
      "industrial physicist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Bioinformatics",
    "faculty": "Department of Computer Science / Bioinformatics Program (joint with Life Sciences)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong biology",
      "programming (Python",
      "R",
      "Java)",
      "statistics",
      "molecular biology",
      "genomics experience beneficial"
    ],
    "entry_roles": [
      "Bioinformatician",
      "genomics analyst",
      "computational biologist",
      "research scientist",
      "software engineer (biosciences)",
      "data scientist"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF MANNHEIM ---
const univ_universityofmannheim = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF MANNHEIM",
  "abbreviation": "",
  "type": "university",
  "city": "Mannheim",
  "province": "Baden-W\u00fcrttemberg",
  "country": "Germany",
  "campuses": [
    "Mannheim"
  ],
  "website": "https://www.uni-mannheim.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "application@uni-mannheim.de",
      "phone": "International prospective students: +49 621 181-3517 or +49 621 181-1259; Phone consultation hours: Tuesday 11:00 AM \u2013 12:00 PM"
    },
    "international_students": {
      "website": "Campus emergency coordination via International Office and Student Services; Nationwide 112 (fire/ambulance); Police 110; Crisis support available 24/7"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; Deadline: varies (typically March\u2013April); ~1,200 scholarships available annually in Baden-W\u00fcrttemberg"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac934\u2013\u20ac1,400+/month; Highly competitive; Covers tuition, living stipend, insurance; For development-related programs"
    },
    {
      "name": "DAAD Merit Scholarship (for particularly committed students): Funding for international students showing excellent grades + outstanding social/intercultural commitment; Application via International Office"
    },
    {
      "name": "DAAD Equal Opportunity Scholarship: Support for international students facing special social challenges (refugee background, health restrictions, care obligations); Funding: 4 months (fall semester only); 2026 application period: August\u2013September"
    },
    {
      "name": "DAAD Graduation Scholarship: \u20ac934\u2013\u20ac1,200+/month; For international students in final study phase; 4-month funding; Criteria: Letter of motivation (30%), financial need (30%), expert opinion (20%), average grade (20%); Deadlines: twice yearly"
    },
    {
      "name": "Baden-W\u00fcrttemberg Scholarship: For study abroad (exchange semesters); \u20ac450\u2013\u20ac550/month depending on country; 4-month maximum duration"
    },
    {
      "name": "Friedrich-Naumann-Stiftung Scholarship: For international students and graduates pursuing Master\u2019s/PhD"
    },
    {
      "name": "PROMOS Scholarship: Partial funding for study abroad, internships, language courses, thesis abroad; Deadlines: January, June, December"
    },
    {
      "name": "ERASMUS+ Scholarship: For exchange students"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 87
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Mannheim (safe area); All student housing in verified safe residential areas; Mannheim generally safe for study; International student community strong support networks",
    "clubs": "Student clubs & organizations: 150+ active student clubs; International associations, debate societies, sports clubs, tech clubs, entrepreneurship groups; Student Union (AStA) active"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures documented; Fire evacuation protocols; Mental health support services (Psychological Counseling Center); Diversity & inclusion initiatives; International student mentoring; LGBTQ+ support network (Queer@UMA); Accessible campus initiatives"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Mannheim Master in Data Science (English-taught; world-class program)",
    "Mannheim Master in Management (English-taught; highly selective)",
    "Master of Business Administration / MBA (English-taught; 12-month intensive)",
    "Mannheim Master in Finance, Accounting & Taxation (English-taught)",
    "Mannheim Master in Operations & Supply Chain Management (English-taught)"
  ]
})).insertedId;

addPrograms(univ_universityofmannheim, "UNIVERSITY OF MANNHEIM", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Administration (with English-taught stream available)",
    "faculty": "School of Business & Economics / Department of Business Administration",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics",
      "English language fundamentals",
      "Economics/Business background helpful"
    ],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "financial analyst",
      "operations manager",
      "entrepreneur",
      "HR specialist",
      "business development manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Economics (Wirtschaftswissenschaft)",
    "faculty": "School of Business & Economics / Department of Economics",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Economics background beneficial"
    ],
    "entry_roles": [
      "Economist",
      "financial analyst",
      "business analyst",
      "policy analyst",
      "management consultant",
      "data analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Business Informatics (Wirtschaftsinformatik)",
    "faculty": "School of Business Informatics & Mathematics / Department of Business Informatics",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Computer Science background beneficial"
    ],
    "entry_roles": [
      "Business analyst",
      "IT consultant",
      "systems developer",
      "business systems analyst",
      "data analyst",
      "IT project manager",
      "software developer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics in Business and Economics (Mathematik in Wirtschaft und Industrie)",
    "faculty": "School of Business Informatics & Mathematics / Department of Mathematics",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "financial mathematician",
      "systems analyst",
      "actuary",
      "consultant",
      "software developer",
      "research mathematician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Media and Communication Studies (Medien- und Kommunikationswissenschaft)",
    "faculty": "School of Humanities / Department of Media & Communication Studies",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "German language strong foundation (program in German)",
      "English B2 helpful for electives"
    ],
    "entry_roles": [
      "Media analyst",
      "communications specialist",
      "journalist",
      "PR specialist",
      "content strategist",
      "media researcher",
      "digital media specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mannheim Master in Data Science (MMDS)",
    "faculty": "School of Business Informatics & Mathematics / Mannheim Master in Data Science Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "linear algebra",
      "statistics",
      "Machine learning fundamentals beneficial",
      "Only ~40 places per year (highly selective)"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI specialist",
      "data analyst",
      "analytics engineer",
      "research scientist",
      "data architect"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mannheim Master in Management (MMM)",
    "faculty": "School of Business & Economics / Mannheim Master in Management Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Business fundamentals",
      "management theory",
      "economics",
      "Leadership experience beneficial",
      "Limited places (~60\u201380/year)",
      "Highly selective"
    ],
    "entry_roles": [
      "Management consultant",
      "strategy analyst",
      "operations manager",
      "project manager",
      "corporate strategist",
      "business development manager",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) \u2013 Full-Time",
    "faculty": "School of Business & Economics / MBA Program",
    "duration_years": 1.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 4500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business fundamentals helpful",
      "Finance/accounting beneficial"
    ],
    "entry_roles": [
      "Business manager",
      "management consultant",
      "finance manager",
      "strategy director",
      "operations executive",
      "corporate strategist",
      "entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mannheim Master in Finance, Accounting & Taxation (MFAT)",
    "faculty": "School of Business & Economics / Department of Finance, Accounting & Taxation",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Accounting",
      "finance",
      "tax principles",
      "business mathematics",
      "Quantitative skills essential",
      "Limited places (~50\u201370/year)"
    ],
    "entry_roles": [
      "Financial analyst",
      "accountant",
      "tax specialist",
      "auditor",
      "investment analyst",
      "corporate finance manager",
      "management accountant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Mannheim Master in Operations & Supply Chain Management (MOSCM)",
    "faculty": "School of Business & Economics / Department of Operations & Supply Chain Management",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Operations management",
      "supply chain",
      "logistics",
      "business processes",
      "Quantitative/analytical background beneficial"
    ],
    "entry_roles": [
      "Operations manager",
      "supply chain manager",
      "logistics manager",
      "procurement specialist",
      "process improvement specialist",
      "business operations analyst"
    ],
    "features": []
  }
]);

// --- TECHNICAL UNIVERSITY OF DARMSTADT ---
const univ_technicaluniversityofdarmstadt = db.institutions.insertOne(inst({
  "name": "TECHNICAL UNIVERSITY OF DARMSTADT",
  "abbreviation": "TU DARMSTADT",
  "type": "university",
  "city": "Darmstadt",
  "province": "Hesse",
  "country": "Germany",
  "campuses": [
    "Darmstadt"
  ],
  "website": "https://www.zv.tu-darmstadt.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "international.admission@zv.tu-darmstadt.de",
      "phone": "+49 6151 16-21675 (International Admission); +49 6151 16-0 (Main switchboard)",
      "address": "Karolinenplatz 5, 64289 Darmstadt (Referat Zulassung International)"
    },
    "international_students": {
      "website": "Can be accessed via www.tu-darmstadt.de/en/studying/"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "TU Darmstadt Scholarship (Graduiertenstipendium): Minimum \u20ac250/month; Duration 1\u20136 months; For international students in final year/semester; GPA \u22642.74 required; Merit & social need-based; Can only be funded once per study program"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac992\u2013\u20ac1,400/month; Highly competitive; Covers tuition, living stipend, insurance, travel; For programs contributing to development goals (EPOS scheme); Apply directly to DAAD, not university"
    },
    {
      "name": "DAAD Graduate School Scholarship Program (GSSP): Up to \u20ac1,400/month for 4 years (PhD); For structured doctoral programs like Graduate School Life Science Engineering; Up to 4 scholarships/year"
    },
    {
      "name": "DAAD WISE Program: For research-oriented graduate degrees in science/engineering"
    },
    {
      "name": "DAAD-KOSPIE India Program: Variable; For Indian students; Limited slots"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; Annual application"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus in central Darmstadt (safe area); All student housing in verified safe residential areas; Darmstadt is a safe city for study; International community strong support networks",
    "clubs": "Student clubs & organizations: 150+ active groups; Tech clubs, debate societies, international associations, sports clubs, environmental groups; Student Union (AStA) active"
  },
  "security": {
    "detail": "5.Master of Science in IT Security (English-taught)"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Artificial Intelligence and Machine Learning (English-taught)",
    "Master of Science in Computer Science (English-taught)",
    "Master of Science in Mechanical Engineering (Maschinenbau) (German & English available)",
    "Master of Science in Information and Communication Engineering (iCE) (English-taught)",
    "Master of Science in IT Security (English-taught)"
  ]
})).insertedId;

addPrograms(univ_technicaluniversityofdarmstadt, "TECHNICAL UNIVERSITY OF DARMSTADT", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering (Maschinenbau)",
    "faculty": "Faculty of Mechanical Engineering (Fachbereich Maschinenbau)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Engineering fundamentals",
      "Pre-study internship may be required (check program specifics)"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "automotive engineer",
      "manufacturing engineer",
      "thermal systems engineer",
      "robotics engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science (Informatik)",
    "faculty": "Faculty of Computer Science (Fachbereich Informatik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Computer Science background helpful"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology (Elektrotechnik und Informationstechnik)",
    "faculty": "Faculty of Electrical Engineering and Information Technology",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical background"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "electronics designer",
      "control systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics (Mathematik)",
    "faculty": "Faculty of Mathematics (Fachbereich Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics (Physik)",
    "faculty": "Faculty of Physics (Fachbereich Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Artificial Intelligence and Machine Learning",
    "faculty": "Faculty of Computer Science / AI & Machine Learning Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)",
      "machine learning fundamentals",
      "AI/deep learning experience beneficial"
    ],
    "entry_roles": [
      "Machine learning engineer",
      "AI specialist",
      "data scientist",
      "research scientist",
      "AI architect",
      "technical consultant",
      "software engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Faculty of Computer Science (Fachbereich Informatik)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "specializations (Data Science",
      "Visual Computing",
      "Distributed Computing)"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "systems engineer",
      "data scientist",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering (Maschinenbau)",
    "faculty": "Faculty of Mechanical Engineering (Fachbereich Maschinenbau)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong mechanics",
      "thermodynamics",
      "materials science",
      "design",
      "Manufacturing/automotive experience beneficial"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "automotive engineer",
      "manufacturing engineer",
      "systems engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Information and Communication Engineering (iCE)",
    "faculty": "Faculty of Electrical Engineering and Information Technology / iCE Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong signal processing",
      "communications",
      "networking",
      "embedded systems",
      "electronics",
      "Communications/wireless experience beneficial"
    ],
    "entry_roles": [
      "Communications engineer",
      "systems engineer",
      "embedded systems engineer",
      "IoT specialist",
      "network engineer",
      "technical consultant",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in IT Security",
    "faculty": "Faculty of Computer Science / IT Security Program",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "cryptography",
      "systems security",
      "network security",
      "Security/cybersecurity experience beneficial"
    ],
    "entry_roles": [
      "Cybersecurity engineer",
      "security architect",
      "information security specialist",
      "penetration tester",
      "security consultant",
      "risk analyst",
      "research scientist"
    ],
    "features": []
  }
]);

// --- UNIVERSITY OF STUTTGART ---
const univ_universityofstuttgart = db.institutions.insertOne(inst({
  "name": "UNIVERSITY OF STUTTGART",
  "abbreviation": "",
  "type": "university",
  "city": "Stuttgart",
  "province": "Baden-W\u00fcrttemberg",
  "country": "Germany",
  "campuses": [
    "Stuttgart"
  ],
  "website": "https://www.uni-stuttgart.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "admissionsoffice@uni-stuttgart.de",
      "phone": "+49 711 685-83628 (Admissions Office); +49 711 685-68608 (International Student Services)",
      "address": "Admissions Office, Keplerstra\u00dfe 7, 70174 Stuttgart (city center campus); International Office: Internationales Zentrum (IZ), Pfaffenwaldring 60, 70569 Stuttgart (Vaihingen campus)"
    },
    "international_students": {
      "website": "Admissions Office: Monday, Wednesday 8:30 AM \u2013 5:00 PM; Thursday 8:30 AM \u2013 6:00 PM; Friday 8:30 AM \u2013 4:00 PM; International Office: Monday & Wednesday 2:00 PM \u2013 4:00 PM; Tuesday & Thursday 10:00 AM \u2013 12:00 PM"
    },
    "graduate_studies": {}
  },
  "application_fee_cad": 112,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Deutschlandstipendium (Germany Scholarship): \u20ac300/month; Merit-based; For top 10\u201320% of students; Deadline: January 16, 2025 (for 2025/26 academic year)"
    },
    {
      "name": "DAAD Scholarships (Master\u2019s/PhD): \u20ac992\u2013\u20ac1,400/month; Highly competitive (~10\u201315% acceptance rate); Covers tuition, living stipend, health insurance, travel allowance"
    },
    {
      "name": "DAAD STIBET I Scholarship (Degree Completion): \u20ac250\u2013\u20ac861/month (10-month grant); For international Master\u2019s/PhD students in final year; Deadline: January 11, 2026"
    },
    {
      "name": "DLR-DAAD Research Fellowship Programme: Fully funded (\u20ac934/month+); For Master\u2019s/PhD students in aeronautics, space, energy, transport, digitalization; 9-month maximum stay; Application via DAAD website"
    },
    {
      "name": "KOSPIE (Combined Study & Practice for Engineers from Developing Countries): For IIT students pursuing Master\u2019s thesis at TU9 universities (including Stuttgart); Maximum 7 months funded"
    },
    {
      "name": "Friedrich Ebert Foundation Scholarship: \u20ac992\u2013\u20ac1,400/month; Merit and values-based"
    },
    {
      "name": "Heinrich B\u00f6ll Foundation Scholarship: \u20ac850/month; Approximately 1,200 scholarships globally"
    },
    {
      "name": "Tuition Fee Waiver: Some international students may be exempt (e.g., Erasmus students, exchange students, students from bilateral agreements, asylum seekers with residence permit, students with significant disability)"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 88
  },
  "campus_life": {
    "housing": "Safe neighborhoods: Campus located in suburban Vaihingen area; City center campus in downtown Stuttgart (safe); All student housing in verified safe residential areas; Stuttgart generally safe city for study; International student community support networks; Buddy programs available",
    "clubs": "Student clubs & organizations: 150+ active groups through stuvus (Student Union); Debate clubs, sustainability groups, tech collectives, political forums, language tandems, sports clubs, international societies; IAESTE (international internships), ESN (ERASMUS student network), HORADS 88,6 (campus radio)"
  },
  "security": {
    "detail": "Safety programs: Emergency procedures documented; Fire evacuation protocols; First aid services; Mental health support services; Diversity officer for discrimination reporting; Crisis support; Accessible campus initiatives"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Mechanical Engineering (FAME \u2013 Fundamentals & Applications; English-taught)",
    "Master of Science in Information Technology (INFOTECH; English-taught)",
    "Master of Science in Data Science (English-taught)",
    "Master of Science in Electrical Engineering (English-taught)",
    "Master of Science in Computer Science (English & German-taught)"
  ]
})).insertedId;

addPrograms(univ_universityofstuttgart, "UNIVERSITY OF STUTTGART", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Faculty of Mechanical Engineering (Fakult\u00e4t Maschinenbau)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong A-level/LK)",
      "Physics",
      "Engineering/Technical background",
      "Pre-study internship (6\u201312 weeks) REQUIRED before enrollment"
    ],
    "entry_roles": [
      "Mechanical engineer",
      "design engineer",
      "thermal systems engineer",
      "automotive engineer",
      "manufacturing engineer",
      "robotics engineer",
      "project manager",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology",
    "faculty": "Faculty of Electrical Engineering and Information Technology (Fakult\u00e4t Elektrotechnik und Informationstechnik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical background",
      "Pre-study internship may be required (check program guidelines)"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "electronics designer",
      "control systems engineer",
      "industrial engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Faculty of Computer Science (Institut f\u00fcr Informatik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 75,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science background",
      "Pre-study internship may be required"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics",
    "faculty": "Faculty of Mathematics (Institut f\u00fcr Mathematik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Mathematics (very strong A-level/LK)",
      "Physics",
      "Computer Science beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer",
      "financial analyst",
      "research mathematician",
      "systems analyst",
      "academic researcher",
      "consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Physics",
    "faculty": "Faculty of Physics (Institut f\u00fcr Physik)",
    "duration_years": 3.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 13500,
    "min_class12_percent": 80,
    "required_subjects": [
      "Physics (very strong A-level/LK)",
      "Mathematics (excellent)",
      "Chemistry beneficial"
    ],
    "entry_roles": [
      "Research physicist",
      "theoretical physicist",
      "data analyst (physics background)",
      "software engineer",
      "academic researcher",
      "industrial physicist",
      "technical specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering (FAME \u2013 Fundamentals and Applications)",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Manufacturing",
      "thermodynamics",
      "fluid mechanics",
      "materials science",
      "mechanics",
      "robotics",
      "automotive engineering"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "manufacturing engineer",
      "automotive engineer",
      "robotics engineer",
      "systems engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Information Technology (INFOTECH)",
    "faculty": "Faculty of Computer Science / Information Technology Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "software engineering",
      "systems design",
      "algorithms",
      "databases",
      "networking",
      "IT infrastructure"
    ],
    "entry_roles": [
      "IT consultant",
      "systems engineer",
      "software architect",
      "solutions engineer",
      "IT project manager",
      "technology strategist",
      "IT security specialist",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Faculty of Computer Science / Data Science Program",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)",
      "machine learning experience highly beneficial"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data engineer",
      "AI specialist",
      "analytics engineer",
      "data architect",
      "business intelligence analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical Engineering",
    "faculty": "Faculty of Electrical Engineering and Information Technology",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Power systems",
      "electronics",
      "control systems",
      "communications",
      "embedded systems",
      "electrical design",
      "Mathematics & physics strong background"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems engineer",
      "electronics specialist",
      "systems engineer",
      "project manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Faculty of Computer Science (Institut f\u00fcr Informatik)",
    "duration_years": 2.0,
    "annual_fee_cad": 4500,
    "total_fee_cad": 9000,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "software engineering",
      "mathematics",
      "Machine learning/AI experience beneficial"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "technical lead",
      "research scientist"
    ],
    "features": []
  }
]);

// --- RWTH AACHEN UNIVERSITY ---
const univ_rwthaachenuniversity = db.institutions.insertOne(inst({
  "name": "RWTH AACHEN UNIVERSITY",
  "abbreviation": "",
  "type": "university",
  "city": "Aachen",
  "province": "North Rhine-Westphalia",
  "country": "Germany",
  "campuses": [
    "Aachen"
  ],
  "website": "https://www.rwth-aachen.de",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "int-zugang@rwth-aachen.de",
      "phone": "+49 241 80-90674",
      "address": "Templerg raben 57, 52062 Aachen, Germany"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Winter (October)",
    "Summer (April)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Education Fund Scholarship: \u20ac300/month; For top 10% of students; Merit-based; Ongoing application"
    },
    {
      "name": "Equal Opportunity Scholarship (DAAD STIBET I): \u20ac650-\u20ac1,033; For students with disabilities, chronic illness, or refugee background; Deadlines: June 1 and rolling basis"
    },
    {
      "name": "Degree Completion Scholarship (DAAD STIBET I): \u20ac650-\u20ac1,033; For final-year Master\u2019s/PhD students; Deadline: June 1"
    },
    {
      "name": "UNITECH International Scholarship: Varies; Short-stay program; Deadline: January 4, 2026"
    },
    {
      "name": "DAAD Master\u2019s Study Scholarships: \u20ac934/month; Highly competitive (~10-15%)"
    },
    {
      "name": "DAAD EPOS Program: \u20ac883\u2013\u20ac1,200/month; Sustainability & development focus"
    },
    {
      "name": "DAAD RISE Worldwide: For Bachelor\u2019s students; Internship funding"
    },
    {
      "name": "DAAD PROMOS: Partial scholarships for academic stays abroad; Deadline: March 15, 2026"
    },
    {
      "name": "Country Scholarship 2026: 50% reduction in program fees; Merit-based; Limited spots"
    },
    {
      "name": "High Potential Student Grant: Up to 25% tuition fee reduction; For qualified Master\u2019s students"
    },
    {
      "name": "Global Talent Scholarship: Up to 35% tuition fee reduction; For Africa, Indonesia, Thailand, Iran, Turkey nationals"
    }
  ],
  "internships": {
    "part_time_work": "Part-Time Work Allowance",
    "employment_rate_percent": 85
  },
  "campus_life": {
    "housing": "Safe neighborhoods: All student housing in verified safe residential areas; Strong student community support",
    "clubs": "Student clubs & organizations: 150+ active groups; Sports, cultural, hobby, volunteer-based"
  },
  "security": {
    "detail": "Safety rating: Highly safe campus and city (reflected in \u201cCertificate for Excellence in Safety and Security\u201d)"
  },
  "top_ug_programs": [
    "City & Country",
    "Department Contact Information",
    "Eligibility Requirements (Indian Students)",
    "Intakes & Application Deadlines",
    "Scholarships & Financial Support"
  ],
  "top_pg_programs": [
    "Master of Science in Automotive Engineering",
    "Master of Science in Data Science",
    "Master of Science in Mechanical Engineering",
    "Master of Science in Computer Science",
    "Master of Science in Management and Engineering"
  ]
})).insertedId;

addPrograms(univ_rwthaachenuniversity, "RWTH AACHEN UNIVERSITY", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 3.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (strong A-level/LK equivalent)",
      "Physics",
      "Engineering/Technical sciences"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "manufacturing engineer",
      "automotive engineer",
      "project manager",
      "systems engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology",
    "faculty": "Faculty of Electrical Engineering and Information Technology (EEIT)",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (strong)",
      "Physics",
      "Electronics/Technical subjects"
    ],
    "entry_roles": [
      "Electrical engineer",
      "power systems specialist",
      "automation engineer",
      "embedded systems developer",
      "control systems engineer",
      "electronics designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Computer Science",
    "faculty": "Faculty of Computer Science / Department of Informatics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (very strong)",
      "Physics",
      "Computer Science/IT background"
    ],
    "entry_roles": [
      "Software developer",
      "systems engineer",
      "data scientist",
      "AI/ML engineer",
      "full-stack developer",
      "IT consultant",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Civil Engineering",
    "faculty": "Faculty of Civil Engineering",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "strong analytical skills",
      "Building/construction knowledge helpful"
    ],
    "entry_roles": [
      "Structural engineer",
      "civil engineer",
      "construction engineer",
      "project manager",
      "structural analyst",
      "surveyor",
      "water resources engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mathematics",
    "faculty": "Faculty of Mathematics / Department of Mathematics",
    "duration_years": 3.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics (excellent A-level/LK equivalent)",
      "Physics helpful",
      "Analytical skills essential"
    ],
    "entry_roles": [
      "Data scientist",
      "mathematician",
      "software engineer (math background)",
      "financial analyst",
      "actuarian",
      "research scientist",
      "systems analyst",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Automotive Engineering",
    "faculty": "Faculty of Mechanical Engineering / Automotive Engineering Department",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong coursework in vehicle dynamics",
      "powertrain systems",
      "thermodynamics",
      "materials science",
      "or engineering mechanics"
    ],
    "entry_roles": [
      "Automotive design engineer",
      "powertrain engineer",
      "vehicle dynamics engineer",
      "EV/hybrid systems specialist",
      "manufacturing engineer",
      "systems integration engineer",
      "research engineer (autonomous vehicles",
      "electromobility)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science",
    "faculty": "Faculty of Mathematics, Computer Science and Natural Sciences / Data Science Program (Joint with partner institutions)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 30,
    "required_subjects": [
      "Strong Mathematics",
      "algorithms",
      "data structures",
      "linear algebra",
      "statistics",
      "programming (Python/Java/C++)"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "data engineer",
      "analytics engineer",
      "AI specialist",
      "data architect",
      "business intelligence analyst",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Mechanical Engineering",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Thermodynamics",
      "fluid mechanics",
      "materials science",
      "technical mechanics",
      "control engineering",
      "heat transfer"
    ],
    "entry_roles": [
      "Mechanical design engineer",
      "thermal systems engineer",
      "manufacturing engineer",
      "robotics engineer",
      "process engineer",
      "technical project manager",
      "research engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Computer Science",
    "faculty": "Faculty of Computer Science / Department of Informatics",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong programming",
      "algorithms",
      "data structures",
      "mathematics",
      "Software engineering",
      "systems design experience"
    ],
    "entry_roles": [
      "Software architect",
      "full-stack engineer",
      "AI/ML engineer",
      "systems engineer",
      "cloud infrastructure engineer",
      "DevOps specialist",
      "security engineer",
      "technical lead",
      "research scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management and Engineering",
    "faculty": "Faculty of Mechanical Engineering / Management and Engineering Program (Joint with School of Business/RWTH International Academy)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Technical knowledge + business acumen",
      "Quantitative skills helpful but not m",
      "atory"
    ],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "digital transformation manager",
      "product manager",
      "operations manager",
      "technology manager",
      "strategy analyst",
      "project manager",
      "entrepreneur"
    ],
    "features": []
  }
]);

print("Germany Seeding Completed!");