import React, { useState, useCallback } from "react";
import { Brain, Network, Zap, Lightbulb, Activity } from "lucide-react";
import { ExpandingCards, CardItem } from "./ui/expanding-cards";

const brainWonders: CardItem[] = [
  {
    id: "cerebro-base",
    title: "A base material",
    description: "O cérebro humano contém cerca de 86 bilhões de neurônios. Não existe mente sem esta base biológica.",
    imgSrc: "assets/1.mp4",
    icon: <Brain size={26} />,
    linkHref: "#",
  },
  {
    id: "redes-neurais",
    title: "Redes conectadas",
    description: "Cada neurônio pode fazer até 10.000 conexões sinápticas. É a rede que cria a complexidade da mente.",
    imgSrc: "assets/2.mp4",
    mediaClassName: "object-cover object-center w-full h-full scale-100 group-data-[active=true]:scale-100",
    icon: <Network size={26} />,
    linkHref: "#",
  },
  {
    id: "plasticidade",
    title: "Neuroplasticidade",
    description: "O cérebro muda constantemente sua estrutura e função em resposta à experiência e ao aprendizado.",
    imgSrc: "assets/3.mp4",
    icon: <Zap size={26} />,
    linkHref: "#",
  },
  {
    id: "cognicao",
    title: "Cognição e pensamento",
    description: "A partir do disparo coordenado de redes, emergem funções complexas como memória, atenção e tomada de decisão.",
    imgSrc: "assets/4.mp4",
    icon: <Lightbulb size={26} />,
    linkHref: "#",
  },
  {
    id: "consciencia",
    title: "Consciência",
    description: "O maior mistério da neurociência: como a atividade elétrica e química se traduz na experiência subjetiva.",
    imgSrc: "assets/5.png",
    icon: <Activity size={26} />,
    linkHref: "#",
  },
];

export default function Slide40bBrain() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((current) => (current + 1) % brainWonders.length);
  }, []);

  const goBack = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex((current) => (current - 1 + brainWonders.length) % brainWonders.length);
  }, []);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.button === 0) {
      advance();
    }
  };

  return (
    <div 
      className="flex w-full h-full flex-col items-center justify-center space-y-5 bg-transparent relative cursor-default"
      onClick={handleContainerClick}
      onContextMenu={goBack}
    >
      {/* Ambient background glow suave */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="text-center w-full max-w-5xl mx-auto relative z-10 pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Não existe mente sem cérebro
        </h1>
        <p className="mt-2 text-2xl md:text-3xl font-light text-slate-300 tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Então como o cérebro funciona?
        </p>
      </div>
      <div className="w-full flex justify-center relative z-10 px-2 cursor-pointer">
        <ExpandingCards 
          items={brainWonders} 
          activeIndex={activeIndex} 
          onCardClick={(index) => setActiveIndex(index)} 
        />
      </div>
    </div>
  );
}
