"use client"

import { motion } from "framer-motion"
import { Stethoscope } from "lucide-react"

interface Slide12bClinicalProps {
  isActive?: boolean
}

/** Continuação do slide 12: os três cards clínicos (antes empilhados na coluna direita) ganham a tela inteira.
 *  O princípio risco ≠ desfecho abre em faixa de largura total; as duas leituras clínicas seguem lado a lado. */
export default function Slide12bClinical({ isActive = true }: Slide12bClinicalProps) {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 },
    transition: { duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <div
      className="w-full h-full grid gap-7 items-stretch font-['Satoshi',sans-serif] text-[#0f1012]"
      style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto minmax(0, 1fr)" }}
    >
      {/* CARD 1: Equação Conceitual (risco ≠ desfecho) — faixa de largura total */}
      <motion.div
        {...enter(0)}
        className="col-span-2 min-w-0 px-10 py-8 rounded-3xl bg-white border border-[#0071e3]/20 shadow-[0_6px_24px_rgba(0,0,0,0.04)] flex items-center gap-12"
      >
        <div className="shrink-0 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#0071e3] bg-[#0071e3]/10 px-3 py-1 rounded-full border border-[#0071e3]/20">
              Princípio risco / desfecho
            </span>
            <span className="text-[18px] font-semibold text-[#5f6062]">
              Probabilístico
            </span>
          </div>
          <p className="m-0 font-['Urbanist',sans-serif] text-[80px] font-bold tracking-tight text-[#0f1012] leading-none">
            risco <span className="text-[#0071e3] font-black">≠</span> desfecho
          </p>
        </div>
        <div className="self-stretch w-px bg-[#0071e3]/15 shrink-0" />
        <p className="m-0 text-[28px] font-medium text-[#3f4042] leading-[1.45]">
          O risco modifica probabilidades; a trajetória emerge da interação entre vulnerabilidades, recursos e experiências.
        </p>
      </motion.div>

      {/* CARD 2: Aplicação Clínica */}
      <motion.div
        {...enter(0.05)}
        className="min-w-0 px-8 py-7 rounded-3xl bg-[#e8f2fc] border border-[#0071e3]/25 shadow-[0_4px_18px_rgba(0,0,0,0.03)] flex flex-col"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.08em] text-[#0071e3] bg-white px-3 py-1 rounded-lg border border-[#0071e3]/20">
            <Stethoscope className="w-5 h-5 text-[#0071e3]" />
            Aplicação Clínica
          </span>
          <span className="text-[16px] font-bold text-[#0071e3]">
            Speltz (1994) · McDorman (2024)
          </span>
        </div>
        <h4 className="text-[34px] font-bold tracking-tight text-[#0f1012] mt-6 leading-tight">
          Nas anomalias craniofaciais
        </h4>
        <p className="text-[25px] font-medium text-[#0f1012] mt-4 leading-[1.45]">
          É uma condição de risco potencial, não um destino psicossocial. O risco deve ser compreendido no contexto de múltiplas condições individuais e familiares.
        </p>

        <div className="mt-auto px-6 py-5 bg-white/90 rounded-2xl border border-[#0071e3]/15">
          <p className="text-[23px] font-medium text-[#2d2e30] leading-[1.45] m-0">
            Desfechos favoráveis são a norma quando suportes ecológicos e co-regulação protetora estão presentes.
          </p>
        </div>
      </motion.div>

      {/* CARD 3: Translação Diagnóstica (Card Preto) */}
      <motion.div
        {...enter(0.1)}
        className="min-w-0 px-8 py-7 rounded-3xl bg-[#0f1012] text-white border border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-[16px] font-bold uppercase tracking-[0.08em] text-zinc-400">
            Translação Diagnóstica
          </span>
          <span className="text-[16px] font-semibold text-zinc-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Mudança de Pergunta
          </span>
        </div>
        <h4 className="text-[34px] font-bold tracking-tight text-white leading-tight mt-6">
          Raciocínio clínico em trajetória
        </h4>

        <div className="flex-1 flex flex-col justify-center gap-4 my-5">
          <div className="px-5 py-4 bg-zinc-900/90 rounded-xl border border-zinc-800 flex flex-col gap-1.5">
            <span className="text-[16px] font-bold uppercase tracking-wide text-rose-400">
              A pergunta tradicional deixa de ser:
            </span>
            <p className="text-[24px] text-zinc-200 italic m-0 font-medium leading-snug">
              “Esta condição produzirá sofrimento?”
            </p>
          </div>

          <div className="px-5 py-4 bg-[#0071e3]/20 rounded-xl border border-[#0071e3]/45 flex flex-col gap-1.5">
            <span className="text-[16px] font-bold uppercase tracking-wide text-[#38bdf8]">
              e passa a ser:
            </span>
            <p className="text-[24px] text-white font-medium m-0 leading-snug">
              “Quais fatores aumentam ou reduzem o risco nesta criança, neste momento?”
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-800 text-[19px]">
          <span className="text-zinc-400">Objetivo Clínico:</span>
          <span className="font-bold text-emerald-400">
            Alvos concretos de intervenção
          </span>
        </div>
      </motion.div>
    </div>
  )
}
