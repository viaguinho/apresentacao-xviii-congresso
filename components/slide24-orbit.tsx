"use client"

import { motion } from "framer-motion"
import { UserCheck, Users, ShieldCheck, HeartHandshake } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

interface Slide24OrbitProps {
  isActive?: boolean
}

export default function Slide24Orbit({ isActive = true }: Slide24OrbitProps) {
  return (
    <div className="relative flex h-[520px] w-full max-w-[720px] mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl bg-transparent select-none group">
      {/* Glow concêntrico */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full bg-[#6b4e83]/[0.03] blur-3xl" />
      </div>

      {/* Central Hub: Criança / Relações */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center w-[116px] h-[116px] rounded-full bg-white/95 border-2 border-[#6b4e83]/30 shadow-[0_8px_32px_rgba(107,78,131,0.12)] backdrop-blur-md transition-transform hover:scale-105"
      >
        <div className="w-9 h-9 rounded-full bg-[#f1ecf5] flex items-center justify-center mb-1 text-[#6b4e83] shadow-inner">
          <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
        </div>
        <span className="font-['Urbanist',sans-serif] text-[15px] font-bold tracking-[0.08em] text-[#0f1012] text-center leading-tight">
          REDE<br />RELACIONAL
        </span>
      </motion.div>

      {/* 1. Camada Interna (Raio: 95px) - Amizade */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={26}
        delay={0}
        radius={95}
        pathClassName="stroke-[#6b4e83]/30"
        strokeWidth={1.5}
      >
        <div className="flex flex-col items-start px-3 py-1.5 rounded-2xl bg-white/95 border border-[#6b4e83]/25 shadow-[0_3px_14px_rgba(107,78,131,0.08)] backdrop-blur-md cursor-default max-w-[170px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
              <UserCheck className="w-2.5 h-2.5 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#6b4e83] leading-none whitespace-nowrap">
              amizade
            </span>
          </div>
          <span className="text-[15px] font-medium text-[#52525b] mt-0.5 leading-tight">
            reciprocidade
          </span>
        </div>
      </OrbitingCircles>

      {/* 2. Camada Intermediária (Raio: 165px, Rotação Reversa) - Aceitação no Grupo */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={36}
        delay={0}
        radius={165}
        reverse
        pathClassName="stroke-[#6b4e83]/20"
        strokeWidth={1.5}
        strokeDasharray="4 4"
      >
        <div className="flex flex-col items-start px-3 py-1.5 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default max-w-[210px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
              <Users className="w-2.5 h-2.5 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#0f1012] leading-none whitespace-nowrap">
              aceitação e status
            </span>
          </div>
          <span className="text-[15px] font-medium text-[#52525b] mt-0.5 leading-tight">
            reputação · participação no grupo
          </span>
        </div>
      </OrbitingCircles>

      {/* 3. Camada Externa (Raio: 235px) - Pertencimento */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={48}
        delay={0}
        radius={235}
        pathClassName="stroke-[#6b4e83]/15"
        strokeWidth={1.5}
      >
        <div className="flex flex-col items-start px-3.5 py-2 rounded-2xl bg-white/95 border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.07)] backdrop-blur-md cursor-default max-w-[230px]">
          <div className="flex items-center gap-1.5 w-full">
            <div className="w-5 h-5 rounded-full bg-[#6b4e83]/10 text-[#6b4e83] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-2.5 h-2.5 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold text-[#0f1012] leading-none whitespace-nowrap">
              pertencimento
            </span>
          </div>
          <p className="text-[15px] font-medium text-[#52525b] mt-1 leading-snug">
            “eu faço parte daqui?” · identificação · inclusão · segurança
          </p>
        </div>
      </OrbitingCircles>
    </div>
  )
}
