"use client";

import { useEffect, useRef } from "react";

interface ParticleSphereProps {
  className?: string;
  particleCount?: number;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  color: string;
  isWarm: boolean;
  twinkleSpeed: number;
  twinklePhase: number;
}

// Palette matching the reference image from 21st.dev:
// Cool sky/royal blues on top, warm amber/coral/cyan specks toward the lower equator
const COOL_COLORS = [
  "rgba(59, 130, 246, ",   // Blue 500
  "rgba(37, 99, 235, ",    // Blue 600
  "rgba(96, 165, 250, ",   // Blue 400
  "rgba(147, 197, 253, ",  // Blue 300
  "rgba(99, 102, 241, ",   // Indigo 500
  "rgba(129, 140, 248, ",  // Indigo 400
  "rgba(56, 189, 248, ",   // Sky 400
];

const WARM_COLORS = [
  "rgba(249, 115, 22, ",   // Orange 500
  "rgba(251, 146, 60, ",   // Orange 400
  "rgba(245, 158, 11, ",   // Amber 500
  "rgba(239, 68, 68, ",    // Red 500
  "rgba(16, 185, 129, ",   // Emerald 500
  "rgba(20, 184, 166, ",   // Teal 500
  "rgba(168, 85, 247, ",   // Purple 500
];

export default function ParticleSphereAnimation({
  className = "",
  particleCount = 3400,
}: ParticleSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 2));
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 2));

    // Generate ~3400 particles using Fibonacci sphere distribution
    const particles: Particle3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle ~2.39996 rad

    for (let i = 0; i < particleCount; i++) {
      // y goes from 1 (top of sphere) to -1 (bottom of sphere)
      const y = 1 - (i / (particleCount - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Color distribution matching reference image:
      // Lower hemisphere (y < 0.1) has scattered warm accent particles
      const isLower = y < 0.05;
      const hasWarmChance = isLower && Math.random() < 0.38 + Math.abs(Math.min(0, y)) * 0.42;

      let colorBase: string;
      let isWarm = false;
      if (hasWarmChance) {
        colorBase = WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)];
        isWarm = true;
      } else {
        colorBase = COOL_COLORS[Math.floor(Math.random() * COOL_COLORS.length)];
      }

      particles.push({
        x,
        y,
        z,
        baseRadius: 0.8 + Math.random() * 1.4,
        color: colorBase,
        isWarm,
        twinkleSpeed: 0.02 + Math.random() * 0.04,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    let angleY = 0;
    const angleX = 0.26; // Tilted slightly towards viewer for spherical depth
    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 2;
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const dpr = window.devicePixelRatio || 2;
      const centerX = width / 2;
      const centerY = height / 2;
      // Large sphere radius so it matches reference dome
      const sphereRadius = Math.min(width, height) * 0.44;

      // Rotate around Y-axis
      angleY += 0.0032;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Project particles to 2D screen coordinates
      const projected = particles.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        // Rotate around X (tilt)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective depth: -1 (back) to +1 (front)
        const depth = (z2 + 1) / 2; // 0 (back) to 1 (front)
        const scale = 0.82 + depth * 0.36;
        const px = centerX + x1 * sphereRadius * scale;
        const py = centerY - y2 * sphereRadius * scale; // Note: canvas Y is down

        // Limb brightening: particles near the edge (small |z2|) are denser
        const limbFactor = 1 - Math.abs(z2) * 0.4;

        return {
          px,
          py,
          z: z2,
          depth,
          scale,
          baseRadius: p.baseRadius,
          color: p.color,
          isWarm: p.isWarm,
          limbFactor,
          twinkle: Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.15,
        };
      });

      // Sort back-to-front so foreground particles render on top
      projected.sort((a, b) => a.z - b.z);

      // Draw interior soft luminous glow at center
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        sphereRadius * 0.1,
        centerX,
        centerY,
        sphereRadius * 0.95
      );
      glowGrad.addColorStop(0, "rgba(255, 255, 255, 0.75)");
      glowGrad.addColorStop(0.5, "rgba(240, 246, 255, 0.4)");
      glowGrad.addColorStop(0.85, "rgba(224, 238, 255, 0.1)");
      glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius * 0.92, 0, Math.PI * 2);
      ctx.fill();

      // Render each particle with exact lighting and alpha
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Skip particles that are too deep in the back
        if (p.depth < 0.12) continue;

        let alpha = 0.18 + p.depth * 0.72 + p.twinkle;
        alpha = Math.max(0.1, Math.min(1, alpha * p.limbFactor));

        const radius = (p.baseRadius * (0.65 + p.depth * 0.55)) * dpr;

        ctx.beginPath();
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha.toFixed(3)})`;
        ctx.fill();
      }

      // Bottom horizon fade: smooth gradient mask fading particles at bottom
      const fadeHeight = sphereRadius * 0.35;
      const fadeGrad = ctx.createLinearGradient(
        centerX,
        centerY + sphereRadius - fadeHeight,
        centerX,
        centerY + sphereRadius + 10
      );
      fadeGrad.addColorStop(0, "rgba(253, 253, 253, 0)");
      fadeGrad.addColorStop(0.7, "rgba(253, 253, 253, 0.7)");
      fadeGrad.addColorStop(1, "rgba(253, 253, 253, 1)");
      ctx.fillStyle = fadeGrad;
      ctx.fillRect(0, centerY + sphereRadius - fadeHeight, width, fadeHeight + 20);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* High-DPI 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
