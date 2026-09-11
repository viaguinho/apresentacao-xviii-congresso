import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Brain, ShieldCheck, Award } from "lucide-react";

export type DomainStage = 
  | "Linguagem" 
  | "Aprendizagem" 
  | "Atenção" 
  | "Executivas" 
  | "Memória";

export interface DomainSegment {
  domain: DomainStage;
  label: string;
  height: number; // Proporção visual de consistência (0-100), sem exibir números
  color: string;
  badge: string;
}

export interface CognitiveEvidenceData {
  title: string;
  subtitle: string;
  studiesCount: string;
  studiesLabel: string;
  topDomain: string;
  topDomainLabel: string;
  robustness: string;
  robustnessLabel: string;
  segments: DomainSegment[];
}

interface SleepTrackerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: CognitiveEvidenceData;
  isActive?: boolean;
}

export const defaultEvidenceData: CognitiveEvidenceData = {
  title: "Consistência da Evidência",
  subtitle: "Meta-análise Roberts et al. (29 estudos)",
  studiesCount: "29",
  studiesLabel: "Estudos analisados",
  topDomain: "Linguagem",
  topDomainLabel: "Maior consistência",
  robustness: "Sem viés",
  robustnessLabel: "Publicação homogênea",
  segments: [
    {
      domain: "Linguagem",
      label: "Linguagem",
      height: 85,
      color: "bg-[#21C6E0]",
      badge: "Consistente (d = 0.55)",
    },
    {
      domain: "Aprendizagem",
      label: "Aprendizagem",
      height: 56,
      color: "bg-[#0071e3]",
      badge: "Moderada / heterogênea",
    },
    {
      domain: "Atenção",
      label: "Atenção",
      height: 40,
      color: "bg-[#0d606a]",
      badge: "Resultados mistos",
    },
    {
      domain: "Executivas",
      label: "Executivas",
      height: 33,
      color: "bg-[#6b4e83]",
      badge: "Sem padrão universal",
    },
    {
      domain: "Memória",
      label: "Memória",
      height: 28,
      color: "bg-[#64748b]",
      badge: "Discreta / isolada",
    },
  ],
};

const SleepTrackerCard = React.forwardRef<HTMLDivElement, SleepTrackerCardProps>(
  ({ className, data = defaultEvidenceData, isActive = true, ...props }, ref) => {
    const {
      title,
      subtitle,
      studiesCount,
      studiesLabel,
      topDomain,
      topDomainLabel,
      robustness,
      robustnessLabel,
      segments,
    } = data;

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.15,
        },
      },
    };

    const barVariants = {
      hidden: { scaleY: 0, opacity: 0 },
      visible: {
        scaleY: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 14,
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-3xl border border-[rgba(15,16,18,0.08)] bg-white px-6 py-5 text-[#0f1012] shadow-[0_4px_24px_rgba(15,16,18,0.04)] dark:border-gray-800 dark:bg-gray-950 dark:text-white transition-all duration-300 select-none",
          className
        )}
        {...props}
      >
        {/* Header Section */}
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-[rgba(15,16,18,0.06)] pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(33,198,224,0.12)] text-[#0d606a]">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-['Urbanist'] text-[26px] font-semibold tracking-[-0.015em] text-[#0f1012] dark:text-white">
                {title}
              </h2>
              <p className="font-['Satoshi'] text-[15px] font-medium text-[#5f6062] dark:text-gray-400">
                {subtitle}
              </p>
            </div>
          </div>
          <span className="font-['Urbanist'] text-[14px] font-bold uppercase tracking-[0.06em] text-[#0d606a] bg-[rgba(33,198,224,0.12)] border border-[rgba(33,198,224,0.25)] px-2.5 py-1 rounded-[6px]">
            Domínios Cognitivos
          </span>
        </div>

        {/* Main Stats Section (3 Métricas Reais da Meta-análise) */}
        <div className="mb-4 grid grid-cols-3 gap-3 rounded-2xl bg-gray-50/80 dark:bg-gray-900/50 p-3.5 text-center border border-gray-100 dark:border-gray-800/80 font-['Satoshi']">
          <div className="border-r border-gray-200/60 dark:border-gray-800 pr-2">
            <div className="flex items-center justify-center gap-1.5 text-[#0071e3]">
              <Award className="h-4 w-4" />
              <p className="font-['Urbanist'] text-2xl font-bold tracking-tight text-[#0f1012] dark:text-white">
                {studiesCount}
              </p>
            </div>
            <p className="text-[15px] font-medium text-[#5f6062] dark:text-gray-400 mt-0.5">
              {studiesLabel}
            </p>
          </div>

          <div className="border-r border-gray-200/60 dark:border-gray-800 px-2">
            <p className="font-['Urbanist'] text-2xl font-bold tracking-tight text-[#21C6E0]">
              {topDomain}
            </p>
            <p className="text-[15px] font-medium text-[#5f6062] dark:text-gray-400 mt-0.5">
              {topDomainLabel}
            </p>
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <p className="font-['Urbanist'] text-2xl font-bold tracking-tight text-[#0f1012] dark:text-white">
                {robustness}
              </p>
            </div>
            <p className="text-[15px] font-medium text-[#5f6062] dark:text-gray-400 mt-0.5">
              {robustnessLabel}
            </p>
          </div>
        </div>

        {/* Animated Graph Section (Barras proporcionais em pílula estilo Apple Health) */}
        <div
          className="rounded-2xl bg-gray-50/60 dark:bg-gray-900/40 px-5 py-4 border border-gray-100 dark:border-gray-800/60"
          aria-label="Gráfico de consistência da evidência por domínio"
          role="figure"
        >
          <div className="mb-2 flex justify-between items-center text-[15px] font-medium text-[#5f6062] dark:text-gray-400 font-['Satoshi']">
            <span>Escala relativa de consistência da evidência</span>
          </div>

          <motion.div
            className="flex h-40 w-full items-end justify-between gap-3 px-2 pt-2 pb-1"
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            {segments.map((segment) => (
              <div
                key={segment.domain}
                className="flex flex-1 flex-col items-center h-full justify-end group cursor-default"
              >
                <div className="w-full max-w-[48px] h-full flex flex-col items-center justify-end">
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 4 }}
                    transition={{ delay: 0.25, duration: 0.25 }}
                    className="mb-1.5 font-['Urbanist'] text-[16px] font-bold tracking-tight text-[#0d606a] dark:text-cyan-400"
                  >
                    {segment.height}%
                  </motion.span>
                  <motion.div
                    className={cn(
                      "w-full rounded-full transition-shadow duration-200 shadow-sm",
                      segment.color
                    )}
                    style={{
                      height: `${segment.height}%`,
                      transformOrigin: "bottom",
                    }}
                    variants={barVariants}
                    title={`${segment.label} (${segment.badge})`}
                  />
                </div>
                <span className="mt-2.5 font-['Urbanist'] text-[16px] font-semibold tracking-tight text-[#0f1012] dark:text-gray-200 text-center leading-tight">
                  {segment.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Legend / Clinical Insight Section */}
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[rgba(15,16,18,0.06)] pt-3 sm:grid-cols-3 font-['Satoshi']">
          {segments.map((segment) => (
            <div key={segment.domain} className="flex items-center gap-2">
              <span
                className={cn("h-2.5 w-2.5 rounded-full flex-shrink-0", segment.color)}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-[16px] font-semibold text-[#0f1012] dark:text-gray-200 leading-tight">
                  {segment.label}
                </p>
                <p className="text-[14px] font-medium text-[#5f6062] dark:text-gray-400 leading-tight">
                  {segment.badge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

SleepTrackerCard.displayName = "SleepTrackerCard";

export { SleepTrackerCard };
export default SleepTrackerCard;
