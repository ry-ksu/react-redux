export type GameProps = {
  key: number;
  img: string;
  title: string;
  creator: string;
  year: number;
  rating: number;
};

export const gameList: GameProps[] = [
  {
    key: 1,
    img: 'witcher3',
    title: 'The Witcher 3',
    creator: 'CD Projekt RED',
    year: 2015,
    rating: 8.6,
  },
  {
    key: 2,
    img: 'massEffect2',
    title: 'Mass Effect 2',
    creator: 'BioWare',
    year: 2010,
    rating: 9.3,
  },
  {
    key: 3,
    img: 'fahrenheit',
    title: 'Fahrenheit',
    creator: 'Quantic Dream',
    year: 2005,
    rating: 9.1,
  },
  {
    key: 4,
    img: 'rimWorld',
    title: 'RimWorld',
    creator: 'Ludeon Studios',
    year: 2013,
    rating: 9.3,
  },
  {
    key: 5,
    img: 'beholder',
    title: 'Beholder',
    creator: 'Warm Lamp Games',
    year: 2016,
    rating: 8.3,
  },
  {
    key: 6,
    img: 'nfs',
    title: 'NFS: Underground',
    creator: 'EA Games',
    year: 2003,
    rating: 8.7,
  },
  {
    key: 7,
    img: 'bannerSaga',
    title: 'The Banner Saga',
    creator: 'Stoic',
    year: 2013,
    rating: 9.1,
  },
  {
    key: 8,
    img: 'walkingDead',
    title: 'The Walking Dead',
    creator: 'Telltale Games',
    year: 2012,
    rating: 9.2,
  },
  {
    key: 9,
    img: 'heavyRain',
    title: 'Heavy Rain',
    creator: 'Quantic Dream',
    year: 2010,
    rating: 9.2,
  },
  {
    key: 10,
    img: 'warOfMine',
    title: 'This War of Mine',
    creator: '11 bit studios',
    year: 2014,
    rating: 8.7,
  },
];
