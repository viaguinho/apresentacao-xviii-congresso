"use client"

import Slide15TimelinePills from "@/components/slide15-timeline-pills"
import { CognitivePlaceCard } from "@/components/ui/card-22"

interface Slide15StageProps {
  isActive?: boolean
}

export default function Slide15Stage({ isActive = true }: Slide15StageProps) {
  return (
    <div className="relative w-full h-full min-h-[920px] font-['Satoshi'] text-[#0f1012] select-none overflow-hidden">
      {/* 1. Header Box */}
      <div
        className="absolute"
        style={{ left: "96px", top: "92px", width: "1528px" }}
      >
        <p className="m-0 mb-2.5 text-[22px] font-semibold tracking-[0.12em] uppercase text-[#0d606a]">
          Eixo 2 · Desenvolvimento cognitivo
        </p>
        <h2 className="m-0 text-[44px] font-light tracking-[-1.2px] leading-[1.14]">
          0–5 anos: da atenção ao controle voluntário
        </h2>
        <p className="m-0 mt-3 text-[23px] font-normal leading-[1.45] text-[#454648] max-w-[1520px]">
          A criança passa progressivamente de reagir ao que captura sua atenção para manter, representar e controlar informação de forma intencional.
        </p>
      </div>

      {/* 2. Timeline Pills Diagram Box (Largura ajustada para 1040px, liberando coluna direita) */}
      <div
        className="absolute"
        style={{ left: "96px", top: "340px", width: "1040px", height: "395px" }}
      >
        <Slide15TimelinePills isActive={isActive} />
      </div>

      {/* 3. Cognitive Card Box (Centralizado verticalmente em relação ao gráfico em top: 320px) */}
      <div
        className="absolute z-20"
        style={{ left: "1176px", top: "312px", width: "500px" }}
      >
        <CognitivePlaceCard
          className="w-full"
          title="Atenção, Memória & Linguagem"
          subtitle="Associação bidirecional • Primeira Infância"
          overviewHeading="Síntese Científica"
          overview="Já no primeiro ano ocorrem mudanças importantes em atenção sustentada e seletiva, acompanhadas de melhora em reconhecimento e em formas iniciais de memória de trabalho. Linguagem e funções executivas desenvolvem-se de modo associado, sem direção causal única."
        />
      </div>

      {/* 4. Central Thesis Quote Plaque Box (Panorâmica Centralizada em top: 780px) */}
      <div
        className="absolute"
        style={{ left: "320px", top: "790px", width: "1280px" }}
      >
        <div className="flex flex-col justify-between p-6 sm:p-7 rounded-[20px] bg-gradient-to-br from-white/95 to-[#f4f8fc]/85 border border-[#0071e3]/15 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.06),0_2px_8px_-2px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0071e3] to-[#21C6E0]" />
          <span className="font-['Urbanist'] text-[15px] font-bold tracking-[0.14em] uppercase text-[#0d606a] mb-2 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
            Tese Central
          </span>
          <p className="m-0 text-[24px] font-medium leading-[1.38] tracking-[-0.3px] text-[#0f1012]">
            “A grande transformação não é apenas saber mais: é conseguir dirigir progressivamente a própria atividade mental.”
          </p>
        </div>
      </div>
    </div>
  )
}
