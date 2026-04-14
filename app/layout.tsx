import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { ProductProvider } from "@/context/Product/ProductProvider";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dealers Auto Center - Product Dashboard",
  description: "Product app using nextjs for frontend test using dummy api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="pt-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col overflow-x-hidden">
          <ProductProvider>{children}</ProductProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
