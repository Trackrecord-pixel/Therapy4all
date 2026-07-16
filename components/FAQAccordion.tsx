"use client";
import { useState } from "react";
import Icon from "./Icon";
import type { Faq } from "@/lib/site";
export default function FAQAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-50">
                <span className="text-base font-semibold text-ink-900">{item.q}</span>
                <Icon name="chevron" className={`h-5 w-5 flex-shrink-0 text-brand-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h3>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden"><p className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
