import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { locations } from "@/lib/site";
import { suburbs } from "@/lib/suburbs";

export const metadata: Metadata = {
  title: "Our Clinics | Physiotherapy Locations",
  description: "Therapy 4 All physiotherapy clinics at Mount Hutton (main hub with gym), Warners Bay, Wallsend and Rutherford — inside trusted medical practices across Newcastle, Lake Macquarie and Maitland.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Our Clinics" title="Physiotherapy clinics across the Hunter"
        intro="Four clinics inside trusted medical practices. Mount Hutton is our main hub, with a fully equipped rehabilitation gym."
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }]} />
      <section className="section-py bg-white">
        <div className="container-px grid gap-6 md:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={(i % 2) * 80}>
              <div className="card card-hover h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white"><Icon name="pin" className="h-6 w-6" /></span>
                  {loc.slug === "physiotherapy-mount-hutton" && <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">Main hub · Gym</span>}
                </div>
                <h2 className="mt-5 text-2xl text-ink-900">{loc.name}</h2>
                <p className="mt-1 text-sm text-ink-500">{loc.hostClinic}</p>
                <p className="mt-3 inline-flex items-start gap-2 text-sm text-ink-700"><Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {loc.address}</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-700"><Icon name="phone" className="h-4 w-4 text-brand-600" /> <a href={loc.phoneHref} className="font-semibold hover:text-brand-700">{loc.phone}</a></p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={`/${loc.slug}`} className="btn-primary">View clinic <Icon name="arrow" className="h-4 w-4" /></Link>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Therapy 4 All " + loc.address)}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">Directions</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section-py bg-sand">
        <div className="container-px">
          <h2 className="text-3xl text-ink-900">Areas we serve</h2>
          <p className="mt-3 max-w-2xl text-ink-600">Our four clinics care for patients right across Newcastle, Lake Macquarie and the Maitland region. Find physiotherapy near your suburb:</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {suburbs.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700">
                <Icon name="pin" className="h-4 w-4 text-brand-500" /> Physiotherapy {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }]} />
    </>
  );
}
