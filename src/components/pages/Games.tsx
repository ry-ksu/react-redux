import React, { useState } from 'react';
import { Search } from 'components/search';

export const Games = () => {
  const [articles, setArticles] = useState([]);

  return (
    <div data-testid="pages/games">
      <Search />
      {/* {articles.map((article) => (
        <div key={article.publishedAt}>{article.content}</div>)} */}
    </div>
  );
};
