import { createGlobalStyle } from 'styled-components';

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

  *, *::before, *::after {
    box-sizing: border-box;
    }
    
  body{
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.size.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    color: ${(props) => props.theme.color.text};
    background: ${(props) => props.theme.background.default};
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.dark};
    font-family: ${(props) => props.theme.font.family.eadline};
    letter-spacing: ${(props) => props.theme.letterSpacing.heading};
  }
`;

export default GlobalStyle;
