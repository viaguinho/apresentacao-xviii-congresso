"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Shuffle,
  BookOpen,
  Calculator,
  MessageSquare,
  Sparkles,
  ArrowRightLeft,
  GraduationCap,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide16FlowProps {
  isActive?: boolean;
  className?: string;
}

interface ExecutiveFunction {
  id: string;
  name: string;
  subtitle: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  evidenceNote?: string;
  yPos: number; // Y position in SVG coord (total 460)
  targetDomains: string[];
}

const executiveFunctions: ExecutiveFunction[] = [
  {
    id: "memoria",
    name: "Memória de Trabalho",
    subtitle: "Manter & manipular",
    role: "Retenção ativa de informações para cálculo mental, compreensão e sintaxe complexa",
    icon: Layers,
    color: "#0071e3",
    badge: "Associação mais consistente",
    evidenceNote: "Meta-análise Spiegel (2021): preditor com maiores tamanhos de efeito",
    yPos: 76,
    targetDomains: ["leitura", "matematica", "linguagem"],
  },
  {
    id: "controle",
    name: "Controle Inibitório",
    subtitle: "Freio & foco sustentado",
    role: "Filtrar estímulos distratores e suprimir respostas automáticas inadequadas",
    icon: ShieldCheck,
    color: "#0d606a",
    badge: "Regulação atencional",
    evidenceNote: "Permite engajamento sustentado em tarefas acadêmicas prolongadas",
    yPos: 196,
    targetDomains: ["leitura", "matematica"],
  },
  {
    id: "flexibilidade",
    name: "Flexibilidade Cognitiva",
    subtitle: "Alternar & adaptar",
    role: "Alternar estratégias ao errar, mudar de regras e integrar novos pontos de vista",
    icon: Shuffle,
    color: "#14b8a6",
    badge: "Adaptação a erros",
    evidenceNote: "Essencial para transição entre operações e resolução não-linear de problemas",
    yPos: 316,
    targetDomains: ["matematica", "leitura"],
  },
];

const academicDomains = [
  {
    id: "leitura",
    name: "Leitura",
    desc: "Decodificação, vocabulário e compreensão de texto",
    icon: BookOpen,
    accent: "#0071e3",
  },
  {
    id: "matematica",
    name: "Matemática",
    desc: "Senso numérico, cálculo mental e problemas lógicos",
    icon: Calculator,
    accent: "#0d606a",
  },
  {
    id: "linguagem",
    name: "Linguagem Oral",
    desc: "Discurso narrativo estruturado e sintaxe complexa",
    icon: MessageSquare,
    accent: "#0891b2",
  },
];

export default function Slide16Flow({ isActive = true, className }: Slide16FlowProps) {
  const containerId = useId();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeFunctionId = hoveredId || selectedId;
  const activeFunction = executiveFunctions.find((f) => f.id === activeFunctionId);

  return (
    <div
      className={cn(
        "relative w-full h-full flex flex-col justify-between select-none overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#fbfdff] to-[#f0f7ff]/50 border border-black/[0.08] shadow-[0_4px_30px_rgba(0,113,227,0.06)] p-5 md:p-7 font-['Satoshi',sans-serif]",
        className
      )}
    >
      {/* Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0071e3 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Soft Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80" />

      {/* Top Header Bar inside the card */}
      <div className="relative z-20 flex items-center justify-between pb-3 border-b border-black/[0.05]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center text-[#0071e3]">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-['Urbanist',sans-serif] text-[16px] font-bold text-[#0f1012] leading-tight">
                Convergência Neurocognitiva
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0071e3]/10 text-[#0071e3] px-2 py-0.5 rounded-full border border-[#0071e3]/20">
                Idade Escolar (6–12 anos)
              </span>
            </div>
            <p className="text-[11.5px] text-[#5f6062] font-normal leading-tight mt-0.5">
              Funções executivas nucleares canalizadas diretamente para as aprendizagens formais
            </p>
          </div>
        </div>

        {activeFunction && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#0071e3]/30 shadow-xs text-[15px] font-medium text-[#0071e3]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activeFunction.evidenceNote}</span>
          </motion.div>
        )}
      </div>

      {/* Main Interactive Diagram Canvas */}
      <div className="relative z-10 flex-1 w-full min-h-[360px] flex items-center my-2">
        {/* SVG Flowing Neural Beams */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 900 420"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {executiveFunctions.map((fn) => (
              <linearGradient
                key={fn.id}
                id={`${containerId}-grad-${fn.id}`}
                gradientUnits="userSpaceOnUse"
                x1="360"
                y1={fn.yPos}
                x2="590"
                y2="200"
              >
                <stop offset="0%" stopColor={fn.color} stopOpacity="0.1" />
                <stop offset="50%" stopColor={fn.color} stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0071e3" stopOpacity="0.1" />
              </linearGradient>
            ))}
          </defs>

          {/* Paths connecting left nodes (x ≈ 370) to right card (x ≈ 590, y ≈ 200) */}
          {executiveFunctions.map((fn) => {
            const isHighlighted = activeFunctionId === fn.id;
            const isAnyActive = Boolean(activeFunctionId);
            const pathD = `M 370 ${fn.yPos} C 470 ${fn.yPos}, 500 200, 590 200`;

            return (
              <g key={fn.id} className="transition-opacity duration-300">
                {/* Background static curve */}
                <path
                  d={pathD}
                  stroke={isHighlighted ? fn.color : "#94a3b8"}
                  strokeWidth={isHighlighted ? "2.5" : "1.5"}
                  strokeOpacity={isHighlighted ? 0.65 : isAnyActive ? 0.12 : 0.28}
                  strokeDasharray={isHighlighted ? undefined : "4 6"}
                  fill="none"
                />

                {/* Animated traveling luminous energy pulse */}
                <motion.path
                  d={pathD}
                  stroke={`url(#${containerId}-grad-${fn.id})`}
                  strokeWidth={isHighlighted ? "3.5" : "2.5"}
                  strokeOpacity={isHighlighted ? 1 : isAnyActive ? 0.25 : 0.75}
                  fill="none"
                  strokeDasharray="45 155"
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: -200 }}
                  transition={{
                    duration: isHighlighted ? 2.2 : 3.6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Pulsing endpoint nodes */}
                <circle
                  cx="590"
                  cy="200"
                  r={isHighlighted ? "5" : "3.5"}
                  fill={isHighlighted ? fn.color : "#0071e3"}
                  opacity={isHighlighted ? 0.9 : 0.4}
                />
              </g>
            );
          })}
        </svg>

        {/* Two-Column Overlay Layout: Left (3 Source Nodes) and Right (Convergence Target) */}
        <div className="relative w-full h-full grid grid-cols-12 gap-4 items-center">
          {/* Left Column (5 cols): 3 Executive Functions */}
          <div className="col-span-5 flex flex-col justify-between gap-3.5 h-full py-1">
            {executiveFunctions.map((fn) => {
              const isSelected = activeFunctionId === fn.id;
              const Icon = fn.icon;

              return (
                <motion.div
                  key={fn.id}
                  onMouseEnter={() => setHoveredId(fn.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedId(selectedId === fn.id ? null : fn.id)}
                  whileHover={{ scale: 1.015, x: 3 }}
                  className={cn(
                    "cursor-pointer p-3.5 rounded-2xl border transition-all duration-300 relative bg-white/95 backdrop-blur-md shadow-sm",
                    isSelected
                      ? "border-[#0071e3] ring-3 ring-[#0071e3]/15 shadow-[0_4px_20px_rgba(0,113,227,0.12)] bg-gradient-to-r from-white via-white to-[#0071e3]/[0.04]"
                      : "border-black/[0.07] hover:border-black/[0.15] hover:shadow-md"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-colors"
                        style={{
                          backgroundColor: isSelected ? fn.color : `${fn.color}15`,
                          color: isSelected ? "#ffffff" : fn.color,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-['Urbanist',sans-serif] text-[16.5px] font-bold text-[#0f1012] leading-tight">
                            {fn.name}
                          </h4>
                        </div>
                        <p className="text-[15px] font-medium text-zinc-500 leading-tight">
                          {fn.subtitle}
                        </p>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 transition-colors",
                        fn.id === "memoria"
                          ? "bg-[#0071e3]/10 text-[#0071e3] border-[#0071e3]/20"
                          : "bg-zinc-100 text-zinc-600 border-zinc-200"
                      )}
                    >
                      {fn.badge}
                    </span>
                  </div>

                  <p className="text-[15px] text-[#475569] mt-2 leading-relaxed">
                    {fn.role}
                  </p>

                  {/* Flow beam anchor indicator */}
                  <div
                    className={cn(
                      "absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center shadow-xs transition-all",
                      isSelected ? "border-[#0071e3] ring-2 ring-[#0071e3]/30" : "border-zinc-300"
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        isSelected ? "bg-[#0071e3] scale-110" : "bg-zinc-400"
                      )}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Gap for SVG Beams (2 cols) */}
          <div className="col-span-2 pointer-events-none flex flex-col items-center justify-center text-center">
            <div className="px-2.5 py-1 rounded-full bg-white/90 border border-black/[0.08] shadow-xs backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0071e3]">
                Impacto direto →
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Convergence Target - Aprendizagem Escolar */}
          <div className="col-span-5 flex flex-col justify-center h-full py-1">
            <div className="relative p-5 rounded-2xl border-2 border-[#0071e3]/30 bg-gradient-to-br from-white via-[#fafcff] to-[#f0f7ff] shadow-[0_8px_30px_rgba(0,113,227,0.08)]">
              {/* Convergence input port badge on left edge */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#0071e3] flex items-center justify-center shadow-md ring-4 ring-[#0071e3]/20">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0071e3] animate-pulse" />
              </div>

              <div className="flex items-center justify-between mb-3 pl-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0071e3] text-white flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-['Urbanist',sans-serif] text-[16px] font-bold text-[#0f1012] leading-tight">
                      Aprendizagem Escolar
                    </h4>
                    <span className="text-[10px] font-medium text-zinc-500">
                      Domínios acadêmicos nucleares
                    </span>
                  </div>
                </div>

                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-1 rounded-full border border-[#0071e3]/25">
                  Alvo de Convergência
                </span>
              </div>

              {/* 3 Domain Cards */}
              <div className="flex flex-col gap-2.5">
                {academicDomains.map((dom) => {
                  const Icon = dom.icon;
                  const isDomainTargeted =
                    activeFunction?.targetDomains.includes(dom.id) ?? false;

                  return (
                    <motion.div
                      key={dom.id}
                      animate={
                        isDomainTargeted
                          ? { scale: 1.02, x: 2 }
                          : { scale: 1, x: 0 }
                      }
                      className={cn(
                        "p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-3 bg-white",
                        isDomainTargeted
                          ? "border-[#0071e3] shadow-xs ring-2 ring-[#0071e3]/20 bg-[#f8fbfe]"
                          : "border-black/[0.06]"
                      )}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${dom.accent}15`,
                          color: dom.accent,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-['Urbanist',sans-serif] text-[13.5px] font-bold text-[#0f1012]">
                            {dom.name}
                          </span>
                          {isDomainTargeted && (
                            <span className="text-[9px] font-bold text-[#0071e3] bg-[#0071e3]/10 px-1.5 py-0.5 rounded">
                              Ativado
                            </span>
                          )}
                        </div>
                        <p className="text-[10.5px] text-[#5f6062] leading-tight truncate">
                          {dom.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Meta-analysis callout pill inside target box */}
              <div className="mt-3 pt-2.5 border-t border-[#0071e3]/15 flex items-center gap-2 text-[10.5px] text-zinc-600">
                <Info className="w-3.5 h-3.5 text-[#0071e3] shrink-0" />
                <p className="m-0 leading-tight">
                  <strong className="text-[#0071e3] font-semibold">Spiegel et al. (2021):</strong> 299 estudos e +65 mil crianças confirmam essa base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Reciprocal / Bidirectional Loop Banner */}
      <div className="relative z-20 mt-1 pt-2.5 border-t border-black/[0.06] flex items-center justify-between px-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <ArrowRightLeft className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-['Urbanist',sans-serif] text-[16px] font-bold uppercase tracking-wider text-[#0071e3]">
              Relação Bidirecional:
            </span>
            <span className="text-[16px] text-[#334155] font-medium">
              Cognição ⇄ Aprendizagem Escolar. A alfabetização e a instrução também refinam e consolidam as redes executivas frontais.
            </span>
          </div>
        </div>

        <span className="text-[10.5px] font-semibold text-zinc-400 shrink-0 hidden md:inline">
          Peng & Kievit (2020)
        </span>
      </div>
    </div>
  );
}
