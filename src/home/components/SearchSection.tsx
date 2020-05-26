import React from 'react';
import styled from 'styled-components';

import { SearchForm } from '../../search';
import { HeroImage, Section } from '../../shared';

const SearchSection = () => (
  <HeroImage filmOpacity={0.6} height="60vh" justify="flex-start">
    <Tagline>
      Lookup <em>proverbs</em>, <em>stories</em>, and other <em>gems</em> from <em>Indigenous</em> and <em>African</em> cultures around the world.
    </Tagline>

    <FormWrapper>
      <SearchForm />
    </FormWrapper>
  </HeroImage>
);

const Tagline = styled(Section)`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 50px;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    font-size: 2rem;
    line-height: 3rem;
    text-align: left;
    margin-top: 70px;
    width: 700px;
  }

  em {
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: normal;

    @media(min-width: ${props => props.theme.mediaQueryMedium}) {
      font-size: 2.8rem;
    }
  }
`;

const FormWrapper = styled(Section)`
  color: ${props => props.theme.textColor.string()};
  margin-top: 3rem;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    margin-top: 2rem;
  }
`;

export default SearchSection;
