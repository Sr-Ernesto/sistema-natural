"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
      quote: "“Gracias a las guías de Elena entendí qué ingredientes eran veneno. Hoy hago mis propios bálsamos y me siento libre. Ese apoyo vale más que el libro.”"
    }
  ];

  // Duplicate for infinite scroll
  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 md:py-20 bg-[#fdf8f0]/40 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-[#303030] leading-tight">
          Lo que dicen <span className="text-[#8aad62]">nuestras alumnas</span>
        </h2>
        <div className="mt-3 text-[#eaba35] tracking-[3px] text-sm">
          ★★★★★
        </div>
      </div>

      <div className="relative flex">
        <motion.div 
          className="flex gap-6 px-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {extendedReviews.map((rev, i) => (
            <article 
              key={i} 
              className="shrink-0 w-[300px] md:w-[350px] rounded-3xl bg-white shadow-xl shadow-black/5 overflow-hidden border border-black/5"
            >
              <div className="relative h-[220px]">
                <Image 
                  src={rev.photo} 
                  alt={`Reseña ${i + 1}`} 
                  width={1000} 
                  height={700} 
                  className="w-full h-full object-cover block" 
                />
                <div className="absolute left-6 -bottom-8 w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                  <Image 
                    src={rev.avatar} 
                    alt={rev.name} 
                    width={200} 
                    height={200} 
                    className="w-full h-full rounded-full object-cover block" 
                  />
                </div>
              </div>
              <div className="pt-12 p-6 text-left">
                <div className="text-[#eaba35] tracking-[2px] text-[10px] mb-3">★★★★★</div>
                <div className="font-sans font-bold text-sm text-[#1a1a1a] mb-2 flex items-center gap-2">
                  <span>{rev.name}</span>
                  <span className="w-1 h-1 rounded-full bg-black/10" />
                  <span className="text-black/40 text-xs font-medium uppercase tracking-widest">{rev.country}</span>
                </div>
                <p className="font-sans text-[14px] leading-relaxed text-[#4a4a4a] italic">
                  {rev.quote}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
