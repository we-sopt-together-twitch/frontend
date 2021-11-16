import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    
    :root {
        font-size: 65%;
        font-family: 'Noto Sans KR', sans-serif;
    }


    * {
        box-sizing: border-box;
        margin: 0;
    }


    body {
        
    }
`;
