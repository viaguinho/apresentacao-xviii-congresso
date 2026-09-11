"use client";

import React, { useId, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  UserCheck,
  TrendingUp,
  AlertTriangle,
  MapPin,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide37IntegrationProps {
  isActive?: boolean;
  className?: string;
}

interface ClinicalNodeConfig {
  id: string;
  number: string;
  title: string;
  question: string;
  icon: React.ComponentType<{ className?: string }>;
  left: number;
  top: number;
  width: number;
  height: number;
  pathD: string;
  delay: number;
}

// Coordinate system: 896 x 450 (ocupa a coluna esquerda inteira; nós maiores para texto ≥ 15px)
// Hub Center: x = 448, y = 270
// Hub Box: Left = 328, Right = 568, Top = 215, Bottom = 325 (Width 240, Height 110)
// Conexões: mesma origem (bordas do hub), mesmo destino (borda do nó) e mesmo traçado em cotovelo do original.
const clinicalNodes: ClinicalNodeConfig[] = [
  {
    id: "node-1",
    number: "1",
    title: "Variação desenvolvimental",
    question: "É uma maneira individual de funcionar?",
    icon: UserCheck,
    left: 288,
    top: 10,
    width: 320,
    height: 100,
    // Hub Top (448, 215) straight up to Node 1 Bottom (448, 110)
    pathD: "M 448 215 V 110",
    delay: 0.1,
  },
  {
    id: "node-2",
    number: "2",
    title: "Trajetória atípica",
    question: "Há competência ainda não adquirida?",
    icon: TrendingUp,
    left: 608,
    top: 120,
    width: 288,
    height: 100,
    // Hub Right-Upper (568, 243) -> right to 578 -> Q turn up to 590 -> up to 182 -> Q turn right to 602 -> right to Node 2 Left (608, 170)
    pathD: "M 568 243 H 578 Q 590 243 590 231 V 182 Q 590 170 602 170 H 608",
    delay: 0.25,
  },
  {
    id: "node-3",
    number: "3",
    title: "Dificuldade funcional",
    question: "Quanto interfere no cotidiano?",
    icon: AlertTriangle,
    left: 608,
    top: 330,
    width: 288,
    height: 100,
    // Hub Right-Lower (568, 297) -> right to 578 -> Q turn down to 590 -> down to 368 -> Q turn right to 602 -> right to Node 3 Left (608, 380)
    pathD: "M 568 297 H 578 Q 590 297 590 309 V 368 Q 590 380 602 380 H 608",
    delay: 0.4,
  },
  {
    id: "node-4",
    number: "4",
    title: "Resposta contextual",
    question: "Onde e diante de quê acontece?",
    icon: MapPin,
    left: 0,
    top: 330,
    width: 288,
    height: 100,
    // Hub Left-Lower (328, 297) -> left to 318 -> Q turn down to 306 -> down to 368 -> Q turn left to 294 -> left to Node 4 Right (288, 380)
    pathD: "M 328 297 H 318 Q 306 297 306 309 V 368 Q 306 380 294 380 H 288",
    delay: 0.55,
  },
  {
    id: "node-5",
    number: "5",
    title: "Psicopatologia",
    question: "Atende a critérios clínicos apropriados?",
    icon: ClipboardCheck,
    left: 0,
    top: 120,
    width: 288,
    height: 100,
    // Hub Left-Upper (328, 243) -> left to 318 -> Q turn up to 306 -> up to 182 -> Q turn left to 294 -> left to Node 5 Right (288, 170)
    pathD: "M 328 243 H 318 Q 306 243 306 231 V 182 Q 306 170 294 170 H 288",
    delay: 0.7,
  },
];

const CircuitPath = ({
  d,
  id,
  delay = 0,
  isFocused = false,
}: {
  d: string;
  id: string;
  delay?: number;
  isFocused?: boolean;
}) => {
  return (
    <>
      {/* Background guide track */}
      <path
        d={d}
        stroke="#33415c"
        strokeOpacity={isFocused ? 0.38 : 0.16}
        strokeWidth={isFocused ? 2.4 : 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 4"
        fill="none"
        className="transition-all duration-500"
      />

      {/* Dynamic continuous light stream */}
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth={isFocused ? 4 : 2.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={isFocused ? `url(#glow-${id})` : undefined}
        strokeDasharray={isFocused ? "80 180" : "55 190"}
        initial={{ strokeDashoffset: 245 }}
        animate={{ strokeDashoffset: -245 }}
        transition={{
          duration: isFocused ? 2.4 : 3.2,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
        className="transition-all duration-500"
      />

      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.05" />
          <stop
            offset="50%"
            stopColor={isFocused ? "#0071e3" : "#0284c7"}
            stopOpacity={isFocused ? 1 : 0.75}
          />
          <stop
            offset="100%"
            stopColor="#38bdf8"
            stopOpacity={isFocused ? 0.65 : 0.25}
          />
        </linearGradient>

        <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </>
  );
};

export default function Slide37Integration({
  isActive = true,
  className,
}: Slide37IntegrationProps) {
  const containerId = useId();
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Ciclo automático a cada 4 segundos; pausa inteligente no hover
  useEffect(() => {
    if (!isActive || isHovered) return;
    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % clinicalNodes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isActive, isHovered]);

  return (
    <div
      className={cn(
        "relative w-[896px] h-[450px] mx-auto select-none bg-transparent overflow-visible",
        className
      )}
    >
      {/* =========================================================================
          SVG CIRCUIT CONNECTING LINES LAYER (896 x 450 exact coordinate match)
          ========================================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 w-[896px] h-[450px] overflow-visible"
        viewBox="0 0 896 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {clinicalNodes.map((node, index) => (
          <CircuitPath
            key={node.id}
            d={node.pathD}
            id={`${containerId}-${node.id}`}
            delay={node.delay}
            isFocused={focusedIndex === index}
          />
        ))}
      </svg>

      {/* =========================================================================
          CENTRAL HUB: SINTOMA OBSERVADO (x=328 to 568, y=215 to 325)
          ========================================================================= */}
      <div
        style={{
          position: "absolute",
          left: 328,
          top: 215,
          width: 240,
          height: 110,
        }}
        className="z-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative w-full h-full flex flex-col items-center justify-center text-center px-3 py-2.5 rounded-2xl",
            "bg-white/95 backdrop-blur-md border-2 border-[#33415c]/20 border-t-white",
            "shadow-[0_10px_30px_rgba(51,65,92,0.12)] hover:scale-105 transition-all duration-300"
          )}
        >
          {/* Eyebrow badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#e8f2fc] to-[#e0efff] text-[#33415c] text-[14px] font-bold tracking-[0.04em] whitespace-nowrap uppercase mb-1.5 border border-[#33415c]/15 shadow-2xs">
            <MessageSquareQuote className="w-4 h-4 text-[#0071e3]" />
            <span>Sintoma Observado</span>
          </div>

          {/* Main quote */}
          <h4 className="font-['Satoshi',sans-serif] text-[19px] font-bold text-[#0f1012] leading-tight">
            “Evita falar em sala de aula.”
          </h4>

          <span className="text-[14px] font-medium text-[#5f6062] mt-0.5">
            Ponto de partida clínico
          </span>

          {/* Concentric ripples */}
          <motion.div
            className="absolute -inset-2 rounded-3xl border border-[#0071e3]/30 pointer-events-none"
            animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-4 rounded-3xl border border-[#33415c]/15 pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>

      {/* =========================================================================
          5 PERIPHERAL CLINICAL CARDS (APPLE GLASS & SPOTLIGHT)
          ========================================================================= */}
      {clinicalNodes.map((node, index) => {
        const Icon = node.icon;
        const isCurrent = focusedIndex === index;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? (isCurrent ? 1.02 : 1) : 0.9,
              y: isActive ? 0 : 8,
            }}
            transition={{
              duration: 0.45,
              delay: node.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "absolute",
              left: node.left,
              top: node.top,
              width: node.width,
              height: node.height,
            }}
            onMouseEnter={() => {
              setIsHovered(true);
              setFocusedIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onClick={() => setFocusedIndex(index)}
            className={cn(
              "z-10 flex flex-col justify-center px-4 py-3 rounded-2xl cursor-pointer select-none",
              "bg-white/92 backdrop-blur-md border border-black/[0.06] border-t-white",
              "shadow-[0_4px_18px_rgba(51,65,92,0.06)]",
              "transition-all duration-300 ease-out group",
              isCurrent
                ? "ring-2 ring-[#0071e3]/35 border-[#0071e3]/40 shadow-[0_10px_28px_rgba(0,113,227,0.14)]"
                : "hover:border-[#33415c]/25 hover:shadow-[0_6px_22px_rgba(51,65,92,0.1)]"
            )}
          >
            {/* Header: Icon + Numbered Title */}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300",
                  isCurrent
                    ? "bg-[#0071e3] text-white border-[#0071e3] scale-105 shadow-xs"
                    : "bg-[#e8f2fc] text-[#33415c] border-[#33415c]/10 group-hover:bg-[#0071e3] group-hover:text-white"
                )}
              >
                <Icon className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span
                className={cn(
                  "font-['Urbanist',sans-serif] text-[17px] font-bold leading-tight transition-colors duration-300",
                  isCurrent
                    ? "text-[#0071e3]"
                    : "text-[#33415c] group-hover:text-[#0071e3]"
                )}
              >
                {node.number} · {node.title}
              </span>
            </div>

            {/* Guiding Question */}
            <p className="font-['Satoshi',sans-serif] text-[16px] font-medium text-[#52525b] mt-1 leading-snug pl-0.5 whitespace-normal">
              {node.question}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
