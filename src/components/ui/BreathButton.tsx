"use client";

import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

interface BreathButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  src?: string; // Hotmart SRC parameter (e.g., 'hero', 'offer', 'exit')
}

export function BreathButton({ children, className, onClick, href, src }: BreathButtonProps) {
  const searchParams = useSearchParams();
  const [finalUrl, setFinalUrl] = useState(href || "");

  useEffect(() => {
    if (!href) return;

    try {
      const url = new URL(href);
      
      // 1. Forward all current UTMs and other params from the browser to Hotmart
      searchParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });

      // 2. Add Hotmart-specific 'src' parameter to identify which button was clicked
      if (src) {
        url.searchParams.set("src", src);
      }

      setFinalUrl(url.toString());
    } catch (e) {
      console.error("Error building Hotmart URL", e);
    }
  }, [href, searchParams, src]);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    if (href) {
      e.preventDefault();
      window.location.href = finalUrl;
    }
  };

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
      onClick={handleClick}
      className={cn(
        "px-8 py-4 bg-[#8aad62] text-white rounded-full font-bold shadow-lg transition-colors hover:bg-[#7a9a56] cursor-pointer inline-block text-center no-underline border-none",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
