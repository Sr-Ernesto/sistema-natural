"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
}

export function RevealOnScroll({ children }: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
