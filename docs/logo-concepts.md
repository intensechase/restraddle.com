# Restraddle Logo — Recraft Prompts

Five independent directions. Concept 1 (chip-stack "dd") is broken into a
two-step process — see below for why. Concepts 2-5 are single-generation
prompts for now, though the same two-step split applies to 2 and 3 if they
end up the winner instead.

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
