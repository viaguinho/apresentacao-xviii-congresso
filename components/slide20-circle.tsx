"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Eye, Brain, Sliders, Sparkles, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide20CircleProps {
  isActive?: boolean;
}

const CONSTANTS = {
  spotlightDuration: 4500, // 4.5 seconds per node
  circleCircumference: 2 * Math.PI * 77 // ~483.8px for r=77
};

// 3 positions with uniform visual gap (~58px) to center circle and outside entry coordinates
const POSITIONS = [
  {
    id: "perceber",
    step: "01",
    targetX: -240,
    targetY: -139,
    startX: -493,
    startY: -280,
    title: "perceber",
    desc: "face, voz, corpo, contexto",
    icon: Eye,
    color: "#b5563a",
    bgGlow: "rgba(181, 86, 58, 0.16)",
    badgeBg: "rgba(181, 86, 58, 0.12)",
    tag: "Entrada sensorial"
  },
  {
    id: "compreender",
    step: "02",
    targetX: 240,
    targetY: -139,
    startX: 493,
    startY: -280,
    title: "compreender",
    desc: "situação, intenção, consequência",
    icon: Brain,
    color: "#6366f1",
    bgGlow: "rgba(99, 102, 241, 0.16)",
    badgeBg: "rgba(99, 102, 241, 0.12)",
    tag: "Cognição social"
  },
  {
    id: "regular",
    step: "03",
    targetX: 0,
    targetY: 196,
    startX: 0,
    startY: 403,
    title: "regular",
    desc: "intensidade, duração, expressão",
    icon: Sliders,
    color: "#0d9488",
    bgGlow: "rgba(13, 148, 136, 0.16)",
    badgeBg: "rgba(13, 148, 136, 0.12)",
    tag: "Modulação ativa"
  }
];

export default function Slide20Circle({ isActive = true }: Slide20CircleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const animate = useAnimationControls();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger inward convergence when slide becomes active
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
      setCurrentIndex(0);
    }
  }, [isActive]);

  // Automatic looping spotlight: rotates every 4.5s unless hovered or paused
  useEffect(() => {
    if (!isOpen || isHovered || isManualPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % POSITIONS.length);
      setProgressKey((k) => k + 1);
    }, CONSTANTS.spotlightDuration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isHovered, isManualPaused, currentIndex]);

  const activeItem = POSITIONS[currentIndex];

  const handleSelectNode = (index: number) => {
    setCurrentIndex(index);
    setProgressKey((k) => k + 1);
  };

  const togglePause = () => {
    setIsManualPaused((p) => !p);
  };

  return (
    <div
      className="relative flex h-[520px] w-full max-w-[860px] mx-auto items-center justify-center select-none overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central Interactive Hub */}
      <div className="z-30 relative flex items-center justify-center">
        {/* SVG Progress Countdown Ring */}
        <svg
          className="absolute pointer-events-none -rotate-90 z-20"
          width="164"
          height="164"
          viewBox="0 0 164 164"
        >
          {/* Background subtle ring */}
          <circle
            cx="82"
            cy="82"
            r="77"
            fill="none"
            stroke="rgba(15, 16, 18, 0.06)"
            strokeWidth="3.5"
          />
          {/* Animated Countdown Progress Ring */}
          {isOpen && !isHovered && !isManualPaused && (
            <motion.circle
              key={`progress-${progressKey}`}
              cx="82"
              cy="82"
              r="77"
              fill="none"
              stroke={activeItem.color}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={CONSTANTS.circleCircumference}
              initial={{ strokeDashoffset: CONSTANTS.circleCircumference }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: CONSTANTS.spotlightDuration / 1000,
                ease: "linear"
              }}
              style={{
                filter: `drop-shadow(0 0 4px ${activeItem.color}60)`
              }}
            />
          )}
        </svg>

        {/* Central Hub Button */}
        <motion.button
          animate={animate}
          onClick={togglePause}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Pausar ou avançar ciclo"
          className={cn(
            "relative group flex flex-col items-center justify-center cursor-pointer outline-none rounded-full transition-all duration-300",
            "w-[148px] h-[148px] bg-white/95 border shadow-[0_12px_40px_rgba(181,86,58,0.12)] backdrop-blur-xl",
            isOpen ? "border-black/[0.08]" : "border-black/[0.14]"
          )}
        >
          {/* Soft ambient aura colored by active item */}
          <motion.div
            animate={{
              backgroundColor: activeItem.bgGlow,
              scale: isHovered || isManualPaused ? 1.05 : [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-2 rounded-full blur-xl pointer-events-none -z-10"
          />

          {/* Central Icon Badge */}
          <motion.div
            animate={{
              backgroundColor: activeItem.badgeBg,
              color: activeItem.color
            }}
            transition={{ duration: 0.4 }}
            className="w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow-inner"
          >
            <Sparkles className="w-5 h-5 stroke-[2.2]" />
          </motion.div>

          {/* Central Typography */}
          <span className="font-['Urbanist',sans-serif] text-[18px] font-bold tracking-tight text-[#0f1012] leading-tight text-center px-2">
            competência emocional
          </span>

          <span
            style={{ color: activeItem.color }}
            className="text-[14px] font-bold tracking-[0.08em] uppercase mt-1 transition-colors duration-300"
          >
            {isHovered || isManualPaused ? "pausado" : `foco ${activeItem.step}`}
          </span>

          {/* Pause / Play micro badge on hover */}
          <div className="absolute -bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0f1012] text-white text-[14px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
            {isManualPaused ? <Play className="w-2.5 h-2.5" /> : <Pause className="w-2.5 h-2.5" />}
            <span>{isManualPaused ? "retomar loop" : "pausar"}</span>
          </div>
        </motion.button>
      </div>

      {/* Floating Orbital Capsules (Cards) with Layered Centripetal Inward Animation */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {POSITIONS.map((item, index) => {
          const isCurrentActive = currentIndex === index;
          const IconComponent = item.icon;

          return (
            /* Layer 1: Centripetal Inward Convergence (Starts outside, flies inward to target) */
            <motion.div
              key={`slide20-layer1-${item.id}`}
              initial={{
                x: item.startX,
                y: item.startY,
                opacity: 0,
                scale: 0.6
              }}
              animate={{
                x: isOpen ? item.targetX : item.startX,
                y: isOpen ? item.targetY : item.startY,
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.6
              }}
              transition={{
                delay: isOpen ? index * 0.12 : 0,
                type: "spring",
                stiffness: 130,
                damping: 17,
                mass: 0.9
              }}
              onClick={() => handleSelectNode(index)}
              style={{
                position: "absolute"
              }}
              className="pointer-events-auto cursor-pointer"
            >
              {/* Layer 2: Micro-Levitation & Spotlight Elevation */}
              <motion.div
                animate={{
                  y: isOpen ? [-3, 3, -3] : 0,
                  scale: isCurrentActive ? 1.05 : 0.98,
                  opacity: isCurrentActive ? 1 : 0.82
                }}
                whileHover={{
                  scale: 1.08,
                  opacity: 1,
                  transition: { duration: 0.18 }
                }}
                transition={{
                  y: {
                    duration: 3.6 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: { duration: 0.35, ease: "easeOut" },
                  opacity: { duration: 0.35 }
                }}
                className="relative group"
              >
                {/* Dynamic Ambient Glow behind active card */}
                {isCurrentActive && (
                  <motion.div
                    layoutId="slide20-ambient-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      backgroundColor: item.bgGlow,
                      boxShadow: `0 0 45px 8px ${item.bgGlow}`
                    }}
                    className="absolute -inset-2 rounded-3xl blur-xl pointer-events-none -z-10"
                  />
                )}

                {/* Border Beam Card Shell */}
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300",
                    isCurrentActive
                      ? "shadow-[0_16px_36px_-6px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.04)]"
                      : "shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.09)]"
                  )}
                >
                  {/* Traveling Border Beam light on active card */}
                  {isCurrentActive && (
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{
                        background: `conic-gradient(from 0deg, transparent 60%, ${item.color} 100%)`
                      }}
                      className="absolute -inset-[150%] w-[400%] h-[400%] m-auto pointer-events-none"
                    />
                  )}

                  {/* Inner Card Content */}
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.96)",
                      border: isCurrentActive
                        ? `1px solid ${item.color}40`
                        : "1px solid rgba(15, 16, 18, 0.08)"
                    }}
                    className={cn(
                      "relative z-10 flex items-center gap-3.5 px-4 py-3 rounded-[15px] backdrop-blur-xl transition-all duration-200",
                      "w-[264px]"
                    )}
                  >
                    {/* Icon Container with chromatic tint */}
                    <div
                      style={{
                        backgroundColor: item.badgeBg,
                        color: item.color
                      }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner transition-transform duration-200 group-hover:scale-105"
                    >
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col text-left min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          style={{ color: item.color }}
                          className="font-['Satoshi',sans-serif] text-[20px] font-bold tracking-tight capitalize"
                        >
                          {item.title}
                        </span>
                      </div>
                      <span className="font-['Satoshi',sans-serif] text-[16px] font-medium text-[#52525b] leading-snug mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
