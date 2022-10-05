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
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
