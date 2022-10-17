import React, { useState } from 'react';
import { Search } from 'components/search';
import { IArticles } from 'types';
import { APICards } from 'components/APICards';
import { Modal } from 'components/modal';

export const News = () => {
  const [articles, setArticles] = useState<IArticles[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [dataIsLoad, setDataIsLoad] = useState(1);
  const [articleActive, setArticleActive] = useState<IArticles>();

  const status = 'article';

  const cardContent = () => {
    if (articleActive == null) {
      return <p>Объект не определен</p>;
    }
    return (
      <div className="article-card">
        <div className="article-card__content_left">
          <img src={articleActive.urlToImage} alt="article image"></img>
          <p className="article-card__source">
            {articleActive.source.name}, {articleActive.author}
          </p>
          <a className="article-card__url" href={articleActive.url}>
            Перейти в источник
          </a>
        </div>
        <div className="article-card__content_right">
          <h2 className="article-card__header">{articleActive.title}</h2>
          <p className="article_card__content">{articleActive.content}</p>
          <p className="article-card__date">
            {new Date(articleActive.publishedAt).toLocaleString().slice(0, -3)}
          </p>
        </div>
      </div>
    );
  };

  const onSubmit = (newArticles: IArticles[]) => {
    setArticles(newArticles);
    setDataIsLoad(3);
  };

  const loading = () => {
    setDataIsLoad(2);
  };

  const onClick = () => {
    setModalActive(false);
  };

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const cardIndex = Number(e.currentTarget.classList[1]);
    setArticleActive(articles[cardIndex]);
    setModalActive(true);
  };

  return (
    <div data-testid="pages/news">
      <Search loading={loading} onSubmit={onSubmit} />
      <APICards isLoad={dataIsLoad} articles={articles} onClick={onClickCard} />
      <Modal status={status} active={modalActive} onClick={onClick} content={cardContent} />
    </div>
  );
};
