# Tercera Pared — Design System

## Company
Tercera Pared es una comunidad de pádel LATAM (nacida en Quito) que conecta a jugadores amateur con contenido, cultura y herramientas para mejorar su juego: rankings, torneos, grupos de WhatsApp, contenido editorial. No es un medio que habla del pádel desde afuera — está hecho por alguien que juega y compite. Pilares: **Cultura** (el pádel como fenómeno social), **Progreso** (mejora real y medible del jugador amateur), **Ecosistema** (clubes, torneos, grupos), **Comunidad** (el jugador real, no el profesional lejano), **Estilo** (estética y actitud).

## Sources provided
- `uploads/Linea Grafica-Tercera Pared.pdf` — 13-page brand line: color palette, typography, and a "página web" style reference (moodboard citing an Envato black-background aspirational fitness template: https://elements.envato.com/es/biggym-website-design-template-E2C8B2P).
- `uploads/2.png`, `uploads/3.png` — logo lockup, dark-bg and light-bg versions.
- No codebase or Figma file was attached — this system is authored from the brand guideline PDF and logo files only, so components below are a standard from-scratch set sized to the brand's needs (see "Intentional additions").

## Index
- `styles.css` — root stylesheet, imports everything in `tokens/`.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/fonts.css` — design tokens + `@font-face`.
- `assets/` — logo lockups (`logo-lockup-dark-bg.png`, `logo-lockup-light-bg.png`), webfonts (`assets/fonts/`).
- `components/core/` — Button, Badge, Card, Tag
- `components/forms/` — Input, Select, Checkbox, Switch
- `components/navigation/` — Tabs
- `components/feedback/` — Toast, ProgressBar
- `ui_kits/website/` — marketing site + content feed recreation (index.html)
- `templates/` — plantillas reutilizables (Design Components):
  - `templates/social-post/SocialPost.dc.html` — post 1080×1080
  - `templates/deck/Deck.dc.html` — deck 16:9 (portada, sección, tarjetas, dato grande, cierre)
  - `templates/one-pager/OnePager.dc.html` — documento carta imprimible
  - `templates/web-screen/WebScreen.dc.html` — pantalla web/app compuesta con los componentes del DS
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand)
- `SKILL.md` — portable skill file for use in Claude Code

## Intentional additions
No component source was attached, so the primitives above are a standard, brand-fitted set (Button/Badge/Card/Tag/Input/Select/Checkbox/Switch/Tabs/Toast/ProgressBar) rather than a copied inventory. `ProgressBar` was added beyond the baseline list because player-level progress is a named product concept in the brief ("progreso real, medible").

## Font substitutions (flag for user)
The PDF specifies **Bebas Neue** (primary display — matched exactly, real Google Fonts file used), **Coolvetica** italic and **Made Outer Sans Black** (primary), and **Helvetica** / **Clash Display** Light (secondary). Coolvetica, Made Outer Sans, and Clash Display are commercial/foundry fonts not on Google Fonts, so this system substitutes:
- Coolvetica → **Baloo 2** (`--font-accent`) — nearest free rounded/casual match.
- Made Outer Sans Black → **Archivo Black** (`--font-heavy`) — nearest free geometric heavy grotesk.
- Clash Display Light → **Sora** (`--font-secondary`) — nearest free geometric-humanist sans.
- Helvetica → system stack, no substitution needed.
- Body copy (not specified in the PDF) uses **Inter** (`--font-body`) as a neutral UI workhorse.
**Ask:** if you have the real Coolvetica, Made Outer Sans, and Clash Display font files, share them and this system will swap in the exact brand fonts.

## Content fundamentals
**Categorías (no "niveles decimales"):** el sistema de juego usa categorías cerradas — **6, 5, 4, 3, 2, 1** (6 = iniciación, 1 = primera categoría). Nunca escribir 3.5, 4.0 ni fracciones. El progreso se expresa como "de categoría 4 a 3".

- **Language & voice:** Spanish (LATAM), written as a player talking to other players — informal "tú", present tense, short declarative lines. Copy reads like a caption or a locker-room line, not marketing prose: *"Call to action inmediato."*, *"Servicios puntuales."*, *"Estética aspiracional, contundente, que describe la plataforma en frases principales."*
- **Casing:** Headlines and key phrases run in full uppercase (matches Bebas Neue's all-caps-only design) for punch; body copy is sentence case.
- **Structure:** the PDF's own web-style notes call for short segmented phrases and keywords over paragraphs — "Uso de segmentos para la info", "Frases / palabras clave", "tipografía principal con mensaje claro". Favor a headline + 2-4 word supporting tag over a paragraph wherever possible.
- **Emoji:** none seen in source material — do not introduce emoji.
- **Vibe:** aspirational but grounded — confident, direct, community-first. Talks about rankings, WhatsApp groups, and real clubs, not abstract "wellness" language.

## Visual foundations
- **Palette:** near-black page background (`#111110` / `#0e0e0c`) with cream foreground text (`#f0f1e3`) — extracted directly from the PDF's fill colors. **Lime** (`#baf41e`, the padel-ball color) is the single accent used for CTAs, active states, and highlights — used sparingly, never as a base color. Complementary cool set: dark navy `#18233f`, dark teal `#224652`, light sky blue `#92bad4` — for secondary accents, illustration backgrounds, gradients, and data/rank visualizations. Max one saturated accent (lime) per surface; the blues/navy/teal are the "cool" supporting range, not co-equal accents.
- **Type:** Bebas Neue (condensed all-caps display) carries big headlines/hero statements at very large sizes (`--text-display-xl` up to ~132px) — this is the loudest, most identity-carrying element on any surface. Archivo Black (Made Outer Sans sub) for heavy short labels/stat numbers. Baloo 2 italic-style (Coolvetica sub) as a casual accent word or two, used rarely for personality. Sora for secondary headings/eyebrows. Inter for all body copy and UI text.
- **Backgrounds:** flat black/near-black fields, not gradients — the guideline explicitly calls for "fondo negro con un estilo aspiracional." Photography (players, courts, detail shots) sits in contained blocks/segments rather than full-bleed washes; no illustration or pattern system was found in the source. No grain/texture or blur effects appear in the source; keep surfaces flat and high-contrast.
- **Layout:** segmented information blocks (the PDF explicitly calls for "uso de segmentos para la info") — content organized into distinct tiles/rows rather than continuous prose blocks. Generous negative space around big type.
- **Corners & cards:** the reference moodboard (Envato "biggym" template) uses soft-rounded rectangles for photo/content blocks and pill shapes for tags/buttons. This system standardizes: `--radius-lg` (18px) for cards/photo blocks, `--radius-pill` for buttons/tags/badges, `--radius-md` (10px) for form fields.
- **Shadows:** soft, dark, low-opacity drop shadows only (`--shadow-card`, `--shadow-pop`) to lift surfaces off the near-black background — no inner shadows or colored glows.
- **Borders:** thin, low-opacity cream borders (`--border-subtle` 14% / `--border-strong` 32%) delineate cards and outlined buttons on the dark background — no colored border accents, no left-border "callout" cards.
- **Hover/press states:** buttons scale down slightly (`scale(0.96)`) on press; interactive chips/tags switch to a lime border + tinted lime background when active. No opacity-fade hover system observed in source — states are structural (border/fill change) rather than pure opacity shifts.
- **Motion:** no animation guidance in the source PDF. This system defaults to short, standard-eased transitions (`--duration-fast` 120ms / `--duration-normal` 220ms, `--ease-standard`) for state changes only — no bounce, no scroll-triggered choreography implied by the brand.
- **Transparency/blur:** none observed; avoid glassmorphism/blur effects.
- **Imagery tone:** the moodboard reference is warm-toned action/detail sports photography (hands, gear, court surfaces) against the black UI — no photography assets were supplied, so `ui_kits/website` uses placeholders.

## Iconography
No icon font, SVG sprite, or icon usage appears anywhere in the source PDF or logo files — the guideline is type- and color-led, not icon-led. **Substitution:** this system links **Lucide** icons from CDN (`unpkg.com/lucide-static`) where a UI needs a functional glyph (search, close, chevron, WhatsApp/share) — closest neutral stroke-icon set to a system with no defined icon language. No emoji anywhere in source; do not introduce any. The one graphic mark in the brand is the logo itself — a wordmark plus a square bracket-like frame with a lime dot (echoes a court corner / ball) — treat that mark as the only iconographic asset, not a template for new icons.

## Logo usage
Two lockups provided: `logo-lockup-dark-bg.png` (cream-on-black, for dark surfaces — the default) and `logo-lockup-light-bg.png` (charcoal-on-white, for light/print surfaces). No isolated icon-only mark was supplied — always use the full wordmark+frame lockup; do not crop or redraw it.
