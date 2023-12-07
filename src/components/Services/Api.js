import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=38240980-4df59bc1d913ce2e5ea997aeb&q=';

// Створили функцію для отримання даних
export const fetchImages = async configParams => {
  const {
    data: { hits },
  } = await axios.get('', {
    params: {
      per_page: 12,
      ...configParams,
    },
  });
  return hits;
};
