# Le Meow: Design

Design contract for every page on this site. Applies in full to the Meow Solutions section
(`/meow-solutions/`) and to every change made to the main landing page from now on.
Built with the skills in `.claude/skills` (`better-colors`, `better-typography`, `better-layout`,
`better-ui`, `better-accessibility`, `ui-taste`). When a rule here conflicts with a skill, this file
wins; when it is silent, the skill decides.

## Thesis

Warm, quiet luxury. White and cream paper, dark brown ink, one gold accent. Real photography and real
app screens carry the page; decoration does not. Each page says what the product is, who it is for,
and offers one clear next step.

## Banned

- Gradients of any kind: backgrounds, buttons, text, borders, overlays, image frames.
- Shadows used as decoration: drop shadows on cards, buttons, phones, images, menus or dialogs.
  Surfaces are separated by a 1 px `line` border and a change of background, nothing else.
- Hover effects that lift, scale, glow or add a shadow. Hover changes colour, border or underline only.
- Glassmorphism, blur panels, blobs, sparkles, confetti, emoji used as icons.
- A second accent hue. Status colours appear only for status.
- Radii outside the scale below.
- Invented numbers, stock-looking placeholders or fake reviews. Use the real screens and photos in
  `meow-solutions/assets/`.

## Colour

All values live as CSS custom properties at the top of `meow-solutions/assets/solutions.css`.
Components use the tokens, never raw hex.

| Token | Hex | Role | Contrast |
| --- | --- | --- | --- |
| `--paper` | `#FFFFFF` | Page background, cards | |
| `--cream` | `#FBF6EB` | Alternate bands, hero, quiet panels | |
| `--sand` | `#F4E9D6` | Image wells, table heads, selected chips | |
| `--line` | `#E9DECB` | Borders and dividers | |
| `--line-strong` | `#8C7D69` | Input borders | 4.0 on white |
| `--ink` | `#1E160E` | Headings and body | 17.9 on white |
| `--muted` | `#685D50` | Secondary text | 6.4 on white, 6.0 on cream |
| `--gold` | `#8B5C1C` | Accent text, links, active nav, focus ring | 5.8 on white |
| `--gold-fill` | `#E3C77F` | The one filled button per view | ink on it 10.8 |
| `--gold-fill-hover` | `#D9B866` | Filled button hover | ink on it 9.4 |
| `--dark` | `#2E2116` | Dark callout band | |
| `--on-dark` | `#EFE4D0` | Text on `--dark` | 12.4 |
| `--gold-on-dark` | `#F1CD87` | Eyebrows and markers on `--dark` | 10.3 |

The brand gold `#C6912E` from the main page is used for hairlines and list markers only; it fails
contrast as text or behind white text.

## Type

Same pairing as the main page, loaded from Google Fonts:

- **Cormorant Garamond 600** (and italic 600) for `h1` to `h3`. Gold italic `<em>` for the emphasised phrase.
- **Jost 400/500/600** for everything else.

| Role | Size | Line height | Tracking |
| --- | --- | --- | --- |
| `h1` | 56 to 80 px fluid | 0.95 | -0.04em |
| `h2` | 42 to 68 px fluid | 1.0 | -0.035em |
| `h3` (cards) | 28 to 34 px | 1.05 | -0.02em |
| UI headings (screen captions, dialog) | 18 px Jost 600 | 1.2 | -0.01em |
| Lede | 18 px | 1.55 | 0 |
| Body | 16 px | 1.55 | 0 |
| Small / nav | 14 px 500 | 1.4 | 0.02em |
| Eyebrow | 12 px 600 uppercase | 1.3 | 0.15em |

Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`. Prices and stats use `tabular-nums`.

## Shape

| Element | Radius |
| --- | --- |
| Buttons, chips, nav pills | 999 px (pill) |
| Inputs, selects | 10 px |
| Cards, tables, panels, slides | 20 px |
| Hero stage, dark callout | 28 px |
| Phone frames | 22 px (inner screens keep their own corners) |

## Layout

- Container max 1232 px; side margin 44 px desktop, 26 px tablet, 18 px mobile, 14 px under 390 px.
- Section rhythm 72 px desktop, 48 px mobile. Alternate white and `--cream` bands instead of drawing rules.
- Space inside a group is at most half the space between groups.
- Grids use `minmax(0, 1fr)`. Text containers never have a fixed height.
- Verified at 360, 768 and 1280 px.

## Navigation

- The site header matches the main page: logo, the same primary links in the same order, then
  **Meow Solutions**, then Contact, and the **Get Le Meow** button.
- Inside `/meow-solutions/` a second bar holds the section nav: Overview, Le Meow App, Le Meow Staff,
  Le Meow Admin | Phase 3, Partnerships, Company. The current page is gold with a 2 px gold underline.
- Every new page in the section must be added to that second bar on all seven pages, to the overview
  page, and to `sitemap.xml`.

## Interaction

- Hit areas at least 44 px. Focus ring: 2 px `--gold`, 3 px offset.
- Transitions 150 to 200 ms `ease-out`, colour and border only; none under `prefers-reduced-motion`.
- One filled gold button per view; every other action is the outlined light button or a text link.
- Links are visibly distinct: gold and semibold, underline on hover.
