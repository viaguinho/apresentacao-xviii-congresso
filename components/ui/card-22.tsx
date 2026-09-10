"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SiriWave } from "@/components/ui/siri-wave";

export interface CognitivePlaceCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: string;
  subtitle?: string;
  overviewHeading?: string;
  overview?: string;
  className?: string;
}

export const CognitivePlaceCard = ({
  title = "Atenção, Memória & Linguagem",
  subtitle = "Associação bidirecional • Primeira Infância",
  overviewHeading = "Síntese Científica",
  overview = "Já no primeiro ano ocorrem mudanças importantes em atenção sustentada e seletiva, acompanhadas de melhora em reconhecimento e em formas iniciais de memória de trabalho. Linguagem e funções executivas desenvolvem-se de modo associado, sem direção causal única.",
  className,
  ...props
}: CognitivePlaceCardProps) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      whileHover={{
        y: -3,
        boxShadow: "0px 16px 36px -8px rgba(0, 113, 227, 0.12)",
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className={cn(
        "w-full max-w-[380px] overflow-hidden rounded-2xl border border-zinc-200/90 bg-white text-[#0f1012] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),0_2px_8px_-2px_rgba(0,0,0,0.03)] select-none",
        className
      )}
      {...props}
    >
      {/* 1. Top Illustrative Section: SiriWave Viewport (Fixed Wave, No Tag Desenvolvimento Cognitivo) */}
      <div className="relative h-[135px] w-full bg-[#0a0a0c] overflow-hidden">
        <div className="absolute inset-0 h-full w-full flex items-center justify-center pointer-events-none">
          <SiriWave
            variant="wave"
            size={360}
            renderScale={0.85}
            className="w-full h-full object-cover rounded-none bg-transparent"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Top Badge: 0–12 meses */}
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant="secondary"
            className="bg-black/50 text-white/90 border border-white/20 backdrop-blur-md text-[10.5px] font-semibold px-2 py-0.5"
          >
            0–12 meses
          </Badge>
        </div>
      </div>

      {/* 2. Content Section (Scientific Synthesis, Tag Eixo 2 Removed) */}
      <motion.div variants={contentVariants} className="p-5 space-y-3">
        {/* Title & Subtitle */}
        <motion.div variants={itemVariants}>
          <h3 className="text-[18px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist',sans-serif] mb-1">
            {title}
          </h3>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0d606a]">
            {subtitle}
          </p>
        </motion.div>

        {/* Overview Text */}
        <motion.div variants={itemVariants} className="pt-0.5">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-1">
            {overviewHeading}
          </h4>
          <p className="text-[12.5px] text-[#334155] leading-relaxed font-normal">
            {overview}
          </p>
        </motion.div>

        {/* Bottom Scientific Detail Callout */}
        <motion.div
          variants={itemVariants}
          className="pt-2 border-t border-black/[0.06] flex items-center justify-between"
        >
          <span className="text-[10px] font-semibold text-zinc-500">
            Reynolds & Romano (2016)
          </span>
          <span className="text-[10px] font-bold text-[#0071e3] bg-[#0071e3]/10 px-2 py-0.5 rounded-md">
            Associação Bidirecional
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const PlaceCard = CognitivePlaceCard;
export default CognitivePlaceCard;
