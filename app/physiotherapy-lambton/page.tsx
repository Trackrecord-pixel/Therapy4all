import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const sub = suburbs.find((s) => s.slug === "physiotherapy-lambton")!;

export const metadata: Metadata = {
  title: "Physiotherapy Lambton NSW",
  description:
    "Physiotherapy for Lambton 2299 at Therapy 4 All. Hands-on treatment for sports and everyday injuries, chronic pain and post-op rehab. GP Care Plans bulk billed — no gap.",
  alternates: { canonical: "/physiotherapy-lambton" },
};

export default function Page() {
  return <SuburbPage sub={sub} />;
}
