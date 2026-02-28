import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhoAmI() {
  return (
    <section className="py-16 px-4 bg-[#fdf8f0]">
      <div className="max-w-[620px] mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl text-[#303030] mb-8">
            ¿Quién soy y por qué hago esto?
          </h2>
        </RevealOnScroll>

        <div className="space-y-6 font-sans text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
          <p>
            Hola, soy <strong>Elena</strong>. Soy madre y, como muchas mujeres latinas, mi vida dio un giro inesperado hace unos años cuando tuve que salir de mi amada <strong>Venezuela</strong>.
          </p>
          
          <p>
            Llegué a un nuevo país con las manos vacías, pero con el corazón lleno de ganas de sacar adelante a mis hijos. Honestamente, al principio no fue fácil. Tenía que cuidar cada centavo y, al mismo tiempo, me preocupaba muchísimo lo que compraba en el súper para la piel de mis pequeños.
          </p>

          <p>
            Fue en esa búsqueda de <strong>ahorrar y cuidar</strong> que nació lo que hoy llamas "Sabiduría Natural". Empecé en mi propia cocina, probando recetas para no tener que pagar fortunas por productos que ni siquiera sabía qué traían.
          </p>

          <p className="font-serif italic text-2xl text-[#8aad62] py-4">
            "Lo que empezó como una necesidad de madre, se convirtió en mi mayor acto de libertad."
          </p>

          <p>
            Hoy, después de años de aciertos y errores, he decidido compartir contigo todo lo que aprendí. No solo para que ahorres, sino para que sientas ese orgullo de decir: <strong>"Esto lo hice yo, con mis manos y para mi familia"</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
