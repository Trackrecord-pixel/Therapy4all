import Link from "next/link";
import Icon from "./Icon";
import HeroVideo from "./HeroVideo";
import { site, locations } from "@/lib/site";

// Homepage hero — full-bleed background video (dark theme) with the clinic panel
// on the first screen: Mount Hutton (main clinic: online booking + walk-ins) featured,
// the other three clinics booked by phone.
// Ahpra: no outcome claims; bulk billing always qualified "for eligible patients".
export default function Hero() {
  const hub = locations.find((l) => l.slug === "physiotherapy-mount-hutton")!;
  const others = locations.filter((l) => l.slug !== hub.slug);

  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/videos/t4a-hero-poster.jpg)", backgroundColor: "#070d0c" }}
    >
      <HeroVideo src="/videos/t4a-hero.mp4" poster="/videos/t4a-hero-poster.jpg" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(7,13,12,0.66)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0b1413] to-transparent" />

      <div className="container-px grid w-full items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
        {/* Message */}
        <div className="lg:col-span-7">
          <p className="eyebrow">Newcastle · Lake Macquarie · Maitland</p>
          <p aria-hidden="true" className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight text-[#f2fbf8] sm:text-6xl lg:text-7xl">
            Move better.<br /><span className="text-[#4fd8c0]">Feel stronger.</span>
          </p>
          <h1 className="mt-5 max-w-xl text-lg font-medium leading-snug text-[#e6f4f0] sm:text-xl">
            Physiotherapy and a rehab gym for everyone — four clinics across Newcastle, Lake Macquarie and Maitland.
          </h1>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            <li className="chip"><Icon name="doc" className="h-4 w-4 text-[#4fd8c0]" /> Bulk billing for eligible GP care plans</li>
            <li className="chip"><Icon name="strength" className="h-4 w-4 text-[#4fd8c0]" /> Rehab gym at Mount Hutton</li>
            <li className="chip"><Icon name="shield" className="h-4 w-4 text-[#4fd8c0]" /> NDIS · WorkCover · DVA</li>
          </ul>
        </div>

        {/* Clinic panel — visible on the first screen */}
        <div className="lg:col-span-5" id="clinics-top">
          <div className="rounded-[1.75rem] border border-[rgba(238,246,244,0.16)] bg-[rgba(7,13,12,0.72)] p-5 backdrop-blur-md sm:p-6">
            {/* Mount Hutton */}
            <div className="rounded-2xl border border-[rgba(79,216,192,0.5)] bg-[rgba(15,36,32,0.85)] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl font-semibold text-[#f2fbf8]">Mount Hutton</p>
                <span className="rounded-full bg-[#4fd8c0] px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-[#0b1413]">Main clinic</span>
              </div>
              <p className="mt-1 text-sm text-[#c2d1cd]">{hub.address}</p>
              <a href={hub.phoneHref} className="mt-3 inline-flex items-center gap-2 text-2xl font-semibold text-[#f2fbf8] hover:text-[#8fe9da]">
                <Icon name="phone" className="h-5 w-5 text-[#4fd8c0]" /> {hub.phone}
              </a>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !min-h-[44px] !px-4 !text-sm">
                  Book online
                </Link>
                <a href={hub.phoneHref} className="btn-secondary !min-h-[44px] !px-4 !text-sm"><Icon name="phone" className="h-4 w-4" /> Call</a>
              </div>
              <p className="mt-3 text-xs text-[#c2d1cd]">Walk-ins welcome · Rehab gym · {site.hours}</p>
            </div>

            {/* Other clinics — call to book */}
            <p className="mt-5 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8fa39e]">Other clinics · call to book</p>
            <ul className="mt-2 divide-y divide-[rgba(238,246,244,0.1)]">
              {others.map((loc) => (
                <li key={loc.slug}>
                  <a href={loc.phoneHref} className="flex items-center justify-between gap-3 px-1 py-3 hover:text-[#8fe9da]">
                    <span>
                      <span className="block font-semibold text-[#f2fbf8]">{loc.name}</span>
                      <span className="block text-xs text-[#8fa39e]">{loc.hostClinic}</span>
                    </span>
                    <span className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-[rgba(79,216,192,0.35)] px-3.5 py-1.5 text-sm font-semibold text-[#f2fbf8]">
                      <Icon name="phone" className="h-4 w-4 text-[#4fd8c0]" /> {loc.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
