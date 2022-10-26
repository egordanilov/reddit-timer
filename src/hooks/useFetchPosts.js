import { useEffect, useState } from 'react';

const AMOUNT_OF_POSTS_TO_FETCH = 500;
const MAX_AMOUNT_OF_POSTS_PER_PAGE = 100;

/** Restructure post list to get rid of unnecessary properties
 * This function is being called inside groupPostsByDayHour()
 * Accepts an array of 500 posts received from an API.
 * Return array of posts e.x [{
 * title: 'Post title", 
 * created_utc: 1636735695,
 * date: new Date(created_utc * 1000),
 * postDay: 2, postHour: 12,
 * upvotes: 151,
 * author: 'nickname',
 * num_comments: 300,
 * permalink: "/r/javascript/comments/qsfc94/askjs_why_are_classes_so_rare_in_modern_js/",
 * author_is_blocked: false
 * }, ...499 more posts]
 *@param {array} unsortedList
 *@returns {array}
 */
export function prettifyPostList(unsortedList) {
  /* map over api response and restructure and simplify post list  */
  const prettifiedPostsList = unsortedList.map((post) => {
    const postDate = new Date(post.data.created_utc * 1000);
    const postDay = postDate.getDay();
    const postHour = postDate.getHours();
    const structuredPost = {
      title: post.data.title,
      created_utc: post.data.created_utc,
      date: new Date(post.data.created_utc * 1000),
      postDay,
      postHour,
      upvotes: post.data.ups,
      author: post.data.author,
      num_comments: post.data.num_comments,
      permalink: post.data.permalink,
      author_is_blocked: post.data.author_is_blocked,
    };
    return structuredPost;
  });
  return prettifiedPostsList;
}

/* function to create an array of posts by day and hour.
Builds an object contains posts per day of week and hour to create the heatmap.
Each entry obj[dayOfWeek][hour] contains an array of posts
*/
/**
 * Create an array of posts by day and hour.
 * Create an nested array, 7 elements for each day of week,
 * each day of week has 24 elements for each hour
 * @param {array} posts
 * @returns {array}
 */
export function groupPostsByDayHour(posts) {
  const postsPerDay = Array(7)
    .fill()
    .map(() => Array(24).fill().map(() => []));
  const prettifiedPostList = prettifyPostList(posts);
  prettifiedPostList.forEach((post) => {
    const dayOfWeek = post.postDay;
    const hour = post.postHour;
    postsPerDay[dayOfWeek][hour].push(post);
  });
  return postsPerDay;
}

/**
 * The URL is the endpoint that we fetch, to get top posts of subreddit passed as a parameter.
 * Reddit API can only return 100 posts per request
 * Recursive function that calls itself,
 * until no more posts available or 500 fetched
 * @param {string} subreddit
 * @param {AbortController} abortController
 * @param {array} previousPosts=[]
 * @param {string} after=null received from API response, id of the last post from last fetch
 * @returns {array} array containing 500 posts received from fetching
 */
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
  const noMorePosts = data && data.dist < MAX_AMOUNT_OF_POSTS_PER_PAGE;
  const limitReached = allPosts.length >= AMOUNT_OF_POSTS_TO_FETCH;
  /* don't fetch if enough posts already fetched or no more posts available */
  if (noMorePosts || limitReached) {
    return allPosts;
  }
  /* return fetchResults after multiple fetch calls, when necessary amount of posts been fetched */
  return fetchPaginatedPosts(subreddit, abortController, allPosts, data.after);
}

/**
 * Custom Hook definition, takes subreddit,
 * returns an object containing Array[][] of posts sorted by day and hour,
 * loading status, error, and Array[] of posts
 * @param {string} subreddit
 * @returns {array, string, string, array}
 */
function useFetchPosts(subreddit) {
  const [postsByDayHour, setPostsByDayHour] = useState([]);
  const [status, setStatus] = useState('pending');

  /* fetch posts every time subreddit have been updated or component 've been mounted */
  useEffect(() => {
    const abortController = new AbortController();
    setStatus('pending');
    setPostsByDayHour([]);
    fetchPaginatedPosts(subreddit, abortController)
      .then((postList) => groupPostsByDayHour(postList))
      .then((postListByDayHour) => {
        setPostsByDayHour(postListByDayHour);
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
  /* final return */
  return {
    postsByDayHour,
    isLoaded: status === 'resolved' || status === 'rejected',
    error: status === 'rejected' ? 'error' : '',
  };
}

/**
 * Get an array of posts for day of the week and hour requested
 * @param {array} list
 * @param {number} day
 * @param {number} hour
 * @returns {array}
 */
export function getPostsByDayHour(list, day, hour) {
  const newList = list.filter(
    (post) => post.postHour === hour && post.postDay === day,
  );
  return newList;
}

export default useFetchPosts;
