"use client";

import { motion } from "motion/react";

export function PainPoints() {
  const points = [
    { emoji: "💸", text: "El castigo al bolsillo: Pagas una fortuna por algo que podrías hacer tú por una fracción del costo." },
    { emoji: "🧪", text: "La sopa de letras: Te agota no entender las etiquetas y no saber qué le pones a tu cuerpo." },
    { emoji: "⛓️", text: "La trampa de depender: Nos acostumbramos a ser consumidoras y perdimos la libertad de saber hacer las cosas." },
    { emoji: "🌷", text: "Mira lo que me pasó: Gasté una fortuna en algo 'de marca' y cuando vi la etiqueta eran puros químicos raros." },
  ];

  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-[400px] mx-auto">
        <h2 className="font-serif text-[26px] leading-tight text-center text-[#303030] mb-6">
          Honestamente, <br/><span className="text-[#8aad62]">¿te has sentido así?</span>
        </h2>
        
        <div className="space-y-2">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#fdf8f0] border border-[#8aad62]/10"
            >
              <span className="text-lg shrink-0 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm">
                {point.emoji}
              </span>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[13px] text-[#303030] leading-none mb-1">
                  {point.text.split(': ')[0]}
                </span>
                <p className="font-sans text-[12px] leading-tight text-[#4a4a4a]">
                  {point.text.split(': ')[1]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
