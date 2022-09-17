import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './components/App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

test('Header is present on every page', () => {
  setup();
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

test('Header logo takes to home page on click', async () => {
  setup();
  const logoLink = screen.getByRole('link', { name: 'RedditTimerLogo.svg' });
  await userEvent.click(logoLink);
  expect(screen.getByText('Home page')).toBeInTheDocument();
  screen.debug();
});
