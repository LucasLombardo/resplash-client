import React from 'react';
import { ShowPhoto } from '../components';

const Photo = ({ query }) => (
  <>
    <h2>Single Photo</h2>
    <ShowPhoto id={query.id} />
  </>
);

export default Photo;
