"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
}

export function GlassContainer({ children, className }: GlassContainerProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/30 border border-white/20 shadow-xl rounded-2xl p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
