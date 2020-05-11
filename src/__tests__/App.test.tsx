import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

let container: any;
let getByText: any;

beforeEach(() => {
  const wrapper = render(<App />);
  container = wrapper.container;
  getByText = wrapper.getByText;
});

afterEach(cleanup);

test('renders app', () => {
  expect(container).toMatchSnapshot();
});

test('renders header', () => {
  const header = getByText('Covid-19 cases in USA');
  expect(header).toBeInTheDocument();
});
