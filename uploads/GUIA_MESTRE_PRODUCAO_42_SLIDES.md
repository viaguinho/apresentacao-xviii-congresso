# Guia Mestre de Produção — Apresentação "Desenvolvimento Infanto-Juvenil: Aspectos Cognitivos, Emocionais e Sociais"

**Evento:** XVIII Congresso Brasileiro de Cirurgia Crânio-Maxilo-Facial e XV Congresso Brasileiro de Fissuras Lábio-Palatinas e Anomalias Craniofaciais
**Módulo:** "A Estruturação do Protocolo de Psicologia em Centros de Tratamento de Anomalias Craniofaciais"
**Palestrante:** Dr. Charlington Cavalcante (CRM-SP 173.176 | CRM-CE 14.212)
**Formato técnico:** HTML5 / CSS3 / SVG / JavaScript nativo, 16:9 (1920×1080px)
**Escopo desta atualização:** expansão de **6 → 42 slides**, preservando a base já implementada.

Este documento é o **playbook de execução** do projeto. Ele não substitui o conteúdo científico já definido em `Guia_Aula_Charlington_revisado.md` (que continua sendo a **fonte de verdade para texto, dados, referências e fidelidade científica** de cada slide) — ele organiza **como construir, animar, padronizar e validar** essa expansão em cima do que já está implementado em `DOCUMENTACAO_DO_PROJETO.md`.

---

## 0. Reconciliação dos três documentos de origem

| Documento | Papel neste projeto |
|---|---|
| `DOCUMENTACAO_DO_PROJETO.md` | **Fonte de verdade da implementação atual** (6 slides já construídos). Define arquitetura de arquivos, tipografia oficial (Urbanist + Satoshi) e o design system já validado em produção. |
| `Guia_Aula_Charlington_revisado.md` | **Fonte de verdade do conteúdo científico** dos 42 slides (texto, dados, referências, regras de fidelidade, estrutura em 8 blocos/eixos). Cada slide ali é um prompt de conteúdo independente. |
| `prompt_desenvolvimento_infanto_juvenil.md` (versão anterior, tipografia Inter) | **Deprecado como especificação de design.** Serve apenas como referência conceitual para a lógica dos 3 painéis do Slide 5 e do Slide 6 (Mulder et al., 2024), que devem ser **reconstruídos** com a tipografia e tokens oficiais (Urbanist/Satoshi), não copiados como estão. |
| **Este arquivo** | Consolida os três acima em um **passo a passo de produção**, com foco adicional em: sistema de animação, remoção de "cara de IA", paleta estendida por eixo, e skills a utilizar. |

### Decisões já confirmadas com o Dr. Charlington
1. É o **mesmo projeto/evento**, expandindo de 6 para 42 slides.
2. **Slides 2 e 4** permanecem **exatamente como estão** no projeto atual (não remodelar, não redesenhar, não animar de forma diferente do que já existe).
3. A tipografia e os tokens de cor oficiais são os do `DOCUMENTACAO_DO_PROJETO.md` (**Urbanist + Satoshi**), não a especificação anterior em Inter.
4. Não será usado o arquivo do Claude Design mencionado anteriormente — a paleta estendida por eixo (seção 4) foi desenhada internamente neste guia, de forma sóbria e coerente com o restante do sistema.

---

## 1. Slides bloqueados — não alterar

### Slide 1 — Capa
Conforme `Guia_Aula_Charlington_revisado.md`: **não mexer**. Mantido conforme já está no projeto (logo em loop, título, subtítulo, rodapé com identificação do palestrante e evento).

### Slide 2 — Currículo do palestrante
Conforme `DOCUMENTACAO_DO_PROJETO.md`, seção "Slide 2: Formação & Trajetória":
- Layout de duas colunas assimétricas full height.
- Coluna esquerda: retrato oficial com gradiente inferior (nome + CRM).
- Coluna direita: 5 flashcards de trajetória (Residência, Lato Sensu, Stricto Sensu, Experiência, Atuação Atual) + badges sociais (Instagram, Website).

**Ação neste projeto: nenhuma.** Preservar HTML/CSS/animações exatamente como estão implementados hoje. Apenas garantir que os *tokens* de fonte/cor usados neste slide sejam os mesmos que serão formalizados na seção 4 (eles já devem ser Urbanist/Satoshi — conferir e não duplicar declarações de fonte divergentes).

### Slide 4 — Agenda da aula (Roteiro Radial)
Conforme `DOCUMENTACAO_DO_PROJETO.md`, seção "Slide 4: Roteiro da Apresentação":
- Menu radial circular (900×720px), hub central "ROTEIRO · 6 Eixos · 30 min", 6 nós a R=270px com badges numéricas 01–06.
- Coluna direita editorial: badge "ESTRUTURA CLÍNICA", título 56px, subtítulo, 3 pílulas contextuais.
- Animação sequencial já validada: 0,9s por nó + 0,5s de intervalo.

**Ação neste projeto: atualização de conteúdo, não de layout/animação.**
Como a apresentação passou de 6 para **8 blocos temáticos** (Elementos iniciais + 7 Eixos + Encerramento — sendo que o roteiro visível ao público continua sendo os **7 eixos numerados**, pois "Elementos iniciais" e "Encerramento" não são eixos de conteúdo), os 6 nós radiais devem ser **atualizados para 7 nós**, preservando o mesmo mecanismo visual (raio, timing, estilo do badge). Ver tabela de mapeamento abaixo.

| Nó | Rótulo atual (6 eixos) | Novo rótulo (7 eixos) |
|---|---|---|
| 01 | Processo Dinâmico | Desenvolvimento como Processo Dinâmico |
| 02 | Cognição & Linguagem | Desenvolvimento Cognitivo |
| 03 | Desenvolvimento Emocional | Desenvolvimento Emocional |
| 04 | Desenvolvimento Social | Desenvolvimento Social |
| 05 | Anomalias Craniofaciais | O que Muda na Anomalia Craniofacial? |
| 06 | Protocolo Integrado | Protocolo Psicológico |
| 07 | *(novo)* | Na Clínica, uma Fotografia não Basta |

**Tarefa técnica:** recalcular os ângulos de distribuição radial para 7 nós (360°/7 ≈ 51,43° entre nós, em vez de 60°), atualizar o hub central para "ROTEIRO · 7 Eixos · 35 min" (duração ajustada — ver seção 9) e reexecutar a animação sequencial testando o novo timing total (7 × 0,9s + 6 × 0,5s ≈ 9,3s de sequência de entrada).

---

## 2. O que muda estruturalmente (6 → 42 slides)

| Bloco | Slides | Eixo/Tema |
|---|---:|---|
| Elementos iniciais | 1–4 | Capa, currículo, conflitos, agenda |
| Eixo 1 | 5–13 | Desenvolvimento como processo dinâmico |
| Eixo 2 | 14–18 | Desenvolvimento cognitivo |
| Eixo 3 | 19–22 | Desenvolvimento emocional |
| Eixo 4 | 23–26 | Desenvolvimento social |
| Eixo 5 | 27–31 | O que muda quando existe uma anomalia craniofacial? |
| Eixo 6 | 32–35 | Desenvolvimento como fundamento do protocolo psicológico |
| Eixo 7 | 36–39 | Na clínica, uma fotografia não basta |
| Encerramento | 40–42 | Take-home messages, referências, contato |

**Observação de estrutura (do guia original, preservada):** o Slide 13 funciona como ponte conceitual e deve ser propositalmente mais sintético; os Slides 36–39 retomam e aprofundam a mesma ideia como raciocínio clínico longitudinal.

**Progressão narrativa obrigatória:** trajetória e sistemas → cognição → emoções → relações sociais → especificidades craniofaciais → protocolo psicológico → interpretação longitudinal → síntese.

---

## 3. Regras globais de fidelidade científica (condensado — fonte completa no Guia_Aula)

Estas regras têm **prioridade sobre qualquer decisão estética** deste documento. Nenhuma animação, cor ou composição pode alterar o significado de um dado científico.

1. **Não inventar** dados, amostras, valores de p, efeitos, idades, escalas, DOI ou PMID. Reproduzir exatamente o que o prompt-fonte trouxer.
2. Diferenciar sempre **associação, predição, mediação e causalidade** — estudos observacionais nunca viram "prova causal" por causa de uma animação convincente.
3. **Verificar cada PMID/DOI no PubMed antes de finalizar o slide** (o Guia contém 51 menções a PMID distribuídas pelos 42 slides — cada uma precisa ser conferida na Fase 5 deste guia).
4. Figuras de artigos só podem ser reproduzidas se a licença permitir (ex. CC BY, como o artigo de Kärtner & Köster 2024 usado nos Slides 8–9); caso contrário, criar **ilustração conceitual original**, nunca copiando o design da figura.
5. Gráfico reconstruído a partir de tabela publicada deve ser rotulado **"reconstrução baseada nos dados publicados"**. Diferenciar visualmente figura empírica × gráfico reconstruído × esquema conceitual (ex.: traço sólido para dado empírico, traço tracejado para esquema conceitual).
6. Todo o texto em português do Brasil, exceto nomes de instrumentos/títulos originais. Linguagem probabilística ("pode estar associado", "em determinados subgrupos") — nunca determinista ("a fissura causa...").
7. Referências no rodapé em **formato Vancouver compacto**, 1–3 principais por slide, sem DOI/PMID como elemento visual dominante.
8. Slide deve comunicar **uma ideia principal em 5–10 segundos** — se o prompt local estiver denso demais, reduzir texto secundário antes de reduzir a fonte.

---

## 4. Sistema de Design Unificado — "Charlington Claro v2"

### 4.1 Tipografia oficial (substitui definitivamente a especificação anterior em Inter)

| Uso | Fonte | Pesos | Onde aplicar |
|---|---|---|---|
| Títulos, badges, números de destaque, pílulas | **Urbanist** (Google Fonts) | 600, 700 | `h1`–`h3`, badges numéricos, chamadas principais, contadores animados |
| Corpo de texto, rótulos de SVG, metadados | **Satoshi** (Fontshare) | 400, 500 | Parágrafos, legendas de gráfico, referências bibliográficas, rótulos de eixo |

**Tarefa de migração:** varrer todos os artefatos herdados do prompt anterior (Inter w300/400/500/600) e substituir por Urbanist/Satoshi conforme a tabela acima. Nenhum slide novo deve declarar `font-family: Inter` — usar as variáveis CSS centralizadas em `_ds/tokens.css` (ver 4.5).

### 4.2 Paleta base (herdada do projeto implementado — fonte: `DOCUMENTACAO_DO_PROJETO.md`)

| Token | Hex | Papel |
|---|---|---|
| `--color-canvas` | `#fdfdfd` | Fundo principal de todas as lâminas |
| `--color-ghost-white` | `#f2f2f4` | Cards, superfícies secundárias, painéis |
| `--color-future-blue` | `#0071e3` | Acento primário institucional — ícones, números, links |
| `--color-midnight-ink` | `#0f1012` | Títulos e texto de alto contraste |
| `--color-skyline-gray-1` | `#3f4042` | Texto secundário (nível 1, mais escuro) |
| `--color-skyline-gray-2` | `#5f6062` | Texto secundário (nível 2, mais claro) |
| `--border-soft` | `rgba(15,16,18,0.08)` | Divisores, contornos de card |

### 4.3 Paleta estendida por eixo (uso seletivo — responde ao pedido de "slides com outras cores")

Para dar identidade visual a cada eixo **sem perder coesão** nem parecer "arco-íris genérico de IA", a regra é: **o fundo continua sempre Canvas/Ghost White em 100% dos slides.** A cor de eixo aparece **apenas** como acento — borda superior de 3px, ícones, números de destaque, stroke de gráficos e uma faixa de cabeçalho em tom muito claro (10–12% de opacidade da cor de eixo sobre Ghost White). Isso funciona como um "código de cores editorial" (como se fossem capítulos de uma revista científica), não uma mudança de tema visual.

| Eixo | Cor de acento | Hex acento | Hex de fundo do cabeçalho (tint 10%) | Racional |
|---|---|---|---|---|
| Elementos iniciais + Eixo 1 | Future Blue (institucional) | `#0071e3` | `#e8f2fc` | Cor-mãe do projeto — abertura e fundamentos |
| Eixo 2 — Cognição | Petróleo | `#0d6d66` | `#e6f5f3` | Clareza, atenção, precisão cognitiva |
| Eixo 3 — Emocional | Terracota suave | `#b5563a` | `#fbeee9` | Calor humano sem infantilização |
| Eixo 4 — Social | Ameixa | `#6b4e83` | `#f1ecf5` | Relação, pertencimento, vínculo |
| Eixo 5 — Anomalia Craniofacial | Bordô clínico | `#8a2f3f` | `#f7ecee` | Liga diretamente ao tema do congresso (cirurgia crânio-maxilo-facial), com seriedade clínica |
| Eixo 6 — Protocolo Psicológico | Verde-salvia | `#4b6b4f` | `#eef3ec` | Processo, cuidado contínuo, crescimento |
| Eixo 7 — Fotografia não basta | Índigo profundo | `#33415c` | `#edeff3` | Tempo, profundidade, longitudinalidade |
| Encerramento | Retorno ao Future Blue + Midnight Ink | `#0071e3` / `#0f1012` | `#f2f2f4` | Fechamento institucional, sem introduzir cor nova no fim |

**Regra de aplicação:** a cor de eixo entra em cena apenas nos **slides de abertura de cada eixo** (5, 14, 19, 23, 27, 32, 36) e nos **slides de síntese daquele eixo** (13, 18, 22, 26, 31, 35, 39). Slides intermediários de um mesmo eixo usam a cor apenas em detalhes pontuais (ícone, sublinhado, ponto de gráfico), nunca em blocos grandes. Isso evita a sensação de "slide totalmente troca de cor", mantendo 90% do peso visual em Canvas/Ghost White/Midnight Ink em toda a apresentação.

Contraste mínimo verificado: todas as cores de acento têm razão de contraste ≥ 4.5:1 contra `#fdfdfd` quando usadas como texto, e ≥ 3:1 quando usadas apenas como elemento gráfico não-textual (conforme WCAG 2.1 AA).

### 4.4 Espaçamento, raio e elevação

| Categoria | Valores | Token |
|---|---|---|
| Espaçamento | 6, 11, 22, 30, 50, 94px | `--spacing-6` … `--spacing-94` |
| Raio | 1.8px (hairline), 10px (botão), 16px (card), 26px (pill), 50% (círculo) | `--radius-*` |
| Elevação | `0 2px 4px rgba(15,16,18,.08)` / `0 4px 8px rgba(15,16,18,.12)` / `0 8px 16px rgba(15,16,18,.16)` | `--elevation-1/2/3` |

### 4.5 Arquivo central de tokens

Criar (ou atualizar, se já existir parcialmente) `_ds/tokens.css` com **todas** as variáveis acima, incluindo as 7 cores de eixo com seus tints, para que nenhum slide declare cor "solta" em CSS inline. Todo componente novo referencia `var(--eixo-cognicao)`, nunca `#0d6d66` diretamente — isso facilita ajuste global se o Dr. Charlington pedir revisão de paleta depois.

### 4.6 Checklist "fora da cara de IA" (obrigatório em todo slide novo)

**Nunca usar:**
- Ilustrações de "cérebro futurista" brilhante, com sinapses neon ou circuitos.
- Bonecos genéricos 3D ou estilo "flat design corporativo de banco de imagens" (pessoas idênticas, proporções arredondadas, sorrisos idênticos).
- Gradientes vibrantes tipo "roxo-para-azul" ou "laranja-para-rosa" cobrindo formas grandes (o único gradiente permitido é o tint sutil de 10% descrito em 4.3, ou o gradiente de proteção de legibilidade sob fotos, já existente no projeto).
- Ícones decorativos sem função semântica (emojis genéricos, clip-art, estrelinhas, confetes).
- Efeitos de glassmorphism exagerado, sombras difusas coloridas ("glow"), bordas duplas neon.
- Texto em gradiente ou com contorno/stroke chamativo.
- Formas "blob" orgânicas aleatórias como preenchimento de fundo.
- Excesso de emojis como substituto de iconografia (nenhum emoji nativo do sistema operacional — todo ícone deve ser SVG linear desenhado ou vetorizado no estilo do projeto).
- Fotos de banco de imagens de "criança sorrindo genérica" — se uma criança precisar ser representada, usar silhueta/ilustração linear conceitual, nunca foto stock nem ilustração cartoon infantilizada (o próprio Guia_Aula já proíbe isso explicitamente).

**Sempre usar:**
- Ícones lineares (stroke 1.5–2px), com metáfora visual direta e explicada no rodapé/legenda quando não for óbvia.
- No máximo 2–3 cores por slide (base + 1 acento de eixo + eventualmente 1 cor semântica de dado, ex. vermelho clínico só para "risco").
- Muito espaço negativo — nenhuma lâmina deve ter mais de ~40% de área ocupada por elementos gráficos/texto.
- Hierarquia tipográfica clara: 1 título, 1 subtítulo, corpo, rodapé — nunca mais de 4 níveis de texto por slide.
- Diagramas desenhados à mão (via SVG/código), não gerados por modelo de imagem — isso garante precisão científica E remove a "textura" característica de imagem gerada por IA (proporções levemente erradas, texto ilegível embutido na imagem, simetria artificial).

---

## 5. Arquitetura de animação (núcleo deste pedido)

Todas as animações do deck já correm sobre `deck-stage.js` (navegação/controle) e `support.js` (utilitários de animação e eventos). Esta seção define o **padrão único** que qualquer slide novo deve seguir, para que as 38 novas lâminas tenham a mesma qualidade de movimento das 4 já existentes.

### 5.1 Tokens de tempo e easing (adicionar a `_ds/tokens.css`)

| Token | Valor | Uso |
|---|---|---|
| `--ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas de texto, cards, ícones — sensação clínica, suave |
| `--ease-chart` | `cubic-bezier(0.85, 0, 0.15, 1)` | Desenho de curvas, preenchimento de gráficos — mais "assertivo" |
| `--ease-emphasis` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Pulsos de ênfase pontuais (overshoot leve, usar com moderação) |
| `--duration-xs` | `200ms` | Micro-transições (hover, checkbox) |
| `--duration-sm` | `300–400ms` | Entrada de elemento único (card, ícone, círculo) |
| `--duration-md` | `600–800ms` | Entrada de bloco (parágrafo, grupo de 3–4 itens) |
| `--duration-lg` | `1000–1500ms` | Desenho completo de gráfico (curva, fluxograma) |
| `--stagger-tight` | `50–80ms` | Entre itens de uma mesma lista/ícones radiais |
| `--stagger-loose` | `100–150ms` | Entre blocos/seções de um slide |

**Regra de teto:** nenhuma animação isolada excede 1.500ms; a sequência completa de entrada de um slide não deve ultrapassar ~3.500ms antes que o conteúdo principal esteja 100% visível (a audiência não pode esperar mais que isso para ler a ideia central).

### 5.2 Sistema de disparo (trigger)

Herdar o padrão já usado no Slide 4: animações disparam **automaticamente ao entrar no slide** (`Depois da Anterior`/`onSlideEnter`), com stagger interno. Não usar clique manual para animações de entrada — apenas a **navegação entre slides** é controlada por clique/teclado/toque via `deck-stage.js`. Isso mantém o ritmo de fala do palestrante sem exigir cliques extras dentro de um mesmo slide.

**Acessibilidade de movimento:** todo bloco de animação deve respeitar `prefers-reduced-motion: reduce` — nesse caso, os elementos aparecem com um `fade` simples de 150ms, sem `translate`, `scale`, `rotate` ou desenho progressivo de traço. Implementar isso uma vez em `support.js` como wrapper (`animateEntrance(el, opts)`) usado por todos os slides, em vez de reimplementar a checagem em cada arquivo.

### 5.3 Biblioteca de padrões de entrada (implementar como funções reutilizáveis em `support.js`)

| Função utilitária | Efeito CSS | Uso típico |
|---|---|---|
| `fadeIn(el, {delay})` | `opacity 0→1` | Textos, rodapés, referências |
| `fadeSlide(el, {dir, dist=16-24px, delay})` | `opacity 0→1` + `translate(dir)` | Parágrafos, cards, linhas de citação |
| `scaleIn(el, {from=0.8, delay})` | `opacity 0→1` + `scale(from→1)` | Círculos, badges, ícones, chips |
| `drawStroke(svgPath, {duration, delay})` | `stroke-dasharray`/`stroke-dashoffset` 100%→0% | Curvas, setas, linhas de conexão, contornos de mapa/rosto conceitual |
| `radialReveal(container, {count, radius, stagger})` | posiciona N filhos em círculo e aplica `scaleIn` com stagger | Ícones ao redor de um elemento central (ex. Slide 5 painel 1, Slides 9/12/24 círculos concêntricos) |
| `countUp(el, {from, to, duration})` | interpola texto numérico | Estatísticas, prevalências, idades-marco |
| `morphPath(pathEl, {dPath1, dPath2, duration})` | interpolação de atributo `d` | Transições entre formas conceituais (ex. de "engrenagem" para "seta", em slides de transição de eixo) |
| `pulse(el, {scale=1.04, loop=false})` | leve escala + volta, usando `--ease-emphasis` | Chamar atenção para 1 palavra-chave ou 1 dado crítico, sem exagero |

### 5.4 Catálogo de receitas por tipo de gráfico (mapeado a partir do conteúdo real dos 42 slides)

A varredura do `Guia_Aula_Charlington_revisado.md` mostra que os visuais se repetem em famílias bem definidas. Padronizar **uma receita por família** evita reinventar animação a cada slide.

| Família visual | Slides onde aparece | Receita de animação |
|---|---|---|
| **Curva de trajetória (linha única ou múltipla)** | 5, 6, 8, 10, 12, 13, 14, 20, 36 | Eixos aparecem primeiro (`fadeIn`, 200ms) → curva(s) desenhadas com `drawStroke` (`--duration-lg`, `--ease-chart`) → anotações/rótulos com `fadeSlide` após o traço concluir. Curvas múltiplas no mesmo gráfico desenham **simultaneamente** (mesmo delay), nunca em cascata lenta, para não parecer "corrida". |
| **Círculos concêntricos** | 9 (Bronfenbrenner-like), 12, 24 | `scaleIn` de dentro para fora, um círculo por vez (`--stagger-loose`), ícones de cada camada aparecem com `fadeIn` só depois que o círculo correspondente estabilizar. |
| **Composição radial (elemento central + N ao redor)** | 5 (painel 1), 7 (matriz), 21 (SELF do adolescente) | Elemento central via `scaleIn` → `radialReveal` para os itens ao redor (`--stagger-tight`) → linhas conectoras via `drawStroke` por último. |
| **Fluxograma / ciclo de etapas** | 33, 35 | Nós aparecem em sequência lógica (esquerda→direita ou sentido horário do ciclo) com `scaleIn`, setas entre nós com `drawStroke` imediatamente após cada nó, não todas de uma vez. |
| **Pirâmide / funil** | 7, 14, 33 | Camadas entram de baixo para cima com `fadeSlide(dir:"up")`, `--stagger-loose`; rótulo de cada camada aparece com leve atraso (`+80ms`) em relação à camada. |
| **Matriz / grade 2×2 ou 2×N** | 7, 18, 32 | Quadrantes com `scaleIn` em ordem de leitura (esquerda-direita, cima-baixo), destacando com `pulse` o quadrante citado no texto do slide, se houver. |
| **Linha do tempo horizontal (marcos etários)** | 13, 15, 21 | Linha-base via `drawStroke`, marcadores (pontos/idades) via `scaleIn` com `--stagger-tight` acompanhando a extensão da linha já desenhada (sincronizar `delay` do marcador com a fração correspondente do tempo total de `drawStroke`). |
| **Infográfico de 3 painéis + síntese (Slide 5)** | 5 | Ver receita detalhada na seção 5.5. |
| **Gráfico duplo comportamental + neural (Slide 6)** | 6 | Coluna esquerda (etapas metodológicas) entra primeiro, coluna direita (gráficos) entra depois — ver detalhamento herdado do prompt anterior (estrutura ainda válida, só migrar tipografia/cores). |
| **Contadores numéricos (prevalência, idades)** | 27 e outros pontos com estatística isolada | `countUp` de 0 até o valor final em 800–1000ms, formatação final idêntica ao dado citado (nunca arredondar de forma diferente do texto-fonte). |

### 5.5 Receita detalhada — Slide 5 (3 painéis + síntese, o slide conceitual mais denso do deck)

1. Título geral: `fadeSlide(dir:"down", 16px)`, 600ms.
2. Painel 1 (Multidimensional, acento Future Blue): criança central `scaleIn` (400ms) → 5 ícones via `radialReveal` (stagger 50ms) → linhas conectoras `drawStroke` (400ms) por último.
3. Painel 2 (Dinâmico/não linear): eixos `fadeIn` (200ms) → curva `drawStroke` (1000–1200ms, `--ease-chart`) → anotações "aceleração/platô/reorganização" `fadeSlide` (stagger 100ms) após o traço.
4. Painel 3 (Heterogêneo): eixos `fadeIn` → 4 trajetórias desenhadas **simultaneamente** via `drawStroke` (1000–1200ms) → avatares finais `scaleIn` (stagger 80ms).
5. Faixa de síntese: linhas de texto via `fadeSlide(dir:"left", 24px)`, stagger 100ms; trechos-chave em azul recebem `pulse` único (não em loop) para fechar a leitura.

Delay entre painéis: 200–400ms (painel 2 começa só depois que o painel 1 estabiliza, e assim por diante) — o objetivo é leitura guiada da esquerda para a direita, nunca os 3 painéis "explodindo" ao mesmo tempo.

### 5.6 Ferramentas técnicas de implementação

- **SVG inline** para todo traço de curva, ícone e fluxograma (permite `stroke-dasharray` nativo e manipulação por CSS/JS sem depender de biblioteca externa pesada).
- **CSS custom properties + `@keyframes`** para as entradas simples (`fade`, `scale`, `translate`).
- **Web Animations API (`element.animate()`)** dentro de `support.js` para os casos que precisam de controle fino de `delay`/`easing`/`onfinish` encadeado (ex. sincronizar `countUp` com o fim de um `drawStroke`).
- Nenhuma dependência externa nova (GSAP, Framer Motion) é necessária — o projeto já roda em JS nativo; manter assim para performance e para não introduzir builds/bundlers no repositório atual.

---

## 6. Estrutura completa da apresentação (42 slides) com metadados de produção

| # | Título | Eixo | Família visual dominante | Cor de eixo | Status |
|---:|---|---|---|---|---|
| 1 | Capa | Elementos iniciais | Logo animada | Future Blue | 🔒 Preservar |
| 2 | Currículo do palestrante | Elementos iniciais | Cards/foto | Future Blue | 🔒 Preservar |
| 3 | Declaração de conflitos de interesses | Elementos iniciais | Grade de logos 3×2 | Future Blue | 🆕 Criar (conteúdo novo — ver seção 7) |
| 4 | Agenda da aula | Elementos iniciais | Radial 7 nós | Future Blue | ♻️ Atualizar (6→7 nós, mesmo mecanismo) |
| 5 | Desenvolvimento é uma trajetória | Eixo 1 | 3 painéis + síntese | Future Blue | 🆕 Criar (reconstruir do zero c/ tokens novos) |
| 6 | A média pode esconder trajetórias individuais | Eixo 1 | Gráfico duplo (Mulder et al.) | Future Blue | 🆕 Criar (reconstruir do zero c/ tokens novos) |
| 7 | Interação entre sistemas | Eixo 1 | Matriz/pirâmide | Future Blue | 🆕 Criar |
| 8 | Campo de forças → encontro com o outro | Eixo 1 | Curvas (Fig. 2–3 Kärtner&Köster, CC BY) | Future Blue | 🆕 Criar — checar atribuição CC BY 4.0 |
| 9 | Natureza vs. ambiente — pergunta errada | Eixo 1 | Círculos concêntricos | Future Blue | 🆕 Criar |
| 10 | Plasticidade não é "tudo pode acontecer" | Eixo 1 | Curva | Future Blue | 🆕 Criar |
| 11 | Cascatas do desenvolvimento | Eixo 1 | Diagrama de cascata/fluxo | Future Blue | 🆕 Criar |
| 12 | Risco não é destino | Eixo 1 | Curvas + círculos concêntricos | Future Blue | 🆕 Criar |
| 13 | Ponte: uma fotografia não basta (síntese Eixo 1) | Eixo 1 | Curvas + linha do tempo (sintético) | Future Blue | 🆕 Criar — manter deliberadamente simples |
| 14 | Cognição não amadurece em bloco | Eixo 2 | Pirâmide/sistema de funções | Petróleo | 🆕 Criar |
| 15 | 0–5 anos: atenção → controle voluntário | Eixo 2 | Linha do tempo horizontal | Petróleo | 🆕 Criar |
| 16 | 6–12 anos: controle sobre o pensamento | Eixo 2 | Ilustração central + 3 funções executivas | Petróleo | 🆕 Criar |
| 17 | Adolescência: capacidade cresce, contexto pesa | Eixo 2 | Gráfico comparativo | Petróleo | 🆕 Criar |
| 18 | Anomalias craniofaciais: perfis, não déficits | Eixo 2 | Matriz de perfis (síntese Eixo 2) | Petróleo/Bordô (transição) | 🆕 Criar |
| 19 | Autorregulação começa como co-regulação | Eixo 3 | Diagrama de interação | Terracota | 🆕 Criar |
| 20 | Reconhecer, compreender, regular | Eixo 3 | 3 círculos sobrepostos (Venn) | Terracota | 🆕 Criar |
| 21 | Adolescência: emoções e "quem eu sou" | Eixo 3 | Composição radial (SELF) + linha do tempo | Terracota | 🆕 Criar |
| 22 | Craniofacial: significado emocional muda com a idade | Eixo 3 | Comparativo por faixa etária (síntese Eixo 3) | Terracota/Bordô (transição) | 🆕 Criar |
| 23 | Mundo social se expande | Eixo 4 | Diagrama de expansão (cuidador→pares) | Ameixa | 🆕 Criar |
| 24 | 6–12 anos: pertencer, não só ter colegas | Eixo 4 | Círculos concêntricos + infográfico | Ameixa | 🆕 Criar |
| 25 | Adolescência: pares como referência para o eu | Eixo 4 | Diagrama conceitual | Ameixa | 🆕 Criar |
| 26 | Craniofacial: risco está na interação | Eixo 4 | Comparativo VISIBILIDADE≠REJEIÇÃO (síntese Eixo 4) | Ameixa/Bordô (transição) | 🆕 Criar |
| 27 | Anomalia craniofacial não é variável única | Eixo 5 | Diagrama multifatorial + contador | Bordô clínico | 🆕 Criar |
| 28 | Trajetória terapêutica é desenvolvimento | Eixo 5 | Linha do tempo do cuidado | Bordô clínico | 🆕 Criar |
| 29 | Resultado clínico ≠ experiência do paciente | Eixo 5 | Comparativo objetivo×percebido | Bordô clínico | 🆕 Criar |
| 30 | Condição entra na dinâmica familiar | Eixo 5 | Diagrama de sistema familiar | Bordô clínico | 🆕 Criar |
| 31 | Adolescência: decisões compartilhadas | Eixo 5 | Diagrama de transição de autonomia (síntese Eixo 5) | Bordô clínico | 🆕 Criar |
| 32 | Protocolo acompanha tarefas do desenvolvimento | Eixo 6 | Matriz por faixa etária | Verde-salvia | 🆕 Criar |
| 33 | Rastrear todos, aprofundar conforme risco | Eixo 6 | Fluxograma (screening + stepped care) | Verde-salvia | 🆕 Criar |
| 34 | Nenhuma fonte é suficiente sozinha | Eixo 6 | Diagrama multi-informante | Verde-salvia | 🆕 Criar |
| 35 | Protocolo é um ciclo | Eixo 6 | Fluxograma cíclico (síntese Eixo 6 — slide-âncora) | Verde-salvia | 🆕 Criar — dar destaque extra (ver 4.3) |
| 36 | Medida pontual informa posição, não direção | Eixo 7 | Gráfico transversal×longitudinal | Índigo profundo | 🆕 Criar |
| 37 | Mesmo comportamento, significados diferentes | Eixo 7 | Raciocínio clínico diferencial (árvore/matriz) | Índigo profundo | 🆕 Criar |
| 38 | Discordância entre informantes é informação | Eixo 7 | Diagrama de perspectivas múltiplas | Índigo profundo | 🆕 Criar |
| 39 | Repetir medidas = filme, não fotografia (síntese Eixo 7) | Eixo 7 | Sequência de "fotogramas" → "filme" | Índigo profundo | 🆕 Criar — slide-âncora |
| 40 | Take-home messages | Encerramento | Lista numerada 1–7 + ícones lineares | Future Blue/Midnight Ink | 🆕 Criar — bloco 7 (Eixo 7) recebe destaque visual maior |
| 41 | Referências bibliográficas (Eixo 7) | Encerramento | Lista editorial em 2 colunas | Midnight Ink (neutro) | 🆕 Criar |
| 42 | Contato | Encerramento | Card institucional | Future Blue | ♻️ Preservar conteúdo existente, só harmonizar tokens |

**Legenda:** 🔒 Preservar integralmente · ♻️ Atualizar preservando mecanismo · 🆕 Construir do zero seguindo este guia + o prompt de conteúdo correspondente no `Guia_Aula_Charlington_revisado.md`.

---

## 7. Nota especial — Slide 3 (Conflitos de Interesses)

Este slide muda de conteúdo em relação à versão anterior de 6 slides (que dizia apenas "nenhum conflito declarado"). A nova versão, conforme `Guia_Aula_Charlington_revisado.md`, deve conter:

1. Título "Declaração de conflitos de interesses", alinhado à esquerda.
2. Texto fiel à Resolução CFM nº 1.595/2000 e RDC Anvisa nº 96/2008, com os 3 tópicos exatamente como especificados no guia (autonomia científica preservada, honorários de consultoria recebidos).
3. **Grade 3×2 de logotipos** (Aché, Biolab, Supera Farma, Prati-Donaduzzi, FarmaUSA Pharmaceutical Group, Eurofarma), sem caixas individuais, sem redimensionar/recolorir, com espaçamento amplo e fundo transparente.

**Ação obrigatória antes de finalizar este slide:** validar cada link de logotipo listado no Guia (Seeklogo/Brandfetch) no momento da produção — URLs de CDN de terceiros expiram; baixar e incorporar o asset localmente em `assets/logos-conflitos/` em vez de depender de hotlink. Se um logotipo não puder ser confirmado/baixado com segurança, usar o nome da empresa em tipografia discreta como fallback temporário e sinalizar ao Dr. Charlington antes da entrega final — nunca inventar ou aproximar um logotipo.

---

## 8. Skills a utilizar neste projeto

### Essenciais (uso obrigatório, conforme solicitado)

| Skill | Papel neste projeto |
|---|---|
| **`/impeccable:impeccable`** | Auditoria e refinamento de UI/UX de cada slide — hierarquia visual, espaçamento, contraste, tipografia, remoção de anti-padrões (é a ferramenta certa para aplicar sistematicamente o checklist "fora da cara de IA" da seção 4.6 em cada lâmina construída). |
| **`/design-loop`** | Ciclo de crítica com "olhos frescos": rodar após cada sprint de eixo (ver Fase 3 do passo a passo) comparando a lâmina construída contra a referência real (revistas científicas/editoriais de alto nível), com builder + 3 críticos até convergirem. |
| **`/liquid-logo`** | Gerar/atualizar o loop animado do monograma do Dr. Charlington usado no Slide 1 e no rodapé de todos os slides a partir do Slide 2 (preset warm chrome já validado no projeto). |

### Complementares recomendadas

| Skill | Papel neste projeto |
|---|---|
| **`frontend-design`** | Diretrizes de design tokens, tipografia e decisões visuais não-templadas — usar como referência ao redigir `_ds/tokens.css` e ao decidir a paleta estendida por eixo (seção 4.3). |
| **`data:data-visualization`** / **`data:create-viz`** | Apoio na escolha do tipo de gráfico correto para os dados do artigo Mulder et al. (Slide 6) e para qualquer estatística de prevalência craniofacial (Slide 27), garantindo boas práticas de acessibilidade e leitura de eixos. |
| **`image`** (geração de ícones) | Criar o conjunto coerente de ícones lineares (stroke 1.5–2px) usados nos diagramas de sistemas, cascatas, círculos concêntricos etc., mantendo um único estilo visual em todo o deck. |
| **`pdf`** | Gerar um fallback em PDF do deck completo para uso em caso de falha de projeção/navegador no dia do congresso (exportação estática, sem animações, mas com todo o conteúdo e camadas finais visíveis). |

**Skills descartadas conscientemente:** bibliotecas de front-end pesadas (`web-artifacts-builder`, React/Tailwind) não se aplicam — o projeto já roda em HTML/CSS/JS nativo via `deck-stage.js`/`support.js`, e introduzir um framework novo neste momento aumentaria complexidade sem benefício real.

---

## 9. Passo a passo de execução

### Fase 0 — Auditoria e preparação (0,5 dia)
- [ ] Ler e mapear `index.html`, `deck-stage.js`, `support.js` e a pasta `assets/` do projeto atual para confirmar exatamente como Slides 1, 2 e 4 estão implementados (evitar qualquer regressão nesses três).
- [ ] Fazer backup completo do estado atual de 6 slides (branch/cópia) antes de iniciar a expansão.
- [ ] Confirmar que as fontes Urbanist e Satoshi estão corretamente carregadas (Google Fonts + Fontshare) e disponíveis offline/local se o congresso não tiver internet estável.
- [ ] Listar todos os 51 PMIDs citados no `Guia_Aula_Charlington_revisado.md` em uma planilha/checklist de verificação (ver Fase 5).

### Fase 1 — Consolidação do Design System (0,5–1 dia)
- [ ] Criar/atualizar `_ds/tokens.css` com: paleta base (4.2), paleta estendida por eixo (4.3), tipografia (4.1), espaçamento/raio/elevação (4.4), tokens de animação (5.1).
- [ ] Remover qualquer declaração de fonte Inter remanescente de protótipos anteriores.
- [ ] Documentar o checklist "fora da cara de IA" (4.6) como comentário fixo no topo de `_ds/tokens.css`, para qualquer pessoa que edite o projeto depois.

### Fase 2 — Biblioteca de animação (1 dia)
- [ ] Implementar em `support.js` as funções utilitárias da seção 5.3 (`fadeIn`, `fadeSlide`, `scaleIn`, `drawStroke`, `radialReveal`, `countUp`, `morphPath`, `pulse`).
- [ ] Implementar o wrapper de acessibilidade `animateEntrance()` com suporte a `prefers-reduced-motion`.
- [ ] Criar 1 slide de teste isolado ("sandbox") aplicando cada receita da seção 5.4, para validar timing/easing antes de replicar nos 38 slides novos.

### Fase 3 — Produção por eixo (sprints, ~1–2 dias por eixo)
Produzir na ordem narrativa (não pular eixos), cada sprint seguindo o mesmo microfluxo:
1. Ler o(s) prompt(s) de conteúdo do eixo em `Guia_Aula_Charlington_revisado.md`.
2. Wireframe rápido (baixa fidelidade) da composição de cada slide do eixo, validando hierarquia de leitura antes de codar.
3. Construir HTML/CSS/SVG do slide usando exclusivamente tokens de `_ds/tokens.css`.
4. Aplicar a receita de animação correspondente (seção 5.4/5.5), reusando as funções de `support.js`.
5. Passar o checklist "fora da cara de IA" (4.6) manualmente.
6. Rodar **`/impeccable:impeccable`** no slide.
7. Ao concluir todos os slides do eixo, rodar **`/design-loop`** no conjunto do eixo (não slide a slide — para pegar inconsistências entre lâminas do mesmo eixo).

Sprints, na ordem:
- [ ] Sprint 0 — Slide 3 (conflitos) + atualização do Slide 4 (7 nós).
- [ ] Sprint 1 — Eixo 1 (Slides 5–13).
- [ ] Sprint 2 — Eixo 2 (Slides 14–18).
- [ ] Sprint 3 — Eixo 3 (Slides 19–22).
- [ ] Sprint 4 — Eixo 4 (Slides 23–26).
- [ ] Sprint 5 — Eixo 5 (Slides 27–31).
- [ ] Sprint 6 — Eixo 6 (Slides 32–35).
- [ ] Sprint 7 — Eixo 7 (Slides 36–39).
- [ ] Sprint 8 — Encerramento (Slides 40–42).

### Fase 4 — Integração e coerência global (0,5–1 dia)
- [ ] Rodar `/design-loop` no **deck completo** (não só por eixo), navegando slide a slide como a audiência veria, checando: transição de cor de eixo (ela deve parecer intencional, não abrupta), consistência de rodapé/logo, consistência de timing de animação entre eixos.
- [ ] Testar navegação completa via teclado e touch (usando os mecanismos já existentes em `deck-stage.js`), incluindo o atalho direto por hash (`#4`, `#27` etc.).
- [ ] Testar em pelo menos duas resoluções (1920×1080 e uma resolução de projetor 4:3 legado, se aplicável ao local do congresso) e dois navegadores.

### Fase 5 — Revisão científica e legal (0,5–1 dia, pode rodar em paralelo à Fase 3/4)
- [ ] Verificar cada um dos 51 PMIDs/DOIs no PubMed — confirmar autores, ano, periódico e que a afirmação do slide corresponde ao que o artigo realmente sustenta.
- [ ] Confirmar a licença CC BY 4.0 do artigo Kärtner & Köster (2024) antes de reutilizar qualquer elemento das Figuras 2–3 nos Slides 8–9; incluir atribuição discreta no rodapé desses slides.
- [ ] Validar e baixar localmente os 6 logotipos farmacêuticos do Slide 3 (ver seção 7).
- [ ] Revisar todo o deck em busca de linguagem determinista residual ("causa", "é", "sempre") substituindo por formulações probabilísticas quando aplicável.
- [ ] Conferir formatação Vancouver de todas as referências em rodapé e nos Slides 40–41.

### Fase 6 — Acessibilidade e performance (0,5 dia)
- [ ] Checar contraste de todas as combinações texto/fundo com as 7 cores de eixo (mínimo AA).
- [ ] Testar o deck com `prefers-reduced-motion: reduce` ativado no sistema operacional — confirmar que nada quebra e que o conteúdo continua 100% legível sem as animações completas.
- [ ] Medir tempo de carregamento do deck completo (42 slides com SVGs/animação) e otimizar assets (compressão de imagens, SVGs limpos sem metadados de editor) se necessário.

### Fase 7 — Ensaio final e entrega (0,5 dia)
- [ ] Ensaio cronometrado completo com o Dr. Charlington, ajustando timing de animação onde o ritmo de fala não bater com o ritmo visual (ex. Slide 5, Slide 35, Slide 39, que são os mais densos).
- [ ] Gerar o fallback em PDF (skill `pdf`) para levar em pendrive/backup ao congresso.
- [ ] Atualizar `DOCUMENTACAO_DO_PROJETO.md` para refletir a versão de 42 slides (nova estrutura de arquivos, nova contagem de eixos, novo mapa de cores) — este arquivo deve continuar sendo a fotografia fiel do estado real do projeto após a expansão.

**Duração total estimada:** aproximadamente 3 a 4 semanas de trabalho focado, considerando 1 pessoa dedicada e as 51 verificações científicas como o item de maior risco de atraso (dependem de disponibilidade de acesso a bases como PubMed/periódicos).

---

## 10. Estrutura de arquivos do repositório (atualizada)

```
Apresentação XVIII Congresso/
├── Desenvolvimento Infanto-Juvenil.dc.html   # Código-fonte principal (42 slides)
├── index.html                                # Symlink para o .dc.html
├── deck-stage.js                             # Navegação/controle do deck (sem alteração estrutural)
├── support.js                                # + novas funções de animação (seção 5.3) e wrapper de acessibilidade
├── DOCUMENTACAO_DO_PROJETO.md                 # Atualizar ao final da Fase 7
├── GUIA_MESTRE_PRODUCAO_42_SLIDES.md          # Este arquivo
├── _ds/
│   └── tokens.css                            # Tokens unificados: cor, tipografia, espaçamento, animação
├── assets/
│   ├── charlington-retrato.jpg
│   ├── image2.png                            # Monograma (liquid-logo)
│   ├── logos-conflitos/                      # 6 logotipos farmacêuticos baixados localmente (Slide 3)
│   └── figuras-cientificas/                  # Ilustrações conceituais originais (Slides 8–9 etc.), com atribuição quando aplicável
└── uploads/
    ├── prompt_desenvolvimento_infanto_juvenil.md   # Deprecado — mantido só como histórico
    ├── Guia_Aula_Charlington_revisado.md            # Fonte de verdade de conteúdo científico
    └── DOCUMENTACAO_DO_PROJETO.md
```

---

## 11. Checklist de aceite final

- [ ] Slides 1, 2 e 4 preservam exatamente o comportamento/visual anteriores (2 sem qualquer alteração; 4 com os 7 nós e mesmo mecanismo de animação).
- [ ] Todos os 42 slides usam exclusivamente Urbanist (títulos) + Satoshi (corpo), sem resquício de Inter.
- [ ] Todos os 42 slides usam apenas tokens de `_ds/tokens.css` — nenhuma cor "hardcoded" fora da paleta documentada.
- [ ] Nenhum slide viola o checklist "fora da cara de IA" (seção 4.6).
- [ ] A cor de eixo aparece de forma discreta (bordas, ícones, gráficos) e nunca como fundo de página inteira.
- [ ] Toda animação de gráfico usa uma das receitas da seção 5.4, com timing dentro dos tetos definidos em 5.1.
- [ ] `prefers-reduced-motion` testado e funcional.
- [ ] Nenhum dado, PMID, DOI ou referência foi alterado em relação ao `Guia_Aula_Charlington_revisado.md`; todos os PMIDs foram reconferidos no PubMed.
- [ ] Licenciamento de toda figura/logotipo reutilizado foi validado e documentado.
- [ ] `/impeccable:impeccable` rodado em cada slide novo; `/design-loop` rodado por eixo e no deck completo.
- [ ] `/liquid-logo` atualizado e funcionando no Slide 1 e no rodapé a partir do Slide 2.
- [ ] Fallback em PDF gerado e testado.
- [ ] `DOCUMENTACAO_DO_PROJETO.md` atualizado refletindo o estado final de 42 slides.

---

## 12. Pontos em aberto para validar com o Dr. Charlington antes de iniciar a produção

1. **Duração total da fala:** com 42 slides, a duração de 30 minutos citada no `DOCUMENTACAO_DO_PROJETO.md` provavelmente precisa subir para ~35–40 minutos (a média de ~8 slides/eixo em ritmo científico raramente cabe em 30 min com qualidade de leitura). Confirmar a duração real disponível no congresso antes de fechar o timing de animação de cada eixo.
2. **Fallback de logotipos do Slide 3:** confirmar se há uma pasta interna com os logotipos oficiais das 6 empresas (mais segura do que depender de CDNs de terceiros como Seeklogo/Brandfetch, que podem trocar de URL).
3. **Figuras do artigo Kärtner & Köster (2024):** confirmar se o Dr. Charlington prefere reproduzir as Figuras 2–3 originais (com atribuição CC BY) ou se prefere ilustração conceitual própria — isso muda o esforço de produção do Sprint 1.
