import styled from 'styled-components';

interface Props {
  size?: 'normal' | 'large';
  textAlign?: string;
  width?: string;
}

const Tagline = styled.div<Props>`
  font-size: ${props => (props.size === 'large' ? '2rem' : '1.4rem')};
  text-align: center;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    font-size: ${props => (props.size === 'large' ? '2.8rem' : '2rem')};;
    text-align: ${props => props.textAlign};
    width: ${props => props.width};
  }

  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    margin: 0 10vw;
  }
`;

Tagline.defaultProps = {
  size: 'normal',
  textAlign: 'left',
  width: '700px',
};

export default Tagline;
