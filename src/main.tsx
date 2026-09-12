/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import DemoOne from '../components/demo'
import Slide5ConceptCards from '../components/slide5-cards'
import Slide6MethodTimeline from '../components/slide6-timeline'
import Slide7FeatureCards from '../components/slide7-feature-cards'
import Slide9Stage from '../components/slide9-stage'
import Slide10Plasticity from '../components/slide10-plasticity'
import Slide10bMechanisms, { Slide10bLegend } from '../components/slide10b-mechanisms'
import Slide11Cascades from '../components/slide11-cascades'
import Slide12Resilience from '../components/slide12-resilience'
import Slide12bClinical from '../components/slide12b-clinical'
import Slide13Synthesis from '../components/slide13-synthesis'
import Slide14Cognition from '../components/slide14-cognition'
import Slide15Stage from '../components/slide15-stage'
import Slide16Flow from '../components/slide16-flow'
import Slide16Cards from '../components/slide16-cards'
import Slide17Stage from '../components/slide17-stage'
import Slide17Cards from '../components/slide17-cards'
import Slide18Stage from '../components/slide18-stage'
import Slide19Stage from '../components/slide19-stage'
import Slide20Circle from '../components/slide20-circle'
import Slide20Cards from '../components/slide20-cards'
import Slide21Orbit from '../components/slide21-orbit'
import Slide21Cards, { Slide21RightCards } from '../components/slide21-cards'
import Slide22Timeline from '../components/slide22-timeline'
import Slide22Cards from '../components/slide22-cards'
import Slide23Timeline from '../components/slide23-timeline'
import Slide23Cards from '../components/slide23-cards'
import Slide24Orbit from '../components/slide24-orbit'
import Slide24Cards from '../components/slide24-cards'
import Slide25Orbit from '../components/slide25-orbit'
import Slide25Cards from '../components/slide25-cards'
import Slide26Orbit from '../components/slide26-orbit'
import Slide26Cards from '../components/slide26-cards'
import Slide27Orbit from '../components/slide27-orbit'
import Slide27Cards from '../components/slide27-cards'
import Slide28Timeline from '../components/slide28-timeline'
import Slide28Cards from '../components/slide28-cards'
import Slide29Circle from '../components/slide29-circle'
import Slide29Cards from '../components/slide29-cards'
import Slide30Flow from '../components/slide30-flow'
import Slide30Cards from '../components/slide30-cards'
import Slide31Cards from '../components/slide31-cards'
import Slide32Matrix from '../components/slide32-matrix'
import Slide33Funnel from '../components/slide33-funnel'
import Slide34RightCards, { Slide34BannerCard } from '../components/slide34-cards'
import Slide34Circle from '../components/slide34-circle'
import Slide35Orbit from '../components/slide35-orbit'
import Slide35Cards from '../components/slide35-cards'
import Slide40bBrain from '../components/slide40b-brain'
import Slide36Cards from '../components/slide36-cards'
import Slide37Cards from '../components/slide37-cards'
import Slide37Integration from '../components/slide37-integration'
import Slide38Orbit from '../components/slide38-orbit'
import Slide38Cards from '../components/slide38-cards'
import Slide40Cards from '../components/slide40-cards'
import { initAllSlideModuleTopbars } from './topbar-modules'
import '../src/index.css'

/**
 * Contador de ativações por section: toda vez que um slide passa de inativo para ativo o
 * contador sobe e vira a `key` da ilha React dentro dele. Com uma key nova o React remonta
 * o componente e a animação de entrada toca de novo. Antes todas as ilhas eram montadas no
 * carregamento da página, então a entrada já tinha terminado quando o apresentador chegava
 * ao slide e nada se movia na projeção.
 */
const slideRunCounts = new WeakMap<Element, number>();
const slideWasActive = new WeakMap<Element, boolean>();

function slideRunKey(rootElement: HTMLElement): number {
  const section = rootElement.closest('section');
  if (!section) return 0;
  const isActive = section.hasAttribute('data-deck-active');
  const wasActive = slideWasActive.get(section) ?? false;
  let run = slideRunCounts.get(section) ?? 0;
  if (isActive && !wasActive) {
    run += 1;
    slideRunCounts.set(section, run);
  }
  slideWasActive.set(section, isActive);
  return run;
}

function mountReactRoot(rootElement: HTMLElement | null, component: ReactNode, name: string) {
  if (!rootElement) return;
  try {
    rootElement.setAttribute('data-mounted', 'true');
    let root = (rootElement as any)._reactRoot;
    if (!root) {
      root = ReactDOM.createRoot(rootElement);
      (rootElement as any)._reactRoot = root;
    }
    root.render(<div key={slideRunKey(rootElement)} style={{ display: 'contents' }}>{component}</div>);
  } catch (e) {
    try {
      const root = ReactDOM.createRoot(rootElement);
      (rootElement as any)._reactRoot = root;
      root.render(component);
    } catch (err) {
      console.error(`[${name}] Mount error:`, err);
    }
  }
}

function renderSlide3App(active: boolean) {
  mountReactRoot(document.getElementById('slide3-react-root'), <DemoOne isActive={active} />, 'HaloReel');
}

function renderSlide5App(_active: boolean) {
  mountReactRoot(document.getElementById('slide5-react-root'), <Slide5ConceptCards />, 'Slide5ConceptCards');
}

function renderSlide6App(active: boolean) {
  mountReactRoot(document.getElementById('slide6-timeline-root'), <Slide6MethodTimeline isActive={active} />, 'Slide6MethodTimeline');
}

function renderSlide7App(active: boolean) {
  mountReactRoot(document.getElementById('slide7-cards-root'), <Slide7FeatureCards isActive={active} />, 'Slide7FeatureCards');
}

function renderSlide9App(active: boolean) {
  mountReactRoot(document.getElementById('slide9-orbit-root'), <Slide9Stage isActive={active} />, 'Slide9Stage');
}

function renderSlide10App(active: boolean) {
  mountReactRoot(document.getElementById('slide10-react-root'), <Slide10Plasticity isActive={active} />, 'Slide10Plasticity');
}

function renderSlide10bApp(active: boolean) {
  mountReactRoot(document.getElementById('slide10b-legend-root'), <Slide10bLegend />, 'Slide10bLegend');
  mountReactRoot(document.getElementById('slide10b-react-root'), <Slide10bMechanisms isActive={active} />, 'Slide10bMechanisms');
}

function renderSlide11App(active: boolean) {
  mountReactRoot(document.getElementById('slide11-react-root'), <Slide11Cascades isActive={active} />, 'Slide11Cascades');
}

function renderSlide12App(active: boolean) {
  mountReactRoot(document.getElementById('slide12-react-root'), <Slide12Resilience isActive={active} />, 'Slide12Resilience');
}

function renderSlide12bApp(active: boolean) {
  mountReactRoot(document.getElementById('slide12b-react-root'), <Slide12bClinical isActive={active} />, 'Slide12bClinical');
}

function renderSlide13App(active: boolean) {
  mountReactRoot(document.getElementById('slide13-react-root'), <Slide13Synthesis isActive={active} />, 'Slide13Synthesis');
}

function renderSlide14App(active: boolean) {
  mountReactRoot(document.getElementById('slide14-react-root'), <Slide14Cognition isActive={active} />, 'Slide14Cognition');
}

function renderSlide15App(active: boolean) {
  mountReactRoot(document.getElementById('slide15-react-root'), <Slide15Stage isActive={active} />, 'Slide15Stage');
}

function renderSlide16App(active: boolean) {
  mountReactRoot(document.getElementById('slide16-react-root'), <Slide16Flow isActive={active} />, 'Slide16Flow');
  mountReactRoot(document.getElementById('slide16-cards-root'), <Slide16Cards isActive={active} />, 'Slide16Cards');
}

function renderSlide17App(active: boolean) {
  mountReactRoot(document.getElementById('slide17-react-root'), <Slide17Stage isActive={active} />, 'Slide17Stage');
  mountReactRoot(document.getElementById('slide17-cards-root'), <Slide17Cards isActive={active} />, 'Slide17Cards');
}

function renderSlide18App(active: boolean) {
  mountReactRoot(document.getElementById('slide18-react-root'), <Slide18Stage isActive={active} />, 'Slide18Stage');
}

function renderSlide19App(active: boolean) {
  mountReactRoot(document.getElementById('slide19-react-root'), <Slide19Stage isActive={active} />, 'Slide19Stage');
}

function renderSlide20App(active: boolean) {
  mountReactRoot(document.getElementById('slide20-circle-root'), <Slide20Circle isActive={active} />, 'Slide20Circle');
  mountReactRoot(document.getElementById('slide20-cards-root'), <Slide20Cards isActive={active} />, 'Slide20Cards');
}

function renderSlide21App(active: boolean) {
  mountReactRoot(document.getElementById('slide21-orbit-root'), <Slide21Orbit isActive={active} />, 'Slide21Orbit');
  mountReactRoot(document.getElementById('slide21-cards-root'), <Slide21Cards isActive={active} />, 'Slide21Cards');
  mountReactRoot(document.getElementById('slide21-right-cards-root'), <Slide21RightCards isActive={active} />, 'Slide21RightCards');
}

function renderSlide22App(active: boolean) {
  mountReactRoot(document.getElementById('slide22-timeline-root'), <Slide22Timeline isActive={active} />, 'Slide22Timeline');
  mountReactRoot(document.getElementById('slide22-cards-root'), <Slide22Cards isActive={active} />, 'Slide22Cards');
}

function renderSlide23App(active: boolean) {
  mountReactRoot(document.getElementById('slide23-timeline-root'), <Slide23Timeline isActive={active} />, 'Slide23Timeline');
  mountReactRoot(document.getElementById('slide23-cards-root'), <Slide23Cards isActive={active} />, 'Slide23Cards');
}

function renderSlide24App(active: boolean) {
  mountReactRoot(document.getElementById('slide24-orbit-root'), <Slide24Orbit isActive={active} />, 'Slide24Orbit');
  mountReactRoot(document.getElementById('slide24-cards-root'), <Slide24Cards isActive={active} />, 'Slide24Cards');
}

function renderSlide25App(active: boolean) {
  mountReactRoot(document.getElementById('slide25-orbit-root'), <Slide25Orbit isActive={active} />, 'Slide25Orbit');
  mountReactRoot(document.getElementById('slide25-cards-root'), <Slide25Cards isActive={active} />, 'Slide25Cards');
}

function renderSlide26App(active: boolean) {
  mountReactRoot(document.getElementById('slide26-orbit-root'), <Slide26Orbit isActive={active} />, 'Slide26Orbit');
  mountReactRoot(document.getElementById('slide26-cards-root'), <Slide26Cards isActive={active} />, 'Slide26Cards');
}

function renderSlide27App(active: boolean) {
  mountReactRoot(document.getElementById('slide27-orbit-root'), <Slide27Orbit isActive={active} />, 'Slide27Orbit');
  mountReactRoot(document.getElementById('slide27-cards-root'), <Slide27Cards isActive={active} />, 'Slide27Cards');
}

function renderSlide36App(active: boolean) {
  mountReactRoot(document.getElementById('slide36-cards-root'), <Slide36Cards isActive={active} />, 'Slide36Cards');
}

function renderSlide37App(active: boolean) {
  mountReactRoot(document.getElementById('slide37-integration-root'), <Slide37Integration isActive={active} />, 'Slide37Integration');
  mountReactRoot(document.getElementById('slide37-cards-root'), <Slide37Cards isActive={active} />, 'Slide37Cards');
}

function renderSlide28App(active: boolean) {
  mountReactRoot(document.getElementById('slide28-timeline-root'), <Slide28Timeline isActive={active} />, 'Slide28Timeline');
  mountReactRoot(document.getElementById('slide28-cards-root'), <Slide28Cards isActive={active} />, 'Slide28Cards');
}

function renderSlide29App(active: boolean) {
  mountReactRoot(document.getElementById('slide29-circle-root'), <Slide29Circle isActive={active} />, 'Slide29Circle');
  mountReactRoot(document.getElementById('slide29-cards-root'), <Slide29Cards isActive={active} />, 'Slide29Cards');
}

function renderSlide30App(active: boolean) {
  mountReactRoot(document.getElementById('slide30-flow-root'), <Slide30Flow isActive={active} />, 'Slide30Flow');
  mountReactRoot(document.getElementById('slide30-cards-root'), <Slide30Cards isActive={active} />, 'Slide30Cards');
}

function renderSlide31App(active: boolean) {
  mountReactRoot(document.getElementById('slide31-cards-root'), <Slide31Cards isActive={active} />, 'Slide31Cards');
}

function renderSlide32App(active: boolean) {
  mountReactRoot(document.getElementById('slide32-react-root'), <Slide32Matrix isActive={active} />, 'Slide32Matrix');
}

function renderSlide33App(active: boolean) {
  mountReactRoot(document.getElementById('slide33-react-root'), <Slide33Funnel isActive={active} />, 'Slide33Funnel');
}

function renderSlide34App(active: boolean) {
  mountReactRoot(document.getElementById('slide34-circle-root'), <Slide34Circle isActive={active} />, 'Slide34Circle');
  mountReactRoot(document.getElementById('slide34-banner-root'), <Slide34BannerCard isActive={active} />, 'Slide34BannerCard');
  mountReactRoot(document.getElementById('slide34-cards-root'), <Slide34RightCards isActive={active} />, 'Slide34RightCards');
}

function renderSlide35App(active: boolean) {
  mountReactRoot(document.getElementById('slide35-orbit-root'), <Slide35Orbit isActive={active} />, 'Slide35Orbit');
  mountReactRoot(document.getElementById('slide35-cards-root'), <Slide35Cards isActive={active} />, 'Slide35Cards');
}

function renderSlide38App(active: boolean) {
  mountReactRoot(document.getElementById('slide38-orbit-root'), <Slide38Orbit isActive={active} />, 'Slide38Orbit');
  mountReactRoot(document.getElementById('slide38-cards-root'), <Slide38Cards isActive={active} />, 'Slide38Cards');
}

function renderSlide40App(active: boolean) {
  mountReactRoot(document.getElementById('slide40-cards-root'), <Slide40Cards isActive={active} />, 'Slide40Cards');
}

function renderSlide40bApp() {
  mountReactRoot(document.getElementById('slide40b-brain-root'), <Slide40bBrain />, 'Slide40bBrain');
}

export function mountHaloReel() {
  syncSlideVisibility();
}

export function mountSlide5() {
  syncSlideVisibility();
}

export function mountSlide6() {
  syncSlideVisibility();
}

export function mountSlide7() {
  syncSlideVisibility();
}

export function mountSlide9() {
  syncSlideVisibility();
}

export function mountSlide10() {
  syncSlideVisibility();
}

export function mountSlide10b() {
  syncSlideVisibility();
}

export function mountSlide11() {
  syncSlideVisibility();
}

export function mountSlide12() {
  syncSlideVisibility();
}

export function mountSlide12b() {
  syncSlideVisibility();
}

export function mountSlide13() {
  syncSlideVisibility();
}

export function mountSlide14() {
  syncSlideVisibility();
}

export function mountSlide15() {
  syncSlideVisibility();
}

export function mountSlide16() {
  syncSlideVisibility();
}

export function mountSlide17() {
  syncSlideVisibility();
}

export function mountSlide18() {
  syncSlideVisibility();
}

export function mountSlide19() {
  syncSlideVisibility();
}

export function mountSlide20() {
  syncSlideVisibility();
}

export function mountSlide21() {
  syncSlideVisibility();
}

export function mountSlide22() {
  syncSlideVisibility();
}

export function mountSlide24() {
  syncSlideVisibility();
}

export function mountSlide25() {
  syncSlideVisibility();
}

export function mountSlide26() {
  syncSlideVisibility();
}

export function mountSlide27() {
  syncSlideVisibility();
}

export function mountSlide28() {
  syncSlideVisibility();
}

export function mountSlide29() {
  syncSlideVisibility();
}

export function mountSlide30() {
  syncSlideVisibility();
}

export function mountSlide32() {
  syncSlideVisibility();
}

export function mountSlide34() {
  syncSlideVisibility();
}

export function mountSlide35() {
  syncSlideVisibility();
}

export function mountSlide36() {
  syncSlideVisibility();
}

export function mountSlide37() {
  syncSlideVisibility();
}

export function mountSlide38() {
  syncSlideVisibility();
}

export function mountSlide40() {
  syncSlideVisibility();
}

export function mountSlide40b() {
  syncSlideVisibility();
}

function syncSlideVisibility() {
  const slide3 = document.querySelector('section[data-screen-label="03"]');
  const slide5 = document.querySelector('section[data-screen-label="05"]');
  const slide6 = document.querySelector('section[data-screen-label="06"]');
  const slide7 = document.querySelector('section[data-screen-label="07"]');
  const slide9 = document.querySelector('section[data-screen-label="09"]');
  const slide10 = document.querySelector('section[data-screen-label="10"]');
  const slide11 = document.querySelector('section[data-screen-label="11"]');
  const slide12 = document.querySelector('section[data-screen-label="12"]');
  const slide13 = document.querySelector('section[data-screen-label="13"]');
  const slide14 = document.querySelector('section[data-screen-label="14"]');
  const slide15 = document.querySelector('section[data-screen-label="15"]');
  const slide16 = document.querySelector('section[data-screen-label="16"]');
  const slide17 = document.querySelector('section[data-screen-label="17"]');
  const slide18 = document.querySelector('section[data-screen-label="18"]');
  const slide19 = document.querySelector('section[data-screen-label="19"]');
  const stage = document.querySelector('deck-stage') as any;

  const isSlide3 = (stage && stage._index !== undefined)
    ? stage._index === 2
    : (slide3?.hasAttribute('data-deck-active') ?? false);

  const isSlide5 = (stage && stage._index !== undefined)
    ? stage._index === 5
    : (slide5?.hasAttribute('data-deck-active') ?? false);

  const isSlide6 = (stage && stage._index !== undefined)
    ? stage._index === 6
    : (slide6?.hasAttribute('data-deck-active') ?? false);

  const isSlide7 = (stage && stage._index !== undefined)
    ? stage._index === 7
    : (slide7?.hasAttribute('data-deck-active') ?? false);

  const isSlide9 = (stage && stage._index !== undefined)
    ? stage._index === 9
    : (slide9?.hasAttribute('data-deck-active') ?? false);

  const isSlide10 = (stage && stage._index !== undefined)
    ? stage._index === 10
    : (slide10?.hasAttribute('data-deck-active') ?? false);

  const isSlide11 = (stage && stage._index !== undefined)
    ? stage._index === 11
    : (slide11?.hasAttribute('data-deck-active') ?? false);

  const isSlide12 = (stage && stage._index !== undefined)
    ? stage._index === 12
    : (slide12?.hasAttribute('data-deck-active') ?? false);

  const isSlide13 = (stage && stage._index !== undefined)
    ? stage._index === 13
    : (slide13?.hasAttribute('data-deck-active') ?? false);

  const isSlide14 = (stage && stage._index !== undefined)
    ? stage._index === 14
    : (slide14?.hasAttribute('data-deck-active') ?? false);

  const isSlide15 = (stage && stage._index !== undefined)
    ? stage._index === 15
    : (slide15?.hasAttribute('data-deck-active') ?? false);

  const isSlide16 = (stage && stage._index !== undefined)
    ? stage._index === 16
    : (slide16?.hasAttribute('data-deck-active') ?? false);

  const isSlide17 = (stage && stage._index !== undefined)
    ? stage._index === 17
    : (slide17?.hasAttribute('data-deck-active') ?? false);

  const isSlide18 = (stage && stage._index !== undefined)
    ? stage._index === 18
    : (slide18?.hasAttribute('data-deck-active') ?? false);

  const isSlide19 = (stage && stage._index !== undefined)
    ? stage._index === 19
    : (slide19?.hasAttribute('data-deck-active') ?? false);

  const slide20 = document.querySelector('section[data-screen-label="20"]');
  const isSlide20 = (stage && stage._index !== undefined)
    ? stage._index === 20
    : (slide20?.hasAttribute('data-deck-active') ?? false);

  const isExportAll = typeof document !== 'undefined' && document.body.classList.contains('export-all-active');

  renderSlide3App(isExportAll || isSlide3);
  renderSlide5App(isExportAll || isSlide5);
  renderSlide6App(isExportAll || isSlide6);
  renderSlide7App(isExportAll || isSlide7);
  renderSlide9App(isExportAll || isSlide9);
  renderSlide10App(isExportAll || isSlide10);
  renderSlide10bApp(isExportAll || isSlide11);
  renderSlide11App(isExportAll || isSlide12);
  renderSlide12App(isExportAll || isSlide13);
  renderSlide12bApp(isExportAll || isSlide14);
  renderSlide13App(isExportAll || isSlide15);
  renderSlide14App(isExportAll || isSlide16);
  renderSlide15App(isExportAll || isSlide17);
  renderSlide16App(isExportAll || isSlide18);
  renderSlide17App(isExportAll || isSlide19);
  renderSlide18App(isExportAll || isSlide20);
  renderSlide19App(true);
  renderSlide20App(true);

  const getSlideEl = (lbl: string) =>
    document.querySelector(`section[data-screen-label^="${lbl}"], section[data-screen-label="${lbl}"]`);

  // Slides orbitais, modulares e timelines reformulados
  const slide21 = getSlideEl("21");
  const slide22 = getSlideEl("22");
  const slide23 = getSlideEl("23");
  const slide24 = getSlideEl("24");
  const slide25 = getSlideEl("25");
  const slide26 = getSlideEl("26");
  const slide27 = getSlideEl("27");
  const slide28 = getSlideEl("28");
  const slide29 = getSlideEl("29");
  const slide30 = getSlideEl("30");
  const slide31 = getSlideEl("31");
  const slide32 = getSlideEl("32");
  const slide33 = getSlideEl("33");
  const slide34 = getSlideEl("34");
  const slide35 = getSlideEl("35");
  const slide36 = getSlideEl("36");
  const slide37 = getSlideEl("37");
  const slide38 = getSlideEl("38");
  const slide40 = getSlideEl("40");

  const isSlide21 = (slide21?.hasAttribute('data-deck-active') ?? false);
  const isSlide22 = (slide22?.hasAttribute('data-deck-active') ?? false);
  const isSlide23 = (slide23?.hasAttribute('data-deck-active') ?? false);
  const isSlide24 = (slide24?.hasAttribute('data-deck-active') ?? false);
  const isSlide25 = (slide25?.hasAttribute('data-deck-active') ?? false);
  const isSlide26 = (slide26?.hasAttribute('data-deck-active') ?? false);
  const isSlide27 = (slide27?.hasAttribute('data-deck-active') ?? false);
  const isSlide28 = (slide28?.hasAttribute('data-deck-active') ?? false);
  const isSlide29 = (slide29?.hasAttribute('data-deck-active') ?? false);
  const isSlide30 = (slide30?.hasAttribute('data-deck-active') ?? false);
  const isSlide31 = (slide31?.hasAttribute('data-deck-active') ?? false);
  const isSlide32 = (slide32?.hasAttribute('data-deck-active') ?? false);
  const isSlide33 = (slide33?.hasAttribute('data-deck-active') ?? false);
  const isSlide34 = (slide34?.hasAttribute('data-deck-active') ?? false);
  const isSlide35 = (slide35?.hasAttribute('data-deck-active') ?? false);
  const isSlide36 = (slide36?.hasAttribute('data-deck-active') ?? false);
  const isSlide37 = (slide37?.hasAttribute('data-deck-active') ?? false);
  const isSlide38 = (slide38?.hasAttribute('data-deck-active') ?? false);
  const isSlide40 = (slide40?.hasAttribute('data-deck-active') ?? false);

  renderSlide21App(isSlide21 || true);
  renderSlide22App(isSlide22 || true);
  renderSlide23App(isSlide23 || true);
  renderSlide24App(isSlide24 || true);
  renderSlide25App(isSlide25 || true);
  renderSlide26App(isSlide26 || true);
  renderSlide27App(isSlide27 || true);
  renderSlide28App(isSlide28 || true);
  renderSlide29App(isSlide29 || true);
  renderSlide30App(isSlide30 || true);
  renderSlide31App(isSlide31 || true);
  renderSlide32App(isSlide32 || true);
  renderSlide33App(isSlide33 || true);
  renderSlide34App(isSlide34 || true);
  renderSlide35App(isSlide35 || true);
  renderSlide36App(isSlide36 || true);
  renderSlide37App(isSlide37 || true);
  renderSlide38App(isSlide38 || true);
  renderSlide40App(isSlide40 || true);
  renderSlide40bApp();

  // Injetar ou sincronizar o top bar dos 7 módulos nos slides 5 a 39
  initAllSlideModuleTopbars();
}

if (typeof window !== 'undefined') {
  (window as any).initSlide3HaloReel = mountHaloReel;
  (window as any).initSlide5ConceptCards = mountSlide5;
  (window as any).initSlide6Timeline = mountSlide6;
  (window as any).initSlide7Cards = mountSlide7;
  (window as any).initSlide9Orbiting = mountSlide9;
  (window as any).initSlide10Plasticity = mountSlide10;
  (window as any).initSlide10bMechanisms = mountSlide10b;
  (window as any).initSlide11Cascades = mountSlide11;
  (window as any).initSlide12Resilience = mountSlide12;
  (window as any).initSlide12bClinical = mountSlide12b;
  (window as any).initSlide13Synthesis = mountSlide13;
  (window as any).initSlide14Cognition = mountSlide14;
  (window as any).initSlide15Pills = mountSlide15;
  (window as any).initSlide16Flow = mountSlide16;
  (window as any).initSlide17AreaChart = mountSlide17;
  (window as any).initSlide18Stage = mountSlide18;
  (window as any).initSlide19Stats = mountSlide19;
  (window as any).initSlide20Circle = mountSlide20;
  (window as any).initSlide21Orbit = mountSlide21;
  (window as any).initSlide21Cards = mountSlide21;
  (window as any).initSlide22Cards = mountSlide22;
  (window as any).initSlide23Cards = renderSlide23App;
  (window as any).initSlide24Orbit = mountSlide24;
  (window as any).initSlide25Orbit = mountSlide25;
  (window as any).initSlide26Orbit = mountSlide26;
  (window as any).initSlide27Orbit = mountSlide27;
  (window as any).initSlide28Cards = renderSlide28App;
  (window as any).initSlide29Circle = mountSlide29;
  (window as any).initSlide30Flow = mountSlide30;
  (window as any).initSlide31Cards = renderSlide31App;
  (window as any).initSlide32Matrix = mountSlide32;
  (window as any).initSlide33Funnel = () => syncSlideVisibility();
  (window as any).initSlide34Cards = renderSlide34App;
  (window as any).initSlide34Circle = renderSlide34App;
  (window as any).initSlide35Orbit = mountSlide35;
  (window as any).initSlide36Cards = mountSlide36;
  (window as any).initSlide37Cards = mountSlide37;
  (window as any).initSlide38Orbit = mountSlide38;
  (window as any).initSlide38Cards = mountSlide38;
  (window as any).initSlide40Cards = mountSlide40;
  (window as any).initSlide40bBrain = mountSlide40b;
  (window as any).initAllSlideModuleTopbars = initAllSlideModuleTopbars;
  (window as any).syncSlideVisibility = syncSlideVisibility;

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    syncSlideVisibility();
    setTimeout(syncSlideVisibility, 50);
    setTimeout(syncSlideVisibility, 200);
    setTimeout(syncSlideVisibility, 600);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      syncSlideVisibility();
      setTimeout(syncSlideVisibility, 100);
      setTimeout(syncSlideVisibility, 400);
    });
  }

  window.addEventListener('load', () => {
    syncSlideVisibility();
    setTimeout(syncSlideVisibility, 200);
  });

  // Slide navigation via postMessage from deck-stage
  window.addEventListener('message', (e) => {
    if (e.data && e.data.slideIndexChanged !== undefined) {
      syncSlideVisibility();
    }
  });

  // Watch for data-deck-active attribute changes on slides
  const observeSlides = () => {
    const slideLabels = ['03', '05', '06', '07', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '40'];
    slideLabels.forEach((label) => {
      const el = document.querySelector(`section[data-screen-label^="${label}"], section[data-screen-label="${label}"]`);
      if (el && !(el as any)._hasObservedActive) {
        (el as any)._hasObservedActive = true;
        const attrObserver = new MutationObserver(() => syncSlideVisibility());
        attrObserver.observe(el, { attributes: true, attributeFilter: ['data-deck-active', 'class', 'style'] });
      }
    });
  };
  observeSlides();

  // Re-check on hashchange or keyboard navigation
  window.addEventListener('hashchange', () => setTimeout(syncSlideVisibility, 30));
  window.addEventListener('keydown', (e) => {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      setTimeout(syncSlideVisibility, 50);
    }
  });

  const domObserver = new MutationObserver(() => {
    const rootIds = [
      'slide3-react-root', 'slide5-react-root', 'slide6-timeline-root', 'slide7-cards-root',
      'slide9-orbit-root', 'slide10-react-root', 'slide10b-react-root', 'slide10b-legend-root', 'slide11-react-root', 'slide12-react-root', 'slide12b-react-root',
      'slide13-react-root', 'slide14-react-root', 'slide15-react-root', 'slide16-react-root',
      'slide16-cards-root', 'slide17-react-root', 'slide17-cards-root', 'slide18-react-root',
      'slide19-react-root', 'slide20-circle-root', 'slide20-cards-root', 'slide21-orbit-root', 'slide21-cards-root', 'slide21-right-cards-root',
      'slide22-cards-root', 'slide23-cards-root', 'slide24-orbit-root', 'slide25-orbit-root', 'slide25-cards-root',
      'slide26-orbit-root', 'slide27-orbit-root', 'slide28-cards-root', 'slide29-circle-root', 'slide29-cards-root', 'slide30-flow-root', 'slide30-cards-root',
      'slide31-cards-root', 'slide32-react-root', 'slide33-react-root', 'slide34-circle-root', 'slide34-banner-root', 'slide34-cards-root',
      'slide35-orbit-root', 'slide35-cards-root', 'slide37-integration-root', 'slide37-cards-root', 'slide38-orbit-root', 'slide38-cards-root', 'slide40-cards-root', 'slide40b-brain-root'
    ];
    const anyEmpty = rootIds.some(id => {
      const el = document.getElementById(id);
      return el && (!el.children || el.children.length === 0);
    });
    if (anyEmpty) {
      syncSlideVisibility();
    }
    observeSlides();
  });
  if (document.documentElement) {
    domObserver.observe(document.documentElement, { childList: true, subtree: true });
  }

  if ((import.meta as any).hot) {
    (import.meta as any).hot.accept(() => {
      syncSlideVisibility();
    });
  }
}

