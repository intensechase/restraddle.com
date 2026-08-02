import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Real favicon set not generated yet — placeholder emoji favicon
            (♠️) used during mockup review. Replace with real
            favicon-*.png / apple-touch-icon.png before launch. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
