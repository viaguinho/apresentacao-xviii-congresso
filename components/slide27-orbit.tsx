"use client";

import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";
import { Eye, Activity, Stethoscope, Compass, Layers, Target } from "lucide-react";

interface Slide27OrbitProps {
  isActive?: boolean;
}

// 2 linhas orbitais concêntricas sem cards ou contextos duplicados:
// 1ª Linha (Interna): clínica direta (função, condições associadas)
// 2ª Linha (Externa): morfologia e visibilidade, contexto, trajetória de tratamento
// Velocidades lentas e suaves para leitura confortável
const orbits = [
  {
    // 1ª Linha / Anel Interno
    size: "w-[410px] h-[410px] md:w-[440px] md:h-[440px]",
    duration: 48,
    isClockwise: true,
    borderStyle: "border border-[#8a2f3f]/25",
    icons: [
      {
        label: "função",
        icon: Activity,
        angle: -45,
      },
      {
        label: "condições associadas",
        icon: Layers,
        angle: 45,
      },
    ],
  },
  {
    // 2ª Linha / Anel Externo
    size: "w-[590px] h-[590px] md:w-[630px] md:h-[630px]",
    duration: 68,
    isClockwise: false,
    borderStyle: "border border-[#8a2f3f]/20",
    icons: [
      {
        label: "morfologia e visibilidade",
        icon: Eye,
        angle: -50,
      },
      {
        label: "contexto",
        icon: Compass,
        angle: 0,
      },
      {
        label: "trajetória de tratamento",
        icon: Stethoscope,
        angle: 50,
      },
    ],
  },
];

export default function Slide27Orbit({ isActive: _isActive = true }: Slide27OrbitProps) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden flex justify-center select-none group">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Ambient background glow suave em tom bordô */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full bg-[#8a2f3f]/[0.035] blur-3xl" />
      </div>

      {/* Esfera de partículas 3D na base do horizonte orbital */}
      <div className="absolute bottom-[35px] left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-[320px] md:w-[420px] z-10">
        <ParticleSphereAnimation
          particleCount={3200}
        />
      </div>

      {/* Círculo refinado central ("DESFECHO DESENVOLVIMENTAL") posicionado um pouco mais para baixo dentro da órbita principal */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center">
        <div className="w-[164px] h-[164px] rounded-full bg-white/95 border-2 border-[#8a2f3f]/30 shadow-[0_8px_32px_rgba(138,47,63,0.18)] backdrop-blur-md flex flex-col items-center justify-center text-center p-2 transition-transform duration-300 hover:scale-105 cursor-default select-none">
          <div className="w-9 h-9 rounded-full bg-[#f7ecee] text-[#8a2f3f] flex items-center justify-center shrink-0 mb-1.5 shadow-inner">
            <Target className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="font-['Urbanist',sans-serif] text-[17px] font-bold tracking-[0.06em] text-[#0f1012] uppercase leading-tight">
            DESFECHO
          </span>
          <span className="font-['Urbanist',sans-serif] text-[14px] font-bold tracking-[0.02em] text-[#8a2f3f] uppercase leading-tight mt-0.5">
            DESENVOLVIMENTAL
          </span>
        </div>
      </div>

      {/* Anéis orbitais (1ª e 2ª linhas) sem repetição de cards */}
      {orbits.map((orbit, index) => {
        const orbitAnim = orbit.isClockwise ? "orbit-cw" : "orbit-ccw";
        const counterAnim = orbit.isClockwise ? "counter-cw" : "counter-ccw";

        return (
          <div
            key={index}
            className={`absolute bottom-[35px] left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none ${orbit.size} ${orbit.borderStyle}`}
          >
            {orbit.icons.map((iconData, iconIndex) => {
              const Icon = iconData.icon;
              return (
                <div
                  key={iconIndex}
                  className="absolute top-0 left-1/2 h-1/2 -ml-28 origin-bottom flex flex-col justify-start items-center pointer-events-auto"
                  style={
                    {
                      width: "224px",
                      "--start-angle": `${iconData.angle}deg`,
                      animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="-mt-5 relative z-10 transition-transform duration-200 hover:scale-105"
                    style={
                      {
                        "--counter-offset": `${-iconData.angle}deg`,
                        animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white/95 shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default select-none whitespace-nowrap">
                      <div className="w-5 h-5 rounded-full bg-[#8a2f3f]/10 text-[#8a2f3f] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-['Satoshi',sans-serif] text-[14px] md:text-[15px] font-semibold tracking-tight text-[#0f1012]">
                        {iconData.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
