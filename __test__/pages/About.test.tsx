import { cleanup, render, screen } from '@testing-library/react';
import About from '@/pages/about';
import '@testing-library/jest-dom';
 
describe('About', () => {

  beforeEach(() => render(<About/>))
  afterEach(() => cleanup())

  it('renders all interactive elements ', () => { 

    const heading = screen.getByRole('heading', {
      name: /About Me/,
    });

    const link = screen.getByRole('link', {
        name: /Home/,
    });

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();    
  });

  it('renders paragraphs with expected length', () => {

    const paragraphs = screen
      .getByTestId('paragraphs')
      .childNodes as unknown as HTMLParagraphElement[]

    expect(paragraphs).toHaveLength(7)

    paragraphs.forEach(p => {
        expect(p).toBeInTheDocument();
    })

  });

});