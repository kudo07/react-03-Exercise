import axios from 'axios';
const BASE_URL = 'https://exercisedb.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchFromApi1 = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
