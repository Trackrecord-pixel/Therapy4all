import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["joint-replacement-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: { absolute: "Knee & Hip Replacement Rehab | Mount Hutton Physio" },
  description:
    "Physiotherapy after knee or hip replacement in Newcastle and Lake Macquarie — range of motion, strength and walking, with a rehab gym at Mount Hutton.",
  alternates: { canonical: "/joint-replacement-rehabilitation-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
