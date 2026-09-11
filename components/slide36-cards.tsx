"use client";

import { motion } from "framer-motion";
import { TrendingUp, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide36CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide36Cards({ isActive = true, className }: Slide36CardsProps) {
  const trajectoryParams = [
    "direção",
    "velocidade",
    "estabilidade",
    "aceleração",
    "platô",
    "regressão",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[800px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Transversal vs Longitudinal (Light Glass · Eixo 7 Navy)
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
              <TrendingUp className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-[#33415c]/10 text-[#33415c] border border-[#33415c]/20">
                <Sparkles className="w-4 h-4 text-[#33415c]" />
                Vigilância Contínua ≠ Rastreio Pontual
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                Transversal ("Como Está?") × Longitudinal ("Como Muda?")
              </h3>
              <p className="text-[16px] font-semibold text-[#33415c] mt-0.5">
                Uma medida pontual informa apenas posição estática — não a direção evolutiva
              </p>
            </div>

            {/* Trajectory Dynamic Parameters */}
            <div className="pt-0.5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-1">
                PARÂMETROS DA VIGILÂNCIA LONGITUDINAL:
              </h4>
              <div className="flex flex-wrap items-center gap-1 my-1">
                {trajectoryParams.map((param) => (
                  <span
                    key={param}
                    className="px-2 py-0.5 rounded-lg text-[14px] font-semibold bg-white border border-black/[0.07] text-[#1e293b] shadow-2xs"
                  >
                    {param}
                  </span>
                ))}
              </div>

              <p className="text-[16px] text-[#334155] leading-snug font-normal mt-1.5">
                A vigilância do desenvolvimento é um processo contínuo e repetido (história, preocupações, observação e seguimento). Marcos auxiliam a vigilância, mas <strong className="text-[#0f1012] font-semibold">não substituem instrumentos padronizados</strong> quando há preocupação clínica.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-500">
              <span>Princípio:</span>
              <span className="text-[#0f1012] font-bold">Variável de Mudança</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#33415c] text-white text-[16px] font-bold shadow-xs">
              <span>Direção &gt; Posição</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Caso das Duas Trajetórias (Dark Obsidian · Eixo 7 Navy)
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
              <Compass className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-slate-500/15 text-slate-300 border border-slate-500/30">
                <CheckCircle2 className="w-4 h-4 text-slate-300" />
                Exemplo Clínico Ilustrativo
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-white leading-tight font-['Urbanist',sans-serif]">
                Mesma Fotografia Clínica — Histórias Opostas
              </h3>
              <p className="text-[16px] font-semibold text-slate-300 mt-0.5">
                Duas crianças com idêntico escore de satisfação com aparência hoje
              </p>
            </div>

            {/* Trajectory Comparison Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-1.5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-left">
                <span className="text-[14px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                  Trajetória Ascendente
                </span>
                <span className="text-[15px] font-bold text-emerald-200 leading-tight block">
                  Estável e adaptada há vários anos consecutivos
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-left">
                <span className="text-[14px] font-bold uppercase tracking-wider text-rose-400 block mb-0.5">
                  Trajetória Descendente
                </span>
                <span className="text-[15px] font-bold text-rose-200 leading-tight block">
                  Queda progressiva na transição para a adolescência
                </span>
              </div>
            </div>

            <p className="text-[16px] text-zinc-300 leading-snug font-normal mt-1.5">
              <strong className="text-white font-semibold">O escore atual é realmente a informação mais importante?</strong> Avaliar apenas o estado estático hoje esconde a direção da trajetória e pode atrasar intervenções preventivas oportunas.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-400">
              <span>Alerta:</span>
              <span className="text-white font-bold">O Filme Supera a Foto</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-500/20 text-slate-200 border border-slate-500/30 text-[16px] font-bold shadow-xs">
              <span>Para Onde a Curva Aponta?</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
