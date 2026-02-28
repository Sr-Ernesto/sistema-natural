import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TheDiscovery() {
  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-[620px] mx-auto">
        <RevealOnScroll>
          <p className="font-serif italic text-2xl md:text-3xl text-[#303030] leading-relaxed mb-8 text-center">
            "Un día decidí mirar 'debajo del capó' de mi crema favorita... y me sentí engañada."
          </p>
        </RevealOnScroll>

        <div className="space-y-6 font-sans text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
          <p>
            Honestamente, fue un golpe de realidad. Descubrí que el <strong>90% de lo que estaba pagando</strong> era aire, cartón brillante y el sueldo de una modelo famosa.
          </p>
          
          <div className="py-4">
             <p className="text-[#d83a3a] font-bold uppercase text-xs tracking-widest mb-3">Lo que ellos te venden:</p>
             <p className="bg-red-50 border-l-4 border-red-200 p-4 italic text-base">
               "Agua con un poquito de aceite barato y un perfume fuerte para esconder los químicos que irritan tu piel."
             </p>
          </div>

          <p>Pero aquí no acaba la historia...</p>

          <p>
            Entendí que para las marcas de lujo, tu piel es solo una cifra. Si el producto dura 3 años en una estantería, para ellos es un éxito, aunque esté lleno de conservantes que <strong>alteran tus hormonas.</strong>
          </p>

          <div className="py-4">
             <p className="text-[#8aad62] font-bold uppercase text-xs tracking-widest mb-3">Lo que tú mereces:</p>
             <p className="bg-[#8aad62]/5 border-l-4 border-[#8aad62]/30 p-4 italic text-base">
               "Ingredientes vivos, activos que sí funcionan y la tranquilidad de saber exactamente qué estás absorbiendo."
             </p>
          </div>

          <p className="font-serif text-2xl text-[#303030] pt-4">
            Fue ahí cuando comprendí que la belleza no es un lujo que se compra... 
            <span className="block text-[#8aad62] font-bold mt-2 text-3xl md:text-4xl">Es un poder que se recupera.</span>
          </p>

          <p className="pt-6 border-t border-gray-100">
            Por eso decidí juntar todas mis notas, mis pruebas y mis aciertos para crear algo diferente para nosotras. Sin secretos y con total libertad.
          </p>
        </div>
      </div>
    </section>
  );
}
