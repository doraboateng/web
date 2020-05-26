import React from 'react';
import styled from 'styled-components';

import { Overlay } from '../../shared';

interface Props {
  query: string;
}

const Results = (props: Props) => {
  return (
    <Overlay>Searching for {props.query}...</Overlay>
  );
};

export default Results;
