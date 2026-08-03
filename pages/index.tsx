import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { GLOSSARY } from "@/data/glossary";
import { GAMES } from "@/data/games";

const featuredPosts = [
  {
    tag: "House Rules",
    title: "The Idaho Straddle, Explained",
    excerpt:
      "Restraddle from anywhere, ultimate last action preflop only — the rule most home games get slightly wrong.",
    href: "/blog/idaho-straddle-explained",
  },
  {
    tag: "Table Dynamics",
    title: "Reading the Same Six People, Every Week",
    excerpt:
      "Casino strategy assumes strangers. Your home game doesn't work that way — here's how to actually use that.",
    href: "/blog/reading-the-same-six-people",
  },
  {
    tag: "Hosting",
    title: "Why Most Home Games Die After a Year",
    excerpt: "It's rarely the poker. It's recruiting, burnout, and nobody owning the follow-up text.",
    href: "/blog/why-home-games-die",
  },
];

const featuredGames = [
  { slug: "wonky-donkey", name: "Wonky Donkey", hook: "You don't know which game you're in until the flop." },
  { slug: "murder", name: "Murder", hook: "One card per row. That's the whole twist." },
  { slug: "chowaha", name: "Chowaha", hook: "Three flops, one grid, several ways through it." },
  { slug: "scrotum", name: "Scrotum", hook: "Yes, that's really the name. Yes, it's a real BARGE game." },
];

export default function Home() {
  const idahoStraddle = GLOSSARY.find((v) => v.flagship)!;

  return (
    <div className="min-h-screen">
      <Head>
        <title>Restraddle — Home Game Rules, Strategy & Shop</title>
        <meta
          name="description"
          content="The straddle glossary, home-game strategy for the weekend grinder, and shirts you'd actually wear."
        />
      </Head>

      <Header />

      <section className="relative overflow-hidden border-b-2 border-dashed border-border px-7 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.25fr_1fr]">
          <div>
            <div className="mb-6 inline-flex -rotate-1 items-center gap-2 border-2 border-gold px-4 py-1.5 font-[var(--font-stamp)] text-xs uppercase tracking-widest text-gold">
              ☙ Ultimate Last Action ☙
            </div>
            <h1 className="mb-5 font-display text-5xl font-black leading-[1.08] text-balance">
              You already know what a straddle is&hellip; Have you heard of an{" "}
              <span className="text-red-bright">Idaho</span> straddle?
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-ink-mute">
              Home-game rules nobody else gets right, strategy for the stuff casinos don&apos;t spread, and shirts
              for people who take poker night more seriously than they&apos;ll admit.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/rules"
                className="inline-block rounded bg-red px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#fbefe7] shadow-[0_8px_24px_-8px_rgba(185,58,40,0.55)]"
              >
                Read the Rule
              </Link>
              <Link
                href="/shop"
                className="border-b-2 border-gold-dim pb-1 text-sm font-bold uppercase tracking-wide text-gold"
              >
                Shop the Drop
              </Link>
            </div>
          </div>

          <div className="relative rotate-2 rounded-xl border-2 border-border bg-surface p-7">
            <div className="font-[var(--font-stamp)] text-[11px] font-bold uppercase tracking-widest text-gold">
              House Rule · Flagship
            </div>
            <h3 className="my-1.5 font-display text-xl font-black">{idahoStraddle.name}</h3>
            <p className="text-sm leading-relaxed text-ink-mute">{idahoStraddle.summary}</p>
            <div className="my-4 border-t-2 border-dashed border-border" />
            <p className="font-[var(--font-stamp)] text-xs text-ink-faint">
              PREFLOP ONLY · NORMAL ORDER RESUMES POSTFLOP
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-dashed border-border px-7 py-9">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-14">
          <Stat num={GLOSSARY.length.toString()} label="Straddle Variants Documented" />
          <Stat num={GAMES.length.toString()} label="Games in the Rulebook" />
          <Stat num="0" label="Beginner-101 Filler" />
        </div>
      </section>

      <section className="border-b-2 border-dashed border-border px-7 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <h2 className="font-display text-2xl font-black uppercase">The Rulebook</h2>
              <p className="mt-1 text-sm text-ink-mute">
                {GAMES.length} variants, correctly explained. From the casino-standard baseline to the genuinely
                obscure.
              </p>
            </div>
            <Link href="/games" className="text-xs font-bold uppercase tracking-wide text-gold">
              Open the Book →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {featuredGames.map((g) => (
              <Link
                key={g.slug}
                href={`/games/${g.slug}`}
                className="rounded-lg border-2 border-border bg-surface p-5 transition-colors hover:border-gold"
              >
                <h3 className="mb-1.5 font-bold">{g.name}</h3>
                <p className="text-xs leading-snug text-ink-mute">{g.hook}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-dashed border-border px-7 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-black uppercase">From the Blog</h2>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-wide text-gold">
              View All Posts →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="rounded-lg border-2 border-border bg-surface p-6 transition-colors hover:border-red-bright"
              >
                <span className="mb-2 block text-[10.5px] font-bold uppercase tracking-wide text-gold">
                  {post.tag}
                </span>
                <h3 className="mb-2 text-lg font-bold leading-snug">{post.title}</h3>
                <p className="text-sm leading-relaxed text-ink-mute">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-black uppercase">Fresh Off the Press</h2>
            <Link href="/shop" className="text-xs font-bold uppercase tracking-wide text-gold">
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

      <Footer />
    </div>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-black text-gold">{num}</div>
      <div className="mt-0.5 text-[11.5px] uppercase tracking-wide text-ink-mute">{label}</div>
    </div>
  );
}
