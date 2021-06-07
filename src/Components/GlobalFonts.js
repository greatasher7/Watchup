import {createGlobalStyle} from "styled-components";
import PoppinsLight from "Fonts/Poppins-Light.woff"
import PoppinsRegular from "Fonts/Poppins-Regular.woff"
import PoppinsMedium from "Fonts/Poppins-Medium.woff"
import PoppinsSemiBold from "Fonts/Poppins-SemiBold.woff"
import PoppinsBold from "Fonts/Poppins-Bold.woff"
import PoppinsLightItalic from "Fonts/Poppins-LightItalic.woff"
import PoppinsItalic from "Fonts/Poppins-Italic.woff"
import PoppinsMediumItalic from "Fonts/Poppins-MediumItalic.woff"
import PoppinsSemiBoldItalic from "Fonts/Poppins-SemiBoldItalic.woff"
import PoppinsBoldItalic from "Fonts/Poppins-BoldItalic.woff"


const GlobalFonts = createGlobalStyle`
    /* Style - normal */
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsLight}) format('woff');
        font-weight: lighter;
        font-style: normal;
    }
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), url(${PoppinsSemiBold}) format('woff');
        font-style: normal;
        font-weight: 600;
    }
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsBold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    
    /* Style - Italic */
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsLightItalic}) format('woff');
        font-weight: Lighter;
        font-style: italic;
    }
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsItalic}) format('woff');
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), url(${PoppinsMediumItalic}) format('woff');
        font-weight: 500;
        font-style: italic;
    }
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), url(${PoppinsSemiBoldItalic}) format('woff');
        font-weight: 600;
        font-style: italic;
    }
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"), url(${PoppinsBoldItalic}) format('woff');
        font-weight: bold;
        font-style: italic;
    }
`;

export default GlobalFonts;