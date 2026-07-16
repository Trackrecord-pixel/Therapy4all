import { site, faqs, locations, type Location, type Faq } from "@/lib/site";

function jsonld(data: object) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  return jsonld({
    "@context": "https://schema.org", "@type": ["Organization", "MedicalBusiness"],
    "@id": `${site.url}/#organization`, name: "Therapy 4 All Physiotherapy", alternateName: "Therapy4allgroup",
    url: site.url, logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` },
    image: `${site.url}/images/og-default.png`, email: site.email, telephone: site.phone,
    medicalSpecialty: "Physiotherapy",
    areaServed: ["Newcastle", "Lake Macquarie", "Maitland", "Hunter Region"].map((n) => ({ "@type": "City", name: n })),
    location: locations.map((l) => ({ "@type": "Place", name: `Therapy 4 All ${l.name}`, address: { "@type": "PostalAddress", streetAddress: l.address, addressRegion: "NSW", addressCountry: "AU" } })),
    sameAs: [site.social.facebook, site.social.instagram],
  });
}
export function WebSiteSchema() {
  return jsonld({ "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.url}/#website`,
    name: "Therapy 4 All Physiotherapy", url: site.url, publisher: { "@id": `${site.url}/#organization` } });
}
export function ClinicSchema({ loc }: { loc: Location }) {
  return jsonld({
    "@context": "https://schema.org", "@type": "Physiotherapy", "@id": `${site.url}/${loc.slug}#clinic`,
    name: `Therapy 4 All Physiotherapy — ${loc.name}`, url: `${site.url}/${loc.slug}`,
    telephone: loc.phone, email: site.email, medicalSpecialty: "Physiotherapy",
    parentOrganization: { "@id": `${site.url}/#organization` },
    address: { "@type": "PostalAddress", streetAddress: loc.address, addressLocality: loc.name, addressRegion: "NSW", postalCode: loc.postcode, addressCountry: "AU" },
    areaServed: { "@type": "City", name: loc.region },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
  });
}
export function PersonSchema({ name, role, slug }: { name: string; role: string; slug: string }) {
  return jsonld({ "@context": "https://schema.org", "@type": "Person", name, jobTitle: role.replace(" · ", ", "),
    worksFor: { "@id": `${site.url}/#organization` }, url: `${site.url}/team#${slug}`, image: `${site.url}/team/${slug}.jpg` });
}
export function FaqSchema({ items = faqs }: { items?: Faq[] }) {
  return jsonld({ "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
}
export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  return jsonld({ "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.href}` })) });
}
