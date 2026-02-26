import type { Metadata } from "next";
import { Libre_Baskerville, Quicksand } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/components/providers/TrackingProvider";

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
