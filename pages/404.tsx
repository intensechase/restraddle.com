import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Folded — Restraddle</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Header />

      <div className="flex flex-col items-center justify-center border-b-2 border-dashed border-border px-7 py-24 text-center">
        <span className="mb-5 font-[var(--font-stamp)] text-xs uppercase tracking-wide text-gold">
          404 · Dead Hand
        </span>
        <h1 className="mb-4 font-display text-4xl font-black">This page folded.</h1>
        <p className="mb-10 max-w-sm text-[15.5px] leading-relaxed text-ink-mute">
          Whatever you were looking for isn&apos;t at this address anymore — or never was. Try the Rulebook, or head
          back to the felt.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border-2 border-red-bright bg-red px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Back Home
          </Link>
          <Link
            href="/games"
            className="rounded-full border-2 border-border bg-surface px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink-mute hover:border-gold-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            The Rulebook
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
