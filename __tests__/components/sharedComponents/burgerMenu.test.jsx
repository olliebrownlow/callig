import { render, screen } from '@testing-library/react'
import BurgerMenu from '../../../src/components/sharedComponents/burgerMenu'

describe('BurgerMenu', () => {
  beforeEach(() => { 
    // mock the colour scheme
    window.matchMedia = jest.fn(() => { 
      return { 
        matches: false, 
        addListener: jest.fn(), 
        removeListener: jest.fn() 
      } 
    });
  })

  it('renders correctly and with the right text', () => { 
    const { getAllByTestId } = render(<BurgerMenu />);
    expect(getAllByTestId("home")[0]).toBeInTheDocument();
    expect(getAllByTestId("home")[0]).toHaveTextContent('Home');

    expect(getAllByTestId("about")[0]).toBeInTheDocument();
    expect(getAllByTestId("about")[0]).toHaveTextContent('About');

    expect(getAllByTestId("gallery")[0]).toBeInTheDocument();
    expect(getAllByTestId("gallery")[0]).toHaveTextContent("Gallery");

    expect(getAllByTestId("contact")[0]).toBeInTheDocument();
    expect(getAllByTestId("contact")[0]).toHaveTextContent("Contact");
  })

  it('uses the Inter font family for list items', () => {
    const { getByText } = render(<BurgerMenu />);

    expect(getByText("Home").parentElement).toHaveStyle('fontFamily:Inter')
  })
})