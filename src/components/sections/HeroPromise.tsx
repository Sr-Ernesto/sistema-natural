"use client";

import { useCurrency } from "@/hooks/useCurrency";

export function HeroPromise() {
  const { price } = useCurrency();

  return (
    <section className="pt-4 pb-2 px-3 md:px-6 md:pt-10 md:pb-6 bg-white">
      <div className="max-w-[980px] mx-auto text-center">
        <h1 className="font-serif text-[clamp(22px,6vw,28px)] md:text-[44px] leading-[1.12] md:leading-[1.08] tracking-[-0.25px] md:tracking-[-0.35px] text-[#303030] font-bold text-balance max-w-[900px] mx-auto mb-3 md:mb-5">
          <span className="block">¿Cansada de tirar dinero en</span>
          <span className="block text-[#8aad62]">maquillaje carísimo?</span>
          <span className="block">Aprende a hacerlo tú misma.</span>
        </h1>
        
        <p className="font-sans text-[15px] md:text-[19px] leading-[1.4] text-[#4a4a4a] max-w-[480px] md:max-w-[720px] mx-auto px-2 md:px-0 text-balance mb-3 md:mb-5">
          Crea tu propio maquillaje natural y profesional sin químicos tóxicos. <strong>+130 fórmulas paso a paso.</strong>
        </p>

        <p className="font-sans text-xs text-[#8aad62] font-bold uppercase tracking-wider mb-1">
          ✨ Mira cómo Elena lo hace en su cocina ↓
        </p>
      </div>
    </section>
  );
}
