"use client"

import { motion } from "framer-motion"
import {
  Layers,
  Split,
  Workflow,
  Target,
  ArrowRight,
  TrendingUp,
  Clock,
} from "lucide-react"

interface Slide14CognitionProps {
  isActive?: boolean
}

// Janelas e ritmos reais de maturação heterocrônica (qualitativo baseado na neuropsicologia do desenvolvimento)
const MATURATION_TRACKS = [
  {
    id: "atencao",
    label: "Atenção / Percepção",
    window: "0–3 anos",
    status: "Precoce",
    description: "Alerta, orientação e seleção básica",
    leftPercent: 0,
    widthPercent: 32,
    color: "#71717a",
    barGradient: "from-zinc-400 to-zinc-600",
    badgeBg: "bg-zinc-100 text-zinc-700 border-zinc-200",
  },
  {
    id: "linguagem",
    label: "Linguagem / Memória",
    window: "2–7 anos",
    status: "Intermediária",
    description: "Vocabulário, sintaxe e codificação semântica",
    leftPercent: 18,
    widthPercent: 44,
    color: "#14b8a6",
    barGradient: "from-teal-400 to-teal-600",
    badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
  },
  {
    id: "executivas",
    label: "Funções Executivas",
    window: "3–20+ anos",
    status: "Prolongada",
    description: "Inibição, memória de trabalho e flexibilidade",
    leftPercent: 28,
    widthPercent: 70,
    color: "#0d6d66",
    barGradient: "from-[#0d6d66] via-[#0d6d66] to-[#084852]",
    badgeBg: "bg-[#0d6d66]/15 text-[#0d6d66] border-[#0d6d66]/40",
  },
  {
    id: "ordemSuperior",
    label: "Ordem Superior",
    window: "12–25+ anos",
    status: "Tardia",
    description: "Raciocínio abstrato, metacognição e planejamento",
    leftPercent: 54,
    widthPercent: 46,
    color: "#0d6d66",
    barGradient: "from-[#0d6d66] to-emerald-500",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
]

export default function Slide14Cognition({ isActive = true }: Slide14CognitionProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#fdfdfd] text-[#0f1012] font-['Satoshi',sans-serif] px-[100px] pt-[90px] pb-[22px] select-none relative">
      
      {/* 1. BANNER DE TRANSIÇÃO E PONTE CONCEITUAL DO EIXO 2 */}
      <div className="w-full shrink-0 z-10">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#0d6d66]/15 via-[#e6f5f3] to-transparent px-4 py-1.5 rounded-lg border-l-4 border-[#0d6d66]">
          <div className="flex items-center gap-2.5">
            <span className="font-['Urbanist'] text-[15px] font-bold uppercase tracking-wider text-[#0d6d66] bg-[#0d6d66]/20 px-2 py-0.5 rounded border border-[#0d6d66]/30">
              Ponte Conceitual
            </span>
            <p className="text-[16px] font-medium text-[#0d6d66]">
              Dos fundamentos sistêmicos (Eixo 1) <ArrowRight className="w-3.5 h-3.5 inline mx-1 text-[#0d6d66]" /> À arquitetura e maturação das funções mentais (Eixo 2)
            </p>
          </div>
          <span className="text-[14px] font-semibold text-zinc-500 uppercase tracking-wider hidden sm:inline">
            Abertura do Eixo
          </span>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <div className="shrink-0 mt-5 mb-5">
        <h1 className="font-['Urbanist'] text-[46px] font-bold tracking-[-0.03em] text-[#0f1012] leading-[1.1]">
          Cognição não amadurece em bloco
        </h1>
        <p className="text-[22px] text-[#3f4042] font-normal mt-1.5 leading-[1.3] max-w-[1400px]">
          Diferentes funções emergem, se especializam e passam a trabalhar juntas ao longo do desenvolvimento.
        </p>
      </div>

      {/* 3. CONTEÚDO PRINCIPAL: DOIS BLOCOS LADO A LADO (card de QI removido) */}
      <div className="flex-1 grid grid-cols-2 gap-8 items-stretch min-h-0">

        {/* COLUNA ESQUERDA: HIERARQUIA FUNCIONAL INTERDEPENDENTE */}
        <div className="flex flex-col min-h-0 min-w-0">

          {/* BLOCO 1: HIERARQUIA FUNCIONAL INTERDEPENDENTE */}
          <div className="flex-1 flex flex-col bg-transparent relative min-h-0">
            <div className="flex items-center justify-between gap-4 mb-3 shrink-0">
              <div className="flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#0d6d66]" />
                <span className="font-['Urbanist'] text-[18px] font-bold uppercase tracking-widest text-[#0d6d66]">
                  Hierarquia funcional interdependente
                </span>
              </div>
              <span className="text-[16px] text-zinc-500 font-medium text-right">
                Conexões ascendentes e descendentes contínuas
              </span>
            </div>

            {/* Linha do Tempo com Trilha e Feixe Luminoso */}
            <div className="relative flex-1 flex flex-col justify-between gap-3 pl-9 pr-1">
              
              {/* Trilha Guia Vertical Minimalista */}
              <div className="absolute left-[13.25px] top-2.5 bottom-2.5 w-[2px] bg-gradient-to-b from-zinc-200 via-zinc-300/70 to-zinc-200 rounded-full overflow-hidden pointer-events-none">
                <motion.div
                  animate={
                    isActive
                      ? {
                          top: ["-25%", "105%"],
                          opacity: [0.2, 0.75, 0.2],
                        }
                      : { top: "50%", opacity: 0.3 }
                  }
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 w-full h-14 bg-gradient-to-t from-[#0d6d66]/80 via-[#0d6d66]/50 to-transparent rounded-full shadow-[0_0_6px_rgba(33,198,224,0.35)]"
                />
              </div>

              {/* CAMADA 4: FUNÇÕES DE ORDEM SUPERIOR */}
              <div className="relative px-4 py-3.5 rounded-2xl border bg-white/95 border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="absolute -left-[32px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[1.5px] border-[#0d6d66]/70 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#0d6d66]" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-9 h-9 rounded-lg bg-[#0d6d66]/15 text-[#0d6d66] font-['Urbanist'] font-bold text-[19px] flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h3 className="font-['Urbanist'] text-[23px] font-bold text-[#0f1012] leading-tight">
                        Funções cognitivas de ordem superior
                      </h3>
                      <p className="text-[18px] text-zinc-600 font-medium leading-snug mt-0.5">
                        Metacognição · raciocínio abstrato · resolução de problemas · tomada de decisão
                      </p>
                    </div>
                  </div>
                  <span className="text-[15px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                    Maturação tardia (adolescência+)
                  </span>
                </div>
              </div>

              {/* CAMADA 3: FUNÇÕES EXECUTIVAS NUCLEARES (NÚCLEO DIAMOND 2013) */}
              <div className="relative px-4 py-3.5 rounded-2xl border-2 bg-gradient-to-r from-[#0d6d66]/15 via-white to-white border-[#0d6d66]/70 shadow-[0_2px_8px_rgba(33,198,224,0.06)]">
                <div className="absolute -left-[32px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[1.5px] border-[#0d6d66] flex items-center justify-center shadow-xs ring-2 ring-[#0d6d66]/20">
                  <div className="w-2 h-2 rounded-full bg-[#0d6d66]" />
                </div>
                <div className="flex items-center gap-3.5 mb-2">
                  <span className="w-9 h-9 rounded-lg bg-[#0d6d66] text-white font-['Urbanist'] font-bold text-[19px] flex items-center justify-center shadow-xs shrink-0">
                    3
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-['Urbanist'] text-[24px] font-extrabold text-[#0d6d66] leading-tight whitespace-nowrap">
                        Funções executivas nucleares
                      </h3>
                      <span className="text-[15px] font-bold uppercase tracking-wide bg-[#0d6d66] text-white px-2 py-0.5 rounded whitespace-nowrap">
                        Núcleo Diamond (2013)
                      </span>
                    </div>
                    <span className="block text-[17px] text-[#0d6d66] font-medium leading-snug mt-0.5">
                      Base regulatória para as capacidades complexas
                    </span>
                  </div>
                </div>

                {/* 3 Pilares Nucleares */}
                <div className="grid grid-cols-3 gap-2.5 mt-1 pt-2.5 border-t border-[#0d6d66]/25">
                  <div className="bg-white/95 px-3 py-2.5 rounded-xl border border-[#0d6d66]/25">
                    <div className="flex items-center gap-1.5">
                      <Target className="w-[18px] h-[18px] text-[#0d6d66]" />
                      <span className="font-['Urbanist'] text-[19px] font-bold text-[#0f1012]">Controle Inibitório</span>
                    </div>
                    <p className="text-[17px] font-medium text-zinc-600 mt-1 leading-snug">Freio a impulsos e filtragem de distratores</p>
                  </div>

                  <div className="bg-white/95 px-3 py-2.5 rounded-xl border border-[#0d6d66]/25">
                    <div className="flex items-center gap-1.5">
                      <Workflow className="w-[18px] h-[18px] text-[#0d6d66]" />
                      <span className="font-['Urbanist'] text-[19px] font-bold text-[#0f1012]">Memória de Trabalho</span>
                    </div>
                    <p className="text-[17px] font-medium text-zinc-600 mt-1 leading-snug">Manter e manipular dados ativamente</p>
                  </div>

                  <div className="bg-white/95 px-3 py-2.5 rounded-xl border border-[#0d6d66]/25">
                    <div className="flex items-center gap-1.5">
                      <Split className="w-[18px] h-[18px] text-[#0d6d66]" />
                      <span className="font-['Urbanist'] text-[19px] font-bold text-[#0f1012]">Flexibilidade</span>
                    </div>
                    <p className="text-[17px] font-medium text-zinc-600 mt-1 leading-snug">Alternar regras, rotas e perspectivas</p>
                  </div>
                </div>
              </div>

              {/* CAMADA 2: MEMÓRIA & LINGUAGEM */}
              <div className="relative px-4 py-3.5 rounded-2xl border bg-white/95 border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="absolute -left-[32px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[1.5px] border-[#14b8a6]/70 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-9 h-9 rounded-lg bg-[#0d6d66]/15 text-[#0d6d66] font-['Urbanist'] font-bold text-[19px] flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h3 className="font-['Urbanist'] text-[23px] font-bold text-[#0f1012] leading-tight">
                        Memória + Linguagem
                      </h3>
                      <p className="text-[18px] text-zinc-600 font-medium leading-snug mt-0.5">
                        Sistemas representacionais, vocabulário, codificação e evocação semântica
                      </p>
                    </div>
                  </div>
                  <span className="text-[15px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 shrink-0">
                    Interação bidirecional contínua
                  </span>
                </div>
              </div>

              {/* CAMADA 1: ATENÇÃO & PERCEPÇÃO */}
              <div className="relative px-4 py-3.5 rounded-2xl border bg-white/95 border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="absolute -left-[32px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[1.5px] border-zinc-400/70 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-zinc-500" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-700 font-['Urbanist'] font-bold text-[19px] flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h3 className="font-['Urbanist'] text-[23px] font-bold text-[#0f1012] leading-tight">
                        Atenção & Percepção
                      </h3>
                      <p className="text-[18px] text-zinc-600 font-medium leading-snug mt-0.5">
                        Orientação espacial, seleção de estímulos, alerta e sustentação fásica
                      </p>
                    </div>
                  </div>
                  <span className="text-[15px] font-semibold text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-md shrink-0">
                    Maturação inicial (0–3 anos)
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* COLUNA DIREITA: MATURAÇÃO HETEROCRÔNICA */}
        <div className="flex flex-col min-h-0 min-w-0">

          {/* BLOCO 2: MATURAÇÃO HETEROCRÔNICA (LINHA DO TEMPO QUALITATIVA 100% ESTÁTICA, SEM HOVER) */}
          <div className="flex-1 min-h-0 bg-white px-6 py-5 rounded-3xl border border-black/[0.07] shadow-sm flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#0d6d66] shrink-0" />
                <span className="font-['Urbanist'] text-[21px] font-bold text-[#0f1012] leading-tight tracking-[-0.01em]">
                  Maturação heterocrônica · janelas críticas e ritmos
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Clock className="w-[18px] h-[18px] text-[#0d6d66]" />
                <span className="text-[15px] font-semibold text-[#0d6d66] bg-[#0d6d66]/20 border border-[#0d6d66]/30 px-2.5 py-1 rounded">
                  Ritmos diferentes por domínio
                </span>
              </div>
            </div>

            <p className="text-[18px] font-medium text-zinc-600 leading-snug">
              Cada função possui sua própria janela de especialização. As informações abaixo são fixas e mostram o curso temporal de cada domínio.
            </p>

            {/* Linha do Tempo Visual de Faixas Qualitativas (Sem Números Inventados) */}
            <div className="w-full flex-1 min-h-0 bg-[#fbfcfc] px-4 py-3.5 rounded-2xl border border-black/[0.04] flex flex-col gap-2">
              
              {/* Régua de Faixas Etárias Guia */}
              <div className="grid grid-cols-4 text-center border-b border-black/[0.06] pb-2">
                <div className="text-left pl-1">
                  <span className="font-['Urbanist'] text-[18px] font-bold text-zinc-800 block">0–3 anos</span>
                  <span className="text-[15px] font-medium text-zinc-500">Primeira infância</span>
                </div>
                <div>
                  <span className="font-['Urbanist'] text-[18px] font-bold text-zinc-800 block">3–7 anos</span>
                  <span className="text-[15px] font-medium text-zinc-500">Pré-escolar</span>
                </div>
                <div>
                  <span className="font-['Urbanist'] text-[18px] font-bold text-zinc-800 block">7–12 anos</span>
                  <span className="text-[15px] font-medium text-zinc-500">Escolar</span>
                </div>
                <div className="text-right pr-1">
                  <span className="font-['Urbanist'] text-[18px] font-bold text-zinc-800 block">12–25+ anos</span>
                  <span className="text-[15px] font-medium text-zinc-500">Adolescência / Adulto</span>
                </div>
              </div>

              {/* Trilhas das 4 Funções Cognitivas */}
              <div className="flex-1 flex flex-col justify-around gap-2 pt-1">
                {MATURATION_TRACKS.map((track) => (
                  <div key={track.id} className="flex items-center gap-3 text-[15px]">
                    {/* Nome do Domínio e Janela Fixa */}
                    <div className="w-[196px] shrink-0 flex flex-col">
                      <span className="font-['Urbanist'] font-bold text-zinc-800 text-[19px] leading-tight">
                        {track.label}
                      </span>
                      <span className="text-[15px] text-zinc-500 font-medium">
                        Janela: {track.window}
                      </span>
                    </div>

                    {/* Barra de Percurso Temporal Relativo */}
                    <div className="flex-1 h-10 bg-zinc-100/90 rounded-lg relative overflow-hidden flex items-center">
                      <div
                        className={`h-full rounded-lg bg-gradient-to-r ${track.barGradient} flex items-center px-3 shadow-xs transition-all`}
                        style={{
                          marginLeft: `${track.leftPercent}%`,
                          width: `${track.widthPercent}%`,
                        }}
                      >
                        <span className="text-[15px] font-bold text-white uppercase tracking-wide whitespace-nowrap drop-shadow-xs">
                          {track.status}
                        </span>
                      </div>
                    </div>

                    {/* Badge de Status / Ritmo */}
                    <div className="w-[132px] shrink-0 text-right">
                      <span className={`text-[15px] font-bold px-2.5 py-1 rounded-md border inline-block ${track.badgeBg}`}>
                        {track.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Rodapé explicativo da maturação */}
            <div className="flex items-center justify-between gap-4 pt-2.5 border-t border-black/[0.04] text-[16px] text-zinc-600">
              <span className="font-medium">
                Consolidação hierárquica: das funções sensório-motoras às redes executivas frontais.
              </span>
              <span className="font-semibold text-[#0d6d66]">
                Janelas estendidas até a terceira década
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* 4. FAIXA-SÍNTESE DO SLIDE (antes abaixo do card de QI, agora em largura total) */}
      <div className="bg-gradient-to-r from-[#0d6d66] to-[#08545e] border-l-4 border-[#0d6d66] text-white px-7 py-4 rounded-2xl shadow-sm flex items-center justify-between shrink-0 mt-5">
        <p className="font-['Urbanist'] text-[25px] font-bold leading-snug">
          Desenvolvimento cognitivo = especialização + integração progressiva de múltiplas funções.
        </p>
      </div>

      {/* 5. RODAPÉ VANCOUVER */}
      <div className="w-full flex items-center gap-3 pt-3 shrink-0 text-zinc-500 z-10">
        <span className="font-['Urbanist'] text-[14px] font-bold tracking-wider uppercase text-[#0d6d66] bg-[#0d6d66]/15 px-2 py-0.5 rounded border border-[#0d6d66]/30">
          REF
        </span>
        <p className="text-[15px] leading-tight text-[#6a6b6d]">
          Diamond A. <em>Annu Rev Psychol.</em> 2013;64:135-168. · Anderson P. <em>Child Neuropsychol.</em> 2002;8(2):71-82. · Shokrkon A, Nicoladis E. <em>Front Psychol.</em> 2022;13:848696.
        </p>
      </div>

    </div>
  )
}
