"use client"

import { motion } from "framer-motion"
import {  } from "lucide-react"
import { CognitivePlaceCard } from "@/components/ui/card-22"

interface Slide15CognitiveCardProps {
  isActive?: boolean
}

export default function Slide15CognitiveCard({ isActive = true }: Slide15CognitiveCardProps) {
  return (
    <motion.div
      className="w-full flex"
      initial={{ opacity: 0, y: 25 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <CognitivePlaceCard
        className="w-full"
        title="Atenção, memória e linguagem"
        subtitle="Associação bidirecional • Primeira Infância"
        overviewHeading="Síntese Científica"
        overview="Já no primeiro ano ocorrem mudanças importantes em atenção sustentada e seletiva, acompanhadas de melhora em reconhecimento e em formas iniciais de memória de trabalho. Linguagem e funções executivas desenvolvem-se de modo associado, sem direção causal única."
        initialVariant="wave"
      />
    </motion.div>
  )
}
