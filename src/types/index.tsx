export type UserProps = {
  name: string;
  birthday: string;
  eMail: string;
  enLvl: string;
  PDAgreement: boolean;
  sex: string;
  file: string;
};

export type IGame = {
  background_image: string;
  esrb_rating: { id: number; name: string; slug: string; name_en: string; name_ru: string };
  name: string;
  rating: number;
  released: string;
  genres: {
    id: number;
    name: string;
    slug: string;
  }[];
};
