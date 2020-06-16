import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { useGraphQL } from '../../utils/graphql';

interface Props {
  query: string;
  visible: boolean;
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

const Results = ({ query, visible }: Props) => {
  const { isLoading, result } = useGraphQL(graphQuery, { terms: query });
  const router = useRouter();
  const { locale } = router.query;

  if (!visible) {
    return null;
  }

  if (isLoading) {
    return <Wrapper>...</Wrapper>;
  }

  if (!result || result.search.length < 1) {
    return <Wrapper>Could not find any results for {query}.</Wrapper>;
  }

  return (
    <Wrapper>
      {result.search.map(({ resourceId, title, type }) => {
        const linkProps = {
          href: '/',
          as: '/',
        };

        switch (type) {
          case 'language':
            linkProps.href = '/[locale]/[langCode]';
            linkProps.as = `/${locale}/${resourceId}`;
            break;

          default:
            linkProps.href = '/';
            linkProps.as = '/';
        }

        return (
          <Result key={resourceId}>
            <Link {...linkProps}>
              {title}
            </Link>
          </Result>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${props => props.theme.amber.lighten(0.9).string()};
  box-shadow: 0 7px 40px -10px;
  max-height: 300px;
  overflow-y: scroll;
  z-index: 1;

  position: absolute;
  left: 0;
  right: 0;
  margin: .4rem 1.6rem 0;
`;

const Result = styled.div`
  a {
    background-color: transparent;
    color: ${props => props.theme.textColor.string()};
    display: block;
    padding: 1rem;
    text-decoration: none;
    transition: background-color ${props => props.theme.transitionDuration};

    &:hover {
      background-color: ${props => props.theme.amber.lighten(0.7).string()};
    }
  }
`;

export default Results;
