import React from 'react';
import { Cards } from '../cards';
import { Search } from 'components/search';
import { gameList } from '../gameList';

export const Home = () => {
  return (
    <>
      <Search />
      <Cards gameList={gameList} />
    </>
  );
};
