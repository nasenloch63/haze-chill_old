"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type GradientMenuTabTriggerProps = {
  label: string;
  gradientFrom: string;
  gradientTo: string;
  Icon: LucideIcon;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Category tab: icon circle; only the **active** tab expands to show the label.
 * Hover no longer resizes pills (avoids layout thrash when scrubbing the pointer
 * across the row). Light hover = border/ring only.
 */
export const GradientMenuTabTrigger = React.forwardRef<
  HTMLButtonElement,
  GradientMenuTabTriggerProps
>(function GradientMenuTabTrigger(
  { label, gradientFrom, gradientTo, Icon, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      style={
        {
          "--gm-from": gradientFrom,
          "--gm-to": gradientTo,
        } as React.CSSProperties
      }
      className={cn(
        "group relative isolate z-0 flex h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.35)]",
        "transition-[border-color,box-shadow,background-color] duration-150 ease-out",
        "data-[state=inactive]:hover:border-emerald-400/35 data-[state=inactive]:hover:bg-white/[0.14] data-[state=inactive]:hover:shadow-[0_0_16px_rgba(16,185,129,0.12)]",
        "data-[state=active]:w-[min(100vw-2rem,280px)] data-[state=active]:min-w-[min(100vw-2rem,280px)] data-[state=active]:border-transparent",
        "data-[state=active]:shadow-[0_0_24px_rgba(139,92,246,0.22)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
        "motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {/* Gradient fill — active only */}
      <span
        className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--gm-from),var(--gm-to))] opacity-0 transition-opacity duration-200 ease-out motion-reduce:duration-0 group-data-[state=active]:opacity-100"
        aria-hidden
      />

      {/* Icon — hidden when active */}
      <span
        className="relative z-10 flex size-9 items-center justify-center transition-[transform,opacity] duration-200 ease-out motion-reduce:duration-0 group-data-[state=active]:scale-90 group-data-[state=active]:opacity-0"
        aria-hidden
      >
        <Icon
          className="size-[22px] text-violet-200/90"
          strokeWidth={1.75}
        />
      </span>

      {/* Label — visible when active */}
      <span
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-2.5 text-center font-display text-[10px] font-semibold uppercase leading-tight tracking-wide text-white transition-[opacity,transform] duration-200 ease-out motion-reduce:duration-0 sm:px-3 sm:text-xs md:text-[13px] scale-95 opacity-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100"
      >
        <span className="line-clamp-2 max-w-full">{label}</span>
      </span>
    </button>
  );
});

GradientMenuTabTrigger.displayName = "GradientMenuTabTrigger";
