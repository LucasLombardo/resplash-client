import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Form } from './Form';
import { PHOTO_CONNECTION_QUERY } from './Photos';
import { Message } from './Message';
import { deleteCachedPhotos } from '../lib';

const CREATE_PHOTO_MUTATION = gql`
  mutation CREATE_PHOTO_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $photographer: String
    $photographerLink: String
    $thumbnail: String!
    $largeImage: String!
    $width: Int!
    $height: Int!
  ) {
    createPhoto(data: {
      title: $title
      description: $description
      price: $price
      photographer: $photographer
      photographerLink: $photographerLink
      thumbnail: $thumbnail
      largeImage: $largeImage
      height: $height
      width: $width
    }) {
      id
    }
  }
`;

class CreatePhoto extends Component {
  // eslint-disable-next-line
  state = { image: ``, uploading: false, title: ``, price: ``, description: ``, photographer: ``, photographerLink: ``, thumbnail: ``, largeImage: `` }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === `number` ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async (e) => {
    const { files } = e.target;
    if (files.length) {
      const data = new FormData();
      data.append(`file`, files[0]);
      data.append(`upload_preset`, `resplash`);
      this.setState({ uploading: true });
      const res = await fetch(`https://api.cloudinary.com/v1_1/dov1pamgz/image/upload`, {
        method: `POST`,
        body: data,
      });
      const file = await res.json();
      // eslint-disable-next-line
      this.setState({ thumbnail: file.secure_url, largeImage: file.eager[0].secure_url, uploading: false, height: file.height, width: file.width });
    } else {
      // eslint-disable-next-line
      this.setState({ thumbnail: ``, largeImage: `` });
    }
  };

  render() {
    const {
      title, price, description, photographer,
      photographerLink, thumbnail, uploading
    } = this.state;

    return (
      <Mutation
        mutation={CREATE_PHOTO_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: PHOTO_CONNECTION_QUERY }]}
        update={deleteCachedPhotos}
      >
        {(createPhoto, { loading, error }) => (
          <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await createPhoto();
            Router.push({
              pathname: `/`,
            });
          }}
          >
            {error && <Message error={error} />}
            <fieldset disabled={loading || uploading} aria-busy={loading || uploading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  accept="image/*"
                  required
                  onChange={this.uploadFile}
                />
              </label>
              {thumbnail && (
                <img src={thumbnail} alt="Upload Preview" />
              )}

              <label htmlFor="title">Title
                <input type="text" id="title" name="title" placeholder="Title of Photo" value={title} onChange={this.handleChange} required />
              </label>

              <label htmlFor="price">Price
                <input type="number" id="price" name="price" placeholder={100} value={price} onChange={this.handleChange} required />
              </label>

              <label htmlFor="description">Description
                <input type="text" id="description" name="description" placeholder="Description" value={description} onChange={this.handleChange} />
              </label>

              <label htmlFor="photographer">Photographer
                <input type="text" id="photographer" name="photographer" placeholder="Photographer Name" value={photographer} onChange={this.handleChange} />
              </label>

              <label htmlFor="photographerLink">Link to Photographer&apos;s Website
                <input type="text" id="photographerLink" name="photographerLink" placeholder="https://example.com" value={photographerLink} onChange={this.handleChange} />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export { CreatePhoto };
