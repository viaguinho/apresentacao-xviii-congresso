'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ============================================================================
// ÍCONES CLÍNICOS E NEUROCIENTÍFICOS MINIMALISTAS (Parte inferior esquerda)
// ============================================================================

// 1. Domínios Centrais: Camadas/Eixos integrados
export const LayersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// 2. Interconectividade: Rede/Sinapse sistêmica
export const NetworkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#40E5D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

// 3. Avaliação Clínica: Foco e escopo clínico global
export const ClinicalScanIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B14C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <circle cx="12" cy="12" r="3.5" />
    <line x1="12" y1="6" x2="12" y2="7.5" />
    <line x1="12" y1="16.5" x2="12" y2="18" />
  </svg>
);

// 4. Ritmo Temporal: Onda dinâmica não-linear
export const WaveCurveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c3-7 6-7 9 0s6 7 9 0" />
    <circle cx="11" cy="12" r="1.5" fill="#0071e3" />
  </svg>
);

// 5. Fases de Platô: Patamar com marcador de estabilização
export const PlateauStepIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B14C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17h5l5-7h8" />
    <circle cx="15.5" cy="10" r="2" fill="#5B14C5" />
  </svg>
);

// 6. Saltos Qualitativos: Transição de patamar / reorganização
export const ReorganizationLeapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#40E5D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 7 21 7 21 12" />
    <path d="M3 18l7-7 4 4 7-8" />
  </svg>
);

// 7. Variabilidade Interindividual: Bifurcação divergente
export const DivergenceForkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E84045" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="5" r="2.5" />
    <circle cx="18" cy="19" r="2.5" />
    <path d="M8.5 12h3c2 0 3-1.5 4.5-4.5" />
    <path d="M8.5 12h3c2 0 3 1.5 4.5 4.5" />
  </svg>
);

// 8. Origem Cronológica: Ponto de partida temporal sincronizado
export const ChronologicalSyncIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// 9. Trajetórias Individuais: Bússola direcional de caminhos
export const CompassTrajectoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#40E5D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#40E5D1" fillOpacity="0.2" />
  </svg>
);

interface MetricItem {
  id: string;
  Icon: React.FC<{ className?: string }>;
  label: string;
  tooltip: string;
  value: string;
  delay: number;
}

interface CardProps {
  title: string;
  subtitle: string;
  badge?: string;
  legends?: { name: string; color: string }[];
  metrics: MetricItem[];
  children: React.ReactNode;
  delay?: number;
}

const SlideCardShell: React.FC<CardProps> = ({
  title,
  subtitle,
  legends,
  metrics,
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col bg-white dark:bg-[#141517] rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.05),0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,113,227,0.12)] transition-all duration-300 w-full overflow-hidden"
    >
      {/* Header com altura padronizada para alinhamento perfeito entre os cards */}
      <div className="pt-6 px-7 pb-4 border-b border-black/[0.04] dark:border-white/[0.04] bg-gradient-to-b from-blue-50/40 to-transparent dark:from-blue-950/20 min-h-[112px] flex flex-col justify-center">
        <h3 className="text-[28px] font-bold tracking-tight text-[#0f1012] dark:text-white leading-tight">
          {title}
        </h3>
        <p className="text-[18px] font-medium text-[#5f6062] dark:text-gray-600 mt-1.5 leading-snug font-sans">
          {subtitle}
        </p>
      </div>

      {/* Legends (renderizadas apenas se fornecidas) */}
      {legends && legends.length > 0 ? (
        <div className="flex flex-wrap gap-3 px-7 pt-3.5 pb-1 items-center min-h-[38px]">
          {legends.map((item) => (
            <div key={item.name} className="flex gap-1.5 items-center">
              <div
                className="w-2.5 h-2.5 rounded-full ring-1 ring-black/10"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-700 dark:text-gray-600 text-[16px] font-medium tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-3" />
      )}

      {/* Center Visual / Graph Area */}
      <div className="relative w-full flex-1 min-h-[275px] px-2 flex items-center justify-center overflow-hidden">
        {children}
      </div>

      {/* Metrics Footer (sem setas, tipografia nobre e ícones semânticos) */}
      <div className="flex flex-col px-7 pt-2 pb-5 font-mono divide-y divide-gray-100 dark:divide-gray-800/80 mt-auto bg-gray-50/50 dark:bg-black/20">
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: metric.delay }}
            className="flex w-full py-2.5 items-center justify-between gap-3"
          >
            <div className="flex flex-row gap-2.5 items-center text-[17px] font-sans text-[#52525b] dark:text-gray-300 min-w-0">
              <metric.Icon className="w-[20px] h-[20px] flex-none" />
              <span className="font-medium leading-tight" title={metric.tooltip}>
                {metric.label}
              </span>
            </div>
            <div className="flex justify-end items-center flex-none">
              <span className="font-bold text-[19px] tracking-tight text-[#0f1012] dark:text-white">
                {metric.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const Slide5ConceptCards: React.FC = () => {
  const [visibleCount, setVisibleCount] = React.useState(1);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (visibleCount < 3) {
          e.stopPropagation();
          e.preventDefault();
          setVisibleCount(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (visibleCount > 1) {
          e.stopPropagation();
          e.preventDefault();
          setVisibleCount(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [visibleCount]);

  // 1. Métricas do Card 1: Multidimensional
  const multidimensionalMetrics: MetricItem[] = [
    {
      id: 'm1',
      Icon: LayersIcon,
      label: 'Domínios Centrais',
      tooltip: 'Cinco eixos articulados no desenvolvimento infantil',
      value: '5 Eixos',
      delay: 0.1,
    },
    {
      id: 'm2',
      Icon: NetworkIcon,
      label: 'Interconectividade',
      tooltip: 'Nível de influência mútua entre as dimensões',
      value: 'Sistêmica',
      delay: 0.15,
    },
    {
      id: 'm3',
      Icon: ClinicalScanIcon,
      label: 'Avaliação Clínica',
      tooltip: 'Necessidade de abordagem abrangente e integrada',
      value: 'Global',
      delay: 0.2,
    },
  ];

  // 2. Métricas do Card 2: Dinâmico e Não Linear
  const dinamicoMetrics: MetricItem[] = [
    {
      id: 'd1',
      Icon: WaveCurveIcon,
      label: 'Ritmo Temporal',
      tooltip: 'Padrão não linear de evolução de competências',
      value: 'Não linear',
      delay: 0.1,
    },
    {
      id: 'd2',
      Icon: PlateauStepIcon,
      label: 'Fases de Platô',
      tooltip: 'Momentos transitórios de estabilização funcional',
      value: 'Transitórias',
      delay: 0.15,
    },
    {
      id: 'd3',
      Icon: ReorganizationLeapIcon,
      label: 'Saltos Qualitativos',
      tooltip: 'Reorganizações estruturais ao longo dos anos',
      value: 'Reorganização',
      delay: 0.2,
    },
  ];

  // 3. Métricas do Card 3: Heterogêneo
  const heterogeneoMetrics: MetricItem[] = [
    {
      id: 'h1',
      Icon: DivergenceForkIcon,
      label: 'Variabilidade Interindividual',
      tooltip: 'Grau de dispersão entre crianças da mesma idade',
      value: 'Significativa',
      delay: 0.1,
    },
    {
      id: 'h2',
      Icon: ChronologicalSyncIcon,
      label: 'Origem Cronológica',
      tooltip: 'Mesma faixa etária de observação inicial',
      value: 'Sincronizada',
      delay: 0.15,
    },
    {
      id: 'h3',
      Icon: CompassTrajectoryIcon,
      label: 'Trajetórias Individuais',
      tooltip: 'Caminhos de desenvolvimento únicos e singulares',
      value: 'Divergentes',
      delay: 0.2,
    },
  ];

  return (
    <div className="w-full grid gap-6 h-full items-stretch" style={{ gridTemplateColumns: '0.94fr 1.03fr 1.03fr' }}>
      {/* CARD 1: MULTIDIMENSIONAL */}
      {visibleCount >= 1 && (
      <SlideCardShell
        title="Multidimensional"
        subtitle="cognição, linguagem, comportamento, emoções, habilidades sociais"
        metrics={multidimensionalMetrics}
        delay={0.05}
      >
        <div className="w-full h-full min-h-[285px] flex items-center justify-center p-1">
          <svg viewBox="0 0 460 265" className="w-full h-full overflow-visible" aria-label="Diagrama radial multidimensional do desenvolvimento">
            <defs>
              <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f1012" floodOpacity="0.08" />
              </filter>
              <filter id="hubShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0071e3" floodOpacity="0.14" />
              </filter>

              {/* Linhas de Gradiente Diretas */}
              <linearGradient id="grad-cognicao" x1="230" y1="106" x2="230" y2="74" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0071e3" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="grad-linguagem" x1="264" y1="130" x2="338" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#5B14C5" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="grad-emocoes" x1="254" y1="168" x2="310" y2="202" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#E84045" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="grad-comportamento" x1="206" y1="168" x2="150" y2="202" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0f1012" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="grad-sociais" x1="196" y1="130" x2="122" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#40E5D1" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* 1. Conectores Radiais */}
            <line x1="230" y1="106" x2="230" y2="76" stroke="url(#grad-cognicao)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="262" y1="130" x2="338" y2="102" stroke="url(#grad-linguagem)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="254" y1="168" x2="308" y2="202" stroke="url(#grad-emocoes)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="206" y1="168" x2="152" y2="202" stroke="url(#grad-comportamento)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="198" y1="130" x2="122" y2="102" stroke="url(#grad-sociais)" strokeWidth="2.8" strokeLinecap="round" />

            {/* 2. Hub Central CRIANÇA */}
            <g filter="url(#hubShadow)">
              <circle cx="230" cy="146" r="42" fill="#ffffff" stroke="#0071e3" strokeWidth="2.4" />
              <circle cx="230" cy="146" r="48" fill="none" stroke="#0071e3" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
              <circle cx="230" cy="133" r="14" fill="#e8f2fc" />
              <g transform="translate(222, 125)">
                <path d="M12 14v-1.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3V14" fill="none" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="4.5" r="2.8" fill="none" stroke="#0071e3" strokeWidth="1.8" />
              </g>
              <text x="230" y="162" textAnchor="middle" fontFamily="'Urbanist', sans-serif" fontSize="15" fontWeight="800" fill="#0f1012" letterSpacing="0.08em">
                CRIANÇA
              </text>
            </g>

            {/* 3. Nós com Rótulos em Offset Externo */}

            {/* NÓ 1: COGNIÇÃO */}
            <g filter="url(#nodeShadow)">
              <circle cx="230" cy="56" r="20" fill="#ffffff" stroke="#0071e3" strokeWidth="2" />
              <g transform="translate(221, 47)">
                <path d="M9 3a2.5 2.5 0 1 0-5 .1 3.2 3.2 0 0 0-2 4.6 3.2 3.2 0 0 0 .4 5.3A3.2 3.2 0 1 0 9 14Z" fill="none" stroke="#0071e3" strokeWidth="1.6" />
                <path d="M9 3a2.5 2.5 0 1 1 5 .1 3.2 3.2 0 0 1 2 4.6 3.2 3.2 0 0 1-.4 5.3A3.2 3.2 0 1 1 9 14Z" fill="none" stroke="#0071e3" strokeWidth="1.6" />
                <path d="M9 3v11" stroke="#0071e3" strokeWidth="1.6" />
              </g>
            </g>
            <text x="230" y="22" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15.5" fontWeight="600" fill="#0f1012">
              cognição
            </text>

            {/* NÓ 2: LINGUAGEM (Ícone de balão de fala perfeitamente desenhado e centralizado) */}
            <g filter="url(#nodeShadow)">
              <circle cx="356" cy="94" r="20" fill="#ffffff" stroke="#5B14C5" strokeWidth="2" />
              <g transform="translate(346, 84)">
                {/* Balão de diálogo clássico com proporção harmoniosa */}
                <path
                  d="M17 3H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1.5v3.2l3.8-3.2H17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"
                  fill="none"
                  stroke="#5B14C5"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Linhas de expressão vocal internas */}
                <line x1="6.5" y1="7.2" x2="14.5" y2="7.2" stroke="#5B14C5" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6.5" y1="10.5" x2="11.5" y2="10.5" stroke="#5B14C5" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </g>
            <text x="384" y="99" textAnchor="start" fontFamily="'Satoshi', sans-serif" fontSize="15.5" fontWeight="600" fill="#0f1012">
              linguagem
            </text>

            {/* NÓ 3: EMOÇÕES */}
            <g filter="url(#nodeShadow)">
              <circle cx="325" cy="214" r="20" fill="#ffffff" stroke="#E84045" strokeWidth="2" />
              <g transform="translate(316, 205)">
                <path d="M15 11c1.2-1.2 2.4-2.6 2.4-4.4A4.4 4.4 0 0 0 13 2.4c-1.4 0-2.4.4-3.6 1.6-1.2-1.2-2.2-1.6-3.6-1.6A4.4 4.4 0 0 0 2.2 6.8c0 1.8 1.2 3.2 2.4 4.4L10 16.5Z" fill="none" stroke="#E84045" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <text x="325" y="249" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15.5" fontWeight="600" fill="#0f1012">
              emoções
            </text>

            {/* NÓ 4: COMPORTAMENTO */}
            <g filter="url(#nodeShadow)">
              <circle cx="135" cy="214" r="20" fill="#ffffff" stroke="#0f1012" strokeWidth="2" />
              <g transform="translate(126, 205)">
                <path d="M17 9h-3l-2.5 7.5L7.5 2 5 9H1" fill="none" stroke="#0f1012" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <text x="135" y="249" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15.5" fontWeight="600" fill="#0f1012">
              comportamento
            </text>

            {/* NÓ 5: HABILIDADES SOCIAIS */}
            <g filter="url(#nodeShadow)">
              <circle cx="104" cy="94" r="20" fill="#ffffff" stroke="#40E5D1" strokeWidth="2" />
              <g transform="translate(95, 85)">
                <path d="M13 16v-1.5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3V16" fill="none" stroke="#40E5D1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7.5" cy="5.5" r="3" fill="none" stroke="#40E5D1" strokeWidth="1.6" />
                <path d="M17 16v-1.5a3 3 0 0 0-2.3-2.9" fill="none" stroke="#40E5D1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 2.6a3 3 0 0 1 0 5.8" fill="none" stroke="#40E5D1" strokeWidth="1.6" />
              </g>
            </g>
            <text x="76" y="99" textAnchor="end" fontFamily="'Satoshi', sans-serif" fontSize="15.5" fontWeight="600" fill="#0f1012">
              hab. sociais
            </text>
          </svg>
        </div>
      </SlideCardShell>
      )}

      {/* CARD 2: DINÂMICO E NÃO LINEAR */}
      {visibleCount >= 2 && (
      <SlideCardShell
        title="Dinâmico e não linear"
        subtitle="acelerações, platôs e reorganizações estruturais"
        legends={[
          { name: 'Curva de Competências', color: '#0071e3' },
          { name: 'Platô', color: '#5B14C5' },
          { name: 'Reorganização', color: '#40E5D1' },
        ]}
        metrics={dinamicoMetrics}
        delay={0.15}
      >
        <div className="w-full h-full p-1 flex items-center justify-center">
          <svg viewBox="0 0 500 240" className="w-full h-full overflow-visible" aria-label="Curva de desenvolvimento não linear com aceleração, platô e reorganização">
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#5B14C5" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#40E5D1" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <g stroke="#7E7E8F" strokeWidth="0.8" strokeOpacity="0.22" strokeDasharray="3 3">
              <line x1="70" y1="40" x2="470" y2="40" />
              <line x1="70" y1="80" x2="470" y2="80" />
              <line x1="70" y1="120" x2="470" y2="120" />
              <line x1="70" y1="160" x2="470" y2="160" />
              <line x1="70" y1="200" x2="470" y2="200" />
            </g>

            <line x1="70" y1="30" x2="70" y2="205" stroke="#9A9AAF" strokeWidth="1.5" />
            <line x1="65" y1="205" x2="470" y2="205" stroke="#9A9AAF" strokeWidth="1.5" />

            <text x="270" y="232" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15" fill="#5f6062" fontWeight="500">
              tempo (anos)
            </text>
            <text x="24" y="115" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15" fill="#5f6062" fontWeight="500" transform="rotate(-90 24 115)">
              competências
            </text>

            <path
              d="M70,198 C140,194 165,95 230,82 L320,82 C376,80 410,48 465,36 L465,205 L70,205 Z"
              fill="url(#curveGradient)"
            />

            <path
              d="M70,198 C140,194 165,95 230,82 L320,82 C376,80 410,48 465,36"
              fill="none"
              stroke="#0071e3"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            <circle cx="150" cy="140" r="5" fill="#0071e3" />
            <circle cx="150" cy="140" r="10" fill="#0071e3" fillOpacity="0.15" />
            <text x="164" y="160" fontFamily="'Satoshi', sans-serif" fontSize="16" fontWeight="600" fill="#0071e3">
              aceleração
            </text>

            <circle cx="275" cy="82" r="5" fill="#5B14C5" />
            <circle cx="275" cy="82" r="10" fill="#5B14C5" fillOpacity="0.15" />
            <text x="275" y="66" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="16" fontWeight="600" fill="#5B14C5">
              platô
            </text>

            <circle cx="465" cy="36" r="5" fill="#40E5D1" />
            <circle cx="465" cy="36" r="10" fill="#40E5D1" fillOpacity="0.2" />
            <text x="460" y="24" textAnchor="end" fontFamily="'Satoshi', sans-serif" fontSize="16" fontWeight="600" fill="#028071">
              reorganização
            </text>
          </svg>
        </div>
      </SlideCardShell>
      )}

      {/* CARD 3: HETEROGÊNEO */}
      {visibleCount >= 3 && (
      <SlideCardShell
        title="Heterogêneo"
        subtitle="crianças da mesma idade não percorrem a mesma trajetória"
        legends={[
          { name: 'Trajetória Acelerada', color: '#0071e3' },
          { name: 'Típica 1', color: '#0f1012' },
          { name: 'Típica 2', color: '#5B14C5' },
          { name: 'Oscilante', color: '#40E5D1' },
        ]}
        metrics={heterogeneoMetrics}
        delay={0.25}
      >
        <div className="w-full h-full p-1 flex items-center justify-center">
          <svg viewBox="0 0 500 240" className="w-full h-full overflow-visible" aria-label="Quatro trajetórias individuais divergentes a partir de um mesmo ponto">
            <defs>
              <linearGradient id="hetGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0071e3" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#5B14C5" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <g stroke="#7E7E8F" strokeWidth="0.8" strokeOpacity="0.22" strokeDasharray="3 3">
              <line x1="70" y1="40" x2="470" y2="40" />
              <line x1="70" y1="80" x2="470" y2="80" />
              <line x1="70" y1="120" x2="470" y2="120" />
              <line x1="70" y1="160" x2="470" y2="160" />
              <line x1="70" y1="200" x2="470" y2="200" />
            </g>

            <line x1="70" y1="30" x2="70" y2="205" stroke="#9A9AAF" strokeWidth="1.5" />
            <line x1="65" y1="205" x2="470" y2="205" stroke="#9A9AAF" strokeWidth="1.5" />

            <text x="270" y="232" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15" fill="#5f6062" fontWeight="500">
              tempo (anos)
            </text>
            <text x="24" y="115" textAnchor="middle" fontFamily="'Satoshi', sans-serif" fontSize="15" fill="#5f6062" fontWeight="500" transform="rotate(-90 24 115)">
              competências
            </text>

            <path
              d="M70,198 C150,172 270,120 455,58 L455,205 L70,205 Z"
              fill="url(#hetGradient)"
            />

            <path
              d="M70,198 C150,172 270,120 455,58"
              fill="none"
              stroke="#0071e3"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="455" cy="58" r="6" fill="#0071e3" />
            <circle cx="455" cy="58" r="10" fill="#0071e3" fillOpacity="0.2" />

            <path
              d="M70,198 C120,130 180,105 455,80"
              fill="none"
              stroke="#0f1012"
              strokeWidth="2.4"
              strokeDasharray="6 4"
              strokeLinecap="round"
            />
            <circle cx="455" cy="80" r="5" fill="#0f1012" />

            <path
              d="M70,198 C160,195 230,105 455,100"
              fill="none"
              stroke="#5B14C5"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="455" cy="100" r="5" fill="#5B14C5" />

            <path
              d="M70,198 C115,170 155,185 210,130 C265,75 320,150 455,42"
              fill="none"
              stroke="#40E5D1"
              strokeWidth="2.4"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />
            <circle cx="455" cy="42" r="5" fill="#40E5D1" />

            <circle cx="70" cy="198" r="7" fill="#0071e3" />
            <circle cx="70" cy="198" r="13" fill="#0071e3" fillOpacity="0.2" />
            <text x="80" y="218" fontFamily="'Satoshi', sans-serif" fontSize="15" fontWeight="700" fill="#0071e3">
              origem comum
            </text>
          </svg>
        </div>
      </SlideCardShell>
      )}
    </div>
  );
};

export default Slide5ConceptCards;
