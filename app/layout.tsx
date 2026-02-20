import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosto's™",
  description: "Ristorante specializzato in pollo arrosto dorato e contorni artigianali.",
  icons: {
    icon: [{ url: "/img/logo.jpeg?v=3", type: "image/jpeg" }],
    shortcut: [{ url: "/img/logo.jpeg?v=3", type: "image/jpeg" }],
    apple: [{ url: "/img/logo.jpeg?v=3", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
