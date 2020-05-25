import Color from 'color';
import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormProps {
  placeholder?: string;
  textColor?: Color;
}

const SearchForm = (props: FormProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  return (
    <Wrapper isActive={isActive}>
      <Icon {...props} isActive={isActive}>
        <FontAwesomeIcon icon="search" />
      </Icon>

      <Input
        {...props}
        isActive={isActive}
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
      />
    </Wrapper>
  );
};

type SupportComponentProps = StyledProps<FormProps & {isActive: boolean}>;

const Wrapper = styled.div<{isActive: boolean}>`
  background-color: ${props => props.isActive ? 'white' : 'transparent'};
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
