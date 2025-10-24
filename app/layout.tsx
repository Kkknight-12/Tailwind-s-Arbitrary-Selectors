import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Arbitrary Selectors: Complete Visual Guide",
  description: "Master Tailwind CSS arbitrary selectors with 12 interactive patterns. Learn to style third-party HTML, markdown content, and library components without custom CSS. Live examples with [&_selector]:utility syntax.",
  keywords: [
    "tailwind css",
    "arbitrary selectors",
    "tailwind patterns",
    "css selectors",
    "tailwind tutorial",
    "react tailwind",
    "tailwind styling",
    "markdown styling",
    "tailwind arbitrary variants",
  ],
  authors: [{ name: "Knight" }],
  creator: "Knight",
  publisher: "Knight",
  metadataBase: new URL("https://guide-to-tailwind-arbitrary-selecto.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tailwind Arbitrary Selectors: Complete Visual Guide",
    description: "Master Tailwind CSS arbitrary selectors with 12 interactive patterns. Style third-party HTML without custom CSS.",
    url: "https://guide-to-tailwind-arbitrary-selecto.vercel.app",
    siteName: "Tailwind Arbitrary Selectors Guide",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tailwind Arbitrary Selectors Visual Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind Arbitrary Selectors: Complete Visual Guide",
    description: "Master Tailwind CSS arbitrary selectors with 12 interactive patterns. Style third-party HTML without custom CSS.",
    images: ["/og-image.png"],
    creator: "@mayank",
  },
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
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}