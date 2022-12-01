import { useMemo } from "react";
import { DefaultTheme, Colors } from "styled-components";

const colors: Colors[] = [
  {
    primary: "#41B3A3",
    secondary: "#85DCB0",
    accent1: "#E27D60",
    accent2: "#E8A87C",
  },
  {
    primary: "#8ECAE6",
    secondary: "#219EBC",
    accent1: "#023047",
    accent2: "#FFB703",
    accent3: "#FB8500",
  },
  {
    primary: "#264653",
    secondary: "#2a9d8f",
    accent1: "#e9c46a",
    accent2: "#f4a261",
    accent3: "#e76f51",
  },
  {
    primary: "#335c67",
    secondary: "#fff3b0",
    accent1: "#e09f3e",
    accent2: "#9e2a2b",
    accent3: "#540b0e",
  },
  {
    primary: "#8cb369",
    secondary: "#f4e285",
    accent1: "#f4a259",
    accent2: "#5b8e7d",
    accent3: "#bc4b51",
  },
];

export const theme: DefaultTheme = {
  colorPalette: colors[1],
  fontColor: {
    light: "#ffffff",
    dark: "#121314",
  },
};

export const useGetTheme = () => {
  return useMemo(() => {
    const colorsIndex = Math.floor(Math.random() * colors.length);
    theme.colorPalette = colors[colorsIndex] ?? colors[0];
    return theme;
  }, []);
};
