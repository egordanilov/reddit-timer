import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
// import setup from './App.test';
import App from '../components/App';
import { LocationDisplay } from './App.test';

test('initializes the input value from the URL', async () => {
  // setup();
  const oddRoute = '/search/fhjdfsh';
  render(
    <MemoryRouter initialEntries={[oddRoute]}>
      <App />
      <LocationDisplay />
    </MemoryRouter>,
  );
  const locationDisplay = screen.getByTestId('location-display');
  const subredditInput = screen.getByLabelText('r /');
  expect(locationDisplay).toHaveTextContent(subredditInput.value);
});

test('updates the URL with the new subreddit on submit', async () => {
  const oddRoute = '/search/fhjdfsh';
  render(
    <MemoryRouter initialEntries={[oddRoute]}>
      <App />
      <LocationDisplay />
    </MemoryRouter>,
  );
  screen.debug();
});
