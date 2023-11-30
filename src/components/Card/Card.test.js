//import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card.jsx'

describe('Card', () => {
  it('should render the card title with the correct text', () => {
    const item = { titulo: 'Juanito' }
    render(<Card item={item} />)
    expect(screen.getByText('Juanito')).toBeInTheDocument()
  })
})
