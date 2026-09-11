"use client";

import { motion } from "framer-motion";
import { Users, ShieldAlert, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide26CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide26Cards({ isActive = true, className }: Slide26CardsProps) {
  const protocolDimensions = [
    "participação",
    "amizades recíprocas",
    "pertencimento",
    "rejeição e bullying",
    "comunicação social",
    "coping social",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-2.5 select-none font-['Satoshi',sans-serif] max-w-[960px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Evidência da Visibilidade x Rejeição (Light Glass · Eixo 4 Ametista)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.08]",
          "bg-gradient-to-br from-white via-[#fcfdff] to-[#f1ecf5]/70",
          "shadow-[0_4px_24px_rgba(107,78,131,0.06)] hover:shadow-[0_12px_36px_rgba(107,78,131,0.12)]",
          "hover:border-[#6b4e83]/30 transition-all duration-400 ease-out p-4 flex flex-col justify-between"
        )}
      >
        {/* Decorative Gradient Mesh Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#6b4e83]/15 to-[#4d3460]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#6b4e83]/20 bg-white/90 shadow-xs text-[#6b4e83] transition-transform duration-300 group-hover:scale-105">
              <Users className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-[#6b4e83]/10 text-[#6b4e83] border border-[#6b4e83]/20">
                <Sparkles className="w-4 h-4 text-[#6b4e83]" />
                n = 661 (fissuras visíveis e não visíveis)
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                O Risco Social Está na Interação — Não Apenas na Face
              </h3>
              <p className="text-[16px] font-semibold text-[#6b4e83] mt-0.5">
                Visibilidade isolada ≠ rejeição imediata · Mediação relacional do estigma
              </p>
            </div>

            {/* Evidence Comparison Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-0.5">
              <div className="p-2.5 rounded-2xl bg-rose-50/80 border border-rose-200/70 text-left">
                <div className="flex items-center gap-1 text-rose-700 mb-0.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span className="text-[14px] font-bold uppercase tracking-wider">Bullying / Teasing</span>
                </div>
                <p className="text-[16px] font-semibold text-rose-900 leading-snug">
                  Prediz maior dificuldade psicossocial no desenvolvimento
                </p>
              </div>

              <div className="p-2.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 text-left">
                <div className="flex items-center gap-1 text-emerald-700 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[14px] font-bold uppercase tracking-wider">Ter um Bom Amigo</span>
                </div>
                <p className="text-[16px] font-semibold text-emerald-900 leading-snug">
                  Fator protetor: prediz menor dificuldade psicossocial
                </p>
              </div>
            </div>

            <p className="text-[16px] text-[#334155] leading-snug font-normal mt-1.5">
              Aos 10 anos, a visibilidade isoladamente não se associou a maior insatisfação com aparência nem a assédio. Em adolescentes, <strong className="text-[#0f1012] font-semibold">a associação foi mediada pela experiência de assédio por pares</strong> (Estudo multi-informante, n = 146, 11–17 anos).
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-500">
              <span>Mecanismo:</span>
              <span className="text-[#0f1012] font-bold">Mediação Interpessoal</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6b4e83] text-white text-[16px] font-bold shadow-xs">
              <span>Visibilidade ≠ Rejeição</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Protocolo Social em Cada Fase (Dark Obsidian · Eixo 4)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-white/10",
          "bg-[#0f1012] text-white",
          "shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.28)]",
          "hover:border-[#6b4e83]/40 transition-all duration-400 ease-out p-4 flex flex-col justify-between"
        )}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#6b4e83]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-purple-300 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/25">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                Diretriz do Protocolo de Psicologia
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-white leading-tight font-['Urbanist',sans-serif]">
                Protocolo Social — Investigar Ativamente em Cada Fase
              </h3>
              <p className="text-[16px] font-semibold text-purple-300 mt-0.5">
                Não presumir estigma — mas perguntar ativamente e sistematicamente sobre ele
              </p>
            </div>

            {/* Protocol Dimension Tags */}
            <div className="pt-0.5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
                DIMENSÕES SOCIAIS A RASTREAR NO SEGUIMENTO:
              </h4>
              <div className="flex flex-wrap items-center gap-1.5 my-1">
                {protocolDimensions.map((dim) => (
                  <span
                    key={dim}
                    className="px-2.5 py-0.5 rounded-lg text-[14px] font-semibold bg-white/[0.06] border border-white/10 text-zinc-200"
                  >
                    {dim}
                  </span>
                ))}
              </div>

              <p className="text-[16px] text-zinc-300 leading-snug font-normal mt-2">
                Avaliar o ecossistema social da criança é tão crucial quanto o acompanhamento cirúrgico e anatômico: a qualidade das interações e a proteção contra o estigma determinam a trajetória de adaptação.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-400">
              <span>Conduta:</span>
              <span className="text-white font-bold">Investigação Ativa</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 text-[16px] font-bold shadow-xs">
              <span>Perguntar em Cada Fase</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
