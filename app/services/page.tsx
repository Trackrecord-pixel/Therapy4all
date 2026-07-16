import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Services",
  description: "Physiotherapy services at Therapy 4 All: bulk-billed GP Care Plans, musculoskeletal and sports injuries, chronic pain, post-operative rehab, women's health, clinical Pilates, workplace and aged care physiotherapy.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Physiotherapy: Move Better. Live Better."
        intro="Hands-on treatment combined with structured, real-world rehabilitation — personalised to your goals and lifestyle."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />

      {/* Fees / bulk billing */}
      <section className="section-py bg-white">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <div className="card border-brand-200 bg-brand-50">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white"><Icon name="doc" className="h-6 w-6" /></span>
            <h2 className="mt-5 text-2xl text-ink-900">GP Care Plan (Bulk Billing)</h2>
            <p className="mt-2 text-ink-600">Referred by your GP under a Chronic Disease Management (CDM/EPC) plan? We bulk bill — no out-of-pocket cost.</p>
            <ul className="mt-5 grid gap-3">
              {["Relevant medical history review","Assessment of your current condition","Functional assessment based on daily activities","Review of imaging and reports","Hands-on treatment (soft tissue, joint mobilisation)","Individualised plan, education & home exercises"].map((p) => (
                <li key={p} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Icon name="check" className="h-4 w-4" /></span><span className="text-sm text-ink-700">{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="joint" className="h-6 w-6" /></span>
            <h2 className="mt-5 text-2xl text-ink-900">Standard Consultation</h2>
            <p className="mt-1 text-lg font-semibold text-brand-700">$90 · 30 minutes</p>
            <ul className="mt-5 grid gap-3">
              {["Brief review of symptoms and progress","Targeted injury assessment","Functional reassessment as needed","Hands-on treatment (dry needling, trigger point release, joint mobilisation)","Ongoing treatment and progression plan","Exercise progression and education"].map((p) => (
                <li key={p} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Icon name="check" className="h-4 w-4" /></span><span className="text-sm text-ink-700">{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="section-py bg-sand">
        <div className="container-px">
          <h2 className="text-center text-3xl text-ink-900 sm:text-4xl">What we treat</h2>
          <div className="mt-12 space-y-4">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <div id={s.slug} className="card scroll-mt-28 grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-1"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name={s.icon as IconName} className="h-6 w-6" /></span></div>
                  <div className="lg:col-span-7"><h3 className="text-2xl text-ink-900">{s.title}</h3><p className="mt-2 text-ink-600">{s.short}</p></div>
                  {s.points && (
                    <div className="lg:col-span-4">
                      <ul className="grid gap-2">{s.points.slice(0, 4).map((p) => <li key={p} className="flex items-start gap-2 text-sm text-ink-700"><Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {p}</li>)}</ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-ink-600">Not sure what you need? Call <a href={site.phoneHref} className="font-semibold text-brand-700 underline">{site.phone}</a> and our team will help.</p>
        </div>
      </section>
      <CTASection />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
    </>
  );
}
