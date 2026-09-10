"use client"

import { motion } from "framer-motion"
import { RefreshCw } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide35OrbitProps {
  isActive?: boolean
}

export default function Slide35Orbit({ isActive = true }: Slide35OrbitProps) {
  return (
    <div className="relative flex h-[510px] w-full max-w-[620px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Glow concêntrico */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full bg-[#0071e3]/[0.03] blur-3xl" />
      </div>

      {/* Central Hub: Equação Clínica do Protocolo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center w-[160px] h-[160px] rounded-full bg-white/95 border-2 border-[#0071e3]/30 shadow-[0_8px_32px_rgba(0,113,227,0.12)] backdrop-blur-md text-center p-3 transition-transform hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-[#e8f2fc] flex items-center justify-center mb-1 text-[#0071e3] shadow-inner">
          <RefreshCw className="w-4 h-4 stroke-[2.2]" />
        </div>
        <span className="font-['Urbanist',sans-serif] text-[13px] font-bold tracking-[0.08em] text-[#0071e3] leading-none uppercase">
          Ciclo Clínico
        </span>
        <div className="mt-1.5 pt-1.5 border-t border-black/[0.06] text-[11px] font-semibold text-[#0f1012] leading-tight flex flex-col">
          <span>idade + trajetória</span>
          <span className="text-[#5f6062] font-medium">+ contexto + função</span>
        </div>
      </motion.div>

      {/* Anel Orbital do Ciclo (Raio: 190px, Duração: 40s) com os 5 passos */}
      {/* 1. RASTREAR */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={0}
        radius={190}
        pathClassName="stroke-[#0071e3]/25"
        strokeWidth={1.8}
        strokeDasharray="6 4"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#0071e3]/30 shadow-[0_4px_16px_rgba(0,113,227,0.10)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
            1
          </div>
          <span className="text-[12px] font-bold text-[#0071e3] tracking-wide whitespace-nowrap">
            RASTREAR
          </span>
        </div>
      </OrbitingCircles>

      {/* 2. CONTEXTUALIZAR */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={8}
        radius={190}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#e8f2fc] text-[#0071e3] flex items-center justify-center shrink-0 text-[10px] font-bold">
            2
          </div>
          <span className="text-[12px] font-bold text-[#0f1012] tracking-wide whitespace-nowrap">
            CONTEXTUALIZAR
          </span>
        </div>
      </OrbitingCircles>

      {/* 3. ESTRATIFICAR */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={16}
        radius={190}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#e8f2fc] text-[#0071e3] flex items-center justify-center shrink-0 text-[10px] font-bold">
            3
          </div>
          <span className="text-[12px] font-bold text-[#0f1012] tracking-wide whitespace-nowrap">
            ESTRATIFICAR
          </span>
        </div>
      </OrbitingCircles>

      {/* 4. AGIR */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={24}
        radius={190}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#e8f2fc] text-[#0071e3] flex items-center justify-center shrink-0 text-[10px] font-bold">
            4
          </div>
          <span className="text-[12px] font-bold text-[#0f1012] tracking-wide whitespace-nowrap">
            AGIR
          </span>
        </div>
      </OrbitingCircles>

      {/* 5. REAVALIAR */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={32}
        radius={190}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#e8f2fc] text-[#0071e3] flex items-center justify-center shrink-0 text-[10px] font-bold">
            5
          </div>
          <span className="text-[12px] font-bold text-[#0f1012] tracking-wide whitespace-nowrap">
            REAVALIAR
          </span>
        </div>
      </OrbitingCircles>
    </div>
  )
}
