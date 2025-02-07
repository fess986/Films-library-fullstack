import { faker } from '@faker-js/faker'

import { Review } from '../../types/types';

export const createFakeReview = (overrides?: Partial<Review>): Review => ({
  id: faker.string.uuid(),
  userId: faker.string.uuid(),
  userName: faker.lorem.words(3),
  filmId: faker.string.uuid(),
  rating: faker.number.float({ min: 1, max: 10, multipleOf: 0.1 }),
  commentText: faker.lorem.sentences(2),
  date: faker.date.past().toISOString(),
  ...overrides,
});
