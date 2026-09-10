"use client";

import { motion } from "framer-motion";
import { Users, Eye, Sparkles, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide25CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide25Cards({ isActive = true, className }: Slide25CardsProps) {
  const processes = [
    {
      label: "Mentalizar",
      icon: Compass,
      desc: "Inferir intenções e interpretar sinais sociais mais complexos.",
    },
    {
      label: "Avaliação Social",
      icon: Eye,
      desc: "Maior sensibilidade ao feedback; rejeição ganha peso subjetivo.",
    },
    {
      label: "Influência dos Pares",
      icon: Users,
      desc: "Normas, comportamentos e preferências de pessoas importantes.",
    },
    {
      label: "Pertencimento & Identidade",
      icon: Sparkles,
      desc: "Inserção em grupos, identidade social e autonomia crescente.",
    },
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[620px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — 4 Processos Sociocognitivos (Eixo 4)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#6b4e83]/18 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Reorientação Social na Adolescência
            </span>
            <span className="text-[10px] font-semibold text-[#e9dff0] bg-[#6b4e83]/30 px-2.5 py-0.5 rounded-full border border-[#6b4e83]/40">
              Eixo 4 · Social
            </span>
          </div>
          <h4 className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Os Pares como Nova Referência para o “Eu”
          </h4>
          <p className="text-[11.5px] font-medium text-zinc-300 mt-1 leading-relaxed">
            Pertencer, ser avaliado e compreender a perspectiva alheia ganham nova relevância:
          </p>
        </div>

        {/* 4 Dimensões em Grid 2x2 com micro-cards estilo Slide 11 */}
        <div className="grid grid-cols-2 gap-2 my-2 relative z-10">
          {processes.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-3.5 h-3.5 text-[#a882c7] shrink-0" />
                  <span className="text-[11px] font-bold text-zinc-200 font-['Urbanist',sans-serif]">{p.label}</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug font-normal m-0">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-xs font-semibold text-zinc-400">Axioma sistêmico:</span>
          <span className="text-xs font-bold text-[#e9dff0] bg-[#6b4e83]/25 px-2.5 py-0.5 rounded-full border border-[#6b4e83]/35">
            Reorientação Social ≠ Substituição da Família
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — Mecanismo de Influência dos Pares (Eixo 4)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6b4e83] bg-[#6b4e83]/[0.10] px-2.5 py-0.5 rounded-full border border-[#6b4e83]/20 font-['Urbanist',sans-serif]">
              Evidência Empírica · Meta-análise
            </span>
            <span className="text-[11px] font-semibold text-[#5f6062]">
              60 estudos · 233 efeitos
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            A Influência dos Pares é um Mecanismo
          </h4>
          <p className="text-[11.5px] text-[#5f6062] mt-0.5">
            Mecanismo de mediação contextual — não um desfecho negativo por si só:
          </p>
        </div>

        {/* Métrica e Explicação */}
        <div className="p-3 rounded-2xl bg-[#f7f4f9] border border-[#6b4e83]/20 my-2 flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-[11.5px] text-[#2d2e30] leading-snug m-0">
              Pode aumentar comportamentos pró-sociais (cooperação, engajamento) ou de risco, dependendo do contexto.
            </p>
          </div>
          <div className="text-right shrink-0 pl-3 border-l border-[#6b4e83]/20">
            <span className="font-['Urbanist',sans-serif] text-[26px] font-bold text-[#6b4e83] leading-none block">
              β = 0,08
            </span>
            <span className="text-[10px] font-semibold text-[#5f6062] block mt-0.5">efeito pequeno, porém robusto</span>
          </div>
        </div>

        <p className="text-[11.5px] text-[#334155] leading-relaxed m-0 font-normal">
          Os pares passam a fornecer informação crítica sobre identidade, pertencimento, normas e valor social.
        </p>

        <p className="text-[11px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Papel formativo na adolescência</span>
          <span className="font-semibold text-[#6b4e83]">Mecanismo de Socialização</span>
        </p>
      </motion.div>
    </div>
  );
}
