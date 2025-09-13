import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DefaultCursor } from "@/components/DefaultCursor/Cursor";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from "@/components/Footer/Footer"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Arbizu | Developer",
  description: "Full stack developer creating AI-powered web applications that solve real business problems. See my portfolio of machine learning and software development projects.",
  openGraph: {
    title: "Carlos Arbizu | Developer",
    description: "Full stack developer creating AI-powered web applications that solve real business problems. See my portfolio of machine learning and software development projects.",
    type: "website",
    siteName: "Carlos Arbizu | Developer",
    locale: 'en_US'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
    <DefaultCursor />
    <Analytics />
    <SpeedInsights />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
