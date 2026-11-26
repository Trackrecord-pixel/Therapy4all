import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["shoulder-pain-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: { absolute: "Shoulder Pain & Rotator Cuff Physio | Newcastle" },
  description:
    "Physiotherapy for shoulder pain, rotator cuff injuries and frozen shoulder in Newcastle and Lake Macquarie. Hands-on treatment and strength rehab.",
  alternates: { canonical: "/shoulder-pain-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
