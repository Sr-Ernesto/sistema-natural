import { useState } from "react";
import { BreathButton } from "@/components/ui/BreathButton";

export function VideoSalesLetter() {
  const [hasPlayed, setHasPlayed] = useState(false);

  const trackVideoPlay = () => {
    if (!hasPlayed) {
      setHasPlayed(true);
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'vsl_video_play',
          vsl_version: 'elena_demo_labial'
        });
      }
      if (typeof window !== "undefined" && (window as any).posthog) {
        (window as any).posthog.capture('vsl_played');
      }
    }
  };

  return (
    <section id="vsl-section" className="pt-0 pb-8 md:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Bunny.net Video Container - Vertical (9:16) - Optimizado para ATF */}
        <div className="relative w-full max-w-[260px] md:max-w-[340px] mx-auto group">
          {/* Glassmorphism Background Decor */}
          <div className="absolute -inset-6 bg-[#8aad62]/10 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border-[6px] border-white z-10 group-hover:scale-[1.02] transition-transform duration-500">
            {!hasPlayed && (
              <div 
                onClick={trackVideoPlay}
                className="absolute inset-0 z-20 cursor-pointer bg-transparent"
              />
            )}
            <iframe 
              src="https://iframe.mediadelivery.net/embed/550916/ad84b508-297f-4940-bfa5-b408857a2b98?autoplay=false&loop=false&muted=false&preload=true&responsive=true" 
              loading="lazy" 
              style={{ border: 0, position: "absolute", top: 0, height: "100%", width: "100%" }} 
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
              allowFullScreen={true}
            ></iframe>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-black text-white text-[9px] md:text-[11px] font-black px-4 py-2 rounded-full shadow-2xl z-20 uppercase tracking-widest animate-bounce-slow">
            ✨ Elena en Acción
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6">
          <BreathButton 
            href="https://pay.hotmart.com/F104652497O?checkoutMode=10&src=vsl_top"
            className="w-full max-w-[320px] bg-[#8aad62] hover:bg-[#7a9a56] py-5 rounded-2xl text-lg font-black shadow-[0_20px_40px_-10px_rgba(138,173,98,0.5)] transform transition-all hover:scale-105 active:scale-95"
          >
            SÍ, QUIERO EMPEZAR AHORA
          </BreathButton>

          <div className="max-w-[320px] md:max-w-md mx-auto">
            <p className="font-serif italic text-sm md:text-base text-[#4a4a4a] leading-relaxed opacity-80">
              &quot;Si yo pude hacerlo empezando desde cero, tú también puedes lograr resultados profesionales hoy mismo.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
