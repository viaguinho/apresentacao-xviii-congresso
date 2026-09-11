# PROMPT: Ajuste de Diagramação e Legibilidade dos 42 Slides (XVIII Congresso)

> Cole este prompt inteiro em uma nova sessão do Claude Code aberta na pasta do projeto.
> Ele é autossuficiente: contém o contexto técnico, as regras invioláveis, a metodologia, os scripts de auditoria e o checklist slide a slide.

---

## 0. PAPEL E MISSÃO

Você é um **diretor de arte sênior e engenheiro front-end especialista em apresentações projetadas**. Sua missão é fazer uma **revisão de diagramação completa** dos 42 slides desta apresentação e corrigir **somente problemas de layout e legibilidade**:

1. Fontes pequenas demais ou ilegíveis (tamanho, peso, contraste de cinzas neutros).
2. Cards, gráficos, diagramas, órbitas, timelines e matrizes subdimensionados, apertados ou desproporcionais. **Gráficos e cards devem ter fontes e dimensões ajustadas sempre que isso melhorar a visualização**, preservando integralmente seus **dados, componentes e animações** (contrato detalhado na seção 2.3 e execução nas seções 3.C e 3.D).
3. Elementos em posição errada, desalinhados ou sobrepondo textos, gráficos ou outros cards.
4. Qualquer elemento que ultrapasse a área visível do slide (1920×1080), seja cortado por `overflow: hidden`, invada a Top Bar global ou fique escondido por `truncate`/`line-clamp`.

**O conteúdo tem de ficar intacto e íntegro.** Você não reescreve, resume, reordena, remove nem acrescenta nenhuma informação. Você mexe só na **forma** (tamanho, espaço, posição, proporção) e nunca no **conteúdo** (texto, dados, significado).

---

## 1. CONTEXTO TÉCNICO DO PROJETO (leia antes de tocar em qualquer arquivo)

- **Stack:** Vite 8 + React 19 + TypeScript + TailwindCSS 3.4 + Framer Motion/Motion + GSAP + Recharts + Reaviz + Lucide.
- **Palco:** `deck-stage.js` (Web Component `<deck-stage width="1920" height="1080">`). O canvas de design é **fixo em 1920×1080 px** e é escalado para caber na janela. **Todas as medidas em px são medidas do canvas de 1920×1080.** Não converta para `vw`/`vh`/`rem` fluidos; o deck já escala sozinho.
  - API de navegação: `document.querySelector('deck-stage').goTo(i)` (índice 0-based), `.next()`, `.prev()`, `.index`; também aceita `#N` na URL. Dispara o evento `slidechange`.
  - Slides inativos ficam no DOM com `visibility:hidden; opacity:0` (não são desmontados).
  - O `deck-stage` injeta `text-wrap: balance` em headings e `text-wrap: pretty` em `p, li, blockquote, figcaption`.
- **Estrutura:**
  - `index.html` tem as **42 `<section>`** (com `data-label`, `data-screen-label` e `data-speaker-notes`), boa parte com **estilos inline**. Os slides 1, 2, 4, 8, 39, 41 e 42 são HTML estático puro; os demais combinam cabeçalho estático no `index.html` com "ilhas" React.
  - `src/main.tsx` monta os componentes React em divs `#slideN-*-root` dentro das sections (via `mountReactRoot`).
  - `components/slideN-*.tsx` são os componentes de cada slide; `components/ui/*.tsx` são componentes compartilhados (**alterar um deles afeta vários slides**, veja o mapa na seção 7).
  - `src/topbar-modules.ts` renderiza a **Top Bar global fixa (micro-roadmap dos 7 eixos) nos slides 5 a 39**. Nada pode invadir essa faixa: o conteúdo desses slides começa abaixo de **74 px** do topo do canvas.
  - `src/index.css` e `src/styles/design-system-additions.css` são os estilos globais; `tailwind.config.js` tem tokens de spacing extras (`75`, `110`, `145`, `150`, `160`, `180`, `220`, `265`).
  - Tipografia do sistema: **Urbanist** (títulos, números, badges) e **Satoshi** (texto corrido). Referência de design: `PROMPT_MESTRE_CLAUDE_SLIDES_SISTEMA_DESIGN.md` e `_ds/`.
- **Não edite:** `dist/` (é saída do build, gere com `npm run build`), `slides-1-16.html`, `Desenvolvimento Infanto-Juvenil.dc.html`, `_tmp_reader.html`, `node_modules/`, arquivos `.md` de roteiro/guia, `deck-stage.js` (a menos que um bug do palco cause o problema, e nesse caso pergunte antes).
- **Dev server:** `npm run dev` (Vite, porta 5173). **Build:** `npm run build` (roda `scripts/prepare-dist.js`). Deploy na Vercel via `vercel.json`.

### 1.1 Estado atual do repositório (importante)

Existem **47 arquivos em `components/` com alterações não commitadas** (aumentos de fonte de cerca de +2 px, por exemplo `text-[25px]→28px`, `text-[14px]→16px`, `text-[11px]→15px` no `slide5-cards.tsx`). Essas mudanças são um trabalho de legibilidade já em andamento.

- **Não descarte essas alterações** (nada de `git checkout -- .`, `git stash drop` ou `git reset --hard`).
- Antes de começar: rode `git status` e `git diff --stat`, crie a branch `fix/diagramacao-legibilidade` e faça um **commit de checkpoint** com o estado atual ("WIP: ajustes de fonte em andamento"), para que cada etapa seguinte possa ser revisada e revertida isoladamente.
- Trate essas alterações como ponto de partida: valide visualmente se não causaram overflow ou sobreposição (é provável que tenham causado em alguns cards) e corrija.

---

## 2. REGRAS INVIOLÁVEIS: INTEGRIDADE DO CONTEÚDO

### 2.1 PROIBIDO alterar
- Qualquer **texto visível**: títulos, subtítulos, parágrafos, bullets, rótulos, legendas, badges, números, porcentagens, datas, nomes de autores, citações e referências bibliográficas. Nem uma vírgula, acento, maiúscula ou quebra semântica.
- **Dados dos gráficos**: valores, séries, escalas, eixos, categorias, ordem das barras e das fatias, posições relativas que carregam significado (por exemplo, pontos de um *dumbbell*, curvas de trajetória, heatmap qualitativo do slide 32).
- **Estrutura narrativa**: número, ordem e agrupamento dos slides; ordem dos cards; ordem dos itens em listas, órbitas e timelines.
- `data-label`, `data-screen-label`, `data-speaker-notes`, `aria-label`, `alt`, `title` (tooltips).
- **Identidade visual**: cores dos 7 eixos (`#0071e3`, `#21C6E0`, `#b5563a`, `#6b4e83`, `#8a2f3f`, `#4b6b4f`, `#33415c`) e seus tints, famílias tipográficas, ícones escolhidos, imagens, vídeos, logos, estilo dos cards (vidro, bordas, sombras, raio).
- **Animações e interações**: tipo, ordem de entrada e comportamento (você pode ajustar só a posição e o tamanho *finais* dos elementos animados, deslocamentos em px na proporção do redimensionamento e o raio das órbitas para que caibam; veja o Contrato 3 na seção 2.3).
- **Componentes de gráficos e cards**: tipo de gráfico, quantidade de elementos, estrutura e estilo (veja o Contrato 2 na seção 2.3).
- Lógica de montagem (`src/main.tsx`), Top Bar (`src/topbar-modules.ts`), exceto correções de tamanho de fonte dela se estiver ilegível.

### 2.2 PERMITIDO alterar (apenas propriedades de diagramação)
- `font-size`, `line-height`, `letter-spacing` (só para compensar legibilidade), `font-weight` (só para subir o peso de textos pequenos, nunca para mudar a hierarquia).
- Cor de **textos cinza neutros** (`#a1a1aa`, `#9ca3af`, `text-gray-400`, `text-zinc-400` etc.) **para um tom mais escuro da mesma família neutra** quando o contraste com o fundo for menor que 4.5:1. Nunca altere as cores de eixo.
- `width`, `height`, `min-*`, `max-*`, `flex`, `flex-basis`, `grid-template-*`, `gap`, `padding`, `margin`, `aspect-ratio`.
- `position`, `top/left/right/bottom`, `inset`, `transform: translate/scale` de posicionamento, `z-index`.
- Em SVG: `viewBox`, `preserveAspectRatio`, dimensões, raios, posição `x/y` de rótulos, `fontSize`, `dx/dy`, `text-anchor`, espaçamento entre nós. Em órbitas: a variável `--radius` / prop `radius`, os tamanhos dos nós e a área do container.
- Em cards: largura, altura, padding, gap interno, tamanho de ícones, badges e marcadores, colunas da grade que os contém, alinhamento entre cards irmãos.
- Em gráficos: tamanho da área do gráfico, margens internas para rótulos, espessura de traços e tamanho de marcadores (proporcionais), tamanho de legendas e de fontes de rótulos, eixos e valores.
- Em animações: só valores em px proporcionais ao redimensionamento (Contrato 3, seção 2.3).
- (Recharts e Reaviz estão instalados, mas **nenhum slide os usa hoje**: `ui/chart.tsx` e `ui/funnel-chart.tsx` não são importados. Todos os gráficos dos slides são **SVG próprio + Framer Motion** ou **SVG estático no `index.html`**.)
- Remover `truncate`, `line-clamp-*`, `text-ellipsis`, `whitespace-nowrap` e `overflow-hidden` **quando estiverem escondendo conteúdo**. O texto precisa aparecer inteiro.
- Quebra de linha apenas **visual** (por largura de container ou `text-wrap: balance`). Não insira `<br>` que mude o sentido nem divida palavras.

### 2.3 Gráficos e cards: ajustar sim, descaracterizar não

Gráficos e cards **devem** ser redimensionados e ter as fontes ampliadas sempre que estiverem pequenos, apertados, ilegíveis ou mal aproveitando o espaço do slide. A regra é: **muda a escala e o espaço, nunca a essência**. Todo ajuste precisa respeitar os três contratos abaixo.

#### Contrato 1: DADOS preservados
- **Gráficos:** valores, séries, categorias, rótulos, unidades, escalas, domínio dos eixos, ordem dos elementos, proporções entre barras/fatias/áreas, formato das curvas e posições que carregam significado (pontos, inclinações, cruzamentos, distâncias no *dumbbell*, intensidades do heatmap) ficam **exatamente iguais**.
  - Ampliar um SVG é permitido **só de forma proporcional** (mudando dimensões renderizadas ou `viewBox` de forma uniforme). É proibido esticar só um eixo quando isso distorce a leitura (por exemplo, exagerar uma inclinação ou achatar uma diferença).
  - Se precisar mover um rótulo para ele não colidir, mova **só o rótulo** (com linha-guia se preciso), nunca o ponto, a barra ou o nó ao qual ele se refere.
  - Arrays e objetos de dados (`stepsData`, `cardsData`, `evidenceCardsData`, `contextTimelineData`, pontos de path `d="..."` que representam dados etc.) **não podem aparecer no `git diff`**, a não ser que a mudança seja só em propriedades de estilo dentro do objeto (por exemplo `size`) e isso esteja justificado.
- **Cards:** título, subtítulo, corpo, bullets, métricas, valores, ícones, badges e ordem dos cards ficam **exatamente iguais**.

#### Contrato 2: COMPONENTES preservados
- Mantenha o **mesmo tipo de gráfico ou diagrama** (órbita continua órbita, funil continua funil, timeline continua timeline, matriz continua matriz, *dumbbell* continua *dumbbell*, fluxo continua fluxo). Não troque de biblioteca, não substitua componentes e não reescreva um gráfico do zero.
- Mantenha a **mesma quantidade** de cards, nós, séries, barras, células, marcos, setas e ícones, e a mesma relação entre eles (quem se conecta com quem, quem está dentro de quem).
- Mantenha o **estilo visual** de cada card e gráfico: vidro/blur, bordas, raio, sombras, gradientes, cores de eixo, ícones Lucide, tipografia (Urbanist/Satoshi). Pode ajustar a *espessura* de traços e o *tamanho* de marcadores e ícones na mesma proporção do redimensionamento, para não ficarem finos ou minúsculos.
- Wrappers novos (um `div` para grid ou alinhamento) só se forem indispensáveis para a diagramação. Não crie componentes novos nem mude props de comportamento.

#### Contrato 3: ANIMAÇÕES preservadas
- Mantenha tipo, ordem, direção, `delay`, `duration`, `ease`, `stagger`, `variants`, `initial/animate/exit`, `whileHover`, `whileInView`, `layout`/`layoutId`, animações de desenho de traço (`pathLength`, `strokeDashoffset`), rotação de órbitas (`--duration`, `animate-orbit`), gatilhos por `isActive` e o comportamento de `hover`/clique.
- **Pode** ajustar valores de animação em px **só na proporção do redimensionamento**, para o movimento manter a mesma aparência: por exemplo, se um card cresceu 1.3×, `y: 14` pode virar `y: 18`, e o raio de uma órbita pode crescer ou encolher para caber no container.
- `whileHover` com `scale`/`y`: garanta que, no estado de hover, o card ou gráfico **continue dentro do slide** e não cubra vizinhos (reduza a margem de colisão via layout, não removendo o hover).
- O **estado final** de toda animação precisa ficar na posição diagramada correta, sem sobreposição. Os **estados intermediários** não podem fazer elementos saírem do slide nem passarem por cima de texto de forma que atrapalhe a leitura.
- Não remova animações para "resolver" problemas de layout.

### 2.4 Salvaguarda automática de integridade (obrigatória)
Antes da primeira alteração, gere uma **baseline de conteúdo** de todos os slides e, ao final, compare. O resultado da comparação tem de ser **idêntico** (zero diferenças). Use o script da seção 4.2.
Além disso, revise o `git diff` final e confirme que **nenhuma linha alterada mexe em texto JSX, string de dados, array de conteúdo ou atributo semântico**. As alterações devem se limitar a `className`, `style`, props numéricas de layout e CSS.

---

## 3. SISTEMA DE LEGIBILIDADE ALVO (canvas 1920×1080, apresentação projetada em auditório)

A plateia verá os slides projetados, de longe. A auditoria encontrou **mais de 470 ocorrências de fonte abaixo de 13 px** nos componentes, incluindo `7.5px`, `8px`, `8.5px`, `9px`, `9.5px` e **144 ocorrências de `text-[10px]`**, além de ~51 ocorrências de `font-size:11px` inline no `index.html`. Isso é ilegível em projeção.

### 3.1 Escala tipográfica mínima (px no canvas 1920×1080)

| Nível | Uso | Alvo | Mínimo absoluto |
|---|---|---|---|
| H1 slide | Título principal do slide | 44–56 | 40 |
| Lead | Subtítulo, frase-síntese abaixo do título | 22–26 | 20 |
| H3 card | Título de card, título de painel | 24–30 | 22 |
| Corpo | Texto de card, bullets, descrições | 18–21 | 17 |
| Dado | Rótulo de gráfico, eixos, legendas, nós de órbita e timeline, células de matriz | 16–18 | 15 |
| Micro | Badges, eyebrows em caixa-alta, tags, fontes/citações de estudo, rodapé | 14–15 | **14** |
| Números de destaque | KPIs, métricas grandes | 28–48 | 24 |

- **Piso absoluto do deck: 14 px.** Nenhum texto pode ficar abaixo disso, inclusive em SVG (veja 3.3).
- Slide 41 (Referências), por ser denso: mínimo de 15 px, e se for preciso reorganize em 2 colunas. Nunca remova referências.
- **Hierarquia:** cada nível deve ser pelo menos ~1.2× maior que o nível abaixo. Ao subir as fontes pequenas, suba as maiores proporcionalmente se a hierarquia se achatar.
- **Line-height:** corpo 1.35–1.5; títulos 1.05–1.15; micro em caixa-alta 1.2 com `tracking` de 0.04–0.08em.
- **Peso:** abaixo de 20 px, use peso ≥ 500 (Satoshi Medium) e evite pesos light.
- **Comprimento de linha:** corpo com no máximo ~80–90 caracteres por linha; aumente colunas ou largura de card em vez de deixar linhas longas demais.
- **Contraste:** texto < 24 px com contraste ≥ 4.5:1 sobre o fundo real (incluindo cards translúcidos/vidro). Cinzas como `#a1a1aa` e `gray-400` sobre `#fdfdfd` reprovam: use `#5f6062`, `#52525b` ou `#3f4042`.

### 3.2 Tabela de conversão padrão (ponto de partida; ajuste por contexto)

| Atual | Novo |
|---|---|
| ≤ 9.5 px | 14–15 px |
| 10–11.5 px | 15–16 px |
| 12–13.5 px | 16–17 px |
| 14–15.5 px | 17–18 px |
| 16–17.5 px | 18–20 px |
| 18–20 px | 20–22 px |

Tailwind nomeado: `text-xs` (12) → mínimo 15; `text-sm` (14) → mínimo 17. Prefira `text-[Npx]` explícito, seguindo o padrão do projeto.

### 3.3 Tamanho efetivo em SVG
Um `fontSize` dentro de um SVG com `viewBox` é escalado. **Tamanho efetivo = fontSize × (largura renderizada do SVG ÷ largura do viewBox)**. Exemplo: `viewBox="0 0 460 265"` renderizado com 600 px de largura torna `fontSize="11"` ≈ 14.3 px. Calcule sempre o tamanho efetivo, não o nominal. O script da seção 4.3 faz isso via `getScreenCTM()`.

---

## 4. METODOLOGIA (siga as fases em ordem)

### FASE 0: Preparação
1. `git status` → criar a branch `fix/diagramacao-legibilidade` → commit de checkpoint (seção 1.1).
2. `npm run dev` e abrir no Browser pane com viewport **exatamente 1920×1080** (ou maior, com escala conhecida). Confirme a escala: `document.querySelector('deck-stage section').getBoundingClientRect().width / 1920`.
3. Para cada slide, espere as animações de entrada terminarem (Framer Motion/GSAP têm delays; aguarde ~2.5–3 s após `goTo`) antes de medir ou capturar.

### FASE 1: Baselines
**4.1 Screenshots "antes"** dos 42 slides (estado final pós-animação). Salve no scratchpad, fora do repositório.

**4.2 Baseline de conteúdo** (execute no console da página, com todos os slides visitados pelo menos uma vez para que as ilhas React estejam montadas):

```js
const deck = document.querySelector('deck-stage');
const secs = [...deck.querySelectorAll(':scope > section')];
const wait = ms => new Promise(r => setTimeout(r, ms));
const snapshot = [];
for (let i = 0; i < secs.length; i++) {
  deck.goTo(i); await wait(3000);
  const s = secs[i];
  const clone = s.cloneNode(true);
  clone.querySelectorAll('style,script').forEach(n => n.remove());
  const text = clone.textContent.replace(/\s+/g, ' ').trim();
  const attrs = [...s.querySelectorAll('[alt],[aria-label],[title]')]
    .map(e => [e.getAttribute('alt'), e.getAttribute('aria-label'), e.getAttribute('title')].join('|'));
  // Impressão digital estrutural de gráficos e cards (Contrato 2)
  const svgs = [...s.querySelectorAll('svg')].map(svg => {
    const c = t => svg.querySelectorAll(t).length;
    return { path: c('path'), circle: c('circle'), rect: c('rect'), line: c('line,polyline,polygon'), text: c('text,tspan'), g: c('g') };
  });
  const icons = s.querySelectorAll('svg.lucide, svg[class*="lucide"]').length;
  snapshot.push({
    i: i + 1, label: s.dataset.label, notes: s.dataset.speakerNotes, text, attrs,
    media: s.querySelectorAll('img,video,svg,canvas').length, svgs, icons
  });
}
JSON.stringify(snapshot);
```
Salve o JSON como `baseline-conteudo.json` no scratchpad. Ao final (Fase 5), gere `final-conteudo.json` do mesmo jeito e compare: **tem de ser idêntico**. `text`, `attrs` e `notes` não podem mudar em hipótese alguma. `svgs` e `icons` (quantidade de paths, círculos, retângulos, textos e ícones por gráfico) também devem ser idênticos; qualquer diferença precisa de justificativa explícita (por exemplo, uma linha-guia de rótulo acrescentada) e aprovação do usuário.

**4.2-b Baseline de dados dos gráficos (código):** antes de editar, registre o hash dos arrays e objetos de dados de cada componente de gráfico e card (por exemplo `git show HEAD:components/slide32-matrix.tsx`, trechos de `const ...Data = [...]`, atributos `d="..."` de paths que representam dados e coordenadas de pontos no SVG estático do slide 39). No final, confirme pelo `git diff` que esses trechos **não mudaram**.

**4.2-c Baseline de animações:** para cada slide com gráfico ou card animado, capture uma **sequência de entrada** (screenshots em t ≈ 0.3 s, 1 s, 2 s e 3 s após `goTo`, ou um GIF curto) e, nas órbitas, 3–4 quadros da rotação. Esses quadros servem para comparar ordem, direção e ritmo das animações depois dos ajustes.

### FASE 2: Auditoria automática + leitura visual, slide a slide

**4.3 Script de auditoria de diagramação** (roda por slide; ajuste `MIN` se precisar):

```js
async function auditSlide(i, MIN = 14) {
  const deck = document.querySelector('deck-stage');
  const s = [...deck.querySelectorAll(':scope > section')][i];
  deck.goTo(i); await new Promise(r => setTimeout(r, 3000));
  const sr = s.getBoundingClientRect(), k = sr.width / 1920;
  const toCanvas = r => ({ x: (r.left - sr.left) / k, y: (r.top - sr.top) / k, w: r.width / k, h: r.height / k });
  const visible = el => { const cs = getComputedStyle(el); return cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > 0.05 && el.getClientRects().length; };
  const hasOwnText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
  const out = { slide: i + 1, label: s.dataset.label, small: [], outside: [], clipped: [], truncated: [], topbar: [], overlaps: [] };
  const textEls = [];
  for (const el of s.querySelectorAll('*')) {
    if (!visible(el) || !hasOwnText(el)) continue;
    const cs = getComputedStyle(el);
    let fs = parseFloat(cs.fontSize);
    if (el instanceof SVGElement && el.getScreenCTM) fs = fs * Math.abs(el.getScreenCTM().a) / k;
    const r = el.getBoundingClientRect(), c = toCanvas(r);
    const t = el.textContent.trim().slice(0, 50);
    textEls.push({ el, r, t });
    if (fs < MIN) out.small.push({ t, fs: +fs.toFixed(1) });
    if (c.x < -1 || c.y < -1 || c.x + c.w > 1921 || c.y + c.h > 1081) out.outside.push({ t, ...c });
    if ((i + 1) >= 5 && (i + 1) <= 39 && c.y < 74) out.topbar.push({ t, y: c.y });
    if (el.scrollWidth > el.clientWidth + 1 && (cs.textOverflow === 'ellipsis' || cs.whiteSpace === 'nowrap')) out.truncated.push(t);
    if (cs.webkitLineClamp && cs.webkitLineClamp !== 'none' && el.scrollHeight > el.clientHeight + 1) out.truncated.push(t);
  }
  for (const el of s.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    if (!visible(el)) continue;
    if (/(hidden|clip)/.test(cs.overflow + cs.overflowX + cs.overflowY) && (el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2))
      out.clipped.push({ tag: el.tagName, cls: (el.className?.baseVal ?? el.className).toString().slice(0, 80), over: [el.scrollWidth - el.clientWidth, el.scrollHeight - el.clientHeight] });
  }
  for (let a = 0; a < textEls.length; a++) for (let b = a + 1; b < textEls.length; b++) {
    const A = textEls[a], B = textEls[b];
    if (A.el.contains(B.el) || B.el.contains(A.el)) continue;
    const ix = Math.min(A.r.right, B.r.right) - Math.max(A.r.left, B.r.left);
    const iy = Math.min(A.r.bottom, B.r.bottom) - Math.max(A.r.top, B.r.top);
    if (ix > 2 * k && iy > 2 * k) out.overlaps.push([A.t, B.t]);
  }
  return out;
}
// Uso: const rel = []; for (let i = 0; i < 42; i++) rel.push(await auditSlide(i)); rel;
```

> O script é um **radar**, não um veredito. Alguns `clipped` são intencionais (máscaras decorativas, vídeos com `object-fit`, órbitas animadas) e alguns overlaps são de propósito (texto sobre fundo decorativo). **Valide tudo visualmente** com screenshot e zoom. Também procure a olho o que o script não pega: gráfico sobre gráfico, linhas/setas de conexão cruzando texto, ícones sobre rótulos, nós de órbita saindo do container ou colidindo entre si, rótulos de eixo cortados, legendas colando nas bordas, cards com alturas desiguais sem motivo, vazios desbalanceados e elementos fora da grade.

**4.4 Leitura visual de cada slide.** Para cada um dos 42, registre em um relatório de auditoria (`AUDITORIA_DIAGRAMACAO.md` no scratchpad):
- Número, `data-label` e arquivos envolvidos (seção 7).
- Descrição da diagramação atual: grade, colunas, hierarquia, pontos de foco e fluxo de leitura.
- Problemas encontrados, cada um com **tipo** (fonte pequena, contraste, overflow, sobreposição, corte, desalinhamento, subdimensionamento, invasão da Top Bar), **elemento**, **medida atual** e **severidade** (🔴 ilegível/cortado/sobreposto · 🟠 difícil de ler · 🟡 refinamento).
- **Inventário de gráficos e cards do slide:** tipo de cada gráfico, quantidade de cards, tamanho atual (px no canvas), menor fonte efetiva, animações envolvidas (entrada, desenho de traço, órbita, `layout`, hover) e se precisa de ajuste de fonte, de dimensão ou de ambos.
- Plano de correção proposto, deixando claro para cada gráfico e card o que muda (fonte, tamanho, espaçamento) e o que fica preservado (dados, componente, animação).

**Apresente o relatório de auditoria ao usuário e peça aprovação antes de iniciar a Fase 3.**

### FASE 3: Correções (um eixo por vez, na ordem dos slides)

Ordem de trabalho: slides 1–4 → Eixo 1 (5–13) → Eixo 2 (14–18) → Eixo 3 (19–22) → Eixo 4 (23–26) → Eixo 5 (27–31) → Eixo 6 (32–35) → Eixo 7 (36–39) → 40–42. **Faça um commit por grupo**, com uma mensagem descrevendo o que foi ajustado.

#### 3.A Estratégia de espaço (aumentar a fonte vai gerar overflow, então resolva nesta ordem)
1. **Recuperar espaço desperdiçado:** paddings internos exagerados, `gap`s grandes, margens decorativas, `min-h` fixos inflados, ícones e ornamentos grandes demais em relação ao texto.
2. **Redistribuir a grade:** rever `grid-template-columns` e proporções (por exemplo `40fr 60fr`), dar mais área a quem tem mais texto e usar a largura útil total (1920 menos as margens laterais do slide).
3. **Trocar alturas fixas por flexíveis:** `flex-1 min-h-0`, `grid-rows-[auto_1fr_auto]`, `h-auto`. Evite `h-[Npx]` rígido em containers com texto.
4. **Reduzir elementos decorativos**, nunca o conteúdo: diminuir raio de órbitas, halos, glows, ilustrações e vídeos decorativos para liberar área.
5. **Só por último**, reduzir fontes **dentro da faixa alvo**, sem nunca descer abaixo dos mínimos da seção 3.1.
6. **Nunca** "resolver" overflow com `overflow-hidden`, `truncate`, `line-clamp`, `scale()` global do slide inteiro ou removendo conteúdo.

#### 3.B Área segura do slide
- Margens laterais mínimas de **72–100 px**; margem inferior mínima de **40 px**; slides 5–39 com o conteúdo começando **abaixo de 74 px** (Top Bar) mais um respiro de ≥ 16 px.
- Nada (texto, card, nó de gráfico, sombra relevante) pode ultrapassar 0–1920 × 0–1080.
- Rodapés, fontes de estudo e linhas de citação precisam ter respiro em relação à borda inferior e ao conteúdo acima.

#### 3.C Cards: ajuste de fontes e dimensões (respeitando a seção 2.3)

**Quando ajustar:** sempre que um card tiver texto abaixo dos mínimos da seção 3.1, estiver apertado (texto encostando nas bordas, linhas demais para a largura), for pequeno demais para o espaço disponível no slide, estiver com altura diferente dos irmãos sem motivo, cortar conteúdo ou colidir com vizinhos.

**Fontes dentro dos cards (hierarquia interna mínima):**
| Elemento do card | Alvo | Mínimo |
|---|---|---|
| Título do card | 24–30 px | 22 px |
| Subtítulo/descrição curta | 18–20 px | 17 px |
| Corpo, bullets | 18–21 px | 17 px |
| Rótulo de métrica | 16–18 px | 15 px |
| Valor de métrica / número de destaque | 20–48 px (conforme o peso) | 18 px |
| Badge, tag, eyebrow, legenda de cor | 14–16 px | 14 px |
| Fonte/citação dentro do card | 14–15 px | 14 px |

**Dimensões e estrutura:**
- **Tamanho do card proporcional ao conteúdo e ao slide:** se o card está pequeno com área livre ao redor, amplie largura/altura; se o slide tem N cards, redistribua a grade para que todos caibam com o novo tamanho de fonte, sem vazios desbalanceados.
- **Cards irmãos** na mesma linha: mesma altura (`items-stretch` / `grid-auto-rows: 1fr`), cabeçalhos alinhados entre si (o `slide5-cards.tsx` já usa `min-h` no header para isso; replique o padrão onde fizer sentido), métricas e rodapés alinhados na base (`mt-auto`).
- **Padding interno** proporcional à nova fonte (≈ 24–32 px em cards médios, 20–24 px em cards compactos); `gap` entre título, corpo e métricas de 10–16 px.
- **Ícones, badges e marcadores** crescem junto com o texto que acompanham (ícone ≈ 1–1.2× a altura da linha do texto ao lado), alinhados à primeira linha.
- **Área de gráfico dentro do card** (por exemplo, a área central de 275 px do slide 5): amplie junto com o card para o gráfico interno não ficar espremido; aplique também as regras da seção 3.D.
- **Métricas em linha** (rótulo + valor): se o rótulo não couber, deixe quebrar em 2 linhas em vez de `truncate`; reduza o gap antes de reduzir a fonte.
- Texto nunca encosta nas bordas; nenhum conteúdo escondido por `overflow-hidden`, `truncate` ou `line-clamp`.
- **Hover:** se o card tem `whileHover` (`y`, `scale`, sombra), o card no estado de hover continua dentro do slide e não cobre texto do vizinho. Resolva com espaçamento, não removendo o hover.
- **Preservar:** mesmo número e ordem de cards, mesmo conteúdo, mesmo estilo (vidro, borda, raio, sombra, gradiente, cor de eixo), mesmos ícones e mesmas animações de entrada (Contratos 1, 2 e 3).

#### 3.D Gráficos e diagramas: ajuste de fontes e dimensões (respeitando a seção 2.3)

**Quando ajustar:** sempre que um gráfico tiver rótulos, eixos, legendas ou valores abaixo de 15 px efetivos, estiver pequeno em relação ao espaço disponível, com elementos colidindo, rótulos cortados nas bordas, traços finos demais para projeção ou marcadores minúsculos.

**Inventário dos gráficos do deck:**
- **SVG próprio com Framer Motion (componentes):** `slide5-cards` (radial multidimensional, `viewBox 460×265`), `slide10-plasticity`, `slide11-cascades`, `slide12-resilience`, `slide13-synthesis` (+ `ui/radial-orbital-timeline`), `slide16-flow`, `slide17-stage` (`ui/area-chart-1`, SVG próprio), `slide20-circle`, `slide20-cards`, `slide29-circle`, `slide30-flow`, `slide32-matrix` (heatmap), `slide33-funnel`, `slide38-cards`, `slide40-cards` (`ui/ruixen-bento-cards`).
- **Animação de desenho de traço (`pathLength`/`strokeDashoffset`):** `slide16-flow`, `slide20-circle`, `slide29-circle`, `slide30-flow`. Ao redimensionar, confira se o traço continua sendo desenhado por inteiro e termina exatamente no ponto final.
- **Animações `layout`/`layoutId`:** `slide20-circle`, `slide29-circle`, `slide32-matrix`. Mudanças de tamanho do container disparam re-layout: confira se não surgem saltos ou transições estranhas.
- **Órbitas (rotação contínua):** `ui/orbiting-circles` (slides 21, 24, 25, 26, 27, 35, 38), `ui/orbiting-circles-02` (slide 9), `ui/radial-orbital-timeline` (slide 13).
- **Timelines:** `ui/timeline` (6), `ui/roadmap-card` (22, 23), `slide28-timeline`, `slide15-timeline-pills`.
- **SVG estático no `index.html`:** 57 SVGs, com concentração nos slides 39 (*dumbbell*, 10 SVGs), 4 (9), 8 (7), 37 (7), 7 (6), 34 (6) e 6 (3).

**Fontes em gráficos (tamanho efetivo, veja 3.3):**
| Elemento | Alvo | Mínimo |
|---|---|---|
| Título do gráfico | 20–24 px | 18 px |
| Rótulos de dados, nós, etapas, células | 16–18 px | 15 px |
| Rótulos de eixo, ticks | 15–17 px | 15 px |
| Legenda | 15–17 px | 15 px |
| Valor numérico em destaque no gráfico | 18–28 px | 16 px |
| Anotação/nota de fonte do gráfico | 14–15 px | 14 px |

**Dimensões e estrutura:**
- **Área do gráfico:** o gráfico deve ocupar a área que o conteúdo pede. Se está pequeno num canto com espaço sobrando, amplie-o; se divide o slide com cards, redistribua a grade (por exemplo, de 40/60 para 50/50) em vez de manter um gráfico ilegível.
- **Escala proporcional:** redimensione mudando largura e altura renderizadas com `aspect-ratio` preservado ou ajustando o `viewBox` de forma **uniforme**. Nunca distorça só um eixo (Contrato 1).
- **Quando só a fonte precisa crescer** (o gráfico já tem bom tamanho): aumente `fontSize` dos `<text>` e ajuste `x/y/dx/dy/text-anchor` dos rótulos para não colidirem. Se preciso, amplie o `viewBox` com margem (padding interno) para os rótulos das extremidades caberem, sem mover os pontos de dados.
- **Traços e marcadores:** ao ampliar ou reduzir o gráfico, ajuste `strokeWidth`, raio de pontos, tamanho de setas (`marker`) e ícones na mesma proporção, para ficarem nítidos na projeção (traços de dados ≥ 2.5 px efetivos, linhas de grade ≥ 1 px).
- **Rótulos que colidem:** reposicione **só o rótulo** (lado oposto, acima/abaixo, fora com linha-guia), nunca o dado.
- **Margem de segurança:** nenhum rótulo, nó ou traço encosta nas bordas do container ou é cortado por `overflow-hidden` do wrapper (verifique os wrappers dos cards). Use `overflow-visible` no SVG só se o rótulo continuar dentro do card e do slide.
- **Órbitas:** raio máximo + metade do nó + rótulo precisam caber no container em **todas as posições da rotação**. Verifique em 3–4 momentos da animação. Os nós não podem cobrir o texto central, não podem colidir entre si e não podem invadir cards vizinhos. Ajuste `radius`, tamanho do nó e área do container, sem mudar `--duration`, direção ou quantidade de nós.
- **Timelines:** distribua os marcos em toda a largura disponível com espaçamento uniforme; os rótulos não se sobrepõem entre si nem à linha; mantenha a ordem cronológica e a posição relativa dos marcos.
- **Matriz/heatmap (slide 32):** células com texto ≥ 15 px efetivo; cabeçalhos de linha e coluna legíveis; mesma quantidade de linhas e colunas e mesmas intensidades qualitativas (a matriz é qualitativa, sem números: não acrescente valores).
- **Funil (slide 33):** mesmas etapas e proporções; rótulos espremidos nas etapas estreitas vão para fora com linha-guia, sem alterar o texto.
- **Dumbbell (slide 39):** posições dos pontos e comprimentos das barras correspondem aos **valores publicados** e não podem se mover. Só os rótulos, fontes, espessuras e a área do gráfico podem ser ajustados.
- **Setas e conectores:** não atravessam texto; ajuste rotas ou pontos de ancoragem mantendo **as mesmas conexões** (mesma origem, mesmo destino, mesmo sentido, inclusive as bidirecionais do slide 7).
- **Animações:** depois de cada ajuste, reproduza a entrada do slide e confirme a mesma sequência, a mesma duração e o mesmo estado final corretamente posicionado (Contrato 3).

#### 3.E Componentes compartilhados (`components/ui/*`)
Antes de alterar um componente de `ui/`, verifique **todos** os slides que o usam (seção 7) e valide cada um depois. Se um slide precisar de ajuste diferente dos outros, prefira **props/className por instância** em vez de mudar o default do componente.

#### 3.F Estilos inline do `index.html`
Os cabeçalhos (eyebrow, H1, lead) e os slides estáticos usam `style="..."` inline. Ajuste diretamente ali, mantendo o padrão do arquivo. Em cada edição, mexa **somente** nas propriedades de estilo, sem tocar em nenhum caractere do texto entre as tags.

### FASE 4: Verificação (obrigatória para cada grupo de slides e no final)
1. Rodar de novo `auditSlide` em todos os 42: **zero** itens em `small` (< 14 px), `outside`, `topbar`, `truncated` e `overlaps` reais; `clipped` só os decorativos justificados.
2. Screenshots "depois" dos 42 slides, comparados lado a lado com os "antes". Confira com zoom os slides mais densos.
3. Comparar `baseline-conteudo.json` × `final-conteudo.json`: **idênticos**.
4. Revisar o `git diff` inteiro e confirmar que só mudaram propriedades de layout/estilo.
5. `npm run build` sem erros; abrir `dist/index.html` (ou `npx vite preview`) e conferir 5–6 slides amostrais.
6. Checar o viewport mobile (preset mobile do Browser pane) para garantir que não houve regressão das correções recentes de Safari/iOS (commits `e28a03a` e `b6cc45b`: logo e grids responsivos). O canvas escala, mas os fallbacks de mobile precisam continuar funcionando.
7. Navegar pelo deck inteiro com as setas e confirmar que as animações de entrada terminam nas posições corretas e sem sobreposição.
8. **Verificação específica de gráficos e cards:**
   - `svgs` e `icons` do `final-conteudo.json` idênticos à baseline (Contrato 2).
   - Trechos de dados (4.2-b) inalterados no `git diff` (Contrato 1).
   - Comparar as sequências de entrada e os quadros de órbita (4.2-c) com os de antes: mesma ordem, mesma direção, mesmo ritmo, mesmo estado final (Contrato 3).
   - Traços com `pathLength` desenhados por inteiro; órbitas sem colisão em nenhum ponto da rotação; animações `layout` sem saltos.
   - Passar o mouse sobre cada card e gráfico interativo: o hover funciona e nada sai do slide nem cobre vizinhos.
   - Zoom em cada gráfico: todo rótulo, tick, legenda e valor com ≥ 15 px efetivos e nenhum rótulo cortado nas bordas.

### FASE 5: Entrega
- Relatório final `RELATORIO_DIAGRAMACAO.md` (no scratchpad, e enviado ao usuário) com uma tabela por slide: problemas encontrados → correção aplicada → arquivos alterados → medidas antes/depois (fonte mínima, overflow etc.).
- Lista do que **não** foi possível resolver sem mexer no conteúdo (se houver), com recomendação para o usuário decidir.
- Commits na branch `fix/diagramacao-legibilidade`. **Não faça push, merge nem deploy sem autorização explícita.**

---

## 5. CRITÉRIOS DE ACEITE (Definition of Done)

- [ ] 0 textos com tamanho efetivo < 14 px em todo o deck (inclusive SVG).
- [ ] Corpo de texto de cards ≥ 17 px; rótulos de gráfico ≥ 15 px efetivos.
- [ ] 0 elementos fora de 1920×1080; 0 invasões da faixa de 74 px da Top Bar (slides 5–39).
- [ ] 0 sobreposições não intencionais entre textos, cards, gráficos, nós, setas ou ícones.
- [ ] 0 textos cortados por `truncate`, `line-clamp` ou `overflow-hidden`.
- [ ] Contraste ≥ 4.5:1 para texto < 24 px.
- [ ] Cards irmãos alinhados e com alturas coerentes; gráficos ocupando a área adequada.
- [ ] Cards com fontes e dimensões ajustados onde havia necessidade, com a mesma quantidade, ordem, conteúdo, estilo e ícones.
- [ ] Gráficos com fontes, rótulos, traços e área ajustados onde havia necessidade, com **dados idênticos** (valores, séries, proporções, posições dos pontos) e sem distorção de eixo.
- [ ] Mesmos componentes de gráfico e card (mesmo tipo, mesma quantidade de elementos, mesmas conexões); impressão digital `svgs`/`icons` idêntica.
- [ ] Animações de gráficos e cards (entrada, desenho de traço, órbitas, `layout`, hover) com a mesma sequência, direção, ritmo e estado final.
- [ ] Hierarquia tipográfica preservada (H1 > Lead > H3 > Corpo > Dado > Micro).
- [ ] Baseline de conteúdo **idêntica** antes e depois.
- [ ] `npm run build` ok; sem regressão no mobile.
- [ ] Cores de eixo, fontes, ícones, imagens e animações inalterados.

---

## 6. ARMADILHAS CONHECIDAS NESTE PROJETO

- **Medir com a escala errada:** o deck escala o canvas, então sempre converta as medidas de `getBoundingClientRect()` dividindo pela escala `k`.
- **Medir no meio da animação:** Framer Motion (`initial/animate` com `delay`) e GSAP deslocam elementos. Meça depois de ~3 s.
- **Ilhas React não montadas:** algumas só montam ou animam quando o slide fica ativo (`isActive`). Visite o slide antes de medir.
- **`overflow-hidden` em wrappers de gráfico** (por exemplo, a área central dos cards do slide 5) pode esconder rótulos de SVG com `overflow-visible`. Verifique se os rótulos das bordas não estão sendo cortados pelo wrapper.
- **`min-h-[Npx]` e `h-[Npx]` fixos** ao lado de fontes maiores são a principal causa de overflow. Revise-os junto com cada aumento de fonte.
- **Componentes `ui/` compartilhados:** um ajuste em `orbiting-circles.tsx` afeta 7 slides.
- **`text-wrap: balance` do deck-stage** pode mudar as quebras de título quando o tamanho muda. Confira se nenhum título ficou com 3+ linhas desnecessárias.
- **Texto em SVG com `fontSize` nominal pequeno** pode estar ok (se o SVG é escalado para cima) ou pior do que parece (se escalado para baixo). Use sempre o tamanho efetivo.
- **Edições no `index.html`:** é um arquivo grande (~237 KB) com estilos inline longos. Use `Edit` com trechos únicos e nunca reescreva o arquivo inteiro.
- **Redimensionar gráfico com `pathLength`:** se o path mudar de escala via CSS, a animação continua correta; se você reescrever coordenadas do `d`, **não faça isso** (é dado e muda o traço). Escale pelo `viewBox`/tamanho do SVG.
- **Animações em px dentro de cards ampliados:** deslocamentos como `y: 14` ou `x: -30` ficam proporcionalmente menores num card maior. Ajuste só se o movimento ficar imperceptível, e na mesma proporção.
- **Esticar SVG sem querer:** `preserveAspectRatio="none"` ou largura/altura mudadas de forma independente distorcem proporções de dados. Mantenha a proporção.
- **`layout` do Framer Motion:** mudar o tamanho de um container com `layout` pode gerar uma animação de re-layout na entrada. Confira no navegador.

---

## 7. MAPA SLIDE → ARQUIVOS → PONTOS CRÍTICOS DETECTADOS

Legenda: "N < 13px (mín X)" = quantidade de classes `text-[..px]` abaixo de 13 px no arquivo e o menor valor encontrado (medição estática; confirme na auditoria visual).

| # | data-label | Arquivos | Pontos críticos pré-detectados |
|---|---|---|---|
| 01 | Capa | `index.html` (estático) | Checar logo/vídeo liquid-logo e respiro vertical |
| 02 | Palestrante | `index.html` (estático) | Checar formação/trajetória: tamanho do texto corrido |
| 03 | Conflitos | `index.html` + `#slide3-react-root` → `components/demo.tsx` (`ui/halo-reel`) | Grid 2 colunas; checar logos de conflitos e texto da resolução |
| 04 | Roteiro | `index.html` (estático, fundo escuro) | Contraste de textos cinza sobre `#0f1012` |
| 05 | Conceito central | `index.html` + `slide5-cards.tsx` | Diff não commitado presente; SVG `viewBox 460×265`; `truncate` nas métricas; `line-clamp-2` no subtítulo |
| 06 | Média × indivíduo | `index.html` + `slide6-timeline.tsx` (`ui/timeline`) | 4 font-size < 13 px inline; `text-xs/sm` no componente |
| 07 | Interação entre sistemas | `index.html` + `slide7-feature-cards.tsx` (`ui/animated-feature-card`) | 6 font-size < 13 px inline; setas bidirecionais × texto |
| 08 | Campo de forças | `index.html` (estático) | 9 font-size < 13 px inline |
| 09 | Natureza e ambiente | `index.html` + `slide9-stage.tsx` (`ui/orbiting-circles-02`, `ui/animated-feature-card`) | Órbita cabendo no container |
| 10 | Plasticidade | `slide10-plasticity.tsx` | 9 < 13 px (mín 10) |
| 11 | Cascatas | `slide11-cascades.tsx` | 9 usos de `text-xs/sm` |
| 12 | Risco e resiliência | `slide12-resilience.tsx` | 🔴 **pior do deck: 40 < 13 px (mín 7.5 px)** |
| 13 | Ponte: fotografia | `slide13-synthesis.tsx` (`ui/radial-orbital-timeline`) | 10 < 13 px (mín 9.5); `radial-orbital-timeline` com 13 < 13 px (mín 8) |
| 14 | Cognição em sistema | `slide14-cognition.tsx` (`ui/card-7`) | 🔴 34 < 13 px (mín 8 px) |
| 15 | 0–5 anos | `slide15-stage.tsx`, `slide15-cognitive-card.tsx`, `slide15-timeline-pills.tsx` (`ui/card-22`) | `card-22` com 6 < 13 px (mín 10) |
| 16 | 6–12 anos | `slide16-flow.tsx`, `slide16-cards.tsx` | flow 10 < 13 px (mín 9); cards 6 (mín 9) |
| 17 | Adolescência cognitiva | `slide17-stage.tsx` (`ui/area-chart-1`, SVG próprio), `slide17-cards.tsx` | cards 12 < 13 px (mín 9.5); rótulos e eixos do gráfico de área |
| 18 | Perfis, não déficits | `slide18-stage.tsx` (`ui/sleep-tracker-card`), `slide18-cards.tsx` | cards 13 < 13 px (mín 10) |
| 19 | Co-regulação | `slide19-stage.tsx` (`ui/advanced-stats`) | `advanced-stats` 10 < 13 px (mín 9.5); section com `padding:0 0 80px` (checar Top Bar) |
| 20 | Perceber, compreender, regular | `slide20-circle.tsx`, `slide20-cards.tsx` | Rótulos do círculo |
| 21 | Emoção e identidade | `slide21-orbit.tsx` (`ui/orbiting-circles`), `slide21-cards.tsx` (+ `Slide21RightCards`) | cards 13 < 13 px (mín 10); 3 ilhas React no mesmo slide (risco de colisão) |
| 22 | Significado emocional | `slide22-timeline.tsx` (`ui/roadmap-card`), `slide22-cards.tsx` (`ui/animated-feature-card`) | 3 < 13 px inline |
| 23 | Mundo social | `slide23-timeline.tsx` (`ui/roadmap-card`), `slide23-cards.tsx` | cards 7 < 13 px (mín 10) |
| 24 | Pertencer | `slide24-orbit.tsx`, `slide24-cards.tsx` | orbit 6 (mín 10); cards 7 (mín 10) |
| 25 | Pares e o eu | `slide25-orbit.tsx`, `slide25-cards.tsx` | cards 8 < 13 px (mín 10) |
| 26 | Risco social | `slide26-orbit.tsx`, `slide26-cards.tsx` | cards 10 < 13 px (mín 10) |
| 27 | Não é variável única | `slide27-orbit.tsx`, `slide27-cards.tsx` | orbit 7 (mín 10.5); cards 8 (mín 9.5) |
| 28 | Trajetória terapêutica | `slide28-timeline.tsx`, `slide28-cards.tsx` | 🔴 cards 21 < 13 px (mín 9); timeline 8 (mín 10) |
| 29 | Clínico × percebido | `slide29-circle.tsx`, `slide29-cards.tsx` | cards 8 < 13 px (mín 10) |
| 30 | Dinâmica familiar | `slide30-flow.tsx`, `slide30-cards.tsx` | flow 7 (mín 8.5); cards 10 (mín 9.5) |
| 31 | Decisões compartilhadas | `slide31-cards.tsx` | 10 < 13 px (mín 10) + 7 inline no `index.html` |
| 32 | Matriz do protocolo | `slide32-matrix.tsx` | Células do heatmap e cabeçalhos |
| 33 | Rastrear e aprofundar | `slide33-funnel.tsx` + `index.html` | 🔴 14 font-size < 13 px inline; etapas estreitas do funil |
| 34 | Multi-informante | `slide34-cards.tsx` (`Slide34BannerCard` + `Slide34RightCards`) | 14 < 13 px (mín 9.5) |
| 35 | O ciclo do protocolo | `slide35-orbit.tsx`, `slide35-cards.tsx` | cards 7 < 13 px (mín 10) |
| 36 | Posição × direção | `slide36-cards.tsx` + `index.html` | cards 8 (mín 9); 7 inline < 13 px |
| 37 | Sintoma × significado | `slide37-cards.tsx` | 8 < 13 px (mín 9.5); 5 leituras com o mesmo peso visual (manter isonomia) |
| 38 | Discordância informativa | `slide38-orbit.tsx`, `slide38-cards.tsx` | cards 9 < 13 px (mín 10) |
| 39 | Fotografia → filme | `index.html` (estático, dumbbell) | 🔴 **19 font-size < 13 px inline**; rótulos do dumbbell (não mover valores) |
| 40 | Take-home messages | `slide40-cards.tsx` (`ui/ruixen-bento-cards`) | Section com padding reduzido (`52px 90px 40px`); 7 blocos + faixa inferior |
| 41 | Referências | `index.html` (estático) | Lista densa: mínimo 15 px, 2 colunas se preciso, nenhuma referência removida |
| 42 | Contato | `index.html` (estático) | Checar hierarquia e respiro |

**Componentes compartilhados → slides afetados:**
- `ui/orbiting-circles.tsx` → 21, 24, 25, 26, 27, 35, 38
- `ui/orbiting-circles-02.tsx` → 9
- `ui/animated-feature-card.tsx` → 7, 9, 22
- `ui/roadmap-card.tsx` → 22, 23
- `ui/card-22.tsx` → 15
- `ui/card-7.tsx` → 14
- `ui/radial-orbital-timeline.tsx` → 13
- `ui/advanced-stats.tsx` → 19
- `ui/area-chart-1.tsx` → 17
- `ui/sleep-tracker-card.tsx` → 18
- `ui/timeline.tsx` → 6
- `ui/ruixen-bento-cards.tsx` → 40
- `ui/halo-reel.tsx` → 3 (via `demo.tsx`)
- Top Bar (`src/topbar-modules.ts`) → 5–39

---

## 8. FORMA DE TRABALHO E COMUNICAÇÃO

- Trabalhe de forma incremental: **auditoria → aprovação do usuário → correção por eixo → verificação → commit**.
- Depois de cada eixo, mostre ao usuário as screenshots antes/depois dos slides alterados.
- Se algum problema **só puder ser resolvido alterando conteúdo** (por exemplo, um bloco de texto que não cabe nem no mínimo de 14 px com a grade otimizada), **pare e pergunte**. Descreva o problema e ofereça opções de layout (dividir em colunas, reorganizar a grade, reduzir decorativos), nunca de conteúdo.
- Em caso de dúvida entre "é conteúdo" ou "é diagramação", trate como conteúdo e não altere.
- Não crie arquivos novos no repositório além do necessário. Relatórios e baselines ficam no scratchpad, e o relatório final é enviado ao usuário.
- Comunique-se em português.
