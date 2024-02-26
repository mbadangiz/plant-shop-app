import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const interInter200 = Inter({
  subsets: ["latin"],
  variable: "--font-Inter200",
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Plant Shopping Site",
  description: "Plant Shopping Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${interInter200.variable}`}>
        {children}
      </body>
    </html>
  );
}
