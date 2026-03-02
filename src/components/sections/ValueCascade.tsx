"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BreathButton } from "@/components/ui/BreathButton";
import { useCurrency } from "@/hooks/useCurrency";
import { DynamicDate } from "@/components/ui/DynamicDate";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { ShieldCheck, RefreshCcw, Award } from "lucide-react";

const ITEMS = [
  { emoji: "🔎", text: "<strong>El Detector de Mentiras</strong>: Lee etiquetas como experta y deja de pagar por químicos disfrazados.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_6_1_33f3dc2c-a5e4-44f3-a07d-515c92a73a27.webp?v=1769690793", baseUsd: 15, vip: false },
  { emoji: "📦", text: "<strong>El Mapa del Tesoro</strong>: Mi lista privada de proveedores secretos para comprar a precio de fábrica.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_5.png?v=1766253624", baseUsd: 12, vip: true },
  { emoji: "🌿", text: "<strong>Protocolo Piel de Seda</strong>: Pasos exactos para desintoxicar tu rostro en solo 48 horas.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_1.png?v=1766253624", baseUsd: 10, vip: true },
  { emoji: "💄", text: "<strong>Seducción Natural</strong>: Labiales y bálsamos irresistibles que cuidan tu salud y resaltan tu belleza.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_7.png?v=1766256355", baseUsd: 14, vip: false },
  { emoji: "🧼", text: "<strong>Jabones de Autor</strong>: Crea piezas de lujo que parecen de boutique parisina en tu propia cocina.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_4.png?v=1766253624", baseUsd: 12, vip: false },
  { emoji: "🫧", text: "<strong>El Escudo Invisible</strong>: Guía para pieles sensibles. Identifica el 'veneno' y aprende a reemplazarlo.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_4.png?v=1766687541", baseUsd: 10, vip: false },
  { emoji: "🔆", text: "<strong>Tu Glow de 5 Minutos</strong>: El ritual diario para una piel radiante sin una gota de maquillaje comercial.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_5.png?v=1766687541", baseUsd: 9, vip: false },
  { emoji: "✨", text: "<strong>Fórmulas de Élite</strong>: Cremas personalizadas que humectan 10 veces más que las de farmacia.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_2.png?v=1766253624", baseUsd: 12, vip: true },
  { emoji: "🪻", text: "<strong>Gotas de Calma</strong>: El secreto de las brumas y tónicos para borrar el cansancio de tu cara.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_3.png?v=1766768800", baseUsd: 8, vip: false },
  { emoji: "💧", text: "<strong>El Código de los Aceites</strong>: Domina el uso profesional de aceites esenciales sin riesgos.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_3.png?v=1766253624", baseUsd: 10, vip: false },
];

const BONUSES = [
  { label: "EXTRA 1", text: "<strong>Ahorro Maestro</strong>: El truco para reducir tus gastos de belleza en un 80% hoy mismo.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_144618_5f5e6eb5-5a31-4ff4-acdd-fa4fe2b52d41_1.webp?v=1769699665", baseUsd: 19 },
  { label: "EXTRA 2", text: "<strong>Tu Marca Soberana</strong>: Cómo convertir tu pasión en libertad financiera desde tu casa.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_121719_8238142c-6b36-4571-8d9c-836ef03db15f_1.webp?v=1769698958", baseUsd: 15 },
];

export function ValueCascade() {
  const { price, oldPrice, format, loading } = useCurrency(9.00);
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10&src=value_cascade";

  return (
    <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-[#f6e5ff]/20 to-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#fdf8f0] border-[4px] md:border-[8px] border-[#8b5e34]/20 rounded-3xl shadow-xl p-4 sm:p-6 md:p-12">
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <h3 className="font-serif text-2xl md:text-4xl mb-6 md:mb-12 text-center text-[#303030] leading-tight px-2">
                Mis secretos mejor guardados: <br/>
                <span className="text-[#8aad62]">Todo lo que te entrego para que no falles</span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {ITEMS.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className={`flex flex-col items-center text-center p-3 rounded-2xl border shadow-sm relative overflow-hidden transition-all ${
                      item.vip 
                      ? 'bg-white border-[#f7c948]/40 ring-1 ring-[#f7c948]/20 shadow-[0_8px_20px_rgba(247,201,72,0.1)]' 
                      : 'bg-white/60 border-[#8b5e34]/10'
                    }`}
                  >
                    {item.vip && (
                      <div className="absolute top-0 right-0 bg-[#f7c948] text-white text-[7px] font-black px-2 py-0.5 uppercase tracking-tighter rounded-bl-lg">
                        VIP
                      </div>
                    )}
                    <div className="relative w-12 h-12 md:w-16 md:h-16 mb-2">
                      <Image 
                        src={item.img} 
                        alt={item.text} 
                        fill 
                        loading="lazy"
                        className="object-cover rounded-xl shadow-inner" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] md:text-[12px] font-semibold text-[#4a4a4a] leading-tight mb-2" dangerouslySetInnerHTML={{ __html: item.text }} />
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-[8px] md:text-[10px] font-black text-[#8aad62] uppercase tracking-tighter">¡INCLUIDO!</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-serif text-2xl mb-8 text-center border-b-2 border-[#8b5e34]/10 pb-4 text-[#8aad62]">
                🎁 ¡Y si te sumas hoy, te llevas estos extras de regalo!
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BONUSES.map((bonus, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex flex-col items-center text-center gap-3 bg-[#e0f5c8]/30 p-4 rounded-3xl border-2 border-[#8aad62]/20 relative"
                  >
                    <div className="relative w-full aspect-square max-w-[120px]">
                       <Image 
                         src={bonus.img} 
                         alt={bonus.label} 
                         fill 
                         loading="lazy"
                         className="object-cover rounded-2xl shadow-md border-2 border-white" 
                       />
                    </div>
                    <p className="text-xs font-bold text-[#2b2b2b] leading-relaxed" dangerouslySetInnerHTML={{ __html: bonus.text }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 w-full text-center bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 sm:p-8 md:p-12 flex flex-col items-center relative overflow-hidden group border border-[#8b5e34]/5">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8aad62] via-[#c5e1a5] to-[#8aad62]" />
             
             {!loading && (
               <div className="mb-6 md:mb-8 w-full flex flex-col items-center">
                 <p className="text-black/30 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 md:mb-4">Inversión y valor</p>
                 
                 <div className="flex items-center gap-3 md:gap-4 mb-1">
                   <p className="text-[#d83a3a] font-black text-lg md:text-2xl line-through opacity-50">{oldPrice}</p>
                   <span className="bg-[#FEF3C7] text-[#92400E] font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-full border border-[#92400E]/20">
                     OFERTA TEMPORAL
                   </span>
                 </div>
                 
                 <p className="text-[#1a1a1a] font-black text-5xl md:text-8xl tracking-tighter mb-2 md:mb-4">
                   {price}
                 </p>
                 
                 <div className="text-[#4a4a4a] font-bold text-[12px] md:text-[13px] tracking-tight text-balance">
                   Recibes acceso para siempre a todo el contenido hoy.
                 </div>
               </div>
             )}
             
             <BreathButton 
               href={checkoutUrl}
               src="wooden_box_offer"
               className="w-full max-w-sm bg-[#8aad62] hover:bg-[#7a9a56] py-4 rounded-xl text-lg shadow-xl relative z-10 font-black tracking-tight"
             >
               SÍ, QUIERO EMPEZAR HOY
             </BreathButton>
             
             <div className="mt-4">
                <DynamicDate />
             </div>

             <div className="mt-2">
                <TrustBadges />
             </div>

             <div className="flex items-center justify-center gap-3 mt-12 md:mt-16 font-sans font-medium text-[11px] md:text-xs text-[#8b5e34]/70 border-t border-[#8b5e34]/10 pt-12 w-full">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span>🔒</span> Compra 100% segura
                </span>
                <span className="text-[#8b5e34]/30">|</span>
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
