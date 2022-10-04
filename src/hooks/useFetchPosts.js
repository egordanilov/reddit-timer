import { useEffect, useState } from 'react';

async function fetchPaginatedPosts(subreddit, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
  if (after) {
    url += `&after=${after}`;
  }
  const response = await fetch(url);
  const { data } = await response.json();
  const allPosts = previousPosts.concat(data.children);
  const noMorePosts = data && data.dist < 100;
  const limitReached = allPosts.length >= 500;
  if (noMorePosts || limitReached) {
    return allPosts;
  }
  return fetchPaginatedPosts(subreddit, allPosts, data.after);
}

function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

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
        setIsLoaded(true);
        setError(err);
      });
  }, [subreddit]);
  return {
    posts,
    isLoaded,
    error,
  };
}

export default useFetchPosts;
