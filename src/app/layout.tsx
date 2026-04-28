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
    default: "KUMA Portfolio | UI/UX Designer & Frontend Developer",
    template: "%s | KUMA Portfolio",
  },
  description:
    "Portfolio and writing hub of KUMA, a UI/UX Designer and Frontend Developer creating thoughtful digital products with React, Next.js, and design systems.",
  keywords: [
    "KUMA",
    "portfolio",
    "UI/UX Designer",
    "UI Designer",
    "Frontend Developer",
    "Design System",
    "Next.js",
    "React",
    "Thailand",
  ],
  authors: [{ name: "KUMA" }],
  creator: "KUMA",
  publisher: "KUMA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KUMA Portfolio | UI/UX Designer & Frontend Developer",
    description:
      "Explore KUMA's design and frontend portfolio, case studies, and writing.",
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
    title: "KUMA Portfolio | UI/UX Designer & Frontend Developer",
    description:
      "Explore KUMA's design and frontend portfolio, case studies, and writing.",
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
