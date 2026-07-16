"use client";
import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { site, locations } from "@/lib/site";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); };
  if (sent) return (
    <div className="card text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700"><Icon name="check" className="h-7 w-7" /></span>
      <h3 className="mt-5 text-2xl">Thank you</h3>
      <p className="mt-3 text-ink-600">Your enquiry has been received. Our team will be in touch shortly. For urgent matters please call <a href={site.phoneHref} className="font-semibold text-brand-700 underline">{site.phone}</a>.</p>
    </div>
  );
  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required autoComplete="name" />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />
      </div>
      <Field id="email" label="Email" type="email" required autoComplete="email" />
      <div>
        <label htmlFor="clinic" className="mb-1.5 block text-sm font-medium text-ink-800">Preferred clinic</label>
        <select id="clinic" name="clinic" className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200">
          {locations.map((l) => <option key={l.slug}>{l.name}</option>)}
          <option>No preference</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us briefly what you'd like help with (e.g. back pain, sports injury, GP Care Plan)." className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
      </div>
      <button type="submit" className="btn-primary w-full">Send Enquiry <Icon name="arrow" className="h-4 w-4" /></button>
      <p className="text-center text-xs text-ink-400">We respect your privacy. Your details are only used to respond to your enquiry.</p>
    </form>
  );
}
function Field({ id, label, type = "text", required = false, autoComplete }: { id: string; label: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">{label} {required && <span className="text-ink-400">*</span>}</label>
      <input id={id} name={id} type={type} required={required} autoComplete={autoComplete} className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
    </div>
  );
}
