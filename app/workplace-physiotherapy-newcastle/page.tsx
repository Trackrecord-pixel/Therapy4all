import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["workplace-physiotherapy-newcastle"];

export const metadata: Metadata = {
  title: "Workplace Physiotherapy Newcastle",
  description:
    "Workplace and return-to-work physiotherapy in Newcastle and the Hunter. Assessment, treatment and reporting to help injured workers recover and return safely.",
  alternates: { canonical: "/workplace-physiotherapy-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
