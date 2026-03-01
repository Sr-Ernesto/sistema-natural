import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Image from "next/image";

export function WhoAmI() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <RevealOnScroll>
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#fdf8f0] rotate-[-2deg]">
            <Image 
                src="/images/elena-author.png" 
                alt="Elena - Autora de Sabiduría Natural" 
                fill 
                className="object-cover"
                onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Elena+Soberana&background=8aad62&color=fff&size=512')}
            />
          </div>
        </RevealOnScroll>

        <div className="flex-1 text-left">
          <RevealOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl text-[#303030] mb-8 leading-tight">
              ¿Quién soy y por qué <br/> <span className="text-[#8aad62]">hago esto?</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-6 font-sans text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
            <p>
              Hola, soy <strong>Elena</strong>. Soy madre y, como muchas mujeres latinas, mi vida dio un giro inesperado hace unos años cuando tuve que salir de mi amada <strong>Venezuela</strong>.
            </p>
            
            <p>
              Llegué a un nuevo país con las manos vacías, pero con el corazón lleno de ganas de sacar adelante a mis hijos. Honestamente, al principio no fue fácil.
            </p>

            <p className="bg-[#fdf8f0] p-6 rounded-2xl border-l-4 border-[#8aad62] font-medium italic text-[#303030]">
              "Fue en esa búsqueda de ahorrar y cuidar que nació lo que hoy llamas Sabiduría Natural. Empecé en mi propia cocina, probando recetas para no tener que pagar fortunas por químicos raros."
            </p>

            <p>
              Hoy, después de años de aciertos y errores, he decidido compartir contigo todo lo que aprendí. No solo para que ahorres, sino para que sientas ese orgullo de decir: <strong>"Esto lo hice yo, con mis manos"</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
