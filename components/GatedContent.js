import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import { SignIn } from './SignIn';

export const GatedContent = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>You must be signed in to continue</p>
            <SignIn />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);
