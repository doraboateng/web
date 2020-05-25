import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <Copy>
      <a href="https://kwcay.co" target="_blank">Kwahu &amp; Cayes</a>
      <span>&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </Copy>
  </Wrapper>
);

const Wrapper = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;

  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    padding: 1rem 10vw;
  }
`;

const Copy = styled.div`
  font-size: 0.8em;

  a, span {
    margin: 0 4px;
  }
`;

export default Footer;
