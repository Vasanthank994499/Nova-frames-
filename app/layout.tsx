import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Frames | Digital Marketing Agency",
  description:
    "We craft high-impact digital experiences, scale brands, and produce scroll-stopping content that converts.",
  keywords: [
    "digital marketing",
    "brand growth",
    "web development",
    "graphic design",
    "UI/UX",
    "video production",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans text-txt-primary bg-surface antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
