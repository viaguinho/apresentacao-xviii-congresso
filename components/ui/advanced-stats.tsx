'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { ClippedAreaChart } from '@/components/ui/advanced-stats-utils/charts'
import { TimelineAnimation } from '@/components/ui/advanced-stats-utils/timeline-animation'
import { HeartHandshake, Sparkles } from 'lucide-react'

export interface AdvancedStatsProps {
  isActive?: boolean
  className?: string
}

const developmentalKpis = [
  {
    phase: 'Bebê (0–2 anos)',
    status: 'Externa Dominante',
    badge: 'Dependência Diádica',
    sublabel: 'Suporte Fisiológico Contínuo',
    desc: 'O cuidador atua como o sistema nervoso auxiliar e regulador primário.',
    accent: '#0071e3',
  },
  {
    phase: 'Pré-escolar (3–6 anos)',
    status: 'Mediação Ativa',
    badge: 'Co-regulação em Expansão',
    sublabel: 'Modelagem & Linguagem',
    desc: 'Rotulagem verbal e respostas contingentes estruturam o freio inibitório.',
    accent: '#b5563a',
  },
  {
    phase: 'Escolar (7–11 anos)',
    status: 'Internalização',
    badge: 'Estratégias Próprias',
    sublabel: 'Suporte sob Demanda',
    desc: 'Consolidação de rotas cognitivas, mantendo busca relacional sob estresse.',
    accent: '#0d606a',
  },
  {
    phase: 'Adolescência (12–18 anos)',
    status: 'Autonomia com Vínculo',
    badge: 'Recurso Permanente',
    sublabel: 'Rede de Pares & Família',
    desc: 'Autonomia integrada: maturidade exige saber acionar suporte seguro.',
    accent: '#b5563a',
  },
]

export default function AdvancedStats({ isActive = true, className }: AdvancedStatsProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={timelineRef}
      className={cn(
        'w-full flex flex-col justify-between font-["Satoshi",sans-serif] select-none',
        className
      )}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Seção Principal: Gráfico de Área */}
          <TimelineAnimation
            animationNum={1}
            timelineRef={timelineRef}
            isActive={isActive}
            className="lg:col-span-8 p-6 lg:p-7 rounded-3xl bg-white border border-black/[0.07] shadow-[0_4px_24px_rgba(181,86,58,0.06)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0071e3] via-[#b5563a] to-[#0d606a]" />
            <ClippedAreaChart />
          </TimelineAnimation>

          {/* Seção Lateral: Breakdown & Tese Central */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Card Superior: Tese Central (Escuro com sotaque terracota e zero porcentagens) */}
            <TimelineAnimation
              animationNum={2}
              timelineRef={timelineRef}
              isActive={isActive}
              className="p-5 lg:p-6 rounded-3xl bg-gradient-to-br from-[#231815] to-[#120d0b] text-white flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.18)] border border-white/[0.08] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b5563a]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e07a5f] bg-[#b5563a]/25 px-2.5 py-0.5 rounded-full border border-[#b5563a]/40">
                    Tese Central · Eixo 3
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#e07a5f]" />
                </div>
                <h4 className="text-[20px] font-bold tracking-tight font-['Urbanist',sans-serif] text-white leading-tight">
                  Autonomia ≠ Independência
                </h4>
                <p className="text-[12.5px] text-zinc-300 font-normal leading-relaxed mt-1.5">
                  A maturação emocional não elimina a necessidade do outro: pessoas maduras continuam usando vínculos interpessoais como amortecedores de estresse.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.1]">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif]">
                    Recurso Permanente
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e07a5f] bg-[#b5563a]/25 px-2 py-0.5 rounded border border-[#b5563a]/35">
                    Ao Longo de Toda a Vida
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-gradient-to-r from-[#0071e3] via-[#b5563a] to-[#0d606a] w-full rounded-full shadow-[0_0_8px_rgba(181,86,58,0.5)]" />
                </div>
                <p className="text-[11px] text-zinc-400 mt-1.5 leading-tight">
                  O vínculo seguro permanece como o modulador primário sob estresse agudo.
                </p>
              </div>
            </TimelineAnimation>

            {/* Card Inferior: As Três Vias Familiares (Morris et al.) */}
            <TimelineAnimation
              animationNum={3}
              timelineRef={timelineRef}
              isActive={isActive}
              className="p-5 rounded-3xl bg-gradient-to-br from-white to-[#fdf9f7] border border-[#b5563a]/25 shadow-[0_2px_12px_rgba(181,86,58,0.05)] flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="size-8 rounded-xl bg-[#b5563a]/15 flex items-center justify-center border border-[#b5563a]/25 text-[#b5563a]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-[14.5px] text-zinc-900 font-['Urbanist',sans-serif] leading-tight">
                    Três Vias Familiares
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-medium">Morris et al. (2007)</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-[11.5px]">
                <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/80 border border-black/[0.04]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#475569] mt-1.5 shrink-0" />
                  <p className="text-zinc-600 leading-tight">
                    <strong className="text-zinc-900 font-semibold">Modelagem:</strong> observação de respostas e expressão adulta
                  </p>
                </div>
                <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/80 border border-black/[0.04]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b5563a] mt-1.5 shrink-0" />
                  <p className="text-zinc-600 leading-tight">
                    <strong className="text-zinc-900 font-semibold">Socialização:</strong> nomeação e validação afetiva contingente
                  </p>
                </div>
                <div className="flex items-start gap-2 p-1.5 rounded-lg bg-white/80 border border-black/[0.04]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d606a] mt-1.5 shrink-0" />
                  <p className="text-zinc-600 leading-tight">
                    <strong className="text-zinc-900 font-semibold">Clima Emocional:</strong> previsibilidade, apego e calor afetivo
                  </p>
                </div>
              </div>
            </TimelineAnimation>
          </div>
        </div>

        {/* Linha dos 4 KPIs Desenvolvimentais (Sem nenhuma porcentagem) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5">
          {developmentalKpis.map((kpi, index) => (
            <TimelineAnimation
              animationNum={4 + index}
              timelineRef={timelineRef}
              isActive={isActive}
              key={kpi.phase}
              className={cn(
                'p-4 lg:p-5 rounded-2xl border bg-white border-black/[0.06] shadow-xs transition-all duration-300 group',
                'hover:border-[#b5563a]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#fdf6f3] hover:shadow-md'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-['Urbanist',sans-serif]">
                  {kpi.phase}
                </p>
                <span
                  className="size-2 rounded-full transition-transform group-hover:scale-125"
                  style={{ backgroundColor: kpi.accent }}
                />
              </div>

              <div className="mb-2">
                <h4 className="text-[17px] font-bold text-zinc-900 tracking-tight font-['Urbanist',sans-serif] leading-snug">
                  {kpi.status}
                </h4>
                <div className="mt-1">
                  <span
                    className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border inline-block"
                    style={{
                      backgroundColor: `${kpi.accent}12`,
                      color: kpi.accent,
                      borderColor: `${kpi.accent}28`,
                    }}
                  >
                    {kpi.badge}
                  </span>
                </div>
              </div>

              <p className="text-[11.5px] font-semibold text-zinc-700">
                {kpi.sublabel}
              </p>
              <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
                {kpi.desc}
              </p>
            </TimelineAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}
