"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide27CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide27Cards({ isActive = true, className }: Slide27CardsProps) {
  const diagnosticGroups = [
    "Fissura Labiopalatina",
    "Fissura Labial",
    "Fissura Palatina",
    "Craniossinostose",
    "Microssomia Hemifacial",
    "Hemangioma",
  ];

  const clinicalDomains = [
    { name: "Aparência", desc: "Visibilidade, simetria e percepção do 'eu'" },
    { name: "Função", desc: "Fala, audição, respiração e alimentação" },
    { name: "Psicossocial", desc: "Autoestima, pares e ajuste ao contexto escolar" },
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[800px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Evidência Empírica dos 6 Grupos (Light Glass · Eixo 5 Bordô)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.08]",
          "bg-gradient-to-br from-white via-[#fcfdff] to-[#f7ecee]/70",
          "shadow-[0_4px_24px_rgba(138,47,63,0.06)] hover:shadow-[0_12px_36px_rgba(138,47,63,0.12)]",
          "hover:border-[#8a2f3f]/30 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Decorative Gradient Mesh Accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#8a2f3f]/15 to-[#6b212f]/10 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#8a2f3f]/20 bg-white/90 shadow-xs text-[#8a2f3f] transition-transform duration-300 group-hover:scale-105">
              <Layers className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-[#8a2f3f]/10 text-[#8a2f3f] border border-[#8a2f3f]/20">
                <Sparkles className="w-4 h-4 text-[#8a2f3f]" />
                408 Pacientes · 2–18 anos · 6 Grupos
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
                Heterogeneidade Psicossocial nos Diagnósticos
              </h3>
              <p className="text-[16px] font-semibold text-[#8a2f3f] mt-0.5">
                Mesmo diagnóstico ≠ mesma experiência · Mesma anatomia ≠ mesma trajetória
              </p>
            </div>

            {/* Diagnostic Group Chips */}
            <div className="pt-0.5">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-1">
                GRUPOS ANATÔMICOS COMPARADOS:
              </h4>
              <div className="flex flex-wrap items-center gap-1 my-1">
                {diagnosticGroups.map((grp) => (
                  <span
                    key={grp}
                    className="px-2 py-0.5 rounded-lg text-[14px] font-semibold bg-white border border-black/[0.07] text-[#3f4042] shadow-2xs"
                  >
                    {grp}
                  </span>
                ))}
              </div>

              <p className="text-[16px] text-[#334155] leading-snug font-normal mt-1.5">
                Os padrões de dificuldades psicossociais foram diferentes entre os 6 grupos: <strong className="text-[#0f1012] font-semibold">“anomalia craniofacial” não constitui um único fenótipo psicossocial</strong> previsível pela simples classificação cirúrgica.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-500">
              <span>Evidência:</span>
              <span className="text-[#0f1012] font-bold">Fenótipo Heterogêneo</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#8a2f3f] text-white text-[16px] font-bold shadow-xs">
              <span>Anatomia ≠ Destino</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Organizar por Domínios (Dark Obsidian · Eixo 5 Bordô)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-white/10",
          "bg-[#0f1012] text-white",
          "shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.28)]",
          "hover:border-[#8a2f3f]/40 transition-all duration-400 ease-out p-5 flex flex-col justify-between"
        )}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8a2f3f]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-rose-300 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-300 border border-rose-500/25">
                <CheckCircle2 className="w-4 h-4 text-rose-400" />
                Matriz Clínica Multidimensional
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-white leading-tight font-['Urbanist',sans-serif]">
                Organizar por Domínios, Não Apenas por Diagnóstico
              </h3>
              <p className="text-[16px] font-semibold text-rose-300 mt-0.5">
                Quais dimensões da condição estão entrando na trajetória desta criança?
              </p>
            </div>

            {/* Core Domain Chips Grid */}
            <div className="grid grid-cols-3 gap-2 my-1.5">
              {clinicalDomains.map((dom) => (
                <div
                  key={dom.name}
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-left"
                >
                  <span className="text-[14px] font-bold uppercase tracking-wider text-rose-300 block mb-0.5">
                    {dom.name}
                  </span>
                  <span className="text-[16px] text-zinc-300 leading-snug block">
                    {dom.desc}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-zinc-300 leading-snug font-normal mt-1.5">
              A pergunta clínica relevante não é apenas qual é o rótulo da anomalia, mas <strong className="text-white font-semibold">quais dimensões dessa condição interferem concretamente no desenvolvimento e na funcionalidade</strong> nesta etapa específica.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-zinc-400">
              <span>Diretriz:</span>
              <span className="text-white font-bold">Foco na Funcionalidade</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 border border-rose-500/30 text-[16px] font-bold shadow-xs">
              <span>Avaliação por Domínios</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
