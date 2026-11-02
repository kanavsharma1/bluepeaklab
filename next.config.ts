import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    // Send www traffic to the bare domain so Google sees one canonical site.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bluepeaklab.in" }],
        destination: "https://bluepeaklab.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
