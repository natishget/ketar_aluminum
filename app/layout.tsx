import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/navBar";
import FooterBar from "@/components/footer/footer";
import ketar_logo from "@/assets/ketar_logo2.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ketar Aluminum - Product and Service at its best",
    template: "%s | Ketar Aluminum",
  },
  icons: {
    icon: "/ketar_logo2.png",
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
    "Product and Service at its best",
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
    title: "Ketar Aluminum - Product and Service at its best",
    description:
      "Leading aluminum supplier in Ethiopia since 2006. Specializing in anodized and powder coating aluminum profiles, doors, windows, curtain walls, and technical services.",
    images: [
      {
        url: "@/assests/ketar_logo2.png",
        width: 1200,
        height: 630,
        alt: "Ketar Aluminum - Product and Service at its best",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketar Aluminum - Product and Service at its best",
    description:
      "Leading aluminum supplier in Ethiopia since 2006. Quality aluminum profiles, screws, Electroplating (galvanizing) chemicals and technical services.",
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ketaraluminum.com",
  },
  generator: "ByteForge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="@/assets/ketar_logo2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="@/assets/ketar_logo2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="@/assets/ketar_logo2.png"
        />
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
                "Leading aluminum supplier in Ethiopia since 2006. Specializing in anodized and powder coating aluminum profiles, doors, windows, curtain walls, screws, Electroplating (Galvanizing) Chemicals and technical services.",
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
                telephone: "+251-930-32-9599",
                contactType: "customer service",
                availableLanguage: ["English", "Amharic"],
              },
              sameAs: [
                "https://facebook.com/ketaraluminum",
                "https://linkedin.com/company/ketaraluminum",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Aluminum Products, Services, Screws and Electroplating (Galvanizing) Chemicals",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Electroplating Chemicals",
                      description: "Galvanizing Chemicals, Zinc Electroplating",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Screws",
                      description:
                        "Screw production and distributions. Self Drill screws, Clipboard Screws, Drywall screws",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Aluminum Profiles",
                      description:
                        "Anodized and powder coating aluminum profiles",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aluminum Technical Services",
                      description:
                        "Doors, Windows, Partition, Handrail, Curtain wall installation",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <FooterBar />
      </body>
    </html>
  );
}
