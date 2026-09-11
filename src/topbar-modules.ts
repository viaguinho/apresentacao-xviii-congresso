/**
 * Sistema Universal de Micro-Roadmap e Top Bar Fixa Global (Slides 5 a 39)
 * Renderiza uma Top Bar persistente no topo do Canvas do deck-stage (1920x1080),
 * que permanece 100% estática e atualiza dinamicamente o status dos módulos
 * SEM alterar o layout interno, padding ou grids dos slides.
 */

export interface EixoInfo {
  id: number
  label: string
  num: string
  color: string
  bgTint: string
  module: string
  startSlide: number
  endSlide: number
}

export const EIXOS_DATA: EixoInfo[] = [
  { id: 1, label: "Dinâmica Sistêmica", num: "Eixo 1", color: "#0071e3", bgTint: "#e8f2fc", module: "Módulo 01", startSlide: 5, endSlide: 13 },
  { id: 2, label: "Cognição", num: "Eixo 2", color: "#0d6d66", bgTint: "#e6f5f3", module: "Módulo 02", startSlide: 14, endSlide: 18 },
  { id: 3, label: "Emocional", num: "Eixo 3", color: "#b5563a", bgTint: "#fbeee9", module: "Módulo 03", startSlide: 19, endSlide: 22 },
  { id: 4, label: "Social", num: "Eixo 4", color: "#6b4e83", bgTint: "#f1ecf5", module: "Módulo 04", startSlide: 23, endSlide: 26 },
  { id: 5, label: "Craniofacial", num: "Eixo 5", color: "#8a2f3f", bgTint: "#f7ecee", module: "Módulo 05", startSlide: 27, endSlide: 31 },
  { id: 6, label: "Protocolo", num: "Eixo 6", color: "#4b6b4f", bgTint: "#eef3ec", module: "Módulo 06", startSlide: 32, endSlide: 35 },
  { id: 7, label: "Clínica Longitudinal", num: "Eixo 7", color: "#33415c", bgTint: "#edeff3", module: "Módulo 07", startSlide: 36, endSlide: 39 },
]

export function getEixoForSlide(slideNum: number): EixoInfo | null {
  if (slideNum < 5 || slideNum > 39) return null
  return EIXOS_DATA.find(e => slideNum >= e.startSlide && slideNum <= e.endSlide) || null
}

export function generateTopBarInnerHTML(currentEixo: EixoInfo): string {
  const pillsHTML = EIXOS_DATA.map(eixo => {
    if (eixo.id < currentEixo.id) {
      // Eixo Concluído
      return `
        <div style="display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:9999px;background:#ecfdf5;color:#047857;border:1px solid rgba(5,150,105,0.3);font-size:14px;font-weight:500;white-space:nowrap;transition:all 0.2s ease;">
          <svg style="width:14px;height:14px;color:#059669;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span style="font-family:'Urbanist',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">${eixo.num}</span>
          <span style="opacity:0.9;font-size:14px;">· ${eixo.label}</span>
        </div>
      `
    }
    if (eixo.id === currentEixo.id) {
      // Eixo Ativo
      const textColor = "#ffffff"
      const dotColor = "#ffffff"
      const hexColor = eixo.color.replace('#', '')
      const r = parseInt(hexColor.substring(0, 2), 16)
      const g = parseInt(hexColor.substring(2, 4), 16)
      const b = parseInt(hexColor.substring(4, 6), 16)
      const glowRgba = `rgba(${r}, ${g}, ${b}, 0.38)`

      return `
        <div style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:9999px;background:${eixo.color};color:${textColor};border:1px solid ${eixo.color};font-size:15px;font-weight:700;box-shadow:0 3px 14px ${glowRgba}, 0 1px 3px rgba(0,0,0,0.08);white-space:nowrap;transition:all 0.2s ease;">
          <span style="width:6px;height:6px;border-radius:9999px;background:${dotColor};display:inline-block;animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></span>
          <span style="font-family:'Urbanist',sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;">${eixo.num}</span>
          <span style="color:${textColor};font-size:15px;font-weight:600;">· ${eixo.label}</span>
        </div>
      `
    }
    // Eixo Futuro / Discreto
    return `
      <div style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:9999px;background:rgba(0,0,0,0.02);color:#5f6062;border:1px solid rgba(0,0,0,0.08);font-size:14px;white-space:nowrap;transition:all 0.2s ease;">
        <span style="font-family:'Urbanist',sans-serif;font-weight:600;">${eixo.num}</span>
        <span style="font-size:14px;font-weight:500;">${eixo.label}</span>
      </div>
    `
  }).join("")

  return `
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
      ${pillsHTML}
    </div>
    <div style="display:flex;align-items:center;gap:8px;font-size:15px;font-weight:500;color:#52525b;flex-shrink:0;">
      <span style="width:6px;height:6px;border-radius:9999px;background:${currentEixo.color};"></span>
      <span style="font-family:'Urbanist',sans-serif;font-weight:700;color:${currentEixo.color};text-transform:uppercase;letter-spacing:0.06em;">${currentEixo.module}</span>
      <span>/ 07</span>
    </div>
  `
}

/**
 * Obtém o índice do slide atual (1 a 42)
 */
export function getCurrentSlideNumber(): number {
  const stage = document.querySelector('deck-stage') as any
  if (stage && stage._index !== undefined) {
    return stage._index + 1
  }
  const activeSlide = document.querySelector('section[data-deck-active]')
  if (activeSlide) {
    const lbl = activeSlide.getAttribute('data-screen-label') || ''
    const match = lbl.match(/^(\d+)/)
    if (match) return parseInt(match[1], 10)
  }
  return 1
}

let globalTopBarEl: HTMLElement | null = null

/**
 * Limpa qualquer elemento injetado anteriormente dentro dos slides para restaurar layout 100% original
 */
function cleanupInjectedElements() {
  document.querySelectorAll('[data-injected-topbar="true"]').forEach(el => el.remove())
}

/**
 * Cria ou sincroniza a Top Bar Fixa Global no topo do Canvas do deck-stage
 */
export function syncGlobalModuleTopBar() {
  cleanupInjectedElements()

  const currentSlide = getCurrentSlideNumber()
  const currentEixo = getEixoForSlide(currentSlide)

  const stage = document.querySelector('deck-stage') as any
  const canvas = stage?.shadowRoot?.querySelector('.canvas') as HTMLElement | null

  if (!canvas) {
    return
  }

  // Garantir que a Top Bar exista no canvas
  if (!globalTopBarEl || !canvas.contains(globalTopBarEl)) {
    const existing = canvas.querySelector('#deck-global-module-topbar') as HTMLElement | null
    if (existing) {
      globalTopBarEl = existing
    } else {
      globalTopBarEl = document.createElement('div')
      globalTopBarEl.id = 'deck-global-module-topbar'
      globalTopBarEl.style.cssText = `
        position: absolute;
        top: 22px;
        left: 80px;
        right: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        padding-bottom: 10px;
        font-family: 'Satoshi', system-ui, sans-serif;
        box-sizing: border-box;
        z-index: 99999;
        user-select: none;
        background: transparent;
        pointer-events: auto;
        transition: opacity 0.2s ease;
      `
      canvas.appendChild(globalTopBarEl)
    }
  }

  // Slide fora do intervalo 5 a 39 -> Ocultar Top Bar
  if (!currentEixo) {
    globalTopBarEl.style.display = 'none'
    globalTopBarEl.style.opacity = '0'
    return
  }

  // Slide entre 5 e 39 -> Exibir Top Bar e atualizar HTML
  globalTopBarEl.style.display = 'flex'
  globalTopBarEl.style.opacity = '1'
  globalTopBarEl.innerHTML = generateTopBarInnerHTML(currentEixo)
}

/**
 * Inicializador global com escutas a eventos
 */
export function initAllSlideModuleTopbars() {
  syncGlobalModuleTopBar()

  const stage = document.querySelector('deck-stage') as any
  if (stage && !stage._hasGlobalTopBarListener) {
    stage._hasGlobalTopBarListener = true
    stage.addEventListener('slidechange', () => {
      syncGlobalModuleTopBar()
    })
  }
}
