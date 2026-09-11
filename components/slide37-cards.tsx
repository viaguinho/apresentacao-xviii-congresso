"use client";

import { motion } from "framer-motion";
import { Target, HelpCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide37CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide37Cards({ isActive = true, className }: Slide37CardsProps) {
  const functionalDomains = [
    "aprender",
    "comunicar",
    "relacionar-se",
    "regular-se",
    "participar",
  ];

  const contexts = ["casa", "escola", "pares", "consultório"];

  const clinicalQuestions = [
    "Isso é esperado para esta idade?",
    "É novo?",
    "É persistente?",
    "Onde acontece?",
    "Quanto interfere no funcionamento?",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[620px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Sintomas vs Prejuízo Funcional (Light Glass · Eixo 7 Navy)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.08]",
          "bg-gradient-to-br from-white via-[#fcfdff] to-[#edeff3]/70",
          "shadow-[0_4px_24px_rgba(51,65,92,0.06)] hover:shadow-[0_12px_36px_rgba(51,65,92,0.12)]",
          "hover:border-[#33415c]/30 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Decorative Gradient Mesh Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#33415c]/15 to-[#1e293b]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#33415c]/20 bg-white/90 shadow-xs text-[#33415c] transition-transform duration-300 group-hover:scale-105">
              <Target className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#33415c]/10 text-[#33415c] border border-[#33415c]/20">
                <Sparkles className="w-4 h-4 text-[#33415c]" />
                Funcionalidade & Contexto
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[20px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                Sintomas e Prejuízo Funcional Não São a Mesma Coisa
              </h3>
              <p className="text-[16px] font-semibold text-[#33415c] mt-0.5">
                O prejuízo funcional é o componente nuclear da relevância diagnóstica
              </p>
            </div>

            {/* Functional Domains Tags */}
            <div className="pt-0.5">
              <div className="flex flex-wrap items-center gap-1.5 my-1">
                {functionalDomains.map((dom) => (
                  <span
                    key={dom}
                    className="px-2.5 py-0.5 rounded-lg text-[10.5px] font-semibold bg-white border border-[#33415c]/20 text-[#33415c] shadow-2xs"
                  >
                    {dom}
                  </span>
                ))}
              </div>

              {/* Context Multi-informant mini row */}
              <div className="mt-2 p-2 rounded-xl bg-white/80 border border-black/[0.06] flex items-center justify-between px-3">
                <span className="text-[15px] font-bold text-[#0f1012]">
                  “Só acontece na escola” não torna o dado menos verdadeiro:
                </span>
                <div className="flex items-center gap-2">
                  {contexts.map((ctx) => (
                    <div key={ctx} className="flex items-center gap-1 text-[10px] text-[#5f6062]">
                      <span className="w-2 h-2 rounded-full bg-[#33415c]" />
                      <span>{ctx}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[16px] text-[#334155] leading-relaxed font-normal mt-1.5">
                A variabilidade entre situações pode ser informação clinicamente significativa — não erro entre avaliadores — e ajuda a localizar o mecanismo concreto do problema.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-500">
              <span>Fundamento:</span>
              <span className="text-[#0f1012] font-bold">Avaliação Situacional</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#33415c] text-white text-[10.5px] font-bold shadow-xs">
              <span>Prejuízo Funcional Real</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Perguntas Diagnósticas Clínicas (Dark Obsidian · Eixo 7 Navy)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-white/10",
          "bg-[#0f1012] text-white",
          "shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.28)]",
          "hover:border-[#33415c]/50 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#33415c]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-slate-300 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <HelpCircle className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-slate-500/15 text-slate-300 border border-slate-500/30">
                <CheckCircle2 className="w-4 h-4 text-slate-300" />
                Raciocínio Clínico em 5 Etapas
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[20px] font-bold tracking-tight text-white leading-tight font-['Urbanist',sans-serif]">
                O Significado Muda com a Idade: Checklist Diagnóstico
              </h3>
              <p className="text-[16px] font-semibold text-slate-300 mt-0.5">
                Dependência dos pais aos 3 anos ≠ dependência dos pais aos 16 anos
              </p>
            </div>

            {/* Checklist items */}
            <div className="pt-0.5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-1">
                ANTES DE PERGUNTAR QUAL É O DIAGNÓSTICO:
              </h4>
              <div className="grid grid-cols-1 gap-1 my-1">
                {clinicalQuestions.map((q, idx) => (
                  <div
                    key={q}
                    className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.04] border border-white/10"
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-500/30 text-slate-200 text-[9.5px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-[15px] font-medium text-zinc-200 leading-tight">
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-400">
              <span>Conduta:</span>
              <span className="text-white font-bold">Investigação Sistêmica</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-500/20 text-slate-200 border border-slate-500/30 text-[10.5px] font-bold shadow-xs">
              <span>Significado ≠ Sintoma</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
