import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutrición en tu Rutina | Planes Nutricionales Personalizados",
  description: "Planes nutricionales realistas y adaptados a tu vida real. Sin dietas imposibles. Diseñados por Viviana Ortiz, Nutricionista Dietista.",
  keywords: ["nutrición", "plan nutricional", "dieta personalizada", "nutricionista bogota", "alimentación saludable", "nutrirutina"],
  authors: [{ name: "Viviana Ortiz" }],
  icons: {
    icon: "/nutrirutina-favicon.png",
  },
  openGraph: {
    title: "Nutrición en tu Rutina | Planes Personalizados",
    description: "Planes nutricionales realistas y adaptados a tu vida real. Sin dietas imposibles.",
    url: "https://nutrirutina.com",
    siteName: "Nutrirutina",
    images: [
      {
        url: "/nutrirutina-completo-short.png",
        width: 1200,
        height: 630,
        alt: "Nutrirutina Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrición en tu Rutina | Planes Personalizados",
    description: "Planes nutricionales realistas y adaptados a tu vida real. Sin dietas imposibles.",
    images: ["/nutrirutina-completo-short.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18173164847"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18173164847');
          `}
        </Script>
      </body>
    </html>
  );
}
