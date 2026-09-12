# Prompt mestre — empacotar o deck em UM arquivo `.html` para o cliente

Cole o bloco abaixo em uma sessão nova de IA (Claude Code, Cursor, Antigravity…)
com a pasta do projeto aberta. Ele descreve o objetivo, a arquitetura, cada
armadilha conhecida e o critério de aceite — um agente competente consegue
reproduzir a entrega do zero seguindo só este texto.

> Este prompt descreve o pipeline que já está implementado em
> `scripts/build-standalone.mjs` e `scripts/optimize-media.mjs`. Se os scripts
> existem, o comando é `npm run build:standalone`. O prompt serve para
> **recriar** o pipeline em outro projeto, ou para consertá-lo quando o deck
> mudar de estrutura.

---

## ▼ COPIE DAQUI PARA BAIXO ▼

Você vai transformar uma apresentação HTML que hoje só roda em servidor local
em **um único arquivo `.html` autossuficiente**, que o cliente abre com duplo
clique em qualquer computador (Windows, macOS ou Linux), sem internet, sem
instalar nada, sem pasta de assets ao lado.

### 1. Critério de aceite (não entregue sem isso)

O arquivo final tem que passar em todos estes pontos:

1. É **um arquivo só**. Nada de pasta `assets/`, `dist/` ou `_ds/` ao lado.
2. Abre com **duplo clique** (protocolo `file://`) e renderiza todos os slides.
3. Funciona **sem internet**: nenhuma requisição para CDN, Google Fonts,
   unpkg, jsdelivr ou qualquer domínio externo.
4. As **fontes da marca aparecem** — nada de cair para Arial/Times.
5. **Vídeos tocam** e **imagens carregam**, inclusive as que dependem de
   transparência.
6. A navegação por **setas do teclado** e a barra de progresso funcionam.
7. O arquivo fica **abaixo de ~15 MB**, para abrir rápido e caber em e-mail
   corporativo / WeTransfer sem drama.

### 2. Antes de começar: mapeie o projeto

Rode um levantamento e me mostre o resultado antes de editar qualquer coisa:

- Qual arquivo é o deck (normalmente `index.html`) e o que ele carrega:
  liste **todos** os `src=` e `href=`.
- Qual é o runtime do deck. Em decks gerados por Claude Design / Antigravity há
  um `support.js` (runtime `x-dc` / `dc-runtime`) e um `deck-stage.js`
  (custom element `<deck-stage>` carregado por `<x-import from="...">`).
- Se existe uma etapa de build (Vite/Webpack) que gera um bundle React com as
  "ilhas" interativas de cada slide.
- Quais assets existem e **quais estão realmente referenciados**. Faça isso
  por busca de texto no código, não por intuição.

### 3. Limpeza (faça primeiro — build limpo é build menor)

1. **Assets órfãos.** Para cada arquivo em `assets/`, procure o nome dele em
   todo o código (`.html`, `.js`, `.jsx`, `.ts`, `.tsx`, `.css`). O que não
   aparecer em lugar nenhum sai. Cuidado com nomes que contêm espaço e com
   duplicatas em formatos diferentes (`foo.png` e `foo.jpg` do mesmo desenho).
2. **Componentes órfãos.** Monte o grafo de imports a partir do entry
   (`src/main.tsx`) e apague todo componente que não for alcançável.
3. **Dependências órfãs.** Depois da limpeza, veja quais pacotes do
   `package.json` ainda são importados. Remova o resto e rode `npm install`
   para reduzir o `node_modules` e o bundle.
4. **Lixo de raiz.** `.DS_Store`, `.thumbnail`, `*.zip` de exportação, HTMLs
   antigos, cópias duplicadas de vídeo, scripts de export que não existem mais.
5. Confirme que o projeto **ainda builda e ainda renderiza** depois disso.
   Compare um screenshot antes/depois.

### 4. Otimize a mídia (é aqui que o peso cai)

Não embuta os arquivos originais. Gere versões dimensionadas para o tamanho em
que a mídia **realmente aparece** na projeção de 1920×1080, gravando em uma
pasta de cache fora do `assets/` (os originais ficam intactos).

- **Imagens**: redimensione para no máximo 720 px quando forem cards/ícones e
  1600 px quando forem imagem de fundo. Salve em **WebP** (qualidade 78–85);
  ele preserva canal alfa e é aceito por todo navegador desde 2020. Se o
  `ffmpeg` da máquina não tiver `libwebp` (é o caso comum no Homebrew), use
  Python + Pillow — o resultado no downscale com alfa ainda é melhor.
- **Vídeos**: reencode em **H.264 / `yuv420p` / `-movflags +faststart`**, sem
  áudio, com `-crf 28..30`. H.264 é o único codec que toca em Safari, Chrome,
  Edge e Firefox sem configuração nenhuma no lado do cliente.
- **Armadilha do WebM com alfa**: se um `.webm` tiver `alpha_mode=1` (confira
  com `ffprobe -show_streams`), o decoder padrão do ffmpeg **descarta o canal
  alfa e devolve o vídeo preto**. Force o decoder e achate o vídeo sobre o
  fundo que o slide usa:

  ```
  ffmpeg -c:v libvpx-vp9 -i entrada.webm \
         -f lavfi -i color=c=white:s=600x600 \
         -filter_complex "[0:v]scale=600:600:flags=lanczos[fg];[1:v][fg]overlay=shortest=1,format=yuv420p[out]" \
         -map "[out]" -an -c:v libx264 -crf 26 -preset slow -movflags +faststart saida.mp4
  ```

  Isso só é seguro porque o `<video>` usa `mix-blend-mode: multiply` sobre um
  fundo claro. Confira qual é o fundo real antes de escolher a cor.

Meta realista: 40 MB de mídia original viram 5–6 MB.

### 5. Monte o arquivo único

Gere o HTML final a partir do `index.html`, aplicando nesta ordem:

1. **CSS** — troque cada `<link rel="stylesheet">` local pelo conteúdo do
   arquivo, dentro de um único `<style>` no `<head>`, **preservando a ordem
   original** (a cascata depende dela).
2. **Fontes** — baixe o CSS de cada provedor (Google Fonts, Fontshare) usando
   um `User-Agent` de navegador moderno, para receber `woff2`. Para cada
   `@font-face`, baixe o `.woff2` e substitua o `src:` por
   `url(data:font/woff2;base64,…)`. Descarte os subsets não-latinos
   (cirílico, grego, vietnamita) e os formatos `woff`/`ttf` — são dezenas de KB
   cada um, sem ganho para um deck em português.
3. **Scripts locais** — inline o conteúdo de cada `<script src="…">`.
4. **Mídia** — substitua cada caminho `assets/…` pelo `data:` URI da versão
   otimizada. Faça a substituição **tanto no HTML quanto no bundle JS**: os
   componentes React carregam os caminhos como string.
5. **Remova o entry de desenvolvimento** (`<script type="module"
   src="/src/main.tsx">`) e qualquer carregador condicional de bundle; o bundle
   entra inline antes de `</body>`, que é o equivalente ao `defer` original.

### 6. As três armadilhas que quebram o `file://`

Estas são específicas do runtime `dc-runtime` / `support.js`. Resolva **antes**
do `support.js` rodar, em um `<script>` no topo do `<head>`:

1. **O runtime busca `./deck-stage.js` com `fetch()`** — e o navegador bloqueia
   `fetch` de arquivo local em `file://`. O runtime aceita um atalho oficial:
   se `window.__resourceBlobs[url]` for um `Blob`, ele usa o Blob e nunca
   chama a rede. Registre assim:

   ```js
   window.__resourceBlobs = {
     "./deck-stage.js": new Blob([bytes], { type: "text/javascript" })
   };
   ```

   A chave tem que ser **exatamente** a string do atributo `from=` do
   `<x-import>`, incluindo o `./`. Passe o código como bytes (decodifique de
   base64 para `Uint8Array`) em vez de string literal — assim você não precisa
   escapar nada.

2. **O runtime baixa React 18 UMD do unpkg.** A função de boot desiste do
   download se `window.React` e `window.ReactDOM` já existirem. Então embuta
   `react@18.3.1` e `react-dom@18.3.1` UMD inline antes dele. (Esse React 18 é
   o do runtime do deck; o bundle das ilhas traz o próprio React e os dois
   convivem sem conflito.)

3. **O boot chama `fetch(location.href)`** para reler o próprio documento. Em
   `file://` isso rejeita — é capturado, mas suja o console. Definir
   `window.__resources = {}` desarma a chamada.

Além disso: ao inline um script, escape `</script` para `<\/script` dentro do
código, senão a primeira ocorrência fecha a tag no meio do arquivo.

### 7. A armadilha do `String.replace` (essa custa caro)

Ao inserir o bundle no HTML, **nunca** use `String.replace(stringLiteral,
stringLiteral)`. O segundo argumento interpreta `$&`, `$'`, `` $` `` — e
qualquer bundle JS tem essas sequências. Um `$'` insere "todo o resto do
documento" e o arquivo explode (no meu teste: 11 MB viraram 104 MB). Use uma
função como replacement:

```js
html = html.replace('</body>', () => `<script>${codigo}</script>\n</body>`);
```

### 8. Detecção de vídeo por extensão

Componentes costumam decidir entre `<video>` e `<img>` com
`src.endsWith(".mp4")`. Um `data:` URI **não tem extensão**, então todo vídeo
vira imagem parada. Ajuste a checagem na origem:

```ts
function isVideoSource(src?: string): boolean {
  if (!src) return false;
  if (src.startsWith("data:")) return src.startsWith("data:video");
  return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);
}
```

E **rode o build do bundle de novo** depois de mexer em componente — o inline
usa o bundle compilado, não o `.tsx`.

### 9. Verificação (não pule)

1. **Checagem estática**: procure no arquivo final por `src="assets/`,
   `href="dist/`, `https://` em `src`/`href` e strings `'assets/…'`. Tem que
   dar zero.
2. **Checagem isolada**: copie o arquivo sozinho para uma pasta vazia, sirva
   essa pasta e abra. Qualquer dependência esquecida vira 404 visível no painel
   de rede. A lista de requisições tem que ter só o próprio documento.
3. **Varredura de slides**: com o deck aberto, percorra todas as `section` e
   reporte imagens quebradas (`img.complete && img.naturalWidth === 0`),
   vídeos com `video.error`, e containers de ilha React vazios.
4. **Teste real em `file://`**: abra o arquivo com duplo clique. Confirme que o
   título aparece na aba, que a URL ganha o `#1` da navegação e que os slides
   com vídeo e gráfico renderizam.
5. **Screenshots** de pelo menos: capa, um slide com gráfico, um slide com
   vídeo e o slide final.

### 10. Entrega

Grave o arquivo com o nome que o cliente vai ver, acentos incluídos, e mande
junto uma linha de instrução: *"baixe o arquivo e dê duplo clique; ele abre no
navegador, use as setas do teclado para navegar e F11 (ou Ctrl+Cmd+F no Mac)
para tela cheia."*

## ▲ COPIE ATÉ AQUI ▲

---

## Como rodar neste projeto

```bash
npm run build:standalone
```

Isso roda, em sequência: `vite build` → `scripts/prepare-dist.js` →
`scripts/optimize-media.mjs` → `scripts/build-standalone.mjs`. O resultado sai
em `~/Downloads/Apresentação XVIII Congresso Dr. Charlington Cavalcante.html`.

Para gravar em outro caminho:

```bash
node scripts/build-standalone.mjs "/caminho/que/voce/quiser.html"
```

O cache fica em `.standalone-cache/` (ignorado pelo git): `media/` guarda a
mídia recomprimida e `net/` guarda as fontes e o React 18 baixados, para o
build não depender da rede toda vez. Apagar a pasta força tudo de novo.
