import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeuss Trader",
  description:
    "Unleash Your Trading Superpowers: Conquer the Markets with Zeuss Trader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
