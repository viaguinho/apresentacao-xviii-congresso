"use client"

import { motion } from "framer-motion"
import { Sparkles, GraduationCap, Compass, Users, HeartHandshake, Smile, User } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide21OrbitProps {
  isActive?: boolean
}

export default function Slide21Orbit({ isActive = true }: Slide21OrbitProps) {
  return (
    <div className="relative flex h-[480px] w-full max-w-[560px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[360px] h-[360px] rounded-full bg-[#0071e3]/[0.03] blur-3xl" />
      </div>

      {/* Central Hub: SELF */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center w-[114px] h-[114px] rounded-full bg-white/95 border-2 border-[#0071e3]/30 shadow-[0_8px_32px_rgba(0,113,227,0.12)] backdrop-blur-md transition-transform hover:scale-105"
      >
        <div className="w-9 h-9 rounded-full bg-[#e8f2fc] flex items-center justify-center mb-1 text-[#0071e3] shadow-inner">
          <User className="w-5 h-5 stroke-[2.2]" />
        </div>
        <span className="font-['Urbanist',sans-serif] text-[16px] font-bold tracking-[0.12em] text-[#0f1012]">
          SELF
        </span>
        <span className="text-[14px] font-semibold text-[#0071e3] tracking-wider uppercase mt-0">
          Núcleo
        </span>
      </motion.div>

      {/* Anel Interno (Raio: 110px) - 3 Dimensões Fundamentais */}
      {/* 1. Aparência */}
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
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            aparência
          </span>
        </div>
      </OrbitingCircles>

      {/* 2. Acadêmico */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={28}
        delay={9.33}
        radius={110}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            acadêmico
          </span>
        </div>
      </OrbitingCircles>

      {/* 3. Valores */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={28}
        delay={18.66}
        radius={110}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            valores
          </span>
        </div>
      </OrbitingCircles>

      {/* Anel Externo (Raio: 195px, Rotação Reversa) - 3 Dimensões Relacionais */}
      {/* 4. Social */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={0}
        radius={178}
        reverse
        pathClassName="stroke-[#0071e3]/15"
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            social
          </span>
        </div>
      </OrbitingCircles>

      {/* 5. Prossocial */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={12}
        radius={178}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            prossocial
          </span>
        </div>
      </OrbitingCircles>

      {/* 6. Emocional */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={24}
        radius={178}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Smile className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            emocional
          </span>
        </div>
      </OrbitingCircles>
    </div>
  )
}
