import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient: ApolloClient<{}> | null = null;

function create(initialState: any) {
  const isServer = !process.browser;
  return new ApolloClient({
    connectToDevTools: !isServer,
    ssrMode: isServer,
    link: new HttpLink({
      uri: 'https://nextpress.local/graphql',
      credentials: 'same-origin',
      fetch: isServer && (fetch as any),
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState?: any) {
  if (typeof window === 'undefined') {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
