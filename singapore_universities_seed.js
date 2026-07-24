// ============================================================
// SINGAPORE UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// 21 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh canadian_institutions singapore_universities_seed.js
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

// Delete existing Singapore data to prevent duplicates
db.institutions.deleteMany({ country: "Singapore" });
db.programs.deleteMany({ institution_name: { $in: [
  "CURTIN UNIVERSITY SINGAPORE",
  "DigiPen Institute (Singapore)",
  "Dimensions Int. College (Singapore)",
  "EAST ASIA INSTITUTE OF MANAGEMENT (Singapore)",
  "ERC Institute (Singapore)",
  "HEIDELBERG UNIVERSITY (Singapore)",
  "INSEAD SINGAPORE",
  "JAMES COOK UNIVERSITY (Singapore)",
  "KAPLAN HIGHER EDUCATION (Singapore)",
  "LASALLE COLLEGE OF THE ARTS (Singapore)",
  "MDIS (Singapore)",
  "NANYANG ACADEMY OF FINE ARTS (Singapore)",
  "NATIONAL UNIVERSITY OF SINGAPORE",
  "PSB ACADEMY (Singapore)",
  "RWTH AACHEN UNIVERSITY (Singapore)",
  "SIM GLOBAL EDUCATION (Singapore)",
  "SINGAPORE INSTITUTE OF TECHNOLOGY",
  "SINGAPORE UNIVERSITY OF SOCIAL SCIENCES",
  "SINGAPORE UNIVERSITY OF TECHNOLOGY AND DESIGN",
  "TMC ACADEMY (Singapore)",
  "TUM ASIA (Singapore)",
  "NANYANG TECHNOLOGICAL UNIVERSITY (Singapore)",
] } });

// --- CURTIN UNIVERSITY SINGAPORE ---
const univ_curtinuniversitysingapore = db.institutions.insertOne(inst({
  "name": "CURTIN UNIVERSITY SINGAPORE",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.curtin.edu.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+65 6593 8000",
      "email": "studentconnect@curtin.edu.sg",
      "address": "10 Science Park Road, The Alpha, Science Park II, Level 3, Unit 03-08, Singapore 117684"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes \u2013 Multiple scholarship programs available"
    },
    {
      "name": "Academic Scholarship (International): 25% tuition fee reduction"
    },
    {
      "name": "Open to India & Sri Lanka"
    },
    {
      "name": "Eligible for Diploma Stage 2, Bachelor, and Graduate Certificate programs"
    },
    {
      "name": "Automatically considered with admission application"
    },
    {
      "name": "Merit Scholarship (International): 30% tuition fee reduction (limited awards)"
    },
    {
      "name": "Based on merit assessment"
    },
    {
      "name": "India: ISC/CBSE 80% or HSC 85%"
    },
    {
      "name": "Eligible for Diploma, Bachelor, Graduate Certificate, and Master programs"
    },
    {
      "name": "English Bursary: 25% off for DEAP students"
    }
  ],
  "internships": {
    "part_time_work": "Career Counseling and Job Placement assistance",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Sports clubs and recreational activities",
    "housing": "Accommodation assistance services"
  },
  "security": {
    "detail": "Emergency hotline: safer@curtin.edu.sg"
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

addPrograms(univ_curtinuniversitysingapore, "CURTIN UNIVERSITY SINGAPORE", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce \u2013 Accounting",
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
    "name": "Bachelor of Commerce \u2013 Finance",
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
    "name": "Bachelor of Commerce \u2013 International Business",
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
    "name": "Bachelor of Commerce \u2013 Marketing",
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
    "name": "Bachelor of Commerce \u2013 Logistics and Supply Chain Management",
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
    "name": "Master of International Business",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Supply Chain Management (Professional)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Certificate in Business Fundamentals",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Certificate in Supply Chain Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Advanced Practice (Specialisation: Clinical Leadership)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Accounting) \u2013 Curtin University",
    "faculty": "School of Business, Accounting & Finance",
    "duration_years": 3,
    "annual_fee_cad": 32700,
    "total_fee_cad": 98100,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream acceptable",
      "specific prerequisites checked per course page"
    ],
    "entry_roles": [
      "Accountant",
      "Financial Analyst",
      "Audit Officer",
      "Tax Consultant",
      "Cost Accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Finance) \u2013 Curtin University",
    "faculty": "School of Business, Finance & Investment",
    "duration_years": 3,
    "annual_fee_cad": 66272,
    "total_fee_cad": 198816,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics recommended",
      "any stream acceptable"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Officer",
      "Portfolio Manager",
      "Fund Manager",
      "Corporate Treasurer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (International Business) \u2013 Curtin University",
    "faculty": "School of Business, Management & International Affairs",
    "duration_years": 3,
    "annual_fee_cad": 32700,
    "total_fee_cad": 98100,
    "min_class12_percent": 60,
    "required_subjects": [
      "No specific subject requirement",
      "any stream accepted"
    ],
    "entry_roles": [
      "Business Development Manager",
      "International Trade Officer",
      "Global Marketing Manager",
      "Export Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Marketing) \u2013 Curtin University",
    "faculty": "School of Business, Marketing & Communications",
    "duration_years": 3,
    "annual_fee_cad": 25920,
    "total_fee_cad": 77760,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any stream",
      "English/Commerce helpful but not mandatory"
    ],
    "entry_roles": [
      "Marketing Manager",
      "Digital Marketing Specialist",
      "Brand Manager",
      "Market Research Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Logistics and Supply Chain Management) \u2013 Curtin University",
    "faculty": "School of Business, Supply Chain & Operations",
    "duration_years": 3,
    "annual_fee_cad": 32700,
    "total_fee_cad": 98100,
    "min_class12_percent": 60,
    "required_subjects": [
      "Mathematics preferred",
      "any stream considered"
    ],
    "entry_roles": [
      "Supply Chain Analyst",
      "Logistics Manager",
      "Procurement Officer",
      "Operations Coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Business \u2013 Curtin University",
    "faculty": "School of Business, Graduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline considered",
      "business/management background advantageous"
    ],
    "entry_roles": [
      "International Business Manager",
      "Global Trade Officer",
      "Market Entry Specialist",
      "International Relations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Supply Chain Management (Professional) \u2013 Curtin University",
    "faculty": "School of Business, Supply Chain & Operations Graduate Program",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "engineering",
      "or operations background preferred"
    ],
    "entry_roles": [
      "Supply Chain Manager",
      "Operations Manager",
      "Procurement Manager",
      "Logistics Coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Certificate in Business Fundamentals \u2013 Curtin University",
    "faculty": "School of Business, Graduate Certificates",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "foundation course for career changers"
    ],
    "entry_roles": [
      "Business Analyst",
      "Project Coordinator",
      "Administrative Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Graduate Certificate in Supply Chain Management \u2013 Curtin University",
    "faculty": "School of Business, Supply Chain & Operations",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business or operations background preferred but not required"
    ],
    "entry_roles": [
      "Supply Chain Coordinator",
      "Procurement Specialist",
      "Logistics Officer"
    ],
    "features": []
  }
]);

// --- DigiPen Institute (Singapore) ---
const univ_digipeninstitutesingapore = db.institutions.insertOne(inst({
  "name": "DigiPen Institute (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.digipen.edu.sg",
  "application_portal": "DigiPen (Singapore) directs applicants to start their application through SIT\u2019s online application system via its \u201cApply Online\u201d page, which links to the relevant SIT portal for the chosen degree program.\u2028Link: https://www.digipen.edu.sg/admissions/apply-online",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 16,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: DigiPen (Singapore)\u2019s Career Services office organizes employer events on campus and offers one\u2011on\u2011one career counselling to help students pursue internships and full\u2011time roles in relevant industries.\u2028Link: https://www.digipen.edu.sg/student-portal/student-services/career-services",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Campus life (student clubs, activities, facilities): DigiPen (Singapore)\u2019s Student Services page highlights on- and off\u2011campus support services and resources that help students academically, professionally, and personally, including access to advising, events, and other student life support coordinated within the SIT Punggol campus environment.\u2028Links: https://www.digipen.edu.sg/student-portal/student-services, https://www.digipen.edu.sg/student-portal"
  },
  "security": {
    "detail": "Campus security partnerships & coordination: Publicly available DigiPen (Singapore) pages do not describe formal partnerships with external security providers or coordination structures for emergency response; students are expected to follow SIT campus guidelines and general Singapore safety norms, and detailed coordination mechanisms are not publicly disclosed by DigiPen (Singapore).\u2028Link: https://www.digipen.edu.sg/student-portal"
  },
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_digipeninstitutesingapore, "DigiPen Institute (Singapore)", []);

// --- Dimensions Int. College (Singapore) ---
const univ_dimensionsintcollegesingapore = db.institutions.insertOne(inst({
  "name": "Dimensions Int. College (Singapore)",
  "abbreviation": "",
  "type": "college",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://dimensions.edu.sg",
  "application_portal": "The \u201cApply Now\u201d page outlines the online application process and directs candidates to complete DIMENSIONS Admission Application Forms (local or international), attach supporting documents, and send them together with the application fee to DIMENSIONS by post or email.\u2028Link: https://dimensions.edu.sg/apply-now/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: The FAQ states that DIMENSIONS does not provide job employment for students after completion of the course and that international students wishing to work in Singapore after study must apply for jobs independently, subject to Ministry of Manpower approval; no dedicated career-centre placement guarantees are publicly disclosed.\u2028Link: https://dimensions.edu.sg/faq/",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Campus life (student clubs, activities, facilities): The \u201cInternational Students\u201d page focuses on Singapore\u2019s lifestyle, transport system, attractions, living expenses, and general environment, but does not list specific DIMENSIONS student clubs, societies, or campus-facility details; named clubs and activity lists are not publicly disclosed on this page.\u2028Link: https://dimensions.edu.sg/international-students/"
  },
  "security": {
    "detail": "Security partnerships & coordination: There is no information on formal security partnerships with external agencies or internal emergency-response protocols in the reviewed DIMENSIONS pages; campus security coordination details are not publicly disclosed.\u2028Link: https://dimensions.edu.sg/faq/"
  },
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_dimensionsintcollegesingapore, "Dimensions Int. College (Singapore)", []);

// --- EAST ASIA INSTITUTE OF MANAGEMENT (Singapore) ---
const univ_eastasiainstituteofmanagementsingapore = db.institutions.insertOne(inst({
  "name": "EAST ASIA INSTITUTE OF MANAGEMENT (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://eaim.edu.sg",
  "application_portal": "International students are instructed on the \u201cAdmission International Students\u201d page to confirm their course, consult course consultants if needed, and then download and submit the EAIM application form along with required documents; the application form is accessed via the \u201cDocument Download \u2013 Application Form\u201d link on this page.\u2028Link: https://eaim.edu.sg/admission-international-students/",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 540,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: EAIM\u2019s Student Service Centre (SSC) functions as a one-stop centre handling course information, university matriculation, and related administrative matters; while this includes practical academic and administrative guidance, a separate, detailed career services or placement-statistics page is not provided and specific placement support structures are not publicly disclosed.\u2028Links: https://eaim.edu.sg/admission-international-students/, https://eaim.edu.sg/admission-local-students/",
    "coop_available": true
  },
  "campus_life": {
    "housing": "International office (phone, email): Student Service Centre (SSC) contact for international and local students: phone +65 6351 7892, email studentservice@eaim.edu.sg; SSC handles ICA/EAIM Pass, orientation, accommodation, and other services.\u2028Links: https://eaim.edu.sg/admission-international-students/, https://eaim.edu.sg/admission-local-students/",
    "clubs": "Campus life (student clubs, activities, facilities): EAIM\u2019s programme and institutional profile highlights over 40 years of nurturing career-ready professionals, collaboration with UK universities, and a comprehensive suite of programmes across disciplines; individual campus-tour style pages similar to other PEIs are not fully exposed via tools, and EAIM does not list a detailed directory of student clubs and societies, so specific club lists and activity descriptions are not publicly disclosed in the retrieved content.\u2028Link: https://eaim.edu.sg/about-eaim/"
  },
  "security": {
    "detail": "Campus security partnerships & coordination: The same Private Education Act compliance page focuses on regulatory and governance compliance rather than operational safety partnerships, so detailed information on security partnerships or emergency-response coordination is not publicly disclosed.\u2028Link: https://eaim.edu.sg/about-private-education-act/"
  },
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_eastasiainstituteofmanagementsingapore, "EAST ASIA INSTITUTE OF MANAGEMENT (Singapore)", []);

// --- ERC Institute (Singapore) ---
const univ_ercinstitutesingapore = db.institutions.insertOne(inst({
  "name": "ERC Institute (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://erci.edu.sg",
  "application_portal": "ERCI provides a \u201cProgramme Application Form\u201d (PDF) listing language, foundation, diploma, advanced diploma, specialist diploma, postgraduate diploma, and partner bachelor\u2019s programmes; applicants submit this form and required documents to ERCI as part of the application process.\u2028Link: https://erci.edu.sg/docu/F-800-21%20Programme%20Application%20Form.pdf",
  "contacts": {
    "admissions": {
      "phone": "+65 6349 2727 (main ERC Institute telephone number).\u2028Link: https://erci.edu.sg/contact-us/",
      "email": "email ssa@erci.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 650,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Career / placement support: ERCI\u2019s Student Services & Administration Division supports students with academic and administrative matters, and each programme has a Programme Manager, but a dedicated central \u201ccareer centre\u201d or detailed placement statistics page is not described on the official site.\u2028Links: https://erci.edu.sg/student-services/, https://erci.edu.sg/cn-study-here/cn-student-services/",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs, activities, facilities: Campus Tour information highlights a state-of-the-art campus at Mountbatten Square and related locations with modern classrooms, access to technology, infrastructure, services, and an in-house counsellor for student support; specific student clubs and societies are not listed individually.\u2028Link: https://erci.edu.sg/study-here/campus-tour/"
  },
  "security": {
    "detail": "Partnerships & coordination: ERCI does not publish information about formal security partnerships with external agencies or detailed emergency-response coordination on its public-facing website; such arrangements are not publicly disclosed.\u2028Link: https://erci.edu.sg"
  },
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_ercinstitutesingapore, "ERC Institute (Singapore)", []);

// --- HEIDELBERG UNIVERSITY (Singapore) ---
const univ_heidelberguniversitysingapore = db.institutions.insertOne(inst({
  "name": "HEIDELBERG UNIVERSITY (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.uni-heidelberg.de/en/study/advisory-services/",
  "application_portal": "https://www.uni-heidelberg.de",
  "contacts": {
    "admissions": {
      "address": "Seminarstr. 2, rooms 29-32, Heidelberg",
      "phone": "+49 6221 54-0"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
    "part_time_work": "Internship/practical training: Yes, embedded in most programs",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs: 10+ active organizations",
    "housing": "Dining and accommodation: Multiple dorms and private housing options"
  },
  "security": {
    "detail": "Emergency services: Standard German police and emergency coordination"
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

addPrograms(univ_heidelberguniversitysingapore, "HEIDELBERG UNIVERSITY (Singapore)", [
  {
    "level": "UG",
    "name": "Psychology B.Sc. (6 semesters)",
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
    "name": "Computer Science B.Sc. (6 semesters)",
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
    "name": "Physics B.Sc.",
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
    "name": "Biology B.Sc.",
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
    "name": "Human Medicine (State Exam)",
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
    "name": "Data and Computer Science M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Molecular Biosciences M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Molecular Biotechnology M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Health M.Sc. (DAAD EPOS available)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Medical Physics M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Psychology B.Sc.",
    "faculty": "Faculty of Behavioural and Cultural Studies, Institute of Psychology",
    "duration_years": 3,
    "annual_fee_cad": 3000,
    "total_fee_cad": 9000,
    "min_class12_percent": 70,
    "required_subjects": [
      "STEM/Science background preferred",
      "psychology foundation courses"
    ],
    "entry_roles": [
      "Clinical psychologist",
      "school psychologist",
      "organizational psychologist",
      "research psychologist",
      "human resources consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science B.Sc. (100%)",
    "faculty": "Faculty of Mathematics and Computer Science, Institute for Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 3000,
    "total_fee_cad": 9000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Strong mathematics",
      "physics",
      "programming background helpful"
    ],
    "entry_roles": [
      "Software developer",
      "data scientist",
      "systems engineer",
      "software engineer",
      "IT consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Physics B.Sc.",
    "faculty": "Faculty of Physics and Astronomy, Institute for Physics",
    "duration_years": 3,
    "annual_fee_cad": 3000,
    "total_fee_cad": 9000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Advanced mathematics",
      "physics",
      "chemistry required"
    ],
    "entry_roles": [
      "Physics researcher",
      "data analyst",
      "semiconductor engineer",
      "research scientist",
      "physics teacher"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Biology B.Sc.",
    "faculty": "Faculty of Biosciences",
    "duration_years": 3,
    "annual_fee_cad": 3000,
    "total_fee_cad": 9000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Biology",
      "chemistry",
      "mathematics required"
    ],
    "entry_roles": [
      "Biologist",
      "research scientist",
      "pharmaceutical analyst",
      "environmental consultant",
      "laboratory technician"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Human Medicine (Staatsexamen - State Examination)",
    "faculty": "Faculty of Medicine - Heidelberg",
    "duration_years": 6,
    "annual_fee_cad": 3000,
    "total_fee_cad": 18000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Chemistry",
      "biology",
      "physics required",
      "strong science background essential"
    ],
    "entry_roles": [
      "Physician",
      "medical researcher",
      "healthcare specialist",
      "clinical fellow"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data and Computer Science M.Sc.",
    "faculty": "Faculty of Mathematics and Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 3000,
    "total_fee_cad": 6000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong programming",
      "mathematics",
      "algorithms",
      "theoretical computer science coursework required"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "software engineer",
      "research scientist",
      "AI engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Molecular Biosciences M.Sc.",
    "faculty": "Faculty of Biosciences",
    "duration_years": 2,
    "annual_fee_cad": 3000,
    "total_fee_cad": 6000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Molecular biology",
      "genetics",
      "biochemistry",
      "or chemistry background"
    ],
    "entry_roles": [
      "Molecular biologist",
      "research scientist",
      "pharmaceutical analyst",
      "biotech specialist",
      "academic researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Molecular Biotechnology M.Sc.",
    "faculty": "Faculty of Engineering Sciences, Institute of Pharmacy and Molecular Biotechnology",
    "duration_years": 2,
    "annual_fee_cad": 3000,
    "total_fee_cad": 6000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Biotechnology",
      "molecular biology",
      "biochemistry",
      "or pharmaceutical science"
    ],
    "entry_roles": [
      "Biotech scientist",
      "pharmaceutical developer",
      "research scientist",
      "quality assurance specialist",
      "regulatory affairs specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "International Health M.Sc.",
    "faculty": "Faculty of Medicine / School of Public Health",
    "duration_years": 2,
    "annual_fee_cad": 3000,
    "total_fee_cad": 6000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Public health",
      "medicine",
      "social sciences",
      "or development studies"
    ],
    "entry_roles": [
      "Public health specialist",
      "international health consultant",
      "healthcare policy analyst",
      "development worker",
      "NGO health officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Medical Physics M.Sc.",
    "faculty": "Faculty of Physics and Astronomy / Medical Faculty",
    "duration_years": 2,
    "annual_fee_cad": 3000,
    "total_fee_cad": 6000,
    "min_class12_percent": 60,
    "required_subjects": [
      "Physics",
      "mathematics",
      "medical science",
      "or engineering"
    ],
    "entry_roles": [
      "Medical physicist",
      "radiation physicist",
      "healthcare technology specialist",
      "medical research scientist",
      "biomedical engineer"
    ],
    "features": []
  }
]);

// --- INSEAD SINGAPORE ---
const univ_inseadsingapore = db.institutions.insertOne(inst({
  "name": "INSEAD SINGAPORE",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.insead.edu/",
  "application_portal": "(1) Create account on official INSEAD application portal; (2) Select program (MBA, MIM, MIF, EMBA, etc.); (3) Complete application form; (4) Submit GMAT/GRE and English language test scores; (5) Submit three professional recommendation letters; (6) Write required personal essays; (7) Submit resume and documents; (8) Pay application fee (\u20ac250); (9) Submit application by deadline; (10) Receive decision within weeks; (11) Accept offer; (12) Arrange student visa; (13) Pay tuition fees per payment schedule; (14) Arrive and register",
  "contacts": {
    "admissions": {
      "address": "1 Ayer Rajah Avenue, Singapore 138676",
      "phone": "+65 6799 5388"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 250,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
      "name": "INSEAD Women\u2019s Scholarship (\u20ac15,000)"
    },
    {
      "name": "INSEAD Alumni Fund Robin Hood Scholarship (up to \u20ac20,000)"
    },
    {
      "name": "INSEAD Orange Endowed Scholarship for Emerging Markets (for India, Brazil, Egypt, etc.)"
    },
    {
      "name": "INSEAD Louis Vuitton Scholarship (for India/China nationals; \u20ac25,000)"
    },
    {
      "name": "INSEAD Ryoichi Sasakawa Young Leaders Fellowship Fund (merit-based; any nationality)"
    },
    {
      "name": "INSEAD Africa Leadership Fund Scholarship (need-based)"
    },
    {
      "name": "Andrew Horden Endowed Scholarship (for non-traditional MBA backgrounds)"
    },
    {
      "name": "Aga Khan Scholarship (merit and need-based)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2014 integrated into program curriculum; industry case studies and consulting projects; Global exchange on 3 campuses",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 48 student associations; MBA student clubs run by students; sports sections; cultural events; networking events"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail; safe campus environment in Singapore\u2019s Knowledge Hub district"
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

addPrograms(univ_inseadsingapore, "INSEAD SINGAPORE", [
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) - 10 months",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MIM) - 18 months",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global Executive MBA (GEMBA) - 14\u201317 months",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Executive Master in Finance (EMFin) - Modular format",
    "faculty": "",
    "duration_years": 1.5,
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
    "faculty": "INSEAD Graduate Business School \u2013 MBA Programme",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "corporate strategist",
      "entrepreneur",
      "senior management roles",
      "average salary \u20ac140",
      "600\u2013\u20ac180",
      "000 annually post-graduation (varies by sector)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Management (MIM)",
    "faculty": "INSEAD Graduate Business School \u2013 MIM Programme",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "corporate strategist",
      "analyst roles in consulting",
      "finance",
      "technology",
      "career launcher program for graduates"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master in Finance (MIF)",
    "faculty": "INSEAD Graduate Business School \u2013 Master in Finance Programme",
    "duration_years": 1.5,
    "annual_fee_cad": 60000,
    "total_fee_cad": 90000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Quantitative analyst",
      "investment banker",
      "financial analyst",
      "risk manager",
      "roles in investment banking",
      "asset management",
      "fintech"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Global Executive MBA (GEMBA)",
    "faculty": "INSEAD Graduate Business School \u2013 GEMBA Programme",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior executive",
      "C-suite positions",
      "business leader",
      "entrepreneur",
      "roles for career advancement at executive level"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Executive Master in Finance (EMFin)",
    "faculty": "INSEAD Graduate Business School \u2013 Executive Master in Finance",
    "duration_years": 1.5,
    "annual_fee_cad": 97500,
    "total_fee_cad": 146250,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior finance executive",
      "CFO",
      "Chief Investment Officer",
      "finance director",
      "roles for advancement in banking",
      "corporate finance"
    ],
    "features": []
  }
]);

// --- JAMES COOK UNIVERSITY (Singapore) ---
const univ_jamescookuniversitysingapore = db.institutions.insertOne(inst({
  "name": "JAMES COOK UNIVERSITY (Singapore)",
  "abbreviation": "SINGAPORE",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.jcu.edu.au",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "email": "globalexperience@jcu.edu.au",
      "phone": "+65 6709 3888",
      "address": "149 Sims Drive, Singapore 387380"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
    "Eligibility Requirements (Indian Students)"
  ],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_jamescookuniversitysingapore, "JAMES COOK UNIVERSITY (Singapore)", [
  {
    "level": "PG",
    "name": "Intakes & Deadlines",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Scholarships & Financial Support",
    "faculty": "",
    "duration_years": 1.5,
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
    "duration_years": 1.5,
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Application Process",
    "faculty": "",
    "duration_years": 1.5,
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Business (general and majors)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Information Technology",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Psychological Science",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Commerce (Accounting, Banking & Finance)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Science (Data Science, Internet of Things)",
    "faculty": "",
    "duration_years": 1.5,
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology (Business Informatics, Computing)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Psychological Science (Business Psychology)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Tourism and Hospitality Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Finance, Analytics & Business Solutions)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business",
    "faculty": "School of Business",
    "duration_years": 3,
    "annual_fee_cad": 22236,
    "total_fee_cad": 66708,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specified",
      "general 12th pass acceptable"
    ],
    "entry_roles": [
      "Business Analyst",
      "Management Consultant",
      "Marketing Executive"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology",
    "faculty": "School of Computing and Information Technology",
    "duration_years": 3,
    "annual_fee_cad": 22236,
    "total_fee_cad": 66708,
    "min_class12_percent": 70,
    "required_subjects": [
      "None specified",
      "general 12th pass sufficient"
    ],
    "entry_roles": [
      "Software Developer",
      "Systems Administrator",
      "IT Support Specialist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Psychological Science",
    "faculty": "School of Psychology and Public Health",
    "duration_years": 3,
    "annual_fee_cad": 23195,
    "total_fee_cad": 69585,
    "min_class12_percent": 70,
    "required_subjects": [
      "English Units 3/4 (Grade C minimum)"
    ],
    "entry_roles": [
      "Research Assistant",
      "HR Specialist",
      "Organizational Psychologist",
      "Counselor"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Accounting Major)",
    "faculty": "School of Business",
    "duration_years": 3,
    "annual_fee_cad": 22236,
    "total_fee_cad": 66708,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics recommended (not mandatory)"
    ],
    "entry_roles": [
      "Junior Accountant",
      "Audit Associate",
      "Financial Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Data Science Major)",
    "faculty": "School of Science",
    "duration_years": 3,
    "annual_fee_cad": 23195,
    "total_fee_cad": 69585,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Science (recommended)"
    ],
    "entry_roles": [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration",
    "faculty": "School of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 41529,
    "total_fee_cad": 62293,
    "min_class12_percent": 60,
    "required_subjects": [
      "Relevant academic background (any discipline acceptable)"
    ],
    "entry_roles": [
      "Business Analyst",
      "Project Manager",
      "Management Consultant",
      "Entrepreneur"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Information Technology (Business Informatics Major)",
    "faculty": "School of Computing and Information Technology",
    "duration_years": 1.5,
    "annual_fee_cad": 28601,
    "total_fee_cad": 42901,
    "min_class12_percent": 60,
    "required_subjects": [
      "Relevant academic background in computing or IT required"
    ],
    "entry_roles": [
      "IT Business Analyst",
      "Systems Architect",
      "Business Informatics Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Psychological Science (Business Psychology Major)",
    "faculty": "School of Psychology and Public Health",
    "duration_years": 1.5,
    "annual_fee_cad": 27645,
    "total_fee_cad": 41467,
    "min_class12_percent": 60,
    "required_subjects": [
      "Relevant academic background in psychology or business"
    ],
    "entry_roles": [
      "Organizational Psychologist",
      "HR Manager",
      "Leadership Coach",
      "Talent Development Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of International Tourism and Hospitality Management",
    "faculty": "School of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 28601,
    "total_fee_cad": 42901,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Hotel Manager",
      "Events Manager",
      "Destination Marketing Manager",
      "Tourism Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (Finance Major)",
    "faculty": "School of Business",
    "duration_years": 1.5,
    "annual_fee_cad": 41529,
    "total_fee_cad": 62293,
    "min_class12_percent": 60,
    "required_subjects": [
      "Recommended but not required"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Manager",
      "Risk Manager",
      "Corporate Finance Manager"
    ],
    "features": []
  }
]);

// --- KAPLAN HIGHER EDUCATION (Singapore) ---
const univ_kaplanhighereducationsingapore = db.institutions.insertOne(inst({
  "name": "KAPLAN HIGHER EDUCATION (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.kaplan.com.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+65 8613 8989",
      "email": "enquiry.sg@kaplan.com"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
      "name": "Merit-based scholarships: Up to S$5,000 for Indian students with strong academic records"
    },
    {
      "name": "Graduate Certificate scholarships available"
    }
  ],
  "internships": {
    "part_time_work": "CareersHub Portal for job postings & internships",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Kaplan Adventurers\u2019 Club for outdoor activities"
  },
  "security": {
    "detail": "Emergency hotlines for each campus"
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

addPrograms(univ_kaplanhighereducationsingapore, "KAPLAN HIGHER EDUCATION (Singapore)", [
  {
    "level": "UG",
    "name": "Bachelor of Business in Accounting and Finance (Double Major)",
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
    "name": "Bachelor of Business in International Business",
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
    "name": "Bachelor of Information Technology in Cyber Security and Forensics",
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
    "name": "Bachelor of Business in Banking and Finance",
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
    "name": "Bachelor of Business in Marketing",
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Human Resource Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Analytics",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Communication",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in Accounting and Finance (Double Major) \u2014 Murdoch University",
    "faculty": "Business & Accounting School",
    "duration_years": 3,
    "annual_fee_cad": 25637,
    "total_fee_cad": 76911,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in Banking and Finance (Double Major) \u2014 Murdoch University",
    "faculty": "Business & Finance School",
    "duration_years": 3,
    "annual_fee_cad": 25637,
    "total_fee_cad": 76911,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Investment Banker",
      "Financial Analyst",
      "Credit Analyst",
      "Relationship Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Information Technology in Cyber Security and Forensics (Double Major) \u2014 Murdoch University",
    "faculty": "IT & Cyber Security School",
    "duration_years": 3,
    "annual_fee_cad": 27112,
    "total_fee_cad": 81336,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Cyber Security Officer",
      "Ethical Hacker",
      "Digital Forensics Investigator",
      "Information Security Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in International Business (Single Major) \u2014 Murdoch University",
    "faculty": "Business & Management School",
    "duration_years": 3,
    "annual_fee_cad": 25637,
    "total_fee_cad": 76911,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "International Business Analyst",
      "Trade Consultant",
      "Global Supply Chain Manager",
      "International Relations Executive"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in Marketing (Single Major) \u2014 Murdoch University",
    "faculty": "Business & Marketing School",
    "duration_years": 3,
    "annual_fee_cad": 25637,
    "total_fee_cad": 76911,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Marketing Manager",
      "Digital Marketing Specialist",
      "Brand Manager",
      "Market Research Analyst"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA) \u2014 Murdoch University",
    "faculty": "Graduate Business School",
    "duration_years": 1.5,
    "annual_fee_cad": 31588,
    "total_fee_cad": 47382,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior Manager",
      "Business Development Executive",
      "Chief Operating Officer",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Communication \u2014 Murdoch University",
    "faculty": "Graduate Communication School",
    "duration_years": 1.5,
    "annual_fee_cad": 31588,
    "total_fee_cad": 47382,
    "min_class12_percent": 60,
    "required_subjects": [
      "Relevant academic background in communication/media preferred"
    ],
    "entry_roles": [
      "Communications Manager",
      "Media Producer",
      "Content Strategist",
      "Public Relations Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance \u2014 University College Dublin",
    "faculty": "Graduate Finance & Business School",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Financial Analyst",
      "Investment Manager",
      "Risk Manager",
      "Treasury Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Analytics \u2014 University of Portsmouth",
    "faculty": "Graduate IT & Data Science School",
    "duration_years": 1.5,
    "annual_fee_cad": 202,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Data Scientist",
      "Business Analyst",
      "Analytics Manager",
      "Data Engineer"
    ],
    "features": []
  }
]);

// --- LASALLE COLLEGE OF THE ARTS (Singapore) ---
const univ_lasallecollegeoftheartssingapore = db.institutions.insertOne(inst({
  "name": "LASALLE COLLEGE OF THE ARTS (Singapore)",
  "abbreviation": "",
  "type": "college",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.lasalle.edu.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+65 6496 5111",
      "address": "McNally Campus (Main), 1 McNally Street, Singapore 187940"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes \u2013 Multiple scholarship and financial support programmes available"
    },
    {
      "name": "Value: S$5,400 per academic year"
    },
    {
      "name": "Tenure: Maximum 3 years or minimum duration to complete programme (whichever is shorter)"
    },
    {
      "name": "Eligibility: Excellent academic achievements, strong leadership potential, passion for arts"
    },
    {
      "name": "Maintenance requirement: Minimum 60% grade average per level for subsequent years"
    },
    {
      "name": "Application period: Reflected on respective scholarship pages"
    },
    {
      "name": "Available for Singapore PR and international students"
    },
    {
      "name": "Fee reduction: Approximately 50% of programme fees"
    },
    {
      "name": "Service obligation: 3-year requirement to work for Singapore entity after graduation"
    },
    {
      "name": "Application opens: October each year"
    },
    {
      "name": "Process: Online application + TG Deed signature with Government"
    },
    {
      "name": "Bursaries available for eligible students"
    },
    {
      "name": "Tuition Fee Loan: Up to 90% for degree, 75% for diploma programmes"
    },
    {
      "name": "External scholarships: Opportunities from external organizations"
    },
    {
      "name": "Application dates: Reflected on bursary pages"
    }
  ],
  "internships": {
    "part_time_work": "Job Placement Assistance: Support navigating creative career pathways",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Cultural clubs and interest-based organizations"
  },
  "security": {
    "detail": "Campus security personnel on duty"
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

addPrograms(univ_lasallecollegeoftheartssingapore, "LASALLE COLLEGE OF THE ARTS (Singapore)", [
  {
    "level": "UG",
    "name": "Diploma in Fine Arts",
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
    "name": "BA (Hons) Fine Arts",
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
    "name": "BA (Hons) Design for Communication and Experiences",
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
    "name": "BA (Hons) Animation Art",
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
    "name": "BA (Hons) Fashion Design and Textiles",
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
    "name": "MA Art Therapy",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Arts and Cultural Leadership",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Creative Writing",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Design (Fine Arts/Design specializations)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Fine Arts",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Diploma in Fine Arts",
    "faculty": "Faculty of Fine Arts",
    "duration_years": 3,
    "annual_fee_cad": 23000,
    "total_fee_cad": 69000,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream accepted",
      "interest in fine arts required"
    ],
    "entry_roles": [
      "Artist",
      "Curator",
      "Gallery Manager",
      "Art Conservator",
      "Art Educator",
      "Art Writer/Reviewer",
      "Illustrator",
      "Sculptor",
      "Painter",
      "Printmaker",
      "Photographer",
      "Video Artist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Fine Arts \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Fine Arts",
    "duration_years": 3,
    "annual_fee_cad": 82880,
    "total_fee_cad": 248640,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream",
      "arts background beneficial"
    ],
    "entry_roles": [
      "Artist",
      "Curator",
      "Gallery Manager",
      "Museum Manager",
      "Art Teacher",
      "Conservator",
      "Art Writer",
      "Illustrator",
      "Model/Prop Maker",
      "Photographer",
      "Sculptor",
      "Video Artist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Design for Communication and Experiences",
    "faculty": "Faculty of Design",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream",
      "design background helpful"
    ],
    "entry_roles": [
      "Graphic Designer",
      "Design Strategist",
      "Brand Designer",
      "UX/UI Designer",
      "Illustrator",
      "Art Director"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Animation Art \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Design (Animation)",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Interest in animation",
      "digital arts"
    ],
    "entry_roles": [
      "Animator",
      "Motion Graphics Designer",
      "VFX Artist",
      "Storyboard Artist",
      "Game Designer",
      "3D Artist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "BA (Hons) Fashion Design and Textiles \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Design (Fashion)",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Fashion or art background preferred"
    ],
    "entry_roles": [
      "Fashion Designer",
      "Textile Designer",
      "Costume Designer",
      "Fashion Consultant",
      "Pattern Maker",
      "Garment Technologist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Art Therapy \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Fine Arts, Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 23320,
    "total_fee_cad": 34980,
    "min_class12_percent": 60,
    "required_subjects": [
      "Psychology",
      "counselling",
      "arts",
      "or related field"
    ],
    "entry_roles": [
      "Art Therapist",
      "Mental Health Professional",
      "Counsellor",
      "Clinical Practitioner",
      "Hospital/Clinic Art Therapist",
      "School Counselor",
      "Community Therapist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Arts and Cultural Leadership \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Fine Arts, Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 23320,
    "total_fee_cad": 34980,
    "min_class12_percent": 60,
    "required_subjects": [
      "Arts",
      "cultural studies",
      "management",
      "or related field"
    ],
    "entry_roles": [
      "Arts Administrator",
      "Cultural Policy Maker",
      "Gallery Director",
      "Museum Manager",
      "Arts Educator",
      "Cultural Consultant",
      "Arts Project Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Creative Writing \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Fine Arts, Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 23320,
    "total_fee_cad": 34980,
    "min_class12_percent": 60,
    "required_subjects": [
      "Literature",
      "language",
      "humanities",
      "or arts"
    ],
    "entry_roles": [
      "Author",
      "Editor",
      "Publishing Professional",
      "Journalist",
      "Content Writer",
      "Literary Agent",
      "Writing Educator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Design \u2013 Goldsmiths, University of London",
    "faculty": "Faculty of Design, Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 23320,
    "total_fee_cad": 34980,
    "min_class12_percent": 60,
    "required_subjects": [
      "Design",
      "architecture",
      "visual arts",
      "or related field"
    ],
    "entry_roles": [
      "Design Director",
      "Product Designer",
      "UX/UI Designer",
      "Graphic Designer",
      "Brand Strategist",
      "Design Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "MA Fine Arts \u2013 Goldsmiths, University of London",
    "faculty": "LASALLE is constituent college of University of the Arts Singapore (UAS) from 2024",
    "duration_years": 1.5,
    "annual_fee_cad": 202,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Fine arts",
      "visual arts",
      "design",
      "or creative practice"
    ],
    "entry_roles": [
      "Professional Artist",
      "Curator",
      "Gallery Director",
      "Art Educator",
      "Artist Residency Lead",
      "Museum Professional"
    ],
    "features": []
  }
]);

// --- MDIS (Singapore) ---
const univ_mdissingapore = db.institutions.insertOne(inst({
  "name": "MDIS (Singapore)",
  "abbreviation": "MANAGEMENT DEVELOPMENT INSTITUTE OF SINGAPORE",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.mdis.edu.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+65 6247 9111 (Local Enquiries) / +65 6278 8000 (International Enquiries)",
      "email": "etc@mdis.edu.sg (Local Applicants) / ib@mdis.edu.sg (International Applicants)"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes \u2013 Multiple scholarship and sponsorship options available"
    },
    {
      "name": "Bachelor\u2019s Degree: SGD 3,000 per award"
    },
    {
      "name": "Master\u2019s Degree: SGD 3,800-5,000 per award"
    },
    {
      "name": "Pre-Degree Programmes: SGD 500 per award"
    },
    {
      "name": "Must apply for admission to MDIS first (no separate scholarship application required)"
    },
    {
      "name": "Demonstrated record of academic achievement"
    },
    {
      "name": "Strong leadership qualities and excellent interpersonal/communication skills"
    },
    {
      "name": "Company co-sponsorship available for eligible candidates"
    },
    {
      "name": "MBA Full-time: Base fees S$23,980 \u2192 With scholarship: S$15,260 (35% reduction)"
    },
    {
      "name": "MBA Part-time: Base fees S$28,122 \u2192 With scholarship: S$19,620 (30% reduction)"
    },
    {
      "name": "Open throughout the year"
    },
    {
      "name": "Submit at least 1 month before course commencement"
    },
    {
      "name": "All shortlisted applicants go through interview process"
    }
  ],
  "internships": {
    "part_time_work": "Complimentary job and internship placements through MDIS CareerHub",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Hobby & Interest Clubs: Photography Club, Performing Arts Club, Sports Club",
    "housing": "Student hostel: MDIS Residences @ Stirling (on-campus accommodation)"
  },
  "security": {
    "detail": "Advanced campus security measures"
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

addPrograms(univ_mdissingapore, "MDIS (Singapore)", [
  {
    "level": "UG",
    "name": "Bachelor of Science (Honours) in Business Management and Finance",
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
    "name": "Bachelor of Science (Honours) in Tourism and Hospitality Management",
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
    "name": "Bachelor of Commerce in Accounting and Finance",
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
    "name": "Bachelor of Science in Information Technology",
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
    "name": "Advanced Diploma in Hospitality and Hotel Management",
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration in International Marketing",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration in Banking and Finance",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Tourism and Hospitality Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Business Administration",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Honours) in Business Management and Finance",
    "faculty": "School of Business and Management",
    "duration_years": 3,
    "annual_fee_cad": 14824,
    "total_fee_cad": 44472,
    "min_class12_percent": 55,
    "required_subjects": [
      "No specific subject requirements",
      "any stream acceptable"
    ],
    "entry_roles": [
      "Business Analyst",
      "Finance Officer",
      "Management Consultant",
      "Operations Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Honours) in Tourism and Hospitality Management",
    "faculty": "School of Tourism, Hospitality & Events Management",
    "duration_years": 3,
    "annual_fee_cad": 13000,
    "total_fee_cad": 39000,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any stream accepted",
      "Commerce/Business helpful"
    ],
    "entry_roles": [
      "Hotel Manager",
      "Event Coordinator",
      "Restaurant Manager",
      "Tourism Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce in Accounting and Finance",
    "faculty": "School of Accounting, Finance & Business",
    "duration_years": 3,
    "annual_fee_cad": 15000,
    "total_fee_cad": 45000,
    "min_class12_percent": 55,
    "required_subjects": [
      "Mathematics background preferred",
      "any stream accepted"
    ],
    "entry_roles": [
      "Accountant",
      "Financial Analyst",
      "Auditor",
      "Tax Consultant",
      "Junior Accountant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Technology",
    "faculty": "School of Information Technology & Engineering",
    "duration_years": 3,
    "annual_fee_cad": 14000,
    "total_fee_cad": 42000,
    "min_class12_percent": 55,
    "required_subjects": [
      "Science stream preferred",
      "technical aptitude required"
    ],
    "entry_roles": [
      "Software Developer",
      "IT Support Specialist",
      "Systems Administrator",
      "Network Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Advanced Diploma in Hospitality and Hotel Management",
    "faculty": "School of Tourism, Hospitality & Events Management",
    "duration_years": 3,
    "annual_fee_cad": 11000,
    "total_fee_cad": 33000,
    "min_class12_percent": 55,
    "required_subjects": [
      "Any stream accepted",
      "hospitality interest helpful"
    ],
    "entry_roles": [
      "Hotel Front Office Clerk",
      "F&B Service Supervisor",
      "Housekeeping Coordinator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "School of Postgraduate Studies, Business School",
    "duration_years": 1.5,
    "annual_fee_cad": 700,
    "total_fee_cad": 1050,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline considered",
      "business/management beneficial"
    ],
    "entry_roles": [
      "Senior Manager",
      "Business Development Executive",
      "Operations Manager",
      "Consultant",
      "Strategic Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration in International Marketing",
    "faculty": "School of Postgraduate Studies, Marketing & Business",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Marketing",
      "Business",
      "or related field preferred"
    ],
    "entry_roles": [
      "Marketing Manager",
      "International Business Development Manager",
      "Brand Manager",
      "Market Research Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration in Banking and Finance",
    "faculty": "School of Postgraduate Studies, Finance & Banking",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Banking",
      "Economics",
      "or Accounting background required"
    ],
    "entry_roles": [
      "Finance Manager",
      "Investment Analyst",
      "Risk Manager",
      "Credit Analyst",
      "Treasury Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Tourism and Hospitality Management",
    "faculty": "School of Postgraduate Studies, Tourism & Hospitality",
    "duration_years": 1.5,
    "annual_fee_cad": 202,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Tourism",
      "Hospitality",
      "Business",
      "or related field"
    ],
    "entry_roles": [
      "Hotel General Manager",
      "Tourism Director",
      "Event Manager",
      "Hospitality Consultant"
    ],
    "features": []
  }
]);

// --- NANYANG ACADEMY OF FINE ARTS (Singapore) ---
const univ_nanyangacademyoffineartssingapore = db.institutions.insertOne(inst({
  "name": "NANYANG ACADEMY OF FINE ARTS (Singapore)",
  "abbreviation": "NAFA",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.nafa.edu.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+65 6512 4000"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes \u2013 Multiple scholarships and government tuition grant schemes available"
    },
    {
      "name": "Based on academic performance and artistic merit"
    },
    {
      "name": "Up to 50% tuition fee waiver (specific awards vary)"
    },
    {
      "name": "Selection based on past academic excellence, portfolio results, and test performance"
    },
    {
      "name": "Limited availability with competitive merit-based selection"
    },
    {
      "name": "Covers percentage of tuition fees"
    },
    {
      "name": "Service obligation: 3-year requirement to work for Singapore entity after graduation"
    },
    {
      "name": "Application guided by NAFA after matriculation"
    },
    {
      "name": "Tuition grants from Singapore government"
    },
    {
      "name": "Bursary schemes for eligible students"
    },
    {
      "name": "Various government-funded financial support options"
    }
  ],
  "internships": {
    "part_time_work": "Industry partnerships providing placement opportunities",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student organizations and interest-based societies available"
  },
  "security": {
    "detail": "Campus security personnel on duty"
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

addPrograms(univ_nanyangacademyoffineartssingapore, "NANYANG ACADEMY OF FINE ARTS (Singapore)", [
  {
    "level": "UG",
    "name": "Diploma in Fine Art",
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
    "name": "Bachelor of Arts (Honours) Fine Art",
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
    "name": "Diploma in Design (Interior and Spatial)",
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
    "name": "Diploma in Fashion",
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
    "name": "Diploma in Design Communication and Strategy",
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
    "name": "Master of Fine Arts (Fine Art)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Performance",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Composition",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Music (Honours) \u2013 RCM-NAFA/UAS|NAFA",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Arts (Honours) Design Practice",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Diploma in Fine Art",
    "faculty": "School of Art and Design, Faculty of Fine Arts",
    "duration_years": 3,
    "annual_fee_cad": 74400,
    "total_fee_cad": 223200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream",
      "artistic ability demonstrated"
    ],
    "entry_roles": [
      "Fine Artist",
      "Gallery Curator",
      "Art Educator",
      "Illustrator",
      "Photographer",
      "Sculptor",
      "Printmaker",
      "Restoration Artist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts (Honours) Fine Art \u2013 University of the Arts London",
    "faculty": "School of Art and Design, Faculty of Fine Arts",
    "duration_years": 3,
    "annual_fee_cad": 230,
    "total_fee_cad": 690,
    "min_class12_percent": 70,
    "required_subjects": [
      "Art/creative background preferred",
      "any stream considered"
    ],
    "entry_roles": [
      "Contemporary Artist",
      "Gallery Director",
      "Art Educator",
      "Curator",
      "Museum Professional",
      "Artist Residency Lead",
      "Art Writer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Diploma in Design (Interior and Spatial)",
    "faculty": "School of Art and Design, Faculty of Design",
    "duration_years": 3,
    "annual_fee_cad": 74400,
    "total_fee_cad": 223200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics/Science background helpful",
      "any stream considered"
    ],
    "entry_roles": [
      "Interior Designer",
      "Space Planner",
      "Design Consultant",
      "Architectural Technician",
      "Facilities Manager",
      "Retail Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Diploma in Fashion",
    "faculty": "School of Art and Design, Fashion Design Faculty",
    "duration_years": 3,
    "annual_fee_cad": 74400,
    "total_fee_cad": 223200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Art/creative interest required",
      "any stream accepted"
    ],
    "entry_roles": [
      "Fashion Designer",
      "Pattern Maker",
      "Garment Technologist",
      "Fashion Stylist",
      "Costume Designer",
      "Textile Designer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Diploma in Design Communication and Strategy",
    "faculty": "School of Art and Design, Communication & Strategy Faculty",
    "duration_years": 3,
    "annual_fee_cad": 74400,
    "total_fee_cad": 223200,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream",
      "design/communication interest helpful"
    ],
    "entry_roles": [
      "Graphic Designer",
      "Brand Strategist",
      "Design Director",
      "UX/UI Designer",
      "Art Director",
      "Marketing Designer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Fine Arts (Fine Art) \u2013 University of the Arts London",
    "faculty": "School of Art and Design, Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 21000,
    "total_fee_cad": 31500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Fine arts",
      "visual arts",
      "or creative practice"
    ],
    "entry_roles": [
      "Professional Artist",
      "Curator",
      "Gallery Director",
      "Museum Professional",
      "Art Educator",
      "Art Writer/Critic"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Performance \u2013 University of the Arts London",
    "faculty": "School of Performing Arts, Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 21000,
    "total_fee_cad": 31500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Performance",
      "theatre",
      "music",
      "or dance background"
    ],
    "entry_roles": [
      "Professional Performer",
      "Theatre Director",
      "Choreographer",
      "Dance Educator",
      "Performance Artist",
      "Theatre Producer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Composition \u2013 Royal College of Music",
    "faculty": "Royal College of Music, London",
    "duration_years": 1.5,
    "annual_fee_cad": 21000,
    "total_fee_cad": 31500,
    "min_class12_percent": 60,
    "required_subjects": [
      "Music composition background required"
    ],
    "entry_roles": [
      "Composer",
      "Music Director",
      "Film Score Composer",
      "Conductor",
      "Music Producer",
      "Music Educator"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Bachelor of Music (Honours) \u2013 Royal College of Music / UAS|NAFA",
    "faculty": "University of the Arts London, Royal College of Music London",
    "duration_years": 1.5,
    "annual_fee_cad": 202,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Music performance/training required"
    ],
    "entry_roles": [
      "Professional Musician",
      "Orchestra Member",
      "Music Teacher",
      "Conductor",
      "Session Musician",
      "Music Director"
    ],
    "features": []
  }
]);

// --- NATIONAL UNIVERSITY OF SINGAPORE ---
const univ_nationaluniversityofsingapore = db.institutions.insertOne(inst({
  "name": "NATIONAL UNIVERSITY OF SINGAPORE",
  "abbreviation": "NUS",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.nus.edu.sg/",
  "application_portal": "(1) Create account on application portal; (2) Fill application form with personal/academic details; (3) Upload documents; (4) Submit test scores; (5) Write essay; (6) Pay application fee; (7) Submit application; (8) Await decision (a few weeks); (9) Accept offer; (10) Apply for Singapore student visa; (11) Pay tuition fees; (12) Arrive and register",
  "contacts": {
    "admissions": {
      "address": "21 Lower Kent Ridge Road, Singapore 119077",
      "phone": "+65 6516-2870; Office Hours: Monday\u2013Thursday 9 a.m.\u20131 p.m. and 2 p.m.\u20135:30 p.m.; Friday 9 a.m.\u20131 p.m. and 2 p.m.\u20135 p.m."
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 20,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Graduate Studies Contact: +65 6516 5775; Shaw Foundation Alumni House, 11 Kent Ridge Drive, Singapore 119244"
    },
    {
      "name": "Official Website: https://www.nus.edu.sg/"
    },
    {
      "name": "Application Portal: https://myapplications.nus.edu.sg/"
    },
    {
      "name": "Academic Structure: 17 faculties, schools, departments offering 60+ Bachelor\u2019s degrees, 174 Master\u2019s, PhD and Graduate Diploma programs; 2,000+ modules per semester"
    },
    {
      "name": "UG Academic Requirement: Completed 12 years of formal education; Indian Standard 12 (CBSE, ISC, State Boards) with minimum requirements: good pass in 5 subjects including English; specific percentages vary by program (competitive programs typically require 85%+)"
    },
    {
      "name": "PG Academic Requirement: Bachelor\u2019s degree from recognized institution; GPA/percentage varies by program"
    },
    {
      "name": "English Language Test (IELTS/TOEFL): Not mandatory for most programs; may be required for certain graduate programs"
    },
    {
      "name": "Standardized Tests: GMAT/GRE required for MBA and some Master\u2019s programs; SAT/JEE Advanced/AP exams helpful but not mandatory"
    },
    {
      "name": "Additional Requirements: Official high school transcripts (English language), passport details, resume, test scores, personal essay"
    },
    {
      "name": "Primary Intake: August (single intake cycle annually)"
    },
    {
      "name": "Application Period: Mid-October to March (varies by program)"
    },
    {
      "name": "UG Deadline: Start of February 2026"
    },
    {
      "name": "MS Deadline: February 28, 2026"
    },
    {
      "name": "MBA Deadline: January 15, 2026 (Round 2)"
    },
    {
      "name": "Processing Timeline: Decisions provided within a few weeks"
    },
    {
      "name": "Scholarship Names/Types:"
    },
    {
      "name": "NUS International Undergraduate Scholarship (100% subsidised tuition + S$5,800 annual living allowance + S$5,000 annual accommodation + S$1,750 one-time computer allowance)"
    },
    {
      "name": "ASEAN Undergraduate Scholarship"
    },
    {
      "name": "Science & Technology Undergraduate Scholarship"
    },
    {
      "name": "Dr Goh Keng Swee (GKS) Scholarship (external)"
    },
    {
      "name": "NUS College International Scholarship"
    },
    {
      "name": "GIC Scholarship (external; 3\u20135 year bond)"
    },
    {
      "name": "Various faculty and external scholarships"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2014 Student Exchange Programme (SEP) partnerships with 300+ universities; NUS Overseas Colleges (NOC) programme; industry internships integrated into curriculum",
    "coop_available": true
  },
  "campus_life": {
    "housing": "International Student Support: International Student Centre (ISS); visa assistance; accommodation support; orientation programs; integration programs",
    "clubs": "Student Clubs & Activities: 200+ student clubs and societies; sports sections; cultural events; volunteer organizations; International Student Centre; debate, drama, music societies"
  },
  "security": {
    "detail": "Security Infrastructure: Campus Emergency and Security: +65 6874 1616 (24 hours); well-maintained campus with security presence"
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

addPrograms(univ_nationaluniversityofsingapore, "NATIONAL UNIVERSITY OF SINGAPORE", [
  {
    "level": "UG",
    "name": "Computer Science",
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
    "name": "Business (BBA)",
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
    "name": "Engineering (Electrical, Mechanical, Computer Engineering)",
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
    "name": "Data Science & Artificial Intelligence",
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
    "name": "Medicine/Life Sciences",
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
    "name": "Master of Computing (MComp)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MBA",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (Data Science and Machine Learning)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computing (Artificial Intelligence)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "MSc (Finance / Financial Engineering)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science (Bachelor of Science)",
    "faculty": "School of Computing",
    "duration_years": 4,
    "annual_fee_cad": 23700,
    "total_fee_cad": 94800,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "Software engineer",
      "systems analyst",
      "data scientist",
      "IT consultant",
      "technology roles in multinational companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Business Administration (Bachelor of Business Administration)",
    "faculty": "NUS Business School",
    "duration_years": 4,
    "annual_fee_cad": 22000,
    "total_fee_cad": 88000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "financial analyst",
      "business analyst",
      "corporate roles in banking",
      "consulting",
      "technology firms"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Engineering (Bachelor of Engineering - Electrical/Mechanical/Computer Engineering)",
    "faculty": "Faculty of Engineering",
    "duration_years": 4,
    "annual_fee_cad": 21000,
    "total_fee_cad": 84000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Engineer in semiconductor",
      "telecommunications",
      "automotive",
      "aerospace",
      "technology companies",
      "design engineer",
      "project engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Data Science & Artificial Intelligence (Bachelor of Science)",
    "faculty": "School of Computing / Faculty of Science",
    "duration_years": 4,
    "annual_fee_cad": 23000,
    "total_fee_cad": 92000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "AI researcher",
      "analytics consultant",
      "roles in tech",
      "finance",
      "research sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Medicine (Bachelor of Science in Medicine, MD Program)",
    "faculty": "Yong Loo Lin School of Medicine",
    "duration_years": 5,
    "annual_fee_cad": 28000,
    "total_fee_cad": 140000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Medical doctor in hospitals",
      "clinics",
      "research institutions",
      "opportunities for international practice"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computing (MComp)",
    "faculty": "School of Computing",
    "duration_years": 1.5,
    "annual_fee_cad": 29600,
    "total_fee_cad": 44400,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior software engineer",
      "technology consultant",
      "startup founder",
      "roles in FAANG companies",
      "tech startups"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "NUS Business School",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "investment banker",
      "senior executive",
      "corporate strategy roles",
      "startup founder"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (Data Science and Machine Learning)",
    "faculty": "School of Computing",
    "duration_years": 1.5,
    "annual_fee_cad": 28000,
    "total_fee_cad": 42000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "analytics consultant",
      "AI researcher",
      "roles in tech",
      "finance",
      "healthcare"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computing (Artificial Intelligence)",
    "faculty": "School of Computing",
    "duration_years": 1.5,
    "annual_fee_cad": 29600,
    "total_fee_cad": 44400,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "machine learning specialist",
      "AI researcher",
      "roles in tech",
      "robotics",
      "autonomous systems companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science (Finance / Financial Engineering)",
    "faculty": "Risk Management Institute / Business School",
    "duration_years": 1.5,
    "annual_fee_cad": 30000,
    "total_fee_cad": 45000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Quantitative analyst",
      "financial engineer",
      "investment banker",
      "risk manager",
      "roles in investment banking",
      "fintech"
    ],
    "features": []
  }
]);

// --- PSB ACADEMY (Singapore) ---
const univ_psbacademysingapore = db.institutions.insertOne(inst({
  "name": "PSB ACADEMY (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.psb-academy.edu.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "+65 6390 9000",
      "email": "admissions@psb-academy.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes \u2013 Multiple scholarship and sponsorship programmes available"
    },
    {
      "name": "Academic Merit Scholarship (International) \u2013 Tuition fee waivers based on academic excellence, open to all nationalities"
    },
    {
      "name": "SINDA Sponsorship \u2013 For Singapore Citizens/PRs of Indian origin"
    },
    {
      "name": "Household per capita income \u2264 SGD 1,600 eligible"
    },
    {
      "name": "Up to 100% tuition fee coverage"
    },
    {
      "name": "Diploma: 50% course fees only"
    },
    {
      "name": "Undergraduate Degree: 25% course fees only"
    },
    {
      "name": "Postgraduate: 10% course fees only"
    },
    {
      "name": "ASEAN Scholarship \u2013 For ASEAN nationals in undergraduate programmes"
    },
    {
      "name": "Min GPA 3.0 (Polytechnic Diploma) or Grade B (GCE A-Level)"
    },
    {
      "name": "CCA participation and leadership qualities required"
    },
    {
      "name": "Sports Science Scholarship \u2013 For Singaporeans representing sport at national level (invitation-based)"
    },
    {
      "name": "SAFRA Sponsorship \u2013 For Singaporeans who completed full-time National Service"
    }
  ],
  "internships": {
    "part_time_work": "Work must be under approved internship/industrial attachment program",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities:"
  },
  "security": {
    "detail": "Emergency protocols and support systems"
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

addPrograms(univ_psbacademysingapore, "PSB ACADEMY (Singapore)", [
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Accounting & Finance)",
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
    "name": "Bachelor of Science in Ethical Hacking and Cybersecurity",
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
    "name": "Bachelor of Arts with Honours in Business and Marketing",
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
    "name": "Bachelor of Science (Cyber Security)",
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
    "name": "Diploma in Business Administration",
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
    "name": "Master of Science in Analytics (Massey University affiliation)",
    "faculty": "",
    "duration_years": 1.5,
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Engineering Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Postgraduate Diploma in Global Logistics and Supply Chain Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Commerce (Accounting & Finance) \u2013 The University of Newcastle, Australia",
    "faculty": "School of Business and Management",
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
    "name": "33 years (28 months) | Full-time",
    "faculty": "",
    "duration_years": 3,
    "annual_fee_cad": 73009,
    "total_fee_cad": 219027,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific stream requirements",
      "all streams accepted"
    ],
    "entry_roles": [
      "Accountant",
      "Junior Financial Analyst",
      "Audit Assistant",
      "Tax Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Ethical Hacking and Cybersecurity \u2013 Partner University",
    "faculty": "School of Engineering and Technology",
    "duration_years": 3,
    "annual_fee_cad": 23282,
    "total_fee_cad": 69846,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science background preferred",
      "technical aptitude required"
    ],
    "entry_roles": [
      "Ethical Hacker",
      "Cybersecurity Officer",
      "Junior Security Analyst",
      "Penetration Tester"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts with Honours in Business and Marketing \u2013 Coventry University, United Kingdom",
    "faculty": "School of Business and Management",
    "duration_years": 3,
    "annual_fee_cad": 27700,
    "total_fee_cad": 83100,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream accepted",
      "Commerce/Business background helpful"
    ],
    "entry_roles": [
      "Marketing Executive",
      "Brand Officer",
      "Digital Marketing Specialist",
      "Market Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Cyber Security \u2013 PSB Academy",
    "faculty": "School of Engineering and Technology, STEM Division",
    "duration_years": 3,
    "annual_fee_cad": 23282,
    "total_fee_cad": 69846,
    "min_class12_percent": 70,
    "required_subjects": [
      "Science/Mathematics background preferred"
    ],
    "entry_roles": [
      "Network Security Officer",
      "System Administrator",
      "IT Security Specialist",
      "Vulnerability Analyst"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Diploma in Business Administration \u2013 PSB Academy",
    "faculty": "School of Business and Management",
    "duration_years": 3,
    "annual_fee_cad": 12906,
    "total_fee_cad": 38718,
    "min_class12_percent": 70,
    "required_subjects": [
      "No specific subject requirements"
    ],
    "entry_roles": [
      "Junior Administrator",
      "Business Officer",
      "Executive Assistant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Analytics \u2013 Massey University, New Zealand",
    "faculty": "School of Postgraduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "IT",
      "Mathematics",
      "Statistics",
      "or related field preferred"
    ],
    "entry_roles": [
      "Data Scientist",
      "Analytics Manager",
      "Business Analyst",
      "Data Engineer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration \u2013 The University of Newcastle, Australia",
    "faculty": "School of Postgraduate Studies, Business School",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "business/management beneficial"
    ],
    "entry_roles": [
      "Senior Manager",
      "Business Development Executive",
      "Operations Manager",
      "Consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Engineering Management \u2013 Coventry University, United Kingdom",
    "faculty": "School of Engineering and Technology, Postgraduate Division",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering",
      "Technology",
      "or Management background required"
    ],
    "entry_roles": [
      "Engineering Manager",
      "Project Manager",
      "Operations Engineer",
      "Systems Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance \u2013 Partner University",
    "faculty": "School of Postgraduate Studies, Finance Division",
    "duration_years": 1.5,
    "annual_fee_cad": 202,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Finance",
      "Banking",
      "Accounting",
      "or Economics background required"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Manager",
      "Risk Manager",
      "Treasury Specialist"
    ],
    "features": []
  }
]);

// --- RWTH AACHEN UNIVERSITY (Singapore) ---
const univ_rwthaachenuniversitysingapore = db.institutions.insertOne(inst({
  "name": "RWTH AACHEN UNIVERSITY (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.rwth-aachen.de",
  "application_portal": "RWTHonline",
  "contacts": {
    "admissions": {
      "address": "Templergraben 57, 52062 Aachen, Germany",
      "phone": "+49 241 80-90674",
      "email": "int-zugang@rwth-aachen.de"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
      "name": "Application: Check official website for deadlines"
    }
  ],
  "internships": {
    "part_time_work": "Industry partnerships: Multiple companies collaborate on internships and master thesis projects",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student clubs and activities: 10+ student clubs (music, sports, cultural organizations)"
  },
  "security": {
    "detail": "Partnerships: Campus coordinators work with local security and student services"
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

addPrograms(univ_rwthaachenuniversitysingapore, "RWTH AACHEN UNIVERSITY (Singapore)", [
  {
    "level": "UG",
    "name": "Mechanical Engineering B.Sc. (30% popularity)",
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
    "name": "Computer Science B.Sc. (22% popularity)",
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
    "name": "Electrical Engineering & Information Technology B.Sc. (12% popularity)",
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
    "name": "Civil Engineering B.Sc. (6% popularity)",
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
    "name": "Materials Engineering (related field)",
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
    "name": "Automotive Engineering M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computer Science M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Materials Engineering M.Sc. (International Profile)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science M.Sc. (English-taught)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management and Engineering M.Sc.",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Mechanical Engineering B.Sc.",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry (STEM required)"
    ],
    "entry_roles": [
      "Manufacturing engineer",
      "design engineer",
      "production manager",
      "automotive engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Computer Science B.Sc.",
    "faculty": "Faculty of Computer Science",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Computer Science (STEM)"
    ],
    "entry_roles": [
      "Software developer",
      "data analyst",
      "systems engineer",
      "AI engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Electrical Engineering and Information Technology B.Sc.",
    "faculty": "Faculty of Electrical Engineering and Information Technology",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Electronics (STEM)"
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
    "name": "Civil Engineering B.Sc.",
    "faculty": "Faculty of Civil Engineering",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry (STEM)"
    ],
    "entry_roles": [
      "Civil engineer",
      "structural engineer",
      "infrastructure developer",
      "urban planner"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Industrial Engineering / Business Administration and Engineering (Civil Specialization) B.Sc.",
    "faculty": "School of Business and Economics / Faculty of Civil Engineering",
    "duration_years": 3,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Business/Economics (STEM + Business)"
    ],
    "entry_roles": [
      "Project manager",
      "operations engineer",
      "business analyst",
      "management consultant"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Automotive Engineering M.Sc.",
    "faculty": "Faculty of Mechanical Engineering",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Must have 120 ECTS in engineering",
      "mathematics",
      "natural sciences"
    ],
    "entry_roles": [
      "Automotive engineer",
      "vehicle design engineer",
      "systems engineer",
      "autonomous driving specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Computer Science M.Sc.",
    "faculty": "Faculty of Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 596,
    "total_fee_cad": 1192,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in algorithms",
      "programming",
      "mathematics"
    ],
    "entry_roles": [
      "Software engineer",
      "data scientist",
      "machine learning engineer",
      "AI researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Materials Engineering M.Sc. (International Profile)",
    "faculty": "Faculty of Georesources and Materials Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Predefined credits in mathematics",
      "physics",
      "chemistry",
      "mechanics",
      "materials science"
    ],
    "entry_roles": [
      "Materials scientist",
      "metallurgist",
      "sustainability engineer",
      "process engineer",
      "R&D specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Data Science M.Sc.",
    "faculty": "Faculty of Mathematics and Natural Sciences / Faculty of Computer Science",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Strong foundation in programming",
      "mathematics",
      "statistics"
    ],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "business analyst",
      "AI researcher"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Management and Engineering M.Sc.",
    "faculty": "School of Business and Economics / Faculty of Mechanical Engineering",
    "duration_years": 2,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Engineering or technical background",
      "business fundamentals"
    ],
    "entry_roles": [
      "Project manager",
      "operations manager",
      "supply chain manager",
      "business analyst",
      "management consultant"
    ],
    "features": []
  }
]);

// --- SIM GLOBAL EDUCATION (Singapore) ---
const univ_simglobaleducationsingapore = db.institutions.insertOne(inst({
  "name": "SIM GLOBAL EDUCATION (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "www.simge.edu.sg",
  "application_portal": "",
  "contacts": {
    "admissions": {
      "phone": "6248 0281",
      "email": "trichav@sim.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Yes \u2013 Multiple scholarship and financial support programmes available"
    },
    {
      "name": "Academic Excellence Scholarship (Diploma): 100% course fees only"
    },
    {
      "name": "Merit Scholarship (Diploma): Up to 50% course fees"
    },
    {
      "name": "Eligibility: New international students with exemplary academic results"
    },
    {
      "name": "Leadership, interpersonal and communication skills required"
    },
    {
      "name": "Application deadlines: October intake (1 April \u2013 30 June 2026); April intake (1 October \u2013 31 December)"
    },
    {
      "name": "SIM GE Scholarship: Available for academic excellence or sports/arts achievements"
    },
    {
      "name": "Application periods: March or September annually"
    },
    {
      "name": "SIM Merit Scholarship: Up to 50% tuition fees for high-achieving international students"
    },
    {
      "name": "SIM Early Bird Scholarship: Up to 10% for early applicants"
    },
    {
      "name": "SIM Leadership Scholarship: Full or partial fees + leadership training"
    },
    {
      "name": "SIM Sports Scholarship: Full or partial fees + living allowance"
    },
    {
      "name": "SIM Business School Scholarship: Dedicated for business programme students"
    },
    {
      "name": "VueVille Future Technology Scholarship: SGD 1,000 per year"
    },
    {
      "name": "SIA Youth Scholarship: Variable amount (company-sponsored)"
    }
  ],
  "internships": {
    "part_time_work": "Work must be under internship or industrial attachment programme",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Services: Visa assistance, accommodation guidance, onboarding support",
    "clubs": "Documentary evidence of co-curricular activities, scholarships, awards (if any)"
  },
  "security": {
    "detail": "Campus safety protocols and emergency procedures"
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

addPrograms(univ_simglobaleducationsingapore, "SIM GLOBAL EDUCATION (Singapore)", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science and Business Analytics",
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
    "name": "Bachelor of Business in Economics and Finance",
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
    "name": "Bachelor of Business in International Business",
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
    "name": "Bachelor of Arts in Psychology",
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
    "name": "Bachelor of Arts in Communication",
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
    "name": "Master of Science in International Business",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Cyber Security and Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management \u2013 Entrepreneurship and Innovation",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Professional Accountancy",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Data Science and Business Analytics",
    "faculty": "School of Business and Analytics",
    "duration_years": 3,
    "annual_fee_cad": 13666,
    "total_fee_cad": 40998,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics",
      "Science background preferred"
    ],
    "entry_roles": [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Analytics Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in Economics and Finance",
    "faculty": "School of Business and Finance",
    "duration_years": 3,
    "annual_fee_cad": 18312,
    "total_fee_cad": 54936,
    "min_class12_percent": 70,
    "required_subjects": [
      "Mathematics background strongly recommended",
      "any stream accepted"
    ],
    "entry_roles": [
      "Financial Analyst",
      "Investment Officer",
      "Economic Analyst",
      "Treasury Officer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business in International Business",
    "faculty": "School of International Business and Trade",
    "duration_years": 3,
    "annual_fee_cad": 18312,
    "total_fee_cad": 54936,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream accepted",
      "commerce/business background helpful"
    ],
    "entry_roles": [
      "International Business Officer",
      "Trade Executive",
      "Global Manager"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Psychology",
    "faculty": "School of Humanities and Social Sciences",
    "duration_years": 3,
    "annual_fee_cad": 26160,
    "total_fee_cad": 78480,
    "min_class12_percent": 70,
    "required_subjects": [
      "Any stream accepted"
    ],
    "entry_roles": [
      "Counselor",
      "Organizational Psychologist",
      "HR Professional"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Communication",
    "faculty": "School of Communication and Media",
    "duration_years": 3,
    "annual_fee_cad": 26160,
    "total_fee_cad": 78480,
    "min_class12_percent": 70,
    "required_subjects": [
      "English/Communication background helpful",
      "any stream accepted"
    ],
    "entry_roles": [
      "Communications Officer",
      "PR Executive",
      "Media Producer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in International Business",
    "faculty": "School of Graduate Studies, International Business",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Commerce",
      "or related field preferred"
    ],
    "entry_roles": [
      "International Business Manager",
      "Global Trade Officer",
      "Market Entry Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Cyber Security and Management",
    "faculty": "School of Graduate Studies, IT and Cyber Security",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "IT security or cybersecurity background beneficial"
    ],
    "entry_roles": [
      "Cybersecurity Manager",
      "Security Systems Officer",
      "Risk Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management",
    "faculty": "School of Graduate Studies, Management",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Any discipline",
      "management/business experience beneficial"
    ],
    "entry_roles": [
      "Manager",
      "Operations Manager",
      "Strategic Manager",
      "Organizational Development Officer"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Management \u2013 Entrepreneurship and Innovation",
    "faculty": "School of Graduate Studies, Entrepreneurship",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [
      "Business",
      "Management",
      "or related field preferred"
    ],
    "entry_roles": [
      "Entrepreneur",
      "Business Development Manager",
      "Innovation Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Professional Accountancy",
    "faculty": "School of Graduate Studies, Accountancy",
    "duration_years": 1.5,
    "annual_fee_cad": 202,
    "total_fee_cad": 303,
    "min_class12_percent": 60,
    "required_subjects": [
      "Accounting or finance background required"
    ],
    "entry_roles": [
      "Chartered Accountant",
      "Auditor",
      "Tax Specialist",
      "Financial Controller"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "4% of graduates find jobs within 6 months (2019-2020)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  }
]);

// --- SINGAPORE INSTITUTE OF TECHNOLOGY ---
const univ_singaporeinstituteoftechnology = db.institutions.insertOne(inst({
  "name": "SINGAPORE INSTITUTE OF TECHNOLOGY",
  "abbreviation": "SIT",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.singaporetech.edu.sg/",
  "application_portal": "Online via official SIT website https://www.singaporetech.edu.sg/",
  "contacts": {
    "admissions": {
      "address": "Dove Drive, Singapore",
      "phone": "+65 6592 8149",
      "email": "fas@singaporetech.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "Career Readiness Phone: +65 6592 8150"
    },
    {
      "name": "Student Finance Phone: +65 6592 8149"
    },
    {
      "name": "Official Website: https://www.singaporetech.edu.sg/"
    },
    {
      "name": "Undergraduate Programmes: https://www.singaporetech.edu.sg/undergraduate-programmes"
    },
    {
      "name": "Postgraduate Programmes: https://www.singaporetech.edu.sg/postgraduate-programmes"
    },
    {
      "name": "Academic Structure: 5 clusters (Infocomm Technology, Engineering, Chemical Engineering and Food Technology, Health and Social Sciences, Design and Specialized Sciences) offering 30+ undergraduate and 10+ postgraduate programmes"
    },
    {
      "name": "UG Academic Requirement: Completed 12 years of formal education; India Standard 12 (CBSE, ISC, State Boards) with good grades; competitive programs typically require 85%+"
    },
    {
      "name": "PG Academic Requirement: Bachelor\u2019s degree from recognized institution; GPA 3.3+ for most programs (may be lower with impressive work experience)"
    },
    {
      "name": "English Language Test (IELTS/TOEFL): IELTS 6.5+ or TOEFL 90+ required if high school was not English medium; Cambridge English C1 or higher also accepted"
    },
    {
      "name": "Standardized Tests: SAT composite score 29+ recommended; SAT Evidence-based Reading & Writing 600+, Math 650+ recommended"
    },
    {
      "name": "Additional Requirements: High school transcript with grading system explanation, passport details, personal statement (300 words max per question), certified English translations for non-English documents"
    },
    {
      "name": "Primary Intake: September"
    },
    {
      "name": "Application Period: January 10 \u2013 March 19"
    },
    {
      "name": "Interview/Screening Period: February \u2013 May"
    },
    {
      "name": "Application Outcome: Mid-April \u2013 Mid-May"
    },
    {
      "name": "Admission Offer Acceptance: By May 24"
    },
    {
      "name": "Postgraduate Intakes: September, January, May (three admission cycles per year)"
    },
    {
      "name": "Scholarship Names/Types:"
    },
    {
      "name": "SIT Scholarship (merit-based; covers tuition and living allowance)"
    },
    {
      "name": "ASEAN Undergraduate Scholarship (AUS) - for freshmen from ASEAN countries"
    },
    {
      "name": "Singapore International Graduate Award (SINGA) - for international PhD/EngD candidates in Science and Engineering; bond-free; tuition + SGD 2,000 monthly stipend"
    },
    {
      "name": "SIT-SINGA postgraduate research award"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Centre for Career Readiness; career coaching; internship placements; employer presentations; 95% graduate employment rate",
    "coop_available": true,
    "employment_rate_percent": 95
  },
  "campus_life": {
    "clubs": "International Student Support: Office of SITizen Experience providing student activities and support; special education needs support; counseling services",
    "housing": "Facilities: Modern campus; dormitory accommodations; libraries; sports facilities; dining facilities; Wi-Fi throughout campus; medical services"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail on official English-language site; safe campus environment implied through dedicated student services"
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

addPrograms(univ_singaporeinstituteoftechnology, "SINGAPORE INSTITUTE OF TECHNOLOGY", [
  {
    "level": "UG",
    "name": "Information and Communications Technology (Software Engineering)",
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
    "name": "Computer Engineering",
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
    "name": "Applied Artificial Intelligence",
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
    "name": "Electronic and Electrical Engineering",
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
    "name": "Fintech",
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
    "name": "Master of Science in Data Science and Machine Learning",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Civil Engineering",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Technology in Enterprise Business Analytics",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Technology in Intelligent Systems",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical and Electronic Engineering",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) in Information and Communications Technology (Software Engineering)",
    "faculty": "Infocomm Technology Cluster",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "Software engineer",
      "application developer",
      "systems analyst",
      "software architect",
      "roles in tech startups",
      "major corporations"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Hons) in Computer Engineering",
    "faculty": "Engineering Cluster",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "Computer engineer",
      "design engineer",
      "embedded systems engineer",
      "hardware specialist",
      "roles in semiconductor",
      "tech companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) in Applied Artificial Intelligence",
    "faculty": "Infocomm Technology Cluster",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "machine learning specialist",
      "data scientist",
      "AI researcher",
      "roles in tech",
      "healthcare",
      "finance sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering (Hons) in Electronic and Electrical Engineering",
    "faculty": "Engineering Cluster",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "design engineer",
      "electronics specialist",
      "roles in semiconductor",
      "power",
      "telecommunications sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science (Hons) in Fintech",
    "faculty": "Infocomm Technology Cluster",
    "duration_years": 3,
    "annual_fee_cad": 27000,
    "total_fee_cad": 81000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Fintech engineer",
      "blockchain developer",
      "financial software specialist",
      "quantitative analyst",
      "roles in investment banks",
      "fintech startups"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science and Machine Learning",
    "faculty": "Infocomm Technology Cluster \u2013 Graduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 35000,
    "total_fee_cad": 52500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Data scientist",
      "machine learning engineer",
      "analytics consultant",
      "business intelligence analyst",
      "roles in tech",
      "finance",
      "healthcare"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Civil Engineering",
    "faculty": "Engineering Cluster \u2013 Graduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 35000,
    "total_fee_cad": 52500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Civil engineer",
      "project manager",
      "structural engineer",
      "consultant",
      "roles in construction",
      "infrastructure development",
      "consulting firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Technology in Enterprise Business Analytics",
    "faculty": "Infocomm Technology Cluster \u2013 Graduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 35000,
    "total_fee_cad": 52500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Business analyst",
      "data analyst",
      "enterprise analyst",
      "business intelligence specialist",
      "roles in finance",
      "tech",
      "consulting"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Technology in Intelligent Systems",
    "faculty": "Infocomm Technology Cluster \u2013 Graduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 35000,
    "total_fee_cad": 52500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "intelligent systems specialist",
      "machine learning specialist",
      "AI researcher",
      "roles in tech",
      "robotics",
      "autonomous systems"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Electrical and Electronic Engineering",
    "faculty": "Engineering Cluster \u2013 Graduate Studies",
    "duration_years": 1.5,
    "annual_fee_cad": 35000,
    "total_fee_cad": 52500,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Electrical engineer",
      "systems engineer",
      "power engineer",
      "semiconductor specialist",
      "roles in power",
      "semiconductor",
      "telecommunications sectors"
    ],
    "features": []
  }
]);

// --- SINGAPORE UNIVERSITY OF SOCIAL SCIENCES ---
const univ_singaporeuniversityofsocialsciences = db.institutions.insertOne(inst({
  "name": "SINGAPORE UNIVERSITY OF SOCIAL SCIENCES",
  "abbreviation": "SUSS",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.suss.edu.sg/",
  "application_portal": "Online via official SUSS website https://www.suss.edu.sg/",
  "contacts": {
    "admissions": {
      "address": "Namly Avenue (external premises)",
      "phone": "+65 6248 9800",
      "email": "admissions@suss.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 50,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
      "name": "SUSS Temasek Foundation Sunburst Fully Funded Scholarship (tuition fees + living allowance + overseas exchange grant)"
    },
    {
      "name": "ASEAN Economic class scholarships (for students studying abroad in home country)"
    },
    {
      "name": "MOE Tuition Grant (for qualifying international students; bond requirement to work in Singapore post-graduation)"
    },
    {
      "name": "SUSS Study Grant (SGD 1,000)"
    },
    {
      "name": "Higher Education Bursary (up to SGD 3,200)"
    },
    {
      "name": "Higher Education Community Bursary (up to SGD 6,500)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2014 work-integrated learning programs; internship opportunities integrated into curriculum; partner companies provide real-world experience",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: Student societies and clubs; co-curricular activities; sports sections; cultural events; volunteer opportunities"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail on official English-language site; safe learning environment implied"
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

addPrograms(univ_singaporeuniversityofsocialsciences, "SINGAPORE UNIVERSITY OF SOCIAL SCIENCES", [
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
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
    "name": "Bachelor of Science in Psychology",
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
    "name": "Bachelor of Arts in Communications",
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
    "name": "Bachelor of Science in Information Technology",
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
    "name": "Bachelor of Social Work",
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
    "name": "Master of Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management in IP and Innovation Management",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in Boundary-Crossing Learning and Leadership",
    "faculty": "",
    "duration_years": 1.5,
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
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
    "faculty": "School of Business",
    "duration_years": 3,
    "annual_fee_cad": 10000,
    "total_fee_cad": 30000,
    "min_class12_percent": 90,
    "required_subjects": [],
    "entry_roles": [
      "Business analyst",
      "management consultant",
      "corporate strategist",
      "roles in banking",
      "consulting",
      "multinational companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Psychology",
    "faculty": "School of Humanities and Behavioural Sciences",
    "duration_years": 3,
    "annual_fee_cad": 10000,
    "total_fee_cad": 30000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Counselor",
      "HR specialist",
      "organizational psychologist",
      "research analyst",
      "roles in healthcare",
      "corporate",
      "government sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Arts in Communications",
    "faculty": "School of Humanities and Behavioural Sciences",
    "duration_years": 3,
    "annual_fee_cad": 10000,
    "total_fee_cad": 30000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Communications specialist",
      "content strategist",
      "PR officer",
      "media analyst",
      "roles in marketing",
      "media",
      "public sector"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Technology",
    "faculty": "School of Science and Technology",
    "duration_years": 3,
    "annual_fee_cad": 10000,
    "total_fee_cad": 30000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "IT consultant",
      "software developer",
      "systems analyst",
      "technology specialist",
      "roles in tech",
      "finance",
      "healthcare sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Social Work",
    "faculty": "School of Social Work and Social Development",
    "duration_years": 3,
    "annual_fee_cad": 10000,
    "total_fee_cad": 30000,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Social worker",
      "community officer",
      "case manager",
      "policy officer",
      "roles in NGOs",
      "government",
      "healthcare sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management",
    "faculty": "School of Business",
    "duration_years": 4,
    "annual_fee_cad": 18000,
    "total_fee_cad": 72000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Manager",
      "business strategist",
      "operations manager",
      "consultant",
      "roles for career advancement in corporations"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Management in IP and Innovation Management",
    "faculty": "School of Business",
    "duration_years": 4,
    "annual_fee_cad": 18000,
    "total_fee_cad": 72000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "IP attorney",
      "innovation manager",
      "patent specialist",
      "technology strategist",
      "roles in law firms",
      "corporate IP departments (WIPO-recognized degree)"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Arts in Boundary-Crossing Learning and Leadership",
    "faculty": "School of Humanities and Behavioural Sciences",
    "duration_years": 3,
    "annual_fee_cad": 18000,
    "total_fee_cad": 54000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Learning",
      "development manager",
      "education leader",
      "organizational development specialist",
      "roles in education",
      "corporate training"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Business Administration (MBA)",
    "faculty": "School of Business",
    "duration_years": 3,
    "annual_fee_cad": 22000,
    "total_fee_cad": 66000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Senior manager",
      "business consultant",
      "executive strategist",
      "entrepreneur",
      "roles for career advancement"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Finance",
    "faculty": "School of Business",
    "duration_years": 3,
    "annual_fee_cad": 22000,
    "total_fee_cad": 66000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Financial analyst",
      "investment manager",
      "corporate finance specialist",
      "roles in banking",
      "fintech",
      "finance sectors"
    ],
    "features": []
  }
]);

// --- SINGAPORE UNIVERSITY OF TECHNOLOGY AND DESIGN ---
const univ_singaporeuniversityoftechnologyanddesign = db.institutions.insertOne(inst({
  "name": "SINGAPORE UNIVERSITY OF TECHNOLOGY AND DESIGN",
  "abbreviation": "SUTD",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.sutd.edu.sg/",
  "application_portal": "Online via official SUTD website https://www.sutd.edu.sg/",
  "contacts": {
    "admissions": {
      "address": "8 Somapah Road, Singapore 487372",
      "phone": "+65 6303 6600",
      "email": "gradoffice@sutd.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
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
      "name": "SUTD President\u2019s Graduate Fellowship (tuition coverage + SGD 3,000 monthly stipend)"
    },
    {
      "name": "SUTD PhD Fellowships (tuition + SGD 2,000\u20132,500 monthly stipend)"
    },
    {
      "name": "SUTD MEng (Research) Fellowship"
    },
    {
      "name": "SUTD Undergraduate Merit Scholarship (tuition coverage)"
    },
    {
      "name": "SUTD Education Opportunity Grant (SEOG; up to 100% tuition coverage)"
    }
  ],
  "internships": {
    "part_time_work": "Internship Opportunities: Yes \u2014 Undergraduate Practice Opportunities Programme (UPOP); research opportunities; overseas exposure programs; 80+ co-curricular student organizations",
    "coop_available": true
  },
  "campus_life": {
    "clubs": "Student Clubs & Activities: 80+ co-curricular student organizations; Fifth Row (co-curricular) activities; sports sections; cultural events; volunteer opportunities"
  },
  "security": {
    "detail": "Security Infrastructure: Not explicitly disclosed in detail on official English-language site; safe campus environment implied through dedicated student services"
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

addPrograms(univ_singaporeuniversityoftechnologyanddesign, "SINGAPORE UNIVERSITY OF TECHNOLOGY AND DESIGN", [
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Engineering Product Development",
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
    "name": "Bachelor of Engineering in Engineering Systems & Design",
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
    "name": "Bachelor of Engineering in Information Systems Technology & Design",
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
    "name": "Bachelor of Science in Architecture & Sustainable Design",
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
    "name": "Bachelor of Engineering in Design & Artificial Intelligence",
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
    "name": "Master of Science in Technology and Design (MTD) \u2013 Artificial Intelligence",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Technology and Design (MTD) \u2013 Data Science",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Technology and Design (MTD) \u2013 Cybersecurity",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Innovation by Design",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering (Research)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Engineering Product Development",
    "faculty": "Engineering Product Development (EPD) Pillar",
    "duration_years": 4,
    "annual_fee_cad": 30176,
    "total_fee_cad": 120704,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "Product engineer",
      "design engineer",
      "manufacturing engineer",
      "innovation consultant",
      "roles in tech",
      "automotive",
      "aerospace sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Engineering Systems & Design",
    "faculty": "Engineering Systems & Design (ESD) Pillar",
    "duration_years": 4,
    "annual_fee_cad": 30176,
    "total_fee_cad": 120704,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "Systems engineer",
      "operations consultant",
      "urban planner",
      "project management roles",
      "roles in government",
      "corporate sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Information Systems Technology & Design",
    "faculty": "Information Systems Technology & Design (ISTD) Pillar",
    "duration_years": 4,
    "annual_fee_cad": 30176,
    "total_fee_cad": 120704,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "Software engineer",
      "systems analyst",
      "data scientist",
      "technology consultant",
      "AI specialist",
      "roles in tech startups",
      "corporations"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Architecture & Sustainable Design",
    "faculty": "Architecture & Sustainable Design (ASD) Pillar",
    "duration_years": 4,
    "annual_fee_cad": 30176,
    "total_fee_cad": 120704,
    "min_class12_percent": 70,
    "required_subjects": [],
    "entry_roles": [
      "Architect",
      "sustainability consultant",
      "urban designer",
      "design strategist",
      "roles in architecture firms",
      "development companies"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Design & Artificial Intelligence",
    "faculty": "Design & Artificial Intelligence (DAI) Pillar",
    "duration_years": 4,
    "annual_fee_cad": 30176,
    "total_fee_cad": 120704,
    "min_class12_percent": 85,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "machine learning specialist",
      "design innovation consultant",
      "technology strategist",
      "roles in tech",
      "AI companies"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Technology and Design (MTD) \u2013 Artificial Intelligence",
    "faculty": "Graduate Studies \u2013 Master of Science in Technology and Design",
    "duration_years": 1.5,
    "annual_fee_cad": 32000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "machine learning specialist",
      "AI researcher",
      "technology strategist",
      "roles in tech",
      "healthcare",
      "finance sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Technology and Design (MTD) \u2013 Data Science",
    "faculty": "Graduate Studies \u2013 Master of Science in Technology and Design",
    "duration_years": 1.5,
    "annual_fee_cad": 32000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Data scientist",
      "analytics engineer",
      "business intelligence analyst",
      "data consultant",
      "roles in tech",
      "finance",
      "healthcare"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Technology and Design (MTD) \u2013 Cybersecurity",
    "faculty": "Graduate Studies \u2013 Master of Science in Technology and Design",
    "duration_years": 1.5,
    "annual_fee_cad": 32000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Cybersecurity analyst",
      "security architect",
      "security consultant",
      "risk manager",
      "roles in finance",
      "government",
      "tech sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Innovation by Design",
    "faculty": "Graduate Studies \u2013 Master of Innovation by Design",
    "duration_years": 1.5,
    "annual_fee_cad": 32000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Innovation consultant",
      "product manager",
      "design strategist",
      "entrepreneur",
      "roles in tech",
      "innovation firms"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Engineering (Research)",
    "faculty": "Graduate Studies \u2013 Master of Engineering (Research)",
    "duration_years": 1.5,
    "annual_fee_cad": 32000,
    "total_fee_cad": 48000,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [
      "Research engineer",
      "technology specialist",
      "innovation researcher",
      "academic researcher",
      "roles in research institutes",
      "tech companies"
    ],
    "features": []
  }
]);

// --- TMC ACADEMY (Singapore) ---
const univ_tmcacademysingapore = db.institutions.insertOne(inst({
  "name": "TMC ACADEMY (Singapore)",
  "abbreviation": "",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.tmc.edu.sg",
  "application_portal": "International applicants are instructed to download and complete the TMC application form (PDF), submit it with supporting documents for both course admission and Student Pass application, and then pay the application fee, after which TMC processes the application.\u2028Link: https://www.tmc.edu.sg/intl-admission-process-procedure",
  "contacts": {
    "admissions": {},
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 0,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [],
  "internships": {
    "part_time_work": "Campus life (student clubs, activities, facilities): TMC\u2019s advice article for students studying away from home notes that many international students study at TMC, that the academy provides a one-stop service for student pass application, airport pickup, accommodation placement, medical check-up arrangements, pass conversion, and student orientation, and that it helps students prepare for school life, illustrating a structured support environment; specific named student clubs and societies, however, are not listed and thus are not publicly disclosed.\u2028Link: https://www.tmc.edu.sg/post/tips-for-students-studying-away-from-home-for-the-first-time-tmc-academy-singapore",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Campus life (student clubs, activities, facilities): TMC\u2019s advice article for students studying away from home notes that many international students study at TMC, that the academy provides a one-stop service for student pass application, airport pickup, accommodation placement, medical check-up arrangements, pass conversion, and student orientation, and that it helps students prepare for school life, illustrating a structured support environment; specific named student clubs and societies, however, are not listed and thus are not publicly disclosed.\u2028Link: https://www.tmc.edu.sg/post/tips-for-students-studying-away-from-home-for-the-first-time-tmc-academy-singapore",
    "clubs": "Campus life (student clubs, activities, facilities): TMC\u2019s advice article for students studying away from home notes that many international students study at TMC, that the academy provides a one-stop service for student pass application, airport pickup, accommodation placement, medical check-up arrangements, pass conversion, and student orientation, and that it helps students prepare for school life, illustrating a structured support environment; specific named student clubs and societies, however, are not listed and thus are not publicly disclosed.\u2028Link: https://www.tmc.edu.sg/post/tips-for-students-studying-away-from-home-for-the-first-time-tmc-academy-singapore"
  },
  "security": {
    "detail": "Campus security partnerships & coordination: The same administrative policy emphasises notification to and coordination with ICA regarding Student Pass status but does not mention formal security partnerships with external agencies or detailed emergency-response coordination processes, which are therefore not publicly disclosed.\u2028Link: https://www.tmc.edu.sg/administrative-information/course-transfer-and-withdrawal"
  },
  "top_ug_programs": [],
  "top_pg_programs": []
})).insertedId;

addPrograms(univ_tmcacademysingapore, "TMC ACADEMY (Singapore)", []);

// --- TUM ASIA (Singapore) ---
const univ_tumasiasingapore = db.institutions.insertOne(inst({
  "name": "TUM ASIA (Singapore)",
  "abbreviation": "TECHNICAL UNIVERSITY OF MUNICH",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://tum-asia.edu.sg",
  "application_portal": "Online application through TUM Asia website",
  "contacts": {
    "admissions": {
      "email": "general@tum-asia.edu.sg",
      "address": "61 Nanyang Drive, ABN-B2a-08, Singapore 637335",
      "phone": "+49 89 289 25735"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 79,
  "intakes": [
    "Semester 1 (August)",
    "Semester 2 (January)"
  ],
  "deadlines": {},
  "eligibility": {
    "undergraduate": {},
    "postgraduate": {}
  },
  "scholarships": [
    {
      "name": "TUM Asia-DAAD Master of Science Scholarship: Up to \u20ac37,400 across 2 years; 100% tuition coverage; for ASEAN + Timor-Leste nationals"
    },
    {
      "name": "TUM Asia-DAAD Scholarship: \u20ac500-1,800/semester; merit-based; reapplicable each semester; for good academic performance"
    },
    {
      "name": "ASEAN Scholarship: Academic merit + leadership qualities; essay requirement (500 words max)"
    },
    {
      "name": "Academic Distinction Scholarship: Merit-based; criteria not publicly disclosed"
    },
    {
      "name": "Women in STEM Scholarship: Available; criteria not publicly disclosed"
    },
    {
      "name": "Industrial Placement Programme (IPP) Scholarship: SGD 3,500/month + 100% tuition + research grant up to SGD 25,000"
    },
    {
      "name": "EDB Scholarship: Fixed monthly allowance SGD 3,500; 100% training fees; research grant up to SGD 25,000 (capped)"
    },
    {
      "name": "Merit-based scholarships available (specific details not publicly disclosed)"
    }
  ],
  "internships": {
    "part_time_work": "Industry partnerships & internship network",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Private accommodation options: Highlight, Binary Hub, Student House, Daft.ie, NCAD SU networks"
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

addPrograms(univ_tumasiasingapore, "TUM ASIA (Singapore)", [
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology (3 years, with SIT)",
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
    "name": "Bachelor of Science in Chemical Engineering (3 years, with SIT)",
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
    "name": "Bachelor of Science in Information Technology (3 years, with SIT)",
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
    "name": "Bachelor of Science in Mechanical Engineering (3 years)",
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
    "name": "Bachelor of Science in Industrial Management / Engineering Systems and Management (3 years)",
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
    "name": "Master of Science in Aerospace Engineering (2 years, 120 ECTS; TUM only)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Integrated Circuit Design (2 years, 120 ECTS; TUM-NTU joint)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Industrial Chemistry (2 years, 120 ECTS; TUM-NUS joint)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Rail and Urban Transport (2 years, 120 ECTS; TUM only)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Green Electronics (2 years, 120 ECTS; TUM-NTU joint)",
    "faculty": "",
    "duration_years": 1.5,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 60,
    "required_subjects": [],
    "entry_roles": [],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Electrical Engineering and Information Technology",
    "faculty": "School of Engineering (partnership with Singapore Institute of Technology)",
    "duration_years": 3,
    "annual_fee_cad": 26150,
    "total_fee_cad": 78450,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Chemistry foundation",
      "no specific stream mandated"
    ],
    "entry_roles": [
      "Electrical Engineer",
      "Electronics Engineer",
      "Software Engineer",
      "Systems Engineer",
      "Control Systems Specialist",
      "Design Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Chemical Engineering",
    "faculty": "School of Engineering (partnership with Singapore Institute of Technology)",
    "duration_years": 3,
    "annual_fee_cad": 26150,
    "total_fee_cad": 78450,
    "min_class12_percent": 65,
    "required_subjects": [
      "Chemistry",
      "Mathematics",
      "Physics foundation required"
    ],
    "entry_roles": [
      "Chemical Engineer",
      "Process Engineer",
      "Quality Assurance Specialist",
      "Production Engineer",
      "Research & Development Scientist"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Information Technology",
    "faculty": "School of Engineering (partnership with Singapore Institute of Technology)",
    "duration_years": 3,
    "annual_fee_cad": 26150,
    "total_fee_cad": 78450,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics",
      "Computer Science/IT foundation",
      "Physics beneficial"
    ],
    "entry_roles": [
      "Software Developer",
      "IT Systems Engineer",
      "Database Administrator",
      "Network Engineer",
      "Data Analyst",
      "IT Consultant"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Mechanical Engineering",
    "faculty": "School of Engineering",
    "duration_years": 3,
    "annual_fee_cad": 26150,
    "total_fee_cad": 78450,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics",
      "Physics",
      "Technical subjects foundation"
    ],
    "entry_roles": [
      "Mechanical Engineer",
      "Design Engineer",
      "Production Engineer",
      "Thermal Engineer",
      "Automation Engineer",
      "Project Engineer"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Science in Industrial Management / Engineering Systems and Management",
    "faculty": "School of Engineering / Management",
    "duration_years": 3,
    "annual_fee_cad": 26150,
    "total_fee_cad": 78450,
    "min_class12_percent": 65,
    "required_subjects": [
      "Mathematics",
      "General Science",
      "business/economics beneficial"
    ],
    "entry_roles": [
      "Operations Manager",
      "Industrial Engineer",
      "Project Manager",
      "Supply Chain Analyst",
      "Business Analyst",
      "Manufacturing Manager"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Aerospace Engineering",
    "faculty": "Department of Aerospace Engineering, TUM School of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 19800,
    "total_fee_cad": 39600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Aerospace Engineering",
      "Mechanical Engineering",
      "Aeronautical Engineering required"
    ],
    "entry_roles": [
      "Aerospace Engineer",
      "Aeronautical Designer",
      "Flight Systems Engineer",
      "Space Systems Engineer",
      "Propulsion Engineer",
      "Structural Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Integrated Circuit Design",
    "faculty": "Department of Electrical Engineering, TUM School of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 19800,
    "total_fee_cad": 39600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Semiconductor design",
      "electronics engineering",
      "circuit design"
    ],
    "entry_roles": [
      "IC Designer",
      "Integrated Circuit Design Engineer",
      "Analog IC Design Engineer",
      "Digital IC Design Engineer",
      "Place & Route Engineer",
      "Layout Engineer",
      "Design Validation Engineer",
      "Research Scientist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Industrial Chemistry",
    "faculty": "Department of Chemistry, TUM School of Chemistry",
    "duration_years": 2,
    "annual_fee_cad": 19800,
    "total_fee_cad": 39600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Chemistry",
      "Chemical Engineering",
      "Polymer Science",
      "Materials Science"
    ],
    "entry_roles": [
      "Industrial Chemist",
      "Research & Development Scientist",
      "Process Development Scientist",
      "Polymer Scientist",
      "Materials Researcher",
      "Product Engineer in pharmaceutical/fine/specialty chemicals"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Rail and Urban Transport",
    "faculty": "Department of Civil, Geo and Environmental Engineering, TUM School of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 19800,
    "total_fee_cad": 39600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Civil Engineering",
      "Transportation Engineering",
      "Mechanical Engineering",
      "related discipline"
    ],
    "entry_roles": [
      "Rail Engineer",
      "Transport Planner",
      "Infrastructure Engineer",
      "Project Manager (Transport)",
      "Traffic Engineer",
      "Sustainability Consultant",
      "Transport Systems Specialist"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Green Electronics",
    "faculty": "Department of Electrical Engineering, TUM School of Engineering",
    "duration_years": 2,
    "annual_fee_cad": 19800,
    "total_fee_cad": 39600,
    "min_class12_percent": 60,
    "required_subjects": [
      "Semiconductor Engineering",
      "Electronics Engineering",
      "Electrical Engineering",
      "Materials Science"
    ],
    "entry_roles": [
      "Green Semiconductor Engineer",
      "Power Semiconductor Specialist",
      "Renewable Energy Systems Engineer",
      "Microelectronics Engineer",
      "Device Engineer",
      "Manufacturing Engineer",
      "Research Scientist"
    ],
    "features": []
  }
]);

// --- NANYANG TECHNOLOGICAL UNIVERSITY (Singapore) ---
const univ_nanyangtechnologicaluniversitysingapore = db.institutions.insertOne(inst({
  "name": "NANYANG TECHNOLOGICAL UNIVERSITY (Singapore)",
  "abbreviation": "NTU",
  "type": "university",
  "city": "Singapore",
  "province": "Singapore",
  "country": "Singapore",
  "campuses": [
    "Singapore"
  ],
  "website": "https://www.ntu.edu.sg/",
  "application_portal": "Online via https://submission.ntu.edu.sg/",
  "contacts": {
    "admissions": {
      "address": "Student Services Centre, #03-01, 42 Nanyang Avenue, Singapore 639815",
      "phone": "+65 6791 1744",
      "email": "adm_intnl@ntu.edu.sg"
    },
    "international_students": {},
    "graduate_studies": {}
  },
  "application_fee_cad": 98,
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
      "name": "Nanyang Merit Scholarship (full tuition + living allowance SGD 6,500 + accommodation up to SGD 2,000 + travel grant SGD 5,000 + computer allowance SGD 1,750)"
    },
    {
      "name": "NTU Science Scholarship"
    },
    {
      "name": "NTU Talent Scholarship"
    },
    {
      "name": "CNY Yang Scholars Programme"
    },
    {
      "name": "Renaissance Engineering Programme (REP) Scholarship"
    },
    {
      "name": "NTU-University Scholars Programme (USP) Scholarship"
    }
  ],
  "internships": {
    "part_time_work": "Career Support: Career counseling; industry partnerships; alumni career network; internship placement services",
    "coop_available": true
  },
  "campus_life": {
    "housing": "Facilities: Modern dormitories (on-campus housing available); libraries; sports complex (gym, pools, badminton courts); medical center; dining facilities; Wi-Fi throughout campus; recreation centers; student lounges",
    "clubs": "Student Clubs & Activities: 200+ student clubs and societies; sports sections; cultural events; volunteer organizations; arts and drama societies"
  },
  "security": {
    "detail": "Security Infrastructure: Well-maintained campus with security services; emergency hotline available"
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

addPrograms(univ_nanyangtechnologicaluniversitysingapore, "NANYANG TECHNOLOGICAL UNIVERSITY (Singapore)", [
  {
    "level": "UG",
    "name": "Computer Science & Engineering",
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
    "name": "Electrical Engineering",
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
    "name": "Mechanical Engineering",
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
    "name": "Business Administration",
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
    "name": "Applied Computing in Finance",
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
    "name": "Master of Science in Artificial Intelligence (MSAI)",
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
    "name": "Master of Computing in Applied AI (MCAAI)",
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
    "name": "Master of Science in Data Science (MSDS)",
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
    "name": "Master of Science in Cyber Security (MSCS)",
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
    "name": "Master of Science in Financial Engineering",
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
    "name": "Bachelor of Engineering in Computer Science & Engineering",
    "faculty": "College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [],
    "entry_roles": [
      "Software engineer",
      "systems engineer",
      "data scientist",
      "IT consultant",
      "roles in FAANG companies",
      "tech startups"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Electrical Engineering",
    "faculty": "College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [],
    "entry_roles": [
      "Electrical engineer",
      "power systems engineer",
      "design engineer",
      "roles in semiconductor",
      "power",
      "telecommunications sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Engineering in Mechanical Engineering",
    "faculty": "College of Engineering",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [],
    "entry_roles": [
      "Mechanical engineer",
      "product design engineer",
      "manufacturing engineer",
      "roles in automotive",
      "aerospace",
      "energy sectors"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Business Administration",
    "faculty": "Nanyang Business School",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 65,
    "required_subjects": [],
    "entry_roles": [
      "Management consultant",
      "business analyst",
      "financial analyst",
      "investment banker",
      "corporate strategy roles"
    ],
    "features": []
  },
  {
    "level": "UG",
    "name": "Bachelor of Applied Computing in Finance",
    "faculty": "College of Computing and Data Science (CCDS)",
    "duration_years": 4.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 90,
    "required_subjects": [],
    "entry_roles": [
      "Fintech engineer",
      "quantitative analyst",
      "software engineer in finance",
      "roles in investment banks",
      "fintech startups"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Artificial Intelligence (MSAI)",
    "faculty": "College of Computing and Data Science (CCDS)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "AI engineer",
      "machine learning specialist",
      "AI research scientist",
      "roles in tech",
      "healthcare",
      "finance sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Computing in Applied AI (MCAAI)",
    "faculty": "College of Computing and Data Science (CCDS)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Applied AI engineer",
      "machine learning engineer",
      "AI solutions architect",
      "roles in tech",
      "enterprise sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Data Science (MSDS)",
    "faculty": "College of Computing and Data Science (CCDS)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Data scientist",
      "analytics engineer",
      "business intelligence analyst",
      "roles in tech",
      "finance",
      "healthcare"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Cyber Security (MSCS)",
    "faculty": "College of Computing and Data Science (CCDS)",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Cybersecurity engineer",
      "security analyst",
      "information security consultant",
      "roles in finance",
      "government",
      "tech sectors"
    ],
    "features": []
  },
  {
    "level": "PG",
    "name": "Master of Science in Financial Engineering",
    "faculty": "Nanyang Business School",
    "duration_years": 2.0,
    "annual_fee_cad": 0,
    "total_fee_cad": 0,
    "min_class12_percent": 55,
    "required_subjects": [],
    "entry_roles": [
      "Quantitative analyst",
      "financial engineer",
      "risk manager",
      "investment analyst",
      "roles in investment banking",
      "fintech"
    ],
    "features": []
  }
]);

print("Singapore Seeding Completed!");