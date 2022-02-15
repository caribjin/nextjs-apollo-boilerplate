import { isServer } from '@/lib/utils';
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import React from 'react';

let _apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export const createApolloClient = (token: string) => {
  return new ApolloClient({
    ssrMode: isServer(),
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = {}, token: string) => {
  const client = _apolloClient ?? createApolloClient(token);

  if (initialState) {
    const existCache = client.extract();
    client.cache.restore({ ...existCache, ...initialState });
  }

  // for server side rendering(or generation) always create a new apollo client
  if (isServer()) {
    return client;
  }

  // create apollo client only once.
  if (!_apolloClient) {
    _apolloClient = client;
  }

  return _apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject, token: string) => {
  const store = React.useMemo(() => initializeApollo(initialState, token), [initialState, token]);
  return store;
};
