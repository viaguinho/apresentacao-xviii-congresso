"use client"

import { motion } from "framer-motion"
import { User, Stethoscope, HeartHandshake, GraduationCap, Layers } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide38OrbitProps {
  isActive?: boolean
}

export default function Slide38Orbit({ isActive = true }: Slide38OrbitProps) {
  return (
    <div className="relative flex h-[520px] w-full max-w-[620px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Glow concêntrico */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[440px] h-[440px] rounded-full bg-[#33415c]/[0.05] blur-3xl" />
      </div>

      {/* Central Hub: PERSPECTIVAS COMPLEMENTARES */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center w-[136px] h-[136px] rounded-full bg-white/95 border-2 border-[#33415c]/30 shadow-[0_8px_32px_rgba(51,65,92,0.12)] backdrop-blur-md transition-transform hover:scale-105 text-center p-2"
      >
        <div className="w-8 h-8 rounded-full bg-[#edeff3] flex items-center justify-center mb-1 text-[#33415c] shadow-inner">
          <Layers className="w-5 h-5 stroke-[2.2]" />
        </div>
        <span className="font-['Urbanist',sans-serif] text-[16px] font-bold tracking-[0.06em] text-[#33415c] leading-tight">
          PERSPECTIVAS
        </span>
        <span className="font-['Urbanist',sans-serif] text-[14px] font-semibold tracking-[0.04em] text-[#0f1012] leading-tight">
          COMPLEMENTARES
        </span>
      </motion.div>

      {/* Anel Orbital de Informantes (Raio: 205px, Duração: 44s) */}
      {/* 1. Autorrelato */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={44}
        delay={0}
        radius={205}
        pathClassName="stroke-[#33415c]/25"
        strokeWidth={1.5}
        strokeDasharray="4 4"
      >
        <div className="flex flex-col items-start p-2.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default w-[220px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#33415c]/10 text-[#33415c] flex items-center justify-center shrink-0">
              <User className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#33415c] leading-none">
              autorrelato
            </span>
          </div>
          <p className="text-[15px] font-medium text-[#52525b] mt-1.5 leading-snug">
            experiência subjetiva · ansiedade · tristeza · aparência · pertencimento
          </p>
        </div>
      </OrbitingCircles>

      {/* 2. Equipe */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={44}
        delay={11}
        radius={205}
        path={false}
      >
        <div className="flex flex-col items-start p-2.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default w-[210px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#33415c]/10 text-[#33415c] flex items-center justify-center shrink-0">
              <Stethoscope className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#33415c] leading-none">
              equipe
            </span>
          </div>
          <p className="text-[15px] font-medium text-[#52525b] mt-1.5 leading-snug">
            função · comunicação · tratamento · evolução clínica
          </p>
        </div>
      </OrbitingCircles>

      {/* 3. Pais e Cuidadores */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={44}
        delay={22}
        radius={205}
        path={false}
      >
        <div className="flex flex-col items-start p-2.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default w-[220px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#33415c]/10 text-[#33415c] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#33415c] leading-none">
              pais e cuidadores
            </span>
          </div>
          <p className="text-[15px] font-medium text-[#52525b] mt-1.5 leading-snug">
            trajetória · cotidiano · organização · mudanças no tempo
          </p>
        </div>
      </OrbitingCircles>

      {/* 4. Escola */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={44}
        delay={33}
        radius={205}
        path={false}
      >
        <div className="flex flex-col items-start p-2.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default w-[210px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#33415c]/10 text-[#33415c] flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#33415c] leading-none">
              escola
            </span>
          </div>
          <p className="text-[15px] font-medium text-[#52525b] mt-1.5 leading-snug">
            participação · pares · aprendizagem · atenção
          </p>
        </div>
      </OrbitingCircles>
    </div>
  )
}
