import { render, screen } from '@testing-library/react';
import NotFound from '@/pages/404';
import '@testing-library/jest-dom';
 
describe('NotFound', () => {
  it('renders the component ', () => {
    const {container} = render(<NotFound/>);
    expect(container).toBeInTheDocument();
  });

  it('renders every element', () => {
    render(<NotFound/>);
 
    const heading = screen.getByRole('heading', {
        name: /404/i,
    });

    const link = screen.getByRole('link',{
        name: /Home/i,
    });

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});