import Link from "next/link";
import Icon from "@/components/Icon";
export default function NotFound() {
  return (
    <section className="section-py bg-sand">
      <div className="container-px flex min-h-[40vh] flex-col items-center justify-center text-center">
        <span className="eyebrow">Page not found</span>
        <h1 className="mt-5 text-5xl text-ink-900">404</h1>
        <p className="mt-4 max-w-md text-ink-600">Sorry, we couldn&rsquo;t find that page.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">Back to home <Icon name="arrow" className="h-4 w-4" /></Link>
          <Link href="/contact" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
