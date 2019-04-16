import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { User } from './User';
import { Form } from './Form';
import { Message } from './Message';

const CHANGE_PASSWORD_MUTATION = gql`
  mutation CHANGE_PASSWORD_MUTATION($email: String!, $password: String!, $newPassword: String!) {
    changePassword(
      email: $email
      password: $password
      newPassword: $newPassword
    ) {
      name
    }
  }
`;

export const ChangePassword = () => {
  const [password, setPassword] = useState(``);
  const [newPassword, setNewPassword] = useState(``);

  return (
    <User>
      {({ data }) => {
        if (!data.me) return <p>You must be signed in to change your password</p>;
        return (
          <Mutation
            mutation={CHANGE_PASSWORD_MUTATION}
            variables={{ password, newPassword, email: data.me.email }}
          >
            {(changePassword, { error, loading }) => (
              <Form
                method="post"
                onSubmit={async (e) => {
                  e.preventDefault();
                  await changePassword();
                  setNewPassword(``);
                  setPassword(``);
                  Router.push({
                    pathname: `/`,
                  });
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Sign In</h2>
                  {error && <Message error={error} />}
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

                  <label htmlFor="password">
                    New Password
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                    />
                  </label>

                  <button type="submit">Sign Up!</button>
                </fieldset>
              </Form>
            )}
          </Mutation>
        );
      }}
    </User>
  );
};
