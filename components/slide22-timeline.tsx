"use client";

import { motion } from "framer-motion";
import { RoadmapCard, RoadmapItem } from "@/components/ui/roadmap-card";
import { Sparkles, ShieldCheck, UserCheck, Compass } from "lucide-react";

interface Slide22TimelineProps {
  isActive?: boolean;
}

export function Slide22Timeline({ isActive = true }: Slide22TimelineProps) {
  const items: RoadmapItem[] = [
    {
      quarter: "Infância Precoce",
      title: "Segurança e Vínculo",
      description: "Regulação emocional · experiências primárias de cuidado e tratamento cirúrgico/hospitalar.",
      status: "done",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#b5563a]" />,
    },
    {
      quarter: "Idade Escolar",
      title: "Comparação com Pares",
      description: "Competência percebida · início da avaliação social externa · consolidação da autoestima.",
      status: "in-progress",
      icon: <UserCheck className="w-3.5 h-3.5 text-[#b5563a]" />,
    },
    {
      quarter: "Adolescência",
      title: "Identidade & Pertencimento",
      description: "Satisfação com aparência e fala · autoimagem corporal · expectativas quanto a novos tratamentos.",
      status: "in-progress",
      icon: <Compass className="w-3.5 h-3.5 text-[#b5563a]" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 select-none">
      {/* RoadmapCard Adaptado ao Eixo 3 (Terracota #b5563a) */}
      <RoadmapCard
        title="Tarefas emocionais ao longo do desenvolvimento"
        description="A condição anatômica pode permanecer semelhante; a tarefa emocional da criança evolui qualitativamente."
        items={items}
        colorTheme="terracotta"
        isActive={isActive}
        className="border-[#b5563a]/20 bg-gradient-to-br from-white/95 via-[#fbeee9]/40 to-white/90"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 border border-[#b5563a]/20 shadow-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#fbeee9] flex items-center justify-center shrink-0 text-[#b5563a]">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="font-['Satoshi',sans-serif] text-[17px] font-medium text-[#0f1012] leading-snug">
            <span className="font-bold text-[#b5563a]">Princípio Clínico: </span>
            A aparência pode adquirir novo significado conforme mudam as demandas relacionais do desenvolvimento.
          </p>
        </motion.div>
      </RoadmapCard>
    </div>
  );
}

export default Slide22Timeline;
