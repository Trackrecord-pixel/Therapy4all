import Link from "next/link";
import Icon, { type IconName } from "./Icon";
export default function ServiceCard({ title, short, icon, slug }: { title: string; short: string; icon: string; slug: string }) {
  return (
    <Link href={`/services#${slug}`} className="card card-hover group flex h-full flex-col focus-visible:ring-2 focus-visible:ring-brand-500">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={icon as IconName} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl text-ink-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
    </Link>
  );
}
