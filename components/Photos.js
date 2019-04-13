import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_PHOTOS_QUERY = gql`
  query ALL_PHOTOS_QUERY {
    photos {
      id
      title
      thumbnail
    }
  }
`;

export const Photos = () => (
  <section style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr` }}>
    <Query query={ALL_PHOTOS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
          data.photos.map(photo => (
            <div key={photo.id}>
              <img src={photo.thumbnail} alt={photo.description} />
              <p>{photo.title}</p>
            </div>
          ))
        );
      }}
    </Query>
  </section>
);
