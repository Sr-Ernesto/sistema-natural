import Image from "next/image";

export function HeroPromise() {
  return (
    <section className="py-10 px-3 md:px-6">
      <div className="max-w-[980px] mx-auto text-center">
        <p className="font-sans text-xs md:text-sm tracking-[0.14em] uppercase font-semibold text-[#303030]/90 mb-2 md:mb-2.5">
          DOMINA EL SISTEMA ALQUIMIA SOBERANA:
        </p>
        <h2 className="font-serif text-[clamp(26px,7.2vw,34px)] md:text-[50px] leading-[1.08] md:leading-[1.06] tracking-[-0.25px] md:tracking-[-0.35px] text-[#303030] font-bold text-balance max-w-[900px] mx-auto">
          <span className="block"><strong>Crea tu propio</strong></span>
          <span className="block"><strong>maquillaje profesional</strong></span>
          <span className="block text-[#8aad62]">100% libre de tóxicos</span>
          <span className="block"><strong>y sana tu piel desde la raíz.</strong></span>
        </h2>
        <p className="font-sans text-[17px] md:text-[20px] leading-[1.42] text-[#303030] mt-4 md:mt-[18px] max-w-[560px] md:max-w-[760px] mx-auto px-3 md:px-0 text-balance">
          <strong>Pasa del caos de las recetas</strong><br />
          <strong>sueltas al sistema paso a paso</strong><br />
          <strong>validado por + 8.555 mujeres.</strong>
          <span className="block mt-2.5">
            El mapa lógico para transformar tu rutina en un <strong>ritual de soberanía</strong> y lograr <strong>resultados reales</strong>.
          </span>
        </p>
        <div className="mt-1.5 md:mt-2 max-w-[420px] md:max-w-[560px] mx-auto">
          <Image 
            src="/alquimia-soberana-premium.png" 
            alt="ALQUIMIA SOBERANA - Promesa" 
            width={1080} 
            height={1080} 
            priority
            className="w-full h-auto aspect-square block mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
