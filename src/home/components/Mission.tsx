import React from 'react';
import styled from 'styled-components';

import Tagline from './Tagline';
import { Hero, HERO_GREEN, Input } from '../../shared';

const SearchSection = () => {
  const onSubmit = () => {
    window.open('https://tinyletter.com/doraboateng', 'popupwindow', 'scrollbars=yes,width=800,height=600');
  }

  return (
    <Hero height="45vh" justify="flex-start" styling={HERO_GREEN}>
      <Row>
        <Tagline textAlign="right" width="600px">
          Learn about <em>Indigenous</em> and <em>African</em> heritage.
          Help <em>preserve</em> and <em>promote</em> our languages and cultures.
        </Tagline>
  
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
              placeholder="enter your email"
              type="text"
            />
            <input type="hidden" value="1" name="embed" />
          </Form>
        </FormWrapper>
      </Row>
    </Hero>
  );
}

const Row = styled.div`
  align-items: center;
  display: flex;
`;

const FormWrapper = styled.div`
`;

const Form = styled.form`
  text-align:center;
`;

export default SearchSection;
