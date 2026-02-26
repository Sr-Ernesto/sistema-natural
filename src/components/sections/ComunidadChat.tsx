"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function ComunidadChat() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const captures = [
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/1.webp?v=1769567770",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/2.webp?v=1769567770",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/3_db5ff9e4-0c7b-45f2-b4d0-72836a0093e7.webp?v=1769567770",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/4_2bd9e21a-43a4-4af3-8cac-c09b042eef2d.webp?v=1769567771",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/5_8163d9f9-524c-475b-82de-a26f599a94ee.webp?v=1769567770",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/6_85119988-2026-4eb0-ae93-4a3f828bf9c3.webp?v=1769567770",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/7_91460018-f3aa-4b4c-8e2f-776c89bb59d4.webp?v=1769567770",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/8_937fa9e4-56a6-48c1-b10c-4c318b8fe6ca.webp?v=1769567770",
  ];

  const handleScroll = () => {
    if (!trackRef.current) return;
    const x = trackRef.current.scrollLeft;
    const width = trackRef.current.clientWidth - 28; // Adjust for gap/stage
    const idx = Math.round(x / width);
    setActiveIdx(Math.max(0, Math.min(captures.length - 1, idx)));
  };

  const scrollToIndex = (idx: number) => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth - 28;
    trackRef.current.scrollTo({ left: width * idx, behavior: 'smooth' });
    setActiveIdx(idx);
  };

  return (
    <section className="py-3 px-3.5 text-[#2b2b2b]">
      <div className="max-w-[980px] mx-auto">
        <header className="text-center py-1.5 md:pb-3.5 mb-3.5">
          <h2 className="font-serif font-bold text-[clamp(22px,6vw,34px)] leading-[1.15] tracking-[0.2px] mb-2">
            Así se ve nuestra Comunidad por dentro:
          </h2>
          <p className="font-sans font-medium text-[clamp(14px,3.6vw,16.5px)] leading-[1.45] text-[#3a3a3a] max-w-[52ch] mx-auto text-pretty">
            consultas reales, tips compartidos y apoyo constante.
          </p>
        </header>

        <div className="max-w-[420px] md:max-w-[520px] mx-auto px-3.5">
          <div className="relative">
            <div 
              ref={trackRef}
              onScroll={handleScroll}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none px-1 py-2 pb-2.5"
            >
              {captures.map((src, i) => (
                <article key={i} className="shrink-0 w-full snap-center">
                  <div className="rounded-[18px] overflow-hidden bg-gradient-to-br from-white/18 to-white/8 backdrop-blur-[14px] saturate-[120%] shadow-[0_14px_34px_rgba(0,0,0,0.12)] relative p-2.5 border-t border-white/65">
                    <Image 
                      src={src} 
                      alt={`Captura ${i + 1}`} 
                      width={1080} 
                      height={1920} 
                      className="w-full h-auto block object-contain rounded-2xl"
                    />
                  </div>
                </article>
              ))}
            </div>

            <button 
              onClick={() => scrollToIndex(activeIdx - 1)}
              className="absolute top-1/2 -left-0.5 md:-left-1 -translate-y-1/2 w-10 h-10 md:w-10.5 md:h-10.5 rounded-full bg-white/90 shadow-[0_10px_22px_rgba(0,0,0,0.12)] grid place-items-center cursor-pointer z-10 text-[26px] md:text-[28px] text-[#8aad62] font-black"
              disabled={activeIdx === 0}
            >
              ‹
            </button>
            <button 
              onClick={() => scrollToIndex(activeIdx + 1)}
              className="absolute top-1/2 -right-0.5 md:-right-1 -translate-y-1/2 w-10 h-10 md:w-10.5 md:h-10.5 rounded-full bg-white/90 shadow-[0_10px_22px_rgba(0,0,0,0.12)] grid place-items-center cursor-pointer z-10 text-[26px] md:text-[28px] text-[#8aad62] font-black"
              disabled={activeIdx === captures.length - 1}
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-1.5 py-0.5">
            {captures.map((_, i) => (
              <button 
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all ${i === activeIdx ? 'w-5.5 bg-[#8aad62]/85' : 'w-2 bg-[#2b2b2b]/25'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
