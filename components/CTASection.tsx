import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";
export default function CTASection({ title = "Ready to move better and feel stronger?", text = "Book online or call our friendly team today. GP Care Plans are bulk billed." }: { title?: string; text?: string }) {
  return (
    <section className="bg-white">
      <div className="container-px pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-7 py-14 text-center shadow-card-hover sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/50 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow bg-brand-600 text-brand-50">{site.tagline}</span>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-brand-50">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={site.bookingUrl} className="btn bg-white text-brand-700 hover:bg-brand-50 w-full sm:w-auto">Book Online <Icon name="arrow" className="h-4 w-4" /></Link>
              <a href={site.phoneHref} className="btn border border-white/40 bg-transparent text-white hover:bg-white/10 w-full sm:w-auto"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
