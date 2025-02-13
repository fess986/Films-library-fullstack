import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom' // уже готовый роутер с историей
import { describe, it, vi } from 'vitest'

import Logo from './Logo'
import { useAppDispatch } from '../../../store'
import { resetFilmsShownCount } from '../../../store/app/appSlice'

// Мокаем useAppDispatch
vi.mock('../../../store', async () => {
  const actual = await import('../../../store') // получаем то что должен вернуть диспатч
  return {
    ...actual,
    useAppDispatch: vi.fn(),
  }
})

describe('Logo Component', () => {
  it('должен рендерить логотип с alt-текстом', () => {
    // рендерим компонент
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    )

    // находим картинку по alt
    const logoImage = screen.getByAltText('Films Library')
    expect(logoImage).toBeInTheDocument()
  })

  it('должен содержать ссылку на главную страницу', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    )

    const link = screen.getByRole('link') // находим по роли
    expect(link).toHaveAttribute('href', '/') // проверяем что есть нужный переход
  })

  it('должен диспатчить resetFilmsShownCount при клике', async () => {
    const mockDispatch = vi.fn()

    // Мокаем useAppDispatch, чтобы использовать mockDispatch
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch)

    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    await userEvent.click(link) // кликаем по кнопке

    expect(mockDispatch).toHaveBeenCalledWith(resetFilmsShownCount()) // вызываем диспатч экшена
  })
})
