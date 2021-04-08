

export const getGif = async (category) => {
  const apikey = 'XG0I5tvJf8K9uFcXh4CwUBhime14LEt4'; 
  const gifLimit = 8
  const endpoint = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${encodeURI(category)}&limit=${gifLimit}`;
  const response = await fetch(endpoint);
  const result = await response.json();
  const gif = result.data;
  const images = gif.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  return images;
}