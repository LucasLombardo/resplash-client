import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Form } from './Form';

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
  state = { title: ``, price: ``, description: ``, photographer: ``, photographerLink: ``, thumbnail: `ddd`, largeImage: `` }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === `number` ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    const { title, price, description, photographer, photographerLink } = this.state;

    return (
      <Mutation mutation={CREATE_PHOTO_MUTATION} variables={this.state}>
        {(createPhoto, { loading, error }) => (
          <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await createPhoto();
            console.log(res);
            Router.push({
              pathname: `/`,
            });
          }}
          >
            {error && console.error(error)}
            <fieldset disabled={loading} aria-busy={loading}>
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
