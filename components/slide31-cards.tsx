"use client";

import { motion } from "framer-motion";
import { Users, Stethoscope, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide31CardsProps {
  isActive?: boolean;
  className?: string;
}

export default function Slide31Cards({ isActive = true, className }: Slide31CardsProps) {
  const psychologyRoles = [
    "Expectativas",
    "Motivação",
    "Compreensão",
    "Ambivalência",
    "Pressões externas",
    "Expressão de preferências",
  ];

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col justify-center gap-3.5 select-none font-['Satoshi',sans-serif] max-w-[800px] mx-auto my-auto",
        className
      )}
    >
      {/* =========================================================================
          CARD 1: Card Obsidian Escuro Apple — Tríade Deliberativa (Eixo 5)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="px-5 py-4 rounded-3xl bg-[#0f1012] text-white flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] border border-white/[0.08] flex-1 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#8a2f3f]/18 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-['Urbanist',sans-serif]">
              Tríade Deliberativa
            </span>
            <span className="text-[14px] font-semibold text-[#f8d7dc] bg-[#8a2f3f]/30 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/40">
              Eixo 5 · Síntese
            </span>
          </div>
          <h4 className="text-[21px] font-bold tracking-tight text-white font-['Urbanist',sans-serif] leading-tight">
            Na adolescência, tratar é compartilhar decisões
          </h4>
          <p className="text-[16px] font-medium text-zinc-300 mt-1 leading-snug">
            Três perspectivas distintas que necessitam de alinhamento e escuta mútua:
          </p>
        </div>

        {/* 3 Cartões da Tríade */}
        <div className="grid grid-cols-3 gap-2 my-2.5 relative z-10">
          <div className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <Stethoscope className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-zinc-400 font-['Urbanist',sans-serif]">Equipe</span>
            </div>
            <p className="text-[15px] text-zinc-200 leading-snug font-medium m-0">
              “Qual resultado técnico podemos alcançar?”
            </p>
          </div>

          <div className="p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-zinc-400 font-['Urbanist',sans-serif]">Família</span>
            </div>
            <p className="text-[15px] text-zinc-200 leading-snug font-medium m-0">
              “O que acreditamos ser melhor para o futuro?”
            </p>
          </div>

          <div className="p-2.5 rounded-2xl bg-[#8a2f3f]/20 border border-[#8a2f3f]/40 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1">
              <User className="w-3.5 h-3.5 text-[#f8a5b2] shrink-0" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-[#f8a5b2] font-['Urbanist',sans-serif]">Adolescente</span>
            </div>
            <p className="text-[15px] text-white leading-snug font-semibold m-0">
              “O que é realmente importante para mim?”
            </p>
          </div>
        </div>

        <p className="text-[16px] text-zinc-300 leading-snug m-0 relative z-10 font-normal">
          A condição craniofacial muda o desenvolvimento porque introduz experiências adicionais que interagem com cada etapa da trajetória.
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 relative z-10">
          <span className="text-[16px] font-semibold text-zinc-400">Princípio decisório:</span>
          <span className="text-[16px] font-bold text-[#f8d7dc] bg-[#8a2f3f]/25 px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/35">
            Autonomia crescente ≠ decidir sozinho
          </span>
        </div>
      </motion.div>

      {/* =========================================================================
          CARD 2: Card Clean Light Apple — O Papel da Psicologia (Eixo 5)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="px-5 py-4 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1"
      >
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[14px] font-bold uppercase tracking-[0.14em] text-[#8a2f3f] bg-[#8a2f3f]/[0.10] px-2.5 py-0.5 rounded-full border border-[#8a2f3f]/25 font-['Urbanist',sans-serif]">
              Atuação Interdisciplinar
            </span>
            <span className="text-[15px] font-semibold text-[#5f6062]">
              Esclarecimento Clínico
            </span>
          </div>
          <h4 className="text-[21px] font-bold text-[#0f1012] tracking-tight font-['Urbanist',sans-serif] leading-tight">
            A psicologia no processo decisório
          </h4>
          <p className="text-[16px] text-[#5f6062] mt-0.5">
            Papel de escuta clínica, alinhamento de expectativas e mediação reflexiva:
          </p>
        </div>

        {/* Chips de Dimensões que a Psicologia Esclarece */}
        <div className="flex flex-wrap gap-1.5 my-2">
          {psychologyRoles.map((role) => (
            <span
              key={role}
              className="px-2.5 py-1 rounded-xl bg-[#f8f9fa] border border-black/[0.06] text-[15px] font-medium text-[#2d2e30]"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Nota de Alerta Ético / Delimitação de Função */}
        <div className="p-2.5 rounded-2xl bg-[#fdf5f6] border border-[#8a2f3f]/20 my-1">
          <p className="text-[16px] text-[#8a2f3f] font-semibold m-0 leading-snug">
            Sem atribuir à Psicologia a função de autorizar ou vetar cirurgia: a escuta apoia a deliberação conjunta.
          </p>
        </div>

        <p className="text-[15px] text-[#6a6b6d] italic m-0 pt-2 border-t border-black/[0.05] flex items-center justify-between">
          <span>Desafio do protocolo clínico:</span>
          <span className="font-semibold text-[#8a2f3f]">Saber quando, onde e para quem agir</span>
        </p>
      </motion.div>
    </div>
  );
}
