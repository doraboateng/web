import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  html, body, #__next, a, div, header, input, label, p, section {
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    font-weight: ${props => props.theme.fontWeightNormal};
    line-height: ${props => props.theme.lineHeight};
  }

  a {
    border-bottom: 2px solid ${props => props.theme.black.string()};
    color: ${props => props.theme.black.string()};
    text-decoration: none;
    transition: border-bottom-width ${props => props.theme.transitionDuration};

    &:hover {
      border-bottom-width: 4px;
    }
  }

  em {
    background-color: ${props => props.theme.white.fade(0.9).string()};
    border-radius: ${props => props.theme.borderRadius};
    font-size: 1.2em;
    font-style: normal;
    font-weight: normal;
    padding: 1px 5px;
  }

  input {
    border-radius: 0;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export default GlobalStyle;
