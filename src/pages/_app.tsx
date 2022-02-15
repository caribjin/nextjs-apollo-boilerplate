import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { useApollo } from '@/services/graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Layout from '@/components/layout';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  const apolloClient = useApollo({}, '');

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Layout>
              <Head>
                <title>NextJs Apollo Boilerplate</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              </Head>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ApolloProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default App;
