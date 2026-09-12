"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Zap,
  Users,
  Heart,
  Network,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide17CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide17Cards({ isActive = true, className }: Slide17CardsProps) {
  const formulaFactors = [
    {
      label: "Capacidade Cognitiva",
      icon: Zap,
      accent: "bg-blue-50 text-blue-700 border-blue-200/80 hover:bg-blue-100/70",
    },
    {
      label: "Motivação & Recompensa",
      icon: Sliders,
      accent: "bg-amber-50 text-amber-700 border-amber-200/80 hover:bg-amber-100/70",
    },
    {
      label: "Pares e contexto social",
      icon: Users,
      accent: "bg-purple-50 text-purple-700 border-purple-200/80 hover:bg-purple-100/70",
    },
    {
      label: "Emoção",
      icon: Heart,
      accent: "bg-rose-50 text-rose-700 border-rose-200/80 hover:bg-rose-100/70",
    },
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-4 select-none font-['Satoshi',sans-serif] max-w-[800px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Bloco de Evidência Contextual (Estilo TravelCard / Card-7)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.08]",
          "bg-gradient-to-br from-white via-[#fcfdff] to-[#e6f5f3]/60",
          "shadow-[0_4px_24px_rgba(0,113,227,0.06)] hover:shadow-[0_12px_36px_rgba(0,113,227,0.12)]",
          "hover:border-[#0d6d66]/30 transition-all duration-400 ease-out px-5 py-4 flex flex-col justify-between"
        )}
      >
        {/* Subtle Decorative Gradient Mesh Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#0d6d66]/10 to-[#14b8a6]/20 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section: Logo & Badge */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#0d6d66]/20 bg-white/90 shadow-xs text-[#0d6d66] transition-transform duration-300 group-hover:scale-105">
              <Network className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wide bg-[#0d6d66]/10 text-[#0d6d66] border border-[#0d6d66]/20">
                <Sparkles className="w-4 h-4 text-[#0d6d66]" />
                Modelo interativo não linear
              </span>
            </div>
          </div>

          {/* Middle Section: Title, Subtitle & Interactive Equation */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                Desempenho observado em contexto
              </h3>
              <p className="text-[17px] font-semibold text-[#0d6d66] mt-0.5 leading-snug">
                Superação do modelo dual simplificado · Interação dinâmica multifatorial
              </p>
            </div>

            {/* Formula Chips */}
            <div className="pt-1">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] text-zinc-600 mb-1.5">
                EQUAÇÃO MULTIFATORIAL DA TOMADA DE DECISÃO
              </h4>
              <div className="flex flex-wrap items-center gap-1.5 my-1.5">
                {formulaFactors.map((factor, i) => (
                  <React.Fragment key={factor.label}>
                    <motion.div
                      whileHover={{ y: -1, scale: 1.02 }}
                      className={cn(
                        "px-2.5 py-1 rounded-xl text-[16px] font-semibold border transition-all duration-200 cursor-default flex items-center gap-1.5 shadow-2xs",
                        factor.accent
                      )}
                    >
                      <factor.icon className="w-4 h-4 shrink-0" />
                      <span>{factor.label}</span>
                    </motion.div>
                    {i < formulaFactors.length - 1 && (
                      <span className="text-[16px] font-bold text-[#0d6d66]/70 select-none">×</span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-[16px] font-bold text-[#0d6d66] ml-0.5 select-none">→</span>
                <motion.div
                  whileHover={{ y: -1, scale: 1.02 }}
                  className="px-2.5 py-1 rounded-xl text-[16px] font-bold bg-[#0d6d66] text-white shadow-xs flex items-center gap-1"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Decisão Observada</span>
                </motion.div>
              </div>

              <p className="text-[17px] text-[#334155] leading-snug font-medium mt-2">
                Incentivos contextuais e pares modificam a tomada de decisão na adolescência, gerando resultados substancialmente mais heterogêneos do que a tese dual de <strong className="text-[#0f1012] font-semibold">"límbico desenvolvido vs. pré-frontal imaturo"</strong>.
              </p>
            </div>
          </div>

          {/* Bottom Section: Principle Highlight & Action Pill */}
          <div className="mt-3 pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[16px] font-semibold text-zinc-600">
              <span>Fundamento:</span>
              <span className="text-[#0f1012] font-bold">Heterogeneidade Real</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0d6d66] text-white text-[15px] font-bold shadow-xs hover:bg-[#0d6d66]/90 transition-colors">
              <span>Decisão real ≠ teste isolado</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Metacognição na Adolescência (Identidade Dark Obsidian)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-white/10",
          "bg-[#0f1012] text-white",
          "shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.28)]",
          "hover:border-white/20 transition-all duration-400 ease-out px-5 py-4 flex flex-col justify-between"
        )}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0d6d66]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section: Logo & Badge */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-cyan-400 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Brain className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wide bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Weil et al. (2013) · 11–41 anos
              </span>
            </div>
          </div>

          {/* Middle Section: Title, Subtitle & Evidence */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-white leading-tight font-['Urbanist',sans-serif]">
                Refinamento da acurácia metacognitiva
              </h3>
              <p className="text-[17px] font-semibold text-cyan-400 mt-0.5 leading-snug">
                Dissociação desenvolvimental entre capacidade perceptual básica e autoavaliação
              </p>
            </div>

            <div className="pt-1">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] text-zinc-400 mb-1.5">
                EVIDÊNCIA EMPÍRICA LONGITUDINAL
              </h4>

              {/* Comparative Vector Chips */}
              <div className="grid grid-cols-3 gap-2 my-2">
                <div className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all text-left">
                  <span className="text-[14px] font-bold uppercase tracking-wide text-zinc-400 block mb-0.5">
                    Percepção Básica
                  </span>
                  <span className="text-[16px] font-bold text-zinc-200 leading-tight block">
                    Estabilização Precoce
                  </span>
                </div>

                <div className="px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/35 transition-all text-left">
                  <span className="text-[14px] font-bold uppercase tracking-wide text-cyan-400 block mb-0.5">
                    Metacognição
                  </span>
                  <span className="text-[16px] font-bold text-cyan-200 leading-tight block">
                    Refinamento (11–17a+)
                  </span>
                </div>

                <div className="px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/35 transition-all text-left">
                  <span className="text-[14px] font-bold uppercase tracking-wide text-amber-400 block mb-0.5">
                    Controle Adulto
                  </span>
                  <span className="text-[16px] font-bold text-amber-200 leading-tight block">
                    Eficiência & Consistência
                  </span>
                </div>
              </div>

              <p className="text-[17px] text-zinc-300 leading-snug font-medium mt-2">
                A acurácia metacognitiva continua se aprimorando ativamente dos 11 aos 17+ anos, mesmo quando o desempenho perceptual já se estabilizou: o adolescente adquire precisão crescente para calibrar sua própria certeza.
              </p>
            </div>
          </div>

          {/* Bottom Section: Principle Highlight & Action Pill */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[16px] font-semibold text-zinc-400">
              <span>Síntese:</span>
              <span className="text-white font-bold">Nem incapaz, nem pronto</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-[15px] font-bold shadow-xs hover:bg-amber-400/25 transition-colors">
              <span>Eficiência em Construção</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
