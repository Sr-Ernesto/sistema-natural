"use client";

export function TopPill() {
  return (
    <section id="sn-pill-now" className="flex justify-center my-4">
      <div className="bg-[#e0f5c8] rounded-full py-3.5 px-6.5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.18)] max-w-[96vw] md:max-w-[860px]">
        <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.06em] uppercase text-[#222] leading-[1.22] whitespace-nowrap">
          Deja de ser <span className="font-extrabold underline decoration-2 underline-offset-[2.6px]"> rehén</span> de <span className="font-extrabold underline decoration-2 underline-offset-[2.6px]">etiquetas que no entiendes</span>
        </span>
        <span className="block font-sans text-xs md:text-sm font-semibold tracking-[0.06em] uppercase text-[#222] leading-[1.22] whitespace-nowrap mt-1.5">
          y <span className="font-extrabold underline decoration-2 underline-offset-[2.6px]">recupera el criterio</span> sobre tu propia belleza
        </span>
      </div>
    </section>
  );
}
