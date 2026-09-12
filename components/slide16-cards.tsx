"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  TrendingUp,
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide16CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide16Cards({ isActive = true, className }: Slide16CardsProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const metacognitiveSteps = [
    {
      num: "01",
      title: "Aprender",
      desc: "Engajar ativamente com o conteúdo ou problema.",
      icon: Brain,
      accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    },
    {
      num: "02",
      title: "Monitorar",
      desc: "Avaliar o próprio desempenho durante a execução.",
      icon: Sparkles,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      num: "03",
      title: "Perceber o erro",
      desc: "Detectar discrepâncias entre objetivo e resultado.",
      icon: AlertCircle,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      num: "04",
      title: "Mudar estratégia",
      desc: "Recrutar flexibilidade cognitiva para ajustar a rota.",
      icon: RefreshCw,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      num: "05",
      title: "Aprender melhor",
      desc: "Consolidar redes neurais e autonomia de pensamento.",
      icon: TrendingUp,
      accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-4 select-none font-['Satoshi',sans-serif] max-w-[760px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Bloco de Evidência (Arquitetura Card-7 / TravelCard)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.08]",
          "bg-gradient-to-br from-white via-[#fcfdff] to-[#e6f5f3]/60",
          "shadow-[0_4px_24px_rgba(0,113,227,0.06)] hover:shadow-[0_12px_36px_rgba(0,113,227,0.12)]",
          "hover:border-[#0d6d66]/30 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Subtle Decorative Gradient Mesh Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#0d6d66]/10 to-[#14b8a6]/20 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section: Logo & Badge */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#0d6d66]/20 bg-white/90 shadow-xs text-[#0d6d66] transition-transform duration-300 group-hover:scale-105">
              <BookOpenCheck className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-[#0d6d66]/10 text-[#0d6d66] border border-[#0d6d66]/20">
                <CheckCircle2 className="w-4 h-4 text-[#0d6d66]" />
                Meta-Análise Empírica
              </span>
            </div>
          </div>

          {/* Middle Section: Title, Subtitle & Overview */}
          <div className="space-y-1.5">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                Spiegel et al. (2021)
              </h3>
              <p className="text-[17px] font-semibold text-[#0d6d66] mt-0.5">
                299 estudos · +65.000 crianças avaliadas no ensino fundamental
              </p>
            </div>

            <div className="pt-1">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] text-zinc-600 mb-1">
                EVIDÊNCIA & ASSOCIAÇÃO
              </h4>
              <p className="text-[17px] text-[#334155] leading-snug font-medium">
                Associações significativas entre funções executivas e leitura, matemática e linguagem oral no ensino fundamental, com{" "}
                <strong className="text-[#0f1012] font-semibold">memória de trabalho</strong> apresentando as correlações mais consistentes e de maior magnitude.
              </p>
            </div>
          </div>

          {/* Bottom Section: Principle Highlight & Action Pill */}
          <div className="mt-3 pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[16px] font-semibold text-zinc-600">
              <span>Rigor Metodológico:</span>
              <span className="text-[#0f1012] font-bold">N &gt; 65.000</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0d6d66] text-white text-[15px] font-bold shadow-xs hover:bg-[#0d6d66]/90 transition-colors">
              <span>Associação ≠ Causalidade</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Metacognição (Identidade Visual Obsidian Slide 11)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/10 relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0d6d66]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[14px] font-bold uppercase tracking-[0.12em] text-zinc-400">
              Metacognição
            </span>
            <span className="text-[14px] font-semibold text-zinc-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
              Controle do próprio pensamento
            </span>
          </div>

          <h4 className="text-[23px] font-bold tracking-tight text-white font-['Urbanist',sans-serif]">
            Ciclo de autorregulação cognitiva
          </h4>
          <p className="text-[17px] font-medium text-zinc-300 mt-1 leading-snug">
            Aprender a monitorar ativamente a compreensão, identificar impasses e redirecionar a própria conduta:
          </p>
        </div>

        {/* 5 Chained Metacognitive Steps */}
        <div className="grid grid-cols-5 gap-1.5 my-3 relative z-10">
          {metacognitiveSteps.map((step, idx) => {
            const isHovered = activeStep === idx;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                whileHover={{ y: -2, scale: 1.02 }}
                className={cn(
                  "px-2.5 py-2 rounded-xl bg-zinc-900/90 border transition-all duration-300 flex flex-col justify-start gap-1 cursor-pointer text-left relative",
                  isHovered
                    ? "border-white/35 bg-zinc-800/95 shadow-md"
                    : "border-zinc-800/80 hover:border-zinc-700"
                )}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-bold text-zinc-400 font-mono">
                    {step.num}
                  </span>
                  <div
                    className={cn(
                      "w-6 h-6 rounded-md flex items-center justify-center border text-sm",
                      step.accent
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h5 className="text-[16px] font-bold text-white leading-tight">
                    {step.title}
                  </h5>
                  <p className="text-[14px] font-medium text-zinc-300 leading-snug mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Principle Bar */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-zinc-800">
          <span className="text-[16px] font-semibold text-zinc-400">
            Tese desenvolvimental:
          </span>
          <span className="text-[16px] font-bold text-amber-300 bg-amber-400/10 px-3 py-0.5 rounded-full border border-amber-400/25">
            Cognição ⇄ aprendizagem escolar
          </span>
        </div>
      </motion.div>
    </div>
  );
}
