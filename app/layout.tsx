import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ketar Aluminum - Premium Aluminum Profiles & Technical Services in Ethiopia",
    template: "%s | Ketar Aluminum",
  },
  description:
    "Leading aluminum supplier in Ethiopia since 2006. Specializing in anodized and powder coating aluminum profiles, doors, windows, curtain walls, and technical services. Quality products at competitive prices.",
  keywords: [
    "aluminum profiles Ethiopia",
    "anodized aluminum",
    "powder coating",
    "aluminum doors",
    "aluminum windows",
    "curtain wall",
    "aluminum cladding",
    "handrails",
    "skylight",
    "guardrail",
    "partition",
    "sun barker",
    "Ketar Aluminum",
    "Ethiopian aluminum supplier",
    "aluminum technical services",
  ],
  authors: [{ name: "Ketar Aluminum" }],
  creator: "Ketar Aluminum",
  publisher: "Ketar Aluminum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ketaraluminum.com",
    siteName: "Ketar Aluminum",
    title: "Ketar Aluminum - Premium Aluminum Profiles & Technical Services in Ethiopia",
    description:
      "Leading aluminum supplier in Ethiopia since 2006. Specializing in anodized and powder coating aluminum profiles, doors, windows, curtain walls, and technical services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ketar Aluminum - Premium Aluminum Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketar Aluminum - Premium Aluminum Profiles & Technical Services",
    description: "Leading aluminum supplier in Ethiopia since 2006. Quality aluminum profiles and technical services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ketaraluminum.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ketar Aluminum",
              url: "https://ketaraluminum.com",
              logo: "https://ketaraluminum.com/logo.png",
              description:
                "Leading aluminum supplier in Ethiopia since 2006. Specializing in anodized and powder coating aluminum profiles, doors, windows, curtain walls, and technical services.",
              foundingDate: "2006-10-07",
              founder: {
                "@type": "Person",
                name: "Anteneh Darsema",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Ethiopia",
                addressLocality: "Addis Ababa",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251-911-123456",
                contactType: "customer service",
                availableLanguage: ["English", "Amharic"],
              },
              sameAs: ["https://facebook.com/ketaraluminum", "https://linkedin.com/company/ketaraluminum"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Aluminum Products and Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Aluminum Profiles",
                      description: "Anodized and powder coating aluminum profiles",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aluminum Technical Services",
                      description: "Doors, Windows, Partition, Handrail, Curtain wall installation",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
