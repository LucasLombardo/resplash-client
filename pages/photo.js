import React from 'react';
import { ShowPhoto, Container } from '../components';

const Photo = ({ query }) => (
  <Container>
    <ShowPhoto id={query.id} />
  </Container>
);

export default Photo;
