import Image from "next/image";

export function StudentReviews() {
  const reviews = [
    {
      photo: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_imagenes_1.png?v=1766414379",
      avatar: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_foto_perfil_1.png?v=1766414364",
      name: "Belén R.",
      country: "Colombia",
      quote: "“Gasté una fortuna en dermatólogos y nada... Con este sistema entendí qué me hacía daño y en 4 días el rojo se fue. Mi piel respira! 💛”"
    },
    {
      photo: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_imagenes_2.png?v=1766414383",
      avatar: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_foto_perfil_2.png?v=1766414365",
      name: "Lucía F.",
      country: "Argentina",
      quote: "“Me sentía mal usando tóxicos mientras comía sano. Estas guías me dieron el control, ahora todo es coherente. Paz mental total.💫”"
    },
    {
      photo: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_imagenes_3.png?v=1766414383",
      avatar: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_foto_perfil_3.png?v=1766414366",
      name: "Teresa G.",
      country: "México",
      quote: "“No sé nada de química y me daba miedo arruinar todo. Pero es tan claro que logré texturas de boutique en mi cocina. Mis amigas no me creen que lo hice yo sola! 😍”"
    },
    {
      photo: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_imagenes_4.png?v=1766414382",
      avatar: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/resenas_foto_perfil_4.png?v=1766414366",
      name: "Alejandra S.",
      country: "USA",
      quote: "“La comunidad me salvó! Cada vez que me trababa con una fórmula, me respondían al toque🙌 Ese apoyo vale más que el libro.”"
    }
  ];

  return (
    <section className="py-8 md:py-10 px-0.5 text-center">
      <div className="max-w-[980px] mx-auto px-2.5">
        <h2 className="font-serif text-[clamp(18px,5.2vw,28px)] leading-[1.15] text-black/80">
          <span className="block">Lo que dicen nuestras</span>
          <span className="block">alumnas</span>
        </h2>
        <div className="my-2 md:my-3 text-[#eaba35] tracking-[2px] text-xs leading-none select-none">
          ★★★★★
        </div>

        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scrollbar-none px-1 py-2 pb-4">
          {reviews.map((rev, i) => (
            <article key={i} className="shrink-0 w-[clamp(290px,82vw,340px)] md:w-[360px] snap-start rounded-2xl bg-white shadow-[0_10px_14px_rgba(0,0,0,0.14)] overflow-hidden hover:shadow-[0_12px_16px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 transition-all">
              <div className="relative h-[200px] md:h-[210px]">
                <Image src={rev.photo} alt={`Reseña ${i + 1}`} width={1000} height={700} className="w-full h-full object-cover block" />
                <div className="absolute left-1/2 -bottom-[22px] md:-bottom-[24px] -translate-x-1/2 w-13.5 h-13.5 md:w-14.5 md:h-14.5 rounded-full bg-white p-1 shadow-[0_8px_12px_rgba(0,0,0,0.14)]">
                  <Image src={rev.avatar} alt={rev.name} width={200} height={200} className="w-full h-full rounded-full object-cover block" />
                </div>
              </div>
              <div className="pt-[30px] md:pt-8 p-4 text-left">
                <div className="text-[#eaba35] tracking-[2px] text-[11px] leading-none mb-2.5 select-none">★★★★★</div>
                <div className="font-sans font-bold text-sm text-black/70 mb-2">
                  <span>{rev.name}</span>
                  <span className="mx-2">–</span>
                  <span>{rev.country}</span>
                </div>
                <p className="font-sans text-[13px] leading-[1.55] text-black/55 italic">
                  {rev.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
