import React from 'react';
import styled from 'styled-components';
import { UpdatePhoto } from '../components';

const EditPhotoWrapper = styled.div`
  h2 {
    text-align: center;
  }
`;

const EditPhoto = ({ query }) => (
  <EditPhotoWrapper>
    <h2>Edit this photo</h2>
    <UpdatePhoto id={query.id} />
  </EditPhotoWrapper>
);

export default EditPhoto;
