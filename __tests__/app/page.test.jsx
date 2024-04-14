import { render, screen } from '__tests__/app/@testing-library/react'
import Page from '../../src/app/page'

describe('HomePage', () => {
  it('renders a main tag', () => {
    render(<Page />)
    const main = screen.getByRole('main')
 
    expect(main).toBeInTheDocument()
  })

  it('has a title', () => {
    render(<Page />)
    const title = screen.getByTestId('homepage-title')
 
    expect(title).toBeInTheDocument();
  })

  it('the title is an h1 tag, is Carolina Calligraphy and has tbe correct font', () => {
    render(<Page />)
    const homePageTitleText = screen.getByRole('heading', {level: 1});
 
    expect(homePageTitleText).toHaveTextContent('Carolina Calligraphy');
    expect(homePageTitleText).toHaveClass('font-mono');
  })

  it('renders NavLinks correctly', () => {
    const { getAllByTestId } = render(<Page />);

    expect(getAllByTestId("About")[0]).toBeInTheDocument();
    expect(getAllByTestId("About")[0]).toHaveTextContent('About');
    expect(getAllByTestId("/about")[0]).toBeInTheDocument();
    expect(getAllByTestId("/about")[0]).toHaveTextContent("Carolina's history and ways of working.");


    expect(getAllByTestId("Gallery")[0]).toBeInTheDocument();
    expect(getAllByTestId("Gallery")[0]).toHaveTextContent('Gallery');
    expect(getAllByTestId("/gallery")[0]).toBeInTheDocument();
    expect(getAllByTestId("/gallery")[0]).toHaveTextContent("Browse examples of previous projects.");

    expect(getAllByTestId("Contact")[0]).toBeInTheDocument();
    expect(getAllByTestId("Contact")[0]).toHaveTextContent('Contact');
    expect(getAllByTestId("/contact")[0]).toBeInTheDocument();
    expect(getAllByTestId("/contact")[0]).not.toHaveTextContent();
  })
})