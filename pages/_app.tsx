// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { GlobalStyle } from "../styles/global-style";
import { ThemeProvider } from "styled-components";
import { useGetTheme } from "../styles/theme/theme";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  display: "auto",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
