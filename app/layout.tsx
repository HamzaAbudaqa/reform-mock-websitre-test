import type { Metadata } from "next";
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
