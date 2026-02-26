"use client";

import { BreathButton } from "@/components/ui/BreathButton";
import { TopPill } from "@/components/sections/TopPill";
import { HeroPromise } from "@/components/sections/HeroPromise";
import { PainPoints } from "@/components/sections/PainPoints";
import { CreacionesCarousel } from "@/components/sections/CreacionesCarousel";
import { ProductMarquee } from "@/components/sections/ProductMarquee";
import { BenefitsChecks } from "@/components/sections/BenefitsChecks";
import { ClosingRitual } from "@/components/sections/ClosingRitual";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { RegalosSection } from "@/components/sections/RegalosSection";
import { ComunidadChat } from "@/components/sections/ComunidadChat";
import { StudentReviews } from "@/components/sections/StudentReviews";
import { FAQSection } from "@/components/sections/FAQSection";
import { StickyOffer } from "@/components/sections/StickyOffer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { OfferSection } from "@/components/sections/OfferSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffefa]">
      <TopPill />
      
      <RevealOnScroll>
        <HeroPromise />
      </RevealOnScroll>

      <section className="flex flex-col items-center py-4">
        <BreathButton href="https://pay.hotmart.com/F104652497O?checkoutMode=10">
          SI, QUIERO DOMINAR EL SISTEMA
        </BreathButton>
        <div className="flex items-center justify-center gap-2 mt-2.5 font-sans font-semibold text-[clamp(13px,3.7vw,15px)] text-black/70">
          <span className="text-[#f7c948] tracking-widest">★★★★★</span>
          <span>Únete a +8.555 mujeres</span>
        </div>
      </section>

      <RevealOnScroll>
        <PainPoints />
      </RevealOnScroll>

      <CreacionesCarousel />
      <ProductMarquee />

      <RevealOnScroll>
        <BenefitsChecks />
      </RevealOnScroll>

      <RevealOnScroll>
        <OfferSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ClosingRitual />
      </RevealOnScroll>

      <section className="flex flex-col items-center py-6">
        <BreathButton href="https://pay.hotmart.com/F104652497O?checkoutMode=10">
          ¡QUIERO ACCEDER AHORA!
        </BreathButton>
        <div className="flex items-center justify-center gap-3 mt-2.5 font-sans font-semibold text-xs md:text-sm text-black/60">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-sm">🔒</span> Compra 100% segura
          </span>
          <span className="text-black/45">|</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-sm">📧</span> Acceso vía mail
          </span>
        </div>
      </section>

      <RevealOnScroll>
        <ThreePillars />
      </RevealOnScroll>

      <RevealOnScroll>
        <RegalosSection />
      </RevealOnScroll>

      <ComunidadChat />

      <RevealOnScroll>
        <div className="py-4 text-center">
           <p className="font-serif italic text-[15px] text-[#222]">
             ¿Y si esto no fuera solo una Guía, <br />
             sino el <strong>inicio de una vida</strong> en total <br /><strong>coherencia con tu bienestar?</strong>
           </p>
        </div>
      </RevealOnScroll>

      <section className="flex flex-col items-center py-6">
        <BreathButton href="https://pay.hotmart.com/F104652497O?checkoutMode=10">
          SÍ, QUIERO VIVIR EN COHERENCIA
        </BreathButton>
      </section>

      <StudentReviews />
      
      <RevealOnScroll>
        <FAQSection />
      </RevealOnScroll>

      <footer className="py-4 border-t border-black/5 text-center bg-white">
        <p className="text-xs text-black/50">© 2026, Tienda Digital</p>
      </footer>

      <StickyOffer />
    </main>
  );
}
