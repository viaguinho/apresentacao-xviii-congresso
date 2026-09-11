"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartHandshake,
  Users2,
  Smile,
  ArrowRightLeft,
  Sparkles,
  Repeat,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide30FlowProps {
  isActive?: boolean;
  className?: string;
}

interface DomainBlock {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number; // Center X in viewBox 540x380
  y: number; // Center Y in viewBox 540x380
  badgeStyle: string;
}

// 4 domains aligned in symmetrical 2x2 grid
// ViewBox: 540 wide x 380 high. Center is exactly (270, 190)
const domainBlocks: DomainBlock[] = [
  {
    id: "condicao",
    title: "Condição & Tratamento",
    subtitle: "Cirurgias, ortodontia & rotina",
    badge: "Entrada Clínica",
    icon: Stethoscope,
    x: 120,
    y: 75,
    badgeStyle: "bg-[#8a2f3f]/10 text-[#8a2f3f] border-[#8a2f3f]/25",
  },
  {
    id: "cuidadores",
    title: "Bem-estar dos Cuidadores",
    subtitle: "Saúde mental, sobrecarga & ajuste",
    badge: "Fator Mediador",
    icon: HeartHandshake,
    x: 420,
    y: 75,
    badgeStyle: "bg-[#8a2f3f]/10 text-[#8a2f3f] border-[#8a2f3f]/25",
  },
  {
    id: "familia",
    title: "Funcionamento Familiar",
    subtitle: "Coesão, rotina & expressividade",
    badge: "Sistema Protetivo",
    icon: Users2,
    x: 120,
    y: 305,
    badgeStyle: "bg-[#8a2f3f]/10 text-[#8a2f3f] border-[#8a2f3f]/25",
  },
  {
    id: "crianca",
    title: "Experiência da Criança",
    subtitle: "Autoimagem, adesão & pares",
    badge: "Desfecho Central",
    icon: Smile,
    x: 420,
    y: 305,
    badgeStyle: "bg-[#8a2f3f]/10 text-[#8a2f3f] border-[#8a2f3f]/25",
  },
];

export default function Slide30Flow({ isActive = true, className }: Slide30FlowProps) {
  const containerId = useId();

  // Precise geometric coordinates:
  // Hub Center: (270, 190)
  // Hub width ~ 180, height ~ 76.
  // Left border of Hub: x = 180. Right border: x = 360.
  // Top border of Hub: y = 152. Bottom border: y = 228.

  // Block dimensions: 205w x 88h.
  // Top-Left block: center (120, 75) => right edge is x = 222, bottom edge is y = 119
  // Top-Right block: center (420, 75) => left edge is x = 318, bottom edge is y = 119
  // Bottom-Left block: center (120, 305) => right edge is x = 222, top edge is y = 261
  // Bottom-Right block: center (420, 305) => left edge is x = 318, top edge is y = 261

  // 1. Cross-hub Orthogonal Connectors:
  // TL: From bottom of TL (120, 119) down to y=190, then right to hub (180, 190)
  const pathTL = "M 120 119 L 120 190 L 180 190";
  // TR: From bottom of TR (420, 119) down to y=190, then left to hub (360, 190)
  const pathTR = "M 420 119 L 420 190 L 360 190";
  // BL: From top of BL (120, 261) up to y=190, then right to hub (180, 190)
  const pathBL = "M 120 261 L 120 190 L 180 190";
  // BR: From top of BR (420, 261) up to y=190, then left to hub (360, 190)
  const pathBR = "M 420 261 L 420 190 L 360 190";

  // 2. Continuous Outer Transactional Circuit:
  // TL (120, 75) -> TR (420, 75) -> BR (420, 305) -> BL (120, 305) -> TL (120, 75)
  const outerCircuit = "M 120 75 H 420 V 305 H 120 Z";

  return (
    <div
      className={cn(
        "relative w-full h-full flex flex-col justify-between select-none bg-transparent font-['Satoshi',sans-serif] px-2 py-1",
        className
      )}
    >
      {/* Top Header Information: Clean & Integrated without card look */}
      <div className="flex items-center justify-between pb-2 border-b border-[#8a2f3f]/15">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#8a2f3f]">
            Modelo Bioecológico · Circuito Transacional
          </span>
        </div>
        <div className="flex items-center gap-1 text-[16px] font-semibold text-[#8a2f3f] bg-[#8a2f3f]/10 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/20">
          <Repeat className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Retroalimentação Contínua</span>
        </div>
      </div>

      {/* Main Diagram Area with Strict 2x2 Orthogonal Geometry */}
      <div className="relative flex-1 w-full min-h-[380px] flex items-center justify-center my-auto">
        {/* SVG Pipeline Canvas */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 540 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Linear gradient for orthogonal light beams */}
            <linearGradient id={`${containerId}-beam`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a2f3f" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#8a2f3f" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8a2f3f" stopOpacity="0.05" />
            </linearGradient>

            {/* Linear gradient for outer loop */}
            <linearGradient id={`${containerId}-loop`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8a2f3f" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#e88d9d" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8a2f3f" stopOpacity="0.1" />
            </linearGradient>

            <filter id={`${containerId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Outer Square Loop Track: dashed guide line */}
          <path
            d={outerCircuit}
            stroke="#8a2f3f"
            strokeWidth="1.2"
            strokeDasharray="5 7"
            strokeOpacity="0.22"
            fill="none"
          />

          {/* Outer Loop Traveling Beam */}
          <motion.path
            d={outerCircuit}
            stroke={`url(#${containerId}-loop)`}
            strokeWidth="2.4"
            fill="none"
            strokeDasharray="60 300"
            initial={{ strokeDashoffset: 400 }}
            animate={{ strokeDashoffset: -400 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            filter={`url(#${containerId}-glow)`}
          />

          {/* 2. Static Orthogonal Tracks connecting to Hub */}
          <path d={pathTL} stroke="#8a2f3f" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
          <path d={pathTR} stroke="#8a2f3f" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
          <path d={pathBL} stroke="#8a2f3f" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
          <path d={pathBR} stroke="#8a2f3f" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />

          {/* 3. Animated Pulsing Beams in the 4 Orthogonal Channels */}
          {[pathTL, pathTR, pathBL, pathBR].map((p, idx) => (
            <motion.path
              key={`pulse-${idx}`}
              d={p}
              stroke={`url(#${containerId}-beam)`}
              strokeWidth="2.2"
              fill="none"
              strokeDasharray="40 140"
              initial={{ strokeDashoffset: 180 }}
              animate={{ strokeDashoffset: -180 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: idx * 0.4,
              }}
            />
          ))}

          {/* Intersection Points (Junction dots) */}
          <circle cx="120" cy="190" r="3" fill="#8a2f3f" fillOpacity="0.4" />
          <circle cx="420" cy="190" r="3" fill="#8a2f3f" fillOpacity="0.4" />
        </svg>

        {/* Central Hub: Elevated Systemic Capsule */}
        <div
          className="absolute z-20 flex flex-col items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Subtle Outer Pulse Ring */}
          <motion.div
            className="absolute -inset-3 rounded-3xl border border-[#8a2f3f]/25 pointer-events-none"
            animate={{ scale: [1, 1.14, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Capsule Content */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="relative flex flex-col items-center justify-center px-4 py-3 rounded-2xl bg-white border-2 border-[#8a2f3f] shadow-[0_4px_20px_rgba(138,47,63,0.14)] min-w-[176px]"
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#8a2f3f] animate-ping" />
              <span className="text-[14px] font-black uppercase tracking-widest text-[#8a2f3f]">
                Núcleo Sistêmico
              </span>
            </div>

            <h4 className="font-['Urbanist',sans-serif] text-[16.5px] font-black text-[#1a1113] tracking-tight leading-tight text-center">
              Sistema Familiar
            </h4>
            <p className="text-[16px] font-semibold text-[#8a2f3f] text-center leading-tight">
              Dinâmica Transacional
            </p>

            <div className="mt-1.5 pt-1 border-t border-[#8a2f3f]/15 flex items-center gap-1 text-[16px] font-medium text-[#6b585c]">
              <ArrowRightLeft className="w-2.5 h-2.5 text-[#8a2f3f]" />
              <span>Interdependência Mútua</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Peripheral Domain Blocks: Symmetrical, Identical Dimensions */}
        {domainBlocks.map((block) => {
          const Icon = block.icon;

          return (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isActive ? 1 : 0.95, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              style={{
                left: `${(block.x / 540) * 100}%`,
                top: `${(block.y / 380) * 100}%`,
              }}
              className={cn(
                "absolute z-10 flex flex-col justify-between -translate-x-1/2 -translate-y-1/2",
                "w-[205px] h-[88px] p-2.5 rounded-2xl bg-white",
                "border border-[#8a2f3f]/25 shadow-[0_2px_12px_rgba(138,47,63,0.06)]",
                "hover:border-[#8a2f3f] hover:shadow-[0_6px_20px_rgba(138,47,63,0.12)] transition-all duration-300"
              )}
            >
              {/* Top Row: Icon & Status Badge */}
              <div className="flex items-center justify-between gap-1">
                <div className="w-6 h-6 rounded-lg bg-[#8a2f3f]/10 border border-[#8a2f3f]/20 flex items-center justify-center text-[#8a2f3f] shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className={cn("text-[14px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border", block.badgeStyle)}>
                  {block.badge}
                </span>
              </div>

              {/* Bottom Row: Title & Subtitle */}
              <div>
                <h5 className="font-['Urbanist',sans-serif] text-[15px] font-bold text-[#1a1113] leading-tight">
                  {block.title}
                </h5>
                <p className="text-[16px] text-[#554347] font-normal leading-tight mt-0.5">
                  {block.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Floating Legend Bar */}
      <div className="flex items-center justify-center pt-2 border-t border-[#8a2f3f]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#8a2f3f]/15 shadow-xs text-[15px] text-[#554347]">
          <Sparkles className="w-3.5 h-3.5 text-[#8a2f3f]" />
          <span>
            <strong className="text-[#1a1113] font-semibold">Mútua influência:</strong> Os 4 polos retroalimentam o desenvolvimento da criança e o ajuste dos pais.
          </span>
        </div>
      </div>
    </div>
  );
}
