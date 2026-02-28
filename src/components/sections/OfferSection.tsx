"use client";

import Image from "next/image";
import { BreathButton } from "@/components/ui/BreathButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DynamicDate } from "@/components/ui/DynamicDate";
import { PriceSkeleton } from "@/components/ui/PriceSkeleton";

export function OfferSection() {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(43);
  const [spots, setSpots] = useState(17);
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    const handleNewSale = () => {
      setSpots(prev => Math.max(3, prev - 1));
    };

    window.addEventListener('new_sale_detected', handleNewSale);

    return () => {
      clearInterval(timer);
      window.removeEventListener('new_sale_detected', handleNewSale);
    };
  }, [minutes, seconds]);

  return (
    <section id="offer-trigger" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-1 text-[#FFB900] text-sm mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="text-black/60 ml-1">(771) Reseñas Reales</span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-[#303030] leading-tight mb-8 max-w-2xl">
          Toma las riendas: Crea tu propio kit de belleza desde cero. Sin químicos raros, sin precios absurdos y con la tranquilidad de que lo hiciste tú.
        </h2>

        {/* Product Mockup - Centered and Modern */}
        <div className="w-full max-w-[580px] mb-10 group relative">
          <div className="absolute inset-0 bg-[#8aad62]/10 blur-3xl rounded-full scale-75 opacity-50 group-hover:opacity-80 transition-opacity" />
          <Image 
            src="/images/ebooks_hero.webp"
            alt="Alquimia Soberana Mockup"
            width={800}
            height={800}
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] relative z-10 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Price and Action Section */}
        <div className="w-full max-w-md flex flex-col items-center">
          <PriceSkeleton />

          {/* Urgency Box */}
          <div className="w-full bg-[#f6e5ff] border-2 border-[#d6bdf5] rounded-2xl p-5 mb-6 relative overflow-hidden shadow-lg group">
            <div className="text-center">
              <p className="text-[#7b4dd6] font-bold text-[10px] tracking-widest uppercase mb-2">✨ TU RECETA DE BELLEZA EN CASA ✨</p>
              
              {/* FOMO Spots Bar */}
              <div className="mb-4">
                 <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[10px] font-black text-[#2f2f2f] uppercase tracking-tighter">Últimos accesos disponibles</span>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={spots}
                        initial={{ scale: 1.5, color: "#16a34a" }}
                        animate={{ scale: 1, color: "#7b4dd6" }}
                        className="text-lg font-black"
                      >
                        {spots}
                      </motion.span>
                    </AnimatePresence>
                 </div>
                 <div className="h-2.5 w-full bg-white/50 rounded-full overflow-hidden border border-[#d6bdf5]/50">
                    <motion.div 
                      initial={{ width: "100%" }}
                      animate={{ width: `${(spots / 20) * 100}%` }}
                      className="h-full bg-gradient-to-r from-[#7b4dd6] via-[#9d72f3] to-[#7b4dd6] relative overflow-hidden"
                    >
                       <motion.div 
                         animate={{ x: ["-100%", "100%"] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                       />
                    </motion.div>
                 </div>
                 <p className="text-[9px] text-[#7b4dd6] font-bold mt-1.5 italic animate-pulse">
                    Honestamente, ¡no esperaba que tantas personas se unieran hoy! 
                 </p>
              </div>

              <h3 className="text-[#2f2f2f] font-extrabold text-xl leading-tight uppercase">Mira, lo entiendo perfectamente...</h3>
              <p className="text-[#2f2f2f] font-extrabold text-sm mb-4 italic text-[#d83a3a]">Por eso he preparado este kit completo para que hoy mismo empieces a notar el cambio</p>
              
              <ul className="text-left space-y-2 mb-6">
                {[
                  "Mi guía personal paso a paso con las recetas exactas que yo misma uso.",
                  "El truco para que tus productos te cuesten una fracción de lo que pagas hoy.",
                  "Cómo dejar de ser esclava de las etiquetas brillantes y los nombres caros.",
                  "Tendrás todo el material para siempre, para consultarlo cuando quieras."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-semibold text-[#4a4a4a]">
                    <span className="w-4 h-4 rounded-full border border-[#16a34a] text-[#16a34a] flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-[#2f2f2f] font-extrabold text-[10px] uppercase mb-3">⏳ Para ayudarte a dar el paso hoy, si te unes antes de que el tiempo termine, te incluyo todos los extras gratis:</p>
              
              <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-xl p-2 min-w-[60px] shadow-sm relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={minutes}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-4xl font-black text-[#7b4dd6] block"
                      >
                        {minutes.toString().padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-[9px] font-bold text-[#7b4dd6]/60 uppercase mt-1.5 tracking-tighter">Minutos</span>
                </div>

                <span className="text-3xl font-black text-[#7b4dd6] mb-5 animate-pulse">:</span>

                <div className="flex flex-col items-center">
                  <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-xl p-2 min-w-[60px] shadow-sm relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={seconds}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-4xl font-black text-[#7b4dd6] block"
                      >
                        {seconds.toString().padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-[9px] font-bold text-[#7b4dd6]/60 uppercase mt-1.5 tracking-tighter">Segundos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-4">
            <BreathButton href={checkoutUrl} src="main_offer_section" className="w-full max-w-md">
              SÍ, QUIERO MI TRANSFORMACIÓN
            </BreathButton>
          </div>
          <div className="w-full flex justify-center">
            <DynamicDate />
          </div>
          
          <div className="w-full flex justify-center gap-4 mt-3 text-[10px] font-semibold text-black/50">
            <span>🔒 Compra 100% segura</span>
            <span>📧 Acceso vía mail</span>
          </div>
        </div>
      </div>
    </section>
  );
}
