const API_KEY = '43101608-e18c8f2edd568649ba3f552e0';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}