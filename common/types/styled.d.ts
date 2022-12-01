// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface Colors {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    accent3?: string;
  }
  export interface DefaultTheme {
    colorPalette: Colors;
    fontColor: {
      light: string;
      dark: string;
    };
  }
}
