"use client";

import { useGeoLocation } from "@/hooks/useGeoLocation";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function HeroGeoAlert() {
  const { geo, loading } = useGeoLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="min-h-[40px] flex items-center justify-center mb-4">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 bg-[#f6e5ff] border border-[#d6bdf5] px-4 py-1.5 rounded-full shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <p className="text-[10px] md:text-xs font-bold text-[#7b4dd6] uppercase tracking-wider">
              🔥 <span className="animate-pulse">Tendencia:</span> 14 mujeres de {geo.city ? geo.city : geo.country} se unieron hoy
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
