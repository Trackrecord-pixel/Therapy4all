import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import type { IconName } from "./Icon";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import { BreadcrumbSchema, FaqSchema } from "./StructuredData";
import { site, services, locations } from "@/lib/site";
import type { Suburb } from "@/lib/suburbs";

export default function SuburbPage({ sub }: { sub: Suburb }) {
  const clinic = locations.find((l) => l.slug === sub.clinic)!;
  const others = locations.filter((l) => l.slug !== clinic.slug);
  const faqs = [
    { q: `Where is my nearest physiotherapy clinic to ${sub.name}?`, a: `Our closest clinic to ${sub.name} is Therapy 4 All ${clinic.name} — ${clinic.hostClinic.toLowerCase()}, at ${clinic.address}, ${sub.drive} away. Call ${clinic.phone} to book.` },
    { q: `Do you bulk bill physiotherapy for ${sub.name} patients?`, a: `Yes. If your GP refers you under a Chronic Disease Management (CDM/EPC) plan, your physiotherapy is bulk billed with no out-of-pocket cost.` },
    { q: `Do I need a referral to see a physio near ${sub.name}?`, a: `No — you can book a standard consultation directly. A GP referral is only needed for bulk-billed Care Plan treatment.` },
  ];
  const crumbs = [{ name: "Home", href: "/" }, { name: "Areas we serve", href: "/locations" }, { name: sub.name, href: `/${sub.slug}` }];
  return (
    <>
      <PageHero eyebrow={`Physiotherapy ${sub.name}`} title={`Physiotherapy ${sub.name} NSW`} intro={sub.intro} breadcrumb={crumbs} />
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 prose-ink">
            <div className="space-y-4 text-ink-700">
              <p>Looking for a physiotherapist in {sub.name}? Therapy 4 All provides hands-on, practical physiotherapy for the {sub.name} community from our {clinic.name} clinic, {sub.drive} away. We help you move better and feel stronger — with care that lasts beyond the treatment room.</p>
              <p>Whether you're recovering from a sports or work injury, managing ongoing pain, or rehabilitating after surgery, our team combines manual therapy with structured, real-world rehabilitation tailored to your goals. GP Care Plan referrals are bulk billed, so eligible {sub.name} patients pay nothing out of pocket.</p>
              <p>{sub.note} We also welcome patients from nearby {sub.nearby.join(", ")}.</p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl text-ink-900">How we help {sub.name} patients</h2>
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
                <p className="text-sm font-semibold text-brand-700">Nearest clinic to {sub.name}</p>
                <h2 className="mt-1 text-xl text-ink-900">Therapy 4 All {clinic.name}</h2>
                <p className="mt-1 text-sm text-ink-500">{clinic.hostClinic} · {sub.drive}</p>
                <p className="mt-4 inline-flex items-start gap-2 text-sm text-ink-700"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {clinic.address}</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700"><Icon name="phone" className="h-4 w-4 text-brand-600" /> <a href={clinic.phoneHref} className="font-semibold hover:text-brand-700">{clinic.phone}</a></p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700"><Icon name="clock" className="h-4 w-4 text-brand-600" /> {site.hours}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Book Online <Icon name="arrow" className="h-4 w-4" /></Link>
                  <Link href={`/${clinic.slug}`} className="btn-secondary w-full">View {clinic.name} clinic</Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-card">
                <iframe title={`Map of Therapy 4 All ${clinic.name}`} src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full border-0" />
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
      <CTASection title={`Book physiotherapy near ${sub.name}`} />
      <FaqSchema items={faqs} />
      <BreadcrumbSchema items={crumbs} />
    </>
  );
}
