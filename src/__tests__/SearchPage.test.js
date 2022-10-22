import React from 'react';
import {
  render, screen, within, waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import { LocationDisplay } from './App.test';

const setup = (initialPath) => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
  let history;
  const view = render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Routes>
        <Route
          path="*"
          render={(props) => {
            history = props.history;
            return null;
          }}
        />
      </Routes>
      <LocationDisplay />
    </MemoryRouter>,
  );
  return { ...view, history };
};

test('initializes the input value from the URL and updates the URL with the new subreddit on submit', async () => {
  setup('/search/angular');
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

describe('heatmap', () => {
  test('loads and reddits top posts for a subreddit in url', async () => {
    setup('/search/angular');
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('loading-spinner'));
    const heatmap = screen.getByTestId('heatmap');
    const cells = within(heatmap).getAllByRole('button');
    expect(cells.length).toEqual(7 * 24);
    const cellsContent = cells.map((cell) => cell.innerHTML);
    expect(cellsContent).toMatchSnapshot();
    expect(screen.getByTestId('timezone')).toHaveTextContent('All times are shown in your timezone: America/Chicago');
  });

  test('cell highlights on click', async () => {
    setup('/search/reactjs');
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('loading-spinner'));
    const heatmap = screen.getByTestId('heatmap');
    const cells = within(heatmap).getAllByRole('button');
    // day and hour selected by default inside Heatmap [activeCell, setActiveCell]
    expect(cells[12]).toHaveStyle('border: 2px solid #93918F');
    const cellToClick = cells[15];
    expect(cellToClick).toHaveStyle('border: 0px solid #93918F');
    await userEvent.click(cellToClick);
    expect(cellToClick).toHaveStyle('border: 2px solid #93918F');
  });
  test('renders error message', async () => {
    setup('/search/failing-request');
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('loading-spinner'));
    expect(screen.getByText('Failed to fetch, check internet connection and subreddit name')).toBeInTheDocument();
  });
});

describe('posts table', () => {
  test('the posts table is shown when a box in the heatmap has been clicked', async () => {
    setup('/search/javascript');
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId('loading-spinner'));
    screen.debug();
    // table has 5 columns
    expect(screen.getAllByRole('columnheader').length).toEqual(5);
  });
  test('the posts table is not shown when there are no posts for the selected weekday/hour', async () => {

  });
  test("the table shows the post's title, time, score (number of upvotes), number of comments and author", async () => {

  });
});
