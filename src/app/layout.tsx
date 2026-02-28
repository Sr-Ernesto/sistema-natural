import type { Metadata } from "next";
import { Libre_Baskerville, Quicksand } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/components/providers/TrackingProvider";
import Script from "next/script";

const GTM_ID = "GTM-5H2C27F8";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SISTEMA NATURAL | Alquimia Soberana",
  description: "Transforma tu rutina de belleza en un ritual saludable y rentable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className={`${libreBaskerville.variable} ${quicksand.variable} font-sans antialiased bg-[#fffefa] text-[#121212]`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5H2C27F8"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <TrackingProvider>
          {children}
        </TrackingProvider>
      </body>
    </html>
  );
}
