import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LandingHeader, LandingInfo, LandingSearch, LandingFeatured, Photos, Container } from '../components';

const LandingWrapper = styled.div`
  .all-photos {
    padding: 2em 0;
    h2 {
      text-align: center;
      font-size: 2em;
      text-transform: uppercase;
      margin-bottom: 1.4em;
    }
  }
`;

const Landing = () => (
  <LandingWrapper>
    <LandingHeader>
      <h1>The best stock photos on the web.</h1>
      <p>search over N photos</p>
      <LandingSearch />
    </LandingHeader>
    <LandingInfo>
      <h2>One stop shopping for all of your stock image needs</h2>
      <p>high quality, royalty free images</p>
      <img src="https://res.cloudinary.com/dov1pamgz/image/upload/v1555596385/fogg-delivery-1.png" alt="" />
      <p>hassle free shopping experience with no subscriptions or minimum purchases</p>
      <Link href="sign-up"><a>Sign Up Now</a></Link>
    </LandingInfo>
    <LandingFeatured />
    <Container className="all-photos">
      <h2>All Photos</h2>
      <Photos />
    </Container>
  </LandingWrapper>
);

export default Landing;
