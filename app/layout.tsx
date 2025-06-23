// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteOps Digital Systems - Simplifying Tech, Amplifying Impact.",
  description: "Empowering businesses and individuals with cutting-edge digital solutions, practical training, and strategic guidance that drive innovation, efficiency, and growth.",
  keywords: ["ByteOps", "Digital Systems", "Tech Training", "IT Consultancy", "AI Automation", "Web Development", "App Development", "Business Innovation", "Africa Tech", "Digital Transformation"],
  authors: [{ name: "ByteOps Digital Systems" }],
  icons: {
    icon: '/byte_favicon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Ensure no whitespace/newline characters here */}
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}