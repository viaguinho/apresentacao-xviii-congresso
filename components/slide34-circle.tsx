"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  Sparkles,
  User,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Play,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide34CircleProps {
  isActive?: boolean
  className?: string
}

/** Componente de Círculo com Feixe de Luz Animado na Borda */
function CircularBeam({
  size = 136,
  colors = ["#4b6b4f", "#10b981"],
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
  const comet2 = colors[1] || "#10b981"

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
        isHighlighted
          ? "scale-105 shadow-xl ring-2 ring-[#4b6b4f]/40"
          : "hover:scale-[1.03] hover:shadow-md",
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
            opacity: isHighlighted ? 0.58 : 0.2,
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

type InformantId = "child" | "team" | "parents" | "school" | "center"

interface InformantData {
  id: InformantId
  tag: string
  title: string
  subtitle: string
  items: string
  clinicalNote: string
  badgeBg: string
  textColor: string
  colors: [string, string]
  icon: any
}

const INFORMANTS: Record<Exclude<InformantId, "center">, InformantData> = {
  child: {
    id: "child",
    tag: "auto-relato · voz direta",
    title: "criança e jovem",
    subtitle: "sofrimento · aparência · voz",
    items: "experiência subjetiva · pertencimento · prioridades individuais",
    clinicalNote:
      "A voz própria expressa sofrimento subjetivo e impacto estético/social que pais e testes frequentemente subestimam (Volpicelli et al.).",
    badgeBg: "bg-emerald-50 border-emerald-200/80 text-emerald-800",
    textColor: "text-emerald-700",
    colors: ["#10b981", "#059669"],
    icon: User,
  },
  team: {
    id: "team",
    tag: "avaliação técnica",
    title: "equipe & exames",
    subtitle: "fala · audição · cognição",
    items: "condição clínica · escalas normatizadas (PROMIS, SDQ, PedsQL)",
    clinicalNote:
      "Aporta padronização métrica e parâmetros fisiológicos. Instrumento e entrevista não se substituem: somam-se.",
    badgeBg: "bg-emerald-50 border-emerald-200/80 text-[#4b6b4f]",
    textColor: "text-[#4b6b4f]",
    colors: ["#4b6b4f", "#059669"],
    icon: Stethoscope,
  },
  parents: {
    id: "parents",
    tag: "ecologia familiar",
    title: "pais e cuidadores",
    subtitle: "cotidiano · rotina · impacto",
    items: "comportamento doméstico · sobrecarga de cuidados · histórico de vida",
    clinicalNote:
      "Observam o impacto funcional real no cotidiano e a sobrecarga familiar. Baixa concordância aos 8–10 anos reflete contextos distintos.",
    badgeBg: "bg-amber-50 border-amber-200/80 text-amber-800",
    textColor: "text-[#4b6b4f]",
    colors: ["#4b6b4f", "#10b981"],
    icon: HeartHandshake,
  },
  school: {
    id: "school",
    tag: "contexto escolar",
    title: "escola & educadores",
    subtitle: "aprendizagem · atenção",
    items: "socialização com pares · participação · comportamento em grupo",
    clinicalNote:
      "Revela a adaptação da criança sob demanda acadêmica e entre pares, onde a desatenção ou isolamento emergem com maior clareza.",
    badgeBg: "bg-teal-50 border-teal-200/80 text-teal-800",
    textColor: "text-[#0d9488]",
    colors: ["#0d9488", "#4b6b4f"],
    icon: GraduationCap,
  },
}

// Ordem da rotação contínua
const ROTATION_SEQUENCE: InformantId[] = ["child", "team", "parents", "school", "center"]
const ROTATION_INTERVAL = 4000 // 4.0 segundos por lente

export default function Slide34Circle({ isActive = true, className }: Slide34CircleProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isManualPause, setIsManualPause] = useState<boolean>(false)

  const activeId = ROTATION_SEQUENCE[currentIndex]

  // Rotação automática dos conteúdos e esferas sem necessidade de cliques
  useEffect(() => {
    if (!isActive || isHovered || isManualPause) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATION_SEQUENCE.length)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [isActive, isHovered, isManualPause])

  const handleSelect = (id: InformantId) => {
    const idx = ROTATION_SEQUENCE.indexOf(id)
    if (idx !== -1) {
      setCurrentIndex(idx)
    }
  }

  // Conteúdo contextual sincronizado
  const getFooterContent = () => {
    if (activeId === "center") {
      return {
        tag: "CONVERGÊNCIA MULTI-INFORMANTE",
        highlight: "As quatro perspectivas convergem, mas não necessariamente coincidem.",
        detail:
          "A discordância entre informantes não é erro de mensuração: reflete a expressão genuína da criança em ecossistemas de vida distintos.",
      }
    }
    const current = INFORMANTS[activeId]
    return {
      tag: current.tag.toUpperCase(),
      highlight: `${current.title.toUpperCase()}:`,
      detail: current.clinicalNote,
    }
  }

  const footer = getFooterContent()

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "min-w-0 p-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_22px_rgba(0,0,0,0.03)] flex flex-col justify-between gap-2 select-none font-['Satoshi',sans-serif]",
        className
      )}
    >
      {/* =========================================================================
          HEADER: Tag Apple + Citação Literária + Indicador de Auto-Play
          ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.08em] text-[#4b6b4f] bg-[#4b6b4f]/[0.08] px-2.5 py-0.5 rounded-full border border-[#4b6b4f]/20 font-['Urbanist',sans-serif]">
            <Users className="w-4 h-4 text-[#4b6b4f]" />
            Matriz Multi-Informante
          </span>

          <div className="flex items-center gap-2">
            {/* Indicador de Transição Ativa */}
            <button
              onClick={() => setIsManualPause((p) => !p)}
              className="inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-wider text-gray-600 hover:text-gray-900 bg-gray-100/80 px-2 py-0.5 rounded-full transition-colors"
              title={isManualPause ? "Retomar rotação automática" : "Pausar rotação automática"}
            >
              {isManualPause ? (
                <>
                  <Play className="w-3 h-3 text-[#4b6b4f]" />
                  <span>Pausado</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Auto-Loop</span>
                </>
              )}
            </button>

            <span className="text-[14px] font-bold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
              Volpicelli (2020) · Klassen (2021)
            </span>
          </div>
        </div>

        {/* Definição Operacional / Princípio Clínico */}
        <div className="bg-[#f4f7f4] rounded-xl px-3.5 py-2 mt-1 border border-[#4b6b4f]/10">
          <p className="m-0 text-[14px] font-bold uppercase tracking-wider text-[#4b6b4f]">
            Princípio clínico multi-informante
          </p>
          <p className="m-0 mt-0.5 text-[17px] font-medium text-[#0f1012] leading-snug">
            Nenhuma lente detém a totalidade do quadro. A convergência entre informantes mapeia a trajetória real da criança sem anular as divergências.
          </p>
        </div>
      </div>

      {/* =========================================================================
          DIAGRAMA DOS CÍRCULOS EM 4 QUADRANTES COM CIRCULAR BEAM E SEM SOBREPOSIÇÃO
          Geometria:
          - Caixa: w=full, h=390px (centro em cx=370, cy=195)
          - Criança (Voz Própria): Quadrante Superior Esquerdo (cx=160, cy=95) -> ZERO sobreposição!
          - Equipe & Exames: Quadrante Superior Direito (cx=580, cy=95)
          - Escola & Educadores: Quadrante Inferior Esquerdo (cx=160, cy=295)
          - Pais & Cuidadores: Quadrante Inferior Direito (cx=580, cy=295)
          - Centro (Hub): cx=370, cy=195
          ========================================================================= */}
      {/* =========================================================================
          DIAGRAMA DOS CÍRCULOS EM 4 QUADRANTES — LIVRES, SEM LINHAS NEM ÓRBITAS
          As esferas flutuam livremente com movimentos senoidais suaves e harmônicos
          ========================================================================= */}
      <div className="relative w-full h-[446px] flex items-center justify-center overflow-visible my-0.5">
        
        {/* -----------------------------------------------------------------
            1. CÍRCULO CENTRAL: Hub de Convergência (FUNCIONAMENTO DA CRIANÇA)
            ----------------------------------------------------------------- */}
        <div className="absolute z-20">
          <CircularBeam
            size={200}
            speed={activeId === "center" ? 44 : 34}
            colors={["#4b6b4f", "#10b981"]}
            thickness={2.4}
            glow={true}
            isHighlighted={activeId === "center"}
            onClick={() => handleSelect("center")}
            className="bg-[#f8fbf8] backdrop-blur-md shadow-md"
          >
            {/* Ícone com mini halo */}
            <div className="w-9 h-9 rounded-full bg-[#eef5ee] border border-[#4b6b4f]/25 flex items-center justify-center mb-1 text-[#4b6b4f]">
              <Users className="w-5 h-5" />
            </div>

            <span className="font-['Urbanist',sans-serif] text-[19px] font-bold text-[#0f1012] leading-none tracking-tight">
              FUNCIONAMENTO
            </span>
            <span className="font-['Urbanist',sans-serif] text-[19px] font-bold text-[#4b6b4f] leading-tight tracking-tight mt-0.5">
              DA CRIANÇA
            </span>
            <span className="text-[15px] font-semibold text-gray-600 mt-1.5 leading-tight">
              convergência das 4 lentes
            </span>
          </CircularBeam>
        </div>

        {/* Badge Central de Status com pulso animado */}
        <div className="absolute top-[70px] z-30 pointer-events-none">
          <div className="px-2.5 py-0.5 rounded-full bg-white/95 border border-[#4b6b4f]/30 shadow-2xs backdrop-blur-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-['Urbanist',sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#4b6b4f]">
              convergência
            </span>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            2. QUADRANTE SUPERIOR ESQUERDO: Criança e Adolescente (Voz Própria)
            Flutuando livremente no quadrante superior-esquerdo
            ----------------------------------------------------------------- */}
        <motion.div
          animate={{
            x: [0, 5, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[6px] left-[16px] z-10"
        >
          <CircularBeam
            size={190}
            speed={activeId === "child" ? 44 : 32}
            colors={INFORMANTS.child.colors}
            thickness={2.2}
            isHighlighted={activeId === "child"}
            onClick={() => handleSelect("child")}
            className="bg-white/95 backdrop-blur-md shadow-sm"
          >
            <span className="text-[14px] font-extrabold uppercase tracking-[0.02em] whitespace-nowrap text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 mb-1 leading-none">
              voz própria
            </span>
            <span className="text-[19px] font-bold text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
              criança e jovem
            </span>
            <span className="text-[15px] font-medium text-gray-700 mt-1 leading-tight">
              sofrimento · aparência
            </span>
            <span className="text-[15px] font-medium text-gray-600 leading-tight mt-0.5">
              pertencimento
            </span>
          </CircularBeam>
        </motion.div>

        {/* -----------------------------------------------------------------
            3. QUADRANTE SUPERIOR DIREITO: Equipe Multiprofissional & Exames
            Flutuando livremente no quadrante superior-direito
            ----------------------------------------------------------------- */}
        <motion.div
          animate={{
            x: [0, -5, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5.0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="absolute top-[6px] right-[16px] z-10"
        >
          <CircularBeam
            size={190}
            speed={activeId === "team" ? 44 : 36}
            colors={INFORMANTS.team.colors}
            thickness={2.2}
            isHighlighted={activeId === "team"}
            onClick={() => handleSelect("team")}
            className="bg-white/95 backdrop-blur-md shadow-sm"
          >
            <span className="text-[14px] font-extrabold uppercase tracking-[0.02em] whitespace-nowrap text-[#4b6b4f] bg-emerald-50 px-2 py-0.5 rounded border border-[#4b6b4f]/25 mb-1 leading-none">
              avaliação técnica
            </span>
            <span className="text-[19px] font-bold text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
              equipe &amp; exames
            </span>
            <span className="text-[15px] font-medium text-gray-700 mt-1 leading-tight">
              fala · audição · cognição
            </span>
            <span className="text-[15px] font-medium text-gray-600 leading-tight mt-0.5">
              escalas padronizadas
            </span>
          </CircularBeam>
        </motion.div>

        {/* -----------------------------------------------------------------
            4. QUADRANTE INFERIOR ESQUERDO: Escola e Educadores (Contexto Social)
            Flutuando livremente no quadrante inferior-esquerdo
            ----------------------------------------------------------------- */}
        <motion.div
          animate={{
            x: [0, 5, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute bottom-[6px] left-[16px] z-10"
        >
          <CircularBeam
            size={190}
            speed={activeId === "school" ? 44 : 34}
            colors={INFORMANTS.school.colors}
            thickness={2.2}
            isHighlighted={activeId === "school"}
            onClick={() => handleSelect("school")}
            className="bg-white/95 backdrop-blur-md shadow-sm"
          >
            <span className="text-[14px] font-extrabold uppercase tracking-[0.02em] whitespace-nowrap text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 mb-1 leading-none">
              contexto escolar
            </span>
            <span className="text-[19px] font-bold text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
              escola &amp; pares
            </span>
            <span className="text-[15px] font-medium text-gray-700 mt-1 leading-tight">
              aprendizagem · atenção
            </span>
            <span className="text-[15px] font-medium text-gray-600 leading-tight mt-0.5">
              convivência social
            </span>
          </CircularBeam>
        </motion.div>

        {/* -----------------------------------------------------------------
            5. QUADRANTE INFERIOR DIREITO: Pais e Cuidadores (Ecologia Familiar)
            Flutuando livremente no quadrante inferior-direito
            ----------------------------------------------------------------- */}
        <motion.div
          animate={{
            x: [0, -5, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
          className="absolute bottom-[6px] right-[16px] z-10"
        >
          <CircularBeam
            size={190}
            speed={activeId === "parents" ? 44 : 40}
            colors={INFORMANTS.parents.colors}
            thickness={2.2}
            isHighlighted={activeId === "parents"}
            onClick={() => handleSelect("parents")}
            className="bg-white/95 backdrop-blur-md shadow-sm"
          >
            <span className="text-[14px] font-extrabold uppercase tracking-[0.02em] whitespace-nowrap text-[#4b6b4f] bg-emerald-50 px-2 py-0.5 rounded border border-[#4b6b4f]/25 mb-1 leading-none">
              ecologia familiar
            </span>
            <span className="text-[19px] font-bold text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
              pais e cuidadores
            </span>
            <span className="text-[15px] font-medium text-gray-700 mt-1 leading-tight">
              cotidiano · rotina
            </span>
            <span className="text-[15px] font-medium text-gray-600 leading-tight mt-0.5">
              impacto funcional
            </span>
          </CircularBeam>
        </motion.div>
      </div>

      {/* =========================================================================
          DESTAQUE SÍNTESE NO RODAPÉ DO CARD — TRANSIÇÃO AUTOMÁTICA FLUIDA
          ========================================================================= */}
      <div className="bg-gradient-to-r from-[#eef5ef] to-emerald-50/70 rounded-2xl px-3.5 py-2.5 border border-[#4b6b4f]/20 min-h-[76px] flex flex-col justify-center transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#4b6b4f] shrink-0" />
                <p className="m-0 text-[17px] font-bold text-[#4b6b4f] leading-snug">
                  {footer.highlight}
                </p>
              </div>

              {/* Indicadores de bolinhas de rotação das 5 etapas */}
              <div className="flex items-center gap-1">
                {ROTATION_SEQUENCE.map((id, index) => (
                  <button
                    key={id}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "bg-[#4b6b4f] scale-125 w-4 rounded-full"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    title={`Perspectiva: ${id}`}
                  />
                ))}
              </div>
            </div>
            <p className="m-0 text-[15px] font-medium text-[#3f4042] leading-snug">
              {footer.detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
