import {
  getDuration,
  parseCommentDate,
  formatDate,
  parseSeconds,
  shuffleFilms
} from './utils'
import  createFakeFilm from '../test/test-utils/mockFilm'

describe('getDuration', () => {
  test('корректно форматирует минуты в часы и минуты', () => {
    expect(getDuration(90)).toBe('1h 30m')
    expect(getDuration(45)).toBe('0h 45m')
    expect(getDuration(120)).toBe('2h 0m')
  })

  test('возвращает "0h 0m" для отрицательного значения', () => {
    expect(getDuration(-10)).toBe('0h 0m')
  })

  test('корректно обрабатывает 0 минут', () => {
    expect(getDuration(0)).toBe('0h 0m')
  })
})

describe('parseCommentDate', () => {
  test('корректно форматирует дату', () => {
    expect(parseCommentDate('2022-01-01')).toBe('January 1, 2022')
  }),
    test('корректно форматирует дату', () => {
      expect(parseCommentDate('2022-11-11')).toBe('November 11, 2022')
    })
})

describe('formatDate', () => {
  test('корректно форматирует дату', () => {
    expect(formatDate('2022-01-01')).toBe('2022-01-01')
  }),
    test('корректно форматирует дату', () => {
      expect(formatDate('2022-11-11')).toBe('2022-11-11')
    })
})

describe('parseSeconds', () => {
  test('корректно форматирует время до часов - 1', () => {
    expect(parseSeconds(90)).toBe('01:30')
  }),
    test('корректно форматирует время до часов - 2', () => {
      expect(parseSeconds(45)).toBe('00:45')
    }),
    test('корректно форматирует время с часами', () => {
      expect(parseSeconds(4000)).toBe('01:06:40')
    })
})

describe('shuffleFilms', () => {
  it('should return a new array and not mutate the original', () => {
    const original = [createFakeFilm(), createFakeFilm(), createFakeFilm()];
    const copy = [...original];

    const shuffled = shuffleFilms(original);

    expect(shuffled).not.toBe(original); // Новый массив
    expect(original).toEqual(copy); // Оригинал не изменился
  });

  it('should return an array of the same length', () => {
    const films = Array.from({ length: 5 }, () => createFakeFilm());
    const shuffled = shuffleFilms(films);

    expect(shuffled).toHaveLength(films.length);
  });

  it('should contain the same elements after shuffling', () => {
    const films = Array.from({ length: 5 }, () => createFakeFilm());
    const shuffled = shuffleFilms(films);

    expect(shuffled.map((f) => f.id).sort()).toEqual(films.map((f) => f.id).sort());
  });

  it('should shuffle the array (not always in the same order)', () => {
    const films = Array.from({ length: 10 }, () => createFakeFilm());

    let differentOrder = false;
    for (let i = 0; i < 5; i++) {
      const shuffled = shuffleFilms(films);
      if (JSON.stringify(shuffled) !== JSON.stringify(films)) {
        differentOrder = true;
        break;
      }
    }

    expect(differentOrder).toBe(true);
  });

  it('should return an empty array if input is empty', () => {
    expect(shuffleFilms([])).toEqual([]);
  });
});