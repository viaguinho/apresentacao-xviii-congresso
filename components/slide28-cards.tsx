"use client";

import { motion } from "framer-motion";
import {
  Volume2,
  GraduationCap,
  Scale,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide28CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide28Cards({
  isActive = true,
  className,
}: Slide28CardsProps) {
  const schoolFactors = [
    "Audição",
    "Linguagem",
    "Condições Associadas",
    "Escolarização",
    "Contexto Socioeconômico",
  ];

  return (
    <div className={cn("w-full flex justify-center select-none font-['Satoshi',sans-serif]", className)}>
      <div className="w-full flex flex-row items-stretch gap-4">
        {/* =========================================================================
            DOCK ESQUERDA: 3 CARTAS CLÍNICAS (Obsidian Apple Dark - ~66% da largura)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex-[2] min-w-0 rounded-2xl bg-[#0f1012]/95 backdrop-blur-md border border-white/[0.1] shadow-[0_10px_36px_rgba(0,0,0,0.25)] flex flex-row items-stretch divide-x divide-white/[0.08] relative overflow-hidden group"
        >
          {/* Glow de fundo bordô */}
          <div className="absolute top-0 right-1/4 w-80 h-32 bg-[#8a2f3f]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8a2f3f]/25 transition-all duration-500" />

          {/* -----------------------------------------------------------------------
              SEÇÃO 1: Audição, Fala e Linguagem
              ----------------------------------------------------------------------- */}
          <div className="flex-1 min-w-0 px-4 py-3 flex flex-col justify-between relative z-10">
            <div>
              {/* Header com Tag Apple e Categoria */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-[#8a2f3f]/20 border border-[#8a2f3f]/40 flex items-center justify-center text-[#e8909c]">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-400 font-['Urbanist',sans-serif]">
                    Audição & Fala
                  </span>
                </div>
                <span className="text-[14px] font-semibold text-[#e8909c] bg-[#8a2f3f]/20 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/30 shrink-0">
                  Amostra 5–13a
                </span>
              </div>

              {/* Título Principal */}
              <h4 className="text-[19px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
                Audição, Fala e Linguagem
              </h4>

              {/* Métrica em Linha com Respiração */}
              <div className="mt-2.5 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3">
                <div className="flex flex-col shrink-0">
                  <span className="text-[22px] font-extrabold tracking-tight text-[#f09ca8] font-['Urbanist',sans-serif] leading-none">
                    27,6%
                  </span>
                  <span className="text-[14px] uppercase font-bold text-zinc-500 tracking-wider mt-0.5">
                    das orelhas
                  </span>
                </div>
                <div className="h-7 w-[1px] bg-zinc-800 shrink-0" />
                <p className="text-[15px] text-zinc-300 leading-snug font-medium">
                  apresentavam <strong className="text-white font-semibold">perda auditiva</strong> (predominantemente condutiva).
                </p>
              </div>
            </div>

            {/* Rodapé da Seção */}
            <div className="pt-2 mt-2 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-1.5 text-[16px]">
              <span className="font-medium text-zinc-400">
                Ressalva clínica:
              </span>
              <span className="font-bold text-[#e8909c] bg-[#8a2f3f]/15 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/30 text-[14px]">
                Amostra ≠ Universal
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              SEÇÃO 2: Escola & Dificuldade Escolar
              ----------------------------------------------------------------------- */}
          <div className="flex-1 min-w-0 px-4 py-3 flex flex-col justify-between relative z-10">
            <div>
              {/* Header com Tag Apple e Categoria */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-[#8a2f3f]/20 border border-[#8a2f3f]/40 flex items-center justify-center text-[#e8909c]">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-400 font-['Urbanist',sans-serif]">
                    Ambiente Escolar
                  </span>
                </div>
                <span className="text-[14px] font-semibold text-[#e8909c] bg-[#8a2f3f]/20 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/30 shrink-0">
                  Alerta
                </span>
              </div>

              {/* Título Principal */}
              <h4 className="text-[19px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
                Dificuldade Escolar
              </h4>

              <p className="text-[15px] font-medium text-zinc-300 mt-1.5 leading-snug">
                Não atribuir automaticamente à aparência; investigar:
              </p>

              {/* Chips de Fatores */}
              <div className="flex flex-wrap gap-1 mt-2">
                {schoolFactors.map((factor) => (
                  <span
                    key={factor}
                    className="px-2 py-0.5 rounded-lg bg-zinc-900/90 border border-zinc-800/90 text-[14px] font-medium text-zinc-200 hover:border-[#8a2f3f]/50 hover:bg-[#8a2f3f]/10 transition-colors"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>

            {/* Rodapé da Seção */}
            <div className="pt-2 mt-2 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-1.5 text-[16px]">
              <span className="font-medium text-zinc-400">
                Diretriz:
              </span>
              <span className="font-bold text-[#e8909c] bg-[#8a2f3f]/15 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/30 text-[14px]">
                Investigação Multifatorial
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              SEÇÃO 3: O Tratamento Tem Carga
              ----------------------------------------------------------------------- */}
          <div className="flex-1 min-w-0 px-4 py-3 flex flex-col justify-between relative z-10">
            <div>
              {/* Header com Tag Apple e Categoria */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-[#8a2f3f]/20 border border-[#8a2f3f]/40 flex items-center justify-center text-[#e8909c]">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-400 font-['Urbanist',sans-serif]">
                    Processo Cirúrgico
                  </span>
                </div>
                <span className="text-[14px] font-semibold text-[#e8909c] bg-[#8a2f3f]/20 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/30 shrink-0">
                  Coexistência
                </span>
              </div>

              {/* Título Principal */}
              <h4 className="text-[19px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
                O Tratamento Tem Carga
              </h4>

              {/* Contraste Carga vs Ganhos */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between">
                  <span className="text-[14px] font-bold uppercase tracking-wider text-rose-400">
                    Sobrecarga
                  </span>
                  <p className="text-[16px] text-zinc-300 font-medium leading-tight mt-1">
                    Incertezas, restrições e recuperação
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-[#8a2f3f]/10 border border-[#8a2f3f]/30 flex flex-col justify-between">
                  <span className="text-[14px] font-bold uppercase tracking-wider text-[#e8909c]">
                    Ganhos
                  </span>
                  <p className="text-[16px] text-zinc-200 font-medium leading-tight mt-1">
                    Benefícios funcionais e expectativas
                  </p>
                </div>
              </div>
            </div>

            {/* Rodapé da Seção */}
            <div className="pt-2 mt-2 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-1.5 text-[16px]">
              <span className="font-medium text-zinc-400">
                Estudos:
              </span>
              <span className="font-bold text-[#e8909c] bg-[#8a2f3f]/15 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/30 text-[14px]">
                Associação ≠ Causalidade
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD DIREITA: CARD DE FECHAMENTO COMPLETO (~34% da largura)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-w-0 rounded-2xl bg-[#0f1012]/95 backdrop-blur-md border border-[#8a2f3f]/35 shadow-[0_10px_36px_rgba(138,47,63,0.18)] px-4 py-3 flex flex-col justify-between relative overflow-hidden group hover:border-[#8a2f3f]/60 transition-all duration-300"
        >
          {/* Glow de destaque bordô no canto */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#8a2f3f]/25 rounded-full blur-2xl pointer-events-none group-hover:bg-[#8a2f3f]/40 transition-all duration-500" />

          <div className="relative z-10">
            {/* Header com Ícone e Tag de Timing/Síntese */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-lg bg-[#8a2f3f]/25 border border-[#8a2f3f]/40 flex items-center justify-center text-[#e8909c]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-zinc-400 font-['Urbanist',sans-serif]">
                  Síntese & Fechamento
                </span>
              </div>
              <span className="text-[14px] font-bold text-[#e8909c] bg-[#8a2f3f]/20 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/35 uppercase tracking-wider shrink-0">
                O Timing Importa
              </span>
            </div>

            {/* 1. Frase Principal de Timing */}
            <p className="text-[16px] text-white font-medium leading-snug mt-2">
              A mesma experiência médica pode ter <strong className="text-[#f09ca8] font-semibold">significados diferentes</strong> aos 3, aos 8 ou aos 15 anos.
            </p>

            {/* 2. Frase de Fechamento Complementar */}
            <div className="mt-3 pt-2.5 border-t border-white/[0.08]">
              <p className="text-[16px] text-zinc-200 leading-snug italic font-['Satoshi',sans-serif]">
                “Em uma condição tratada longitudinalmente, a <strong className="text-white font-semibold not-italic">história médica</strong> também se torna parte da <strong className="text-[#f09ca8] font-semibold not-italic">história do desenvolvimento</strong>.”
              </p>
            </div>
          </div>

          {/* Rodapé do Card de Fechamento */}
          <div className="pt-2 mt-2 border-t border-[#8a2f3f]/25 flex items-center justify-between text-[16px] relative z-10">
            <span className="font-medium text-zinc-400">
              Princípio Integrador
            </span>
            <span className="font-bold text-[#e8909c] tracking-wide">
              Eixo 5 · Craniofacial
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
