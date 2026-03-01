"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { BreathButton } from "@/components/ui/BreathButton";

export function HeroPromise() {
  const { price } = useCurrency();
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  return (
    <section className="py-10 px-3 md:px-6 bg-white">
      <div className="max-w-[980px] mx-auto text-center">
        <p className="font-sans text-xs md:text-sm tracking-[0.14em] uppercase font-bold text-[#8aad62] mb-2 md:mb-2.5">
          Tu Receta de Belleza en Casa:
        </p>
        <h1 className="font-serif text-[clamp(26px,7.2vw,34px)] md:text-[50px] leading-[1.08] md:leading-[1.06] tracking-[-0.25px] md:tracking-[-0.35px] text-[#303030] font-bold text-balance max-w-[900px] mx-auto mb-6">
          <span className="block">¿Cansada de tirar dinero en</span>
          <span className="block text-[#8aad62]">maquillaje carísimo?</span>
          <span className="block">Aprende a hacerlo tú misma.</span>
        </h1>
        
        <div className="mb-8 flex flex-col items-center">
            <BreathButton href={checkoutUrl} src="hero_top_fold" className="w-full max-w-sm py-5 text-lg shadow-2xl">
                ¡SÍ, QUIERO ACCESO POR SOLO {price}!
            </BreathButton>
            <p className="mt-3 text-[10px] font-bold text-black/40 uppercase tracking-widest">
                ✨ Acceso inmediato • Un solo pago de por vida
            </p>
        </div>

        <p className="font-sans text-[17px] md:text-[20px] leading-[1.42] text-[#4a4a4a] max-w-[560px] md:max-w-[760px] mx-auto px-3 md:px-0 text-balance mb-8">
          Crea tu propio <strong>maquillaje natural y profesional</strong> sin químicos tóxicos. Ahorra una fortuna y sana tu piel desde la raíz.
        </p>
      </div>
    </section>
  );
}
