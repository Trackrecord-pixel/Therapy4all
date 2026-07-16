import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { locations } from "@/lib/site";

const loc = locations.find((l) => l.slug === "physiotherapy-warners-bay")!;

export const metadata: Metadata = {
  title: "Physiotherapy Warners Bay NSW",
  description:
    "Physiotherapy in Warners Bay, Lake Macquarie NSW at Therapy 4 All. Hands-on treatment for sports and everyday injuries, chronic pain and post-op rehab. GP Care Plans bulk billed.",
  alternates: { canonical: "/physiotherapy-warners-bay" },
};

export default function Page() {
  return <LocationPage loc={loc} />;
}
