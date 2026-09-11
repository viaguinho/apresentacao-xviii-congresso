"use client"

import { motion } from "framer-motion"
import { Eye, Activity, Stethoscope, Compass, Layers, Target } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide27OrbitProps {
  isActive?: boolean
}

export default function Slide27Orbit({ isActive = true }: Slide27OrbitProps) {
  return (
    <div className="relative flex h-[490px] w-full max-w-[560px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[380px] h-[380px] rounded-full bg-[#0071e3]/[0.03] blur-3xl" />
      </div>

      {/* Central Hub: DESFECHO DESENVOLVIMENTAL */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center w-[124px] h-[124px] rounded-full bg-white/95 border-2 border-[#0071e3]/30 shadow-[0_8px_32px_rgba(0,113,227,0.12)] backdrop-blur-md transition-transform hover:scale-105"
      >
        <div className="w-9 h-9 rounded-full bg-[#e8f2fc] flex items-center justify-center mb-1 text-[#0071e3] shadow-inner">
          <Target className="w-5 h-5 stroke-[2.2]" />
        </div>
        <span className="font-['Urbanist',sans-serif] text-[15px] font-bold tracking-[0.06em] text-[#0f1012] leading-tight text-center">
          DESFECHO
        </span>
        <span className="font-['Urbanist',sans-serif] text-[14px] font-bold tracking-[0.04em] text-[#0071e3] leading-tight text-center">
          DESENVOLVIMENTAL
        </span>
      </motion.div>

      {/* Anel Interno (Raio: 110px) - Fatores Clínicos Diretos */}
      {/* 1. Função */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={28}
        delay={0}
        radius={110}
        pathClassName="stroke-[#0071e3]/20"
        strokeDasharray="4 4"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            função
          </span>
        </div>
      </OrbitingCircles>

      {/* 2. Condições Associadas */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={28}
        delay={14}
        radius={110}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            condições associadas
          </span>
        </div>
      </OrbitingCircles>

      {/* Anel Externo (Raio: 195px, Rotação Reversa) - Dimensões Longitudinais e Ecológicas */}
      {/* 3. Morfologia e Visibilidade */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={0}
        radius={195}
        reverse
        pathClassName="stroke-[#0071e3]/15"
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Eye className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            morfologia e visibilidade
          </span>
        </div>
      </OrbitingCircles>

      {/* 4. Trajetória de Tratamento */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={12}
        radius={195}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Stethoscope className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            trajetória de tratamento
          </span>
        </div>
      </OrbitingCircles>

      {/* 5. Contexto */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={24}
        radius={195}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            contexto
          </span>
        </div>
      </OrbitingCircles>
    </div>
  )
}
