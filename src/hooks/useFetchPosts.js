import { useEffect, useState } from 'react';
import { weekdays } from '../sharedVariables';

const AMOUNT_OF_POSTS_TO_FETCH = 500;
const AMOUNT_OF_POSTS_PER_PAGE = 100;

/* restructure post list from an api response */
export function sortPostList(unsortedList) {
  /* map over api response and restructure and simplify post list  */
  const restructuredPostsList = unsortedList.map((post) => {
    const postDate = new Date(post.data.created_utc * 1000);
    const postDay = postDate.getDay();
    const postHour = postDate.getHours();
    const structuredPost = {
      title: post.data.title,
      created_utc: post.data.created_utc,
      postDay,
      postHour,
      upvotes: post.data.ups,
      author: post.data.author,
      num_comments: post.data.num_comments,
      url: post.data.url,
      author_is_blocked: post.data.author_is_blocked,
    };
    return structuredPost;
  });
  return restructuredPostsList;
}

/* function to create an array of posts by day and hour.
Builds an object contains posts per day of week and hour to create the heatmap.
Each entry obj[dayOfWeek][hour] contains an array of posts
*/
export function groupPostsByDayHour(posts) {
  const postsPerDay = Array(7)
    .fill()
    .map(() => Array(24).fill().map(() => 0));

  posts.forEach((post) => {
    const createdAt = new Date(post.data.created_utc * 1000);
    const dayOfWeek = createdAt.getDay();
    const hour = createdAt.getHours();
    postsPerDay[dayOfWeek][hour] += 1;
  });
  return postsPerDay;
}

/* make an api call to fetch 500 top posts by subreddit of last year,
recursive function calls itself until 500 posts are fetched or no more posts available */
async function fetchPaginatedPosts(subreddit, abortController, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
  /* pagination parameter to add to fetch url after every request */
  if (after) {
    url += `&after=${after}`;
  }
  const response = await fetch(url, { signal: abortController.signal });
  const { data } = await response.json();
  /* add posts to array of posts that have already been fetched */
  const allPosts = previousPosts.concat(data.children);
  const noMorePosts = data && data.dist < AMOUNT_OF_POSTS_PER_PAGE;
  const limitReached = allPosts.length >= AMOUNT_OF_POSTS_TO_FETCH;
  /* don't fetch if enough posts already fetched or no more posts available */
  if (noMorePosts || limitReached) {
    return allPosts;
  }
  /* return fetchResults after multiple fetch calls, when necessary amount of posts been fetched */
  return fetchPaginatedPosts(subreddit, abortController, allPosts, data.after);
}

function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [status, setStatus] = useState('pending');

  /* fetch posts every time subreddit have been updated or component 've been mounted */
  useEffect(() => {
    const abortController = new AbortController();
    setStatus('pending');
    setPosts([]);
    fetchPaginatedPosts(subreddit, abortController)
      .then((postList) => {
        setAllPosts(postList);
        return groupPostsByDayHour(postList);
      })
      .then((newPostList) => {
        setPosts(newPostList);
        setStatus('resolved');
      })
      .catch(() => {
        /* don't fetch anything if component is not mounted */
        if (!abortController.signal.aborted) {
          setStatus('rejected');
        }
      });
    /* Abort all requests when component unmounted */
    return () => abortController.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subreddit]);
  /* return post List, loading status and errors if any */
  return {
    posts,
    isLoaded: status === 'resolved' || status === 'rejected',
    error: status === 'rejected' ? 'error' : '',
    allPosts,
  };
}
/* return an array of posts that have been posted during a specific week day and hour */
export function getPostsByDayHour(list, day, hour) {
  const newList = list.filter(
    (post) => post.postHour === hour && post.postDay === weekdays.indexOf(day),
  );
  return newList;
}

export default useFetchPosts;
