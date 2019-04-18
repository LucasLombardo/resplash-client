import React from 'react';
import { Container, SearchPhotos } from '../components';

const PhotosPage = ({ query }) => (
  <Container>
    {query.search ? (
      <h1>Viewing results for {query.search}</h1>
    ) : (
      <h1>Viewing all Results</h1>
    )}
    <SearchPhotos search={query.search} />
  </Container>
);

export default PhotosPage;
