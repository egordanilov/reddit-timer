import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
// import setup from './App.test';
import App from '../components/App';
import { LocationDisplay } from './App.test';

function setup() {
  const oddRoute = '/search/fhjdfsh';
  render(
    <MemoryRouter initialEntries={[oddRoute]}>
      <App />
      <LocationDisplay />
    </MemoryRouter>,
  );
}

test('initializes the input value from the URL', async () => {
  setup();
  const locationDisplay = screen.getByTestId('location-display');
  const subredditInput = screen.getByLabelText('r /');
  expect(locationDisplay).toHaveTextContent(subredditInput.value);
});

test('updates the URL with the new subreddit on submit', async () => {
  setup();
  window.history.pushState = jest.fn();
  const subredditInput = screen.getByLabelText('r /');
  await fireEvent.change(subredditInput, { target: { value: 'newurlalteredinput' } });
  const submitButton = screen.getByRole('button', { name: 'SEARCH' });
  screen.debug();
  await userEvent.click(submitButton);
  const newUrl = `/search/${subredditInput.value}`;
  expect(window.history.pushState).toBeCalledWith({}, undefined, newUrl);
});
