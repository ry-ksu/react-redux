import React from 'react';
import { IArticles } from 'types';
import styles from './index.module.css';
type IAPICards = {
  articles: IArticles[];
};

export const APICards = (prop: IAPICards) => {
  console.log(prop.articles[0], 'daf');
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.newsCards}>
        {prop.articles.map((article, i) => (
          <div key={i} className={styles.newsCard + ' ' + i}>
            <img src={article.urlToImage} alt="news image" />
            <div className={styles.newsSource}>{article.source.name}</div>
            <div className={styles.newsContent}>
              <h3>{article.title}</h3>
              <p className={styles.newsDescription}>{article.description}</p>
              <p className={styles.newsDate}>
                {new Date(article.publishedAt).toLocaleString().slice(0, -3)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
