"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Timer, Route } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide10bMechanismsProps {
  isActive?: boolean
}

/*
 * Gabard-Durnam LJ, McLaughlin KA. Biol Psychiatry. 2019;85(10):789-791.
 * Matriz de "small multiples": 7 mecanismos × 3 cenários, lidos da esquerda (menor efeito no cérebro)
 * para a direita (maior efeito). Cada célula é um SVG 340×72 renderizado ~1:1.
 * Papéis de cor fixos: azul = tempo/janela · tinta = adversidade · verde = experiência esperada.
 */

const BLUE = "#0071e3"
const INK = "#2d2e30"
const GREEN = "#059669"
const W = 340
const H = 72
const BASE = 56 // linha do tempo

// ---------- Glifos (desenhados em caixa 24×24, centralizados em x,y) ----------

function Glyph({ x, y, s = 1.5, children, delay = 0 }: { x: number; y: number; s?: number; children: ReactNode; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.g
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <g transform={`scale(${s}) translate(-12 -12)`}>{children}</g>
      </motion.g>
    </g>
  )
}

// Raio (adversidade)
const Bolt = (p: { x: number; y: number; delay?: number }) => (
  <Glyph {...p}>
    <path
      d="M13.5 2 L5 13.2 H11 L9.8 22 L19 10.2 H12.8 Z"
      fill="#ffffff"
      stroke={INK}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Glyph>
)

// Estouro (adversidade)
const Burst = (p: { x: number; y: number; delay?: number }) => {
  const pts: string[] = []
  for (let i = 0; i < 20; i++) {
    const r = i % 2 === 0 ? 11 : 6.2
    const a = (Math.PI * 2 * i) / 20 - Math.PI / 2
    pts.push(`${(12 + r * Math.cos(a)).toFixed(2)},${(12 + r * Math.sin(a)).toFixed(2)}`)
  }
  return (
    <Glyph {...p}>
      <polygon points={pts.join(" ")} fill="#ffffff" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
    </Glyph>
  )
}

// X (adversidade)
const Cross = (p: { x: number; y: number; delay?: number }) => (
  <Glyph {...p}>
    <path
      d="M5 2.5 L12 9.5 L19 2.5 L21.5 5 L14.5 12 L21.5 19 L19 21.5 L12 14.5 L5 21.5 L2.5 19 L9.5 12 L2.5 5 Z"
      fill="#ffffff"
      stroke={INK}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Glyph>
)

// Check (experiência esperada)
const Check = (p: { x: number; y: number; delay?: number }) => (
  <Glyph {...p} s={1.55}>
    <path d="M4 12.5 L9.5 18 L20.5 5" fill="none" stroke="#ffffff" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12.5 L9.5 18 L20.5 5" fill="none" stroke={GREEN} strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
  </Glyph>
)

// Cromossomo (genética): claro, médio ou escuro
const Chromosome = ({ x, y, tone, delay }: { x: number; y: number; tone: "light" | "mid" | "dark"; delay?: number }) => {
  const fill = tone === "light" ? "#ffffff" : tone === "mid" ? "#8b8f96" : "#1f2328"
  return (
    <Glyph x={x} y={y} s={1.45} delay={delay}>
      <rect x={8.5} y={1.5} width={7} height={21} rx={3.5} fill={fill} stroke={INK} strokeWidth={1.4} transform="rotate(-22 12 12)" />
      <rect x={8.5} y={1.5} width={7} height={21} rx={3.5} fill={fill} stroke={INK} strokeWidth={1.4} transform="rotate(22 12 12)" />
      <circle cx={12} cy={12} r={2.2} fill={tone === "light" ? "#ffffff" : fill} stroke={INK} strokeWidth={1.2} />
    </Glyph>
  )
}

// ---------- Primitivas das células ----------

function Timeline({ id }: { id: string }) {
  return (
    <g>
      <defs>
        <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={BLUE} />
        </marker>
      </defs>
      <line x1={14} y1={BASE} x2={318} y2={BASE} stroke={BLUE} strokeWidth={2} strokeLinecap="round" markerEnd={`url(#${id}-arrow)`} />
    </g>
  )
}

/** Curva de janela (gaussiana) centrada em cx; halfWidth define se é estreita (crítico) ou larga (sensível). */
function bellPath(cx: number, halfWidth: number, peak = 14) {
  const sigma = halfWidth / 2.6
  const pts: string[] = []
  for (let i = 0; i <= 48; i++) {
    const x = cx - halfWidth + (2 * halfWidth * i) / 48
    const y = BASE - (BASE - peak) * Math.exp(-((x - cx) ** 2) / (2 * sigma ** 2))
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
  }
  return pts.join(" ")
}

function Bell({ id, cx, halfWidth, delay = 0 }: { id: string; cx: number; halfWidth: number; delay?: number }) {
  const d = bellPath(cx, halfWidth)
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BLUE} stopOpacity={0.22} />
          <stop offset="100%" stopColor={BLUE} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <motion.path
        d={`${d} Z`}
        fill={`url(#${id}-fill)`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke={BLUE}
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </g>
  )
}

function Now({ x }: { x: number }) {
  return (
    <g>
      <line x1={x} y1={10} x2={x} y2={BASE + 5} stroke="#5f6062" strokeWidth={1.5} strokeDasharray="3 4" />
      <text x={x} y={BASE + 15.5} textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize={15} fontWeight={600} fill="#3f4042">
        agora
      </text>
    </g>
  )
}

function Plus({ x }: { x: number }) {
  return (
    <text x={x} y={43.5} textAnchor="middle" fontFamily="'Urbanist', sans-serif" fontSize={24} fontWeight={700} fill={INK}>
      +
    </text>
  )
}

/** Caixa com contorno (risco cumulativo / sensibilidade biológica), centralizada na célula. */
function Box({ width, children }: { width: number; children: ReactNode }) {
  return (
    <g>
      <rect x={(W - width) / 2} y={7} width={width} height={58} rx={11} fill="#ffffff" stroke={INK} strokeWidth={1.5} />
      {children}
    </g>
  )
}

// ---------- Conteúdo: 7 mecanismos × 3 cenários (menor → maior efeito) ----------

type CellRender = (id: string, delay: number) => ReactNode

interface Mechanism {
  id: string
  title: string
  desc: string
  cells: [CellRender, CellRender, CellRender]
  labels: [string, string, string]
}

const expectant: Mechanism[] = [
  {
    id: "critico",
    title: "Período crítico",
    desc: "Janela temporal estreita",
    labels: [
      "Experiência esperada dentro da janela estreita; adversidade depois da janela",
      "Adversidade na abertura da janela; experiência esperada no pico",
      "Adversidade antes da janela; experiência esperada depois que a janela fechou",
    ],
    cells: [
      (id, d) => (<><Timeline id={id} /><Bell id={id} cx={112} halfWidth={62} delay={d} /><Check x={112} y={28} delay={d + 0.5} /><Bolt x={242} y={34} delay={d + 0.6} /></>),
      (id, d) => (<><Timeline id={id} /><Bell id={id} cx={138} halfWidth={62} delay={d} /><Bolt x={80} y={34} delay={d + 0.6} /><Check x={140} y={28} delay={d + 0.5} /></>),
      (id, d) => (<><Timeline id={id} /><Bell id={id} cx={150} halfWidth={62} delay={d} /><Bolt x={62} y={34} delay={d + 0.6} /><Check x={262} y={28} delay={d + 0.5} /></>),
    ],
  },
  {
    id: "sensivel",
    title: "Período sensível",
    desc: "Janela temporal mais ampla",
    labels: [
      "Experiência esperada no pico da janela ampla; adversidade na cauda final",
      "Adversidade no início da janela ampla; experiência esperada no pico",
      "Adversidade logo no começo; experiência esperada tardia, ainda na cauda da janela",
    ],
    cells: [
      (id, d) => (<><Timeline id={id} /><Bell id={id} cx={128} halfWidth={112} delay={d} /><Check x={118} y={28} delay={d + 0.5} /><Bolt x={234} y={36} delay={d + 0.6} /></>),
      (id, d) => (<><Timeline id={id} /><Bell id={id} cx={160} halfWidth={112} delay={d} /><Bolt x={70} y={36} delay={d + 0.6} /><Check x={160} y={28} delay={d + 0.5} /></>),
      (id, d) => (<><Timeline id={id} /><Bell id={id} cx={168} halfWidth={122} delay={d} /><Bolt x={56} y={36} delay={d + 0.6} /><Check x={262} y={30} delay={d + 0.5} /></>),
    ],
  },
]

const dependent: Mechanism[] = [
  {
    id: "dose",
    title: "Resposta à dose",
    desc: "Maior intensidade de exposição",
    labels: ["Uma exposição à adversidade", "Duas exposições à adversidade", "Três exposições à adversidade"],
    cells: [
      (id, d) => (<><Timeline id={id} /><Bolt x={70} y={34} delay={d} /></>),
      (id, d) => (<><Timeline id={id} /><Bolt x={70} y={34} delay={d} /><Bolt x={122} y={34} delay={d + 0.08} /></>),
      (id, d) => (<><Timeline id={id} /><Bolt x={70} y={34} delay={d} /><Bolt x={122} y={34} delay={d + 0.08} /><Bolt x={174} y={34} delay={d + 0.16} /></>),
    ],
  },
  {
    id: "recencia",
    title: "Recência",
    desc: "Eventos recentes têm maior peso",
    labels: ["Adversidade distante no tempo", "Adversidade próxima de agora", "Adversidade colada em agora"],
    cells: [
      (id, d) => (<><Timeline id={id} /><Bolt x={62} y={34} delay={d} /></>),
      (id, d) => (<><Timeline id={id} /><Now x={262} /><Bolt x={190} y={34} delay={d} /></>),
      (id, d) => (<><Timeline id={id} /><Now x={262} /><Bolt x={238} y={34} delay={d} /></>),
    ],
  },
  {
    id: "acumulacao",
    title: "Acumulação",
    desc: "Efeitos se somam ao longo do tempo",
    labels: ["Um evento adverso", "Três eventos adversos ao longo do tempo", "Quatro eventos adversos ao longo do tempo"],
    cells: [
      (id, d) => (<><Timeline id={id} /><Bolt x={70} y={34} delay={d} /></>),
      (id, d) => (<><Timeline id={id} /><Bolt x={64} y={34} delay={d} /><Bolt x={138} y={34} delay={d + 0.08} /><Bolt x={212} y={34} delay={d + 0.16} /></>),
      (id, d) => (<><Timeline id={id} /><Bolt x={58} y={34} delay={d} /><Bolt x={112} y={34} delay={d + 0.08} /><Bolt x={166} y={34} delay={d + 0.16} /><Bolt x={220} y={34} delay={d + 0.24} /></>),
    ],
  },
  {
    id: "cumulativo",
    title: "Risco cumulativo",
    desc: "Combinação de múltiplos fatores",
    labels: ["Um fator de risco", "Dois fatores de risco combinados", "Três fatores de risco combinados"],
    cells: [
      (_id, d) => (<Box width={96}><Bolt x={170} y={36} delay={d} /></Box>),
      (_id, d) => (<Box width={160}><Bolt x={128} y={36} delay={d} /><Plus x={170} /><Burst x={212} y={36} delay={d + 0.08} /></Box>),
      (_id, d) => (<Box width={244}><Bolt x={88} y={36} delay={d} /><Plus x={129} /><Burst x={170} y={36} delay={d + 0.08} /><Plus x={211} /><Cross x={252} y={36} delay={d + 0.16} /></Box>),
    ],
  },
  {
    id: "biologica",
    title: "Sensibilidade biológica ao contexto",
    desc: "Genética e ambiente modulam o efeito",
    labels: [
      "Menor sensibilidade genética combinada à adversidade",
      "Sensibilidade genética intermediária combinada à adversidade",
      "Maior sensibilidade genética combinada à adversidade",
    ],
    cells: [
      (_id, d) => (<Box width={160}><Chromosome x={128} y={36} tone="light" delay={d} /><Plus x={170} /><Bolt x={212} y={36} delay={d + 0.08} /></Box>),
      (_id, d) => (<Box width={160}><Chromosome x={128} y={36} tone="mid" delay={d} /><Plus x={170} /><Bolt x={212} y={36} delay={d + 0.08} /></Box>),
      (_id, d) => (<Box width={160}><Chromosome x={128} y={36} tone="dark" delay={d} /><Plus x={170} /><Bolt x={212} y={36} delay={d + 0.08} /></Box>),
    ],
  },
]

// ---------- Componentes de layout ----------

function MechanismRow({ m, index }: { m: Mechanism; index: number }) {
  const base = 0.12 + index * 0.06
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: base, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group min-h-0 grid items-center gap-3 px-4 py-2 rounded-2xl bg-white/95 border border-black/[0.08]",
        "shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-colors duration-300",
        "hover:border-[#0071e3]/40 hover:bg-[#f5f9fe]"
      )}
      style={{ gridTemplateColumns: "340px repeat(3, minmax(0, 1fr))" }}
    >
      <div className="min-w-0 pr-2">
        <h3 className="font-['Urbanist',sans-serif] text-[21px] font-bold text-[#0f1012] leading-tight">{m.title}</h3>
        <p className="text-[16px] font-medium text-zinc-600 leading-snug mt-0.5">{m.desc}</p>
      </div>
      {m.cells.map((render, i) => (
        <div
          key={i}
          className="h-full min-h-0 rounded-xl bg-[#f7f9fc] border border-black/[0.04] flex items-center justify-center transition-colors duration-300 group-hover:bg-white"
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-full max-h-[80px] overflow-visible"
            role="img"
            aria-label={`${m.title}: ${m.labels[i]}`}
          >
            {render(`mech-${m.id}-${i}`, base + 0.15 + i * 0.12)}
          </svg>
        </div>
      ))}
    </motion.div>
  )
}

function GroupCard({ icon, title, subtitle, delay }: { icon: ReactNode; title: string; subtitle: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full rounded-2xl border-2 border-[#0071e3]/35 bg-gradient-to-br from-[#0071e3]/[0.12] via-[#e8f2fc] to-white px-5 py-5 flex flex-col justify-center gap-3 shadow-[0_2px_10px_rgba(0,113,227,0.06)]"
    >
      <span className="w-10 h-10 shrink-0 rounded-xl bg-[#0071e3] text-white flex items-center justify-center shadow-xs">{icon}</span>
      <h3 className="font-['Urbanist',sans-serif] text-[27px] font-extrabold text-[#0071e3] leading-[1.1] tracking-tight">{title}</h3>
      <p className="text-[18px] font-medium text-[#3f4042] leading-snug">{subtitle}</p>
    </motion.div>
  )
}

export default function Slide10bMechanisms({ isActive: _isActive = true }: Slide10bMechanismsProps) {
  return (
    <div className="w-full h-full flex flex-col gap-3 font-['Satoshi',sans-serif] text-[#0f1012]">
      {/* Matriz: grupo à esquerda, mecanismos à direita (2 linhas no grupo A, 5 no grupo B) */}
      <div
        className="flex-1 min-h-0 grid gap-x-3 gap-y-2"
        style={{ gridTemplateColumns: "248px minmax(0, 1fr)", gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
      >
        <div style={{ gridRow: "1 / span 2" }} className="min-h-0">
          <GroupCard icon={<Timer className="w-5 h-5" />} title="Experiência-expectante" subtitle="Especificidade do desenvolvimento" delay={0.05} />
        </div>
        {expectant.map((m, i) => (
          <div key={m.id} style={{ gridRow: `${i + 1}`, gridColumn: "2" }} className="min-h-0 grid">
            <MechanismRow m={m} index={i} />
          </div>
        ))}

        <div style={{ gridRow: "3 / span 5" }} className="min-h-0 pt-2">
          <GroupCard icon={<Route className="w-5 h-5" />} title="Experiência-dependente" subtitle="Ao longo do curso da vida" delay={0.15} />
        </div>
        {dependent.map((m, i) => (
          <div key={m.id} style={{ gridRow: `${i + 3}`, gridColumn: "2" }} className={cn("min-h-0 grid", i === 0 && "pt-2")}>
            <MechanismRow m={m} index={i + 2} />
          </div>
        ))}
      </div>

      {/* Eixo inferior: menor → maior efeito no cérebro, alinhado às três colunas de cenários */}
      <div className="shrink-0 grid gap-x-3" style={{ gridTemplateColumns: "248px minmax(0, 1fr)" }}>
        <div />
        <div className="grid gap-3 px-4" style={{ gridTemplateColumns: "340px minmax(0, 1fr)" }}>
          <div />
          <div className="flex flex-col gap-1.5">
            <div className="relative h-[14px] flex items-center">
              <motion.div
                className="h-[6px] w-full rounded-full bg-gradient-to-r from-[#cfe3fb] via-[#6aa9f0] to-[#0071e3] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <svg className="absolute -right-[6px] top-0 h-[14px] w-[16px]" viewBox="0 0 16 14" aria-hidden="true">
                <path d="M0 0 L16 7 L0 14 Z" fill={BLUE} />
              </svg>
            </div>
            <div className="flex items-center justify-between text-[18px] font-semibold text-[#3f4042]">
              <span>Menor efeito no cérebro</span>
              <span className="text-[#0f1012]">Maior efeito no cérebro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Legenda do gráfico (renderizada na linha do título do slide). */
export function Slide10bLegend() {
  const pill = "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
  const label = "text-[16px] font-semibold text-[#3f4042]"
  return (
    <div className="flex items-center gap-2.5 font-['Satoshi',sans-serif]">
      <span className={pill}>
        <svg width="34" height="12" viewBox="0 0 34 12" aria-hidden="true">
          <line x1="1" y1="6" x2="27" y2="6" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
          <path d="M25 1 L33 6 L25 11 Z" fill={BLUE} />
        </svg>
        <span className={label}>Tempo</span>
      </span>
      <span className={pill}>
        <svg width="84" height="28" viewBox="0 0 84 28" aria-hidden="true">
          <g transform="translate(14 14)"><g transform="scale(1.05) translate(-12 -12)"><path d="M13.5 2 L5 13.2 H11 L9.8 22 L19 10.2 H12.8 Z" fill="#fff" stroke={INK} strokeWidth={1.6} strokeLinejoin="round" /></g></g>
          <g transform="translate(42 14)"><g transform="scale(1.05) translate(-12 -12)">
            <polygon
              points={Array.from({ length: 20 }, (_, i) => { const r = i % 2 === 0 ? 11 : 6.2; const a = (Math.PI * 2 * i) / 20 - Math.PI / 2; return `${(12 + r * Math.cos(a)).toFixed(2)},${(12 + r * Math.sin(a)).toFixed(2)}` }).join(" ")}
              fill="#fff" stroke={INK} strokeWidth={1.4} strokeLinejoin="round"
            />
          </g></g>
          <g transform="translate(70 14)"><g transform="scale(1.05) translate(-12 -12)"><path d="M5 2.5 L12 9.5 L19 2.5 L21.5 5 L14.5 12 L21.5 19 L19 21.5 L12 14.5 L5 21.5 L2.5 19 L9.5 12 L2.5 5 Z" fill="#fff" stroke={INK} strokeWidth={1.5} strokeLinejoin="round" /></g></g>
        </svg>
        <span className={label}>Adversidade</span>
      </span>
      <span className={pill}>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12.5 L9.5 18 L20.5 5" fill="none" stroke={GREEN} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={label}>Experiência esperada</span>
      </span>
    </div>
  )
}
