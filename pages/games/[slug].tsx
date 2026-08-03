import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GAMES, FAMILY_LABELS, getGameBySlug, type GameRule } from "@/data/games";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: GAMES.map((g) => ({ params: { slug: g.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const game = getGameBySlug(params!.slug as string);
  if (!game) return { notFound: true };
  return { props: { game } };
};

export default function GameDetail({ game }: { game: GameRule }) {
  const pageTitle = `${game.name} — The Rulebook — Restraddle`;

  const pageUrl = `https://restraddle.com/games/${game.slug}`;

  return (
    <div className="min-h-screen">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={game.tldr} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={game.tldr} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Restraddle" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={game.tldr} />
      </Head>

      <Header />

      <div className="mx-auto max-w-2xl px-7 py-14">
        <Link href="/games" className="mb-6 inline-block text-xs font-bold uppercase tracking-wide text-gold">
          ← The Rulebook
        </Link>

        <span className="mb-3 block text-[11px] font-bold uppercase tracking-wide text-gold">
          {FAMILY_LABELS[game.family]}
        </span>
        <h1 className="mb-4 font-display text-3xl font-black leading-tight">{game.name}</h1>
        <p className="mb-8 text-lg leading-relaxed text-ink-mute">{game.tldr}</p>

        <div className="space-y-6">
          <RuleBlock label="Forced Money" text={game.forcedMoney} />
          <RuleBlock label="Deal Structure" text={game.dealStructure} />
          <RuleBlock label="Betting Rounds" text={game.bettingRounds} />
          <RuleBlock label="Showdown" text={game.showdown} />
          {game.note && (
            <div className="rounded-lg border-2 border-gold-dim bg-surface-2 p-4">
              <p className="text-sm leading-relaxed text-ink-mute">
                <span className="font-bold text-gold">Worth knowing: </span>
                {game.note}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function RuleBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t-2 border-dashed border-border pt-4">
      <h2 className="mb-2 font-[var(--font-stamp)] text-[11px] font-bold uppercase tracking-widest text-gold">
        {label}
      </h2>
      <p className="text-[15px] leading-relaxed text-ink">{text}</p>
    </div>
  );
}
