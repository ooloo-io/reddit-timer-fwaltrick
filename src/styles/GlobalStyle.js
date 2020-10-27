import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 /* Montserrat Light */
  @font-face {
    font-family: "Montserrat";
    font-weight: 300;
    font-style: normal;
    src: local("../fonts/montserrat-v15-latin-300.woff") format("woff"),
    local("../fonts/montserrat-v15-latin-300.woff2") format("woff2");
  }

  /* Montserrat Regular */
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: local("../fonts/Montserrat-Regular.woff") format("woff"),
    local("../fonts/Montserrat-Regular.woff2") format("woff2");
  }
 
  /* Bitter 500 */
  @font-face {
    font-family: "Bitter";
    font-weight: 500;
    font-style: normal;
    src: local("../fonts/bitter-v16-latin-500.woff") format("woff"),
    local("../fonts/bitter-v16-latin-500.woff2") format("woff2");
  }


`

export default GlobalStyle
