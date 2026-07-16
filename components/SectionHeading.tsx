export default function SectionHeading({ eyebrow, title, intro, center = false, light = false }:
  { eyebrow?: string; title: string; intro?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 text-3xl sm:text-4xl ${light ? "text-white" : "text-ink-900"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-brand-50" : "text-ink-600"}`}>{intro}</p>}
    </div>
  );
}
