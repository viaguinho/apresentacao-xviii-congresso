'use client'

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ChartConfig,
  ChartContainer,
} from '@/components/ui/chart'

const data = [
  {
    phase: 'Bebê (0–2a)',
    age: '0–2a',
    regExterna: 92,
    coRegulacao: 78,
    autoRegulacao: 12,
    regLevel: 'Predominante',
    coLevel: 'Sustentada',
    autoLevel: 'Emergente',
    detail: 'Dependência do suporte do cuidador para modulação fisiológica',
  },
  {
    phase: 'Pré-escolar (3–5a)',
    age: '3–5a',
    regExterna: 62,
    coRegulacao: 88,
    autoRegulacao: 42,
    regLevel: 'Moderada',
    coLevel: 'Pico Ativo',
    autoLevel: 'Em Formação',
    detail: 'Pico da co-regulação ativa: linguagem e modelagem estruturam o autocontrole',
  },
  {
    phase: 'Escolar (6–11a)',
    age: '6–11a',
    regExterna: 34,
    coRegulacao: 68,
    autoRegulacao: 76,
    regLevel: 'Sob Demanda',
    coLevel: 'Sustentada',
    autoLevel: 'Consolidada',
    detail: 'Consolidação de estratégias executivas; suporte relacional sob estresse',
  },
  {
    phase: 'Adolescente (12–18a)',
    age: '12–18a',
    regExterna: 18,
    coRegulacao: 52,
    autoRegulacao: 90,
    regLevel: 'Residual',
    coLevel: 'Recurso Permanente',
    autoLevel: 'Integrada',
    detail: 'Autonomia integrada: o suporte social não cessa, migra e expande-se para os pares',
  },
]

const chartConfig = {
  regExterna: {
    label: 'Regulação Externa (Cuidador)',
    color: '#0071e3',
  },
  coRegulacao: {
    label: 'Co-regulação (Diádica)',
    color: '#b5563a',
  },
  autoRegulacao: {
    label: 'Autorregulação (Endógena)',
    color: '#0d606a',
  },
} satisfies ChartConfig

function QualitativeTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  const currentItem = data.find((d) => d.phase === label)

  return (
    <div className="bg-white/98 backdrop-blur-md border border-black/10 shadow-xl rounded-2xl p-3.5 max-w-[280px] font-['Satoshi',sans-serif] text-xs">
      <p className="font-['Urbanist',sans-serif] font-bold text-[13.5px] text-zinc-900 mb-1 border-b border-black/[0.06] pb-1">
        {label}
      </p>
      <p className="text-zinc-500 text-[11px] mb-2.5 leading-relaxed font-normal">
        {currentItem?.detail}
      </p>
      <div className="space-y-1.5 pt-0.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1.5 font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
            Reg. Externa (Azul):
          </span>
          <span className="font-semibold text-[#0071e3]">
            {currentItem?.regLevel}
          </span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1.5 font-bold text-[#b5563a]">
            <span className="w-2 h-2 rounded-full bg-[#b5563a]" />
            Co-regulação (Laranja):
          </span>
          <span className="font-bold text-[#b5563a]">
            {currentItem?.coLevel}
          </span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1.5 font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-[#0d606a]" />
            Autorregulação (Verde):
          </span>
          <span className="font-semibold text-[#0d606a]">
            {currentItem?.autoLevel}
          </span>
        </div>
      </div>
    </div>
  )
}

export function ClippedAreaChart() {
  return (
    <div className="w-full h-full flex flex-col justify-between font-['Satoshi',sans-serif]">
      {/* Header do Gráfico */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#b5563a]/15 text-[#8c3e27] border border-[#b5563a]/30">
              Trajetória Desenvolvimental
            </span>
            <span className="text-[11px] font-semibold text-zinc-400">
              Infância à Adolescência
            </span>
          </div>
          <h3 className="text-[20px] lg:text-[22px] font-bold tracking-tight text-zinc-900 font-['Urbanist',sans-serif] leading-tight">
            Transição da Dependência Regulamentar
          </h3>
          <p className="text-[13px] text-zinc-500 mt-0.5">
            Evolução concomitante: o aumento da autorregulação não extingue a co-regulação.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#fdf6f3] border border-[#b5563a]/25 shadow-xs">
          <span className="size-2 rounded-full bg-[#b5563a] animate-pulse" />
          <span className="text-[11.5px] font-bold text-[#8c3e27]">
            Co-regulação Persistente
          </span>
        </div>
      </div>

      {/* Canvas Recharts com Linhas Puras (sem área pintada) */}
      <ChartContainer config={chartConfig} className="w-full h-[270px] lg:h-[290px] aspect-auto">
        <LineChart
          data={data}
          margin={{ top: 14, right: 20, left: -6, bottom: 6 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(0,0,0,0.06)"
          />
          <XAxis
            dataKey="phase"
            tickLine={false}
            axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
            tickMargin={10}
            tick={{ fill: '#52525b', fontSize: 12, fontWeight: 600 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={6}
            ticks={[20, 55, 90]}
            tickFormatter={(v) => (v >= 80 ? 'Alta' : v >= 45 ? 'Moderada' : 'Baixa')}
            domain={[0, 100]}
            tick={{ fill: '#71717a', fontSize: 11, fontWeight: 500 }}
          />
          <Tooltip content={<QualitativeTooltip />} />

          {/* Linha 1: Regulação Externa (Azul: #0071e3) */}
          <Line
            type="monotone"
            dataKey="regExterna"
            stroke="#0071e3"
            strokeWidth={2.6}
            dot={{ r: 4.5, fill: '#0071e3', strokeWidth: 2, stroke: '#ffffff' }}
            activeDot={{ r: 7, fill: '#0071e3', strokeWidth: 2.5, stroke: '#ffffff' }}
            name="Regulação Externa"
          />

          {/* Linha 2: Co-regulação (Laranja/Terracota: #b5563a - Curva Herói) */}
          <Line
            type="monotone"
            dataKey="coRegulacao"
            stroke="#b5563a"
            strokeWidth={3.8}
            dot={{ r: 5.5, fill: '#b5563a', strokeWidth: 2.5, stroke: '#ffffff' }}
            activeDot={{ r: 8, fill: '#b5563a', strokeWidth: 2.5, stroke: '#ffffff' }}
            name="Co-regulação"
          />

          {/* Linha 3: Autorregulação (Verde: #0d606a) */}
          <Line
            type="monotone"
            dataKey="autoRegulacao"
            stroke="#0d606a"
            strokeWidth={2.6}
            dot={{ r: 4.5, fill: '#0d606a', strokeWidth: 2, stroke: '#ffffff' }}
            activeDot={{ r: 7, fill: '#0d606a', strokeWidth: 2.5, stroke: '#ffffff' }}
            name="Autorregulação"
          />
        </LineChart>
      </ChartContainer>

      {/* Legenda Customizada com Azul, Laranja e Verde */}
      <div className="flex flex-wrap items-center justify-center gap-7 pt-3 mt-1 border-t border-black/[0.05] text-[12px] font-medium">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#0071e3] ring-1 ring-[#0071e3]/30" />
          <span className="font-semibold text-[#0071e3]">Regulação Externa (Azul)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#b5563a] ring-2 ring-[#b5563a]/40" />
          <span className="font-bold text-[#b5563a]">Co-regulação (Laranja/Terracota)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#0d606a] ring-1 ring-[#0d606a]/30" />
          <span className="font-semibold text-[#0d606a]">Autorregulação (Verde)</span>
        </div>
      </div>
    </div>
  )
}
