import React from 'react';
import styled from 'styled-components';

import { SearchForm } from '../../search';
import { HeroImage, Section } from '../../shared';

const SearchSection = () => (
  <HeroImage filmOpacity={0.3}>
    <Form>
      <Tagline>
        Lookup <em>proverbs</em>, <em>stories</em>, and other gems from <em>indigenous</em> cultures around the world. (learn more)
      </Tagline>

      <SearchForm />
    </Form>
  </HeroImage>
);

const Form = styled(Section)`
  background-color: ${props => props.theme.amber.fade(0.1).string()};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0 30px -10px black;
  box-sizing: border-box;
  color: ${props => props.theme.textColor.string()};
  padding: 2rem;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    width: 600px;
  }
`;

const Tagline = styled.div`
  em {
    background-color: ${props => props.theme.white.fade(0.7).string()};
  }
`;

export default SearchSection;
