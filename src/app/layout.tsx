import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syana Al An",
  description: "Syana Al An for maintenance and repair services",
};

const cairo = Cairo({
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // add language attribute to html tag for accessibility and SEO
    <html suppressHydrationWarning className={cairo.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
