import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["bulk-billing-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Bulk Billing Physiotherapy Newcastle",
  description:
    "Bulk billing physiotherapy in Newcastle and Lake Macquarie via a GP Care Plan — expert hands-on treatment with no out-of-pocket cost. Book at one of our 4 clinics.",
  alternates: { canonical: "/bulk-billing-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
