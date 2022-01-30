import React from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GlobalStyle from 'styles/global-style';
import TabFocusOutlineStyles from 'components/TabFocusOutlineStyles';
import Header from 'components/Header';
import Footer from 'components/Footer';

const MyApp = ({ Component, pageProps }) => {
  const { asPath } = useRouter();
  const noIndex = process.env.NEXT_PUBLIC_NO_INDEX === 'true';
  return (
    <>
      <DefaultSeo
        defaultTitle="Next.js Starter"
        titleTemplate="%s | Next.js Starter"
        description="Default description goes here"
        dangerouslySetAllPagesToNoIndex={noIndex}
        dangerouslySetAllPagesToNoFollow={noIndex}
      />
      <Header />
      <Component key={asPath} {...pageProps} />
      <Footer />
      <GlobalStyle />
      <TabFocusOutlineStyles />
    </>
  );
};

export default MyApp;
