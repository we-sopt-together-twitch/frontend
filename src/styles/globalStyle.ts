import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    
    :root {
        font-size: 62.5%;
        font-family: 'Spoqa Han Sans', 'Noto Sans KR', sans-serif;

        
    }


    * {
        box-sizing: border-box;
        margin: 0;
    }


    button, a {
        font-family: 'Spoqa Han Sans', 'Noto Sans KR', sans-serif;
    }
`;
