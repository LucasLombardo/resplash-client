import React from 'react';
import styled from 'styled-components';
import { CreatePhoto } from '../components';

const NewPhotoWrapper = styled.div`
  h2, p {
    text-align: center;
  }
`;

const NewPhoto = () => (
  <NewPhotoWrapper>
    <h2>Upload a photo to sell</h2>
    <p>Post your photo and information below to list your photo in the store.</p>
    <CreatePhoto />
  </NewPhotoWrapper>
);

export default NewPhoto;
