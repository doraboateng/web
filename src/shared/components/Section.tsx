import styled from 'styled-components';

const Section = styled.section`
  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    margin: 0 10vw;
  }
`;

export default Section;
