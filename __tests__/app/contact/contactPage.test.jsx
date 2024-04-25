import { render, screen } from '@testing-library/react'
import Page from '../../../src/app/contact/page'

describe('ContactPage', () => {
  it('renders a main div element', () => {
    render(<Page />)
    const mainContactDiv = screen.getByTestId('main-contact-div')
 
    expect(mainContactDiv).toBeInTheDocument()
  })

  it('has a title', () => {
    render(<Page />)
    const title = screen.getByTestId('contactpage-title')
 
    expect(title).toBeInTheDocument();
  })

  it('the title is an h1 tag, is Contact Details and has tbe correct font', () => {
    render(<Page />)
    const contactPageTitle = screen.getByRole('heading', {level: 1});
 
    expect(contactPageTitle).toHaveTextContent('Contact Details');
    expect(contactPageTitle).toHaveClass('font-sans');
  })

  it('renders two semi-bold subsection headingss with the right text content', () => {
    render(<Page />);
    const contactPageSubsections = screen.getAllByRole('heading', {level: 2});

    expect(contactPageSubsections.length).toBe(2);
    expect(contactPageSubsections[0]).toHaveClass('font-semibold');
    expect(contactPageSubsections[0]).toHaveTextContent('Telephone');
    expect(contactPageSubsections[1]).toHaveClass('font-semibold');
    expect(contactPageSubsections[1]).toHaveTextContent('Email');
  });

  it('renders two semi-bold subsections with the right text content', () => {
    render(<Page />);
    const contactPageSubsectionInfo = screen.getAllByRole('paragraph');

    expect(contactPageSubsectionInfo.length).toBe(2);
    expect(contactPageSubsectionInfo[0]).toHaveClass('opacity-90');
    expect(contactPageSubsectionInfo[0]).toHaveTextContent('Carolina: 07980 987 788');
    expect(contactPageSubsectionInfo[1]).toHaveClass('opacity-90');
    expect(contactPageSubsectionInfo[1]).toHaveTextContent('carolinacalligraphy@gmail.com');
  });
});