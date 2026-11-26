import Link from "next/link";
import Icon from "./Icon";
import HeroVideo from "./HeroVideo";
import { site, locations } from "@/lib/site";

// Homepage hero — full-bleed background video (dark theme).
// First screen answers two questions only: "is this for me?" and "who do I call?".
// Clinic strip at the bottom: Mount Hutton (main clinic: online booking + walk-ins) highlighted,
// the other three clinics are booked by phone.
// Ahpra: no outcome claims.
export default function Hero() {
  const hub = locations.find((l) => l.slug === "physiotherapy-mount-hutton")!;
  const ordered = [hub, ...locations.filter((l) => l.slug !== hub.slug)];

  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-128px)] flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/videos/t4a-hero-poster.jpg)", backgroundColor: "#070d0c" }}
    >
      <HeroVideo src="/videos/t4a-hero.mp4" poster="/videos/t4a-hero-poster.jpg" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(7,13,12,0.6)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#070d0c] to-transparent" />

      {/* Message */}
      <div className="container-px flex w-full flex-1 items-center py-10 lg:py-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Newcastle · Lake Macquarie · Maitland</p>
          <p aria-hidden="true" className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight text-[#f2fbf8] sm:text-6xl lg:text-7xl">
            Move better.<br /><span className="text-[#4fd8c0]">Feel stronger.</span>
          </p>
          <h1 className="mt-5 max-w-2xl text-lg font-medium leading-snug text-[#e6f4f0] sm:text-2xl">
            Physiotherapy and a rehab gym for everyone — four clinics across the Hunter.
          </h1>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary sm:w-auto">
              Book Mount Hutton online <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <a href={hub.phoneHref} className="btn-secondary sm:w-auto"><Icon name="phone" className="h-5 w-5" /> {hub.phone}</a>
          </div>
        </div>
      </div>

      {/* Clinic strip — one tap to call */}
      <div className="container-px w-full pb-6">
        <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[rgba(238,246,244,0.14)] bg-[rgba(7,13,12,0.7)] backdrop-blur-md lg:grid-cols-4">
          {ordered.map((loc, i) => {
            const isHub = loc.slug === hub.slug;
            return (
              <li
                key={loc.slug}
                className={`${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-[rgba(238,246,244,0.1)]`}
              >
                <a
                  href={loc.phoneHref}
                  className={`flex h-full flex-col gap-1 p-4 transition-colors hover:bg-[rgba(79,216,192,0.08)] sm:p-5 ${isHub ? "shadow-[inset_0_0_0_1.5px_#4fd8c0] rounded-2xl lg:rounded-r-none" : ""}`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#f2fbf8] sm:text-base">
                    {loc.name}
                    {isHub && <span className="rounded-full bg-[#4fd8c0] px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-[#0b1413]">Main</span>}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-base font-semibold text-[#4fd8c0] sm:text-lg">
                    <Icon name="phone" className="h-4 w-4" /> {loc.phone}
                  </span>
                  <span className="text-xs text-[#a9bab5]">{isHub ? "Online booking · walk-ins" : "Call to book"}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
