import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import { DeletePhoto } from './DeletePhoto';

const SINGLE_PHOTO_QUERY = gql`
  query SINGLE_PHOTO_QUERY($id: ID!) {
    photo(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

export const ShowPhoto = ({ id }) => (
  <Query query={SINGLE_PHOTO_QUERY} variables={{ id }}>
    {({ error, loading, data }) => {
      if (error) return <p>error</p>;
      if (loading) return <p>Loading...</p>;
      if (!data.photo) return <p>No Photo Found for {id}</p>;
      const { photo } = data;
      return (
        <div>
          <Head>
            <title>Resplash ~ {photo.title}</title>
          </Head>
          <img src={photo.largeImage} alt={photo.title} />
          <div>
            <h2>Viewing {photo.title}</h2>
            <p>{photo.description}</p>
            <Link href={{ pathname: `/edit-photo`, query: { id: photo.id } }}><a>Edit</a></Link>
            <DeletePhoto id={photo.id}>Remove this Photo</DeletePhoto>
          </div>
        </div>
      );
    }}
  </Query>
);
