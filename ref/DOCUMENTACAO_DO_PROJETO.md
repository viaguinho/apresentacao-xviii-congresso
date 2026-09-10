# Documentação do Projeto: Apresentação XVIII Congresso de Neurologia

**Título da Apresentação:** Desenvolvimento Infanto-Juvenil: Uma Abordagem Integrativa de Trajetórias Cognitivas, Emocionais e Sociais  
**Palestrante:** Dr. Charlington Cavalcante (CRM-SP 173.176 | CRM-CE 14.212)  
**Evento:** XVIII Congresso de Neurologia do Brasil (Setembro 2026)  
**Duração:** 30–40 minutos  
**Formato:** Slide deck interativo (HTML5 / CSS3 / SVG / JavaScript) em proporção 16:9 (1920×1080px)

---

## 1. Visão Geral do Projeto

Este projeto consiste em uma apresentação médico-científica interativa de alta performance desenvolvida nativamente para execução em navegadores web. A apresentação adota o conceito de trajetórias neuroevolutivas não-lineares, combinando rigor acadêmico com animações suaves e um sistema visual alinhado à marca do Dr. Charlington Cavalcante.

---

## 2. Sistema Visual & Design System ("Charlington Claro")

### Paleta de Cores
A apresentação adota um tema claro sofisticado para garantir legibilidade máxima em auditórios bem iluminados e transmitir acolhimento científico:

| Token / Papel | Hex | Aplicação |
|---|---|---|
| **Canvas** | `#fdfdfd` | Fundo principal de todas as lâminas |
| **Ghost White** | `#f2f2f4` | Cards, superfícies secundárias e painéis |
| **Future Blue** | `#0071e3` | Cor primária de acento, ícones, números e links |
| **Midnight Ink** | `#0f1012` | Títulos principais e textos de alto contraste |
| **Skyline Gray** | `#3f4042` / `#5f6062` | Textos secundários e descrições |
| **Borda Suave** | `rgba(15, 16, 18, 0.08)` | Divisores e contornos de cards |

### Tipografia Oficial
- **Títulos e Destaques:** **Urbanist** (Google Fonts — weights 600, 700). Aplicada em cabeçalhos (`<h1>`–`<h3>`), badges, pílulas, números de destaque e chamadas principais.
- **Corpo de Texto & SVG:** **Satoshi** (Fontshare — weights 400, 500). Aplicada em parágrafos, descrições secundárias, rótulos de diagramas e metadados.

### Identidade de Marca
- **Logotipo de Rodapé:** Monograma do Dr. Charlington (`assets/image2.png`) posicionado no canto inferior direito (`right: 80px; bottom: 48px; width: 38px`) em todas as lâminas a partir do Slide 2.

---

## 3. Estrutura Detalhada das Lâminas (Slides 1 a 6)

### Slide 1: Capa (01)
- **Composição:** Vídeo/Animação central da logo monograma em loop (`assets/`), título principal *"Desenvolvimento infanto-juvenil"*, subtítulo *"Uma abordagem integrativa de trajetórias cognitivas, emocionais e sociais"*.
- **Rodapé:** Identificação completa do palestrante e evento (*Dr. Charlington Cavalcante | CRM-SP 173.176 | Setembro 2026 | XVIII Congresso de Neurologia do Brasil*).

### Slide 2: Formação & Trajetória (02)
- **Layout:** Duas colunas assimétricas (Full Height).
  - **Coluna Esquerda:** Retrato oficial do Dr. Charlington (`assets/charlington-retrato.jpg`) com gradiente escuro na base contendo o nome e CRM.
  - **Coluna Direita:** 5 Flashcards de trajetória acadêmica/profissional com hover suave:
    1. `01 · RESIDÊNCIA` — Pediatria (ESP-CE) · Neurologia Infantil (UNICAMP) · Neurofisiologia Clínica (UNICAMP)
    2. `02 · LATO SENSU` — Pós-graduação em Medicina do Sono (Instituto do Sono - AFIP/UNIFESP)
    3. `03 · STRICTO SENSU` — Mestrado em Saúde da Criança e do Adolescente (UNICAMP)
    4. `04 · EXPERIÊNCIA` — Ex-Preceptor de Residência em Neurologia Infantil (Hospital Infantil Albert Sabin)
    5. `05 · ATUAÇÃO ATUAL` — Neuropediatra e Neurofisiologista em Campinas/SP e Fortaleza/CE
  - **Badges Sociais:** Botões pílula interativos para Instagram (`@dr.charlington.cavalcante`) e Website (`charlington.com.br`).

### Slide 3: Conflitos de Interesses (03)
- **Composição:** Card centralizado elevado (`1240px`) declarando ausência de conflitos de interesse para a produção e apresentação do material científico.

### Slide 4: Roteiro da Apresentação (04) — *Atualizado*
- **Layout:** Duas colunas equilibradas.
  - **Coluna Esquerda (Menu Radial Circular):**
    - Palco radial (`900×720px`) com hub central estático (`ROTEIRO · 6 Eixos · 30 min`).
    - 6 Nós circulares dispostos radialmente a um raio de $R = 270\text{px}$ com ícones SVG cirúrgicos e badges numéricas (`01` a `06` em Urbanist 700):
      1. `01` — **Processo Dinâmico** (*Desenvolvimento contínuo*)
      2. `02` — **Cognição & Linguagem** (*Trajetórias intelectuais*)
      3. `03` — **Desenvolvimento Emocional** (*Regulação e afetos*)
      4. `04` — **Desenvolvimento Social** (*Relações com pares*)
      5. `05` — **Anomalias Craniofaciais** (*Impacto neuroevolutivo*)
      6. `06` — **Protocolo Integrado** (*Abordagem multiprofissional*)
    - Linhas conectoras SVG pontilhadas que se projetam sincronizadamente do centro para cada nó.
  - **Animação Sequencial:** Disparo automático dos nós de 01 a 06 com velocidade compassada (`0.9s` de duração por nó e `0.5s` de intervalo entre cada um) ao entrar na lâmina.
  - **Coluna Direita (Bloco Editorial Centralizado):**
    - Alinhado verticalmente ao centro na mesma altura do menu radial.
    - Badge: `ESTRUTURA CLÍNICA`
    - Título: `Roteiro da Apresentação` (56px)
    - Subtítulo: *"Uma trajetória integrada em 6 eixos complementares para a compreensão multidimensional do desenvolvimento infanto-juvenil."*
    - Pílulas contextuais: `6 Eixos Temáticos` · `30 Minutos` · `Abordagem Integrativa`.

### Slide 5: Conceito Central (05)
- **Layout:** 3 Painéis verticais com visualização gráfica e faixa de síntese na base.
  - **Painel 1 (Multidimensional):** Diagrama radial interativo das 5 dimensões (cognição, linguagem, emoções, comportamento, habilidades sociais).
  - **Painel 2 (Dinâmico e não linear):** Gráfico SVG com curva de desenvolvimento apresentando fases de aceleração, platô e reorganização.
  - **Painel 3 (Heterogêneo):** Gráfico SVG com 4 curvas de crescimento individualizado demonstrando variabilidade entre crianças.
  - **Faixa de Síntese:** Quote em destaque azul: *"Desenvolvimento não é onde a criança está. É também de onde ela veio, para onde está indo e em que velocidade está mudando."*

### Slide 6: Evidência Científica (06)
- **Composição:** Validação do modelo teórico com o estudo longitudinal de Mulder et al. (2024, *Dev Cogn Neurosci*).
  - Coluna esquerda: Metodologia em 3 etapas (Estudo L-CID, Tarefa SNAT, Modelo Bayesiano Multinível).
  - Coluna direita: Gráficos de trajetória comportamental (agressividade reativa) e resposta neural fMRI na ínsula anterior (AI).

---

## 4. Estrutura de Arquivos do Repositório

```
Apresentação XVIII Congresso / Apresentação de slides com loops de crítica/
├── Desenvolvimento Infanto-Juvenil.dc.html  # Código-fonte principal da apresentação HTML5
├── index.html                               # Symlink para Desenvolvimento Infanto-Juvenil.dc.html
├── deck-stage.js                            # Web component de controle e navegação do deck
├── support.js                               # Utilitários de animação e eventos de teclado/touch
├── DOCUMENTACAO_DO_PROJETO.md               # Este arquivo de documentação técnica
├── assets/                                  # Imagens, retratos e vetores da apresentação
│   ├── charlington-retrato.jpg              # Fotografia oficial do Dr. Charlington Cavalcante
│   ├── image2.png                           # Monograma logo de rodapé
│   └── ...
├── uploads/                                 # Prompts e especificações técnicas de referência
│   └── prompt_desenvolvimento_infanto_juvenil.md
└── _ds/                                     # Especificações do Design System Charlington
```

---

## 5. Servidor Local & Execução

A apresentação é executada localmente via HTTP Server Python:
- **Porta:** 8000
- **URL Principal:** `http://localhost:8000/`
- **Atalho Slide 4 (Roteiro Radial):** `http://localhost:8000/#4`

---

**Última Atualização:** Setembro 2026  
**Status do Projeto:** Ativo e Validado  
