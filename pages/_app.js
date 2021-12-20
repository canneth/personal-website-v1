
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/components/layout/Layout';
import LoadingPage from '@/components/loading-page/LoadingPage';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Canneth</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Canneth" />
        <meta name="application-name" content="Canneth" />
        <meta name="msapplication-TileColor" content="#282828" />
        <meta name="theme-color" content="#282828" />
      </Head>
      <Script src='https://code.iconify.design/2/2.1.0/iconify.min.js' />
      <LoadingPage />
      <Layout className='hidden'>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
