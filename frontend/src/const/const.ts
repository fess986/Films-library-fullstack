export default {}

export const AppRoutes = {
  ROOT: '/',
  MAIN: 'main',
  SIGN_IN: 'login',
  MY_LIST: 'mylist',
  PLAYER: 'player/:id',
  FILM_CARD: 'films/:id',
  ADD_REVIEW: 'films/:id/review'
} as const;

export const PageList = {
  MAIN: 'main',
  MYLIST: 'mylist',
  PLAYER: 'player',
  FILM_CARD: 'film-card',
  ADD_REVIEW: 'add-review',
  SIGN_IN: 'sign-in'
} as const;

export type PageList = (typeof PageList)[keyof typeof PageList];

