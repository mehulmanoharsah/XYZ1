// ============================================================
// CANADIAN UNIVERSITIES & COLLEGES — MONGODB SEED SCRIPT
// Data: Research Reports for International (Indian) Students
// 20 Institutions | UG & PG Programs | 2025-26
// ============================================================
// Usage: mongosh <your-db-uri> canadian_universities_seed.js
//   OR:  mongosh --eval "load('canadian_universities_seed.js')"
// ============================================================

const DB_NAME = "canadian_institutions";

const db = connect("mongodb://localhost:27017/" + DB_NAME);
db.institutions.deleteMany({ country: "Canada" });
db.programs.deleteMany({ institution_name: { $in: [
  "Algoma University",
  "Concordia University",
  "Conestoga College",
  "Dalhousie University",
  "Fanshawe College",
  "George Brown Polytechnic",
  "Humber Polytechnic",
  "McGill University",
  "McMaster University",
  "Memorial University of Newfoundland",
  "Seneca Polytechnic",
  "Simon Fraser University",
  "University of Alberta",
  "University of British Columbia",
  "University of Calgary",
  "University of Ottawa",
  "University of Toronto",
  "University of Waterloo",
  "Western University",
  "York University"
] } });

// ─── COLLECTION: institutions ────────────────────────────────
db.createCollection("institutions");
db.createCollection("programs");
db.createCollection("scholarships");
db.createCollection("contacts");

// ────────────────────────────────────────────────────────────
// HELPER: build institution doc
// ────────────────────────────────────────────────────────────
function inst(data) { return data; }

// ============================================================
// 1. ALGOMA UNIVERSITY
// ============================================================
const algoma = db.institutions.insertOne(inst({
  name: "Algoma University",
  type: "university",
  city: "Sault Ste. Marie",
  province: "Ontario",
  country: "Canada",
  campuses: ["Sault Ste. Marie", "Brampton", "Timmins", "South Porcupine"],
  website: "https://algomau.ca",
  application_portal: "https://ouac.ca",
  contacts: {
    admissions: { email: "international@algomau.ca", phone: "705-949-2301 ext. 4245", toll_free: "1-888-254-6628" },
    international_students: { email: "international@algomau.ca", phone: "705-949-2301 ext. 4366", advisor: "Darren Vaughan" },
    graduate_studies: { email: "international@algomau.ca", phone: "705-949-2301 ext. 4220" }
  },
  application_fee_cad: 125,
  intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May)"],
  deadlines: { ug_fall_2026: "June 20, 2025", ug_may_2026: "February 21, 2025", grad_fall_2026: "February-April 2026" },
  eligibility: {
    undergraduate: {
      min_class12_percent: 60,
      competitive_percent: "75-85+",
      english: { IELTS: "6.0 overall (5.5 each band)", TOEFL: "79 iBT", PTE: "53", Duolingo: "100+" }
    },
    postgraduate: {
      min_gpa: 3.0,
      min_percent: 75,
      english: { IELTS: "6.5 overall (6.0 each band)", TOEFL: "93 iBT", PTE: "65", Duolingo: "115+" }
    }
  },
  scholarships: [
    { name: "Chancellor's Award", amount_cad: 5000, renewable: true, years: 4, criteria: "95%+ average" },
    { name: "President's Award", amount_cad: 2500, renewable: false, criteria: "80-89.9% average" },
    { name: "Dean's Award", amount_cad: 1000, renewable: false, criteria: "75-80% average" },
    { name: "Award of Excellence", amount_cad: 500, renewable: false, criteria: "60-75% average" },
    { name: "International Student Bursary (2026+)", amount_cad: 6525, per_year: true, total_cad: 26000, criteria: "All international undergraduates" }
  ],
  internships: { coop_available: true, part_time_oncampus: "Unlimited hours", part_time_offcampus: "20 hrs/week during term", employment_rate_percent: 87 },
  campus_life: { clubs: "100+", sports_team: "Thunderbirds" },
  security: { hours: "All campuses", emergency: true },
  top_ug_programs: ["Bachelor of Computer Science", "Bachelor of Commerce", "Bachelor of Science", "Bachelor of Social Work", "Bachelor of Science in Environmental Science"],
  top_pg_programs: ["Master of Computer Science (Course-Based)", "Master of Science in Computer Science (Thesis)", "Master of Global Business and Economy (MGBE)", "Master of Psychotherapy (MAP)", "Master of Science in Biology"]
})).insertedId;

// ============================================================
// 2. CONCORDIA UNIVERSITY
// ============================================================
const concordia = db.institutions.insertOne(inst({
  name: "Concordia University",
  type: "university",
  city: "Montreal",
  province: "Quebec",
  country: "Canada",
  campuses: ["Sir George Williams (Downtown Montreal)", "Loyola (West-End)"],
  website: "https://www.concordia.ca",
  application_portal: "https://www.concordia.ca/admissions",
  contacts: {
    admissions: { email: "admreg@alcor.concordia.ca", phone: "514-848-2668", address: "1455 De Maisonneuve Blvd. West, LB-700, Montreal, QC H3G 1M8" },
    international_students: { email: "international@concordia.ca", phone: "514-848-2424" },
    graduate_studies: { email: "graduatestudies@concordia.ca", phone: "514-848-2424" }
  },
  application_fee_cad: 100,
  intakes: ["Fall (September)", "Winter (January)", "Summer (May-August)"],
  deadlines: { ug_fall_2026: "February 1, 2026", ug_winter_2027: "August 1, 2026", grad: "October 2025 - February 2026 for Fall 2026" },
  eligibility: {
    undergraduate: {
      min_class12_percent: 55,
      competitive_percent: "75-90+",
      min_gpa: 3.0,
      english: { IELTS: "6.5 overall (6.0 each)", TOEFL: "90 iBT (20+ speaking/writing)", PTE: "53+", Duolingo: "120+" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: "2.7-3.0",
      english: { IELTS: "6.5 overall (6.0 each)", TOEFL: "90 iBT", PTE: "53+", Duolingo: "120+" },
      work_experience: "MBA requires 2+ years"
    }
  },
  scholarships: [
    { name: "Faculty Entrance Scholarships", criteria: "Academic merit; automatic" },
    { name: "Graduate Tuition Offset", amount_cad: 15000, criteria: "International graduate students" }
  ],
  internships: { coop_programs: "70+ academic programs", new_undergrads_annually: 1500, paid: true, min_hours_week: 35, international_eligible: true },
  campus_life: { clubs: "Multiple", shuttle: "Free between campuses", sports_team: "Stingers" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Commerce (BComm)", "Bachelor of Engineering (BEng)", "Bachelor of Computer Science", "Business Technology Management", "Civil Engineering (BEng)"],
  top_pg_programs: ["Master of Business Administration (MBA)", "Master of Science in Computer Science", "Master of Engineering (M.Eng./M.A.Sc.)", "Master of Applied Science (M.A.Sc.)", "Master of Organizational Project Management (MOPM)"]
})).insertedId;

// ============================================================
// 3. CONESTOGA COLLEGE
// ============================================================
const conestoga = db.institutions.insertOne(inst({
  name: "Conestoga College",
  type: "college",
  city: "Kitchener",
  province: "Ontario",
  country: "Canada",
  campuses: ["Kitchener-Doon (Primary)", "Kitchener Downtown", "Waterloo", "Cambridge", "Guelph", "Simcoe", "Brantford"],
  website: "https://www.conestogac.on.ca",
  application_portal: "https://www.ocas.ca",
  contacts: {
    admissions: { email: "internationaladmissions@conestogac.on.ca", phone: "519-748-5220", address: "299 Doon Valley Drive, Kitchener, ON N2G 4M4" },
    international_students: { email: "internationaladvisor@conestogac.on.ca", transition: "internationaltransition@conestogac.on.ca" },
    india_recruiter: { name: "Bhanu Vashishth", email: "bvashishth@conestogac.on.ca", ext: "8061" }
  },
  application_fee_cad: 101.01,
  tuition_deposit_cad: 2500,
  intakes: ["Fall (September)", "Winter (January)", "Spring (May)"],
  deadlines: { rolling: true, fall_2026_recommended: "May 2026", winter_2027_recommended: "August 31, 2026", scholarship_deadline: "January 31, 2026" },
  eligibility: {
    undergraduate: {
      diploma_certificate: { min_percent: 60, english: { IELTS: "6.0 (5.5 each)", TOEFL: "80 iBT" } },
      degree: { min_percent: 65, english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT" } }
    },
    postgraduate: {
      min_percent: "50-70",
      min_gpa: "2.7-3.0",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "58-60+", Duolingo: "125+" }
    }
  },
  scholarships: [
    { name: "Degree Entrance Scholarship", amount_cad: 3000, type: "one-time", criteria: "Automatic by academic average" },
    { name: "Diploma Entrance Scholarship", amount_cad: 1500, type: "one-time" },
    { name: "Graduate Program Entrance Scholarship", amount_cad: 1500, type: "one-time" },
    { name: "Total annual pool", amount_cad: 4600000, note: "400+ awards, bursaries, scholarships" }
  ],
  internships: { coop_programs: "70+", paid: true, wage_cad_per_hour: "18-30", employment_rate_percent: 87, industry_partners: 1000 },
  campus_life: { clubs: "200+", sports_team: "Condors", campuses: 8 },
  security: { hours: "24/7", cctv: true },
  top_ug_programs: ["Bachelor of Computer Science (Honours)", "Diploma in Computer Programming & Analysis", "Advanced Diploma in Computer Engineering Technology", "Bachelor of Business Administration (Honours)", "Diploma in Electronics Engineering Technology"],
  top_pg_programs: ["Graduate Certificate in Business Analytics", "Graduate Certificate in Project Management", "Graduate Certificate in Applied AI & Machine Learning", "Advanced Diploma in Computer Engineering Technology (PG)", "Graduate Certificate in Mobile Solutions Development"]
})).insertedId;

// ============================================================
// 4. DALHOUSIE UNIVERSITY
// ============================================================
const dalhousie = db.institutions.insertOne(inst({
  name: "Dalhousie University",
  type: "university",
  city: "Halifax",
  province: "Nova Scotia",
  country: "Canada",
  campuses: ["Studley Campus (Halifax)", "Agricultural Campus (Truro)"],
  website: "https://www.dal.ca",
  application_portal: "https://www.dal.ca/admissions",
  contacts: {
    admissions: { email: "admissions@dal.ca", phone: "902-494-2148", address: "1360 Barrington Street, Suite 706, Halifax, NS B3J 1Y8" },
    international_centre: { email: "international.centre@dal.ca", phone: "902-494-1566", address: "Suite 1200, 1246 LeMarchant Street, Halifax" },
    graduate_studies: { email: "graduatestudies@dal.ca", phone: "902-494-2148" }
  },
  application_fee_cad: 70,
  intakes: ["Fall (September)", "Winter (January)", "Summer (May)"],
  deadlines: { ug_fall_2026: "March 1, 2026 (February 1 recommended)", ug_winter_2027: "September 15, 2026", grad_non_canadian_fall: "April 1, 2026", grad_non_canadian_jan: "August 31, 2026" },
  eligibility: {
    undergraduate: {
      min_percent: 50,
      competitive_percent: "75-85+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "90+ iBT", PTE: "61+", CAEL: "70+" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: 3.0,
      english: { IELTS: "6.5 (MBA 7.0+)", TOEFL: "79-92+", PTE: "59+", CAEL: "70+" },
      work_experience: "MBA requires 2+ years; GMAT 550+"
    }
  },
  scholarships: [
    { name: "Faculty of Computer Science UG Entrance Scholarship", amount_cad: 5000 },
    { name: "CorpFinance Indian Scholarship (BComm)", amount_cad: 15000 },
    { name: "Abdul Majid Bader Graduate Scholarship", amount_cad: 40000, per_year: true, years: 2 },
    { name: "Dalhousie Research Excellence Scholarship", amount_cad: 35000, per_year: true, years: 4 },
    { name: "Killam Predoctoral Scholarship", amount_cad: 42000, per_year: true, years: 3 },
    { name: "Vanier Canada Graduate Scholarships", amount_cad: 50000, per_year: true, years: 3 }
  ],
  internships: { engineering_coop: "3+ paid terms (12-16 weeks each)", employment_rate_coop: "97%", part_time_oncampus: "Unlimited", part_time_offcampus: "20 hrs/week" },
  campus_life: { clubs: "200+", sports_team: "Tigers" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Engineering (BEng)", "Bachelor of Computer Science", "Bachelor of Commerce (BComm)", "Bachelor of Applied Computer Science", "Bachelor of Science"],
  top_pg_programs: ["Master of Engineering (MEng)", "Master of Applied Computer Science", "Master of Business Administration (MBA)", "Master of Applied Science (MASc)", "Master of Science (MSc)"]
})).insertedId;

// ============================================================
// 5. FANSHAWE COLLEGE
// ============================================================
const fanshawe = db.institutions.insertOne(inst({
  name: "Fanshawe College",
  type: "college",
  city: "London",
  province: "Ontario",
  country: "Canada",
  campuses: ["London Main", "London Downtown", "Toronto@ILAC"],
  website: "https://www.fanshawec.ca",
  contacts: {
    admissions: { email: "international@fanshawec.ca", phone: "519-452-4430 ext. 4431", toll_free: "1-888-FANSHW", address: "1460 Oxford Street East, London, ON N5Y 5H8" },
    international_students: { email: "international@fanshawec.ca", phone: "519-452-4430 ext. 4431" }
  },
  application_fee_cad: 100,
  intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May)"],
  deadlines: { rolling: true, winter_2027_recommended: "August 31, 2026", spring_2026_recommended: "February 28, 2026" },
  eligibility: {
    undergraduate: {
      diploma: { min_percent: 60, english: { IELTS: "6.0 (5.5 each)", TOEFL: "79-83 iBT" } },
      degree: { min_percent: 70, english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT" } },
      note: "No conditional/EAP pathway for Indian students"
    },
    postgraduate: {
      min_percent: 50,
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "59-60+", Duolingo: "120+" }
    }
  },
  scholarships: [
    { name: "Academic Entrance Scholarship (Post-Secondary)", amount_cad: 2000, type: "one-time" },
    { name: "EAP Program Scholarship", amount_cad: 500 },
    { name: "Spousal Scholarship Program", coverage: "Up to 50%", eligible_regions: ["India", "Latin America", "Caribbean", "South Korea", "Philippines"] }
  ],
  internships: { coop_programs: "70+", more_than_any_ontario_college: true, paid: true, wage_cad_per_hour: "18-30", employment_rate_percent: 85, rank: "#1 in Ontario for Graduate Employment Rate" },
  campus_life: { clubs: "200+", sports_team: "Falcons", supercomputer_access: true },
  security: { hours: "24/7", cctv: true },
  top_ug_programs: ["Computer Programming and Analysis (Co-op)", "Computer Systems Technology (Co-op)", "Business Administration Diploma", "Practical Nursing Diploma", "Software Engineering (Co-op)"],
  top_pg_programs: ["Graduate Certificate in Insurance and Risk Management", "Graduate Certificate in AI and Machine Learning", "Graduate Certificate in Information Security Management", "Graduate Certificate in Project Management", "Graduate Certificate in Business Analytics"]
})).insertedId;

// ============================================================
// 6. GEORGE BROWN POLYTECHNIC
// ============================================================
const georgeBrown = db.institutions.insertOne(inst({
  name: "George Brown Polytechnic",
  type: "college",
  city: "Toronto",
  province: "Ontario",
  country: "Canada",
  campuses: ["Casa Loma", "St. James", "Waterfront"],
  website: "https://www.georgebrown.ca",
  application_portal: "https://www.ontariocolleges.ca",
  contacts: {
    admissions: { phone: "416-415-2000", toll_free: "1-800-265-2002", address: "200 King Street East, Toronto, ON" },
    international_students: { email: "asia@georgebrown.ca", phone: "416-415-2000 ext. 2115" },
    india_recruiter: { email: "asia@georgebrown.ca" }
  },
  application_fee_cad: 115,
  intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May)"],
  deadlines: { rolling: true, winter_2027_recommended: "August 31, 2026", spring_2026_recommended: "February 28, 2026" },
  eligibility: {
    undergraduate: {
      diploma: { min_percent: 60, english: { IELTS: "6.0 (5.5 each)", TOEFL: "80 iBT" } },
      degree: { min_percent: 70, english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT" } },
      note: "NOT eligible for conditional/EAP pathway (Indian students)"
    },
    postgraduate: {
      min_percent: 50,
      min_gpa: "2.5-3.0",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "58-60+", Duolingo: "120+" }
    }
  },
  scholarships: [
    { name: "Scotiabank International Partner Entrance Scholarship", amount_cad: 5000, count: 2, criteria: "Partner institutions India + others" },
    { name: "Diploma/Degree Scholarships", amounts_cad: [5000, 1000], annual_count: { fall: 31, winter: 15 } },
    { name: "International Centre Student Bursary", criteria: "Financial need, community involvement" }
  ],
  internships: { programs_with_wil: "200+", paid: true, wage_cad_per_hour: "18-30", employment_rate_percent: 84, industry_partners: 1000 },
  campus_life: { clubs: "200+", sports_team: "Greys", student_run_restaurants: true },
  security: { hours: "24/7", cctv: true },
  residence: "The George Student Residence",
  top_ug_programs: ["Computer Programming (Honours)", "Business (Technology Management) Diploma", "Culinary Management", "Practical Nursing", "Construction Engineering Technology"],
  top_pg_programs: ["Graduate Certificate in Project Management", "Graduate Certificate in Business Analysis", "Graduate Certificate in Health Informatics", "Graduate Certificate in Food and Nutrition Management", "Graduate Certificate in Information Systems Business Analysis"]
})).insertedId;

// ============================================================
// 7. HUMBER POLYTECHNIC
// ============================================================
const humber = db.institutions.insertOne(inst({
  name: "Humber Polytechnic",
  type: "college",
  city: "Toronto",
  province: "Ontario",
  country: "Canada",
  campuses: ["Humber North", "Lakeshore"],
  website: "https://humber.ca",
  contacts: {
    admissions: { email: "international@humber.ca", phone: "416-675-6622", address: "205 Humber College Boulevard, Toronto, ON M9W 5L7" },
    graduate_services: { email: "graduateservices@humber.ca" }
  },
  application_portal: "https://international.humber.ca/apply",
  application_fee_cad: 115,
  intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May-August)"],
  deadlines: { ug_fall_2026_equal_consideration: "February 1, 2026", admission_offer_confirmation: "May 1, 2026", winter_2027: "September 15, 2026" },
  eligibility: {
    undergraduate: {
      min_percent: 60,
      competitive_percent: "75-85+",
      english: { IELTS: "6.0-6.5 (5.5-6.0 each)", TOEFL: "80-88 iBT", PTE: "53-61+", Duolingo: "105-125+" }
    },
    postgraduate: {
      min_percent: 50,
      min_gpa: "2.7-3.0",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "60+", Duolingo: "125+" }
    }
  },
  scholarships: [
    { name: "International Entrance Scholarships", amounts_cad: [1000, 2000, 3000], criteria: "Academic merit" },
    { name: "International Continuing Student Awards", amounts_cad: [1000, 2000], criteria: "Academic excellence in continuing students" }
  ],
  internships: { coop_programs_available: true, paid: true, employment_rate_percent: 82, international_graduate_school: true },
  campus_life: { clubs: "150+", sports_team: "Hawks" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Commerce in Business Administration", "Computer Engineering Technology Advanced Diploma", "Computer Programming Advanced Diploma", "Bachelor of Nursing", "Electrical Engineering Technology Advanced Diploma"],
  top_pg_programs: ["Graduate Certificate in Business Analytics", "Graduate Certificate in Project Management", "Graduate Certificate in Cybersecurity", "Graduate Certificate in Supply Chain Management", "Graduate Certificate in Human Resources Management"]
})).insertedId;

// ============================================================
// 8. MCGILL UNIVERSITY
// ============================================================
const mcgill = db.institutions.insertOne(inst({
  name: "McGill University",
  type: "university",
  city: "Montreal",
  province: "Quebec",
  country: "Canada",
  campuses: ["Downtown (Main)", "Macdonald (Agricultural)"],
  website: "https://www.mcgill.ca",
  contacts: {
    admissions: { phone: "514-398-3910", email: "admissions@mcgill.ca" },
    international_students: { email: "internationals@mcgill.ca", address: "4th Floor, Suite 4100, Montreal" },
    graduate_studies: { phone: "514-398-3990", portal: "https://www.mcgill.ca/gradapplicants/apply-now" },
    emergency_downtown: "514-398-3000", emergency_macdonald: "514-398-7777"
  },
  application_fee_cad: 136,
  intakes: ["Fall (September)", "Winter (January)", "Summer (May)"],
  deadlines: { ug_fall_2026: "January 15, 2026", ug_scholarship: "January 21, 2026", grad_international_fall: "January 15, 2026" },
  eligibility: {
    undergraduate: {
      min_percent: 85,
      competitive_percent: "93-97+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "90 (22+ speaking/writing)", PTE: "65", Duolingo: "125" }
    },
    postgraduate: {
      min_gpa: "3.0-3.2",
      min_percent: 80,
      english: { IELTS: "6.5-7.0 (MBA 7.0+)", TOEFL: "90-100 (MBA 100+)", PTE: "65+", Duolingo: "125+" },
      GMAT_GRE: "Required for MBA/MIM (GMAT 550+)"
    }
  },
  scholarships: [
    { name: "One-Year Entrance Scholarship", amount_cad: 3000, selection: "Automatic" },
    { name: "Major Entrance Scholarships", amount_cad_range: "3000-12000", renewable_years: "3-4", application_required: true, deadline: "Jan 21" },
    { name: "International Scholars Program", coverage: "6% of international UG tuition reserved" }
  ],
  internships: { pey_coop: "12-16 months paid", co_op_average_wage_cad: "20-25/hr", on_campus: "Unlimited", off_campus: "24 hrs/week" },
  campus_life: { clubs: "250+", student_services: 17, sports: "Martlets and Redbirds (Mcgill)" },
  security: { hours: "24/7", both_campuses: true, email: "campus.security@mcgill.ca" },
  industry_partners: ["Amazon", "Shopify", "Microsoft", "Google", "Deloitte", "McKinsey", "Bain", "Goldman Sachs", "RBC", "TD"],
  top_ug_programs: ["Bachelor of Science in Computer Science", "Bachelor of Engineering (various)", "Bachelor of Commerce (Desautels)", "Bachelor of Science – Science (various)", "Bachelor of Science in Engineering – Architecture"],
  top_pg_programs: ["Master of Science in Computer Science", "Master of Business Administration (MBA)", "Master of Engineering (M.Eng.)", "Master of Science in Applied (M.Sc.A.)", "Master of Management (MIM Finance/Analytics)"]
})).insertedId;

// ============================================================
// 9. MCMASTER UNIVERSITY
// ============================================================
const mcmaster = db.institutions.insertOne(inst({
  name: "McMaster University",
  type: "university",
  city: "Hamilton",
  province: "Ontario",
  country: "Canada",
  website: "https://www.mcmaster.ca",
  contacts: {
    admissions: { email: "macadmit@mcmaster.ca", phone: "905-525-9140" },
    international_students: { email: "intl@mcmaster.ca", phone: "905-525-9140 ext. 23765" },
    graduate_studies: { email: "graduate@mcmaster.ca", phone: "905-525-9140 ext. 23679" }
  },
  application_fee_cad: 110,
  intakes: ["Fall (September)", "Winter (January)"],
  deadlines: { ug_fall_2026: "January 15, 2026", grad_varies: true },
  eligibility: {
    undergraduate: {
      min_percent: 70,
      competitive_percent: "85-90+",
      english: { IELTS: "6.5 overall", TOEFL: "88 iBT", PTE: "60+", Duolingo: "120+" }
    },
    postgraduate: {
      min_percent: 75,
      min_gpa: 3.0,
      english: { IELTS: "6.5-7.0", TOEFL: "90-100", PTE: "60+", Duolingo: "120+" }
    }
  },
  scholarships: [
    { name: "McMaster International Excellence Award", amount_cad: 10000, per_year: true },
    { name: "Entrance Scholarships", amount_cad_range: "1000-5000", selection: "Merit-based automatic" }
  ],
  internships: { coop_available: true, pey_available: true, paid: true, employment_rate_percent: 90 },
  campus_life: { clubs: "200+", sports_team: "Marauders" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Engineering (BEng) – various", "Bachelor of Science in Computer Science", "Bachelor of Commerce (DeGroote)", "Bachelor of Science in Life Sciences", "Bachelor of Applied Science"],
  top_pg_programs: ["Master of Engineering (MEng)", "Master of Business Administration (MBA)", "Master of Science in Computer Science", "Master of Science in Engineering", "Master of Health Management"]
})).insertedId;

// ============================================================
// 10. MEMORIAL UNIVERSITY OF NEWFOUNDLAND
// ============================================================
const memorial = db.institutions.insertOne(inst({
  name: "Memorial University of Newfoundland",
  type: "university",
  city: "St. John's",
  province: "Newfoundland and Labrador",
  country: "Canada",
  campuses: ["St. John's (Main)", "Corner Brook (Grenfell Campus)", "Signal Hill Campus", "Harlow Campus (UK)"],
  website: "https://www.mun.ca",
  contacts: {
    admissions: { email: "international@mun.ca", phone: "709-864-8000", address: "230 Elizabeth Ave, St. John's, NL A1C 5S7" },
    international_students: { email: "international@mun.ca", phone: "709-864-2530" },
    graduate_studies: { email: "sgs@mun.ca", phone: "709-864-8166" }
  },
  application_fee_cad: 70,
  intakes: ["Fall (September)", "Winter (January)", "Spring (May)"],
  deadlines: { ug_fall_2026: "March 1, 2026", ug_winter_2027: "August 15, 2026", grad_varies: true },
  eligibility: {
    undergraduate: {
      min_percent: 65,
      english: { IELTS: "6.0 (5.5 each)", TOEFL: "80 iBT", PTE: "56+" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: 3.0,
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "90 iBT", PTE: "61+" }
    }
  },
  scholarships: [
    { name: "International Student Award", amount_cad: 3000, per_year: true, note: "Lowest tuition among Canadian universities for internationals" },
    { name: "Graduate Fellowships", varies: true }
  ],
  unique_advantage: "One of Canada's lowest tuition rates for international students",
  internships: { coop_available: true, paid: true, employment_rate_percent: 82 },
  campus_life: { clubs: "150+", sports_team: "Sea-Hawks" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Engineering (BEng)", "Bachelor of Computer Science", "Bachelor of Commerce (Business Administration)", "Bachelor of Science", "Bachelor of Nursing"],
  top_pg_programs: ["Master of Engineering (MEng)", "Master of Business Administration (MBA)", "Master of Computer Science (MSc)", "Master of Applied Science (MASc)", "Master of Science (MSc)"]
})).insertedId;

// ============================================================
// 11. SENECA POLYTECHNIC
// ============================================================
const seneca = db.institutions.insertOne(inst({
  name: "Seneca Polytechnic",
  type: "college",
  city: "Toronto",
  province: "Ontario",
  country: "Canada",
  campuses: ["Newnham (Main)", "King", "Markham", "York", "Peterborough"],
  website: "https://www.senecapolytechnic.ca",
  contacts: {
    admissions: { email: "international.admissions@senecapolytechnic.ca", phone: "416-491-5050" },
    international_students: { email: "international@senecapolytechnic.ca" }
  },
  application_portal: "https://www.ontariocolleges.ca",
  application_fee_cad: 115,
  intakes: ["Fall (September)", "Winter (January)", "Spring (May)"],
  deadlines: { rolling: true, fall_recommended: "March 2026", winter_recommended: "August 2026" },
  eligibility: {
    undergraduate: {
      diploma: { min_percent: 60, english: { IELTS: "6.0 (5.5 each)", TOEFL: "80 iBT" } },
      degree: { min_percent: 65, english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT" } }
    },
    postgraduate: {
      min_percent: 60,
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "58-60+", Duolingo: "125+" }
    }
  },
  scholarships: [
    { name: "International Entrance Scholarship", amount_cad: 2000, criteria: "Academic merit" },
    { name: "Program-specific awards", varies: true }
  ],
  internships: { coop_available: true, paid: true, employment_rate_percent: 85, industry_partners: 700 },
  campus_life: { clubs: "170+", sports_team: "Sting" },
  security: { hours: "24/7" },
  top_ug_programs: ["Computer Programming Advanced Diploma", "Business Administration Diploma", "Computer Engineering Technology Advanced Diploma", "Accounting and Finance Diploma", "Information Technology Advanced Diploma"],
  top_pg_programs: ["Graduate Certificate in Business Analytics", "Graduate Certificate in Cybersecurity", "Graduate Certificate in Project Management", "Graduate Certificate in AI and Machine Learning", "Graduate Certificate in Supply Chain Management"]
})).insertedId;

// ============================================================
// 12. SIMON FRASER UNIVERSITY
// ============================================================
const sfu = db.institutions.insertOne(inst({
  name: "Simon Fraser University",
  type: "university",
  city: "Burnaby",
  province: "British Columbia",
  country: "Canada",
  campuses: ["Burnaby (Main)", "Surrey", "Vancouver (Downtown)"],
  website: "https://www.sfu.ca",
  contacts: {
    admissions: { email: "admissions@sfu.ca", phone: "778-782-3868" },
    international_students: { email: "intl_adm@sfu.ca", phone: "778-782-4776" },
    graduate_studies: { email: "graduatestudies@sfu.ca", phone: "778-782-3868" }
  },
  application_fee_cad: 105,
  intakes: ["Fall (September)", "Spring (January)", "Summer (May)"],
  deadlines: { ug_fall_2026: "March 1, 2026", ug_spring_2026: "October 1, 2025", grad_varies: true },
  eligibility: {
    undergraduate: {
      min_percent: 75,
      competitive_percent: "85-90+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "65+", Duolingo: "125+" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: 3.0,
      english: { IELTS: "6.5-7.0", TOEFL: "88-100 iBT", PTE: "65+", Duolingo: "125+" },
      work_experience: "MBA requires 2+ years"
    }
  },
  scholarships: [
    { name: "International Student Award", amount_cad_range: "3000-10000", selection: "Merit-based" },
    { name: "Graduate Fellowships", varies: true }
  ],
  internships: { coop_available: true, employers: "8000+", countries: "60+", paid: true, employment_rate_percent: 90 },
  campus_life: { clubs: "300+", sports_team: "Clan" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Science in Computing Science", "Bachelor of Applied Science in Engineering", "Bachelor of Business Administration (Beedie)", "Bachelor of Science in Molecular Biology and Biochemistry", "Bachelor of Science (General)"],
  top_pg_programs: ["Master of Business Administration (MBA)", "Master of Science in Computer Science", "Master of Science in Professional Computer Science", "Master of Engineering (M.Eng./M.A.Sc.)", "Master of Science in Finance"]
})).insertedId;

// ============================================================
// 13. UNIVERSITY OF ALBERTA
// ============================================================
const uAlberta = db.institutions.insertOne(inst({
  name: "University of Alberta",
  type: "university",
  city: "Edmonton",
  province: "Alberta",
  country: "Canada",
  campuses: ["North Campus (Main)", "South Campus", "Augustana Campus", "Enterprise Square"],
  website: "https://www.ualberta.ca",
  contacts: {
    admissions: { phone: "780-492-3111", email: "welcome@ualberta.ca", note: "No centralized UG admissions email; contact Student Service Centre" },
    international_students: { email: "welcome@ualberta.ca" },
    graduate_studies: { portal: "https://www.ualberta.ca/graduate-studies" }
  },
  application_fee_cad: 150,
  intakes: ["Fall (September)", "Winter (January)", "Spring (May)"],
  deadlines: { ug_fall_2026: "March 1, 2026", early_admission: "December 2025", grad: "December 2025 - January 2026" },
  eligibility: {
    undergraduate: {
      min_percent: 75,
      competitive_percent: "85-90+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "90+ iBT", PTE: "59+", Duolingo: "120+", waiver: "CBSE/CISCE 75%+ English" }
    },
    postgraduate: {
      min_percent: 75,
      min_gpa: 3.0,
      english: { IELTS: "6.5", TOEFL: "90+ iBT", PTE: "59+", Duolingo: "120+" },
      GMAT_GRE: "Required for MBA (GMAT 550+)"
    }
  },
  scholarships: [
    { name: "International Student Entrance Scholarship (ISES)", amount_cad: 5000, selection: "Automatic" },
    { name: "Entrance Leadership Scholarship", amount_cad: 10000 },
    { name: "Google Lime Scholarship", amount_cad: 10000, criteria: "Tech/CS students" }
  ],
  internships: { coop_available: true, paid: true, employment_rate_percent: 88, labs_research: "400+" },
  campus_life: { clubs: "250+", sports_team: "Golden Bears" },
  security: { hours: "24/7", coordination: "Edmonton Police Service" },
  top_ug_programs: ["Bachelor of Science in Computing Science", "Bachelor of Science in Computer Engineering", "Bachelor of Science in Engineering (various)", "Bachelor of Science in Nursing", "Bachelor of Science in Mathematics"],
  top_pg_programs: ["Master of Science in Computing Science", "Master of Engineering (various)", "Master of Business Administration (MBA)", "Master of Science in Statistics", "Master of Science in Engineering Management"]
})).insertedId;

// ============================================================
// 14. UNIVERSITY OF BRITISH COLUMBIA
// ============================================================
const ubc = db.institutions.insertOne(inst({
  name: "University of British Columbia",
  type: "university",
  city: "Vancouver",
  province: "British Columbia",
  country: "Canada",
  campuses: ["Vancouver (Main)", "Kelowna (Okanagan)"],
  website: "https://www.ubc.ca",
  contacts: {
    admissions: { phone: "604-822-9836", toll_free: "1-877-272-1422", email: "admissions.inquiry@ubc.ca" },
    international_students: { email: "isa@students.ubc.ca", phone: "604-822-5021" },
    graduate_studies: { portal: "https://www.grad.ubc.ca/prospective-students" },
    emergency: "604-822-2222"
  },
  application_portal: "https://www.educationplannerbc.ca",
  application_fee_cad: 100,
  intakes: ["Fall (September)", "Winter (January)", "Summer (May)"],
  deadlines: { ug_early: "December 1, 2025", ug_regular: "January 15, 2026", grad: "December 15, 2025 - January 15, 2026" },
  eligibility: {
    undergraduate: {
      min_percent: 60,
      competitive_percent: "75-80+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "87-90 iBT", PTE: "64+", Duolingo: "125+" }
    },
    postgraduate: {
      min_percent: 65,
      english: { IELTS: "6.5-7.0", TOEFL: "80-100", PTE: "65+", Duolingo: "125+" },
      GMAT_GRE: "Required for MBA (GMAT 515-650+)"
    }
  },
  scholarships: [
    { name: "International Major Entrance Scholarship (IMES)", amount_cad: "10000-25000", per_year: true },
    { name: "Outstanding International Student Award", amount_cad: "10000-25000", type: "one-time" },
    { name: "International Scholars Program", coverage: "Full-ride (tuition + living + books + health)", count_annually: 50 },
    { name: "Okanagan Welcome Award", amount_cad: 5000, campus: "Okanagan" },
    { name: "Total annual support", amount_cad: 35000000 }
  ],
  internships: { coop_available: true, paid: true, wage_cad_per_hour: "20-30", off_campus: "24 hrs/week" },
  campus_life: { clubs: "350+", sports_team: "Thunderbirds", traditions: ["Polar Bear Swim", "Storm the Wall", "Clubs Fair"] },
  security: { hours: "24/7", coordination: "Vancouver Police Service" },
  top_ug_programs: ["Bachelor of Science in Computer Science", "Bachelor of Applied Science in Computer Engineering", "Bachelor of Applied Science in Electrical Engineering", "Bachelor of Commerce in Business Administration", "Bachelor of Science in Data Science"],
  top_pg_programs: ["Master of Science in Computer Science", "Master of Business Administration (MBA)", "Master of Engineering (M.Eng.)", "Master of Science in Data Science", "Master of Science in Operations Research"]
})).insertedId;

// ============================================================
// 15. UNIVERSITY OF CALGARY
// ============================================================
const uCalgary = db.institutions.insertOne(inst({
  name: "University of Calgary",
  type: "university",
  city: "Calgary",
  province: "Alberta",
  country: "Canada",
  campuses: ["Main Campus (213 hectares, SW Calgary)"],
  website: "https://www.ucalgary.ca",
  contacts: {
    admissions: { email: "admissions@ucalgary.ca", phone: "403-220-4380", address: "2500 University Drive NW, Calgary, AB T2N 1N4" },
    international_students: { email: "international.advice@ucalgary.ca", phone: "403-220-4938" },
    graduate_studies: { email: "graduatestudies@ucalgary.ca", portal: "https://grad.ucalgary.ca" }
  },
  application_fee_cad: 125,
  intakes: ["Fall (September)", "Winter (January)", "Summer (May-August)"],
  deadlines: { ug_fall_2026: "March 1, 2026", early_recommended: "January 15, 2026", ug_winter_2027: "August 1, 2026", grad_varies: "January-March 2026 for Fall 2026" },
  eligibility: {
    undergraduate: {
      min_percent: "75-90+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "86 iBT", PTE: "53+", Duolingo: "115+", waiver: "3+ years English-medium instruction" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: 3.0,
      english: { IELTS: "6.5 (MBA 7.0)", TOEFL: "86-105", PTE: "53+", Duolingo: "120+" },
      GMAT_GRE: "Required for MBA (GMAT 550+)"
    }
  },
  scholarships: [
    { name: "University of Calgary International Entrance Scholarship", amount_cad: 20000, renewable: true, years: 4, count: 2, deadline: "December 1, 2025" },
    { name: "CIBC International Entrance Scholarship", varies: true },
    { name: "Award for International Student Athletes", amount_cad: 10000, years: "2nd-4th year" }
  ],
  internships: { engineering_practicum: "12-16 months paid after 3rd year", opportunities_annually: 1500, paid: true, employment_rate_percent: 80 },
  campus_life: { clubs: "200+", sports_team: "Dinos", olympic_legacy: "1988 Winter Olympics" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Science in Engineering (Schulich)", "Bachelor of Commerce (Haskayne)", "Bachelor of Science in Computer Science", "Bachelor of Science (various)", "Bachelor of Health Sciences"],
  top_pg_programs: ["Master of Business Administration (Haskayne MBA)", "Master of Science in Computer Science", "Master of Engineering (M.Eng./M.A.Sc.)", "Master of Data Science and Analytics (MDSA)", "Master of Science in Mathematics and Statistics"]
})).insertedId;

// ============================================================
// 16. UNIVERSITY OF OTTAWA
// ============================================================
const uOttawa = db.institutions.insertOne(inst({
  name: "University of Ottawa",
  type: "university",
  city: "Ottawa",
  province: "Ontario",
  country: "Canada",
  campuses: ["Downtown Ottawa (Main; walkable location)"],
  website: "https://www.uottawa.ca",
  contacts: {
    admissions: { email: "InfoAdmission@uottawa.ca", phone: "613-562-5315", address: "Tabaret Hall, 550 Cumberland Street, Ottawa, ON K1N 6N5" },
    international_students: { email: "international@uottawa.ca", phone: "613-562-5800 ext. 5700" },
    graduate_studies: { email: "grad-studies@uottawa.ca", phone: "613-562-5800 ext. 1231" }
  },
  application_portal: "https://www.ouac.on.ca",
  application_fee_cad: 110,
  intakes: ["Fall (September)", "Winter (January)", "Spring/Summer (May-August)"],
  deadlines: { ug_fall_2026: "March 1, 2026", doc_submission: "March 30, 2026", mba_international: "March 1, 2026" },
  eligibility: {
    undergraduate: {
      min_percent: "75-77.75",
      competitive_percent: "85-90+",
      min_gpa: 3.0,
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "86 iBT", PTE: "60+", Duolingo: "120+" }
    },
    postgraduate: {
      min_percent: "70-75",
      min_gpa: "2.7-3.0",
      english: { IELTS: "6.5-7.0 (MBA 7.0)", TOEFL: "79-86 (MBA 100+)", PTE: "60-68+", Duolingo: "120-125+" },
      GMAT_GRE: "Required for MBA (GMAT 550-700)"
    }
  },
  scholarships: [
    { name: "International Students English Stream Award", amount_cad: 70000, over_years: 4, per_term: 7500 },
    { name: "Admission Scholarships", amount_cad_range: "1000-4000", per_year: true, selection: "Automatic by grades" },
    { name: "Faculty of Engineering Scholarships", count: 35, amount_cad_range: "4000-5000" },
    { name: "Chancellor's Scholarships", amount_cad: 26000, per_year: 6500 },
    { name: "OGS for Women", amount_cad: 25000 }
  ],
  internships: { coop_available: true, government_coop_validated: true, on_campus_jobs: 1700, employment_rate_percent: 97 },
  campus_life: { clubs: "300+", sports_team: "Gee-Gees", bilingual: "English/French", indian_associations: ["Hindu Students Association", "India Student Association"] },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Science in Computer Science (Honours)", "Bachelor of Applied Science in Engineering (various)", "Bachelor of Science in Health Sciences (Honours)", "Bachelor of Science in Nursing (BScN)", "Bachelor of Commerce (Telfer)"],
  top_pg_programs: ["Master of Business Administration (Telfer MBA)", "Master of Science in Computer Science", "Master of Science in Engineering (M.A.Sc./M.Eng.)", "Master of Science in Statistics/Biostatistics", "Master of Public Health (MPH)"]
})).insertedId;

// ============================================================
// 17. UNIVERSITY OF TORONTO
// ============================================================
const uToronto = db.institutions.insertOne(inst({
  name: "University of Toronto",
  type: "university",
  city: "Toronto",
  province: "Ontario",
  country: "Canada",
  campuses: ["St. George (Downtown)", "Mississauga (UTM)", "Scarborough (UTSC)"],
  website: "https://www.utoronto.ca",
  contacts: {
    admissions: { email: "admissions.services@utoronto.ca", phone: "416-978-2190" },
    international_students: { email: "international.student@utoronto.ca", phone: "416-978-2190" },
    graduate_studies: { email: "sgsinfo@utoronto.ca", phone: "416-978-2385", portal: "https://www.sgs.utoronto.ca" },
    engineering: { email: "engineering@utoronto.ca", phone: "416-978-3872" },
    rotman_mba: { email: "mba.admissions@rotman.utoronto.ca", phone: "416-978-3888" }
  },
  application_portal: "https://www.ouac.on.ca",
  application_fee_cad: 95,
  intakes: ["Fall (September - Primary)", "Winter (limited)"],
  deadlines: { ug_regular: "February 15 (international) via OUAC", rotman_mba_rounds: ["Sep 10", "Nov 19", "Mar 4", "May 13"] },
  eligibility: {
    undergraduate: {
      min_percent: 70,
      competitive_percent: "85+",
      admission_average_percent: "Low to mid 90s",
      english: { IELTS: "6.5", TOEFL: "100", Duolingo: "130", note: "NOT required if English-medium education in India" }
    },
    postgraduate: {
      min_gpa: 3.0,
      english: { IELTS: "6.0-7.0", TOEFL: "93-100", Duolingo: "120+", note: "Not required if English-medium from India/Pakistan" },
      work_experience: "2-5 years preferred for MBA",
      GMAT: "Required for Rotman MBA (average 650-680)"
    }
  },
  scholarships: [
    { name: "UofT International Student Awards", selection: "Merit-based" },
    { name: "Rotman MBA Scholarships", coverage: "Up to 100% for GMAT 700+, top 10% academic" },
    { name: "Graduate Assistantships", amount_cad_range: "7000-18000", per_year: true }
  ],
  internships: { pey_coop: "12-16 months paid (Engineering)", employers: ["Amazon", "IBM", "Intel", "NVIDIA"], alumni: "300,000+ globally", employment_rate_percent: 90 },
  campus_life: { clubs: "1000+", sports: "20+ varsity teams (U Sports)", libraries: "15+" },
  security: { service: "University of Toronto Police Service", hours: "24/7", coordination: "Toronto Police Service" },
  top_ug_programs: ["Bachelor of Applied Science in Computer Engineering", "Bachelor of Applied Science in Mechanical Engineering", "Bachelor of Applied Science in Electrical Engineering", "Bachelor of Science in Computer Science", "Bachelor of Commerce (Business Administration)"],
  top_pg_programs: ["Master of Applied Science in Computer Engineering", "Master of Business Administration (Rotman)", "Master of Science in Computer Science", "Master of Science in Data Science", "Master of Applied Science in Mechanical Engineering"]
})).insertedId;

// ============================================================
// 18. UNIVERSITY OF WATERLOO
// ============================================================
const uWaterloo = db.institutions.insertOne(inst({
  name: "University of Waterloo",
  type: "university",
  city: "Waterloo",
  province: "Ontario",
  country: "Canada",
  website: "https://uwaterloo.ca",
  contacts: {
    admissions: { phone: "519-888-4567 ext. 43614", email: "askus@uwaterloo.ca", application_email: "myapplication@uwaterloo.ca", address: "200 University Avenue West, Waterloo, ON N2L 3G1" },
    graduate_studies: { portal: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/future-students" }
  },
  application_portal: "https://www.ouac.on.ca",
  application_fee_cad: 125,
  intakes: ["Fall (September)", "Winter (January)", "Spring (May)"],
  deadlines: { ug_fall_2026: "January 30, 2026", ug_doc_submission: "February 13, 2026", grad: "December 1, 2025 - January 15, 2026" },
  eligibility: {
    undergraduate: {
      min_percent: "75-90",
      competitive_percent: "90+ (CS/Engineering)",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "90+ iBT", PTE: "63+", Duolingo: "120+", waiver: "CBSE/ICSE 4+ years English-medium" },
      note: "Euclid Math Contest highly recommended for CS/Math; online video interview required for Engineering"
    },
    postgraduate: {
      min_percent: 75,
      min_gpa: 3.0,
      english: { IELTS: "6.5-7.0 (MBA 7.0)", TOEFL: "90+ (MBA 100+)", PTE: "63+", Duolingo: "120+" },
      GMAT_GRE: "Required for MBA/M.Math CS/MQF/MDSAI"
    }
  },
  scholarships: [
    { name: "International Student Entrance Scholarship (ISES)", amount_cad: 10000, criteria: "GPA 90%+" },
    { name: "President's Scholarship", amount_cad: 2000, criteria: "GPA 90-94.9%" },
    { name: "Merit Scholarship", amount_cad: 1000, criteria: "Early May admission, GPA 85-89.9%" },
    { name: "International Scholars Award", amount_cad_range: "5000-25000" }
  ],
  internships: {
    world_largest_coop: true,
    students_in_coop: "70% of undergraduates",
    work_terms: "Up to 6 (4 months each)",
    total_experience: "2 years paid",
    employers: 8000,
    countries: 70,
    wage_cad_per_hour: "20-40+",
    free_coop_work_permit: true,
    international_employment_specialists: true
  },
  campus_life: { clubs: "250+", sports_team: "Warriors", facilities: ["Student Life Centre (24/7)", "Squash courts", "Pool", "Soccer fields", "Bike Centre"] },
  security: { service: "Campus Safety Office", hours: "24/7", coordination: "Waterloo Regional Police Service" },
  top_ug_programs: ["Bachelor of Science in Computer Science", "Bachelor of Applied Science in Computer Engineering", "Bachelor of Software Engineering", "Bachelor of Applied Science in Electrical Engineering", "Bachelor of Applied Science in Mechanical Engineering"],
  top_pg_programs: ["Master of Mathematics in Computer Science (M.Math)", "Master of Applied Science (MASc) – Engineering", "Master of Business Administration (MBA)", "Master of Data Science and Artificial Intelligence (MDSAI)", "Master of Quantitative Finance (MQF)"]
})).insertedId;

// ============================================================
// 19. WESTERN UNIVERSITY
// ============================================================
const western = db.institutions.insertOne(inst({
  name: "Western University",
  type: "university",
  city: "London",
  province: "Ontario",
  country: "Canada",
  campuses: ["London (Main)", "Affiliate Colleges: Brescia, Huron, King's"],
  website: "https://www.uwo.ca",
  contacts: {
    admissions: { email: "admission@uwo.ca", phone: "519-661-2100", address: "Registrar's Office, Stevenson Hall, London, ON N6A 5B8" },
    international_students: { email: "international@uwo.ca", phone: "519-661-3820" },
    graduate_studies: { email: "sgs@uwo.ca", phone: "519-661-2111" }
  },
  application_portal: "https://www.ouac.on.ca",
  application_fee_cad: 115,
  intakes: ["Fall (September)", "Winter (January)"],
  deadlines: { ug_fall_2026: "January 15, 2026", grad_varies: true },
  eligibility: {
    undergraduate: {
      min_percent: 70,
      competitive_percent: "85-90+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "88 iBT", PTE: "60+", Duolingo: "120+" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: "3.0-3.7",
      english: { IELTS: "6.5-7.0 (Ivey MBA 7.0)", TOEFL: "86-105 iBT", PTE: "60+", Duolingo: "120+" },
      GMAT: "Required for Ivey HBA/MBA (650-700+)"
    }
  },
  scholarships: [
    { name: "International Student Entrance Scholarship", amount_cad: 10000, criteria: "Academic merit" },
    { name: "Western Scholarship of Excellence", amount_cad: 2000, criteria: "90-93.9% average" },
    { name: "President's Scholarship", amount_cad: 2500, criteria: "94%+ average" }
  ],
  internships: { coop_available: true, paid: true, employment_rate_percent: 90, ivey_business: "Highly ranked" },
  campus_life: { clubs: "250+", sports_team: "Mustangs" },
  security: { hours: "24/7" },
  top_ug_programs: ["Ivey HBA (Honours Business Administration)", "Bachelor of Engineering (various)", "Bachelor of Science in Computer Science", "Bachelor of Science (Medical Sciences / Kinesiology)", "Bachelor of Arts (Social Sciences)"],
  top_pg_programs: ["MBA (Ivey Business School)", "Master of Science in Computer Science", "Master of Engineering", "Master of Science (various)", "Master of Public Health"]
})).insertedId;

// ============================================================
// 20. YORK UNIVERSITY
// ============================================================
const york = db.institutions.insertOne(inst({
  name: "York University",
  type: "university",
  city: "Toronto",
  province: "Ontario",
  country: "Canada",
  campuses: ["Keele (Main)", "Glendon (Bilingual)", "Markham"],
  website: "https://www.yorku.ca",
  contacts: {
    admissions: { email: "admissions@yorku.ca", phone: "416-736-5000", address: "Undergraduate Admissions, 1120 Ross Building, Toronto, ON M3J 1P3" },
    international_students: { email: "yuintl@yorku.ca", phone: "416-736-5353" },
    graduate_studies: { email: "gsa@yorku.ca", phone: "416-736-5521", portal: "https://gradstudies.yorku.ca" }
  },
  application_portal: "https://www.ouac.on.ca",
  application_fee_cad: 110,
  intakes: ["Fall (September)", "Winter (January)", "Summer (May)"],
  deadlines: { ug_fall_2026: "February 1, 2026", ug_winter_2027: "August 1, 2026", grad_varies: true },
  eligibility: {
    undergraduate: {
      min_percent: 70,
      competitive_percent: "80-85+",
      english: { IELTS: "6.5 (6.0 each)", TOEFL: "86 iBT", PTE: "58+", Duolingo: "115+" }
    },
    postgraduate: {
      min_percent: 70,
      min_gpa: "3.0-3.2",
      english: { IELTS: "6.5-7.0", TOEFL: "86-100 iBT", PTE: "60+", Duolingo: "115+" },
      GMAT: "Required for Schulich MBA"
    }
  },
  scholarships: [
    { name: "International Student Entrance Scholarship", amount_cad: 5000, criteria: "Academic merit" },
    { name: "Schulich MBA Entrance Scholarships", amount_cad: 10000, criteria: "Academic/professional excellence" },
    { name: "York University Continuing Students Awards", varies: true }
  ],
  internships: { coop_available: true, paid: true, employment_rate_percent: 85, industry_partners: 800 },
  campus_life: { clubs: "300+", sports_team: "Lions" },
  security: { hours: "24/7" },
  top_ug_programs: ["Bachelor of Commerce (Schulich)", "Bachelor of Engineering (Lassonde)", "Bachelor of Science in Computer Science", "Bachelor of Arts in International Development Studies", "Bachelor of Science (various)"],
  top_pg_programs: ["Master of Business Administration (Schulich MBA)", "Master of Science in Computer Science", "Master of Engineering (Lassonde)", "Master of Financial Accountability (MFAc)", "Master of Public Policy, Administration and Law (MPPAL)"]
})).insertedId;

// ════════════════════════════════════════════════════════════
// PROGRAMS COLLECTION — Detailed UG & PG per institution
// ════════════════════════════════════════════════════════════

// ---- Helper to insert programs ----
function addPrograms(instId, instName, programs) {
  programs.forEach(p => {
    p.institution_id = instId;
    p.institution_name = instName;
  });
  db.programs.insertMany(programs);
}

// ──────────────────────────────────────────────────────────
// ALGOMA UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(algoma, "Algoma University", [
  { level: "UG", name: "Bachelor of Computer Science", faculty: "Faculty of Computer Science and Technology", duration_years: 4, credits: 120, annual_fee_cad: 22574, total_fee_cad: 90296, min_class12_percent: 75, required_subjects: ["Mathematics", "Physics"], campus: "Sault Ste. Marie / Brampton", features: ["Gaming technology specialization", "AI/cybersecurity/data science courses", "State-of-the-art labs"], entry_roles: ["Software Developer", "Game Developer", "Systems Analyst", "Data Analyst", "Cybersecurity Specialist"], employment_rate: 87 },
  { level: "UG", name: "Bachelor of Commerce", faculty: "Faculty of Business & Administration", duration_years: 4, credits: 120, annual_fee_cad: 22574, total_fee_cad: 90296, min_class12_percent: 70, specializations: ["Accounting", "Finance", "HR", "Management", "Marketing"], entry_roles: ["Business Analyst", "Financial Analyst", "Marketing Manager", "HR Specialist"] },
  { level: "UG", name: "Bachelor of Science", faculty: "Faculty of Science", duration_years: 4, credits: 120, annual_fee_cad: 22574, total_fee_cad: 90296, min_class12_percent: 75, specializations: ["Biology", "Chemistry", "Physics", "Psychology", "Environmental Science", "Mathematics", "Statistics"], entry_roles: ["Research Scientist", "Data Analyst", "Laboratory Technician"] },
  { level: "UG", name: "Bachelor of Social Work", faculty: "Faculty of Social Sciences", duration_years: 4, credits: 120, annual_fee_cad: 22574, total_fee_cad: 90296, min_class12_percent: 65, features: ["Community-based learning", "Field placements mandatory"], entry_roles: ["Social Worker", "Counselor", "Case Manager"] },
  { level: "UG", name: "Bachelor of Science in Environmental Science", faculty: "Faculty of Science", duration_years: 4, credits: 120, annual_fee_cad: 22574, total_fee_cad: 90296, min_class12_percent: 75, required_subjects: ["Mathematics", "Physics", "Chemistry", "Biology"], entry_roles: ["Environmental Consultant", "GIS Analyst", "Conservation Officer"] },
  { level: "PG", name: "Master of Computer Science (Course-Based)", faculty: "Faculty of Computer Science and Technology", duration_years: 2, format: "Course-based", annual_fee_cad: 22574, total_fee_cad: 45148, min_bachelor_percent: 75, IELTS: "6.5 (6.0 each)", entry_roles: ["Software Engineer", "Data Scientist", "Cybersecurity Specialist", "ML Engineer"] },
  { level: "PG", name: "Master of Science in Computer Science (Thesis-Based)", faculty: "Faculty of Computer Science and Technology", duration_years: 2, format: "Thesis-based", annual_fee_cad: 22574, total_fee_cad: 45148, min_bachelor_percent: 75, funding: { GTA: 12000, note: "Renewable annually" }, entry_roles: ["Research Scientist", "AI Researcher", "Academic Researcher"] },
  { level: "PG", name: "Master of Global Business and Economy (MGBE)", faculty: "Faculty of Business & Administration", duration_years: 2, format: "Course-based (10 courses + capstone)", annual_fee_cad: 22574, total_fee_cad: 45148, min_bachelor_percent: 75, features: ["First such program in Canada", "Available Sault Ste. Marie & Brampton"], entry_roles: ["Business Consultant", "International Business Manager", "Economist"] },
  { level: "PG", name: "Master of Psychotherapy (MAP)", faculty: "Faculty of Social Sciences", duration_years: 2, format: "Course-based clinical", annual_fee_cad: 22574, total_fee_cad: 45148, min_bachelor_percent: 75, entry_roles: ["Psychotherapist", "Clinical Counselor", "Mental Health Counselor"] },
  { level: "PG", name: "Master of Science in Biology", faculty: "Faculty of Science", duration_years: 2, format: "Thesis-based", annual_fee_cad: 22574, total_fee_cad: 45148, min_bachelor_percent: 75, funding: { GRA: 10000, note: "Renewable annually" }, entry_roles: ["Research Scientist", "Field Biologist", "Environmental Scientist"] }
]);

// ──────────────────────────────────────────────────────────
// CONCORDIA UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(concordia, "Concordia University", [
  { level: "UG", name: "Bachelor of Commerce (BComm Honours)", faculty: "John Molson School of Business", duration_years: 4, credits: 120, tuition_per_credit_cad: 1295, annual_fee_estimated_cad: 38850, min_class12_percent: 70, specializations: ["Finance", "Marketing", "Accountancy", "HR", "International Business"], coop: true, entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant"] },
  { level: "UG", name: "Bachelor of Engineering (BEng Honours)", faculty: "Gina Cody School", duration_years: 5, coop: true, tuition_per_credit_cad: 1190, min_class12_percent: 80, required_subjects: ["Mathematics", "Physics", "Chemistry"], specializations: ["Civil", "Computer", "Electrical", "Mechanical", "Aerospace", "Software"], entry_roles: ["Civil Engineer", "Electrical Engineer", "Software Engineer"] },
  { level: "UG", name: "Bachelor of Computer Science (BCompSc Honours)", faculty: "Gina Cody School", duration_years: 4, credits: 120, coop: true, tuition_per_credit_cad: 1100, min_class12_percent: 75, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Full-Stack Developer"] },
  { level: "UG", name: "Business Technology Management (BComm Honours)", faculty: "John Molson School of Business", duration_years: 4, credits: 120, coop: true, tuition_per_credit_cad: 1295, min_class12_percent: 70, entry_roles: ["IT Business Analyst", "Technology Consultant", "Project Manager"] },
  { level: "UG", name: "Civil Engineering (BEng Honours)", faculty: "Gina Cody School", duration_years: 4, credits: 119, coop_optional_extends_to_years: 5, tuition_per_credit_cad: 1190, min_class12_percent: 80, entry_roles: ["Civil Engineer", "Structural Engineer", "Transportation Engineer"] },
  { level: "PG", name: "Master of Business Administration (MBA)", faculty: "John Molson School of Business", duration_years: 2, annual_fee_cad: "28000-40000", work_experience_required_years: 2, GMAT: "550+ recommended", IELTS: "7.0", entry_roles: ["Management Consultant", "Investment Banker", "Product Manager"] },
  { level: "PG", name: "Master of Science in Computer Science (M.Sc.)", faculty: "Gina Cody School", duration_years: 2, annual_fee_cad: "15000-20000", format: "Thesis or course-based", supervisor_required: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Engineering (M.Eng./M.A.Sc.)", faculty: "Gina Cody School", duration_months: "18-24", specializations: ["Civil", "Electrical", "Mechanical", "Aerospace", "Software"], annual_fee_cad: "18000-25000", entry_roles: ["Design Engineer", "Research Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Organizational Project Management (MOPM)", faculty: "John Molson School of Business", duration_years_fulltime: 1.5, duration_years_parttime: 2.5, annual_fee_cad: "15000-20000", entry_roles: ["Project Manager", "Program Manager", "Operations Manager"] },
  { level: "PG", name: "Master of Applied Science (M.A.Sc.) – Civil Engineering", faculty: "Gina Cody School", duration_years: 2, credits: 60, format: "Thesis-based", supervisor_required: true, annual_fee_cad: "18000-25000", entry_roles: ["Civil Engineer", "Structural Engineer", "Environmental Engineer"] }
]);

// ──────────────────────────────────────────────────────────
// CONESTOGA COLLEGE PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(conestoga, "Conestoga College", [
  { level: "UG", name: "Bachelor of Computer Science (Honours)", faculty: "Faculty of Applied Technology & Science", duration_years: 3, coop: true, coop_mandatory: true, annual_fee_cad: 15961, total_fee_cad: 47883, min_class12_percent: 75, campus: "Kitchener-Doon", features: ["Software development", "Cybersecurity", "Testing methodologies"], entry_roles: ["Software Developer", "Full-Stack Developer", "DevOps Engineer", "Cybersecurity Analyst"] },
  { level: "UG", name: "Diploma in Computer Programming & Analysis", faculty: "Faculty of Applied Technology & Science", duration_years: 2, coop_optional: true, annual_fee_cad: 14588, total_fee_cad: 29176, min_class12_percent: 70, entry_roles: ["Computer Programmer", "Software Developer", "Web Developer", "Systems Analyst"] },
  { level: "UG", name: "Advanced Diploma in Computer Engineering Technology", faculty: "Faculty of Applied Technology & Science", duration_years: 3, coop_optional: true, annual_fee_cad: 14588, total_fee_cad: 43764, min_class12_percent: 75, entry_roles: ["Computer Engineer", "Embedded Systems Developer", "Hardware Design Engineer"] },
  { level: "UG", name: "Bachelor of Business Administration (Honours)", faculty: "Longo Faculty of Business", duration_years: 4, coop_optional: true, annual_fee_cad: 15961, total_fee_cad: 63844, min_class12_percent: 70, specializations: ["Finance", "Marketing", "HR", "Supply Chain"], entry_roles: ["Business Analyst", "Marketing Manager", "Financial Analyst"] },
  { level: "UG", name: "Diploma in Electronics Engineering Technology", faculty: "Faculty of Applied Technology & Science", duration_years: 2, coop_optional: true, annual_fee_cad: 14588, total_fee_cad: 29176, min_class12_percent: 75, required_subjects: ["Mathematics", "Physics"], entry_roles: ["Electronics Technician", "Systems Designer", "Quality Assurance Specialist"] },
  { level: "PG", name: "Graduate Certificate in Business Analytics", faculty: "Longo Faculty of Business", duration_months: 12, annual_fee_cad: 15844, min_bachelor_percent: 50, coop_optional: true, entry_roles: ["Data Analyst", "Business Analyst", "Data Scientist", "BI Analyst"] },
  { level: "PG", name: "Graduate Certificate in Project Management", faculty: "Longo Faculty of Business", duration_months: 12, annual_fee_cad: 15844, professional_credential: "PMP pathway", entry_roles: ["Project Manager", "Program Manager", "Operations Manager"] },
  { level: "PG", name: "Graduate Certificate in Applied Artificial Intelligence & Machine Learning", faculty: "Faculty of Applied Technology & Science", duration_months: 12, annual_fee_cad: 15844, min_bachelor_field: "CS/Engineering/Mathematics/Statistics", entry_roles: ["ML Engineer", "AI Developer", "Data Scientist", "Computer Vision Engineer"] },
  { level: "PG", name: "Advanced Diploma in Computer Engineering Technology (Postgraduate)", faculty: "Faculty of Applied Technology & Science", duration_years: 2, annual_fee_cad: "14588-15844", min_bachelor_percent: 60, entry_roles: ["Computer Engineer", "Embedded Systems Engineer", "Hardware Design Engineer"] },
  { level: "PG", name: "Graduate Certificate in Mobile Solutions Development (Optional Co-op)", faculty: "Faculty of Applied Technology & Science", duration_months: "12-24", annual_fee_cad: 15844, coop_optional: true, entry_roles: ["Mobile App Developer", "iOS Developer", "Android Developer", "Cross-Platform Developer"] }
]);

// ──────────────────────────────────────────────────────────
// DALHOUSIE UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(dalhousie, "Dalhousie University", [
  { level: "UG", name: "Bachelor of Engineering (BEng Honours)", faculty: "Faculty of Engineering", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad_per_term: 11220.50, estimated_annual_cad: "35000-45000", min_class12_percent: 80, campus: "Sexton Campus Halifax", specializations: ["Civil", "Mechanical", "Electrical", "Biomedical", "Chemical", "Computer", "Environmental"], coop_employment_rate: "97%", entry_roles: ["Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Biomedical Engineer"] },
  { level: "UG", name: "Bachelor of Computer Science (BSc Honours)", faculty: "Faculty of Computer Science", duration_years: 4, credits: 120, coop_optional_extends_to_years: 5, estimated_annual_cad: "35000-45000", min_class12_percent: 85, scholarship_available: { name: "CS Entrance Scholarship", amount_cad: 5000 }, entry_roles: ["Software Engineer", "Data Scientist", "ML Engineer", "Full-Stack Developer"] },
  { level: "UG", name: "Bachelor of Commerce (BComm Honours)", faculty: "Faculty of Management (Sobey Business School)", duration_years: 4, credits: 120, coop_optional: true, estimated_annual_cad: "35000-45000", min_class12_percent: 75, scholarship_available: { name: "CorpFinance Indian Scholarship", amount_cad: 15000 }, specializations: ["General Business", "Accountancy", "Finance", "Marketing", "HR", "MIS"], entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant"] },
  { level: "UG", name: "Bachelor of Applied Computer Science (BACSc Honours)", faculty: "Faculty of Computer Science", duration_years: 4, credits: 120, coop_optional_extends_to_years: 5, estimated_annual_cad: "35000-45000", min_class12_percent: 85, entry_roles: ["Software Developer", "Systems Administrator", "IT Consultant"] },
  { level: "UG", name: "Bachelor of Science (BSc Honours)", faculty: "Faculty of Science", duration_years: "3-4", coop_optional: true, estimated_annual_cad: "35000-45000", min_class12_percent: 75, specializations: ["Physics", "Chemistry", "Biology", "Biochemistry", "Mathematics", "Statistics", "Environmental Science"], entry_roles: ["Research Scientist", "Data Analyst", "Laboratory Technician"] },
  { level: "PG", name: "Master of Engineering (MEng)", faculty: "Faculty of Engineering", duration_months_cbe: 12, duration_months_thesis: "18-27", annual_fee_cad: "22000-30000", format_options: ["Course-based MEng", "Thesis-based M.A.Sc."], entry_roles: ["Project Engineer", "Research Engineer", "Design Engineer"] },
  { level: "PG", name: "Master of Applied Computer Science (MASc CS)", faculty: "Faculty of Computer Science", duration_months: "20-24", annual_fee_cad: "18000-24000", format_options: ["Thesis-based", "Course-based"], supervisor_required_for_thesis: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist"] },
  { level: "PG", name: "Master of Business Administration (MBA)", faculty: "Faculty of Management", duration_years: 2, annual_fee_cad: "35000-50000", work_experience_required_years: 2, GMAT: "550+", entry_roles: ["Management Consultant", "Investment Banker", "Product Manager"] },
  { level: "PG", name: "Master of Applied Science (MASc)", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "22000-30000", format: "Thesis-based", entry_roles: ["Research Engineer", "Design Engineer", "Structural Engineer"] },
  { level: "PG", name: "Master of Science (MSc)", faculty: "Various", duration_years: 2, annual_fee_cad: "18000-25000", format_options: ["Thesis", "Course-based"], entry_roles: ["Research Scientist", "Data Analyst", "Laboratory Scientist"] }
]);

// ──────────────────────────────────────────────────────────
// MCGILL UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(mcgill, "McGill University", [
  { level: "UG", name: "Bachelor of Science in Computer Science (B.Sc. Honours)", faculty: "School of Computer Science, Faculty of Arts & Science", duration_years: 4, annual_fee_cad: 62900, total_fee_cad: 251600, min_class12_percent: 93, required_subjects: ["Mathematics (calculus-based)", "English"], features: ["Guaranteed rate for entire program"], entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Cloud Architect"] },
  { level: "UG", name: "Bachelor of Engineering (B.Eng. Honours) – Various Specializations", faculty: "Faculty of Applied Science & Engineering", duration_years: 4, annual_fee_cad: 64000, total_fee_cad: 256000, min_class12_percent: 93, required_subjects: ["Standard Mathematics (NOT Applied Math)", "Physics", "Chemistry"], specializations: ["Bioengineering", "Chemical", "Civil", "Electrical and Computer", "Global Engineering", "Mechanical", "Materials", "Mining", "Software", "Bioresource"], coop_available: "Some specializations", entry_roles: ["Civil Engineer", "Mechanical Engineer", "Software Engineer", "Electrical Engineer"] },
  { level: "UG", name: "Bachelor of Commerce (B.Com. Honours) – Desautels", faculty: "Desautels Faculty of Management", duration_years: 4, annual_fee_cad_yr1: 62900, annual_fee_cad_yr234: 67200, total_fee_cad: 262500, min_class12_percent: 93, programs: "13 majors, 16 concentrations, 4 honours options", entry_roles: ["Financial Analyst", "Management Consultant", "Business Analyst", "Investment Banker"] },
  { level: "UG", name: "Bachelor of Science in Engineering – Architecture (B.Sc. Arch)", faculty: "School of Architecture", duration_years: 4, annual_fee_cad: 63500, total_fee_cad: 254000, min_class12_percent: 93, portfolio_required: true, entry_roles: ["Architect", "Architectural Technologist", "Urban Planner"] },
  { level: "UG", name: "Bachelor of Science – Science (B.Sc. Honours) – General/Specializations", faculty: "Faculty of Arts & Science", duration_years: 4, annual_fee_cad: 62900, total_fee_cad: 251600, min_class12_percent: "85-93", specializations: ["Biology", "Chemistry", "Physics", "Earth Sciences", "Mathematics", "Statistics"], entry_roles: ["Research Scientist", "Laboratory Analyst", "Data Analyst"] },
  { level: "PG", name: "Master of Science in Computer Science (M.Sc.)", faculty: "School of Computer Science", duration_years: 2, annual_fee_cad: 31269, total_fee_cad: 62538, format: "Research/Thesis-based", min_gpa: "3.2/4.0 (80%+)", GRE_recommended: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Business Administration (MBA) – Desautels", faculty: "Desautels Faculty of Management", duration_months_options: [12, 20], annual_fee_cad_12m: 108500, annual_fee_cad_20m_approx: 145000, work_experience_min_years: 2, IELTS: "7.0 (no band below 7.0)", GMAT_required: true, GMAT_avg: "~670", PGWP: { "12m": "1-year", "20m": "3-year" }, entry_roles: ["Management Consultant", "Investment Banker", "Product Manager", "Startup Founder"] },
  { level: "PG", name: "Master of Engineering (M.Eng.) – Various Specializations", faculty: "Faculty of Applied Science & Engineering", duration_months: "18-24", annual_fee_cad: "29780-31269", specializations: ["Mechanical", "Electrical", "Civil", "Chemical", "Software", "Bioengineering"], entry_roles: ["Design Engineer", "Research Engineer", "Manufacturing Engineer"] },
  { level: "PG", name: "Master of Science in Applied (M.Sc.A.) – Biotechnology/Applied Sciences", faculty: "Faculty of Science", duration_months: "16-24", annual_fee_cad: "31269", specializations: ["Biotechnology", "Applied Chemistry", "Applied Physics", "Biomedical Sciences"], entry_roles: ["Biotechnology Researcher", "Research Scientist", "Regulatory Affairs Specialist"] },
  { level: "PG", name: "Master of Management (MIM) – Finance/Analytics", faculty: "Desautels Faculty of Management", duration_months: "12-20", annual_fee_cad_finance: 72500, annual_fee_cad_analytics: 72600, GMAT_required: true, concentrations: ["Finance", "Analytics"], entry_roles: ["Investment Analyst", "Equity Research Analyst", "Financial Analyst", "Data Analyst"] }
]);

// ──────────────────────────────────────────────────────────
// UNIVERSITY OF TORONTO PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(uToronto, "University of Toronto", [
  { level: "UG", name: "Bachelor of Applied Science in Computer Engineering", faculty: "Dept. of Electrical & Computer Engineering", duration_years: 4, coop_pey_extends_to_years: 5, annual_fee_cad: 63500, min_class12_percent: 70, admission_avg_percent: "Low to mid 90s", required_subjects: ["Physics", "Mathematics", "Chemistry"], pey_employers: ["Amazon", "IBM", "Intel", "NVIDIA"], entry_roles: ["Embedded Systems Engineer", "Hardware Engineer", "Software Engineer", "AI/ML Engineer"] },
  { level: "UG", name: "Bachelor of Applied Science in Mechanical Engineering", faculty: "Dept. of Mechanical & Industrial Engineering", duration_years: 4, coop_pey_extends_to_years: 5, annual_fee_cad: 63500, min_class12_percent: 70, entry_roles: ["Mechanical Engineer", "Automotive Engineer", "Manufacturing Engineer", "HVAC Engineer"] },
  { level: "UG", name: "Bachelor of Applied Science in Electrical Engineering", faculty: "Dept. of Electrical & Computer Engineering", duration_years: 4, coop_pey_extends_to_years: 5, annual_fee_cad: 63500, min_class12_percent: 70, entry_roles: ["Electrical Engineer", "Power Systems Engineer", "Embedded Systems Engineer", "RF/Microwave Engineer"] },
  { level: "UG", name: "Bachelor of Science in Computer Science", faculty: "Dept. of Computer Science, Faculty of Arts & Science", duration_years: 4, annual_fee_cad: "59320-61000", min_class12_percent: 70, entry_roles: ["Software Engineer", "Systems Engineer", "AI/ML Engineer", "Full-Stack Developer", "Cybersecurity Specialist"] },
  { level: "UG", name: "Bachelor of Commerce (Business Administration)", faculty: "Rotman School of Management", duration_years: 4, annual_fee_cad: "61000-65000", min_class12_percent: 70, entry_roles: ["Management Consultant", "Business Analyst", "Financial Analyst", "Marketing Specialist"] },
  { level: "PG", name: "Master of Applied Science in Computer Engineering", faculty: "Dept. of Electrical & Computer Engineering", duration_years_thesis: 2, duration_years_meng: 1, annual_fee_masc_cad: "28000-32000", annual_fee_meng_cad: "32000-38000", format_options: ["MASc (thesis)", "MEng (coursework)"], entry_roles: ["Computer Engineer", "Embedded Systems Engineer", "AI/ML Engineer"] },
  { level: "PG", name: "Master of Business Administration (MBA) – Rotman", faculty: "Rotman School of Management", duration_months: 20, total_fee_cad: "132500-145000", work_experience_years: "2-5", IELTS: "7.0", GMAT_avg: "650-680", median_salary_cad: "125000+", entry_roles: ["Management Consultant", "Corporate Strategist", "Finance Manager", "Product Manager"] },
  { level: "PG", name: "Master of Science in Computer Science", faculty: "Dept. of Computer Science", duration_years: 2, annual_fee_cad: "25000-32000", format_options: ["Thesis-based", "Course-based"], entry_roles: ["Software Engineer", "AI/ML Engineer", "Cloud Architect", "Research Scientist"] },
  { level: "PG", name: "Master of Science in Data Science", faculty: "Dept. of Statistical Sciences", duration_years: 2, annual_fee_cad: "28000-35000", entry_roles: ["Data Scientist", "ML Engineer", "Data Analyst", "Quantitative Analyst"] },
  { level: "PG", name: "Master of Applied Science in Mechanical Engineering", faculty: "Dept. of Mechanical & Industrial Engineering", duration_years_thesis: 2, duration_years_meng: 1, annual_fee_masc_cad: "28000-32000", format_options: ["MASc (thesis)", "MEng (coursework)"], entry_roles: ["Mechanical Engineer", "Manufacturing Engineer", "Thermal Engineer", "Systems Engineer"] }
]);

// ──────────────────────────────────────────────────────────
// UNIVERSITY OF WATERLOO PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(uWaterloo, "University of Waterloo", [
  { level: "UG", name: "Bachelor of Science in Computer Science (B.Sc. Honours)", faculty: "David R. Cheriton School of Computer Science, Faculty of Mathematics", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: "34255-34597", min_class12_percent: 90, features: ["Euclid Math Contest highly recommended"], coop_work_terms: 6, coop_total_experience_years: 2, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Cloud Architect"] },
  { level: "UG", name: "Bachelor of Applied Science in Computer Engineering (B.A.Sc. Honours)", faculty: "Faculty of Engineering, ECE Dept.", duration_years: 5, coop_mandatory: true, annual_fee_cad: 34597, min_class12_percent: 90, required_subjects: ["Standard Mathematics (NOT applied)", "Physics", "Chemistry"], video_interview_required: true, entry_roles: ["Software Engineer", "Computer Hardware Engineer", "Embedded Systems Engineer", "AI/ML Engineer"] },
  { level: "UG", name: "Bachelor of Software Engineering (B.S.E. Honours)", faculty: "Faculty of Engineering (joint with CS)", duration_years: 5, coop_mandatory: true, annual_fee_cad: "34255-34597", min_class12_percent: 90, note: "NOT available as alternative choice; direct application required", entry_roles: ["Software Engineer", "Full-Stack Developer", "Software Architect", "DevOps Engineer"] },
  { level: "UG", name: "Bachelor of Applied Science in Electrical Engineering (B.A.Sc. Honours)", faculty: "Faculty of Engineering, ECE Dept.", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: 34597, min_class12_percent: 90, entry_roles: ["Electrical Engineer", "Power Systems Engineer", "Telecommunications Engineer", "Controls Engineer"] },
  { level: "UG", name: "Bachelor of Applied Science in Mechanical Engineering (B.A.Sc. Honours)", faculty: "Faculty of Engineering, Mechanical and Mechatronics", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: 34597, min_class12_percent: 90, entry_roles: ["Mechanical Engineer", "Automotive Engineer", "Manufacturing Engineer", "Robotics Engineer"] },
  { level: "PG", name: "Master of Mathematics in Computer Science (M.Math)", faculty: "David R. Cheriton School of Computer Science", duration_years: 2, annual_fee_cad: 23088, total_fee_cad: 46176, format: "Research-based thesis", GRE_recommended: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Applied Science (MASc) – Engineering Specializations", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "31200+", format: "Research-based thesis", specializations: ["Civil", "Chemical", "Computer", "Electrical", "Mechanical", "Nanotechnology", "Systems Design"], entry_roles: ["Design Engineer", "Research Engineer", "Structural Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Business Administration (MBA)", faculty: "Faculty of Engineering / Conrad School of Business", duration_years: 2, annual_fee_cad: "50000-65000", work_experience_min_years: "2-3", GMAT_avg: "~670", GMAT_required: true, entry_roles: ["Management Consultant", "Investment Banker", "Product Manager", "Startup Founder"] },
  { level: "PG", name: "Master of Data Science and Artificial Intelligence (MDSAI)", faculty: "Faculty of Engineering / School of Computer Science", duration_years: 2, annual_fee_cad: "30000-40000", min_bachelor_percent: 75, GRE_recommended: true, entry_roles: ["Data Scientist", "ML Engineer", "AI Researcher", "Quantitative Analyst"] },
  { level: "PG", name: "Master of Quantitative Finance (MQF)", faculty: "School of Accounting and Finance", duration_months: 16, annual_fee_cad: 27156, total_fee_cad: 36208, GMAT_required: true, summer_internship: true, entry_roles: ["Quantitative Analyst", "Risk Manager", "Trading Desk Analyst", "Derivatives Analyst"] }
]);

// ──────────────────────────────────────────────────────────
// UNIVERSITY OF BRITISH COLUMBIA PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(ubc, "University of British Columbia", [
  { level: "UG", name: "Bachelor of Science in Computer Science (B.Sc. Honours)", faculty: "School of Computer Science, Faculty of Science", duration_years: 4, annual_fee_cad: "49500-52000", min_class12_percent: 80, campus: "Vancouver", coop_optional: true, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Cloud Architect"] },
  { level: "UG", name: "Bachelor of Applied Science in Computer Engineering (B.A.Sc. Honours)", faculty: "Faculty of Applied Science", duration_years: 4, annual_fee_cad: "60000-64000", min_class12_percent: 80, coop_optional: true, campus: "Vancouver or Okanagan", specializations: ["Hardware", "AI", "Data Systems", "Embedded Systems", "Robotics"], entry_roles: ["Software Engineer", "Systems Engineer", "Embedded Systems Engineer", "Robotics Engineer"] },
  { level: "UG", name: "Bachelor of Applied Science in Electrical Engineering (B.A.Sc. Honours)", faculty: "Faculty of Applied Science", duration_years: 4, annual_fee_cad: "60000-64000", min_class12_percent: 80, coop_optional: true, entry_roles: ["Electrical Engineer", "Power Systems Engineer", "RF Engineer", "Control Systems Engineer"] },
  { level: "UG", name: "Bachelor of Science in Data Science (B.Sc. Honours)", faculty: "Faculty of Science / Data Science Initiative", duration_years: 4, annual_fee_cad: "49500-52000", min_class12_percent: 75, campus: "Vancouver", entry_roles: ["Data Analyst", "Data Scientist", "BI Analyst", "ML Engineer"] },
  { level: "UG", name: "Bachelor of Commerce in Business Administration (BCom Honours)", faculty: "Sauder School of Business", duration_years: 4, annual_fee_yr1_cad: "49500-52000", annual_fee_yr234_cad: "55000-65000", total_fee_cad: "215000-250000", min_class12_percent: 75, entry_roles: ["Management Consultant", "Financial Analyst", "Investment Banking Analyst", "Marketing Manager"] },
  { level: "PG", name: "Master of Science in Computer Science (M.Sc.)", faculty: "Dept. of Computer Science", duration_years: 2, annual_fee_cad: "9883-13000", format: "Thesis-based research", GRE_recommended: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Business Administration (MBA) – Sauder", faculty: "Sauder School of Business", duration_months_options: [16, 24], annual_fee_cad: "108500-120000", work_experience_min_years: 2, GMAT_required: true, GMAT_avg: "~670", summer_internship: true, entry_roles: ["Management Consultant", "Investment Banker", "Product Manager", "Corporate Development Lead"] },
  { level: "PG", name: "Master of Engineering (M.Eng.) – Various Specializations", faculty: "Faculty of Applied Science", duration_months: "16-24", annual_fee_cad: "31000-35000", specializations: ["Mechanical", "Electrical", "Civil", "Chemical", "Biomedical", "Materials", "Environmental", "Mining", "Software"], entry_roles: ["Design Engineer", "Research Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Science in Data Science (M.Sc.)", faculty: "Faculty of Science / Data Science Institute", duration_years: 2, annual_fee_cad: "15000-25000", GRE_recommended: true, entry_roles: ["Data Scientist", "ML Engineer", "Data Analyst", "Research Scientist"] },
  { level: "PG", name: "Master of Science in Operations Research / Applied Sciences (M.Sc.)", faculty: "Faculty of Science", duration_years: 2, annual_fee_cad: "12000-20000", entry_roles: ["Operations Research Analyst", "Optimization Engineer", "Quantitative Analyst", "Logistics Analyst"] }
]);

// ──────────────────────────────────────────────────────────
// UNIVERSITY OF ALBERTA PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(uAlberta, "University of Alberta", [
  { level: "UG", name: "Bachelor of Science in Computing Science (B.Sc. Honours)", faculty: "Dept. of Computing Science, Faculty of Science", duration_years: 4, credits: 120, annual_fee_cad: 36175, total_fee_cad: 144700, min_class12_percent: 85, campus: "North Campus Edmonton", coop_available: true, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Full-Stack Developer"] },
  { level: "UG", name: "Bachelor of Science in Computer Engineering (B.Sc. Honours)", faculty: "Dept. of Electrical & Computer Engineering", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: 41657.50, total_fee_cad: 166630, min_class12_percent: 90, specializations: ["Software", "Nanoscale System Design", "General Computer Engineering"], entry_roles: ["Software Engineer", "Computer Hardware Engineer", "Embedded Systems Engineer", "AI/ML Engineer"] },
  { level: "UG", name: "Bachelor of Science in Nursing (BScN Honours)", faculty: "Faculty of Nursing", duration_years: 4, annual_fee_cad: "25000-32000", total_fee_cad: "100000-128000", min_class12_percent: 80, required_subjects: ["Biology", "Chemistry", "Mathematics"], clinical_placements: true, entry_roles: ["Registered Nurse (RN)", "Hospital Nurse", "Community Health Nurse"] },
  { level: "UG", name: "Bachelor of Science in Mathematics (B.Sc. Honours)", faculty: "Dept. of Mathematical and Statistical Sciences", duration_years: 4, annual_fee_cad: "31325-33000", total_fee_cad: "125300-132000", min_class12_percent: 85, concentrations: ["Statistics", "Computational Science", "Pure Mathematics"], entry_roles: ["Data Analyst", "Statistician", "Quantitative Analyst", "Actuary"] },
  { level: "UG", name: "Bachelor of Science in Engineering – Various Specializations", faculty: "Faculty of Engineering", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: "40000-44000", min_class12_percent: 90, specializations: ["Civil", "Chemical", "Electrical", "Mechanical", "Mining", "Petroleum", "Software", "Materials"], entry_roles: ["Civil Engineer", "Chemical Engineer", "Mechanical Engineer", "Petroleum Engineer"] },
  { level: "PG", name: "Master of Science in Computing Science (M.Sc.)", faculty: "Dept. of Computing Science", duration_years: 2, credits: 15, annual_fee_cad: 10518, total_fee_cad: 21036, format: "Thesis-based research", supervisor_preferred: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Engineering (M.Eng.) – Various Specializations", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "24000-32000", total_fee_cad: "48000-64000", specializations: ["Civil", "Chemical", "Electrical", "Mechanical", "Mining", "Petroleum", "Software", "Biomedical", "Environmental", "Engineering Management"], entry_roles: ["Design Engineer", "Research Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Business Administration (MBA)", faculty: "Faculty of Engineering / Business Administration", duration_months: "18-24", annual_fee_cad: "40000-55000", work_experience_min_years: 2, GMAT_required: true, GMAT_avg: "~670", entry_roles: ["Management Consultant", "Investment Banker", "Product Manager", "Entrepreneur"] },
  { level: "PG", name: "Master of Science in Statistics (M.Sc.)", faculty: "Dept. of Mathematical and Statistical Sciences", duration_years: 2, annual_fee_cad: "23000-27000", total_fee_cad: "46000-54000", format: "Thesis-based", entry_roles: ["Statistician", "Data Analyst", "Quantitative Analyst", "Biostatistician"] },
  { level: "PG", name: "Master of Science in Engineering Management (M.Sc.)", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "28000-35000", work_experience_preferred_years: 2, capstone_projects: true, entry_roles: ["Project Manager", "Engineering Manager", "Operations Manager", "Management Consultant"] }
]);

// ──────────────────────────────────────────────────────────
// UNIVERSITY OF CALGARY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(uCalgary, "University of Calgary", [
  { level: "UG", name: "Bachelor of Science in Engineering (BEng Honours) – Schulich", faculty: "Schulich School of Engineering", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: "26848-28460", total_fee_cad: "107392-113840", min_class12_percent: 85, specializations: ["Civil", "Mechanical", "Electrical", "Chemical", "Biomedical", "Geomatics", "Software", "Aerospace"], employers: ["TC Energy", "ATCO", "Enbridge", "PCL Construction"], entry_roles: ["Civil Engineer", "Mechanical Engineer", "Software Engineer", "Petroleum Engineer"] },
  { level: "UG", name: "Bachelor of Commerce (BComm Honours) – Haskayne", faculty: "Haskayne School of Business", duration_years: 4, annual_fee_cad: 26849, total_fee_cad: 107396, min_class12_percent: 82, specializations: ["Business Analytics", "Entrepreneurship", "Finance", "International Business", "Marketing"], entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant", "Entrepreneur"] },
  { level: "UG", name: "Bachelor of Science in Computer Science (BSc Honours)", faculty: "Faculty of Science", duration_years: 4, credits: 120, annual_fee_cad: 28460, total_fee_cad: 113840, min_class12_percent: 85, coop_optional: true, entry_roles: ["Software Engineer", "Data Scientist", "ML Engineer", "Cloud Engineer"] },
  { level: "UG", name: "Bachelor of Science (General Honours) – Various", faculty: "Faculty of Science", duration_years: "3-4", annual_fee_cad: 26849, min_class12_percent: 75, specializations: ["Physics", "Chemistry", "Biology", "Biochemistry", "Geology", "Mathematics", "Statistics", "Environmental Science", "Forensic Science"], entry_roles: ["Research Scientist", "Data Analyst", "Environmental Consultant"] },
  { level: "UG", name: "Bachelor of Health Sciences (BHSc Honours)", faculty: "Faculty of Kinesiology and Health Sciences", duration_years: 4, annual_fee_cad: 26849, total_fee_cad: 107396, min_class12_percent: 80, required_subjects: ["Biology", "Chemistry"], entry_roles: ["Health Services Researcher", "Public Health Professional", "Healthcare Administrator"] },
  { level: "PG", name: "Master of Business Administration (MBA) – Haskayne", faculty: "Haskayne School of Business", duration_years: 2, annual_fee_cad: 87449, total_fee_cad: 174898, work_experience_min_years: 2, GMAT_required: true, GMAT_median: 650, IELTS: "7.0", options: ["Full-time MBA (24 months)", "Executive MBA", "Flexible MBA"], entry_roles: ["Management Consultant", "Investment Banker", "Corporate Finance Manager", "Entrepreneur"] },
  { level: "PG", name: "Master of Science in Computer Science (M.Sc.)", faculty: "Faculty of Science", duration_years: 2, annual_fee_cad: 8574, total_fee_cad: 17148, format_options: ["Course-based", "Thesis"], supervisor_required_for_thesis: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Engineering (M.Eng./M.A.Sc.) – Schulich", faculty: "Schulich School of Engineering", duration_months: "20-24", annual_fee_cad: "19950-27924", specializations: ["Civil", "Mechanical", "Electrical", "Chemical", "Software", "Biomedical", "Geomatics", "Aerospace"], entry_roles: ["Design Engineer", "Research Engineer", "Project Manager", "Petroleum Engineer"] },
  { level: "PG", name: "Master of Data Science and Analytics (MDSA)", faculty: "Faculty of Science", duration_months: 12, annual_fee_cad: 60552, format: "Accelerated full-time", capstone_with_industry: true, entry_roles: ["Data Scientist", "Business Analyst", "ML Engineer", "Analytics Manager"] },
  { level: "PG", name: "Master of Science in Mathematics and Statistics (M.Sc.)", faculty: "Faculty of Science", duration_years: 2, annual_fee_cad: 8574, total_fee_cad: 17148, format: "Thesis-based", entry_roles: ["Statistician", "Data Analyst", "Quantitative Analyst", "Biostatistician"] }
]);

// ──────────────────────────────────────────────────────────
// UNIVERSITY OF OTTAWA PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(uOttawa, "University of Ottawa", [
  { level: "UG", name: "Bachelor of Science in Computer Science (Honours)", faculty: "School of Electrical Engineering and Computer Science", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: "43335-45000", total_fee_cad: "173340-180000", min_class12_percent: 85, entry_roles: ["Software Engineer", "Data Scientist", "ML Engineer", "Full-Stack Developer"] },
  { level: "UG", name: "Bachelor of Applied Science in Engineering (Honours) – Various", faculty: "Faculty of Engineering", duration_years: 4, coop_optional_extends_to_years: 5, annual_fee_cad: "45000-63164", total_fee_cad: "180000-252656", min_class12_percent: 85, specializations: ["Civil", "Electrical", "Mechanical", "Chemical", "Software", "Systems Science", "Environmental & Water Resources"], entry_roles: ["Civil Engineer", "Electrical Engineer", "Mechanical Engineer", "Software Engineer"] },
  { level: "UG", name: "Bachelor of Science in Health Sciences (Honours)", faculty: "Faculty of Health Sciences", duration_years: 4, annual_fee_cad: "43500-45000", min_class12_percent: 85, required_subjects: ["Biology", "Chemistry", "Mathematics"], entry_roles: ["Healthcare Administrator", "Public Health Professional", "Research Coordinator"] },
  { level: "UG", name: "Bachelor of Science in Nursing (BScN Honours)", faculty: "School of Nursing, Faculty of Health Sciences", duration_years: 4, annual_fee_cad: 43263, total_fee_cad: 173052, min_class12_percent: 90, required_subjects: ["Biology", "Chemistry", "Mathematics"], clinical_placements: true, bilingual: "English and French", entry_roles: ["Registered Nurse (RN)", "Hospital Nurse", "Community Health Nurse"] },
  { level: "UG", name: "Bachelor of Commerce (Honours) – Telfer", faculty: "Telfer School of Management", duration_years: 4, annual_fee_cad: "32000-38000", total_fee_cad: "128000-152000", min_class12_percent: 80, coop_optional: true, entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant"] },
  { level: "PG", name: "Master of Business Administration (MBA) – Telfer", faculty: "Telfer School of Management", duration_months_options: [12, 24], total_fee_cad_professional: 68000, executive_mba_cad: 75000, work_experience_min_years: 3, GMAT_required: true, GMAT_avg: "~628", IELTS: "7.0", options: ["Professional MBA (12 or 24 months)", "Executive MBA (part-time)", "French-language MBA"], entry_roles: ["Management Consultant", "Investment Banker", "Product Manager", "Entrepreneur"] },
  { level: "PG", name: "Master of Science in Computer Science (M.Sc.)", faculty: "School of Electrical Engineering and Computer Science", duration_years: 2, annual_fee_cad: "10000-15000", total_fee_cad: "20000-30000", format: "Thesis-based research", entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Science in Engineering (M.A.Sc./M.Eng.)", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "15000-25000", format_options: ["Thesis M.A.Sc.", "Course-based M.Eng."], entry_roles: ["Research Engineer", "Design Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Science in Statistics/Biostatistics", faculty: "Dept. of Mathematics and Statistics", duration_years: 2, annual_fee_cad: "10000-15000", entry_roles: ["Statistician", "Biostatistician", "Data Analyst", "Research Scientist"] },
  { level: "PG", name: "Master of Public Health (MPH)", faculty: "Faculty of Health Sciences", duration_years: 2, annual_fee_cad: "15000-20000", entry_roles: ["Public Health Officer", "Health Policy Analyst", "Epidemiologist", "Health Researcher"] }
]);

// ──────────────────────────────────────────────────────────
// SIMON FRASER UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(sfu, "Simon Fraser University", [
  { level: "UG", name: "Bachelor of Science in Computing Science", faculty: "School of Computing Science, Faculty of Applied Sciences", duration_years: 4, credits: 120, coop_optional: true, annual_fee_cad: "36024-45000", min_class12_percent: 85, required_subjects: ["Mathematics", "Physics"], entry_roles: ["Software Engineer", "Data Scientist", "ML Engineer", "Full-Stack Developer"] },
  { level: "UG", name: "Bachelor of Applied Science in Engineering", faculty: "School of Engineering Science", duration_years: 4, coop_optional: true, annual_fee_cad: "36024-45000", min_class12_percent: 85, specializations: ["Computer Engineering", "Electronics Engineering", "Engineering Physics", "Sustainable Energy", "Biomedical", "Aerospace", "Mechatronic Systems"], entry_roles: ["Computer Engineer", "Electronics Engineer", "Biomedical Engineer"] },
  { level: "UG", name: "Bachelor of Business Administration (Beedie)", faculty: "Beedie School of Business", duration_years: 4, coop_optional: true, annual_fee_cad: "36024-45000", min_class12_percent: 80, entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant"] },
  { level: "UG", name: "Bachelor of Science in Molecular Biology and Biochemistry", faculty: "Faculty of Science", duration_years: 4, credits: 120, coop_optional: true, annual_fee_cad: "36024-45000", min_class12_percent: 85, required_subjects: ["Mathematics", "Physics", "Chemistry"], entry_roles: ["Research Scientist", "Biochemist", "Pharmaceutical Scientist"] },
  { level: "UG", name: "Bachelor of Science (General Honours)", faculty: "Faculty of Science", duration_years: "3-4", coop_optional: true, annual_fee_cad: "36024-45000", min_class12_percent: 75, specializations: ["Physics", "Chemistry", "Biology", "Mathematics", "Statistics", "Environmental Science"], entry_roles: ["Research Scientist", "Data Analyst", "Environmental Consultant"] },
  { level: "PG", name: "Master of Business Administration (MBA) – Beedie", faculty: "Beedie School of Business", duration_months_fulltime: 12, total_fee_cad: 70557, work_experience_min_years: 2, GMAT_required: true, IELTS: "7.0 (no section < 6.5)", entry_roles: ["Management Consultant", "Investment Banker", "Corporate Strategy Manager"] },
  { level: "PG", name: "Master of Science in Computer Science (M.Sc.)", faculty: "School of Computing Science", duration_years: 2, annual_fee_cad: "23716-25138", format_options: ["Thesis", "Course-based"], GRE_recommended: true, entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist", "ML Engineer"] },
  { level: "PG", name: "Master of Science in Professional Computer Science (M.Sc.)", faculty: "School of Computing Science", duration_years: 2, annual_fee_cad: "23716-25000", format: "Course-based professional", note: "Professionals transitioning to tech; no strict CS background", entry_roles: ["Software Engineer", "Technical Lead", "Product Manager", "Technical Consultant"] },
  { level: "PG", name: "Master of Engineering (M.Eng./M.A.Sc.) – Engineering Science", faculty: "School of Engineering Science", duration_months: "20-24", annual_fee_cad: "27560-42651", format_options: ["M.Eng. course-based", "M.A.Sc. thesis-based"], specializations: ["Computer Engineering", "Electronics Engineering", "Engineering Physics", "Systems Engineering", "Sustainable Energy", "Biomedical", "Aerospace", "Mechatronic Systems"], entry_roles: ["Design Engineer", "Research Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Science in Finance (M.Sc.) – Beedie", faculty: "Beedie School of Business", duration_months: 16, fee_per_term_cad: 14256, total_fee_cad: 57024, GRE_optional: true, entry_roles: ["Financial Analyst", "Investment Analyst", "Risk Manager", "Quantitative Analyst", "Wealth Manager"] }
]);

// ──────────────────────────────────────────────────────────
// FANSHAWE COLLEGE PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(fanshawe, "Fanshawe College", [
  { level: "UG", name: "Computer Programming and Analysis (Co-op)", faculty: "Faculty of Applied Science & Technology", credential: "Advanced Diploma", duration_years: 3, coop_mandatory: true, annual_fee_cad: "12000-14000", total_fee_cad: "36000-42000", min_class12_percent: 75, features: ["SharcNet supercomputer access", "Software development focus"], entry_roles: ["Software Developer", "Full-Stack Developer", "DevOps Engineer", "Quality Assurance Engineer"] },
  { level: "UG", name: "Computer Systems Technology (Co-op)", faculty: "Faculty of Applied Science & Technology", credential: "Advanced Diploma", duration_years: 3, coop_integrated: true, annual_fee_cad: "12000-14000", total_fee_cad: "36000-42000", min_class12_percent: 75, entry_roles: ["Network Administrator", "Systems Administrator", "Database Administrator", "Security Specialist"] },
  { level: "UG", name: "Business Administration Diploma", faculty: "Faculty of Business", credential: "Diploma", duration_years: 2, coop_optional: true, annual_fee_cad: "11000-13000", total_fee_cad: "22000-26000", min_class12_percent: 65, entry_roles: ["Business Analyst", "Administrative Manager", "Human Resources Specialist", "Marketing Coordinator"] },
  { level: "UG", name: "Practical Nursing Diploma", faculty: "Faculty of Health Sciences", credential: "Diploma", duration_years: 2, clinical_placements_mandatory: true, annual_fee_cad: "15000-18000", total_fee_cad: "30000-36000", min_class12_percent: 75, entry_roles: ["Practical Nurse", "Registered Practical Nurse (RPN)", "Hospital Nurse", "Community Health Nurse"] },
  { level: "UG", name: "Software Engineering (Co-op)", faculty: "Faculty of Applied Science & Technology", credential: "Advanced Diploma or Degree", duration_years: "3-4", coop_integrated: true, annual_fee_cad: "12000-14500", min_class12_percent: 75, entry_roles: ["Software Engineer", "Full-Stack Developer", "Application Developer", "DevOps Engineer"] },
  { level: "PG", name: "Graduate Certificate in Insurance and Risk Management", faculty: "Faculty of Business", duration_months: 7, annual_fee_cad: "8000-10000", entry_roles: ["Insurance Adjuster", "Risk Manager", "Insurance Broker", "Underwriter"] },
  { level: "PG", name: "Graduate Certificate in Artificial Intelligence and Machine Learning", faculty: "Faculty of Applied Science & Technology", duration_months: "12-20", annual_fee_cad: "10000-12000", min_bachelor_field: "CS/Engineering/Mathematics/Statistics", entry_roles: ["ML Engineer", "AI Developer", "Data Scientist", "Computer Vision Engineer"] },
  { level: "PG", name: "Graduate Certificate in Information Security Management", faculty: "Faculty of Applied Science & Technology", duration_months: "12-18", annual_fee_cad: "9000-12000", entry_roles: ["Cybersecurity Analyst", "Information Security Manager", "Penetration Tester", "Security Architect"] },
  { level: "PG", name: "Graduate Certificate in Project Management", faculty: "Faculty of Business", duration_months: 12, annual_fee_cad: "10000-12000", professional_credential: "PMP pathway", entry_roles: ["Project Manager", "Program Manager", "Operations Manager", "Portfolio Manager"] },
  { level: "PG", name: "Graduate Certificate in Business Analytics", faculty: "Faculty of Business", duration_months: 12, annual_fee_cad: "10000-12000", entry_roles: ["Data Analyst", "Business Analyst", "Data Scientist", "BI Analyst"] }
]);

// ──────────────────────────────────────────────────────────
// GEORGE BROWN POLYTECHNIC PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(georgeBrown, "George Brown Polytechnic", [
  { level: "UG", name: "Computer Programming (Honours)", faculty: "School of Computer Technology", credential: "Diploma/Degree", duration_years: 3, coop_available: true, min_class12_percent: 70, campus: "Casa Loma", entry_roles: ["Software Developer", "Web Developer", "Full-Stack Developer", "Quality Assurance Engineer"] },
  { level: "UG", name: "Business (Technology Management) Diploma", faculty: "Centre for Business", credential: "Diploma", duration_years: 2, coop_available: true, min_class12_percent: 65, campus: "St. James", entry_roles: ["Business Analyst", "IT Project Coordinator", "Business Operations Specialist"] },
  { level: "UG", name: "Culinary Management", faculty: "George Brown Chef School", credential: "Diploma", duration_years: 2, coop_available: true, min_class12_percent: 60, campus: "St. James and Waterfront", entry_roles: ["Chef", "Culinary Specialist", "Restaurant Manager", "Food Service Manager"] },
  { level: "UG", name: "Practical Nursing", faculty: "School of Health Sciences", credential: "Diploma", duration_years: 2, clinical_placements_mandatory: true, min_class12_percent: 70, campus: "Waterfront", entry_roles: ["Practical Nurse", "Registered Practical Nurse (RPN)", "Hospital Nurse"] },
  { level: "UG", name: "Construction Engineering Technology", faculty: "School of Construction and Engineering Technologies", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 70, campus: "Casa Loma", entry_roles: ["Construction Technologist", "Site Supervisor", "Project Coordinator"] },
  { level: "PG", name: "Graduate Certificate in Project Management", faculty: "Centre for Business", duration_months: 12, coop_optional: true, professional_credential: "PMP pathway", entry_roles: ["Project Manager", "Program Manager", "Operations Manager"] },
  { level: "PG", name: "Graduate Certificate in Business Analysis", faculty: "Centre for Business", duration_months: 12, entry_roles: ["Business Analyst", "Systems Analyst", "Process Analyst"] },
  { level: "PG", name: "Graduate Certificate in Health Informatics", faculty: "School of Health Sciences", duration_months: 12, entry_roles: ["Health Information Manager", "Clinical Data Analyst", "EHR Specialist"] },
  { level: "PG", name: "Graduate Certificate in Food and Nutrition Management", faculty: "George Brown Chef School", duration_months: 12, entry_roles: ["Food Service Manager", "Nutrition Consultant", "Dietitian Assistant"] },
  { level: "PG", name: "Graduate Certificate in Information Systems Business Analysis", faculty: "School of Computer Technology", duration_months: 12, entry_roles: ["IT Business Analyst", "Systems Analyst", "Technology Consultant"] }
]);

// ──────────────────────────────────────────────────────────
// HUMBER POLYTECHNIC PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(humber, "Humber Polytechnic", [
  { level: "UG", name: "Bachelor of Commerce in Business Administration", faculty: "Humber Business School", credential: "Honours Bachelor's Degree", duration_years: 4, coop_optional: true, min_class12_percent: 70, campus: "North", specializations: ["Marketing", "Finance", "HR", "Accounting", "Supply Chain"], entry_roles: ["Business Analyst", "Financial Analyst", "Marketing Manager", "HR Specialist"] },
  { level: "UG", name: "Computer Engineering Technology Advanced Diploma", faculty: "School of Applied Technology", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 70, required_subjects: ["Mathematics", "Physics"], entry_roles: ["Computer Engineer", "Embedded Systems Developer", "Hardware Design Engineer"] },
  { level: "UG", name: "Computer Programming Advanced Diploma", faculty: "School of Applied Technology", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 65, entry_roles: ["Software Developer", "Web Developer", "Mobile App Developer", "Application Developer"] },
  { level: "UG", name: "Bachelor of Nursing", faculty: "School of Health Sciences", credential: "Honours Bachelor's Degree", duration_years: 4, clinical_placements_mandatory: true, min_class12_percent: 75, entry_roles: ["Registered Nurse (RN)", "Hospital Nurse", "Community Health Nurse", "Specialized Care Nurse"] },
  { level: "UG", name: "Electrical Engineering Technology Advanced Diploma", faculty: "School of Applied Technology", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 70, required_subjects: ["Mathematics", "Physics"], entry_roles: ["Electrical Technician", "Controls Technician", "Instrumentation Specialist"] },
  { level: "PG", name: "Graduate Certificate in Business Analytics", faculty: "Humber Business School", duration_months: 12, coop_optional: true, entry_roles: ["Data Analyst", "Business Analyst", "Data Scientist", "BI Analyst"] },
  { level: "PG", name: "Graduate Certificate in Project Management", faculty: "Humber Business School", duration_months: 12, professional_credential: "PMP pathway", entry_roles: ["Project Manager", "Program Manager", "Operations Manager"] },
  { level: "PG", name: "Graduate Certificate in Cybersecurity", faculty: "School of Applied Technology", duration_months: 12, entry_roles: ["Cybersecurity Analyst", "Security Engineer", "Information Security Specialist"] },
  { level: "PG", name: "Graduate Certificate in Supply Chain Management", faculty: "Humber Business School", duration_months: 12, entry_roles: ["Supply Chain Analyst", "Logistics Coordinator", "Procurement Specialist"] },
  { level: "PG", name: "Graduate Certificate in Human Resources Management", faculty: "Humber Business School", duration_months: 12, entry_roles: ["HR Manager", "Talent Acquisition Specialist", "HR Business Partner"] }
]);

// ──────────────────────────────────────────────────────────
// MEMORIAL UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(memorial, "Memorial University of Newfoundland", [
  { level: "UG", name: "Bachelor of Engineering (BEng)", faculty: "Faculty of Engineering and Applied Science", duration_years: 4, coop_optional: true, annual_fee_cad: "15000-20000", min_class12_percent: 75, specializations: ["Civil", "Mechanical", "Electrical", "Ocean & Naval Architectural", "Process", "Computer"], entry_roles: ["Civil Engineer", "Mechanical Engineer", "Ocean Engineer", "Process Engineer"] },
  { level: "UG", name: "Bachelor of Computer Science", faculty: "Dept. of Computer Science", duration_years: 4, coop_optional: true, annual_fee_cad: "15000-20000", min_class12_percent: 75, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Systems Analyst"] },
  { level: "UG", name: "Bachelor of Commerce (Business Administration)", faculty: "Faculty of Business Administration (MUNFA)", duration_years: 4, coop_optional: true, annual_fee_cad: "15000-20000", min_class12_percent: 70, entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant"] },
  { level: "UG", name: "Bachelor of Science", faculty: "Faculty of Science", duration_years: 4, coop_optional: true, annual_fee_cad: "15000-20000", min_class12_percent: 70, specializations: ["Physics", "Chemistry", "Biology", "Mathematics", "Statistics", "Environmental Science"], entry_roles: ["Research Scientist", "Laboratory Analyst", "Environmental Consultant"] },
  { level: "UG", name: "Bachelor of Nursing", faculty: "School of Nursing", duration_years: 4, clinical_placements_mandatory: true, annual_fee_cad: "15000-20000", min_class12_percent: 75, entry_roles: ["Registered Nurse (RN)", "Hospital Nurse", "Community Health Nurse"] },
  { level: "PG", name: "Master of Engineering (MEng)", faculty: "Faculty of Engineering and Applied Science", duration_years: 2, annual_fee_cad: "15000-22000", format_options: ["Course-based", "Thesis-based"], specializations: ["Civil", "Mechanical", "Electrical", "Ocean & Naval", "Process", "Computer"], entry_roles: ["Project Engineer", "Research Engineer", "Design Engineer"] },
  { level: "PG", name: "Master of Business Administration (MBA)", faculty: "Faculty of Business Administration", duration_years: 2, annual_fee_cad: "15000-22000", work_experience_preferred: true, entry_roles: ["Management Consultant", "Finance Manager", "Operations Manager"] },
  { level: "PG", name: "Master of Computer Science (MSc)", faculty: "Dept. of Computer Science", duration_years: 2, annual_fee_cad: "15000-20000", format_options: ["Thesis", "Course-based"], entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist"] },
  { level: "PG", name: "Master of Applied Science (MASc)", faculty: "Faculty of Engineering and Applied Science", duration_years: 2, annual_fee_cad: "15000-20000", format: "Thesis-based research", entry_roles: ["Research Engineer", "Structural Engineer", "Systems Engineer"] },
  { level: "PG", name: "Master of Science (MSc)", faculty: "Various", duration_years: 2, annual_fee_cad: "15000-20000", format_options: ["Thesis", "Course-based"], entry_roles: ["Research Scientist", "Data Analyst", "Academic Researcher"] }
]);

// ──────────────────────────────────────────────────────────
// SENECA POLYTECHNIC PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(seneca, "Seneca Polytechnic", [
  { level: "UG", name: "Computer Programming Advanced Diploma", faculty: "School of Software Design and Data Science", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 65, campus: "Newnham / Markham", entry_roles: ["Software Developer", "Full-Stack Developer", "Web Developer", "Mobile App Developer"] },
  { level: "UG", name: "Business Administration Diploma", faculty: "Seneca Business", credential: "Diploma", duration_years: 2, coop_optional: true, min_class12_percent: 60, entry_roles: ["Business Analyst", "Administrative Manager", "Account Manager"] },
  { level: "UG", name: "Computer Engineering Technology Advanced Diploma", faculty: "School of Engineering Technology and Applied Science", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 70, required_subjects: ["Mathematics", "Physics"], entry_roles: ["Computer Engineer", "Embedded Systems Developer", "Systems Analyst"] },
  { level: "UG", name: "Accounting and Finance Diploma", faculty: "Seneca Business", credential: "Diploma", duration_years: 2, min_class12_percent: 65, entry_roles: ["Accountant", "Financial Analyst", "Finance Officer"] },
  { level: "UG", name: "Information Technology Advanced Diploma", faculty: "School of Software Design and Data Science", credential: "Advanced Diploma", duration_years: 3, coop_available: true, min_class12_percent: 65, entry_roles: ["IT Systems Analyst", "Network Administrator", "Cloud Engineer"] },
  { level: "PG", name: "Graduate Certificate in Business Analytics", faculty: "Seneca Business", duration_months: 12, entry_roles: ["Data Analyst", "Business Analyst", "Data Scientist"] },
  { level: "PG", name: "Graduate Certificate in Cybersecurity", faculty: "School of Software Design and Data Science", duration_months: 12, entry_roles: ["Cybersecurity Analyst", "Security Engineer", "Penetration Tester"] },
  { level: "PG", name: "Graduate Certificate in Project Management", faculty: "Seneca Business", duration_months: 12, professional_credential: "PMP pathway", entry_roles: ["Project Manager", "Program Manager", "Operations Manager"] },
  { level: "PG", name: "Graduate Certificate in AI and Machine Learning", faculty: "School of Software Design and Data Science", duration_months: 12, entry_roles: ["ML Engineer", "AI Developer", "Data Scientist"] },
  { level: "PG", name: "Graduate Certificate in Supply Chain Management", faculty: "Seneca Business", duration_months: 12, entry_roles: ["Supply Chain Analyst", "Logistics Coordinator", "Procurement Specialist"] }
]);

// ──────────────────────────────────────────────────────────
// MCMASTER UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(mcmaster, "McMaster University", [
  { level: "UG", name: "Bachelor of Engineering (BEng) – Various Specializations", faculty: "Faculty of Engineering", duration_years: 4, coop_optional: true, annual_fee_cad: "35000-42000", min_class12_percent: 85, specializations: ["Electrical & Computer", "Mechanical", "Software", "Chemical", "Civil", "Engineering Physics", "Materials"], entry_roles: ["Electrical Engineer", "Mechanical Engineer", "Software Engineer", "Chemical Engineer"] },
  { level: "UG", name: "Bachelor of Science in Computer Science", faculty: "Dept. of Computing and Software", duration_years: 4, coop_optional: true, annual_fee_cad: "32000-38000", min_class12_percent: 85, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer", "Systems Analyst"] },
  { level: "UG", name: "Bachelor of Commerce (DeGroote School)", faculty: "DeGroote School of Business", duration_years: 4, coop_optional: true, annual_fee_cad: "32000-38000", min_class12_percent: 80, specializations: ["Finance", "Marketing", "HR", "Operations Management"], entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant"] },
  { level: "UG", name: "Bachelor of Science in Life Sciences", faculty: "Faculty of Science", duration_years: 4, annual_fee_cad: "30000-36000", min_class12_percent: 85, entry_roles: ["Research Scientist", "Laboratory Analyst", "Pharmaceutical Scientist"] },
  { level: "UG", name: "Bachelor of Applied Science (various streams)", faculty: "Faculty of Engineering", duration_years: 4, annual_fee_cad: "35000-42000", min_class12_percent: 80, entry_roles: ["Design Engineer", "Systems Engineer", "Applied Scientist"] },
  { level: "PG", name: "Master of Engineering (MEng)", faculty: "Faculty of Engineering", duration_months: "12-24", annual_fee_cad: "20000-30000", format_options: ["Course-based", "Thesis-based"], entry_roles: ["Project Engineer", "Research Engineer", "Design Engineer"] },
  { level: "PG", name: "Master of Business Administration (MBA) – DeGroote", faculty: "DeGroote School of Business", duration_years: 2, annual_fee_cad: "25000-35000", work_experience_preferred: true, GMAT_recommended: true, entry_roles: ["Management Consultant", "Finance Manager", "Corporate Strategist"] },
  { level: "PG", name: "Master of Science in Computer Science", faculty: "Dept. of Computing and Software", duration_years: 2, annual_fee_cad: "15000-20000", format_options: ["Thesis", "Course-based"], entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist"] },
  { level: "PG", name: "Master of Science in Engineering", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "18000-25000", format: "Thesis-based", specializations: ["Electrical", "Computer", "Mechanical", "Chemical", "Civil"], entry_roles: ["Research Engineer", "Systems Engineer", "Design Engineer"] },
  { level: "PG", name: "Master of Health Management", faculty: "Faculty of Health Sciences / DeGroote", duration_years: 2, annual_fee_cad: "20000-28000", entry_roles: ["Healthcare Administrator", "Health Policy Analyst", "Clinical Manager"] }
]);

// ──────────────────────────────────────────────────────────
// WESTERN UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(western, "Western University", [
  { level: "UG", name: "Ivey HBA (Honours Business Administration)", faculty: "Ivey Business School", duration_years: 4, annual_fee_cad: "40000-55000", min_class12_percent: 90, note: "Enters Year 3 from any undergrad background; case-method teaching", entry_roles: ["Management Consultant", "Investment Banker", "Finance Manager", "Corporate Strategy"] },
  { level: "UG", name: "Bachelor of Engineering Sciences (various specializations)", faculty: "Faculty of Engineering", duration_years: 4, coop_optional: true, annual_fee_cad: "35000-45000", min_class12_percent: 85, specializations: ["Electrical", "Computer", "Mechanical", "Chemical", "Civil", "Green Process", "Integrated Engineering"], entry_roles: ["Electrical Engineer", "Mechanical Engineer", "Software Engineer"] },
  { level: "UG", name: "Bachelor of Science in Computer Science", faculty: "Dept. of Computer Science", duration_years: 4, annual_fee_cad: "30000-38000", min_class12_percent: 85, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer"] },
  { level: "UG", name: "Bachelor of Medical Sciences / Bachelor of Health Sciences", faculty: "Schulich School of Medicine & Dentistry", duration_years: 4, annual_fee_cad: "30000-38000", min_class12_percent: 90, entry_roles: ["Healthcare Researcher", "Medical Science Specialist", "Clinical Research Coordinator"] },
  { level: "UG", name: "Bachelor of Arts in Social Sciences", faculty: "Faculty of Social Science", duration_years: 4, annual_fee_cad: "25000-30000", min_class12_percent: 75, specializations: ["Economics", "Political Science", "Sociology", "Geography", "Psychology"], entry_roles: ["Policy Analyst", "Social Research Analyst", "Government Officer"] },
  { level: "PG", name: "MBA – Ivey Business School", faculty: "Ivey Business School", duration_months: "12-15", annual_fee_cad: "60000-90000", work_experience_min_years: 2, GMAT_required: true, GMAT_avg: "650-700+", entry_roles: ["Management Consultant", "Investment Banker", "Corporate Strategist", "Product Manager"] },
  { level: "PG", name: "Master of Science in Computer Science", faculty: "Dept. of Computer Science", duration_years: 2, annual_fee_cad: "15000-22000", format_options: ["Thesis", "Course-based"], entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist"] },
  { level: "PG", name: "Master of Engineering", faculty: "Faculty of Engineering", duration_years: 2, annual_fee_cad: "20000-28000", format_options: ["Thesis M.E.Sc.", "Course-based MEng"], entry_roles: ["Research Engineer", "Design Engineer", "Project Manager"] },
  { level: "PG", name: "Master of Science (various)", faculty: "Various Faculties", duration_years: 2, annual_fee_cad: "15000-25000", format_options: ["Thesis", "Course-based"], entry_roles: ["Research Scientist", "Data Analyst", "Academic Researcher"] },
  { level: "PG", name: "Master of Public Health", faculty: "Schulich School of Medicine & Dentistry", duration_years: 2, annual_fee_cad: "18000-25000", entry_roles: ["Public Health Officer", "Epidemiologist", "Health Policy Analyst"] }
]);

// ──────────────────────────────────────────────────────────
// YORK UNIVERSITY PROGRAMS
// ──────────────────────────────────────────────────────────
addPrograms(york, "York University", [
  { level: "UG", name: "Bachelor of Commerce (Schulich School)", faculty: "Schulich School of Business", duration_years: 4, coop_optional: true, annual_fee_cad: "30000-38000", min_class12_percent: 80, specializations: ["Finance", "Marketing", "HR", "International Business", "Accounting"], entry_roles: ["Business Analyst", "Financial Analyst", "Management Consultant", "Investment Analyst"] },
  { level: "UG", name: "Bachelor of Engineering (Lassonde School)", faculty: "Lassonde School of Engineering", duration_years: 4, coop_optional: true, annual_fee_cad: "35000-45000", min_class12_percent: 80, specializations: ["Computer", "Electrical", "Mechanical", "Software", "Civil", "Space Engineering"], entry_roles: ["Software Engineer", "Electrical Engineer", "Mechanical Engineer", "Space Systems Engineer"] },
  { level: "UG", name: "Bachelor of Science in Computer Science", faculty: "Lassonde School of Engineering", duration_years: 4, annual_fee_cad: "30000-38000", min_class12_percent: 80, entry_roles: ["Software Engineer", "Data Analyst", "ML Engineer"] },
  { level: "UG", name: "Bachelor of Arts in International Development Studies", faculty: "Faculty of Liberal Arts & Professional Studies", duration_years: 4, annual_fee_cad: "25000-32000", min_class12_percent: 75, entry_roles: ["Development Officer", "Policy Analyst", "NGO Program Manager"] },
  { level: "UG", name: "Bachelor of Science (various specializations)", faculty: "Faculty of Science", duration_years: 4, annual_fee_cad: "28000-35000", min_class12_percent: 75, specializations: ["Physics", "Chemistry", "Biology", "Mathematics", "Environmental Science"], entry_roles: ["Research Scientist", "Laboratory Analyst", "Environmental Consultant"] },
  { level: "PG", name: "Master of Business Administration (Schulich MBA)", faculty: "Schulich School of Business", duration_years: 2, annual_fee_cad: "40000-55000", work_experience_preferred_years: 2, GMAT_required: true, GMAT_avg: "~640", entry_roles: ["Management Consultant", "Investment Banker", "Corporate Strategist", "Entrepreneur"] },
  { level: "PG", name: "Master of Science in Computer Science", faculty: "Lassonde School of Engineering", duration_years: 2, annual_fee_cad: "15000-22000", format_options: ["Thesis", "Course-based"], entry_roles: ["Software Engineer", "Research Scientist", "Data Scientist"] },
  { level: "PG", name: "Master of Engineering (Lassonde)", faculty: "Lassonde School of Engineering", duration_years: 2, annual_fee_cad: "20000-28000", specializations: ["Computer", "Electrical", "Mechanical", "Civil", "Space Engineering"], entry_roles: ["Research Engineer", "Design Engineer", "Systems Engineer"] },
  { level: "PG", name: "Master of Financial Accountability (MFAc)", faculty: "Schulich School of Business", duration_months: 12, annual_fee_cad: "25000-35000", professional_credential: "CPA pathway", entry_roles: ["Financial Accountant", "Auditor", "Financial Risk Manager"] },
  { level: "PG", name: "Master of Public Policy, Administration and Law (MPPAL)", faculty: "Osgoode Hall / School of Public Policy", duration_years: 2, annual_fee_cad: "20000-30000", entry_roles: ["Public Policy Analyst", "Government Officer", "Policy Advisor"] }
]);

// ════════════════════════════════════════════════════════════
// INDEXES for performance
// ════════════════════════════════════════════════════════════
db.institutions.createIndex({ name: 1 }, { unique: true });
db.institutions.createIndex({ type: 1 });
db.institutions.createIndex({ province: 1 });
db.institutions.createIndex({ city: 1 });

db.programs.createIndex({ institution_id: 1 });
db.programs.createIndex({ institution_name: 1 });
db.programs.createIndex({ level: 1 });
db.programs.createIndex({ name: "text", faculty: "text" });
db.programs.createIndex({ level: 1, annual_fee_cad: 1 });
db.programs.createIndex({ min_class12_percent: 1 });

// ════════════════════════════════════════════════════════════
// SUMMARY
// ════════════════════════════════════════════════════════════
print("\n✅ Database seeded successfully!");
print("Database: " + DB_NAME);
print("Institutions: " + db.institutions.countDocuments());
print("Programs:     " + db.programs.countDocuments());
print("\nCollections:");
db.getCollectionNames().forEach(c => print("  - " + c + " (" + db[c].countDocuments() + " docs)"));
print("\nSample queries:");
print('  db.institutions.find({ type: "university" }, { name: 1, city: 1 })');
print('  db.programs.find({ level: "UG", institution_name: "McGill University" })');
print('  db.programs.find({ level: "PG" }).sort({ annual_fee_cad: 1 })');
print('  db.institutions.find({ province: "Ontario" }, { name: 1 })');
print('  db.programs.find({ $text: { $search: "computer science" } })');
