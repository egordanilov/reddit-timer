import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string;
      linkHover: string;
      link: string;
      loadingSpinner: string;
    },
    font: {
      family: {
        default: string;
        headline: string;
      },
      size: {
        default: string;
      },
      lineHeight: {
        default: number;
      },
    },
    heatMapColors: string[];
  };
}
