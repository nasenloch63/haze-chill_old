import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

function maskStyle(align: "left" | "center"): CSSProperties {
  const pos = align === "left" ? "left center" : "center center";
  return {
    maskImage: "url(/gallery/haze-chill-logo.png)",
    WebkitMaskImage: "url(/gallery/haze-chill-logo.png)",
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: pos,
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: pos,
  };
}

export type GradientLogoMarkProps = {
  className?: string;
  style?: CSSProperties;
  /** Navbar: left. Hero: center. */
  maskAlign?: "left" | "center";
};

export function GradientLogoMark({
  className,
  style,
  maskAlign = "left",
}: GradientLogoMarkProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-emerald-300",
        className,
      )}
      style={{ ...maskStyle(maskAlign), ...style }}
    />
  );
}
