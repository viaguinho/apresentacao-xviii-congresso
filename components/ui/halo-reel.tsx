"use client";

import * as React from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

/* ── Halo Reel 3D ────────────────────────────────────────────────
 * Supports both horizontal rings and vertical 3D reels entering the slide.
 * When orientation="vertical", cards travel along a vertical arc with
 * 3D perspective, depth (Z), and angled orientation (rotateY/rotateX),
 * creating the physical impression that the cards are entering
 * into the presentation stage from the right edge.
 * ─────────────────────────────────────────────────────────────── */

export type HaloReelItem = {
  /** Image for the card. Omit it and the card falls back to the text face. */
  src?: string;
  alt?: string;
  bgColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
};

export interface HaloReelProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  items: HaloReelItem[];
  orientation?: "horizontal" | "vertical";
  /** Card width in px at the front of the ring. @default 220 */
  cardWidth?: number;
  /** Card height in px at the front of the ring. @default 100 */
  cardHeight?: number;
  /** Scale of the card at the far side of the ring. @default 0.5 */
  minScale?: number;
  /** Horizontal radius as a fraction of the stage width. @default 0.35 */
  radiusXRatio?: number;
  /** Where the ellipse is centred across the stage. @default 0.5 */
  centerXRatio?: number;
  /** Vertical radius as a fraction of the stage height. @default 0.4 */
  radiusYRatio?: number;
  /** Rotate continuously without stops. @default true */
  continuous?: boolean;
  /** Duration in seconds for one full 360 degree loop in continuous mode. @default 18 */
  continuousDuration?: number;
  /** Rotate one card forward on a timer. @default true */
  autoPlay?: boolean;
  /** Time (ms) a card is held at the front before the next step (step mode). @default 1200 */
  holdDuration?: number;
  /** Duration (ms) of one step (step mode). @default 700 */
  stepDuration?: number;
  /** Hold the autoplay while a pointer rests on a card. @default true */
  pauseOnHover?: boolean;
  /** Spin the ring by dragging it. @default true */
  draggable?: boolean;
  /** Gap between neighbouring cards. @default 1.25 */
  spread?: number;
  /** Ceiling on the number of cards drawn around the ring. @default 64 */
  maxCards?: number;
  /** Multiplier on the drag rotation. @default 1 */
  dragSensitivity?: number;
  /** Angle in degrees for rotateY perspective inward into the slide. @default -20 */
  perspectiveAngleY?: number;
  /** Distance (px) foreground cards push into the slide along X. @default 60 */
  slideInDepthX?: number;
  /** Whether the reel is currently active on screen (pauses animation when false). @default true */
  isActive?: boolean;
  /** Center label if desired. */
  /** Initial rotation angle offset in radians. @default 0 */
  initialRotation?: number;
  centerLabel?: React.ReactNode;
  showCenterLabel?: boolean;
}

const TAU = Math.PI * 2;

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

export function HaloReel({
  items,
  orientation = "vertical",
  cardWidth = 260,
  cardHeight = 100,
  minScale = 0.7,
  radiusXRatio = 0.3,
  centerXRatio = 0.5,
  radiusYRatio = 0.28,
  continuous = true,
  continuousDuration = 18,
  isActive = true,
  autoPlay = true,
  holdDuration = 1200,
  stepDuration = 700,
  pauseOnHover = true,
  draggable = true,
  spread = 1,
  maxCards = 64,
  dragSensitivity = 1,
  perspectiveAngleY = 0,
  slideInDepthX = 0,
  initialRotation = 0,
  centerLabel,
  showCenterLabel = false,
  className,
  style,
  ...props
}: HaloReelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const count = items.length;

  const rotation = useMotionValue(initialRotation);
  const draggingRef = React.useRef(false);
  const hoverRef = React.useRef(false);
  const controlsRef = React.useRef<ReturnType<typeof animate> | null>(null);

  const [size, setSize] = React.useState({ w: 0, h: 0 });
  React.useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const measure = () => {
      const w = node.offsetWidth || node.clientWidth || (node.parentElement ? node.parentElement.clientWidth : 0);
      const h = node.offsetHeight || node.clientHeight || (node.parentElement ? node.parentElement.clientHeight : 0);
      if (w > 0 && h > 0) {
        setSize({ w, h });
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    if (node.parentElement) observer.observe(node.parentElement);
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 300);
    const t3 = setTimeout(measure, 800);
    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const stageWidth = size.w || 640;
  const stageHeight = size.h || 540;
  const radiusX = stageWidth * radiusXRatio;
  const radiusY = stageHeight * radiusYRatio;

  // Strictly 1 slot per unique item: prevents any duplicate logos from appearing in the reel
  const slots = count;
  const step = slots ? TAU / slots : 0;

  const fit = clamp(
    Math.min(
      stageWidth / (radiusX + cardWidth),
      stageHeight / (2 * radiusY + cardHeight),
    ),
    0.6,
    1,
  );
  const cardW = cardWidth * fit;
  const cardH = cardHeight * fit;

  /* ── Continuous & Step Autoplay ─────────────────────────────── */

  const startAnimation = React.useCallback(() => {
    if (!autoPlay || reduceMotion || !count) return;
    if (draggingRef.current || (pauseOnHover && hoverRef.current)) return;

    if (continuous) {
      controlsRef.current?.stop();
      const current = rotation.get();
      // Animate rotation moving upwards smoothly
      controlsRef.current = animate(rotation, current - TAU, {
        duration: continuousDuration,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      controlsRef.current?.stop();
      let timer: number;
      const tick = () => {
        timer = window.setTimeout(() => {
          if (draggingRef.current || (pauseOnHover && hoverRef.current)) {
            tick();
            return;
          }
          controlsRef.current = animate(rotation, rotation.get() - step, {
            duration: stepDuration / 1000,
            ease: [0.4, 0, 0.2, 1],
            onComplete: tick,
          });
        }, holdDuration);
      };
      tick();
      return () => clearTimeout(timer);
    }
  }, [
    autoPlay,
    continuous,
    continuousDuration,
    count,
    holdDuration,
    pauseOnHover,
    reduceMotion,
    rotation,
    step,
    stepDuration,
  ]);

  React.useEffect(() => {
    if (!isActive) {
      controlsRef.current?.stop();
      return;
    }
    const cleanup = startAnimation();
    return () => {
      if (typeof cleanup === "function") cleanup();
      controlsRef.current?.stop();
    };
  }, [isActive, startAnimation]);

  /* ── Drag interaction ────────────────────────────────────────── */

  const dragRef = React.useRef({ left: 0, top: 0, lastY: 0, angle: 0 });

  const pointerAngle = (e: React.PointerEvent) => {
    const { left, top } = dragRef.current;
    return Math.atan2(
      (e.clientY - top - stageHeight / 2) / (radiusY || 1),
      (e.clientX - left - stageWidth * centerXRatio) / (radiusX || 1),
    );
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable || (e.pointerType === "mouse" && e.button !== 0)) return;
    controlsRef.current?.stop();
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = {
      left: rect.left,
      top: rect.top,
      lastY: e.clientY,
      angle: pointerAngle(e),
    };
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    if (orientation === "vertical") {
      const deltaY = e.clientY - dragRef.current.lastY;
      dragRef.current.lastY = e.clientY;
      // Convert vertical drag delta into rotation angle
      const deltaRot = (deltaY / (radiusY || 1)) * dragSensitivity;
      rotation.set(rotation.get() + deltaRot);
    } else {
      const angle = pointerAngle(e);
      const delta =
        ((angle - dragRef.current.angle + Math.PI * 3) % TAU) - Math.PI;
      dragRef.current.angle = angle;
      rotation.set(rotation.get() + delta * dragSensitivity);
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    if (!continuous) {
      const snapped = Math.round(rotation.get() / step) * step;
      animate(rotation, snapped, {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        onComplete: startAnimation,
      });
    } else {
      startAnimation();
    }
  };

  const handlePointerEnter = () => {
    hoverRef.current = true;
    if (pauseOnHover && controlsRef.current) {
      controlsRef.current.stop();
    }
  };

  const handlePointerLeave = () => {
    hoverRef.current = false;
    if (pauseOnHover) {
      startAnimation();
    }
  };

  if (!count) return null;

  return (
    <div
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={props["aria-label"] ?? "Carrossel de parceiros"}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "relative w-full touch-pan-y select-none overflow-hidden outline-none",
        draggable && "cursor-grab active:cursor-grabbing",
        className,
      )}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
        ...style,
      }}
      {...props}
    >
      {showCenterLabel && centerLabel ? (
        <div
          className="pointer-events-none absolute inset-y-0 z-0 flex items-center justify-center px-4 text-center"
          style={{
            left: stageWidth * centerXRatio + radiusX + cardW / 2,
            right: 0,
          }}
        >
          {centerLabel}
        </div>
      ) : null}

      {Array.from({ length: slots }, (_, i) => (
        <WheelCard
          key={i}
          item={items[i % count]}
          decorative={i >= count}
          index={i}
          step={step}
          rotation={rotation}
          radiusX={radiusX}
          radiusY={radiusY}
          centerXRatio={centerXRatio}
          minScale={minScale}
          width={cardW}
          height={cardH}
          orientation={orientation}
          perspectiveAngleY={perspectiveAngleY}
          slideInDepthX={slideInDepthX}
        />
      ))}
    </div>
  );
}

/* ── Card Component with 3D Entrance Perspective ───────────────── */

function WheelCard({
  item,
  index,
  step,
  rotation,
  radiusX,
  radiusY,
  centerXRatio,
  minScale,
  width,
  height,
  decorative,
  orientation,
  perspectiveAngleY,
  slideInDepthX,
}: {
  item: HaloReelItem;
  index: number;
  step: number;
  rotation: MotionValue<number>;
  radiusX: number;
  radiusY: number;
  centerXRatio: number;
  minScale: number;
  width: number;
  height: number;
  decorative: boolean;
  orientation: "horizontal" | "vertical";
  perspectiveAngleY: number;
  slideInDepthX: number;
}) {
  const theta = useTransform(rotation, (r) => index * step + r);
  const cos = useTransform(theta, (t) => Math.cos(t));
  const sin = useTransform(theta, (t) => Math.sin(t));

  // Vertical movement along Y axis
  const y = useTransform(sin, (s) => s * radiusY);

  // When card is in front (cos > 0), it projects towards the left (into the slide)
  // When at the back (cos < 0), it recedes deeper to the right edge
  const x = useTransform(cos, (c) => {
    if (orientation === "vertical") {
      if (!slideInDepthX) return 0;
      return (c - 0.2) * -slideInDepthX;
    }
    return c * radiusX;
  });

  // 3D Depth (Z translation)
  const z = useTransform(cos, (c) => c * 60);

  // Dynamic scale based on front/back depth
  const scale = useTransform(
    cos,
    (c) => minScale + (1 - minScale) * Math.max(0, c),
  );

  // Opacity: cards at the back (cos <= 0) are completely hidden (0).
  // In the foreground (cos > 0), they smoothly fade in at the bottom (0 -> 1 between cos 0 and 0.35)
  // stay 100% crisp in the front, and smoothly fade out at the top.
  const opacity = useTransform(cos, (c) => {
    if (c <= 0) return 0;
    return Math.min(1, c / 0.35);
  });

  const pointerEvents = useTransform(cos, (c) => (c > 0.2 ? "auto" : "none"));

  // Subtle tangential curve along X for vertical motion
  const rotateX = useTransform(sin, (s) => (orientation === "vertical" ? s * -6 : 0));

  // Frontal: rotateY is 0 (or uses perspectiveAngleY if explicitly specified)
  const rotateY = orientation === "vertical" ? (perspectiveAngleY || 0) : 0;

  const zIndex = useTransform(cos, (c) => Math.round((c + 1) * 500));

  return (
    <motion.div
      role={decorative ? undefined : "group"}
      aria-roledescription={decorative ? undefined : "slide"}
      aria-hidden={decorative || undefined}
      style={{
        x,
        y,
        z,
        scale,
        opacity,
        rotateX,
        rotateY,
        zIndex,
        width,
        height,
        left: `${centerXRatio * 100}%`,
        top: "50%",
        marginLeft: -width / 2,
        marginTop: -height / 2,
        transformStyle: "preserve-3d",
        pointerEvents: pointerEvents as any,
      }}
      className="absolute flex items-center justify-center bg-transparent border-0 shadow-none select-none"
    >
      {item.src ? (
        <div className="flex h-full w-full items-center justify-center p-2 bg-transparent">
          <img
            src={item.src}
            alt={decorative ? "" : (item.alt ?? "")}
            draggable={false}
            className="pointer-events-none max-h-full max-w-full select-none object-contain drop-shadow-sm filter contrast-[1.02]"
          />
        </div>
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1 bg-card p-3 text-center text-card-foreground"
          style={{
            backgroundColor: item.bgColor,
            color: item.textColor,
          }}
        >
          {item.title ? (
            <span className="text-xl font-bold leading-none">
              {item.title}
            </span>
          ) : null}
          {item.subtitle ? (
            <span className="text-[0.65rem] uppercase tracking-[0.2em] opacity-70">
              {item.subtitle}
            </span>
          ) : null}
        </div>
      )}
    </motion.div>
  );
}

export default HaloReel;
