"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Hand, MessageSquare, Users, Activity, Sparkles, RefreshCw, ArrowUpRight, ArrowDownRight, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide11CascadesProps {
  isActive?: boolean
}

export default function Slide11Cascades({ isActive = true }: Slide11CascadesProps) {
  const [activeDomain, setActiveDomain] = useState<number | null>(null)
  const [hoveredScale, setHoveredScale] = useState<string | null>(null)

  const domains = [
    { id: "motor", label: "Motor", icon: Hand, desc: "Postura, alcance, locomoção e desengate motor" },
    { id: "cognicao", label: "Cognição / Exploração", icon: Eye, desc: "Atenção sustentada, rastreio visual e causa-efeito" },
    { id: "linguagem", label: "Comunicação / Linguagem", icon: MessageSquare, desc: "Vocalização, balbucio intencional e gestos" },
    { id: "social", label: "Social / Ambiente", icon: Users, desc: "Atenção compartilhada, resposta do cuidador e co-regulação" },
  ]

  const kpis = [
    {
      label: "CONECTIVIDADE",
      title: "Entre domínios",
      badge: "Cross-domain",
      badgeType: "emerald",
      desc: "O desenvolvimento não opera em silos; o avanço em um sistema impacta e reorganiza os outros.",
    },
    {
      label: "RECIPROCIDADE",
      title: "Multidirecional",
      badge: "Criança ↔ Ambiente",
      badgeType: "blue",
      desc: "A criança modifica ativamente as respostas do ambiente, reconfigurando os inputs que recebe.",
    },
    {
      label: "TEMPORALIDADE",
      title: "Multiescalar",
      badge: "Micro a Macro",
      badgeType: "indigo",
      desc: "De micro-interações momento a momento a meses de consolidação e anos de trajetória.",
    },
    {
      label: "PROGNOSE CLÍNICA",
      title: "Maleável",
      badge: "Cascata ≠ Destino",
      badgeType: "amber",
      desc: "Pequenas variações acumulam peso, mas intervenções oportunas modulam o curso em qualquer ponto.",
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between font-['Satoshi',sans-serif] text-[#0f1012]">
      {/* Grade Superior: Mecanismo Geral da Cascata (7 cols) + Painel Empírico e Co-regulação (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0 items-stretch">
        
        {/* Card Principal: Mecanismo Geral das Cascatas (Schneider & West, 2025; Masten & Cicchetti, 2010) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 p-6 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between"
        >
          <div>
            {/* Header com Tag Apple */}
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0071e3] bg-[#0071e3]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0071e3]/20">
                <Activity className="w-3.5 h-3.5" />
                Mecanismo de Propagação
              </span>
              <span className="text-xs font-semibold text-[#5f6062]">
                Schneider & West (2025) · Masten & Cicchetti (2010)
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#0f1012] leading-tight">
              Efeitos que se Propagam entre Domínios e ao Longo do Tempo
            </h3>
            <p className="text-xs text-[#5f6062] mt-0.5">
              Mudanças em um sistema criam novas possibilidades de ação e reconfiguram a experiência da criança.
            </p>
          </div>

          {/* Diagrama Vetorial Nítido das 4 Trilhas com Cascatas e Conexões Diagonais */}
          <div className="w-full my-2 relative bg-[#fcfdfe] rounded-2xl p-3 border border-black/[0.04]">
            <svg
              viewBox="0 0 940 340"
              className="w-full h-auto max-h-[250px] display-block overflow-visible"
              aria-label="Diagrama de trilhas paralelas e efeitos em cascata entre domínios"
            >
              <defs>
                {/* Gradiente da Linha de Cascata */}
                <linearGradient id="cascadeLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0071e3" />
                  <stop offset="45%" stopColor="#0ea5e9" />
                  <stop offset="85%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>

                {/* Marcadores de Seta */}
                <marker
                  id="arrowheadBlue"
                  markerWidth="7"
                  markerHeight="7"
                  refX="6"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0071e3" />
                </marker>
                <marker
                  id="arrowheadIndigo"
                  markerWidth="7"
                  markerHeight="7"
                  refX="6"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 7 3.5, 0 7" fill="#6366f1" />
                </marker>
                <marker
                  id="arrowheadBack"
                  markerWidth="7"
                  markerHeight="7"
                  refX="6"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 7 3.5, 0 7" fill="#0f1012" opacity="0.6" />
                </marker>
              </defs>

              {/* Trilhas Horizontais dos Domínios */}
              {domains.map((dom, i) => {
                const y = 46 + i * 72
                return (
                  <g key={dom.id}>
                    {/* Linha de fundo da trilha */}
                    <line
                      x1="180"
                      y1={y}
                      x2="900"
                      y2={y}
                      stroke="#e5e7eb"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    
                    {/* Rótulo da trilha na esquerda */}
                    <g
                      className="cursor-pointer transition-opacity"
                      onMouseEnter={() => setActiveDomain(i)}
                      onMouseLeave={() => setActiveDomain(null)}
                    >
                      <rect
                        x="10"
                        y={y - 18}
                        width="155"
                        height="36"
                        rx="8"
                        fill={activeDomain === i ? "#e8f2fc" : "#f4f5f7"}
                        stroke={activeDomain === i ? "#0071e3" : "transparent"}
                        strokeWidth="1"
                      />
                      <text
                        x="24"
                        y={y + 5}
                        fontFamily="'Satoshi', sans-serif"
                        fontSize="14"
                        fontWeight="700"
                        fill={activeDomain === i ? "#0071e3" : "#3f4042"}
                        letterSpacing="-0.2px"
                      >
                        {dom.label}
                      </text>
                    </g>
                  </g>
                )
              })}

              {/* Fluxo Principal da Cascata: Caminho Fluido e Conexões Diagonais */}
              {/* Etapa 1: Motor (Sentar/Alcançar) -> Cognição (Exploração de Objetos) */}
              <path
                d="M 240 46 C 290 46, 320 118, 380 118"
                fill="none"
                stroke="url(#cascadeLineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                markerEnd="url(#arrowheadBlue)"
              />

              {/* Etapa 2: Cognição -> Comunicação (Novas Trocas e Balbucio) */}
              <path
                d="M 420 118 C 470 118, 500 190, 560 190"
                fill="none"
                stroke="url(#cascadeLineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                markerEnd="url(#arrowheadIndigo)"
              />

              {/* Etapa 3: Comunicação -> Social / Ambiente (Resposta do Cuidador) */}
              <path
                d="M 600 190 C 650 190, 680 262, 740 262"
                fill="none"
                stroke="url(#cascadeLineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                markerEnd="url(#arrowheadIndigo)"
              />

              {/* Ramificação Secundária Transdomínio: Motor diretamente para Social (Atenção Compartilhada) */}
              <path
                d="M 250 46 C 360 46, 520 250, 715 260"
                fill="none"
                stroke="#0071e3"
                strokeWidth="1.6"
                strokeDasharray="4 4"
                opacity="0.45"
              />

              {/* Seta de Reciprocidade: O Ambiente Responde e Retorna à Criança */}
              <path
                d="M 750 262 C 670 320, 390 315, 290 60"
                fill="none"
                stroke="#0f1012"
                strokeWidth="2"
                strokeDasharray="6 5"
                opacity="0.55"
                markerEnd="url(#arrowheadBack)"
              />

              {/* Nós Interativos da Cascata (Pop points com brilho) */}
              {/* Ponto 1: Mudança Inicial (Motor) */}
              <g transform="translate(240, 46)">
                <circle r="16" fill="#0071e3" fillOpacity="0.15" />
                <circle r="8" fill="#0071e3" />
                <circle r="3.5" fill="#ffffff" />
                <text x="0" y="-18" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="13" fontWeight="700" fill="#0071e3">
                  1. Mudança inicial
                </text>
              </g>

              {/* Ponto 2: Novas Ações & Exploração (Cognição) */}
              <g transform="translate(400, 118)">
                <circle r="16" fill="#0ea5e9" fillOpacity="0.15" />
                <circle r="8" fill="#0ea5e9" />
                <circle r="3.5" fill="#ffffff" />
                <text x="0" y="-18" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="13" fontWeight="700" fill="#0284c7">
                  2. Novas ações &amp; exploração
                </text>
              </g>

              {/* Ponto 3: Novas Experiências & Trocas (Comunicação) */}
              <g transform="translate(580, 190)">
                <circle r="16" fill="#6366f1" fillOpacity="0.15" />
                <circle r="8" fill="#6366f1" />
                <circle r="3.5" fill="#ffffff" />
                <text x="0" y="-18" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="13" fontWeight="700" fill="#4f46e5">
                  3. Novas experiências
                </text>
              </g>

              {/* Ponto 4: Resposta do Ambiente / Cuidadores (Social) */}
              <g transform="translate(740, 262)">
                <circle r="16" fill="#8b5cf6" fillOpacity="0.15" />
                <circle r="8" fill="#8b5cf6" />
                <circle r="3.5" fill="#ffffff" />
                <text x="0" y="-18" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="13" fontWeight="700" fill="#7c3aed">
                  4. Mudança noutro domínio
                </text>
              </g>

              {/* Tag Flutuante: O ambiente responde em co-regulação */}
              <g transform="translate(520, 314)">
                <rect x="-140" y="-13" width="280" height="26" rx="13" fill="#ffffff" stroke="#0f1012" strokeWidth="1.2" strokeOpacity="0.25" />
                <text x="0" y="4" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="12" fontWeight="600" fill="#2d2e30">
                  ↺ O ambiente responde: Co-regulação
                </text>
              </g>
            </svg>
          </div>

          {/* Marcadores de Escalas Temporais (Momento a Momento -> Aprendizagem -> Trajetória) */}
          <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-[#5f6062]">
              <Layers className="w-3.5 h-3.5 text-[#0071e3]" />
              <span className="font-semibold text-[#0f1012]">Escalas temporais integradas:</span>
            </div>
            
            <div className="flex items-center gap-4 text-[13px]">
              <span
                onMouseEnter={() => setHoveredScale("seg")}
                onMouseLeave={() => setHoveredScale(null)}
                className={cn(
                  "px-2.5 py-1 rounded-lg border transition-all cursor-default",
                  hoveredScale === "seg"
                    ? "bg-[#0071e3]/10 border-[#0071e3] text-[#0071e3] font-semibold"
                    : "bg-[#f4f5f7] border-transparent text-[#3f4042]"
                )}
              >
                <strong>Segundos</strong> → interação real
              </span>

              <span className="text-[#c9cacc]">→</span>

              <span
                onMouseEnter={() => setHoveredScale("mes")}
                onMouseLeave={() => setHoveredScale(null)}
                className={cn(
                  "px-2.5 py-1 rounded-lg border transition-all cursor-default",
                  hoveredScale === "mes"
                    ? "bg-[#0071e3]/10 border-[#0071e3] text-[#0071e3] font-semibold"
                    : "bg-[#f4f5f7] border-transparent text-[#3f4042]"
                )}
              >
                <strong>Meses</strong> → aprendizagem
              </span>

              <span className="text-[#c9cacc]">→</span>

              <span
                onMouseEnter={() => setHoveredScale("ano")}
                onMouseLeave={() => setHoveredScale(null)}
                className={cn(
                  "px-2.5 py-1 rounded-lg border transition-all cursor-default",
                  hoveredScale === "ano"
                    ? "bg-[#0071e3]/10 border-[#0071e3] text-[#0071e3] font-semibold"
                    : "bg-[#f4f5f7] border-transparent text-[#3f4042]"
                )}
              >
                <strong>Anos</strong> → trajetória
              </span>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito: Breakdown Section (Dois Cards: Co-regulação & Exemplo Empírico de Sentar) */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          
          {/* Card 1: Card Obsidian Escuro Apple — Dinâmica Recíproca e Cascatas */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] flex-1"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Dinâmica Recíproca
                </span>
                <span className="text-[10px] font-semibold text-zinc-300 bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
                  Criança ↔ Ambiente
                </span>
              </div>
              <h4 className="text-xl font-bold tracking-tight text-white">
                Co-regulação Desenvolvimental
              </h4>
              <p className="text-[12px] font-medium text-zinc-300 mt-1.5 leading-relaxed">
                A criança não é receptora passiva: suas conquistas alteram as respostas dos cuidadores e remodelam o input recebido.
              </p>
            </div>

            {/* Dois Blocos de Destaque Formatados */}
            <div className="flex flex-col gap-2 my-2">
              {/* Bloco 1: Nova Habilidade */}
              <div className="p-3 bg-zinc-900/90 rounded-2xl border border-zinc-800/80 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#0071e3] shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-200 leading-relaxed m-0 font-normal">
                  Uma nova habilidade não muda apenas o que a criança consegue fazer: muda o que ela passa a experimentar.
                </p>
              </div>

              {/* Bloco 2: Diferenças Iniciais */}
              <div className="p-3 bg-zinc-900/90 rounded-2xl border border-zinc-800/80 flex items-start gap-2.5">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-300 leading-relaxed m-0 font-normal">
                  Pequenas diferenças iniciais podem ganhar importância porque modificam as experiências que vêm depois.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1.5 border-t border-zinc-800">
              <span className="text-xs font-semibold text-zinc-400">
                Princípio fundamental:
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/25">
                Cascata ≠ Destino
              </span>
            </div>
          </motion.div>

          {/* Card 2: Evidência Concreta — Aprender a Sentar (Iverson et al., 2023) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0071e3] bg-[#0071e3]/[0.08] px-2 py-0.5 rounded-md">
                  Evidência Empírica
                </span>
                <span className="text-[11px] font-semibold text-[#5f6062]">
                  Iverson et al. (2023)
                </span>
              </div>
              <h4 className="text-base font-bold text-[#0f1012] tracking-tight">
                Um Exemplo: Aprender a Sentar
              </h4>
              <p className="text-[11px] text-[#5f6062] mt-0.5">
                Uma habilidade motora isolada reconfigura quatro dimensões cognitivas e sociais:
              </p>
            </div>

            {/* 4 Ramificações Clínicas em Mini-Grid Elegante */}
            <div className="grid grid-cols-2 gap-2 my-2.5">
              <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1012]">
                  <Eye className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>Campo visual</span>
                </div>
                <p className="text-[11px] text-[#5f6062] mt-1 leading-snug">
                  Amplia o horizonte visual e o rastreamento face a face.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1012]">
                  <Hand className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mãos livres</span>
                </div>
                <p className="text-[11px] text-[#5f6062] mt-1 leading-snug">
                  Desengate postural para explorar e manipular objetos.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1012]">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Vocalização</span>
                </div>
                <p className="text-[11px] text-[#5f6062] mt-1 leading-snug">
                  A postura estável organiza a respiração para fonação.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1012]">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                  <span>Atenção conjunta</span>
                </div>
                <p className="text-[11px] text-[#5f6062] mt-1 leading-snug">
                  Modifica a interação dialógica com adultos e pares.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-[#6a6b6d] italic m-0 pt-1.5 border-t border-black/[0.05]">
              Exemplo de cascata — não uma sequência linear obrigatória.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Grid Inferior: Os 4 Cards de KPI / Princípios Essenciais (Advanced Stats Row) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
            className={cn(
              "p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between transition-colors",
              kpi.badgeType === "emerald" && "hover:border-emerald-300 hover:bg-emerald-50/40",
              kpi.badgeType === "blue" && "hover:border-blue-300 hover:bg-blue-50/40",
              kpi.badgeType === "indigo" && "hover:border-indigo-300 hover:bg-indigo-50/40",
              kpi.badgeType === "amber" && "hover:border-amber-300 hover:bg-amber-50/40"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6a6b6d]">
                  {kpi.label}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                    kpi.badgeType === "emerald" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                    kpi.badgeType === "blue" && "bg-blue-50 text-[#0071e3] border-blue-200",
                    kpi.badgeType === "indigo" && "bg-indigo-50 text-indigo-700 border-indigo-200",
                    kpi.badgeType === "amber" && "bg-amber-50 text-amber-700 border-amber-200"
                  )}
                >
                  {kpi.badge}
                </span>
              </div>
              <p className="text-lg font-bold text-[#0f1012] tracking-tight">{kpi.title}</p>
            </div>
            <p className="text-[11px] text-[#5f6062] leading-snug mt-2 pt-2 border-t border-black/[0.05]">
              {kpi.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
