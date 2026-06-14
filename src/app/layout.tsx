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
  metadataBase: new URL("https://f3rren.github.io/f14-tomcat"),
  title: {
    default: "Catalogo Aerei Militari",
    template: "%s · Catalogo Aerei Militari",
  },
  description:
    "Catalogo interattivo di aerei militari: specifiche, storia, armamento e modelli 3D. Primo aereo: Grumman F-14 Tomcat.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Catalogo Aerei Militari",
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
