import React from 'react';
import styled from 'styled-components';

import { HERO_AMBER, Hero, Tagline } from '../../shared';

const MissionHero = styled(Hero)`
  align-items: center;
  height: auto;

  em {
    background-color: ${props => props.theme.white.fade(0.3).string()};
  }
`;

const Message = styled(Tagline)`
  margin: 4rem auto;
`;

export default function MissionSection() {
  return (
    <MissionHero justify="flex-start" styling={HERO_AMBER}>
      <Message textAlign="center" width="auto">
        Connect with your <em>Indigenous</em> and <em>African</em> heritage.
      </Message>
    </MissionHero>
  );
}
