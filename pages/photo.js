import React from 'react';
import { ShowPhoto, Container } from '../components';

const Photo = ({ query }) => (
  <Container>
    <h2>Single Photo</h2>
    <ShowPhoto id={query.id} />
  </Container>
);

export default Photo;
