import styled from 'styled-components';

import Tagline from './Tagline';

const HeroImageTitle = styled(Tagline)`
  background-color: ${props => props.theme.textColor.fade(0.4).string()};
  padding: 0 0.4rem;
  width: max-content;
`;

export default HeroImageTitle;
