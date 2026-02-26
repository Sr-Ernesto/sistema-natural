"use client";

import { motion } from "motion/react";

export function ClosingRitual() {
  return (
    <section className="py-4.5 px-3.5 pb-6">
      <div className="max-w-[540px] mx-auto text-center relative overflow-hidden">
        {/* Twinkling Stars */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[0, 0.8, 1.6, 2.3, 3.1].map((delay, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ 
                opacity: [0, 1, 0.4, 0], 
                scale: [0.4, 1, 0.9, 0.4] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: delay,
                ease: "easeInOut"
              }}
              className="absolute text-[#f7c948] text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
              style={{
                top: ["10%", "25%", "55%", "70%", "40%"][i],
                left: ["18%", "auto", "10%", "auto", "50%"][i],
                right: ["auto", "15%", "auto", "20%", "auto"][i],
              }}
            >
              ✧
            </motion.span>
          ))}
        </div>

        <p className="relative font-serif text-[15px] leading-[1.5] text-[#222] z-20 italic">
          <span>
            ¿Y si tu <strong>rutina de belleza</strong> dejara de ser <br />
            una amenaza para convertirse en <strong>tu mayor<br /> acto de amor propio?</strong>
          </span>
        </p>
      </div>
    </section>
  );
}
