import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import { SignIn } from './SignIn';
import { Message } from './Message';
import { Container } from './Container';

export const GatedContent = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <Container style={{ paddingTop: `2em` }}>
            <Message>You must be signed in to continue</Message>
            <SignIn />
          </Container>
        );
      }
      return props.children;
    }}
  </Query>
);
