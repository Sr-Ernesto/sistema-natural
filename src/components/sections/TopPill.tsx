"use client";

export function TopPill() {

  return (
    <section className="w-full bg-[#fdf8f0] border-b border-[#8aad62]/10 py-2 px-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Social proof compact */}
        <div className="flex items-center gap-1.5">
          <span className="bg-[#8aad62] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter hidden md:inline">Reporte Privado</span>
          <p className="font-sans text-[10px] md:text-xs font-bold text-[#303030] uppercase tracking-wide">
            ✅ 8,555 alumnas ya transformaron su rutina
          </p>
        </div>

        {/* Right: Elena status - compact */}
        <div className="flex items-center gap-1.5 bg-white/50 px-2 py-0.5 rounded-full border border-[#8aad62]/20 shadow-sm shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8aad62] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8aad62]"></span>
          </span>
          <span className="text-[9px] md:text-[11px] font-bold text-[#4a4a4a] whitespace-nowrap">
            Elena en línea
          </span>
        </div>
      </div>
    </section>
  );
}
