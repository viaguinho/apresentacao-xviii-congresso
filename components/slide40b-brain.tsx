import { Brain, Network, Zap, Lightbulb, Activity } from "lucide-react";
import { ExpandingCards, CardItem } from "./ui/expanding-cards";

const brainWonders: CardItem[] = [
  {
    id: "cerebro-base",
    title: "A Base Material",
    description: "O cérebro humano contém cerca de 86 bilhões de neurônios. Não existe mente sem esta base biológica.",
    imgSrc: "assets/1.mp4",
    icon: <Brain size={24} />,
    linkHref: "#",
  },
  {
    id: "redes-neurais",
    title: "Redes Conectadas",
    description: "Cada neurônio pode fazer até 10.000 conexões sinápticas. É a rede que cria a complexidade da mente.",
    imgSrc: "assets/2.mp4",
    mediaClassName: "object-cover object-center w-full h-full scale-100 group-data-[active=true]:scale-100",
    icon: <Network size={24} />,
    linkHref: "#",
  },
  {
    id: "plasticidade",
    title: "Neuroplasticidade",
    description: "O cérebro muda constantemente sua estrutura e função em resposta à experiência e ao aprendizado.",
    imgSrc: "assets/3.mp4",
    icon: <Zap size={24} />,
    linkHref: "#",
  },
  {
    id: "cognicao",
    title: "Cognição e Pensamento",
    description: "A partir do disparo coordenado de redes, emergem funções complexas como memória, atenção e tomada de decisão.",
    imgSrc: "assets/4.mp4",
    icon: <Lightbulb size={24} />,
    linkHref: "#",
  },
  {
    id: "consciencia",
    title: "Consciência",
    description: "O maior mistério da neurociência: como a atividade elétrica e química se traduz na experiência subjetiva.",
    imgSrc: "assets/5.png",
    icon: <Activity size={24} />,
    linkHref: "#",
  },
];

export default function Slide40bBrain() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 bg-transparent relative">
      {/* Ambient background glow suave */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="text-center w-full max-w-4xl mx-auto mb-2 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Não existe mente sem cérebro
        </h1>
        <p className="mt-3 text-xl md:text-2xl font-light text-slate-300 tracking-wide" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Então como o cérebro funciona?
        </p>
      </div>
      <div className="w-full flex justify-center relative z-10">
        <ExpandingCards items={brainWonders} defaultActiveIndex={0} />
      </div>
    </div>
  );
}
