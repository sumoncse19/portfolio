import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import { poppins } from "./fonts";
import Header from "@/app/components/Header";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Md. Sumon | Full Stack Software Engineer",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100/50 text-black overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
