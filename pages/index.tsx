import Head from "next/head";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { getTheme } from "../styles/theme/theme";

import { Introduction } from "../views/introduction/introduction";
import { Music } from "../views/music/music";

const Container = styled.div`
  padding: 0 2rem;
`;

export async function getServerSideProps() {
  const theme = getTheme();
  return { props: { theme } };
}

export type HomeProps = {
  theme: DefaultTheme;
};
export default function Home(props: HomeProps) {
  return (
    <ThemeProvider theme={props.theme}>
      <Container>
        <GlobalStyle />
        <Head>
          <title>Cody Spate</title>
          <meta name="description" content="Cody Spate personal website" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Introduction />
        <Music />
      </Container>
    </ThemeProvider>
  );
}
