import type { Metadata } from "next";
import { Kanit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const kanit = Kanit({ 
  subsets: ['latin'],
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']

 });

export const metadata: Metadata = {
  metadataBase: new URL("https://kumadesign.dev"),
  title: {
    default: "KUMA Portfolio | UI Designer, Frontend Developer, Songwriter",
    template: "%s | KUMA Portfolio",
  },
  description:
    "Portfolio of KUMA, a UI Designer, Frontend Developer, and Pop R&B Songwriter creating digital experiences and heartfelt lyrics.",
  keywords: [
    "KUMA",
    "portfolio",
    "UI Designer",
    "Frontend Developer",
    "Next.js",
    "React",
    "songwriter",
    "Thailand",
  ],
  authors: [{ name: "KUMA" }],
  creator: "KUMA",
  publisher: "KUMA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KUMA Portfolio | UI Designer, Frontend Developer, Songwriter",
    description:
      "Explore KUMA's portfolio in design, frontend development, and music.",
    url: "/",
    siteName: "KUMA Portfolio",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/image/Line/profile.jpg",
        width: 1200,
        height: 630,
        alt: "KUMA Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KUMA Portfolio | UI Designer, Frontend Developer, Songwriter",
    description:
      "Explore KUMA's portfolio in design, frontend development, and music.",
    images: ["/image/Line/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/image/Line/profile.jpg",
    shortcut: "/image/Line/profile.jpg",
    apple: "/image/Line/profile.jpg",
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={cn("font-sans", geist.variable)}>
      
      <body className={kanit.className}>


        {children}
        </body>
    </html>
  );
}
