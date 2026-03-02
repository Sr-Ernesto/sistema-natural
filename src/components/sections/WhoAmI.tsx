import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Image from "next/image";

export function WhoAmI() {
  return (
    <section className="py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <RevealOnScroll>
          <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#fdf8f0] rotate-[-1deg] mx-auto">
            <img 
                src="/images/elena-author.png" 
                alt="Elena - Alquimia Soberana" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Elena+Soberana&background=8aad62&color=fff&size=512')}
            />
          </div>
        </RevealOnScroll>

        <div className="flex-1 text-center md:text-left">
          <RevealOnScroll>
            <h2 className="font-serif text-[26px] md:text-5xl text-[#303030] mb-4 leading-tight">
              ¿Quién es <span className="text-[#8aad62]">Elena</span> y cómo <br/> puede ayudarte?
            </h2>
          </RevealOnScroll>

          <div className="space-y-4 font-sans text-[15px] md:text-xl text-[#4a4a4a] leading-relaxed">
            <p>
              Hola, soy <strong>Elena</strong>. No soy una experta de laboratorio, soy una madre que tuvo que reinventarse desde cero.
            </p>
            
            <p>
              Mi misión es simple: <strong>ayudarte a recuperar tu poder</strong>. Lo que aprendí en mi cocina para ahorrar, hoy es el sistema que te permitirá crear tu propia cosmética profesional.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6 max-w-[300px] mx-auto md:mx-0">
              <div className="bg-[#fdf8f0] p-3 rounded-xl border border-[#8aad62]/10">
                <p className="text-[#8aad62] font-black text-xl mb-0.5">+8k</p>
                <p className="text-[9px] uppercase font-bold text-gray-400">Alumnas</p>
              </div>
              <div className="bg-[#fdf8f0] p-3 rounded-xl border border-[#8aad62]/10">
                <p className="text-[#8aad62] font-black text-xl mb-0.5">+130</p>
                <p className="text-[9px] uppercase font-bold text-gray-400">Recetas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
