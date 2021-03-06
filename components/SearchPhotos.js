import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Gallery from "react-photo-gallery";
import { GalleryPhoto } from './GalleryPhoto';
import { Message } from './Message';
import { FetchMoreLoader } from './FetchMoreLoader';
/* eslint no-shadow: 0 react/destructuring-assignment: 0 */

export const SEARCH_PHOTOS_QUERY = gql`
  query SEARCH_PHOTOS_QUERY($skip: Int, $first: Int, $search: String) {
    photos(orderBy: createdAt_DESC, first: $first, skip: $skip, where: { OR: [{ lowercaseTitle_contains: $search }, { lowercaseDescription_contains: $search }] }) {
      id
      title
      price
      thumbnail
      description
      height
      width
    }
  }
`;

export const SEARCH_PHOTO_CONNECTION_QUERY = gql`
  query SEARCH_PHOTO_CONNECTION_QUERY($search: String) {
    photosConnection(where: { OR: [{ lowercaseTitle_contains: $search }, { lowercaseDescription_contains: $search }] }) {
      aggregate {
        count
      }
    }
  }
`;

export const SearchPhotos = (props) => {
  const search = props.search ? props.search.toLowerCase() : ``;
  return (
    <Query query={SEARCH_PHOTO_CONNECTION_QUERY} variables={{ search }}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Message error={error} />;
        const photoCount = data.photosConnection.aggregate.count;
        return (
          <Query query={SEARCH_PHOTOS_QUERY} variables={{ first: 12, search }}>
            {({ data, error, loading, fetchMore }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <Message error={error} />;
              const { photos } = data;
              const hasMore = photos.length < photoCount;
              // eslint-disable-next-line
              const displayPhotos = photos.map(({ height, width, thumbnail, description, id }, i) => ({
                height,
                width,
                id,
                alt: description,
                src: thumbnail,
              }));
              return (
                <>
                  <Gallery photos={displayPhotos} ImageComponent={GalleryPhoto} margin={6} />
                  <FetchMoreLoader
                    hasMore={hasMore}
                    fetchFunction={() => fetchMore({
                      variables: {
                        skip: photos.length,
                        first: 15,
                        search
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
};
