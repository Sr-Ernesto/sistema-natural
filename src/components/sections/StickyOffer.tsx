"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function StickyOffer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 220);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "120%", opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed z-[60] left-4 right-4 bottom-3 md:hidden flex items-center justify-between gap-2.5 bg-white/24 backdrop-blur-2xl saturate-[120%] border border-white/28 rounded-[14px] shadow-[0_10px_28px_rgba(2,6,23,.10)] p-1.5 pb-[calc(1.5px+env(safe-area-inset-bottom,0px))] px-2.5 before:content-[''] before:absolute before:inset-0 before:rounded-inherit before:pointer-events-none before:shadow-[inset_0_1px_0_rgba(255,255,255,.5)]"
        >
          <div className="flex flex-col items-start gap-0.5 leading-[1.1] min-w-0">
            <span className="font-sans text-[clamp(11px,3.1vw,12px)] text-[#d83a3a] line-through whitespace-nowrap">
              R$ 349,00
            </span>
            <div className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="font-sans text-[clamp(16px,4.6vw,18px)] font-black text-[#0f172a]">
                R$ 104,00
              </span>
              <span className="font-sans text-xs font-black text-[#92400E] bg-[#FEF3C7] border border-[#92400E]/18 px-2 py-0.5 rounded-full leading-[1.1]">
                –70%
              </span>
            </div>
          </div>

          <a 
            href="https://pay.hotmart.com/F104652497O?checkoutMode=10"
            className="inline-flex items-center gap-2 bg-gradient-to-b from-[#8aad62] to-[#8aad62] text-white rounded-xl py-2.5 px-3.5 font-sans font-black text-[clamp(13px,3.8vw,15px)] tracking-[0.2px] shadow-[0_6px_16px_rgba(138,173,98,.35)] active:translate-y-px active:scale-95 transition-all whitespace-nowrap"
          >
            Acceder al Sistema
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
