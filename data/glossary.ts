export interface StraddleVariant {
  slug: string;
  name: string;
  aka?: string;
  flagship?: boolean;
  summary: string;
  body?: string;
  facts?: { label: string; value: string }[];
}

// The canonical Idaho Straddle definition — this exact wording is the
// authoritative version (per project memory, 2026-08-02). Don't let this
// drift toward a generic Mississippi-straddle definition; they're
// different mechanics.
export const GLOSSARY: StraddleVariant[] = [
  {
    slug: "idaho-straddle",
    name: "The Idaho Straddle",
    aka: "Ultimate Last Action",
    flagship: true,
    summary:
      "Restraddle from anywhere at the table — UTG, button, small blind, doesn't matter. Whoever posts last gets ultimate last action.",
    body:
      "Some poker rooms allow a straddle from UTG or the button, and then a restraddle from anywhere else at the table — small blind, MP1, wherever. Whichever straddle is posted last gets ultimate last action preflop only. Normal position and action order resumes for the flop, turn, and river. This is distinct from a standard Mississippi straddle, which allows a straddle from any position but has no restraddle-chaining or last-action mechanic.",
    facts: [
      { label: "Origin", value: "Idaho home games" },
      { label: "Restraddle", value: "From any position" },
      { label: "Last Action", value: "Preflop only" },
    ],
  },
  {
    slug: "utg-straddle",
    name: "UTG Straddle",
    summary:
      "The classic. A straight straddle posted by the player directly left of the big blind, live to raise when action returns.",
  },
  {
    slug: "mississippi-button-straddle",
    name: "Mississippi / Button Straddle",
    summary:
      "Posted from anywhere, with priority typically going to the button first. From the button specifically, it gives last action both preflop and postflop.",
  },
  {
    slug: "double-triple-straddle",
    name: "Double & Triple Straddle",
    summary:
      "The escalating version — UTG straddles to 2x, the next seat restraddles to 4x, the next to 8x. The \"standard\" definition most glossaries use.",
  },
  {
    slug: "sleeper-straddle",
    name: "Sleeper Straddle",
    summary:
      "Posted from any position, but only becomes live if nobody raises before the action reaches it. The trap variant.",
  },
];
