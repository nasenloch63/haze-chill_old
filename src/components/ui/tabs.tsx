"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex w-full max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md scrollbar-hide",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-violet-200/80 transition-all sm:text-sm",
      "hover:border hover:border-emerald-500/30 hover:text-emerald-100/90",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
      "data-[state=active]:border data-[state=active]:border-violet-400/50 data-[state=active]:bg-violet-950/50 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(139,92,246,0.25)]",
      "data-[state=inactive]:border data-[state=inactive]:border-transparent",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 sm:p-6",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
