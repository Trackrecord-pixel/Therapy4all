import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema, PersonSchema } from "@/components/StructuredData";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet The Team",
  description: "Meet the Therapy 4 All physiotherapy team — Keith Ho, Daniel Lee, Zarqa Shariff, Ekta Kakadiya and Jason Lau. Expertise across pain, sports, women's health, aged care and complex rehabilitation.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="Meet the physiotherapists behind Therapy 4 All"
        intro="Experienced, caring clinicians with expertise across pain management, sports, women's health, aged care and complex rehabilitation."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Our Team", href: "/team" }]} />
      <section className="section-py bg-white">
        <div className="container-px space-y-16">
          {team.map((m, idx) => (
            <Reveal key={m.slug}>
              <article id={m.slug} className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-4 ${idx % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-sand shadow-card">
                    <div className="relative aspect-[4/5] w-full">
                      <Image src={m.photo} alt={`${m.name} — ${m.role} at Therapy 4 All Physiotherapy`} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-8 ${idx % 2 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl text-ink-900">{m.name}</h2>
                  <p className="mt-1 text-base font-semibold text-brand-600">{m.role}</p>
                  <div className="mt-5 space-y-4 text-ink-700">{m.bio.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}</div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">Areas of interest</p>
                    <ul className="mt-3 flex flex-wrap gap-2">{m.interests.map((t) => <li key={t} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand-700">{t}</li>)}</ul>
                  </div>
                  <PersonSchema name={m.name} role={m.role} slug={m.slug} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection title="Book with our team" />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Our Team", href: "/team" }]} />
    </>
  );
}
