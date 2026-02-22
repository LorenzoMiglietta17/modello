import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
