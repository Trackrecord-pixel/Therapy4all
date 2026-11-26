import Link from "next/link";
import Icon from "./Icon";
import { locations, site } from "@/lib/site";

// Where to go and who to call. Mount Hutton (main hub) is featured:
// it's the only clinic with online booking and walk-ins.
// Warners Bay, Wallsend and Rutherford are booked by phoning the clinic.
const mapsLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Therapy 4 All " + address)}`;

export default function ClinicFinder() {
  const hub = locations.find((l) => l.slug === "physiotherapy-mount-hutton")!;
  const others = locations.filter((l) => l.slug !== hub.slug);

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      {/* Mount Hutton — main hub */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(79,216,192,0.45)] bg-[#0f2420] p-7 sm:p-10 lg:col-span-7">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#4fd8c0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0b1413]">
          Main clinic · Rehab gym
        </span>
        <h3 className="mt-5 text-3xl sm:text-4xl">Mount Hutton</h3>
        <p className="mt-2 text-ink-600">{hub.hostClinic}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href={mapsLink(hub.address)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-ink-700 hover:text-brand-700">
            <Icon name="pin" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
            <span>{hub.address}<span className="block text-sm text-brand-700">Get directions</span></span>
          </a>
          <p className="flex items-start gap-3 text-ink-700">
            <Icon name="clock" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
            <span>{site.hours}<span className="block text-sm text-ink-500">Walk-ins welcome</span></span>
          </p>
        </div>

        <a href={hub.phoneHref} className="mt-7 inline-flex items-center gap-3 font-display text-3xl font-semibold text-[#f2fbf8] hover:text-brand-700 sm:text-4xl">
          <Icon name="phone" className="h-7 w-7 text-brand-600" /> {hub.phone}
        </a>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book online <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a href={hub.phoneHref} className="btn-secondary"><Icon name="phone" className="h-4 w-4" /> Call</a>
          <Link href={`/${hub.slug}`} className="btn-secondary">Clinic details</Link>
        </div>
        <p className="mt-4 text-sm text-ink-500">Book online, call, or walk in — walk-ins are seen subject to availability.</p>
      </div>

      {/* Other clinics — call to book */}
      <div className="grid gap-4 lg:col-span-5">
        {others.map((loc) => (
          <div key={loc.slug} className="card flex flex-col gap-3 !p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-xl">{loc.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">{loc.region}</span>
            </div>
            <p className="text-sm text-ink-600">
              {loc.hostClinic} ·{" "}
              <a href={mapsLink(loc.address)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brand-700">{loc.address}</a>
            </p>
            <a href={loc.phoneHref} className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[rgba(79,216,192,0.35)] bg-[rgba(79,216,192,0.1)] px-4 py-2 font-semibold text-[#f2fbf8] hover:border-[#4fd8c0]">
              <Icon name="phone" className="h-4 w-4 text-brand-600" /> Call {loc.phone} to book
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
