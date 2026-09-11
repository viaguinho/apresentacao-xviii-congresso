"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassButton } from "@/components/ui/glass-button"

interface Slide15TimelinePillsProps {
  isActive?: boolean
}

interface CognitiveProcess {
  id: string
  action: string
  detail: string
  leftPercent: number
  widthPercent: number
  variant: "accent" | "neutral"
  phaseSpan: string
}

const PROCESSES: CognitiveProcess[] = [
  {
    id: "orientar",
    action: "orientar",
    detail: "atenção seletiva e sustentada",
    leftPercent: 3.6,
    widthPercent: 44.5,
    variant: "accent",
    phaseSpan: "primeiro ano",
  },
  {
    id: "reconhecer",
    action: "reconhecer e lembrar",
    detail: "memória de reconhecimento",
    leftPercent: 14.5,
    widthPercent: 48.2,
    variant: "neutral",
    phaseSpan: "primeiro ano · 1–2 anos",
  },
  {
    id: "representar",
    action: "representar",
    detail: "linguagem e pensamento simbólico",
    leftPercent: 31.3,
    widthPercent: 54.2,
    variant: "neutral",
    phaseSpan: "1–2 anos · 3–5 anos",
  },
  {
    id: "manter",
    action: "manter e manipular",
    detail: "memória de trabalho",
    leftPercent: 42.2,
    widthPercent: 53.0,
    variant: "neutral",
    phaseSpan: "1–2 anos · 3–5 anos",
  },
  {
    id: "controlar",
    action: "controlar",
    detail: "inibição e flexibilidade",
    leftPercent: 54.2,
    widthPercent: 42.2,
    variant: "accent",
    phaseSpan: "3–5 anos",
  },
]

export default function Slide15TimelinePills({ isActive = true }: Slide15TimelinePillsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full flex flex-col justify-between select-none py-1">
      {/* Pills Container (Vertical Staggered Timeline Rows) */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-between py-1 min-h-[300px] max-h-[330px]">
        {PROCESSES.map((process, index) => {
          const isHovered = hoveredId === process.id
          const isOtherHovered = hoveredId !== null && !isHovered

          return (
            <motion.div
              key={process.id}
              className="relative w-full h-[54px] flex items-center"
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              animate={
                isActive
                  ? {
                      opacity: isOtherHovered ? 0.6 : 1,
                      x: 0,
                      scale: isHovered ? 1.015 : 1,
                    }
                  : { opacity: 0, x: -30, scale: 0.98 }
              }
              transition={{
                duration: 0.48,
                delay: 0.12 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredId(process.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="absolute h-full flex items-center transition-all duration-300"
                style={{
                  left: `${process.leftPercent}%`,
                  width: `${process.widthPercent}%`,
                }}
              >
                <GlassButton
                  variant={process.variant}
                  className="w-full h-[52px] !cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                  contentClassName="w-full flex items-center px-6 text-left"
                >
                  <div className="flex items-center gap-2.5 w-full text-[19px] tracking-tight font-['Satoshi'] whitespace-nowrap">
                    <span
                      className={`font-semibold shrink-0 ${
                        process.variant === "accent" ? "text-[#0d6d66]" : "text-[#0f1012]"
                      }`}
                    >
                      {process.action}
                    </span>
                    <span
                      className={`font-light opacity-40 shrink-0 ${
                        process.variant === "accent" ? "text-[#0d6d66]" : "text-[#5f6062]"
                      }`}
                    >
                      —
                    </span>
                    <span
                      className={`font-normal ${
                        process.variant === "accent"
                          ? "text-[#0d6d66]/90 font-medium"
                          : "text-[#3f4042]"
                      }`}
                    >
                      {process.detail}
                    </span>
                  </div>
                </GlassButton>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Timeline Axis */}
      <motion.div
        className="relative z-10 w-full pt-3 mt-1"
        initial={{ opacity: 0, y: 12 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-full px-[3.6%]">
          {/* Track */}
          <div className="h-[2px] w-full bg-[#d2d4d8] rounded-full relative">
            {/* Tick Marks: Left (0%), Center (50%), Right (100%) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0d6d66] border-2 border-white shadow-xs" />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#5f6062] border-2 border-white shadow-xs" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0d6d66] border-2 border-white shadow-xs" />
          </div>

          {/* Milestone Labels: Perfectly centered and aligned */}
          <div className="relative w-full h-6 mt-2.5 text-[17px] sm:text-[18.5px] font-['Satoshi']">
            <span className="absolute left-0 font-semibold text-[#0d6d66] tracking-tight">primeiro ano</span>
            <span className="absolute left-1/2 -translate-x-1/2 font-medium text-[#5f6062]">1–2 anos</span>
            <span className="absolute right-0 font-semibold text-[#0d6d66] tracking-tight">3–5 anos</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
