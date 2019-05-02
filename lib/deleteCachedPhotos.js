// helper function to delete all photos in our cache
/* eslint no-unused-expressions: 0 */
export const deleteCachedPhotos = (cache) => {
  // loop through data in the cache and delete any items that start with "Photo"
  Object.keys(cache.data.data).forEach((key) => {
    key.match(/photosConnection/) && cache.data.delete(key);
    key.match(/^Photo/) && cache.data.delete(key);
  });
};
