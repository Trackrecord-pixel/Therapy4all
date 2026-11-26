"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { locations } from "@/lib/site";

// Phones only: a bar fixed to the bottom of the screen with Call + Book.
// "Call" opens a small sheet with all four clinic numbers (Mount Hutton first).
export default function MobileCallBar() {
  const [open, setOpen] = useState(false);
  const hub = locations.find((l) => l.slug === "physiotherapy-mount-hutton")!;
  const ordered = [hub, ...locations.filter((l) => l.slug !== hub.slug)];

  return (
    <div className="lg:hidden">
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
      <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[rgba(238,246,244,0.12)] bg-[#070d0c]/95 backdrop-blur">
        {open && (
          <div className="container-px pt-4" role="dialog" aria-label="Call a clinic">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fa39e]">Call a clinic</p>
            <ul className="mt-2 divide-y divide-[rgba(238,246,244,0.1)]">
              {ordered.map((loc) => (
                <li key={loc.slug}>
                  <a href={loc.phoneHref} className="flex items-center justify-between py-3">
                    <span className="font-semibold text-[#f2fbf8]">
                      {loc.name}
                      {loc.slug === hub.slug && <span className="ml-2 rounded-full bg-[#4fd8c0] px-2 py-0.5 text-[0.62rem] font-semibold uppercase text-[#0b1413]">Main</span>}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#4fd8c0]"><Icon name="phone" className="h-4 w-4" /> {loc.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="container-px grid grid-cols-2 gap-3 py-3">
          <button type="button" onClick={() => setOpen((v) => !v)} className="btn-secondary !min-h-[48px] w-full" aria-expanded={open}>
            <Icon name={open ? "close" : "phone"} className="h-5 w-5" /> {open ? "Close" : "Call"}
          </button>
          <Link href="/book-online" className="btn-primary !min-h-[48px] w-full">Book</Link>
        </div>
      </div>
      {/* spacer so the bar never covers the footer */}
      <div className="h-20" aria-hidden="true" />
    </div>
  );
}
