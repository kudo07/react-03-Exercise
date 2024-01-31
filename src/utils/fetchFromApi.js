// export const fetchFromApi = async (url, options) => {
//   const res = await fetch(url, options);
//   const data = await res.json();
//   return data;
// };
import axios from 'axios';
const BASE_URL = 'https://exercisedb.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
