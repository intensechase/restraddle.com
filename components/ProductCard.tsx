import { CATEGORY_COLOR, type Product } from "@/data/products";

// Simple screen-print-style suit mark per category — placeholder art until
// real Recraft-generated designs exist. Not emoji: an actual inline SVG so
// it reads as a considered design choice rather than a wireframe stand-in.
const MARK: Record<Product["category"], string> = {
  club: "♣",
  neutral: "♠",
  content: "♦",
};

export default function ProductCard({ product }: { product: Product }) {
  const color = CATEGORY_COLOR[product.category];

  const inner = (
    <>
      <div className="flex aspect-square items-center justify-center bg-[radial-gradient(circle_at_50%_30%,#33201d,var(--surface-2))]">
        <svg viewBox="0 0 100 100" className="h-20 w-20" fill="none">
          <path
            d="M35 8 L15 22 L22 34 L30 29 L30 90 L70 90 L70 29 L78 34 L85 22 L65 8 C65 15 58 20 50 20 C42 20 35 15 35 8 Z"
            fill="var(--surface-2)"
            stroke={color}
            strokeWidth={2}
            strokeLinejoin="round"
          />
          <text x="50" y="60" textAnchor="middle" fontSize="26" fill={color}>
            {MARK[product.category]}
          </text>
        </svg>
      </div>
      <div className="p-4">
        <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color }}>
          {product.categoryLabel}
        </div>
        <div className="mt-1 text-sm font-bold">{product.name}</div>
        {product.amazonUrl && (
          <div className="mt-2 flex items-center justify-between text-xs text-ink-mute">
            <span>Shop on Amazon</span>
            <span className="rounded border border-border px-2 py-0.5 text-[10px] font-extrabold uppercase text-ink-faint">
              Prime
            </span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      className="overflow-hidden rounded-lg border-2 border-border bg-surface transition-colors hover:border-[var(--card-accent)]"
      style={{ "--card-accent": color } as React.CSSProperties}
    >
      {product.amazonUrl ? (
        <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
