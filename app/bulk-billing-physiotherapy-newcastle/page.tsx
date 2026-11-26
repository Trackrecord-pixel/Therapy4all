import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["bulk-billing-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Bulk Billing Physiotherapy Newcastle",
  description:
    "Bulk billing physiotherapy in Newcastle and Lake Macquarie on a GP care plan — bulk billed for eligible patients. Book at one of our 4 clinics.",
  alternates: { canonical: "/bulk-billing-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
