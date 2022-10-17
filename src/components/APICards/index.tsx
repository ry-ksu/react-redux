import React from 'react';
import { IArticles } from 'types';
import styles from './index.module.css';

type IAPICards = {
  isLoad: number;
  articles: IArticles[];
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const APICards = (prop: IAPICards) => {
  console.log(prop.articles[0], 'daf');

  const firstSearch = 'Пожалуйста, введите запрос...';
  const notData = 'Новости по данному запросу еще не написаны. Попробуйте другой запрос.';
  const loading = 'Загрузка...';

  const warningForFirstSearch = (warning: string) => {
    return (
      <div className={styles.warning}>
        <p>{warning}</p>
      </div>
    );
  };

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.newsCards}>
        {prop.isLoad === 1 && warningForFirstSearch(firstSearch)}
        {prop.isLoad === 2 && warningForFirstSearch(loading)}
        {prop.isLoad === 3 && prop.articles.length === 0 && warningForFirstSearch(notData)}

        {prop.articles.map((article, i) => (
          <div
            data-testid="news/card"
            key={i}
            onClick={(e) => prop.onClick(e)}
            className={styles.newsCard + ' ' + i}
          >
            <div className={styles.imgWrapper}>
              <img src={article.urlToImage} alt="news image" />
            </div>
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
