# PROMPT: Revisão de escrita (humanizer), legibilidade em telão, logo padronizada e animações dos gráficos (XVIII Congresso, 45 slides)

> Prompt autossuficiente para uma sessão do Claude Code aberta na pasta do projeto.
> Herda e reaplica: `PROMPT_AJUSTE_DIAGRAMACAO_42_SLIDES.md` (escala tipográfica, área segura, contratos de dados/componentes/animações), `PROMPT_ATUALIZACAO_SPLIT12_COGNICAO_REDISTRIBUICAO.md` e `PROMPT_NOVO_SLIDE_MECANISMOS_CEREBRO.md` (inserção de slides, Top Bar posicional, sufixo `b`).
> **Skills a invocar:** `humanizer` (instalada em `~/.claude/skills/humanizer`, origem `github.com/blader/humanizer`, v3.0.0, MIT) para todo texto visível; `dataviz` para qualquer mudança em gráfico.

---

## 0. MISSÃO

Uma passada completa pelos 45 slides com quatro objetivos, nesta ordem de prioridade:

1. **Escrita:** remover marcas de texto gerado por IA (humanizer) de títulos, subtítulos, cards, rótulos de gráficos e textos de animação, **sem apagar, esconder ou mudar o sentido de nenhuma informação**.
2. **Legibilidade em telão:** reaplicar a escala tipográfica dos prompts anteriores e ajustar cards e gráficos para caberem perfeitamente depois das mudanças de texto.
3. **Logo no rodapé:** presente em todos os slides **exceto a capa (1) e o último (45)**, no **mesmo lugar exato** em todos.
4. **Animações:** corrigir erros e criar animações visuais nos gráficos onde couber, sem interferir em design, layout ou conteúdo.

É uma aula para **médicos e psicólogos**. O público conhece os termos técnicos; o texto tem de soar como o professor escrevendo, não como um painel de produto.

---

## 1. REGRAS INVIOLÁVEIS DE CONTEÚDO (valem acima da skill)

**Nunca alterar:**
- **Referências:** rodapés REF (Vancouver), citações "Autor (ano)" dentro de cards, periódicos, volumes, páginas, DOI/PMID, slide de Referências inteiro.
- **Termos em outras línguas e nomes próprios:** *screening*, *stepped care*, PROMIS, PedsQL, SDQ, CLEFT-Q, FACE-Q, PAT-CV, Spotlight, Auto-Loop, nomes de autores, instrumentos, escalas, cidades, instituições.
- **Termos médicos e psicológicos e nomes de condições:** fissura labiopalatina, fissura labial, fissura palatina, craniossinostose, microssomia hemifacial, hemangioma, anomalias craniofaciais, psicopatologia, funções executivas, controle inibitório, memória de trabalho, flexibilidade cognitiva, metacognição, co-regulação, período crítico, período sensível, plasticidade, experiência-expectante, experiência-dependente, vigilância do desenvolvimento, desfechos relatados pelo paciente, multi-informante etc.
- **Números e dados:** n, β, %, idades, faixas etárias, anos, contagens, valores de gráfico, ordem de itens, séries, escalas.
- **Teses da aula:** frases-chave que corrigem uma crença real do público ("Risco não é destino", "crítico não é sinônimo de sensível", "cascata não é destino", "Screening não é diagnóstico", "Discordância não é erro"). O humanizer §1 permite manter o contraste "não X, Y" quando a primeira metade corrige uma crença que o leitor realmente tem, que é exatamente o caso.
- `data-label`, `data-speaker-notes` (notas do apresentador ficam como estão), `alt`, `aria-label`, `title`.

**Nunca fazer:** remover item de lista, card, rótulo, legenda ou nó; esconder texto com `truncate`/`line-clamp`/`overflow-hidden`; resumir a ponto de perder uma afirmação; inventar dado, autor, número ou exemplo.

---

## 2. COMO APLICAR O HUMANIZER NESTE DECK (PT-BR, texto técnico)

Voz: **texto técnico-didático, neutro e direto** (a skill manda manter texto técnico "neutral and plain"). Sem opinião nova.

| Padrão (skill) | O que procurar aqui | Como tratar |
|---|---|---|
| §20 Title Case | Títulos de card e rótulos em "Maiúsculas Em Cada Palavra" ("Mesmo Risco, Trajetórias Diferentes", "Alvos Concretos de Intervenção") | *Sentence case* ("Mesmo risco, trajetórias diferentes"). Nomes próprios, siglas e rótulos que o CSS já põe em caixa-alta ficam como estão |
| §8 Travessões | "—" e "–" usados como conector em frases | Trocar por vírgula, dois-pontos, ponto ou parênteses. **Manter** o traço de intervalo numérico ("0–5 anos", "8–10 anos", "2009–2024", "12–25+ anos") |
| §1 Não X, mas Y | Contrastes decorativos ("não apenas um escore composto") | Afirmar direto quando a negação não corrige crença real. Manter as teses da seção 1 |
| §2/§3 Fechos e aforismos | Frases de efeito que só repetem ("A resiliência não é mérito...", "Mecanismo de Socialização") | Manter o conteúdo; tirar a pompa |
| §12/§16 Palavras de IA/venda | "crucial", "fundamental", "robusto" (figurado), "potencializar", "holístico", "multifacetado", "jornada", "ecossistema" (figurado), "Apple", "Obsidian" | Palavra simples. **"Robusto" estatístico fica** ("efeito pequeno, porém robusto") |
| §18 Evitar "é/tem" | "atua como", "funciona como", "representa um" | "é", "tem" |
| §19 Rótulo + dois-pontos | "Diretriz:", "Conduta:", "Axioma sistêmico:" | Manter quando o rótulo informa algo (é UI de card); só tirar caixa-alta decorativa do valor |
| §6 Tríades forçadas | Listas de 3 que repetem ideia | Só mexer se houver repetição real; listas técnicas de 3 itens reais ficam |

Processo por slide (skill "How to work"): marcar marcas → rascunho → checar se algo foi acrescentado ou perdido (fato, nome, número, afirmação) → versão final. **Registrar cada troca num log "antes → depois"** (`RELATORIO_HUMANIZER.md` no scratchpad, enviado ao usuário).

---

## 3. LEGIBILIDADE EM TELÃO (reaplicação dos prompts anteriores)

- Piso absoluto **14 px** em qualquer texto (inclusive SVG, tamanho efetivo). Rótulos de gráfico ≥ 15 px; corpo de card ≥ 17 px quando couber; títulos de card ≥ 22 px.
- Área segura: laterais ≥ 72–100 px, base ≥ 40 px, nada acima de 74 px nos slides com Top Bar (5–41).
- Texto mais curto ou mais longo depois da revisão → reequilibrar card/gráfico (largura, padding, gap, quebra) para nada ficar cortado, sobreposto ou com vazio desbalanceado.
- Contraste ≥ 4.5:1 para texto < 24 px.

---

## 4. LOGO DO RODAPÉ

- Hoje: 41 logos em **11 posições diferentes** (right 60–90 px, bottom 14–48 px, larguras 34–38 px); faltam nos slides 42 ("Mente e Cérebro") e 43 ("Take-home messages"); slide 2 tem a logo dentro do layout, não no rodapé.
- Padrão único para os slides **2 a 44**: `position:absolute;right:80px;bottom:32px;width:38px;height:29px;object-fit:contain;opacity:.38;pointer-events:none;z-index:40`. Slide de fundo escuro (4) usa a mesma posição com `filter:brightness(0) invert(1)`.
- Capa (1) e Contato (45) sem logo de rodapé.
- Conferir que nenhum conteúdo encosta na logo (zona 1802–1840 × 1019–1048).

---

## 5. ANIMAÇÕES

### 5.1 Erro a corrigir
As ilhas React são montadas todas no carregamento com `isActive || true`. Resultado: **as animações de entrada do Framer Motion terminam antes do apresentador chegar ao slide**; só as animações CSS `data-anim` (que dependem de `[data-deck-active]`) reiniciam. Correção em `src/main.tsx`: remontar a ilha quando a `section` dela passa de inativa para ativa (contador por section usado como `key`), para a entrada tocar a cada visita. Sem mudar nenhum componente.

### 5.2 Novas animações de gráfico (onde couber)
- Gráficos SVG estáticos no `index.html` (roteiro, campo de forças, funil, trajetórias, *dumbbell*, etc.): usar a biblioteca `data-anim` já existente (`draw`, `pop`, `grow`, `rise`, `fade`) com `animation-delay` escalonado. Traço desenhado (`stroke-dasharray` + `dcDraw`), pontos surgindo (`pop`), barras crescendo (`grow`/`rise`).
- Gráficos React sem entrada: curvas com `pathLength`, marcadores com escala, na mesma linguagem das animações já usadas.
- Regras: estado final idêntico ao atual (posição, tamanho, cor); respeitar `prefers-reduced-motion` e o controle `data-motion="off"`; nada de loop infinito novo; nenhuma animação pode esconder texto no estado final.
- Revisar animações que **ocultam conteúdo periodicamente** (ex.: menu circular do slide "Pares e o eu" recolhe os quatro polos a cada 10 s): manter a entrada, remover o recolhimento automático.

---

## 6. METODOLOGIA

1. Baseline: captura headless 1920×1080 dos 45 slides + `textContent` de cada um.
2. Extração do texto visível por slide e por arquivo-fonte (`index.html` + `components/*.tsx`).
3. Revisão humanizer slide a slide → substituições exatas (trecho único) → log antes/depois.
4. Logo padronizada. 5. Correção de remontagem das animações. 6. Novas animações de gráfico.
7. Auditoria de layout/legibilidade (radar de fontes < 14 px, fora do slide, sobreposição, corte, Top Bar) e ajustes.
8. Verificação de integridade: referências idênticas byte a byte; números idênticos; nenhum item a menos; termos protegidos presentes; diff de texto revisado.
9. `npm run build` e conferência no `dist/`.
10. Relatório ao usuário. Sem commit sem autorização.

## 7. CRITÉRIOS DE ACEITE
- [ ] Texto revisado em todos os slides; log antes → depois entregue.
- [ ] 0 referências, números, termos técnicos ou nomes estrangeiros alterados.
- [ ] 0 textos < 14 px; 0 cortes; 0 sobreposições reais; 0 invasões da Top Bar.
- [ ] Logo idêntica e na mesma posição nos slides 2–44; ausente em 1 e 45.
- [ ] Entradas React tocando a cada visita ao slide; novas animações de gráfico com estado final igual ao atual.
- [ ] Build ok; trabalho em andamento do usuário (slide "Mente e Cérebro") preservado.

---

## 8. REGISTRO DE EXECUÇÃO (11/09/2026)

**Skill instalada:** `git clone https://github.com/blader/humanizer.git` → conteúdo conferido (só instruções em Markdown, licença MIT, sem código que a skill execute) → copiado para `~/.claude/skills/humanizer/`. Fica disponível nas próximas sessões e foi usada nesta.

### 8.1 Escrita (218 trocas em 42 arquivos)
- `index.html`: 58 trocas. Componentes: 160 trocas.
- Padrões tratados: §20 (Título Com Iniciais Maiúsculas → caixa normal), §8 (travessão conector → vírgula, dois-pontos ou ponto; intervalos numéricos preservados), §12/§16 ("crucial" → "importante", "valiosa" → "clinicamente informativa", "Princípio fundamental" → "Princípio", "revela a verdadeira direção... superando qualquer avaliação estática" → "mostra a direção clínica que uma medida isolada não revela"), §18 ("atuam como atratores" → "são atratores"), além de correções de grafia ("auto-regulação" → "autorregulação", `*noise blast*` com asteriscos de markdown à mostra, handle `@Charlington.Cavalcante` → `@charlington.cavalcante`).
- Preservados: todas as referências, autores, periódicos, números, siglas e instrumentos (PROMIS, SDQ, PedsQL, CLEFT-Q, FACE-Q, PAT-CV, SNAT, L-CID), termos em inglês (*screening*, *stepped care*, *Spotlight*, *Auto-Loop*), nomes de condições e termos técnicos, notas do apresentador e as teses da aula ("Risco não é destino", "Screening não é diagnóstico", "Discrepância não é erro: é informação").
- Log completo: `RELATORIO_HUMANIZER.md`.

### 8.2 Logo do rodapé
41 logos em 11 posições diferentes → **43 logos idênticas**, medidas em 1802,1019 px (38×29) em todos os slides de 2 a 44; capa e contato sem logo. O slide 2 deixou de ter a logo dentro da linha de redes sociais. O fecho do slide 43 ("Porque desenvolvimento é trajetória.") ganhou `padding-right` para não passar por cima dela.

### 8.3 Animações
- **Erro corrigido:** as ilhas React eram montadas uma única vez no carregamento, então as animações de entrada terminavam antes de o apresentador chegar ao slide. `src/main.tsx` agora conta ativações por `section` e usa esse contador como `key`, remontando a ilha a cada visita. Verificado: captura a 420 ms mostra o slide em meio à entrada.
- **Conteúdo que se escondia:** o menu circular do slide 27 recolhia os quatro polos a cada 10 s. O ciclo foi removido; os polos abrem e ficam abertos.
- **Novas animações:** curvas do gráfico de área do slide 19 desenhadas por `pathLength` com área e nós entrando em seguida; curvas de trajetória do slide 13 desenhadas (a curva tracejada entra por opacidade, para o tracejado não ser sobrescrito); entrada da órbita do slide 29.
- Cobertura: os 45 slides têm movimento na entrada (verificado por comparação de captura a 350 ms × estado final).

### 8.4 Código
18 imports não usados removidos (erros de tipo caíram de 34 para 16; os restantes são pré-existentes, em componentes que o deck não usa).

### 8.5 Verificação
45 slides capturados em 1920×1080; 0 textos abaixo de 14 px; 0 elementos fora do slide; 0 invasões da Top Bar; nenhuma sobreposição nova. Comparação antes × depois: nenhuma referência, número, termo protegido ou nota do apresentador alterados (as três diferenças numéricas apontadas são o passo do stepper e a fase em destaque, que giram sozinhos). `npm run build` ok e `dist/` conferido.
