import { render, screen } from '@testing-library/react'
import CardFigu from './CardFigu'

test('color y estilo correctos cuando onFire es true', () => {
  const item = {
    numero: 1,
    onFire: true,
    nivelDeImpresion: 'alta',
    valoracionFigurita: 5,
  }

  render(<CardFigu item={item} />)

  const iconoOnFire = screen.getByTestId('onFireIcon')

  expect(iconoOnFire).toHaveStyle({ color: '#f44336' })
})

test('color y estilo correctos cuando onFire es false', () => {
  const item = {
    numero: 1,
    onFire: false,
    nivelDeImpresion: 'alta',
    valoracionFigurita: 5,
  }

  render(<CardFigu item={item} />)

  const iconoOnFire = screen.getByTestId('onFireIcon')
  const labelOnFire = screen.getByText('On Fire')

  expect(iconoOnFire).toHaveStyle({ color: '#999999' })
  expect(labelOnFire).toHaveStyle({ textDecoration: 'line-through' })
})
