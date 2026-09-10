# Prompt para apresentação: "Desenvolvimento Infanto-Juvenil: Uma Abordagem Integrativa de Trajetórias Cognitivas, Emocionais e Sociais"

Cole o bloco abaixo em uma nova conversa de projeto visual.

---

## CONTEXTO DO PROJETO

Tenho uma apresentação médico-científica em planejamento para **XVIII Congresso de Neurologia do Brasil** (6 slides, proporção 16:9), autoria de **Dr. Charlington Cavalcante** (neuropediatra, neurofisiologia clínica, especialista em desenvolvimento infanto-juvenil, transtornos do espectro autista, epilepsia pediátrica e sono).

**Tema:** "Desenvolvimento Infanto-Juvenil: Uma Abordagem Integrativa de Trajetórias Cognitivas, Emocionais e Sociais"

**Público:** Colegas médicos, pediatras, neuropediatras, psicólogos clínicos em congresso científico. Rigor de citações esperado: DSM-5-TR, estudos longitudinais internacionais (Developmental Cognitive Neuroscience, Child Development, Developmental Review), dados de prevalência, marcos desenvolvedores validados.

**Duração esperada:** 30–40 minutos de apresentação oral.

**Objetivo:** Apresentação compacta mas densa que demonstre que desenvolvimento não é linear nem determinístico, mas uma trajetória **multidimensional, dinâmica e heterogênea**, onde compreender a velocidade e direção da mudança é tão importante quanto a posição atual da criança. Foco especial no slide 5 (conceito principal) e slide 6 (validação científica com artigo peer-reviewed).

**Restrição crítica:** Zero alteração em dados numéricos, marcos desenvolvedores, referências bibliográficas ou recomendações clínicas — apenas aprimoramento visual e animação. Legibilidade em projeção de auditório (150+ pessoas) é obrigatória.

---

## SISTEMA VISUAL — PALETA "CHARLINGTON CLARO"

Diferente da apresentação TDAH (fundo escuro #0F1012), **esta apresentação adota fundo claro** para maior legibilidade em ambientes de congresso bem-iluminados e para transmitir uma estética clínica acolhedora (alinhada ao design do site charlington.com.br).

### Cores — Tokens Aplicados

| Nome | Hex | Token CSS | Função |
|------|-----|-----------|--------|
| **Canvas** | `#fdfdfd` | `--color-canvas` | Fundo principal de slides, áreas brancas puras |
| **Ghost White** | `#f2f2f4` | `--color-ghost-white` | Fundo de cards, seções, superfícies secundárias |
| **Skyline Gray** | `#868788` | `--color-skyline-gray` | Texto secundário, legendas, bordas discretas |
| **Midnight Ink** | `#0f1012` | `--color-midnight-ink` | Texto principal, títulos, ícones de alto contraste |
| **Deep Graphite** | `#020201` | `--color-deep-graphite` | Títulos de impacto máximo, acentos muito escuros |
| **Future Blue** | `#0071e3` | `--color-future-blue` | Hyperlinks, botões, acentos de ação, destaque em gráficos |
| **Soft Green** | `#10b981` | `--color-soft-green` | Diferenciação visual em painéis (Painel 3 — Heterogêneo) |
| **Soft Yellow** | `#f59e0b` | `--color-soft-yellow` | Diferenciação visual em painéis (Painel 2 — Dinâmico) |

### Tipografia

**Fonte Principal:** Inter (weight: 300, 400, 500, 600)
- Substituta moderna e geométrica para PP Neue Montreal
- Weight 300 em cabeçalhos para tom suave e sofisticado
- Weight 400 em corpo de texto para legibilidade máxima

| Função | Tamanho | Line Height | Letter Spacing | Token |
|--------|---------|-------------|----------------|-------|
| Caption | 11px | 1.2 | -0.22px | `--text-caption` |
| Body | 14px | 1.45 | normal | `--text-body` |
| Heading LG | 18px | 1.2 | -0.36px | `--text-heading-lg` |
| Display (títulos principais) | 27px | 1.2 | -0.54px | `--text-display` |
| Mega (títulos de slide) | 32px | 1.1 | -0.64px | `--text-mega` |

### Espaçamento & Densidade

**Padrão: spacious / breathing** — Muito espaço negativo entre elementos, sem sensação de sufoco.

| Nome | Valor | Token |
|------|-------|-------|
| Extra-pequeno | 6px | `--spacing-6` |
| Pequeno | 11px | `--spacing-11` |
| Médio | 22px | `--spacing-22` |
| Médio+ | 30px | `--spacing-30` |
| Grande | 50px | `--spacing-50` |
| Seção | 94px | `--spacing-94` |

### Border Radius

| Elemento | Raio | Token |
|----------|------|-------|
| Hairline (linhas) | 1.8px | `--radius-sm` |
| Botão | 10px | `--radius-buttons` |
| Card/Painel | 16px | `--radius-card` |
| Pill/Navigation | 26px | `--radius-pill` |
| Full Circle | 50% | `--radius-full` |

### Sombras e Elevação

**Paleta de sombras (minimal, típica de design claro):**
- `elevation-1`: `0 2px 4px rgba(15, 16, 18, 0.08)` — cards, hover subtle
- `elevation-2`: `0 4px 8px rgba(15, 16, 18, 0.12)` — cards em foco
- `elevation-3`: `0 8px 16px rgba(15, 16, 18, 0.16)` — modais, overlays

**Princípio:** Usar sombras leves para criar profundidade sem pesar visualmente.

---

## SISTEMA VISUAL EXISTENTE — PRESERVAR E ESTENDER

### Padrões de Animação Já Validados

A apresentação original (XVII Congresso XVIII Congresso) utilizou:
- **Divisores SVG com stroke-dasharray animado:** linhas contínuas e tracejadas que se desenham progressivamente, com pontos azuis (`#0071e3`) nas extremidades.
- **Linguagem de motion coerente:** timing de ~600–1100ms para entrando/saída, easing `cubic-bezier(0.16, 1, 0.3, 1)` para suavidade clínica.

**Extensão esperada:** Qualquer animação nova deve soar como evolução natural dessa linguagem, não contraste abrupto. Ícones aparecem com fade+scale, gráficos preenchem-se com animação de camadas, números contam progressivamente.

---

## ESPECIFICAÇÃO DOS 6 SLIDES

### Slide 1 (Capa): Logo Animada e Introdução

**Composição:**
- **Logo animada:** Centro-superior, ~220×220px, monograma "S" espiral em liquid metal, loop 4s
- **Título:** "Desenvolvimento Infanto-Juvenil" (linha 1) + "Uma Abordagem Integrativa de Trajetórias Cognitivas, Emocionais e Sociais" (linha 2)
  - Tamanho: 32px (L1), 24px (L2), weight 300, `--color-midnight-ink`
  - Alinhamento: centrado
  - Espaçamento: 22px entre linhas
- **Subtítulo descritivo:** "Compreendendo múltiplas dimensões do desenvolvimento infantil" (14px, `--color-skyline-gray`, weight 400)
- **Rodapé:** "Dr. Charlington Cavalcante | CRM-SP 173.176 | Setembro 2026" (11px, `--color-skyline-gray`, weight 400)
- **Fundo:** Gradiente sutil `#fdfdfd` (topo) a `#f2f2f4` (base), 20% de opacidade

**Animação (Camada 1 + 2):**
1. Logo: fade-in + scale (0.8→1) com easing `cubic-bezier(0.16, 1, 0.3, 1)`, 400ms, Ao iniciar slide
2. Título L1: opacity 0→1 + translateY(16px→0), 600ms, Depois da Anterior, delay 200ms
3. Título L2: opacity 0→1 + translateY(16px→0), 600ms, Depois da Anterior, delay 120ms
4. Subtítulo: opacity 0→1 + translateY(8px→0), 400ms, Depois da Anterior, delay 100ms
5. Rodapé: opacity 0→1, 300ms, Depois da Anterior, delay 200ms

### Slide 2 (Bio do Palestrante): Credenciais Visuais

**Composição:**
- **Foto:** Esquerda, full-bleed 0–6.46in de width, altura 8in, Dr. Charlington invertido horizontalmente (olha para direita/conteúdo)
  - Gradiente vertical inferior: #fdfdfd (alpha 0% em y=6.5in) → #0f1012 (alpha 100% em y=8in) para proteger legibilidade de nome/CRM
  - Gradiente horizontal direita: #fdfdfd → transparent (suave blend 1in)
  
- **Coluna Credenciais (direita, 7.5in–20in):**
  - **Seção 1 — FORMAÇÃO:** Neuropediatra | Residências UNICAMP, UECE/ESP-CE | Master's UNICAMP | Fellowship Instituto do Sono
    - Ícone (mortarboard): 18px, `#0071e3`, esquerda
    - Título: "FORMAÇÃO" (14px, weight 500, `--color-midnight-ink`)
    - Items: 12px, weight 400, `--color-skyline-gray`, line-height 1.45, 1 item por linha
    
  - **Seção 2 — ESPECIALIDADES:** Neurologia Pediátrica | Medicina do Sono | Transtornos do Espectro Autista | Epilepsia Pediátrica
    - Ícone (stethoscope): 18px, `#0071e3`, esquerda
    - Título: "ESPECIALIDADES" (14px, weight 500)
    - Items: 12px, weight 400, line-height 1.45
    
  - **Seção 3 — PRÁTICA CLÍNICA:** Pediatra neurologista ativo em Campinas/Fortaleza | Consultor científico (Aché, Biolab, Eurofarma) | Palestrante em congressos médicos internacionais
    - Ícone (stethoscope + microphone): 18px, `#0071e3`, esquerda
    - Título: "PRÁTICA CLÍNICA" (14px, weight 500)
    - Body: 12px, weight 400

  - Gap entre seções: 30px

**Animação (Camada 1 + 2):**
1. Foto: fade-in 400ms, Ao iniciar slide
2. Seção FORMAÇÃO: opacity 0→1 + translateX(-20px→0), 400ms, Depois da Anterior, delay 200ms
3. Seção ESPECIALIDADES: opacity 0→1 + translateX(-20px→0), 400ms, Depois da Anterior, delay 120ms
4. Seção PRÁTICA: opacity 0→1 + translateX(-20px→0), 400ms, Depois da Anterior, delay 120ms

### Slide 3 (Declaração de Conflitos de Interesses)

**Composição:**
- **Card centralizado:**
  - Fundo: `#f2f2f4`, borda: 1px solid `#e5e5e7`, border-radius 16px, padding 50px (horizontal) × 40px (vertical)
  - Sombra: elevation-1 (`0 2px 4px rgba(15, 16, 18, 0.08)`)
  - Width: ~70% do slide (máx 900px)
  - Ícone "shield" ou "checklist": 64px, `#0071e3`, topo-centralizado
  - Título: "Declaração de Conflitos de Interesses" (18px, weight 500, `--color-midnight-ink`, margin-top 20px)
  - Corpo: "O Dr. Charlington Cavalcante declara **ausência de conflitos de interesse** na produção e apresentação deste material científico." (14px, weight 400, `--color-skyline-gray`, line-height 1.45, destaque em azul #0071e3 para "ausência de conflitos de interesse")

**Animação (Camada 1 + 2):**
1. Card: opacity 0→1 + scale(0.9→1), 500ms, Depois da Anterior, easing `cubic-bezier(0.16, 1, 0.3, 1)`
2. Ícone: opacity 0→1 + scale(0→1), 400ms, Depois da Anterior, delay 200ms
3. Texto: opacity 0→1, 400ms, Depois da Anterior, delay 300ms

### Slide 4 (Agenda): Timeline Visual

**Composição:**
- **Título topo:** "Roteiro da Apresentação" (27px, weight 300, `--color-midnight-ink`, centrado)
- **Timeline horizontal:** 6 tópicos em sequência visual
  
  Cada tópico é um card com:
  - Círculo numerado: 50px diameter, borda 2px `#0071e3`, fundo `#f2f2f4`, número 18px weight 600 `--color-midnight-ink` no centro
  - Ícone temático: 32px, `#0071e3`, dentro do círculo (sobreposto ao número ou ao lado)
  - Rótulo: 14px, weight 400, `--color-midnight-ink`, centrado abaixo
  - Conector: linha 2px `#0071e3` entre círculos, tracejada (stroke-dasharray 4px espaçamento 4px)

  **Tópicos:**
  1. 🧠 Desenvolvimento como Processo Dinâmico
  2. 🎯 Desenvolvimento Cognitivo
  3. ❤️ Desenvolvimento Emocional
  4. 👥 Desenvolvimento Social
  5. ⚠️ Anomalias Craniofaciais e Impacto
  6. 📋 Protocolo Psicológico Integrado

- **Layout:** Horizontal, círculos espacejados uniformemente (gap 30px), conectores animados

**Animação (Camada 1 + 2):**
1. Círculos: opacity 0→1 + scale(0→1), 300ms cada, Depois da Anterior, stagger 100ms
2. Ícones: opacity 0→1 + rotate(360deg), 400ms cada, Com a Anterior (simultaneamente ao círculo)
3. Rótulos: opacity 0→1 + translateY(8px→0), 300ms cada, Depois da Anterior, stagger 80ms
4. Conectores: stroke-dasharray (100%→0%), 500ms cada, Depois da Anterior, stagger 150ms

**Easing padrão:** `cubic-bezier(0.16, 1, 0.3, 1)`

### Slide 5 (Principal): Desenvolvimento — Multidimensional, Dinâmico e Heterogêneo

**Este é o slide conceitual mais importante. Estrutura visual 3-painel + síntese.**

**Composição geral:**
- **Título principal (topo):** "Desenvolvimento: Processo Multidimensional, Dinâmico e Heterogêneo" (28px, weight 300, `--color-midnight-ink`, centrado, margin-bottom 50px)

- **Três painéis verticais (layout):**
  - Width: cada painel ~28% do slide, gap 30px entre (total ~94% width, centered)
  - Height: ~55% do slide (deixando espaço para síntese abaixo)
  - Cada painel: borda 1px `#e5e5e7`, border-radius 16px, overflow hidden, sombra elevation-1

#### Painel 1: Multidimensional

- **Cabeçalho:** Fundo `#e0f2fe` (azul muito claro), altura 50px, borda-bottom 3px `#0071e3`
  - Título: "Multidimensional" (18px, weight 600, `--color-midnight-ink`, padding 12px 16px)
  
- **Subtítulo (abaixo cabeçalho, ainda no fundo azul claro):** "cognição, linguagem, comportamento, emoções, habilidades sociais" (12px, weight 400, `--color-skyline-gray`, padding 0 16px 12px 16px)

- **Ilustração (corpo do painel, 65–70% de altura):**
  - Criança centralizada (ícone 48px ou ilustração SVG simples), `#0071e3`
  - 5 ícones ao redor em composição radial:
    - 🧠 Cérebro (cognição) — azul #0071e3
    - 💬 Balão de fala (linguagem) — azul claro #e0f2fe com borda #0071e3
    - ⚙️ Engrenagem (autorregulação/comportamento) — cinza #868788
    - ❤️ Coração (emoções) — vermelho suave #f87171
    - 👥 Grupo (habilidades sociais) — verde #10b981
  - Ícones: 32px cada, conectados à criança com linhas finas 1px `#d1d5db`
  - Espaçamento: radial, 60px de distância da criança

- **Animação:**
  1. Criança: opacity 0→1 + scale(0.7→1), 400ms, Depois da Anterior (delay 200ms do painel anterior), easing `cubic-bezier(0.16, 1, 0.3, 1)`
  2. Ícones: rotate(360deg) em torno da criança + opacity 0→1, 600ms, Com a Anterior (simultaneamente), stagger 50ms entre ícones
  3. Linhas conectoras: stroke-dasharray (100%→0%), 400ms, Depois dos ícones

#### Painel 2: Dinâmico e Frequentemente Não Linear

- **Cabeçalho:** Fundo `#fef3c7` (amarelo muito claro), altura 50px, borda-bottom 3px `#f59e0b`
  - Título: "Dinâmico e Frequentemente Não Linear" (18px, weight 600, `--color-midnight-ink`, padding 12px 16px)
  
- **Subtítulo:** "acelerações, platôs e reorganizações" (12px, weight 400, `--color-skyline-gray`, padding 0 16px 12px 16px)

- **Gráfico (corpo do painel):**
  - Tipo: SVG linha animada (curva não-linear)
  - Eixo X: "Tempo (anos)" — 4px stroke, `#d1d5db`, labels 10px `--color-skyline-gray`
  - Eixo Y: "Desenvolvimento / competências" — 4px stroke, `#d1d5db`, labels 10px
  - Curva principal: 3px stroke `#f59e0b`, path em forma de U invertido
    - Começa baixo (0,30%), sobe rapidamente até (50%, 85%), mantém-se estável (50–65%, 85%), depois sobe novamente (65%, 95%)
  - Área sob curva: gradiente fill de `#fef3c7` (opaco) a transparent (top)
  - Anotações diretamente na curva:
    - "aceleração" — 11px, `#f59e0b`, bold, junto ao primeiro segmento ascendente
    - "platô" — 11px, `#f59e0b`, bold, no segmento horizontal
    - "reorganização" — 11px, `#f59e0b`, bold, no segundo segmento ascendente
  - Grid de fundo: linhas horizontais 1px `#f3f4f6`, espaçamento 20%

- **Animação:**
  1. Eixos: opacity 0→1, 200ms, Depois da Anterior (delay 400ms do painel 1)
  2. Curva: stroke-dasharray (100%→0%), 1000ms, Com a Anterior, easing `cubic-bezier(0.85, 0, 0.15, 1)`
  3. Anotações: opacity 0→1 + scale(0.8→1), 300ms cada, Depois da curva (stagger 100ms)

#### Painel 3: Heterogêneo

- **Cabeçalho:** Fundo `#dcfce7` (verde muito claro), altura 50px, borda-bottom 3px `#10b981`
  - Título: "Heterogêneo" (18px, weight 600, `--color-midnight-ink`, padding 12px 16px)
  
- **Subtítulo:** "crianças da mesma idade não percorrem a mesma trajetória" (12px, weight 400, `--color-skyline-gray`, padding 0 16px 12px 16px)

- **Gráfico (corpo do painel):**
  - Tipo: SVG múltiplas linhas (4 trajetórias divergentes)
  - Eixo X: "Tempo (anos)"
  - Eixo Y: "Desenvolvimento / competências"
  - 4 trajetórias com cores distintas:
    - Trajetória 1 (azul #0071e3): começam iguais, sobe constante
    - Trajetória 2 (verde #10b981): começa igual, sobe rápido depois lento
    - Trajetória 3 (laranja #f59e0b): começa igual, curva S suave
    - Trajetória 4 (roxo #8b5cf6): começa igual, cresce erraticamente
  - Avatar pequeno (16px) de criança diferente ao final de cada trajetória (cores matching)
  - **Sem rótulos** tipo "melhor", "pior", "normal"
  - Grid de fundo: linhas 1px `#f3f4f6`

- **Animação:**
  1. Eixos: opacity 0→1, 200ms, Depois da Anterior (delay 400ms do painel 2)
  2. Trajetória 1: stroke-dasharray (100%→0%), 1000ms, Com a Anterior, easing `cubic-bezier(0.85, 0, 0.15, 1)`
  3. Trajetória 2, 3, 4: stroke-dasharray (100%→0%), 1000ms cada, Com a Anterior (simultâneas), easing mesmo
  4. Avatares: opacity 0→1 + scale(0.7→1), 300ms cada, Depois das trajetórias (stagger 80ms)

#### Síntese Final (Faixa Horizontal na Base)

- **Localização:** Abaixo dos 3 painéis, ocupando 100% da width, altura ~25% do slide
- **Fundo:** `#f0f9ff` (azul muito claro), borda-top 3px `#0071e3`, padding 30px 40px
- **Texto centralizado:**
  > "Desenvolvimento não é onde a criança está. É também de onde ela veio, para onde está indo e em que velocidade está mudando."
  
  - Tamanho: 16px, weight 500, `--color-midnight-ink`, line-height 1.45
  - **Destaques em bold + `#0071e3`:** "de onde ela veio", "para onde está indo", "em que velocidade está mudando"
  - Alinhamento: centralizado, máx-width 90%

- **Animação:**
  1. Linha 1: opacity 0→1 + translateX(-24px→0), 400ms, Depois da Anterior (delay 600ms do painel 3)
  2. Linha 2: opacity 0→1 + translateX(-24px→0), 400ms, Depois da Anterior, stagger 80ms
  3. Destaques em azul: pulse suave (opacity 1→0.7→1), 600ms loop, Depois de Anterior (opcional, para chamar atenção)

**Notas importantes:**
- Total de espaço em branco (margens externas): 30px mínimo
- Todas as transições suaves, sem cortes abruptos
- Proporcionalidade mantida entre painéis (mesma altura de cabeçalho, mesma altura de corpo)

### Slide 6 (Conclusão): Validação Científica com Artigo Peer-Reviewed

**Composição:**
- **Seção A (Topo, ~25% altura):**
  - Título: "Mensagem Central" (18px, weight 500, `--color-midnight-ink`)
  - Subtítulo: "Uma única curva descreve o comportamento médio do grupo — mas indivíduos podem seguir trajetórias distintas ao longo do desenvolvimento." (14px, weight 400, `--color-skyline-gray`, line-height 1.45)

- **Seção B (Meio, ~50% altura):** Layout 2 colunas
  
  **Coluna Esquerda (45% width) — COMO OS AUTORES CHEGARAM A ESSAS CURVAS:**
  - 3 etapas numeradas, conectadas por setas verticais
  
  **Etapa 1 — Coorte Longitudinal:**
  - Número: círculo 36px, borda 2px `#0071e3`, número "1" 18px bold
  - Título: "1 | Acompanhar as mesmas crianças ao longo do tempo" (13px, weight 500, `--color-midnight-ink`)
  - Texto: ">500 crianças do estudo L-CID | Faixa: ~7–14 anos | Três avaliações: comportamento + fMRI" (11px, weight 400, `--color-skyline-gray`, line-height 1.4)
  - Visualização: 3 ícones de criança (silhueta simples, 28px, `#0071e3`) dispostos horizontalmente com setas entre eles (→), labels "~8a", "~10a", "~12a" abaixo
  
  **Etapa 2 — Tarefa Experimental SNAT:**
  - Número: círculo 36px, borda 2px `#0071e3`, número "2" 18px bold
  - Título: "2 | Provocar e medir resposta à rejeição social" (13px, weight 500)
  - Texto: "Feedback colega: + (positivo) | ● (neutro) | − (negativo) | Noise blast (resposta agressiva medida)" (11px, weight 400, line-height 1.4)
  - 2 boxes pequenas:
    - "Comportamento: duração noise blast (após negativo vs. neutro)" — 10px, linha 2
    - "Neural: fMRI em AI, MPFC, DLPFC (negativo vs. neutro)" — 10px, linha 2
  
  **Etapa 3 — Modelo Estatístico:**
  - Número: círculo 36px, borda 2px `#0071e3`, número "3" 18px bold
  - Título: "3 | Transformar medidas em trajetórias de desenvolvimento" (13px, weight 500)
  - Texto: "Modelo Bayesiano Multinível de Curvas de Crescimento" (11px, weight 500, `#0071e3`)
  - Fórmula visual (11px, monospace, `--color-skyline-gray`):
    ```
    IDADE → [intercepto + inclinação linear + quadrático] → trajetória prevista
    ```
  - 2 boxes:
    - "Efeitos Fixos: trajetória média (linha preta grossa)" — 10px
    - "Efeitos Aleatórios: quanto cada indivíduo diverge (linhas coloridas)" — 10px
  
  **Conectores:** Setas SVG simples (2px stroke `#0071e3`) entre etapas, animadas
  
  **Coluna Direita (55% width) — O QUE O MODELO MOSTROU:**
  - 2 gráficos lado a lado (cada um ~48% width coluna, gap 20px)
  
  **Gráfico A — Behavioral Aggressive Responses:**
  - Título: "Agressividade Reativa" (12px, weight 500, `--color-midnight-ink`)
  - Tipo: Gráfico de linha SVG, eixo X (Idade em anos 7–14), eixo Y (Resposta agressiva predita 0–100)
  - Linha preta grossa (3px) em formato U invertido (pico ~9–10 anos, depois reduz)
  - Área cinza claro sob curva (faixa de incerteza)
  - Grid de fundo: linhas finas
  - Fonte: 9px para labels
  
  **Gráfico B — Neural Response (Anterior Insula):**
  - Título: "Resposta Neural (AI)" (12px, weight 500)
  - Tipo: Gráfico de linha, mesmos eixos
  - Linha preta grossa com trajetória correspondente ao artigo
  - Área cinza claro sob curva
  
  **Legenda Compartilhada (abaixo dos 2 gráficos):**
  - "Como ler: ◾ Preto = trajetória média | ▪️ Cinza = incerteza populacional | — vermelho = idade média amostra (~9a9m)" (10px, weight 400, `--color-skyline-gray`)
  
  **Achado Principal (caixa abaixo gráficos, fundo `#f2f2f4`, borda 1px `#e5e5e7`, border-radius 12px, padding 16px):**
  - "A média revela tendência do grupo: agressividade com pico ao final da infância." (11px, weight 400)
  - "Mas o modelo detecta diferenças individuais: inclinações do desenvolvimento variam entre crianças, mesmo na mesma faixa etária." (11px, weight 400, linha 2–3)

- **Seção C (Rodapé, ~15% altura):**
  - **Citação-chave (centralizada, fundo `#e0f2fe`, borda-top 3px `#0071e3`, padding 20px 30px):**
    > "A média populacional pode esconder trajetórias individuais diferentes."
    
    - Tamanho: 16px, weight 600, `--color-midnight-ink`, centrado
    - Abaixo: "No desenvolvimento, importa não apenas onde a criança está, mas como ela está mudando ao longo do tempo." (12px, weight 400, `--color-skyline-gray`, centrado)
  
  - **Referência bibliográfica (rodapé, direita):**
    - "Mulder JD, Dobbelaar S, Achterberg M. Dev Cogn Neurosci. 2024;66:101365." (9px, weight 400, `--color-slate-comment`)

**Animação (Camada 1 + 2):**
1. Título "Mensagem Central": opacity 0→1, 300ms, Depois da Anterior
2. Subtítulo: opacity 0→1 + translateY(8px→0), 400ms, Depois da Anterior, delay 100ms
3. Coluna Esquerda — Etapas:
   - Etapa 1 círculo: scale(0→1) + opacity 0→1, 300ms, Com a Anterior (delay 200ms)
   - Etapa 1 texto+visual: opacity 0→1 + translateX(-16px→0), 300ms, Depois da Anterior
   - Seta 1→2: stroke-dasharray (100%→0%), 300ms, Depois do Etapa 1
   - Etapa 2, 3: mesmo padrão, stagger 150ms entre etapas
4. Coluna Direita — Gráficos:
   - Gráfico A: eixos 200ms (opacity), Com a Anterior, depois linha 1000ms (stroke-dasharray)
   - Gráfico B: mesmo padrão, delay 400ms após Gráfico A
5. Legenda: opacity 0→1 + translateY(8px→0), 300ms, Depois da Anterior
6. Achado Principal: opacity 0→1 + scale(0.95→1), 400ms, Depois da Anterior, sombra fade-in simultânea
7. Seção C — Citação: opacity 0→1 + translateY(12px→0), 500ms, Depois da Anterior, easing `cubic-bezier(0.16, 1, 0.3, 1)`
8. Referência: opacity 0→1, 300ms, Depois da Anterior

**Easing padrão:** `cubic-bezier(0.16, 1, 0.3, 1)` (transições), `cubic-bezier(0.85, 0, 0.15, 1)` (gráficos)

---

## TABELA DE ESPECIFICAÇÃO DE ANIMAÇÃO — DUAS CAMADAS (6 SLIDES)

| Slide / Elemento | Camada 1 (CSS) | Camada 2 (PowerPoint / Vídeo) | Duração | Atraso / Stagger | Easing |
|---|---|---|---|---|---|
| **Slide 1 — Logo Liquid Metal** | Gerada via `/liquid-logo`, preset warm chrome | Vídeo WebM loop (4s), autoplay, sem áudio, iniciar com slide | 4000ms | 0ms | N/A (shader) |
| **Slide 1 — Título L1 + L2** | `opacity 0→1` + `translateY(16px→0)` por linha | Entrada Desvanecer (Fade), sequencial, Depois da Anterior | 600ms/linha | 120ms entre linhas | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 1 — Subtítulo + Rodapé** | `opacity 0→1` + `translateY(8px→0)` | Entrada Fade, sequencial, Depois da Anterior | 400ms | 100ms–200ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 2 — Foto + Transição** | Gradiente horizontal blend-mode CSS | Propriedades de máscara (sem animação), aplicar via PowerPoint | — | — | — |
| **Slide 2 — Seções (FORMAÇÃO/ESP/PRÁTICA)** | `opacity 0→1` + `translateX(-20px→0)` por seção | Entrada Deslizar (From Left), sequencial, Depois da Anterior | 400ms/seção | 120ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 3 — Card Container** | `opacity 0→1` + `scale(0.9→1)`, sombra fade-in | Entrada Zoom + Entrada Fade (sombra), Com a Anterior | 500ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 3 — Ícone Shield** | `opacity 0→1` + `scale(0→1)` | Entrada Zoom (Scale), Depois da Anterior | 400ms | 200ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 3 — Texto + Destaque** | `opacity 0→1` sequencial | Entrada Fade, Depois da Anterior | 400ms | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 4 — Círculos Timeline** | `scale(0→1)` + `opacity 0→1` | Entrada Zoom, sequencial, Depois da Anterior | 300ms/círculo | 100ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 4 — Ícones dentro Círculos** | `opacity 0→1` + `rotate(360deg)` | Entrada Rotate/Spin, Com a Anterior (simultânea ao círculo) | 400ms/ícone | 50ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 4 — Conectores Linha** | `stroke-dasharray` 100%→0% | Animação Morph (forma) ou Vídeo assado, Depois da Anterior | 500ms/conector | 150ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 4 — Rótulos** | `opacity 0→1` + `translateY(8px→0)` | Entrada Fade + Deslizar, Depois da Anterior | 300ms/rótulo | 80ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 5 — Painel 1 Criança** | `opacity 0→1` + `scale(0.7→1)` | Entrada Zoom, Depois da Anterior (delay 200ms) | 400ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 5 — Painel 1 Ícones Radiais** | `opacity 0→1` + `rotate(360deg)` radial, linhas conectoras `stroke-dasharray` | Entrada Spin (ícones) + Animação Morph (linhas), Com a Anterior | 600ms + 400ms | 50ms stagger ícones, 200ms linhas | cubic-bezier(0.85, 0, 0.15, 1) |
| **Slide 5 — Painel 2 Curva** | Linha SVG `stroke-dasharray` 100%→0%, anotações `opacity 0→1` + `translateY(8px→0)` | Vídeo assado (curva + anotações, WebM 1.2s) OU Morph + Fade | 1200ms total | 0ms | cubic-bezier(0.85, 0, 0.15, 1) |
| **Slide 5 — Painel 3 Trajetórias** | 4 linhas SVG simultâneas `stroke-dasharray` 100%→0%, avatares `opacity 0→1` + `scale(0→1)` | Vídeo assado (trajetórias + avatares, WebM 1.5s) | 1500ms total | 0ms | cubic-bezier(0.85, 0, 0.15, 1) |
| **Slide 5 — Síntese (Faixa Final)** | Linhas texto `opacity 0→1` + `translateX(-24px→0)`, destaques azuis pulse suave | Entrada Deslizar (From Left) por linha + Ênfase Pulsação (azuis), Depois da Anterior | 400ms/linha + pulse 600ms | 100ms stagger linhas | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Seção A Título** | `opacity 0→1` | Entrada Fade, Depois da Anterior | 300ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Seção A Subtítulo** | `opacity 0→1` + `translateY(8px→0)` | Entrada Fade + Deslizar, Depois da Anterior | 400ms | 100ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Coluna Esq Etapa 1 (Círculo)** | `scale(0→1)` + `opacity 0→1` | Entrada Zoom, Depois da Anterior (delay 200ms) | 300ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Coluna Esq Etapa 1 (Texto + Visual)** | `opacity 0→1` + `translateX(-16px→0)` | Entrada Deslizar (From Left) + Fade, Com a Anterior | 300ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Coluna Esq Seta 1→2** | `stroke-dasharray` 100%→0% | Animação Morph, Depois da Anterior (Etapa 1) | 300ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Coluna Esq Etapas 2 e 3** | Mesmo padrão da Etapa 1 | Entrada Zoom (círculo) + Deslizar (texto), sequencial, Depois da Anterior | 300ms/etapa | 150ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Coluna Dir Gráfico A Eixos** | `opacity 0→1` | Entrada Fade, Depois da Anterior (delay 400ms de Etapa 1) | 200ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Coluna Dir Gráfico A Curva** | Linha `stroke-dasharray` 100%→0% | Animação Morph ou Vídeo assado (WebM 1s), Com a Anterior | 1000ms | 0ms | cubic-bezier(0.85, 0, 0.15, 1) |
| **Slide 6 — Coluna Dir Gráfico B (mesmo padrão Gráfico A)** | Linha `stroke-dasharray` 100%→0% | Vídeo assado ou Morph, Depois da Anterior (delay 400ms) | 1000ms | 0ms | cubic-bezier(0.85, 0, 0.15, 1) |
| **Slide 6 — Legenda Gráficos** | `opacity 0→1` + `translateY(8px→0)` | Entrada Fade + Deslizar, Depois da Anterior | 300ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Achado Principal (Card)** | `opacity 0→1` + `scale(0.95→1)`, sombra fade-in | Entrada Zoom + Sombra fade, Depois da Anterior | 400ms | 0ms | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Seção C Citação** | Linhas `opacity 0→1` + `translateY(12px→0)` | Entrada Deslizar (From Bottom) sequencial por linha, Depois da Anterior | 500ms/linha | 80ms stagger | cubic-bezier(0.16, 1, 0.3, 1) |
| **Slide 6 — Seção C Referência** | `opacity 0→1` | Entrada Fade, Depois da Anterior | 300ms | 100ms | cubic-bezier(0.16, 1, 0.3, 1) |

**Notas gerais (6 slides):**
- **Easing padrão para entrada:** `cubic-bezier(0.16, 1, 0.3, 1)` (suave, clínico)
- **Easing padrão para gráficos:** `cubic-bezier(0.85, 0, 0.15, 1)` (bklit-ui, mais acentuado)
- **Trigger padrão:** "Depois da Anterior" (sequência automática) — confirme com Dr. Charlington se prefere "Ao Clicar"
- **Duração máxima:** 1.5s por animação isolada (excepto gráficos complexos = 1.2s)
- **Total esperado de apresentação:** 30–40 minutos (slides + fala)

---

## SKILLS E HABILIDADES A UTILIZAR

1. **`design`** (Claude Design canvas, `.dc.html`). 
   - Ambiente principal de edição de protótipos visuais.
   - Toda Camada 1 (CSS, SVG, animações) é desenvolvida aqui.

2. **`design-loop`**. 
   - Executar após cada seção de slides para ciclo iterativo: revisar renderização, comparar contra especificação, corrigir timing/cores/alinhamentos.

3. **`liquid-logo`**. 
   - Gerar loop animado da logo (monograma "S" espiral) em liquid metal.
   - Preset: warm chrome (Dispersion 0.006, Edge 0.35, Pattern Blur 0.008, Liquify 0.05, Speed 0.18, Pattern Scale 2.9).
   - Resultado: vídeo WebM 4s, loop infinito, sem áudio.

4. **`dataviz`** (ou equivalente em Python matplotlib/seaborn).
   - Construir gráficos (anéis, barras, linhas, dispersão) com paleta coerente (Future Blue #0071e3 + tons neutros).
   - Garantir fontes legíveis em projeção (14px mínimo).

5. **`artifact-diagramming`** (ou Mermaid/Graphviz).
   - Diagramas de fluxo, timelines, pirâmides, funis, redes (slides 4, 13, 15, 20, 21).

6. **`image`** (geração de ícones).
   - Criar conjunto coerente de ícones em estilo line-icon ou duotone:
     - Domínios: cérebro, coração, grupo, engrenagem, balão de fala, escada, alvo, velocímetro, etc.
     - Estilo: stroke 2–2.5px, `#0071e3` ou `#868788`, canvas 48–64px, sem preenchimento sólido.

7. **`bklit-ui`** (referência).
   - Repositório local em `~/.claude/tools/bklit-ui`.
   - Fonte de timing e easing padrão para gráficos.
   - Se houver versão web futura, instalar componentes React via shadcn.

8. **GSAP** (referência conceitual, não carregada em `.dc.html`).
   - Use como vocabulário de easing e stagger ao escrever CSS puro equivalente.

---

## ENTREGÁVEIS ESPERADOS (6 SLIDES)

1. **Markdown técnico (este documento):** 
   - Especificação pixel-perfect de todos os 6 slides.
   - Cada slide com: composição, cores exatas, tipografia, espaçamento, ícones, gráficos, animação (Camada 1 e 2).

2. **Protótipos visuais (Camada 1):**
   - Artboard `.dc.html` único ou separado por seção na skill `design`, com CSS puro + SVG.
   - Loop liquid metal da logo (via `/liquid-logo`, preset warm chrome validado).
   - Validação via `design-loop` após finalizar cada 2 slides.

3. **Animações e Entrega (Camada 2):**
   - Cada animação da tabela traduzida para PowerPoint nativo (Entrada, Ênfase, Trajetória, Gatilho, Atraso, Duração, Easing).
   - Vídeos assados (WebM/MP4 silenciosos) para Painel 2, Painel 3 (Slide 5) e Gráficos A+B (Slide 6).
   - Exportação final: `.pptx` formato 16:9 (proporcional), todos os vídeos embutidos, pronto para apresentação.

4. **Documentação (antes/depois):**
   - Linha de justificativa por slide (o que mudou, por quê, impacto esperado em projeção).

5. **Ativos Finais:**
   - Logo animada em liquid metal (WebM 4s, loop).
   - Conjunto de ícones coerentes (6 domínios Slide 5, 6 tópicos Slide 4, shield Slide 3, ícones fases/gráficos Slide 6).
     - Formato: SVG ou PNG 48×48, fundo transparente, stroke 2–2.5px, cor #0071e3 ou #868788.
   - Fontes (Inter W300, 400, 500, 600 — verificar licensing).
   - Vídeos gráficos (WebM, ~2–3MB cada, duração conforme tabela).

6. **Garantias de qualidade:**
   - **Zero alteração** em dados numéricos, marcos desenvolvedores, referências científicas (Mulder et al. 2024).
   - **Tom científico** preservado, rigor acadêmico mantido.
   - **Legibilidade em projeção** validada: mínimo 14px corpo, 18px cabeçalhos, contraste WCAG AA.

---

## CALIBRAÇÃO VISUAL E BOAS PRÁTICAS

### Do's (Seguir sempre)

- ✅ Tipografia Inter weight 300 para títulos → tom suave, sofisticado, acolhedor.
- ✅ Espaçamento generoso (94px entre seções, 30px entre elementos).
- ✅ Cores neutras com Future Blue #0071e3 como único saturado → legibilidade máxima, sem ruído visual.
- ✅ Sombras muito leves (`elevation-1`, `elevation-2`) → profundidade sem peso.
- ✅ Linha de base de legibilidade: **14px mínimo em corpo, 18px mínimo em cabeçalhos**.
- ✅ Animações com easing profissional e timing consistente (ver tabela).
- ✅ Ícones simples, line-style, alinhados a um grid visual (múltiplo de 8px).
- ✅ Gráficos com gradientes suaves, sem cores conflitantes.

### Don'ts (Nunca fazer)

- ❌ Não usar cores vibrantes além de #0071e3.
- ❌ Não sobrecarregar com sombras densas (drop shadows) — interface deve ser planar.
- ❌ Não forçar texto em CAPS EXTENSO; priorizar sentence case.
- ❌ Não adicionar decorações sem função (clipart, ícones genéricos).
- ❌ Não animar tudo — apenas elementos que comunicam conceito (gráficos, transições, ênfase).
- ❌ Não exceder 1.5s de duração por animação isolada.
- ❌ Não ignorar acessibilidade: contraste mínimo WCAG AA, fontes legíveis, hierarquia clara.

---

## PROCESSO DE TRABALHO SUGERIDO (6 SLIDES)

### Fase 1: Setup e Validação Inicial

- [ ] Confirmar data/hora da apresentação e duração esperada (30–40 min de fala).
- [ ] Perguntar ao Dr. Charlington: triggers de animação devem ser automáticos ("Depois da Anterior", sequência ao entrar no slide) ou manuais ("Ao Clicar", controle durante apresentação)?
- [ ] Validar acesso à logo original (monograma "S" em SVG ou PNG 2600×1458px).
- [ ] Confirmar fontes (Inter W300, 400, 500, 600 — licensing para uso corporativo + PowerPoint export).
- [ ] Definir ordem de desenvolvimento (Slides 1→6 sequencial ou por prioridade?).

### Fase 2: Desenvolvimento Iterativo (2–3 semanas)

#### Sprint 1 — Slides 1–3 (Capa, Bio, Conflitos)
- [ ] Criar artboard `.dc.html` na skill `design`.
- [ ] Slide 1: Logo liquid metal via `/liquid-logo` (preset warm chrome, 4s loop).
- [ ] Slide 1: Título + subtítulo + rodapé animados (fade+slide sequencial).
- [ ] Slide 2: Foto com gradiente horizontal blend-mode, seções FORMAÇÃO/ESPECIALIDADES/PRÁTICA com animação de deslizar.
- [ ] Slide 3: Card centralizado com ícone shield, texto com destaque azul, animação zoom+fade.
- [ ] **Design-loop review** — validar cores (#f2f2f4, #0071e3, tipografia Inter w300), timing, easing.

#### Sprint 2 — Slides 4–5 (Agenda + Conceito Principal)
- [ ] Slide 4: Timeline horizontal com 6 círculos numerados, ícones, conectores, rótulos (múltiplas animações coordenadas).
- [ ] Slide 5 (CRÍTICO): Painel 1 (radial), Painel 2 (curva), Painel 3 (4 trajetórias), Síntese (faixa).
  - Opção A (mais rápido): Vídeos assados (WebM) para Painéis 2 e 3.
  - Opção B (mais customizável): SVG puro com CSS stroke-dasharray.
- [ ] **Design-loop review** — validar proporcionalidade entre painéis, contraste em projeção, leitura visual order.

#### Sprint 3 — Slide 6 (Validação Científica)
- [ ] Layout 2-col: esquerda (metodologia 3 etapas), direita (2 gráficos A+B).
- [ ] Gráficos: vídeos assados (WebM 1s cada) ou SVG+CSS (stroke-dasharray).
- [ ] Seção C: citação com síntese, referência bibliográfica.
- [ ] **Design-loop review** — validar legibilidade de gráficos em projeção, proporcionalidade colunas, timing sequencial.

### Fase 3: Vídeos Assados e Otimização

- [ ] Renderizar vídeos WebM:
  - Logo liquid metal (4s, /liquid-logo)
  - Painel 2 Slide 5 (curva + anotações, 1.2s)
  - Painel 3 Slide 5 (4 trajetórias + avatares, 1.5s)
  - Gráfico A Slide 6 (curva comportamental, 1s)
  - Gráfico B Slide 6 (curva neural, 1s)
- [ ] Compactar WebMs (H.264 codec, 2–3MB cada, silent, autoplay loop).
- [ ] Testar reprodução em PowerPoint (nem todos os formatos de vídeo são bem suportados).

### Fase 4: Exportação e Testes PowerPoint

- [ ] Traduzir todas animações Camada 1 (CSS) para PowerPoint nativo:
  - Entrada (Fade, Zoom, Deslizar)
  - Ênfase (Pulsação)
  - Trajetória de Movimento (se aplicável)
  - Gatilhos (Depois da Anterior / Ao Clicar)
  - Atrasos (conforme tabela)
- [ ] Embutir vídeos WebM como mídia nos slides.
- [ ] Exportar `.pptx` final (proporcional 16:9).
- [ ] Testes em múltiplas resoluções (1920×1080, 2560×1440, 3840×2160).
- [ ] Testar em PowerPoint Windows e Mac se possível.

### Fase 5: Validação em Auditório e Entrega

- [ ] Projetar em auditório real (se possível) para validar:
  - Legibilidade de texto (mínimo 14px corpo validado visualmente)
  - Timing de animações (velocidade apropriada para ritmo de fala)
  - Cores em projeção (contraste, sem saturação excessiva)
- [ ] Ajustes finais com feedback do Dr. Charlington.
- [ ] Entrega final:
  - `.pptx` com todas animações nativas + vídeos embutidos
  - Markdown técnico (este documento)
  - Guia rápido de uso (como navegar animações manualmente se necessário)
  - Ativos soltos (logo SVG, ícones, fontes se não estiverem embutidas)

---

## REFERÊNCIAS E INSPIRAÇÕES

- **Artigo Mulder et al. (2024):** "Behavioral and neural responses to social rejection: individual differences in developmental trajectories across childhood and adolescence." *Developmental Cognitive Neuroscience*, 66, 101365.
- **Padrões de motion:** GSAP (greensock), bklit-ui, Framer Motion.
- **Paleta e tipografia:** Design System Charlington (site charlington.com.br, `.md` DesignCharlington).
- **Referências clínicas:** DSM-5-TR, NICE NG87, recomendações AAP (American Academy of Pediatrics).

---

**Versão:** 1.0  
**Data:** Setembro 2026  
**Revisor:** Sistema de Prompt Técnico para Apresentações Científicas do Dr. Charlington Cavalcante
