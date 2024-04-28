import { render, screen } from '@testing-library/react'
import NotFound from '../../src/app/not-found'

describe('NotFoundPage', () => {
  it('renders a title', () => {
    render(<NotFound />)
    const title = screen.getByTestId('notfound-title')
 
    expect(title).toBeInTheDocument();
  });

  it('the title is an h2 tag and has the correct text and font', () => {
    render(<NotFound />)
    const notFoundPageTitleText = screen.getByRole('heading', {level: 2});
 
    expect(notFoundPageTitleText).toHaveTextContent('Uh oh! 404 Page not found');
    expect(notFoundPageTitleText).toHaveClass('font-sans');
  });

  it('renders information text', () => {
    render(<NotFound />);
    const infoText = screen.getByRole('paragraph');

    expect(infoText).toHaveTextContent('Looks like you\'ve tried to navigate to the wrong place.')
  });

  it('renders a link to home', () => {
    render(<NotFound />);
    const link = screen.getByTestId('goHome')
    expect(link).toHaveTextContent('RETURN HOME')
    expect(link).toHaveAttribute('href', '/')
  })
});