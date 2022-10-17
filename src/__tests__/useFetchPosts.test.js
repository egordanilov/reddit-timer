import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts, { sortPostList } from '../hooks/useFetchPosts';

test('loads 500 top posts from the Reddit API', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('500-posts'));

  expect(result.current.isLoaded).toBe(false);
  expect(result.current.posts).toEqual([]);

  await waitForNextUpdate();
  const sortedPosts = sortPostList(result.current.posts);
  expect(result.current.isLoaded).toBe(true);
  expect(sortedPosts.length).toEqual(500);

  const postTitles = sortedPosts.map((data) => data.title);
  expect(postTitles).toMatchSnapshot();
});

test('stops loading when less than 500 posts are available', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('less-than-500-posts'));

  await waitForNextUpdate();
  const sortedPosts = sortPostList(result.current.posts);
  expect(result.current.isLoaded).toBe(true);
  expect(sortedPosts.length).toEqual(270);
});

test('returns error when a request fails', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('failing-request'));

  await waitForNextUpdate();

  expect(result.current.isLoaded).toBe(true);
  expect(result.current.error).not.toBe(null);
});
