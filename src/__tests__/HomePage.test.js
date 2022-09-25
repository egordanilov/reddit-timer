import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import setup from './App.test';

test('when clicking the button in the hero section the default subreddit -javascript- is included in the URL', async () => {
  setup();
  const button = screen.getByRole('button');
  await userEvent.click(button);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/search/javascript');
});

test('when clicking the image in the hero section the default subreddit -javascript- is included in the URL', async () => {
  setup();
  const timetableImg = screen.getByRole('img', { name: 'Best time to post on reddit' });
  await userEvent.click(timetableImg);
  expect(screen.getByTestId('location-display')).toHaveTextContent('/search/javascript');
});

test('the About section includes a link to https://profy.dev and https://profy.dev/employers', async () => {
  setup();
  const aboutSection = screen.getAllByRole('article')[1];
  const profyDevLink = within(aboutSection).getByRole('link', { name: 'profy.dev' });
  expect(profyDevLink.getAttribute('href')).toEqual('https://profy.dev');
  const employersLink = within(aboutSection).getByRole('link', { name: 'Click here for more information.' });
  expect(employersLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});
