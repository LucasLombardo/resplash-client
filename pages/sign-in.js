import React from 'react';
import styled from 'styled-components';
import { SignIn, Container } from '../components';

const SignInWrapper = styled.div`
  padding-bottom: 4em;
  h1, p {
    text-align: center;
  }
  img {
    position: relative;
    z-index: -1;
    width: 380px;
    display: block;
    margin: -4em auto -3em;
  }
`;

const SignInPage = () => (
  <SignInWrapper>
    <Container>
      <h1>Sign In</h1>
      <img alt="Three people welcoming you." src="https://res.cloudinary.com/dov1pamgz/image/upload/v1555626574/fogg-welcome-2.png" />
      <p>welcome back, friend</p>
      <SignIn />
    </Container>
  </SignInWrapper>
);

export default SignInPage;
