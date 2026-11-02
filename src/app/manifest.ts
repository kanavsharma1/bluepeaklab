import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Bluepeak",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F4F7FA",
    theme_color: "#1E3A5F",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
