import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { PHOTO_CONNECTION_QUERY } from './Photos';
import { deleteCachedPhotos } from '../lib';

const DELETE_PHOTO_MUTATION = gql`
  mutation DELETE_PHOTO_MUTATION($id: ID!) {
    deletePhoto(id: $id) {
      id
    }
  }
`;

export const DeletePhoto = ({ id, children }) => {
  const onDeletePhoto = (cache) => {
    Router.push({ pathname: `/` });
    deleteCachedPhotos(cache);
  };

  return (
    <Mutation
      mutation={DELETE_PHOTO_MUTATION}
      variables={{ id }}
      refetchQueries={[{ query: PHOTO_CONNECTION_QUERY }]}
      update={onDeletePhoto}
    >
      {(deletePhoto, { error }) => (
        <button
          type="button"
          onClick={deletePhoto}
        >
          {error && console.log(error)}
          {children}
        </button>
      )}
    </Mutation>
  );
};

export default DeletePhoto;
