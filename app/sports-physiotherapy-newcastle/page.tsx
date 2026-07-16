import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["sports-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Sports Physiotherapy Newcastle",
  description:
    "Sports physiotherapy in Newcastle and Lake Macquarie. Hands-on treatment and rehab for sports injuries — recover, restore movement and prevent recurrence.",
  alternates: { canonical: "/sports-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
