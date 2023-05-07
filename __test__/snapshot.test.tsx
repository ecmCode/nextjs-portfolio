import { render } from '@testing-library/react';
import Home from '../src/pages/index';
import React from 'react';
 
it('renders homepage unchanged', () => {
  const { container } = render(<Home posts={[]} />);
  expect(container).toMatchSnapshot();
});