import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["back-neck-pain-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: { absolute: "Back & Neck Pain Physio | Mount Hutton & Newcastle" },
  description:
    "Physiotherapy for lower back pain, sciatica and neck pain at Mount Hutton, Warners Bay, Wallsend and Rutherford. Bulk billed for eligible GP care plan patients.",
  alternates: { canonical: "/back-neck-pain-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
