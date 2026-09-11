import React from "react";
import { motion } from "framer-motion";
import { AnimatedFeatureCard } from "./ui/animated-feature-card";

interface Slide7FeatureCardsProps {
  isActive?: boolean;
}

const cardsData = [
  {
    index: "01",
    tag: "GENÉTICA",
    title: "Genes e biologia",
    description: "Expressão gênica dinâmica e substrato biológico.",
    imageSrc: "assets/cards/dna-3d.png",
    color: "blue" as const,
  },
  {
    index: "02",
    tag: "NEURAL",
    title: "Atividade neural",
    description: "Circuitos cerebrais, conectividade e plasticidade.",
    imageSrc: "assets/cards/brain-neural-3d.png",
    color: "purple" as const,
  },
  {
    index: "03",
    tag: "AÇÃO",
    title: "Comportamento",
    description: "Ações observáveis, regulação e respostas ativas.",
    imageSrc: "assets/cards/behavior-action-3d.png",
    color: "orange" as const,
  },
  {
    index: "04",
    tag: "CONTEXTO",
    title: "Ambiente físico, social e cultural",
    description: "Família, escola, pares e cultura em interação.",
    imageSrc: "assets/cards/environment-world-3d.png",
    color: "emerald" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 20,
    },
  },
};

export default function Slide7FeatureCards({ isActive = true }: Slide7FeatureCardsProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-3.5 w-full my-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      {cardsData.map((card) => (
        <motion.div key={card.index} variants={cardItemVariants}>
          <AnimatedFeatureCard
            index={card.index}
            tag={card.tag}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            color={card.color}
            className="h-[252px] w-full max-w-none p-3 shadow-xs border-slate-200/70 hover:border-slate-300 transition-colors"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
