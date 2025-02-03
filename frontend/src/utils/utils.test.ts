import { getDuration } from './utils'

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
