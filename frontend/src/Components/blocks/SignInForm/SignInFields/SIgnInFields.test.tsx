import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import SignInFields from './SignInFields'

describe('SignInFields', () => {
  it('рендерит поля email и password', () => {
    // так как нас не интересует роутинг и прочее, мы можем просто рендерить компонент напрямую
    render(<SignInFields onChange={() => {}} onBlur={() => {}} />)

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('позволяет вводить текст в поля', () => {
    render(<SignInFields onChange={() => {}} onBlur={() => {}} />)

    const emailInput = screen.getByLabelText(
      /email address/i
    ) as HTMLInputElement
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } })

    expect(emailInput.value).toBe('test@example.com')
    expect(passwordInput.value).toBe('mypassword')
  })

  it('вызывает onChange при вводе', () => {
    const handleChange = vi.fn()
    render(<SignInFields onChange={handleChange} onBlur={() => {}} />)

    const emailInput = screen.getByLabelText(/email address/i)
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('вызывает onBlur при потере фокуса', () => {
    const handleBlur = vi.fn()
    render(<SignInFields onChange={() => {}} onBlur={handleBlur} />)

    const emailInput = screen.getByLabelText(/email address/i)
    fireEvent.blur(emailInput)

    expect(handleBlur).toHaveBeenCalledTimes(1)
  })
})
