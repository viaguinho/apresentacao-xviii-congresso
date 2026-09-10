"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export interface TimelineEntry {
  step: number | string;
  category: string;
  title: string;
  description: string;
  detail?: string | React.ReactNode;
  badge?: string;
  accentColor?: string;
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
  isSlideActive?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ data, className = "", isSlideActive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col justify-between h-full py-1 ${className}`}
      style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
    >
      {/* Trilha vertical conectando todos os nós com zonas sutis de cor */}
      <div
        className="absolute left-[28px] top-6 bottom-6 w-[2.5px] overflow-hidden pointer-events-none rounded-full"
        style={{
          background: "linear-gradient(180deg, rgba(0, 113, 227, 0.16) 0%, rgba(0, 113, 227, 0.16) 38%, rgba(225, 29, 72, 0.18) 46%, rgba(225, 29, 72, 0.18) 78%, rgba(0, 113, 227, 0.25) 86%, rgba(0, 113, 227, 0.35) 100%)",
        }}
      >
        {/* Feixe luminoso dinâmico com metamorfose exata de cor:
            Sai do 1 em Azul -> Entra no 2 fica Vermelho -> Percorre 2-3 em Vermelho -> Entra no 3 e finaliza em Azul */}
        <motion.div
          animate={
            isSlideActive
              ? {
                  top: ["-15%", "35%", "46%", "76%", "88%", "106%"],
                  background: [
                    "linear-gradient(180deg, transparent 0%, #0071e3 50%, transparent 100%)",
                    "linear-gradient(180deg, transparent 0%, #0071e3 50%, transparent 100%)",
                    "linear-gradient(180deg, transparent 0%, #e11d48 50%, transparent 100%)",
                    "linear-gradient(180deg, transparent 0%, #e11d48 50%, transparent 100%)",
                    "linear-gradient(180deg, transparent 0%, #0071e3 50%, transparent 100%)",
                    "linear-gradient(180deg, transparent 0%, #0071e3 50%, transparent 100%)",
                  ],
                  boxShadow: [
                    "0 0 16px rgba(0, 113, 227, 0.8), 0 0 28px rgba(0, 113, 227, 0.4)",
                    "0 0 16px rgba(0, 113, 227, 0.85), 0 0 28px rgba(0, 113, 227, 0.45)",
                    "0 0 18px rgba(225, 29, 72, 0.9), 0 0 32px rgba(225, 29, 72, 0.5)",
                    "0 0 18px rgba(225, 29, 72, 0.9), 0 0 32px rgba(225, 29, 72, 0.5)",
                    "0 0 20px rgba(0, 113, 227, 0.95), 0 0 34px rgba(0, 113, 227, 0.55)",
                    "0 0 20px rgba(0, 113, 227, 0.95), 0 0 34px rgba(0, 113, 227, 0.55)",
                  ],
                  opacity: [0, 1, 1, 1, 1, 0],
                }
              : { top: "-15%", opacity: 0 }
          }
          transition={{
            duration: 4.0,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.35, 0.46, 0.76, 0.88, 1],
          }}
          className="absolute left-0 right-0 w-full h-36 rounded-full"
        />
      </div>

      {/* Itens da Timeline */}
      <div className="flex flex-col justify-between gap-5 relative z-10 h-full">
        {data.map((item, index) => {
          const isRed = index === 1; // Etapa 2 em Carmim Clínico (#e11d48)
          const nodeBorderColor = isRed ? "#e11d48" : "#0071e3";
          const nodeBgGradient = isRed
            ? "linear-gradient(135deg, rgba(225, 29, 72, 0.08) 0%, #ffffff 100%)"
            : "linear-gradient(135deg, rgba(0, 113, 227, 0.08) 0%, #ffffff 100%)";

          // Sincronização do pulso de cada nó com a chegada do feixe
          // Nó 1: ativo em t=0..0.25 (início do ciclo, Azul)
          // Nó 2: ativo em t=0.40..0.60 (chegada ao nó 2, Carmim)
          // Nó 3: ativo em t=0.80..1.00 (chegada ao nó 3, Azul na base)
          const pulseScale =
            index === 0
              ? [1.18, 1, 1, 1, 1.18]
              : index === 1
              ? [1, 1, 1.22, 1, 1]
              : [1, 1, 1, 1.2, 1];
          const pulseOpacity =
            index === 0
              ? [0.8, 0.3, 0.25, 0.3, 0.8]
              : index === 1
              ? [0.25, 0.25, 0.85, 0.25, 0.25]
              : [0.25, 0.25, 0.25, 0.85, 0.3];
          const pulseTimes =
            index === 0
              ? [0, 0.2, 0.7, 0.9, 1]
              : index === 1
              ? [0, 0.38, 0.5, 0.65, 1]
              : [0, 0.75, 0.82, 0.92, 1];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-5 group"
            >
              {/* Nó circular da Timeline reativo ao feixe */}
              <div className="relative flex-none mt-0.5">
                {/* Glow ring de fundo sincronizado com a passagem do feixe */}
                <motion.div
                  animate={{
                    scale: pulseScale,
                    opacity: pulseOpacity,
                  }}
                  transition={{
                    duration: 4.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: pulseTimes,
                  }}
                  className="absolute -inset-1.5 rounded-full pointer-events-none"
                  style={{
                    background: isRed
                      ? "radial-gradient(circle, rgba(225, 29, 72, 0.38) 0%, transparent 70%)"
                      : "radial-gradient(circle, rgba(0, 113, 227, 0.35) 0%, transparent 70%)",
                  }}
                />

                <div
                  className="w-[58px] h-[58px] rounded-full flex items-center justify-center font-bold text-[22px] transition-all duration-300 shadow-sm relative z-10"
                  style={{
                    background: nodeBgGradient,
                    border: `2px solid ${nodeBorderColor}`,
                    color: "#0f1012",
                    fontFamily: "'Urbanist', 'Satoshi', sans-serif",
                    boxShadow: isRed
                      ? "0 4px 14px rgba(225, 29, 72, 0.2)"
                      : "0 4px 14px rgba(0, 113, 227, 0.18)",
                  }}
                >
                  {item.step}
                </div>
              </div>

              {/* Card de Conteúdo Refinado */}
              <div
                className="flex-1 bg-white/95 rounded-2xl p-4 transition-all duration-300 relative border border-slate-200/80 shadow-[0_2px_12px_rgba(15,16,18,0.03)] hover:shadow-[0_6px_20px_rgba(0,113,227,0.08)] hover:border-blue-200"
                style={{
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Cabeçalho da Etapa: Categoria / Tag */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className="font-bold tracking-[0.1em] uppercase text-[11px] px-2.5 py-0.5 rounded-full inline-flex items-center"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      background: isRed ? "rgba(225, 29, 72, 0.08)" : "rgba(0, 113, 227, 0.08)",
                      color: isRed ? "#e11d48" : "#0071e3",
                      border: isRed ? "1px solid rgba(225, 29, 72, 0.25)" : "1px solid rgba(0, 113, 227, 0.2)",
                    }}
                  >
                    {item.category}
                  </span>

                  {item.badge && (
                    <span
                      className="text-[12px] font-semibold tracking-tight px-2.5 py-0.5 rounded-md"
                      style={{
                        background: isRed ? "rgba(225, 29, 72, 0.05)" : "rgba(15, 16, 18, 0.04)",
                        color: isRed ? "#be123c" : "#3f4042",
                        border: isRed ? "1px solid rgba(225, 29, 72, 0.15)" : "1px solid rgba(15, 16, 18, 0.08)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Título Principal da Etapa */}
                <h3
                  className="m-0 text-[20px] font-semibold text-[#0f1012] leading-[1.28] tracking-[-0.3px]"
                  style={{ fontFamily: "'Urbanist', 'Satoshi', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Descrição Metodológica */}
                <p className="m-0 mt-1.5 text-[15px] font-normal leading-[1.42] text-[#5f6062]">
                  {item.description}
                </p>

                {/* Detalhe / Highlight complementar */}
                {item.detail && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center flex-wrap gap-2">
                    {typeof item.detail === "string" ? (
                      <span
                        className="inline-flex items-center gap-1.5 text-[14px] font-semibold px-3 py-1 rounded-lg"
                        style={{
                          background: isRed ? "rgba(225, 29, 72, 0.08)" : "rgba(0, 113, 227, 0.06)",
                          color: isRed ? "#be123c" : "#0071e3",
                          border: isRed ? "1px solid rgba(225, 29, 72, 0.2)" : "1px solid rgba(0, 113, 227, 0.18)",
                        }}
                      >
                        {item.detail}
                      </span>
                    ) : (
                      item.detail
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
