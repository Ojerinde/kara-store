import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import ScamAlert from "@/components/ScamAlert/ScamAlert";
import TopNavigation from "@/components/TopNavigation/TopNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kara.com.ng store",
  description: "This is Kara online store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScamAlert message="Kara.com.ng will never ask you to pay or send money to any other bank Name Besides Royal Coast Technologies Limited"></ScamAlert>
        <TopNavigation></TopNavigation>
        <main className="px-[8rem]">{children}</main>
      </body>
    </html>
  );
}
