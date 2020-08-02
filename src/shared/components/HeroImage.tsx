import React from 'react';
import styled from 'styled-components';

import Hero, { HeroProps, HERO_IMAGE } from './Hero';

interface HeroImageProps extends HeroProps {
  children: React.ReactNode;
  image?: string;
  filmOpacity?: number;
  justify?: string;
  padding?: string;
}

const HeroImage = (props: HeroImageProps) => {
  const { children, image, filmOpacity, justify, padding, ...heroProps } = props;

  return (
    <Hero {...heroProps} padding="0rem" styling={HERO_IMAGE}>
      <Film justify={justify} opacity={filmOpacity} padding={padding}>
        {children}
      </Film>
    </Hero>
  );
};

HeroImage.defaultProps = {
  image: null,
  filmOpacity: null,
  justify: null,
  padding: null,
};

export default HeroImage;

const Film = styled.div<{justify?: string, opacity?: number, padding?: string}>`
  background-color: rgba(0, 0, 0, ${props => props.opacity || 0.5});
  box-sizing: border-box;
  height: 100%;
  padding: ${props => props.padding || '1rem'};
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'center'};
`;
