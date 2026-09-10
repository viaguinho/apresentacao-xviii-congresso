"use client";

import { HaloReel, type HaloReelItem } from "@/components/ui/halo-reel";

const CARDS: HaloReelItem[] = [
  {
    src: `assets/logos-conflitos/ache.png`,
    alt: "Aché Laboratórios",
  },
  {
    src: `assets/logos-conflitos/biolab.png`,
    alt: "Biolab Farmacêutica",
  },
  {
    src: `assets/logos-conflitos/supera.png`,
    alt: "Supera Farma",
  },
  {
    src: `assets/logos-conflitos/prati.png`,
    alt: "Prati-Donaduzzi",
  },
  {
    src: `assets/logos-conflitos/farmausa.png`,
    alt: "FarmaUSA Pharmaceutical Group",
  },
  {
    src: `assets/logos-conflitos/eurofarma.png`,
    alt: "Eurofarma",
  },
];

const CARDS_COL2: HaloReelItem[] = [
  ...CARDS.slice(3),
  ...CARDS.slice(0, 3),
];

export default function DemoOne({ isActive = true }: { isActive?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        position: "relative",
      }}
    >
      <div style={{ flex: "1 1 240px", maxWidth: "260px", height: "480px", position: "relative" }}>
        <HaloReel
          items={CARDS}
          orientation="vertical"
          aria-label="Conflitos de interesses - Coluna 1"
          cardWidth={220}
          cardHeight={90}
          minScale={0.7}
          radiusXRatio={0.3}
          centerXRatio={0.5}
          radiusYRatio={0.28}
          continuous={true}
          continuousDuration={18}
          perspectiveAngleY={0}
          slideInDepthX={0}
          spread={1}
          isActive={isActive}
          pauseOnHover={true}
          draggable={true}
          className="h-[480px] w-full"
          style={{ height: 480 }}
          showCenterLabel={false}
        />
      </div>

      <div style={{ flex: "1 1 240px", maxWidth: "260px", height: "480px", position: "relative" }}>
        <HaloReel
          items={CARDS_COL2}
          orientation="vertical"
          aria-label="Conflitos de interesses - Coluna 2"
          cardWidth={220}
          cardHeight={90}
          minScale={0.7}
          radiusXRatio={0.3}
          centerXRatio={0.5}
          radiusYRatio={0.28}
          continuous={true}
          continuousDuration={18}
          perspectiveAngleY={0}
          slideInDepthX={0}
          spread={1}
          isActive={isActive}
          pauseOnHover={true}
          draggable={true}
          className="h-[480px] w-full"
          style={{ height: 480 }}
          showCenterLabel={false}
        />
      </div>
    </div>
  );
}
