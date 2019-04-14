import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { PhotoCard } from './PhotoCard';

export const ALL_PHOTOS_QUERY = gql`
  query ALL_PHOTOS_QUERY {
    photos {
      id
      title
      price
      thumbnail
      description
    }
  }
`;

export const Photos = () => (
  <Query query={ALL_PHOTOS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return (
        data.photos.map(photo => (
          <PhotoCard photo={photo} key={photo.id} />
        ))
      );
    }}
  </Query>
);
