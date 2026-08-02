export type ProductCategory = "club" | "neutral" | "content";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  // Placeholder — no real Merch by Amazon listing exists yet. Replace with
  // the actual product URL once designs are uploaded and live.
  amazonUrl: string | null;
}

export const PRODUCTS: Product[] = [
  { slug: "sawtooth-card-society", name: "Sawtooth Card Society", category: "club", categoryLabel: "Imagined Club", amazonUrl: null },
  { slug: "id-straddle", name: "“I’d Straddle.”", category: "neutral", categoryLabel: "Neutral", amazonUrl: null },
  { slug: "idaho-straddle-crest", name: "Idaho Straddle Crest", category: "content", categoryLabel: "Content-Tied", amazonUrl: null },
  { slug: "gem-state-grinders", name: "Gem State Grinders", category: "club", categoryLabel: "Imagined Club", amazonUrl: null },
  { slug: "screw-your-neighbor", name: "Screw Your Neighbor", category: "content", categoryLabel: "Content-Tied", amazonUrl: null },
  { slug: "restraddle-suit-mark", name: "Restraddle Suit Mark", category: "neutral", categoryLabel: "Neutral", amazonUrl: null },
  { slug: "backroom-regulars", name: "Backroom Regulars Est. ’04", category: "club", categoryLabel: "Imagined Club", amazonUrl: null },
  { slug: "ultimate-last-action", name: "Ultimate Last Action", category: "content", categoryLabel: "Content-Tied", amazonUrl: null },
];
