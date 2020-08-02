import React from 'react';
import styled from 'styled-components';

import {
  HERO_GREEN,

  Hero,
  Input,
  Tagline,
} from '../../shared';

const SearchSection = () => {
  const onSubmit = () => {
    window.open(
      'https://tinyletter.com/doraboateng',
      'popupwindow',
      'scrollbars=yes,width=800,height=600',
    );
  };

  return (
    <MissionHero justify="flex-start" styling={HERO_GREEN}>
      <Message width="auto">
        <MessageSize>
          Learn about <em>Indigenous</em> and <em>African</em> heritage.
          Help <em>preserve</em> and <em>promote</em> our languages and cultures.
        </MessageSize>
      </Message>

      <FormWrapper>
        <Form
          action="https://tinyletter.com/doraboateng"
          method="post"
          target="popupwindow"
          onSubmit={onSubmit}
        >
          <Input
            icon={['far', 'envelope']}
            name="email"
            placeholder="sign up with your email"
            type="text"
          />
          <input type="hidden" value="1" name="embed" />
        </Form>
      </FormWrapper>
    </MissionHero>
  );
};

const MissionHero = styled(Hero)`
  align-items: center;
  height: auto;

  @media(min-width: ${props => props.theme.mediaQueryLarge}) {
    flex-direction: row;
    height: 40vh;
  }
`;

const Message = styled(Tagline)`
  flex-grow: 1;

  @media(min-width: ${props => props.theme.mediaQueryMedium}) {
    text-align: center;
  }

  @media(min-width: ${props => props.theme.mediaQueryLarge}) {
    max-width: 50vw;
    text-align: right;
  }

  @media(min-width: ${props => props.theme.mediaQueryExtraLarge}) {
    margin: auto;
  }
`;

const MessageSize = styled.div`
  margin: auto;
  max-width: 750px;
`;

const FormWrapper = styled.div`
  flex-grow: 1;
  padding-top: 2rem;

  @media(min-width: ${props => props.theme.mediaQueryLarge}) {
    padding: 2rem;
  }
`;

const Form = styled.form`
  text-align:center;
  width: 360px;
`;

export default SearchSection;
