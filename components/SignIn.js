import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Form } from './Form';
import { CURRENT_USER_QUERY } from './User';
import { Message } from './Message';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signIn(
      email: $email
      password: $password
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
            setTimeout(() => {
              setEmail(``);
              setPassword(``);
            }, 100);
            await signIn();
            setEmail(``);
            setPassword(``);
            Router.push({
              pathname: `/`,
            });
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Sign In</h2>
            {error && <Message error={error} />}
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

            <button type="submit">Sign In!</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
};
