"use client";

import { BreathButton } from "@/components/ui/BreathButton";
import { TopPill } from "@/components/sections/TopPill";
import { HeroPromise } from "@/components/sections/HeroPromise";
import { PainPoints } from "@/components/sections/PainPoints";
import { VideoSalesLetter } from "@/components/sections/VideoSalesLetter";
import { ValueCascade } from "@/components/sections/ValueCascade";
import { StudentReviews } from "@/components/sections/StudentReviews";
import { ProgramPresentation } from "@/components/sections/ProgramPresentation";
import { WhoAmI } from "@/components/sections/WhoAmI";
import { FAQSection } from "@/components/sections/FAQSection";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { StickyOffer } from "@/components/sections/StickyOffer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useCurrency } from "@/hooks/useCurrency";
import { Suspense } from "react";

function HomeContent() {
  const { price } = useCurrency();
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  return (
    <main className="min-h-screen bg-[#fffefa] overflow-x-hidden">
      <TopPill />
      <WhatsAppFloat />
      <StickyOffer />

      {/* ============================================
          PASO 1: HOOK (3 seg) — Hero compacto
          ============================================ */}
      <HeroPromise />

      {/* ============================================
          PASO 2: VIDEO DEMO — INMEDIATO después del hook
          La persona debe VER el video sin scroll en móvil
          ============================================ */}
      <VideoSalesLetter />

      {/* ============================================
          PASO 3: AGITAR EL DOLOR
          ============================================ */}
      <RevealOnScroll>
        <PainPoints />
      </RevealOnScroll>

      {/* Presentación compacta del entregable principal */}
      <ProgramPresentation />

      {/* ============================================
          PASO 4: QUÉ INCLUYE + PRECIO + CTA
          ValueCascade ya tiene: lista de items, bonos,
          precio con oldPrice tachado, y CTA.
          Esta es LA ÚNICA sección de oferta.
          ============================================ */}
      <ValueCascade />

      {/* Elena — la persona detrás del producto después de mostrar la oferta */}
      <WhoAmI />

      {/* ============================================
          PASO 5: GARANTÍA
          ============================================ */}
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
                 &quot;Lo que gastas en un solo sérum de marca, es lo que te cuesta aprender a hacer TODA tu cosmética para siempre.&quot;
               </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* ============================================
          PASO 6: PRUEBA SOCIAL
          ============================================ */}
      <StudentReviews />

      {/* ============================================
          PASO 7: FAQ + CTA FINAL
          ============================================ */}
      <RevealOnScroll>
        <FAQSection />
      </RevealOnScroll>

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

      <footer className="py-8 border-t border-black/5 text-center bg-white mb-20 md:mb-0">
        <p className="text-xs text-black/40 font-medium tracking-wider uppercase">© 2026, Sabiduría Natural • Todos los derechos reservados</p>
      </footer>
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
