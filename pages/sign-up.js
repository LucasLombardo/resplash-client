import React from 'react';
import styled from 'styled-components';
import { SignUp, Container } from '../components';

const SignUpWrapper = styled.div`
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

const SignUpPage = () => (
  <SignUpWrapper>
    <Container>
      <h1>Sign up for an Account</h1>
      <img alt="Welcoming man opening door" src="https://res.cloudinary.com/dov1pamgz/image/upload/v1555626068/fogg-welcome-3.png" />
      <p>welcome to Resplash, you will fit right in here</p>
      <SignUp />
    </Container>
  </SignUpWrapper>
);

export default SignUpPage;
