"use client";

import { motion } from "motion/react";
import { useCurrency } from "@/hooks/useCurrency";

export function CostOfInaction() {
  const { format } = useCurrency();

  return (
    <section className="py-20 px-6 bg-[#1a1a1a] text-[#fdf8f0] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
            Mañana despertarás y el espejo<br />
            <span className="text-[#8aad62]">te hará la misma pregunta...</span>
          </h2>
          <div className="h-px w-20 bg-[#8aad62]/40 mb-8" />
        </header>

        <div className="space-y-10 font-sans text-lg md:text-xl leading-relaxed text-[#fdf8f0]/80">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-6 border-l border-[#8aad62]/20"
          >
            Si decides no dar este paso hoy, nada "malo" va a pasar de inmediato. Mañana seguirás aplicando esos productos con etiquetas indescifrables. Seguirás confiando tu piel a marcas que priorizan sus costos sobre tu salud.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-6 border-l border-[#8aad62]/20 text-[#fdf8f0]"
          >
            <strong>Pero el tiempo no perdona.</strong> Seguirás acumulando disruptores endocrinos en tu organismo, ignorando por qué tu piel se siente cansada o por qué aparecen esas manchas que intentas tapar con más químicos. 
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#262626] p-8 rounded-3xl border border-white/5"
          >
            <p className="italic mb-6">
              "El costo real de no actuar no es lo que cuesta esta guía ({format(9)})... es el riesgo de mirar atrás en un año y darte cuenta de que pudiste haber sanado tu piel y tu soberanía, pero elegiste seguir siendo rehén por miedo a intentar algo diferente."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8aad62]/20 flex items-center justify-center text-xl">🌿</div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#8aad62]">Tu salud no es negociable</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center pt-8 font-serif text-2xl"
          >
            ¿Realmente quieres seguir posponiendo <br />
            <span className="italic underline decoration-[#8aad62]/50 underline-offset-8">tu propia sanación?</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
