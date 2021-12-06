
import Script from 'next/script';

import Layout from '@/components/common/Layout';
import LoadingPage from '@/components/loading-page/LoadingPage';

import '@/styles/global.css'

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
