import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { PhotoCard } from './PhotoCard';
import { Message } from './Message';
import { FetchMoreLoader } from './FetchMoreLoader';

export const ALL_PHOTOS_QUERY = gql`
  query ALL_PHOTOS_QUERY($skip: Int, $first: Int) {
    photos(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      price
      thumbnail
      description
    }
  }
`;

export const PHOTO_CONNECTION_QUERY = gql`
  query PHOTO_CONNECTION_QUERY {
    photosConnection {
      aggregate {
        count
      }
    }
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

export const Photos = () => (
  <Query query={PHOTO_CONNECTION_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Message error={error} />;
      const photoCount = data.photosConnection.aggregate.count;
      return (
        <Query query={ALL_PHOTOS_QUERY} variables={{ first: 9 }}>
          {({ data, error, loading, fetchMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Message error={error} />;
            const { photos } = data;
            const hasMore = photos.length < photoCount;
            return (
              <>
                <PhotoGrid>
                  { data.photos.map(photo => (
                    <PhotoCard photo={photo} key={photo.id} />
                  ))}
                </PhotoGrid>
                <FetchMoreLoader
                  hasMore={hasMore}
                  fetchFunction={() => fetchMore({
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
                  })}
                />
              </>
            );
          }}
        </Query>
      );
    }}
  </Query>
);
