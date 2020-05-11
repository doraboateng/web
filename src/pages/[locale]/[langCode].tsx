import { GetServerSideProps } from 'next';
import { LanguagePageProps } from '../../language/types';

const Language = ({ code, name }: LanguagePageProps) => (
  <div>{`"${name}" language page (${code})`}</div>
);

export default Language;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      code: params.langCode,
      name: 'Twi',
      localizedName: 'Twi',
    }
  }
}
