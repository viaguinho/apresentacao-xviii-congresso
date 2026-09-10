"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Activity, Sparkles } from "lucide-react";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const Slide18BentoCards: React.FC<BentoCardProps> = ({
  className,
  isActive = true,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-5 w-full", className)} {...props}>
      {/* Primary Stat Card: Exemplo Empírico de Atenção (CPT) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-950 p-7 text-[#0f1012] dark:text-white shadow-[0_4px_24px_rgba(15,16,18,0.04)] border border-[rgba(15,16,18,0.08)] dark:border-gray-800 flex flex-col justify-between"
      >
        {/* Repeating Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#000000_0px_1px,transparent_1px_12px)] opacity-[0.035] dark:opacity-[0.05] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Header & Tag */}
        <div className="relative z-10 mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(13,96,106,0.08)] text-[#0d606a] dark:text-cyan-400 rounded-full text-[11px] font-bold uppercase tracking-wider border border-[rgba(13,96,106,0.18)]">
            <Activity className="h-3.5 w-3.5 text-[#0d606a] dark:text-cyan-400" />
            Exemplo empírico · Atenção (CPT)
          </span>
          <span className="font-['Urbanist'] text-[12px] font-bold text-[#0d606a] dark:text-cyan-400 bg-gray-100/80 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 px-2.5 py-1 rounded-md">
            p = 0,022 · d = 0,55
          </span>
        </div>

        {/* Comparison Values */}
        <div className="relative z-10 grid grid-cols-2 gap-4 my-2">
          <div className="bg-gray-50 dark:bg-gray-900/60 rounded-2xl p-3.5 border border-gray-200/60 dark:border-gray-800">
            <p className="font-['Satoshi'] text-[11px] font-semibold uppercase tracking-wider text-[#5f6062] dark:text-gray-400">
              Controles
            </p>
            <h4 className="font-['Urbanist'] text-[28px] font-bold tracking-tight text-[#0f1012] dark:text-white mt-0.5">
              59,46 <span className="text-[15px] font-normal text-[#5f6062] dark:text-gray-400">± 14,90</span>
            </h4>
          </div>

          <div className="bg-[rgba(33,198,224,0.08)] dark:bg-cyan-950/25 rounded-2xl p-3.5 border border-[rgba(33,198,224,0.28)] shadow-xs">
            <p className="font-['Satoshi'] text-[11px] font-semibold uppercase tracking-wider text-[#0d606a] dark:text-cyan-300">
              Fissura Orofacial
            </p>
            <h4 className="font-['Urbanist'] text-[28px] font-bold tracking-tight text-[#0d606a] dark:text-cyan-400 mt-0.5">
              51,03 <span className="text-[15px] font-normal text-[#0d606a]/70 dark:text-cyan-300/70">± 15,66</span>
            </h4>
          </div>
        </div>

        {/* Footnote context */}
        <p className="relative z-10 text-[#5f6062] dark:text-gray-400 text-[13px] leading-relaxed font-['Satoshi'] mt-3">
          Nas demais tarefas executivas avaliadas não houve diferenças significativas e nenhum participante apresentou desempenho abaixo da média nos domínios do WISC-IV. Estudo unicêntrico, 6–16 anos: <span className="text-[#0f1012] dark:text-white font-semibold">resultado ilustrativo, não um perfil universal</span>.
        </p>
      </motion.div>

      {/* Secondary Stat Card: Axioma Clínico & Trajetória */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        className="rounded-3xl bg-[#f8f9fa] dark:bg-gray-900/60 p-6 border border-[rgba(15,16,18,0.08)] dark:border-gray-800 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,16,18,0.03)]"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(13,96,106,0.08)] text-[#0d606a] dark:text-cyan-400 rounded-full text-[11px] font-bold uppercase tracking-wider border border-[rgba(13,96,106,0.15)]">
            <Sparkles className="h-3.5 w-3.5 text-[#0d606a]" />
            Axioma Clínico
          </span>
          {/* Sparkline mini-bars */}
          <div className="flex gap-1 items-end h-5" aria-hidden="true">
            {[35, 60, 45, 80, 65, 95].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-[#0d606a]/70 dark:bg-cyan-500/70 rounded-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <h3 className="font-['Urbanist'] text-[23px] font-bold tracking-tight text-[#0f1012] dark:text-white leading-snug">
          Fala alterada ≠ linguagem alterada ≠ inteligência reduzida.
        </h3>

        <p className="text-[#5f6062] dark:text-gray-400 text-[14px] leading-relaxed font-['Satoshi'] mt-2.5">
          O objetivo não é procurar um déficit cognitivo da fissura, mas identificar quais processos favorecem ou limitam a aprendizagem e a participação naquele momento da trajetória.
        </p>
      </motion.div>
    </div>
  );
};

export const StatsBento = Slide18BentoCards;
export default StatsBento;
