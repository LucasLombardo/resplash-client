import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const Featured = styled.div`
    background: linear-gradient(
      rgba(176, 196, 222, 0.45), 
      rgba(176, 196, 222, 0.45)
    ), url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555602146/ep_naturalwhite.png');
    padding: 2em 0 4em;
    h2 {
      text-align: center;
      font-size: 2em;
      text-transform: uppercase;
      margin: 1.5em 0 0.5em;
    }
    .featured {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1em;
    }
    .featured-item {
      background: white;
      border: 2px solid gray;
      height: 20vw;
      background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1547317062/sample.jpg') no-repeat center;
      background-size: cover;
      &:nth-of-type(2) {
        background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/road-to-zion-by-tyson-dudley.jpg') no-repeat center;
      }
      &:nth-of-type(1) {
        background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555209794/iceland-right.jpg') no-repeat center;
      }
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
