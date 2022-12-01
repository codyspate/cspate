export type Colors = {
  primary: string;
  secondary: string;
  accent1: string;
  accent2: string;
  accent3: string;
};

const colors: Colors[] = [
  {
    primary: "#41B3A3",
    secondary: "#85DCB0",
    accent1: "#E27D60",
    accent2: "#E8A87C",
    accent3: "",
  },
];

export type Theme = {
  colors: Colors;
};

export const theme = {
  colors: colors[0],
};
