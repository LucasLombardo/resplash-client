import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
`;

const NavItem = styled.a`
    margin: .8em 2em 1em;
    padding: 3px;
    border: 1px solid rgba(0,0,0,0);
    color: black;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      border: 1px solid black;
    }
`;

export const Nav = () => (
  <NavBar>
    <Link href=""><NavItem>Home</NavItem></Link>
    <Link href="new-photo"><NavItem>New Photo</NavItem></Link>
  </NavBar>
);
