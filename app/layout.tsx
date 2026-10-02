import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });

const SITE = "https://byteops.digital";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "ByteOps Digital Systems | Tech Training and Digital Solutions in Abuja, Nigeria",
    template: "%s | ByteOps Digital Systems, Abuja Nigeria",
  },
  description:
    "ByteOps Digital Systems in Abuja, Nigeria offers tech training, AI automation, custom web and app development, IT consultancy, business advisory, and cybersecurity. Simplifying Tech, Amplifying Impact.",
  keywords: [
    "ByteOps Digital Systems",
    "Tech Training Abuja",
    "Web Development Nigeria",
    "AI Automation Abuja",
    "IT Consultancy Nigeria",
    "Cybersecurity Nigeria",
    "Digital Transformation Africa",
  ],
  authors: [{ name: "ByteOps Digital Systems", url: SITE }],
  creator: "ByteOps Digital Systems",
  publisher: "ByteOps Digital Systems",
  alternates: { canonical: SITE },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE,
    siteName: "ByteOps Digital Systems",
    title: "ByteOps Digital Systems | Tech Training and Digital Solutions in Abuja, Nigeria",
    description:
      "Tech training, AI automation, web development, IT consultancy and cybersecurity from Abuja, Nigeria to Africa and beyond.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ByteOps Digital Systems: Simplifying Tech, Amplifying Impact" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@byteopsdigital",
    creator: "@byteopsdigital",
    title: "ByteOps Digital Systems | Tech Training and Digital Solutions in Abuja",
    description: "Training, AI automation, web apps, consultancy and security. Abuja, Nigeria.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2A3A" },
  ],
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "ByteOps Digital Systems",
        url: SITE,
        logo: `${SITE}/byteops-logo.svg`,
        description: "Tech training, AI automation, web development, IT consultancy, and cybersecurity in Abuja, Nigeria.",
        email: "info@byteops.digital",
        telephone: "+2347019091481",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abuja",
          addressRegion: "FCT",
          addressCountry: "NG",
        },
        areaServed: ["Abuja", "Nigeria", "West Africa", "Africa"],
        sameAs: [
          "https://www.linkedin.com/company/byteops-digital-systems/",
          "https://www.facebook.com/profile.php?viewas=100000686899395&id=61583223701076",
          "https://wa.me/2347019091481",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "ByteOps Digital Systems",
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE}/#local`,
        name: "ByteOps Digital Systems",
        url: SITE,
        telephone: "+2347019091481",
        email: "info@byteops.digital",
        priceRange: "₦₦",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abuja",
          addressRegion: "Federal Capital Territory",
          addressCountry: "NG",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${sora.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <JsonLd />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SKMVLJC8BB" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SKMVLJC8BB');`}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-byteops-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <div id="main">{children}</div>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
