import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: "Open Sans Condensed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 60px;

    @media screen and (max-width: 800px){
        padding: 10px
    }

    @media screen and (max-width: 600px){
        padding: 10px
    }

    @media screen and (max-width: 400px){
        padding: 10px
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  a {
    text-decoration: none;
    color: #626767;
  }

  *{
      box-sizing: border-box;
  }
`;
