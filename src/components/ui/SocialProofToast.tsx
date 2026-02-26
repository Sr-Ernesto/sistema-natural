"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SALES_DATA = [
  { name: "Ana P.", city: "Medellín", time: "hace 2 min" },
  { name: "Laura M.", city: "Bogotá", time: "hace 5 min" },
  { name: "Sofía G.", city: "CDMX", time: "hace 8 min" },
  { name: "Elena R.", city: "Madrid", time: "hace 12 min" },
  { name: "Valentina S.", city: "Santiago", time: "hace 15 min" },
  { name: "María J.", city: "Lima", time: "hace 18 min" },
  { name: "Camila V.", city: "Buenos Aires", time: "hace 22 min" },
];

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 5000);
    
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SALES_DATA.length);
        setIsVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const sale = SALES_DATA[index];

  return (
    <div className="fixed bottom-20 left-4 z-[70] md:bottom-6 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="bg-white/90 backdrop-blur-md border border-black/5 rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[280px]"
          >
            <div className="w-10 h-10 rounded-full bg-[#8aad62]/20 flex items-center justify-center text-lg">
              ✨
            </div>
            <div>
              <p className="text-xs font-bold text-[#303030]">
                {sale.name} de {sale.city}
              </p>
              <p className="text-[10px] text-black/60 font-medium">
                Se unió a la comunidad {sale.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
