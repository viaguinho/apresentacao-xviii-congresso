# PROMPT: Novo slide "Diferentes mecanismos, diferentes efeitos no cérebro" (entre os slides 10 e 11)

> Prompt autossuficiente para uma sessão do Claude Code aberta na pasta do projeto.
> Herda as regras de integridade e legibilidade de `PROMPT_AJUSTE_DIAGRAMACAO_42_SLIDES.md` e as convenções de inserção de slide de `PROMPT_ATUALIZACAO_SPLIT12_COGNICAO_REDISTRIBUICAO.md`.
> **Skills a invocar:** `dataviz` (antes de escrever qualquer linha do gráfico: forma, papéis de cor, validação de paleta, specs de marca, hover, checagem visual final). Referência de design: cards do slide "Cognição em sistema" (`components/slide14-cognition.tsx`).

---

## 0. MISSÃO

Criar um slide novo **logo depois de "Plasticidade" (slide 10)** e **antes de "Cascatas"**, que reproduz em linguagem visual do deck o gráfico conceitual de **Gabard-Durnam LJ, McLaughlin KA. Biol Psychiatry. 2019;85(10):789-791** enviado como imagem pelo usuário. Nenhum texto do gráfico pode ser removido, resumido ou escondido; nenhum dos seus 21 painéis pode perder elementos. Muda só o visual (grade, cards, tipografia, cor, animação), no padrão do **Eixo 1 (azul `#0071e3`)** e no estilo dos cards do slide "Cognição em sistema".

---

## 1. INVENTÁRIO DO GRÁFICO ORIGINAL (conteúdo que tem de aparecer inteiro)

**Título:** "Diferentes mecanismos, diferentes efeitos no cérebro"
**Legenda:** seta → "Tempo" · raio, estouro, X → "Adversidade" · check → "Experiência esperada"

**Grupo A — "Experiência-expectante" / "Especificidade do desenvolvimento"**

| Linha | Descrição | Painel 1 | Painel 2 | Painel 3 |
|---|---|---|---|---|
| Período crítico | Janela temporal estreita | curva estreita; check no pico; raio depois da janela | raio na borda de subida; check no pico | raio antes da janela; check depois que a janela fechou |
| Período sensível | Janela temporal mais ampla | curva larga; check no pico; raio na cauda direita | raio na cauda esquerda; check no pico | raio no início; check na cauda direita |

**Grupo B — "Experiência-dependente" / "Ao longo do curso da vida"**

| Linha | Descrição | Painel 1 | Painel 2 | Painel 3 |
|---|---|---|---|---|
| Resposta à dose | Maior intensidade de exposição | 1 raio | 2 raios | 3 raios |
| Recência | Eventos recentes têm maior peso | 1 raio no início | 1 raio perto de "agora" (linha tracejada) | 1 raio colado em "agora" |
| Acumulação | Efeitos se somam ao longo do tempo | 1 raio | 3 raios espalhados | 4 raios espalhados |
| Risco cumulativo | Combinação de múltiplos fatores | caixa [raio] | caixa [raio + estouro] | caixa [raio + estouro + X] |
| Sensibilidade biológica ao contexto | Genética e ambiente modulam o efeito | caixa [cromossomo claro + raio] | caixa [cromossomo médio + raio] | caixa [cromossomo escuro + raio] |

**Eixo inferior:** seta em gradiente "Menor efeito no cérebro" → "Maior efeito no cérebro" (a leitura das 3 colunas é de menor para maior efeito).
**Referência:** Gabard-Durnam LJ, McLaughlin KA. Biol Psychiatry. 2019;85(10):789-791 (mesmo formato Vancouver já usado no REF do slide 10).

Contagem que deve bater no final (Contrato 2): **7 linhas × 3 painéis = 21 painéis**; **6 curvas** (3 estreitas + 3 largas); **6 checks**; **29 raios** (períodos 3+3, dose 1+2+3, recência 1+1+1, acumulação 1+3+4, risco cumulativo 1+1+1, sensibilidade 1+1+1); **2 estouros** e **1 X** (risco cumulativo); **2 marcadores "agora"**; **3 cromossomos** (claro, médio, escuro); **6 sinais "+"** (risco 0+1+2, sensibilidade 1+1+1).

---

## 2. POSIÇÃO NO DECK E EFEITOS COLATERAIS

- Deck passa de 44 para **45 slides**. O novo slide é o **11**; tudo a partir de "Cascatas" anda +1.
- **Top Bar (`src/topbar-modules.ts`)** é posicional: Eixo 1 **5–15**, Eixo 2 **16–20**, Eixo 3 **21–24**, Eixo 4 **25–28**, Eixo 5 **29–33**, Eixo 6 **34–37**, Eixo 7 **38–41**; limite de exibição `> 41`.
- **`index.html`:** renumerar `data-screen-label` numéricos a partir de "11" (+1) e `"40b"` → `"41b"` (o `deck-stage` renumera em runtime de qualquer forma; é só coerência do HTML-fonte).
- **Arquivos:** `components/slide10b-mechanisms.tsx` (componente `Slide10bMechanisms`), root `#slide10b-react-root`, registro em `src/main.tsx` (import, `renderSlide10bApp`, chamada em `syncSlideVisibility`, `mountSlide10b` em `window.initSlide10bMechanisms`, id em `rootIds`) e nos dois blocos do script DC do `index.html`.
- **O arquivo `index.html` e o `main.tsx` também estão sendo editados pelo usuário (slide "Mente e Cérebro").** Só edições pontuais (Edit com trecho único); nada de reescrever o arquivo.

---

## 3. DESIGN

### 3.1 Moldura do slide (padrão Eixo 1)
- `section` com `padding:90px 100px 82px`, fundo `#fdfdfd`, eyebrow azul 24 px "Eixo 1 · Processo dinâmico".
- **H2 = título do gráfico** ("Diferentes mecanismos, diferentes efeitos no cérebro"), 48 px light — não se inventa título novo; o título do gráfico sobe para o lugar do H2.
- **Legenda** no canto direito da linha do título (como a pílula de legenda do slide 9), em pílulas brancas com os mesmos glifos do gráfico.
- REF dock no rodapé, logo à direita, `data-speaker-notes` curtas derivadas do próprio gráfico.

### 3.2 Grade (canvas 1920×1080, área útil ~1720×790)
- Coluna de **grupo** (≈250 px) + área de linhas. Grupo A ocupa a altura das 2 linhas de período; grupo B, das 5 linhas seguintes.
- Cada **linha** é um card branco no estilo das camadas do slide "Cognição em sistema": `rounded-2xl`, `border-black/[0.08]`, sombra suave, rótulo à esquerda (≈360 px: título Urbanist 20–21 px bold + descrição Satoshi 16 px `zinc-600`) e **3 células** de gráfico (`bg-[#f7f9fc] rounded-xl`), como as trilhas da "Maturação Heterocrônica".
- **Cards de grupo** no estilo do card-destaque "Funções Executivas Nucleares": gradiente azul claro → branco, borda azul, título Urbanist 26–28 px azul, subtítulo 18 px, ícone Lucide discreto.
- **Eixo inferior** alinhado às 3 colunas de células: barra em gradiente `#cfe3fb → #0071e3` com ponta de seta e os dois rótulos (18 px).

### 3.3 Gráfico (skill `dataviz`)
- **Forma:** matriz de *small multiples* (mesma forma em todas as células) — é o que o original já é; nada de trocar por outro tipo.
- **Papéis de cor (fixos, nunca por posição):** azul `#0071e3` = tempo/janela (seta da timeline, curvas com preenchimento em gradiente 22%→2%); tinta `#2d2e30` = adversidade (raio, estouro, X, contorno das caixas); verde `#059669` = experiência esperada (check); cinza tracejado = marcador "agora" (tracejado aceito: é referência/limiar, não grade).
- **Validação:** `node scripts/validate_palette.js "#0071e3,#059669,#3f4042" --mode light` → CVD ΔE 22,7 e normal ΔE 23,9 (PASS). Falhas de lightness/chroma são do cinza-tinta, neutro de propósito; identidade nunca depende só da cor (raio ≠ estouro ≠ X ≠ check ≠ curva).
- **Marcas:** traços de 2 px (timeline 2 px, curvas 2,5 px), glifos ≥ 24 px efetivos com anel branco (fill branco) para ficarem legíveis sobre as curvas; "+" das caixas como texto ≥ 20 px.
- **Geometria:** SVG por célula com `viewBox 340×80` renderizado ~1:1 (tamanho efetivo = nominal); posições relativas dos glifos iguais às do original (antes/dentro/depois da janela; distância até "agora" diminuindo; contagem de raios).
- **Hover:** a linha inteira realça (borda e fundo azul claro), sem texto novo visível; cada célula tem `aria-label` descritivo para leitor de tela.
- **Animação:** linhas entram em cascata (`opacity`/`y` 10 px, 0.35 s, `ease [0.16,1,0.3,1]`), curvas desenhadas por `pathLength`, glifos surgem com escala; seta inferior cresce da esquerda. Estado final estático e dentro do slide.

---

## 4. VERIFICAÇÃO
1. Captura headless 1920×1080 do slide novo + vizinhos (10, 12) e auditoria: 0 textos < 14 px, 0 fora do slide, 0 sobreposições, Top Bar "Eixo 1" no 11 e no 15, "Eixo 2" no 16, "Eixo 7" no 41, ausente no 42.
2. Todo texto do inventário (seção 1) presente no `textContent` do slide; contagem de células/glifos conferida.
3. Texto dos demais slides idêntico ao da captura anterior (exceto os que giram sozinhos).
4. `npm run build` ok e slide conferido no `dist/`.
5. Comparar lado a lado com a imagem original: mesmas linhas, mesmos cenários, mesma progressão de efeito.

## 5. CRITÉRIOS DE ACEITE
- [ ] Slide 11 novo entre Plasticidade e Cascatas, no padrão do Eixo 1.
- [ ] 100% do texto e dos 21 painéis do original presentes; referência no rodapé.
- [ ] Visual de cards alinhado ao slide "Cognição em sistema"; fontes ≥ 14 px (rótulos de dado ≥ 15 px).
- [ ] Top Bar correta em todas as posições deslocadas; deck com 45 slides.
- [ ] Build ok; trabalho paralelo do usuário preservado; sem commit sem autorização.

---

## 6. REGISTRO DE EXECUÇÃO (11/09/2026)

- **Skill `dataviz`:** forma mantida (matriz de *small multiples*); papéis de cor fixos; validador rodado (`#0071e3,#059669,#3f4042`): CVD ΔE 22,7, normal ΔE 23,9, contraste ≥ 3:1 → PASS; lightness/chroma do cinza-tinta reprovam por ser neutro de propósito (glifo de adversidade, sempre com forma própria). Traços 2–2,5 px, glifos ≈ 36 px efetivos com preenchimento branco, "agora" tracejado (limiar, não grade), hover realça a linha inteira sem texto novo, `aria-label` por célula.
- **Arquivos:** `components/slide10b-mechanisms.tsx` (novo: `Slide10bMechanisms` + `Slide10bLegend`), `index.html` (section nova "Mecanismos e cérebro", rótulos 11→12 … 43→44, `40b`→`41b`, hooks DC), `src/main.tsx` (2 roots: `#slide10b-legend-root`, `#slide10b-react-root`), `src/topbar-modules.ts` (faixas +1).
- **Grade final:** card de grupo 248 px + linhas (rótulo 340 px + 3 células SVG 340×72); grupo A em 2 linhas, grupo B em 5; eixo inferior alinhado às 3 colunas.
- **Verificação:** 45 slides capturados; slide 11 com 0 textos < 14 px, 0 fora do slide, 0 sobreposições, 0 cortes; os 25 textos do inventário presentes, 2 "agora", 6 "+"; Top Bar: Módulo 01 do 5 ao 15, 02 do 16 ao 20, … 07 do 38 ao 41, ausente do 42 em diante; texto dos outros slides idêntico ao anterior (diferenças só em 22, 31, 34 e 36, que giram sozinhos); `tsc` sem erros nos arquivos novos; `npm run build` ok e slide conferido no `dist/`.
