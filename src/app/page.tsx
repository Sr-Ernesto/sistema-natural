import { BreathButton } from "@/components/ui/BreathButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GlassContainer } from "@/components/ui/GlassContainer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#f6e5ff]/20 to-transparent">
        <RevealOnScroll>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-[#303030]">
            Crea tu propio <br /> <span className="text-[#8aad62]">Maquillaje Natural</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#121212]/70 max-w-2xl mb-10 font-light">
            Transforma tu rutina de belleza en un ritual saludable y rentable desde casa.
          </p>
          <BreathButton>
            ¡QUIERO ACCEDER AHORA!
          </BreathButton>
        </RevealOnScroll>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <GlassContainer className="text-center">
              <h2 className="font-serif text-3xl mb-4 text-[#8aad62]">Alquimia Soberana</h2>
              <p className="text-lg">Migración a Next.js 15 en progreso...</p>
            </GlassContainer>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
