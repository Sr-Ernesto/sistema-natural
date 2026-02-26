"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PriceSkeleton() {
  const { price, oldPrice, loading: currencyLoading } = useCurrency(11.11);
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
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#d83a3a] line-through text-lg">{oldPrice}</span>
              <span className="font-bold text-2xl text-black">{price}</span>
            </div>
            <div className="inline-block bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded w-fit mt-1">
              Oferta 70% OFF por tiempo limitado🎁
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
