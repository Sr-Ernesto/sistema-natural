"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PriceSkeleton() {
  const { price, oldPrice, loading: currencyLoading } = useCurrency(9.00);
  const { geo, loading: geoLoading } = useGeoLocation();
  const [step, setStep] = useState(0); // 0: detecting, 1: applying discount, 2: showing price

  useEffect(() => {
    if (!currencyLoading && !geoLoading) {
      const t1 = setTimeout(() => setStep(1), 1200);
      const t2 = setTimeout(() => setStep(2), 2400);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [currencyLoading, geoLoading]);

  return (
    <div className="flex flex-col gap-1 mb-4 h-[60px] justify-center">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div 
            key="detect"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-xs font-medium text-black/40 italic"
          >
            <span className="w-3 h-3 border-2 border-[#8aad62] border-t-transparent rounded-full animate-spin" />
            Detectando región: {geo.country}...
          </motion.div>
        )}
        {step === 1 && (
          <motion.div 
            key="apply"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-xs font-bold text-[#8aad62] uppercase tracking-tighter"
          >
            <span className="text-lg">🏷️</span> ¡Descuento del 70% aplicado para {geo.city || geo.country}!
          </motion.div>
        )}
        {step === 2 && (
          <motion.div 
            key="price"
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col gap-3 w-full"
          >
            <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
              <div className="flex flex-col">
                <span className="text-black/30 font-bold text-[9px] uppercase tracking-wider mb-[-2px]">Antes:</span>
                <span className="text-[#d83a3a] line-through text-lg md:text-xl font-bold opacity-60">{oldPrice}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[#8aad62] font-black text-[9px] uppercase tracking-wider mb-[-2px]">Hoy solo:</span>
                <span className="font-black text-4xl md:text-5xl text-[#1a1a1a] tracking-tighter drop-shadow-sm leading-none">
                  {price}
                </span>
              </div>
              
              <motion.div 
                initial={{ rotate: -5, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                className="bg-[#FEF3C7] text-[#92400E] font-black text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-[#92400E]/20 shadow-sm mb-0.5"
              >
                70% OFF
              </motion.div>
            </div>
            
            <div className="flex items-center gap-2 max-w-sm">
              <div className="h-px flex-1 bg-black/5" />
              <div className="flex items-center gap-1.5 bg-black text-white text-[8px] md:text-[9px] uppercase font-black px-2.5 py-1 rounded-full tracking-[0.05em] shadow-lg">
                <span className="animate-pulse text-[10px]">🎁</span> Oferta por tiempo limitado
              </div>
              <div className="h-px flex-1 bg-black/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
