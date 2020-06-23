import React from 'react';
import styled from 'styled-components';

import Tagline from './Tagline';
import { SearchForm } from '../../search';
import { HeroImage, Section } from '../../shared';

const SearchSection = () => (
  <HeroImage filmOpacity={0.6} height="35vh" justify="flex-start">
    <HeroInner>
      <Tagline>
        A Reference of Cultures<br />
        Past and Present.
      </Tagline>

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
