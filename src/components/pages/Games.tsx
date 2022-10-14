import React, { useState } from 'react';
import { Search } from 'components/search';

export const Games = () => {
  const [articles, setArticles]: string[] = useState(['dsf', '56']);

  return (
    <div data-testid="pages/games">
      <Search setArticles={setArticles} />
      {articles.map((article) => (
        <div key={article.publishedAt}>{article.content}</div>)}
    </div>
  );
};
