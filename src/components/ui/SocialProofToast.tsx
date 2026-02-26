"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SALES_DATA = [
  { name: "Ana Pérez", city: "Medellín", time: "hace 2 min" },
  { name: "Laura Martínez", city: "Bogotá", time: "hace 5 min" },
  { name: "Sofía González", city: "CDMX", time: "hace 8 min" },
  { name: "Elena Rodríguez", city: "Madrid", time: "hace 12 min" },
  { name: "Valentina Sánchez", city: "Santiago", time: "hace 15 min" },
  { name: "María José López", city: "Lima", time: "hace 18 min" },
  { name: "Camila Vargas", city: "Buenos Aires", time: "hace 22 min" },
  { name: "Isabella Herrera", city: "Cali", time: "hace 1 min" },
  { name: "Ximena Duarte", city: "Querétaro", time: "hace 4 min" },
  { name: "Beatriz Osorio", city: "Barranquilla", time: "hace 7 min" },
];

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SALES_DATA.length);
        setIsVisible(true);
        // Dispatch event to decrease spots
        window.dispatchEvent(new CustomEvent('new_sale_detected'));
      }, 1500);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const sale = SALES_DATA[index];

  return (
    <div className="fixed bottom-24 left-4 z-[70] md:bottom-8 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: -50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-[300px]"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8aad62] to-[#c5e1a5] flex items-center justify-center text-xl shadow-inner">
              ✨
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#1a1a1a] leading-tight">
                {sale.name}
              </p>
              <p className="text-[11px] text-black/60 font-medium mt-0.5">
                Desde {sale.city}
              </p>
              <p className="text-[10px] text-[#8aad62] font-black uppercase tracking-tighter mt-1">
                Recién inscrita • {sale.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
