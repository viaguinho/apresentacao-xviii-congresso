import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the props for the component
export interface AnimatedFeatureCardProps extends HTMLMotionProps<"div"> {
  /** The numerical index to display, e.g., "001" */
  index: string;
  /** The tag or category label */
  tag: string;
  /** The main title or description */
  title: React.ReactNode;
  /** Optional subtitle or description */
  description?: React.ReactNode;
  /** The URL for the central image */
  imageSrc: string;
  /** The color variant which determines the gradient and tag color */
  color: "orange" | "purple" | "blue" | "emerald" | "terracotta" | "amber";
  /** Optional custom class for the 3D image */
  imageClassName?: string;
  /** Optional custom class for the image container motion.div */
  imageContainerClassName?: string;
  /** Optional custom class for the front frosted content container */
  contentClassName?: string;
  /** Optional custom class for the title */
  titleClassName?: string;
  /** Optional custom class for the description */
  descriptionClassName?: string;
}

// Define HSL color values for each variant
const colorVariants = {
  terracotta: {
    "--feature-color": "hsl(14, 51%, 47%)",
    "--feature-color-light": "hsl(14, 75%, 92%)",
    "--feature-color-dark": "hsl(14, 55%, 95%)",
    "--feature-glow": "rgba(181, 86, 58, 0.22)",
  },
  amber: {
    "--feature-color": "hsl(28, 85%, 45%)",
    "--feature-color-light": "hsl(35, 95%, 88%)",
    "--feature-color-dark": "hsl(30, 90%, 95%)",
    "--feature-glow": "rgba(217, 119, 6, 0.2)",
  },
  orange: {
    "--feature-color": "hsl(32, 95%, 48%)",
    "--feature-color-light": "hsl(38, 100%, 88%)",
    "--feature-color-dark": "hsl(32, 95%, 94%)",
    "--feature-glow": "rgba(245, 158, 11, 0.18)",
  },
  purple: {
    "--feature-color": "hsl(265, 85%, 58%)",
    "--feature-color-light": "hsl(262, 100%, 88%)",
    "--feature-color-dark": "hsl(265, 95%, 95%)",
    "--feature-glow": "rgba(147, 51, 234, 0.18)",
  },
  blue: {
    "--feature-color": "hsl(212, 95%, 52%)",
    "--feature-color-light": "hsl(210, 100%, 86%)",
    "--feature-color-dark": "hsl(212, 95%, 95%)",
    "--feature-glow": "rgba(37, 99, 235, 0.18)",
  },
  emerald: {
    "--feature-color": "hsl(152, 80%, 38%)",
    "--feature-color-light": "hsl(145, 80%, 86%)",
    "--feature-color-dark": "hsl(150, 85%, 94%)",
    "--feature-glow": "rgba(16, 185, 129, 0.18)",
  },
};

const AnimatedFeatureCard = React.forwardRef<
  HTMLDivElement,
  AnimatedFeatureCardProps
>(({ className, index, tag, title, description, imageSrc, color, imageClassName, imageContainerClassName, contentClassName, titleClassName, descriptionClassName, ...props }, ref) => {
  const cardStyle = colorVariants[color] as React.CSSProperties;

  return (
    <motion.div
      ref={ref}
      style={cardStyle}
      className={cn(
        "relative flex h-[380px] w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm cursor-pointer select-none transition-colors dark:border-white/10 dark:bg-slate-900/60",
        className
      )}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: {
          y: -8,
          boxShadow:
            "0 22px 35px -10px var(--feature-glow), 0 12px 18px -6px rgba(0, 0, 0, 0.06)",
        },
      }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      {...props}
    >
      {/* Ambient background soft glow behind 3D object */}
      <div
        className="absolute inset-0 z-0 opacity-60 dark:opacity-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 32%, var(--feature-color-light) 0%, transparent 72%)`,
        }}
      />

      {/* Index Number */}
      <div className="absolute top-3 left-4 font-mono text-[14px] font-bold text-slate-500 dark:text-slate-400 tracking-wider z-10">
        {index}
      </div>

      {/* Main 3D Subject (Transparent PNG) floating & showing behind glass */}
      <motion.div
        className={cn(
          "absolute inset-x-0 top-1 bottom-12 z-10 flex items-center justify-center pointer-events-none",
          imageContainerClassName
        )}
        variants={{
          initial: { scale: 1, y: 0 },
          hover: { scale: 1.12, y: -8 },
        }}
        transition={{ type: "spring", stiffness: 220, damping: 16 }}
      >
        <img
          src={imageSrc}
          alt={tag}
          className={cn(
            "w-24 h-24 md:w-26 md:h-26 object-contain drop-shadow-[0_10px_14px_rgba(0,0,0,0.12)]",
            imageClassName
          )}
        />
      </motion.div>

      {/* Frosted Glassmorphism Front Card */}
      <div
        className={cn(
          "relative z-20 rounded-xl p-3 backdrop-blur-md transition-all duration-300",
          contentClassName
        )}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.52)",
          backdropFilter: "blur(14px) saturate(180%)",
          WebkitBackdropFilter: "blur(14px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.75)",
          boxShadow:
            "0 8px 24px -4px rgba(15, 23, 42, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)",
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <span
            className="inline-block rounded-full px-2.5 py-0.5 text-[14px] font-bold tracking-wider uppercase border shadow-2xs"
            style={{
              backgroundColor: "var(--feature-color-dark)",
              color: "var(--feature-color)",
              borderColor: "var(--feature-color-light)",
            }}
          >
            {tag}
          </span>
        </div>
        <h4 className={cn("text-[18px] font-bold text-slate-900 dark:text-white leading-snug tracking-tight", titleClassName)}>
          {title}
        </h4>
        {description && (
          <p className={cn("mt-0.5 text-[17px] font-medium text-slate-600 dark:text-slate-300 leading-snug", descriptionClassName)}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
});

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
