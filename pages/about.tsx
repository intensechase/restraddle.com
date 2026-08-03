import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About — Restraddle</title>
        <meta
          name="description"
          content="Why this site is named after a house rule, who it's for, and how it actually makes money."
        />
      </Head>
      <Header />
      <div className="mx-auto max-w-2xl px-7 py-16">
        <h1 className="mb-8 font-display text-4xl font-black">About Restraddle</h1>

        <div className="space-y-6 text-[15.5px] leading-relaxed text-ink">
          <p>
            A restraddle isn&apos;t exotic. Most players who&apos;ve sat in a real cash game have seen one — someone
            posts a straddle from a seat that isn&apos;t UTG, and the table either knows exactly what that means or
            spends thirty seconds arguing about it. The Idaho Straddle specifically — restraddle from anywhere,
            whoever posts last gets ultimate last action, but only preflop — is one version of that argument,
            played out enough times in enough home games to earn its own name. That&apos;s where this site&apos;s
            name comes from. Not a metaphor, just the actual rule.
          </p>

          <p>
            This isn&apos;t a beginner site, and it&apos;s not trying to be. If you need &ldquo;what beats
            what&rdquo; explained, there are a hundred places for that. This one assumes you already play — that
            you&apos;ve got a regular game, you know your outs, and what you actually want is the stuff nobody
            bothers writing down: which house rule your table&apos;s been playing slightly wrong, what a genuinely
            obscure variant like Chowaha or Wonky Donkey actually does, how to read the five people you&apos;ve
            played against for three years instead of a stranger across a casino table.
          </p>

          <p>
            The <Link href="/games" className="text-gold hover:underline">Rulebook</Link> is the biggest thing
            here — 63 variants, each with its own page, researched properly rather than guessed at from the name.
            The <Link href="/blog" className="text-gold hover:underline">blog</Link> covers the parts of running a
            home game that aren&apos;t about the cards at all — keeping a game alive for years instead of months,
            reading regulars, the social contract nobody writes down but everyone breaks eventually.
          </p>

          <p>
            No ads on this site, and that&apos;s on purpose, not a placeholder. The actual business is the{" "}
            <Link href="/shop" className="text-gold hover:underline">shop</Link> — shirts, and eventually a
            compiled book pulling the best of the Rulebook and the blog into one physical reference you can
            actually keep at the table. If something here is useful to you, that&apos;s the way to say so.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
