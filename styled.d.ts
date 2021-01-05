import Color from 'color';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    amber: Color;
    black: Color;
    green: Color;
    purple: Color;
    white: Color;

    primaryColor: Color;
    primaryColorLight: Color;
    secondaryColor: Color;
    accentColor: Color;
    textColor: Color;

    fontFamily: string;
    fontSize: string;
    fontWeightBold: number,
    fontWeightLight: number,
    fontWeightNormal: number,
    lineHeight: string;

    borderRadius: string;

    mediaQuerySmall: string;
    mediaQueryMedium: string;
    mediaQueryLarge: string;
    mediaQueryExtraLarge: string;

    transitionDuration: string;
  }
}
