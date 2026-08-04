import type { AppProps } from "next/app";
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

// GA4 property not yet created for this site — add the measurement ID +
// Script tags here once one exists, matching the pattern in every other
// site's _app.tsx (see giraffepaper.com/pages/_app.tsx for the reference).
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={berkshireSwash.variable}>
      <Component {...pageProps} />
    </div>
  );
}
