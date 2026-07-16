import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { locations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Book your physiotherapy appointment at Therapy 4 All. Call your nearest clinic — Mount Hutton, Warners Bay, Wallsend or Rutherford — or send a booking enquiry.",
  alternates: { canonical: "/book-online" },
};

export default function BookOnlinePage() {
  return (
    <>
      <PageHero eyebrow="Book Online" title="Book your appointment"
        intro="Call your nearest clinic to book, or send a quick enquiry and our team will get you in as soon as possible."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Book Online", href: "/book-online" }]} />
      <section className="section-py bg-white">
        <div className="container-px">
          <h2 className="text-center text-2xl text-ink-900 sm:text-3xl">Call your nearest clinic</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <a key={loc.slug} href={loc.phoneHref} className="card card-hover text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="phone" className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg text-ink-900">{loc.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-700">{loc.phone}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-500">GP Care Plan referral? Bring it along and your treatment is bulk billed.</p>
        </div>
      </section>
      <section className="section-py bg-sand">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-ink-900">Or send a booking enquiry</h2>
            <p className="mt-4 text-ink-600">Leave your details and preferred clinic, and we'll be in touch to confirm your appointment.</p>
            <a href={site.phoneHref} className="btn-primary mt-6"><Icon name="phone" className="h-5 w-5" /> {site.phone}</a>
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Book Online", href: "/book-online" }]} />
    </>
  );
}
