"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide24CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide24Cards({ isActive = true, className }: Slide24CardsProps) {
  const relationalSteps = [
    { label: "Amizade Recíproca", accent: "bg-[#f1ecf5] text-[#6b4e83] border-[#6b4e83]/30" },
    { label: "Qualidade Superior", accent: "bg-[#f1ecf5] text-[#6b4e83] border-[#6b4e83]/30" },
    { label: "Identificação com Pares", accent: "bg-[#6b4e83] text-white border-[#6b4e83]" },
  ];

  const conflictSteps = [
    "Perceber a perspectiva",
    "Negociar",
    "Fazer concessões",
    "Reparar a relação",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[800px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Evidência Empírica Maunder & Monks (Light Glass · Eixo 4 Ametista)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.08]",
          "bg-gradient-to-br from-white via-[#fcfdff] to-[#f1ecf5]/70",
          "shadow-[0_4px_24px_rgba(107,78,131,0.06)] hover:shadow-[0_12px_36px_rgba(107,78,131,0.12)]",
          "hover:border-[#6b4e83]/30 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Decorative Gradient Mesh Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#6b4e83]/15 to-[#4d3460]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#6b4e83]/20 bg-white/90 shadow-xs text-[#6b4e83] transition-transform duration-300 group-hover:scale-105">
              <HeartHandshake className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-[#6b4e83]/10 text-[#6b4e83] border border-[#6b4e83]/20">
                <Sparkles className="w-4 h-4 text-[#6b4e83]" />
                Evidência · n = 314 · 7–11 anos
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                Díade Protetora e Identificação com Pares
              </h3>
              <p className="text-[16px] font-semibold text-[#6b4e83] mt-0.5">
                Maunder & Monks (2019) · Diferenciação entre popularidade e apego entre pares
              </p>
            </div>

            {/* Relational Cascade Chips */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-1.5 my-1.5">
                {relationalSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "px-2.5 py-1 rounded-xl text-[15px] font-bold border shadow-2xs",
                        step.accent
                      )}
                    >
                      {step.label}
                    </span>
                    {i < relationalSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#6b4e83]/70 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[16px] text-[#334155] leading-snug font-normal mt-2">
                Uma criança pode ser pouco popular e ainda ter uma amizade íntima e protetora — ou ser aceita pelo grupo sem possuir amizade próxima. <strong className="text-[#0f1012] font-semibold">A reciprocidade foi especialmente relevante para a autoestima e identificação social.</strong>
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-500">
              <span>Fundamento:</span>
              <span className="text-[#0f1012] font-bold">Qualidade vs Quantidade</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6b4e83] text-white text-[16px] font-bold shadow-xs">
              <span>Reciprocidade Protege</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Manejo de Conflito & Avaliação Clínica (Dark Obsidian · Eixo 4)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-white/10",
          "bg-[#0f1012] text-white",
          "shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.28)]",
          "hover:border-[#6b4e83]/40 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#6b4e83]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-purple-300 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Users className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/25">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                Competência & Avaliação Clínica
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-white leading-tight font-['Urbanist',sans-serif]">
                Preferir Poucos Amigos ≠ Dificuldade Social
              </h3>
              <p className="text-[16px] font-semibold text-purple-300 mt-0.5">
                Conflito não é ausência de competência — é a arena de aprendizagem relacional
              </p>
            </div>

            {/* Conflict Steps Chips */}
            <div className="pt-0.5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                COMO OCORRE A COMPETÊNCIA SOCIAL NOS CONFLITOS:
              </h4>
              <div className="flex flex-wrap items-center gap-1.5 my-1">
                {conflictSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-1">
                    <span className="px-2 py-0.5 rounded-lg text-[14px] font-semibold bg-white/[0.06] border border-white/10 text-zinc-200">
                      {step}
                    </span>
                    {idx < conflictSteps.length - 1 && (
                      <span className="text-[16px] text-purple-400 font-bold">→</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[16px] text-zinc-300 leading-snug font-normal mt-2">
                <strong className="text-white font-semibold">O que avaliar na clínica:</strong> Há reciprocidade? A criança deseja mais interação do que obtém? Consegue participar quando quer? Há sofrimento, exclusão ou prejuízo funcional?
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-400">
              <span>Critério:</span>
              <span className="text-white font-bold">Prejuízo Funcional Real</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 text-[16px] font-bold shadow-xs">
              <span>Intencionalidade ≠ Déficit</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
