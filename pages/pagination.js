import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ALL_PHOTOS_QUERY = gql`
  query ALL_PHOTOS_QUERY($skip: Int) {
    photos(orderBy: createdAt_DESC, first: 3, skip: $skip) {
      id
      title
    }
    photosConnection {
      aggregate {
        count
      }
    }
  }
`;

const Photos = () => (
  <Query query={ALL_PHOTOS_QUERY}>
    {({ data, error, loading, fetchMore }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      const { photos, photosConnection } = data;
      const hasMore = photos.length < photosConnection.aggregate.count;
      return (
        <div>
          <p>pagination</p>
          {photos.map(photo => (
            <div style={{ margin: `20px 1em` }} key={photo.id}>{photo.title}</div>
          ))}

          { hasMore && (
            <button
              type="button"
              onClick={() => fetchMore({
                variables: {
                  skip: photos.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    photos: [...prev.photos, ...fetchMoreResult.photos]
                  });
                }
              })
              }
            >
                Load More
            </button>
          )}
        </div>
      );
    }}
  </Query>
);

export default Photos;
