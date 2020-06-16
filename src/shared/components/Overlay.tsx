import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  children: React.ReactNode;
}

const Overlay = (props: Props) => (
  <Background>
    <Wrapper>
      <Header>
        <Close>
          <FontAwesomeIcon icon="times" />
        </Close>
      </Header>

      <Body>{props.children}</Body>
    </Wrapper>
  </Background>
);

const Background = styled.div`
  background-color: ${props => props.theme.textColor.fade(0.5).string()};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.white.string()};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.header`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-end;
`;

const Close = styled.button`
  background-color: transparent;
  border: none;
  box-sizing: content-box;
  color: #ccc;
  cursor: pointer;
  display: inline-block;
  padding: 1rem;
  width: 24px;
  transition: color ${props => props.theme.transitionDuration};

  &:hover {
    color: ${props => props.theme.textColor.string()};
  }
`;

const Body = styled.main`
  padding: 1rem;
`;

export default Overlay;
