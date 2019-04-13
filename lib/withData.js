import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';

// function to create the Apollo client
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === `development` ? endpoint : prodEndpoint,
    // include credentials on every request
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: `include`,
        },
        headers,
      });
    },
  });
}

// use withApollo higher order component to support SSR with next.js
export const withData = withApollo(createClient);
