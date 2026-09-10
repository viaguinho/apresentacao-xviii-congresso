"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedFeatureCard } from "./ui/animated-feature-card";
import { OrbitingCirclesGlobe } from "./ui/orbiting-circles-02";
import { ArrowLeftRight, Clock } from "lucide-react";

interface Slide9StageProps {
  isActive?: boolean;
}

export default function Slide9Stage({ isActive = true }: Slide9StageProps) {
  return (
    <div className="w-full flex items-center justify-between gap-6 px-2">
      {/* Card 1: Biologia individual (AnimatedFeatureCard) */}
      <motion.div
        className="shrink-0 w-[340px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatedFeatureCard
          index="01"
          tag="ENDÓGENO"
          title="Biologia individual"
          description={
            <div className="flex flex-col gap-1 mt-1 text-[11px] font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                Predisposição genética
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                Maturação neural &amp; conectividade
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                Saúde física e fisiologia
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                Temperamento e reatividade
              </span>
            </div>
          }
          imageSrc="assets/cards/biology-dna-neural-3d.png"
          imageClassName="w-32 h-32 md:w-36 md:h-36"
          imageContainerClassName="top-3 bottom-[160px]"
          color="blue"
          className="h-[390px] w-full max-w-none shadow-sm border-slate-200/80 hover:border-blue-400/50 transition-colors"
        />
      </motion.div>

      {/* Center Stage: Orbiting Circles Globe & Longitudinal Timeline */}
      <motion.div
        className="flex-1 min-w-0 flex flex-col items-center justify-center max-w-[820px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top subtle indicators */}
        <div className="w-full flex items-center justify-between px-4 mb-1">
          <div className="flex items-center gap-2">
            <span className="font-['Urbanist',sans-serif] text-[10px] font-bold uppercase tracking-wider text-[#0071e3] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded">
              Ecologia do Desenvolvimento
            </span>
            <span className="font-['Satoshi',sans-serif] text-[12px] font-semibold text-slate-700">
              Camadas dinâmicas em torno da criança
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-white/80 border border-slate-200/70 px-2 py-0.5 rounded-full shadow-2xs">
            <ArrowLeftRight className="w-3 h-3 text-[#0071e3]" />
            <span>Influências recíprocas</span>
          </div>
        </div>

        {/* Orbiting Circles Globe */}
        <div className="w-full relative">
          <OrbitingCirclesGlobe className="h-[385px]" />
        </div>

        {/* Developmental timeline bar at the base of the orbits */}
        <div className="w-full mt-1 pt-1.5 border-t border-slate-200/70 flex flex-col gap-1">
          <div className="flex items-center justify-between text-[11px] font-semibold font-['Urbanist',sans-serif] text-slate-600">
            <span className="flex items-center gap-1 text-[#0071e3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
              Nascimento
            </span>
            <span className="text-slate-600">Primeira Infância</span>
            <span className="text-slate-600">Idade Escolar</span>
            <span className="flex items-center gap-1 text-slate-900">
              Adolescência
              <span className="w-1.5 h-1.5 rounded-full border border-[#0071e3] bg-white" />
            </span>
          </div>

          <div className="relative w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0071e3] via-indigo-500 to-[#0071e3] opacity-80" />
          </div>
        </div>
      </motion.div>

      {/* Card 2: Experiência e contexto (AnimatedFeatureCard) */}
      <motion.div
        className="shrink-0 w-[340px]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatedFeatureCard
          index="02"
          tag="EXÓGENO"
          title="Experiência e contexto"
          description={
            <div className="flex flex-col gap-1 mt-1 text-[11px] font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Cuidado responsivo &amp; apego
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Relações de pares e escola
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Oportunidades de aprendizagem
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Experiências de saúde e tratamento
              </span>
            </div>
          }
          imageSrc="assets/cards/experience-social-3d.png"
          imageClassName="w-32 h-32 md:w-36 md:h-36"
          imageContainerClassName="top-3 bottom-[160px]"
          color="emerald"
          className="h-[390px] w-full max-w-none shadow-sm border-slate-200/80 hover:border-emerald-400/50 transition-colors"
        />
      </motion.div>
    </div>
  );
}
