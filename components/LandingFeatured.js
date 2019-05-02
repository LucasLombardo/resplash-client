import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from './Container';

const Featured = styled.div`
    background: linear-gradient(
      rgba(255,255,255, 0.8), 
      rgba(255,255,255, 0.8)
    ), url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555594055/background.jpg') no-repeat center center fixed;
    background-size: cover;
    padding: 2em 0 4em;
    border-bottom: 2px solid #777;
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
      background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555637950/resplash/otgjtvgahn5xm4muoeyd.jpg') no-repeat center;
      background-size: cover;
      cursor: pointer;
      transition: 0.2s ease;
      &:nth-of-type(2) {
        background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555641985/resplash/fpyoaurluq0stc3kv1xk.jpg') no-repeat center;
      }
      &:nth-of-type(1) {
        background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1556743048/resplash/fr3o5es05wkqwwjnms8n.jpg') no-repeat center;
      }
      &:hover {
        transform: scale(1.03) translateY(-3px);
      }
    }
`;

export const LandingFeatured = () => (
  <Featured>
    <Container>
      <h2>Featured Images</h2>
      <div className="featured">
        <Link href={{ pathname: `/photo`, query: { id: `cjv5omvz400cb07309592c0lb` } }}>
          {/* Valley */}
          <div className="featured-item" />
        </Link>
        <Link href={{ pathname: `/photo`, query: { id: `cjunh35lp03wt0767mzrzp69k` } }}>
          {/* Paint Splat */}
          <div className="featured-item" />
        </Link>
        <Link href={{ pathname: `/photo`, query: { id: `cjuneoykb03su0767yntkbc73` } }}>
          {/* Sitting Woman */}
          <div className="featured-item" />
        </Link>
      </div>
    </Container>
  </Featured>
);
