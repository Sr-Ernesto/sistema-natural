"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const phoneNumber = "+573152860174";
  const message = "Hola Elena, tengo una duda sobre el Sistema Alquimia Soberana...";
  const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
    >
      <div className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        ¿Tienes dudas? Escríbeme
      </div>
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  );
}
