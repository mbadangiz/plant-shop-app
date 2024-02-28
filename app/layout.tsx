import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const wrkSans = Work_Sans({ subsets: ["latin"] });

const wrkSans200 = Work_Sans({
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
      <body className={`${wrkSans.className} ${wrkSans200.variable}`}>
        {children}
      </body>
    </html>
  );
}
