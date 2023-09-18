import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
          <nav className="flex-none mb-16">
            <div className="font-bold font-mono">
              <h1 className="text-4xl mb-4">
                <a href="/">@asienliam</a>
              </h1>
              <ul className="flex justify-around max-w-sm">
                <li>
                  <a href="/resan">Resan</a>
                </li>
                <li>
                  <a href="/planen">Planen</a>
                </li>
                <li>
                  <a href="/budget">Budget</a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="flex-grow font-mono text-sm flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
