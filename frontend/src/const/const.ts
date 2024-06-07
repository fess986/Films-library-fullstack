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

