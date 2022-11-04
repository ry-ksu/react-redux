import axios from 'axios';

const url = 'https://api.rawg.io/api/games';
const API_KEY = 'c5e92c5eb5ea462a8da8cff455452d29';

export const axiosGet = (
  search: string,
  page = '1',
  pageSize = '15',
  ordering = '-rating',
  search_precise = true
) => {
  if (search.length === 0) {
    return;
  }

  return axios
    .get(`${url}`, {
      params: {
        search,
        ordering,
        page_size: pageSize,
        page,
        search_precise,
        key: API_KEY,
      },
    })
    .then((response) => response.data)
    .catch((e) => console.error(e));
};
