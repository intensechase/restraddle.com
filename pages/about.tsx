import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About — Restraddle</title>
      </Head>
      <Header />
      <div className="mx-auto max-w-2xl px-7 py-16">
        <h1 className="mb-6 font-display text-4xl font-black">About Restraddle</h1>
        <p className="text-[15.5px] leading-relaxed text-ink-mute">
          Placeholder — real About copy not written yet. Should cover the site&apos;s origin (the Idaho Straddle
          house rule), who it&apos;s for (players who already play, not beginners), and the no-ads /
          shirts-plus-books revenue model.
        </p>
      </div>
      <Footer />
    </div>
  );
}
