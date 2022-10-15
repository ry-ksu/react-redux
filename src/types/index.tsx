export type UserProps = {
  name: string;
  birthday: string;
  eMail: string;
  enLvl: string;
  PDAgreement: boolean;
  sex: string;
  file: string;
};

export type IArticles = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null | string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};
