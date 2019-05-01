import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Form } from './Form';
import { PHOTO_CONNECTION_QUERY } from './Photos';
import { Message } from './Message';
import { deleteCachedPhotos } from '../lib';

const UPDATE_PHOTO_QUERY = gql`
  query UPDATE_PHOTO_QUERY($id: ID!) {
    photo(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
      photographer
      photographerLink 
    }
  }
`;

const UPDATE_PHOTO_MUTATION = gql`
  mutation UPDATE_PHOTO_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $lowercaseTitle: String
    $lowercaseDescription: String
    $price: Int
    $photographer: String
    $photographerLink: String
  ) {
    updatePhoto(data: {
      id: $id
      title: $title
      description: $description
      lowercaseTitle: $lowercaseTitle
      lowercaseDescription: $lowercaseDescription
      price: $price
      photographer: $photographer
      photographerLink: $photographerLink
    }) {
      id
    }
  }
`;

class UpdatePhoto extends Component {
  // eslint-disable-next-line
  state = {}

  componentDidMount() {
    setTimeout(() => this.setState({ loadTimePassed: true }), 300);
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === `number` ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description, lowercaseDescription: description.toLowerCase() });
  }

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title, lowercaseTitle: title.toLowerCase() });
  }

  updatePhoto = async (e, updateItemMutation) => {
    e.preventDefault();
    const { id } = this.props;
    const res = await updateItemMutation({
      variables: { id, ...this.state }
    });

    Router.push({
      pathname: `/photo`,
      query: { id },
    });
  };

  render() {
    const { id } = this.props;

    return (
      <Query
        query={UPDATE_PHOTO_QUERY}
        variables={{ id }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.photo && this.state.loadTimePassed) {
            return <p>No Photo Found for id:{id}</p>;
          }
          if (!data.photo) return <p>Loading...</p>;
          const { title, price, description, photographer, photographerLink } = data.photo;

          return (
            <Mutation
              mutation={UPDATE_PHOTO_MUTATION}
              variables={this.state}
              update={deleteCachedPhotos}
              refetchQueries={[{ query: PHOTO_CONNECTION_QUERY }]}
            >
              {(updatePhoto, { loading, error }) => (
                <Form onSubmit={e => this.updatePhoto(e, updatePhoto)}>
                  {error && <Message error={error} />}
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">Title
                      <input type="text" id="title" name="title" placeholder="Title of Photo" defaultValue={title} onChange={this.handleTitleChange} />
                    </label>

                    <label htmlFor="price">Price
                      <input type="number" id="price" name="price" placeholder={100} defaultValue={price} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="description">Description
                      <input type="text" id="description" name="description" placeholder="Description" defaultValue={description} onChange={this.handleDescriptionChange} />
                    </label>

                    <label htmlFor="photographer">Photographer
                      <input type="text" id="photographer" name="photographer" placeholder="Photographer Name" defaultValue={photographer} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="photographerLink">Link to Photographer&apos;s Website
                      <input type="text" id="photographerLink" name="photographerLink" placeholder="https://example.com" defaultValue={photographerLink} onChange={this.handleChange} />
                    </label>

                    <button type="submit">Save Changes</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export { UpdatePhoto };
