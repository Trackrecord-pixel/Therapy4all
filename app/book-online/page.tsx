import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import ClinicFinder from "@/components/ClinicFinder";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Book physiotherapy at Therapy 4 All. Book Mount Hutton online or walk in; call Warners Bay, Wallsend or Rutherford to book. Or send a booking enquiry.",
  alternates: { canonical: "/book-online" },
};

export default function BookOnlinePage() {
  return (
    <>
      <PageHero eyebrow="Book" title="Book your appointment"
        intro="Book Mount Hutton online, call, or walk in. For Warners Bay, Wallsend and Rutherford, call the clinic to book."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Book Online", href: "/book-online" }]} />
      <section className="section-py bg-white">
        <div className="container-px">
          <ClinicFinder />
          <p className="mt-8 text-center text-sm text-ink-500">GP care plan referral? Bring it to your first visit — eligible patients are bulk billed.</p>
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
