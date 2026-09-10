"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { Move } from "lucide-react"

export interface BoxPosition {
  x: number
  y: number
  width: number
  height?: number | "auto"
}

interface DraggableResizableBoxProps {
  id: string
  label: string
  position: BoxPosition
  isEditing: boolean
  minWidth?: number
  minHeight?: number
  onChange: (pos: BoxPosition) => void
  children: React.ReactNode
  className?: string
}

type ResizeDirection = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw"

export function DraggableResizableBox({
  id,
  label,
  position,
  isEditing,
  minWidth = 240,
  minHeight = 60,
  onChange,
  children,
  className = "",
}: DraggableResizableBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [activeResize, setActiveResize] = useState<ResizeDirection | null>(null)

  // Start dragging
  const handleDragStart = useCallback(
    (e: React.PointerEvent) => {
      if (!isEditing) return
      // Don't drag if clicking a resize handle
      if ((e.target as HTMLElement).dataset.handle) return

      e.preventDefault()
      e.stopPropagation()
      setIsDragging(true)

      const startX = e.clientX
      const startY = e.clientY
      const origX = position.x
      const origY = position.y

      const onPointerMove = (moveEvent: PointerEvent) => {
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY
        onChange({
          ...position,
          x: Math.round(origX + dx),
          y: Math.round(origY + dy),
        })
      }

      const onPointerUp = () => {
        setIsDragging(false)
        window.removeEventListener("pointermove", onPointerMove)
        window.removeEventListener("pointerup", onPointerUp)
      }

      window.addEventListener("pointermove", onPointerMove)
      window.addEventListener("pointerup", onPointerUp)
    },
    [isEditing, position, onChange]
  )

  // Start resizing
  const handleResizeStart = useCallback(
    (dir: ResizeDirection, e: React.PointerEvent) => {
      if (!isEditing) return
      e.preventDefault()
      e.stopPropagation()
      setActiveResize(dir)

      const startX = e.clientX
      const startY = e.clientY
      const origPos = { ...position }
      const currentHeight =
        boxRef.current?.getBoundingClientRect().height ||
        (typeof origPos.height === "number" ? origPos.height : 120)

      const onPointerMove = (moveEvent: PointerEvent) => {
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        let newX = origPos.x
        let newY = origPos.y
        let newWidth = origPos.width
        let newHeight = currentHeight

        if (dir.includes("e")) {
          newWidth = Math.max(minWidth, origPos.width + dx)
        }
        if (dir.includes("w")) {
          const proposedWidth = origPos.width - dx
          if (proposedWidth >= minWidth) {
            newWidth = proposedWidth
            newX = origPos.x + dx
          }
        }
        if (dir.includes("s")) {
          newHeight = Math.max(minHeight, currentHeight + dy)
        }
        if (dir.includes("n")) {
          const proposedHeight = currentHeight - dy
          if (proposedHeight >= minHeight) {
            newHeight = proposedHeight
            newY = origPos.y + dy
          }
        }

        onChange({
          x: Math.round(newX),
          y: Math.round(newY),
          width: Math.round(newWidth),
          height: Math.round(newHeight),
        })
      }

      const onPointerUp = () => {
        setActiveResize(null)
        window.removeEventListener("pointermove", onPointerMove)
        window.removeEventListener("pointerup", onPointerUp)
      }

      window.addEventListener("pointermove", onPointerMove)
      window.addEventListener("pointerup", onPointerUp)
    },
    [isEditing, position, minWidth, minHeight, onChange]
  )

  return (
    <div
      ref={boxRef}
      id={`box-${id}`}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${position.width}px`,
        height:
          position.height && position.height !== "auto"
            ? `${position.height}px`
            : "auto",
        zIndex: isDragging || activeResize ? 50 : isEditing ? 30 : 10,
      }}
      className={`transition-shadow ${
        isEditing
          ? "cursor-grab select-none ring-2 ring-blue-500/70 ring-offset-2 ring-offset-white/80 rounded-2xl bg-white/5"
          : ""
      } ${isDragging ? "cursor-grabbing opacity-90 shadow-2xl" : ""} ${className}`}
      onPointerDown={handleDragStart}
    >
      {/* Editing Badges & Drag Header */}
      {isEditing && (
        <div className="absolute -top-7 left-0 right-0 flex items-center justify-between px-2 py-0.5 rounded-t-lg bg-blue-600 text-white text-[11px] font-medium shadow-md pointer-events-auto select-none z-50">
          <span className="flex items-center gap-1 font-['Urbanist'] font-bold">
            <Move className="h-3 w-3" />
            {label}
          </span>
          <span className="text-[10px] opacity-85 font-mono">
            {position.width}px × {boxRef.current?.offsetHeight || position.height || "auto"}px
          </span>
        </div>
      )}

      {/* Box Content */}
      <div className="w-full h-full pointer-events-auto">{children}</div>

      {/* Resize Handles (Only in Edit Mode) */}
      {isEditing && (
        <>
          {/* 4 Corner Handles */}
          <div
            data-handle="true"
            className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-nwse-resize z-50 hover:scale-125 transition-transform"
            onPointerDown={(e) => handleResizeStart("nw", e)}
          />
          <div
            data-handle="true"
            className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-nesw-resize z-50 hover:scale-125 transition-transform"
            onPointerDown={(e) => handleResizeStart("ne", e)}
          />
          <div
            data-handle="true"
            className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-nesw-resize z-50 hover:scale-125 transition-transform"
            onPointerDown={(e) => handleResizeStart("sw", e)}
          />
          <div
            data-handle="true"
            className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-md cursor-nwse-resize z-50 hover:scale-125 transition-transform"
            onPointerDown={(e) => handleResizeStart("se", e)}
          />

          {/* 4 Edge Handles */}
          <div
            data-handle="true"
            className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-6 bg-blue-500 border border-white rounded-full shadow-sm cursor-ew-resize z-50"
            onPointerDown={(e) => handleResizeStart("w", e)}
          />
          <div
            data-handle="true"
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-6 bg-blue-500 border border-white rounded-full shadow-sm cursor-ew-resize z-50"
            onPointerDown={(e) => handleResizeStart("e", e)}
          />
          <div
            data-handle="true"
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-6 bg-blue-500 border border-white rounded-full shadow-sm cursor-ns-resize z-50"
            onPointerDown={(e) => handleResizeStart("n", e)}
          />
          <div
            data-handle="true"
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-6 bg-blue-500 border border-white rounded-full shadow-sm cursor-ns-resize z-50"
            onPointerDown={(e) => handleResizeStart("s", e)}
          />
        </>
      )}
    </div>
  )
}
