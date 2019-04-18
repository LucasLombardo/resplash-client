import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 3em;
    input {
      min-width: 60vh;
      padding: 1em;
      background: white;
      border: 2px solid gray;
      height: 40px;
      border-radius: 20px;
    }
`;

export const LandingSearch = () => (
  <Search>
    <input type="text" />
  </Search>
);
