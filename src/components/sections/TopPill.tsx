"use client";

import { useGeoLocation } from "@/hooks/useGeoLocation";
import { motion } from "motion/react";

export function TopPill() {
  const { geo } = useGeoLocation();

  return (
    <section className="w-full bg-[#fdf8f0] border-b border-[#8aad62]/10 py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
        {/* Left: Privilege Insight (Psychological Hack 1) */}
        <div className="flex items-center gap-2">
          <span className="bg-[#8aad62] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">Reporte Privado</span>
          <p className="font-sans text-[11px] md:text-xs font-bold text-[#303030] uppercase tracking-wide">
            Lo que las marcas de lujo no quieren que sepas sobre el ahorro en casa
          </p>
        </div>

        {/* Right: Authentic Live Status (Psychological Hack 2) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/50 px-2.5 py-1 rounded-full border border-[#8aad62]/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8aad62] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8aad62]"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-bold text-[#4a4a4a] whitespace-nowrap">
              Elena está en línea <span className="text-[#8aad62]/60 ml-1 opacity-50">•</span> <span className="ml-1 text-[9px] uppercase opacity-70">Última receta subida hoy en {geo.city || "tu ciudad"}</span>
            </span>
          </div>
          <span className="hidden lg:inline text-[10px] font-medium text-black/30 tracking-tight uppercase">
            8,555 alumnas inscritas
          </span>
        </div>
      </div>
    </section>
  );
}
