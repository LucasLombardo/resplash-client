import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const Search = styled.div`
  padding-bottom: 2em;
  .search-container{
    width: 60vw;
    min-width: 200px;
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }

  input#search-bar{
    margin: 0 auto;
    width: 100%;
    height: 45px;
    border-radius: 20px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #D0CFCE;
    outline: none;
    &:focus{
      border: 1px solid #008ABF;
      transition: 0.35s ease;
      color: #008ABF;
      &::-webkit-input-placeholder{
        transition: opacity 0.45s ease; 
        opacity: 0;
      }
      &::-moz-placeholder {
        transition: opacity 0.45s ease; 
        opacity: 0;
      }
      &:-ms-placeholder {
      transition: opacity 0.45s ease; 
      opacity: 0;
      }    
    }
  }
  .search-icon{
    position: relative;
    float: right;
    width: 75px;
    height: 75px;
    top: -62px;
    right: -5px;
  }
`;

export const LandingSearch = () => {
  const [search, setSearch] = useState(``);

  const handleSearch = (e) => {
    e.preventDefault();
    Router.push({
      pathname: `/photos`,
      query: { search }
    });
  };

  return (
    <Search>
      <form className="search-container" onSubmit={handleSearch}>
        <input type="text" id="search-bar" placeholder="" value={search} onChange={e => setSearch(e.target.value)} />
        <a href="#" onClick={handleSearch}><img className="search-icon" alt="search" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
      </form>
    </Search>
  );
};
