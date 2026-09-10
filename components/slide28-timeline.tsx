"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Activity, HeartPulse } from "lucide-react";

interface Slide28TimelineProps {
  isActive?: boolean;
}

interface DualTrackMilestone {
  stage: string;
  ageRef: string;
  development: {
    title: string;
    desc: string;
  };
  assistential: {
    title: string;
    desc: string;
  };
}

const DUAL_TRACK_DATA: DualTrackMilestone[] = [
  {
    stage: "Fase 1",
    ageRef: "Primeiro ano",
    development: {
      title: "Comunicação",
      desc: "Balbucio, intenção comunicativa inicial e vínculo relacional.",
    },
    assistential: {
      title: "Cirurgias Primárias",
      desc: "Queiloplastia e palatoplastia primária (fechamento anatômico).",
    },
  },
  {
    stage: "Fase 2",
    ageRef: "Primeira infância",
    development: {
      title: "Autonomia",
      desc: "Locomoção, exploração motora e individuação progressiva.",
    },
    assistential: {
      title: "Audiologia & ORL",
      desc: "Rastreio auditivo contínuo e manejo otológico (otite secretora).",
    },
  },
  {
    stage: "Fase 3",
    ageRef: "Idade escolar",
    development: {
      title: "Aprendizagem",
      desc: "Alfabetização, socialização escolar e competência acadêmica.",
    },
    assistential: {
      title: "Fonoaudiologia",
      desc: "Terapia de fala, velofaringe e inteligibilidade fonatória.",
    },
  },
  {
    stage: "Fase 4",
    ageRef: "Transição escolar",
    development: {
      title: "Pertencimento",
      desc: "Relação com grupos de pares, amizade íntima e inserção social.",
    },
    assistential: {
      title: "Odonto & Ortodontia",
      desc: "Ortopedia maxilar, expansão do arco e enxerto ósseo alveolar.",
    },
  },
  {
    stage: "Fase 5",
    ageRef: "Adolescência",
    development: {
      title: "Identidade",
      desc: "Autoconceito, autonomia decisória e integração do 'eu'.",
    },
    assistential: {
      title: "Cirurgias Secundárias",
      desc: "Rinoplastia, cirurgia ortognática e refinamentos finais.",
    },
  },
];

export function Slide28Timeline({ isActive = true }: Slide28TimelineProps) {
  return (
    <div className="w-full select-none">
      <Card className="w-full bg-white/95 backdrop-blur-md border border-[#8a2f3f]/20 shadow-[0_12px_36px_rgba(138,47,63,0.06)] overflow-hidden">
        <CardHeader className="pb-3 pt-5 px-8">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-['Urbanist',sans-serif] text-[21px] font-bold text-[#0f1012] tracking-tight">
                Trajetória Terapêutica Dupla: Desenvolvimento Humano × Processo de Cuidado
              </CardTitle>
              <CardDescription className="font-['Satoshi',sans-serif] text-[13px] text-[#5f6062] mt-1">
                A criança não apenas cresce com uma condição craniofacial — ela cresce atravessando uma sequência clínica assistencial interdependente.
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 bg-[#f7ecee] px-3.5 py-1.5 rounded-full border border-[#8a2f3f]/20 shrink-0">
              <Clock className="w-4 h-4 text-[#8a2f3f]" />
              <span className="font-['Urbanist',sans-serif] text-[12px] font-bold tracking-wider uppercase text-[#8a2f3f]">
                O TIMING IMPORTA
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-5 pt-3">
          <div className="relative flex flex-col gap-6">
            {/* TRILHO 1: DESENVOLVIMENTO (Superior) */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#0f1012]" />
                <span className="font-['Urbanist',sans-serif] text-[12.5px] font-bold tracking-[0.1em] uppercase text-[#0f1012]">
                  Trajetória do Desenvolvimento Psicomotor & Social
                </span>
              </div>

              <div className="relative w-full">
                {/* Linha Superior */}
                <div className="absolute left-6 right-6 top-3.5 h-[2px] bg-black/[0.12] rounded-full z-0" />
                <motion.div
                  className="absolute left-6 top-3.5 h-[2px] bg-[#0f1012] rounded-full z-0 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="grid grid-cols-5 gap-3 relative z-10">
                  {DUAL_TRACK_DATA.map((item, index) => (
                    <motion.div
                      key={`dev-${index}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, delay: 0.15 + index * 0.1 }}
                      className="pt-7 flex flex-col items-center text-center"
                    >
                      {/* Dot Superior */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0f1012] flex items-center justify-center shadow-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0f1012]" />
                      </div>

                      <span className="text-[10.5px] font-['Urbanist',sans-serif] font-bold text-[#71717a] uppercase tracking-wider">
                        {item.ageRef}
                      </span>
                      <h4 className="font-['Urbanist',sans-serif] text-[15px] font-bold text-[#0f1012] leading-tight mt-0.5">
                        {item.development.title}
                      </h4>
                      <p className="font-['Satoshi',sans-serif] text-[11.5px] text-[#52525b] mt-1 leading-snug line-clamp-2 px-1">
                        {item.development.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ZONA CENTRAL DE CONEXÃO & TIMING */}
            <div className="relative py-1.5 flex items-center justify-center">
              <div className="w-full h-px border-b border-dashed border-[#8a2f3f]/30" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bg-white px-4 py-1.5 rounded-full border border-[#8a2f3f]/30 shadow-xs flex items-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-[#8a2f3f]" />
                <span className="font-['Urbanist',sans-serif] text-[11.5px] font-bold text-[#8a2f3f] tracking-wide">
                  Sincronia Clínica: Intervenções no Momento Desenvolvimental Adequado
                </span>
              </motion.div>
            </div>

            {/* TRILHO 2: TRAJETÓRIA ASSISTENCIAL (Inferior) */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#8a2f3f]" />
                <span className="font-['Urbanist',sans-serif] text-[12.5px] font-bold tracking-[0.1em] uppercase text-[#8a2f3f]">
                  Trajetória Assistencial Multidisciplinar (Equipe Hospitalar)
                </span>
              </div>

              <div className="relative w-full">
                {/* Linha Inferior */}
                <div className="absolute left-6 right-6 top-3.5 h-[2px] bg-[#8a2f3f]/20 rounded-full z-0" />
                <motion.div
                  className="absolute left-6 top-3.5 h-[2px] bg-[#8a2f3f] rounded-full z-0 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="grid grid-cols-5 gap-3 relative z-10">
                  {DUAL_TRACK_DATA.map((item, index) => (
                    <motion.div
                      key={`care-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
                      className="pt-7 flex flex-col items-center text-center"
                    >
                      {/* Dot Inferior */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8a2f3f] flex items-center justify-center shadow-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8a2f3f]" />
                      </div>

                      <span className="inline-flex items-center px-2 py-0.2 rounded-full text-[10px] font-['Urbanist',sans-serif] font-bold text-[#8a2f3f] bg-[#f7ecee] border border-[#8a2f3f]/20 uppercase">
                        {item.stage}
                      </span>
                      <h4 className="font-['Urbanist',sans-serif] text-[15px] font-bold text-[#8a2f3f] leading-tight mt-0.5">
                        {item.assistential.title}
                      </h4>
                      <p className="font-['Satoshi',sans-serif] text-[11.5px] text-[#52525b] mt-1 leading-snug line-clamp-2 px-1">
                        {item.assistential.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[13px] text-[#5f6062]">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-[#8a2f3f] shrink-0" />
              <span className="font-semibold text-[#0f1012]">
                Princípio Norteador do Protocolo:
              </span>
              <span>A intervenção bem-sucedida respeita a janela em que a habilidade ou demanda social está se estruturando.</span>
            </div>
            <span className="font-['Urbanist',sans-serif] font-bold text-[11.5px] text-[#8a2f3f] uppercase tracking-wider shrink-0">
              Eixo 5 · Síntese do Cuidado
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Slide28Timeline;
