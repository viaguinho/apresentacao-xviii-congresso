"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Slide38CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide38Cards({ isActive = true, className }: Slide38CardsProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[640px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — Discordância Informativa (Eixo 7)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="px-5 py-4 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#33415c]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Discordância Informativa
            </span>
            <span className="text-[14px] font-semibold text-slate-300 bg-[#33415c]/35 px-2.5 py-0.5 rounded-full border border-slate-400/30">
              Eixo 7 · Longitude
            </span>
          </div>
          <h4 className="text-[21px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Discrepância Não É Erro: É Informação
          </h4>
          <p className="text-[16px] font-medium text-zinc-300 mt-1 leading-snug">
            221 crianças (8–17 anos, PROMIS): a concordância variou amplamente com a idade e o domínio avaliado.
          </p>
        </div>

        {/* 2 Diálogos de Perspectivas em Contraste */}
        <div className="grid grid-cols-2 gap-2 my-2 relative z-10">
          <div className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            <span className="text-[14px] font-bold uppercase tracking-wider text-zinc-400 block mb-1 font-['Urbanist',sans-serif]">
              Pai / Cuidador
            </span>
            <p className="text-[16px] text-zinc-200 leading-snug m-0">
              “Não vejo qualquer dificuldade com os colegas.”
            </p>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#33415c]/25 border border-slate-400/30">
            <span className="text-[14px] font-bold uppercase tracking-wider text-slate-300 block mb-1 font-['Urbanist',sans-serif]">
              Adolescente
            </span>
            <p className="text-[16px] text-white leading-snug m-0">
              “Evito o recreio porque não me sinto parte do grupo.”
            </p>
          </div>
        </div>

        {/* Axioma Integrador */}
        <div className="p-2.5 bg-zinc-900/95 rounded-2xl border border-zinc-800/90 relative z-10 mb-1">
          <p className="text-[15px] text-zinc-200 leading-snug m-0">
            Duas perspectivas descrevem contextos diferentes da mesma realidade. <strong className="text-white font-semibold">Não tente fazer os relatos coincidirem. Integre-os na formulação clínica.</strong>
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-[16px] font-semibold text-zinc-400">Interpretação clínica:</span>
          <span className="text-[16px] font-bold text-slate-300 bg-slate-500/20 px-2.5 py-0.5 rounded-full border border-slate-400/30">
            Quem × O Quê × Contexto × Idade
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — Evolução das Fontes de Informação (Eixo 7)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="px-5 py-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#33415c] bg-[#33415c]/[0.10] px-2.5 py-0.5 rounded-full border border-[#33415c]/25 font-['Urbanist',sans-serif]">
              Volpicelli et al. 2020 · Bous et al. 2020
            </span>
            <span className="text-[15px] font-semibold text-[#5f6062]">
              Multi-informante
            </span>
          </div>
          <h4 className="text-[21px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            Evolução das Fontes de Informação
          </h4>
          <p className="text-[15px] text-[#5f6062] mt-0.5">
            Quem informa melhor muda com a idade: peso relativo do relato do cuidador e do paciente:
          </p>
        </div>

        {/* Gráfico SVG de Transição Integrado */}
        <div className="my-1.5 bg-[#fcfdfe] rounded-2xl p-2 border border-black/[0.04]">
          <svg viewBox="0 0 580 150" className="w-full h-auto max-h-[135px] display-block overflow-visible" aria-label="Curvas de transição de peso de informante">
            <defs>
              <linearGradient id="slide38CaregiverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="slide38SelfGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#33415c" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="slide38SelfArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#33415c" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#33415c" stopOpacity="0.00" />
              </linearGradient>
            </defs>

            {/* Linhas Guia */}
            <g stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3 3">
              <line x1="45" y1="20" x2="540" y2="20" />
              <line x1="45" y1="65" x2="540" y2="65" />
              <line x1="45" y1="110" x2="540" y2="110" />
            </g>

            {/* Eixos */}
            <line x1="45" y1="110" x2="540" y2="110" stroke="#cbd5e1" strokeWidth="1.4" />
            <text x="45" y="130" fontFamily="'Urbanist', sans-serif" fontSize="16" fontWeight="700" fill="#5f6062">criança pequena</text>
            <text x="290" y="130" textAnchor="middle" fontFamily="'Urbanist', sans-serif" fontSize="16" fontWeight="700" fill="#5f6062">escolar</text>
            <text x="540" y="130" textAnchor="end" fontFamily="'Urbanist', sans-serif" fontSize="16" fontWeight="700" fill="#33415c">adolescente</text>

            {/* Área sob o autorrelato */}
            <path d="M45,95 C190,85 380,40 540,24 L540,110 L45,110 Z" fill="url(#slide38SelfArea)" />

            {/* Curva 1: Cuidador (Descendente sem chegar a zero) */}
            <path d="M45,28 C190,40 380,70 540,88" fill="none" stroke="url(#slide38CaregiverGrad)" strokeWidth="3" strokeLinecap="round" />

            {/* Curva 2: Autorrelato (Ascendente) */}
            <path d="M45,95 C190,85 380,40 540,24" fill="none" stroke="url(#slide38SelfGrad)" strokeWidth="3.2" strokeLinecap="round" />

            {/* Nós */}
            <g transform="translate(45, 28)"><circle r="4.5" fill="#1e293b" /><circle r="1.5" fill="#ffffff" /></g>
            <g transform="translate(540, 88)"><circle r="4.5" fill="#64748b" /><circle r="1.5" fill="#ffffff" /></g>
            <g transform="translate(540, 24)"><circle r="5" fill="#33415c" /><circle r="1.8" fill="#ffffff" /></g>

            {/* Tag Flutuante Central */}
            <g transform="translate(290, 18)">
              <rect x="-80" y="-9" width="160" height="18" rx="9" fill="#ffffff" stroke="#33415c" strokeWidth="1" strokeOpacity="0.35" />
              <text x="0" y="4" textAnchor="middle" fontFamily="'Urbanist', sans-serif" fontSize="16" fontWeight="800" fill="#1e293b">
                ✦ TRANSIÇÃO DE PERSPECTIVA
              </text>
            </g>
          </svg>
        </div>

        <p className="text-[16px] text-[#334155] leading-snug m-0 font-normal">
          O relato do cuidador nunca chega a zero: à medida que a idade avança, o relato do jovem ganha precisão e protagonismo.
        </p>

        <p className="text-[15px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Quem relata × O que relata</span>
          <span className="font-semibold text-[#33415c]">Integração de Perspectivas Complementares</span>
        </p>
      </motion.div>
    </div>
  );
}
