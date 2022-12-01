import { createGlobalStyle } from "styled-components";
import { getStyledFontColor } from "../common/utils/font-color";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}

body {
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) => props.theme.colorPalette.primary};
  color: ${(props) =>
    getStyledFontColor(props.theme.colorPalette.primary, props)};
    /* color: ${(props) => props.theme.fontColor.dark} */
}
h1 {
  font-size: 4.5em;
  font-weight: 500;
  margin-bottom: 0;
}
p {
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 28em;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: #121314;
  }
}

`;
