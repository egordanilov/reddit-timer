import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './components/App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

test('renders App', () => {
  setup();
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

describe('Header', () => {
  test('Header is present on every page', () => {
    setup();
  });
});
