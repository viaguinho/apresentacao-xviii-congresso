import * as React from "react";
import { cn } from "@/lib/utils";
import { SiriWave, type SiriWaveVariant } from "@/components/ui/siri-wave";

export interface Card7Props extends React.HTMLAttributes<HTMLDivElement> {
  videoSrc?: string;
  imageUrl?: string;
  imageAlt?: string;
  logo?: React.ReactNode;
  badge?: string;
  title: string;
  subtitle?: string;
  location?: string;
  overviewHeading?: string;
  overview?: string;
  price?: number;
  pricePeriod?: string;
  onBookNow?: () => void;
  waveVariant?: SiriWaveVariant | string;
  children?: React.ReactNode;
}

const Card7 = React.forwardRef<HTMLDivElement, Card7Props>(
  (
    {
      className,
      videoSrc,
      imageUrl,
      imageAlt = "Card media",
      logo,
      badge,
      title,
      subtitle,
      location,
      overviewHeading,
      overview,
      price,
      pricePeriod,
      onBookNow,
      waveVariant,
      children,
      ...props
    },
    ref
  ) => {
    const displaySubtitle = subtitle || location;

    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl border border-[#21C6E0]/35",
          "bg-gradient-to-br from-white via-[#fcfefd] to-[#21C6E0]/12",
          "shadow-[0_4px_24px_rgba(33,198,224,0.1)] transition-all duration-300 ease-in-out",
          className
        )}
        {...props}
      >
        {/* Animated SiriWave Canvas Background */}
        {waveVariant ? (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-30 transition-opacity duration-500 group-hover:opacity-45 mix-blend-multiply">
            <SiriWave
              variant={waveVariant as SiriWaveVariant}
              size={520}
              renderScale={0.8}
              className="w-full h-full object-cover rounded-none bg-transparent"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : null}

        {/* Background Video with Clean White Elimination (mix-blend-multiply) */}
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
            className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none opacity-45 mix-blend-multiply transition-opacity duration-300"
          />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-30 mix-blend-multiply"
          />
        ) : null}

        {/* Gradient Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/80 to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between p-4 lg:p-5 text-[#0f1012] h-full">
          {/* Top Section: Logo + Badge */}
          <div className="flex items-center justify-between mb-2">
            {logo && (
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#21C6E0]/40 bg-white/90 backdrop-blur-md shadow-xs text-[#0d606a]">
                {logo}
              </div>
            )}
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[14px] font-bold uppercase tracking-wider bg-[#21C6E0]/20 text-[#0d606a] border border-[#21C6E0]/30">
                {badge}
              </span>
            )}
          </div>

          {/* Middle Section: Title, Subtitle & Overview */}
          <div className="space-y-2">
            <div>
              <h3 className="text-[28px] font-bold tracking-tight text-[#0f1012] leading-tight font-['Urbanist']">
                {title}
              </h3>
              {displaySubtitle && (
                <p className="text-[15px] font-bold uppercase tracking-wider text-[#0d606a] mt-1">
                  {displaySubtitle}
                </p>
              )}
            </div>

            {overviewHeading && (
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-zinc-600 mt-1">
                {overviewHeading}
              </h4>
            )}

            {overview && (
              <p className="text-[18px] text-[#27272a] font-medium leading-snug max-w-[560px]">
                {overview}
              </p>
            )}

            {children}
          </div>
        </div>
      </div>
    );
  }
);

Card7.displayName = "Card7";

export { Card7, Card7 as TravelCard, Card7 as CognitiveCard };
