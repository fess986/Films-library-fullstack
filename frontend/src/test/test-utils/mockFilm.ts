import { faker } from '@faker-js/faker'

import { FilmProps } from '../../types/types'

const createFakeFilm = (overrides?: Partial<FilmProps>): FilmProps => ({
  id: faker.string.uuid(),
  name: faker.lorem.words(3),
  posterImage: faker.image.url(),
  previewImage: faker.image.url(),
  videoLink: faker.internet.url(),
  previewVideoLink: faker.internet.url(),
  description: faker.lorem.paragraph(),
  rating: faker.number.float({ min: 1, max: 10, multipleOf: 0.1 }),
  scoresCount: faker.number.int({ min: 0, max: 10000 }),
  director: faker.person.fullName(),
  starring: [faker.person.fullName(), faker.person.fullName()],
  runTime: faker.number.int({ min: 60, max: 180 }),
  genre: [faker.music.genre()],
  released: faker.number.int({ min: 1980, max: 2025 }),
  isFavorite: faker.datatype.boolean(),
  similarFilms: [],
  likedByUsers: [],
  ...overrides,
})

export default createFakeFilm
