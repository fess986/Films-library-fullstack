import {
  getDuration,
  parseCommentDate,
  formatDate,
  parseSeconds,
} from './utils'

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
