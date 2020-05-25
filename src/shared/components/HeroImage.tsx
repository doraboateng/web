import React from 'react';
import styled from 'styled-components';

import Hero, { HeroProps, HERO_IMAGE } from './Hero';

interface HeroImageProps extends HeroProps {
  children: React.ReactNode;
  image?: string;
  filmOpacity?: number;
}

const HeroImage = (props: HeroImageProps) => {
  const { children, image, filmOpacity, padding, ...heroProps } = props;

  return (
    <Hero {...heroProps} padding="0rem" styling={HERO_IMAGE}>
      <Film opacity={filmOpacity} padding={padding}>
        {children}
      </Film>
    </Hero>
  );
}

const Film = styled.div<{opacity?: number, padding?: string}>`
  background-color: rgba(0, 0, 0, ${props => props.opacity || 0.5});
  height: 100%;
  padding: ${props => props.padding || '1rem'};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default HeroImage;
