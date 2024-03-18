import Navbars from "@/components/Navbars/Navbars";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbars/>
        {children}
    </>
  );
}
