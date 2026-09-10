"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  CheckCircle2,
  Activity,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide21CardsProps {
  isActive?: boolean;
  className?: string;
}

interface QuestionStage {
  step: number;
  phase: string;
  quote: string;
  description: string;
  isHighlight?: boolean;
}

const STAGES: QuestionStage[] = [
  {
    step: 1,
    phase: "infância inicial",
    quote: "“Eu sou aquilo que faço e consigo observar”",
    description: "características concretas, habilidades visíveis",
  },
  {
    step: 2,
    phase: "infância escolar",
    quote: "“Como eu me comparo?”",
    description: "traços mais gerais, maior comparação social",
  },
  {
    step: 3,
    phase: "adolescência",
    quote: "“Quem sou eu em diferentes contextos?”",
    description: "conceitos abstratos, integração de traços, identidade",
    isHighlight: true,
  },
];

/* =========================================================================
   CARD ESQUERDA: Perguntas Desenvolvimentais (Vidro Fosco Claro Translúcido)
   ========================================================================= */
export default function Slide21Cards({
  isActive = true,
  className,
}: Slide21CardsProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center select-none font-['Satoshi',sans-serif] max-w-[560px] mx-auto my-auto",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-black/[0.09]",
          "bg-white/65 backdrop-blur-md text-[#0f1012]",
          "shadow-[0_4px_24px_rgba(51,65,92,0.06)] hover:shadow-[0_12px_36px_rgba(51,65,92,0.12)]",
          "hover:border-[#33415c]/35 transition-all duration-400 ease-out p-6 flex flex-col justify-between"
        )}
      >
        {/* Ambient Glow sutil translúcido */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#33415c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-3 mb-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#33415c]/20 bg-white/90 text-[#33415c] shadow-xs transition-transform duration-300 group-hover:scale-105">
              <HelpCircle className="h-5 w-5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#33415c]/10 text-[#33415c] border border-[#33415c]/20 font-['Urbanist',sans-serif]">
                <CheckCircle2 className="w-3 h-3 text-[#33415c]" />
                Evolução do Autoconceito
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h3 className="text-[21px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif]">
              A Pergunta Que o Jovem Faz Sobre Si
            </h3>
            <p className="text-[12.5px] font-semibold text-[#33415c] leading-snug">
              Da observação de comportamentos concretos à integração abstrata da identidade
            </p>
          </div>

          {/* 3 Numbered Stages */}
          <div className="space-y-2.5 pt-0.5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 font-['Urbanist',sans-serif]">
              ETAPAS DO DESENVOLVIMENTO DO AUTOCONCEITO:
            </h4>

            {STAGES.map((item) => (
              <div
                key={item.step}
                className={cn(
                  "flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 border",
                  item.isHighlight
                    ? "bg-white/85 border-[#33415c]/25 shadow-xs"
                    : "bg-white/50 border-black/[0.06] hover:border-[#33415c]/20 hover:bg-white/75"
                )}
              >
                {/* Step number badge */}
                <span
                  className={cn(
                    "w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5",
                    item.isHighlight
                      ? "bg-[#33415c] text-white"
                      : "bg-[#33415c]/15 text-[#33415c] border border-[#33415c]/20"
                  )}
                >
                  {item.step}
                </span>

                {/* Content */}
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider font-['Urbanist',sans-serif]",
                        item.isHighlight ? "text-[#33415c] font-extrabold" : "text-zinc-500"
                      )}
                    >
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-[13.5px] font-bold text-[#0f1012] leading-snug font-['Urbanist',sans-serif]">
                    {item.quote}
                  </p>
                  <p className="text-[11.5px] text-[#4a4b4e] font-normal leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-2 pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500">
              <span>Transição:</span>
              <span className="text-[#0f1012] font-bold">Identidade em Contexto</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#33415c]/10 text-[#33415c] border border-[#33415c]/20 text-[10.5px] font-bold shadow-xs">
              <span>3 Fases Desenvolvimentais</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   CARDS DIREITA: Regulação & Significado da Característica Física (Padrão Slide 11)
   ========================================================================= */
export function Slide21RightCards({
  isActive = true,
  className,
}: Slide21CardsProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-4 select-none font-['Satoshi',sans-serif] max-w-[560px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — Significado Emocional (Eixo 3)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#b5563a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Percepção &amp; Autoconceito
            </span>
            <span className="text-[10px] font-semibold text-[#f8d7ce] bg-[#b5563a]/25 px-2.5 py-0.5 rounded-full border border-[#b5563a]/35">
              Eixo 3 · Identidade
            </span>
          </div>
          <h4 className="text-[18px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Significado Emocional da Característica Física
          </h4>
          <p className="text-[12px] font-medium text-zinc-300 mt-1.5 leading-relaxed">
            A mesma condição adquire novo peso à medida que a autoimagem é reconfigurada:
          </p>
        </div>

        {/* Bloco de Citação / Destaque Principal */}
        <div className="p-3.5 bg-zinc-900/95 rounded-2xl border border-zinc-800/90 my-2.5 relative z-10">
          <p className="text-[13px] text-zinc-100 font-medium leading-relaxed m-0 font-['Urbanist',sans-serif]">
            “A mesma característica física pode adquirir significado emocional diferente quando muda a forma como o jovem se percebe e imagina ser percebido.”
          </p>
        </div>

        {/* Mini Blocos de Fatores */}
        <div className="grid grid-cols-2 gap-2 my-1 relative z-10">
          <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#cf6647] block">Autoavaliação</span>
            <p className="text-[11px] text-zinc-300 mt-0.5 leading-tight">Maior sensibilidade à mirada e julgamento de pares.</p>
          </div>
          <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#cf6647] block">Subjetivação</span>
            <p className="text-[11px] text-zinc-300 mt-0.5 leading-tight">Da forma anatômica ao valor identitário construído.</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-xs font-semibold text-zinc-400">Fundamento clínico:</span>
          <span className="text-xs font-bold text-[#f8d7ce] bg-[#b5563a]/20 px-2.5 py-0.5 rounded-full border border-[#b5563a]/30">
            Avaliação Social Subjetiva
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — Regulação em Desenvolvimento (Eixo 3)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8c3e27] bg-[#b5563a]/[0.10] px-2.5 py-0.5 rounded-full border border-[#b5563a]/25 font-['Urbanist',sans-serif]">
              Processo Dinâmico
            </span>
            <span className="text-[11px] font-semibold text-[#5f6062]">
              Capacidade × Demanda
            </span>
          </div>
          <h4 className="text-[17px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            A Regulação Continua em Desenvolvimento
          </h4>
          <p className="text-[11px] text-[#5f6062] mt-0.5">
            A capacidade regulatória aumenta — mas as demandas emocionais e sociais também:
          </p>
        </div>

        {/* 2 Subcards Compactos de Dimensões */}
        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1012]">
              <TrendingUp className="w-3.5 h-3.5 text-[#b5563a]" />
              <span>Capacidade</span>
            </div>
            <p className="text-[11px] text-[#5f6062] mt-1 leading-snug">
              Melhora nas estratégias cognitivas de reavaliação e modulação.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-[#f8f9fa] border border-black/[0.04]">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1012]">
              <Activity className="w-3.5 h-3.5 text-amber-700" />
              <span>Demandas</span>
            </div>
            <p className="text-[11px] text-[#5f6062] mt-1 leading-snug">
              Ambiência escolar, pertença grupal e novas cobranças relacionais.
            </p>
          </div>
        </div>

        <p className="text-[11.5px] text-[#334155] leading-relaxed m-0 font-normal">
          Período dinâmico, com melhora importante para muitos jovens e <strong className="text-[#0f1012] font-semibold">grande variabilidade interindividual</strong> na trajetória.
        </p>

        <p className="text-[11px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Princípio: Não há linearidade rígida</span>
          <span className="font-semibold text-[#8c3e27]">Variabilidade Interindividual</span>
        </p>
      </motion.div>
    </div>
  );
}
