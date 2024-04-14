import { render } from '@testing-library/react'
import NavLink from '../../../src/components/homeComponents/navLink'

describe('NavLink', () => {
  it('renders NavLinks correctly', () => { 
    const { getAllByTestId } = render(<NavLink pathName="/example" pageTitle="Example" pageDescription="Example text." />);

    expect(getAllByTestId("Example")[0]).toBeInTheDocument();
    expect(getAllByTestId("Example")[0]).toHaveTextContent('Example');
    expect(getAllByTestId("/example")[0]).toBeInTheDocument();
    expect(getAllByTestId("/example")[0]).toHaveTextContent("Example text.");
  })
})