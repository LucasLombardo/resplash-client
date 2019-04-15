import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signOut {
            message
        }
    }
`;

export const SignOut = () => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(signOut, { error }) => {
      if (error) console.log(error);
      return (
        <button type="button" onClick={signOut}>
        Sign Out
        </button>
      );
    }}
  </Mutation>
);
