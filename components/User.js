import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    me {
        id
        email
        name
        permissions
    }
  }
`;

export const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);