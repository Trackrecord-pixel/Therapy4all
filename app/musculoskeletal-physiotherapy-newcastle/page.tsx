import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["musculoskeletal-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Musculoskeletal Physiotherapy Newcastle",
  description:
    "Musculoskeletal physiotherapy in Newcastle for back, neck, joint and muscle pain. Hands-on treatment and targeted exercise, in clinic and in our gym.",
  alternates: { canonical: "/musculoskeletal-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
