import type { AppProps } from "next/app";
import "@/styles/globals.css";

// GA4 property not yet created for this site — add the measurement ID +
// Script tags here once one exists, matching the pattern in every other
// site's _app.tsx (see giraffepaper.com/pages/_app.tsx for the reference).
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
