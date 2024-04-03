import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
 
describe('Page', () => {
  it('renders a main tag', () => {
    render(<Page />)
 
    const main = screen.getByRole('main')
 
    expect(main).toBeInTheDocument()
  })
})