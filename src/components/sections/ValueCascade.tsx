"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BreathButton } from "@/components/ui/BreathButton";
import { useCurrency } from "@/hooks/useCurrency";
import { DynamicDate } from "@/components/ui/DynamicDate";

const ITEMS = [
  { emoji: "🔎", text: "Leer etiquetas y detectar el falso “natural”.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_6_1_33f3dc2c-a5e4-44f3-a07d-515c92a73a27.webp?v=1769690793" },
  { emoji: "📦", text: "Proveedores por país para insumos confiables.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_5.png?v=1766253624" },
  { emoji: "🌿", text: "Rutina básica para una piel más sana y protegida.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_1.png?v=1766253624" },
  { emoji: "💄", text: "Bálsamos y labiales naturales paso a paso.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_7.png?v=1766256355" },
  { emoji: "🧼", text: "Jabones artesanales que limpian sin resecar.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_4.png?v=1766253624" },
  { emoji: "🫧", text: "Piel sensible: qué usar y qué evitar.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_4.png?v=1766687541" },
  { emoji: "🔆", text: "Limpieza facial diaria simple y efectiva.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_5.png?v=1766687541" },
  { emoji: "✨", text: "Cremas naturales según tu tipo de piel.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_2.png?v=1766253624" },
  { emoji: "🪻", text: "Tónicos y brumas para calmar y dar glow.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_3.png?v=1766768800" },
  { emoji: "💧", text: "Aceites esenciales y cómo usarlos con seguridad.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_3.png?v=1766253624" },
];

const BONUSES = [
  { label: "REGALO 1", text: "Accedes a nuestra <strong>Comunidad Privada</strong> para avanzar junto a otras mujeres como tu.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_120702_b5c55f8c-2b96-42e5-8575-1d9f87b028dd_2.webp?v=1769698958" },
  { label: "REGALO 2", text: "Te guiamos a convertir tu <strong>pasión</strong> en un <strong>emprendimiento rentable</strong>.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_144618_5f5e6eb5-5a31-4ff4-acdd-fa4fe2b52d41_1.webp?v=1769699665" },
  { label: "REGALO 3", text: "Recibes gratis todas las <strong>actualizaciones</strong> que sumemos este año.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_121719_8238142c-6b36-4571-8d9c-836ef03db15f_1.webp?v=1769698958" },
];

export function ValueCascade() {
  const { price, oldPrice, loading } = useCurrency(11.11);
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f6e5ff]/20 to-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* The "Wooden Box" Container */}
        <div className="relative bg-[#fdf8f0] border-[12px] border-[#8b5e34] rounded-3xl shadow-2xl p-6 md:p-12 before:absolute before:inset-0 before:border-[2px] before:border-[#5d3a1a]/20 before:rounded-[12px] before:m-[-8px]">
          {/* Box Header Decor */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#8b5e34] rounded-t-xl flex items-center justify-center shadow-lg">
             <span className="text-white font-black tracking-tighter text-sm uppercase">Caja de Sabiduría</span>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-8 text-center border-b-2 border-[#8b5e34]/10 pb-4">
                10 Recursos Digitales que aceleran tu camino:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ITEMS.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white/50 p-3 rounded-2xl border border-[#8b5e34]/10 shadow-sm"
                  >
                    <div className="relative w-16 h-16 shrink-0">
                      <Image src={item.img} alt={item.text} fill className="object-cover rounded-xl" />
                    </div>
                    <p className="text-sm font-semibold text-[#4a4a4a]">
                      <span className="mr-2 text-lg">{item.emoji}</span>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-serif text-2xl mb-8 text-center border-b-2 border-[#8b5e34]/10 pb-4 text-[#8aad62]">
                Y si te sumas hoy, te llevas estos Regalos🎁:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BONUSES.map((bonus, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 10) * 0.1, type: "spring" }}
                    className="flex flex-col items-center text-center gap-3 bg-[#e0f5c8]/30 p-4 rounded-3xl border-2 border-[#8aad62]/20"
                  >
                    <div className="relative w-full aspect-square max-w-[120px]">
                       <Image src={bonus.img} alt={bonus.label} fill className="object-cover rounded-2xl shadow-md" />
                       <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                         {bonus.label}
                       </span>
                    </div>
                    <p className="text-xs font-medium text-[#2b2b2b] leading-relaxed" dangerouslySetInnerHTML={{ __html: bonus.text }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final Value Callout */}
          <div className="mt-12 text-center bg-[#8b5e34] p-6 md:p-8 rounded-2xl shadow-inner border-t-4 border-[#5d3a1a]/20 flex flex-col items-center">
             {!loading && (
               <>
                 <p className="text-white font-black text-3xl md:text-5xl italic tracking-tighter">
                   VALOR TOTAL: <span className="text-[#8aad62] line-through">{oldPrice}</span>
                 </p>
                 <p className="text-[#e0f5c8] font-bold text-xl md:text-2xl mt-2 mb-8 animate-pulse">
                   TU PRECIO HOY: {price}
                 </p>
               </>
             )}
             
             <BreathButton 
               href={checkoutUrl}
               src="wooden_box_offer"
               className="w-full max-w-sm"
             >
               ¡QUIERO ACCEDER AHORA!
             </BreathButton>
             <DynamicDate />

             <div className="flex items-center justify-center gap-3 mt-4 font-sans font-semibold text-[10px] md:text-xs text-white/70">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span>🔒</span> Compra 100% segura
                </span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span>📧</span> Acceso vía mail
                </span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
