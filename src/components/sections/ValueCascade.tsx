"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BreathButton } from "@/components/ui/BreathButton";
import { useCurrency } from "@/hooks/useCurrency";
import { DynamicDate } from "@/components/ui/DynamicDate";
import { ShieldCheck, RefreshCcw, Award } from "lucide-react";

const ITEMS = [
  { emoji: "🔎", text: "<strong>Manual de Etiquetas</strong>: Detecta el falso “natural”.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_6_1_33f3dc2c-a5e4-44f3-a07d-515c92a73a27.webp?v=1769690793", price: "$15" },
  { emoji: "📦", text: "<strong>Directorio de Proveedores</strong>: Insumos confiables por país.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_5.png?v=1766253624", price: "$12" },
  { emoji: "🌿", text: "<strong>Protocolo Piel Sana</strong>: Tu primera rutina protegida.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_1.png?v=1766253624", price: "$10" },
  { emoji: "💄", text: "<strong>Alquimia de Color</strong>: Labiales y bálsamos paso a paso.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_7.png?v=1766256355", price: "$14" },
  { emoji: "🧼", text: "<strong>Jabones de Lujo</strong>: Limpieza profunda sin químicos.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_4.png?v=1766253624", price: "$12" },
  { emoji: "🫧", text: "<strong>Guía Piel Sensible</strong>: Lo que nunca debes usar.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_4.png?v=1766687541", price: "$10" },
  { emoji: "🔆", text: "<strong>Ritual de Limpieza</strong>: Glow natural todos los días.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_5.png?v=1766687541", price: "$9" },
  { emoji: "✨", text: "<strong>Cremas de Autor</strong>: Según tu tipo de piel.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_2.png?v=1766253624", price: "$12" },
  { emoji: "🪻", text: "<strong>Brumas y Tónicos</strong>: Calma y nutrición inmediata.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/Bonus_Tienda_Sabiduria_3.png?v=1766768800", price: "$8" },
  { emoji: "💧", text: "<strong>Seguridad con Aceites</strong>: Uso profesional y seguro.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/bonus_3.png?v=1766253624", price: "$10" },
];

const BONUSES = [
  { label: "REGALO 1", text: "<strong>Comunidad Privada VIP</strong>: Soporte real en tiempo real.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_120702_b5c55f8c-2b96-42e5-8575-1d9f87b028dd_2.webp?v=1769698958", price: "$27" },
  { label: "REGALO 2", text: "<strong>Tu Marca desde Casa</strong>: Emprende y recupera tu inversión.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_144618_5f5e6eb5-5a31-4ff4-acdd-fa4fe2b52d41_1.webp?v=1769699665", price: "$19" },
  { label: "REGALO 3", text: "<strong>Actualizaciones 2026</strong>: Todo lo nuevo será tuyo gratis.", img: "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/hf_20260129_121719_8238142c-6b36-4571-8d9c-836ef03db15f_1.webp?v=1769698958", price: "$15" },
];

export function ValueCascade() {
  const { price, oldPrice, loading } = useCurrency(11.11);
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10&src=value_cascade";

  return (
    <section className="pt-20 pb-28 md:pb-20 px-4 bg-gradient-to-b from-[#f6e5ff]/20 to-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* The "Wooden Box" Container */}
        <div className="relative bg-[#fdf8f0] border-[12px] border-[#8b5e34] rounded-3xl shadow-2xl p-3 sm:p-6 md:p-12 before:absolute before:inset-0 before:border-[2px] before:border-[#5d3a1a]/20 before:rounded-[12px] before:m-[-8px]">
          {/* Box Header Decor */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#8b5e34] rounded-t-xl flex items-center justify-center shadow-lg">
             <span className="text-white font-black tracking-tighter text-sm uppercase">Caja de Sabiduría</span>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-8 text-center border-b-2 border-[#8b5e34]/10 pb-4">
                10 Recursos con Valor Individual:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ITEMS.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white/50 p-3 rounded-2xl border border-[#8b5e34]/10 shadow-sm relative overflow-hidden"
                  >
                    <div className="relative w-16 h-16 shrink-0">
                      <Image 
                        src={item.img} 
                        alt={item.text} 
                        fill 
                        loading="lazy"
                        className="object-cover rounded-xl shadow-inner" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[13px] font-semibold text-[#4a4a4a] leading-tight" dangerouslySetInnerHTML={{ __html: item.text }} />
                      <span className="text-[10px] font-black text-[#d83a3a] line-through mt-1">VALOR: {item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-serif text-2xl mb-8 text-center border-b-2 border-[#8b5e34]/10 pb-4 text-[#8aad62]">
                ¡SI TE SUMAS HOY, TODO ESTO ES GRATIS!🎁:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BONUSES.map((bonus, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 10) * 0.1, type: "spring" }}
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
                       <span className="absolute -top-2 -right-2 bg-[#d83a3a] text-white text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg line-through">
                         {bonus.price}
                       </span>
                    </div>
                    <p className="text-xs font-bold text-[#2b2b2b] leading-relaxed" dangerouslySetInnerHTML={{ __html: bonus.text }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Final Value Callout */}
          <div className="mt-12 w-full text-center bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-3 sm:p-8 md:p-12 flex flex-col items-center relative overflow-hidden group border border-[#8b5e34]/5">
             {/* Decorative element for value perceived */}
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8aad62] via-[#c5e1a5] to-[#8aad62]" />
             
             {!loading && (
               <div className="mb-8 w-full flex flex-col items-center">
                 <p className="text-black/30 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Inversión y valor</p>
                 
                 <div className="flex items-center gap-4 mb-1">
                   <p className="text-[#d83a3a] font-black text-xl md:text-2xl line-through opacity-50">{oldPrice}</p>
                   <span className="bg-[#FEF3C7] text-[#92400E] font-black text-[10px] px-2 py-0.5 rounded-full border border-[#92400E]/20">
                     OFERTA TEMPORAL
                   </span>
                 </div>
                 
                 <p className="text-[#1a1a1a] font-black text-6xl md:text-8xl tracking-tighter mb-4">
                   {price}
                 </p>
                 
                 <div className="text-[#4a4a4a] font-bold text-[13px] tracking-tight">
                   Recibes acceso vitalicio a todo el sistema hoy.
                 </div>
               </div>
             )}
             
             <BreathButton 
               href={checkoutUrl}
               src="wooden_box_offer"
               className="w-full max-w-sm bg-[#8aad62] hover:bg-[#7a9a56] py-4 rounded-xl text-lg shadow-xl relative z-10 font-black tracking-tight"
             >
               QUIERO MI PIEL SANA POR $11.11
             </BreathButton>
             
             <div className="mt-4">
                <DynamicDate />
             </div>

             {/* Growth Hack: Payments methods proof for security */}
             <div className="mt-6 flex flex-wrap justify-center gap-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-[10px] font-bold border border-black/20 px-2 py-0.5 rounded">VISA</span>
                <span className="text-[10px] font-bold border border-black/20 px-2 py-0.5 rounded">MASTERCARD</span>
                <span className="text-[10px] font-bold border border-black/20 px-2 py-0.5 rounded">PSE</span>
                <span className="text-[10px] font-bold border border-black/20 px-2 py-0.5 rounded">PAYPAL</span>
             </div>

             {/* Double Guarantee - Luxury UI */}
             <div className="mt-16 w-full pt-10 border-t border-[#8b5e34]/10 pb-20 md:pb-8">
                <h4 className="text-[#1a1a1a] font-serif text-2xl md:text-3xl mb-10 text-center flex flex-col items-center gap-3">
                  <ShieldCheck strokeWidth={1} className="w-10 h-10 text-[#8aad62]" />
                  <span>Nuestra Promesa Inquebrantable</span>
                </h4>
                
                <div className="flex flex-col gap-10 md:gap-12 w-full max-w-xl mx-auto px-1 md:px-0">
                   <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 w-full text-center md:text-left">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-[#f6e5ff]/50 border border-[#8aad62]/20 flex items-center justify-center text-[#8aad62] shadow-sm mb-1 md:mb-0 md:mt-1">
                        <RefreshCcw strokeWidth={1.5} className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col w-full">
                        <h5 className="font-semibold text-[#1a1a1a] text-lg mb-2">Satisfacción 7 días</h5>
                        <p className="text-[#666666] text-[15px] leading-relaxed block w-full">
                          Si no sientes tu piel mejor al eliminar el primer tóxico de tu rutina, te devolvemos el 100%. <span className="font-medium text-[#1a1a1a]">Sin preguntas ni letras pequeñas.</span>
                        </p>
                      </div>
                   </div>
                   
                   <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 w-full text-center md:text-left">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-[#fdf8f0] border border-[#8b5e34]/20 flex items-center justify-center text-[#8b5e34] shadow-sm mb-1 md:mb-0 md:mt-1">
                        <Award strokeWidth={1.5} className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col w-full">
                        <h5 className="font-semibold text-[#1a1a1a] text-lg mb-2">Resultado Real</h5>
                        <p className="text-[#666666] text-[15px] leading-relaxed block w-full">
                          Si en 7 días no creas tu primer producto natural, te regalamos una sesión personalizada o <span className="font-medium text-[#1a1a1a] border-b border-[#8aad62]">te pagamos $10 por tu tiempo</span>.
                        </p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex items-center justify-center gap-3 mt-4 md:mt-2 font-sans font-medium text-[11px] md:text-xs text-[#8b5e34]/70">
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
