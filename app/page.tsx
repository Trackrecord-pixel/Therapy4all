import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import { FaqSchema } from "@/components/StructuredData";
import { services, whyChoose, faqs, team, locations, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Bulk billing band */}
      <section className="bg-brand-700">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-lg font-semibold text-white">GP Care Plan referral? Your physiotherapy is <span className="underline decoration-brand-300">bulk billed</span> — no out-of-pocket cost.</p>
          <Link href="/services#gp-care-plan" className="btn bg-white text-brand-700 hover:bg-brand-50 flex-shrink-0">Learn about GP Care Plans</Link>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-py bg-white">
        <div className="container-px">
          <SectionHeading center eyebrow="Why Therapy 4 All" title="Physiotherapy that helps you move better and feel stronger" intro="Care that is accessible, personalised and designed to improve how you move, function and live — every day." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white"><Icon name={item.icon as IconName} className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-lg text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-sand">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Our Services" title="Expert care for every stage of recovery" intro="From bulk-billed GP Care Plans to sports injuries, chronic pain and post-operative rehab." />
            <Link href="/services" className="btn-secondary flex-shrink-0">View all services <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}><ServiceCard {...s} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-py bg-white">
        <div className="container-px">
          <SectionHeading center eyebrow="Our Clinics" title="Four clinics across the Hunter" intro="Conveniently located inside trusted medical practices. Mount Hutton is our main hub, with a fully equipped rehabilitation gym." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={(i % 4) * 80}>
                <Link href={`/${loc.slug}`} className="card card-hover flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="pin" className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-xl text-ink-900">{loc.name}{loc.slug === "physiotherapy-mount-hutton" && <span className="ml-2 rounded-full bg-brand-600 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-white align-middle">Main hub</span>}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{loc.hostClinic}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">View clinic <Icon name="arrow" className="h-4 w-4" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-py bg-sand">
        <div className="container-px">
          <SectionHeading center eyebrow="Our Team" title="Experienced physiotherapists who care about your outcomes" intro="Expertise across pain management, sports, women's health, aged care and complex rehabilitation." />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((m, i) => (
              <Reveal key={m.slug} delay={i * 90}>
                <div className="card card-hover h-full text-center">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 font-display text-2xl font-bold text-white">{m.name.split(" ").map((n) => n[0]).join("")}</span>
                  <h3 className="mt-4 text-xl text-ink-900">{m.name}</h3>
                  <p className="text-sm font-medium text-ink-500">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/team" className="btn-secondary">Meet the full team <Icon name="arrow" className="h-4 w-4" /></Link></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="FAQs" title="Your questions, answered" intro="Bulk billing, referrals, costs and what to expect at your first visit." />
            <Link href="/faqs" className="btn-secondary mt-6">View all FAQs <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="lg:col-span-7"><FAQAccordion items={faqs.slice(0, 6)} /></div>
        </div>
      </section>

      <CTASection />
      <FaqSchema items={faqs.slice(0, 6)} />
    </>
  );
}
