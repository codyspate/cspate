import React from "react";
import styled from "styled-components";
import contrast from "font-color-contrast";
import { getStyledFontColor } from "../../common/utils/font-color";

const Box = styled.div`
  padding: 5vh 10vw;
`;

const Link = styled.a`
  text-decoration: none;
  white-space: nowrap;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 83%;
    left: 0.3em;
    right: -0.2em;
    bottom: 0;
    transition: all 200ms cubic-bezier(0, 0.8, 0.13, 1);
    /* background-color: rgba(69, 201, 245, 0.5); */
    background-color: ${(props) => props.theme.colorPalette.accent2};
  }

  &:hover {
    color: ${(props) =>
      getStyledFontColor(props.theme.colorPalette.accent2, props)};
  }
  &:hover:after {
    top: 0%;
    left: -0.2em;
    right: -0.2em;
  }
`;

export const Introduction = () => {
  return (
    <Box>
      <h1>Hi there.</h1>
      <p style={{ fontWeight: 500, fontSize: "2.2em" }}>
        My name is Cody Spate.
      </p>
      <p>
        I am an engineering manager based in California. I have led teams to
        become some of the most valuable assets in engineering organizations by
        finding the right engineers, enabling them to use their creativity, and
        guiding them toward high value outcomes.{" "}
      </p>
      <p>
        I also have extensive history in software development as an individual
        contributor, and I still like to roll up my sleeves from time to time
        and write some code.
      </p>
      <p>
        You can find me on{" "}
        <Link href="https://www.linkedin.com/in/cody-spate/">LinkedIn.</Link>
      </p>
    </Box>
  );
};
