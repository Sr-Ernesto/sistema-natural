"use client";

import Image from "next/image";

export function ThreePillars() {
  const steps = [
    {
      img: "https://sabidurianatural.com/cdn/shop/files/PortadasEbooks_1.jpg?v=1769313111&width=1445",
      fase: "Fase 1:",
      name: "El Radar y la Base Sagrada",
      sub: "De consumidora engañada a experta técnica."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/fase_2.webp?v=1769541064",
      fase: "Fase 2:",
      name: "El Laboratorio del Color Profesional",
      sub: "La técnica para lograr acabados, texturas y durabilidad de alta gama."
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/fase_3.webp?v=1769541064",
      fase: "Fase 3:",
      name: "Sanación y Skincare Ritual",
      sub: "Fórmulas de tratamiento para que tu piel sane mientras la embelleces."
    }
  ];

  const resources = [
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_6_1_33f3dc2c-a5e4-44f3-a07d-515c92a73a27.webp?v=1769690793", text: "🔎 <strong>Leer etiquetas</strong> y detectar el falso “natural”." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_5.png?v=1766253624", text: "📦 <strong>Proveedores por país</strong> para insumos confiables." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_1.png?v=1766253624", text: "🌿 <strong>Rutina básica</strong> para una piel más sana y protegida." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_7.png?v=1766256355", text: "💄 <strong>Bálsamos y labiales</strong> naturales paso a paso." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_4.png?v=1766253624", text: "🧼 <strong>Jabones artesanales</strong> que limpian sin resecar." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_4.png?v=1766687541", text: "🫧 <strong>Piel sensible</strong>: qué usar y qué evitar." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_5.png?v=1766687541", text: "🔆 <strong>Limpieza facial diaria</strong> simple y efectiva." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_2.png?v=1766253624", text: "✨ <strong>Cremas naturales</strong> según tu tipo de piel." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_3.png?v=1766768800", text: "🪻 <strong>Tónicos y brumas</strong> para calmar y dar glow." },
    { img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_3.png?v=1766253624", text: "💧 <strong>Aceites esenciales</strong> y cómo usarlos con seguridad." },
  ];

  return (
    <section className="py-4.5 px-3.5 text-[#111]">
      <div className="max-w-[980px] mx-auto">
        <header className="text-center mb-10">
          <h2 className="font-serif text-[clamp(24px,6vw,40px)] leading-[1.12] tracking-[.2px]">
            Los 3 Pilares del Sistema<br />
            ALQUIMIA SOBERANA
          </h2>
        </header>

        <div className="relative mb-16 pl-0.5 max-w-[820px] mx-auto">
          <div className="absolute left-[56px] md:left-[62px] top-3.5 md:top-4 bottom-3.5 md:bottom-4 w-[1.5px] bg-[#d9d9d9] rounded-full" />
          
          {steps.map((step, i) => (
            <article key={i} className={`grid grid-cols-[112px_1fr] md:grid-cols-[124px_1fr] gap-3.5 md:gap-4.5 items-start ${i === steps.length - 1 ? '' : 'mb-4.5'}`}>
              <div className="relative z-10 w-[112px] h-[112px] md:w-[124px] md:h-[124px] bg-white rounded-[20px] shadow-[0_10px_26px_rgba(0,0,0,0.08)] p-2 grid place-items-center">
                <Image src={step.img} alt={step.fase} width={320} height={320} className="w-full h-auto rounded-[14px]" />
              </div>
              <div className="pt-0.5">
                <div className="font-sans font-bold text-sm text-[#2b2b2b] mb-0.5 md:mb-1">
                  {step.fase}
                </div>
                <div className="font-serif text-xl md:text-[22px] leading-[1.15] mb-1.5 text-[#111]">
                  {step.name}
                </div>
                <p className="font-sans font-medium text-[14.5px] leading-[1.35] text-[#7a7a7a]">
                  {step.sub}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mb-4.5">
          <h3 className="font-serif text-[clamp(22px,5.4vw,34px)] mb-3">¿Qué incluye?</h3>
          <p className="font-sans font-medium text-[#7a7a7a] leading-[1.38] text-[clamp(14.5px,3.8vw,18px)] max-w-[44ch] mx-auto text-pretty">
            <strong>10 recursos digitales</strong> que aceleran tu camino y tu conexión con lo natural.
          </p>
        </div>

        <div className="relative mt-2.5 overflow-hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none px-1 py-1.5 pb-3">
            {resources.map((res, i) => (
              <article key={i} className="shrink-0 w-[72%] md:w-[calc((100%-12px)/2)] snap-start bg-white rounded-[18px] shadow-[0_10px_26px_rgba(0,0,0,0.08)] p-2.5 text-center">
                <div className="relative rounded-[12px] overflow-hidden bg-white p-1.5">
                  <span className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-white/94 shadow-[0_8px_18px_rgba(0,0,0,0.14)] grid place-items-center font-sans font-extrabold text-[13px] text-[#111] z-10 pointer-events-none">
                    {i + 1}
                  </span>
                  <Image src={res.img} alt={`Recurso ${i + 1}`} width={900} height={900} className="w-full h-auto block object-contain max-h-[240px] rounded-[14px]" />
                </div>
                <p className="mt-2.5 font-sans font-medium text-[14.5px] leading-[1.35] text-[#7a7a7a]" dangerouslySetInnerHTML={{ __html: res.text }} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
