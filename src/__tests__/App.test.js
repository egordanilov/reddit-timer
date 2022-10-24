import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import App from '../components/App';

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

export default function setup() {
  return render(
    <MemoryRouter>
      <App />
      <LocationDisplay />
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
  const header = screen.getByRole('banner');
  const logoLink = within(header).getByLabelText('go to home page');
  await userEvent.click(logoLink);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/');
});

test('Search link points to the search page with javascript as the default value in the URL', async () => {
  setup();
  const searchLink = screen.getByRole('link', { name: 'Search' });
  await userEvent.click(searchLink);
  expect(screen.getByText('/search/javascript')).toBeInTheDocument();
  const howItWorksLink = screen.getByRole('link', { name: 'How it works' });
  await userEvent.click(howItWorksLink);
});

test('Footer logo link takes to home page', async () => {
  setup();
  const footerLogo = screen.getByLabelText('click to go to home page');
  await userEvent.click(footerLogo);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/');
});
