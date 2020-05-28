import React from 'react';
import styled from 'styled-components';

import { useGraphQL } from '../../utils/graphql';

interface Props {
  query: string;
}

const graphQuery = `
  query ($terms: String!) {
    search(query: $terms) {
      type
      title
      resourceId
    }
  }
`;

const Results = ({ query }: Props) => {
  const { isLoading, result } = useGraphQL(graphQuery, { terms: query });

  if (isLoading) {
    return <Wrapper>...</Wrapper>
  }

  if (!result || result.search.length < 1) {
    return <Wrapper>No results found.</Wrapper>
  }

  return (
    <Wrapper>
      {result.search.map(({ title, resourceId }) => (
        <div key={resourceId}>{title}</div>
      ))}
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
