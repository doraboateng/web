import Color from 'color';
import { useRouter } from 'next/router';
import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Results from './Results';

interface FormProps {
  placeholder?: string;
  textColor?: Color;
}

const SearchForm = (props: FormProps) => {
  const router = useRouter();
  const [isInputActive, setIsInputActive] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [showResults, setShowResults] = React.useState<boolean>(false);
  const inputRef = React.useRef(null);
  const isActive = isInputActive || showResults;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();

    if (query !== searchQuery) {
      setSearchQuery(query);
    }

    if (query.length < 1) {
      return;
    }

    const host = 'https://www.doraboateng.com';
    const url = new URL(router.asPath, host);
    url.searchParams.set('q', query);
    const href = url.toString().replace(host, '');
    // router.push(href, href, { shallow: true });
    // eslint-disable-next-line no-restricted-globals
    history.pushState({}, '', href);

    setShowResults(true);
    inputRef.current.focus();
  };

  const handleClear = () => {
    setSearchQuery('');
    setShowResults(false);
    inputRef.current.focus();
  };

  return (
    <Wrapper isActive={isActive}>
      <Form isActive={isActive} onSubmit={handleSubmit} noValidate>
        <SearchButton {...props} isActive={isActive} onClick={handleSubmit}>
          <FontAwesomeIcon icon="search" />
        </SearchButton>

        <Input
          {...props}
          isActive={isActive}
          placeholder="try searching for &quot;love&quot;"
          ref={inputRef}
          value={searchQuery}
          onBlur={() => setIsInputActive(false)}
          onChange={event => setSearchQuery(event.target.value)}
          onFocus={() => setIsInputActive(true)}
        />

        {showResults && (
          <ClearButton {...props} isActive onClick={handleClear}>
            <FontAwesomeIcon icon="times" />
          </ClearButton>
        )}
      </Form>

      <Results query={searchQuery} visible={showResults} />
    </Wrapper>
  );
};

type SupportComponentProps = StyledProps<FormProps & {isActive: boolean}>;

const Wrapper = styled.div<{isActive: boolean}>`
  background: ${props => `
    linear-gradient(
     45deg,
      ${props.theme.purple.mix(props.theme.amber).string()}, 0.8%,
      ${props.theme.amber.string()} 20%, 99.2%,
      ${props.theme.purple.mix(props.theme.amber).string()}
    )
  `};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0 30px -10px black;
  box-sizing: border-box;
  color: ${props => props.theme.textColor.string()};
  padding: 1rem;
  transition: width ${props => props.theme.transitionDuration};
  
  @media(min-width: ${props => props.theme.mediaQuerySmall}) {
    padding: 1.6rem;
    width: ${props => (props.isActive ? '550px' : '450px')};
  }
`;

const Form = styled.form<{isActive: boolean}>`
  background-color: ${props => (props.isActive
    ? props.theme.white.fade(0.4).string()
    : 'transparent')};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  width: 100%;
  transition: background-color ${props => props.theme.transitionDuration};
`;

const getColor = (props: SupportComponentProps): string => (
  props.textColor || props.theme.textColor
).string();

const IconButton = styled.button<SupportComponentProps>`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${props => getColor(props)};
  cursor: pointer;
  display: flex;
  width: 2rem;
`;

const SearchButton = styled(IconButton)`
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  padding: .6rem .2rem .6rem 1rem;
`;

const ClearButton = styled(IconButton)`
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  padding: .6rem 1rem .6rem .2rem;
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

export default SearchForm;
