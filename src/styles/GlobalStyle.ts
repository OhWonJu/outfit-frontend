import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle<any>`
    ${normalize};

    *{
        color: ${props => props.theme.text_primary_color};
        font-family: sans-serif;
    }
    body {
        min-width: 420px;
    }

    html,
    body {
      height: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
      /* font-family: var(--font-sans); */
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* background-color: var(--primary); */
      /* color: var(--text-primary); */
      overscroll-behavior-x: none;
    }

    body {
      position: relative;
      min-height: 100%;
      margin: 0;
    }   
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
