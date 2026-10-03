import {
  Beer, Candy, Cherry, Citrus, Coffee, Droplets, Flame,
  GlassWater, IceCream, Martini, Soup, Sparkles, Ticket, Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CategoryVisual = {
  Icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
};

// Key visuals by category so additions and reordering keep the correct icons.
export const menuCategoryVisuals: Record<string, CategoryVisual> = {
  Snacks: { Icon: Candy, gradientFrom: "#a855f7", gradientTo: "#ec4899" },
  Fruchtbecher: { Icon: Cherry, gradientFrom: "#f43f5e", gradientTo: "#f97316" },
  Nachos: { Icon: Flame, gradientFrom: "#f97316", gradientTo: "#ef4444" },
  Ramen: { Icon: Soup, gradientFrom: "#fb923c", gradientTo: "#b45309" },
  Eis: { Icon: IceCream, gradientFrom: "#38bdf8", gradientTo: "#a78bfa" },
  Softdrinks: { Icon: Droplets, gradientFrom: "#38bdf8", gradientTo: "#2563eb" },
  Heißgetränke: { Icon: Coffee, gradientFrom: "#78350f", gradientTo: "#d97706" },
  Säfte: { Icon: Citrus, gradientFrom: "#facc15", gradientTo: "#ea580c" },
  Shakes: { Icon: IceCream, gradientFrom: "#f472b6", gradientTo: "#a78bfa" },
  Bier: { Icon: Beer, gradientFrom: "#fde047", gradientTo: "#ca8a04" },
  Longdrinks: { Icon: GlassWater, gradientFrom: "#22d3ee", gradientTo: "#6366f1" },
  Shots: { Icon: Wine, gradientFrom: "#fb7185", gradientTo: "#9333ea" },
  "Cocktails (mit Alkohol)": { Icon: Martini, gradientFrom: "#e879f9", gradientTo: "#9333ea" },
  "Cocktails (alkoholfrei)": { Icon: Sparkles, gradientFrom: "#6ee7b7", gradientTo: "#14b8a6" },
  Menüs: { Icon: Ticket, gradientFrom: "#a3e635", gradientTo: "#10b981" },
};
