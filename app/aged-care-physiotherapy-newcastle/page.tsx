import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["aged-care-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Aged Care Physiotherapy Newcastle",
  description:
    "Aged care physiotherapy in Newcastle and Lake Macquarie. Helping older adults improve mobility, balance and strength to stay active and independent.",
  alternates: { canonical: "/aged-care-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
