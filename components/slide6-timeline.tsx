"use client";

import React from "react";
import { Timeline, TimelineEntry } from "./ui/timeline";

interface Slide6TimelineProps {
  isActive?: boolean;
}

export const Slide6MethodTimeline: React.FC<Slide6TimelineProps> = ({ isActive = true }) => {
  const stepsData: TimelineEntry[] = [
    {
      step: 1,
      category: "Etapa 1 · Coorte Longitudinal",
      badge: "L-CID Study",
      title: "Acompanhar as mesmas crianças ao longo do tempo",
      description: ">500 crianças do estudo L-CID · faixa etária ~7–14 anos · três ondas de avaliação com protocolo idêntico:",
      detail: (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#0071e3] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></span>
            Onda 1: ~8 anos
          </span>
          <span className="text-[#868788] text-sm font-bold">→</span>
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#0071e3] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></span>
            Onda 2: ~10 anos
          </span>
          <span className="text-[#868788] text-sm font-bold">→</span>
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#0071e3] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></span>
            Onda 3: ~12 anos
          </span>
        </div>
      ),
    },
    {
      step: 2,
      category: "Etapa 2 · Paradigma Experimental",
      badge: "SNAT + fMRI",
      title: "Provocar e medir resposta à rejeição social",
      description: "Social Network Aggression Task (SNAT) — feedback de pares (positivo, neutro ou negativo) com mensuração dupla:",
      detail: (
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center gap-2 text-[15px] text-[#3f4042]">
            <span className="font-semibold text-[#e11d48] bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-sm">
              Comportamental
            </span>
            <span>Duração do som aversivo (*noise blast*) contra o avaliador</span>
          </div>
          <div className="flex items-center gap-2 text-[15px] text-[#3f4042]">
            <span className="font-semibold text-[#0071e3] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-sm">
              Neural (fMRI)
            </span>
            <span>Ativação em Ínsula Anterior (AI), MPFC e DLPFC (negativo vs. neutro)</span>
          </div>
        </div>
      ),
    },
    {
      step: 3,
      category: "Etapa 3 · Modelagem Estatística",
      badge: "Bayesian MLM",
      title: "Transformar medidas em trajetórias de desenvolvimento",
      description: "Modelo bayesiano multinível de curvas de crescimento separando componentes populacionais de individuais:",
      detail: (
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="bg-slate-50/90 rounded-lg p-2 border border-slate-200/60">
            <div className="text-[15px] uppercase tracking-wider font-bold text-[#0071e3]">Efeitos Fixos</div>
            <div className="text-[15px] font-medium text-[#0f1012] leading-tight mt-0.5">Trajetória média da população</div>
          </div>
          <div className="bg-slate-50/90 rounded-lg p-2 border border-slate-200/60">
            <div className="text-[15px] uppercase tracking-wider font-bold text-[#0071e3]">Efeitos Aleatórios</div>
            <div className="text-[15px] font-medium text-[#0f1012] leading-tight mt-0.5">Variação individual na inclinação</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Timeline data={stepsData} isSlideActive={isActive} />
    </div>
  );
};

export default Slide6MethodTimeline;
