import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const TitleWrapper = styled.div`
  text-align: center;
`;

const Highlight = styled.span`
  color: ${props => props.theme.purple.string()};
`;

export default function Title() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      backDelay: 2000,
      cursorChar: '',
      loop: true,
      shuffle: true,
      stringsElement: '#typed-strings',
      typeSpeed: 30,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <div id="typed-strings">
        <span>languages</span>
        <span>poems</span>
        <span>proverbs</span>
        <span>sayings</span>
        <span>songs</span>
        <span>words</span>
      </div>

      <TitleWrapper>
        <h1>Lookup <Highlight id="typed" ref={typedRef} /></h1>
        <div>from Indigenous and African cultures using the search input below &#8628;</div>
      </TitleWrapper>
    </>
  );
}
