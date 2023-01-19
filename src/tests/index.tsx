export const dataForThreeCards = {
  results: [
    {
      background_image:
        'https://icdn.lenta.ru/images/2022/10/02/22/20221002220508886/share_0c5750cf6c95c6f1358c8014bb3bb212.jpg',
      esrb_rating: {
        id: 1,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      name: 'The Witcher 2: Assassins of Kings',
      rating: 4.34,
      released: '2011-05-17',
      genres: [
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      background_image:
        'https://icdn.lenta.ru/images/2022/10/02/22/20221002220508886/share_0c5750cf6c95c6f1358c8014bb3bb212.jpg',
      esrb_rating: {
        id: 1,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      name: 'The Witcher 3',
      rating: 4.35,
      released: '2011-05-20',
      genres: [
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
        },
      ],
    },
    {
      background_image:
        'https://icdn.lenta.ru/images/2022/10/02/22/20221002220508886/share_0c5750cf6c95c6f1358c8014bb3bb212.jpg',
      esrb_rating: {
        id: 1,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      name: 'The Witcher',
      rating: 4.45,
      released: '2011-05-25',
      genres: [],
    },
  ],
};

interface IStore {
  [index: string]: string;
}

const localStorageMock = (function () {
  let store: IStore = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
