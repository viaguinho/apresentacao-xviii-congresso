"use client";

import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";
import { Users, School, HeartPulse, Globe2, BookOpen, Building2 } from "lucide-react";

interface WordItem {
  text: string;
  icon?: React.ReactNode;
  angle: number;
}

interface OrbitConfig {
  size: string;
  duration: number;
  items: WordItem[];
}

const defaultOrbits: OrbitConfig[] = [
  {
    // Inner Ring: Cuidadores e Família (Microssistema) - Diameter 380px
    size: "w-[380px] h-[380px]",
    duration: 22,
    items: [
      {
        text: "cuidadores e família",
        angle: -50,
        icon: <Users className="w-4 h-4 text-[#0071e3]" />,
      },
      {
        text: "vínculos de apego",
        angle: 65,
        icon: <Users className="w-4 h-4 text-blue-500" />,
      },
    ],
  },
  {
    // Middle Ring: Escola · Pares · Serviços de Saúde (Mesossistema) - Diameter 540px
    size: "w-[540px] h-[540px]",
    duration: 30,
    items: [
      {
        text: "escola · pares · serviços de saúde",
        angle: -15,
        icon: <School className="w-4 h-4 text-[#0071e3]" />,
      },
      {
        text: "pares & mediação",
        angle: -105,
        icon: <Users className="w-4 h-4 text-indigo-500" />,
      },
      {
        text: "serviços de saúde",
        angle: 80,
        icon: <HeartPulse className="w-4 h-4 text-rose-500" />,
      },
    ],
  },
  {
    // Outer Ring: Comunidade · Cultura · Sociedade (Macrossistema) - Diameter 700px
    // (raio 350 + meio rótulo ≈ 110px cabe na coluna central de ~900px sem corte lateral)
    size: "w-[700px] h-[700px]",
    duration: 38,
    items: [
      {
        text: "comunidade · cultura · sociedade",
        angle: -40,
        icon: <Globe2 className="w-4 h-4 text-[#0071e3]" />,
      },
      {
        text: "cultura & valores",
        angle: 50,
        icon: <BookOpen className="w-4 h-4 text-sky-500" />,
      },
      {
        text: "sociedade & políticas",
        angle: 135,
        icon: <Building2 className="w-4 h-4 text-slate-600" />,
      },
    ],
  },
];

interface OrbitingCirclesGlobeProps {
  className?: string;
  orbits?: OrbitConfig[];
}

export function OrbitingCirclesGlobe({
  className = "",
  orbits = defaultOrbits,
}: OrbitingCirclesGlobeProps) {
  return (
    <div className={`relative w-full h-[390px] overflow-hidden flex justify-center select-none ${className}`}>
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

      {/* Center 3D particle globe from reference */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-[300px] h-[300px] z-10">
        <ParticleSphereAnimation particleCount={3400} />
      </div>

      {/* Floating Center Badge at the Top Apex of the Globe */}
      <div className="absolute bottom-[160px] left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
        <div className="px-3.5 py-1 rounded-full bg-white/95 border border-blue-500/30 shadow-[0_4px_16px_rgba(0,113,227,0.16)] backdrop-blur-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
          <span className="font-['Urbanist',sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#0071e3]">
            criança em mudança
          </span>
        </div>
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-[15] rounded-full border border-slate-200/80 dark:border-slate-700/60 pointer-events-none ${orbit.size}`}
          >
            {orbit.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-28 origin-bottom flex flex-col justify-start items-center pointer-events-auto"
                style={
                  {
                    width: "224px",
                    "--start-angle": `${item.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="-mt-4 relative z-10 transition-transform duration-200 hover:scale-105"
                  style={
                    {
                      "--counter-offset": `${-item.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 shadow-[0_3px_12px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-default select-none whitespace-nowrap">
                    {item.icon && <span className="shrink-0 flex items-center">{item.icon}</span>}
                    <span className="font-['Satoshi',sans-serif] text-[15px] font-semibold tracking-tight text-slate-800">
                      {item.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative w-full h-[390px] overflow-hidden flex justify-center">
      <OrbitingCirclesGlobe />
    </div>
  );
}
