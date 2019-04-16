import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const Featured = styled.div`
    background: lightsteelblue;
    padding: 2em 0 4em;
    .featured {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1em;
    }
    .featured-item {
        background: white;
        border: 2px solid gray;
        height: 20vw;
    }
`;

export const LandingFeatured = () => (
  <Featured>
    <Container>
      <h2>Featured Images</h2>
      <div className="featured">
        <div className="featured-item" />
        <div className="featured-item" />
        <div className="featured-item" />
      </div>
    </Container>
  </Featured>
);
