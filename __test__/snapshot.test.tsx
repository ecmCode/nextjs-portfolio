import { render } from '@testing-library/react';
import Home from '../src/pages/index';
import React from 'react';
import NotFound from '@/pages/404';
import Blogs from '@/pages/blogs';
import About from '@/pages/about';
import Projects from '@/pages/projects';
 
it('renders Home page unchanged', () => {
  const { container } = render(<Home posts={[]} />);
  expect(container).toMatchSnapshot();
});

it('renders 404 page unchanged', () => {
  const { container } = render(<NotFound/>);
  expect(container).toMatchSnapshot();
});

it('renders About page unchanged', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});

it('renders Projects page unchanged', () => {
  const { container } = render(<Projects />);
  expect(container).toMatchSnapshot();
});

it('renders Blogs page unchanged', () => {
  const { container } = render(<Blogs posts={[]} />);
  expect(container).toMatchSnapshot();
});