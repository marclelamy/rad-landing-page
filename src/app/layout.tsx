import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--next-font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--next-font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Compute Carbon | Data Center Sustainability",
  description: "The AI-powered engine for data center emissions and carbon accounting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
