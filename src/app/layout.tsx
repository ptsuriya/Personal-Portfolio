import type { Metadata } from "next";
import Script from "next/script";
import { Kanit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import PillNav from "@/components/reactbits/PillNav";
import GrainyGradient from "@/components/reactbits/GrainyGradient";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumadesign.dev"),
  title: {
    default: "KUMA — UI/UX & Frontend Freelance | รับออกแบบและพัฒนาเว็บ",
    template: "%s | KUMA Freelance",
  },
  description:
    "รับงาน UI/UX Design และ Frontend Development โดย KUMA freelance ในไทย — Next.js, React, Tailwind CSS, Figma สื่อสารง่าย ส่งงานตรงเวลา",
  keywords: [
    "KUMA",
    "freelance",
    "รับออกแบบเว็บ",
    "รับทำเว็บ",
    "UI/UX freelance Thailand",
    "ฟรีแลนซ์",
    "Next.js developer",
    "React developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Design System",
    "Hire designer Thailand",
  ],
  authors: [{ name: "KUMA (Pongtiwat Suriyarangsri)" }],
  creator: "KUMA",
  publisher: "KUMA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KUMA — UI/UX & Frontend Freelance",
    description:
      "รับงาน UI/UX Design และ Frontend Development โดย KUMA — Next.js, React, Tailwind CSS, Figma",
    url: "/",
    siteName: "KUMA Freelance",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/image/Line/profile.jpg",
        width: 1200,
        height: 630,
        alt: "KUMA Freelance — UI/UX & Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KUMA — UI/UX & Frontend Freelance",
    description: "รับออกแบบและพัฒนาเว็บ — Next.js, React, Tailwind, Figma",
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
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kumadesign.dev/#kuma",
      name: "KUMA (Pongtiwat Suriyarangsri)",
      url: "https://kumadesign.dev",
      image: "https://kumadesign.dev/image/Line/profile.jpg",
      jobTitle: "UI/UX Designer & Frontend Developer",
      email: "mailto:ptsuriyarangsri@gmail.com",
      knowsAbout: [
        "UI/UX Design",
        "Frontend Development",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Design System",
        "Figma",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kumadesign.dev/#service",
      name: "KUMA Freelance",
      url: "https://kumadesign.dev",
      provider: { "@id": "https://kumadesign.dev/#kuma" },
      areaServed: "TH",
      serviceType: ["UI/UX Design", "Frontend Development", "Full-Stack Web Development"],
      priceRange: "฿฿",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={cn("font-sans", geist.variable)}>
      <body className={cn(kanit.className, "relative min-h-screen")}>
        <GrainyGradient />
        <PillNav />
        {children}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
