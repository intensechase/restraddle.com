import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { GAMES } from "@/data/games";

const featuredGames = [
  { slug: "wonky-donkey", name: "Wonky Donkey", hook: "You don't know which game you're in until the flop." },
  { slug: "murder", name: "Murder", hook: "One card per row. That's the whole twist." },
  { slug: "chowaha", name: "Chowaha", hook: "Three flops, one grid, several ways through it." },
  { slug: "scrotum", name: "Scrotum", hook: "Yes, that's really the name. Yes, it's a real BARGE game." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Restraddle — Home Game Rules, Strategy & Shop</title>
        <meta
          name="description"
          content="Shirts for the table that never breaks up, plus the straddle glossary and home-game rules nobody else gets right."
        />
        <link rel="canonical" href="https://restraddle.com/" />
        <meta property="og:title" content="Restraddle — Home Game Rules, Strategy & Shop" />
        <meta
          property="og:description"
          content="Shirts for the table that never breaks up, plus the straddle glossary and home-game rules nobody else gets right."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://restraddle.com/" />
        <meta property="og:site_name" content="Restraddle" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Restraddle — Home Game Rules, Strategy & Shop" />
        <meta
          name="twitter:description"
          content="Shirts for the table that never breaks up, plus the straddle glossary and home-game rules nobody else gets right."
        />
      </Head>

      <Header />

      <section className="border-b-2 border-dashed border-border px-7 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-5 inline-flex -rotate-1 items-center gap-2 border-2 border-red-bright px-4 py-1.5 font-[var(--font-stamp)] text-xs uppercase tracking-widest text-red-bright">
            ☙ Ultimate Last Action ☙
          </div>
          <h1 className="mx-auto mb-4 max-w-2xl font-[var(--font-script)] text-5xl leading-[1.15] text-balance sm:text-6xl">
            You&apos;re already part of it
          </h1>
          <p className="mx-auto max-w-lg text-[15.5px] leading-relaxed text-ink-mute">
            Not a beginner site, not a club you have to earn your way into — just the table nobody wants to leave,
            in shirt form.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-dashed border-border px-7 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[1.4fr_1fr]">
          <Link
            href="/shop"
            className="group relative overflow-hidden rounded-xl border-2 border-gold-dim bg-[linear-gradient(155deg,var(--surface-2),var(--surface))] p-9"
          >
            <div className="font-[var(--font-stamp)] text-[11px] font-bold uppercase tracking-widest text-gold">
              The Actual Business
            </div>
            <h2 className="my-2 font-[var(--font-script)] text-4xl text-balance">Shop the Shirts</h2>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-ink-mute">
              {PRODUCTS.length} designs, zero beginner energy. Every one links straight to Amazon — free Prime
              shipping, your size, your color.
            </p>
            <span className="inline-block rounded bg-red px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#fbefe7] shadow-[0_8px_24px_-8px_rgba(185,58,40,0.55)] transition-transform group-hover:-translate-y-0.5">
              Shop Now
            </span>
            <img
              src="/chip-mark.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 opacity-[0.12]"
            />
          </Link>

          <Link
            href="/rules"
            className="group relative overflow-hidden rounded-xl border-2 border-felt/40 bg-surface p-9 transition-colors hover:border-felt"
          >
            <div className="font-[var(--font-stamp)] text-[11px] font-bold uppercase tracking-widest text-ink-faint">
              If You&apos;re Here For Rules
            </div>
            <h2 className="my-2 font-display text-2xl font-black uppercase text-ink-mute">The Rulebook</h2>
            <p className="mb-6 max-w-xs text-[13px] leading-relaxed text-ink-faint">
              {GAMES.length} variants, correctly explained. No beginner filler.
            </p>
            <span className="inline-block border-b-2 border-felt pb-1 text-xs font-bold uppercase tracking-wide text-felt">
              Open the Book →
            </span>
            <img
              src="/chip-mark-green.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 opacity-[0.1]"
            />
          </Link>
        </div>
      </section>

      <section className="border-b-2 border-dashed border-border px-7 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-black uppercase">Fresh Off the Press</h2>
            <Link href="/shop" className="text-xs font-bold uppercase tracking-wide text-red-bright">
              Shop Everything →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <h2 className="font-display text-2xl font-black uppercase">The Rulebook, If You Need It</h2>
              <p className="mt-1 text-sm text-ink-mute">
                {GAMES.length} variants, correctly explained. From the casino-standard baseline to the genuinely
                obscure.
              </p>
            </div>
            <Link href="/games" className="text-xs font-bold uppercase tracking-wide text-felt">
              Open the Book →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {featuredGames.map((g) => (
              <Link
                key={g.slug}
                href={`/games/${g.slug}`}
                className="rounded-lg border-2 border-border bg-surface p-5 transition-colors hover:border-felt"
              >
                <h3 className="mb-1.5 font-bold">{g.name}</h3>
                <p className="text-xs leading-snug text-ink-mute">{g.hook}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
