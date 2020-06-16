import React from 'react';
import styled from 'styled-components';

import Tagline from './Tagline';
import { SearchForm } from '../../search';
import { HeroImage, Section } from '../../shared';

const SearchSection = () => (
  <HeroImage filmOpacity={0.6} height="35vh" justify="flex-start">
    <Tagline>
      A Reference of Cultures<br />
      Past and Present.
    </Tagline>

    <FormWrapper>
      <SearchForm />
    </FormWrapper>
  </HeroImage>
);

const FormWrapper = styled(Section)`
  color: ${props => props.theme.textColor.string()};
  bottom: -40px;
  margin-top: 3rem;
  position: absolute;
  width: 92vw;
  z-index: 1;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    margin-top: 2rem;
    max-width: 500px;
  }
`;

export default SearchSection;
