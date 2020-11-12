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
    src: local("../fonts/montserrat-v15-latin-regular.woff") format("woff"),
    local("../fonts/montserrat-v15-latin-regular.woff2") format("woff2");
  }
 
  /* Montserrat Bold */
  @font-face {
    font-family: "Montserrat";
    font-weight: 800;
    font-style: normal;
    src: local("../fonts/montserrat-v15-latin-800.woff") format("woff"),
    local("../fonts/montserrat-v15-latin-800.woff2") format("woff2");
  }

  /* Bitter 500 */
  @font-face {
    font-family: "Bitter";
    font-weight: 500;
    font-style: normal;
    src: local("../fonts/bitter-v16-latin-500.woff") format("woff"),
    local("../fonts/bitter-v16-latin-500.woff2") format("woff2");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
  }
`;

export default GlobalStyle;
