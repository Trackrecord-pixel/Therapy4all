import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["chronic-pain-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Chronic Pain Physiotherapy Newcastle",
  description:
    "Chronic pain physiotherapy in Newcastle led by a Master's-qualified pain physiotherapist. Evidence-based care to reduce fear of movement and restore function.",
  alternates: { canonical: "/chronic-pain-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
