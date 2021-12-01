
import Script from 'next/script';

import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';

import '@/styles/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='https://code.iconify.design/2/2.1.0/iconify.min.js' />
      <LoadingPage />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
