"use client";

import { motion } from "framer-motion";
import { RoadmapCard, RoadmapItem } from "@/components/ui/roadmap-card";
import { Users2, ArrowRight } from "lucide-react";

interface Slide23TimelineProps {
  isActive?: boolean;
}

const SOCIAL_LAB_SKILLS = ["entrar", "compartilhar", "negociar", "cooperar", "reparar"];

export function Slide23Timeline({ isActive = true }: Slide23TimelineProps) {
  const items: RoadmapItem[] = [
    {
      quarter: "Bebê",
      title: "Criança ↔ Cuidador",
      description: "Segurança relacional · atenção compartilhada · reciprocidade inicial · turnos de interação · leitura das respostas do outro.",
      status: "done",
    },
    {
      quarter: "1–2 Anos",
      title: "O Parceiro Social se Diversifica",
      description: "Observar pares em volta · aproximar-se fisicamente · imitar comportamentos · iniciar interação lúdica · responder às iniciativas.",
      status: "in-progress",
    },
    {
      quarter: "3–5 Anos",
      title: "Os Pares como Laboratório Social",
      description: "A arena de testes interpessoais onde as habilidades sociocomunicativas são construídas na prática:",
      status: "in-progress",
      detail: (
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2 max-w-[340px]">
          {SOCIAL_LAB_SKILLS.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.5 + idx * 0.08 }}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold bg-[#f1ecf5] text-[#6b4e83] border border-[#6b4e83]/20 shadow-xs"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full select-none">
      <RoadmapCard
        title="Expansão do Mundo Social: Da Matriz Diádica ao Universo dos Pares"
        description="As primeiras relações oferecem a base de segurança; progressivamente, outras crianças constituem o novo ambiente de aprendizagem social."
        items={items}
        colorTheme="amethyst"
        isActive={isActive}
        className="border-[#6b4e83]/20 bg-gradient-to-br from-white/95 via-[#f1ecf5]/30 to-white/90 shadow-[0_12px_36px_rgba(107,78,131,0.06)]"
      >
        <div className="flex items-center justify-between px-2 pt-1 text-[15px] text-[#5f6062] font-['Satoshi',sans-serif]">
          <div className="flex items-center gap-2">
            <Users2 className="w-5 h-5 text-[#6b4e83]" />
            <span className="font-medium text-[#0f1012]">
              Trajetória relacional:
            </span>
            <span>Vínculo primário de apego</span>
            <ArrowRight className="w-4 h-4 text-[#6b4e83]" />
            <span>Socialização horizontal com pares de mesma idade</span>
          </div>
          <span className="text-[16px] font-['Urbanist',sans-serif] font-bold text-[#6b4e83] uppercase tracking-wider bg-[#f1ecf5] px-2.5 py-0.5 rounded-md border border-[#6b4e83]/20">
            Módulo 04 · Eixo 4
          </span>
        </div>
      </RoadmapCard>
    </div>
  );
}

export default Slide23Timeline;
