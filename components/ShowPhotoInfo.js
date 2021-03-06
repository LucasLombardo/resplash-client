import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { DeletePhoto } from './DeletePhoto';

const InfoWrapper = styled.div`
    flex: 1;
    min-width: fit-content;
    margin-bottom: 1em;
    padding: 2em;
    border: 1px solid #777;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .info-item {
        margin: 10px 0;
    }
    .options {
      margin: 1em 0 1em;
      display: flex;
      justify-content: left;
      a, button {
        background: none;
        padding: 1em;
        margin-right: 0.2em;
        border: 1px solid #777;
        font-size: 1em;
        line-height: 1em;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        }
      }
    }
`;

export const ShowPhotoInfo = ({ photo, hasOwnership }) => {
  const { description, price, photographer, photographerLink, title, id } = photo;
  return (
    <InfoWrapper>
      <h3 className="info-item">Title: {title}</h3>
      <p className="info-item"><strong>Price:</strong> ${price}</p>
      {description && <p className="info-item"><strong>Description:</strong> {description}</p>}
      {photographer
        && (
          <p className="info-item">
            <strong>Photographer: </strong>
            {photographerLink ? (
              <a className="photographer" href={photographerLink} rel="noopener noreferrer" target="_blank">{photographer}</a>
            ) : photographer}
          </p>
        )
      }
      {hasOwnership && (
        <div className="options">
          <Link href={{ pathname: `/edit-photo`, query: { id } }}><a>Edit</a></Link>
          <DeletePhoto id={id}>Remove this Photo</DeletePhoto>
        </div>
      )}
    </InfoWrapper>
  );
};
