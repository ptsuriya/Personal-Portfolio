import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Kanit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactBar from "@/components/site/ContactBar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumadesign.dev"),
  title: {
    default: "ฟรีแลนซ์รับทำเว็บไซต์ จันทบุรี — kumadesign.dev",
    template: "%s | kumadesign.dev",
  },
  description:
    "KUMA ฟรีแลนซ์รับทำเว็บไซต์ในจันทบุรี รับเขียนเว็บไซต์บริษัท Landing Page เว็บแอป และระบบหลังบ้าน ด้วย Next.js, React และ Laravel คุยงานกับคนทำโดยตรง ตั้งแต่วางโครงสร้าง พัฒนา จน deploy ใช้งานจริง",
  keywords: [
    "KUMA",
    "ฟรีแลนซ์",
    "ฟรีแลนซ์รับทำเว็บไซต์",
    "ฟรีแลนซ์ จันทบุรี",
    "รับทำเว็บไซต์ จันทบุรี",
    "รับทำเว็บ จันทบุรี",
    "รับเขียนเว็บไซต์ จันทบุรี",
    "freelance web developer",
    "web developer Chanthaburi",
    "รับเขียนเว็บไซต์",
    "รับทำเว็บบริษัท",
    "รับเขียนโปรแกรม",
    "รับทำ Landing Page",
    "รับออกแบบเว็บ",
    "รับทำเว็บ",
    "web developer Thailand",
    "รับทำเว็บแอป",
    "Next.js developer",
    "React developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Design System",
    "รับทำระบบหลังบ้าน",
  ],
  authors: [{ name: "kumadesign.dev" }],
  creator: "kumadesign.dev",
  publisher: "kumadesign.dev",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ฟรีแลนซ์รับทำเว็บไซต์ จันทบุรี — kumadesign.dev",
    description:
      "KUMA ฟรีแลนซ์รับทำเว็บไซต์ในจันทบุรี รับเขียนเว็บไซต์บริษัท Landing Page เว็บแอป และระบบหลังบ้านสำหรับธุรกิจ",
    url: "/",
    siteName: "kumadesign.dev",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/image/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "KUMA ฟรีแลนซ์รับทำเว็บไซต์ จันทบุรี เริ่มต้น 2,500 บาท",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ฟรีแลนซ์รับทำเว็บไซต์ จันทบุรี — kumadesign.dev",
    description: "KUMA ฟรีแลนซ์รับทำเว็บไซต์ในจันทบุรี รับเขียนเว็บไซต์บริษัท Landing Page เว็บแอป และระบบหลังบ้านสำหรับธุรกิจ",
    images: ["/image/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/image/Asset/KUMA.png",
    shortcut: "/image/Asset/KUMA.png",
    apple: "/image/Asset/KUMA.png",
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kumadesign.dev/#organization",
      name: "kumadesign.dev",
      url: "https://kumadesign.dev",
      image: "https://kumadesign.dev/image/Asset/KUMA.png",
      email: "mailto:ptsuriyarangsri@gmail.com",
      description: "KUMA — freelance web designer and developer in Chanthaburi, Thailand, building business websites and web applications",
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
      name: "kumadesign.dev ฟรีแลนซ์รับทำเว็บไซต์ จันทบุรี",
      url: "https://kumadesign.dev",
      provider: { "@id": "https://kumadesign.dev/#organization" },
      areaServed: [
        { "@type": "City", name: "Chanthaburi" },
        { "@type": "Country", name: "Thailand" },
      ],
      serviceType: ["Freelance Web Development", "Website Development", "Web Application Development", "Frontend Development"],
      priceRange: "เริ่มต้น ฿2,500",
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
      <body className={cn(kanit.className, "relative min-h-screen bg-kuma-cream text-kuma-cocoa")}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-kuma-bark focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-kuma-cream"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <SiteFooter />
        <ContactBar />
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
