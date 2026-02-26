"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function CreacionesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/1_1.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/2_1.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/3.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/4.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/5.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/6.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/7.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/8.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/9.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/10.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/11.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/12.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/13.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/14.webp?v=1767310762",
    "https://cdn.shopify.com/s/files/1/0669/0042/6913/files/15.webp?v=1767310762",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    if (items.length < 2) return;

    // Clone items for infinite scroll
    items.forEach(item => {
      const cloneBefore = item.cloneNode(true) as HTMLElement;
      const cloneAfter = item.cloneNode(true) as HTMLElement;
      track.prepend(cloneBefore);
      track.append(cloneAfter);
    });

    const setW = track.scrollWidth / 3;
    track.scrollLeft = setW;

    const handleScroll = () => {
      const x = track.scrollLeft;
      if (x < setW * 0.35) {
        track.scrollLeft = x + setW;
      } else if (x > setW * 1.65) {
        track.scrollLeft = x - setW;
      }
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-1.5 overflow-hidden">
      <h2 className="font-serif text-[clamp(20px,2.2vw,30px)] text-center my-2.5 md:my-3.5 leading-[1.2]">
        Estas podrían ser tus creaciones:
      </h2>
      <div 
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-1 py-1 pb-2.5 cursor-grab active:cursor-grabbing"
      >
        {images.map((src, i) => (
          <div key={i} className="shrink-0 w-[clamp(170px,38vw,260px)] snap-start">
            <Image 
              src={src} 
              alt={`Creación ${i + 1}`} 
              width={1080} 
              height={1080}
              className="w-full aspect-square rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
