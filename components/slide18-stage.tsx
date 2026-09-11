import React from 'react'
import SleepTrackerCard from './ui/sleep-tracker-card'
import Slide18Cards from './slide18-cards'

export interface Slide18StageProps {
  isActive?: boolean
}

export const Slide18Stage: React.FC<Slide18StageProps> = ({ isActive = true }) => {
  return (
    <div className="grid grid-cols-12 gap-8 items-center w-full">
      {/* Coluna Esquerda: Gráfico Meta-análise Apple Health */}
      <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-3">
        <SleepTrackerCard isActive={isActive} />
        <p className="font-['Satoshi'] text-[15px] font-normal leading-relaxed text-[#6a6b6d] dark:text-gray-600">
          Escala de consistência da evidência, não de gravidade. Na meta-análise de Roberts et al. (29 estudos), linguagem foi o único domínio com déficit moderado, significativo, não heterogêneo e sem indicação de viés de publicação; revisões posteriores encontram resultados heterogêneos nos demais domínios.
        </p>
      </div>

      {/* Coluna Direita: Cards Dual (Padrão Slide 17) */}
      <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-2">
        <h3 className="font-['Urbanist'] text-[28px] font-bold tracking-tight text-[#0d606a] mb-1">
          Média do grupo ≠ destino individual
        </h3>
        <Slide18Cards isActive={isActive} />
      </div>
    </div>
  )
}

export default Slide18Stage
