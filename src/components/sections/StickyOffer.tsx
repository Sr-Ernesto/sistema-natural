"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCurrency } from "@/hooks/useCurrency";
import { BreathButton } from "@/components/ui/BreathButton";

export function StickyOffer() {
  const [isVisible, setIsVisible] = useState(false);
  const { price } = useCurrency();
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10";

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de 400px de scroll
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[110] bg-white/95 backdrop-blur-md border-t border-[#8aad62]/20 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4 md:px-12"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-[#8aad62] uppercase tracking-tighter">Oferta Hoy:</span>
            <span className="text-2xl font-black text-[#1a1a1a] leading-none">{price}</span>
          </div>
          <BreathButton href={checkoutUrl} src="sticky_rescue" className="flex-1 max-w-[250px] py-3 text-sm px-4">
            ¡LO QUIERO YA!
          </BreathButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
