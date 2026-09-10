"use client";

import { motion } from "framer-motion";
import { Eye, Brain, MessageSquare, Users, Sparkles, Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide20CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide20Cards({ isActive = true, className }: Slide20CardsProps) {
  const domains = [
    { label: "Linguagem", icon: MessageSquare, desc: "Nomeação de estados e mediação verbal" },
    { label: "Cognição", icon: Brain, desc: "Funções executivas e controle inibitório" },
    { label: "Teoria da Mente", icon: Eye, desc: "Inferência de intenções e crenças alheias" },
    { label: "Relações Sociais", icon: Users, desc: "Sincronia diádica e co-regulação do cuidador" },
    { label: "Experiência Social", icon: Sparkles, desc: "Exposição ecológica a trocas cotidianas" },
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[620px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Clean Light Apple — Meta-análise Riddell et al. 2024 (Eixo 3)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8c3e27] bg-[#b5563a]/[0.10] px-2.5 py-0.5 rounded-full border border-[#b5563a]/25 font-['Urbanist',sans-serif]">
              Riddell et al. (2024) · Meta-análise
            </span>
            <span className="text-[11px] font-semibold text-[#5f6062]">
              129 estudos · N = 31.101
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            Reconhecimento Emocional na Infância
          </h4>
          <p className="text-[11px] text-[#5f6062] mt-0.5">
            Acurácia progressiva no reconhecimento de expressões faciais entre 2 e 12 anos:
          </p>
        </div>

        {/* Gráfico SVG de precisão integrado ao card */}
        <div className="my-1.5 bg-[#fcfdfe] rounded-2xl p-2.5 border border-black/[0.04]">
          <svg viewBox="0 0 580 155" className="w-full h-auto max-h-[140px] display-block overflow-visible" aria-label="Curva de acurácia de reconhecimento de emoções">
            <defs>
              <linearGradient id="slide20CardLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b5563a" />
                <stop offset="60%" stopColor="#cf6647" />
                <stop offset="100%" stopColor="#e07a5f" />
              </linearGradient>
              <linearGradient id="slide20CardArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b5563a" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#b5563a" stopOpacity="0.00" />
              </linearGradient>
            </defs>

            {/* Linhas Guia */}
            <g stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3 3">
              <line x1="45" y1="25" x2="550" y2="25" />
              <line x1="45" y1="70" x2="550" y2="70" />
              <line x1="45" y1="115" x2="550" y2="115" />
            </g>

            {/* Eixos */}
            <line x1="45" y1="15" x2="45" y2="125" stroke="#cbd5e1" strokeWidth="1.4" />
            <line x1="45" y1="125" x2="550" y2="125" stroke="#cbd5e1" strokeWidth="1.4" />

            <text x="50" y="145" fontFamily="'Urbanist', sans-serif" fontSize="13" fontWeight="700" fill="#8c3e27">2 anos</text>
            <text x="280" y="145" textAnchor="middle" fontFamily="'Urbanist', sans-serif" fontSize="12" fontWeight="600" fill="#71717a">6 anos</text>
            <text x="545" y="145" textAnchor="end" fontFamily="'Urbanist', sans-serif" fontSize="13" fontWeight="700" fill="#8c3e27">12 anos</text>

            {/* Área e Linha da Curva */}
            <path d="M50,118 C160,95 270,60 380,38 C440,28 490,24 545,20 L545,125 L50,125 Z" fill="url(#slide20CardArea)" />
            <path d="M50,118 C160,95 270,60 380,38 C440,28 490,24 545,20" fill="none" stroke="url(#slide20CardLine)" strokeWidth="3.2" strokeLinecap="round" />

            {/* Nós */}
            <g transform="translate(50, 118)"><circle r="8" fill="#b5563a" fillOpacity="0.2" /><circle r="4.5" fill="#b5563a" /><circle r="1.8" fill="#ffffff" /></g>
            <g transform="translate(280, 60)"><circle r="7" fill="#cf6647" fillOpacity="0.2" /><circle r="4" fill="#cf6647" /><circle r="1.8" fill="#ffffff" /></g>
            <g transform="translate(545, 20)"><circle r="10" fill="#e07a5f" fillOpacity="0.25" /><circle r="5" fill="#b5563a" /><circle r="2" fill="#ffffff" /></g>

            {/* Tag Flutuante */}
            <g transform="translate(260, 24)">
              <rect x="-85" y="-10" width="170" height="20" rx="10" fill="#ffffff" stroke="#b5563a" strokeWidth="1" strokeOpacity="0.35" />
              <text x="0" y="4" textAnchor="middle" fontFamily="'Urbanist', sans-serif" fontSize="10.5" fontWeight="700" fill="#8c3e27">
                ↗ Acurácia Progressiva
              </text>
            </g>
          </svg>
        </div>

        {/* Mini Grid com polaridades observadas */}
        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Felicidade</span>
            <p className="text-[11px] text-[#5f6062] mt-0.5 leading-snug">
              Mais precocemente e facilmente reconhecida.
            </p>
          </div>
          <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Medo e Nojo</span>
            <p className="text-[11px] text-[#5f6062] mt-0.5 leading-snug">
              Entre as mais tardias e difíceis de discriminar.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-[#6a6b6d] italic m-0 pt-1.5 border-t border-black/[0.05] flex items-center justify-between">
          <span>129 estudos sintetizados</span>
          <span className="font-semibold text-[#8c3e27]">Acurácia melhora de 2 a 12 anos</span>
        </p>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Obsidian Escuro Apple — E dependem de outros domínios (Eixo 3)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#b5563a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Integração Transdomínio
            </span>
            <span className="text-[10px] font-semibold text-[#f8d7ce] bg-[#b5563a]/25 px-2.5 py-0.5 rounded-full border border-[#b5563a]/40">
              Eixo 3 · Emocional
            </span>
          </div>
          <h4 className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            E Dependem de Outros Domínios
          </h4>
          <p className="text-[11.5px] font-medium text-zinc-300 mt-1 leading-relaxed">
            O reconhecimento e a regulação emocional constroem-se em estreita interdependência:
          </p>
        </div>

        {/* Tags / Pills de Domínios Conectados */}
        <div className="flex flex-wrap gap-1.5 my-2.5 relative z-10">
          {domains.map((dom) => {
            const Icon = dom.icon;
            return (
              <div
                key={dom.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-[#b5563a]/40 transition-colors"
              >
                <Icon className="w-3 h-3 text-[#cf6647] shrink-0" />
                <span className="text-[11px] font-semibold text-zinc-200">{dom.label}</span>
              </div>
            );
          })}
        </div>

        {/* Bloco de Destaque com o Axioma Regulatório */}
        <div className="p-3 bg-zinc-900/95 rounded-2xl border border-zinc-800/90 flex items-start gap-2.5 relative z-10 my-1">
          <Sliders className="w-4 h-4 text-[#cf6647] shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-200 leading-relaxed m-0 font-normal">
            Regular emoções exige mais do que controlar-se: é reconhecer o que está acontecendo, atribuir significado e selecionar uma resposta adequada ao contexto.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-xs font-semibold text-zinc-400">Processo integrado:</span>
          <span className="text-xs font-bold text-[#f8d7ce] bg-[#b5563a]/20 px-2.5 py-0.5 rounded-full border border-[#b5563a]/30">
            Perceber ↔ Compreender ↔ Regular
          </span>
        </div>
      </motion.div>
    </div>
  );
}
