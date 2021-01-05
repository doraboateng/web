import React from 'react';
import styled from 'styled-components';

import { Input } from '../../shared';

const InputForm = styled.form`
  margin: auto;
  max-width: 700px;
`;

interface Props {
  action: string;
  query: string;
}

export default function Form({ action, query }: Props) {
  const placeholder = 'try searching for "love"';

  return (
    <InputForm action={action}>
      <Input
        autoFocus
        icon="search"
        initialValue={query}
        name="q"
        placeholder={placeholder}
      />
    </InputForm>
  );
}
