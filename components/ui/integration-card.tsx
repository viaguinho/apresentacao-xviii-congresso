"use client";

import React, {  } from "react";
import { motion } from "motion/react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function BaseButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export interface VisualContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TeamCardProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  url?: string;
}

export interface IntegrationItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  path: string;
  delay: number;
}

export const AnimatedPath = ({ d, id }: { d: string; id: string }) => {
  return (
    <>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-border/60 dark:text-zinc-700"
      />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop
            offset="50%"
            stopColor="#0071e3"
            stopOpacity="0.8"
          />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
};

export function VisualContainer({ children, className }: VisualContainerProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-564/460 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f8fbfe]/80 p-6 sm:aspect-564/410 border border-black/[0.06] shadow-inner",
        className,
      )}
    >
      {/* Dots Background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0071e3 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export const IntegrationCard = ({
  visual,
  title,
  description,
  url = "#",
}: TeamCardProps) => {
  return (
    <Card className="mx-auto flex w-full flex-col sm:max-w-141 rounded-2xl overflow-hidden p-0 ring-0 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-white">
      <VisualContainer>{visual}</VisualContainer>

      <CardContent className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight font-['Urbanist',sans-serif]">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground font-['Satoshi',sans-serif]">
            {description}
          </p>
        </div>
        <BaseButton
          nativeButton={false}
          className="h-10 w-fit rounded-full px-5 hover:bg-primary/80 cursor-pointer text-white bg-[#0071e3]"
          render={<a href={url} />}
        >
          Saiba mais
        </BaseButton>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
