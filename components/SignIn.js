import React, { Component, useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form } from './Form';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION {
    signIn(
      email: "lucasl@bu.edu"
      password: "pw"
    ) {
      name
    }
  }
`;

export const SignIn = () => {
  const [password, setPassword] = useState(``);
  const [email, setEmail] = useState(``);

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={{ password, email }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signIn, { error, loading }) => (
        <Form
          method="post"
          onSubmit={async (e) => {
            e.preventDefault();
            await signIn();
            setEmail(``);
            setPassword(``);
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Sign In</h2>
            {error && console.log(`error`, error)}
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>

            <button type="submit">Sign Up!</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
};
