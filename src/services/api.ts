import axios from 'axios';

const url = 'https://newsapi.org/v2/everything?';
const API_KEY = '01572784a1f94ab2b4a331a9d6cf302b';

export const axiosGet = (q: string, page = 1, sortBy = 'popularity', pageSize = 15) => {
  if (q.length === 0) {
    return;
  }
  return axios
    .get(`${url}q=${q}`, {
      params: {
        sortBy,
        pageSize,
        page,
      },
      headers: {
        Authorization: API_KEY,
      },
    })
    .then((response) => response.data)
    .catch((e) => console.error(e));
};
