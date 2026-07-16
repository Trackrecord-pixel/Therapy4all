import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const sub = suburbs.find((s) => s.slug === "physiotherapy-boolaroo")!;

export const metadata: Metadata = {
  title: "Physiotherapy Boolaroo NSW",
  description:
    "Physiotherapy for Boolaroo 2284 at Therapy 4 All. Hands-on treatment for sports and everyday injuries, chronic pain and post-op rehab. GP Care Plans bulk billed — no gap.",
  alternates: { canonical: "/physiotherapy-boolaroo" },
};

export default function Page() {
  return <SuburbPage sub={sub} />;
}
