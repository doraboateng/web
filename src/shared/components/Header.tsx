import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Wrapper>
    <Logo>Dora Boateng</Logo>

    <span style={{color: 'transparent'}}>Menu</span>
  </Wrapper>
);

const Wrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    padding: 1rem 10vw;
  }
`;

const Logo = styled.div``; 

export default Header;
