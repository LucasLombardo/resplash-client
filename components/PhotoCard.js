import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
    border: 1px solid black;
    img {
        width: 100%;
    }
    a {
        color: black;
        text-decoration: none;
        font-size: .8em;
        text-align: center;
        display: block;
        padding: 0.6em 0.2em 0.8em;
    }
`;

export const PhotoCard = ({ photo }) => {
  const { title, thumbnail, description, price } = photo;
  return (
    <Card>
      <img src={thumbnail} alt={description} />
      <Link href={{ pathname: `/photo`, query: { id: photo.id } }}>
        <a>{title} ~ ${price}</a>
      </Link>
    </Card>
  );
};
