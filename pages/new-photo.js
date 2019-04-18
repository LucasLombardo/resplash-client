import React from 'react';
import styled from 'styled-components';
import { CreatePhoto } from '../components';
import { GatedContent } from '../components/GatedContent';

const NewPhotoWrapper = styled.div`
  padding-bottom: 4em;
  h1, p {
    text-align: center;
  }
  p {
    line-height: 1.4em;
  }
  .illustration {
    position: relative;
    z-index: -1;
    width: 320px;
    display: block;
    margin: -4em auto -3em;
  }
`;

const NewPhoto = () => (
  <GatedContent>
    <NewPhotoWrapper>
      <h1>Upload a photo to sell</h1>
      <img className="illustration" alt="Business deal between two people" src="https://res.cloudinary.com/dov1pamgz/image/upload/v1555627862/fogg-payment-processed-1.png" />
      <p>
        we will keep 100% of the sales, saving you from<br />
        the burden of having to process your earnings
      </p>
      <CreatePhoto />
    </NewPhotoWrapper>
  </GatedContent>
);

export default NewPhoto;
