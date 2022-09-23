import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from '../App.test';

test('when clicking the links the default subreddit -javascript- is included in the URL', async () => {
  setup();
  const button = screen.getByRole('button');
  await userEvent.click(button);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/search/javascript');
});

test('when clicking the links the default subreddit -javascript- is included in the URL', async () => {
  setup();
  const timetableImg = screen.getByRole('img', { name: 'Best time to post on reddit' });
  await userEvent.click(timetableImg);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/search/javascript');
});
