import { DefaultTheme } from 'styled-components';
import Color from 'color';

const theme: DefaultTheme = {
  amber: Color('#FFC107'),
  green: Color('#009688'),
  purple: Color('#8F3988'),
  white: Color('#FFF'),

  primaryColor: Color('#009688'),
  primaryColorLight: Color('#EDFBC1'),
  secondaryColor: Color('#FFC107'),
  accentColor: Color('#8F3988'),
  textColor: Color('#333'),

  fontFamily: '"Crimson Text", sans-serif',
  fontSize: '21px',
  fontWeightBold: 600,
  fontWeightLight: 400,
  fontWeightNormal: 400,
  lineHeight: '1.6',

  borderRadius: '2px',

  mediaQuerySmall: '576px',
  mediaQueryMedium: '768px',
  mediaQueryLarge: '992px',
  mediaQueryExtraLarge: '1200px',

  transitionDuration: '0.3s',
};

export default theme;
