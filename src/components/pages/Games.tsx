import React, { useState } from 'react';
import { Search } from 'components/search';
import { IArticles } from 'types';
import { APICards } from 'components/APICards';

export const Games = () => {
  const [articles, setArticles] = useState<IArticles[]>([]);

  const onSubmit = (newArticle: IArticles[]) => {
    setArticles(newArticle);
  };

  return (
    <div data-testid="pages/games">
      <Search onSubmit={onSubmit} />
      <APICards articles={articles} />
    </div>
  );
};
