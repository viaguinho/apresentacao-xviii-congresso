"use client";

import { motion } from "framer-motion";
import { Users, HeartHandshake, Sparkles, MessageCircle, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide23CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide23Cards({ isActive = true, className }: Slide23CardsProps) {
  const pillars = [
    { label: "Iniciativa Social", icon: Sparkles },
    { label: "Responsividade", icon: HeartHandshake },
    { label: "Comunicação", icon: MessageCircle },
    { label: "Cooperação", icon: Users },
    { label: "Leitura do Contexto", icon: Eye },
  ];

  return (
    <div
      className={cn(
        "w-full grid grid-cols-2 gap-5 items-stretch select-none font-['Satoshi',sans-serif]",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — Definição de Competência Social (Eixo 4)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#6b4e83]/18 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Definição Clínica
            </span>
            <span className="text-[10px] font-semibold text-[#e9dff0] bg-[#6b4e83]/30 px-2.5 py-0.5 rounded-full border border-[#6b4e83]/40">
              Eixo 4 · Social
            </span>
          </div>
          <h4 className="text-[19px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Competência Social ≠ Extroversão
          </h4>
          <p className="text-[16px] font-medium text-zinc-300 mt-1.5 leading-relaxed">
            É alcançar objetivos sociais preservando, ao mesmo tempo, relações adequadas e recíprocas com os outros.
          </p>
        </div>

        {/* Mini Grid de 5 Pilares */}
        <div className="flex flex-wrap gap-1.5 my-3 relative z-10">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-[#6b4e83]/40 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[#a882c7] shrink-0" />
                <span className="text-[15px] font-medium text-zinc-200">{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-sm font-semibold text-zinc-400">Equilíbrio funcional:</span>
          <span className="text-sm font-bold text-[#e9dff0] bg-[#6b4e83]/25 px-2.5 py-0.5 rounded-full border border-[#6b4e83]/35">
            Objetivos Pessoais ↔ Vínculo com Pares
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — Evidência Empírica Meta-análise (Eixo 4)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6b4e83] bg-[#6b4e83]/[0.10] px-2.5 py-0.5 rounded-full border border-[#6b4e83]/20 font-['Urbanist',sans-serif]">
              Evidência Empírica · Meta-análise
            </span>
            <span className="text-[15px] font-semibold text-[#5f6062]">
              80 amostras · N = 4.441
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            Vínculo Inicial e Competência com Pares
          </h4>
          <p className="text-[11.5px] text-[#5f6062] mt-0.5">
            Segurança do apego primário associada longitudinalmente à competência social:
          </p>
        </div>

        {/* Box da Métrica de Efeito */}
        <div className="p-3 rounded-2xl bg-[#f7f4f9] border border-[#6b4e83]/20 my-2 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b4e83] block">Tamanho de Efeito Meta-analítico</span>
            <div className="font-['Urbanist',sans-serif] text-[24px] font-bold tracking-tight text-[#6b4e83]">
              d = 0,39 <span className="text-[16px] font-normal text-zinc-600">(IC 95% 0,32–0,47)</span>
            </div>
          </div>
          <span className="text-[10.5px] font-bold text-[#6b4e83] bg-white px-2.5 py-1 rounded-full border border-[#6b4e83]/20 shadow-2xs">
            Associação Robusta
          </span>
        </div>

        <p className="text-[11.5px] text-[#334155] leading-relaxed m-0 font-normal">
          A associação permaneceu significativa quando a competência social foi avaliada em idades escolares posteriores.
        </p>

        <p className="text-[15px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Associação probabilística — não determinística</span>
          <span className="font-semibold text-[#6b4e83]">A base não é destino</span>
        </p>
      </motion.div>
    </div>
  );
}
