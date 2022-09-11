import { createGlobalStyle } from 'styled-components';
import CssReset from './CssReset';
import Montserrat from '../fonts/Montserrat.ttf';
import Bitter from '../fonts/Bitter.ttf';

const GlobalStyles = createGlobalStyle`  
    ${CssReset}

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
    }

    @font-face {
        font-family: 'Bitter';
        src: url(${Bitter}) format('truetype');
    }

    body {
        color: red;
        font-family: 'Montserrat';
    }
`;

export default GlobalStyles;
