export type UserProps = {
  name: string;
  birthday: string;
  eMail: string;
  enLvl: string;
  PDAgreement: boolean;
  gender: string;
  file: string;
};

export type IGame = {
  id: number;
  background_image: string;
  esrb_rating: { id: number; name: string; slug: string; name_en: string; name_ru: string };
  name: string;
  rating: number;
  released: string;
  genres: {
    id: number;
    name: string;
    slug: string;
  }[];
};

export type IFormData = {
  name: string;
  birthday: string;
  eMail: string;
  enLvl: string;
  gender: string;
  file: string;
  PDAgreement: boolean;
};

export type IFormAction = {
  type: string;
  payload: IFormData;
};

export type IUserState = {
  users: IFormData[];
};

export type IGameState = {
  newSearchValue: string;
  gamesCards: IGame[];
  ordering: string;
  page: string;
  pageSize: string;
  count: string;
  chosenGame: IGame | null;
  isLoaded: string;
  error: null | string;
};

export type ISearchAction = {
  type: string;
  payload: IGameState;
};

export type IGameAPIResponse = {
  count: number;
  results: IGame[];
};
