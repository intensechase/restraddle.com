# Restraddle Logo — Recraft Prompts

Five independent directions, each a complete standalone prompt. Generate all
five, compare, pick a winner (or mix elements from two).

Shared brand facts baked into every prompt below:
- Wordmark casing per brand: **"re" lowercase, "STRADDLE" caps** (matches
  the existing header treatment: `re` + red `straddle`)
- Primary two-tone: cream `#f6ece0` (ink) + red `#d9553c` (red-bright) —
  matches the live site's header/hero exactly
- Alt two-tone, if a concept doesn't land in red/cream: swap the accent for
  gold `#d3a24a` (site's existing "special/flagship" color)
- Background: **transparent**, PNG
- Display font in use on-site is a heavy grotesk (Arial Black-style) — vector
  logo letterforms should read as bold/geometric, not script or serif, to
  stay a family with the site's existing type

---

## 1. Chip-stack "dd"

**Concept:** the double-D in "straddle" becomes two poker chips, side by
side or slightly overlapping — reads as both letters and a mini stack,
reinforcing the "double/re-" meaning of a restraddle.

**Recraft prompt:**
> Flat vector logo wordmark, "re" in lowercase cream (#f6ece0) followed by
> "STRA" then two circular poker chip icons replacing the double-D, then
> "LE" in uppercase — the two chip icons rendered in red-bright (#d9553c)
> with a dashed/notched edge ring (like a real poker chip's edge spots),
> sized and aligned to sit on the same baseline as the surrounding
> letterforms so they read as the two D's. Bold geometric sans-serif
> letterforms, heavy weight, no serifs, no script. Transparent background.
> Flat vector illustration style, clean line work, no gradients, no drop
> shadows, no photorealism. Logo/wordmark composition, horizontal layout.

---

## 2. Chip-stack "T"

**Concept:** the T in "straddle" becomes a short stack of poker chips
viewed edge-on — the top chip's cap forms the crossbar, the stacked edges
form the vertical stroke.

**Recraft prompt:**
> Flat vector logo wordmark, "reS" in cream (#f6ece0), then a stylized
> letter T built from a side-on stack of 3 poker chips in red-bright
> (#d9553c) — the top chip viewed from above as a flat disc forms the
> crossbar of the T, the stacked chip edges beneath form the vertical
> stroke, chip edges shown with small dash marks to read as real chips —
> then "RADDLE" continuing in cream uppercase. Bold geometric sans-serif,
> heavy weight, no serifs. Transparent background. Flat vector illustration
> style, clean line work, no gradients, no drop shadows. Logo/wordmark
> composition, horizontal layout.

---

## 3. Card/spade "A"

**Concept:** the A in "straddle" sharpens into a spade silhouette or a
playing-card corner pip, tying the mark to cards rather than chips.

**Recraft prompt:**
> Flat vector logo wordmark, "reSTR" in cream (#f6ece0) uppercase, then a
> stylized letter A where the pointed apex is replaced by a spade suit
> symbol (♠) in red-bright (#d9553c), the two legs of the A continuing
> below the spade to keep it legible as an A, then "DDLE" continuing in
> cream uppercase. Bold geometric sans-serif, heavy weight, no serifs.
> Transparent background. Flat vector illustration style, clean line work,
> no gradients, no drop shadows, no photorealism. Logo/wordmark
> composition, horizontal layout.

---

## 4. Bridge mark (icon straddles the wordmark)

**Concept:** not a letter swap — a single card or chip arcs over the seam
between "re" and "STRADDLE," physically straddling the two halves of the
word. Most literal nod to the actual poker mechanic.

**Recraft prompt:**
> Flat vector combo logo: the text "re" in cream (#f6ece0) lowercase
> directly followed by "STRADDLE" in red-bright (#d9553c) uppercase, bold
> geometric sans-serif, heavy weight, all on one baseline — with a single
> playing card, tilted at a slight angle, arcing above the seam between
> "re" and "STRADDLE" like a small bridge, the card rendered in flat cream
> with a red-bright suit pip, overlapping the tops of the letters slightly
> on both sides. Transparent background. Flat vector illustration style,
> clean line work, no gradients, no drop shadows, no photorealism.
> Logo/wordmark composition, horizontal layout.

---

## 5. Reduced monogram (favicon / small-size mark)

**Concept:** separate from the full wordmark — a simplified icon-only mark
for contexts where a full letter-swap wordmark won't survive shrinking
(browser tab favicon, social avatar, app icon). Needs to read clearly at
16-32px, so minimal detail.

**Recraft prompt:**
> Flat vector icon logo, a single bold letter "R" in cream (#f6ece0),
> geometric sans-serif, heavy weight, with one corner or counter of the R
> replaced by a small solid red-bright (#d9553c) circle representing a
> poker chip. Extremely simple, minimal detail, high contrast, designed to
> stay legible at very small sizes (16px favicon). Contained within a
> square or circular badge shape with a thin border. Transparent
> background. Flat vector illustration style, no gradients, no drop
> shadows, no fine detail, no photorealism.

---

## Notes for whichever wins

- Once a direction is picked, it needs a **separate hoodie-safe /
  small-size variant** if it's going on merch — see product-type table in
  `shirt-designs.md` for canvas sizes per product.
- The winning wordmark direction becomes the real `public/favicon` set and
  probably replaces the plain-text `Header.tsx` logo — that's a code change,
  flag when ready to wire it in.
- Concept 5 (monogram) is worth generating regardless of which wordmark
  wins — the site needs *some* small-size mark, and none of concepts 1-4
  will survive a 16px favicon.
