import React from 'react';
import { IGame } from 'types';
import { Loader } from 'components/loader';
import styles from './index.module.css';

type IAPICards = {
  isLoad: number;
  articles: IGame[];
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const APICards = (prop: IAPICards) => {
  const firstSearch = 'Пожалуйста, введите запрос...';
  const notData = 'Новости по данному запросу еще не написаны. Попробуйте другой запрос.';

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
        {prop.isLoad === 3 && prop.articles.length === 0 && warningForFirstSearch(notData)}

        {prop.articles.map((article, i) => (
          <div
            data-testid="news/card"
            key={i}
            onClick={(e) => prop.onClick(e)}
            className={styles.newsCard + ' ' + i}
          >
            <div className={styles.imgWrapper}>
              <img src={article.background_image} alt="news image" />
            </div>
            <div className={styles.newsSource}>{article.rating}</div>
            <div className={styles.newsContent}>
              <h3>{article.name}</h3>
              <p className={styles.newsDate}>
                {new Date(article.released).toLocaleString().slice(0, -3)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Loader isLoading={prop.isLoad} />
    </div>
  );
};
