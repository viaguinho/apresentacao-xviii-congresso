# Dr. Charlington Cavalcante — Design System

Design system for the brand of **Dr. Charlington M. Cavalcante**, pediatric neurologist
(CRM-SP 173.176 / CRM-CE 14.212) and medical educator, practising in **Campinas-SP** and
**Fortaleza-CE**.

The brand serves two audiences at once, and that duality shapes every decision here:

- **Clinical practice** — children and adolescents with epilepsy, autism (ASD), sleep
  disorders, ADHD, learning difficulties and complex neurological conditions. Rigorous
  clinical assessment, specialised neuroimaging, clinical neurophysiology and
  multidisciplinary coordination. The audience is anxious parents: the job of the design
  is to turn fear into confidence.
- **Medical education** — lecturer since 2015 in postgraduate programmes (ASD,
  endocannabinoid system, paediatric cannabinoids, pediatric neurology,
  neurodevelopment), congress speaker, scientific consultant to pharma (Aché, Biolab,
  Eurofarma), scientific advisory board member. The audience is peers: the job of the
  design is to look precise and current.

The visual answer to both is the same: clinical, human, serene.

## Products in this system

| Product | Source | UI kit |
|---|---|---|
| **charlington.com.br** — marketing site (home + Artigos) | attached codebase `Site Charlington/` | `ui_kits/website/` |
| **Link in bio** — single glass capsule over a portrait | `github.com/viaguinho/charlington-link-in-bio` | `ui_kits/link_in_bio/` |

## Sources used

- **Attached codebase** `Site Charlington/` — `index.html`, `updates.html`,
  `styles.css` (2 902 lines), `DesignCharlington.md` (the brand's own style reference),
  `script.js`, `assets/`. This is the authoritative source for the light clinical palette,
  the 27/18/14/10px type scale and every component's exact values.
- **GitHub** <https://github.com/viaguinho/charlington-link-in-bio> — `docs/DESIGN.md`,
  `docs/DESIGN-SYSTEM.md`, `docs/tokens.css`, `src/Capsule.jsx`, `src/content.js`,
  `src/Icons.jsx`, `src/index.css`, `public/`. Source for the warm-neutral scope, the
  base-4 spacing scale, the motion durations and the icon set. **Read these repos
  directly** if you need more fidelity than this system captures — they hold the real
  animation code (GSAP, Lenis, WebGL) that the kits deliberately simplify.
- **GitHub** <https://github.com/viaguinho/CharlingtonSite> — the site repo; the attached
  local folder was used as the primary read of the same product.
- **Uploads** — `logo.svg`, `logo.png`, hero banner, Campinas consulting-room photo,
  `HeroLogo3D.jsx` (the WebGL treatment of the mark; not reproduced here).

## Index

| Path | What it is |
|---|---|
| `styles.css` | the single entry point — `@import` list only |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `shape`, `effects`, `motion`, `base` |
| `components/core/` | Button, ExplorePill, Eyebrow, Tag, ArrowLink, DashList |
| `components/navigation/` | NavCapsule, TabList, IconButton, ScrollCue |
| `components/surfaces/` | SectionHeader, MediaCard, TestimonialCard, GlassCapsule |
| `components/disclosure/` | Accordion, ArticleRow, Modal, ChoiceBlock |
| `components/icons/` | Icon |
| `guidelines/` | 21 foundation specimen cards (Colors, Type, Spacing, Shape, Motion, Brand) |
| `ui_kits/website/` | charlington.com.br recreation, home + Artigos |
| `ui_kits/link_in_bio/` | link-in-bio capsule recreation |
| `assets/` | logo (SVG + PNG), hero banners, portrait, consulting room, group photos |
| `SKILL.md` | Agent Skills entry point |

### Components
Accordion · ArrowLink · ArticleRow · Button · ChoiceBlock · DashList · ExplorePill ·
Eyebrow · GlassCapsule · Icon · IconButton · MediaCard · Modal · NavCapsule ·
ScrollCue · SectionHeader · TabList · Tag · TestimonialCard

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when).

**Intentional additions.** `Icon` is a thin wrapper the sources do not have as a
component — the site inlines its SVGs and the link-in-bio exports one function per glyph.
Wrapping them keeps consumers from hand-drawing icons, which is the failure mode this
brand is most sensitive to. Nothing else was invented: there is no Input, Select, Switch,
Toast, Tooltip or Avatar here because neither product defines one. `docs/DESIGN-SYSTEM.md`
in the repo flags form fields and toasts as **open questions** to be decided before the
booking page is built — do not improvise them.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese, always. Titles are sentence case, never title case,
never all-caps except the eyebrow labels (which are small-caps by CSS, sentence case in
the source: `Suporte & Informações`, `Acervo de artigos`).

**Person.** The doctor speaks in the **first person** about his method — "foco em explicar
diagnósticos", "Empenho-me em ouvir e respeitar as preocupações". Institutional copy uses
a warm **"nós"** — "Emitimos toda a documentação necessária", "Nossos endereços". The
reader is addressed as **você**, never "o senhor", never "o paciente" in the third person.

**Register.** Calm, short sentences. No exclamation marks anywhere in institutional copy.
No sales pressure, no urgency, no "Clique aqui". Verbs carry the CTA: *Agendar*,
*Agendar consulta*, *Ver mais*, *Ver localização no mapa*, *Acessar o Canal do WhatsApp*.

**Specificity over adjectives.** The trajectory section lists institutions by full name
plus acronym ("Universidade Estadual de Campinas (UNICAMP)"), never "uma universidade de
ponta". Credentials appear as data (CRM, RQE numbers), never as a boast.

**Two registers, one voice.** For parents: plain words, reassurance framed as competence
("Cada consulta é adaptada para as necessidades específicas da criança, garantindo um
ambiente seguro e acolhedor"). For peers: clinical vocabulary used precisely
("avaliação neurofisiológica", "plasticidade cerebral", "Análise do Comportamento
Aplicada (ABA)"). Never mix them inside one block.

**Testimonials are never edited.** They keep the patient's spontaneous voice, typos of
enthusiasm and all — *"Excelente! O médico que orei pra Deus colocar em nossos caminhos!
Gratidão!"* The exclamation ban applies to the brand's own writing, not to quoted people.

**Length.** Card copy 1–2 sentences. FAQ answers 1–3 short sentences. Article bodies two
paragraphs. Paragraph measure ~65–75 characters.

**Emoji: never.** Not in UI, not in copy, not in headings. The only non-alphabetic marks
used as content are the em dash `—` (list marker only, never as a comma substitute in
prose) and the arrow `↗` inside "Ver mais" links.

**Numbered sequences** (01/02/03, 1.0/2.0, P01) appear only where the order is real
information — the chronological trajectory, the article index. Never as decoration.

---

## VISUAL FOUNDATIONS

**The idea.** A sheet of clean paper with one blue thing on it. Everything else is
negative space, hairlines and photography.

**Colour.** Two related palettes, one accent idea.
The flagship site is *clinical light*: Ghost White `#f2f2f4` page, Canvas `#fdfdfd` cards,
Midnight Ink `#0f1012` text and dark sections, Deep Graphite `#020201` for the heaviest
headings, Skyline Gray `#868788` and Slate Comment `#8f8f8f` for secondary text, and
**Future Blue `#0071e3`** as the only saturated colour in the entire system — links, CTAs,
tag outlines, active states, and nothing else. The link-in-bio runs a *warm-neutral* scope
(`.theme-warm`): Surface Warm `#f1f1ef`, Obsidian `#0a0a0c`, cobalt `#2f66e0`. Both refuse
pure `#000` and pure `#fff` for surfaces. No gradients in text or buttons, ever.
Sections alternate light → dark → light; never two of the same tone in a row.

**Type.** One family, **Inter**, at weights 300/400/500/600 — a documented substitute for
**PP Neue Montreal**. Headings are weight **300**, and that lightness is the single most
characteristic thing about the brand's type. The display size is **27px** and it is a
ceiling, not a starting point (the only exception is the 64px community-modal title).
Body 15px, UI 14px, secondary copy 13.5px at weight 300, eyebrow 10–11px uppercase tracked
0.12em. Letter spacing is negative everywhere (-0.02em default, -0.54px at 27px), never
positive except in eyebrows and capsule labels (0.2em). Line height 1.2 for headings,
1.5–1.6 for body.

**Spacing.** Spacious and breathing. 94px between sections (120px on the two big editorial
sections), 6px between tightly-related elements. The site ships a hand-tuned scale
(4, 6, 10, 11, 22, 30, 50, 69, 94, 113, 130, 144, 220) — those exact odd values are real
and must be copied, not rounded. New work should prefer the base-4 scale
(4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120). Content column 1200px (1140px for card grids,
800px for prose); the hero and footer bottom bar break out to a 10% viewport gutter instead.

**Layout rules.** The nav is fixed, floating 30px from the top, horizontally centred, and
never docks or shrinks. The hero is full-bleed 100vh with text bottom-left. Grids are
deliberately uneven — the two community cards are 7fr / 5fr, the method section is
240px / 1fr, the trajectory 420px / 1fr, the article page a 5-column grid with the title
in column 2. A grid of identical cards is explicitly forbidden.

**Backgrounds.** Photography, not illustration and not pattern. Real consulting rooms,
real families, cool daylight, no filters, no grain, no duotone. The hero photo is placed
`object-position: center 22%` so the child sits above the headline. Dark sections are flat
ink — no texture. Videos (MP4, muted, looping) fill card media bands in production. There
are no hand-drawn illustrations anywhere in the brand; do not add any.

**Transparency and blur.** Reserved for one job: the floating chrome. The nav capsule and
logo circle are 45% white (or 45% ink on dark pages) with `backdrop-filter: blur(20px)`,
a 1px `rgba(255,255,255,0.4)` border and a very soft glass shadow. Testimonial cards use
3% white with an 8px blur. The modal backdrop is 40% ink with a 16px blur. The link-in-bio
capsule is 25% black with a 24px blur and a 1px 10%-white border. Nothing else is
translucent. (Note: the link-in-bio's own DESIGN.md bans decorative glassmorphism — inside
that product the capsule is the one sanctioned exception.)

**Protection gradients, not capsules.** Where text sits over media, the media fades into
the card surface with a 90px linear gradient to `--color-canvas` (or to ink on dark cards),
and the copy block overlaps it by -35px. Never a rounded scrim capsule behind text.

**Corners.** Nothing is square. 1.8px hairline detail, 10px buttons and testimonial cards,
14px modal blocks, 18–20px content cards and the modal dialog, 26px pill buttons, 54px
nav capsule / logo circle, 63px largest surface, 9999px true capsules.

**Cards.** Light cards are Canvas with **no border and no resting shadow** — they are
defined by their radius and the page tint around them. Dark cards add a 1px
`rgba(255,255,255,0.08)` border. Elevation only appears on hover: `translateY(-6px)` plus
`0 16px 40px rgba(0,0,0,0.04)` (0.4 alpha on dark). Modal blocks are the one place with a
resting shadow, and it is nearly invisible (`0 4px 12px rgba(0,0,0,0.05)`).

**Borders and dividers.** Hairlines do the structural work: `rgba(15,16,18,0.08)` on light,
`rgba(255,255,255,0.08)` on dark, 0.5px on the article rows. FAQ and article items are
separated by lines, not by whitespace.

**Shadows.** Four in total (glass, card lift, block, block hover) and all of them are
under 10% black. Heavy drop shadows are explicitly forbidden — the interface depends on
flatness, thin borders and blur.

**Motion.** One curve: `cubic-bezier(0.16, 1, 0.3, 1)`. Durations by consequence: 150ms
feedback, 250ms state change, 400ms overlay, 800–1200ms for the editorial slide
cross-fades in Método and Trajetória. Never bounce, never elastic, never a wipe or zoom
between states. The scroll cue loops on 2.2s; the testimonial marquee runs 38s linear and
pauses on hover.

**Hover states.** Colour shift is the primary signal: links and ghost buttons go Future
Blue; filled buttons swap their fill to Future Blue. Pills add a 5% blue tint, a blue
border and `translateY(-1px)`, and their label rolls up 100% to reveal an identical copy
underneath. Cards lift 6px. Icon buttons fill blue and rise 2px. Arrow links cycle their
arrow out to the right and a duplicate in from the left. **Group dimming is a signature**:
hovering the nav fades the other links to 0.5, hovering the article list fades the other
rows to 0.4, and the Artigos split section blurs the unfocused half by 4px.

**Press states.** The site has essentially none — it relies on the hover colour change.
The link-in-bio capsule uses `scale(0.98)`. Never a colour-darkening press, never a
shadow inset.

**Focus.** A visible 2px Future Blue outline; `:focus-visible` is defined in `tokens/base.css`.
Touch targets are never below 44px even when the drawn mark is smaller.

**Prohibitions** (from the brand's own DESIGN.md, and they are enforced here): no pure
black or white surfaces · no gradient in text or buttons · no coloured left-border accent
strips · no giant metric hero blocks · no grids of identical cards · no em dash as a comma
· no emoji or exclamation marks in institutional copy · no modal for anything an accordion
can do · no decorative sparklines or placeholder charts · no rotating chevrons (the
accordion uses a plus that becomes a minus).

---

## ICONOGRAPHY

**There is no icon library.** Neither product installs Lucide, Heroicons, Feather or an
icon font. Every glyph in the brand is a hand-authored inline SVG, and `components/icons/Icon.jsx`
collects all of them verbatim from the two codebases — the link-in-bio's `src/Icons.jsx`
(arrow-up, arrow-up-right, instagram, linkedin, doctoralia) and the site's inline footer
and link SVGs (whatsapp, instagram, linkedin, doctoralia, the 8×6 micro-arrow, the 7×9
scroll chevron, the modal close cross).

**Drawing rules.** `viewBox="0 0 24 24"`, `fill: none`, `stroke: currentColor`, stroke width
**1.5** (link-in-bio) or **2** (site footer), round caps and joins. Two glyphs break the
pattern deliberately: the link arrow (`0 0 8 6`) and the scroll chevron (`0 0 7 9`) are
filled micro-paths at 10–12px, drawn to sit inside the 32×18 arrow capsule and the 36×52
scroll well. The LinkedIn mark is the one solid-fill glyph.

**Iconography is scarce by design.** Icons appear in exactly four places: the footer social
row, the arrow-link capsule, the scroll cue, and the link-in-bio capsule's social row and
back-to-top button. Section headings, list items, cards and buttons carry **no icons** —
the brand communicates hierarchy with type weight and space instead. Do not add an icon to
a component that does not already have one.

**Non-glyph marks.** Two Unicode characters are used as UI content, not as icons: `—`
(em dash, the only list bullet in the system, always in Future Blue) and `↗` (in "Ver mais"
and modal CTAs). The FAQ and article indicators are not icons at all — they are two CSS
pseudo-element lines forming a plus, where the vertical line rotates 90° and scales to zero
to become a minus.

**Emoji are never used.** Anywhere.

**The logo.** `assets/logo.svg` / `assets/logo.png` — a chrome-glass "C" ribbon in blues.
It appears at three sizes only: 26px inside the 54px glass nav circle, 24px in the footer
(with `filter: brightness(0) invert(1)` and 0.35 opacity, rising to 0.75 on hover), and
~64px at the top of the link-in-bio capsule. `uploads/HeroLogo3D.jsx` is a WebGL rendering
of the same mark used as the link-in-bio hero; it is not reproduced in this system.

---

## Known substitutions and gaps

- **PP Neue Montreal → Inter.** Both codebases already ship this substitution; the brand's
  own style reference documents it. If the PP Neue Montreal licence and `.woff2` files are
  available, drop them in `assets/fonts/` and replace the `@import` in `tokens/fonts.css`
  with local `@font-face` rules. Weight 350 in the original maps to 300 here.
- **Videos.** `Peixes.mp4`, `Video comunidade.mp4` and the CloudFront article clip drive the
  production card media. They were not uploaded, so the kits use stills; `MediaCard` takes a
  `video` prop for the real thing.
- **WebGL layers.** The particle backdrop, ripple distortion, FluidGlass and HeroLogo3D
  treatments are not recreated. They sit over the same layouts.
- **Two palettes, unreconciled.** The site's `#0071e3` and the link-in-bio's `#2f66e0` are
  genuinely different blues in production. Both are kept; pick per product rather than
  averaging them.
- **No form components.** Deliberate — see "Intentional additions" above.
