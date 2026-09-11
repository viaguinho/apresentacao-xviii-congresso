"use client"

import { motion } from "framer-motion"
import { Sparkles, MessageSquare, Users, History, Globe, BrainCircuit, Share2 } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide26OrbitProps {
  isActive?: boolean
}

export default function Slide26Orbit({ isActive = true }: Slide26OrbitProps) {
  return (
    <div className="relative flex h-[490px] w-full max-w-[560px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[380px] h-[380px] rounded-full bg-[#6b4e83]/[0.03] blur-3xl" />
      </div>

      {/* Central Hub: PARTICIPAÇÃO SOCIAL */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center w-[124px] h-[124px] rounded-full bg-white/95 border-2 border-[#6b4e83]/30 shadow-[0_8px_32px_rgba(107,78,131,0.12)] backdrop-blur-md transition-transform hover:scale-105"
      >
        <div className="w-9 h-9 rounded-full bg-[#f1ecf5] flex items-center justify-center mb-1 text-[#6b4e83] shadow-inner">
          <Share2 className="w-5 h-5 stroke-[2.2]" />
        </div>
        <span className="font-['Urbanist',sans-serif] text-[15px] font-bold tracking-[0.06em] text-[#0f1012] leading-tight text-center">
          PARTICIPAÇÃO
        </span>
        <span className="font-['Urbanist',sans-serif] text-[16px] font-bold tracking-[0.06em] text-[#6b4e83] leading-tight text-center">
          SOCIAL
        </span>
      </motion.div>

      {/* Anel Interno (Raio: 112px) - 3 Fatores Individuais de Interação */}
      {/* 1. Fala e Comunicação */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={30}
        delay={0}
        radius={112}
        pathClassName="stroke-[#6b4e83]/20"
        strokeDasharray="4 4"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[16px] font-semibold text-[#0f1012] whitespace-nowrap">
            fala e comunicação
          </span>
        </div>
      </OrbitingCircles>

      {/* 2. Competências Sociais */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={30}
        delay={10}
        radius={112}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <span className="text-[16px] font-semibold text-[#0f1012] whitespace-nowrap">
            competências sociais
          </span>
        </div>
      </OrbitingCircles>

      {/* 3. Aparência */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={30}
        delay={20}
        radius={112}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[16px] font-semibold text-[#0f1012] whitespace-nowrap">
            aparência
          </span>
        </div>
      </OrbitingCircles>

      {/* Anel Externo (Raio: 200px, Rotação Reversa) - 3 Fatores Ambientais/Relacionais */}
      {/* 4. Pares */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={0}
        radius={200}
        reverse
        pathClassName="stroke-[#6b4e83]/15"
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            pares
          </span>
        </div>
      </OrbitingCircles>

      {/* 5. Experiências */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={13.33}
        radius={200}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
            <History className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            experiências
          </span>
        </div>
      </OrbitingCircles>

      {/* 6. Contexto */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={40}
        delay={26.66}
        radius={200}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
            <Globe className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            contexto
          </span>
        </div>
      </OrbitingCircles>
    </div>
  )
}
