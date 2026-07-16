import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { primaryNav, servicePagesNav, locations, site } from "@/lib/site";
import { suburbs } from "@/lib/suburbs";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-px section-py">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Hands-on, practical physiotherapy across Newcastle, Lake Macquarie and Maitland.
              Move better, feel stronger — with care that lasts beyond the treatment room.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2.5 hover:text-white"><Icon name="phone" className="h-4 w-4 text-brand-300" /> {site.phone}</a>
              <a href={site.emailHref} className="inline-flex items-center gap-2.5 hover:text-white"><Icon name="mail" className="h-4 w-4 text-brand-300" /> {site.email}</a>
              <p className="inline-flex items-center gap-2.5"><Icon name="clock" className="h-4 w-4 text-brand-300" /> {site.hours}</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryNav.map((l) => <li key={l.href}><Link href={l.href} className="text-ink-300 hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {servicePagesNav.slice(0, 6).map((l) => <li key={l.href}><Link href={l.href} className="text-ink-300 hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Our Clinics</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {locations.map((l) => (
                <li key={l.slug}><Link href={`/${l.slug}`} className="inline-flex items-center gap-2 text-ink-300 hover:text-white"><Icon name="pin" className="h-4 w-4 text-brand-300" /> {l.name}</Link></li>
              ))}
            </ul>
            <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6">Book Online <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="mt-12 border-t border-ink-800 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-400">Areas we serve</h2>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-400">
            {suburbs.map((s) => <Link key={s.slug} href={`/${s.slug}`} className="hover:text-white">Physiotherapy {s.name}</Link>)}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>&copy; {year} {site.legalName}. All rights reserved.</p>
          <p className="max-w-xl">This website provides general information only and is not a substitute for individual physiotherapy or medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
