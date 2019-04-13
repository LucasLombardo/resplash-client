import React from 'react';
import styled from 'styled-components';
import { Photos } from '../components';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

const Home = () => (
  <div>
    <h2>All Photos</h2>
    <PhotoGrid>
      <Photos />
    </PhotoGrid>
  </div>
);

export default Home;
