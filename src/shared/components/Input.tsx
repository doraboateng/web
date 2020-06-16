import Color from 'color';
import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon?: IconProp;
  name: string;
  padding?: string;
  placeholder?: string;
  textColor?: Color;
  type?: string;
}

const Input = (props: Props) => {
  const inputRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');

  const handleClearInput = () => {
    setValue('');
    inputRef.current.focus();
  };

  return (
    <Wrapper isActive={isActive} padding={props.padding}>
      {props.icon && (
        <SubmitButton textColor={props.textColor}>
          <FontAwesomeIcon icon={props.icon} />
        </SubmitButton>
      )}

      <TextInput
        name={props.name}
        placeholder={props.placeholder}
        ref={inputRef}
        textColor={props.textColor}
        type={props.type}
        value={value}
        onBlur={() => setIsActive(false)}
        onChange={event => setValue(event.target.value)}
        onFocus={() => setIsActive(true)}
      />

      {value.length > 0 && (
        <ClearButton onClick={handleClearInput} textColor={props.textColor}>
          <FontAwesomeIcon icon="times" />
        </ClearButton>
      )}
    </Wrapper>
  );
};

Input.defaultProps = {
  padding: '1em',
  type: 'text',
};

interface WrapperProps {
  isActive: boolean;
  padding: string;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${props => (props.isActive
    ? props.theme.white.fade(0.4).string()
    : 'transparent')};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  padding: ${props => props.padding};
  transition: background-color ${props => props.theme.transitionDuration};
  width: 100%;
`;

interface IconButtonProps {
  textColor?: Color;
}

const getColor = (
  props: StyledProps<IconButtonProps | TextInputProps>,
): string => (props.textColor || props.theme.textColor).string();

const IconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${props => getColor(props)};
  cursor: pointer;
  display: flex;
  width: 2rem;
`;

const SubmitButton = styled(IconButton)`
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  padding: .6rem .2rem .6rem 1rem;
`;

const ClearButton = styled(IconButton)`
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  padding: .6rem 1rem .6rem .2rem;
`;

interface TextInputProps {
  placeholder?: string;
  textColor?: Color;
}

const TextInput = styled.input<TextInputProps>`
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

export default Input;
