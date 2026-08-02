import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, type ProductCategory } from "@/data/products";

const FILTERS: { label: string; value: ProductCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Imagined Clubs", value: "club" },
  { label: "Neutral", value: "neutral" },
  { label: "Content-Tied", value: "content" },
];

export default function Shop() {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const visible = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Shop — Restraddle</title>
        <meta
          name="description"
          content="Shirts we'd actually wear. Every design links straight to Amazon — no separate checkout here."
        />
      </Head>

      <Header />

      <div className="border-b-2 border-dashed border-border px-7 py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-3 font-display text-4xl font-black">The Shop</h1>
          <p className="max-w-xl text-[15.5px] leading-relaxed text-ink-mute">
            Shirts we&apos;d actually wear. Every design links straight to Amazon — free Prime shipping, your size,
            your color, no separate checkout here.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-7">
        <div className="flex flex-wrap gap-2.5 border-b-2 border-dashed border-border py-5">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border-2 px-4.5 py-2 text-[12.5px] font-bold uppercase tracking-wide ${
                active === f.value
                  ? "border-red-bright bg-surface-2 text-ink"
                  : "border-border bg-surface text-ink-mute"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5 py-10 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
