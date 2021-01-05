import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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

const Logo = styled.div`
  cursor: pointer;
`;

export default function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <Logo> </Logo>
      </Link>

      <span style={{ color: 'transparent' }}>Menu</span>
    </Wrapper>
  );
}

export const HeaderSpacer = styled.div`
  display: block;
  height: 5rem;
`;
