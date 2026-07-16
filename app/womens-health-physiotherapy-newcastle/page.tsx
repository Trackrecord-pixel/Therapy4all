import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["womens-health-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Women's Health Physiotherapy Newcastle",
  description:
    "Women's health physiotherapy in Newcastle with a female physiotherapist. Evidence-based, individualised care in a supportive setting.",
  alternates: { canonical: "/womens-health-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
