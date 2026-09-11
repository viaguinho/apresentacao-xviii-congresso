"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Activity,
  Sparkles,
  Compass,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide12ResilienceProps {
  isActive?: boolean
}

/** Componente de Círculo com Feixe de Luz Animado na Borda */
function CircularBeam({
  size = 114,
  colors = ["#0071e3", "#0ea5e9"],
  thickness = 2.2,
  speed = 36,
  children,
  className,
  glow = true,
  onClick,
  isHighlighted = false,
}: {
  size?: number
  colors?: [string, string?]
  thickness?: number
  speed?: number
  children?: React.ReactNode
  className?: string
  glow?: boolean
  onClick?: () => void
  isHighlighted?: boolean
}) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const angleRef = useRef(Math.random() * 360)

  useEffect(() => {
    let raf = 0
    let last = 0
    const frame = (now: number) => {
      if (!last) last = now
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      angleRef.current = (angleRef.current + speed * dt) % 360
      if (rootRef.current) {
        rootRef.current.style.setProperty("--beam-angle", `${angleRef.current.toFixed(2)}deg`)
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  const comet1 = colors[0]
  const comet2 = colors[1] || "#6366f1"

  return (
    <div
      ref={rootRef}
      onClick={onClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "9999px",
        ["--beam-angle" as string]: "0deg",
      }}
      className={cn(
        "relative flex items-center justify-center cursor-pointer transition-all duration-300 select-none",
        isHighlighted ? "scale-105 shadow-md ring-2 ring-[#0071e3]/30" : "hover:scale-[1.02]",
        className
      )}
    >
      {/* Brilho difuso de fundo */}
      {glow && (
        <div
          aria-hidden="true"
          style={{
            borderRadius: "9999px",
            background: `conic-gradient(from var(--beam-angle), transparent 0deg, ${comet1} 60deg, transparent 75deg, transparent 180deg, ${comet2} 240deg, transparent 255deg, transparent 360deg)`,
            filter: "blur(10px)",
            opacity: isHighlighted ? 0.5 : 0.22,
          }}
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        />
      )}

      {/* Anel do Feixe Animado na Borda */}
      <div
        aria-hidden="true"
        style={{
          borderRadius: "9999px",
          padding: `${thickness}px`,
          background: `conic-gradient(from var(--beam-angle), transparent 0deg, ${comet1} 50deg, #ffffff 58deg, transparent 65deg, transparent 180deg, ${comet2} 230deg, #ffffff 238deg, transparent 245deg, transparent 360deg)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Borda sutil de base */}
      <div className="absolute inset-0 rounded-full border border-black/[0.08] pointer-events-none" />

      {/* Conteúdo do Círculo */}
      <div className="relative z-10 w-full h-full rounded-full flex flex-col items-center justify-center p-2 text-center">
        {children}
      </div>
    </div>
  )
}

export default function Slide12Resilience({ isActive = true }: Slide12ResilienceProps) {
  const [selectedTrajectory, setSelectedTrajectory] = useState<"positive" | "recovery" | "cumulative" | null>(null)
  const [selectedSphere, setSelectedSphere] = useState<"child" | "response" | "surroundings">("surroundings")

  const trajectories = [
    {
      id: "positive",
      name: "Superação",
      fullName: "Superação / Adaptação Positiva",
      color: "#0071e3",
      dPath: "M 80,195 C 150,120 230,50 415,35",
      areaPath: "M 80,195 C 150,120 230,50 415,35 L 415,245 L 80,245 Z",
    },
    {
      id: "recovery",
      name: "Recuperação",
      fullName: "Recuperação com Apoio",
      color: "#0f1012",
      dPath: "M 80,195 C 135,235 200,225 285,165 C 340,125 380,100 415,90",
      areaPath: "M 80,195 C 135,235 200,225 285,165 C 340,125 380,100 415,90 L 415,245 L 80,245 Z",
    },
    {
      id: "cumulative",
      name: "Vulnerabilidade",
      fullName: "Vulnerabilidade Cumulativa",
      color: "#64748b",
      dPath: "M 80,195 C 145,215 220,222 295,227 C 345,231 385,233 415,235",
      areaPath: "M 80,195 C 145,215 220,222 295,227 C 345,231 385,233 415,235 L 415,245 L 80,245 Z",
    },
  ]

  const kpis = [
    {
      label: "PROBABILÍSTICO",
      title: "Risco não é destino",
      badge: "Probabilidade ≠ Desfecho",
      badgeType: "blue",
      desc: "Fatores de risco modulam probabilidades estatísticas, mas não fixam a trajetória individual.",
    },
    {
      label: "MULTISSISTÊMICO",
      title: "Resiliência relacional",
      badge: "Criança ↔ Entorno",
      badgeType: "indigo",
      desc: "A capacidade adaptativa é uma propriedade de sistemas integrados, não um traço isolado.",
    },
    {
      label: "MODIFICÁVEL",
      title: "Sensível ao timing",
      badge: "Inflexão de Trajetória",
      badgeType: "emerald",
      desc: "Oportunidades de intervenção oportuna e acolhimento alteram a inclinação da curva em qualquer fase.",
    },
    {
      label: "NÃO MORALIZANTE",
      title: "Propriedade ecológica",
      badge: "Sem Culpabilização",
      badgeType: "amber",
      desc: "A resiliência não é mérito ou virtude inata da criança, mas resultado dos suportes que a sustentam.",
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between gap-3 font-['Satoshi',sans-serif] text-[#0f1012]">
      
      {/* Grade Superior: 2 Colunas (os 3 cards clínicos seguem no slide seguinte) */}
      <div className="grid gap-6 flex-1 min-h-0 items-stretch" style={{ gridTemplateColumns: "1fr 1.08fr", gridTemplateRows: "minmax(0, 1fr)" }}>
        
        {/* COLUNA 1: Card de Trajetórias */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 min-h-0 px-6 py-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.03)] flex flex-col justify-between gap-3"
        >
          <div>
            {/* Header com Tag Apple */}
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.08em] text-[#0071e3] bg-[#0071e3]/[0.08] px-3 py-1 rounded-full border border-[#0071e3]/20">
                <Activity className="w-5 h-5" />
                Mapeamento de Trajetórias
              </span>
              <span className="text-[17px] font-semibold text-[#5f6062]">
                Masten &amp; Barnes (2018)
              </span>
            </div>

            <h3 className="text-[27px] font-bold tracking-tight text-[#0f1012] leading-tight mt-1.5">
              Mesmo Risco, Trajetórias Diferentes
            </h3>
            <p className="text-[18px] font-medium text-[#5f6062] mt-1 leading-snug">
              O impacto do risco diverge conforme os recursos protetores e o momento da intervenção.
            </p>

          </div>

          {/* Gráfico de Área + Seletor vertical das 3 curvas (usa a sobra lateral do gráfico) */}
          <div className="w-full flex-1 min-h-0 flex items-stretch gap-3">
          <div className="flex-1 min-w-0 relative bg-[#fcfdfe] rounded-2xl border border-black/[0.04]">
            <svg
              viewBox="0 0 580 270"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] display-block overflow-visible"
              aria-label="Três trajetórias desenvolvimentais divergentes"
            >
              <defs>
                <linearGradient id="gradPositivo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0071e3" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0071e3" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="gradRecuperacao" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f1012" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#0f1012" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="gradCumulativo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#64748b" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#64748b" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Eixos e Linhas de Grade */}
              <g opacity="0.65">
                <line x1="70" y1="14" x2="70" y2="245" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="70" y1="245" x2="445" y2="245" stroke="#cbd5e1" strokeWidth="1.5" />
                <line x1="70" y1="130" x2="445" y2="130" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

                <text x="70" y="262" fontFamily="'Satoshi', sans-serif" fontSize="17" fontWeight="600" fill="#475569">
                  infância precoce
                </text>
                <text x="445" y="262" textAnchor="end" fontFamily="'Satoshi', sans-serif" fontSize="17" fontWeight="600" fill="#475569">
                  adolescência
                </text>

                <text
                  x="22"
                  y="130"
                  textAnchor="middle"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="17"
                  fontWeight="600"
                  fill="#475569"
                  transform="rotate(-90 22 130)"
                >
                  Adaptação funcional
                </text>
              </g>

              {/* Áreas preenchidas */}
              <path d={trajectories[0].areaPath} fill="url(#gradPositivo)" opacity={selectedTrajectory === null || selectedTrajectory === "positive" ? 1 : 0.15} />
              <path d={trajectories[1].areaPath} fill="url(#gradRecuperacao)" opacity={selectedTrajectory === null || selectedTrajectory === "recovery" ? 1 : 0.15} />
              <path d={trajectories[2].areaPath} fill="url(#gradCumulativo)" opacity={selectedTrajectory === null || selectedTrajectory === "cumulative" ? 1 : 0.15} />

              {/* Curvas Vetoriais */}
              <path
                d={trajectories[0].dPath}
                fill="none"
                stroke="#0071e3"
                strokeWidth={selectedTrajectory === "positive" ? "3.8" : "3"}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <path
                d={trajectories[1].dPath}
                fill="none"
                stroke="#0f1012"
                strokeWidth={selectedTrajectory === "recovery" ? "3.8" : "2.5"}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <path
                d={trajectories[2].dPath}
                fill="none"
                stroke="#64748b"
                strokeWidth={selectedTrajectory === "cumulative" ? "3.8" : "2.2"}
                strokeLinecap="round"
                strokeDasharray="5 3"
                className="transition-all duration-300"
              />

              {/* Ponto de Início: Desafio */}
              <g transform="translate(80, 195)">
                <circle r="12" fill="#0071e3" fillOpacity="0.18" />
                <circle r="6" fill="#0071e3" />
                <circle r="2" fill="#ffffff" />
                <rect x="38" y="-28" width="80" height="24" rx="6" fill="#0071e3" />
                <text x="78" y="-11" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="16" fontWeight="700" fill="#ffffff">
                  desafio
                </text>
              </g>

              {/* Rótulos Completos no Lado Direito — 100% Visíveis com margem ampla */}
              <g fontFamily="'Satoshi', sans-serif" fontSize="18" fontWeight="700">
                <text x="430" y="38" fill="#0071e3">
                  Superação
                </text>
                <text x="430" y="93" fill="#0f1012">
                  Recuperação
                </text>
                <text x="430" y="238" fill="#64748b">
                  Vulnerabilidade
                </text>
              </g>
            </svg>
          </div>
            {/* Seletor Interativo das 3 Curvas */}
            <div className="w-[196px] shrink-0 flex flex-col justify-center gap-1.5 p-1.5 bg-[#f8f9fa] rounded-2xl border border-black/[0.04]">
              {trajectories.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrajectory(selectedTrajectory === t.id ? null : (t.id as any))}
                  className={cn(
                    "w-full flex items-center justify-start gap-2.5 py-2.5 px-3 rounded-xl text-[18px] font-semibold transition-all",
                    selectedTrajectory === t.id
                      ? "bg-white shadow-xs text-[#0f1012]"
                      : "text-[#5f6062] hover:text-black"
                  )}
                >
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Frase Síntese Exclusiva na Base do Card */}
          <div className="px-4 py-2.5 rounded-2xl bg-[#f8f9fa] border border-black/[0.04] flex items-start gap-2.5">
            <Compass className="w-6 h-6 text-[#0071e3] shrink-0 mt-0.5" />
            <p className="m-0 text-[17px] font-medium text-[#3f4042] leading-snug">
              A trajetória depende da intensidade e duração do risco, do momento do desenvolvimento, dos recursos disponíveis e das oportunidades de intervenção.
            </p>
          </div>
        </motion.div>

        {/* COLUNA 2: Sistemas da Resiliência */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 min-h-0 px-6 py-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.03)] flex flex-col justify-between gap-3"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.08em] text-[#0071e3] bg-[#0071e3]/[0.08] px-3 py-1 rounded-full border border-[#0071e3]/20">
              <ShieldCheck className="w-5 h-5" />
              Sistemas da Resiliência
            </span>
            <span className="text-[16px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Masten (2018)
            </span>
          </div>

          <div className="flex-1 min-h-0 grid gap-5 items-stretch" style={{ gridTemplateColumns: "0.86fr 1.14fr" }}>
            <div className="flex flex-col justify-between gap-3 min-w-0">
              {/* Definição Operacional */}
              <div className="bg-[#f4f5f7] rounded-2xl px-4 py-3 border border-black/[0.03]">
                <p className="m-0 text-[16px] font-bold uppercase tracking-wider text-[#0071e3]">
                  Definição Operacional
                </p>
                <p className="m-0 mt-1.5 text-[21px] font-medium text-[#0f1012] leading-snug">
                  Capacidade de um sistema dinâmico de adaptar-se diante de desafios que ameaçam seu funcionamento ou desenvolvimento.
                </p>
              </div>
              {/* Destaque Central: A Resiliência Está Fora da Criança */}
              <div className="bg-gradient-to-r from-[#e8f2fc] to-indigo-50/60 rounded-2xl px-4 py-3 border border-[#0071e3]/20">
                <div className="flex items-start gap-2 mb-1.5">
                  <Sparkles className="w-5 h-5 text-[#0071e3] shrink-0 mt-1" />
                  <p className="m-0 text-[20px] font-bold text-[#0071e3] leading-snug">
                    Parte importante da resiliência da criança está fora da própria criança.
                  </p>
                </div>
                <p className="m-0 text-[19px] font-medium text-[#3f4042] leading-snug">
                  A adaptação emerge dos vínculos protetores e do suporte sustentado do ambiente.
                </p>
              </div>
            </div>

            {/* Diagrama dos 3 Círculos AUMENTADOS e APROXIMADOS: 120px superiores e 132px inferior */}
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-visible">
            
              {/* Círculo 1: Recursos da Criança (Superior Esquerdo) - Aumentado para 120px e mais próximo ao ecológico */}
              <motion.div
                animate={{
                  x: [0, 5, 0],
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[4%] left-0 z-10"
              >
                <CircularBeam
                  size={168}
                  speed={32}
                  colors={["#0071e3", "#38bdf8"]}
                  isHighlighted={selectedSphere === "child"}
                  onClick={() => setSelectedSphere("child")}
                  className="bg-white/95 backdrop-blur-md"
                >
                  <span className="text-[15px] font-bold uppercase tracking-wider text-[#0071e3]">
                    recursos
                  </span>
                  <span className="text-[20px] font-bold text-[#0f1012] leading-tight">
                    da criança
                  </span>
                  <span className="text-[15px] font-medium text-gray-700 mt-0.5 leading-tight">biologia &amp; agência</span>
                </CircularBeam>
              </motion.div>

              {/* Círculo 2: Como a Criança Responde (Superior Direito) - Aumentado para 120px e mais próximo ao ecológico */}
              <motion.div
                animate={{
                  x: [0, -5, 0],
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute top-[4%] right-0 z-10"
              >
                <CircularBeam
                  size={168}
                  speed={38}
                  colors={["#0ea5e9", "#0071e3"]}
                  isHighlighted={selectedSphere === "response"}
                  onClick={() => setSelectedSphere("response")}
                  className="bg-white/95 backdrop-blur-md"
                >
                  <span className="text-[15px] font-bold uppercase tracking-wide text-[#0284c7] leading-tight">
                    como a criança
                  </span>
                  <span className="text-[20px] font-bold text-[#0f1012] leading-tight">
                    responde
                  </span>
                  <span className="text-[15px] font-medium text-gray-700 mt-0.5 leading-tight">enfrentamento</span>
                </CircularBeam>
              </motion.div>

              {/* Círculo 3: Recursos ao Redor da Criança (Inferior Central) - Aumentado para 132px — ESTACIONÁRIO */}
              <div className="absolute bottom-[2%] z-20">
                <CircularBeam
                  size={196}
                  speed={42}
                  colors={["#6366f1", "#0071e3"]}
                  thickness={2.4}
                  isHighlighted={selectedSphere === "surroundings"}
                  onClick={() => setSelectedSphere("surroundings")}
                  className="bg-[#f8fafd] backdrop-blur-md shadow-sm"
                >
                  <span className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-indigo-700 bg-indigo-50 px-1.5 py-0.2 rounded-sm border border-indigo-200/60 mb-0.5">
                    ecológico
                  </span>
                  <span className="text-[20px] font-bold text-[#0f1012] leading-tight">
                    recursos ao redor
                  </span>
                  <span className="text-[20px] font-bold text-[#0071e3] leading-tight">
                    da criança
                  </span>
                  <span className="text-[15px] font-medium text-gray-700 mt-0.5 leading-tight">família · escola · rede</span>
                </CircularBeam>
              </div>

              {/* Badge Central de Interação */}
              <div className="absolute top-[16%] z-30 pointer-events-none">
                <div className="px-2 py-0.5 rounded-full bg-white/95 border border-[#0071e3]/30 shadow-2xs backdrop-blur-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
                  <span className="font-['Urbanist',sans-serif] text-[16px] font-bold uppercase tracking-wider text-[#0071e3]">
                    interação
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Grade Inferior: Banner Alinhado à ESQUERDA (rente ao card Probabilístico) e 4 Bento Cards */}
      <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-3">
        
        {/* Banner de Síntese Conceitual Alinhado à Esquerda (Rente ao card Probabilístico) */}
        <div className="w-full px-6 py-2 rounded-2xl bg-gradient-to-r from-[#f8f9fa] via-[#e8f2fc]/45 to-[#f8f9fa] border border-[#0071e3]/18 shadow-2xs flex flex-row items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-extrabold uppercase tracking-wider text-[#0071e3] bg-[#0071e3]/10 px-2.5 py-0.5 rounded-md border border-[#0071e3]/20 shrink-0">
                Princípio Central
              </span>
              <p className="text-[23px] font-bold text-[#0f1012] m-0 tracking-tight">
                Risco aumenta probabilidades. Resiliência modifica trajetórias.
              </p>
            </div>
            <p className="text-[17px] font-medium text-[#3f4042] m-0 flex items-center gap-2 pl-0.5 leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
              <strong className="text-[#0071e3] font-semibold">Ambos (risco e resiliência)</strong> são produzidos pela interação entre a criança, suas relações, seu ambiente e o momento do desenvolvimento.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[17px] font-semibold text-[#5f6062] shrink-0 pl-3 border-l border-black/[0.08]">
            <span className="px-1.5 py-0.5 rounded bg-white border border-black/[0.06] text-[#0f1012]">Probabilidade</span>
            <span className="text-[#0071e3]">⇄</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200/80 text-[#0071e3]">Modulação</span>
          </div>
        </div>

        {/* 4 Cards Bento Apple */}
        <div className="grid grid-cols-4 gap-4">
          {kpis.map((k, idx) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6 }}
              transition={{ duration: 0.25, delay: 0.15 + idx * 0.03 }}
              className={cn(
                "px-5 py-2.5 rounded-2xl bg-white border border-black/[0.08] shadow-2xs flex flex-col justify-between transition-colors",
                k.badgeType === "blue" && "hover:border-blue-300 hover:bg-blue-50/20",
                k.badgeType === "indigo" && "hover:border-indigo-300 hover:bg-indigo-50/20",
                k.badgeType === "emerald" && "hover:border-emerald-300 hover:bg-emerald-50/20",
                k.badgeType === "amber" && "hover:border-amber-300 hover:bg-amber-50/20"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[15px] font-bold uppercase tracking-wider text-[#5f6062]">
                    {k.label}
                  </span>
                  <span
                    className={cn(
                      "text-[15px] font-bold px-2.5 py-0.5 rounded-full border",
                      k.badgeType === "blue" && "bg-blue-50 text-[#0071e3] border-blue-200",
                      k.badgeType === "indigo" && "bg-indigo-50 text-indigo-700 border-indigo-200",
                      k.badgeType === "emerald" && "bg-emerald-50 text-emerald-700 border-emerald-200",
                      k.badgeType === "amber" && "bg-amber-50 text-amber-700 border-amber-200"
                    )}
                  >
                    {k.badge}
                  </span>
                </div>
                <p className="text-[22px] font-bold text-[#0f1012] tracking-tight m-0 mt-0.5">
                  {k.title}
                </p>
              </div>
              <p className="text-[17px] font-medium text-[#52525b] leading-snug mt-1 pt-1 border-t border-black/[0.04] m-0">
                {k.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
