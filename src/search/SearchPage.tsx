import { useRouter } from 'next/router';
import React from 'react';

import Form from './components/Form';
import Results from './components/Results';
import Title from './components/Title';
import { Footer, Header, HeaderSpacer, Section } from '../shared';

export default function SearchPage() {
  const router = useRouter();
  const locale = String(router.query.locale || 'en');
  const query = String(router.query.q || '').trim();
  const searchAction = `/${locale}/search`;

  return (
    <>
      <Header />
      <HeaderSpacer />

      {!query && (
        <Section>
          <Title />
        </Section>
      )}

      <Section>
        <Form action={searchAction} query={query} />
      </Section>

      {query && (
        <Section>
          <Results locale={locale} query={query} />
        </Section>
      )}
      <Footer />
    </>
  );
}
