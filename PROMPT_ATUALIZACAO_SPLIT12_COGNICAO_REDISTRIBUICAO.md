# PROMPT: Divisão do slide 12, limpeza do slide "Cognição em sistema" e redistribuição de layout do deck (XVIII Congresso)

> Prompt autossuficiente para uma sessão do Claude Code aberta na pasta do projeto.
> Complementa `PROMPT_AJUSTE_DIAGRAMACAO_42_SLIDES.md` (regras de legibilidade e integridade continuam valendo) e parte do estado da branch `fix/diagramacao-legibilidade`.

---

## 0. PAPEL E MISSÃO

Você é diretor de arte sênior e engenheiro front-end de apresentações projetadas. Esta atualização tem três frentes, executadas nesta ordem:

1. **Dividir o slide 12 ("Risco e resiliência") em dois slides consecutivos.**
2. **Remover o card de QI do slide "Cognição em sistema"** (hoje na posição 14; depois da divisão ele passa a ser o **slide 15**, que é o número usado pelo usuário) e **redistribuir os dois blocos restantes com mais destaque**.
3. **Revisar o deck inteiro e redistribuir elementos onde o layout estiver quebrado ou mal aproveitado** (overflow, corte, colisão, fonte abaixo do piso, vazios desbalanceados).

O conteúdo textual, os dados, as animações e a identidade visual continuam intocáveis, com duas exceções autorizadas pelo pedido: (a) remover o card de QI e (b) criar o cabeçalho, as notas e o rodapé de referências do novo slide.

---

## 1. CONTEXTO TÉCNICO QUE MUDA COM A INSERÇÃO DE UM SLIDE

- O deck passa de **42 para 43 slides**. O `deck-stage.js` renumera `data-screen-label` em tempo de execução pela **posição** (`"NN Label"`), e a navegação (`goTo`, `#N`, `_index`) é por posição.
- **Top Bar (`src/topbar-modules.ts`) é posicional:** `getCurrentSlideNumber()` usa `stage._index + 1` e `EIXOS_DATA` usa faixas `startSlide/endSlide`. Todas as faixas a partir do Eixo 1 precisam andar +1:

  | Eixo | Antes | Depois |
  |---|---|---|
  | 1 Dinâmica Sistêmica | 5–13 | **5–14** |
  | 2 Cognição | 14–18 | **15–19** |
  | 3 Emocional | 19–22 | **20–23** |
  | 4 Social | 23–26 | **24–27** |
  | 5 Craniofacial | 27–31 | **28–32** |
  | 6 Protocolo | 32–35 | **33–36** |
  | 7 Clínica Longitudinal | 36–39 | **37–40** |

  O limite de exibição da Top Bar (`slideNum > 39`) vira `> 40`, e os comentários "5 a 39" / "1 a 42" são atualizados.
- **`src/main.tsx`:** as ilhas React são montadas por `id` de root (não por posição) e quase todas recebem `isActive || true`. Slide 3 usa `stage._index === 2` (não muda). Portanto a nova ilha só precisa de: import, função `renderSlide12bApp`, chamada dentro de `syncSlideVisibility`, `mountSlide12b` exposto em `window.initSlide12bClinical` e o id na lista `rootIds` do `MutationObserver`.
- **Nomes de arquivos e ids de root não são renumerados** (`slide14-cognition.tsx` continua com esse nome mesmo sendo o slide 15). Renumerar 30 arquivos seria ruído e risco. A nova ilha segue o sufixo `12b`: `components/slide12b-clinical.tsx` e `#slide12b-react-root`.
- **`index.html`:** renumerar os `data-screen-label` estáticos das sections a partir de "13" (13→14 … 42→43) para o HTML-fonte ficar coerente com o que o `deck-stage` exibe. Nenhuma regra CSS depende desses rótulos (verificado por `grep`).
- **Não editar:** `dist/` (sai do `npm run build`), `Desenvolvimento Infanto-Juvenil.dc.html`, `slides-1-16.html`, `deck-stage.js`, `node_modules/`, roteiros `.md`.
- **Árvore de trabalho com alterações não commitadas** de uma sessão anterior (slides 25, 27, 29, 30, 34 e 37, `ui/circle-menu.tsx`, `deck-stage.js`, `main.tsx`, `index.html`, `slide34-circle.tsx`, `slide37-integration.tsx`). **Não descartar nada** (`checkout`, `stash drop`, `reset --hard` proibidos). Commits só com autorização do usuário.

---

## 2. FRENTE 1: DIVIDIR O SLIDE 12

### 2.1 Estado atual (`components/slide12-resilience.tsx`, section `data-label="Risco e resiliência"`)
Grade superior de 3 colunas (`8fr 7fr 9fr`) + faixa inferior:
- Col. 1: card **Mapeamento de Trajetórias** (SVG de 3 curvas com seletor interativo, frase-síntese com ícone Compass).
- Col. 2: card **Sistemas da Resiliência** (definição operacional, 3 `CircularBeam` com feixe animado e flutuação, badge "interação", destaque "Parte importante da resiliência…").
- Col. 3: pilha com **Princípio Risco / Desfecho**, **Aplicação Clínica** e **Translação Diagnóstica** (card preto).
- Faixa inferior: banner **Princípio Central** + 4 bento cards (`kpis`: Probabilístico, Multissistêmico, Modificável, Não moralizante).

Tudo espremido: cards com fonte 14–17 px, gráfico de trajetórias pequeno.

### 2.2 Slide 12 (fica)
- Mantém cabeçalho, notas e posição.
- Grade superior passa a ter **2 colunas** (Trajetórias | Sistemas, aprox. `1.1fr 1fr`), ocupando a largura útil inteira (1720 px).
- Mantém **integralmente** a faixa inferior (banner Princípio Central + 4 bento cards).
- Com a largura liberada: ampliar o gráfico de trajetórias (SVG escala proporcional pelo container; **não mexer** em `dPath`/`areaPath`/coordenadas), subir fontes dos cards (título ≥ 26 px, corpo 18–19 px, micro ≥ 15 px), ampliar os `CircularBeam` e o espaçamento entre eles na proporção (sem mudar `speed`, cores, flutuação `x/y` além da proporção).
- Rodapé REF: fica a referência de Masten & Barnes (2018), usada pelos dois cards.

### 2.3 Slide 13 novo (logo depois do 12)
- `<section data-label="Risco na clínica" data-screen-label="13" data-speaker-notes="…">`, mesmo `style` base dos slides do Eixo 1 (padding `90px 100px …`, fundo `#fdfdfd`), eyebrow azul `#0071e3` "Eixo 1 · Processo dinâmico" (mesmo texto do 12, porque é continuação).
- **Título novo (autorizado):** frase curta derivada dos próprios cards, sem informação nova. Proposta: **"Do risco ao raciocínio clínico em trajetória"**.
- **Notas do apresentador (novas):** "Continuação do slide anterior. Risco modifica probabilidades, não fixa desfecho; nas anomalias craniofaciais é risco potencial, não destino psicossocial. Mudar a pergunta clínica para os fatores que aumentam ou reduzem o risco nesta criança, neste momento."
- Conteúdo: **os três cards da coluna 3, com o mesmo texto, badges, ícones e cores**, agora com protagonismo:
  - ~~Grade de 3 colunas iguais~~ (testada: gerou vazios verticais de ~300 px dentro dos cards). **Layout adotado:** "Princípio Risco / Desfecho" em faixa de largura total no topo (equação a 80 px, corpo a 28 px) e "Aplicação Clínica" + "Translação Diagnóstica" lado a lado abaixo, com a mesma altura. Ordem de leitura 1 → 2 → 3 preservada.
  - Tipografia alvo: eyebrow/badge 15–16 px, título do card 28–34 px (`risco ≠ desfecho` pode ir a 44–52 px, é o número de destaque), corpo 20–22 px, caixas internas 18–20 px.
  - Ordem mantida: Princípio Risco/Desfecho → Aplicação Clínica → Translação Diagnóstica.
  - Animação de entrada no mesmo padrão do slide 12 (`opacity/y` 10 px, `duration 0.35`, `ease [0.16,1,0.3,1]`, delays escalonados 0 / 0.05 / 0.1).
- Rodapé REF: McDorman (2024) e Speltz (1994), citados nos cards, mais Masten & Barnes (2018) (base do princípio risco ≠ desfecho). Nenhuma referência some do deck.
- Implementação: mover o JSX dos três cards para `components/slide12b-clinical.tsx` (componente `Slide12bClinical({ isActive })`), remover do `slide12-resilience.tsx`, registrar em `main.tsx` e criar a section no `index.html` com `#slide12b-react-root`, REF dock e logo no mesmo padrão.

---

## 3. FRENTE 2: SLIDE 15 "COGNIÇÃO EM SISTEMA" (`components/slide14-cognition.tsx`)

### 3.1 Estado atual
Grade 12 colunas: esquerda (7) com **Hierarquia Funcional Interdependente** (4 camadas + trilha com feixe animado) sobre **Maturação Heterocrônica** (régua etária + 4 trilhas); direita (5) com **Card7 "QI ≠ cognição inteira"** (vídeo de cubos) e o banner **"Desenvolvimento cognitivo = especialização + integração progressiva…"**. Margens laterais de 56 px (fora do padrão de 100 px do deck) e rodapé REF a 20 px da borda.

### 3.2 Alteração
1. **Remover o `Card7` de QI** (e os imports que ficarem órfãos: `Card7`, `Sparkles`). Não apagar `components/ui/card-7.tsx` nem o vídeo (ficam disponíveis; só não são mais usados).
2. **Redistribuir os dois blocos principais lado a lado**, cada um com metade da área útil (aprox. `1fr 1fr`, gap 32–40 px):
   - Esquerda: **Hierarquia Funcional Interdependente** (mesma ordem 4→1, mesma trilha animada, mesmo destaque do núcleo Diamond).
   - Direita: **Maturação Heterocrônica** em card (mesmo fundo branco, borda, sombra), crescendo em altura: trilhas mais altas (h 40–44 px), régua e rótulos maiores. As barras usam `leftPercent/widthPercent` (dados): **não alterar**.
   - Os dois blocos com a mesma altura e topo alinhado.
3. O banner **"Desenvolvimento cognitivo = …"** (conteúdo não pedido para remoção) vira a **faixa-síntese de largura total** abaixo dos dois blocos, mesmo gradiente e borda.
4. Ajustes de escala para o destaque: títulos de camada 22–24 px, descrições 18 px, pílulas do núcleo com título 19 px e texto 17 px, régua etária 17/15 px, trilhas com rótulo 18 px e janela 15 px.
5. Alinhar margens ao padrão do deck (≈ 100 px laterais; rodapé REF a ≥ 26 px da borda, como os demais `vancouver-dock`).

---

## 4. FRENTE 3: REDISTRIBUIÇÃO GERAL (auditoria de 11/09/2026, numeração antiga → nova)

Auditoria automática (`getScreenCTM`, bounding boxes em canvas 1920×1080) + leitura visual das 42 capturas. Falsos positivos descartados: textos SVG rotacionados (`fs 0`), quebras de linha inline (slides 22 e 41).

| Novo # | Slide | Problema | Severidade | Correção de layout |
|---|---|---|---|---|
| 7 | Interação entre sistemas | Badges 12 px e descrições 13.5 px nos 4 feature cards | 🔴 | Subir para 15/17 px nas instâncias do slide 7 (via props/className, sem mudar o default de `ui/animated-feature-card` que também serve 9 e 23) |
| 9 | Natureza e ambiente | Rótulos da órbita colidem entre si e com o nó central; faixas vazias acima e abaixo da órbita | 🟠 | Redistribuir raios/posições dos rótulos para não colidirem em nenhum ponto da rotação; aproveitar a altura livre |
| 26 | Pares e o eu | Nós do `circle-menu` com texto 9.5–11.5 px; nó "Escola e Comunidade" invade a margem esquerda (x = 20 px) | 🔴 | Nós maiores (título 18, subtítulo 15, tag 14), raio recalculado para caber entre 100 px e a coluna direita |
| 28 | Não é variável única | Rótulo central "DESFECHO DESENVOLVIMENTAL" 11–13 px; órbita pequena com vazio acima | 🟠 | Subir o rótulo para ≥ 15 px e centralizar melhor a órbita na coluna |
| 31 | Dinâmica familiar | Nós do fluxo com 11–13 px; card escuro corta a última linha (24 px de overflow) | 🔴 | Nós do fluxo com 15–18 px; recuperar espaço no card escuro (paddings/gaps) até o conteúdo caber inteiro |
| 33 | Matriz do protocolo | Coluna direita ultrapassa a margem inferior e colide com o logo | 🔴 | Compactar a coluna direita (gaps/paddings) e/ou redistribuir a altura para terminar ≥ 40 px acima da borda |
| 35 | Multi-informante | Nós do círculo com 11–13 px | 🔴 | Subir fontes dos nós para ≥ 15 px e rebalancear a coluna direita (hoje flutua com vazio no topo) |
| 38 | Sintoma × significado | Nós do diagrama de integração com 11–13 px | 🔴 | Subir para ≥ 15/17 px, ampliar nós e conexões na mesma proporção |

Regras de execução da frente 3: seguir integralmente a seção 2 (integridade), 3 (escala tipográfica) e 3.A–3.F (estratégia de espaço) do `PROMPT_AJUSTE_DIAGRAMACAO_42_SLIDES.md`. Mudança só em `className`/`style`/props numéricas de layout. Componentes `ui/` compartilhados: preferir ajuste por instância.

---

## 5. VERIFICAÇÃO (obrigatória)

1. Captura headless 1920×1080 dos 43 slides (Chrome via CDP, 3.2 s após `goTo` para a entrada terminar) e comparação com as 42 capturas "antes".
2. Rodar o radar de auditoria em todos os slides: 0 `small` reais (< 14 px), 0 `outside`, 0 invasão da Top Bar, 0 corte de conteúdo.
3. **Integridade de conteúdo:** o texto concatenado dos slides 12 + 13 novos contém tudo o que havia no slide 12 antigo (mais só o título e o REF novos); o slide 15 contém todo o texto do antigo 14 **menos** o do card de QI; todos os demais slides têm texto idêntico ao "antes" (comparação por `textContent` normalizado).
4. Top Bar: conferir o eixo ativo nos slides 13, 14 (Eixo 1), 15 (Eixo 2), 40 (Eixo 7) e ausência no 41.
5. `npx tsc --noEmit` (ou o equivalente do projeto) sem erros novos e `npm run build` sem erros.
6. Relatório final ao usuário: o que mudou, capturas antes/depois dos slides alterados, decisões tomadas (título do novo slide, interpretação dos "dois cards"), e o que ficou pendente.

---

## 6. CRITÉRIOS DE ACEITE

- [ ] Slide 12 com 2 cards (Trajetórias, Sistemas) + banner + 4 bento cards, maiores e sem aperto.
- [ ] Slide 13 novo com os 3 cards (Risco/Desfecho, Aplicação Clínica, Translação Diagnóstica) em destaque, conteúdo idêntico.
- [ ] Deck com 43 slides; Top Bar correta em todas as posições (5–40).
- [ ] Slide 15 sem o card de QI; Hierarquia e Maturação lado a lado com destaque; faixa-síntese preservada.
- [ ] Problemas 🔴 da tabela da seção 4 resolvidos; 🟠 resolvidos ou justificados.
- [ ] Nenhum texto, dado, animação, cor de eixo ou ícone alterado fora das exceções autorizadas.
- [ ] Build ok; nada descartado da árvore de trabalho; nenhum commit/push sem autorização.

---

## 7. REGISTRO DE EXECUÇÃO (11/09/2026)

**Evento durante a execução:** enquanto a atualização rodava, um slide novo **"Mente e Cérebro"** (`data-screen-label="40b"`, `components/slide40b-brain.tsx`, `components/ui/expanding-cards.tsx`) foi inserido por fora entre "Fotografia → filme" e "Take-home messages". O deck ficou com **44 slides**. Esse trabalho foi preservado e não foi tocado; a Top Bar continua correta (termina no 40 e não aparece no 41).

| # final | Slide | O que foi feito | Arquivos |
|---|---|---|---|
| 12 | Risco e resiliência | 2 colunas (Trajetórias \| Sistemas) + banner + 4 bento; gráfico preso à altura disponível e seletor das curvas em coluna vertical ao lado (gráfico maior que o original); card Sistemas em 2 colunas internas (texto \| diagrama); REF só Masten | `slide12-resilience.tsx`, `index.html` |
| 13 | Risco na clínica (novo) | Faixa "risco ≠ desfecho" + Aplicação Clínica + Translação Diagnóstica; título, notas e REF novos | `slide12b-clinical.tsx` (novo), `index.html`, `src/main.tsx` |
| 5–40 | Top Bar | Faixas dos eixos +1 a partir do Eixo 1 | `src/topbar-modules.ts` |
| 15 | Cognição em sistema | Card de QI removido; Hierarquia \| Maturação lado a lado; faixa-síntese em largura total; margens alinhadas ao deck | `slide14-cognition.tsx` |
| 7 | Interação entre sistemas | Badges 12→14 px, títulos 16→19, descrições 13,5→16 (por instância) | `slide7-feature-cards.tsx` |
| 9 | Natureza e ambiente | Anéis 400/570/740 → 380/540/700 (rótulos não cortam mais na lateral, espaçamento radial 80 px), rótulos acima da esfera, cards 450→500 px | `ui/orbiting-circles-02.tsx`, `slide9-stage.tsx` |
| 26 | Pares e o eu | Grade 38/62 → 46/54; nós do menu circular 256→296 px com 14–19 px; nenhum nó fora da margem; card escuro sem corte | `index.html`, `slide25-orbit.tsx`, `slide25-cards.tsx` |
| 28 | Não é variável única | Selo central 114→164 px, textos 11/13 → 14/17 px | `slide27-orbit.tsx` |
| 31 | Dinâmica familiar | **Defeito corrigido:** conectores do SVG não chegavam aos blocos (SVG com `meet` × blocos em % e `translate` anulado pelo `animate` do Framer). Área travada em 540:380, blocos em wrapper sem animação; textos 11–15 → 14–21 px; card escuro deixou de cortar (coluna 640→860 px) | `slide30-flow.tsx`, `slide30-cards.tsx` |
| 33 | Matriz do protocolo | Síntese "Domínios permanecem; prioridades mudam." movida para faixa sob a matriz; coluna direita 380→400 px e sem vazar a margem inferior | `slide32-matrix.tsx` |
| 35 | Multi-informante | Círculos 142→190 px, hub 168→200, textos 11–13 → 14–19 px | `slide34-circle.tsx` |
| 38 | Sintoma × significado | Canvas 860×480 → 896×450, nós 260×76 → 288–320×100, conexões recalculadas (mesmas origens/destinos/sentidos), textos 11–14,5 → 14–19 px | `slide37-integration.tsx` |

**Verificação:** 44 slides capturados em 1920×1080; 0 textos < 14 px; 0 invasões da Top Bar; texto idêntico ao "antes" em todos os slides não alterados; slide 12 antigo 100% contido nos slides 12 + 13 novos; slide 15 = antigo 14 menos o card de QI. Diferenças em 30, 33 e 35 são estado de animação automática (spotlight/auto-loop). `npm run build` ok e `dist/` conferido.

**Pendências fora do escopo (pré-existentes):** imports não usados em `slide30-cards.tsx`, `slide34-circle.tsx`, `slide9-stage.tsx`; tipo `NodeJS.Timeout` em `slide25-orbit.tsx`; `variants` em `slide7-feature-cards.tsx`; `_isSlide40b` não usado em `src/main.tsx` (trabalho do slide "Mente e Cérebro" em andamento).
