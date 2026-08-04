# Restraddle Logo — Recraft Prompts

## Concept 7 colored version — regenerate instead of hand-patch (2026-08-04)

Manual SVG recoloring (clustering paths by position, recoloring the base
tier color) hit diminishing returns — small shading/accent sub-paths at
the seams between stacks kept surfacing as stray-colored slivers, and each
fix uncovered another one nearby. Rather than keep chasing individual
paths, going back to Recraft directly with a coloring prompt so the model
renders clean color regions natively instead of us patching path-by-path.

**Reference image:** `restraddle-idea-... option 3` (the black three-stack
cascade icon). No hex codes in the prompt on purpose — descriptive color
language only, since exact hex matching isn't the point here and giving
Recraft room to render its own clean color transitions avoids the
sub-path/seam problem entirely.

**Prompt:**
> Using the reference image as the base composition, recolor the three chip
> stacks to reflect real poker chip denominations, escalating from the
> smallest forced bet to the biggest voluntary raise: the shortest stack
> represents a $1/$2 blind and should be a warm off-white or cream tone
> (standard $1 chip color), the middle stack represents a $10 straddle and
> should be a muted brick red (standard $5 chip color, scaled up), the
> tallest stack represents a $20 restraddle — the final raise on top of the
> straddle — and should be a muted forest green (standard $25 chip color).
> Keep all the black outline and edge-notch linework exactly as shown.
> Colors should feel understated and flat, not bright, glossy, or
> cartoonish — no gradients, no shading beyond the flat color per stack.
> Vector illustration style, clean crisp linework, high resolution,
> print-ready for t-shirt production. Transparent background.

Generation settings: same as concept 7's original run — no hex-specific
guidance, Recraft V4.0 Pro, vector mode, high-resolution output (print-ready
per the Merch by Amazon specs earlier in this doc, not just web/favicon
size, since this one may end up on a shirt).

## Concept 7 — the meaning itself, no text (2026-08-04)

Everything above is a wordmark treatment. This one is different in kind: a
pure icon, no letters at all, built around what a restraddle actually *is*
rather than how the word is spelled. Blinds are the forced floor. A
straddle is a voluntary raise on top of that floor, before cards come out.
A restraddle is someone raising again on top of the straddle. Three layers,
each bigger than the last — the escalation is the whole reason the site is
named what it is, and it's expressible as pure image without needing
anyone to read anything.

Three directions considered, all pure icon, no text, no letters, no
numbers, black ink, transparent background:

- **Option 1 — The Staircase.** Three chip stacks side by side, ascending
  left to right, evenly spaced on a shared baseline. Universally legible —
  reads like a bar chart, works at tiny sizes. Safest, least distinctive.
- **Option 2 — The Overlap. Chosen direction.** Three stacks in a rising
  diagonal cascade, each overlapping the base of the shorter one behind it,
  like it was just set down on top. The only option that shows *stacking on
  top of* rather than just *being taller than* — the literal mechanic, not
  an approximation of it. Needs more room to read than Option 1, so this is
  the header/hero-scale mark; a simpler shape still handles favicon duty
  separately (matches the existing plan — Concept 5's small-size mark was
  always going to be its own asset).
- **Option 3 — The Single Ascending Pile.** One continuous stack, wide
  chips at the base tapering narrower toward the top. Most compact, best at
  tiny sizes, but reads as "a pile that grows" rather than three distinct
  escalating actions — weaker match for blinds→straddle→restraddle
  specifically.

**Generation settings:** no reference image (new composition, nothing to
reference from), Recraft V4.0 Pro, vector mode.

**Option 2 prompt (chosen):**
> Flat vector icon, all solid black, three poker chip stacks arranged in a
> rising diagonal cascade, each stack overlapping the base of the shorter
> stack behind it as if freshly placed on top, ascending from shortest at
> the bottom-left to tallest at the top-right, each chip disc with simple
> edge-notch details. No text, no letters, no numbers. Single flat black
> color throughout, transparent background. Flat vector illustration style,
> clean geometric line work, no gradients, no shading, no photorealism.

**Option 1 prompt (fallback — safest/most universal):**
> Flat vector icon, all solid black, three poker chip stacks arranged side
> by side in ascending height from left to right — shortest on the left,
> tallest on the right — each stack made of a different number of stacked
> chip discs with simple edge-notch details, evenly spaced, sitting on a
> shared baseline. No text, no letters, no numbers. Single flat black color
> throughout, transparent background. Flat vector illustration style, clean
> geometric line work, no gradients, no shading, no photorealism.

**Option 3 prompt (fallback — most compact/favicon-friendly):**
> Flat vector icon, all solid black, a single continuous poker chip stack
> that grows narrower and taller toward the top, wider chip discs at the
> base tapering to narrower discs higher up, one unified silhouette
> suggesting continuous escalating growth, chip discs with simple
> edge-notch details. No text, no letters, no numbers. Single flat black
> color throughout, transparent background. Flat vector illustration style,
> clean geometric line work, no gradients, no shading, no photorealism.

---

Five independent directions. Concept 1 (chip-stack "dd") is broken into a
two-step process — see below for why. Concepts 2-5 are single-generation
prompts for now, though the same two-step split applies to 2 and 3 if they
end up the winner instead.

## Current direction (as of 2026-08-04)

First real generations are in — saved to `docs/logo-references/`:

- `restraddle-idea-1-script-re-block-straddle.png` — script "Re" flowing
  into bold blocky "STRADDLE." Splits at the word's own morpheme boundary
  (re + straddle), same place the live header already splits by color.
  Superseded by ideas 10-12 below (direct concept-1 execution), kept as
  reference.
- `restraddle-idea-2-full-script.png` — full script "ReStraddle," one
  flowing logotype. Pure concept-6 contrast-mark direction. Kept as
  reference / fallback if the block-letter direction doesn't pan out.
- `poker-chips-2-flat-geometric.png` / `poker-chips-1-illustrative.png` —
  standalone chip icon references, superseded by ideas 10-12 which bake the
  chip style directly into the wordmark.

**Round 2 — the actual concept-1 letter-substitution, working directly**
(contrary to the reliability concern flagged when concept 1 was written —
worth noting the concern didn't hold up here):

- `restraddle-idea-10-block-chips-flat.svg` — "RESTRA[chips]LE," uniform
  bold block case, flat geometric chips for the double-D. **In the running.**
- `restraddle-idea-11-block-chips-flat-recase.svg` — same layout, "Re"/"Le"
  in a smaller-weight treatment that echoes the header's existing re+straddle
  split. **In the running.**
- ~~`restraddle-idea-12-block-chips-illustrative.svg`~~ — same layout,
  illustrative/detailed chip rendering. **Eliminated 2026-08-04.**

All three vectorized via potrace (autotrace, not a hand-cleaned redraw —
still needs a designer pass before final production use) and previewed
in the real header at
[this artifact](https://claude.ai/code/artifact/5e2148fa-866f-4208-a1bb-61231cb231ad).

**Working direction: idea 10 or idea 11, bold block wordmark with the flat
geometric chip style — refining from here rather than generating fresh
concepts from scratch.**

---

## Best-shot pair (2026-08-04) — one prompt each, not a fresh batch

Two prompts total, spending minimal generations since idea 1/2 and idea
10/11 already got most of the way there. Not a combination of both
references into one image (that's contradictory — script-Re-plus-block and
full-block are alternate treatments of the same word) but a refined single
best attempt at each lane.

**Generation setting: 21:9** (of Recraft's available presets — 21:9, 16:9,
3:2, etc. — 21:9 at 2.33:1 is the closest to the ~4:1 these wordmarks
naturally want, less empty canvas to crop than 16:9's 1.78:1). Doesn't need
to be exact either way — same potrace vectorize-then-resize pipeline used
for ideas 10-12 applies here, so crop/resize after generation is lossless
regardless of which preset is picked.

**Text-only lane — revised for use with `restraddle-idea-1-script-re-block-straddle.png` as a reference image upload.**
Idea 1's script-Re/block-STRADDLE split was already the stronger of the two
(matches the header's existing re+straddle break point; idea 2's full
script was a bigger identity departure), so with it as a reference the text
just needs to preserve that balance and fix the one functional gap — the
reference PNG has an opaque white background, not transparent:
> Using the reference image as the base composition and letterforms, keep
> the flowing cursive "Re" connecting into the bold blocky "STRADDLE"
> exactly as shown, with clean smooth edges throughout. Single flat black
> color, transparent background, no gradients or shading.

Original from-scratch version (no reference image) kept below for
comparison / fallback if the reference-based generation doesn't work:
> Flat vector logo wordmark, all solid black, the word "Restraddle" — the
> "Re" rendered in a bold flowing cursive script with one large decorative
> curl, connecting directly into "STRADDLE" rendered in bold blocky
> geometric sans-serif capitals, heavy weight, no serifs. The script portion
> and the block portion should read as two deliberate halves of one
> wordmark, not mismatched fonts stuck together. Single flat black color
> throughout, transparent background. Vector illustration style, smooth
> clean line work, no gradients, no drop shadows, no shading, no
> photorealism. Logo/wordmark composition, horizontal layout.

**Text/chip combo lane — revised for use with `restraddle-idea-10-block-chips-flat.png` as a reference image upload.**
With a reference doing the composition/style work, the text only needs to
flag the deltas rather than re-describe everything — over-specifying
details the reference already shows just fights the reference. One thing
still worth stating explicitly: the reference PNG has an opaque white
background (not transparent), so without calling that out the AI may
replicate the white box instead of actually going transparent.
> Using the reference image as the base composition and letterforms, refine
> it: clean up the letter edges to be perfectly smooth, removing the rough
> torn/stamped texture, and make the two poker-chip icons replacing the
> double-D match each other in height exactly. Keep the flat geometric chip
> style, bold block letterforms, and overall layout. Single flat black
> color, transparent background, no gradients or shading.

Original from-scratch version (no reference image) kept below for
comparison / fallback if the reference-based generation doesn't work:
> Flat vector logo wordmark, all solid black, the text "RESTRA" then two
> circular flat poker chip icons of matching height side by side replacing
> the double-D, chips with a clean simple ring and evenly spaced edge
> notches, no texture or distress, then "LE" — all in bold geometric
> sans-serif capitals, heavy weight, perfectly clean smooth edges. Single
> flat black color throughout, transparent background. Flat vector
> illustration style, no gradients, no shading, no photorealism.
> Logo/wordmark composition, horizontal layout.

(Went with idea 10's uniform block case rather than idea 11's smaller
Re/Le treatment for this one — simpler, and no clear signal yet on which
case treatment you preferred. Easy to redo with the Re/Le echo if this
version doesn't land.)

---

## Round 3 — refinement prompts on the idea 10/11 direction

Targeted variations on the working direction rather than new concepts.
Same black-ink/invert-later convention as everything else.

**Clean-edge variant** (10/11 both came out with a slightly rough,
stamped/torn letter edge — worth testing on purpose, since it happens to
echo the site's existing "stamp" motif, and testing removed, in case clean
reads better):
> Flat vector logo wordmark, all solid black, the text "RESTRA" then two
> circular flat poker chip icons side by side replacing the double-D, then
> "LE" — chips with a clean simple ring and evenly spaced edge notches, no
> texture or distress. Bold geometric sans-serif letterforms, heavy weight,
> perfectly clean smooth edges, no rough or torn edge texture. Single flat
> black color throughout, transparent background. Flat vector illustration
> style, no gradients, no shading, no photorealism. Logo/wordmark
> composition, horizontal layout.

**Even chip-height variant** (10/11 both have one chip stack taller than
the other — worth testing a version where both match the D's height
exactly, for a more uniform letterform read):
> Flat vector logo wordmark, all solid black, the text "RESTRA" then two
> circular flat poker chip icons of identical height side by side replacing
> the double-D, evenly matched in size to each other and to the cap-height
> of the surrounding letters, then "LE" — chips with a clean ring and
> evenly spaced edge notches. Bold geometric sans-serif letterforms, heavy
> weight. Single flat black color throughout, transparent background. Flat
> vector illustration style, no gradients, no shading, no photorealism.
> Logo/wordmark composition, horizontal layout.

**Re/Le echo, more pronounced** (push idea 11's size-split further, testing
if a bigger contrast between "Re"/"Le" and "STRA[chips]" reads better or
worse):
> Flat vector logo wordmark, all solid black, a small lowercase "Re" then a
> large bold uppercase "STRA," then two circular flat poker chip icons side
> by side replacing the double-D, then a small lowercase "Le" matching the
> size of the opening "Re" — chips with a clean ring and evenly spaced edge
> notches. Bold geometric sans-serif letterforms. Single flat black color
> throughout, transparent background. Flat vector illustration style, no
> gradients, no shading, no photorealism. Logo/wordmark composition,
> horizontal layout.

## How Merch by Amazon actually prints this

Worth correcting before writing prompts: Merch by Amazon is **not** screen
printing — it's direct-to-garment (DTG), inkjet-printed per order on Kornit
printers, with an automatic white underbase laid down first on dark
garments so full-color art prints fine on black shirts too. There's no
screen-count cost, no spot-color limit, and gradients/fine detail aren't a
technical problem the way they would be with real screen printing.

That said, keeping these as **single-ink, flat, high-contrast marks** is
still the right call — not because the printer requires it, but because a
bold two-color logo is more legible on merch, cheaper to reproduce anywhere
else (embroidery, stickers, etc. later), and reads as a real logo instead
of an illustration. So: same design direction, corrected reasoning.

Source: [Merch Informer — MBA's Direct-to-Garment Printing](https://merchinformer.com/mbas-direct-to-garment-printing-turning-designs-into-retail-quality-products/)

## Shared brand facts (no hex colors yet — core shapes first)

- **Core base = single flat ink color**, not yet tied to site palette —
  once a shape direction wins, we'll generate site-color and other
  variations from it.
- **Generating black-only to cut prompt costs.** White ink is needed too
  (black disappears on black garments; white reads on dark/mid-tone
  garments, disappears on white/light ones), but since every design here is
  a single flat color on a transparent background, black → white is a
  free, lossless conversion after the fact — no regeneration needed:
  - **Fastest:** a global "invert colors" pass (Photoshop/GIMP: Image →
    Adjustments → Invert, or Levels) on a solid-black-on-transparent PNG
    flips it to solid white in one action, batchable across every file.
  - **If using it on the actual website** instead of print: CSS
    `filter: invert(1)` on the black PNG does this live, no second asset
    needed at all.
  - **In a vector tool:** just change the fill color — trivial if it's
    already vector paths.
- Background: **transparent**, PNG
- Display font in use on-site is a heavy grotesk (Arial Black-style) — vector
  logo letterforms should read as bold/geometric, not script or serif

---

## Why concept 1 is a two-step process

Asking an image model to (a) spell a made-up word correctly, (b) hit an
exact mixed-case pattern, **and** (c) integrate custom icon shapes into two
of the letterforms, all in one generation, stacks three separate failure
modes on top of each other. Realistic outcome: misspellings, ignored case,
or the chips drawn as decoration next to normal text instead of replacing
the D's.

Splitting it fixes this:
- **Step 1** asks for nothing but clean typography — just get "restraddle"
  spelled right, in a font style you like, in whichever casing reads best.
  This alone is a much easier, more reliable generation.
- **Step 2** generates the twin-chip icon as its own standalone graphic,
  sized to swap in for two letterforms. You then combine the two by hand in
  a vector tool — reliable because neither piece asks the AI to do
  anything it's bad at.

This same two-step split should carry over to concepts 2 and 3 below (T-chip
and A-spade) if either of those becomes the winner instead of concept 1 —
same substitution-reliability problem, same fix.

---

## Step 1 — wordmark text only, five casing options

No icon substitution in these — pure typography, so you can pick whichever
casing/style actually renders cleanly and reads best before touching the
chip swap. Casing is itself a **best-effort** instruction to the model, not
a guarantee — judge the results by eye rather than trusting it followed the
capitalization exactly.

Prompt template (repeat per casing, black only — invert to white later):
> Flat vector logo wordmark, all solid black, the text "**[WORD]**" spelled
> exactly as shown, no other letters added or removed. Bold geometric
> sans-serif letterforms, heavy weight, no serifs, no script, no icons, no
> decoration — pure typography only. Single flat black color throughout,
> transparent background. Flat vector illustration style, clean line work,
> no gradients, no drop shadows, no shading, no photorealism. Logo/wordmark
> composition, horizontal layout.

**Casing variants to generate (black ink only):**
1. `ReStraddle`
2. `restraddle`
3. `RESTRADDLE`
4. `reSTRADDLE`
5. `REstraddle`

Swap `[WORD]` for each — 5 generations total instead of 10.

---

## Step 2 — standalone twin-chip icon (for manual D substitution)

Generated separately from any text, sized as a self-contained unit meant to
be scaled/positioned over the two D's afterward in a vector editor.

**Black ink (invert to white later):**
> Flat vector icon, all solid black, two circular poker chip shapes
> side by side, slightly overlapping or touching, each chip with a
> dashed/notched edge ring like real poker chip edge spots. Sized as a
> compact square-ish unit, no surrounding text or other elements. Single
> flat black color throughout, transparent background. Flat vector
> illustration style, clean line work, no gradients, no drop shadows, no
> shading, no photorealism.

**Manual substitution steps, once you have a Step 1 winner + the icon:**
1. Bring the winning wordmark PNG into a vector tool (Illustrator, Figma,
   Inkscape, or Canva) — trace/vectorize it if it didn't come out of
   Recraft as clean vector already.
2. Delete (or mask over) the two D's in "straddle."
3. Drop in the twin-chip icon, scale it to match the cap-height of the
   surrounding letters, and align it to the same baseline.
4. Eyeball stroke weight and spacing against the neighboring letters —
   this is the step that actually makes it look designed rather than
   pasted on.

---

## Concept 2 — Chip-stack "T"

**Concept:** the T in "straddle" becomes a short stack of poker chips
viewed edge-on — the top chip's cap forms the crossbar, the stacked edges
form the vertical stroke.

**Black ink (invert to white later):**
> Flat vector logo wordmark, all solid black, "reS" lowercase/uppercase
> transition, then a stylized letter T built from a side-on stack of 3
> poker chips — the top chip viewed from above as a flat disc forms the
> crossbar of the T, the stacked chip edges beneath form the vertical
> stroke, chip edges shown with small dash marks to read as real chips —
> then "RADDLE" continuing uppercase. Bold geometric sans-serif, heavy
> weight, no serifs. Single flat black color throughout, transparent
> background. Flat vector illustration style, clean line work, no
> gradients, no drop shadows, no shading. Logo/wordmark composition,
> horizontal layout.

---

## Concept 3 — Card/spade "A"

**Concept:** the A in "straddle" sharpens into a spade silhouette or a
playing-card corner pip, tying the mark to cards rather than chips.

**Black ink (invert to white later):**
> Flat vector logo wordmark, all solid black, "reSTR" uppercase, then a
> stylized letter A where the pointed apex is replaced by a spade suit
> symbol (♠), the two legs of the A continuing below the spade to keep it
> legible as an A, then "DDLE" continuing uppercase. Bold geometric
> sans-serif, heavy weight, no serifs. Single flat black color throughout,
> transparent background. Flat vector illustration style, clean line work,
> no gradients, no drop shadows, no photorealism, no shading.
> Logo/wordmark composition, horizontal layout.

---

## Concept 4 — Bridge mark (icon straddles the wordmark)

**Concept:** not a letter swap — a single card or chip arcs over the seam
between "re" and "STRADDLE," physically straddling the two halves of the
word. Most literal nod to the actual poker mechanic.

**Black ink (invert to white later):**
> Flat vector combo logo, all solid black, the text "re" lowercase directly
> followed by "STRADDLE" uppercase, bold geometric sans-serif, heavy
> weight, all on one baseline — with a single playing card, tilted at a
> slight angle, arcing above the seam between "re" and "STRADDLE" like a
> small bridge, card shown as a simple outlined rectangle with a rounded
> corner and one suit pip, overlapping the tops of the letters slightly on
> both sides. Single flat black color throughout, transparent background.
> Flat vector illustration style, clean line work, no gradients, no drop
> shadows, no photorealism, no shading. Logo/wordmark composition,
> horizontal layout.

---

## Concept 5 — Reduced monogram (favicon / small-size mark)

**Concept:** separate from the full wordmark — a simplified icon-only mark
for contexts where a full letter-swap wordmark won't survive shrinking
(browser tab favicon, social avatar, app icon). Needs to read clearly at
16-32px, so minimal detail.

**Black ink (invert to white later):**
> Flat vector icon logo, all solid black, a single bold letter "R"
> geometric sans-serif, heavy weight, with one corner or counter of the R
> replaced by a small solid circle representing a poker chip. Extremely
> simple, minimal detail, high contrast, designed to stay legible at very
> small sizes (16px favicon). Contained within a square or circular badge
> shape with a thin outline border. Single flat black color throughout,
> transparent background. Flat vector illustration style, no gradients, no
> drop shadows, no fine detail, no photorealism.

---

## Concept 6 — Script wordmark (cursive, big curls)

**Concept:** a real pivot from concepts 1-5 — those all match the site's
existing bold-grotesk display font and blocky stamp/badge aesthetic. This
one doesn't try to match; it's a **contrast mark**, an ornate flowing
logotype against an otherwise utilitarian site, the way a lot of vintage
Vegas neon signage or whiskey-brand logos pair a script wordmark with plain
sans-serif everywhere else. Worth deciding if that's the intent before
committing — see the "for the website" thread above.

Pure typography only, no chip/card letter-substitution — connected cursive
strokes don't have discrete letterforms to cut into the way block sans
letters do. If a card/chip accent is wanted with this direction, it'd sit
*next to* the wordmark (tucked near a curl, above/below), not replace a
letter — a separate follow-up generation once a script style wins.

**Expect a rougher hit rate than concepts 1-5.** Script/cursive text is
generally harder for image models to spell correctly than block letters —
connected strokes give the model more room to drift. If a font direction
below keeps garbling the word after several tries, that's a signal to
abandon the AI-generation route for it and either hand-letter or license
the actual Google Font and set real type instead of asking for "similar
to."

Casing: capital R, rest lowercase (`Restraddle`) — scripts conventionally
lead with one big decorative capital, which is also where "big curls"
naturally shows up. All black ink, invert to white later, same as
everything else in this doc.

**Style A — bold rounded script (Lobster-style):**
> Flat vector logo wordmark, all solid black, the word "Restraddle" in a
> bold, chunky, rounded cursive script with a large decorative capital R,
> connected flowing letterforms, moderate curls — confident and legible,
> not delicate. Single flat black color throughout, transparent
> background. Vector illustration style, smooth clean line work, no
> gradients, no drop shadows, no shading, no photorealism. Logo/wordmark
> composition, horizontal layout.

**Style B — dramatic swash capital (Berkshire Swash-style):**
> Flat vector logo wordmark, all solid black, the word "Restraddle" with an
> oversized decorative swash capital R featuring large ornate curls and
> flourishes, the rest of the word in a simpler connected cursive script
> that stays legible. Single flat black color throughout, transparent
> background. Vector illustration style, smooth clean line work, no
> gradients, no drop shadows, no shading, no photorealism. Logo/wordmark
> composition, horizontal layout.

**Style C — bold brush script (Kaushan Script-style):**
> Flat vector logo wordmark, all solid black, the word "Restraddle" in a
> bold brush-lettered cursive script, confident varying stroke weight like
> it was painted with a brush, connected flowing letterforms, casual but
> strong. Single flat black color throughout, transparent background.
> Vector illustration style, smooth clean line work, no gradients, no drop
> shadows, no shading, no photorealism. Logo/wordmark composition,
> horizontal layout.

---

## Google Fonts reference (for typography direction in prompts)

Not for actual site use (site's display font is a system "Arial Black"
stack, no Google Fonts loaded yet) — these are just visual reference points
you can look up and drop into a prompt as "letterforms similar to [font]"
if a generation's type doesn't feel right.

**Heavy geometric/grotesk — closest to current site feel:**
- Archivo Black
- Anton
- Montserrat Black / ExtraBold
- Rubik Black
- Poppins Black

**More character — casino/badge/vintage lean:**
- Alfa Slab One (bold slab serif, western/casino saloon feel)
- Bungee (blocky, high-contrast, poster/badge style)
- Righteous (rounded geometric, arcade energy)
- Passion One
- Ultra (extreme bold slab)

**Condensed — if a design needs to fit a tighter wordmark:**
- Oswald
- Barlow Condensed Black
- Fjalla One

**Script/cursive — for concept 6, "big curls" direction:**
- Lobster (bold, chunky, rounded — Style A reference)
- Berkshire Swash (dramatic swash capitals — Style B reference)
- Kaushan Script (bold brush script — Style C reference)
- Yellowtail, Courgette, Pacifico (other bold-script alternatives)
- Great Vibes, Alex Brush, Sacramento (thinner/more elegant — riskier at
  small sizes and fragile on print, but worth a look if "curls" should
  lean delicate rather than bold)

**Monospace — matches the site's existing "stamp" accent font (currently
Consolas) for any badge/stamp text paired with the logo:**
- Space Mono
- IBM Plex Mono
- Courier Prime

---

## Notes for whichever wins

- Once a shape direction is picked, generate the site-color version
  (cream `#f6ece0` / red-bright `#d9553c`, matching the header's existing
  `re` + red `straddle` split) for on-site use — white/black stay as the
  merch-only ink variants.
- Once a direction is picked, it needs a **separate hoodie-safe /
  small-size variant** if it's going on merch — see product-type table in
  `shirt-designs.md` for canvas sizes per product.
- The winning wordmark direction becomes the real `public/favicon` set and
  probably replaces the plain-text `Header.tsx` logo — that's a code change,
  flag when ready to wire it in.
- Concept 5 (monogram) is worth generating regardless of which wordmark
  wins — the site needs *some* small-size mark, and none of concepts 1-4
  will survive a 16px favicon.
