import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'emotion-theming';
import { themes } from '@nextpress/common';

import withApolloClient from '../lib/with-apollo-client';

interface IMyAppProps {
  apolloClient: any;
}

class MyApp extends App<IMyAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={themes.light}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
