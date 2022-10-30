import { createGlobalStyle } from 'styled-components';
import CssReset from './CssReset';
import theme from './theme';

const GlobalStyles = createGlobalStyle`  
    ${CssReset}
    @font-face {
      font-family: "Montserrat";
      font-weight: 400;
      font-style: normal;
      src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
      url("/fonts/Montserrat-Regular.woff") format("font-woff");
    }
  
    /** Montserrat Medium **/
    @font-face {
      font-family: "Montserrat";
      font-weight: 500;
      font-style: normal;
      src: url("/fonts/Montserrat-Medium.woff2") format("woff2"),
      url("/fonts/Montserrat-Medium.woff") format("font-woff");
    }
  
    /** Montserrat SemiBold **/
    @font-face {
      font-family: "Montserrat";
      font-weight: 600;
      font-style: normal;
      src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
      url("/fonts/Montserrat-SemiBold.woff") format("font-woff");
    }
  
    /** Montserrat Bold **/
    @font-face {
      font-family: "Montserrat";
      font-weight: 700;
      font-style: normal;
      src: url("/fonts/Montserrat-Bold.woff2") format("woff2"),
      url("/fonts/Montserrat-Bold.woff") format("font-woff");
    }
  
    /** Bitter Regular **/
    @font-face {
      font-family: "Bitter";
      src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
      url("/fonts/Bitter-Regular.woff") format("font-woff");
    }
  
    body {
      font-family: ${(props) => props.theme.font.family.default};
      font-size: ${(props) => props.theme.font.size.default};
      line-height: ${(props) => props.theme.font.lineHeight.default};
      color: ${(props) => props.theme.color.text};
      position: relative;
    }
    
    html, body {
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
    }
`;

export default GlobalStyles;
