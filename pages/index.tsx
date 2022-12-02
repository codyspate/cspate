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
          <title>Cody Spate - Software Engineering Manager</title>
          <meta
            name="description"
            content="I am a Software Engineering Manager focused on developer satisfaction and guiding teams toward high value outcomes."
          />
          <meta charSet="utf-8" />
          <meta name="author" content="Cody Spate" />

          <meta property="og:title" content="Cody Spate" />
          <meta
            property="og:description"
            content="I am a Software Engineering Manager focused on developer satisfaction and guiding teams toward high value outcomes."
          />
          <meta property="og:site_name" content="Cody Spate" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="codyspate.com" />
          <meta property="og:image" content="/cody-photo.jpeg" />

          <meta
            name="twitter:title"
            content="Cody Spate - Software Engineering Manager"
          />
          <meta
            name="twitter:description"
            content="I am a Software Engineering Manager focused on developer satisfaction and guiding teams toward high value outcomes."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/cody-photo.jpeg" />
          <meta name="twitter:image:alt" content="Portrait of Cody Spate" />
          <meta name="twitter:creator" content="@codyspate" />
          <meta name="twitter:site" content="@codyspate" />

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
