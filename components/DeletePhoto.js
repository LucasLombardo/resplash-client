import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { ALL_PHOTOS_QUERY } from './Photos';

const DELETE_PHOTO_MUTATION = gql`
  mutation DELETE_PHOTO_MUTATION($id: ID!) {
    deletePhoto(id: $id) {
      id
    }
  }
`;

export const DeletePhoto = ({ id, children }) => {
  const updateCache = (cache, payload) => {
    // get the query from the cache and filter out the photo being deleted
    const data = cache.readQuery({ query: ALL_PHOTOS_QUERY });
    data.photos = data.photos.filter(photo => photo.id !== payload.data.deletePhoto.id);
    // write the updated photos query (without deleted photo)
    cache.writeQuery({ query: ALL_PHOTOS_QUERY, data });
    // route user back to index
    Router.push({ pathname: `/` });
  };


  return (
    <Mutation
      mutation={DELETE_PHOTO_MUTATION}
      variables={{ id }}
      update={updateCache}
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
