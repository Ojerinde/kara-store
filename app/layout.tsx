import ScamAlert from "@/components/ScamAlert/ScamAlert";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import TopNavigation from "@/components/TopNavigation/TopNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kara Online store",
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
        {/* <ScamAlert message="The scam alert placeholder"></ScamAlert> */}
        <TopNavigation></TopNavigation>
        <main>{children}</main>
      </body>
    </html>
  );
}
