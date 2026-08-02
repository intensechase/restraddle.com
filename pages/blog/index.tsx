import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, type PostMeta } from "@/lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getAllPosts() } };
};

export default function BlogIndex({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Blog — Restraddle</title>
        <meta name="description" content="House rules, table dynamics, and home-game strategy for players who already play." />
      </Head>

      <Header />

      <div className="border-b-2 border-dashed border-border px-7 py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl font-black">The Blog</h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-7 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border-2 border-border bg-surface p-6 hover:border-red-bright"
            >
              <span className="mb-2 block text-[10.5px] font-bold uppercase tracking-wide text-gold">
                {post.tag}
              </span>
              <h2 className="mb-2 text-lg font-bold leading-snug">{post.title}</h2>
              <p className="text-sm leading-relaxed text-ink-mute">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
