"use client";

import { motion } from "motion/react";

export function PainPoints() {
  const points = [
    { emoji: "🌷", text: "Estás harta de envases que dicen \"natural\" pero esconden disruptores endocrinos." },
    { emoji: "🌷", text: "Sientes la contradicción de comer saludable, mientras aplicas derivados del petróleo en tu rostro." },
    { emoji: "🌷", text: "Tienes el celular lleno de recetas de Instagram, pero te da miedo aplicarlas sin un método seguro." },
    { emoji: "🌷", text: "Te preocupa que los químicos que hoy \"tapan\" tus imperfecciones estén inflamando tus poros y acelerando el envejecimiento de tu rostro." },
    { emoji: "🌷", text: "Sientes el vacío de un trabajo sin propósito y buscas generar ingresos con algo alineado con tus valores." },
  ];

  return (
    <section className="py-6 px-3.5">
      <div className="max-w-[520px] mx-auto">
        <h2 className="font-serif text-[2.6rem] leading-[1.1] text-center text-[#111] mb-[18px]">
          ¿Te pasa que...?
        </h2>
        <ul className="flex flex-col gap-3">
          {points.map((point, i) => (
            <motion.li 
              key={i}
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <button className="w-full flex items-center gap-2.5 bg-[#f6e5ff] border border-black/5 rounded-[14px] p-3 text-left shadow-[0_6px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_26px_rgba(0,0,0,0.10)] transition-shadow">
                <span className="text-[1.35rem] leading-none shrink-0 w-6.5 flex justify-center items-center">
                  {point.emoji}
                </span>
                <p className="font-sans text-base md:text-xl leading-[1.45] text-[#222]">
                  <strong>{point.text.split(' ')[0]} {point.text.split(' ')[1]}</strong> {point.text.split(' ').slice(2).join(' ')}
                </p>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
