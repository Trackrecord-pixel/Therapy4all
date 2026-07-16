import Link from "next/link";
import PageHero from "./PageHero";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import ContactForm from "./ContactForm";
import { FaqSchema, BreadcrumbSchema } from "./StructuredData";
import { site, locations, type Faq } from "@/lib/site";

export type LandingSection = { h2: string; body: string[]; list?: string[] };
export type LandingContent = {
  slug: string; eyebrow: string; h1: string; serviceName: string; intro: string;
  lead: string[]; sections: LandingSection[]; faqs: Faq[];
  related: { label: string; href: string }[]; ctaTitle?: string;
};

export default function ServiceLanding({ c }: { c: LandingContent }) {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} intro={c.intro}
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: c.eyebrow, href: `/${c.slug}` }]} />
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="prose-ink space-y-4">{c.lead.map((p, i) => <p key={i}>{p}</p>)}</div>
            {c.sections.map((sec) => (
              <div key={sec.h2} className="mt-10">
                <h2 className="text-2xl text-ink-900 sm:text-3xl">{sec.h2}</h2>
                <div className="prose-ink mt-4 space-y-4">{sec.body.map((p, i) => <p key={i}>{p}</p>)}</div>
                {sec.list && (
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {sec.list.map((item) => (
                      <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Icon name="check" className="h-4 w-4" /></span><span className="text-ink-700">{item}</span></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-12">
              <h2 className="text-2xl text-ink-900 sm:text-3xl">Frequently asked questions</h2>
              <div className="mt-5"><FAQAccordion items={c.faqs} /></div>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="card bg-brand-700 text-white">
                <h2 className="text-xl text-white">Book an appointment</h2>
                <p className="mt-2 text-sm text-brand-50">Across our clinics in Mount Hutton, Warners Bay, Wallsend and Rutherford. GP Care Plans bulk billed.</p>
                <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-brand-700 hover:bg-brand-50 mt-5 w-full">Book Online <Icon name="arrow" className="h-4 w-4" /></Link>
                <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-brand-50 hover:text-white"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
              </div>
              <div className="card">
                <h2 className="text-lg text-ink-900">Our clinics</h2>
                <ul className="mt-4 space-y-2">
                  {locations.map((l) => <li key={l.slug}><Link href={`/${l.slug}`} className="inline-flex items-center gap-1.5 text-ink-700 hover:text-brand-700"><Icon name="pin" className="h-4 w-4 text-brand-400" /> {l.name}</Link></li>)}
                </ul>
              </div>
              <div className="card">
                <h2 className="text-lg text-ink-900">Related services</h2>
                <ul className="mt-4 space-y-2">
                  {c.related.map((r) => <li key={r.href}><Link href={r.href} className="inline-flex items-center gap-1.5 text-ink-700 hover:text-brand-700"><Icon name="arrow" className="h-4 w-4 text-brand-400" /> {r.label}</Link></li>)}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-py bg-sand">
        <div className="container-px grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-ink-900 sm:text-3xl">Enquire about {c.eyebrow}</h2>
            <p className="mt-4 text-ink-600">Send us a message and our team will be in touch. Prefer to talk now? Call us any time.</p>
            <a href={site.phoneHref} className="btn-primary mt-6"><Icon name="phone" className="h-5 w-5" /> {site.phone}</a>
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </section>
      <CTASection title={c.ctaTitle} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalProcedure", name: c.serviceName, description: c.intro, url: `${site.url}/${c.slug}`, provider: { "@id": `${site.url}/#organization` } }) }} />
      <FaqSchema items={c.faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: c.eyebrow, href: `/${c.slug}` }]} />
    </>
  );
}
