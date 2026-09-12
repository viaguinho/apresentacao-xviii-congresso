# Prompt mestre — converter o deck em `.pptx` para PowerPoint

Cole o bloco abaixo em uma sessão nova de IA com a pasta do projeto aberta. Ele
descreve a estratégia, o motivo de cada decisão, o passo a passo e o critério de
aceite.

> Este prompt descreve o pipeline já implementado em `scripts/export-slides.mjs`
> e `scripts/build-pptx.mjs`. Se os scripts existem, o comando é
> `npm run build:pptx`. O prompt serve para recriar o pipeline em outro projeto
> ou consertá-lo quando o deck mudar de estrutura.

---

## ▼ COPIE DAQUI PARA BAIXO ▼

Você vai converter uma apresentação HTML de 45 slides — desenhada para um palco
de 1920×1080, com componentes React, gráficos SVG, cards, diagramas orbitais e
vídeos — em um arquivo **`.pptx` que abre no PowerPoint em qualquer máquina**,
com **todo o conteúdo visual e textual preservado**.

### 1. Decida a estratégia antes de escrever código

Existem duas formas de converter um deck assim, e escolher errado destrói o
trabalho:

**(A) Reconstruir em formas nativas do PowerPoint** — caixas de texto,
`addChart()`, autoformas. Dá texto editável, mas é impossível reproduzir
fielmente diagramas orbitais, flows SVG customizados, cards com sombra e
tipografia de marca. O resultado é um deck diferente, mais pobre, que não é o
que o cliente aprovou.

**(B) Renderizar cada slide em imagem full-bleed** e montar o `.pptx` com uma
imagem por slide. O desenho chega pixel a pixel: cada card, cada gráfico, cada
ícone fica exatamente como foi projetado.

**Use (B), com uma camada de texto real por cima da limitação:** o texto de cada
slide vai para as **notas do apresentador** (que o Find do PowerPoint pesquisa)
e para o **texto alternativo da imagem** (que leitores de tela leem). Assim
nada de conteúdo se perde — só a editabilidade das caixas individuais, que é o
preço honesto de manter o design intacto.

Diga isso ao usuário de forma explícita antes de entregar. Não finja que o
texto ficou editável.

### 2. Renderize os slides (um carregamento só)

Dirija um Chrome headless pelo **DevTools Protocol**. Não use um processo de
Chrome por slide: o arquivo standalone tem ~12 MB de data URI e recarregar 45
vezes leva minutos. Um `--dump-dom` por slide é o caminho errado.

```
--headless=new --remote-debugging-port=9333 --window-size=1920,1080
--force-device-scale-factor=1 --hide-scrollbars
--autoplay-policy=no-user-gesture-required --disable-gpu
```

Depois de conectar no WebSocket do target:

1. `Emulation.setDeviceMetricsOverride` com **exatamente** a resolução do palco
   (1920×1080). Se o viewport não bater com o palco, o deck escala o conteúdo e
   a captura sai com bordas ou cortada.
2. **Espere o deck montar de verdade.** Não basta o `load`: faça polling até
   `document.querySelectorAll('deck-stage section').length > 0` **e**
   `document.querySelectorAll('[data-mounted="true"]').length > 0`. O segundo
   confirma que as ilhas React montaram.
3. Para cada índice: chame a API pública de navegação do deck —
   `document.querySelector('deck-stage').goTo(i)` — em vez de mexer em
   `location.hash`, que nem sempre dispara a troca.
4. **Espere ~3 segundos depois de cada `goTo`.** As ilhas React remontam a cada
   ativação de slide justamente para a animação de entrada tocar de novo; se
   capturar antes, o slide sai em branco ou meio desenhado.
5. `Page.captureScreenshot` com `format: 'png'`, `fromSurface: true`.

Esconda apenas o *chrome* de apresentação ao vivo (overlay de número de slide,
trilho de miniaturas). **Não esconda a barra de navegação de eixos do topo** —
ela é conteúdo do slide, não do player. Confira em um render antes de assumir
qual é qual.

### 3. Extraia o texto no mesmo passe

Com a página já aberta, para cada slide colete o texto percorrendo só os nós
folha (`el.children.length === 0`), deduplicando — senão cada frase aparece
repetida uma vez por elemento ancestral. Guarde junto o
`data-screen-label` da `section`. Salve tudo em um JSON ao lado dos PNGs.

### 4. Monte o `.pptx`

Com `pptxgenjs`:

- **Defina o layout ANTES de adicionar qualquer slide.** O padrão é 10" × 5.625"
  e coordenadas além disso são gravadas sem recorte — a forma simplesmente não
  aparece. Use um layout custom de **13.333" × 7.5"**, que é 16:9 exato e casa
  com 1920×1080. (`LAYOUT_WIDE` é 13.3", ligeiramente fora de proporção.)
- Uma imagem por slide em `x: 0, y: 0, w: 13.333, h: 7.5`.
- `altText` com o rótulo do slide e o texto extraído.
- `slide.addNotes(...)` com o texto completo — **nunca** em uma caixa de texto
  na lâmina.
- Preencha `pres.title`, `pres.author`, `pres.subject`.
- Cores em hexadecimal **sem `#` e sem canal alfa** — `"FFFFFF"`. Um `"#FFFFFF"`
  ou `"FFFFFF20"` corrompe o arquivo.
- Uma instância `new pptxgen()` por arquivo de saída.

### 5. Verificação (as quatro camadas)

1. **Validação estrutural**: rode o `validate.py` da skill de pptx. Ele acusa os
   defeitos de XML que o PowerPoint recusa e nomeia a correção de cada um.
   Precisa de Python 3.10+ — o `python3` do sistema no macOS é 3.9 e quebra com
   `SyntaxError` no `match`; use `uv run --python 3.12`.
2. **Conteúdo**: com `python-pptx`, confirme contagem de slides, tamanho do
   palco, que **todo** slide tem imagem e que **todo** slide tem notas não
   vazias.
3. **Integridade das imagens**: compare o md5 dos PNGs de origem com o dos
   arquivos em `ppt/media/` dentro do `.pptx`. Têm que ser idênticos.
4. **Render real**: abra no PowerPoint de verdade e exporte um PDF. Se o
   PowerPoint abrir sem pedir reparo e o PDF sair em 960×540 pt, o arquivo está
   correto. Depois **feche sem salvar** (`close active presentation saving no`)
   para não alterar o arquivo entregue.

### 6. Critério de aceite

- Uma lâmina por slide do deck original, na mesma ordem.
- Cada lâmina em 16:9, imagem ocupando o palco inteiro, sem borda nem faixa.
- Nenhum slide em branco ou capturado no meio da animação.
- Notas do apresentador preenchidas em todas as lâminas.
- Abre no PowerPoint sem diálogo de reparo.

### 7. Limitações que você deve comunicar

- **Texto não é editável por caixa.** Para alterar uma frase, muda-se o HTML e
  reexporta-se.
- **Vídeos viram quadro estático.** Slides com vídeo mostram o frame capturado.
  Se algum vídeo for essencial ao argumento, ofereça inserir o `.mp4` como mídia
  nativa naquela lâmina específica.
- **Componentes interativos ficam no estado padrão.** Cards expansíveis mostram
  o primeiro item aberto; carrosséis mostram o instante da captura.
- **Animações de entrada não existem no PPTX.** Cada lâmina é o estado final.

## ▲ COPIE ATÉ AQUI ▲

---

## Como rodar neste projeto

```bash
npm run build:pptx
```

Encadeia `build:standalone` → `scripts/export-slides.mjs` →
`scripts/build-pptx.mjs`. Saída em
`~/Downloads/Apresentação XVIII Congresso Dr. Charlington Cavalcante.pptx`.

Se o HTML standalone já estiver atualizado, dá para pular a primeira etapa:

```bash
node scripts/export-slides.mjs && node scripts/build-pptx.mjs
```

Os PNGs intermediários e o `texto.json` ficam em `.standalone-cache/slides/`
(ignorado pelo git), úteis para conferir um slide específico sem reabrir o deck.
