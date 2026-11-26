import Link from "next/link";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import CTASection from "@/components/CTASection";
import ClinicFinder from "@/components/ClinicFinder";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import { FaqSchema } from "@/components/StructuredData";
import { faqs, team } from "@/lib/site";

// Homepage — "Therapy for all": one team, four clinics, a rehab gym, every kind of patient.
// Ahpra: no testimonials, outcome claims, "specialist"/"expert" wording or unsourced stats.

const trust: { icon: IconName; title: string; text: string }[] = [
  { icon: "doc", title: "Bulk billed on GP care plans", text: "At all four clinics, for eligible patients — referrals from any GP" },
  { icon: "shield", title: "Workers compensation", text: "WorkCover claims, plus NDIS, DVA, HICAPS and private" },
  { icon: "strength", title: "Rehab gym", text: "A fully equipped gym at our Mount Hutton clinic" },
  { icon: "pin", title: "4 clinics", text: "Mount Hutton, Warners Bay, Wallsend and Rutherford" },
];

const forEveryone: { icon: IconName; title: string; text: string; href: string }[] = [
  { icon: "activity", title: "Sport & active life", text: "Sprains, strains and overuse injuries, with a plan to get you back to training and game day.", href: "/sports-physiotherapy-newcastle" },
  { icon: "shield", title: "Work injuries", text: "WorkCover claims and return-to-work rehab, with clear reports for your employer and insurer.", href: "/workplace-physiotherapy-newcastle" },
  { icon: "heart", title: "Older adults", text: "Strength, balance and mobility — in clinic, in our gym or at home — often bulk billed for eligible patients.", href: "/aged-care-physiotherapy-newcastle" },
  { icon: "pulse", title: "Persistent pain", text: "Back, neck and long-standing pain, led by a physiotherapist with a Master of Science in Medicine (Pain Management).", href: "/chronic-pain-physiotherapy-newcastle" },
  { icon: "recovery", title: "Before & after surgery", text: "Knee, hip and shoulder rehab, from your first steps to getting back into the gym.", href: "/post-operative-rehabilitation-newcastle" },
  { icon: "user", title: "Women's health", text: "Supportive, individual care with a female physiotherapist.", href: "/womens-health-physiotherapy-newcastle" },
];

const gymKit = [
  "Air rowers, ski ergs and air bikes",
  "Power rack and free weights",
  "Cable and leg strength machines",
  "Turf track for agility and running drills",
  "Treatment rooms right next to the gym floor",
];

const steps = [
  { title: "See your GP", text: "Ask whether a GP Chronic Condition Management Plan (GPCCMP) is right for you." },
  { title: "Get a referral", text: "Your GP refers you to physiotherapy under the plan — up to 5 Medicare-funded allied health visits a calendar year." },
  { title: "Book with us", text: "Eligible patients are bulk billed at all four clinics. Bring your referral to your first visit." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Find a clinic — where to go and who to call (Mount Hutton featured) */}
      <section className="section-py bg-white scroll-mt-24" id="clinics">
        <div className="container-px">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our clinics</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Find your clinic</h2>
              <p className="mt-4 max-w-2xl text-lg text-ink-600">
                Four clinics across the Hunter. Mount Hutton is our main clinic, with online
                booking and walk-ins. For our other clinics, call the clinic to book.
              </p>
            </div>
            <Link href="/locations" className="btn-secondary flex-shrink-0">All locations <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12"><ClinicFinder /></div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-px grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700"><Icon name={t.icon} className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold text-ink-900">{t.title}</p>
                <p className="mt-0.5 text-sm text-ink-500">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Therapy for all */}
      <section className="section-py bg-white">
        <div className="container-px">
          <p className="eyebrow">Therapy for all</p>
          <h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl">Whoever you are, there&rsquo;s a plan for you</h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-600">
            Footballers, tradies, grandparents and desk workers all train on the same gym floor. We start with a
            thorough assessment, then build a plan around your goals.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {forEveryone.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <Link href={f.href} className="card card-hover group flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"><Icon name={f.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-xl">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{f.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we treat — mirrors our Google Business Profile services */}
      <section className="bg-white pb-16">
        <div className="container-px">
          <p className="text-sm font-semibold text-ink-700">Common reasons people see us</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {[
              { label: "Lower back & neck pain", href: "/back-neck-pain-physiotherapy-newcastle" },
              { label: "Shoulder & rotator cuff", href: "/shoulder-pain-physiotherapy-newcastle" },
              { label: "Knee, hip & arthritis", href: "/knee-hip-pain-physiotherapy-newcastle" },
              { label: "Knee & hip replacement rehab", href: "/joint-replacement-rehabilitation-newcastle" },
              { label: "Falls prevention & balance", href: "/falls-prevention-balance-newcastle" },
              { label: "Exercise rehab & strength", href: "/rehab-gym-exercise-rehabilitation-newcastle" },
              { label: "Sports injuries", href: "/sports-physiotherapy-newcastle" },
              { label: "Work injuries (WorkCover)", href: "/workplace-physiotherapy-newcastle" },
              { label: "Chronic pain", href: "/chronic-pain-physiotherapy-newcastle" },
              { label: "Women's health", href: "/womens-health-physiotherapy-newcastle" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700">
                  {l.label} <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rehab gym */}
      <section className="section-py bg-sand" id="gym">
        <div className="container-px grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative isolate aspect-video overflow-hidden rounded-[2rem] border border-ink-100 bg-[#070d0c]">
              <HeroVideo src="/videos/t4a-gym.mp4" poster="/videos/t4a-gym-poster.jpg" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow">Mount Hutton rehab gym</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">More than a treatment room</h2>
            <p className="mt-5 text-lg text-ink-600">
              Hands-on treatment helps you get moving. Training builds the strength to keep going. At our Mount
              Hutton hub, your physiotherapist takes you from the treatment room to the gym floor in the same session.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {gymKit.map((g) => (
                <li key={g} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {g}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/rehab-gym-exercise-rehabilitation-newcastle" className="btn-primary">About the rehab gym <Icon name="arrow" className="h-4 w-4" /></Link>
              <a href="tel:+61450473974" className="btn-secondary"><Icon name="phone" className="h-4 w-4" /> 0450 473 974</a>
            </div>
            <p className="mt-4 text-sm text-ink-500">Walk-ins welcome at Mount Hutton, subject to availability.</p>
          </div>
        </div>
      </section>

      {/* Bulk billing */}
      <section className="section-py bg-white" id="bulk-billing">
        <div className="container-px">
          <div className="rounded-[2rem] border border-ink-100 bg-sand p-7 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow">Bulk billing</p>
                <h2 className="mt-4 text-4xl sm:text-5xl">Bulk billed on GP care plans</h2>
                <p className="mt-5 text-lg text-ink-600">
                  Living with a chronic condition? With a GP care plan referral, eligible patients are bulk billed for
                  their Medicare-funded physiotherapy at all four clinics.
                </p>
                <Link href="/bulk-billing-physiotherapy-newcastle" className="btn-secondary mt-7">How bulk billing works <Icon name="arrow" className="h-4 w-4" /></Link>
              </div>
              <ol className="grid gap-4 lg:col-span-7">
                {steps.map((s, i) => (
                  <li key={s.title} className="card flex gap-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">{i + 1}</span>
                    <div>
                      <h3 className="text-lg">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.text}</p>
                    </div>
                  </li>
                ))}
                <li className="px-2 text-sm text-ink-500">
                  No care plan? You can book privately without a referral. A standard 30-minute consultation is $90.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-white">
        <div className="container-px">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our team</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Physiotherapists who take the time to listen</h2>
              <p className="mt-4 max-w-2xl text-lg text-ink-600">Experience across pain, sport, women&rsquo;s health, aged care and complex rehabilitation.</p>
            </div>
            <Link href="/team" className="btn-secondary flex-shrink-0">Meet the team <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.slug} className="card h-full">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 font-display text-lg font-semibold text-white">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <h3 className="mt-5 text-xl">{m.name}</h3>
                <p className="text-sm font-medium text-brand-700">{m.role}</p>
                <p className="mt-3 text-sm text-ink-500">{m.interests.slice(0, 3).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-sand">
        <div className="container-px grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Your questions, answered</h2>
            <p className="mt-4 text-lg text-ink-600">Bulk billing, referrals, costs and what to expect at your first visit.</p>
            <Link href="/faqs" className="btn-secondary mt-7">All FAQs <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="lg:col-span-7"><FAQAccordion items={faqs.slice(0, 6)} /></div>
        </div>
      </section>

      <CTASection />
      <FaqSchema items={faqs.slice(0, 6)} />
    </>
  );
}
