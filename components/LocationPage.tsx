import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import type { IconName } from "./Icon";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import { ClinicSchema, BreadcrumbSchema, FaqSchema } from "./StructuredData";
import { site, services, locations, type Location } from "@/lib/site";

export default function LocationPage({ loc }: { loc: Location }) {
  const others = locations.filter((l) => l.slug !== loc.slug);
  const isHub = loc.slug === "physiotherapy-mount-hutton";
  const faqs = [
    { q: `Where is your ${loc.name} physiotherapy clinic?`, a: `Our ${loc.name} clinic is ${loc.hostClinic.toLowerCase()}, at ${loc.address}. Call ${loc.phone} to book.` },
    { q: `Do you bulk bill at ${loc.name}?`, a: `Yes. If your GP refers you under a Chronic Disease Management (CDM/EPC) plan, we bulk bill your physiotherapy at ${loc.name} — no out-of-pocket cost.` },
    { q: `Do I need a referral for physiotherapy in ${loc.name}?`, a: `No — you can book a standard consultation directly. A GP referral is only needed for bulk-billed Care Plan treatment.` },
  ];
  return (
    <>
      <PageHero eyebrow={`Physiotherapy ${loc.name}`} title={`Physiotherapy ${loc.name} NSW`} intro={loc.blurb}
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: loc.name, href: `/${loc.slug}` }]} />
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 prose-ink">
            {isHub && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Icon name="strength" className="h-4 w-4" /> Our main hub · fully equipped rehabilitation gym
              </div>
            )}
            <div className="space-y-4 text-ink-700">
              <p>Therapy 4 All Physiotherapy in {loc.name} offers hands-on, practical physiotherapy {loc.hostClinic.toLowerCase()}. We help you move better and feel stronger — with care that lasts beyond the treatment room.</p>
              <p>Whether you're recovering from a sports or work injury, managing ongoing pain, or rehabilitating after surgery, our {loc.name} team combines manual therapy with structured, real-world rehabilitation tailored to your goals. GP Care Plan referrals are bulk billed.</p>
              {isHub && <p>As our main hub, the Mount Hutton clinic features a fully equipped rehabilitation gym — ideal for strength and conditioning, clinical Pilates, and structured exercise programs supervised by our physiotherapists.</p>}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl text-ink-900">Services at our {loc.name} clinic</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.slice(0, 6).map((s) => (
                  <Link key={s.slug} href={`/services#${s.slug}`} className="flex items-center gap-3 rounded-xl border border-ink-100 p-3 hover:border-brand-200 hover:bg-brand-50">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700"><Icon name={s.icon as IconName} className="h-5 w-5" /></span>
                    <span className="text-sm font-semibold text-ink-900">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl text-ink-900">Common questions</h2>
              <div className="mt-5"><FAQAccordion items={faqs} /></div>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="card">
                <h2 className="text-xl text-ink-900">{loc.name} clinic</h2>
                <p className="mt-1 text-sm text-ink-500">{loc.hostClinic}</p>
                <p className="mt-4 inline-flex items-start gap-2 text-sm text-ink-700"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {loc.address}</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700"><Icon name="phone" className="h-4 w-4 text-brand-600" /> <a href={loc.phoneHref} className="font-semibold hover:text-brand-700">{loc.phone}</a></p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700"><Icon name="clock" className="h-4 w-4 text-brand-600" /> {site.hours}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link href="/book-online" className="btn-primary w-full">Book Online <Icon name="arrow" className="h-4 w-4" /></Link>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Therapy 4 All " + loc.address)}`} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">Get directions</a>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-card">
                <iframe title={`Map of Therapy 4 All ${loc.name}`} src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full border-0" />
              </div>
              <div className="card">
                <h2 className="text-lg text-ink-900">Our other clinics</h2>
                <ul className="mt-4 space-y-2">
                  {others.map((o) => <li key={o.slug}><Link href={`/${o.slug}`} className="inline-flex items-center gap-1.5 text-ink-700 hover:text-brand-700"><Icon name="pin" className="h-4 w-4 text-brand-400" /> {o.name}</Link></li>)}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CTASection title={`Book physiotherapy at our ${loc.name} clinic`} />
      <ClinicSchema loc={loc} />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: loc.name, href: `/${loc.slug}` }]} />
    </>
  );
}
