import React from 'react';
import styled from 'styled-components';
import { ChangePassword, Container, GatedContent } from '../components';

const ChangePasswordWrapper = styled.div`
  padding-bottom: 4em;
  h1, p {
    text-align: center;
  }
  p {
    line-height: 1.4em;
  }
  img {
    position: relative;
    z-index: -1;
    width: 380px;
    display: block;
    margin: -4em auto -3em;
  }
`;

const ChangePasswordPage = () => (
  <GatedContent>
    <ChangePasswordWrapper>
      <Container>
        <h1>Change Your Password</h1>
        <img alt="Three people welcoming you." src="https://res.cloudinary.com/dov1pamgz/image/upload/v1555627257/fogg-unsubscribed-1.png" />
        <p>
        don&#39;t share your password with anyone,<br />
        resplash employees will never ask for it
        </p>
        <ChangePassword />
      </Container>
    </ChangePasswordWrapper>
  </GatedContent>
);


// https://res.cloudinary.com/dov1pamgz/image/upload/v1555627257/fogg-unsubscribed-1.png
export default ChangePasswordPage;
