import Color from 'color';
import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Results from './Results';

interface FormProps {
  placeholder?: string;
  textColor?: Color;
}

const SearchForm = (props: FormProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [showResults, setShowResults] = React.useState<boolean>(false);

  const handler = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchQuery.length  < 1) {
      return;
    }

    setShowResults(true);
  };

  return (
    <Wrapper isActive={isActive}>
       <Form isActive={isActive} onSubmit={handler} noValidate>
        <Icon {...props} isActive={isActive}>
          <FontAwesomeIcon icon="search" />
        </Icon>

        <Input
          {...props}
          isActive={isActive}
          placeholder="try searching for &quot;love&quot;"
          value={searchQuery}
          onBlur={() => setIsActive(false)}
          onChange={(event) => setSearchQuery(event.target.value)}
          onFocus={() => setIsActive(true)}
        />

        {showResults && (
          <Results query={searchQuery} />
        )}
      </Form>
    </Wrapper>
  );
};

type SupportComponentProps = StyledProps<FormProps & {isActive: boolean}>;

const Wrapper = styled.div<{isActive: boolean}>`
  background: ${props => `
    linear-gradient(
      217deg,
      ${props.theme.amber.fade(0.8).string()},
      ${props.theme.amber.string()} 70%),
    linear-gradient(
      127deg,
      ${props.theme.green.mix(props.theme.amber).fade(0.8).string()},
      ${props.theme.green.mix(props.theme.amber).string()}),
    linear-gradient(
      336deg,
      ${props.theme.purple.fade(0.8).string()},
      ${props.theme.purple.string()})
  `};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0 30px -10px black;
  box-sizing: border-box;
  color: ${props => props.theme.textColor.string()};
  padding: 1rem;
  transition: width ${props => props.theme.transitionDuration};
  
  @media(min-width: ${props => props.theme.mediaQuerySmall}) {
    padding: 1.6rem;
    width: ${props => props.isActive ? '100%' : '400px'};
  }
`;

const Form = styled.form<{isActive: boolean}>`
  background-color: ${props => props.isActive
    ? props.theme.white.fade(0.4).string()
    : 'transparent'};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  width: 100%;
  transition: background-color ${props => props.theme.transitionDuration};
`;

const Icon = styled.div<SupportComponentProps>`
  border-bottom: 2px solid ${props => getColor(props)};
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  padding: .6rem .2rem .6rem 1rem;
  width: 1rem;
`;

const Input = styled.input<SupportComponentProps>`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => getColor(props)};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  box-sizing: border-box;
  color: ${props => getColor(props)};
  flex-grow: 1;
  font-size: 1.2rem;
  min-width: 100px;
  padding: .8rem .6rem;

  &:placeholder {
    color: ${props => getColor(props)};
  }
`;

const getColor = (props: SupportComponentProps): string =>
  (props.textColor || props.theme.textColor).string();

export default SearchForm;
