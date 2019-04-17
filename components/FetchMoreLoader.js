import React, { useState, useEffect, useRef } from 'react';

export const FetchMoreLoader = ({ hasMore, fetchFunction }) => {
  const [bottom, setBottom] = useState(false);
  const loadingIcon = useRef();

  const handleScroll = async () => {
    if (!bottom && hasMore) {
      const elPosition = loadingIcon.current.offsetTop;
      const viewPosition = window.pageYOffset + window.innerHeight;
      if (elPosition < viewPosition) {
        setBottom(true);
        await fetchFunction();
        setBottom(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [bottom]);

  return (
    <div ref={loadingIcon}>
      {hasMore && <p>Loading More...</p>}
    </div>
  );
};
