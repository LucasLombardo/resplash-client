import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import styled from 'styled-components';
import { User } from './User';
import { ShowPhotoInfo } from './ShowPhotoInfo';

export const SINGLE_PHOTO_QUERY = gql`
  query SINGLE_PHOTO_QUERY($id: ID!) {
    photo(where: { id: $id }) {
      id
      title
      description
      largeImage
      photographer
      photographerLink
      price
      user {
        id
        permissions
      }
    }
  }
`;

const ShowPhotoWrapper = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  img {
    max-width: 100%;
    margin-bottom: 1em;
  }
`;

export const ShowPhoto = ({ id }) => {
  const [loadTimePassed, setLoadTimePassed] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoadTimePassed(true), 300);
  }, [loadTimePassed]);

  return (
    <Query query={SINGLE_PHOTO_QUERY} variables={{ id }}>
      {({ error, loading, data }) => {
        if (error) return <p>error</p>;
        if (loading) return <p>Loading...</p>;
        if (!data.photo && loadTimePassed) {
          return <p>No Photo Found for id:{id}</p>;
        }
        if (!data.photo) return <p>Loading...</p>;
        const { photo } = data;
        return (
          <User>
            {({ data }) => {
              let hasOwnership = false;
              // check if user created the photo
              if (data.me && data.me.id === photo.user.id) {
                hasOwnership = true;
              }
              // check if user is an admin
              if (data.me && data.me.permissions.includes(`ADMIN`)) {
                hasOwnership = true;
              }
              return (
                <>
                  <Head>
                    <title>Resplash ~ {photo.title}</title>
                  </Head>
                  <ShowPhotoWrapper>
                    <h1>Viewing  &quot;{photo.title}&quot;</h1>
                    <div className="content">
                      <img src={photo.largeImage} alt={photo.title} />
                      <ShowPhotoInfo photo={photo} hasOwnership={hasOwnership} />
                    </div>
                  </ShowPhotoWrapper>
                </>
              );
            }}
          </User>
        );
      }}
    </Query>
  );
};
