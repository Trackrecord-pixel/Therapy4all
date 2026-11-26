import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["knee-hip-pain-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: { absolute: "Knee, Hip & Arthritis Physio | Mount Hutton & Newcastle" },
  description:
    "Physiotherapy for knee pain, hip pain and osteoarthritis in Newcastle and Lake Macquarie. Exercise-based care, bulk billed for eligible GP care plan patients.",
  alternates: { canonical: "/knee-hip-pain-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
