import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('link', {
      name: 'Go to an about page',
    })

    expect(heading).toBeInTheDocument()
  })
})
