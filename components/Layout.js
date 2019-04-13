import React from 'react';
import styled from 'styled-components';
import { Meta } from './Meta';
import { Nav } from './Nav';
import { GlobalStyles } from '../lib';

const Main = styled.main`
  width: 80%;
  max-width: 1024px;
  min-width: 300px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => (
  <>
    <Meta />
    <GlobalStyles />
    <header><Nav /></header>
    <Main>{children}</Main>
  </>
);
