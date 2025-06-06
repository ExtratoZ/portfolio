import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorPrimary: string;
    colorSecondary: string;
    colorBackground: string;
    colorBackgroundButton: string;
    colorBorder: string;
    colorButtonHover: string;
  }
}
