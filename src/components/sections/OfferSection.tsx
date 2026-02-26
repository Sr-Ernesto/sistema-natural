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
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Mockup Image */}
        <div className="w-full max-w-[500px] mx-auto">
          <Image 
            src="https://sabidurianatural.com/cdn/shop/files/PortadasEbooks_1.jpg?v=1769313111&width=1445"
            alt="Alquimia Soberana Mockup"
            width={1000}
            height={1000}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* Right Side: Price and Urgency */}
        <div className="w-full flex flex-col items-start text-left">
          <div className="flex items-center gap-1 text-[#FFB900] text-sm mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-black/60 ml-1">(771) Reseñas</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-[#303030] leading-tight mb-4">
            Accede al Sistema que ya Transformó la Piel, la Belleza y el Negocio Consciente de más de 8.555 mujeres
          </h2>

          <PriceSkeleton />

          {/* Urgency Box */}
          <div className="w-full bg-[#f6e5ff] border-2 border-[#d6bdf5] rounded-2xl p-5 mb-6 relative overflow-hidden shadow-lg group">
            <div className="text-center">
              <p className="text-[#7b4dd6] font-bold text-[10px] tracking-widest uppercase mb-2">✨ OFERTA EXCLUSIVA ✨</p>
              
              {/* FOMO Spots Bar */}
              <div className="mb-4">
                 <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[10px] font-black text-[#2f2f2f] uppercase tracking-tighter">Cupos Disponibles</span>
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
                    ¡Atención! {spots} personas están viendo esta oferta ahora mismo
                 </p>
              </div>

              <h3 className="text-[#2f2f2f] font-extrabold text-xl leading-tight uppercase">Solo por hoy,</h3>
              <p className="text-[#2f2f2f] font-extrabold text-sm mb-4">PAGAS 1 Y TE LLEVAS TODO ESTO:</p>
              
              <ul className="text-left space-y-2 mb-6">
                {[
                  "Sistema Sabiduría Natural: eBook principal + 10 recursos digitales de apoyo",
                  "Regalo 1: Comunidad Privada de WhatsApp",
                  "Regalo 2: \"Tu Marca desde Casa\" ebook",
                  "Regalo 3: Actualizaciones gratuitas",
                  "Acceso vitalicio."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-semibold text-[#4a4a4a]">
                    <span className="w-4 h-4 rounded-full border border-[#16a34a] text-[#16a34a] flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-[#2f2f2f] font-extrabold text-[10px] uppercase mb-3">⏳ ASEGURA TU LUGAR Y ACCEDE ANTES DE QUE ESTA OFERTA EXPIRE:</p>
              
              <div className="flex items-center justify-center gap-2 font-black text-[#7b4dd6]">
                <div className="flex flex-col">
                  <span className="text-4xl leading-none">{minutes.toString().padStart(2, '0')}</span>
                  <span className="text-[8px] uppercase">Min</span>
                </div>
                <span className="text-2xl -mt-4">:</span>
                <div className="flex flex-col">
                  <span className="text-4xl leading-none">{seconds.toString().padStart(2, '0')}</span>
                  <span className="text-[8px] uppercase">Seg</span>
                </div>
              </div>
            </div>
          </div>

          <BreathButton href={checkoutUrl} src="main_offer_section">
            ¡Quiero Acceder Ahora!
          </BreathButton>
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
