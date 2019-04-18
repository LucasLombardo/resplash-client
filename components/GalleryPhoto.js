import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const imgWithClick = { cursor: `pointer` };

const Image = styled.img`
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.03) translateY(-3px);
  }
`;

export const GalleryPhoto = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin };
  if (direction === `column`) {
    imgStyle.position = `absolute`;
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => {
    onClick(event, { photo, index });
  };

  /* eslint-disable */
  return (
    <Link href={{ pathname: `/photo`, query: { id: photo.id } }}>
      <a>
      <Image
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...photo}
        onClick={onClick ? handleClick : null}
        />
      </a>
    </Link>
  );
  /* eslint-enable */
};
