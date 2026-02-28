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
    <section className="py-6 px-3.5">
      <div className="max-w-[520px] mx-auto">
        <h2 className="font-serif text-[2.4rem] leading-[1.1] text-center text-[#111] mb-[18px]">
          Honestamente, <br/><span className="text-[#8aad62]">¿te has sentido así?</span>
        </h2>
        <ul className="flex flex-col gap-3">
          {points.map((point, i) => (
            <motion.li 
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <div className="w-full flex items-center gap-2.5 bg-[#f6e5ff] border border-black/5 rounded-[14px] p-3 text-left shadow-[0_6px_14px_rgba(0,0,0,0.06)]">
                <span className="text-[1.35rem] leading-none shrink-0 w-6.5 flex justify-center items-center">
                  {point.emoji}
                </span>
                <p className="font-sans text-base md:text-xl leading-[1.45] text-[#222]">
                  <strong>{point.text.split(': ')[0]}:</strong> {point.text.split(': ')[1]}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
