import { createGlobalStyle } from 'styled-components' ;

const GlobalStyle = createGlobalStyle `
    body {
        background-color: rgb(36, 39, 84);
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
    }
    
    a {
        color: white;
        font-weight: lighter;
        font-size: lem;
        text-decoration-line:none;
    }

    a:hover {
        font-size: 1.1em;
        font-weight: bolder;
        color: white;
        text-decoration-line:none;
    }
    a:visited {
        color: white;
    }`;

export default GlobalStyle;