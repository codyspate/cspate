import { DefaultTheme, ThemeProps } from "styled-components";
import contrast from "font-color-contrast";

export const getStyledFontColor = (
  bgColor: string,
  props: ThemeProps<DefaultTheme>
) => {
  if (contrast(bgColor) === "#000000") return props.theme.fontColor.dark;
  return props.theme.fontColor.light;
};
