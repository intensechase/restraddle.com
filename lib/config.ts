// Amazon Associates tag for this site, created 2026-08-02. Only for
// future buying-guide content (chips/tables/cards) — the Merch by Amazon
// shop links in data/products.ts are a separate program, not Associates,
// and don't use this tag at all.
export const AMAZON_ASSOCIATES_TAG = "restraddle-20";

export function withAssociatesTag(amazonUrl: string): string {
  const url = new URL(amazonUrl);
  url.searchParams.set("tag", AMAZON_ASSOCIATES_TAG);
  return url.toString();
}
