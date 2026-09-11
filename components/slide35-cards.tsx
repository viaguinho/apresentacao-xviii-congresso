"use client";

import { motion } from "framer-motion";
import { Calendar, BellRing, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide35CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide35Cards({ isActive = true, className }: Slide35CardsProps) {
  const redFlags = [
    "Ideação suicida / autoagressão",
    "Sintomas psiquiátricos graves",
    "Risco de violência / negligência",
    "Declínio funcional abrupto",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[620px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Clean Light Apple — Modalidades de Avaliação (Eixo 6)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4b6b4f] bg-[#4b6b4f]/[0.10] px-2.5 py-0.5 rounded-full border border-[#4b6b4f]/25 font-['Urbanist',sans-serif]">
              Fluxo do Protocolo
            </span>
            <span className="text-[15px] font-semibold text-[#5f6062]">
              Tempo &amp; Gatilhos Clínicos
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            Avaliação Programada vs. Disparada por Evento
          </h4>
          <p className="text-[15px] text-[#5f6062] mt-0.5">
            Duas vias complementares de vigilância longitudinal:
          </p>
        </div>

        {/* 2 Subcards em Grid */}
        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#0f1012] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#4b6b4f]" />
                <span>Programada</span>
              </div>
              <p className="text-[15px] text-[#5f6062] leading-snug m-0">
                Dx → 18m → 3a → 5a → 8a; depois 8a → 10a → 12a → 15a → 18a.
              </p>
            </div>
            <span className="text-[10px] text-zinc-400 italic mt-1 block">Exemplo — calendário flexível.</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#0f1012] mb-1">
                <BellRing className="w-3.5 h-3.5 text-amber-700" />
                <span>Por Evento</span>
              </div>
              <p className="text-[15px] text-[#5f6062] leading-snug m-0">
                Cirurgias, transição escolar, bullying, fonação, aparência ou demanda expressa.
              </p>
            </div>
            <span className="text-[10px] text-amber-700 font-semibold mt-1 block">Resposta adaptativa à queixa.</span>
          </div>
        </div>

        <p className="text-[15px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>O calendário cronológico não pode impedir:</span>
          <span className="font-semibold text-[#4b6b4f]">Avaliar quando a trajetória muda</span>
        </p>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Obsidian Escuro Apple — Sinais de Alerta Imediatos (Eixo 6)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-red-950/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 font-['Urbanist',sans-serif]">
              Segurança &amp; Triagem Crítica
            </span>
            <span className="text-[10px] font-semibold text-red-200 bg-red-900/30 px-2.5 py-0.5 rounded-full border border-red-500/40">
              Avaliação Imediata
            </span>
          </div>
          <h4 className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Gatilhos de Proteção e Urgência
          </h4>
          <p className="text-[11.5px] font-medium text-zinc-300 mt-1 leading-relaxed">
            Situações que sobrepõem qualquer agendamento e exigem suporte ágil:
          </p>
        </div>

        {/* Chips de Alertas Críticos */}
        <div className="flex flex-wrap gap-1.5 my-2 relative z-10">
          {redFlags.map((flag) => (
            <span
              key={flag}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-red-950/30 border border-red-800/40 text-[10.5px] font-medium text-red-200"
            >
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              {flag}
            </span>
          ))}
        </div>

        {/* Evidência e Racional Ético */}
        <div className="p-2.5 bg-zinc-900/95 rounded-2xl border border-zinc-800/90 relative z-10 mb-1">
          <p className="text-[15px] text-zinc-200 leading-snug m-0">
            Em 305 pacientes com fissura (≥6 anos), 16,7% relataram ideação suicida prévia; piores escores no CLEFT-Q correlacionaram-se ao risco. <strong className="text-white font-semibold">O PRO não é diagnóstico de suicídio:</strong> funciona como sentinela que dispara avaliação imediata.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-sm font-semibold text-zinc-400">Diretriz:</span>
          <span className="text-sm font-bold text-red-300 bg-red-500/15 px-2.5 py-0.5 rounded-full border border-red-500/30">
            Prioridade de Segurança
          </span>
        </div>
      </motion.div>
    </div>
  );
}
