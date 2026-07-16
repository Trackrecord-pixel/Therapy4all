// Suburb SEO landing pages — "physiotherapy [suburb]" targeting areas around the 4 clinics.
export type Suburb = {
  slug: string;        // e.g. physiotherapy-charlestown
  name: string;        // Charlestown
  postcode: string;
  region: string;      // Lake Macquarie / Newcastle / Maitland
  clinic: string;      // nearest clinic slug (matches locations[].slug)
  drive: string;       // approx drive time from nearest clinic
  nearby: string[];    // neighbouring suburbs for local context
  intro: string;       // hero intro
  note: string;        // one extra locale-specific sentence
};

export const suburbs: Suburb[] = [
  { slug: "physiotherapy-charlestown", name: "Charlestown", postcode: "2290", region: "Lake Macquarie", clinic: "physiotherapy-mount-hutton", drive: "about 5 minutes",
    nearby: ["Kotara", "Gateshead", "Dudley"],
    intro: "Hands-on physiotherapy for Charlestown residents — sports and everyday injuries, chronic pain and post-operative rehab, with GP Care Plans bulk billed at our nearby Mount Hutton hub.",
    note: "Charlestown sits right beside our Mount Hutton main hub, so you also have full access to our equipped rehabilitation gym." },
  { slug: "physiotherapy-cardiff", name: "Cardiff", postcode: "2285", region: "Lake Macquarie", clinic: "physiotherapy-warners-bay", drive: "about 8 minutes",
    nearby: ["Cardiff Heights", "Glendale", "Boolaroo"],
    intro: "Practical, goal-focused physiotherapy for Cardiff — injury recovery, ongoing pain and rehabilitation, with bulk-billed GP Care Plan care at our nearby clinics.",
    note: "Cardiff patients are close to both our Warners Bay clinic and our Mount Hutton hub for gym-based rehab." },
  { slug: "physiotherapy-belmont", name: "Belmont", postcode: "2280", region: "Lake Macquarie", clinic: "physiotherapy-mount-hutton", drive: "about 10 minutes",
    nearby: ["Belmont North", "Marks Point", "Valentine"],
    intro: "Physiotherapy for the Belmont community — hands-on treatment for sports injuries, chronic pain and post-surgical recovery, with GP Care Plans bulk billed.",
    note: "Belmont residents reach our Mount Hutton hub and its rehabilitation gym in around ten minutes along the lake." },
  { slug: "physiotherapy-gateshead", name: "Gateshead", postcode: "2290", region: "Lake Macquarie", clinic: "physiotherapy-mount-hutton", drive: "about 4 minutes",
    nearby: ["Charlestown", "Bennetts Green", "Hillsborough"],
    intro: "Local physiotherapy for Gateshead — practical rehab for injuries, pain and post-operative recovery, minutes from our Mount Hutton main hub with bulk-billed Care Plans.",
    note: "Gateshead is one of our closest suburbs, right next to the Mount Hutton hub and its equipped gym." },
  { slug: "physiotherapy-kotara", name: "Kotara", postcode: "2289", region: "Newcastle", clinic: "physiotherapy-mount-hutton", drive: "about 8 minutes",
    nearby: ["Adamstown", "New Lambton", "Charlestown"],
    intro: "Physiotherapy for Kotara — hands-on care for sports and work injuries, chronic pain and rehabilitation, with GP Care Plans bulk billed at our nearby clinics.",
    note: "Kotara sits between our Mount Hutton hub and Wallsend clinic, so you can choose whichever is easier to reach." },
  { slug: "physiotherapy-speers-point", name: "Speers Point", postcode: "2284", region: "Lake Macquarie", clinic: "physiotherapy-warners-bay", drive: "about 4 minutes",
    nearby: ["Warners Bay", "Boolaroo", "Macquarie Hills"],
    intro: "Physiotherapy for Speers Point — practical, lasting rehab for injuries, pain and post-op recovery, minutes from our Warners Bay clinic with bulk-billed Care Plans.",
    note: "Speers Point is right beside our Warners Bay clinic on the western shore of the lake." },
  { slug: "physiotherapy-boolaroo", name: "Boolaroo", postcode: "2284", region: "Lake Macquarie", clinic: "physiotherapy-warners-bay", drive: "about 5 minutes",
    nearby: ["Speers Point", "Cardiff", "Argenton"],
    intro: "Hands-on physiotherapy for Boolaroo — sports and everyday injuries, chronic pain and rehabilitation, with GP Care Plans bulk billed at our nearby Warners Bay clinic.",
    note: "Boolaroo patients are a short drive from both our Warners Bay clinic and Mount Hutton hub." },
  { slug: "physiotherapy-valentine", name: "Valentine", postcode: "2280", region: "Lake Macquarie", clinic: "physiotherapy-warners-bay", drive: "about 9 minutes",
    nearby: ["Eleebana", "Belmont", "Croudace Bay"],
    intro: "Physiotherapy for Valentine — goal-focused treatment for injury recovery, ongoing pain and post-surgical rehab, with bulk-billed GP Care Plan care.",
    note: "Valentine residents reach our Warners Bay clinic in under ten minutes around the lake." },
  { slug: "physiotherapy-eleebana", name: "Eleebana", postcode: "2282", region: "Lake Macquarie", clinic: "physiotherapy-warners-bay", drive: "about 6 minutes",
    nearby: ["Warners Bay", "Valentine", "Croudace Bay"],
    intro: "Local physiotherapy for Eleebana — hands-on care for sports injuries, chronic pain and rehabilitation, minutes from our Warners Bay clinic with bulk-billed Care Plans.",
    note: "Eleebana adjoins Warners Bay, making our lakeside clinic one of the closest to you." },
  { slug: "physiotherapy-jesmond", name: "Jesmond", postcode: "2299", region: "Newcastle", clinic: "physiotherapy-wallsend", drive: "about 4 minutes",
    nearby: ["Wallsend", "Birmingham Gardens", "Lambton"],
    intro: "Physiotherapy for Jesmond — practical rehab for injuries, pain and post-operative recovery, minutes from our Wallsend clinic with GP Care Plans bulk billed.",
    note: "Jesmond sits right beside our Wallsend clinic in western Newcastle." },
  { slug: "physiotherapy-lambton", name: "Lambton", postcode: "2299", region: "Newcastle", clinic: "physiotherapy-wallsend", drive: "about 7 minutes",
    nearby: ["New Lambton", "Jesmond", "North Lambton"],
    intro: "Hands-on physiotherapy for Lambton — sports and everyday injuries, chronic pain and rehabilitation, with bulk-billed GP Care Plan care at our nearby Wallsend clinic.",
    note: "Lambton patients reach our Wallsend clinic in well under ten minutes." },
  { slug: "physiotherapy-new-lambton", name: "New Lambton", postcode: "2305", region: "Newcastle", clinic: "physiotherapy-wallsend", drive: "about 9 minutes",
    nearby: ["Lambton", "Kotara", "Adamstown"],
    intro: "Physiotherapy for New Lambton — goal-focused treatment for injury recovery, ongoing pain and post-surgical rehab, with GP Care Plans bulk billed.",
    note: "New Lambton is served by both our Wallsend clinic and our Mount Hutton hub." },
  { slug: "physiotherapy-shortland", name: "Shortland", postcode: "2307", region: "Newcastle", clinic: "physiotherapy-wallsend", drive: "about 5 minutes",
    nearby: ["Jesmond", "Wallsend", "Sandgate"],
    intro: "Local physiotherapy for Shortland — hands-on care for injuries, pain and rehabilitation, minutes from our Wallsend clinic with bulk-billed Care Plans.",
    note: "Shortland is a short drive from our Wallsend clinic in western Newcastle." },
  { slug: "physiotherapy-maitland", name: "Maitland", postcode: "2320", region: "Maitland", clinic: "physiotherapy-rutherford", drive: "about 6 minutes",
    nearby: ["Rutherford", "Lorn", "Telarah"],
    intro: "Physiotherapy for Maitland — practical, lasting rehab for sports and work injuries, chronic pain and post-op recovery, with GP Care Plans bulk billed at our nearby Rutherford clinic.",
    note: "Central Maitland is a short drive from our Rutherford clinic." },
  { slug: "physiotherapy-east-maitland", name: "East Maitland", postcode: "2323", region: "Maitland", clinic: "physiotherapy-rutherford", drive: "about 10 minutes",
    nearby: ["Maitland", "Thornton", "Ashtonfield"],
    intro: "Physiotherapy for East Maitland — hands-on treatment for injuries, ongoing pain and rehabilitation, with bulk-billed GP Care Plan care at our nearby Rutherford clinic.",
    note: "East Maitland residents reach our Rutherford clinic in around ten minutes." },
  { slug: "physiotherapy-thornton", name: "Thornton", postcode: "2322", region: "Maitland", clinic: "physiotherapy-rutherford", drive: "about 12 minutes",
    nearby: ["East Maitland", "Beresfield", "Ashtonfield"],
    intro: "Physiotherapy for Thornton — goal-focused rehab for injury recovery, chronic pain and post-surgical care, with GP Care Plans bulk billed at our Rutherford clinic.",
    note: "Thornton patients are served by our Rutherford clinic in the Maitland region." },
];
