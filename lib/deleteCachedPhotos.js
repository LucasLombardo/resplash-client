// helper function to delete all photos in our cache
export const deleteCachedPhotos = (cache) => {
  // loop through data in the cache and delete any items that start with "Photo"
  Object.keys(cache.data.data).forEach(key => key.match(/^Photo/) && cache.data.delete(key));
};
