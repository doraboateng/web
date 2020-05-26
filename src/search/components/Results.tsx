import React from 'react';
import styled from 'styled-components';

interface Props {
  query: string;
}

const Results = (props: Props) => {
  return (
    <Wrapper>
      Searching for {props.query}...
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
    </Wrapper>
  );
};

const Wrapper =  styled.div`
  background-color: ${props => props.theme.amber.lighten(0.9).string()};
  box-shadow: 0 7px 40px -10px;
  max-height: 300px;
  overflow-y: scroll;
  z-index: 1;

  position: absolute;
  left: 0;
  right: 0;
  margin: .4rem 1.6rem 0;
  padding: 1rem 1.6rem;
`;

export default Results;
