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
        <div className="min-h-screen flex flex-col p-8 md:p-24">
          <nav className="mb-8">
            <div className="font-bold font-mono">
              <h1 className="text-4xl mb-4">@asienliam</h1>
              <ul className="flex justify-around h-full">
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
          <main className="my-auto">
            <div className="max-w-5xl font-mono text-sm">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
