"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
  detail?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
  className?: string;
  colorTheme?: "terracotta" | "amethyst" | "bordeaux" | "blue" | string;
  isActive?: boolean;
  children?: React.ReactNode;
}

const THEME_CONFIG = {
  terracotta: {
    primary: "#b5563a",
    primaryDark: "#8c3e27",
    tint: "#fbeee9",
    border: "rgba(181, 86, 58, 0.25)",
    glow: "rgba(181, 86, 58, 0.12)",
    badgeBg: "#fbeee9",
    badgeText: "#b5563a",
    lineGradient: "linear-gradient(90deg, #b5563a 0%, #d47a5f 50%, #e29f87 100%)",
  },
  amethyst: {
    primary: "#6b4e83",
    primaryDark: "#4d3460",
    tint: "#f1ecf5",
    border: "rgba(107, 78, 131, 0.25)",
    glow: "rgba(107, 78, 131, 0.12)",
    badgeBg: "#f1ecf5",
    badgeText: "#6b4e83",
    lineGradient: "linear-gradient(90deg, #6b4e83 0%, #8c6da6 50%, #ab8fc4 100%)",
  },
  bordeaux: {
    primary: "#8a2f3f",
    primaryDark: "#6b212f",
    tint: "#f7ecee",
    border: "rgba(138, 47, 63, 0.25)",
    glow: "rgba(138, 47, 63, 0.12)",
    badgeBg: "#f7ecee",
    badgeText: "#8a2f3f",
    lineGradient: "linear-gradient(90deg, #8a2f3f 0%, #aa4355 50%, #c46073 100%)",
  },
  blue: {
    primary: "#0071e3",
    primaryDark: "#005bb5",
    tint: "#e8f2fc",
    border: "rgba(0, 113, 227, 0.25)",
    glow: "rgba(0, 113, 227, 0.12)",
    badgeBg: "#e8f2fc",
    badgeText: "#0071e3",
    lineGradient: "linear-gradient(90deg, #0071e3 0%, #3498ff 50%, #70b4ff 100%)",
  },
};

export function RoadmapCard({
  title,
  description,
  items,
  className,
  colorTheme = "blue",
  isActive = true,
  children,
}: RoadmapCardProps) {
  const theme = THEME_CONFIG[colorTheme as keyof typeof THEME_CONFIG] || THEME_CONFIG.blue;

  return (
    <Card
      className={cn(
        "w-full bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden relative select-none",
        className
      )}
    >
      {(title || description) && (
        <CardHeader className="pb-3 pt-5 px-6">
          {title && (
            <CardTitle className="font-['Urbanist',sans-serif] text-[23px] font-bold tracking-tight text-[#0f1012]">
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="font-['Satoshi',sans-serif] text-[17px] font-medium text-[#5f6062] mt-0.5 leading-snug">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}

      <CardContent className={cn("px-6 pb-6", (!title && !description) && "pt-6")}>
        <div className="relative w-full">
          {/* Timeline Line Base */}
          <div className="absolute left-6 right-6 top-3 h-[2px] bg-black/[0.08] rounded-full z-0" />

          {/* Animated Timeline Line Active Progress */}
          <motion.div
            className="absolute left-6 top-3 h-[2px] rounded-full z-0 origin-left"
            style={{ background: theme.lineGradient }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="flex justify-between items-start gap-4 relative z-10">
            {items.map((item, index) => {
              const isDone = item.status === "done";
              const isInProgress = item.status === "in-progress";
              const isHighlight = isDone || isInProgress;

              return (
                <motion.div
                  key={index}
                  className="relative pt-7 text-center flex-1 flex flex-col items-center group/item"
                  initial={{ opacity: 0, y: 18 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={cn(
                      "absolute left-1/2 top-1.5 -translate-x-1/2 h-4 w-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm",
                      isHighlight ? "ring-4" : "border-2 border-black/[0.15] bg-[#f4f5f6]"
                    )}
                    style={{
                      backgroundColor: isHighlight ? theme.primary : "#ffffff",
                      borderColor: isHighlight ? theme.primary : undefined,
                      boxShadow: isHighlight ? `0 0 0 4px ${theme.glow}` : undefined,
                    }}
                  >
                    <div
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        isHighlight ? "bg-white" : "bg-black/[0.25]"
                      )}
                    />
                  </motion.div>

                  {/* Quarter / Phase Badge */}
                  <div className="mb-2">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[14px] font-['Urbanist',sans-serif] font-bold tracking-[0.04em] uppercase transition-colors"
                      style={{
                        backgroundColor: isHighlight ? theme.badgeBg : "#f2f2f4",
                        color: isHighlight ? theme.badgeText : "#6a6b6d",
                        border: `1px solid ${isHighlight ? theme.border : "rgba(0,0,0,0.06)"}`,
                      }}
                    >
                      {item.quarter}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-['Urbanist',sans-serif] text-[19px] font-bold text-[#0f1012] leading-snug tracking-tight px-1 group-hover/item:text-black transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  {item.description && (
                    <p className="font-['Satoshi',sans-serif] text-[16px] font-medium text-[#52525b] mt-1.5 leading-snug px-1">
                      {item.description}
                    </p>
                  )}

                  {/* Custom Details / Tags */}
                  {item.detail && <div className="mt-2.5 w-full flex justify-center">{item.detail}</div>}
                </motion.div>
              );
            })}
          </div>
        </div>

        {children && <div className="mt-5 pt-4 border-t border-black/[0.06]">{children}</div>}
      </CardContent>
    </Card>
  );
}

export default RoadmapCard;
