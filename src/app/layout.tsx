import { DM_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
