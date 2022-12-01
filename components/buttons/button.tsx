import { PropsWithChildren } from "react";
import styled from "styled-components";
import { getStyledFontColor } from "../../common/utils/font-color";

export type ButtonProps = {};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 0.1em;
  padding: 0.5em 1em;
  font-size: 1.3em;
  color: ${(props) =>
    getStyledFontColor(props.theme.colorPalette.accent1, props)};
  background: ${(props) => props.theme.colorPalette.accent1};
`;

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, ...restProps } = props ?? {};
  return <StyledButton {...restProps}>{children}</StyledButton>;
};
