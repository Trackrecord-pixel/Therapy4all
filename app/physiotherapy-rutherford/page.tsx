import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { locations } from "@/lib/site";

const loc = locations.find((l) => l.slug === "physiotherapy-rutherford")!;

export const metadata: Metadata = {
  title: "Physiotherapy Rutherford NSW",
  description:
    "Physiotherapy in Rutherford, Maitland NSW at Therapy 4 All. Hands-on treatment for sports and everyday injuries, chronic pain and post-op rehab. GP Care Plans bulk billed.",
  alternates: { canonical: "/physiotherapy-rutherford" },
};

export default function Page() {
  return <LocationPage loc={loc} />;
}
