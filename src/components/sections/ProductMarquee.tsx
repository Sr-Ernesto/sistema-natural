"use client";

export function ProductMarquee() {
  const text = "Máscaras de pestañas • Delineadores • Bases • Correctores • Sombras • Polvos • Rubores • Bálsamos • Cremas •";
  
  return (
    <div className="w-full overflow-hidden py-1.5 md:py-1">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] md:animate-[marquee_44s_linear_infinite] will-change-transform">
        <div className="flex whitespace-nowrap">
          <span className="font-serif text-[13.5px] md:text-[10px] tracking-[0.2px] md:tracking-[0.15px] leading-[1.2]">
            {text} {text} {text} {text}
          </span>
        </div>
        <div className="flex whitespace-nowrap">
          <span className="font-serif text-[13.5px] md:text-[10px] tracking-[0.2px] md:tracking-[0.15px] leading-[1.2]">
            {text} {text} {text} {text}
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
