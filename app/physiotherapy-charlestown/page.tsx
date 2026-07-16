import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const sub = suburbs.find((s) => s.slug === "physiotherapy-charlestown")!;

export const metadata: Metadata = {
  title: "Physiotherapy Charlestown NSW",
  description:
    "Physiotherapy for Charlestown 2290 at Therapy 4 All. Hands-on treatment for sports and everyday injuries, chronic pain and post-op rehab. GP Care Plans bulk billed — no gap.",
  alternates: { canonical: "/physiotherapy-charlestown" },
};

export default function Page() {
  return <SuburbPage sub={sub} />;
}
