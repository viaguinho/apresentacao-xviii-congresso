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
    imageClassName: "w-[138px] h-[138px] object-contain drop-shadow-[0_14px_22px_rgba(37,99,235,0.26)]",
  },
  {
    index: "02",
    tag: "NEURAL",
    title: "Atividade neural",
    description: "Circuitos cerebrais, conectividade e plasticidade.",
    imageSrc: "assets/cards/brain-neural-3d.png",
    color: "purple" as const,
    imageClassName: "w-[138px] h-[138px] object-contain drop-shadow-[0_14px_22px_rgba(147,51,234,0.26)]",
  },
  {
    index: "03",
    tag: "AÇÃO",
    title: "Comportamento",
    description: "Ações observáveis, regulação e respostas ativas.",
    imageSrc: "assets/cards/behavior-action-3d.png",
    color: "orange" as const,
    imageClassName: "w-[160px] h-[160px] object-contain drop-shadow-[0_14px_22px_rgba(245,158,11,0.26)]",
  },
  {
    index: "04",
    tag: "CONTEXTO",
    title: "Ambiente físico, social e cultural",
    description: "Família, escola, pares e cultura em interação.",
    imageSrc: "assets/cards/environment-world-3d.png",
    color: "emerald" as const,
    imageClassName: "w-[138px] h-[138px] object-contain drop-shadow-[0_14px_22px_rgba(16,185,129,0.26)]",
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
            imageContainerClassName="top-1.5 bottom-[128px] z-10 flex items-center justify-center pointer-events-none"
            imageClassName={card.imageClassName}
            imageVariants={{
              initial: { scale: 1, y: 0 },
              hover: { scale: 1.06, y: -4 },
            }}
            tagClassName="text-[14px] font-bold tracking-wider px-2.5 py-0.5"
            contentClassName="px-3 py-2 rounded-xl border border-white/80 shadow-xs"
            titleClassName="text-[19px] font-bold text-slate-900 leading-snug tracking-tight"
            descriptionClassName="mt-0.5 text-[16px] font-medium text-slate-600 leading-snug"
            className="h-[270px] w-full max-w-none p-2.5 shadow-xs border-slate-200/70 hover:border-slate-300 transition-colors"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
