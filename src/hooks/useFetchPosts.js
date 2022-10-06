import { useEffect, useState } from 'react';

/* restructure post list from an api response */
function sortPostList(unsortedList) {
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

/* make an api call to fetch 500 top posts by subreddit of last year,
recursive function calls itself until 500 posts are fetched or no more posts available */
async function fetchPaginatedPosts(subreddit, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
  /* pagination parameter to add to fetch url after every request */
  if (after) {
    url += `&after=${after}`;
  }
  const response = await fetch(url);
  const { data } = await response.json();
  /* add posts to array of posts that have already been fetched */
  let allPosts = previousPosts.concat(data.children);
  const noMorePosts = data && data.dist < 100;
  const limitReached = allPosts.length >= 500;
  /* don't fetch if enough posts already fetched or no more posts available */
  if (noMorePosts || limitReached) {
    allPosts = sortPostList(allPosts);
    console.log(allPosts);
    return allPosts;
  }
  /* return fetchResults after multiple fetch calls, when necessary amount of posts been fetched */
  return fetchPaginatedPosts(subreddit, allPosts, data.after);
}

function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  /* fetch posts every time subreddit have been updated or component 've been mounted */
  useEffect(() => {
    setPosts([]);
    setIsLoaded(false);
    setError(null);
    fetchPaginatedPosts(subreddit)
      .then((newPosts) => {
        setPosts(newPosts);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, [subreddit]);
  /* return post List, loading status and errors if any */
  return {
    posts,
    isLoaded,
    error,
  };
}

export default useFetchPosts;
