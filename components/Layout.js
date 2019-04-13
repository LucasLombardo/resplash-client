import React from 'react';
import { Meta } from './Meta';
import { Nav } from './Nav';

export const Layout = ({ children }) => (
  <>
    <Meta />
    <header><Nav /></header>
    <main>{children}</main>
  </>
);
