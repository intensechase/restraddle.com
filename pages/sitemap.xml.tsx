import type { GetServerSideProps } from "next";
import { GAMES } from "@/data/games";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://restraddle.com";

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = ["", "/about", "/blog", "/games", "/rules", "/shop"];

  const gameUrls = GAMES.map((g) => `/games/${g.slug}`);
  const postUrls = getAllPosts().map((p) => `/blog/${p.slug}`);

  const urls = [...staticUrls, ...gameUrls, ...postUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
