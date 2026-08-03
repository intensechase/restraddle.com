import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, type PostMeta } from "@/lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meta, content } = getPostBySlug(params!.slug as string);
  const mdxSource = await serialize(content);
  return { props: { meta, mdxSource } };
};

export default function BlogPost({
  meta,
  mdxSource,
}: {
  meta: PostMeta;
  mdxSource: MDXRemoteSerializeResult;
}) {
  const pageTitle = `${meta.title} — Restraddle`;

  return (
    <div className="min-h-screen">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={meta.excerpt} />
      </Head>

      <Header />

      <article className="mx-auto max-w-2xl px-7 py-16">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-wide text-gold">{meta.tag}</span>
        <h1 className="mb-6 font-display text-3xl font-black leading-tight">{meta.title}</h1>
        <div className="prose-restraddle text-[15.5px] leading-relaxed text-ink">
          <MDXRemote {...mdxSource} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
