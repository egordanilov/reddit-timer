import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';
import { LocationDisplay } from './App.test';

function setup() {
  const oddRoute = '/search/angular';
  render(
    <MemoryRouter initialEntries={[oddRoute]}>
      <App />
      <LocationDisplay />
    </MemoryRouter>,
  );
}

test('initializes the input value from the URL and updates the URL with the new subreddit on submit', async () => {
  setup();
  const headerLink = screen.getByRole('link', { name: 'Search' });
  const submitButton = screen.getByRole('button', { name: 'SEARCH' });
  const locationDisplay = screen.getByTestId('location-display');
  const subredditInput = screen.getByLabelText('r /');
  // Expect the form input value to initialize from URL
  expect(subredditInput.value).toBe('angular');
  // Clear the form input, type in reactjs, submit the form, expect the path to be reactjs
  await userEvent.clear(subredditInput);
  await userEvent.type(subredditInput, 'reactjs');
  await userEvent.click(submitButton);
  expect(locationDisplay).toHaveTextContent(subredditInput.value);
  // Click on Search link in the header and expect a default input param and url to be javascript
  await userEvent.click(headerLink);
  expect(subredditInput.value).toBe('javascript');
  expect(locationDisplay).toHaveTextContent('/search/javascript');
});
