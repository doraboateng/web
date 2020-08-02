import React from 'react';
import styled from 'styled-components';

import { SearchForm } from '../../search';
import { HeroImage, Section, Tagline, theme } from '../../shared';

const SearchSection = () => (
  <HeroImage filmOpacity={0.3} height="45vh" justify="flex-start">
    <HeroInner>
      <Tagline>
        <TaglineSpan>
          A Reference of Cultures
        </TaglineSpan>
      </Tagline>

      <Tagline>
        <TaglineSpan>
          Past and Present.
        </TaglineSpan>
      </Tagline>

      <FormWrapper>
        <SearchForm textColor={theme.white} />
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

const TaglineSpan = styled.span`
  background: ${props => props.theme.textColor.fade(0.4).string()};
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
