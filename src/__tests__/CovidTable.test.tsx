import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CovidTable from '../components/CovidTable';
import mockData from './mockData/americanStatesMock.json';

let container: any;
let getByText: any;

beforeEach(() => {
  const wrapper = render(<CovidTable americanStates={mockData} />);
  container = wrapper.container;
  getByText = wrapper.getByText;
});

afterEach(cleanup);

test('renders CovidTable', () => {
  expect(container).toMatchSnapshot();
});

test('renders table head', () => {
  const tableHeadDeath = getByText('New deaths in the last 3 days');
  expect(tableHeadDeath).toBeInTheDocument();
});

test('renders table head', () => {
  const arkansas = getByText('AK');
  expect(arkansas).toBeInTheDocument();
});
