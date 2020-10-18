import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
        color: var(--color);
    }

    body {
        background-color: var(--bg);
    } 

    body.light {
    --header: var(--bg);
    --bg: white;
    --color: black;
    --accent: blue; 
    }

    body.dark {
    --header: #141414;
    --bg: #202020;
    --color: white;
    --accent: #ef86a9;
    }
`
export default GlobalStyle
