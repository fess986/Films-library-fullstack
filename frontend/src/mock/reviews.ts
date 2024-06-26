import { Review } from "../types/types";

export const Reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'my name',
    },
    rating: 1.4,
    comment: 'very good film i think!',
    date: '2023-09-08T14:13:56.569Z',
  },

  {
    id: 2,
    user: {
      id: 5,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate              in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in              years.',
    date: '2024-03-08T14:13:52.569Z',
  },

  {
    id: 3,
    user: {
      id: 8,
      name: 'Bill Goodykoontz',
    },
    rating: 4.3,
    comment: `Anderson's films are too precious for some, but for those of
              us willing to lose ourselves in them, they're a delight.
              "The Grand Budapest Hotel" is no different, except that he
              has added a hint of gravitas to the mix, improving the
              recipe.'`,
    date: '2022-06-08T14:13:52.569Z',
  },

  {
    id: 4,
    user: {
      id: 15,
      name: 'Piter Parker',
    },
    rating: 7.0,
    comment: 'didnt find it amusing, and while I can appreciate the   creativity, its an hour and 40 minutes I wish I could take     back',
    date: '2023-05-08T14:13:52.569Z',
  },

  {
    id: 5,
    user: {
      id: 4,
      name: 'Matthew Lickona',
    },
    rating: 4.0,
    comment: `The mannered, madcap proceedings are often delightful,
              occasionally silly, and here and there, gruesome and/or
              heartbreaking`,
    date: '2023-11-08T14:13:52.569Z',
  },
];
