// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Script from 'next/script'; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://byteops.digital'),
  title: {
    default: "Best Tech Training & Digital Solutions in Abuja, Nigeria | ByteOps Digital",
    template: "%s | Leading Tech Solutions Provider in Nigeria - ByteOps Digital"
  },
  description: "Premier provider of tech training, IT consultancy & digital solutions in Abuja, Nigeria. Expert web development, AI automation & business innovation services. Transform your business with ByteOps Digital Systems - Africa's trusted technology partner.",
  keywords: [
    "ByteOps", "Digital Systems", "Tech Training", "IT Consultancy", 
    "AI Automation", "Web Development", "App Development", 
    "Business Innovation", "Africa Tech", "Digital Transformation"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://byteops.digital',
    siteName: 'ByteOps Digital Systems',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ByteOps Digital Systems'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@byteopsdigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ByteOps Digital Systems",
    "url": "https://byteops.digital",
    "logo": "https://byteops.digital/byte.png",
    "description": "Empowering businesses with cutting-edge digital solutions and technical training.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@byteops.digital"
    }
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics Script using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SKMVLJC8BB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SKMVLJC8BB');
          `}
        </Script>
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}