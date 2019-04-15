import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { User } from './User';
import { SignOut } from './SignOut';

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
    <User>
      {({ data }) => (data.me ? (
        <>
          <p>Welcome, {data.me.name}.</p>
          <Link href="/"><NavItem>Home</NavItem></Link>
          <Link href="new-photo"><NavItem>New Photo</NavItem></Link>
          <Link href="change-password"><NavItem>Change PW</NavItem></Link>
          <SignOut />
        </>
      ) : (
        <>
          <Link href="/"><NavItem>Home</NavItem></Link>
          <Link href="sign-in"><NavItem>Sign In</NavItem></Link>
          <Link href="sign-up"><NavItem>Sign Up</NavItem></Link>
        </>
      ))
      }
    </User>
  </NavBar>
);
