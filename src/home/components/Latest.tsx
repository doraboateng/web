import React from 'react';
import styled from 'styled-components';

import {
  HERO_AMBER,

  Hero,
  Tagline,
} from '../../shared';

const LatestSection = () => (
  <LatestHero height="40vh" justify="flex-start" styling={HERO_AMBER}>
    <Tagline>
      Latest news and updates.
    </Tagline>
  </LatestHero>
);

const LatestHero = styled(Hero)`
  align-items: center;
  height: auto;

  @media(min-width: ${props => props.theme.mediaQueryLarge}) {
    flex-direction: row;
    height: 40vh;
  }
`;

export default LatestSection;
