import type { Metadata } from "next";
import { RobotoSlab, VarelaRound } from "./fonts";
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
    <html lang="en" className={`${RobotoSlab.variable}`}>
      <body className={VarelaRound.className}>{children}</body>
    </html>
  );
}
