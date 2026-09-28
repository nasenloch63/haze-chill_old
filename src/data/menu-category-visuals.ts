import {
  Beer,
  Candy,
  Citrus,
  Coffee,
  Droplets,
  Flame,
  GlassWater,
  IceCream,
  Leaf,
  Martini,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** One entry per `menuData` category, same order. */
export type CategoryVisual = {
  Icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
};

export const menuCategoryVisuals: CategoryVisual[] = [
  { Icon: Candy, gradientFrom: "#a855f7", gradientTo: "#ec4899" },
  { Icon: Flame, gradientFrom: "#f97316", gradientTo: "#ef4444" },
  { Icon: Leaf, gradientFrom: "#34d399", gradientTo: "#10b981" },
  { Icon: Droplets, gradientFrom: "#38bdf8", gradientTo: "#2563eb" },
  { Icon: Coffee, gradientFrom: "#78350f", gradientTo: "#d97706" },
  { Icon: Citrus, gradientFrom: "#facc15", gradientTo: "#ea580c" },
  { Icon: IceCream, gradientFrom: "#f472b6", gradientTo: "#a78bfa" },
  { Icon: Beer, gradientFrom: "#fde047", gradientTo: "#ca8a04" },
  { Icon: GlassWater, gradientFrom: "#22d3ee", gradientTo: "#6366f1" },
  { Icon: Martini, gradientFrom: "#e879f9", gradientTo: "#9333ea" },
  { Icon: Sparkles, gradientFrom: "#6ee7b7", gradientTo: "#14b8a6" },
];
