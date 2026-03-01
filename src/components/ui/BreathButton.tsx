"use client";

import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BreathButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  src?: string;
}

export function BreathButton({ children, className, onClick, href, src }: BreathButtonProps) {
  const [finalUrl, setFinalUrl] = useState(href || "");

  useEffect(() => {
    if (!href) return;
    try {
      const url = new URL(href);
      // Evitar useSearchParams() para no obligar al Suspense
      const params = new URLSearchParams(window.location.search);
      params.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      if (src) {
        url.searchParams.set("src", src);
      }
      setFinalUrl(url.toString());
    } catch (e) {
      console.error("Error Hotmart URL", e);
    }
  }, [href, src]);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    if (href) {
      e.preventDefault();
      window.location.href = finalUrl;
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={handleClick}
      className={cn(
        "px-10 py-5 bg-[#8aad62] text-white rounded-full font-black shadow-[0_15px_35px_rgba(138,173,98,0.4)] transition-all hover:bg-[#7a9a56] cursor-pointer inline-block text-center no-underline border-none uppercase tracking-tight",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
