import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const FetchMoreLoader = ({ hasMore, fetchFunction }) => {
  const [bottom, setBottom] = useState(false);
  const loadingIcon = useRef();

  const handleScroll = async () => {
    if (!bottom && hasMore) {
      const elPosition = loadingIcon.current.offsetTop + 15;
      const viewPosition = window.pageYOffset + window.innerHeight;
      if (elPosition < viewPosition) {
        setBottom(true);
        await fetchFunction();
        setBottom(false);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [bottom]);

  return (
    <Centered ref={loadingIcon}>
      {hasMore && (
        <ReactLoading type="bars" color="#666" height="60px" width="60px" />
      )}
    </Centered>
  );
};
