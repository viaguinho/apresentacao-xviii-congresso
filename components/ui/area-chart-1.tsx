'use client';

import React, { useState } from 'react';
import { Activity, TrendingUp, Sparkles } from 'lucide-react';

export interface ChartDataPoint {
  age: string;
  val: number;
}

export interface SeriesConfig {
  id: string;
  name: string;
  color: string;
  gradientId: string;
  gradientStops: [string, string];
  data: number[];
}

export const AGE_LABELS = ['8a', '11a', '14a', '17a', '20a', '25a', '35a'];

export const SERIES: SeriesConfig[] = [
  {
    id: 'velocidade',
    name: 'Velocidade de Processamento',
    color: '#0d606a',
    gradientId: 'gradVelocidade',
    gradientStops: ['#0d606a', '#21C6E0'],
    data: [30, 58, 85, 94, 98, 99, 100],
  },
  {
    id: 'inibitorio',
    name: 'Controle Inibitório',
    color: '#21C6E0',
    gradientId: 'gradInibitorio',
    gradientStops: ['#21C6E0', '#0284c7'],
    data: [20, 42, 65, 80, 90, 95, 97],
  },
  {
    id: 'metacognicao',
    name: 'Acurácia Metacognitiva',
    color: '#0071e3',
    gradientId: 'gradMetacognicao',
    gradientStops: ['#0071e3', '#6366f1'],
    data: [15, 30, 48, 68, 84, 91, 95],
  },
];

// Helper to calculate smooth bezier curves through coordinates
function getBezierPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 >= points.length ? points.length - 1 : i + 2];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export const IncidentReportCard: React.FC = () => {
  const [hoveredSeries, setHoveredSeries] = useState<string | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<{ series: string; index: number } | null>(null);

  // SVG coordinate configuration
  const width = 680;
  const height = 246;
  const paddingLeft = 44;
  const paddingRight = 36;
  const paddingTop = 22;
  const paddingBottom = 36;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const getX = (idx: number) => paddingLeft + (idx / (AGE_LABELS.length - 1)) * chartW;
  const getY = (val: number) => paddingTop + chartH - (val / 100) * chartH;

  const yTicks = [25, 50, 75, 100];

  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-black/[0.08] rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] w-full min-h-[500px] font-['Satoshi',sans-serif] select-none transition-all duration-300">
      <div>
        {/* Header com Tag Apple inspirada no Slide 11 */}
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0d606a] bg-[#0d606a]/[0.08] px-2.5 py-0.5 rounded-full border border-[#0d606a]/20">
            <Activity className="w-3.5 h-3.5 text-[#0d606a]" />
            Tervo-Clemmens et al. (2023)
          </span>
          <span className="text-xs font-semibold text-[#5f6062]">
            Nat Commun · N = 10.000+
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
          Maturação das Funções Executivas
        </h3>
        <p className="text-xs text-[#5f6062] mt-0.5 mb-3">
          Trajetórias normativas de maturação neurocognitiva observadas entre 8 e 35 anos.
        </p>

        {/* Barra Superior Dedicada de Legendas (Sem Sobreposição) */}
        <div className="flex flex-wrap items-center gap-3 w-full py-2 mb-3 border-y border-black/[0.05]">
          {SERIES.map((s) => {
            const isDimmed = hoveredSeries && hoveredSeries !== s.id;
            const isSelected = hoveredSeries === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onMouseEnter={() => setHoveredSeries(s.id)}
                onMouseLeave={() => setHoveredSeries(null)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl cursor-pointer transition-all duration-200 border text-left ${
                  isSelected
                    ? 'bg-white border-black/15 shadow-xs scale-[1.02]'
                    : isDimmed
                    ? 'opacity-40 border-transparent bg-transparent'
                    : 'bg-black/[0.02] border-transparent hover:bg-black/[0.04]'
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${s.gradientStops[0]}, ${s.gradientStops[1]})`,
                    transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
                <span
                  className={`text-[12.5px] leading-none ${
                    isSelected ? 'text-[#0f1012] font-bold' : 'text-[#5f6062] font-medium'
                  }`}
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Canvas Interno do Gráfico (bg-[#fcfdfe] com moldura de precisão) */}
      <div className="w-full relative bg-[#fcfdfe] rounded-2xl p-3 border border-black/[0.04] overflow-hidden my-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto max-h-[250px] display-block overflow-visible"
          aria-label="Gráfico de linhas das trajetórias de maturação das funções executivas"
        >
          <defs>
            {/* Gradientes das 3 linhas */}
            {SERIES.map((s) => (
              <linearGradient key={s.gradientId} id={s.gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={s.gradientStops[0]} />
                <stop offset="100%" stopColor={s.gradientStops[1]} />
              </linearGradient>
            ))}

            {/* Gradientes de Área translúcida */}
            {SERIES.map((s) => (
              <linearGradient key={`area-${s.id}`} id={`area-${s.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={s.gradientStops[1]} stopOpacity="0.10" />
                <stop offset="100%" stopColor={s.gradientStops[0]} stopOpacity="0.00" />
              </linearGradient>
            ))}

            {/* Sombra suave para traço ativo */}
            <filter id="lineGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.16" />
            </filter>
          </defs>

          {/* Linhas de Grade Horizontais Sutis Pontilhadas */}
          {yTicks.map((tick) => {
            const y = getY(tick);
            return (
              <g key={tick}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  fontFamily="'Urbanist', sans-serif"
                  fontSize="11"
                  fontWeight="600"
                  fill="#8c8d8f"
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          {/* Eixo Base X */}
          <line
            x1={paddingLeft}
            y1={paddingTop + chartH}
            x2={width - paddingRight}
            y2={paddingTop + chartH}
            stroke="#c9cacc"
            strokeWidth="1.6"
          />

          {/* Rótulos do Eixo X com Ticks Precisos */}
          {AGE_LABELS.map((age, i) => {
            const x = getX(i);
            return (
              <g key={age}>
                <line
                  x1={x}
                  y1={paddingTop + chartH}
                  x2={x}
                  y2={paddingTop + chartH + 5}
                  stroke="#8c8d8f"
                  strokeWidth="1.2"
                />
                <text
                  x={x}
                  y={paddingTop + chartH + 20}
                  textAnchor="middle"
                  fontFamily="'Urbanist', sans-serif"
                  fontSize="13"
                  fontWeight="700"
                  fill="#5f6062"
                >
                  {age}
                </text>
              </g>
            );
          })}

          {/* Curvas Bézier das 3 Séries */}
          {SERIES.map((s) => {
            const pts = s.data.map((val, i) => ({ x: getX(i), y: getY(val) }));
            const bezier = getBezierPath(pts);
            const isDimmed = hoveredSeries && hoveredSeries !== s.id;
            const isHovered = hoveredSeries === s.id;
            const lastPt = pts[pts.length - 1];
            const firstPt = pts[0];

            const areaPath = `${bezier} L ${lastPt.x} ${paddingTop + chartH} L ${firstPt.x} ${paddingTop + chartH} Z`;

            return (
              <g
                key={s.id}
                className="transition-opacity duration-300"
                style={{ opacity: isDimmed ? 0.25 : 1 }}
              >
                {/* Preenchimento de Área Suave */}
                <path
                  d={areaPath}
                  fill={`url(#area-${s.id})`}
                  opacity={isHovered ? 0.85 : 0.4}
                  className="transition-opacity duration-300"
                />

                {/* Traço Principal com Gradiente */}
                <path
                  d={bezier}
                  fill="none"
                  stroke={`url(#${s.gradientId})`}
                  strokeWidth={isHovered ? 4.5 : 3.5}
                  strokeLinecap="round"
                  filter={isHovered ? 'url(#lineGlow)' : undefined}
                  className="transition-all duration-300"
                />

                {/* Nós Luminosos Multicamadas Estilo Slide 11 */}
                {pts.map((pt, i) => {
                  const isPtHovered =
                    hoveredPoint?.series === s.id && hoveredPoint?.index === i;
                  const isKeyMilestone = i === 0 || i === 2 || i === 4 || i === 6; // 8a, 14a, 20a, 35a

                  return (
                    <g
                      key={i}
                      transform={`translate(${pt.x}, ${pt.y})`}
                      className="cursor-pointer"
                      onMouseEnter={() => {
                        setHoveredPoint({ series: s.id, index: i });
                        setHoveredSeries(s.id);
                      }}
                      onMouseLeave={() => {
                        setHoveredPoint(null);
                        setHoveredSeries(null);
                      }}
                    >
                      {/* Halo Translúcido */}
                      <circle
                        r={isPtHovered ? 14 : isKeyMilestone ? 9 : 6}
                        fill={s.gradientStops[1]}
                        fillOpacity={isPtHovered ? 0.35 : 0.16}
                        className="transition-all duration-200"
                      />
                      {/* Anel do Nó */}
                      <circle
                        r={isPtHovered ? 6.5 : isKeyMilestone ? 4.5 : 3.5}
                        fill={s.gradientStops[0]}
                        className="transition-all duration-200"
                      />
                      {/* Ponto Specular Branco Interno */}
                      <circle r={isPtHovered ? 3 : 2} fill="#ffffff" />

                      {/* Tooltip de Valor em Hover com Pointer-Events None */}
                      {isPtHovered && (
                        <g transform="translate(0, -22)" className="pointer-events-none">
                          <rect
                            x="-24"
                            y="-14"
                            width="48"
                            height="22"
                            rx="6"
                            fill="#0f1012"
                            opacity="0.92"
                            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                          />
                          <text
                            x="0"
                            y="1"
                            textAnchor="middle"
                            fontFamily="'Urbanist', sans-serif"
                            fontSize="11"
                            fontWeight="800"
                            fill="#ffffff"
                          >
                            {s.data[i]}%
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Marcadores de Fases Temporais Integradas (Design Refinado) */}
      <div className="pt-3 mt-3 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-[#5f6062]">
          <TrendingUp className="w-3.5 h-3.5 text-[#0d606a]" />
          <span className="font-semibold text-[#0f1012]">Fases desenvolvimentais:</span>
        </div>

        <div className="flex items-center gap-2 text-[12px]">
          <span className="px-2.5 py-1 rounded-lg bg-[#0d606a]/[0.08] text-[#0d606a] font-semibold border border-[#0d606a]/20">
            <strong>8–11a</strong> · Aceleração
          </span>
          <span className="text-[#c9cacc]">→</span>
          <span className="px-2.5 py-1 rounded-lg bg-[#21C6E0]/[0.12] text-[#0d606a] font-semibold border border-[#21C6E0]/30">
            <strong>14–17a</strong> · Transição
          </span>
          <span className="text-[#c9cacc]">→</span>
          <span className="px-2.5 py-1 rounded-lg bg-[#0071e3]/[0.08] text-[#0071e3] font-semibold border border-[#0071e3]/20">
            <strong>20–35a</strong> · Platô adulto
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncidentReportCard;
