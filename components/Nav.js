import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { User } from './User';
import { SignOut } from './SignOut';
import { Container } from './Container';

const NavBar = styled.nav`
  border-bottom: 1px solid black;
  background: linear-gradient(
      rgba(255,255,255, 0.8), 
      rgba(255,255,255, 0.8)
    ),url('https://res.cloudinary.com/dov1pamgz/image/upload/v1555632179/gravel.png');
  .nav-container {
    display: flex;
    justify-content: space-between;
  }
  a, button {
    background: none;
    border: none;
    display: block;
    margin: .8em 0.5em 1em;
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
  }
`;

export const Nav = () => (
  <NavBar>
    <Container className="nav-container">
      <User>
        {({ data }) => (data.me ? (
          <>
            <Link href="/"><a>Home</a></Link>
            <Link href="new-photo"><a>New Photo</a></Link>
            <Link href="change-password"><a>Change PW</a></Link>
            <SignOut />
          </>
        ) : (
          <>
            <Link href="/"><a>Home</a></Link>
            <Link href="sign-in"><a>Sign In</a></Link>
            <Link href="sign-up"><a>Sign Up</a></Link>
          </>
        ))
        }
      </User>
    </Container>
  </NavBar>
);
