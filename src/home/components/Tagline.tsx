import styled from 'styled-components';

import { Section } from '../../shared';

interface Props {
  textAlign?: string;
  width?: string;
}

const Tagline = styled(Section)<Props>`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 50px;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    font-size: 2rem;
    line-height: 3rem;
    text-align: ${props => props.textAlign};
    margin-top: 70px;
    width: ${props => props.width};
  }

  em {
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: normal;

    @media(min-width: ${props => props.theme.mediaQueryMedium}) {
      font-size: 2.8rem;
    }
  }
`;

Tagline.defaultProps = {
  textAlign: 'left',
  width: '700px',
}

export default Tagline;
