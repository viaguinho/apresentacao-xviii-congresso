"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
  mediaClassName?: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  activeIndex?: number;
  onCardClick?: (index: number) => void;
  triggerOn?: "click" | "hover";
}

/**
 * Detecta midia em video tanto por extensao de arquivo (uso normal, servido do
 * disco) quanto por `data:video/...` — o build standalone embute os videos como
 * data URI e nesse formato nao existe extensao para inspecionar.
 */
function isVideoSource(src?: string): boolean {
  if (!src) return false;
  if (src.startsWith("data:")) return src.startsWith("data:video");
  return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);
}

function VideoCard({
  src,
  isActive,
  mediaClassName,
}: {
  src: string;
  isActive: boolean;
  mediaClassName?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 scale-105 grayscale pointer-events-none",
        mediaClassName
      )}
    />
  );
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, activeIndex = 0, onCardClick, triggerOn = "click", ...props }, ref) => {
  
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};
    
    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5.5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5.5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleInteraction = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (onCardClick) {
      onCardClick(index);
    }
  };

  return (
    <ul
      className={cn(
        "w-full max-w-[1720px] gap-3.5",
        "grid",
        "h-[700px] md:h-[700px]",
        "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop 
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }
        )
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/60 text-card-foreground shadow-2xl transition-all duration-300 hover:border-white/30",
            "md:min-w-[100px]",
            "min-h-0 min-w-0"
          )}
          onMouseEnter={() => {
            if (triggerOn === "hover") handleInteraction(index);
          }}
          onClick={(e) => handleInteraction(index, e)}
          tabIndex={0}
          data-active={activeIndex === index}
        >
          {isVideoSource(item.imgSrc) ? (
            <VideoCard
              src={item.imgSrc}
              isActive={activeIndex === index}
              mediaClassName={item.mediaClassName}
            />
          ) : (
            <img
              src={item.imgSrc}
              alt={item.title}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 scale-105 grayscale",
                item.mediaClassName
              )}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

          <article
            className="absolute inset-0 flex flex-col justify-end gap-3 p-7 pointer-events-none"
          >
            {/* Ícone de prévia no topo quando recolhido */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 group-hover:text-white/80 transition-colors duration-300 md:block group-data-[active=true]:opacity-0">
              {item.icon}
            </div>

            <h3 className="hidden origin-left rotate-90 text-base font-semibold uppercase tracking-widest text-white/70 opacity-100 transition-all duration-300 ease-out md:block group-data-[active=true]:opacity-0 select-none whitespace-nowrap">
              {item.title}
            </h3>

            <div className="text-white opacity-0 transition-all duration-300 delay-75 ease-out group-data-[active=true]:opacity-100 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              {item.icon}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white opacity-0 transition-all duration-300 delay-150 ease-out group-data-[active=true]:opacity-100 tracking-tight" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              {item.title}
            </h3>

            <p className="w-full max-w-2xl text-base md:text-lg text-slate-200 opacity-0 transition-all duration-300 delay-225 ease-out group-data-[active=true]:opacity-100 leading-relaxed font-normal" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
