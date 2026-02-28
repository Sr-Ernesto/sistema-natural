import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function VideoSalesLetter() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl text-[#303030] mb-6">
            Mira cómo nace la magia <span className="text-[#8aad62]">en mi propia cocina...</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#4a4a4a] mb-10 max-w-2xl mx-auto">
            Honestamente, no hay nada como la tranquilidad de saber exactamente qué estás poniendo en tu piel. ¡Es mucho más fácil de lo que imaginas!
          </p>
        </RevealOnScroll>

        {/* Bunny.net Video Container - Vertical (9:16) */}
        <div className="relative w-full max-w-[340px] md:max-w-[380px] mx-auto group">
          {/* Glassmorphism Background Decor */}
          <div className="absolute -inset-6 bg-[#8aad62]/10 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-[6px] border-white z-10 group-hover:scale-[1.02] transition-transform duration-500">
            <iframe 
              src="https://iframe.mediadelivery.net/embed/550916/ad84b508-297f-4940-bfa5-b408857a2b98?autoplay=false&loop=false&muted=false&preload=true&responsive=true" 
              loading="lazy" 
              style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }} 
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
              allowFullScreen={true}
            ></iframe>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-black text-white text-[9px] md:text-[11px] font-black px-4 py-2 rounded-full shadow-2xl z-20 uppercase tracking-widest animate-bounce-slow">
            ✨ Elena en Acción
          </div>
        </div>

        <RevealOnScroll>
          <p className="mt-12 font-serif italic text-xl text-[#303030]">
            "Si yo pude hacerlo empezando desde cero, <br className="hidden md:block" />
            tú también puedes lograr resultados profesionales hoy mismo."
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
