import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ClientLoader from "@/lottie/ClientLoader";
export const metadata: Metadata = {
  title: "New Project",
  description: "Structure Next Typescript",
};

const cairo = Cairo({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // add language attribute to html tag for accessibility and SEO
    <html suppressHydrationWarning className={cairo.className} lang="en">
      <body>
        <ClientLoader>{children}</ClientLoader>
      </body>
    </html>
  );
}
