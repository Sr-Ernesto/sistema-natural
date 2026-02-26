import Image from "next/image";

export function RegalosSection() {
  const gifts = [
    {
      img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_120702_b5c55f8c-2b96-42e5-8575-1d9f87b028dd_2.webp?v=1769698958",
      label: "REGALO 1",
      desc: "Accedes a nuestra <strong>Comunidad Privada</strong> para avanzar junto a otras mujeres como tu."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_144618_5f5e6eb5-5a31-4ff4-acdd-fa4fe2b52d41_1.webp?v=1769699665",
      label: "REGALO 2",
      desc: "Te guiamos a convertir tu <strong>pasión</strong> en un <strong>emprendimiento rentable</strong>."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_121719_8238142c-6b36-4571-8d9c-836ef03db15f_1.webp?v=1769698958",
      label: "REGALO 3",
      desc: "Recibes gratis todas las <strong>actualizaciones</strong> que sumemos este año."
    }
  ];

  return (
    <section className="py-3 md:py-3.5 px-3.5 md:px-4.5 text-[#2b2b2b]">
      <div className="max-w-[980px] mx-auto">
        <header className="text-center py-1.5 md:pb-5.5 mb-4.5">
          <h2 className="font-serif font-bold text-[clamp(22px,6vw,34px)] leading-[1.15] text-[#222] tracking-[0.2px]">
            Y si te sumas hoy, te llevas estos Regalos🎁:
          </h2>
        </header>

        <div className="flex gap-4.5 md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-none px-0.5 py-0.5 pb-2.5">
          {gifts.map((gift, i) => (
            <article key={i} className="shrink-0 w-[84%] max-w-[84%] md:w-full md:max-w-none snap-start mb-3.5 md:mb-0">
              <div className="relative rounded-2xl overflow-hidden bg-white/45 p-3.5">
                <span className="absolute left-3 bottom-3 z-10 inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-white/92 shadow-[0_8px_18px_rgba(0,0,0,0.14)] font-sans font-bold text-xs tracking-[0.12em] uppercase text-[#222] leading-none pointer-events-none">
                  {gift.label}
                </span>
                <Image 
                  src={gift.img} 
                  alt={gift.label} 
                  width={900} 
                  height={900} 
                  loading="lazy"
                  className="w-[86%] md:w-[92%] h-auto block mx-auto aspect-square object-cover rounded-xl"
                />
              </div>
              <p 
                className="mt-2.5 mx-0.5 font-serif text-[clamp(14px,3.6vw,16px)] leading-[1.5] text-[#6b6b6b] tracking-[0.1px] text-pretty"
                dangerouslySetInnerHTML={{ __html: gift.desc }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
