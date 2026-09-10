"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Network,
  HeartHandshake,
  Users,
  Compass,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CornerPlusIcons } from "@/components/ui/ruixen-bento-cards";

interface Slide40CardsProps {
  isActive?: boolean;
  className?: string;
}

interface TakeHomeMessageItem {
  number: number;
  eixoBadge: string;
  title: string;
  description: string;
  footerTag: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TAKE_HOME_TOPICS: TakeHomeMessageItem[] = [
  {
    number: 1,
    eixoBadge: "EIXO 1 · TRAJETÓRIA",
    title: "1 · Desenvolvimento é trajetória",
    description:
      "Processo multidimensional, dinâmico, não necessariamente linear e heterogêneo. Importa onde a criança está — mas também de onde veio, para onde vai e em que velocidade muda.",
    footerTag: "Direção & Velocidade",
    icon: TrendingUp,
  },
  {
    number: 2,
    eixoBadge: "EIXO 2 · COGNIÇÃO",
    title: "2 · Cognição: especialização e integração",
    description:
      "Cognição não é sinônimo de QI. Uma dificuldade deve ser compreendida pelo perfil funcional da criança, não por um único escore global.",
    footerTag: "Perfil Funcional",
    icon: Network,
  },
  {
    number: 3,
    eixoBadge: "EIXO 3 · REGULAÇÃO",
    title: "3 · Regulação se constrói nas relações",
    description:
      "Autorregulação começa como co-regulação: perceber → compreender → expressar → regular. Na adolescência, emoções articulam-se com autoconceito, identidade e aparência.",
    footerTag: "Co-regulação Relacional",
    icon: HeartHandshake,
  },
  {
    number: 4,
    eixoBadge: "EIXO 4 · SOCIAL",
    title: "4 · Social é participar e pertencer",
    description:
      "De cuidadores a pares, amizade, pertencimento e identidade social. A tarefa social muda com a idade — portanto, o que deve ser avaliado também muda.",
    footerTag: "Pertencimento & Parceria",
    icon: Users,
  },
  {
    number: 5,
    eixoBadge: "EIXO 5 · CRANIOFACIAL",
    title: "5 · A condição não determina a trajetória",
    description:
      "Mesmo diagnóstico ≠ mesma experiência. O impacto depende de morfologia, função, fala e audição, condições associadas, tratamento, família, escola, pares e contexto.",
    footerTag: "Heterogeneidade & Contexto",
    icon: Compass,
  },
  {
    number: 6,
    eixoBadge: "EIXO 6 · PROTOCOLO",
    title: "6 · O protocolo precisa ser desenvolvimental",
    description:
      "Domínios permanecem, prioridades mudam. Rastreamento universal + aprofundamento conforme risco + instrumentos específicos + entrevista + múltiplos informantes.",
    footerTag: "Stepped Care & Informantes",
    icon: ClipboardCheck,
  },
];

export default function Slide40Cards({
  isActive = true,
  className,
}: Slide40CardsProps) {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5",
        className
      )}
    >
      {TAKE_HOME_TOPICS.map((topic, index) => {
        const IconComponent = topic.icon;
        return (
          <motion.div
            key={topic.number}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
            transition={{
              duration: 0.38,
              delay: 0.05 + index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "group relative border border-dashed border-zinc-300/90 hover:border-[#0071e3]/60",
              "rounded-xl p-5 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.02)]",
              "hover:shadow-[0_8px_24px_rgba(0,113,227,0.08)] hover:bg-[#fbfdff]",
              "transition-all duration-300 flex flex-col justify-between min-h-[190px] select-none hover:-translate-y-0.5"
            )}
          >
            {/* 4 Corner Plus Cross Icons (Ruixen Bento signature) */}
            <CornerPlusIcons className="text-zinc-400 group-hover:text-[#0071e3] transition-colors duration-300" />

            {/* Top Row: Icon + Axis Badge */}
            <div className="relative z-10 flex items-center justify-between gap-3 mb-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f2fc] text-[#0071e3] border border-[#0071e3]/20 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <IconComponent className="h-4.5 w-4.5" />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-zinc-100/90 text-zinc-600 border border-zinc-200/80 group-hover:border-[#0071e3]/25 group-hover:bg-[#e8f2fc]/50 group-hover:text-[#0071e3] transition-colors font-['Urbanist',sans-serif]">
                {topic.eixoBadge}
              </span>
            </div>

            {/* Content: Title and verbatim description */}
            <div className="relative z-10 space-y-1.5 flex-1 flex flex-col justify-start">
              <h3 className="font-['Urbanist',sans-serif] text-[18px] font-bold tracking-tight text-[#0f1012] leading-snug group-hover:text-[#0071e3] transition-colors duration-200">
                {topic.title}
              </h3>
              <p className="font-['Satoshi',sans-serif] text-[14px] leading-[1.44] text-[#3f4042]">
                {topic.description}
              </p>
            </div>

            {/* Bottom Subtle Indicator Tag */}
            <div className="relative z-10 mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 group-hover:text-[#0071e3]/80 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]/60" />
                {topic.footerTag}
              </span>
              <span className="text-[10.5px] font-bold font-['Urbanist',sans-serif] text-zinc-400 group-hover:text-[#0071e3] transition-colors">
                0{topic.number} / 06
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
