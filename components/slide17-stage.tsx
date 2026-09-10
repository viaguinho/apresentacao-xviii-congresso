import React from 'react'
import IncidentReportCard from './ui/area-chart-1'

interface Slide17StageProps {
  isActive?: boolean
}

export const Slide17Stage: React.FC<Slide17StageProps> = ({ isActive: _isActive = true }) => {
  return (
    <div className="w-full flex flex-col">
      <IncidentReportCard />
    </div>
  )
}

export default Slide17Stage
