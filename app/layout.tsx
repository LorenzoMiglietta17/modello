import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sito Vetrina",
  description: "Struttura base per sito vetrina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
