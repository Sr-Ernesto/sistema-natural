"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCurrency } from "@/hooks/useCurrency";

export function StickyOffer() {
  const [show, setShow] = useState(false);
  const { price, oldPrice, loading } = useCurrency(11.11);
  const checkoutUrl = "https://pay.hotmart.com/F104652497O?checkoutMode=10&src=sticky_footer";

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
          className="fixed z-[60] left-0 right-0 bottom-0 flex items-center justify-between gap-2.5 bg-white/95 backdrop-blur-2xl border-t border-black/5 shadow-[0_-10px_28px_rgba(0,0,0,0.1)] p-4 px-6"
        >
          <div className="flex flex-col items-start gap-0.5 leading-[1.1] min-w-0">
            {!loading && (
              <>
                <span className="font-sans text-[clamp(11px,3.1vw,12px)] text-[#d83a3a] line-through whitespace-nowrap">
                  {oldPrice}
                </span>
                <div className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="font-sans text-[clamp(18px,5vw,22px)] font-black text-[#0f172a]">
                    {price}
                  </span>
                  <span className="hidden sm:inline-block font-sans text-xs font-black text-[#92400E] bg-[#FEF3C7] border border-[#92400E]/18 px-2 py-0.5 rounded-full leading-[1.1]">
                    –70%
                  </span>
                </div>
              </>
            )}
          </div>

          <a 
            href={checkoutUrl}
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                  event: 'cta_click',
                  cta_variant: 'QUIERO MI PIEL SANA',
                  cta_location: 'sticky_footer'
                });
              }
            }}
            className="inline-flex items-center gap-2 bg-[#8aad62] hover:bg-[#7a9a56] text-white rounded-full py-3 px-6 font-sans font-black text-[clamp(14px,4vw,16px)] tracking-[0.2px] shadow-[0_10px_20px_rgba(138,173,98,0.4)] active:scale-95 transition-all whitespace-nowrap uppercase animate-bounce-slow"
          >
            SÍ, QUIERO MI PIEL SANA
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
