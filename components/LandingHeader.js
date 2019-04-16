import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    overflow: auto;
    min-height: 60vh;
    background: lightseagreen;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
`;


export const LandingHeader = ({ children }) => (
  <Header>
    {children}
  </Header>
);
