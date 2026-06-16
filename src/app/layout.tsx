import type { Metadata } from "next";
import { Oswald, Share_Tech_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sharetech",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://f3rren.github.io/Ardexim"),
  title: {
    default: "Ardexim · Catalogo aerei militari",
    template: "%s · Ardexim",
  },
  description:
    "Ardexim: catalogo interattivo di aerei militari con specifiche, storia, armamento, varianti e modelli 3D.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Ardexim",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${oswald.variable} ${shareTech.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
