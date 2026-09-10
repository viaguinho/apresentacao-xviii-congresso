import type { RefObject, ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TimelineAnimationProps extends HTMLMotionProps<'div'> {
  animationNum?: number
  timelineRef?: RefObject<HTMLDivElement | null>
  children: ReactNode
  className?: string
  isActive?: boolean
}

export function TimelineAnimation({
  animationNum = 1,
  timelineRef: _timelineRef,
  children,
  className,
  isActive = true,
  ...props
}: TimelineAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.985 }}
      transition={{
        duration: 0.52,
        delay: Math.max(0, (animationNum - 1) * 0.08),
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn('transition-all duration-300', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
