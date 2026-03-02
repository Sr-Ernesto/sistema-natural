import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ProgramPresentation() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        
        {/* Mockup Principal - Oculto en móvil para evitar doble presentación */}
        <div className="hidden md:block flex-1">
          <RevealOnScroll>
            <div className="relative w-full max-w-[400px] aspect-square group mx-auto">
              <div className="absolute -inset-4 bg-[#8aad62]/10 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative w-full h-full transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                <img 
                  src="/images/ebooks_hero.webp" 
                  alt="Alquimia Soberana - Programa Completo" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-white/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Presentación Lado Derecho (Todo el contenido en móvil) */}
        <div className="flex-1 text-center md:text-left">
          <RevealOnScroll>
            {/* Mockup para móvil - Rediseño compacto */}
            <div className="md:hidden relative w-full max-w-[220px] aspect-square mb-4 mx-auto group">
               <div className="absolute -inset-4 bg-[#8aad62]/10 blur-2xl rounded-full opacity-50" />
               <img 
                src="/images/ebooks_hero.webp" 
                alt="Alquimia Soberana" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="relative rounded-[1.5rem] shadow-xl border-4 border-white"
              />
            </div>

            <h2 className="font-serif text-[24px] md:text-4xl text-[#303030] mb-3 md:mb-6 leading-tight">
              Alquimia Soberana: <br/> 
              <span className="text-[#8aad62]">Tu Guía Maestra</span>
            </h2>

            <div className="space-y-4 font-sans text-[15px] md:text-lg text-[#4a4a4a] leading-tight">
              <ul className="space-y-2 mt-2 text-left inline-block w-full max-w-[280px] mx-auto md:mx-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#8aad62] shrink-0">✓</span> <span><strong>130+ Recetas</strong> seguras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8aad62] shrink-0">✓</span> <span><strong>Guía de ingredientes</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8aad62] shrink-0">✓</span> <span><strong>Conservación</strong> efectiva.</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
