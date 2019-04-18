import React from 'react';
import Link from 'next/link';

const imgWithClick = { cursor: `pointer` };

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
      <img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...photo}
        onClick={onClick ? handleClick : null}
      />
    </Link>
  );
  /* eslint-enable */
};
