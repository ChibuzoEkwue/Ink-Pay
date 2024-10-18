import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

export const metadata: Metadata = {
  title: "Ink & Pay",
  description: "Ink It, Send It, Get Paid.",
};

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>{children}</body>
    </html>
  );
}
