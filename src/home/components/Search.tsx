import React from 'react';
import styled from 'styled-components';

import { SearchForm } from '../../search';
import { HeroImage, HeroImageTitle, Section, theme } from '../../shared';

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

export default function SearchSection() {
  return (
    <HeroImage filmOpacity={0.3} height="70vh" justify="flex-start">
      <HeroInner>
        <HeroImageTitle>Learn with Dora</HeroImageTitle>

        <FormWrapper>
          <SearchForm backgroundColor={theme.amber.lighten(0.7)} />
        </FormWrapper>
      </HeroInner>
    </HeroImage>
  );
}
