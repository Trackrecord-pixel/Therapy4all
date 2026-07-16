"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { primaryNav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-card backdrop-blur" : "bg-white/85 backdrop-blur-sm"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <div className="hidden border-b border-ink-100 bg-brand-700 text-white lg:block">
        <div className="container-px flex h-10 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">Physiotherapy · Mount Hutton · Warners Bay · Wallsend · Rutherford</p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-brand-100"><Icon name="phone" className="h-3.5 w-3.5" /> {site.phone}</a>
            <a href={site.emailHref} className="inline-flex items-center gap-1.5 hover:text-brand-100"><Icon name="mail" className="h-3.5 w-3.5" /> {site.email}</a>
          </div>
        </div>
      </div>
      <nav className="container-px flex h-20 items-center justify-between py-3" aria-label="Primary">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive(l.href) ? "text-brand-700" : "text-ink-600 hover:text-brand-700"}`}>{l.label}</Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="btn-secondary"><Icon name="phone" className="h-4 w-4" /> Call</a>
          <Link href={site.bookingUrl} className="btn-primary">Book Online</Link>
        </div>
        <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 text-ink-800 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="container-px space-y-1 py-4">
            {primaryNav.map((l) => (
              <Link key={l.href} href={l.href} className={`block rounded-xl px-4 py-3 text-base font-medium ${isActive(l.href) ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-ink-50"}`}>{l.label}</Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <a href={site.phoneHref} className="btn-secondary w-full"><Icon name="phone" className="h-4 w-4" /> Call</a>
              <Link href={site.bookingUrl} className="btn-primary w-full">Book Online</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
