import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
        box-sizing: border-box;
        margin: 0;

        
    }

    :root {
        font-size: 16px;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
