import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clearsiteco.example"),
  title: {
    default: "ClearSiteCo | Post-Construction & Commercial Gym Cleaning Sydney",
    template: "%s | ClearSiteCo",
  },
  description:
    "ClearSiteCo provides specialist post-construction cleaning, commercial gym facility cleaning, strata cleaning and end-of-lease handover cleaning across Sydney.",
  keywords: [
    "post construction cleaning Sydney",
    "builders clean Sydney",
    "commercial gym cleaning",
    "strata cleaning",
    "end of lease cleaning",
    "handover cleaning",
  ],
  openGraph: {
    title: "ClearSiteCo",
    description: "Specialist post-construction, commercial gym, strata and end-of-lease cleaning across Sydney.",
    url: "https://www.clearsiteco.example",
    siteName: "ClearSiteCo",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
