"use client";

import { useEffect, useState } from "react";

export function DynamicDate() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const formatted = now.toLocaleDateString('es-ES', options);
    setDateStr(formatted);
  }, []);

  if (!dateStr) return null;

  return (
    <p className="text-[10px] md:text-xs font-bold text-[#8aad62] mt-3 uppercase tracking-widest animate-pulse">
      ✨ Válido solo hoy, {dateStr}
    </p>
  );
}
