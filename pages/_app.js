import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { Layout } from '../components';
import { withData } from '../lib';

class CustomApp extends App {
  // fetch the data before rendering the pages, necessary for SSR
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    // if the component being rendered has props, surface the
    // page props from the page context
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    // exposes the query to the client
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(CustomApp);
