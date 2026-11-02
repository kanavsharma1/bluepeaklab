import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Generates the 1200×630 preview image shown when the site is shared on
// WhatsApp, LinkedIn, X, etc.
export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F7FA",
          padding: "72px 80px",
          color: "#1E3A5F",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 34 34">
            <path d="M3 28 L13 10 L19 20 L23 14 L31 28 Z" fill="#1E3A5F" />
            <path d="M13 10 L16 15.4 L13 14 L10.6 15.4 Z" fill="#A8C5DA" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>Websites built to convert.</div>
          <div style={{ fontSize: 32, color: "#42566E" }}>Landing pages and business websites · Noida · Ghaziabad · India</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ background: "#E8A87C", color: "#1E3A5F", fontSize: 28, fontWeight: 700, padding: "14px 28px", borderRadius: 14 }}>
            bluepeaklab.in
          </div>
        </div>
      </div>
    ),
    size,
  );
}
