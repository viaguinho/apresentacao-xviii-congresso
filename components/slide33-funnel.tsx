"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2, Zap } from "lucide-react";

interface Slide33FunnelProps {
  isActive?: boolean;
}

export default function Slide33Funnel({ isActive = true }: Slide33FunnelProps) {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  const criteriaTags = [
    "pedido do paciente",
    "preocupação dos pais",
    "preocupação da equipe",
    "mudança abrupta de funcionamento",
    "evento adverso significativo",
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center select-none font-['Satoshi',sans-serif] py-1">
      {/* =========================================================================
          1. PIRÂMIDE GEOMÉTRICA COMPLETA & REFINADA + RÉGUA DE INTENSIDADE
          ========================================================================= */}
      <div className="relative w-full flex items-center justify-between gap-4">
        {/* SVG Container da Pirâmide */}
        <div className="relative flex-1">
          <svg
            viewBox="0 0 720 330"
            className="w-full h-auto overflow-visible filter drop-shadow-sm"
            aria-label="Pirâmide de três níveis de intensidade da avaliação psicossocial"
          >
            <defs>
              {/* Gradiente Clinical (Ápice - Alto Contraste) */}
              <linearGradient id="pyrClinicalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#005bb5" />
                <stop offset="100%" stopColor="#0071e3" />
              </linearGradient>

              {/* Gradiente Targeted (Intermediário) */}
              <linearGradient id="pyrTargetedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e1eefc" />
                <stop offset="100%" stopColor="#cde4fa" />
              </linearGradient>

              {/* Gradiente Universal (Base Ampla) */}
              <linearGradient id="pyrUniversalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f8fd" />
                <stop offset="100%" stopColor="#e4f0fc" />
              </linearGradient>

              {/* Filtro de Glow Suave para Hover */}
              <filter id="pyrGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0071e3" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* -------------------------------------------------------------
                NÍVEL 1: UNIVERSAL (Base Ampla)
                ------------------------------------------------------------- */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredLevel(2)}
              onMouseLeave={() => setHoveredLevel(null)}
              style={{
                opacity: hoveredLevel !== null && hoveredLevel !== 2 ? 0.45 : 1,
                transform: hoveredLevel === 2 ? "translateY(-1.5px)" : "translateY(0)",
              }}
            >
              {/* Trapézio da Base */}
              <polygon
                points="146,218 574,218 694,318 26,318"
                fill="url(#pyrUniversalGrad)"
                stroke="#0071e3"
                strokeWidth={hoveredLevel === 2 ? "2" : "1.4"}
                strokeOpacity={hoveredLevel === 2 ? "0.85" : "0.45"}
                filter={hoveredLevel === 2 ? "url(#pyrGlow)" : undefined}
                className="transition-all duration-300"
              />

              {/* Textos Internos perfeitamente calibrados */}
              <g transform="translate(360, 245)" textAnchor="middle">
                {/* Header: Nome + % */}
                <rect
                  x="-96"
                  y="-14"
                  width="192"
                  height="26"
                  rx="13"
                  fill="#ffffff"
                  stroke="#0071e3"
                  strokeWidth="1.2"
                  strokeOpacity="0.3"
                />
                <text
                  x="0"
                  y="4"
                  fontFamily="'Urbanist', sans-serif"
                  fontSize="15"
                  fontWeight="800"
                  fill="#0071e3"
                  letterSpacing="0.06em"
                >
                  UNIVERSAL · 59,9%
                </text>

                {/* Subtítulo e Método */}
                <text
                  x="0"
                  y="34"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="13.5"
                  fontWeight="600"
                  fill="#1e293b"
                >
                  rastreamento para todos
                </text>
                <text
                  x="0"
                  y="52"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="12"
                  fontWeight="500"
                  fill="#64748b"
                >
                  breve · padronizado · repetível
                </text>
              </g>
            </g>

            {/* -------------------------------------------------------------
                NÍVEL 2: TARGETED (Intermediário)
                ------------------------------------------------------------- */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredLevel(1)}
              onMouseLeave={() => setHoveredLevel(null)}
              style={{
                opacity: hoveredLevel !== null && hoveredLevel !== 1 ? 0.45 : 1,
                transform: hoveredLevel === 1 ? "translateY(-1.5px)" : "translateY(0)",
              }}
            >
              {/* Trapézio Central */}
              <polygon
                points="252,116 468,116 568,212 152,212"
                fill="url(#pyrTargetedGrad)"
                stroke="#0071e3"
                strokeWidth={hoveredLevel === 1 ? "2" : "1.4"}
                strokeOpacity={hoveredLevel === 1 ? "0.9" : "0.55"}
                filter={hoveredLevel === 1 ? "url(#pyrGlow)" : undefined}
                className="transition-all duration-300"
              />

              {/* Textos Internos */}
              <g transform="translate(360, 142)" textAnchor="middle">
                {/* Header: Nome + % */}
                <rect
                  x="-92"
                  y="-14"
                  width="184"
                  height="26"
                  rx="13"
                  fill="#ffffff"
                  stroke="#0071e3"
                  strokeWidth="1.2"
                  strokeOpacity="0.4"
                />
                <text
                  x="0"
                  y="4"
                  fontFamily="'Urbanist', sans-serif"
                  fontSize="14.5"
                  fontWeight="800"
                  fill="#005bb5"
                  letterSpacing="0.06em"
                >
                  TARGETED · 32,3%
                </text>

                {/* Subtítulo e Método */}
                <text
                  x="0"
                  y="33"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="13"
                  fontWeight="600"
                  fill="#0f172a"
                >
                  risco aumentado ou preocupação
                </text>
                <text
                  x="0"
                  y="50"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="11.5"
                  fontWeight="500"
                  fill="#475569"
                >
                  entrevista ampliada · instrumentos específicos
                </text>
              </g>
            </g>

            {/* -------------------------------------------------------------
                NÍVEL 3: CLINICAL (Ápice Triangular - Calibrado sem cortes)
                ------------------------------------------------------------- */}
            <g
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredLevel(0)}
              onMouseLeave={() => setHoveredLevel(null)}
              style={{
                opacity: hoveredLevel !== null && hoveredLevel !== 0 ? 0.45 : 1,
                transform: hoveredLevel === 0 ? "translateY(-1.5px)" : "translateY(0)",
              }}
            >
              {/* Triângulo do Ápice */}
              <polygon
                points="360,14 468,110 252,110"
                fill="url(#pyrClinicalGrad)"
                stroke="#0071e3"
                strokeWidth={hoveredLevel === 0 ? "2" : "1.4"}
                filter={hoveredLevel === 0 ? "url(#pyrGlow)" : undefined}
                className="transition-all duration-300"
              />

              {/* Textos Internos no terço inferior do ápice com 100% de margem e sem corte */}
              <g transform="translate(360, 68)" textAnchor="middle">
                {/* Pílula Compacta CLINICAL · 7,8% */}
                <rect
                  x="-54"
                  y="-11"
                  width="108"
                  height="22"
                  rx="11"
                  fill="rgba(255,255,255,0.25)"
                  stroke="#ffffff"
                  strokeWidth="1.1"
                  strokeOpacity="0.75"
                />
                <text
                  x="0"
                  y="4.5"
                  fontFamily="'Urbanist', sans-serif"
                  fontSize="11.5"
                  fontWeight="800"
                  fill="#ffffff"
                  letterSpacing="0.06em"
                >
                  CLINICAL · 7,8%
                </text>

                {/* Subtítulo */}
                <text
                  x="0"
                  y="22"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="11"
                  fontWeight="600"
                  fill="#ffffff"
                >
                  avaliação diagnóstica
                </text>
                <text
                  x="0"
                  y="34"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="10"
                  fontWeight="500"
                  fill="#e2e8f0"
                >
                  intervenção · encaminhamento
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* -----------------------------------------------------------------
            RÉGUA VERTICAL DE PRECISÃO MÉDICA (Layout Desacoplado: Linha + Texto)
            ----------------------------------------------------------------- */}
        <div className="flex items-center gap-2.5 h-[290px] select-none pl-1 pr-1">
          {/* Coluna 1: Seta + Linha com Marcadores (Ticks) + Ponto Base */}
          <div className="flex flex-col items-center justify-between h-full w-5">
            {/* Seta Superior Minimalista */}
            <div className="w-5 h-5 rounded-full bg-[#0071e3] text-white flex items-center justify-center shadow-xs">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Linha Vertical com Ticks apontando para a pirâmide */}
            <div className="relative flex-1 w-[2px] bg-gradient-to-t from-slate-300 via-[#0071e3]/60 to-[#0071e3] my-1.5">
              {/* Tick Clinical */}
              <div className="absolute top-[18%] -left-1.5 w-3 h-[1.5px] bg-[#0071e3]" />
              {/* Tick Targeted */}
              <div className="absolute top-[52%] -left-1.5 w-3 h-[1.5px] bg-[#0071e3]/70" />
              {/* Tick Universal */}
              <div className="absolute top-[86%] -left-1.5 w-3 h-[1.5px] bg-slate-400" />
            </div>

            {/* Ponto Base */}
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          </div>

          {/* Coluna 2: Rótulo de Texto em Leitura Ascendente (De baixo para cima) */}
          <div className="flex items-center justify-center h-full">
            <span
              className="font-['Urbanist'] text-[11px] font-bold text-slate-500 tracking-[0.16em] uppercase whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              intensidade da avaliação
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. DADOS DA AMOSTRA (PAT-CV) — COMPACTADO LOGO ABAIXO DA BASE
          ========================================================================= */}
      <div className="mt-1 pt-2 pb-2 border-t border-slate-200/80 w-full">
        <div className="flex items-center gap-4">
          {/* 59,9% Universal */}
          <div
            className={`cursor-pointer transition-all duration-200 ${
              hoveredLevel === 2 ? "scale-105" : hoveredLevel !== null ? "opacity-40" : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredLevel(2)}
            onMouseLeave={() => setHoveredLevel(null)}
          >
            <p className="m-0 font-['Urbanist'] text-[22px] font-bold text-[#0071e3] leading-none">
              59,9%
            </p>
            <p className="m-0 mt-0.5 font-['Satoshi'] text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              universal
            </p>
          </div>

          {/* 32,3% Targeted */}
          <div
            className={`cursor-pointer transition-all duration-200 ${
              hoveredLevel === 1 ? "scale-105" : hoveredLevel !== null ? "opacity-40" : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredLevel(1)}
            onMouseLeave={() => setHoveredLevel(null)}
          >
            <p className="m-0 font-['Urbanist'] text-[22px] font-bold text-[#0071e3] leading-none">
              32,3%
            </p>
            <p className="m-0 mt-0.5 font-['Satoshi'] text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              targeted
            </p>
          </div>

          {/* 7,8% Clinical */}
          <div
            className={`cursor-pointer transition-all duration-200 ${
              hoveredLevel === 0 ? "scale-105" : hoveredLevel !== null ? "opacity-40" : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredLevel(0)}
            onMouseLeave={() => setHoveredLevel(null)}
          >
            <p className="m-0 font-['Urbanist'] text-[22px] font-bold text-[#0071e3] leading-none">
              7,8%
            </p>
            <p className="m-0 mt-0.5 font-['Satoshi'] text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
              clinical
            </p>
          </div>

          {/* PAT-CV Note */}
          <p className="m-0 flex-1 font-['Satoshi'] text-[11px] leading-snug text-slate-500 pl-3 border-l border-slate-200">
            <strong className="text-slate-700">PAT-CV</strong> · 242 cuidadores e 217 crianças, 1 mês–17 anos. Amostra de validação — α = 0,86 · teste-reteste r = 0,77.
          </p>
        </div>
      </div>

      {/* =========================================================================
          3. CARD OBSIDIAN PRETO (ESTILO SLIDE 26) — AVALIAÇÃO APROFUNDADA
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="group relative w-full overflow-hidden rounded-3xl border border-white/12 bg-[#0f1012] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_36px_rgba(0,113,227,0.22)] hover:border-[#0071e3]/40 transition-all duration-300 p-3.5 mt-1"
      >
        {/* Ambient Glow Azul Apple */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#0071e3]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between">
          {/* Header do Card */}
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#60a5fa] shadow-xs">
                <ShieldAlert className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-[15.5px] font-bold tracking-tight text-white font-['Urbanist',sans-serif]">
                Podem furar direto para avaliação aprofundada
              </h3>
            </div>

            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider bg-[#0071e3]/20 text-[#93c5fd] border border-[#0071e3]/30">
              <Zap className="w-2.5 h-2.5 text-[#60a5fa]" />
              Critérios de Exceção
            </span>
          </div>

          {/* Tags dos Critérios Clínicos */}
          <div className="flex flex-wrap items-center gap-1.5 my-1">
            {criteriaTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-lg text-[10.5px] font-medium bg-white/[0.07] border border-white/12 text-slate-200 hover:bg-[#0071e3]/20 hover:border-[#0071e3]/40 hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Síntese Clínica de Fechamento */}
          <p className="text-[12px] text-slate-300 leading-relaxed font-normal mt-1.5 pt-1.5 border-t border-white/10">
            Um bom protocolo não avalia profundamente todo mundo: <strong className="text-white font-semibold">garante que ninguém com necessidade relevante passe despercebido.</strong>
          </p>

          {/* Rodapé do Card */}
          <div className="mt-1.5 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Conduta:</span>
              <span className="text-[#93c5fd] font-semibold">Acesso Direto Sem Barreira</span>
            </div>

            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0071e3]/25 text-[#bfdbfe] border border-[#0071e3]/35 font-semibold">
              <CheckCircle2 className="w-2.5 h-2.5 text-[#60a5fa]" />
              <span>Triagem Qualificada</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
