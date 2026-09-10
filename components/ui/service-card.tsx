import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// CVA for card variants
const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-6 overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-white text-zinc-900 border border-black/[0.06]",
        lightClean: "bg-gradient-to-br from-white via-[#fcfefd] to-[#21C6E0]/10 text-zinc-900 border border-[#21C6E0]/30 shadow-[0_4px_20px_rgba(33,198,224,0.08)]",
        red: "bg-red-500/90 text-white",
        blue: "bg-blue-500/90 text-white",
        gray: "bg-zinc-100 text-zinc-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends Omit<HTMLMotionProps<"div">, "title">,
    VariantProps<typeof cardVariants> {
  title: string;
  href?: string;
  imgSrc: string;
  imgAlt: string;
  badge?: string;
  description?: string;
  actionText?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, href = "#", imgSrc, imgAlt, badge, description, actionText = "LEARN MORE", imgClassName, children, ...props }, ref) => {
    
    // Animation variants for Framer Motion
    const cardAnimation: Variants = {
      hover: {
        scale: 1.015,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation: Variants = {
      hover: {
        scale: 1.08,
        rotate: 2,
        x: 5,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };
    
    const arrowAnimation: Variants = {
      hover: {
        x: 5,
        transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
      },
    };

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full">
          {badge && (
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#21C6E0]/20 text-[#0d606a] border border-[#21C6E0]/30">
                {badge}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-bold tracking-tight text-[#0f1012]">{title}</h3>
          
          {description && (
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 max-w-[340px]">
              {description}
            </p>
          )}

          {children}

          {actionText ? (
            <a
              href={href}
              aria-label={`Learn more about ${title}`}
              className="mt-4 flex items-center text-xs font-bold tracking-wider uppercase text-[#0d606a] group-hover:text-[#21C6E0] transition-colors"
            >
              {actionText}
              <motion.div variants={arrowAnimation}>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </motion.div>
            </a>
          ) : null}
        </div>
        
        <motion.img
          src={imgSrc}
          alt={imgAlt}
          className={cn(
            "absolute right-0 bottom-0 w-48 h-48 lg:w-60 lg:h-60 object-contain pointer-events-none drop-shadow-xl mix-blend-multiply [mask-image:radial-gradient(circle_at_center,black_60%,transparent_95%)]",
            imgClassName
          )}
          variants={imageAnimation}
        />
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
