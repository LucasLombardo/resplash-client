import React, { Component } from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import Router from 'next/router';

// eslint-disable-next-line
class CreatePhoto extends Component {
  render() {
    return (
      <form>
        <label htmlFor="title">Title
          <input type="text" id="title" name="title" placeholder="Title of Photo" />
        </label>

        <label htmlFor="price">Price
          <input type="number" id="price" name="price" placeholder={100} />
        </label>

        <label htmlFor="description">Description
          <input type="text" id="description" name="description" placeholder="Description" />
        </label>

        <label htmlFor="photographer">Photographer
          <input type="text" id="photographer" name="photographer" placeholder="Photographer Name" />
        </label>

        <label htmlFor="photographerLink">Link to Photographer&apos;s Website
          <input type="text" id="photographerLink" name="photographerLink" placeholder="https://example.com" />
        </label>
      </form>
    );
  }
}

export { CreatePhoto };
