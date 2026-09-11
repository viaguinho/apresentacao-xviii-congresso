"use client"

import { motion } from "framer-motion"
import { Home, Users, Heart, Building2, User } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide25OrbitProps {
  isActive?: boolean
}

export default function Slide25Orbit({ isActive = true }: Slide25OrbitProps) {
  return (
    <div className="relative flex h-[480px] w-full max-w-[540px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Glow concêntrico */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[360px] h-[360px] rounded-full bg-[#0071e3]/[0.03] blur-3xl" />
      </div>

      {/* Central Hub: JOVEM */}
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
          JOVEM
        </span>
        <span className="text-[10px] font-semibold text-[#0071e3] tracking-wider uppercase -mt-0.5">
          Identidade
        </span>
      </motion.div>

      {/* Anel Interno (Raio: 110px) - Esferas Institucionais e Primárias */}
      {/* 1. Família */}
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
            <Home className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            família
          </span>
        </div>
      </OrbitingCircles>

      {/* 2. Escola e Comunidade */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={28}
        delay={14}
        radius={110}
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            escola e comunidade
          </span>
        </div>
      </OrbitingCircles>

      {/* Anel Externo (Raio: 195px, Rotação Reversa) - Esferas Sociais de Pares */}
      {/* 3. Amigos e Grupo */}
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
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0071e3] whitespace-nowrap">
            amigos e grupo
          </span>
        </div>
      </OrbitingCircles>

      {/* 4. Relações Afetivas */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={18}
        radius={195}
        reverse
        path={false}
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default">
          <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Heart className="w-4 h-4" />
          </div>
          <span className="text-[15px] font-semibold text-[#0f1012] whitespace-nowrap">
            relações afetivas
          </span>
        </div>
      </OrbitingCircles>
    </div>
  )
}
