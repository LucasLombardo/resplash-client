import React from 'react';
import { Meta } from './Meta';
import { Nav } from './Nav';
import { GlobalStyles } from '../lib';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <GlobalStyles />
    <header><Nav /></header>
    <main>{children}</main>
  </>
);
