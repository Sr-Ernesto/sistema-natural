"use client";

export function TopPill() {
  return (
    <section className="flex justify-center pt-8 pb-4 px-4">
      <div className="bg-[#e0f5c8] rounded-[2rem] py-3 px-6 md:py-4 md:px-10 text-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] max-w-fit border border-[#8aad62]/10">
        <p className="font-sans text-[11px] md:text-sm font-bold tracking-[0.06em] uppercase text-[#222] leading-relaxed flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
          <span>
            Deja de ser <span className="underline decoration-2 underline-offset-4 decoration-[#8aad62]/40">rehén</span> de etiquetas que no entiendes
          </span>
          <span className="hidden md:inline text-[#8aad62]/40">•</span>
          <span>
            y <span className="underline decoration-2 underline-offset-4 decoration-[#8aad62]/40">recupera el criterio</span> sobre tu propia belleza
          </span>
        </p>
      </div>
    </section>
  );
}
