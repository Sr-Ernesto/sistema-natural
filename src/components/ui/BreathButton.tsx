"use client";

import { motion } from "motion/react";
import { ReactNode, useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useCurrency } from "@/hooks/useCurrency";

interface BreathButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  src?: string; // Hotmart SRC parameter (e.g., 'hero', 'offer', 'exit')
}

const VARIANTS_TEMPLATES = [
  "SÍ, QUIERO EMPEZAR HOY POR {price}",
  "QUIERO MIS RECETAS POR {price}",
  "SÍ, DAME ACCESO POR {price}"
];

export function BreathButton({ children, className, onClick, href, src }: BreathButtonProps) {
  const { price, loading } = useCurrency();
  const searchParams = useSearchParams();
  const [finalUrl, setFinalUrl] = useState(href || "");
  const [variantIndex, setVariantIndex] = useState<number | null>(null);

  useEffect(() => {
    // Simple A/B testing logic using Index instead of raw string
    const savedIndex = localStorage.getItem('ab_variant_cta_index');
    if (savedIndex !== null && !isNaN(parseInt(savedIndex))) {
      setVariantIndex(parseInt(savedIndex));
    } else {
      const randomIndex = Math.floor(Math.random() * VARIANTS_TEMPLATES.length);
      localStorage.setItem('ab_variant_cta_index', randomIndex.toString());
      setVariantIndex(randomIndex);
    }
  }, []);

  // Compute the current display text based on the selected variant index and current price
  const displayText = useMemo(() => {
    if (variantIndex === null) return children;
    const template = VARIANTS_TEMPLATES[variantIndex];
    return template.replace("{price}", price);
  }, [variantIndex, price, children]);

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
    // Track GA4 event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        cta_text: displayText,
        cta_location: src || 'unknown'
      });
    }

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
        "px-8 py-4 bg-[#8aad62] text-white rounded-full font-bold shadow-lg transition-colors hover:bg-[#7a9a56] cursor-pointer inline-block text-center no-underline border-none uppercase",
        className
      )}
    >
      {displayText}
    </motion.button>
  );
}
