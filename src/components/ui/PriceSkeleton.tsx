"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useEffect, useState } from "react";

export function PriceSkeleton() {
  const { price } = useCurrency(9.00);
  return (
    <div className="flex flex-col items-center justify-center mb-6">
        <div className="bg-[#8aad62] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-2 shadow-sm">
            Precio Especial de Lanzamiento
        </div>
        <div className="text-5xl font-black text-[#1a1a1a] tracking-tighter drop-shadow-sm leading-none">
            {price}
        </div>
    </div>
  );
}
