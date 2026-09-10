"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Slide10PlasticityProps {
  isActive?: boolean
}

export default function Slide10Plasticity({ isActive = true }: Slide10PlasticityProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between font-['Satoshi',sans-serif] text-[#0f1012]">
      {/* Grade Superior: Gráfico 1 (2 cols) + Painel Lateral com Gráfico 2 e Síntese (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-0 items-stretch">
        
        {/* Card Principal: Gráfico 1 (Knudsen / Gabard-Durnam) — ocupa 7 colunas */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 p-6 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between"
        >
          <div>
            {/* Header com Tag Apple */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0071e3] bg-[#0071e3]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0071e3]/20">
                A plasticidade muda com o tempo
              </span>
              <span className="text-xs font-semibold text-[#5f6062]">
                Knudsen (2004) · Gabard-Durnam & McLaughlin (2019)
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#0f1012] leading-tight">
              Período Crítico vs. Período Sensível ao Longo do Desenvolvimento
            </h3>
          </div>

          {/* Gráfico 1 Vetorial Nítido com Anotações Estáticas Fixas */}
          <div className="w-full my-2 relative">
            <svg
              viewBox="0 0 940 380"
              className="w-full h-auto max-h-[280px] display-block overflow-visible"
              aria-label="Gráfico comparativo entre período crítico e sensível"
            >
              <defs>
                <linearGradient id="gradCriticoArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0071e3" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#0071e3" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="gradSensivelArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f1012" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#0f1012" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Faixa Translúcida: Janela Crítica */}
              <rect
                x="196"
                y="30"
                width="156"
                height="276"
                fill="#e8f2fc"
                stroke="#0071e3"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                rx="6"
              />
              <text
                x="274"
                y="20"
                textAnchor="middle"
                fontFamily="'Satoshi', sans-serif"
                fontSize="17"
                fontWeight="700"
                fill="#0071e3"
                letterSpacing="0.04em"
              >
                janela crítica
              </text>

              {/* Eixos */}
              <line x1="85" y1="24" x2="85" y2="306" stroke="#c9cacc" strokeWidth="2" />
              <line x1="85" y1="306" x2="905" y2="306" stroke="#c9cacc" strokeWidth="2" />

              {/* Rótulos dos Eixos */}
              <text
                x="40"
                y="165"
                textAnchor="middle"
                fontFamily="'Satoshi', sans-serif"
                fontSize="18"
                fontWeight="600"
                fill="#5f6062"
                transform="rotate(-90 40 165)"
              >
                plasticidade
              </text>
              <text x="95" y="338" fontFamily="'Satoshi', sans-serif" fontSize="17" fontWeight="500" fill="#5f6062">
                início da vida
              </text>
              <text x="450" y="338" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="17" fontWeight="500" fill="#5f6062">
                infância · adolescência
              </text>
              <text x="895" y="338" textAnchor="end" fontFamily="'Satoshi', sans-serif" fontSize="17" fontWeight="500" fill="#5f6062">
                vida adulta
              </text>

              {/* Áreas preenchidas sob as curvas */}
              <path
                d="M85,296 C150,285 190,76 271,60 C350,44 366,275 450,292 C600,300 750,302 905,302 L905,306 L85,306 Z"
                fill="url(#gradCriticoArea)"
              />
              <path
                d="M85,290 C180,276 250,146 380,132 C520,118 640,192 760,224 C820,240 860,245 905,248 L905,306 L85,306 Z"
                fill="url(#gradSensivelArea)"
              />

              {/* Curva Período Crítico (Azul Apple) */}
              <path
                d="M85,296 C150,285 190,76 271,60 C350,44 366,275 450,292 C600,300 750,302 905,302"
                fill="none"
                stroke="#0071e3"
                strokeWidth="3.6"
                strokeLinecap="round"
              />

              {/* Curva Período Sensível (Preto / Carvão) */}
              <path
                d="M85,290 C180,276 250,146 380,132 C520,118 640,192 760,224 C820,240 860,245 905,248"
                fill="none"
                stroke="#0f1012"
                strokeWidth="3.6"
                strokeLinecap="round"
              />

              {/* Badges e Textos Anotados Diretamente nas Curvas */}
              {/* Badge Período Crítico */}
              <g transform="translate(290, 88)">
                <rect x="-6" y="-20" width="138" height="26" rx="6" fill="#0071e3" />
                <text x="63" y="-2" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="700" fill="#ffffff">
                  período crítico
                </text>
              </g>

              {/* Badge Período Sensível */}
              <g transform="translate(470, 122)">
                <rect x="-6" y="-20" width="144" height="26" rx="6" fill="#0f1012" />
                <text x="66" y="-2" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="700" fill="#ffffff">
                  período sensível
                </text>
              </g>

              {/* Destaque Plasticidade Residual Evidente */}
              <g transform="translate(710, 276)">
                <rect x="-135" y="-18" width="270" height="24" rx="5" fill="#f2f2f4" stroke="#c9cacc" strokeWidth="1" />
                <text x="0" y="-1" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="14" fontWeight="600" fill="#5f6062">
                  plasticidade residual evidente
                </text>
              </g>
            </svg>
          </div>

          {/* Definições Conceituais Exatas do Slide Original */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-black/[0.06]">
            <div className="bg-[#f8f9fa] rounded-2xl p-3.5 border border-black/[0.04]">
              <p className="m-0 text-[14px] font-normal leading-relaxed text-[#3f4042]">
                <strong className="text-[#0071e3] font-semibold">Crítico:</strong> uma experiência específica é necessária dentro de uma janela temporal mais restrita.
              </p>
            </div>
            <div className="bg-[#f8f9fa] rounded-2xl p-3.5 border border-black/[0.04]">
              <p className="m-0 text-[14px] font-normal leading-relaxed text-[#3f4042]">
                <strong className="text-[#0f1012] font-semibold">Sensível:</strong> a experiência influencia de modo particularmente intenso numa fase — mas mudanças continuam possíveis depois.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito: Gráfico 2 e Card "Plasticidade Significa" — ocupa 5 colunas */}
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          
          {/* Card Gráfico 2: As 4 Curvas de Sistemas (Não existe curva única) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
          >
            <div>
              <p className="text-lg font-semibold font-['Urbanist',sans-serif] tracking-tight text-[#0f1012] m-0 mb-1">
                Não existe uma única curva de plasticidade
              </p>
              <p className="text-xs text-[#6a6b6d] m-0 mb-2">
                Diferentes circuitos e domínios atingem seus picos em fases distintas
              </p>
            </div>

            {/* SVG do Gráfico 2 com as 4 Curvas e Rótulos Claros */}
            <div className="w-full my-1">
              <svg
                viewBox="0 0 620 280"
                className="w-full h-auto max-h-[190px] display-block overflow-visible"
                aria-label="Quatro curvas conceituais de plasticidade com picos em momentos diferentes"
              >
                {/* Eixos */}
                <line x1="65" y1="230" x2="600" y2="230" stroke="#c9cacc" strokeWidth="2" />
                <line x1="65" y1="20" x2="65" y2="230" stroke="#c9cacc" strokeWidth="2" />

                {/* 4 Curvas */}
                {/* 1. Sensorial */}
                <path
                  d="M65,220 C105,110 145,50 195,56 C245,62 285,175 355,210 C435,224 515,226 600,228"
                  fill="none"
                  stroke="#0071e3"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* 2. Linguagem */}
                <path
                  d="M65,226 C125,182 175,86 245,78 C325,70 395,165 465,202 C515,218 555,224 600,226"
                  fill="none"
                  stroke="#0071e3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                {/* 3. Funções Cognitivas */}
                <path
                  d="M65,228 C155,220 225,152 315,118 C405,86 475,134 600,196"
                  fill="none"
                  stroke="#0f1012"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* 4. Socioemocional */}
                <path
                  d="M65,226 C175,218 255,188 345,162 C445,134 515,152 600,172"
                  fill="none"
                  stroke="#0f1012"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.55"
                />

                {/* Rótulos Diretos e Fixos sobre as Curvas */}
                <g fontFamily="'Satoshi', sans-serif" fontSize="16" fontWeight="600">
                  <text x="195" y="40" textAnchor="middle" fill="#0071e3">
                    sensorial
                  </text>
                  <text x="250" y="60" textAnchor="middle" fill="#0071e3" opacity="0.85">
                    linguagem
                  </text>
                  <text x="390" y="88" fill="#0f1012">
                    funções cognitivas
                  </text>
                  <text x="430" y="254" fill="#0f1012" opacity="0.75">
                    socioemocional
                  </text>
                </g>
              </svg>
            </div>

            <p className="text-[12px] text-[#6a6b6d] m-0 italic pt-1 border-t border-black/[0.05]">
              Esquema conceitual — não representa idades universais.
            </p>
          </motion.div>

          {/* Card Destaque: "Plasticidade significa" (Estilo Tint Apple / Obsidian) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-5 bg-[#e8f2fc] border border-[#0071e3]/20 shadow-[0_4px_16px_rgba(0,113,227,0.06)]"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0071e3]">
                Plasticidade significa
              </span>
              <span className="text-[10px] font-bold text-[#0071e3] bg-white/70 px-2 py-0.5 rounded-full border border-[#0071e3]/20">
                Kolb et al. (2017)
              </span>
            </div>
            <p className="text-base font-medium text-[#0f1012] leading-snug m-0">
              O impacto da experiência depende de quando ela ocorre, sobre qual sistema atua e do estado desse sistema.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Grid Inferior: Os 4 Cards de KPI / Síntese Clínica (Estilo Advanced Stats) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        
        {/* Card 1: Período Crítico */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6a6b6d]">
                Janela Estrita
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0071e3] border border-blue-200">
                Obrigatório
              </span>
            </div>
            <p className="text-base font-bold text-[#0f1012] tracking-tight">Período Crítico</p>
            <p className="text-sm font-semibold text-[#0071e3] mt-0.5">Queda Pós-Janela</p>
          </div>
          <p className="text-[11px] text-[#5f6062] leading-snug mt-2 pt-2 border-t border-black/[0.05]">
            Experiência estritamente necessária dentro de janela temporal restrita.
          </p>
        </motion.div>

        {/* Card 2: Período Sensível */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6a6b6d]">
                Regra em Humanos
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Prevalente
              </span>
            </div>
            <p className="text-base font-bold text-[#0f1012] tracking-tight">Período Sensível</p>
            <p className="text-sm font-semibold text-emerald-700 mt-0.5">Janela Flexível</p>
          </div>
          <p className="text-[11px] text-[#5f6062] leading-snug mt-2 pt-2 border-t border-black/[0.05]">
            Influência intensa em fase específica, mas modificações continuam possíveis depois.
          </p>
        </motion.div>

        {/* Card 3: Síntese de Modificabilidade */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.34 }}
          className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6a6b6d]">
                Neurodesenvolvimento
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200">
                Modificável
              </span>
            </div>
            <p className="text-base font-bold text-[#0f1012] tracking-tight">Capacidade Residual</p>
            <p className="text-sm font-semibold text-[#0f1012] mt-0.5">Não é Ilimitada</p>
          </div>
          <p className="text-[11px] text-[#5f6062] leading-snug mt-2 pt-2 border-t border-black/[0.05]">
            O cérebro permanece modificável — mas sua capacidade de mudança não é constante.
          </p>
        </motion.div>

        {/* Card 4: Pergunta Clínica Central */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6a6b6d]">
                Pergunta Clínica
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                Foco Prático
              </span>
            </div>
            <p className="text-base font-bold text-[#0f1012] tracking-tight">O que, quando e como</p>
            <p className="text-sm font-semibold text-purple-700 mt-0.5">Resposta & Grau</p>
          </div>
          <p className="text-[11px] text-[#5f6062] leading-snug mt-2 pt-2 border-t border-black/[0.05]">
            A clínica indaga o que é plástico, quando, em resposta a quê e em que grau.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
