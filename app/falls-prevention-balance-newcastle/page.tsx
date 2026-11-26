import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["falls-prevention-balance-newcastle"];

export const metadata: Metadata = {
  title: { absolute: "Falls Prevention & Balance Physio | Newcastle" },
  description:
    "Falls prevention and balance training for older adults in Newcastle and Lake Macquarie. Bulk billed for eligible GP care plan patients.",
  alternates: { canonical: "/falls-prevention-balance-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
