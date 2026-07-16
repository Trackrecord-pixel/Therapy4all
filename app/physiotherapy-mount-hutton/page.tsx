import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { locations } from "@/lib/site";

const loc = locations.find((l) => l.slug === "physiotherapy-mount-hutton")!;

export const metadata: Metadata = {
  title: "Physiotherapy Mount Hutton NSW",
  description:
    "Physiotherapy in Mount Hutton, Lake Macquarie NSW at Therapy 4 All. Hands-on treatment for sports and everyday injuries, chronic pain and post-op rehab. GP Care Plans bulk billed.",
  alternates: { canonical: "/physiotherapy-mount-hutton" },
};

export default function Page() {
  return <LocationPage loc={loc} />;
}
