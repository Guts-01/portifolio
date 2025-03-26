import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --corHome: #000;
        --corNavBar: #141414;
        --corTexto: #fff;
        --corTextoHover: #fff;
        --corSectionsLinks: #2f2f2f;
        --fontPrincipal: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;