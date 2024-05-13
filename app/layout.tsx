import type { Metadata } from "next";
import { RobotoSlab, VarelaRound } from "./fonts";
import "./globals.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

export const metadata: Metadata = {
  title: "Zeuss Trader",
  description:
    "Unleash Your Trading Superpowers: Conquer the Markets with Zeuss Trader",
  applicationName: "Zeuss Trader",
  keywords: [
    "trading",
    "stockmarket",
    "coaching",
    "market",
    "sharemarket",
    "loans",
    "insurance",
  ],
  authors: [
    "https://karthik1915.pythonanywhere.com/",
    "Karthikeyan J",
  ] as Author,
  openGraph: {
    title: "Zeuss Trader",
    url: "https://zeuss-trader.in/",
    siteName: "Zeuss Trader",
    description:
      "Unleash Your Trading Superpowers: Conquer the Markets with Zeuss Trader",
    phoneNumbers: ["+91 6382980289", "+01 8072285207"],
    countryName: "India",
    images: ["/logotext.png"],
  },
  metadataBase: new URL("https://zeuss-trader.in"),
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
