import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43256533-5b873ba5582e6c8ca3cba67c9';

async function getData(str, page) {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });

  const response = await axios(`${BASE_URL}?${parameters}`);
  return response.data;
}
export { getData };