import React from 'react';
import styled from 'styled-components';

const LandingPage = () => (
  <Background>
    <Wrapper>
      <Title>Dora Boateng</Title>

      <Paragraph>
        Lookup <Emphasis>proverbs</Emphasis>, <Emphasis>stories</Emphasis>,
        and other <Emphasis>gems from  indigenous cultures</Emphasis>&nbsp;
        around the world. Help <Emphasis>preserve</Emphasis> and&nbsp;
        <Emphasis>promote</Emphasis> our identities, and re-connect with our
        heritage.
      </Paragraph>

      <Notice>
        We&apos;re currently working on new features... stay tuned!
      </Notice>

      <div style={{ display: 'none' }}>
        {`Version: ${process.env.VERSION}`}
        {`API: ${process.env.API_URL}`}
        {`SDSN: ${process.env.SENTRY_DSN}`}
      </div>
    </Wrapper>
  </Background>
);

export default LandingPage;

const bg = '2d367c83ace8e17b5d262944c7044aee.jpg';

const Background = styled.div`
  background: center center no-repeat url('/assets/images/bg/${bg}');
  background-size: cover;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, .5);
  color: white;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;

  @media (max-width: 700px) {
    font-size: 2em;
  }
`;

const Notice = styled.div`
  background-color: rgba(0, 0, 0, .4);
  border-radius: ${props => props.theme.borderRadius};
  display: inline;
  margin: 0 auto;
  padding: 1em 2em;

  @media (max-width: 700px) {
    margin: 0 1em;
  }
`;

const Paragraph = styled.div`
  margin: 0 auto;
  max-width: 700px;

  @media (max-width: 700px) {
    margin: 0 1em;
  }
`;

const Emphasis = styled.em`
  background-color: ${props => props.theme.accentColor.fade(0.75).string()};
  border-radius: ${props => props.theme.borderRadius};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeightBold};
  padding: 1px 5px;
`;
