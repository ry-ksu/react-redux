export type GameProps = {
  key: number;
  img: string;
  title: string;
  description: string;
  creator: string;
  year: number;
  rating: number;
};

export const gameList: GameProps[] = [
  {
    key: 1,
    img: 'img1',
    title: 'game1',
    description: 'desc1',
    creator: 'creator1',
    year: 2010,
    rating: 10,
  },
  {
    key: 2,
    img: 'img2',
    title: 'game2',
    description: 'desc2',
    creator: 'creator2',
    year: 2011,
    rating: 9,
  },
  {
    key: 3,
    img: 'img3',
    title: 'game3',
    description: 'desc3',
    creator: 'creator3',
    year: 2012,
    rating: 8,
  },
  {
    key: 4,
    img: 'img4',
    title: 'game4',
    description: 'desc4',
    creator: 'creator4',
    year: 2013,
    rating: 7,
  },
];
