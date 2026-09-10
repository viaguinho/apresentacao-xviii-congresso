import React from "react"
import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  pathClassName?: string
  strokeWidth?: number
  strokeDasharray?: string
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  pathClassName,
  strokeWidth = 1,
  strokeDasharray,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className={cn("stroke-black/[0.08] dark:stroke-white/10", pathClassName)}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] group-hover:[animation-play-state:paused] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}
