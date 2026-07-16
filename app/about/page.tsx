import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { whyChoose, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Therapy 4 All Physiotherapy provides accessible, personalised, hands-on physiotherapy across the Hunter Region — care designed to improve how you move, function and live.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Therapy 4 All" title="Care that lasts beyond the treatment room"
        intro="We focus on what truly matters — physiotherapy that is accessible, personalised and designed to improve your everyday life."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 prose-ink">
            <SectionHeading eyebrow="Our Story" title="Physiotherapy that goes beyond temporary relief" />
            <div className="mt-6 space-y-4 text-ink-700">
              <p>There are many physiotherapy options available, but at Therapy 4 All we focus on care that is accessible, personalised, and designed to improve your everyday life.</p>
              <p>We work across clinic and community settings, supporting a wide range of patients — from acute injuries to long-term conditions. Our approach goes beyond short-term relief, helping you build confidence, restore movement, and achieve outcomes that last.</p>
              <p>We understand that recovery isn't just about reducing pain — it's about improving how you move, function and live day to day. Whether you're managing an injury, dealing with ongoing pain, or working towards better mobility and independence, our programs are realistic, goal-oriented and sustainable. We don't just treat symptoms — we help you regain control of your movement and return to the activities that matter.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card sticky top-28 bg-sand">
              <h3 className="text-xl text-ink-900">What we stand for</h3>
              <ul className="mt-5 space-y-4">
                {["Accessible, personalised care","Hands-on treatment + practical rehabilitation","Bulk-billed GP Care Plans","A strong focus on long-term outcomes"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"><Icon name="check" className="h-4 w-4" /></span>
                    <span className="text-sm text-ink-700">{t}</span>
                  </li>
                ))}
              </ul>
              <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full">Book Online <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-py bg-sand">
        <div className="container-px">
          <SectionHeading center eyebrow="Why Choose Us" title="The Therapy 4 All difference" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white"><Icon name={v.icon as IconName} className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
    </>
  );
}
