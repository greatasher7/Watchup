import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    html{
        font-size: 2vh;
        letter-spacing: .05rem;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *, *::before, *::after{
        box-sizing: border-box;
        color: white;
    }
    body{
        background-color: #111;
        font-family: 'Poppins', sans-serif;
    }
`;
 
export default GlobalStyles;