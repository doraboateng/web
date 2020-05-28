import Color from 'color';
import styled, { StyledProps } from 'styled-components';

export const HERO_AMBER = 'amber';
export const HERO_GREEN = 'green';
export const HERO_IMAGE = 'image';
export const HERO_PURPLE = 'purple';
export const HERO_WHITE = 'white';

type HeroStyling =
  | typeof HERO_AMBER
  | typeof HERO_GREEN
  | typeof HERO_IMAGE
  | typeof HERO_PURPLE
  | typeof HERO_WHITE;

export interface HeroProps {
  height?: string;
  justify?: string;
  padding?: string;
  styling?: HeroStyling;
}

type StyledHeroProps = StyledProps<HeroProps>;

const Hero = styled.div<HeroProps>`
  background: ${props => getBackground(props)};
  background-size: cover;
  box-sizing: border-box;
  color: ${props => getColor(props).string()};
  height: ${props => props.height || '100vh'};
  padding: ${props => props.padding || '1rem'};

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'center'};

  em {
    background-color: ${props => getColor(props).fade(0.9).string()};
    border-radius: ${props => props.theme.borderRadius};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeightBold};
    padding: 1px 5px;
  }
`;

const getBackground = ({ styling, theme }: StyledHeroProps): string => {
  switch (styling) {
    case HERO_IMAGE:
      return 'center center no-repeat url("/assets/images/bg/2d367c83ace8e17b5d262944c7044aee.jpg")';
    
    case HERO_PURPLE:
      return `linear-gradient(
        ${theme.purple.string()},
        ${theme.purple.darken(0.3).string()}
      )`;
    
    default:
      return 'white';
  }
}

const getColor = ({ styling, theme }: StyledHeroProps): Color => {
  switch (styling) {
    case HERO_IMAGE:
    case HERO_PURPLE:
    return theme.white;
    
    default:
      return theme.textColor;
  }
}

export default Hero;
