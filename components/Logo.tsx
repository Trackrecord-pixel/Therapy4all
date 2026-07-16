import Link from "next/link";
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span aria-hidden="true"
        className={`flex h-11 w-11 items-center justify-center rounded-2xl font-display text-lg font-bold shadow-card transition-transform group-hover:scale-105 ${light ? "bg-white text-brand-700" : "bg-brand-600 text-white"}`}>
        T4A
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold ${light ? "text-white" : "text-ink-900"}`}>Therapy 4 All</span>
        <span className={`block text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${light ? "text-brand-100" : "text-brand-600"}`}>Physiotherapy</span>
      </span>
    </Link>
  );
}
