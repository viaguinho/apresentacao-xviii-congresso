"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  User,
  Compass,
  Play,
  Pause,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide32MatrixProps {
  isActive?: boolean;
}

// 4 Fases do Desenvolvimento
const PHASES = [
  {
    id: "p1",
    index: 0,
    range: "0–5 anos",
    title: "Primeira Infância",
    short: "0–5a",
    icon: Sparkles,
    color: "#4b6b4f",
    bgLight: "rgba(75, 107, 79, 0.08)",
    question: "“Está construindo as bases para aprender, comunicar-se e regular-se?”",
    focus: "Linguagem, Comportamento e Família",
    milestone: "Diagnóstico, 18m, 3 e 5 anos"
  },
  {
    id: "p2",
    index: 1,
    range: "6–10 anos",
    title: "Idade Escolar",
    short: "6–10a",
    icon: BookOpen,
    color: "#2563eb",
    bgLight: "rgba(37, 99, 235, 0.08)",
    question: "“Está conseguindo aprender, participar e pertencer?”",
    focus: "Cognição, Socialização e Bullying",
    milestone: "8 e 10 anos"
  },
  {
    id: "p3",
    index: 2,
    range: "11–14 anos",
    title: "Adolescência Inicial",
    short: "11–14a",
    icon: User,
    color: "#4f46e5",
    bgLight: "rgba(79, 70, 229, 0.08)",
    question: "“Como integra a condição à forma como se percebe?”",
    focus: "Autoestima, Imagem Corporal e Amizades",
    milestone: "12 e 15 anos"
  },
  {
    id: "p4",
    index: 3,
    range: "15–18 anos",
    title: "Transição Adulta",
    short: "15–18a",
    icon: Compass,
    color: "#0284c7",
    bgLight: "rgba(2, 132, 199, 0.08)",
    question: "“Está construindo autonomia e identidade além da condição?”",
    focus: "Autonomia, Decisões e Futuro",
    milestone: "18, 20 e 25 anos"
  }
];

// Níveis Qualitativos (1 a 6)
const LEVEL_LABELS: Record<number, string> = {
  1: "Relevância inicial",
  2: "Vigilância basal",
  3: "Moderado",
  4: "Moderado-alto",
  5: "Alto",
  6: "Foco prioritário"
};

const LEVEL_CLASSES: Record<number, string> = {
  1: "bg-[#4b6b4f]/[0.08] border-[#4b6b4f]/[0.16]",
  2: "bg-[#4b6b4f]/[0.20] border-[#4b6b4f]/[0.26]",
  3: "bg-[#4b6b4f]/[0.40] border-[#4b6b4f]/[0.42]",
  4: "bg-[#4b6b4f]/[0.62] border-[#4b6b4f]/[0.60]",
  5: "bg-[#4b6b4f]/[0.82] border-[#4b6b4f]/[0.78]",
  6: "bg-[#4b6b4f] border-[#365039] shadow-[0_2px_8px_rgba(75,107,79,0.32)]"
};

// Dados da Matriz divididos em 4 Grupos
interface MatrixRow {
  label: string;
  levels: [number, number, number, number];
}

interface MatrixGroup {
  tag: string;
  rows: MatrixRow[];
}

const MATRIX_GROUPS: MatrixGroup[] = [
  {
    tag: "A · Desenvolvimento e funcionamento",
    rows: [
      {
        label: "Cognição e aprendizagem",
        levels: [4, 6, 5, 4]
      },
      {
        label: "Linguagem e comunicação funcional",
        levels: [6, 5, 3, 2]
      },
      {
        label: "Comportamento e adaptação",
        levels: [6, 5, 4, 3]
      }
    ]
  },
  {
    tag: "B · Emoções e self",
    rows: [
      {
        label: "Regulação emocional",
        levels: [6, 5, 5, 4]
      },
      {
        label: "Ansiedade e humor",
        levels: [2, 4, 6, 6]
      },
      {
        label: "Autoconceito e autoestima",
        levels: [2, 5, 6, 6]
      },
      {
        label: "Imagem corporal e aparência",
        levels: [1, 4, 6, 6]
      },
      {
        label: "Qualidade de vida",
        levels: [4, 5, 5, 5]
      }
    ]
  },
  {
    tag: "C · Relações sociais",
    rows: [
      {
        label: "Participação e competência social",
        levels: [3, 6, 6, 5]
      },
      {
        label: "Amizades e pertencimento",
        levels: [2, 5, 6, 6]
      },
      {
        label: "Bullying, teasing e estigma",
        levels: [1, 6, 6, 5]
      }
    ]
  },
  {
    tag: "D · Família e tratamento",
    rows: [
      {
        label: "Funcionamento e recursos familiares",
        levels: [6, 5, 4, 4]
      },
      {
        label: "Ansiedade ligada a procedimentos",
        levels: [6, 4, 4, 5]
      },
      {
        label: "Expectativas e participação nas decisões",
        levels: [1, 3, 5, 6]
      }
    ]
  }
];

// Cálculo de coordenadas no círculo (r, angulo)
const pointOnCircle = (i: number, n: number, r: number, cx = 0, cy = 0) => {
  const theta = (2 * Math.PI * i) / n - Math.PI / 2;
  const x = cx + r * Math.cos(theta);
  const y = cy + r * Math.sin(theta);
  return { x, y };
};

export default function Slide32Matrix({ isActive = true }: Slide32MatrixProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const timerRef = useRef<any>(null);

  // Auto-rotação a cada 5 segundos quando o slide estiver ativo
  useEffect(() => {
    if (!isActive || !isAutoPlay) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActivePhaseIndex((prev) => (prev + 1) % PHASES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isAutoPlay]);

  const handleSelectPhase = (index: number) => {
    setActivePhaseIndex(index);
    // Pausa temporária ou mantém se preferir
  };

  const currentDisplayPhaseIndex = hoveredPhase !== null ? hoveredPhase : activePhaseIndex;
  const currentDisplayPhase = PHASES[currentDisplayPhaseIndex];

  // Configuração do CircleMenu
  const circleRadius = 76; // raio da órbita dos 4 nós
  const itemSize = 42;

  return (
    <div className="w-full h-full flex flex-row gap-4 items-start min-h-0 font-['Satoshi',sans-serif] text-[#0f1012]">
      {/* ========================================================================= */}
      {/* ÁREA ESQUERDA: MATRIZ DE HEATMAP COMPLETA (14 ITENS + 4 FASES + PERGUNTAS) */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-h-0 bg-white/60 backdrop-blur-sm p-2.5 rounded-2xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        {/* Cabeçalho das Colunas de Faixa Etária */}
        <div className="grid grid-cols-[330px_repeat(4,1fr)] gap-x-2.5 items-end px-2 pb-2 border-b border-black/[0.08]">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#5f6062]">
              Domínios e Linhas de Cuidado
            </span>
          </div>

          {PHASES.map((phase, idx) => {
            const isPhaseActive = currentDisplayPhaseIndex === idx;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => handleSelectPhase(idx)}
                onMouseEnter={() => setHoveredPhase(idx)}
                onMouseLeave={() => setHoveredPhase(null)}
                className={cn(
                  "relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 cursor-pointer group text-center",
                  isPhaseActive
                    ? "bg-[#4b6b4f]/[0.10] ring-1 ring-[#4b6b4f]/30 shadow-sm"
                    : "hover:bg-black/[0.03]"
                )}
              >
                {/* Indicador sutil de fase ativa no topo */}
                {isPhaseActive && (
                  <motion.div
                    layoutId="active-col-pill"
                    className="absolute -top-1 w-8 h-1 bg-[#4b6b4f] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={cn(
                    "font-['Urbanist',sans-serif] text-[18px] font-bold tracking-tight transition-colors leading-tight",
                    isPhaseActive ? "text-[#4b6b4f]" : "text-[#0f1012]"
                  )}
                >
                  {phase.range}
                </span>
                <span
                  className={cn(
                    "text-[14px] font-bold uppercase tracking-[0.06em] mt-0.5 transition-colors",
                    isPhaseActive ? "text-[#4b6b4f]" : "text-[#4b6b4f]/70"
                  )}
                >
                  {phase.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Linhas da Matriz Agrupadas */}
        <div className="flex-1 flex flex-col justify-between py-1.5 min-h-0">
          {MATRIX_GROUPS.map((group) => (
            <div key={group.tag} className="flex flex-col">
              {/* Divisor de Grupo */}
              <div className="flex items-center gap-3 px-2 mt-2 mb-1">
                <span className="font-['Urbanist',sans-serif] text-[14px] font-bold uppercase tracking-[0.1em] text-[#4b6b4f] whitespace-nowrap">
                  {group.tag}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#4b6b4f]/25 via-[#4b6b4f]/10 to-transparent" />
              </div>

              {/* Linhas de Itens */}
              {group.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[330px_repeat(4,1fr)] gap-x-2.5 items-center px-2 py-[2.5px] rounded-lg hover:bg-black/[0.02] transition-colors group/row"
                >
                  <p
                    className="m-0 text-[16px] font-medium text-[#2c2d30] tracking-[-0.1px] leading-tight group-hover/row:text-[#0f1012]"
                    title={row.label}
                  >
                    {row.label}
                  </p>

                  {row.levels.map((lvl, colIdx) => {
                    const isPhaseActive = currentDisplayPhaseIndex === colIdx;
                    return (
                      <div
                        key={colIdx}
                        onClick={() => handleSelectPhase(colIdx)}
                        className={cn(
                          "h-[22px] rounded-[5px] border flex items-center justify-center cursor-pointer transition-all duration-150 relative",
                          LEVEL_CLASSES[lvl],
                          isPhaseActive
                            ? "scale-[1.03] ring-1 ring-[#4b6b4f]/40 brightness-105 z-10"
                            : "opacity-85 hover:opacity-100 hover:scale-[1.02]"
                        )}
                        title={`${PHASES[colIdx].range}: ${LEVEL_LABELS[lvl]}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Perguntas Norteadoras por Faixa Etária (Rodapé da Matriz) */}
        <div className="grid grid-cols-[330px_repeat(4,1fr)] gap-x-2.5 items-stretch px-2 pt-2.5 mt-1 border-t border-black/[0.08]">
          <div className="flex items-center">
            <span className="font-['Urbanist',sans-serif] text-[16px] font-bold uppercase tracking-[0.1em] text-[#4b6b4f]">
              Pergunta-Chave por Fase
            </span>
          </div>

          {PHASES.map((phase, idx) => {
            const isPhaseActive = currentDisplayPhaseIndex === idx;
            return (
              <button
                key={`q-${phase.id}`}
                type="button"
                onClick={() => handleSelectPhase(idx)}
                className={cn(
                  "p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-center",
                  isPhaseActive
                    ? "bg-[#4b6b4f]/[0.08] border-[#4b6b4f]/40 shadow-sm ring-1 ring-[#4b6b4f]/30 -translate-y-0.5"
                    : "bg-[#f6f9f6] border-[#4b6b4f]/15 hover:border-[#4b6b4f]/30 hover:bg-[#eef3ec]"
                )}
              >
                <p
                  className={cn(
                    "m-0 text-[15px] leading-snug font-medium transition-colors",
                    isPhaseActive ? "text-[#4b6b4f] font-semibold" : "text-[#3f4042]"
                  )}
                >
                  {phase.question}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ÁREA DIREITA: RADIAL HUB (CIRCLE MENU) + PAINEL EDITORIAL UNIFICADO       */}
      {/* ========================================================================= */}
      <div className="w-[380px] flex-none flex flex-col gap-2">
        {/* Hub Radial Interativo (CircleMenu) com Controle Spotlight */}
        <div className="p-2.5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center relative overflow-hidden">
          {/* Header do Hub com Botão Play/Pause */}
          <div className="w-full flex items-center justify-between pb-2 mb-1 border-b border-black/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4b6b4f] animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-[0.12em] text-[#5f6062]">
                Hub de Fases · Eixo 6
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[15px] font-semibold transition-all cursor-pointer",
                isAutoPlay
                  ? "bg-[#4b6b4f]/10 text-[#4b6b4f] hover:bg-[#4b6b4f]/15"
                  : "bg-black/[0.05] text-[#6a6b6d] hover:bg-black/[0.08]"
              )}
              title={isAutoPlay ? "Pausar rotação automática" : "Iniciar rotação automática"}
            >
              {isAutoPlay ? (
                <>
                  <Pause size={16} className="fill-current" />
                  <span>Spotlight</span>
                </>
              ) : (
                <>
                  <Play size={16} className="fill-current" />
                  <span>Pausado</span>
                </>
              )}
            </button>
          </div>

          {/* O CircleMenu propriamente dito */}
          <div className="relative w-[210px] h-[190px] flex items-center justify-center mt-1 mb-6">
            {/* Órbita Guia com traço sutil */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 210 190"
            >
              <circle
                cx="105"
                cy="95"
                r={circleRadius}
                fill="none"
                stroke="rgba(75, 107, 79, 0.20)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Nós Orbitais das 4 Fases (CircleMenu Items) */}
            {PHASES.map((phase, idx) => {
              const { x, y } = pointOnCircle(idx, PHASES.length, circleRadius, 105, 95);
              const isSelected = currentDisplayPhaseIndex === idx;
              const IconComp = phase.icon;

              return (
                <motion.button
                  key={phase.id}
                  type="button"
                  onClick={() => handleSelectPhase(idx)}
                  onMouseEnter={() => setHoveredPhase(idx)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: "absolute",
                    left: x - itemSize / 2,
                    top: y - itemSize / 2,
                    width: itemSize,
                    height: itemSize
                  }}
                  className={cn(
                    "rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 z-10",
                    isSelected
                      ? "bg-[#4b6b4f] text-white shadow-[0_4px_14px_rgba(75,107,79,0.42)] ring-4 ring-[#4b6b4f]/20"
                      : "bg-[#f6f9f6] text-[#2c2d30] border border-[#4b6b4f]/25 hover:bg-[#4b6b4f]/10 hover:border-[#4b6b4f]"
                  )}
                  title={`${phase.range} - ${phase.title}`}
                >
                  <IconComp size={18} />

                  {/* Rótulo Flutuante do Nó */}
                  <span
                    className={cn(
                      "absolute top-full mt-1 text-[14px] font-bold uppercase tracking-[0.03em] whitespace-nowrap transition-colors",
                      isSelected ? "text-[#4b6b4f]" : "text-[#6a6b6d]"
                    )}
                  >
                    {phase.short}
                  </span>
                </motion.button>
              );
            })}

            {/* Gatilho Central (Hub Center) */}
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="z-20 flex flex-col items-center justify-center w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#4b6b4f] to-[#365039] text-white shadow-[0_4px_16px_rgba(75,107,79,0.35)] cursor-pointer"
              onClick={() => {
                setActivePhaseIndex((prev) => (prev + 1) % PHASES.length);
              }}
            >
              <Layers size={18} />
              <span className="text-[14px] font-bold tracking-[0.02em] uppercase mt-0.5 leading-none">
                Eixo 6
              </span>
            </motion.div>
          </div>

          {/* Destaque da Fase Selecionada em Card Dinâmico */}
          <div className="w-full mt-2 bg-[#f6f9f6] border border-[#4b6b4f]/20 rounded-xl p-2.5 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#4b6b4f]">
                Fase em Foco · {currentDisplayPhase.range}
              </span>
              <span className="text-[14px] font-semibold text-[#5f6062]">
                {currentDisplayPhase.title}
              </span>
            </div>
            <p className="m-0 text-[15px] text-[#0f1012] font-semibold leading-snug">
              {currentDisplayPhase.question}
            </p>
            <div className="flex items-center justify-between gap-2 text-[14px] text-[#5f6062] pt-1 border-t border-black/[0.05] mt-0.5">
              <span>Foco: {currentDisplayPhase.focus}</span>
              <span className="font-medium text-[#4b6b4f]">{currentDisplayPhase.milestone}</span>
            </div>
          </div>
        </div>

        {/* Legenda de Relevância Relativa */}
        <div className="p-2.5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center">
            <p className="m-0 text-[14px] font-bold tracking-[0.1em] uppercase text-[#5f6062]">
              Relevância relativa
            </p>
            <span className="text-[14px] text-[#5f6062]">Qualitativa</span>
          </div>
          <div className="grid grid-cols-6 gap-1.5 my-2">
            {[1, 2, 3, 4, 5, 6].map((lvl) => (
              <div
                key={lvl}
                className={cn("h-[12px] rounded-[3px] border", LEVEL_CLASSES[lvl])}
                title={LEVEL_LABELS[lvl]}
              />
            ))}
          </div>
          <div className="flex justify-between text-[14px] text-[#5f6062]">
            <span>menor</span>
            <span>maior</span>
          </div>
          <p className="m-0 mt-1.5 text-[14px] leading-[1.35] text-[#5f6062]">
            Escala qualitativa — sem valores numéricos.
          </p>
        </div>

        {/* Bloco de Arquitetura Longitudinal */}
        <div className="p-2.5 rounded-2xl bg-[#f6f9f6] border border-[#4b6b4f]/[0.18] shadow-sm">
          <p className="m-0 mb-1 text-[14px] font-bold tracking-[0.08em] uppercase text-[#4b6b4f]">
            Arquitetura longitudinal
          </p>
          <p className="m-0 text-[15px] leading-snug text-[#2c2d30]">
            Domínios avaliados em pontos-chave:{" "}
            <strong>diagnóstico, 18 meses, 3, 5 e 8 anos</strong> — depois{" "}
            <strong>8, 10, 12, 15, 18, 20 e 25 anos</strong>.
          </p>
          <p className="m-0 mt-1 text-[14px] text-[#5f6062] leading-snug">
            Exemplo de arquitetura, não calendário obrigatório.
          </p>
        </div>

        {/* Síntese do Eixo */}
        <div className="p-2.5 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
          <p className="m-0 font-['Urbanist',sans-serif] text-[19px] font-bold tracking-tight text-[#4b6b4f] leading-tight">
            Domínios permanecem;
            <br />
            prioridades mudam.
          </p>
          <p className="m-0 mt-1.5 text-[15px] leading-snug text-[#3f4042]">
            Estável para permitir comparação longitudinal; flexível para perguntar o que importa em
            cada idade.
          </p>
        </div>
      </div>
    </div>
  );
}
