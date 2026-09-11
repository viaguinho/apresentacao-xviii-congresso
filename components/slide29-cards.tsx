"use client";

import { motion } from "framer-motion";
import { Smile, Activity, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide29CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide29Cards({ isActive = true, className }: Slide29CardsProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[620px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Clean Light Apple — O Que Importa para os Pacientes (Eixo 5)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a2f3f] bg-[#8a2f3f]/[0.10] px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/25 font-['Urbanist',sans-serif]">
              Desfechos Centrados no Paciente
            </span>
            <span className="text-[15px] font-semibold text-[#5f6062]">
              136 entrevistas · 6 países
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            O Que Realmente Importa para os Pacientes
          </h4>
          <p className="text-[11.5px] text-[#5f6062] mt-0.5">
            Preocupações nucleares identificadas internacionalmente em estudos com PROs:
          </p>
        </div>

        {/* 3 Subcards de Dimensões em Mini-Grid */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#0f1012] mb-1">
              <Smile className="w-3.5 h-3.5 text-[#8a2f3f]" />
              <span>Aparência</span>
            </div>
            <p className="text-[15px] text-[#5f6062] leading-snug m-0">
              Face, nariz, lábios, dentes, mandíbula e cicatriz.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#0f1012] mb-1">
              <Activity className="w-3.5 h-3.5 text-[#8a2f3f]" />
              <span>Função</span>
            </div>
            <p className="text-[15px] text-[#5f6062] leading-snug m-0">
              Fala compreensível, alimentação, sucção e fonação.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#0f1012] mb-1">
              <Heart className="w-3.5 h-3.5 text-[#8a2f3f]" />
              <span>Qualidade de Vida</span>
            </div>
            <p className="text-[15px] text-[#5f6062] leading-snug m-0">
              Psicológica, social, escolar e conforto com a fala.
            </p>
          </div>
        </div>

        <p className="text-[15px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Os participantes relatam:</span>
          <span className="font-semibold text-[#8a2f3f]">Preocupações mudam ao longo do tempo</span>
        </p>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Obsidian Escuro Apple — Contraste de Perspectivas (Eixo 5)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#8a2f3f]/18 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Perspectivas em Diálogo
            </span>
            <span className="text-[10px] font-semibold text-[#f8d7dc] bg-[#8a2f3f]/30 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/40">
              Eixo 5 · Craniofacial
            </span>
          </div>
          <h4 className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Resultado Técnico ≠ Desfecho Percebido
          </h4>
          <p className="text-[11.5px] font-medium text-zinc-300 mt-1 leading-relaxed">
            Perguntas diferentes que precisam convergir na formulação do cuidado:
          </p>
        </div>

        {/* 2 Blocos de Diálogo em Contraste */}
        <div className="grid grid-cols-2 gap-2 my-2 relative z-10">
          <div className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1 font-['Urbanist',sans-serif]">
              Profissional
            </span>
            <p className="text-[16px] text-zinc-200 font-medium leading-snug m-0">
              “Tecnicamente, o resultado cirúrgico está muito bom.”
            </p>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#8a2f3f]/15 border border-[#8a2f3f]/30">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#f8a5b2] block mb-1 font-['Urbanist',sans-serif]">
              Paciente
            </span>
            <p className="text-[16px] text-white font-medium leading-snug m-0">
              “Mas isso resolveu aquilo que era importante para mim?”
            </p>
          </div>
        </div>

        {/* Axioma de Conclusão */}
        <div className="p-2.5 bg-zinc-900/95 rounded-2xl border border-zinc-800/90 relative z-10 mb-1">
          <p className="text-[11.5px] text-zinc-200 leading-snug m-0">
            Um bom resultado técnico é necessário — mas não suficiente para definir um bom desfecho. Avaliação objetiva e medidas relatadas pelo paciente (PROs) são <strong className="text-white font-semibold">complementares</strong>.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-sm font-semibold text-zinc-400">Axioma de conduta:</span>
          <span className="text-sm font-bold text-[#f8d7dc] bg-[#8a2f3f]/25 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/35">
            Cuidado Centrado na Experiência
          </span>
        </div>
      </motion.div>
    </div>
  );
}
