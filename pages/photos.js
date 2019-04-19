import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container, SearchPhotos, SearchPhotosBar } from '../components';

const PhotosWrapper = styled.div`
  .search-info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-again {
    text-align: center;
    h1 {
      margin-bottom: 0.5em;
    }
  }
  .clear {
    height: fit-content;
    top: 0;
    margin-left: 2em;
    font-size: 0.9em;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background: lightcoral;
    padding: 10px;
    border-radius: 30px;
    border: none;
    transition: 0.4s ease 0s;
    &:hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4);
      box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    }
  }
`;

const PhotosPage = ({ query }) => (
  <PhotosWrapper>
    <Container>
      {query.search ? (
        <div className="search-info">
          <h1>Viewing results for &quot;{query.search}&quot;</h1>
          <Link href="photos"><a className="clear">Clear Search</a></Link>
        </div>
      ) : (
        <div className="search-again">
          <h1>Viewing all Photos</h1>
          <p>Search Photos:</p>
          <SearchPhotosBar />
        </div>
      )}
      <SearchPhotos search={query.search} />
    </Container>
  </PhotosWrapper>
);

export default PhotosPage;
