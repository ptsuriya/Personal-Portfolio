import type { Metadata, Viewport } from "next";
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
    default: "kumadesign.dev — รับเขียนเว็บไซต์และเว็บแอป",
    template: "%s | kumadesign.dev",
  },
  description:
    "รับเขียนเว็บไซต์บริษัท Landing Page เว็บแอป และระบบหลังบ้าน ด้วย Next.js, React และ Laravel พร้อมวางโครงสร้าง พัฒนา และ deploy ให้ใช้งานจริง",
  keywords: [
    "KUMA",
    "web development studio",
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
    title: "kumadesign.dev — รับเขียนเว็บไซต์และเว็บแอป",
    description:
      "รับเขียนเว็บไซต์บริษัท Landing Page เว็บแอป และระบบหลังบ้านสำหรับธุรกิจ",
    url: "/",
    siteName: "kumadesign.dev",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/image/Asset/KUMA.png",
        width: 1200,
        height: 630,
        alt: "KUMA — รับออกแบบและพัฒนาเว็บ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kumadesign.dev — รับเขียนเว็บไซต์และเว็บแอป",
    description: "รับเขียนเว็บไซต์บริษัท Landing Page เว็บแอป และระบบหลังบ้านสำหรับธุรกิจ",
    images: ["/image/Asset/KUMA.png"],
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
      description: "Web development studio for business websites and web applications",
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
      name: "kumadesign.dev Web Development Studio",
      url: "https://kumadesign.dev",
      provider: { "@id": "https://kumadesign.dev/#organization" },
      areaServed: "TH",
      serviceType: ["Website Development", "Web Application Development", "Frontend Development"],
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
