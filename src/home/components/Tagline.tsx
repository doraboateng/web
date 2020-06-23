import styled from 'styled-components';

interface Props {
  textAlign?: string;
  width?: string;
}

const Tagline = styled.div<Props>`
  font-size: 1.4rem;
  text-align: center;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    font-size: 2rem;
    line-height: 3rem;
    text-align: ${props => props.textAlign};
    width: ${props => props.width};
  }

  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    margin: 0 10vw;
  }
`;

Tagline.defaultProps = {
  textAlign: 'left',
  width: '700px',
};

export default Tagline;
