"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function CreacionesCarousel() {
  const images = [
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/1_1.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/2_1.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/3.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/4.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/5.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/6.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/7.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/8.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/9.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/10.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/11.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/12.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/13.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/14.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/15.webp?v=1767310762",
  ];

  // Duplicar para el efecto infinito
  const extendedImages = [...images, ...images];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4 text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-[#303030] leading-tight">
          Estas podrían ser <span className="text-[#8aad62]">tus creaciones</span>
        </h2>
        <p className="font-sans text-sm text-black/40 mt-3 uppercase tracking-widest font-medium">
          Resultados reales de nuestras alumnas
        </p>
      </div>

      <div className="relative flex">
        <motion.div 
          className="flex gap-4 px-2"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 45, // Un poco más lento para que se aprecien las fotos
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {extendedImages.map((src, i) => (
            <div 
              key={i} 
              className="shrink-0 w-[180px] md:w-[280px] aspect-square rounded-[2rem] overflow-hidden shadow-lg shadow-black/5 border border-black/5"
            >
              <Image 
                src={src} 
                alt={`Creación ${i + 1}`} 
                width={800} 
                height={800}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
