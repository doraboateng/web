const Privacy = () => (
  <div>Privacy</div>
);

export default Privacy;

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const data = {}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {}
  };
};
