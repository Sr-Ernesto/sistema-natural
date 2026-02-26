"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BreathButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function BreathButton({ children, className, onClick, href }: BreathButtonProps) {
  const content = (
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
        "px-8 py-4 bg-[#8aad62] text-white rounded-full font-bold shadow-lg transition-colors hover:bg-[#7a9a56] cursor-pointer inline-block text-center",
        className
      )}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
