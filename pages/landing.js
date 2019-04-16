import React from 'react';
import styled from 'styled-components';
import { LandingHeader, LandingInfo, LandingSearch, LandingFeatured } from '../components';

const LandingWrapper = styled.div`
  h1 {
    text-align: center;
  }
`;

const Landing = () => (
  <LandingWrapper>
    <LandingHeader>
      <h1>Resplash</h1>
      <LandingSearch />
    </LandingHeader>
    <LandingInfo>
      <p>content here</p>
    </LandingInfo>
    <LandingFeatured />
  </LandingWrapper>
);

export default Landing;
