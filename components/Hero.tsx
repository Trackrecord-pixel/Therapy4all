import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand via-white to-white">
      <div className="pointer-events-none absolute right-0 top-0 h-[34rem] w-[34rem] translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-100 blur-3xl" aria-hidden="true" />
      <div className="container-px relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow"><Icon name="pulse" className="h-4 w-4" /> Physiotherapy · Hunter Region</span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-ink-900 sm:text-5xl lg:text-6xl">Move Better.<br />Feel Stronger.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            Hands-on, practical physiotherapy that gets you back to what matters. Sports and everyday
            injuries, chronic pain, post-op and aged care rehab — across our clinics in Mount Hutton,
            Warners Bay, Wallsend and Rutherford.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white"><Icon name="doc" className="h-6 w-6" /></span>
            <span>
              <span className="block text-base font-bold text-brand-800">GP Care Plan — Bulk billed, no gap</span>
              <span className="block text-sm text-ink-600">Referred by your GP? Your physiotherapy is fully covered — you pay nothing.</span>
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online <Icon name="arrow" className="h-5 w-5" /></Link>
            <a href={site.phoneHref} className="btn-secondary"><Icon name="phone" className="h-5 w-5" /> {site.phone}</a>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-600">
            <li className="inline-flex items-center gap-2"><Icon name="check" className="h-5 w-5 text-brand-600" /> GP Care Plans bulk billed — no gap</li>
            <li className="inline-flex items-center gap-2"><Icon name="check" className="h-5 w-5 text-brand-600" /> 4 clinics near you</li>
            <li className="inline-flex items-center gap-2"><Icon name="check" className="h-5 w-5 text-brand-600" /> Fully equipped gym at Mount Hutton</li>
          </ul>
        </div>
        <div className="relative animate-fade-in">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-card-hover">
            <div className="relative aspect-[4/5] w-full">
              <Image src="/images/hero.jpg" alt="A physiotherapist helping a patient move better and feel stronger" fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700"><Icon name="doc" className="h-6 w-6" /></span>
              <div>
                <p className="text-sm font-semibold text-ink-900">GP Care Plan</p>
                <p className="text-xs text-ink-500">Bulk billed — no gap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
