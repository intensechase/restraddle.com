# Shirt Designs — Recraft Prompts

Working store of shirt concepts and their Recraft generation prompts. One
entry per design; slug matches (or will match) `data/products.ts` once a
design is ready to wire up with a real Merch by Amazon listing.

Status values: `idea` (concept only, no prompt yet) → `prompt-ready` (prompt
drafted, not yet generated) → `generated` (art exists, review pending) →
`live` (uploaded to Merch by Amazon, `amazonUrl` set in `data/products.ts`).

---

## Merch by Amazon technical specs (for Recraft prompts)

Sourced from third-party POD guides (not Amazon's own upload page directly —
worth a quick sanity check against Amazon's current Content Guidelines
before the first real upload, since these specs do drift, and Amazon lists
40+ product types total — only the ones below have confirmed dimensions):

**Shared across all product types:**
- **Format:** PNG-24, transparent background, RGB
- **Resolution:** 300 DPI (don't upscale a lower-res image to hit this)
- **Max file size:** 25 MB
- **No white background** — prints as a visible box on dark shirts
- **Thumbnail test:** design should still read at ~100px wide (search
  result size)

**Per product type — canvas size and Recraft aspect ratio:**

| Product type | Canvas (px) | Physical size | Recraft ratio | Safe zone (px) |
|---|---|---|---|---|
| T-shirt (standard/premium) | 4500 × 5400 | 15" × 18" | 5:6 | ~3600 × 4800 |
| Long sleeve | 4500 × 5400 | 15" × 18" | 5:6 | ~3600 × 4800 |
| Sweatshirt | 4500 × 5400 | 15" × 18" | 5:6 | ~3600 × 4800 |
| Tank top | 4500 × 5400 | 15" × 18" | 5:6 | ~3600 × 4800 |
| Hoodie | 4500 × 4050 | 15" × 13.5" | 10:9 | shrink margin further — hoodie print area sits lower/smaller than a tee, avoid fine detail near edges |
| Phone case (iPhone) | 1800 × 3200 | — | 9:16 | full-bleed, design fills the case body |
| Tote bag | 2925 × 2925 | — | 1:1 | center-weighted, square |
| Throw pillow | 2925 × 2925 | — | 1:1 | center-weighted, square |
| PopSocket | 485 × 485 | — | 1:1 | small — simple/bold shapes only, no fine text |

Unlisted types (mugs, stickers, etc.) — look up before generating; don't
assume a t-shirt canvas applies.

**Prompt convention:** every entry below states which product type(s) it's
for. When requesting from Recraft, append the matching ratio + "transparent
background, no white background, print-ready" to the design prompt itself.

---

<!-- Entries added one at a time as ideas come in. -->
