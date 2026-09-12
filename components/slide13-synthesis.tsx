"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Camera,
  TrendingUp,
  Compass,
  Users,
  BookOpen,
  Sparkles,
  HeartPulse,
} from "lucide-react"
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline"

interface Slide13SynthesisProps {
  isActive?: boolean
}

/**
 * Componente da Linha do Tempo com Pulso Duplo Sincronizado
 * Dois feixes de luz (cometas lineares) convergem simultaneamente:
 * 'antes' -> 'agora' (da esquerda para o centro)
 * 'depois' -> 'agora' (da direita para o centro)
 */
function ConvergingBeamTimeline() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animId: number
    let start: number | null = null
    const duration = 5000 // Movimento ultra-lento e relaxado estilo Apple

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const p = (elapsed % duration) / duration
      setProgress(p)
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Posição percentual do feixe convergindo
  const p1 = progress * 100
  const p2 = (1 - progress) * 100

  return (
    <div className="w-full flex items-center justify-between gap-4 py-1.5 px-2 relative select-none">
      {/* Estação: ANTES */}
      <div className="flex items-center gap-2 z-10 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
        <span className="text-[14px] font-semibold tracking-[0.12em] uppercase text-zinc-500">
          antes
        </span>
      </div>

      {/* Linha Conectora 1 (antes -> agora) com feixe convergente sutil */}
      <div className="flex-1 h-[1.5px] bg-black/[0.06] relative overflow-hidden rounded-full">
        {/* Feixe luminoso sutil */}
        <div
          className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-[#0071e3]/30 to-transparent opacity-75 filter blur-[0.4px]"
          style={{
            left: `${p1}%`,
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Estação Central: AGORA (Design Sutil Apple, sem ponto piscante) */}
      <div className="flex items-center gap-2 z-10 shrink-0 px-3.5 py-1 rounded-full bg-white/90 border border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.03)] backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
        <span className="text-[16px] font-bold tracking-[0.14em] uppercase text-[#0f1012]">
          agora
        </span>
      </div>

      {/* Linha Conectora 2 (depois -> agora) com feixe convergente sutil */}
      <div className="flex-1 h-[1.5px] bg-black/[0.06] relative overflow-hidden rounded-full">
        {/* Feixe luminoso sutil */}
        <div
          className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-[#0071e3]/30 to-transparent opacity-75 filter blur-[0.4px]"
          style={{
            left: `${p2}%`,
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Estação: DEPOIS */}
      <div className="flex items-center gap-2 z-10 shrink-0">
        <span className="text-[14px] font-semibold tracking-[0.12em] uppercase text-zinc-500">
          depois
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
      </div>
    </div>
  )
}

export default function Slide13Synthesis({ isActive = true }: Slide13SynthesisProps) {
  // Dados ecológicos para o RadialOrbitalTimeline adaptados ao conteúdo original do slide
  const contextTimelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Família",
      date: "Vínculo Primário",
      content: "Estimulação precoce, responsividade parental, previsibilidade de rotina e co-regulação afetiva.",
      category: "Microambiente",
      icon: Users,
      relatedIds: [2, 3],
      status: "completed",
      energy: 95,
    },
    {
      id: 2,
      title: "Escola",
      date: "Mediação Cognitiva",
      content: "Demandas de atenção sustentada, flexibilidade, aprendizagem formal e regras coletivas.",
      category: "Mesoambiente",
      icon: BookOpen,
      relatedIds: [1, 3],
      status: "in-progress",
      energy: 88,
    },
    {
      id: 3,
      title: "Pares",
      date: "Sociabilidade",
      content: "Cooperação entre iguais, reciprocidade, resolução de conflitos e consolidação da identidade.",
      category: "Interação",
      icon: Sparkles,
      relatedIds: [1, 2, 4],
      status: "pending",
      energy: 82,
    },
    {
      id: 4,
      title: "Cuidado",
      date: "Rede Protetora",
      content: "Suporte clínico, vigilância desenvolvimental oportuna e intervenção sensível ao timing.",
      category: "Macrossistema",
      icon: HeartPulse,
      relatedIds: [1, 3],
      status: "completed",
      energy: 90,
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between font-['Satoshi',sans-serif] text-[#0f1012] select-none">
      
      {/* Linha do Tempo Estilo Apple Sutil */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto my-0.5"
      >
        <ConvergingBeamTimeline />
      </motion.div>

      {/* Grid Central: Cards Desgrudados com gap-7 e maior amplitude */}
      <div className="grid grid-cols-3 gap-6 flex-1 min-h-0 items-stretch my-1 px-0.5">
        
        {/* CARD 1: FOTOGRAFIA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between"
        >
          {/* Header do Card */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.1em] text-[#0071e3] bg-[#0071e3]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0071e3]/20">
                <Camera className="w-4 h-4" />
                Fotografia
              </span>
              <span className="text-[14px] font-semibold text-[#5f6062]">
                Corte Transversal
              </span>
            </div>
            <h3 className="text-[23px] font-bold tracking-tight text-[#0f1012] font-['Urbanist',sans-serif] leading-tight mt-1">
              Como está agora?
            </h3>
            <p className="text-[17px] font-medium text-[#5f6062] mt-1 leading-snug">
              Avaliação pontual e estática do desempenho no momento da consulta.
            </p>
          </div>

          {/* Gráfico Vetorial de Ponto Único Ampliado */}
          <div className="w-full my-1.5 flex-1 min-h-[225px] relative bg-[#fcfdfe] rounded-2xl p-2 border border-black/[0.04] flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 440 220"
              className="w-full h-full max-h-[300px] display-block overflow-visible"
              aria-label="Gráfico de um único ponto em idade por funcionamento"
            >
              <defs>
                <linearGradient id="photoGridGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0071e3" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0071e3" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Área de grade sutil */}
              <rect x="55" y="15" width="355" height="175" rx="8" fill="url(#photoGridGrad)" />

              {/* Linhas de Grade e Eixos */}
              <g opacity="0.6">
                <line x1="55" y1="15" x2="55" y2="190" stroke="#cbd5e1" strokeWidth="1.8" />
                <line x1="55" y1="190" x2="410" y2="190" stroke="#cbd5e1" strokeWidth="1.8" />
                <line x1="55" y1="100" x2="410" y2="100" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="290" y1="15" x2="290" y2="190" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="3 3" />
              </g>

              {/* Rótulos dos Eixos */}
              <text x="55" y="206" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="600" fill="#64748b">
                idade / tempo
              </text>
              <text
                x="18"
                y="100"
                textAnchor="middle"
                fontFamily="'Satoshi', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="#64748b"
                transform="rotate(-90 18 100)"
              >
                funcionamento
              </text>

              {/* Projeções pontilhadas até o ponto hoje */}
              <line x1="55" y1="100" x2="290" y2="100" stroke="#0071e3" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.45" />
              <line x1="290" y1="190" x2="290" y2="100" stroke="#0071e3" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.45" />

              {/* Ponto Único Pulsante: 'hoje' */}
              <g transform="translate(290, 100)">
                <circle r="24" fill="#0071e3" fillOpacity="0.12" className="animate-pulse" />
                <circle r="14" fill="#0071e3" fillOpacity="0.25" />
                <circle r="7" fill="#0071e3" />
                <circle r="2.5" fill="#ffffff" />
                
                {/* Tag flutuante 'hoje' */}
                <rect x="-24" y="-38" width="48" height="22" rx="6" fill="#0071e3" />
                <text
                  x="0"
                  y="-23"
                  textAnchor="middle"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="16"
                  fontWeight="700"
                  fill="#ffffff"
                >
                  hoje
                </text>
                {/* Pequeno triângulo da tag */}
                <polygon points="-4,-16 4,-16 0,-12" fill="#0071e3" />
              </g>
            </svg>
          </div>

          {/* Takeaway Obrigatório Preservado */}
          <div className="p-2.5 rounded-2xl bg-[#f8f9fa] border border-black/[0.04] mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
            <p className="m-0 text-[17px] font-semibold text-[#0f1012] leading-snug">
              Um ponto informa posição, não direção.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: TRAJETÓRIA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between"
        >
          {/* Header do Card */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.1em] text-[#0071e3] bg-[#0071e3]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0071e3]/20">
                <TrendingUp className="w-4 h-4" />
                Trajetória
              </span>
              <span className="text-[14px] font-semibold text-[#5f6062]">
                Histórico Longitudinal
              </span>
            </div>
            <h3 className="text-[23px] font-bold tracking-tight text-[#0f1012] font-['Urbanist',sans-serif] leading-tight mt-1">
              Como vem mudando?
            </h3>
            <p className="text-[17px] font-medium text-[#5f6062] mt-1 leading-snug">
              A evolução no tempo revela o ritmo e o sentido real do desenvolvimento.
            </p>
          </div>

          {/* Gráfico Vetorial de Curvas Convergentes Ampliado */}
          <div className="w-full my-1.5 flex-1 min-h-[225px] relative bg-[#fcfdfe] rounded-2xl p-2 border border-black/[0.04] flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 440 220"
              className="w-full h-full max-h-[300px] display-block overflow-visible"
              aria-label="Gráfico de duas trajetórias diferentes convergindo no mesmo ponto"
            >
              <defs>
                <linearGradient id="trajBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0071e3" />
                </linearGradient>
                <linearGradient id="trajDarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#0f1012" />
                </linearGradient>
              </defs>

              {/* Linhas de Grade e Eixos */}
              <g opacity="0.6">
                <line x1="55" y1="15" x2="55" y2="190" stroke="#cbd5e1" strokeWidth="1.8" />
                <line x1="55" y1="190" x2="410" y2="190" stroke="#cbd5e1" strokeWidth="1.8" />
              </g>

              {/* Rótulos dos Eixos */}
              <text x="55" y="206" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="600" fill="#64748b">
                idade / tempo
              </text>
              <text
                x="18"
                y="100"
                textAnchor="middle"
                fontFamily="'Satoshi', sans-serif"
                fontSize="15"
                fontWeight="600"
                fill="#64748b"
                transform="rotate(-90 18 100)"
              >
                funcionamento
              </text>

              {/* Curva 1: Ascensão / Evolução com intervenção (Azul) */}
              <path
                d="M 75,172 C 145,164 220,128 290,100"
                fill="none"
                stroke="url(#trajBlueGrad)"
                strokeWidth="3.4"
                strokeLinecap="round"
              />

              {/* Curva 2: Declínio / Perda / Platô (Escuro/Slate) */}
              <path
                d="M 75,44 C 140,64 215,92 290,100"
                fill="none"
                stroke="url(#trajDarkGrad)"
                strokeWidth="3.4"
                strokeLinecap="round"
              />

              {/* Rótulos discretos nas origens das curvas */}
              <text x="80" y="34" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="600" fill="#475569">
                trajetória A (declínio)
              </text>
              <text x="92" y="186" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="600" fill="#0071e3">
                trajetória B (ascensão)
              </text>

              {/* Ponto de Convergência no 'hoje' */}
              <g transform="translate(290, 100)">
                <circle r="22" fill="#0071e3" fillOpacity="0.14" className="animate-pulse" />
                <circle r="13" fill="#0071e3" fillOpacity="0.25" />
                <circle r="7" fill="#0071e3" />
                <circle r="2.5" fill="#ffffff" />

                {/* Tag de mesmo desfecho hoje */}
                <rect x="-24" y="-38" width="48" height="22" rx="6" fill="#0071e3" />
                <text
                  x="0"
                  y="-23"
                  textAnchor="middle"
                  fontFamily="'Satoshi', sans-serif"
                  fontSize="16"
                  fontWeight="700"
                  fill="#ffffff"
                >
                  hoje
                </text>
                <polygon points="-4,-16 4,-16 0,-12" fill="#0071e3" />
              </g>
            </svg>
          </div>

          {/* Takeaway Obrigatório Preservado */}
          <div className="p-2.5 rounded-2xl bg-[#f8f9fa] border border-black/[0.04] mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
            <p className="m-0 text-[17px] font-semibold text-[#0f1012] leading-snug">
              Mesmo resultado hoje. Histórias diferentes.
            </p>
          </div>
        </motion.div>

        {/* CARD 3: CONTEXTO (RADIAL ORBITAL TIMELINE COM MEMOJI TRANSPARENTE) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between"
        >
          {/* Header do Card */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.1em] text-[#0071e3] bg-[#0071e3]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0071e3]/20">
                <Compass className="w-4 h-4" />
                Contexto
              </span>
              <span className="text-[14px] font-semibold text-[#5f6062]">
                Ecossistema dinâmico
              </span>
            </div>
            <h3 className="text-[23px] font-bold tracking-tight text-[#0f1012] font-['Urbanist',sans-serif] leading-tight mt-1">
              Onde, quando e diante de quê?
            </h3>
            <p className="text-[17px] font-medium text-[#5f6062] mt-1 leading-snug">
              A capacidade funcional varia conforme os suportes e desafios de cada contexto.
            </p>
          </div>

          {/* Componente Radial Orbital Timeline (Gráfico Puro) */}
          <div className="w-full my-1.5 flex-1 min-h-[225px] relative bg-[#fcfdfe] rounded-2xl border border-black/[0.04] flex items-center justify-center overflow-hidden">
            {/* MP4 Memoji Separado e Desgrudado, flutuando no centro do gráfico */}
            <div className="absolute inset-0 pb-[112px] flex items-center justify-center pointer-events-none z-30">
              <video
                src="assets/memoji.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-16 h-16 object-contain pointer-events-none select-none"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>

            <RadialOrbitalTimeline
              timelineData={contextTimelineData}
              theme="light"
              compact={true}
              radius={90}
              autoRotateSpeed={0.22}
              autoCycleHighlight={true}
              cycleInterval={3600}
              showEnergyPercentage={false}
              centerContent={
                <div className="w-16 h-16 pointer-events-none select-none" />
              }
            />
          </div>

          {/* Takeaway Obrigatório Preservado */}
          <div className="p-2.5 rounded-2xl bg-[#f8f9fa] border border-black/[0.04] mt-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
            <p className="m-0 text-[17px] font-semibold text-[#0f1012] leading-snug">
              As demandas mudam com a etapa: comunicação, autonomia, aprendizagem e pares, identidade.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Caixa de Implicação Clínica (Conteúdo 100% Preservado) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="my-1.5 flex items-center gap-3 bg-[#f8fbfe] border border-[#0071e3]/20 rounded-2xl px-5 py-2.5 shadow-[0_2px_12px_rgba(0,113,227,0.04)]"
      >
        <span className="font-['Urbanist',sans-serif] text-[15px] font-bold tracking-[0.14em] uppercase text-[#0071e3] bg-[#0071e3]/10 border border-[#0071e3]/20 px-2.5 py-1 rounded-md shrink-0">
          IMPLICAÇÃO CLÍNICA
        </span>
        <p className="m-0 text-[18px] font-medium leading-snug text-[#0f1012]">
          <strong className="text-[#0071e3] font-bold">Funcionalidade:</strong> isso interfere na capacidade da criança de aprender, comunicar-se, regular-se, relacionar-se ou participar ativamente da vida cotidiana?
        </p>
      </motion.div>

    </div>
  )
}
