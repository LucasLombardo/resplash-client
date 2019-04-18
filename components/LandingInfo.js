import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const InfoWrapper = styled.section`
  background: white;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1em;
  p {
    margin: 0;
  }
  img {
    display: block;
    width: 360px;
    margin: 0 auto;
  }
  .above {
    z-index: 2;
  }
  a {
    display: block;
    margin: 2em auto;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background: lightskyblue;
    padding: 20px;
    border-radius: 50px;
    display: inline-block;
    border: none;
    transition: 0.4s ease 0s;
    &:hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
      box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    }
  }

  &::before {
    content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 50%;
  background: white;
  transform: skewY(4deg) translateY(20px);
  border-bottom: 2px solid #777;
  }
  &::after {
    content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  height: 80px;
  width: 50%;
  background: white;
  transform: skewY(-4deg) translateY(20px);
  border-bottom: 2px solid #777;
  }
`;

export const LandingInfo = ({ children }) => (
  <InfoWrapper>
    <Container className="above">
      {children}
    </Container>
  </InfoWrapper>
);
