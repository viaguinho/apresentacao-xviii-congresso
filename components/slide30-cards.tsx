"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Scale,
  Sparkles,
  ArrowRight,
  BookmarkCheck,
  Building2,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide30CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide30Cards({ isActive = true, className }: Slide30CardsProps) {
  const protectionFactors = [
    "orientação positiva de vida",
    "satisfação com o cuidado recebido",
    "satisfação no relacionamento",
    "apoio de amizades",
  ];

  const vulnerabilityFactors = [
    "problemas prévios de saúde mental",
    "eventos de vida estressantes",
    "outros fatores individuais e contextuais",
  ];

  const systematicReviewAreas = [
    "impacto emocional",
    "experiências sociais",
    "prestação do cuidado",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[640px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Bloco de Evidência Empírica Multicêntrica (Padrão Claro Eixo 5)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-[#8a2f3f]/15",
          "bg-gradient-to-br from-white via-[#fdfbfb] to-[#fbf2f4]",
          "shadow-[0_4px_24px_rgba(138,47,63,0.06)] hover:shadow-[0_12px_36px_rgba(138,47,63,0.12)]",
          "hover:border-[#8a2f3f]/30 transition-all duration-300 p-5 flex flex-col justify-between"
        )}
      >
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#8a2f3f]/10 to-[#e88d9d]/15 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section: Icon & Multicentric Badge */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#8a2f3f]/20 bg-white shadow-xs text-[#8a2f3f] transition-transform duration-300 group-hover:scale-105">
              <Building2 className="h-4.5 w-4.5" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#8a2f3f]/10 text-[#8a2f3f] border border-[#8a2f3f]/20">
                <BookmarkCheck className="w-3 h-3 text-[#8a2f3f]" />
                Evidência Empírica Multicêntrica
              </span>
            </div>
          </div>

          {/* Middle Section: Cohort Stats & Main Finding */}
          <div className="space-y-1.5">
            <div>
              <h3 className="text-[19px] font-bold tracking-tight text-[#1a1113] leading-tight font-['Urbanist',sans-serif]">
                n = 1.200 famílias · 6 centros de fissuras
              </h3>
              <p className="text-[11.5px] font-semibold text-[#8a2f3f] mt-0.5">
                Crerand et al. (2015) · Avaliação padronizada do clima relacional
              </p>
            </div>

            <p className="text-[12.5px] text-[#423639] leading-relaxed font-normal pt-1">
              Os escores médios de coesão familiar, expressividade e conflito ficaram dentro da faixa média das amostras normativas, com diferenças relacionadas a fatores sociodemográficos e ao tipo de recomendação cirúrgica.
            </p>
          </div>

          {/* Bottom Callout: Key Clinical Takeaway */}
          <div className="mt-3 pt-2.5 border-t border-[#8a2f3f]/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6b585c]">
              <span>Faixa Normativa:</span>
              <span className="text-[#1a1113] font-bold">Coesão & Expressividade</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8a2f3f] text-white text-[11px] font-bold shadow-xs hover:bg-[#6b212f] transition-colors">
              <Scale className="w-3.5 h-3.5" />
              <span>Necessidade de cuidado adicional ≠ família disfuncional</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Fatores Parentais e Síntese Sistemática (Obsidian Dark Eixo 5)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 rounded-3xl bg-[#0f0c0e] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.22)] border border-[#8a2f3f]/25 relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-[#8a2f3f]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e88d9d]">
              Coorte de Nascimento · 1.163 Pais
            </span>
            <span className="text-[10px] font-semibold text-zinc-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
              Stock et al. (2025)
            </span>
          </div>

          <h4 className="text-[17px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Adaptação Parental: Fatores de Ajuste & Risco
          </h4>
          <p className="text-[11.5px] font-normal text-zinc-400 mt-1 leading-relaxed">
            Em geral houve boa adaptação ao diagnóstico, com fatores de risco e proteção identificáveis. Não é um checklist diagnóstico:
          </p>
        </div>

        {/* 2-Column Direct Contrast Grid */}
        <div className="grid grid-cols-2 gap-3 my-3 relative z-10">
          {/* Col 1: Protetivos / Melhor Ajuste */}
          <div className="p-3 rounded-2xl bg-zinc-900/90 border border-emerald-500/20 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[10.5px] font-bold text-emerald-300 uppercase tracking-wide">
                Associados a melhor ajuste
              </span>
            </div>
            <ul className="space-y-1.5">
              {protectionFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-300 leading-snug">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Vulnerabilidade */}
          <div className="p-3 rounded-2xl bg-zinc-900/90 border border-amber-500/20 shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[10.5px] font-bold text-amber-300 uppercase tracking-wide">
                Fatores de vulnerabilidade
              </span>
            </div>
            <ul className="space-y-1.5">
              {vulnerabilityFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-300 leading-snug">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Systematic Review & Clinical Takeaway Footer */}
        <div className="relative z-10 pt-2.5 border-t border-zinc-800/80 flex flex-col gap-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-[10.5px] font-medium text-zinc-400">
              126 estudos · 2009–2024 · três áreas da experiência parental:
            </span>

            <div className="flex items-center gap-1.5 flex-wrap">
              {systematicReviewAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-[9.5px] font-semibold text-[#f5c2cb] bg-[#8a2f3f]/30 px-2 py-0.5 rounded-full border border-[#8a2f3f]/40"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#8a2f3f]/25 to-transparent border border-[#8a2f3f]/30 flex items-center justify-between">
            <p className="text-[12px] font-semibold text-zinc-100 leading-snug">
              Ao avaliar a criança, avaliar também o sistema que sustenta sua trajetória.
            </p>
            <Sparkles className="w-4 h-4 text-[#e88d9d] shrink-0 ml-2" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
