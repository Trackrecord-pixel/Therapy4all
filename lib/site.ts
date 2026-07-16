export const site = {
  name: "Therapy 4 All Physiotherapy",
  shortName: "Therapy 4 All",
  legalName: "Therapy4allgroup",
  tagline: "Move Better. Feel Stronger.",
  description:
    "Therapy 4 All Physiotherapy provides hands-on, practical physiotherapy across the Hunter Region. GP Care Plan (bulk billing), sports and musculoskeletal injuries, chronic pain, post-operative and aged care rehabilitation — care that lasts beyond the treatment room.",
  url: "https://www.therapy4allgroup.com",
  phone: "0450 473 974",
  phoneHref: "tel:+61450473974",
  email: "info@therapy4allgroup.com",
  emailHref: "mailto:info@therapy4allgroup.com",
  bookingUrl: "https://therapy4all.au4.cliniko.com/bookings",
  region: "NSW",
  areas: "Newcastle, Lake Macquarie & Maitland",
  hours: "Mon–Fri 8:00am – 6:00pm",
  social: { facebook: "https://www.facebook.com/", instagram: "https://www.instagram.com/" },
} as const;

export type NavLink = { label: string; href: string };
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const servicePagesNav: NavLink[] = [
  { label: "Bulk Billing Physiotherapy", href: "/bulk-billing-physiotherapy-newcastle" },
  { label: "Sports Physiotherapy", href: "/sports-physiotherapy-newcastle" },
  { label: "Women's Health Physiotherapy", href: "/womens-health-physiotherapy-newcastle" },
  { label: "Chronic Pain Physiotherapy", href: "/chronic-pain-physiotherapy-newcastle" },
  { label: "Post-Operative Rehabilitation", href: "/post-operative-rehabilitation-newcastle" },
  { label: "Musculoskeletal Physiotherapy", href: "/musculoskeletal-physiotherapy-newcastle" },
  { label: "Workplace Physiotherapy", href: "/workplace-physiotherapy-newcastle" },
  { label: "Aged Care Physiotherapy", href: "/aged-care-physiotherapy-newcastle" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  points?: string[];
};
export const services: Service[] = [
  {
    slug: "gp-care-plan",
    title: "GP Care Plan (Bulk Billing)",
    short: "Chronic Disease Management (CDM/EPC) physiotherapy referred by your GP — bulk billed, with no out-of-pocket cost.",
    icon: "doc",
    points: [
      "Relevant medical history review",
      "Assessment of your current condition",
      "Functional assessment based on daily activities",
      "Review of imaging and reports",
      "Hands-on treatment (soft tissue, joint mobilisation)",
      "Individualised plan, education & home exercises",
    ],
  },
  {
    slug: "musculoskeletal-physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    short: "Assessment and hands-on treatment for back, neck, joint and muscle pain, combined with targeted exercise.",
    icon: "joint",
  },
  {
    slug: "sports-injury",
    title: "Sports Injury Physiotherapy",
    short: "Expert care for sports and overuse injuries — manual therapy and rehabilitation to restore movement and prevent recurrence.",
    icon: "activity",
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain Management",
    short: "Evidence-based care led by a Master's-qualified pain physiotherapist to reduce fear of movement and restore function.",
    icon: "pulse",
  },
  {
    slug: "post-operative-rehab",
    title: "Post-Operative Rehabilitation",
    short: "Structured recovery after surgery — rebuilding strength, movement and confidence to return to daily life.",
    icon: "recovery",
  },
  {
    slug: "womens-health",
    title: "Women's Health Physiotherapy",
    short: "Personalised women's health physiotherapy with a female physiotherapist, to build strength, confidence and quality of life.",
    icon: "strength",
  },
  {
    slug: "workplace-rehabilitation",
    title: "Workplace Rehabilitation",
    short: "Return-to-work and injury management for workers and employers, with clear assessment and reporting.",
    icon: "shield",
  },
  {
    slug: "aged-care-community",
    title: "Aged Care & Community Physiotherapy",
    short: "Mobility, strength and falls-prevention physiotherapy for older adults across community and residential settings.",
    icon: "heart",
  },
];

export const whyChoose = [
  { icon: "check", title: "Accessible & personalised", text: "Care designed around your goals, lifestyle and daily life — not a one-size-fits-all program." },
  { icon: "joint", title: "Hands-on + real-world rehab", text: "We combine manual therapy with structured, practical rehabilitation that lasts beyond the treatment room." },
  { icon: "doc", title: "GP Care Plans bulk billed", text: "Referred by your GP under a CDM plan? We bulk bill, so there's no out-of-pocket cost." },
  { icon: "pin", title: "4 clinics near you", text: "Conveniently located inside trusted medical practices across Newcastle, Lake Macquarie and Maitland." },
  { icon: "users", title: "Experienced team", text: "Physiotherapists with expertise across pain, sports, women's health, aged care and complex rehab." },
  { icon: "pulse", title: "Long-term outcomes", text: "We focus on how you move, function and live — helping you build strength and confidence over time." },
];

export type TeamMember = {
  slug: string; name: string; role: string; photo: string; bio: string[]; interests: string[];
};
export const team: TeamMember[] = [
  {
    slug: "keith-ho", name: "Keith Ho", role: "Physiotherapist · Director", photo: "/team/keith-ho.jpg",
    bio: [
      "Keith is a highly experienced physiotherapist with a strong background in aged care, complex rehabilitation and multidisciplinary team leadership. He has extensive experience managing chronic conditions, supporting functional independence, and delivering care across community and residential settings.",
      "His approach combines hands-on treatment with structured rehabilitation programs tailored to each individual's needs. With a strong focus on quality care and practical outcomes, Keith works closely with patients, families and care teams to improve mobility, reduce pain and support long-term function.",
      "Alongside his clinical work, Keith has held senior leadership roles — overseeing large allied health teams, mentoring clinicians and implementing systems to ensure consistent, high-quality care.",
    ],
    interests: ["Aged Care", "Complex Rehabilitation", "Chronic Conditions", "Team Leadership"],
  },
  {
    slug: "daniel-lee", name: "Daniel Lee", role: "Physiotherapist · Director", photo: "/team/daniel-lee.jpg",
    bio: [
      "Daniel has a Master's degree in Pain Management from the University of Sydney and a strong focus on pain management and functional rehabilitation.",
      "His approach centres on understanding each patient's experience and goals, combining hands-on treatment with simple, practical strategies to help patients move with confidence and return to meaningful daily activities.",
      "He focuses on long-term outcomes, reducing fear around movement, and building independence through tailored rehabilitation.",
    ],
    interests: ["Chronic Pain", "Functional Rehabilitation", "Pain Management"],
  },
  {
    slug: "ekta-kakadiya", name: "Ekta Kakadiya", role: "Senior Physiotherapist", photo: "/team/ekta-kakadiya.jpg",
    bio: [
      "Ekta specialises in sports and musculoskeletal physiotherapy, with a particular focus on shoulder and neck conditions.",
      "She takes a hands-on, results-driven approach, combining manual therapy with targeted exercise programs to manage pain, restore movement and prevent recurrence. Ekta is known for her precise clinical reasoning and ability to tailor treatment to each patient's needs and lifestyle.",
    ],
    interests: ["Sports & MSK", "Shoulder & Neck", "Manual Therapy"],
  },
  {
    slug: "kriti", name: "Prakriti", role: "Physiotherapist \u00b7 Women's Health", photo: "/team/kriti.jpg",
    bio: [
      "Prakriti is a compassionate physiotherapist passionate about helping women improve their health, confidence and quality of life. She provides evidence-based, individualised care, and patients appreciate having a female physiotherapist for sensitive women's health concerns.",
      "She works closely with each patient to build personalised, goal-focused programs that manage pain, restore movement and support a confident return to everyday activities.",
    ],
    interests: ["Women's Health", "Individualised Care", "Exercise Therapy"],
  },
];

export type Location = {
  slug: string; name: string; phone: string; phoneHref: string;
  address: string; hostClinic: string; region: string; postcode: string; blurb: string;
};
export const locations: Location[] = [
  {
    slug: "physiotherapy-mount-hutton", name: "Mount Hutton", phone: "0450 473 974", phoneHref: "tel:+61450473974",
    address: "16 Wilsons Rd, Mount Hutton NSW 2290", hostClinic: "Inside Mount Hutton Medical Practice",
    region: "Lake Macquarie", postcode: "2290",
    blurb: "Mount Hutton is our main hub, with a fully equipped rehabilitation gym for strength work and structured, hands-on physiotherapy for the Lake Macquarie community.",
  },
  {
    slug: "physiotherapy-warners-bay", name: "Warners Bay", phone: "(02) 4089 4633", phoneHref: "tel:+61240894633",
    address: "Unit 9, 240–260 Hillsborough Rd, Warners Bay NSW 2282", hostClinic: "Inside Elm Rd Family Clinic",
    region: "Lake Macquarie", postcode: "2282",
    blurb: "Our Warners Bay clinic provides practical, goal-focused physiotherapy for the Lake Macquarie lakeside community.",
  },
  {
    slug: "physiotherapy-wallsend", name: "Wallsend", phone: "(02) 4951 2100", phoneHref: "tel:+61249512100",
    address: "25/27 Kokera St, Wallsend NSW 2287", hostClinic: "Inside Wallsend Medical Practice",
    region: "Newcastle", postcode: "2287",
    blurb: "Physiotherapy in Wallsend for the western Newcastle community — musculoskeletal injuries, rehabilitation and bulk-billed GP Care Plan care.",
  },
  {
    slug: "physiotherapy-rutherford", name: "Rutherford", phone: "(02) 4061 7981", phoneHref: "tel:+61240617981",
    address: "E5–7/1 Hillview St, Rutherford NSW 2320", hostClinic: "Inside Rutherford Doctors",
    region: "Maitland", postcode: "2320",
    blurb: "Physiotherapy in Rutherford for the Maitland region — hands-on treatment and rehabilitation for injuries, pain and post-operative recovery.",
  },
];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  { q: "Do you bulk bill?", a: "Yes. If your GP refers you under a Chronic Disease Management (CDM/EPC) plan, we bulk bill your physiotherapy so there is no out-of-pocket cost. Ask your GP whether a Care Plan is right for you." },
  { q: "Do I need a referral to see a physiotherapist?", a: "No — you can book directly for a standard consultation without a referral. A GP referral is only needed if you want to be treated under a bulk-billed GP Care Plan (CDM)." },
  { q: "How much does a standard consultation cost?", a: "A standard 30-minute consultation is $90. This includes assessment, hands-on treatment, and an individualised exercise and progression plan." },
  { q: "What should I bring to my first appointment?", a: "Please bring any relevant scans, imaging or reports, a list of medications, and your GP referral or Care Plan if you have one. Wear comfortable clothing you can move in." },
  { q: "Where are your clinics?", a: "We have four clinics inside trusted medical practices — Mount Hutton (our main hub, with a fully equipped rehabilitation gym), Warners Bay, Wallsend and Rutherford — across Newcastle, Lake Macquarie and Maitland." },
  { q: "Do you treat sports injuries?", a: "Yes. Our team includes physiotherapists who specialise in sports and musculoskeletal injuries, combining manual therapy with targeted rehabilitation to restore movement and prevent recurrence." },
  { q: "Do you offer workplace and return-to-work rehabilitation?", a: "Yes. We support injured workers and employers with assessment, treatment, return-to-work planning and clear reporting." },
  { q: "Do you offer women's health physiotherapy?", a: "Yes. We offer women's health physiotherapy with a female physiotherapist, providing evidence-based, individualised care in a supportive and respectful setting." },
];
