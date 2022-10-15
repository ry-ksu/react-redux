import React from 'react';
import { IArticles } from 'types';

type IAPICards = {
  articles: IArticles[];
};

export const APICards = (prop: IAPICards) => {
  console.log(prop.articles[0], 'daf');
  return (
    <div className="news-cards">
      {prop.articles.map((article, i) => (
        <div key={i} className={'news-card ' + i}>
          <img src={article.urlToImage} alt="news image" />
          <p className="news-source">{article.source.name}</p>
          <h3>{article.title}</h3>
          <p className="news-description">{article.description}</p>
          <p className="news-date">{new Date(article.publishedAt).toLocaleString().slice(0, -3)}</p>
        </div>
      ))}
    </div>
  );
};
