import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["post-operative-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: "Post-Operative Rehabilitation Newcastle",
  description:
    "Post-operative physiotherapy in Newcastle and Lake Macquarie. Structured rehab to rebuild strength, movement and confidence after surgery, with a fully equipped gym.",
  alternates: { canonical: "/post-operative-rehabilitation-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
