import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaFrames — Brand Growth Studio",
  description:
    "NovaFrames is a brand growth studio combining strategy, content and performance marketing to build brands that people notice, remember and choose.",
  keywords: [
    "brand growth studio",
    "digital marketing",
    "performance marketing",
    "content creation",
    "brand strategy",
    "lead generation",
    "social media marketing",
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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans text-txt-primary bg-surface antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
