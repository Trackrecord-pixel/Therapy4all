import Link from "next/link";
import Icon from "./Icon";
import HeroVideo from "./HeroVideo";
import { site } from "@/lib/site";

// Homepage hero — full-bleed background video (dark theme).
// Ahpra: no outcome claims; bulk billing always qualified "for eligible patients".
export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/videos/t4a-hero-poster.jpg)", backgroundColor: "#070d0c" }}
    >
      <HeroVideo src="/videos/t4a-hero.mp4" poster="/videos/t4a-hero-poster.jpg" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(7,13,12,0.62)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#0b1413] to-transparent" />

      <div className="container-px w-full py-24 lg:py-28">
        <p className="eyebrow">Newcastle · Lake Macquarie · Maitland</p>
        <p aria-hidden="true" className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-[#f2fbf8] sm:text-7xl lg:text-8xl">
          Move better.<br /><span className="text-[#4fd8c0]">Feel stronger.</span>
        </p>
        <h1 className="mt-6 max-w-2xl text-xl font-medium leading-snug text-[#e6f4f0] sm:text-2xl">
          Physiotherapy and a rehab gym for everyone — four clinics across Newcastle, Lake Macquarie and Maitland.
        </h1>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary sm:w-auto">
            Book Mount Hutton online <Icon name="arrow" className="h-5 w-5" />
          </Link>
          <a href="#clinics" className="btn-secondary sm:w-auto"><Icon name="pin" className="h-5 w-5" /> Find a clinic &amp; call</a>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-[#c9d6d1]">
          Online booking and walk-ins at Mount Hutton. For Warners Bay, Wallsend and Rutherford, call the clinic to book.
        </p>

        <ul className="mt-10 flex flex-wrap gap-2.5">
          <li className="chip"><Icon name="doc" className="h-4 w-4 text-[#4fd8c0]" /> Bulk billing for eligible GP care plans</li>
          <li className="chip"><Icon name="strength" className="h-4 w-4 text-[#4fd8c0]" /> Rehab gym at Mount Hutton</li>
          <li className="chip"><Icon name="clock" className="h-4 w-4 text-[#4fd8c0]" /> Walk-ins welcome at Mount Hutton</li>
          <li className="chip"><Icon name="shield" className="h-4 w-4 text-[#4fd8c0]" /> NDIS · WorkCover · DVA</li>
        </ul>
      </div>
    </section>
  );
}
