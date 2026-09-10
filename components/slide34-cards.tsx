"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide34Props {
  isActive?: boolean;
  className?: string;
}

/* =========================================================================
   BANNER INFERIOR: Card Obsidian Dark de Alto Impacto (Abaixo do Menu Radial)
   ========================================================================= */
export function Slide34BannerCard({ isActive = true, className }: Slide34Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
      transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "w-full p-4 rounded-3xl bg-[#0f1012] text-white shadow-[0_6px_28px_rgba(0,0,0,0.14)] border border-white/[0.08] relative overflow-hidden flex items-center justify-between gap-4",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#4b6b4f]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-3.5 relative z-10">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-emerald-400">
          <Sparkles className="w-5 h-5" />
        </div>
        <p className="text-[14px] font-medium text-zinc-100 leading-snug m-0 font-['Urbanist',sans-serif]">
          Instrumento não substitui entrevista. Entrevista não substitui instrumento. <strong className="text-emerald-300 font-bold">E nenhum dos dois substitui a voz da criança.</strong>
        </p>
      </div>

      <span className="shrink-0 text-[10.5px] font-bold text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/30 whitespace-nowrap">
        Tríade Avaliativa
      </span>
    </motion.div>
  );
}

/* =========================================================================
   COLUNA DIREITA: Dupla Contrastante (Discordância Dark + Tipologia Light)
   ========================================================================= */
export default function Slide34RightCards({ isActive = true, className }: Slide34Props) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[640px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — Evidência de Discordância (Eixo 6)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#4b6b4f]/18 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Evidência Empírica de Informantes
            </span>
            <span className="text-[10px] font-semibold text-[#d5e4d7] bg-[#4b6b4f]/30 px-2.5 py-0.5 rounded-full border border-[#4b6b4f]/40">
              Eixo 6 · Protocolo
            </span>
          </div>
          <h4 className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Pais e Filhos Realmente Discordam
          </h4>
          <p className="text-[11.5px] font-medium text-zinc-300 mt-1 leading-relaxed">
            A discrepância entre respondentes é frequente e contém informação clínica valiosa:
          </p>
        </div>

        {/* 2 Estudos em Mini-Blocos Escuros */}
        <div className="grid grid-cols-2 gap-2 my-2 relative z-10">
          <div className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              PROMIS · 221 Crianças
            </span>
            <p className="text-[11px] text-zinc-300 leading-snug m-0">
              Divergência por idade e domínio — sem correlação em ansiedade entre 8–10 anos.
            </p>
          </div>

          <div className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              PedsQL · 338 Crianças
            </span>
            <p className="text-[11px] text-zinc-300 leading-snug m-0">
              Baixa concordância entre pais e filhos de 8–10 anos em grande parte dos domínios.
            </p>
          </div>
        </div>

        <p className="text-[11.5px] text-zinc-300 leading-snug m-0 relative z-10 font-normal">
          Discordância não é erro de mensuração: representa perspectivas de ambientes diferentes.
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-xs font-semibold text-zinc-400">Diretriz:</span>
          <span className="text-xs font-bold text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            Integrar, Não Anular
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — Tipologia e Prática Clínica (Eixo 6)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4b6b4f] bg-[#4b6b4f]/[0.10] px-2.5 py-0.5 rounded-full border border-[#4b6b4f]/25 font-['Urbanist',sans-serif]">
              Bateria e Aplicação Clínica
            </span>
            <span className="text-[11px] font-semibold text-[#5f6062]">
              Seleção Escalonada
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            Tipologia de Instrumentos &amp; Decisão
          </h4>
          <p className="text-[11px] text-[#5f6062] mt-0.5">
            Estratificação de instrumentos padronizados para o protocolo:
          </p>
        </div>

        {/* 3 Tipologias em Grid */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#4b6b4f] block">Genérico</span>
            <p className="text-[11px] font-bold text-[#0f1012] leading-tight mt-0.5">PROMIS · SDQ · PedsQL</p>
            <p className="text-[10px] text-[#5f6062] leading-tight mt-0.5">Não aplicar juntos.</p>
          </div>

          <div className="p-2 rounded-xl bg-[#f0faf2] border border-[#4b6b4f]/20">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#4b6b4f] block">Específico</span>
            <p className="text-[11px] font-bold text-[#4b6b4f] leading-tight mt-0.5">CLEFT-Q · FACE-Q</p>
            <p className="text-[10px] text-[#5f6062] leading-tight mt-0.5">8–29a · 12 escalas.</p>
          </div>

          <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#4b6b4f] block">Risco Familiar</span>
            <p className="text-[11px] font-bold text-[#0f1012] leading-tight mt-0.5">PAT-CV</p>
            <p className="text-[10px] text-[#5f6062] leading-tight mt-0.5">Risco psicossocial.</p>
          </div>
        </div>

        {/* Métrica de Impacto Clínico */}
        <div className="p-2.5 rounded-2xl bg-[#f8f9fa] border border-black/[0.05] flex items-center justify-between gap-3">
          <p className="text-[11px] text-[#334155] leading-snug m-0">
            Em 70 consultas com CLEFT-Q (média 12,7a), discordância com entrevista em 36%: a integração <strong className="text-[#0f1012] font-semibold">mudou a conduta em 11 consultas</strong>.
          </p>
          <span className="shrink-0 font-['Urbanist',sans-serif] text-[20px] font-bold text-[#4b6b4f] bg-white px-2 py-0.5 rounded-xl border border-[#4b6b4f]/20">
            16%
          </span>
        </div>

        <p className="text-[11px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Até 8 anos: observação e cuidadores</span>
          <span className="font-semibold text-[#4b6b4f]">Entrevista + PRO = Nova Informação</span>
        </p>
      </motion.div>
    </div>
  );
}
