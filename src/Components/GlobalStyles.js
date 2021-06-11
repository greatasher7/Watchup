import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    html{
        font-size: 1vw;
        letter-spacing: .05rem;
        @media screen and (max-width: 1024px){
            font-size: 2vw;
        }
        @media screen and (max-width: 480px){
            font-size: 3.5vw;
        }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
    body{
        background-color: #111;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
`;
 
export default GlobalStyles;