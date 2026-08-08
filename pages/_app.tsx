import type { AppProps } from "next/app";
import Script from "next/script";
import { Berkshire_Swash } from "next/font/google";
import "@/styles/globals.css";

// Free stand-in for Capitaly Script (the site's actual logo font, used via
// Canva exports) — Capitaly Script's free tier is personal-use only, so
// this covers every OTHER script/display moment until a commercial license
// is bought. Swap the family here if that happens; --font-script is the
// only thing consuming it.
const berkshireSwash = Berkshire_Swash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const GA_MEASUREMENT_ID = "G-FS9RPP5G1H";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={berkshireSwash.variable}>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
