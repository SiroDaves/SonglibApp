import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { info } from "@/utils/data/app-info";
import Footer from "@/components/reusable/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Navbar from "@/components/reusable/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${info.callout} - ${info.tagline}`,
  description: info.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="text-white">
          <Navbar />
          <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            {children}
          </div>
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
