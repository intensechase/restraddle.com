import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GLOSSARY } from "@/data/glossary";

export default function Rules() {
  const flagship = GLOSSARY.find((v) => v.flagship)!;
  const rest = GLOSSARY.filter((v) => !v.flagship);

  return (
    <div className="min-h-screen">
      <Head>
        <title>The Straddle Glossary — Restraddle</title>
        <meta
          name="description"
          content="Five named straddle variants, correctly explained — including the Idaho Straddle, the one most sites get wrong."
        />
        <link rel="canonical" href="https://restraddle.com/rules" />
        <meta property="og:title" content="The Straddle Glossary — Restraddle" />
        <meta
          property="og:description"
          content="Five named straddle variants, correctly explained — including the Idaho Straddle, the one most sites get wrong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://restraddle.com/rules" />
        <meta property="og:site_name" content="Restraddle" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="The Straddle Glossary — Restraddle" />
        <meta name="twitter:description" content="Five named straddle variants, correctly explained." />
      </Head>

      <Header />

      <div className="border-b-2 border-dashed border-border px-7 py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-3 font-display text-4xl font-black">The Straddle Glossary</h1>
          <p className="max-w-2xl text-[15.5px] leading-relaxed text-ink-mute">
            Five named variants, correctly explained — including the one most sites get wrong. Not beginner rules
            content; this assumes you already play.
          </p>

          <div className="relative mt-10 rounded-2xl border-2 border-felt/50 bg-[linear-gradient(155deg,var(--surface-2),var(--surface))] p-9">
            <div className="absolute -top-3.5 left-8 rounded-full bg-gold px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[#241102]">
              Flagship Entry
            </div>
            <h2 className="mb-3 mt-2.5 font-display text-2xl font-black">{flagship.name}</h2>
            <div className="mb-4 font-[var(--font-stamp)] text-xs uppercase tracking-wide text-ink-faint">
              Also known as &ldquo;{flagship.aka}&rdquo;
            </div>
            <p className="mb-4 max-w-2xl text-[15px] leading-relaxed">{flagship.body}</p>
            <div className="flex flex-wrap gap-7 border-t border-border pt-4">
              {flagship.facts?.map((f) => (
                <div key={f.label}>
                  <div className="text-[11px] font-bold uppercase tracking-wide text-felt">{f.label}</div>
                  <div className="mt-0.5 text-sm text-ink-mute">{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rest.map((v) => (
              <div key={v.slug} className="rounded-lg border-2 border-border bg-surface p-5 hover:border-red-bright">
                <div className="mb-2 text-[17px] font-extrabold">{v.name}</div>
                <div className="text-sm leading-relaxed text-ink-mute">{v.summary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
