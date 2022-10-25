import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts from '../hooks/useFetchPosts';

const getTotalNumberOfPosts = (nestedPostList) => nestedPostList.reduce(
  (numTotal, postsPerDay) => postsPerDay.reduce(
    (numPerDay, postsPerHour) => numPerDay + postsPerHour, numTotal,
  ),
  0,
);

function flattenPostList(oldList) {
  const newList = oldList.flat().flat();
  return newList;
}

test('loads 500 top posts from the Reddit API', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('500-posts'));

  expect(result.current.isLoaded).toBe(false);
  expect(result.current.postsByDayHour).toEqual([]);

  await waitForNextUpdate();
  const posts = flattenPostList(result.current.postsByDayHour);
  expect(result.current.isLoaded).toBe(true);
  expect(posts.length).toEqual(500);

  const postTitles = posts.map((data) => data.title);
  expect(postTitles).toMatchSnapshot();
});

test('stops loading when less than 500 posts are available', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('less-than-500-posts'));

  await waitForNextUpdate();
  const posts = flattenPostList(result.current.postsByDayHour);
  expect(result.current.isLoaded).toBe(true);
  expect(posts.length).toEqual(270);
});

test('returns error when a request fails', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('failing-request'));

  await waitForNextUpdate();

  expect(result.current.isLoaded).toBe(true);
  expect(result.current.error).toEqual('error');
});

export default getTotalNumberOfPosts;
