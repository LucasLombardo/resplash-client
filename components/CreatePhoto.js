import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Form } from './Form';
import { ALL_PHOTOS_QUERY } from './Photos';

const CREATE_PHOTO_MUTATION = gql`
  mutation CREATE_PHOTO_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $photographer: String
    $photographerLink: String
    $thumbnail: String!
    $largeImage: String!
  ) {
    createPhoto(data: {
      title: $title
      description: $description
      price: $price
      photographer: $photographer
      photographerLink: $photographerLink
      thumbnail: $thumbnail
      largeImage: $largeImage
    }) {
      id
    }
  }
`;

class CreatePhoto extends Component {
  // eslint-disable-next-line
  state = { image: ``, title: ``, price: ``, description: ``, photographer: ``, photographerLink: ``, thumbnail: ``, largeImage: `` }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === `number` ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async (e) => {
    console.log(`uploading file...`);
    const { files } = e.target;
    if (files.length) {
      const data = new FormData();
      data.append(`file`, files[0]);
      data.append(`upload_preset`, `resplash`);

      const res = await fetch(`https://api.cloudinary.com/v1_1/dov1pamgz/image/upload`, {
        method: `POST`,
        body: data,
      });
      const file = await res.json();
      // eslint-disable-next-line
      this.setState({ thumbnail: file.secure_url, largeImage: file.eager[0].secure_url });
    } else {
      // eslint-disable-next-line
      this.setState({ thumbnail: ``, largeImage: `` });
    }
  };

  render() {
    const { title, price, description, photographer, photographerLink, thumbnail } = this.state;

    return (
      <Mutation
        mutation={CREATE_PHOTO_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_PHOTOS_QUERY }]}
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
            {error && console.error(error)}
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.uploadFile}
                />
              </label>
              {thumbnail && (
                <img src={thumbnail} alt="Upload Preview" />
              )}

              <label htmlFor="title">Title
                <input type="text" id="title" name="title" placeholder="Title of Photo" value={title} onChange={this.handleChange} />
              </label>

              <label htmlFor="price">Price
                <input type="number" id="price" name="price" placeholder={100} value={price} onChange={this.handleChange} />
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
