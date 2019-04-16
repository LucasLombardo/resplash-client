import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.section`
  height: 60vh;
  background: lightskyblue;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingInfo = ({ children }) => (
  <InfoWrapper>
    {children}
  </InfoWrapper>
);
