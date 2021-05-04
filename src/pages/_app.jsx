import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Tech Badge</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,user-scalable=no"
        />
        <meta name="description" content="Tech stack badges" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
