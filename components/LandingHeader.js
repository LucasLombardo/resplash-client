import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    overflow: auto;
    min-height: 80vh;
    background: lightseagreen;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    background: url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555594055/background.jpg') no-repeat center center fixed;
    background-size: cover;
    position: relative;
    overflow: hidden;
    text-align: center;
    color: white;
    h1 {
      text-shadow: 1px 2px 4px #000;
      margin-bottom: 0;
    }
    p {
      margin: 0.5em 0 1em;
      font-size: 1.3em;
      text-shadow: 1px 1px 3px #000;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 200px;
      width: 50%;
      background: white;
      transform: skewY(4deg) translateY(140px);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      height: 200px;
      width: 50%;
      background: white;
      transform: skewY(-4deg) translateY(140px);
    }
`;


export const LandingHeader = ({ children }) => (
  <Header>
    {children}
  </Header>
);
