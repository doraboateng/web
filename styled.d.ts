import Color from 'color';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: Color;
    accentColor: Color;
    textColor: Color;

    fontFamily: string;
    fontSize: string;
    fontWeightBold: number,
    fontWeightLight: number,
    fontWeightNormal: number,
    lineHeight: string;

    borderRadius: string;
  }
}
