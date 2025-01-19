import { Review } from '../types/types'

export const Reviews: Review[] = [
  {
    id: '1',
    userId: '1',
    userName: 'my name',    
    filmId: '1',
    rating: 1.4,

    commentText: 'very good film i think!',
    date: '2023-09-08T14:13:56.569Z',
  },

  {
    id: '2',
    userId: '2',
    userName: 'Kate Muir', 
    filmId: '2',
    rating: 8.9,
    commentText:
      'Discerning travellers and Wes Anderson fans will luxuriate              in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in              years.',
    date: '2024-03-08T14:13:52.569Z',
  },

  {
    id: '3',
    userId: '3',
    userName: 'Bill Goodykoontz', 
    filmId: '3',
    rating: 4.3,
    commentText: `Anderson's films are too precious for some, but for those of
              us willing to lose ourselves in them, they're a delight.
              "The Grand Budapest Hotel" is no different, except that he
              has added a hint of gravitas to the mix, improving the
              recipe.'`,
    date: '2022-06-08T14:13:52.569Z',
  },

  {
    id: '4',
    userId: '4',
    userName: 'Piter Parker', 
    filmId: '4',
    rating: 7.0,
    commentText:
      'didnt find it amusing, and while I can appreciate the   creativity, its an hour and 40 minutes I wish I could take     back',
    date: '2023-05-08T14:13:52.569Z',
  },

  {
    id: '5',
    userId: '4',
    userName: 'Matthew Lickona', 
    filmId: '4',
    rating: 4.0,
    commentText: `The mannered, madcap proceedings are often delightful,
              occasionally silly, and here and there, gruesome and/or
              heartbreaking`,
    date: '2023-11-08T14:13:52.569Z',
  },
]
