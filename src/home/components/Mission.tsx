import React from 'react';
import styled from 'styled-components';

import {
  HERO_AMBER,

  Hero,
  Input,
  Tagline,
} from '../../shared';

const MissionSection = () => {
  const onSubmit = () => {
    window.open(
      'https://tinyletter.com/doraboateng',
      'popupwindow',
      'scrollbars=yes,width=800,height=600',
    );
  };

  return (
    <MissionHero justify="flex-start" styling={HERO_AMBER}>
      <Message textAlign="center" width="auto">
        <span>
          Learn about <em>Indigenous</em> and <em>African</em> heritage.
        </span>

        <span>
          Help <em>preserve</em> and <em>promote</em> our languages and cultures.
        </span>
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

  em {
    background-color: ${props => props.theme.white.fade(0.3).string()};
  }

  @media(min-width: ${props => props.theme.mediaQueryLarge}) {
    // flex-direction: row;
    // height: 40vh;
  }
`;

const Message = styled(Tagline)`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 12px 0;
  }
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

export default MissionSection;
