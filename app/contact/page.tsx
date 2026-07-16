import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { site, locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Therapy 4 All Physiotherapy. Call 0450 473 974 or send an enquiry. Clinics at Mount Hutton, Warners Bay, Wallsend and Rutherford.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Get in touch with Therapy 4 All"
        intro="Ready to book, or have a question about bulk billing, referrals or what to expect? We'd love to hear from you."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-ink-900">Contact details</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4"><span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="phone" className="h-6 w-6" /></span><div><p className="text-xs font-semibold uppercase tracking-widest text-ink-500">Phone</p><a href={site.phoneHref} className="text-lg font-semibold text-ink-900 hover:underline">{site.phone}</a></div></li>
              <li className="flex items-start gap-4"><span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="mail" className="h-6 w-6" /></span><div><p className="text-xs font-semibold uppercase tracking-widest text-ink-500">Email</p><a href={site.emailHref} className="text-lg font-semibold text-ink-900 hover:underline">{site.email}</a></div></li>
              <li className="flex items-start gap-4"><span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="clock" className="h-6 w-6" /></span><div><p className="text-xs font-semibold uppercase tracking-widest text-ink-500">Hours</p><p className="text-lg font-semibold text-ink-900">{site.hours}</p></div></li>
            </ul>
            <div className="mt-8 rounded-2xl bg-sand p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-ink-500">Our clinics</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {locations.map((l) => <li key={l.slug} className="flex items-start gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> <span><strong>{l.name}</strong> — {l.address} · <a href={l.phoneHref} className="text-brand-700">{l.phone}</a></span></li>)}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7"><h2 className="sr-only">Enquiry form</h2><ContactForm /></div>
        </div>
      </section>
      <section className="bg-sand">
        <div className="container-px pb-16">
          <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-card">
            <iframe title="Therapy 4 All clinics across the Hunter Region" src="https://www.google.com/maps?q=Mount%20Hutton%20NSW%202290&z=10&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[22rem] w-full border-0" />
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
    </>
  );
}
