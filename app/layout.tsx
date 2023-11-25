import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "asienliam",
  description: "Liam i Asien",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col max-w-5xl min-h-screen p-8 md:p-24 mx-auto">
          <Navbar />
          <main className="flex-grow font-mono text-sm flex flex-col mb-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
