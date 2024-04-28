import { render, screen } from '@testing-library/react'
import Page from '../../src/app/page'

describe('HomePage', () => {
  it('renders a main tag', () => {
    render(<Page />)
    const main = screen.getByRole('main')
 
    expect(main).toBeInTheDocument()
  });

  it('has a title', () => {
    render(<Page />)
    const title = screen.getByTestId('homepage-title')
 
    expect(title).toBeInTheDocument();
  });

  it('the title is an h1 tag, is Carolina Calligraphy and has tbe correct font', () => {
    render(<Page />)
    const homePageTitleText = screen.getByRole('heading', {level: 1});
 
    expect(homePageTitleText).toHaveTextContent('Carolina Calligraphy');
    expect(homePageTitleText).toHaveClass('font-mono');
  });

  it('renders NavLinks correctly', () => {
    const { getAllByTestId } = render(<Page />);

    expect(getAllByTestId("About")[0]).toBeInTheDocument();
    expect(getAllByTestId("About")[0]).toHaveAttribute('href', '/about');

    expect(getAllByTestId("Gallery")[0]).toBeInTheDocument();
    expect(getAllByTestId("Gallery")[0]).toHaveAttribute('href', '/gallery');

    expect(getAllByTestId("Contact")[0]).toBeInTheDocument();
    expect(getAllByTestId("Contact")[0]).toHaveAttribute('href', '/contact');
  });
});