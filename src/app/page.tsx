"use client";

import { BreathButton } from "@/components/ui/BreathButton";
import { TopPill } from "@/components/sections/TopPill";
import { HeroPromise } from "@/components/sections/HeroPromise";
import { VideoSalesLetter } from "@/components/sections/VideoSalesLetter";
import { StudentReviews } from "@/components/sections/StudentReviews";
import { WhoAmI } from "@/components/sections/WhoAmI";
import { FAQSection } from "@/components/sections/FAQSection";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { StickyOffer } from "@/components/sections/StickyOffer";
import { useCurrency } from "@/hooks/useCurrency";
import Image from "next/image";

export default function Home() {
  const { price, format } = useCurrency();
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  return (
    <main className="min-h-screen bg-[#fffefa] overflow-x-hidden">
      <TopPill />
      <WhatsAppFloat />
      <StickyOffer />
      
      <HeroPromise />

      <div className="py-4 bg-white">
        <VideoSalesLetter />
      </div>

      <section className="py-12 px-4 bg-[#fdf8f0] border-y border-[#8aad62]/20 shadow-inner text-center">
        <div className="max-w-md mx-auto">
            {/* EL MOCKUP QUE FALTABA - Restaurado */}
            <div className="mb-10 px-4">
                <Image 
                    src="/images/ebooks_hero.webp" 
                    alt="Mockup Sistema Natural" 
                    width={500} 
                    height={400} 
                    className="w-full h-auto drop-shadow-2xl animate-float"
                    priority
                />
            </div>

            <div className="mb-8 bg-white border-2 border-[#8aad62]/20 rounded-3xl p-6 text-left shadow-sm">
                <p className="text-[10px] font-black text-[#8aad62] uppercase mb-3 tracking-widest text-center">El impacto en tu bolsillo:</p>
                <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-[#8aad62]/10 pb-2">
                        <span className="font-sans text-sm text-[#4a4a4a]">Labial premium de marca:</span>
                        <span className="font-sans font-bold text-[#d83a3a]">{format(35)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-sans text-sm text-[#4a4a4a]">Tu propio labial natural:</span>
                        <span className="font-sans font-bold text-[#8aad62]">{format(0.8)}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-[#8aad62]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#d83a3a] text-white text-[10px] font-black px-4 py-1 uppercase rotate-45 translate-x-4 translate-y-2">
                    -70% OFF
                </div>
                <p className="text-black/40 text-xs font-bold uppercase mb-1">Precio de Lanzamiento:</p>
                <div className="text-6xl font-black text-[#1a1a1a] tracking-tighter mb-6">{price}</div>
                
                <BreathButton href={checkoutUrl} src="price_block_center" className="w-full text-lg py-5 shadow-2xl">
                    ¡SÍ, LO QUIERO AHORA!
                </BreathButton>
                
                <TrustBadges />
            </div>

            <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-dashed border-[#8aad62]/30 flex items-center gap-4 text-left">
                <span className="text-3xl">🛡️</span>
                <p className="text-xs text-[#4a4a4a] font-medium leading-relaxed">
                    <strong>Garantía de 7 días:</strong> Mi palabra es tu seguridad. Si no te gusta, te devuelvo el 100%.
                </p>
            </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <StudentReviews />
      </section>

      <WhoAmI />
      <FAQSection />

      <section className="flex flex-col items-center py-20 px-4 bg-gradient-to-b from-[#fdf8f0] to-white border-t border-black/5">
        <div className="text-center mb-10">
            <h3 className="font-serif text-3xl text-[#303030] mb-2 font-bold tracking-tight">Recupera tu poder hoy</h3>
        </div>
        <BreathButton href={checkoutUrl} src="bottom_final_slide">
          COMENZAR MI TRANSFORMACIÓN POR {price}
        </BreathButton>
        <div className="mt-8">
            <TrustBadges />
        </div>
      </section>

      <footer className="py-8 border-t border-black/5 text-center bg-gray-50">
        <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest">© 2026 Sabiduría Natural</p>
      </footer>
    </main>
  );
}
