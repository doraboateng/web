import React from 'react';
import styled from 'styled-components';

import { SearchForm } from '../../search';
import { HeroImage, Section, Tagline } from '../../shared';

interface SearchSectionProps {
  code: string; // eslint-disable-line react/no-unused-prop-types
  name: string;
}

const SearchSection = (props: SearchSectionProps) => (
  <HeroImage filmOpacity={0.6} height="45vh" justify="flex-start">
    <HeroInner>
      <Tagline size="large">{props.name}</Tagline>
      <Tagline>Lookup words, proverbs and concepts.</Tagline>

      <FormWrapper>
        <SearchForm />
      </FormWrapper>
    </HeroInner>
  </HeroImage>
);

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 50px;

  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    margin-top: 70px;
  }
`;

const FormWrapper = styled(Section)`
  color: ${props => props.theme.textColor.string()};
  bottom: -40px;
  margin-top: 3rem;
  position: absolute;
  width: 92vw;
  z-index: 1;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    margin-top: 2rem;
    max-width: 550px;
  }
`;

export default SearchSection;
