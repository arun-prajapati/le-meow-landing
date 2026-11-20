# Le Meow landing site

Static site for Le Meow, Singapore (lemeow.meowadvancedintelligence.com). Plain HTML and CSS, no build step.

## Read first

- `DESIGN.md` is the design contract: palette, type, shape, layout, banned patterns. Follow it for every UI change.
- `.claude/skills/` holds the design skills (same set as meow-future-labs). Use `better-colors`, `better-typography`,
  `better-layout`, `better-ui`, `better-accessibility` and `ui-taste` when building or reviewing UI.

## Structure

- `index.html` main landing page (inline CSS). `privacy-policy.html`, `terms-and-conditions.html` and their
  folder copies (`privacy-policy/index.html`, `terms-and-conditions/index.html`) must stay in sync.
- `meow-solutions/` the Meow Solutions section: Overview, App, Staff, Admin, Phase 3, Partnerships, Company.
  Shared styles in `meow-solutions/assets/solutions.css` and `resources.css`; small scripts for the screen
  gallery, deck viewer and listing preview. All images and docs live in `meow-solutions/assets/`.

## Rules

- No gradients, no decorative shadows, no lift or glow on hover. One gold accent.
- Links inside the site are root-relative (`/#contact`, `/meow-solutions/app/`), never the full domain.
- "Meow Solutions" sits between "What's New" and "Contact" in every primary nav (desktop, mobile, footer).
- Before finishing UI work, look at 360, 768 and 1280 px.
