# Prompts de Criação: Apple Memoji 3D — Slide 22

> **Contexto Clínico & Científico do Slide 22 (Eixo 3: Terracota `#b5563a`)**  
> No desenvolvimento infanto-juvenil em condições craniofaciais, a anatomia pode permanecer idêntica, mas o significado emocional se transforma com a idade.  
> - **Aos 10 anos (n = 845)**: A insatisfação com a aparência **não** se associa ao sofrimento psicológico global; o foco do desenvolvimento está na competência escolar, funcionalidade e exploração cognitiva.  
> - **Aos 16 anos (n = 857)**: A aparência passa a se conectar à vida emocional e social porque surge a autoconsciência reflexiva ("o olhar do grupo"), embora a visibilidade da cicatriz isoladamente não determine psicopatologia.

Abaixo estão os prompts estruturados e otimizados para ferramentas como **Midjourney v6.1**, **DALL-E 3**, **Flux.1** ou **Google Imagen 3**, desenhados para evitar clichês e garantir estética refinada no estilo Apple Memoji / Pixar 3D.

---

## 🎨 Paleta Cromática Obrigatória (Eixo 3)
- **Terracota Principal**: `#b5563a` (Warm Burnt Sienna / Terracotta)
- **Glow / Fundo Suave**: `#fbeee9` (Soft Warm Peach / Ivory Cream)
- **Âmbar de Transição**: `#d97706` / `#e07a5f` (Warm Amber Glow)
- **Acentos Neutros**: `#0f1012` (Slate Black), `#ffffff` (Pure Glass White)

---

## 🧒 Card 01: Infância Escolar (Aos 10 Anos)
**Foco Simbólico**: Curiosidade, cognição ativa, mundo escolar, ausência de fixação na autoimagem facial.  
**Evitar**: Espelhos, tristeza, representações médicas estéreis ou caricaturas infantis excessivas.

### Prompt em Inglês (Para Copiar no Midjourney / DALL-E 3)
```text
3D Apple Memoji style bust render of an expressive 10-year-old school-age boy with warm hazel-brown eyes and curly dark brown hair, joyful and curious facial micro-expression, head tilted slightly in thoughtful discovery. The character is observing a small floating translucent geometric origami block with subtle inner warm glow, representing cognitive learning and curiosity. Wearing a minimalist soft peach-amber knit crewneck sweater with delicate woven texture. Clean Pixar-grade subsurface scattering skin shader, detailed soft hair strands. Cinematic three-point studio lighting with a warm amber rim light (RGB 224, 122, 95) and soft studio fill, high-end Apple 3D avatar aesthetic, front-three-quarters angle, sharp focus, isolated on solid pure white background for seamless transparent PNG cutout --ar 1:1 --stylize 250 --v 6.1
```

### Versão Alternativa Feminina (10 Anos)
```text
3D Apple Memoji style bust render of an inquisitive 10-year-old schoolgirl with bright warm brown eyes, wavy chestnut hair tied in a playful half-up style, gentle confident smile radiating enthusiasm for learning. She is holding a small floating glowing crystal puzzle piece near her hand, symbolizing curiosity and school competence. Dressed in a warm apricot-terracotta ribbed cotton sweater. Pixar and Apple Memoji 3D aesthetic, subsurface skin scattering, warm amber rim lighting, soft depth of field, isolated on solid white background for clean cutout --ar 1:1 --v 6.1
```

---

## 🧑 Card 02: Transição na Adolescência (Aos 16 Anos)
**Foco Simbólico**: Autopercepção, reflexão interna, maturidade emocional, busca de pertencimento e identidade (sem patologização).  
**Evitar**: Máscaras teatrais, feições de choro/depressão, cicatrizes caricatas.

### Prompt em Inglês (Para Copiar no Midjourney / DALL-E 3)
```text
3D Apple Memoji style bust render of a 16-year-old adolescent youth with contemplative and serene facial expression, expressive almond-shaped dark eyes gazing slightly sideways in self-reflection and quiet dignity. Subtle, thoughtful micro-smile conveying growing identity and social awareness. Modern styled textured haircut with realistic strand definition. A delicate, floating translucent tinted glass sphere hovers near his shoulder, softly refracting warm light, symbolizing identity and social self-perception. Dressed in an urban minimalist terracotta jacket (#b5563a) over an off-white hoodie. Premium Pixar 3D studio quality, realistic subsurface scattering, warm terracotta and golden rim light on jawline and hair, cinematic soft rim reflections, isolated on solid pure white background for transparent PNG cutout --ar 1:1 --stylize 250 --v 6.1
```

### Versão Alternativa Feminina (16 Anos)
```text
3D Apple Memoji style bust render of a 16-year-old adolescent young woman with an introspective, serene, and confident expression, deep expressive eyes looking pensively forward, representing identity formation and social reflection. Modern shoulder-length dark hair with soft waves. Near her rests a subtle floating iridescent glass prism catching warm terracotta ambient lighting. Dressed in a stylish warm rust-terracotta corduroy overshirt over a beige tee. Flawless Apple Memoji 3D rendering, refined subsurface skin textures, dramatic yet soft studio lighting with terracotta rim light, isolated on solid white background for PNG extraction --ar 1:1 --v 6.1
```

---

## 🛠️ Dicas para Pós-Processamento e Inserção no Projeto
1. **Remoção de Fundo**: Use o Photoshop, Canva ou ferramenta online ([remove.bg](https://remove.bg) / Apple Photos "Copy Subject") para remover o fundo branco e salvar como **PNG com fundo transparente**.
2. **Local de Armazenamento**: Salve os arquivos gerados em:
   - `assets/cards/memoji-10y.png`
   - `assets/cards/memoji-16y.png`
3. **Atualização no Código**: No arquivo `components/slide22-cards.tsx`, basta apontar `imageSrc`:
   ```tsx
   imageSrc: "assets/cards/memoji-10y.png", // Card 1
   imageSrc: "assets/cards/memoji-16y.png", // Card 2
   ```
4. **Recompilar**: Rode `npm run build` após adicionar os arquivos para que o bundle final do deck incorpore as novas imagens.
