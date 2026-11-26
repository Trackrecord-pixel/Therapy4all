import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";
import { servicePages } from "@/lib/service-pages";

const c = servicePages["rehab-gym-exercise-rehabilitation-newcastle"];

export const metadata: Metadata = {
  title: { absolute: "Rehab Gym & Exercise Rehabilitation | Mount Hutton" },
  description:
    "Physiotherapist-supervised exercise rehabilitation and strength and conditioning in our fully equipped Mount Hutton rehab gym, Lake Macquarie.",
  alternates: { canonical: "/rehab-gym-exercise-rehabilitation-newcastle" },
};

export default function Page() {
  return <ServiceLanding c={c} />;
}
