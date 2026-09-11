"use client";

import React, { useState, useEffect } from "react";
import { Home, Users, Heart, Building2, User } from "lucide-react";
import { CircleMenu, type CircleMenuItem } from "@/components/ui/circle-menu";
import { cn } from "@/lib/utils";

interface Slide25OrbitProps {
  isActive?: boolean;
}

interface SocialSystem extends CircleMenuItem {
  id: string;
  label: string;
  subtitle: string;
  badge: string;
  color: string;
  icon: React.ReactNode;
  bgClass: string;
  borderClass: string;
  targetX: number;
  targetY: number;
}

export default function Slide25Orbit({ isActive = true }: Slide25OrbitProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Sincroniza com a ativação do slide
  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  // Animação automática em Loop com boa margem de tempo
  useEffect(() => {
    if (!isActive) return;

    let timer: NodeJS.Timeout;

    // Pausa o loop enquanto o usuário passa o cursor para leitura confortável
    if (!isHovered) {
      if (isOpen) {
        // Permanece aberto por 8 segundos (ampla margem para leitura completa)
        timer = setTimeout(() => {
          setIsOpen(false);
        }, 8000);
      } else {
        // Pausa recolhido por 2 segundos antes de reabrir
        timer = setTimeout(() => {
          setIsOpen(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [isActive, isOpen, isHovered]);

  // 4 Polos em cruz, dimensionados para caber na coluna esquerda (46fr ≈ 765px) sem invadir a margem:
  // - Amigos e Grupo / Escola e Comunidade: targetX = ±226px (cartões de 296px + hub de 128px + respiro)
  // - Família / Relações Afetivas: targetY = ∓170px (fora do hub, dentro dos 480px de altura)
  const systems: SocialSystem[] = [
    {
      id: "familia",
      label: "Família",
      subtitle: "Base primária & suporte seguro",
      badge: "Vínculo contínuo",
      color: "#6b4e83",
      icon: <Home className="w-5 h-5 text-[#6b4e83]" />,
      bgClass: "bg-[#6b4e83]/12",
      borderClass: "border-[#6b4e83]/25",
      targetX: 0,
      targetY: -170
    },
    {
      id: "amigos",
      label: "Amigos e Grupo",
      subtitle: "Normas de referência & validação",
      badge: "Pares · Nova referência",
      color: "#7c3aed",
      icon: <Users className="w-5 h-5 text-[#7c3aed]" />,
      bgClass: "bg-[#7c3aed]/12",
      borderClass: "border-[#7c3aed]/30",
      targetX: 226,
      targetY: 0
    },
    {
      id: "afetivas",
      label: "Relações Afetivas",
      subtitle: "Intimidade & novos vínculos",
      badge: "Novos laços",
      color: "#9333ea",
      icon: <Heart className="w-5 h-5 text-[#9333ea]" />,
      bgClass: "bg-[#9333ea]/12",
      borderClass: "border-[#9333ea]/25",
      targetX: 0,
      targetY: 170
    },
    {
      id: "escola",
      label: "Escola e Comunidade",
      subtitle: "Socialização secundária ampliada",
      badge: "Institucional",
      color: "#5b4270",
      icon: <Building2 className="w-5 h-5 text-[#5b4270]" />,
      bgClass: "bg-[#5b4270]/12",
      borderClass: "border-[#5b4270]/25",
      targetX: -226,
      targetY: 0
    }
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex h-[480px] w-full mx-auto items-center justify-center select-none font-['Satoshi',sans-serif]"
    >
      {/* Glow suave atmosférico concêntrico */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[360px] h-[360px] rounded-full bg-[#6b4e83]/[0.035] blur-3xl" />
        <div className="w-[220px] h-[220px] rounded-full bg-[#7c3aed]/[0.025] blur-2xl" />
      </div>

      {/* CircleMenu: Hub central e os 4 cartões com afastamento generoso e alinhamento em cruz */}
      <div className="relative z-10 flex items-center justify-center">
        <CircleMenu
          containerSize={480}
          containerRadius={{ rx: 226, ry: 170 }}
          itemSize={56}
          defaultOpen={true}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          items={systems}
          customTrigger={
            <div
              className={cn(
                "relative z-20 flex flex-col items-center justify-center w-[128px] h-[128px] rounded-full bg-white/95 border-2 shadow-[0_12px_36px_rgba(107,78,131,0.16)] backdrop-blur-md transition-all duration-300 hover:scale-105 group select-none cursor-pointer",
                isOpen
                  ? "border-[#6b4e83]/40 shadow-[0_12px_36px_rgba(107,78,131,0.22)]"
                  : "border-zinc-300 opacity-95"
              )}
            >
              {/* Ícone Jovem */}
              <div className="w-11 h-11 rounded-full bg-[#f1ecf5] border border-[#6b4e83]/20 flex items-center justify-center mb-1 text-[#6b4e83] shadow-inner group-hover:bg-[#6b4e83] group-hover:text-white transition-colors">
                <User className="w-5 h-5 stroke-[2.2]" />
              </div>

              {/* Título Central */}
              <span className="font-['Urbanist',sans-serif] text-[18px] font-extrabold tracking-[0.12em] text-[#0f1012] leading-tight">
                JOVEM
              </span>
              <span className="text-[14px] font-bold text-[#6b4e83] tracking-[0.06em] uppercase mt-1 leading-none">
                Identidade
              </span>
            </div>
          }
          renderItem={(itemData) => {
            const system = itemData as SocialSystem;

            return (
              <div
                className={cn(
                  "w-[296px] min-h-[84px] flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border shadow-[0_4px_22px_rgba(0,0,0,0.06)] backdrop-blur-md cursor-pointer transition-all duration-200 group hover:scale-105 hover:shadow-[0_8px_28px_rgba(107,78,131,0.18)] hover:border-[#6b4e83] shrink-0 box-border",
                  system.borderClass
                )}
              >
                {/* Ícone */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110",
                    system.bgClass
                  )}
                >
                  {system.icon}
                </div>

                {/* Textos sem cortes e com proporção padronizada */}
                <div className="flex flex-col text-left justify-center flex-1 min-w-0">
                  <span className="font-['Urbanist',sans-serif] text-[19px] font-bold text-[#0f1012] leading-tight whitespace-nowrap">
                    {system.label}
                  </span>
                  <span className="text-[15px] font-medium text-[#52525b] leading-tight mt-0.5">
                    {system.subtitle}
                  </span>
                  <span
                    className="text-[14px] font-bold uppercase tracking-wider mt-1.5 px-2 py-0.5 rounded w-fit leading-none whitespace-nowrap"
                    style={{
                      color: system.color,
                      backgroundColor: `color-mix(in srgb, ${system.color} 10%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${system.color} 22%, transparent)`
                    }}
                  >
                    {system.badge}
                  </span>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
