import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Therapy 4 All Physiotherapy", short_name: "Therapy 4 All",
    description: "Physiotherapy across the Hunter Region.", start_url: "/", display: "standalone",
    background_color: "#ffffff", theme_color: "#0f7b6e", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }] };
}
