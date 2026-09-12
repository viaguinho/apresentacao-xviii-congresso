"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide18CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide18Cards({ isActive = true, className }: Slide18CardsProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3 select-none font-['Satoshi',sans-serif] max-w-[800px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — Axioma clínico transdisciplinar (Eixo 2)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="px-5 py-4 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        {/* Glow sutil petróleo/turquesa de fundo */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#0d6d66]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-zinc-400 font-['Urbanist',sans-serif]">
              Axioma clínico transdisciplinar
            </span>
            <span className="text-[14px] font-semibold text-teal-200 bg-[#0d6d66]/30 px-2 py-0.5 rounded-full border border-teal-500/30">
              Eixo 2 · Cognição
            </span>
          </div>
          <h4 className="text-[22px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Fala alterada ≠ linguagem alterada ≠ inteligência reduzida
          </h4>
          <p className="text-[17px] font-medium text-zinc-300 mt-1 leading-snug">
            Diferenciação estrutural e neurocognitiva na prática clínica com anomalias craniofaciais.
          </p>
        </div>

        {/* Três Blocos de Destaque Formatados */}
        <div className="grid grid-cols-3 gap-2 my-2 relative z-10">
          <div className="px-3 py-2 bg-zinc-900/90 rounded-2xl border border-zinc-800/80 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <Mic className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-[14px] font-bold uppercase tracking-wide text-zinc-400">Fala</span>
            </div>
            <p className="text-[16px] text-zinc-200 leading-snug font-medium">Articulação &amp; Fonação mecânica</p>
          </div>

          <div className="px-3 py-2 rounded-2xl border border-teal-500/30 bg-teal-950/20 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <MessageSquare className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="text-[14px] font-bold uppercase tracking-wide text-teal-300">Linguagem</span>
            </div>
            <p className="text-[16px] text-teal-100 leading-snug font-medium">Sistema Simbólico &amp; Semântica</p>
          </div>

          <div className="px-3 py-2 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <Brain className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[14px] font-bold uppercase tracking-wide text-emerald-300">Inteligência</span>
            </div>
            <p className="text-[16px] text-emerald-100 leading-snug font-medium">Potencial &amp; Funções Executivas</p>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-[16px] text-zinc-300 leading-snug font-medium mb-2">
            O objetivo não é procurar um déficit cognitivo da fissura, mas identificar quais processos favorecem ou limitam a aprendizagem e a participação naquele momento específico da trajetória.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
            <span className="text-[16px] font-semibold text-zinc-400">Diretriz clínica:</span>
            <span className="text-[16px] font-bold text-teal-300 bg-teal-500/15 px-2.5 py-0.5 rounded-full border border-teal-400/25">
              Perfis singulares ≠ destino
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — Evidência Empírica CPT (Eixo 2)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="px-5 py-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#0d6d66] bg-[#0d6d66]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0d6d66]/20 font-['Urbanist',sans-serif]">
              Evidência empírica · CPT
            </span>
            <span className="text-[15px] font-semibold text-[#5f6062]">
              Estudo unicêntrico · 6–16 anos
            </span>
          </div>
          <h4 className="text-[21px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif]">
            Atenção sustentada em tarefa contínua
          </h4>
          <p className="text-[16px] font-medium text-[#5f6062] mt-0.5">
            Comparação controlada de desempenho em medidas contínuas:
          </p>
        </div>

        {/* Métricas e Achados em Mini-Grid Elegante estilo Slide 11 */}
        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <div className="flex items-center justify-between text-[16px] font-bold text-[#0f1012]">
              <span className="font-['Urbanist',sans-serif] text-[#5f6062]">Grupo Controle</span>
              <span className="text-[14px] text-zinc-500 font-semibold">N basal</span>
            </div>
            <div className="font-['Urbanist',sans-serif] text-[22px] font-bold tracking-tight text-[#0f1012] mt-0.5">
              59,46 <span className="text-[16px] font-normal text-[#71717a]">± 14,90</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#f0faf9] border border-[#0d6d66]/20">
            <div className="flex items-center justify-between text-[16px] font-bold text-[#0d6d66]">
              <span className="font-['Urbanist',sans-serif]">Fissura Orofacial</span>
              <span className="text-[14px] font-bold text-[#0d6d66] bg-[#0d6d66]/10 px-1.5 py-0.5 rounded">p = 0,022</span>
            </div>
            <div className="font-['Urbanist',sans-serif] text-[22px] font-bold tracking-tight text-[#0d6d66] mt-0.5">
              51,03 <span className="text-[16px] font-normal text-[#0d6d66]/70">± 15,66</span>
            </div>
          </div>
        </div>

        <p className="text-[16px] text-[#334155] leading-snug m-0 font-medium">
          Nas demais tarefas executivas avaliadas não houve diferenças significativas e nenhum participante apresentou escores abaixo da média nos domínios do WISC-IV: <strong className="text-[#0f1012] font-semibold">resultado de grupo, não um perfil universal</strong>.
        </p>

        <p className="text-[15px] text-[#5f6062] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between gap-3">
          <span>Evidência: WISC-IV preservado</span>
          <span className="font-semibold text-[#0d6d66]">Média de grupo ≠ Destino individual</span>
        </p>
      </motion.div>
    </div>
  );
}

