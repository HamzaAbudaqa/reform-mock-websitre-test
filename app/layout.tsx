import type { Metadata } from "next";
import Script from 'next/script'
import "./globals.css";

export const metadata: Metadata = {
  title: "DeployFlow – Ship with confidence",
  description:
    "DeployFlow helps engineering teams monitor deployments, track incidents, and manage environments in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Script src="https://reform-production.up.railway.app/api/heatmap/h.js?site=JhX2N13kuNp58FpXNufUCQ" strategy="afterInteractive" />{children}</body>
    </html>
  );
}
