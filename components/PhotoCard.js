import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid black;
    img {
        width: 100%;
    }
    p {
        font-size: .8em;
        text-align: center;
    }
`;

export const PhotoCard = ({ photo }) => {
  const { title, thumbnail, description, price } = photo;
  return (
    <Card>
      <img src={thumbnail} alt={description} />
      <p>{title} ~ ${price}</p>
    </Card>
  );
};
