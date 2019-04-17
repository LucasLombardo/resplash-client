import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { PhotoCard } from './PhotoCard';
import { Message } from './Message';

export const ALL_PHOTOS_QUERY = gql`
  query ALL_PHOTOS_QUERY($skip: Int, $first: Int) {
    photos(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      price
      thumbnail
      description
    }
    photosConnection {
      aggregate {
        count
      }
    }
  }
`;


export const Photos = () => (
  <Query query={ALL_PHOTOS_QUERY} variables={{ first: 6 }}>
    {({ data, error, loading, fetchMore }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Message error={error} />;
      const { photos, photosConnection } = data;
      const hasMore = photos.length < photosConnection.aggregate.count;
      return (
        <>
          { data.photos.map(photo => (
            <PhotoCard photo={photo} key={photo.id} />
          ))}
          { hasMore && (
            <button
              type="button"
              onClick={() => fetchMore({
                variables: {
                  skip: photos.length,
                  first: 3
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
        </>
      );
    }}
  </Query>
);
