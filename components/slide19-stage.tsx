'use client'

import AdvancedStats from './ui/advanced-stats'

export interface Slide19StageProps {
  isActive?: boolean
}

export default function Slide19Stage({ isActive = true }: Slide19StageProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <AdvancedStats isActive={isActive} />
    </div>
  )
}
