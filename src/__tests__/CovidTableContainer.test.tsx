import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CovidTableContainer from '../components/CovidTableContainer';

let container: any;
let getByText: any;

beforeEach(() => {
  const wrapper = render(<CovidTableContainer />);
  container = wrapper.container;
  getByText = wrapper.getByText;
});

afterEach(cleanup);

test('renders CovidTableContainer', () => {
  expect(container).toMatchSnapshot();
});

test('renders loading', () => {
  const loadingDiv = getByText('Loading...');
  expect(loadingDiv).toBeInTheDocument();
});
