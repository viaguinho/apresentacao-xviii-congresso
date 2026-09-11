"use client";

import { motion, type Variants } from "framer-motion";
import { AnimatedFeatureCard } from "./ui/animated-feature-card";

interface Slide22CardsProps {
  isActive?: boolean;
}

const evidenceCardsData = [
  {
    index: "01",
    tag: "AOS 10 ANOS · n = 845",
    title: "Infância Escolar & Domínios",
    description:
      "A condição adicional à fissura associou-se ao ajuste psicológico no maior número de domínios; a insatisfação com aparência não se associou aos demais domínios de risco.",
    imageSrc: "assets/cards/memoji-10y.png",
    color: "amber" as const,
  },
  {
    index: "02",
    tag: "AOS 16 ANOS · n = 857",
    title: "Transição na Adolescência",
    description:
      "O risco ligado à aparência passou a se relacionar com risco emocional e social; a visibilidade, isoladamente, não foi fator geral de risco.",
    imageSrc: "assets/cards/memoji-16y.png",
    color: "terracotta" as const,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
    },
  },
};

export function Slide22Cards({ isActive = true }: Slide22CardsProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-4 w-full"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      {evidenceCardsData.map((card) => (
        <motion.div key={card.index} variants={cardItemVariants}>
          <AnimatedFeatureCard
            index={card.index}
            tag={card.tag}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            color={card.color}
            contentClassName="min-h-[175px] p-4 flex flex-col justify-start"
            titleClassName="text-[16px] md:text-[17px] font-bold text-slate-900 tracking-tight mb-1"
            descriptionClassName="text-[12.5px] md:text-[15px] leading-relaxed text-slate-600 font-normal"
            imageContainerClassName="bottom-[148px] top-[-10px] flex items-end justify-center pointer-events-none"
            imageClassName="w-44 h-44 md:w-48 md:h-48 object-contain drop-shadow-[0_18px_24px_rgba(181,86,58,0.22)]"
            className="h-[350px] w-full max-w-none p-3.5 shadow-xs border-stone-200/80 hover:border-[#b5563a]/40 transition-colors"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Slide22Cards;
