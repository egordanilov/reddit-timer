import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from '../App.test';

test('Footer logo link takes to home page', async () => {
  setup();
  const footerLogo = screen.getByRole('link', { name: 'footerlogo.svg' });
  await userEvent.click(footerLogo);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/');
});
