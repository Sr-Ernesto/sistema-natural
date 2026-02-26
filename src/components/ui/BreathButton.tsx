"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BreathButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BreathButton({ children, className, onClick }: BreathButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={onClick}
      className={cn(
        "px-8 py-4 bg-[#8aad62] text-white rounded-full font-bold shadow-lg transition-colors hover:bg-[#7a9a56]",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
