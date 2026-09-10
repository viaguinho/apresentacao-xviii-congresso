"use client";

import React, { useState, useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  theme?: "light" | "dark";
  compact?: boolean;
  radius?: number;
  autoRotateSpeed?: number;
  autoCycleHighlight?: boolean;
  cycleInterval?: number;
  centerTitle?: string;
  centerSubtitle?: string;
  centerContent?: React.ReactNode;
  showEnergyPercentage?: boolean;
}

export default function RadialOrbitalTimeline({
  timelineData,
  theme = "light",
  compact = false,
  radius: propRadius,
  autoRotateSpeed = 0.25,
  autoCycleHighlight = false,
  cycleInterval = 4000,
  centerTitle = "Criança",
  centerSubtitle = "Núcleo",
  centerContent,
  showEnergyPercentage = true,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    [timelineData[0]?.id ?? 1]: true,
  });
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [, setPulseEffect] = useState<Record<number, boolean>>({
    [timelineData[0]?.id ?? 1]: true,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(timelineData[0]?.id ?? null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const isLight = theme === "light";
  const orbitalRadius = propRadius ?? (compact ? 96 : 180);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      const willBeActive = !prev[id];

      if (willBeActive) {
        newState[id] = true;
        setActiveNodeId(id);
        setAutoRotate(false);

        const related = getRelatedItems(id);
        const pulses: Record<number, boolean> = {};
        related.forEach((relId) => {
          pulses[relId] = true;
        });
        setPulseEffect(pulses);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  // Rotação suave contínua em loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (autoRotate) {
        setRotationAngle((prev) => {
          const step = (autoRotateSpeed * (delta / 16.67));
          return (prev + step) % 360;
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoRotate, autoRotateSpeed]);

  // Ciclo sequencial automático para congressos / palestras
  useEffect(() => {
    if (!autoCycleHighlight || timelineData.length === 0) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      const currentItem = timelineData[currentIndex];
      if (currentItem) {
        setActiveNodeId(currentItem.id);
        setExpandedItems({ [currentItem.id]: true });

        const related = currentItem.relatedIds || [];
        const pulses: Record<number, boolean> = {};
        related.forEach((relId) => {
          pulses[relId] = true;
        });
        setPulseEffect(pulses);
      }
      currentIndex = (currentIndex + 1) % timelineData.length;
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [autoCycleHighlight, cycleInterval, timelineData]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = orbitalRadius * Math.cos(radian);
    const y = orbitalRadius * Math.sin(radian);

    return { x, y, angle };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusBadge = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return isLight ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "text-white bg-black border-white";
      case "in-progress":
        return isLight ? "bg-blue-50 text-[#0071e3] border-blue-200" : "text-black bg-white border-black";
      default:
        return isLight ? "bg-zinc-100 text-zinc-600 border-zinc-200" : "text-white bg-black/40 border-white/50";
    }
  };

  const activeItem = timelineData.find((i) => i.id === activeNodeId);

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={`relative w-full h-full flex flex-col items-center justify-center select-none overflow-visible ${
        isLight ? "bg-transparent text-[#0f1012]" : "bg-black text-white"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={orbitRef}
          className="absolute w-full h-full flex items-center justify-center overflow-visible"
        >
          {/* Núcleo Central: A Criança */}
          <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-none">
            {centerContent ? (
              centerContent
            ) : (
              <div
                className={`rounded-full flex flex-col items-center justify-center text-center shadow-lg transition-all duration-500 ${
                  compact ? "w-14 h-14" : "w-18 h-18"
                } ${
                  isLight
                    ? "bg-gradient-to-br from-[#0071e3] to-[#0284c7] text-white shadow-[#0071e3]/20"
                    : "bg-gradient-to-br from-blue-500 via-indigo-500 to-teal-500 text-white"
                }`}
              >
                <div
                  className={`absolute rounded-full border animate-ping opacity-35 pointer-events-none ${
                    compact ? "w-18 h-18" : "w-24 h-24"
                  } ${isLight ? "border-[#0071e3]/40" : "border-white/25"}`}
                />
                <span className="text-[10.5px] font-bold tracking-tight leading-none uppercase">
                  {centerTitle}
                </span>
                <span className="text-[8px] opacity-85 leading-tight font-medium mt-0.5">
                  {centerSubtitle}
                </span>
              </div>
            )}
          </div>

          {/* Anel Orbital Guia Fixo */}
          <div
            style={{
              width: `${orbitalRadius * 2}px`,
              height: `${orbitalRadius * 2}px`,
            }}
            className={`absolute rounded-full border border-dashed pointer-events-none transition-all ${
              isLight ? "border-[#0071e3]/25" : "border-white/15"
            }`}
          />
          <div
            style={{
              width: `${orbitalRadius * 2 + 36}px`,
              height: `${orbitalRadius * 2 + 36}px`,
            }}
            className={`absolute rounded-full border pointer-events-none opacity-40 ${
              isLight ? "border-zinc-200" : "border-white/10"
            }`}
          />

          {/* Nós Orbitando Estritamente em Círculo (Distância Constante) */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const Icon = item.icon;

            const nodeStyle: React.CSSProperties = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: 30,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
                className="absolute cursor-pointer flex flex-col items-center justify-center group"
              >
                {/* Ícone Redondo com Tamanho Constante (Sem aproximação/afastamento) */}
                <div
                  className={`
                    rounded-full flex items-center justify-center transition-colors duration-200 border-2
                    ${compact ? "w-10 h-10" : "w-12 h-12"}
                    ${
                      isExpanded
                        ? isLight
                          ? "bg-[#0071e3] text-white border-[#0071e3] shadow-md shadow-[#0071e3]/25"
                          : "bg-white text-black border-white shadow-md shadow-white/25"
                        : isRelated
                        ? isLight
                          ? "bg-blue-100 text-[#0071e3] border-[#0071e3]/60"
                          : "bg-white/60 text-black border-white"
                        : isLight
                        ? "bg-white text-[#0f1012] border-black/10 group-hover:border-[#0071e3] shadow-sm"
                        : "bg-zinc-900 text-white border-white/30 group-hover:border-white"
                    }
                  `}
                >
                  <Icon size={compact ? 17 : 21} />
                </div>

                {/* Rótulo do Nó */}
                <div
                  className={`
                    absolute top-11 whitespace-nowrap text-[11px] font-bold tracking-tight transition-colors duration-200
                    ${
                      isExpanded
                        ? isLight
                          ? "text-[#0071e3] font-extrabold"
                          : "text-white font-extrabold"
                        : isLight
                        ? "text-[#3f4042]"
                        : "text-white/70"
                    }
                  `}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card / Dock Flutuante de Detalhes do Nó Ativo */}
      {activeItem && (
        <div className="absolute bottom-1 left-2 right-2 z-40 animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
          {compact ? (
            <div
              className={`p-1.5 px-2.5 rounded-xl border shadow-sm ${
                isLight
                  ? "bg-white/95 backdrop-blur-md border-[#0071e3]/20 shadow-[0_2px_12px_rgba(0,113,227,0.06)]"
                  : "bg-black/90 backdrop-blur-lg border-white/20 text-white"
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Badge className={`px-1.5 py-0 text-[8px] font-bold uppercase rounded-md border ${getStatusBadge(activeItem.status)}`}>
                    {activeItem.category}
                  </Badge>
                  <span className="text-[10.5px] font-bold text-[#0f1012] truncate">
                    {activeItem.title}
                  </span>
                  <span className="text-[9px] text-[#5f6062] truncate">
                    · {activeItem.date}
                  </span>
                </div>
                {showEnergyPercentage && (
                  <div className="flex items-center gap-1 shrink-0 text-[9px] font-bold text-[#0071e3]">
                    <Zap size={9} />
                    <span>{activeItem.energy}%</span>
                  </div>
                )}
              </div>
              <p className="text-[9px] text-[#5f6062] mt-0.5 leading-snug line-clamp-1">
                {activeItem.content}
              </p>
            </div>
          ) : (
            <Card
              className={`p-2.5 rounded-xl border shadow-md ${
                isLight
                  ? "bg-white/95 backdrop-blur-md border-[#0071e3]/25 shadow-[0_4px_16px_rgba(0,113,227,0.08)]"
                  : "bg-black/90 backdrop-blur-lg border-white/30 text-white shadow-xl shadow-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 pb-1 border-b border-black/[0.06]">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Badge className={`px-1.5 py-0 text-[8.5px] font-bold uppercase rounded-md border ${getStatusBadge(activeItem.status)}`}>
                    {activeItem.category}
                  </Badge>
                  <span className="text-[11px] font-bold text-[#0f1012] truncate">
                    {activeItem.title}
                  </span>
                </div>
                <span className="text-[9.5px] font-semibold text-[#0071e3] whitespace-nowrap">
                  {activeItem.date}
                </span>
              </div>

              <p className="text-[10px] text-[#5f6062] mt-1 leading-snug">
                {activeItem.content}
              </p>

              {/* Barra de Energia / Impacto */}
              {showEnergyPercentage && (
                <>
                  <div className="mt-1.5 pt-1 border-t border-black/[0.04] flex items-center justify-between text-[8.5px] text-[#5f6062]">
                    <span className="flex items-center gap-0.5 font-medium">
                      <Zap size={9} className="text-[#0071e3]" />
                      Nível de Impacto
                    </span>
                    <span className="font-bold text-[#0f1012]">{activeItem.energy}%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden mt-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-[#0071e3] to-[#0ea5e9] rounded-full transition-all duration-500"
                      style={{ width: `${activeItem.energy}%` }}
                    />
                  </div>
                </>
              )}
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
