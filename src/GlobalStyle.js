import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: #eee;
        font-family: 'Lato', sans-serif;
    }
    
    *, ::before, ::after {
        box-sizing: border-box;
    }
`;