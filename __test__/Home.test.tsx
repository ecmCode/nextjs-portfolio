import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';
 
describe('Home', () => {
  it('renders the component ', () => {
    const {container} = render(<Home posts={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('renders the heading ', () => {
    render(<Home posts={[]} />);
 
    const heading = screen.getByRole('heading', {
      name: /Portfolio/i,
    });
 
    expect(heading).toBeInTheDocument();
  });
});