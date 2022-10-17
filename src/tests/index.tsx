export const dataForThreeCards = {
  status: 'ok',
  articles: [
    {
      author: 'Luna',
      content: 'Luna content',
      description: 'Luna description',
      publishedAt: '2022-10-02T19:05:25Z',
      source: { id: 'Luna_id', name: 'Luna_name' },
      title: 'Luna title',
      url: 'https://lenta.ru/news/2022/10/02/norway_prisoner/',
      urlToImage:
        'https://icdn.lenta.ru/images/2022/10/02/22/20221002220508886/share_0c5750cf6c95c6f1358c8014bb3bb212.jpg',
    },
    {
      author: 'Liza',
      content: 'Liza content',
      description: 'Liza description',
      publishedAt: '2022-10-03T19:05:25Z',
      source: { id: 'Liza_id', name: 'Liza_name' },
      title: 'Liza title',
      url: 'https://lenta.ru/news/2022/10/02/norway_prisoner/',
      urlToImage:
        'https://icdn.lenta.ru/images/2022/10/02/22/20221002220508886/share_0c5750cf6c95c6f1358c8014bb3bb212.jpg',
    },
    {
      author: 'Luis',
      content: 'Luis content',
      description: 'Luis description',
      publishedAt: '2022-10-05T19:05:25Z',
      source: { id: 'Luis_id', name: 'Luis_name' },
      title: 'Luis title',
      url: 'https://lenta.ru/news/2022/10/02/norway_prisoner/',
      urlToImage:
        'https://icdn.lenta.ru/images/2022/10/02/22/20221002220508886/share_0c5750cf6c95c6f1358c8014bb3bb212.jpg',
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
