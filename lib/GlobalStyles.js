import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    box-sizing: border-box;
  }
  button {
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    overflow: hidden;
  }
`;
