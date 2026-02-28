"use client";

import { BreathButton } from "@/components/ui/BreathButton";
import { TopPill } from "@/components/sections/TopPill";
import { HeroPromise } from "@/components/sections/HeroPromise";
import { PainPoints } from "@/components/sections/PainPoints";
import { CreacionesCarousel } from "@/components/sections/CreacionesCarousel";
import { ProductMarquee } from "@/components/sections/ProductMarquee";
import { BenefitsChecks } from "@/components/sections/BenefitsChecks";
import { ClosingRitual } from "@/components/sections/ClosingRitual";
import { ComunidadChat } from "@/components/sections/ComunidadChat";
import { StudentReviews } from "@/components/sections/StudentReviews";
import { WhoAmI } from "@/components/sections/WhoAmI";
import { FAQSection } from "@/components/sections/FAQSection";
import { StickyOffer } from "@/components/sections/StickyOffer";
import { OfferSection } from "@/components/sections/OfferSection";
import { ValueCascade } from "@/components/sections/ValueCascade";
import { SocialProofToast } from "@/components/ui/SocialProofToast";
import { DynamicDate } from "@/components/ui/DynamicDate";
import { HeroGeoAlert } from "@/components/ui/HeroGeoAlert";
import { CostOfInaction } from "@/components/sections/CostOfInaction";
import { TheDiscovery } from "@/components/sections/TheDiscovery";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Suspense } from "react";

function HomeContent() {
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  return (
    <main className="min-h-screen bg-[#fffefa] overflow-x-hidden">
      {/* <SocialProofToast /> */}
      <TopPill />
      
      <RevealOnScroll>
        <HeroPromise />
      </RevealOnScroll>

      <RevealOnScroll>
        <PainPoints />
      </RevealOnScroll>

      <TheDiscovery />

      <CreacionesCarousel />
      <ProductMarquee />

      <RevealOnScroll>
        <BenefitsChecks />
      </RevealOnScroll>

      <RevealOnScroll>
        <OfferSection />
      </RevealOnScroll>

      <ValueCascade />

      {/* Reemplazo de Alta Conversión: Garantía de Soberanía */}
      <RevealOnScroll>
        <section className="py-16 px-4 bg-[#f6e5ff]/30 border-y border-[#d6bdf5]/20">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#303030] mb-6">
              Pruébalo sin miedo, aquí la que manda eres tú
            </h2>
            <p className="font-sans text-lg md:text-xl text-[#4a4a4a] leading-relaxed mb-8">
              Mira, estoy tan segura de que te va a encantar crear tus propias cosas, que te propongo un trato: 
              <strong> Prueba la guía por 7 días.</strong> Si en una semana no sientes el orgullo de haber hecho 
              tu primer labial o tu crema mejor que la de marca, me escribes y te devuelvo cada centavo. 
              Sin preguntas. Quiero que esto sea el inicio de tu libertad, no una carga.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#d6bdf5]/30 mb-8">
               <p className="font-sans text-sm font-bold text-[#8aad62] uppercase tracking-wider mb-2">
                 Dato real para tu bolsillo:
               </p>
               <p className="font-serif italic text-xl text-[#303030]">
                 "Lo que gastas en un solo sérum de marca, es lo que te cuesta aprender a hacer TODA tu cosmética para siempre."
               </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <section className="flex flex-col items-center py-10 px-4 bg-gradient-to-b from-transparent to-[#f6e5ff]/10">
        <BreathButton href={checkoutUrl} src="bottom_final">
          SÍ, QUIERO MI PIEL SANA POR $9.00
        </BreathButton>
        <DynamicDate />
      </section>

      <CostOfInaction />

      <StudentReviews />
      
      <WhoAmI />

      <RevealOnScroll>
        <FAQSection />
      </RevealOnScroll>

      <footer className="py-8 border-t border-black/5 text-center bg-white mb-20 md:mb-0">
        <p className="text-xs text-black/40 font-medium tracking-wider uppercase">© 2026, Sabiduría Natural • Todos los derechos reservados</p>
      </footer>

      {/* <StickyOffer /> */}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HomeContent />
    </Suspense>
  );
}
