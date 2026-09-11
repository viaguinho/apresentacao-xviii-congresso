"use client"

import { motion } from "framer-motion"
import {
  Layers,
  Sparkles,
  Split,
  Workflow,
  Target,
  ArrowRight,
  TrendingUp,
  Clock,
} from "lucide-react"
import { Card7 } from "@/components/ui/card-7"

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
    color: "#0d606a",
    barGradient: "from-[#21C6E0] via-[#0d606a] to-[#084852]",
    badgeBg: "bg-[#21C6E0]/15 text-[#0d606a] border-[#21C6E0]/40",
  },
  {
    id: "ordemSuperior",
    label: "Ordem Superior",
    window: "12–25+ anos",
    status: "Tardia",
    description: "Raciocínio abstrato, metacognição e planejamento",
    leftPercent: 54,
    widthPercent: 46,
    color: "#21C6E0",
    barGradient: "from-[#21C6E0] to-emerald-500",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
]

export default function Slide14Cognition({ isActive = true }: Slide14CognitionProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#fdfdfd] text-[#0f1012] font-['Satoshi',sans-serif] px-14 pt-[90px] pb-5 select-none relative">
      
      {/* 1. BANNER DE TRANSIÇÃO E PONTE CONCEITUAL DO EIXO 2 */}
      <div className="w-full shrink-0 z-10">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#21C6E0]/15 via-[#eaf9fa] to-transparent px-4 py-1.5 rounded-lg border-l-4 border-[#21C6E0]">
          <div className="flex items-center gap-2.5">
            <span className="font-['Urbanist'] text-[15px] font-bold uppercase tracking-wider text-[#0d606a] bg-[#21C6E0]/20 px-2 py-0.5 rounded border border-[#21C6E0]/30">
              Ponte Conceitual
            </span>
            <p className="text-[16px] font-medium text-[#0d606a]">
              Dos fundamentos sistêmicos (Eixo 1) <ArrowRight className="w-3.5 h-3.5 inline mx-1 text-[#21C6E0]" /> À arquitetura e maturação das funções mentais (Eixo 2)
            </p>
          </div>
          <span className="text-[14px] font-semibold text-zinc-500 uppercase tracking-wider hidden sm:inline">
            Abertura do Eixo
          </span>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <div className="shrink-0 mt-5 mb-3">
        <h1 className="font-['Urbanist'] text-[44px] font-bold tracking-[-0.03em] text-[#0f1012] leading-[1.1]">
          Cognição não amadurece em bloco
        </h1>
        <p className="text-[22px] text-[#3f4042] font-normal mt-1.5 leading-[1.3] max-w-[1400px]">
          Diferentes funções emergem, se especializam e passam a trabalhar juntas ao longo do desenvolvimento.
        </p>
      </div>

      {/* 3. CONTEÚDO PRINCIPAL: CENTRALIZAÇÃO VERTICAL (7 / 5 COLS) */}
      <div className="flex-1 grid grid-cols-12 gap-6 items-center min-h-0 py-1">
        
        {/* COLUNA ESQUERDA: HIERARQUIA + MATURAÇÃO HETEROCRÔNICA (7 colunas, centralizadas verticalmente) */}
        <div className="col-span-7 flex flex-col justify-center gap-3 h-full">
          
          {/* BLOCO 1: HIERARQUIA FUNCIONAL INTERDEPENDENTE */}
          <div className="flex flex-col bg-transparent relative">
            <div className="flex items-center justify-between mb-1.5 shrink-0">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#21C6E0]" />
                <span className="font-['Urbanist'] text-[16px] font-bold uppercase tracking-widest text-[#0d606a]">
                  Hierarquia Funcional Interdependente
                </span>
              </div>
              <span className="text-[15px] text-zinc-500 font-medium">
                Conexões ascendentes e descendentes contínuas
              </span>
            </div>

            {/* Linha do Tempo com Trilha e Feixe Luminoso */}
            <div className="relative flex flex-col gap-1.5 pl-8 pr-1">
              
              {/* Trilha Guia Vertical Minimalista */}
              <div className="absolute left-[11.25px] top-2.5 bottom-2.5 w-[1.5px] bg-gradient-to-b from-zinc-200 via-zinc-300/70 to-zinc-200 rounded-full overflow-hidden pointer-events-none">
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
                  className="absolute left-0 w-full h-14 bg-gradient-to-t from-[#21C6E0]/80 via-[#0d606a]/50 to-transparent rounded-full shadow-[0_0_6px_rgba(33,198,224,0.35)]"
                />
              </div>

              {/* CAMADA 4: FUNÇÕES DE ORDEM SUPERIOR */}
              <div className="relative p-2.5 rounded-xl border bg-white/95 border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-[1.5px] border-[#21C6E0]/70 flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d606a]" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-md bg-[#21C6E0]/15 text-[#0d606a] font-['Urbanist'] font-bold text-[16px] flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h3 className="font-['Urbanist'] text-[19px] font-bold text-[#0f1012] leading-tight">
                        Funções Cognitivas de Ordem Superior
                      </h3>
                      <p className="text-[16px] text-zinc-600 font-medium leading-snug">
                        Metacognição · Raciocínio Abstrato · Resolução de Problemas · Tomada de Decisão
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                    Maturação Tardia (Adolescência+)
                  </span>
                </div>
              </div>

              {/* CAMADA 3: FUNÇÕES EXECUTIVAS NUCLEARES (NÚCLEO DIAMOND 2013) */}
              <div className="relative p-2.5 rounded-xl border-2 bg-gradient-to-r from-[#21C6E0]/15 via-white to-white border-[#21C6E0]/70 shadow-[0_2px_8px_rgba(33,198,224,0.06)]">
                <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-[1.5px] border-[#21C6E0] flex items-center justify-center shadow-xs ring-2 ring-[#21C6E0]/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#21C6E0]" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-md bg-[#21C6E0] text-zinc-900 font-['Urbanist'] font-bold text-[16px] flex items-center justify-center shadow-xs shrink-0">
                      3
                    </span>
                    <div className="flex items-center gap-2">
                      <h3 className="font-['Urbanist'] text-[20px] font-extrabold text-[#0d606a] leading-tight">
                        Funções Executivas Nucleares
                      </h3>
                      <span className="text-[14px] font-bold uppercase tracking-wide bg-[#21C6E0] text-zinc-900 px-1.5 py-0.5 rounded">
                        Núcleo Diamond (2013)
                      </span>
                    </div>
                  </div>
                  <span className="text-[15px] text-[#0d606a] font-medium hidden sm:inline">
                    Base regulatória para as capacidades complexas
                  </span>
                </div>

                {/* 3 Pilares Nucleares */}
                <div className="grid grid-cols-3 gap-2 mt-1 pt-1.5 border-t border-[#21C6E0]/25">
                  <div className="bg-white/95 px-2.5 py-2 rounded-lg border border-[#21C6E0]/25">
                    <div className="flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#0d606a]" />
                      <span className="font-['Urbanist'] text-[16px] font-bold text-[#0f1012]">Controle Inibitório</span>
                    </div>
                    <p className="text-[15px] font-medium text-zinc-600 mt-0.5 leading-snug">Freio a impulsos e filtragem de distratores</p>
                  </div>

                  <div className="bg-white/95 px-2.5 py-2 rounded-lg border border-[#21C6E0]/25">
                    <div className="flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5 text-[#0d606a]" />
                      <span className="font-['Urbanist'] text-[16px] font-bold text-[#0f1012]">Memória de Trabalho</span>
                    </div>
                    <p className="text-[15px] font-medium text-zinc-600 mt-0.5 leading-snug">Manter e manipular dados ativamente</p>
                  </div>

                  <div className="bg-white/95 px-2.5 py-2 rounded-lg border border-[#21C6E0]/25">
                    <div className="flex items-center gap-1.5">
                      <Split className="w-3.5 h-3.5 text-[#0d606a]" />
                      <span className="font-['Urbanist'] text-[16px] font-bold text-[#0f1012]">Flexibilidade</span>
                    </div>
                    <p className="text-[15px] font-medium text-zinc-600 mt-0.5 leading-snug">Alternar regras, rotas e perspectivas</p>
                  </div>
                </div>
              </div>

              {/* CAMADA 2: MEMÓRIA & LINGUAGEM */}
              <div className="relative p-2.5 rounded-xl border bg-white/95 border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-[1.5px] border-[#14b8a6]/70 flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14b8a6]" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-md bg-[#21C6E0]/15 text-[#0d606a] font-['Urbanist'] font-bold text-[16px] flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <h3 className="font-['Urbanist'] text-[19px] font-bold text-[#0f1012] leading-tight">
                        Memória + Linguagem
                      </h3>
                      <p className="text-[16px] text-zinc-600 font-medium leading-snug">
                        Sistemas representacionais, vocabulário, codificação e evocação semântica
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200 shrink-0">
                    Interação Bidirecional Contínua
                  </span>
                </div>
              </div>

              {/* CAMADA 1: ATENÇÃO & PERCEPÇÃO */}
              <div className="relative p-2.5 rounded-xl border bg-white/95 border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-[1.5px] border-zinc-400/70 flex items-center justify-center shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-700 font-['Urbanist'] font-bold text-[16px] flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <h3 className="font-['Urbanist'] text-[19px] font-bold text-[#0f1012] leading-tight">
                        Atenção & Percepção
                      </h3>
                      <p className="text-[16px] text-zinc-600 font-medium leading-snug">
                        Orientação espacial, seleção de estímulos, alerta e sustentação fásica
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-md shrink-0">
                    Maturação Inicial (0–3 anos)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* BLOCO 2: MATURAÇÃO HETEROCRÔNICA (LINHA DO TEMPO QUALITATIVA 100% ESTÁTICA, SEM HOVER) */}
          <div className="bg-white px-3 py-2.5 rounded-2xl border border-black/[0.07] shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#21C6E0]" />
                <span className="font-['Urbanist'] text-[18px] font-bold text-[#0f1012]">
                  Maturação Heterocrônica · Janelas Críticas & Ritmos
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0d606a]" />
                <span className="text-[14px] font-semibold text-[#0d606a] bg-[#21C6E0]/20 border border-[#21C6E0]/30 px-2 py-0.5 rounded">
                  Ritmos Diferentes por Domínio
                </span>
              </div>
            </div>

            <p className="text-[16px] font-medium text-zinc-600 leading-snug mb-2">
              Cada função possui sua própria janela de especialização. As informações abaixo são fixas e mostram o curso temporal de cada domínio.
            </p>

            {/* Linha do Tempo Visual de Faixas Qualitativas (Sem Números Inventados) */}
            <div className="w-full bg-[#fbfcfc] px-2.5 py-2 rounded-xl border border-black/[0.04] flex flex-col gap-1.5">
              
              {/* Régua de Faixas Etárias Guia */}
              <div className="grid grid-cols-4 text-center border-b border-black/[0.06] pb-1">
                <div className="text-left pl-1">
                  <span className="font-['Urbanist'] text-[15px] font-bold text-zinc-800 block">0–3 anos</span>
                  <span className="text-[14px] font-medium text-zinc-500">Primeira infância</span>
                </div>
                <div>
                  <span className="font-['Urbanist'] text-[15px] font-bold text-zinc-800 block">3–7 anos</span>
                  <span className="text-[14px] font-medium text-zinc-500">Pré-escolar</span>
                </div>
                <div>
                  <span className="font-['Urbanist'] text-[15px] font-bold text-zinc-800 block">7–12 anos</span>
                  <span className="text-[14px] font-medium text-zinc-500">Escolar</span>
                </div>
                <div className="text-right pr-1">
                  <span className="font-['Urbanist'] text-[15px] font-bold text-zinc-800 block">12–25+ anos</span>
                  <span className="text-[14px] font-medium text-zinc-500">Adolescência / Adulto</span>
                </div>
              </div>

              {/* Trilhas das 4 Funções Cognitivas */}
              <div className="flex flex-col gap-1.5 pt-0.5">
                {MATURATION_TRACKS.map((track) => (
                  <div key={track.id} className="flex items-center gap-2 text-[14px]">
                    {/* Nome do Domínio e Janela Fixa */}
                    <div className="w-48 shrink-0 flex flex-col">
                      <span className="font-['Urbanist'] font-bold text-zinc-800 text-[16px] leading-tight">
                        {track.label}
                      </span>
                      <span className="text-[14px] text-zinc-500 font-medium">
                        Janela: {track.window}
                      </span>
                    </div>

                    {/* Barra de Percurso Temporal Relativo */}
                    <div className="flex-1 h-7 bg-zinc-100/90 rounded-md relative overflow-hidden flex items-center">
                      <div
                        className={`h-full rounded-md bg-gradient-to-r ${track.barGradient} flex items-center px-2 shadow-xs transition-all`}
                        style={{
                          marginLeft: `${track.leftPercent}%`,
                          width: `${track.widthPercent}%`,
                        }}
                      >
                        <span className="text-[14px] font-bold text-white uppercase tracking-wide whitespace-nowrap drop-shadow-xs">
                          {track.status}
                        </span>
                      </div>
                    </div>

                    {/* Badge de Status / Ritmo */}
                    <div className="w-32 shrink-0 text-right">
                      <span className={`text-[14px] font-bold px-2 py-0.5 rounded border inline-block ${track.badgeBg}`}>
                        {track.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Rodapé explicativo da maturação */}
            <div className="flex items-center justify-between gap-3 mt-2 pt-1.5 border-t border-black/[0.04] text-[15px] text-zinc-600">
              <span className="font-medium">
                Consolidação hierárquica: das funções sensório-motoras às redes executivas frontais.
              </span>
              <span className="font-semibold text-[#0d606a]">
                Janelas estendidas até a terceira década
              </span>
            </div>

          </div>

        </div>

        {/* COLUNA DIREITA: CARD-7 DE QI COM VÍDEO DOS CUBOS AZUIS + DESENVOLVIMENTO COGNITIVO */}
        <div className="col-span-5 flex flex-col justify-center gap-3 h-full">
          
          {/* NOVO CARD DE QI BASEADO NO CARD-7 */}
          <Card7
            videoSrc="assets/blue-cubes-animation.mp4"
            logo={<Sparkles className="w-5 h-5 text-[#21C6E0]" />}
            badge="Alerta Clínico"
            title="QI ≠ cognição inteira"
            subtitle="Neuropsicologia do Desenvolvimento"
            overview="Uma pontuação global única pode mascarar discrepâncias severas entre atenção, memória operacional, velocidade de processamento e regulação executiva."
            className="rounded-2xl"
          >
            {/* Box de Recomendação Clínica */}
            <div className="mt-2.5 p-2.5 rounded-xl bg-white/90 backdrop-blur-xs border border-[#21C6E0]/35 shadow-xs">
              <div className="flex items-start gap-2 text-[17px] font-semibold text-[#0d606a] leading-snug">
                <Sparkles className="w-4 h-4 text-[#21C6E0] shrink-0 mt-0.5" />
                <span>Avaliação clínica requer perfil multifacetado, não apenas um escore composto.</span>
              </div>
            </div>
          </Card7>

          {/* CARD DE DESENVOLVIMENTO COGNITIVO (IMEDIATAMENTE ABAIXO DO QI, CENTRALIZADO) */}
          <div className="bg-gradient-to-r from-[#0d606a] to-[#08545e] border-l-4 border-[#21C6E0] text-white px-4 py-3 rounded-xl shadow-sm flex items-center justify-between shrink-0">
            <p className="font-['Urbanist'] text-[20px] font-bold leading-snug">
              Desenvolvimento cognitivo = especialização + integração progressiva de múltiplas funções.
            </p>
          </div>

        </div>

      </div>

      {/* 4. RODAPÉ VANCOUVER */}
      <div className="w-full flex items-center gap-3 pt-2 shrink-0 text-zinc-500 z-10">
        <span className="font-['Urbanist'] text-[14px] font-bold tracking-wider uppercase text-[#0d606a] bg-[#21C6E0]/15 px-2 py-0.5 rounded border border-[#21C6E0]/30">
          REF
        </span>
        <p className="text-[15px] leading-tight text-[#6a6b6d]">
          Diamond A. <em>Annu Rev Psychol.</em> 2013;64:135-168. · Anderson P. <em>Child Neuropsychol.</em> 2002;8(2):71-82. · Shokrkon A, Nicoladis E. <em>Front Psychol.</em> 2022;13:848696.
        </p>
      </div>

    </div>
  )
}
