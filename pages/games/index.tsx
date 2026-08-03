import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GAMES, FAMILY_LABELS, type GameFamily } from "@/data/games";

const FAMILIES: GameFamily[] = ["flop", "stud", "draw", "hybrid", "novelty"];

export default function GamesIndex() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Head>
        <title>The Rulebook — Restraddle</title>
        <meta
          name="description"
          content="63 poker variants, correctly explained — from Texas Hold'em to the genuinely obscure. Not beginner content."
        />
      </Head>

      <Header />

      {!open ? (
        <div className="flex flex-col items-center justify-center px-7 py-20 text-center">
          <button
            onClick={() => setOpen(true)}
            className="group relative mb-8 h-72 w-52 rounded-r-md border-y-2 border-r-2 border-gold bg-[linear-gradient(155deg,var(--surface-2),var(--surface))] shadow-[8px_8px_0_var(--border)] transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--border)]"
            aria-label="Open the rulebook"
          >
            {/* spine */}
            <span className="absolute left-0 top-0 h-full w-3 rounded-l-sm bg-red" />
            <span className="absolute inset-x-6 top-8 text-4xl">🂡</span>
            <span className="absolute inset-x-4 top-24 font-display text-lg font-black uppercase leading-tight text-ink">
              The
              <br />
              Rulebook
            </span>
            <span className="absolute inset-x-4 bottom-6 font-[var(--font-stamp)] text-[11px] uppercase tracking-wide text-gold">
              63 Games · Tap to Open
            </span>
          </button>
          <p className="max-w-sm text-sm leading-relaxed text-ink-mute">
            Every variant we could track down, correctly explained. Click the book.
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl px-7 py-14">
          <div className="mb-10">
            <h1 className="mb-3 font-display text-4xl font-black">The Rulebook</h1>
            <p className="max-w-2xl text-[15.5px] leading-relaxed text-ink-mute">
              {GAMES.length} variants, from the casino-standard baseline to the genuinely obscure. No beginner
              explainers — this assumes you already play.
            </p>
          </div>

          {FAMILIES.map((family) => {
            const games = GAMES.filter((g) => g.family === family);
            if (games.length === 0) return null;
            return (
              <section key={family} className="mb-12">
                <h2 className="mb-4 border-b-2 border-dashed border-border pb-3 font-display text-xl font-black uppercase">
                  {FAMILY_LABELS[family]}
                  <span className="ml-2 font-[var(--font-stamp)] text-xs font-normal normal-case text-ink-faint">
                    ({games.length})
                  </span>
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {games.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/games/${g.slug}`}
                      className="rounded-lg border-2 border-border bg-surface p-4 transition-colors hover:border-red-bright"
                    >
                      <div className="text-sm font-bold leading-snug">{g.name}</div>
                      <div className="mt-1 line-clamp-2 text-xs leading-snug text-ink-mute">{g.tldr}</div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}
